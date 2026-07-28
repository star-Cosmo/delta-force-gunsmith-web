// ===== 三角洲行动 · 改枪工坊 v1.0 =====

/* ===================== 数据库 ===================== */

// 属性配置
const STAT_CONFIG = [
    { key: 'recoil',   name: '后坐力控制', icon: 'fa-arrows-alt-v',   color: '#ef4444', max: 100 },
    { key: 'stability',name: '据枪稳定性', icon: 'fa-bullseye',       color: '#3b82f6', max: 100 },
    { key: 'control',  name: '操控速度',   icon: 'fa-running',        color: '#22c55e', max: 100 },
    { key: 'range',    name: '有效射程',   icon: 'fa-ruler-horizontal',color: '#f59e0b', max: 100 },
    { key: 'hipfire',  name: '腰射精度',   icon: 'fa-crosshairs',     color: '#a855f7', max: 100 },
    { key: 'armor',    name: '护甲伤害',   icon: 'fa-shield-alt',     color: '#e67e22', max: 100 }
];

// 武器数据库
const WEAPONS = [
    {
        id: 'm4a1', name: 'M4A1', type: '突击步枪', emoji: '🔫',
        tags: ['均衡','易操控'],
        baseStats: { recoil: 45, stability: 40, control: 55, range: 50, hipfire: 35, armor: 60 }
    },
    {
        id: 'akm', name: 'AKM', type: '突击步枪', emoji: '🔫',
        tags: ['高伤害','后坐大'],
        baseStats: { recoil: 30, stability: 28, control: 42, range: 58, hipfire: 28, armor: 75 }
    },
    {
        id: 'k416', name: 'K416', type: '突击步枪', emoji: '🔫',
        tags: ['高射速','近战强'],
        baseStats: { recoil: 48, stability: 42, control: 52, range: 45, hipfire: 38, armor: 55 }
    },
    {
        id: 'scarh', name: 'SCAR-H', type: '战斗步枪', emoji: '🔫',
        tags: ['高射程','单发稳'],
        baseStats: { recoil: 38, stability: 32, control: 38, range: 72, hipfire: 22, armor: 80 }
    },
    {
        id: 'mp5', name: 'MP5', type: '冲锋枪', emoji: '🔫',
        tags: ['高操控','腰射强'],
        baseStats: { recoil: 55, stability: 48, control: 68, range: 25, hipfire: 62, armor: 40 }
    },
    {
        id: 'm14', name: 'M14', type: '射手步枪', emoji: '🔫',
        tags: ['超远距','高杀伤'],
        baseStats: { recoil: 28, stability: 30, control: 30, range: 88, hipfire: 18, armor: 85 }
    },
    {
        id: 'awm', name: 'AWM', type: '栓动步枪', emoji: '🎯',
        tags: ['一击必杀','超远距'],
        baseStats: { recoil: 20, stability: 25, control: 22, range: 95, hipfire: 10, armor: 95 }
    },
    {
        id: 'vector', name: 'Vector', type: '冲锋枪', emoji: '🔫',
        tags: ['极快射速','近战王'],
        baseStats: { recoil: 50, stability: 38, control: 60, range: 20, hipfire: 55, armor: 35 }
    }
];

// 配件数据库（按槽位分组）
const ATTACHMENTS = {
    muzzle: [
        { id:'mu_comp',   name:'制退器',      emoji:'🔧', stats:{recoil:+10, stability:+4, control:-3, range:0, hipfire:0, armor:0}, tuning:[{name:'极限控后', stats:{recoil:+4, control:-3}},{name:'平衡后坐', stats:{recoil:+2, control:+1}}] },
        { id:'mu_flash',  name:'消焰器',      emoji:'🔥', stats:{recoil:+5, stability:+6, control:-1, range:0, hipfire:0, armor:0}, tuning:[{name:'稳定优先', stats:{stability:+3, control:-2}},{name:'均衡调整', stats:{stability:+2, control:+1}}] },
        { id:'mu_supp',   name:'消音器',      emoji:'🤫', stats:{recoil:+3, stability:+2, control:-4, range:+5, hipfire:0, armor:-5}, tuning:[{name:'隐蔽远射', stats:{range:+3, control:-2}},{name:'近战隐蔽', stats:{hipfire:+3, control:-2}}] },
        { id:'mu_brake',  name:'枪口制退器V2',emoji:'⚙️', stats:{recoil:+12, stability:+2, control:-5, range:0, hipfire:0, armor:0}, tuning:[{name:'极限压制', stats:{recoil:+5, control:-4}},{name:'压制平衡', stats:{recoil:+3, stability:+2}}] },
        { id:'mu_none',   name:'无',          emoji:'❌', stats:{}, tuning:[] }
    ],
    barrel: [
        { id:'br_long',   name:'加长枪管',    emoji:'📏', stats:{recoil:+3, stability:+2, control:-6, range:+12, hipfire:-5, armor:0}, tuning:[{name:'极限射程', stats:{range:+5, control:-3}},{name:'射程稳定', stats:{range:+3, stability:+2}}] },
        { id:'br_short',  name:'短枪管',      emoji:'📐', stats:{recoil:-2, stability:-1, control:+10, range:-8, hipfire:+8, armor:0}, tuning:[{name:'极限操控', stats:{control:+5, range:-3}},{name:'腰射特化', stats:{hipfire:+5, stability:-2}}] },
        { id:'br_std',    name:'标准枪管',    emoji:'📍', stats:{recoil:+2, stability:+1, control:-2, range:+4, hipfire:0, armor:0}, tuning:[{name:'标准强化', stats:{recoil:+2, range:+2}},{name:'均衡标准', stats:{recoil:+1, stability:+1, control:+1}}] },
        { id:'br_heavy',  name:'重型枪管',    emoji:'🧱', stats:{recoil:+8, stability:+6, control:-8, range:+6, hipfire:-8, armor:0}, tuning:[{name:'极限稳定', stats:{recoil:+4, stability:+3}},{name:'稳定操控', stats:{recoil:+2, stability:+2, control:-2}}] },
        { id:'br_none',   name:'无',          emoji:'❌', stats:{}, tuning:[] }
    ],
    optic: [
        { id:'op_red',    name:'红点瞄准镜',  emoji:'🔴', stats:{recoil:0, stability:+5, control:+3, range:0, hipfire:-3, armor:0}, tuning:[{name:'快速瞄准', stats:{control:+3, hipfire:+2}},{name:'稳定瞄准', stats:{stability:+3, control:+1}}] },
        { id:'op_holo',   name:'全息瞄准镜',  emoji:'⭕', stats:{recoil:0, stability:+8, control:+1, range:0, hipfire:-5, armor:0}, tuning:[{name:'极限稳定', stats:{stability:+4, control:-2}},{name:'腰射补偿', stats:{stability:+2, hipfire:+2}}] },
        { id:'op_3x',     name:'3倍镜',       emoji:'🔍', stats:{recoil:0, stability:+6, control:-4, range:+8, hipfire:-10, armor:0}, tuning:[{name:'远射特化', stats:{range:+4, stability:+2}},{name:'中距平衡', stats:{range:+2, control:+1}}] },
        { id:'op_sniper', name:'狙击镜',      emoji:'🎯', stats:{recoil:0, stability:+10, control:-10, range:+15, hipfire:-15, armor:0}, tuning:[{name:'极限远距', stats:{range:+6, stability:+2}},{name:'狙击平衡', stats:{range:+3, stability:+3}}] },
        { id:'op_iron',   name:'机械瞄具',    emoji:'👁️', stats:{recoil:0, stability:+2, control:+8, range:-3, hipfire:+5, armor:0}, tuning:[{name:'极限操控', stats:{control:+4, range:-2}},{name:'腰射强化', stats:{hipfire:+4, control:+2}}] },
        { id:'op_none',   name:'无',          emoji:'❌', stats:{}, tuning:[] }
    ],
    grip: [
        { id:'gr_vert',   name:'垂直握把',    emoji:'🔽', stats:{recoil:+8, stability:+5, control:+2, range:0, hipfire:-2, armor:0}, tuning:[{name:'极限控后', stats:{recoil:+4, control:-1}},{name:'据枪稳定', stats:{stability:+3, recoil:+2}}] },
        { id:'gr_ang',    name:'斜角握把',    emoji:'📐', stats:{recoil:+4, stability:+2, control:+8, range:0, hipfire:+2, armor:0}, tuning:[{name:'极限操控', stats:{control:+5, recoil:-2}},{name:'快速据枪', stats:{control:+3, hipfire:+2}}] },
        { id:'gr_stub',   name:'短握把',      emoji:'🔹', stats:{recoil:+2, stability:+1, control:+12, range:0, hipfire:+5, armor:0}, tuning:[{name:'极限速度', stats:{control:+6, stability:-2}},{name:'腰射特化', stats:{hipfire:+5, control:+2}}] },
        { id:'gr_bipod',  name:'两脚架',      emoji:'🦵', stats:{recoil:+10, stability:+12, control:-10, range:+3, hipfire:-8, armor:0}, tuning:[{name:'极限稳定', stats:{recoil:+5, stability:+4}},{name:'架点特化', stats:{stability:+6, control:-4}}] },
        { id:'gr_none',   name:'无',          emoji:'❌', stats:{}, tuning:[] }
    ],
    magazine: [
        { id:'ma_ext',    name:'扩容弹匣',    emoji:'📦', stats:{recoil:0, stability:0, control:-5, range:0, hipfire:0, armor:0}, tuning:[{name:'快速换弹', stats:{control:+3, stability:-1}},{name:'极限扩容', stats:{control:-2, stability:+1}}] },
        { id:'ma_fast',   name:'快速弹匣',    emoji:'⚡', stats:{recoil:0, stability:0, control:+8, range:0, hipfire:0, armor:0}, tuning:[{name:'极限换弹', stats:{control:+5, recoil:-2}},{name:'平衡换弹', stats:{control:+3, stability:+1}}] },
        { id:'ma_drum',   name:'弹鼓',        emoji:'🥁', stats:{recoil:-3, stability:-5, control:-12, range:0, hipfire:-5, armor:0}, tuning:[{name:'稳定弹鼓', stats:{stability:+3, control:-3}},{name:'腰射弹鼓', stats:{hipfire:+4, stability:-2}}] },
        { id:'ma_ap',     name:'穿甲弹匣',    emoji:'💥', stats:{recoil:+2, stability:0, control:-3, range:0, hipfire:0, armor:+15}, tuning:[{name:'极限穿甲', stats:{armor:+6, control:-3}},{name:'穿甲平衡', stats:{armor:+3, recoil:+2}}] },
        { id:'ma_std',    name:'标准弹匣',    emoji:'📍', stats:{}, tuning:[{name:'标准强化', stats:{control:+2}},{name:'稳定标准', stats:{stability:+2}}] }
    ],
    stock: [
        { id:'st_std',    name:'标准枪托',    emoji:'📍', stats:{recoil:+3, stability:+3, control:+2, range:0, hipfire:0, armor:0}, tuning:[{name:'均衡强化', stats:{recoil:+2, stability:+2}},{name:'操控强化', stats:{control:+3, recoil:+1}}] },
        { id:'st_tact',   name:'战术枪托',    emoji:'🎖️', stats:{recoil:+5, stability:+2, control:+8, range:0, hipfire:+3, armor:0}, tuning:[{name:'极限操控', stats:{control:+5, stability:-2}},{name:'快速反应', stats:{control:+3, hipfire:+3}}] },
        { id:'st_heavy',  name:'重型枪托',    emoji:'🧱', stats:{recoil:+10, stability:+10, control:-8, range:+2, hipfire:-5, armor:0}, tuning:[{name:'极限稳定', stats:{recoil:+5, stability:+4}},{name:'据枪特化', stats:{stability:+6, recoil:+2}}] },
        { id:'st_fold',   name:'折叠枪托',    emoji:'📂', stats:{recoil:-2, stability:-2, control:+12, range:-3, hipfire:+8, armor:0}, tuning:[{name:'极限便携', stats:{control:+6, hipfire:+3}},{name:'腰射便携', stats:{hipfire:+5, control:+3}}] },
        { id:'st_none',   name:'无枪托',      emoji:'❌', stats:{recoil:-5, stability:-5, control:+15, range:-5, hipfire:+10, armor:0}, tuning:[{name:'极限速度', stats:{control:+8, hipfire:+3}},{name:'腰射极限', stats:{hipfire:+6, control:+4}}] }
    ]
};

// 配件槽位名称映射
const SLOT_NAMES = {
    muzzle: '枪口', barrel: '枪管', optic: '瞄具',
    grip: '握把', magazine: '弹匣', stock: '枪托'
};

/* ===================== 状态管理 ===================== */

let currentWeapon = null;
let targetStats = {};
let sliderValues = {};     // 用户拖动的目标值
let installedAttachments = {}; // { slot: attachmentObj }
let tuningChoices = {};    // { attachmentId: tuningIndex }
let analysisResult = null;

/* ===================== 初始化 ===================== */

function init() {
    renderWeaponCarousel();
    bindGlobalEvents();
    // 默认不选中任何武器
}

/* ===================== 武器选择 ===================== */

function renderWeaponCarousel() {
    const carousel = document.getElementById('weaponCarousel');
    carousel.innerHTML = WEAPONS.map(w => `
        <div class="weapon-card" data-id="${w.id}">
            <span class="icon">${w.emoji}</span>
            <div class="name">${w.name}</div>
            <div class="type">${w.type}</div>
        </div>
    `).join('');

    carousel.querySelectorAll('.weapon-card').forEach(card => {
        card.addEventListener('click', () => selectWeapon(card.dataset.id));
    });
}

function selectWeapon(id) {
    currentWeapon = WEAPONS.find(w => w.id === id);
    if (!currentWeapon) return;

    // UI激活状态
    document.querySelectorAll('.weapon-card').forEach(c => {
        c.classList.toggle('active', c.dataset.id === id);
    });

    // 显示武器信息卡
    const infoCard = document.getElementById('weaponInfoCard');
    infoCard.style.display = 'flex';
    document.getElementById('weaponIcon').textContent = currentWeapon.emoji;
    document.getElementById('weaponName').textContent = currentWeapon.name;
    document.getElementById('weaponType').textContent = currentWeapon.type;
    document.getElementById('weaponTags').innerHTML = currentWeapon.tags.map(t =>
        `<span class="tag ${t.includes('高') || t.includes('极') ? 'accent' : ''}">${t}</span>`
    ).join('');

    // 初始化滑块值为武器基础属性
    STAT_CONFIG.forEach(s => {
        sliderValues[s.key] = currentWeapon.baseStats[s.key];
    });

    renderStatSliders();
    renderTuningPanel(); // 先清空

    // 显示面板
    document.getElementById('statsPanel').style.display = 'block';
    document.getElementById('actionPanel').style.display = 'flex';
    document.getElementById('tuningPanel').style.display = 'none';
    document.getElementById('resultPanel').style.display = 'none';

    // 滚动到属性区
    setTimeout(() => document.getElementById('statsPanel').scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
}

/* ===================== 属性滑块（可拖动） ===================== */

function renderStatSliders() {
    const list = document.getElementById('statsList');
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
                    <div class="slider-fill" id="fill-${stat.key}" style="width:${pct}%; background:${stat.color}"></div>
                </div>
                <div class="slider-thumb" id="thumb-${stat.key}" style="left:${pct}%"></div>
            </div>
            <div class="stat-scale">
                <span>0</span>
                <span>25</span>
                <span>50</span>
                <span>75</span>
                <span>100</span>
            </div>
        </div>
        `;
    }).join('');

    // 绑定拖动事件
    STAT_CONFIG.forEach(stat => {
        const wrap = document.getElementById(`slider-wrap-${stat.key}`);
        const thumb = document.getElementById(`thumb-${stat.key}`);
        bindSliderDrag(wrap, thumb, stat);
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
        document.getElementById(`fill-${stat.key}`).style.width = `${pct * 100}%`;
        document.getElementById(`val-${stat.key}`).textContent = val;
    };

    const onDown = (e) => {
        dragging = true;
        thumb.style.cursor = 'grabbing';
        updateFromX(e.clientX || e.touches[0].clientX);
    };
    const onMove = (e) => {
        if (!dragging) return;
        e.preventDefault();
        updateFromX(e.clientX || (e.touches && e.touches[0].clientX));
    };
    const onUp = () => {
        dragging = false;
        thumb.style.cursor = 'grab';
    };

    thumb.addEventListener('mousedown', onDown);
    thumb.addEventListener('touchstart', onDown, { passive: false });

    // 点击轨道直接跳转
    container.addEventListener('mousedown', (e) => {
        if (e.target === thumb) return;
        updateFromX(e.clientX);
    });

    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', onMove, { passive: false });
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchend', onUp);
}

/* ===================== 精校面板 ===================== */

function renderTuningPanel() {
    const list = document.getElementById('tuningList');
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
                    <button class="tuning-btn ${idx === chosenTuning ? 'active' : ''}" data-idx="${idx}">
                        ${t.name}
                    </button>
                `).join('')}
            </div>
        </div>
        `);
    }

    list.innerHTML = items.join('') || '<p style="color:var(--text-dim);font-size:13px;text-align:center;padding:20px;">无可调配件</p>';

    // 绑定精校切换
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

/* ===================== AI 分析 & 选配 ===================== */

function analyzeAndBuild() {
    if (!currentWeapon) return;

    const loading = document.getElementById('loadingMask');
    loading.style.display = 'flex';

    // 模拟AI计算延迟，增强科技感
    setTimeout(() => {
        const result = runAIAlgorithm();
        analysisResult = result;
        tuningChoices = {}; // 重置精校选择
        result.attachmentsOrder.forEach(att => {
            if (att.tuning && att.tuning.length > 0) tuningChoices[att.id] = 0;
        });

        renderResult(result);
        renderTuningPanel();
        document.getElementById('tuningPanel').style.display = 'block';
        document.getElementById('resultPanel').style.display = 'block';
        loading.style.display = 'none';

        setTimeout(() => document.getElementById('resultPanel').scrollIntoView({ behavior: 'smooth' }), 100);
    }, 1200);
}

function runAIAlgorithm() {
    const base = { ...currentWeapon.baseStats };
    const target = { ...sliderValues };

    // 1. 计算理论最大/最小值（所有配件+极限精校）
    const theoretical = calcTheoreticalBounds(base);

    // 2. 调整目标到可行范围，并记录哪些属性被调整了
    const adjustedTarget = {};
    const adjustedKeys = [];
    STAT_CONFIG.forEach(s => {
        const k = s.key;
        let t = target[k];
        if (t > theoretical.max[k]) {
            adjustedTarget[k] = theoretical.max[k];
            adjustedKeys.push(k);
        } else if (t < theoretical.min[k]) {
            adjustedTarget[k] = theoretical.min[k];
            adjustedKeys.push(k);
        } else {
            adjustedTarget[k] = t;
        }
    });

    // 3. 计算与目标的差距
    const diff = {};
    STAT_CONFIG.forEach(s => {
        diff[s.key] = adjustedTarget[s.key] - base[s.key];
    });

    // 4. 贪心算法：为每个槽位选择最佳配件
    const slots = ['muzzle', 'barrel', 'optic', 'grip', 'magazine', 'stock'];
    const selected = {};
    const order = [];

    slots.forEach(slot => {
        const options = ATTACHMENTS[slot];
        let best = options[0];
        let bestScore = -Infinity;

        options.forEach(opt => {
            // 评分：配件属性与差距的匹配程度
            let score = 0;
            STAT_CONFIG.forEach(s => {
                const k = s.key;
                const add = opt.stats[k] || 0;
                if (diff[k] > 0 && add > 0) {
                    score += add * Math.min(1, diff[k] / 20); // 正向需求+正向加成
                } else if (diff[k] < 0 && add < 0) {
                    score += Math.abs(add) * Math.min(1, Math.abs(diff[k]) / 20);
                } else if (diff[k] > 0 && add < 0) {
                    score -= Math.abs(add) * 2; // 惩罚反向加成
                }
            });
            // 小幅偏好无负面或负面小的配件
            const negatives = STAT_CONFIG.filter(s => (opt.stats[s.key] || 0) < 0).length;
            score -= negatives * 3;

            if (score > bestScore) {
                bestScore = score;
                best = opt;
            }
        });

        selected[slot] = best;
        if (!best.id.endsWith('_none')) order.push(best);

        // 更新剩余差距
        STAT_CONFIG.forEach(s => {
            diff[s.key] -= (best.stats[s.key] || 0);
        });
    });

    // 5. 计算最终属性（不含精校）
    const finalStats = { ...base };
    Object.values(selected).forEach(att => {
        STAT_CONFIG.forEach(s => {
            finalStats[s.key] += (att.stats[s.key] || 0);
        });
    });

    // 6. 计算匹配度
    let matchTotal = 0;
    STAT_CONFIG.forEach(s => {
        const k = s.key;
        const ideal = adjustedTarget[k];
        const actual = clamp(finalStats[k], 0, 100);
        const err = Math.abs(actual - ideal) / 100;
        matchTotal += (1 - err);
    });
    const matchScore = Math.round((matchTotal / STAT_CONFIG.length) * 100);

    return {
        attachments: selected,
        attachmentsOrder: order,
        finalStats,
        adjustedTarget,
        adjustedKeys,
        matchScore,
        target
    };
}

// 计算理论上下界
function calcTheoreticalBounds(base) {
    const max = { ...base };
    const min = { ...base };
    const slots = ['muzzle', 'barrel', 'optic', 'grip', 'magazine', 'stock'];

    slots.forEach(slot => {
        ATTACHMENTS[slot].forEach(att => {
            STAT_CONFIG.forEach(s => {
                const v = att.stats[s.key] || 0;
                if (v > 0) max[s.key] += v;
                if (v < 0) min[s.key] += v;
            });
        });
    });

    // 加上精校最大值（粗略估计每配件+5）
    STAT_CONFIG.forEach(s => {
        max[s.key] += 5 * 6;
        min[s.key] -= 5 * 6;
        max[s.key] = clamp(max[s.key], 0, 100);
        min[s.key] = clamp(min[s.key], 0, 100);
    });

    return { max, min };
}

// 重新计算最终属性（含精校）
function recalcFinalStats() {
    if (!analysisResult) return;
    const stats = { ...currentWeapon.baseStats };

    // 配件基础加成
    Object.values(analysisResult.attachments).forEach(att => {
        if (!att) return;
        STAT_CONFIG.forEach(s => {
            stats[s.key] += (att.stats[s.key] || 0);
        });
    });

    // 精校加成
    Object.values(analysisResult.attachments).forEach(att => {
        if (!att || att.id.endsWith('_none')) return;
        const tIdx = tuningChoices[att.id] ?? 0;
        const tune = att.tuning[tIdx];
        if (tune && tune.stats) {
            STAT_CONFIG.forEach(s => {
                stats[s.key] += (tune.stats[s.key] || 0);
            });
        }
    });

    renderFinalStats(stats);
    generateCode(stats);
}

/* ===================== 结果渲染 ===================== */

function renderResult(result) {
    // 匹配度
    document.getElementById('matchScore').textContent = `匹配度 ${result.matchScore}%`;

    // 如果有调整，显示提示
    if (result.adjustedKeys.length > 0) {
        const names = result.adjustedKeys.map(k => STAT_CONFIG.find(s => s.key === k).name);
        showToast(`⚠️ ${names.join('、')} 超出理论极限，已取最接近值`);
    }

    // 配件网格
    const grid = document.getElementById('attachmentsGrid');
    const slots = ['muzzle', 'barrel', 'optic', 'grip', 'magazine', 'stock'];
    grid.innerHTML = slots.map(slot => {
        const att = result.attachments[slot];
        if (!att || att.id.endsWith('_none')) return '';
        const bonuses = STAT_CONFIG.filter(s => (att.stats[s.key] || 0) !== 0).map(s => {
            const v = att.stats[s.key];
            const sign = v > 0 ? '+' : '';
            return `<span class="${v < 0 ? 'negative' : ''}">${sign}${v} ${s.name.replace('控制','').replace('稳定性','稳').replace('操控速度','操控').replace('有效射程','射程').replace('腰射精度','腰射').replace('护甲伤害','穿甲')}</span>`;
        }).join('');
        return `
        <div class="attachment-item">
            <span class="att-icon">${att.emoji}</span>
            <div class="att-slot">${SLOT_NAMES[slot]}</div>
            <div class="att-name">${att.name}</div>
            <div class="att-bonus">${bonuses}</div>
        </div>
        `;
    }).join('');

    // 最终属性
    renderFinalStats(result.finalStats);

    // 生成改枪码
    generateCode(result.finalStats);
}

function renderFinalStats(stats) {
    const list = document.getElementById('finalStatsList');
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
        </div>
        `;
    }).join('');
}

/* ===================== 改枪码生成 ===================== */

function generateCode(stats) {
    if (!currentWeapon || !analysisResult) return;

    // 编码格式：武器ID|配件ID1,配件ID2...|精校编码
    const slots = ['muzzle', 'barrel', 'optic', 'grip', 'magazine', 'stock'];
    const attIds = slots.map(s => {
        const att = analysisResult.attachments[s];
        return att ? att.id : 'none';
    }).join(',');

    const tuneCodes = slots.map(s => {
        const att = analysisResult.attachments[s];
        if (!att || att.id.endsWith('_none')) return '-';
        const idx = tuningChoices[att.id] ?? 0;
        return idx;
    }).join('');

    // 简化的改枪码格式
    const code = `${currentWeapon.id.toUpperCase()}-${btoa(attIds).replace(/=+$/,'').substring(0,12)}-${tuneCodes}`;
    document.getElementById('codeText').textContent = code;
}

/* ===================== 复制 & 重置 ===================== */

function copyCode() {
    const text = document.getElementById('codeText').textContent;
    if (text === '—') return;
    navigator.clipboard.writeText(text).then(() => {
        const btn = document.getElementById('btnCopy');
        btn.classList.add('copied');
        btn.innerHTML = '<i class="fas fa-check"></i>';
        showToast('改枪码已复制到剪贴板');
        setTimeout(() => {
            btn.classList.remove('copied');
            btn.innerHTML = '<i class="fas fa-copy"></i>';
        }, 2000);
    });
}

function resetAll() {
    if (!currentWeapon) return;
    STAT_CONFIG.forEach(s => {
        sliderValues[s.key] = currentWeapon.baseStats[s.key];
    });
    renderStatSliders();
    document.getElementById('resultPanel').style.display = 'none';
    document.getElementById('tuningPanel').style.display = 'none';
    analysisResult = null;
    installedAttachments = {};
    tuningChoices = {};
}

/* ===================== 工具函数 ===================== */

function clamp(v, min, max) {
    return Math.max(min, Math.min(max, v));
}

function showToast(msg) {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

/* ===================== 事件绑定 ===================== */

function bindGlobalEvents() {
    document.getElementById('btnAnalyze').addEventListener('click', analyzeAndBuild);
    document.getElementById('btnReset').addEventListener('click', resetAll);
    document.getElementById('btnCopy').addEventListener('click', copyCode);
}

/* ===================== 启动 ===================== */
init();
