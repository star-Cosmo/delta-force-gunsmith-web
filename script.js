// ===== 三角洲行动 · 改枪工坊 v2.0 =====
// 数据来源: deltaforcetools.gg (真实游戏配件属性)
// 数据文件: data/weapons.js, data/attachments.js, data/compatibility.js

/* ===================== 状态管理 ===================== */
let currentWeapon = null;
let sliderValues = {};
let intendedValues = {};  // 用户期望值（不受联动限制），与 sliderValues（显示值）分开
let analysisResult = null;
let tuningChoices = {};
let ACCESSORY_IMAGES = {};
let cachedBounds = null;  // 缓存 calcTheoreticalBounds 结果，避免拖动时重复计算
let dynamicMaxValues = {};  // 联动后的动态上限，bindSliderDrag 使用此值钳制滑块
let manualBuild = {};  // 手动装配方案，用户可点击槽位自由更换配件

/* ===================== 初始化 ===================== */
function init() {
    fetch('data/accessory_images.json')
        .then(r => r.json())
        .then(data => { ACCESSORY_IMAGES = data; })
        .catch(() => {});
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
    cachedBounds = null;  // 清除缓存，新武器需要重新计算
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
    STAT_CONFIG.forEach(s => { sliderValues[s.key] = currentWeapon.baseStats[s.key]; intendedValues[s.key] = currentWeapon.baseStats[s.key]; });
    // 初始化动态上限为理论最大值
    const initBounds = calcTheoreticalBounds(currentWeapon.baseStats);
    STAT_CONFIG.forEach(s => { dynamicMaxValues[s.key] = initBounds.max[s.key]; });
    // 初始化手动装配方案为空
    manualBuild = {};
    renderStatSliders();
    const tp = document.getElementById('tuningPanel');
    if (tp) tp.style.display = 'none';
    const rp = document.getElementById('resultPanel');
    if (rp) rp.style.display = 'block';
    const sp = document.getElementById('statsPanel');
    if (sp) sp.style.display = 'block';
    const ap = document.getElementById('actionPanel');
    if (ap) ap.style.display = 'flex';
    // 显示空槽位网格
    renderSlotGrid();
    setTimeout(() => { if (sp) sp.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 100);
}

/* ===================== 属性滑块（可拖动） ===================== */
function renderStatSliders() {
    const list = document.getElementById('statsList');
    if (!list) return;

    // 过滤掉不可调整的属性（如护甲伤害对大多数武器不可调）
    const adjustableStats = STAT_CONFIG.filter(stat => {
        if (stat.key !== 'armor') return true;
        if (!currentWeapon) return false;
        const slots = getVisibleSlots(currentWeapon.id, {});
        const compatible = WEAPON_ATTACHMENT_COMPATIBILITY[currentWeapon.id] || {};
        return slots.some(slot => {
            const compatIds = compatible[slot] || [];
            if (!ATTACHMENTS[slot]) return false;
            return ATTACHMENTS[slot].some(att => {
                if (compatIds.length > 0 && !compatIds.includes(att.id)) return false;
                return parseStatValue(att.stats.armor) !== 0;
            });
        });
    });

    list.innerHTML = adjustableStats.map(stat => {
        const val = sliderValues[stat.key] ?? 0;
        const pct = (val / stat.max) * 100;
        const dynMax = dynamicMaxValues[stat.key] ?? stat.max;
        const base = currentWeapon ? currentWeapon.baseStats[stat.key] : 0;
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
                <span>${base}</span><span>${Math.round(dynMax * 0.5)}</span><span>${dynMax}</span>
            </div>
        </div>`;
    }).join('');

    adjustableStats.forEach(stat => {
        const wrap = document.getElementById(`slider-wrap-${stat.key}`);
        const thumb = document.getElementById(`thumb-${stat.key}`);
        if (wrap && thumb) bindSliderDrag(wrap, thumb, stat);
    });
}

function bindSliderDrag(container, thumb, stat) {
    let dragging = false;
    const updateFromX = (clientX) => {
        if (!currentWeapon) return;
        const rect = container.getBoundingClientRect();
        let x = clientX - rect.left;
        let pct = Math.max(0, Math.min(1, x / rect.width));
        let val = Math.round(pct * stat.max);
        // 钳制到动态上限（联动后的限制值）
        const dynMax = dynamicMaxValues[stat.key] ?? stat.max;
        val = Math.min(val, dynMax);
        intendedValues[stat.key] = val;
        sliderValues[stat.key] = val;
        // 更新当前滑块视觉
        const displayPct = (val / stat.max) * 100;
        thumb.style.left = `${displayPct}%`;
        const fill = document.getElementById(`fill-${stat.key}`);
        if (fill) fill.style.width = `${displayPct}%`;
        const valBox = document.getElementById(`val-${stat.key}`);
        if (valBox) valBox.textContent = val;
        // 联动更新其他滑块
        updateSliderRanges(stat.key);
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

function updateSliderRanges(draggedKey) {
    if (!currentWeapon) return;
    const base = currentWeapon.baseStats;
    cachedBounds = null;
    const bounds = calcTheoreticalBounds(base);
    
    // 动态上限直接使用理论最大值，与 AI 算法保持一致
    STAT_CONFIG.forEach(s => {
        const key = s.key;
        dynamicMaxValues[key] = bounds.max[key];
        
        // 钳制当前值到理论最大值
        if (intendedValues[key] > dynamicMaxValues[key]) {
            sliderValues[key] = dynamicMaxValues[key];
        } else {
            sliderValues[key] = intendedValues[key];
        }
        
        const wrap = document.getElementById(`slider-wrap-${key}`);
        if (!wrap) return;
        const pct = Math.min(100, Math.max(0, (sliderValues[key] / s.max) * 100));
        const thumb = document.getElementById(`thumb-${key}`);
        const fill = document.getElementById(`fill-${key}`);
        const valBox = document.getElementById(`val-${key}`);
        if (thumb) thumb.style.left = `${pct}%`;
        if (fill) fill.style.width = `${pct}%`;
        if (valBox) valBox.textContent = sliderValues[key];
        
        // 更新刻度显示动态上限
        const scale = document.querySelector(`.stat-row[data-key="${key}"] .stat-scale`);
        if (scale) {
            scale.innerHTML = `<span>${base[key]}</span><span>${Math.round(dynamicMaxValues[key] * 0.5)}</span><span>${dynamicMaxValues[key]}</span>`;
        }
    });
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
        try {
            const result = runAIAlgorithm();
            if (!result) { if (loading) loading.style.display = 'none'; return; }
            analysisResult = result;
            tuningChoices = {};
            result.attachmentsOrder.forEach(att => {
                if (att.tuning && att.tuning.length > 0) tuningChoices[att.id] = 0;
            });
            // 将 AI 结果同步到手动装配方案
            manualBuild = { ...result.attachments };
            renderResult(result);
            renderTuningPanel();
            const tp = document.getElementById('tuningPanel');
            if (tp) tp.style.display = 'block';
            const rp = document.getElementById('resultPanel');
            if (rp) rp.style.display = 'block';
            if (loading) loading.style.display = 'none';
            setTimeout(() => { if (rp) rp.scrollIntoView({ behavior: 'smooth' }); }, 100);
        } catch (e) {
            console.error('AI分析异常:', e);
            showToast('AI选配出错，请重试');
            if (loading) loading.style.display = 'none';
        }
    }, 100);
}

function runAIAlgorithm() {
    try {
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
        if (!options || !Array.isArray(options) || options.length === 0) return;
        let best = options.find(o => o && o.id && o.id.endsWith('_none')) || options[0];
        if (!best || !best.id) return;
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
        if (!best || !best.id) return;
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
        if (!options || !Array.isArray(options) || options.length === 0) return;
        let best = options.find(o => o && o.id && o.id.endsWith('_none')) || options[0];
        if (!best || !best.id) return;
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
        if (!best || !best.id) return;
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
        const actual = Math.max(0, finalStats[k]);
        const err = Math.abs(actual - ideal) / 100;
        matchTotal += (1 - err);
    });
    const matchScore = Math.round((matchTotal / STAT_CONFIG.length) * 100);
    return { attachments: selected, attachmentsOrder: order, finalStats, adjustedTarget, adjustedKeys, matchScore, target };
    } catch (e) {
        console.error('AI算法错误:', e);
        showToast('AI选配出错，请重试');
        return null;
    }
}

function calcTheoreticalBounds(base) {
    if (cachedBounds) return cachedBounds;
    const max = { ...base };
    const min = { ...base };
    const compatible = WEAPON_ATTACHMENT_COMPATIBILITY[currentWeapon.id] || {};
    // 使用所有槽位（包括 defaultHidden 中的），因为 hidden 槽位可以通过装备特定配件解锁
    // 排除 EXT 占位符和元数据字段
    const allSlots = Object.keys(compatible).filter(k => {
        if (['slotVisibilityRules', 'defaultHidden'].includes(k)) return false;
        if (compatible[k] === EXT) return false;
        return true;
    });
    allSlots.forEach(slot => {
        const compatibleAttIds = compatible[slot] || [];
        if (!ATTACHMENTS[slot]) return;
        // 每个槽位取该属性的最大/最小值（而非求和）
        const slotMax = {};
        const slotMin = {};
        STAT_CONFIG.forEach(s => { slotMax[s.key] = 0; slotMin[s.key] = 0; });
        ATTACHMENTS[slot].forEach(att => {
            if (compatibleAttIds.length > 0 && !compatibleAttIds.includes(att.id)) return;
            STAT_CONFIG.forEach(s => {
                const v = parseStatValue(att.stats[s.key]);
                if (v > slotMax[s.key]) slotMax[s.key] = v;
                if (v < slotMin[s.key]) slotMin[s.key] = v;
            });
        });
        STAT_CONFIG.forEach(s => {
            max[s.key] += slotMax[s.key];
            min[s.key] += slotMin[s.key];
        });
    });
    STAT_CONFIG.forEach(s => {
        max[s.key] += 5;
        min[s.key] -= 5;
        max[s.key] = Math.max(0, max[s.key]);
        min[s.key] = Math.max(0, min[s.key]);
    });
    cachedBounds = { max, min };
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
                <span class="tuning-icon">${getAttachmentIconHTML(att.name, att.emoji, 32)}</span>
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
    renderSlotGrid();
    renderFinalStats(result.finalStats);
}

/* ===================== 槽位网格渲染 ===================== */
function hasRealAttachments(slot) {
    // 检查某个槽位是否有可用的真实配件（非_none）
    if (!currentWeapon) return false;
    const options = getCompatibleAttachments(currentWeapon.id, slot, manualBuild);
    if (!options || !Array.isArray(options)) return false;
    return options.some(a => a && a.id && !a.id.endsWith('_none'));
}

function renderSlotGrid() {
    const grid = document.getElementById('attachmentsGrid');
    if (!grid || !currentWeapon) return;
    const visibleSlots = getVisibleSlots(currentWeapon.id, manualBuild);
    
    // 过滤：只显示已装备的槽位，或有可用配件的槽位
    const displaySlots = visibleSlots.filter(slot => {
        const att = manualBuild[slot];
        if (att && att.id && !att.id.endsWith('_none')) return true; // 已装备，始终显示
        // 检查是否有可装备的配件（getCompatibleAttachments 已处理跨分类查找）
        const options = getCompatibleAttachments(currentWeapon.id, slot, manualBuild);
        if (!options || !Array.isArray(options)) return false;
        return options.some(a => a && a.id && !a.id.endsWith('_none'));
    });
    
    // 核心槽位排前面
    const coreSlots = ['optic','muzzle','barrel','mag','handguard_kit','handguard','bolt','functional'];
    const sortedSlots = [
        ...coreSlots.filter(s => displaySlots.includes(s)),
        ...displaySlots.filter(s => !coreSlots.includes(s))
    ];
    
    grid.innerHTML = sortedSlots.map(slot => {
        const att = manualBuild[slot];
        const isFilled = att && att.id && !att.id.endsWith('_none');
        
        if (isFilled) {
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
            <div class="attachment-item filled" data-slot="${slot}">
                <span class="att-icon">${getAttachmentIconHTML(att.name, att.emoji, 48)}</span>
                <div class="att-slot">${SLOT_NAMES[slot] || slot}</div>
                <div class="att-name">${att.name}</div>
                <div class="att-bonus">${bonuses}</div>
                <div class="att-actions">
                    <button class="btn-att-action" data-action="change" data-slot="${slot}">更换</button>
                    <button class="btn-att-action danger" data-action="remove" data-slot="${slot}">卸下</button>
                </div>
            </div>`;
        } else {
            return `
            <div class="attachment-item empty" data-slot="${slot}" data-action="pick">
                <span class="empty-slot-icon">➕</span>
                <div class="att-slot">${SLOT_NAMES[slot] || slot}</div>
                <div class="empty-hint">点击选择配件</div>
            </div>`;
        }
    }).join('');
    
    // 绑定点击事件
    grid.querySelectorAll('.attachment-item.empty').forEach(item => {
        item.addEventListener('click', () => openSlotPicker(item.dataset.slot));
    });
    grid.querySelectorAll('.attachment-item.filled').forEach(item => {
        item.addEventListener('click', () => openSlotPicker(item.dataset.slot));
    });
    grid.querySelectorAll('.btn-att-action[data-action="change"]').forEach(btn => {
        btn.addEventListener('click', (e) => { e.stopPropagation(); openSlotPicker(btn.dataset.slot); });
    });
    grid.querySelectorAll('.btn-att-action[data-action="remove"]').forEach(btn => {
        btn.addEventListener('click', (e) => { e.stopPropagation(); unequipAttachment(btn.dataset.slot); });
    });
    
    // 更新最终属性
    recalcFinalStatsFromBuild();
}

/* ===================== 槽位选择弹窗 ===================== */
function openSlotPicker(slot) {
    if (!currentWeapon) return;
    const overlay = document.getElementById('slotPickerOverlay');
    const title = document.getElementById('slotPickerTitle');
    const list = document.getElementById('slotPickerList');
    const searchInput = document.getElementById('slotPickerSearch');
    if (!overlay || !title || !list) return;
    
    const slotName = SLOT_NAMES[slot] || slot;
    title.textContent = `选择 ${slotName}`;
    const options = getCompatibleAttachments(currentWeapon.id, slot, manualBuild);
    const currentAtt = manualBuild[slot];
    
    // 存储当前槽位和选项，供搜索过滤使用
    overlay._pickerSlot = slot;
    overlay._pickerOptions = options;
    overlay._pickerCurrent = currentAtt;
    
    if (searchInput) searchInput.value = '';
    renderSlotPickerList(options, currentAtt);
    
    overlay.style.display = 'flex';
    if (searchInput) setTimeout(() => searchInput.focus(), 100);
}

function renderSlotPickerList(options, currentAtt) {
    const list = document.getElementById('slotPickerList');
    if (!list) return;
    
    if (!options || options.length === 0) {
        list.innerHTML = '<div class="slot-picker-empty">该槽位暂无可用配件</div>';
        return;
    }
    
    // 排序：当前选中的排最前，非_none的排前面，_none的排最后
    const sorted = [...options].sort((a, b) => {
        if (currentAtt && a.id === currentAtt.id) return -1;
        if (currentAtt && b.id === currentAtt.id) return 1;
        if (a.id.endsWith('_none') && !b.id.endsWith('_none')) return 1;
        if (!a.id.endsWith('_none') && b.id.endsWith('_none')) return -1;
        return 0;
    });
    
    list.innerHTML = sorted.map(att => {
        const isSelected = currentAtt && currentAtt.id === att.id;
        const isNone = att.id.endsWith('_none');
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
        <div class="slot-picker-item ${isSelected ? 'selected' : ''}" data-att-id="${att.id}">
            <span class="picker-icon">${getAttachmentIconHTML(att.name, att.emoji, 36)}</span>
            <div class="picker-info">
                <div class="picker-name">${isNone ? '卸下配件（空）' : att.name}</div>
                ${isNone ? '<div class="picker-none">恢复默认状态</div>' : (bonuses ? `<div class="picker-stats">${bonuses}</div>` : '<div class="picker-none">无属性变化</div>')}
            </div>
            ${isSelected ? '<span class="picker-check">✓</span>' : ''}
        </div>`;
    }).join('');
    
    // 绑定选项点击
    list.querySelectorAll('.slot-picker-item').forEach(item => {
        item.addEventListener('click', () => {
            const overlay = document.getElementById('slotPickerOverlay');
            const slot = overlay._pickerSlot;
            equipAttachment(slot, item.dataset.attId);
            closeSlotPicker();
        });
    });
}

function filterSlotPickerList(keyword) {
    const overlay = document.getElementById('slotPickerOverlay');
    if (!overlay) return;
    const options = overlay._pickerOptions || [];
    const currentAtt = overlay._pickerCurrent;
    const kw = keyword.toLowerCase();
    
    if (!kw) {
        renderSlotPickerList(options, currentAtt);
        return;
    }
    
    const filtered = options.filter(att => {
        if (att.id.endsWith('_none')) return false; // 搜索时隐藏"卸下"选项
        return att.name.toLowerCase().includes(kw);
    });
    
    if (filtered.length === 0) {
        // 如果搜不到，显示所有选项
        const list = document.getElementById('slotPickerList');
        if (list) list.innerHTML = '<div class="slot-picker-empty">未找到匹配配件，请尝试其他关键词</div>';
        return;
    }
    
    renderSlotPickerList(filtered, currentAtt);
}

function closeSlotPicker() {
    const overlay = document.getElementById('slotPickerOverlay');
    if (overlay) overlay.style.display = 'none';
}

function equipAttachment(slot, attId) {
    if (!currentWeapon) return;
    
    // 先从 ATTACHMENTS[slot] 查找，找不到则遍历所有分类
    let att = null;
    const attCategory = ATTACHMENTS[slot];
    if (attCategory) {
        att = attCategory.find(a => a.id === attId);
    }
    if (!att) {
        // 遍历所有 ATTACHMENTS 分类查找
        for (const key of Object.keys(ATTACHMENTS)) {
            const catAtts = ATTACHMENTS[key];
            if (Array.isArray(catAtts)) {
                const found = catAtts.find(a => a.id === attId);
                if (found) { att = found; break; }
            }
        }
    }
    if (!att) return;
    
    manualBuild[slot] = att;
    
    // 更新可见槽位（可能触发 slotVisibilityRules）
    const visibleSlots = getVisibleSlots(currentWeapon.id, manualBuild);
    // 清理不可见槽位中的配件
    Object.keys(manualBuild).forEach(s => {
        if (!visibleSlots.includes(s)) delete manualBuild[s];
    });
    
    renderSlotGrid();
}

function unequipAttachment(slot) {
    // 从 getCompatibleAttachments 获取该槽位的所有选项，找到 _none 空配件
    if (!currentWeapon) return;
    const options = getCompatibleAttachments(currentWeapon.id, slot, manualBuild);
    if (!options || !Array.isArray(options)) return;
    const noneAtt = options.find(a => a && a.id && a.id.endsWith('_none'));
    if (!noneAtt) return;
    equipAttachment(slot, noneAtt.id);
}

function recalcFinalStatsFromBuild() {
    if (!currentWeapon) return;
    const stats = { ...currentWeapon.baseStats };
    Object.values(manualBuild).forEach(att => {
        if (!att || att.id.endsWith('_none')) return;
        STAT_CONFIG.forEach(s => {
            stats[s.key] += parseStatValue(att.stats[s.key]);
        });
    });
    renderFinalStats(stats);
}

function renderFinalStats(stats) {
    const list = document.getElementById('finalStatsList');
    if (!list) return;
    list.innerHTML = STAT_CONFIG.map(s => {
        const val = Math.max(0, Math.round(stats[s.key]));
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
    STAT_CONFIG.forEach(s => { sliderValues[s.key] = currentWeapon.baseStats[s.key]; intendedValues[s.key] = currentWeapon.baseStats[s.key]; });
    manualBuild = {};
    analysisResult = null;
    tuningChoices = {};
    cachedBounds = null;
    const initBounds = calcTheoreticalBounds(currentWeapon.baseStats);
    STAT_CONFIG.forEach(s => { dynamicMaxValues[s.key] = initBounds.max[s.key]; });
    renderStatSliders();
    renderSlotGrid();
    const rp = document.getElementById('resultPanel');
    if (rp) rp.style.display = 'block';
    const tp = document.getElementById('tuningPanel');
    if (tp) tp.style.display = 'none';
    const ms = document.getElementById('matchScore');
    if (ms) ms.textContent = '手动装配';
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
                    <span class="wiki-icon">${getAttachmentIconHTML(att.name, att.emoji, 48)}</span>
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
function getAttachmentIconHTML(name, emoji, size) {
    const imgUrl = ACCESSORY_IMAGES[name];
    if (imgUrl) {
        return `<img src="${imgUrl}" alt="${name}" onerror="this.style.display='none';this.nextElementSibling.style.display='block'" style="width:${size}px;height:${size}px;object-fit:contain;border-radius:4px" loading="lazy"><span style="display:none">${emoji}</span>`;
    }
    return `<span>${emoji}</span>`;
}
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
    // 槽位选择弹窗关闭
    const slotPickerClose = document.getElementById('slotPickerClose');
    if (slotPickerClose) slotPickerClose.addEventListener('click', closeSlotPicker);
    const slotPickerOverlay = document.getElementById('slotPickerOverlay');
    if (slotPickerOverlay) {
        slotPickerOverlay.addEventListener('click', (e) => {
            if (e.target === slotPickerOverlay) closeSlotPicker();
        });
    }
    // 槽位选择弹窗搜索
    const slotPickerSearch = document.getElementById('slotPickerSearch');
    if (slotPickerSearch) {
        slotPickerSearch.addEventListener('input', (e) => {
            filterSlotPickerList(e.target.value);
        });
    }
}

/* ===================== 启动 ===================== */
init();