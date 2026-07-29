// ===== 三角洲行动 · 改枪工坊 v2.0 =====
// 数据来源: deltaforcetools.gg (真实游戏配件属性)
// 数据文件: data/weapons.js, data/attachments.js, data/compatibility.js

/* ===================== 状态管理 ===================== */
let currentWeapon = null;
let sliderValues = {};
let analysisResult = null;
let tuningChoices = {};

/* ===================== 初始化 ===================== */
function init() {
    if (document.getElementById('weaponGrid')) {
        renderWeaponGrid();
        bindGlobalEvents();
    }
    if (document.getElementById('attachmentWiki')) {
        initAttachmentWiki();
    }
}

/* ===================== 武器选择 ===================== */
function renderWeaponGrid() {
    const grid = document.getElementById('weaponGrid');
    if (!grid) return;
    const filterType = document.querySelector('.filter-tab.active')?.dataset?.type || 'all';
    const searchTerm = document.getElementById('weaponSearch')?.value?.toLowerCase() || '';
    
    let filtered = WEAPONS;
    if (filterType !== 'all') {
        filtered = filtered.filter(w => w.type === filterType);
    }
    if (searchTerm) {
        filtered = filtered.filter(w => w.name.toLowerCase().includes(searchTerm));
    }
    
    const wc = document.getElementById('weaponCount');
    if (wc) wc.textContent = `(${filtered.length}把)`;
    
    grid.innerHTML = filtered.map(w => `
        <div class="weapon-card" data-id="${w.id}">
            <span class="icon">${w.emoji}</span>
            <div class="name">${w.name}</div>
            <div class="type">${w.type}</div>
            <div class="caliber">${w.caliber}</div>
            <div class="tags">${w.tags.map(t => `<span class="mini-tag">${t}</span>`).join('')}</div>
        </div>
    `).join('');
    
    grid.querySelectorAll('.weapon-card').forEach(card => {
        card.addEventListener('click', () => selectWeapon(card.dataset.id));
    });
}

function selectWeapon(id) {
    currentWeapon = WEAPONS.find(w => w.id === id);
    if (!currentWeapon) return;
    document.querySelectorAll('.weapon-card').forEach(c => {
        c.classList.toggle('active', c.dataset.id === id);
    });
    const infoCard = document.getElementById('weaponInfoCard');
    if (infoCard) infoCard.style.display = 'flex';
    const wIcon = document.getElementById('weaponIcon');
    if (wIcon) wIcon.textContent = currentWeapon.emoji;
    const wName = document.getElementById('weaponName');
    if (wName) wName.textContent = currentWeapon.name;
    const wType = document.getElementById('weaponType');
    if (wType) wType.textContent = `${currentWeapon.type} | ${currentWeapon.caliber || ''}`;
    const wTags = document.getElementById('weaponTags');
    if (wTags) wTags.innerHTML = currentWeapon.tags.map(t =>
        `<span class="tag ${t.includes('高') || t.includes('极') ? 'accent' : ''}">${t}</span>`
    ).join('');
    STAT_CONFIG.forEach(s => { sliderValues[s.key] = currentWeapon.baseStats[s.key]; });
    renderStatSliders();
    const tp = document.getElementById('tuningPanel');
    if (tp) tp.style.display = 'none';
    const rp = document.getElementById('resultPanel');
    if (rp) rp.style.display = 'none';
    const sp = document.getElementById('statsPanel');
    if (sp) sp.style.display = 'block';
    const ap = document.getElementById('actionPanel');
    if (ap) ap.style.display = 'flex';
    setTimeout(() => { if (sp) sp.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 100);
}

/* ===================== 属性滑块（可拖动） ===================== */
function renderStatSliders() {
    const list = document.getElementById('statsList');
    if (!list) return;
    list.innerHTML = STAT_CONFIG.map(stat => {
        const val = sliderValues[stat.key] ?? 0;
        const pct = (val / stat.max) * 100;
        return `
        <div class="stat-row" data-key="${stat.key}">
            <div class="stat-top">
                <div class="stat-label">
                    <i class="fas ${stat.icon} stat-icon" style="color:${stat.color}"></i>
                    <span>${stat.name}</span>
                </div>
                <div class="stat-value-box" id="val-${stat.key}">${val}</div>
            </div>
            <div class="slider-container" id="slider-wrap-${stat.key}">
                <div class="slider-track">
                    <div class="slider-fill" id="fill-${stat.key}" style="width:${pct}%;background:${stat.color}"></div>
                </div>
                <div class="slider-thumb" id="thumb-${stat.key}" style="left:${pct}%"></div>
            </div>
            <div class="stat-scale">
                <span>0</span><span>25</span><span>50</span><span>75</span><span>100</span>
            </div>
        </div>`;
    }).join('');
    STAT_CONFIG.forEach(stat => {
        const wrap = document.getElementById(`slider-wrap-${stat.key}`);
        const thumb = document.getElementById(`thumb-${stat.key}`);
        if (wrap && thumb) bindSliderDrag(wrap, thumb, stat);
    });
}

function bindSliderDrag(container, thumb, stat) {
    let dragging = false;
    const updateFromX = (clientX) => {
        const rect = container.getBoundingClientRect();
        let x = clientX - rect.left;
        let pct = Math.max(0, Math.min(1, x / rect.width));
        let val = Math.round(pct * stat.max);
        sliderValues[stat.key] = val;
        thumb.style.left = `${pct * 100}%`;
        const fill = document.getElementById(`fill-${stat.key}`);
        if (fill) fill.style.width = `${pct * 100}%`;
        const valBox = document.getElementById(`val-${stat.key}`);
        if (valBox) valBox.textContent = val;
    };
    const onDown = (e) => { dragging = true; thumb.style.cursor = 'grabbing'; updateFromX(e.clientX || e.touches[0].clientX); };
    const onMove = (e) => { if (!dragging) return; e.preventDefault(); updateFromX(e.clientX || (e.touches && e.touches[0].clientX)); };
    const onUp = () => { dragging = false; thumb.style.cursor = 'grab'; };
    thumb.addEventListener('mousedown', onDown);
    thumb.addEventListener('touchstart', onDown, { passive: false });
    container.addEventListener('mousedown', (e) => { if (e.target === thumb) return; updateFromX(e.clientX); });
    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', onMove, { passive: false });
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchend', onUp);
}

/* ===================== 全部拉满检测 ===================== */
function checkAllMax() {
    const allMax = STAT_CONFIG.every(s => sliderValues[s.key] === s.max);
    if (allMax) {
        showToast('温馨提示：全部属性同时拉满在游戏中几乎不可能实现哦，AI会尽力为你寻找最接近的方案~');
        return true;
    }
    return false;
}

/* ===================== AI 分析 & 选配 ===================== */
function analyzeAndBuild() {
    if (!currentWeapon) return;
    checkAllMax();
    const loading = document.getElementById('loadingMask');
    if (loading) loading.style.display = 'flex';
    setTimeout(() => {
        const result = runAIAlgorithm();
        analysisResult = result;
        tuningChoices = {};
        result.attachmentsOrder.forEach(att => {
            if (att.tuning && att.tuning.length > 0) tuningChoices[att.id] = 0;
        });
        renderResult(result);
        renderTuningPanel();
        const tp = document.getElementById('tuningPanel');
        if (tp) tp.style.display = 'block';
        const rp = document.getElementById('resultPanel');
        if (rp) rp.style.display = 'block';
        if (loading) loading.style.display = 'none';
        setTimeout(() => { if (rp) rp.scrollIntoView({ behavior: 'smooth' }); }, 100);
    }, 1200);
}

function runAIAlgorithm() {
    const base = { ...currentWeapon.baseStats };
    const target = { ...sliderValues };
    const theoretical = calcTheoreticalBounds(base);
    const adjustedTarget = {};
    const adjustedKeys = [];
    STAT_CONFIG.forEach(s => {
        const k = s.key;
        let t = target[k];
        if (t > theoretical.max[k]) { adjustedTarget[k] = theoretical.max[k]; adjustedKeys.push(k); }
        else if (t < theoretical.min[k]) { adjustedTarget[k] = theoretical.min[k]; adjustedKeys.push(k); }
        else { adjustedTarget[k] = t; }
    });
    const adjustments = STAT_CONFIG.map(s => ({
        key: s.key,
        delta: adjustedTarget[s.key] - base[s.key],
        absDelta: Math.abs(adjustedTarget[s.key] - base[s.key])
    })).sort((a, b) => b.absDelta - a.absDelta);
    let coreKeys = adjustments.filter(a => a.absDelta > 5).map(a => a.key);
    if (coreKeys.length === 0) coreKeys = [adjustments[0].key];
    if (coreKeys.length > 3) coreKeys = coreKeys.slice(0, 3);
    const diff = {};
    STAT_CONFIG.forEach(s => { diff[s.key] = adjustedTarget[s.key] - base[s.key]; });

    // 获取初始可见槽位，优先处理核心槽位（可能影响 slotVisibilityRules）
    let visibleSlots = getVisibleSlots(currentWeapon.id, {});
    const coreSlots = ['muzzle','barrel','optic','handguard_kit','handguard','mag','stock'];
    const depSlots = ['foregrip','rear_grip','functional','cheek_pad','upper_rail','left_rail','right_rail','upper_patch','left_patch','right_patch','rail_bipod','side_optic','upper_side_optic','tactical_device','riser_optic','lens_shade'];

    const selected = {};
    const order = [];

    // 处理核心槽位（优先处理会影响 slotVisibilityRules 的槽位）
    coreSlots.forEach(slot => {
        if (!visibleSlots.includes(slot)) return;
        const options = getCompatibleAttachments(currentWeapon.id, slot, selected);
        let best = options.find(o => o.id.endsWith('_none')) || options[0];
        let bestScore = -Infinity;
        options.forEach(opt => {
            let score = 0;
            coreKeys.forEach(k => {
                const add = parseStatValue(opt.stats[k]);
                if (diff[k] > 0 && add > 0) { score += add * 5; }
                else if (diff[k] < 0 && add < 0) { score += Math.abs(add) * 5; }
                else if (diff[k] > 0 && add < 0) { score -= Math.abs(add) * 3; }
            });
            STAT_CONFIG.filter(s => !coreKeys.includes(s.key)).forEach(s => {
                const k = s.key;
                const add = parseStatValue(opt.stats[k]);
                if (diff[k] > 0 && add > 0) { score += add * 0.5; }
                else if (diff[k] < 0 && add < 0) { score += Math.abs(add) * 0.5; }
            });
            const positiveCount = STAT_CONFIG.filter(s => parseStatValue(opt.stats[s.key]) > 0).length;
            score += positiveCount * 0.5;
            if (score > bestScore) { bestScore = score; best = opt; }
        });
        selected[slot] = best;
        if (!best.id.endsWith('_none')) order.push(best);
        STAT_CONFIG.forEach(s => { diff[s.key] -= parseStatValue(best.stats[s.key]); });
        // 更新可见槽位（slotVisibilityRules 会动态增减槽位）
        visibleSlots = getVisibleSlots(currentWeapon.id, selected);
    });

    // 处理依赖槽位
    depSlots.forEach(slot => {
        if (!visibleSlots.includes(slot)) return;
        const options = getCompatibleAttachments(currentWeapon.id, slot, selected);
        let best = options.find(o => o.id.endsWith('_none')) || options[0];
        let bestScore = -Infinity;
        options.forEach(opt => {
            let score = 0;
            coreKeys.forEach(k => {
                const add = parseStatValue(opt.stats[k]);
                if (diff[k] > 0 && add > 0) { score += add * 5; }
                else if (diff[k] < 0 && add < 0) { score += Math.abs(add) * 5; }
                else if (diff[k] > 0 && add < 0) { score -= Math.abs(add) * 3; }
            });
            STAT_CONFIG.filter(s => !coreKeys.includes(s.key)).forEach(s => {
                const k = s.key;
                const add = parseStatValue(opt.stats[k]);
                if (diff[k] > 0 && add > 0) { score += add * 0.5; }
                else if (diff[k] < 0 && add < 0) { score += Math.abs(add) * 0.5; }
            });
            const positiveCount = STAT_CONFIG.filter(s => parseStatValue(opt.stats[s.key]) > 0).length;
            score += positiveCount * 0.5;
            if (score > bestScore) { bestScore = score; best = opt; }
        });
        selected[slot] = best;
        if (!best.id.endsWith('_none')) order.push(best);
        STAT_CONFIG.forEach(s => { diff[s.key] -= parseStatValue(best.stats[s.key]); });
        visibleSlots = getVisibleSlots(currentWeapon.id, selected);
    });

    const finalStats = { ...base };
    Object.values(selected).forEach(att => {
        STAT_CONFIG.forEach(s => { finalStats[s.key] += parseStatValue(att.stats[s.key]); });
    });
    let matchTotal = 0;
    STAT_CONFIG.forEach(s => {
        const k = s.key;
        const ideal = adjustedTarget[k];
        const actual = clamp(finalStats[k], 0, 100);
        const err = Math.abs(actual - ideal) / 100;
        matchTotal += (1 - err);
    });
    const matchScore = Math.round((matchTotal / STAT_CONFIG.length) * 100);
    return { attachments: selected, attachmentsOrder: order, finalStats, adjustedTarget, adjustedKeys, matchScore, target };
}

function calcTheoreticalBounds(base) {
    const max = { ...base };
    const min = { ...base };
    const slots = getVisibleSlots(currentWeapon.id, {});
    const compatible = WEAPON_ATTACHMENT_COMPATIBILITY[currentWeapon.id] || {};
    slots.forEach(slot => {
        const compatibleAttIds = compatible[slot] || [];
        if (!ATTACHMENTS[slot]) return;
        ATTACHMENTS[slot].forEach(att => {
            if (compatibleAttIds.length > 0 && !compatibleAttIds.includes(att.id)) return;
            STAT_CONFIG.forEach(s => {
                const v = parseStatValue(att.stats[s.key]);
                if (v > 0) max[s.key] += v;
                if (v < 0) min[s.key] += v;
            });
        });
    });
    STAT_CONFIG.forEach(s => {
        max[s.key] += 5 * 8;
        min[s.key] -= 5 * 8;
        max[s.key] = clamp(max[s.key], 0, 100);
        min[s.key] = clamp(min[s.key], 0, 100);
    });
    return { max, min };
}

function validateBuild(result) {
    const compatible = WEAPON_ATTACHMENT_COMPATIBILITY[currentWeapon.id] || {};
    for (const [slot, att] of Object.entries(result.attachments)) {
        if (!att || att.id.endsWith('_none')) continue;
        const compatibleIds = compatible[slot] || [];
        if (compatibleIds.length > 0 && !compatibleIds.includes(att.id)) {
            console.warn(`[验证失败] ${currentWeapon.name} 不支持 ${att.name}`);
            return false;
        }
    }
    return true;
}

function recalcFinalStats() {
    if (!analysisResult) return;
    const stats = { ...currentWeapon.baseStats };
    Object.values(analysisResult.attachments).forEach(att => {
        if (!att) return;
        STAT_CONFIG.forEach(s => { stats[s.key] += parseStatValue(att.stats[s.key]); });
    });
    Object.values(analysisResult.attachments).forEach(att => {
        if (!att || att.id.endsWith('_none')) return;
        const tIdx = tuningChoices[att.id] ?? 0;
        const tune = att.tuning[tIdx];
        if (tune && tune.stats) {
            STAT_CONFIG.forEach(s => { stats[s.key] += parseStatValue(tune.stats[s.key]); });
        }
    });
    renderFinalStats(stats);
}

/* ===================== 精校面板 ===================== */
function renderTuningPanel() {
    const list = document.getElementById('tuningList');
    if (!list) return;
    if (!analysisResult || !analysisResult.attachments) {
        list.innerHTML = '<p style="color:var(--text-dim);font-size:13px;text-align:center;padding:20px;">请先进行AI分析</p>';
        return;
    }
    const items = [];
    for (const [slot, att] of Object.entries(analysisResult.attachments)) {
        if (!att || att.id.endsWith('_none')) continue;
        const chosenTuning = tuningChoices[att.id] ?? 0;
        items.push(`
        <div class="tuning-item" data-att-id="${att.id}">
            <div class="tuning-header">
                <span class="tuning-icon">${att.emoji}</span>
                <div>
                    <div class="tuning-name">${att.name}</div>
                    <div class="tuning-slot">${SLOT_NAMES[slot]}</div>
                </div>
            </div>
            <div class="tuning-options">
                ${att.tuning.map((t, idx) => `
                    <button class="tuning-btn ${idx === chosenTuning ? 'active' : ''}" data-idx="${idx}">${t.name}</button>
                `).join('')}
            </div>
        </div>`);
    }
    list.innerHTML = items.join('') || '<p style="color:var(--text-dim);font-size:13px;text-align:center;padding:20px;">无可调配件</p>';
    list.querySelectorAll('.tuning-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.tuning-item');
            const attId = item.dataset.attId;
            const idx = parseInt(btn.dataset.idx);
            tuningChoices[attId] = idx;
            item.querySelectorAll('.tuning-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            recalcFinalStats();
        });
    });
}

/* ===================== 结果渲染 ===================== */
function renderResult(result) {
    const ms = document.getElementById('matchScore');
    if (ms) ms.textContent = `匹配度 ${result.matchScore}%`;
    if (result.adjustedKeys.length > 0) {
        const names = result.adjustedKeys.map(k => STAT_CONFIG.find(s => s.key === k).name);
        showToast(`⚠️ ${names.join('、')} 超出理论极限，已取最接近值`);
    }
    const grid = document.getElementById('attachmentsGrid');
    if (!grid) return;
    const visibleSlots = getVisibleSlots(currentWeapon.id, result.attachments);
    grid.innerHTML = visibleSlots.map(slot => {
        const att = result.attachments[slot];
        if (!att || att.id.endsWith('_none')) return '';
        const bonuses = STAT_CONFIG.filter(s => {
            const v = parseStatValue(att.stats[s.key]);
            return v !== 0;
        }).map(s => {
            const v = parseStatValue(att.stats[s.key]);
            const sign = v > 0 ? '+' : '';
            const shortName = s.name.replace('控制','').replace('稳定性','稳').replace('操控速度','操控').replace('有效射程','射程').replace('腰射精度','腰射').replace('护甲伤害','穿甲');
            return `<span class="${v < 0 ? 'negative' : ''}">${sign}${v} ${shortName}</span>`;
        }).join('');
        return `
        <div class="attachment-item">
            <span class="att-icon">${att.emoji}</span>
            <div class="att-slot">${SLOT_NAMES[slot]}</div>
            <div class="att-name">${att.name}</div>
            <div class="att-bonus">${bonuses}</div>
        </div>`;
    }).join('');
    renderFinalStats(result.finalStats);
}

function renderFinalStats(stats) {
    const list = document.getElementById('finalStatsList');
    if (!list) return;
    list.innerHTML = STAT_CONFIG.map(s => {
        const val = clamp(Math.round(stats[s.key]), 0, 100);
        const targetVal = analysisResult ? analysisResult.adjustedTarget[s.key] : sliderValues[s.key];
        let cls = '';
        if (analysisResult) {
            const diff = val - targetVal;
            if (diff >= -2 && diff <= 2) cls = 'good';
            else if (diff < -5) cls = 'bad';
        }
        return `
        <div class="final-stat">
            <div class="final-stat-name">${s.name}</div>
            <div class="final-stat-value ${cls}" style="color:${cls==='' ? s.color : ''}">${val}</div>
        </div>`;
    }).join('');
}

/* ===================== 重置 ===================== */
function resetAll() {
    if (!currentWeapon) return;
    STAT_CONFIG.forEach(s => { sliderValues[s.key] = currentWeapon.baseStats[s.key]; });
    renderStatSliders();
    const rp = document.getElementById('resultPanel');
    if (rp) rp.style.display = 'none';
    const tp = document.getElementById('tuningPanel');
    if (tp) tp.style.display = 'none';
    analysisResult = null;
    tuningChoices = {};
}

/* ===================== 配件百科 ===================== */
function initAttachmentWiki() {
    renderWikiNav();
    renderWikiList('all');
    const searchInput = document.getElementById('wikiSearch');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            renderWikiList('all', e.target.value.trim().toLowerCase());
        });
    }
}

function renderWikiNav() {
    const nav = document.getElementById('wikiNav');
    if (!nav) return;
    const cats = [
        { key: 'all', name: '全部' },
        { key: 'muzzle', name: '枪口' },
        { key: 'barrel', name: '枪管' },
        { key: 'optic', name: '瞄具' },
        { key: 'handguard_kit', name: '护木套件' },
        { key: 'handguard', name: '护木' },
        { key: 'foregrip', name: '前握把' },
        { key: 'rear_grip', name: '后握把' },
        { key: 'mag', name: '弹匣' },
        { key: 'stock', name: '枪托' },
        { key: 'functional', name: '功能配件' }
    ];
    nav.innerHTML = cats.map(c => `<button class="wiki-nav-btn ${c.key==='all'?'active':''}" data-cat="${c.key}">${c.name}</button>`).join('');
    nav.querySelectorAll('.wiki-nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            nav.querySelectorAll('.wiki-nav-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const searchInput = document.getElementById('wikiSearch');
            const kw = searchInput ? searchInput.value.trim().toLowerCase() : '';
            renderWikiList(btn.dataset.cat, kw);
        });
    });
}

function renderWikiList(cat, keyword) {
    const list = document.getElementById('wikiList');
    if (!list) return;
    let items = [];
    const slots = ['muzzle','barrel','optic','handguard_kit','handguard','foregrip','rear_grip','mag','stock','functional'];
    slots.forEach(slot => {
        if (cat !== 'all' && cat !== slot) return;
        ATTACHMENTS[slot].forEach(att => {
            if (att.id.endsWith('_none')) return;
            if (keyword && !att.name.toLowerCase().includes(keyword)) return;
            const statsHtml = STAT_CONFIG.filter(s => {
                const v = parseStatValue(att.stats[s.key]);
                return v !== 0;
            }).map(s => {
                const v = parseStatValue(att.stats[s.key]);
                const color = v > 0 ? 'var(--success)' : 'var(--danger)';
                return `<span style="color:${color}">${v > 0 ? '+' : ''}${v} ${s.name}</span>`;
            }).join(' ') || '<span style="color:var(--text-dim)">无属性变化</span>';
            items.push(`
            <div class="wiki-item">
                <div class="wiki-header">
                    <span class="wiki-icon">${att.emoji}</span>
                    <div class="wiki-info">
                        <div class="wiki-name">${att.name}</div>
                        <div class="wiki-type">${SLOT_NAMES[slot]}</div>
                    </div>
                </div>
                <div class="wiki-stats">${statsHtml}</div>
            </div>`);
        });
    });
    list.innerHTML = items.join('') || '<p style="color:var(--text-dim);text-align:center;padding:40px;">未找到匹配的配件</p>';
}

/* ===================== 工具函数 ===================== */
function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }
function parseStatValue(val) {
    if (typeof val === 'number') return val;
    if (typeof val === 'string') {
        const match = val.match(/^([+-]?\d+)%?$/);
        if (match) return parseInt(match[1], 10);
    }
    return 0;
}
function showToast(msg) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

/* ===================== 事件绑定 ===================== */
function bindGlobalEvents() {
    const btnAnalyze = document.getElementById('btnAnalyze');
    if (btnAnalyze) btnAnalyze.addEventListener('click', analyzeAndBuild);
    const btnReset = document.getElementById('btnReset');
    if (btnReset) btnReset.addEventListener('click', resetAll);
    const searchInput = document.getElementById('weaponSearch');
    if (searchInput) searchInput.addEventListener('input', renderWeaponGrid);
    const filterTabs = document.getElementById('weaponFilterTabs');
    if (filterTabs) {
        filterTabs.addEventListener('click', (e) => {
            const tab = e.target.closest('.filter-tab');
            if (!tab) return;
            filterTabs.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderWeaponGrid();
        });
    }
}

/* ===================== 启动 ===================== */
init();