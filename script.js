// ===== 三角洲行动改枪工坊 v0.1.0 =====

// 属性配置
const STAT_CONFIG = [
    { key: 'recoil', name: '后坐力控制', color: '#e74c3c', max: 100 },
    { key: 'stability', name: '据枪稳定性', color: '#3498db', max: 100 },
    { key: 'control', name: '操控速度', color: '#2ecc71', max: 100 },
    { key: 'range', name: '有效射程', color: '#f39c12', max: 100 },
    { key: 'hipfire', name: '腰射精度', color: '#9b59b6', max: 100 },
    { key: 'armor', name: '护甲伤害', color: '#e67e22', max: 100 }
];

// 枪械数据库（示例数据，后续补充）
const WEAPONS = [
    { id: 'm4a1', name: 'M4A1', type: '突击步枪', baseStats: { recoil: 45, stability: 40, control: 55, range: 50, hipfire: 35, armor: 60 } },
    { id: 'akm', name: 'AKM', type: '突击步枪', baseStats: { recoil: 35, stability: 30, control: 40, range: 60, hipfire: 30, armor: 75 } },
    { id: 'k416', name: 'K416', type: '突击步枪', baseStats: { recoil: 50, stability: 45, control: 50, range: 45, hipfire: 40, armor: 55 } },
    { id: 'scarh', name: 'SCAR-H', type: '战斗步枪', baseStats: { recoil: 40, stability: 35, control: 35, range: 70, hipfire: 25, armor: 80 } },
    { id: 'mp5', name: 'MP5', type: '冲锋枪', baseStats: { recoil: 55, stability: 50, control: 70, range: 25, hipfire: 60, armor: 40 } },
    { id: 'm14', name: 'M14', type: '射手步枪', baseStats: { recoil: 30, stability: 35, control: 30, range: 85, hipfire: 20, armor: 85 } }
];

// 当前状态
let currentWeapon = null;
let targetStats = {};

// ===== 初始化 =====
function init() {
    renderWeaponList();
    renderStatSliders();
    bindEvents();
}

// 渲染枪械列表
function renderWeaponList() {
    const list = document.getElementById('weaponList');
    list.innerHTML = WEAPONS.map(w => `
        <div class="weapon-item" data-id="${w.id}">${w.name}</div>
    `).join('');

    list.querySelectorAll('.weapon-item').forEach(item => {
        item.addEventListener('click', () => selectWeapon(item.dataset.id));
    });
}

// 选择枪械
function selectWeapon(id) {
    currentWeapon = WEAPONS.find(w => w.id === id);

    document.querySelectorAll('.weapon-item').forEach(el => {
        el.classList.toggle('active', el.dataset.id === id);
    });

    document.getElementById('weaponInfo').innerHTML = `
        <h2 class="weapon-name">${currentWeapon.name}</h2>
        <p class="weapon-type">${currentWeapon.type}</p>
    `;

    targetStats = { ...currentWeapon.baseStats };
    updateSliders();

    document.getElementById('btnAutoBuild').disabled = false;
    document.getElementById('btnReset').disabled = false;
}

// 渲染属性滑块
function renderStatSliders() {
    const grid = document.getElementById('statsGrid');
    grid.innerHTML = STAT_CONFIG.map(stat => `
        <div class="stat-item">
            <div class="stat-header">
                <span class="stat-name">${stat.name}</span>
                <span class="stat-value" id="val-${stat.key}">—</span>
            </div>
            <div class="stat-bar">
                <div class="stat-bar-fill" id="bar-${stat.key}" style="background:${stat.color};width:0%"></div>
            </div>
            <input type="range" id="slider-${stat.key}" min="0" max="${stat.max}" value="0" disabled>
        </div>
    `).join('');

    STAT_CONFIG.forEach(stat => {
        document.getElementById(`slider-${stat.key}`).addEventListener('input', (e) => {
            targetStats[stat.key] = parseInt(e.target.value);
            updateSliderDisplay(stat.key);
        });
    });
}

// 更新滑块值
function updateSliders() {
    STAT_CONFIG.forEach(stat => {
        const slider = document.getElementById(`slider-${stat.key}`);
        slider.value = targetStats[stat.key] || 0;
        slider.disabled = !currentWeapon;
        updateSliderDisplay(stat.key);
    });
}

// 更新单个滑块显示
function updateSliderDisplay(key) {
    const stat = STAT_CONFIG.find(s => s.key === key);
    const val = targetStats[key] || 0;
    document.getElementById(`val-${key}`).textContent = val;
    document.getElementById(`bar-${key}`).style.width = `${val}%`;
}

// 绑定事件
function bindEvents() {
    document.getElementById('btnReset').addEventListener('click', () => {
        if (currentWeapon) {
            targetStats = { ...currentWeapon.baseStats };
            updateSliders();
        }
    });

    document.getElementById('btnAutoBuild').addEventListener('click', autoBuild);
    document.getElementById('btnCopyCode').addEventListener('click', copyCode);
}

// 自动选配配件（占位，后续实现）
function autoBuild() {
    if (!currentWeapon) return;

    const list = document.getElementById('attachmentsList');
    list.innerHTML = `
        <div class="attachment-card">
            <div class="attachment-slot">枪口</div>
            <div class="attachment-name">（待实现）</div>
        </div>
        <div class="attachment-card">
            <div class="attachment-slot">枪管</div>
            <div class="attachment-name">（待实现）</div>
        </div>
        <div class="attachment-card">
            <div class="attachment-slot">护木</div>
            <div class="attachment-name">（待实现）</div>
        </div>
        <div class="attachment-card">
            <div class="attachment-slot">握把</div>
            <div class="attachment-name">（待实现）</div>
        </div>
        <div class="attachment-card">
            <div class="attachment-slot">弹匣</div>
            <div class="attachment-name">（待实现）</div>
        </div>
        <div class="attachment-card">
            <div class="attachment-slot">枪托</div>
            <div class="attachment-name">（待实现）</div>
        </div>
    `;

    // 生成占位改枪码
    const code = `${currentWeapon.name}-烽火地带-待生成`;
    document.getElementById('codeOutput').innerHTML = code;
    document.getElementById('btnCopyCode').disabled = false;
}

// 复制改枪码
function copyCode() {
    const code = document.getElementById('codeOutput').textContent;
    navigator.clipboard.writeText(code).then(() => {
        const btn = document.getElementById('btnCopyCode');
        btn.classList.add('copied');
        btn.textContent = '已复制！';
        setTimeout(() => {
            btn.classList.remove('copied');
            btn.textContent = '复制改枪码';
        }, 2000);
    });
}

// 启动
init();
