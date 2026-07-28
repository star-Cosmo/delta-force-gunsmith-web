// ===== 三角洲行动 · 改枪工坊 v2.0 =====
// 数据来源: deltaforcetools.gg (真实游戏配件属性)

/* ===================== 数据库 ===================== */

const STAT_CONFIG = [
    { key: 'recoil',   name: '后坐力控制', icon: 'fa-arrows-alt-v',   color: '#ef4444', max: 100 },
    { key: 'stability',name: '据枪稳定性', icon: 'fa-bullseye',       color: '#3b82f6', max: 100 },
    { key: 'control',  name: '操控速度',   icon: 'fa-running',        color: '#22c55e', max: 100 },
    { key: 'range',    name: '有效射程',   icon: 'fa-ruler-horizontal',color: '#f59e0b', max: 100 },
    { key: 'hipfire',  name: '腰射精度',   icon: 'fa-crosshairs',     color: '#a855f7', max: 100 },
    { key: 'armor',    name: '护甲伤害',   icon: 'fa-shield-alt',     color: '#e67e22', max: 100 }
];

const WEAPONS = [
    { id: 'm4a1', name: 'M4A1', type: '突击步枪', emoji: '🔫', tags: ['均衡','易操控'], baseStats: { recoil: 45, stability: 40, control: 55, range: 50, hipfire: 35, armor: 60 } },
    { id: 'akm',  name: 'AKM',  type: '突击步枪', emoji: '🔫', tags: ['高伤害','后坐大'], baseStats: { recoil: 30, stability: 28, control: 42, range: 58, hipfire: 28, armor: 75 } },
    { id: 'k416', name: 'K416', type: '突击步枪', emoji: '🔫', tags: ['高射速','近战强'], baseStats: { recoil: 48, stability: 42, control: 52, range: 45, hipfire: 38, armor: 55 } },
    { id: 'scarh',name: 'SCAR-H',type:'战斗步枪', emoji: '🔫', tags: ['高射程','单发稳'], baseStats: { recoil: 38, stability: 32, control: 38, range: 72, hipfire: 22, armor: 80 } },
    { id: 'mp5',  name: 'MP5',  type: '冲锋枪',   emoji: '🔫', tags: ['高操控','腰射强'], baseStats: { recoil: 55, stability: 48, control: 68, range: 25, hipfire: 62, armor: 40 } },
    { id: 'm14',  name: 'M14',  type: '射手步枪', emoji: '🔫', tags: ['超远距','高杀伤'], baseStats: { recoil: 28, stability: 30, control: 30, range: 88, hipfire: 18, armor: 85 } },
    { id: 'awm',  name: 'AWM',  type: '栓动步枪', emoji: '🎯', tags: ['一击必杀','超远距'], baseStats: { recoil: 20, stability: 25, control: 22, range: 95, hipfire: 10, armor: 95 } },
    { id: 'vector',name:'Vector',type:'冲锋枪',   emoji: '🔫', tags: ['极快射速','近战王'], baseStats: { recoil: 50, stability: 38, control: 60, range: 20, hipfire: 55, armor: 35 } }
];

const ATTACHMENTS = {
    muzzle: [
        { id:'mu_titanium', name:'钛金竞赛制退器',  emoji:'🔧', stats:{recoil:+12, control:-3}, tuning:[{name:'极限控后',stats:{recoil:+4,control:-3}},{name:'平衡后坐',stats:{recoil:+2,control:+1}}] },
        { id:'mu_pbs',      name:'PBS俄式消音器',   emoji:'🤫', stats:{recoil:+10, control:-13}, tuning:[{name:'极限消音',stats:{recoil:+5,control:-5}},{name:'消音平衡',stats:{recoil:+3,control:-3}}] },
        { id:'mu_dead',     name:'死寂消音器',      emoji:'🤫', stats:{range:+24, control:-13, stability:-5}, tuning:[{name:'极限远射',stats:{range:+6,control:-3}},{name:'射程平衡',stats:{range:+3,stability:+2}}] },
        { id:'mu_swirl',    name:'漩涡消焰器',      emoji:'🔥', stats:{recoil:+2, stability:+5, control:-2}, tuning:[{name:'稳定优先',stats:{stability:+3,control:-2}},{name:'均衡调整',stats:{recoil:+1,stability:+2}}] },
        { id:'mu_flame',    name:'实用消焰器',      emoji:'🔥', stats:{recoil:+2}, tuning:[{name:'后坐强化',stats:{recoil:+2}},{name:'稳定消焰',stats:{recoil:+1,stability:+1}}] },
        { id:'mu_bird',     name:'鸟笼消焰器',      emoji:'🔥', stats:{recoil:+2, stability:+1}, tuning:[{name:'极限稳定',stats:{stability:+2}},{name:'均衡消焰',stats:{recoil:+1,control:+1}}] },
        { id:'mu_inferno',  name:'炽火抑制器',      emoji:'⚡', stats:{recoil:+6, control:-1}, tuning:[{name:'极限压制',stats:{recoil:+3,control:-2}},{name:'压制平衡',stats:{recoil:+2,control:+1}}] },
        { id:'mu_practical',name:'实用消音器',      emoji:'🤫', stats:{recoil:-2, stability:-3}, tuning:[{name:'隐蔽优先',stats:{control:+2,recoil:-1}},{name:'均衡隐蔽',stats:{stability:+1,recoil:-1}}] },
        { id:'mu_none',     name:'无',              emoji:'❌', stats:{}, tuning:[] }
    ],
    barrel: [
        { id:'br_beaver',  name:'海狸长枪管',      emoji:'📏', stats:{recoil:+8, stability:+6, range:+12, control:-8}, tuning:[{name:'极限射程',stats:{range:+5,control:-3}},{name:'射程稳定',stats:{range:+3,stability:+2}}] },
        { id:'br_short',   name:'短枪管组合',      emoji:'📐', stats:{control:+10, range:-10, recoil:-3, hipfire:+5}, tuning:[{name:'极限操控',stats:{control:+5,range:-3}},{name:'腰射特化',stats:{hipfire:+5,recoil:-2}}] },
        { id:'br_std',     name:'实用标准枪管',    emoji:'📍', stats:{range:+4, recoil:+2}, tuning:[{name:'标准强化',stats:{recoil:+2,range:+2}},{name:'均衡标准',stats:{recoil:+1,stability:+1,control:+1}}] },
        { id:'br_heavy',   name:'精英脚架长枪管',  emoji:'🧱', stats:{recoil:+10, stability:+8, range:+15, control:-10}, tuning:[{name:'极限稳定',stats:{recoil:+4,stability:+3}},{name:'稳定操控',stats:{recoil:+2,stability:+2,control:-2}}] },
        { id:'br_none',    name:'无',              emoji:'❌', stats:{}, tuning:[] }
    ],
    optic: [
        { id:'op_red',     name:'反射式瞄准镜',    emoji:'🔴', stats:{control:-2}, tuning:[{name:'快速瞄准',stats:{control:+2,hipfire:+1}},{name:'稳定瞄准',stats:{stability:+2,control:+1}}] },
        { id:'op_panorama',name:'全景红点瞄准镜',  emoji:'⭕', stats:{control:-2}, tuning:[{name:'视野强化',stats:{control:+1,hipfire:+2}},{name:'均衡红点',stats:{stability:+1,control:+1}}] },
        { id:'op_holo',    name:'全息瞄准镜',      emoji:'🔵', stats:{stability:+5, control:-3}, tuning:[{name:'极限稳定',stats:{stability:+4,control:-2}},{name:'腰射补偿',stats:{stability:+2,hipfire:+2}}] },
        { id:'op_sniper',  name:'3/7可调狙击镜',   emoji:'🎯', stats:{stability:+10, control:-10, range:+5}, tuning:[{name:'极限远距',stats:{range:+4,stability:+2}},{name:'狙击平衡',stats:{range:+2,stability:+3}}] },
        { id:'op_scout',   name:'侦察1.5/5可调镜', emoji:'🔍', stats:{stability:+6, control:-5, range:+3}, tuning:[{name:'远射特化',stats:{range:+3,stability:+2}},{name:'中距平衡',stats:{range:+2,control:+1}}] },
        { id:'op_iron',    name:'机械瞄具',        emoji:'👁️', stats:{control:+5, hipfire:+3, range:-3}, tuning:[{name:'极限操控',stats:{control:+4,range:-2}},{name:'腰射强化',stats:{hipfire:+4,control:+2}}] },
        { id:'op_riser',   name:'微型瞄准器增高架',emoji:'📐', stats:{control:+2}, tuning:[{name:'快速开镜',stats:{control:+3,recoil:-1}},{name:'稳定增高',stats:{stability:+2,control:+1}}] },
        { id:'op_riser2',  name:'多用途战术增高架',emoji:'📐', stats:{control:+2}, tuning:[{name:'战术增高',stats:{control:+3,stability:-1}},{name:'均衡增高',stats:{control:+2,hipfire:+1}}] },
        { id:'op_none',    name:'无',              emoji:'❌', stats:{}, tuning:[] }
    ],
    foregrip: [
        { id:'fg_resonance',name:'共振人体工学握把',emoji:'🔽', stats:{control:-1}, tuning:[{name:'人体工学',stats:{control:+1,recoil:-1}},{name:'稳定握持',stats:{stability:+2,control:-1}}] },
        { id:'fg_phase',   name:'相位战斗前握把',  emoji:'⚔️', stats:{recoil:+4, control:+3, stability:+2, hipfire:+4}, tuning:[{name:'极限控后',stats:{recoil:+3,control:-1}},{name:'据枪稳定',stats:{stability:+3,recoil:+2}}] },
        { id:'fg_vertical',name:'实用垂直握把',    emoji:'🔽', stats:{recoil:+2}, tuning:[{name:'极限控后',stats:{recoil:+3,control:-1}},{name:'均衡垂直',stats:{recoil:+1,stability:+1}}] },
        { id:'fg_tactical',name:'战术三角握把',    emoji:'🔺', stats:{recoil:+4, control:+2}, tuning:[{name:'极限操控',stats:{control:+4,recoil:-1}},{name:'快速据枪',stats:{control:+3,hipfire:+2}}] },
        { id:'fg_angled',  name:'密令斜角握把',    emoji:'📐', stats:{control:-1}, tuning:[{name:'斜角强化',stats:{control:+1,recoil:-1}},{name:'均衡斜角',stats:{recoil:+1,control:+1}}] },
        { id:'fg_fold',    name:'折叠握把',        emoji:'📂', stats:{control:+8, hipfire:+5, recoil:-2}, tuning:[{name:'极限便携',stats:{control:+5,hipfire:+3}},{name:'腰射便携',stats:{hipfire:+5,control:+3}}] },
        { id:'fg_vfg',     name:'VFG骑士前握把',   emoji:'🛡️', stats:{recoil:+3, stability:+2}, tuning:[{name:'极限稳定',stats:{recoil:+3,stability:+2}},{name:'稳定操控',stats:{recoil:+2,stability:+1,control:-1}}] },
        { id:'fg_none',    name:'无',              emoji:'❌', stats:{}, tuning:[] }
    ],
    rear_grip: [
        { id:'rg_phantom', name:'幻影后握把',      emoji:'👻', stats:{recoil:+3, control:+9, stability:-4}, tuning:[{name:'极限操控',stats:{control:+5,recoil:-2}},{name:'快速反应',stats:{control:+3,hipfire:+3}}] },
        { id:'rg_hurricane',name:'飓风D-1后握把',  emoji:'🌪️', stats:{control:+4}, tuning:[{name:'速度强化',stats:{control:+5,recoil:-2}},{name:'均衡速度',stats:{control:+3,hipfire:+2}}] },
        { id:'rg_stable',  name:'稳固握把底座',    emoji:'🧱', stats:{recoil:+2, stability:+7, control:-5}, tuning:[{name:'极限稳定',stats:{stability:+4,recoil:+2}},{name:'稳定操控',stats:{stability:+3,control:-2}}] },
        { id:'rg_xk',      name:'XK竞技后握',      emoji:'🏆', stats:{recoil:+6, control:+2}, tuning:[{name:'极限控后',stats:{recoil:+4,control:-2}},{name:'竞技平衡',stats:{recoil:+2,control:+2}}] },
        { id:'rg_shooter', name:'射手D-2后握把',   emoji:'🎯', stats:{stability:+4}, tuning:[{name:'极限据枪',stats:{stability:+5,control:-2}},{name:'射手平衡',stats:{stability:+3,range:+1}}] },
        { id:'rg_none',    name:'无',              emoji:'❌', stats:{}, tuning:[] }
    ],
    mag: [
        { id:'ma_std',     name:'标准弹匣',        emoji:'📍', stats:{}, tuning:[{name:'标准强化',stats:{control:+2}},{name:'稳定标准',stats:{stability:+2}}] },
        { id:'ma_fast',    name:'快速弹匣',        emoji:'⚡', stats:{control:+5}, tuning:[{name:'极限换弹',stats:{control:+5,recoil:-2}},{name:'平衡换弹',stats:{control:+3,stability:+1}}] },
        { id:'ma_ext',     name:'扩容弹匣',        emoji:'📦', stats:{control:-3}, tuning:[{name:'快速扩容',stats:{control:+1,recoil:-1}},{name:'极限扩容',stats:{control:-2,stability:+1}}] },
        { id:'ma_drum',    name:'大弹鼓',          emoji:'🥁', stats:{control:-10, recoil:-3, hipfire:-5}, tuning:[{name:'稳定弹鼓',stats:{stability:+3,control:-3}},{name:'腰射弹鼓',stats:{hipfire:+4,stability:-2}}] },
        { id:'ma_ap',      name:'穿甲弹',          emoji:'💥', stats:{armor:+15, control:-2}, tuning:[{name:'极限穿甲',stats:{armor:+6,control:-3}},{name:'穿甲平衡',stats:{armor:+3,recoil:+2}}] }
    ],
    stock: [
        { id:'st_lightning',name:'闪电导轨枪托',   emoji:'⚡', stats:{control:+12, stability:-6}, tuning:[{name:'极限操控',stats:{control:+5,stability:-3}},{name:'快速反应',stats:{control:+3,hipfire:+3}}] },
        { id:'st_skeleton',name:'骨架狙击枪托',    emoji:'🦴', stats:{control:+8, stability:+6, recoil:-4, hipfire:-16}, tuning:[{name:'极限稳定',stats:{stability:+5,recoil:-2}},{name:'狙击平衡',stats:{stability:+3,control:+2}}] },
        { id:'st_stable',  name:'实用稳定枪托',    emoji:'📍', stats:{recoil:+2}, tuning:[{name:'均衡强化',stats:{recoil:+2,stability:+2}},{name:'操控强化',stats:{control:+3,recoil:+1}}] },
        { id:'st_ak',      name:'AK骨架枪托',      emoji:'🔫', stats:{control:+8, recoil:-3, stability:-3}, tuning:[{name:'极限便携',stats:{control:+5,hipfire:+3}},{name:'腰射便携',stats:{hipfire:+5,control:+3}}] },
        { id:'st_tactical',name:'实用战术枪托',    emoji:'🎖️', stats:{recoil:+4}, tuning:[{name:'极限控后',stats:{recoil:+4,control:-2}},{name:'战术平衡',stats:{recoil:+2,control:+2}}] },
        { id:'st_heavy',   name:'重型枪托',        emoji:'🧱', stats:{recoil:+10, stability:+10, control:-8, hipfire:-5}, tuning:[{name:'极限稳定',stats:{recoil:+5,stability:+4}},{name:'据枪特化',stats:{stability:+6,recoil:+2}}] },
        { id:'st_none',    name:'无枪托',          emoji:'❌', stats:{control:+15, recoil:-5, stability:-5, hipfire:+10, range:-5}, tuning:[{name:'极限速度',stats:{control:+8,hipfire:+3}},{name:'腰射极限',stats:{hipfire:+6,control:+4}}] }
    ],
    functional: [
        { id:'fn_combined',name:'组合式护木片',    emoji:'🛡️', stats:{recoil:+1, stability:+1, control:-2}, tuning:[{name:'极限稳定',stats:{stability:+2,control:-2}},{name:'均衡护木',stats:{recoil:+1,control:-1}}] },
        { id:'fn_ranger',  name:'游侠护木片',      emoji:'🛡️', stats:{recoil:+1}, tuning:[{name:'后坐强化',stats:{recoil:+2}},{name:'均衡游侠',stats:{recoil:+1,stability:+1}}] },
        { id:'fn_laser',   name:'PERST-7蓝色激光镭指',emoji:'🔦', stats:{hipfire:+5, control:-2}, tuning:[{name:'极限腰射',stats:{hipfire:+5,control:-2}},{name:'激光平衡',stats:{hipfire:+3,control:+1}}] },
        { id:'fn_bipod',   name:'两脚架',          emoji:'🦵', stats:{recoil:+8, stability:+12, control:-10, hipfire:-8}, tuning:[{name:'极限稳定',stats:{recoil:+5,stability:+4}},{name:'架点特化',stats:{stability:+6,control:-4}}] },
        { id:'fn_none',    name:'无',              emoji:'❌', stats:{}, tuning:[] }
    ]
};

const SLOT_NAMES = {
    muzzle: '枪口', barrel: '枪管', optic: '瞄具',
    foregrip: '前握把', rear_grip: '后握把', mag: '弹匣',
    stock: '枪托', functional: '功能配件'
};

/* ===================== 状态管理 ===================== */
let currentWeapon = null;
let sliderValues = {};
let analysisResult = null;
let tuningChoices = {};

/* ===================== 初始化 ===================== */
function init() {
    if (document.getElementById('weaponCarousel')) {
        renderWeaponCarousel();
        bindGlobalEvents();
    }
    if (document.getElementById('attachmentWiki')) {
        initAttachmentWiki();
    }
}

/* ===================== 武器选择 ===================== */
function renderWeaponCarousel() {
    const carousel = document.getElementById('weaponCarousel');
    if (!carousel) return;
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
    if (wType) wType.textContent = currentWeapon.type;
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
    const slots = ['muzzle','barrel','optic','foregrip','rear_grip','mag','stock','functional'];
    const selected = {};
    const order = [];
    slots.forEach(slot => {
        const options = ATTACHMENTS[slot];
        let best = options[0];
        let bestScore = -Infinity;
        options.forEach(opt => {
            let score = 0;
            coreKeys.forEach(k => {
                const add = opt.stats[k] || 0;
                if (diff[k] > 0 && add > 0) { score += add * 5; }
                else if (diff[k] < 0 && add < 0) { score += Math.abs(add) * 5; }
                else if (diff[k] > 0 && add < 0) { score -= Math.abs(add) * 3; }
            });
            STAT_CONFIG.filter(s => !coreKeys.includes(s.key)).forEach(s => {
                const k = s.key;
                const add = opt.stats[k] || 0;
                if (diff[k] > 0 && add > 0) { score += add * 0.5; }
                else if (diff[k] < 0 && add < 0) { score += Math.abs(add) * 0.5; }
            });
            const positiveCount = STAT_CONFIG.filter(s => (opt.stats[s.key] || 0) > 0).length;
            score += positiveCount * 0.5;
            if (score > bestScore) { bestScore = score; best = opt; }
        });
        selected[slot] = best;
        if (!best.id.endsWith('_none')) order.push(best);
        STAT_CONFIG.forEach(s => { diff[s.key] -= (best.stats[s.key] || 0); });
    });
    const finalStats = { ...base };
    Object.values(selected).forEach(att => {
        STAT_CONFIG.forEach(s => { finalStats[s.key] += (att.stats[s.key] || 0); });
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
    const slots = ['muzzle','barrel','optic','foregrip','rear_grip','mag','stock','functional'];
    slots.forEach(slot => {
        ATTACHMENTS[slot].forEach(att => {
            STAT_CONFIG.forEach(s => {
                const v = att.stats[s.key] || 0;
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

function recalcFinalStats() {
    if (!analysisResult) return;
    const stats = { ...currentWeapon.baseStats };
    Object.values(analysisResult.attachments).forEach(att => {
        if (!att) return;
        STAT_CONFIG.forEach(s => { stats[s.key] += (att.stats[s.key] || 0); });
    });
    Object.values(analysisResult.attachments).forEach(att => {
        if (!att || att.id.endsWith('_none')) return;
        const tIdx = tuningChoices[att.id] ?? 0;
        const tune = att.tuning[tIdx];
        if (tune && tune.stats) {
            STAT_CONFIG.forEach(s => { stats[s.key] += (tune.stats[s.key] || 0); });
        }
    });
    renderFinalStats(stats);
    generateCode(stats);
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
    const slots = ['muzzle','barrel','optic','foregrip','rear_grip','mag','stock','functional'];
    grid.innerHTML = slots.map(slot => {
        const att = result.attachments[slot];
        if (!att || att.id.endsWith('_none')) return '';
        const bonuses = STAT_CONFIG.filter(s => (att.stats[s.key] || 0) !== 0).map(s => {
            const v = att.stats[s.key];
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
    generateCode(result.finalStats);
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

/* ===================== 改枪码生成 ===================== */
function generateCode(stats) {
    if (!currentWeapon || !analysisResult) return;
    const slots = ['muzzle','barrel','optic','foregrip','rear_grip','mag','stock','functional'];
    const attIds = slots.map(s => { const att = analysisResult.attachments[s]; return att ? att.id : 'none'; }).join(',');
    const tuneCodes = slots.map(s => {
        const att = analysisResult.attachments[s];
        if (!att || att.id.endsWith('_none')) return '-';
        const idx = tuningChoices[att.id] ?? 0;
        return idx;
    }).join('');
    const code = `${currentWeapon.id.toUpperCase()}-${btoa(attIds).replace(/=+$/,'').substring(0,12)}-${tuneCodes}`;
    const ct = document.getElementById('codeText');
    if (ct) ct.textContent = code;
}

/* ===================== 复制 & 重置 ===================== */
function copyCode() {
    const text = document.getElementById('codeText').textContent;
    if (text === '—') return;
    navigator.clipboard.writeText(text).then(() => {
        const btn = document.getElementById('btnCopy');
        if (btn) {
            btn.classList.add('copied');
            btn.innerHTML = '<i class="fas fa-check"></i>';
            showToast('改枪码已复制到剪贴板');
            setTimeout(() => { btn.classList.remove('copied'); btn.innerHTML = '<i class="fas fa-copy"></i>'; }, 2000);
        }
    });
}

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
    const slots = ['muzzle','barrel','optic','foregrip','rear_grip','mag','stock','functional'];
    slots.forEach(slot => {
        if (cat !== 'all' && cat !== slot) return;
        ATTACHMENTS[slot].forEach(att => {
            if (att.id.endsWith('_none')) return;
            if (keyword && !att.name.toLowerCase().includes(keyword)) return;
            const statsHtml = STAT_CONFIG.filter(s => (att.stats[s.key] || 0) !== 0).map(s => {
                const v = att.stats[s.key];
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
    const btnCopy = document.getElementById('btnCopy');
    if (btnCopy) btnCopy.addEventListener('click', copyCode);
}

/* ===================== 启动 ===================== */
init();
