const STAT_CONFIG = [
    { key: 'recoil',   name: '后坐力控制', icon: 'fa-arrows-alt-v',   color: '#ef4444', max: 200 },
    { key: 'stability',name: '据枪稳定性', icon: 'fa-bullseye',       color: '#3b82f6', max: 200 },
    { key: 'control',  name: '操控速度',   icon: 'fa-running',        color: '#22c55e', max: 200 },
    { key: 'range',    name: '有效射程',   icon: 'fa-ruler-horizontal',color: '#f59e0b', max: 200 },
    { key: 'hipfire',  name: '腰射精度',   icon: 'fa-crosshairs',     color: '#a855f7', max: 200 },
    { key: 'armor',    name: '护甲伤害',   icon: 'fa-shield-alt',     color: '#e67e22', max: 200 }
];

// 数据来源: hpromax.top 爬取数据 + deltaforcetools.gg (官方Wiki)
// 最后更新: 2026-07-29
// 武器类型: 步枪 / 冲锋枪 / 狙击步枪 / 精确射手步枪 / 霰弹枪 / 轻机枪 / 手枪 / 特殊武器
const WEAPONS = [
    // ==================== 步枪 (23把) ====================
    {
        id: 'm4a1', name: 'M4A1', type: '步枪', emoji: '🔫',
        tags: ['均衡', '易操控'], caliber: '5.56x45mm',
        baseStats: { recoil: 41, stability: 55, control: 58, range: 40, hipfire: 55, armor: 33 },
        baseDamage: 31, rpm: 800, magCapacity: 30
    },
    {
        id: 'akm', name: 'AKM', type: '步枪', emoji: '🔫',
        tags: ['高伤害', '后坐大'], caliber: '7.62x39mm',
        baseStats: { recoil: 39, stability: 55, control: 54, range: 40, hipfire: 53, armor: 42 },
        baseDamage: 40, rpm: 600, magCapacity: 30
    },
    {
        id: 'k416', name: 'K416', type: '步枪', emoji: '🔫',
        tags: ['高射速', '近战强'], caliber: '5.56x45mm',
        baseStats: { recoil: 44, stability: 52, control: 61, range: 27, hipfire: 57, armor: 35 },
        baseDamage: 31, rpm: 880, magCapacity: 30
    },
    {
        id: 'scar-h', name: 'SCAR-H', type: '步枪', emoji: '🔫',
        tags: ['高射程', '单发稳'], caliber: '7.62x51mm',
        baseStats: { recoil: 40, stability: 55, control: 58, range: 40, hipfire: 45, armor: 41 },
        baseDamage: 40, rpm: 585, magCapacity: 20
    },
    {
        id: 'ak-12', name: 'AK-12', type: '步枪', emoji: '🔫',
        tags: ['均衡', '现代化'], caliber: '5.45x39mm',
        baseStats: { recoil: 48, stability: 56, control: 57, range: 40, hipfire: 54, armor: 42 },
        baseDamage: 30, rpm: 735, magCapacity: 30
    },
    {
        id: 'aks-74u', name: 'AKS-74U', type: '步枪', emoji: '🔫',
        tags: ['紧凑', '近战'], caliber: '5.45x39mm',
        baseStats: { recoil: 35, stability: 53, control: 60, range: 40, hipfire: 52, armor: 36 },
        baseDamage: 34, rpm: 533, magCapacity: 20
    },
    {
        id: 'ar57', name: 'AR57', type: '步枪', emoji: '🔫',
        tags: ['高射速', '大弹匣'], caliber: '5.7x28mm',
        baseStats: { recoil: 41, stability: 40, control: 58, range: 35, hipfire: 60, armor: 31 },
        baseDamage: 30, rpm: 900, magCapacity: 50
    },
    {
        id: 'ash-12', name: 'ASh-12', type: '步枪', emoji: '💥',
        tags: ['超高伤害', '近战'], caliber: '12.7x55mm',
        baseStats: { recoil: 24, stability: 61, control: 57, range: 55, hipfire: 43, armor: 55 },
        baseDamage: 56, rpm: 500, magCapacity: 20
    },
    {
        id: 'asval', name: 'AS Val', type: '步枪', emoji: '🤫',
        tags: ['消音', '高射速'], caliber: '9x39mm',
        baseStats: { recoil: 43, stability: 51, control: 62, range: 21, hipfire: 57, armor: 44 },
        baseDamage: 28, rpm: 972, magCapacity: 15
    },
    {
        id: 'aug', name: 'AUG', type: '步枪', emoji: '🔫',
        tags: ['高射程', '稳定'], caliber: '5.56x45mm',
        baseStats: { recoil: 60, stability: 59, control: 54, range: 55, hipfire: 53, armor: 35 },
        baseDamage: 32, rpm: 679, magCapacity: 30
    },
    {
        id: 'car-15', name: 'CAR-15', type: '步枪', emoji: '🔫',
        tags: ['轻量', '灵活'], caliber: '5.56x45mm',
        baseStats: { recoil: 50, stability: 55, control: 58, range: 40, hipfire: 53, armor: 32 },
        baseDamage: 27, rpm: 632, magCapacity: 20
    },
    {
        id: 'g3', name: 'G3', type: '步枪', emoji: '🔫',
        tags: ['高伤害', '远射程'], caliber: '7.62x51mm',
        baseStats: { recoil: 32, stability: 62, control: 51, range: 55, hipfire: 45, armor: 42 },
        baseDamage: 39, rpm: 533, magCapacity: 20
    },
    {
        id: 'k437', name: 'K437', type: '步枪', emoji: '🔫',
        tags: ['均衡'], caliber: '5.56x45mm',
        baseStats: { recoil: 45, stability: 53, control: 48, range: 35, hipfire: 49, armor: 32 },
        baseDamage: 36, rpm: 780, magCapacity: 30
    },
    {
        id: 'kc17', name: 'KC17', type: '步枪', emoji: '🔫',
        tags: ['高射程', '穿甲'], caliber: '7.62x51mm',
        baseStats: { recoil: 53, stability: 48, control: 53, range: 55, hipfire: 45, armor: 48 },
        baseDamage: 31, rpm: 740, magCapacity: 30
    },
    {
        id: 'm16a4', name: 'M16A4', type: '步枪', emoji: '🔫',
        tags: ['高射程', '三连发'], caliber: '5.56x45mm',
        baseStats: { recoil: 40, stability: 57, control: 56, range: 55, hipfire: 54, armor: 39 },
        baseDamage: 33, rpm: 508, magCapacity: 20
    },
    {
        id: 'm7', name: 'M7', type: '步枪', emoji: '🔫',
        tags: ['高伤害', '远射程'], caliber: '6.8x51mm',
        baseStats: { recoil: 34, stability: 58, control: 51, range: 50, hipfire: 43, armor: 40 },
        baseDamage: 37, rpm: 649, magCapacity: 20
    },
    {
        id: 'mcxlt', name: 'MCXLT', type: '步枪', emoji: '🔫',
        tags: ['高射速', '灵活'], caliber: '5.56x45mm',
        baseStats: { recoil: 44, stability: 52, control: 61, range: 30, hipfire: 57, armor: 26 },
        baseDamage: 34, rpm: 840, magCapacity: 30
    },
    {
        id: 'mk47', name: 'MK47', type: '步枪', emoji: '🔫',
        tags: ['高伤害', '后坐大'], caliber: '7.62x39mm',
        baseStats: { recoil: 35, stability: 50, control: 55, range: 30, hipfire: 53, armor: 46 },
        baseDamage: 42, rpm: 625, magCapacity: 20
    },
    {
        id: 'ptr-32', name: 'PTR-32', type: '步枪', emoji: '🔫',
        tags: ['均衡', '稳定'], caliber: '7.62x51mm',
        baseStats: { recoil: 32, stability: 57, control: 56, range: 40, hipfire: 45, armor: 37 },
        baseDamage: 36, rpm: 632, magCapacity: 30
    },
    {
        id: 'qbz95-1', name: 'QBZ95-1', type: '步枪', emoji: '🔫',
        tags: ['高射程', '稳定'], caliber: '5.8x42mm',
        baseStats: { recoil: 52, stability: 58, control: 55, range: 55, hipfire: 54, armor: 42 },
        baseDamage: 28, rpm: 679, magCapacity: 30
    },
    {
        id: 'rm277', name: 'RM277', type: '步枪', emoji: '🔫',
        tags: ['高伤害', '远射程'], caliber: '6.8x51mm',
        baseStats: { recoil: 48, stability: 59, control: 50, range: 55, hipfire: 44, armor: 42 },
        baseDamage: 41, rpm: 550, magCapacity: 30
    },
    {
        id: 'sg552', name: 'SG552', type: '步枪', emoji: '🔫',
        tags: ['高射速', '灵活'], caliber: '5.56x45mm',
        baseStats: { recoil: 46, stability: 52, control: 61, range: 35, hipfire: 53, armor: 34 },
        baseDamage: 25, rpm: 906, magCapacity: 20
    },
    {
        id: 'tenglong', name: '腾龙', type: '步枪', emoji: '🐉',
        tags: ['均衡', '全面'], caliber: '5.56x45mm',
        baseStats: { recoil: 40, stability: 50, control: 60, range: 35, hipfire: 56, armor: 38 },
        baseDamage: 35, rpm: 706, magCapacity: 30
    },

    // ==================== 冲锋枪 (11把) ====================
    {
        id: 'mp5', name: 'MP5', type: '冲锋枪', emoji: '🔫',
        tags: ['高操控', '腰射强'], caliber: '9x19mm',
        baseStats: { recoil: 53, stability: 45, control: 66, range: 20, hipfire: 68, armor: 32 },
        baseDamage: 30, rpm: 820, magCapacity: 30
    },
    {
        id: 'vector', name: 'Vector', type: '冲锋枪', emoji: '🔫',
        tags: ['极快射速', '近战王'], caliber: '.45 ACP',
        baseStats: { recoil: 38, stability: 42, control: 69, range: 20, hipfire: 52, armor: 28 },
        baseDamage: 32, rpm: 1091, magCapacity: 17
    },
    {
        id: 'mk4', name: 'MK4', type: '冲锋枪', emoji: '🔫',
        tags: ['均衡', '配件多'], caliber: '9x19mm',
        baseStats: { recoil: 46, stability: 51, control: 60, range: 20, hipfire: 50, armor: 30 },
        baseDamage: 34, rpm: 793, magCapacity: 24
    },
    {
        id: 'mp7', name: 'MP7', type: '冲锋枪', emoji: '🔫',
        tags: ['高射速', '腰射强'], caliber: '4.6x30mm',
        baseStats: { recoil: 55, stability: 44, control: 67, range: 20, hipfire: 68, armor: 28 },
        baseDamage: 32, rpm: 950, magCapacity: 20
    },
    {
        id: 'p90', name: 'P90', type: '冲锋枪', emoji: '🔫',
        tags: ['大弹匣', '高射速'], caliber: '5.7x28mm',
        baseStats: { recoil: 48, stability: 45, control: 56, range: 20, hipfire: 60, armor: 35 },
        baseDamage: 32, rpm: 898, magCapacity: 50
    },
    {
        id: 'smg-45', name: 'SMG-45', type: '冲锋枪', emoji: '🔫',
        tags: ['高伤害', '高操控'], caliber: '.45 ACP',
        baseStats: { recoil: 52, stability: 41, control: 70, range: 27, hipfire: 65, armor: 40 },
        baseDamage: 35, rpm: 605, magCapacity: 25
    },
    {
        id: 'sr-3m', name: 'SR-3M', type: '冲锋枪', emoji: '🔫',
        tags: ['高伤害', '紧凑'], caliber: '9x39mm',
        baseStats: { recoil: 45, stability: 43, control: 63, range: 15, hipfire: 68, armor: 48 },
        baseDamage: 36, rpm: 747, magCapacity: 15
    },
    {
        id: 'uzi', name: 'UZI', type: '冲锋枪', emoji: '🔫',
        tags: ['高射速', '腰射强'], caliber: '9x19mm',
        baseStats: { recoil: 50, stability: 43, control: 68, range: 20, hipfire: 66, armor: 35 },
        baseDamage: 28, rpm: 780, magCapacity: 25
    },
    {
        id: 'qcq171', name: 'QCQ171', type: '冲锋枪', emoji: '🔫',
        tags: ['均衡', '稳定'], caliber: '9x19mm',
        baseStats: { recoil: 47, stability: 46, control: 60, range: 20, hipfire: 58, armor: 33 },
        baseDamage: 36, rpm: 763, magCapacity: 30
    },
    {
        id: 'bizon', name: '野牛', type: '冲锋枪', emoji: '🐃',
        tags: ['大弹匣', '持续火力'], caliber: '9x19mm',
        baseStats: { recoil: 43, stability: 49, control: 62, range: 20, hipfire: 63, armor: 35 },
        baseDamage: 32, rpm: 659, magCapacity: 32
    },
    {
        id: 'warrior', name: '勇士', type: '冲锋枪', emoji: '⚔️',
        tags: ['均衡', '配件多'], caliber: '9x19mm',
        baseStats: { recoil: 40, stability: 48, control: 63, range: 20, hipfire: 48, armor: 35 },
        baseDamage: 36, rpm: 700, magCapacity: 30
    },

    // ==================== 狙击步枪 (5把) ====================
    {
        id: 'awm', name: 'AWM', type: '狙击步枪', emoji: '🎯',
        tags: ['一击必杀', '超远距'], caliber: '.338 Lapua',
        baseStats: { recoil: 20, stability: 74, control: 44, range: 200, hipfire: 23, armor: 10 },
        baseDamage: 100, rpm: 35, magCapacity: 5
    },
    {
        id: 'm700', name: 'M700', type: '狙击步枪', emoji: '🎯',
        tags: ['高伤害', '远射程'], caliber: '7.62x51mm',
        baseStats: { recoil: 24, stability: 70, control: 48, range: 150, hipfire: 27, armor: 58 },
        baseDamage: 61, rpm: 48, magCapacity: 5
    },
    {
        id: 'm82', name: 'M82', type: '狙击步枪', emoji: '💀',
        tags: ['反器材', '超高伤害'], caliber: '.50 BMG',
        baseStats: { recoil: 10, stability: 66, control: 20, range: 200, hipfire: 15, armor: 20 },
        baseDamage: 100, rpm: 100, magCapacity: 5
    },
    {
        id: 'r93', name: 'R93', type: '狙击步枪', emoji: '🎯',
        tags: ['高操控', '快拉栓'], caliber: '.338 Lapua',
        baseStats: { recoil: 55, stability: 66, control: 57, range: 150, hipfire: 28, armor: 58 },
        baseDamage: 61, rpm: 56, magCapacity: 10
    },
    {
        id: 'sv-98', name: 'SV-98', type: '狙击步枪', emoji: '🎯',
        tags: ['稳定', '经典'], caliber: '7.62x54mmR',
        baseStats: { recoil: 55, stability: 74, control: 49, range: 150, hipfire: 26, armor: 58 },
        baseDamage: 60, rpm: 44, magCapacity: 7
    },

    // ==================== 精确射手步枪 (10把) ====================
    {
        id: 'm14', name: 'M14', type: '精确射手步枪', emoji: '🔫',
        tags: ['超远距', '高杀伤'],
        caliber: '7.62x51mm',
        baseStats: { recoil: 26, stability: 55, control: 52, range: 40, hipfire: 48, armor: 41 },
        baseDamage: 39, rpm: 727, magCapacity: 10
    },
    {
        id: 'mini-14', name: 'Mini-14', type: '精确射手步枪', emoji: '🔫',
        tags: ['高射程', '稳定'], caliber: '5.56x45mm',
        baseStats: { recoil: 60, stability: 63, control: 52, range: 90, hipfire: 37, armor: 38 },
        baseDamage: 34, rpm: 590, magCapacity: 10
    },
    {
        id: 'psg-1', name: 'PSG-1', type: '精确射手步枪', emoji: '🎯',
        tags: ['高伤害', '精准'], caliber: '7.62x51mm',
        baseStats: { recoil: 60, stability: 66, control: 49, range: 90, hipfire: 34, armor: 55 },
        baseDamage: 50, rpm: 300, magCapacity: 10
    },
    {
        id: 'sks', name: 'SKS', type: '精确射手步枪', emoji: '🔫',
        tags: ['半自动', '均衡'], caliber: '7.62x39mm',
        baseStats: { recoil: 30, stability: 60, control: 55, range: 55, hipfire: 38, armor: 49 },
        baseDamage: 48, rpm: 510, magCapacity: 10
    },
    {
        id: 'sr-25', name: 'SR-25', type: '精确射手步枪', emoji: '🎯',
        tags: ['高伤害', '精准'], caliber: '7.62x51mm',
        baseStats: { recoil: 56, stability: 59, control: 56, range: 60, hipfire: 40, armor: 55 },
        baseDamage: 50, rpm: 364, magCapacity: 10
    },
    {
        id: 'sr9', name: 'SR9', type: '精确射手步枪', emoji: '🔫',
        tags: ['高伤害', '远射程'], caliber: '7.62x51mm',
        baseStats: { recoil: 45, stability: 57, control: 43, range: 90, hipfire: 31, armor: 55 },
        baseDamage: 50, rpm: 261, magCapacity: 10
    },
    {
        id: 'svch', name: 'SVCH', type: '精确射手步枪', emoji: '🔫',
        tags: ['高伤害', '均衡'], caliber: '7.62x54mmR',
        baseStats: { recoil: 40, stability: 50, control: 42, range: 65, hipfire: 35, armor: 46 },
        baseDamage: 47, rpm: 600, magCapacity: 10
    },
    {
        id: 'svd', name: 'SVD', type: '精确射手步枪', emoji: '🔫',
        tags: ['高伤害', '经典'], caliber: '7.62x54mmR',
        baseStats: { recoil: 42, stability: 67, control: 48, range: 70, hipfire: 34, armor: 56 },
        baseDamage: 56, rpm: 300, magCapacity: 10
    },
    {
        id: 'vss', name: 'VSS', type: '精确射手步枪', emoji: '🤫',
        tags: ['消音', '高伤害'], caliber: '9x39mm',
        baseStats: { recoil: 46, stability: 61, control: 54, range: 120, hipfire: 38, armor: 48 },
        baseDamage: 40, rpm: 480, magCapacity: 15
    },
    {
        id: 'lever', name: '杠杆式步枪', type: '精确射手步枪', emoji: '🤠',
        tags: ['高伤害', '西部风'], caliber: '.45-70',
        baseStats: { recoil: 47, stability: 49, control: 55, range: 30, hipfire: 43, armor: 25 },
        baseDamage: 70, rpm: 100, magCapacity: 10
    },

    // ==================== 霰弹枪 (5把) ====================
    {
        id: '725', name: '725双管', type: '霰弹枪', emoji: '💥',
        tags: ['双管', '高爆发'], caliber: '12 gauge',
        baseStats: { recoil: 25, stability: 48, control: 50, range: 15, hipfire: 47, armor: 18 },
        baseDamage: 17, rpm: 375, magCapacity: 2
    },
    {
        id: 'fs-12', name: 'FS-12', type: '霰弹枪', emoji: '🔫',
        tags: ['半自动', '快速'], caliber: '12 gauge',
        baseStats: { recoil: 30, stability: 47, control: 52, range: 12, hipfire: 51, armor: 16 },
        baseDamage: 14, rpm: 300, magCapacity: 6
    },
    {
        id: 'm1014', name: 'M1014', type: '霰弹枪', emoji: '🔫',
        tags: ['半自动', '均衡'], caliber: '12 gauge',
        baseStats: { recoil: 28, stability: 45, control: 53, range: 12, hipfire: 52, armor: 16 },
        baseDamage: 14, rpm: 261, magCapacity: 7
    },
    {
        id: 'm870', name: 'M870', type: '霰弹枪', emoji: '🔫',
        tags: ['泵动', '经典'], caliber: '12 gauge',
        baseStats: { recoil: 26, stability: 41, control: 57, range: 12, hipfire: 49, armor: 16 },
        baseDamage: 17, rpm: 74, magCapacity: 6
    },
    {
        id: 's12k', name: 'S12K', type: '霰弹枪', emoji: '🔫',
        tags: ['弹匣供弹', '配件多'], caliber: '12 gauge',
        baseStats: { recoil: 36, stability: 49, control: 55, range: 10, hipfire: 48, armor: 16 },
        baseDamage: 13, rpm: 300, magCapacity: 5
    },

    // ==================== 轻机枪 (4把) ====================
    {
        id: 'm249', name: 'M249', type: '轻机枪', emoji: '🔫',
        tags: ['大弹匣', '持续火力'], caliber: '5.56x45mm',
        baseStats: { recoil: 44, stability: 55, control: 47, range: 40, hipfire: 48, armor: 38 },
        baseDamage: 30, rpm: 858, magCapacity: 100
    },
    {
        id: 'm250', name: 'M250', type: '轻机枪', emoji: '🔫',
        tags: ['高伤害', '重火力'], caliber: '6.8x51mm',
        baseStats: { recoil: 40, stability: 50, control: 38, range: 40, hipfire: 45, armor: 53 },
        baseDamage: 55, rpm: 550, magCapacity: 125
    },
    {
        id: 'pkm', name: 'PKM', type: '轻机枪', emoji: '🔫',
        tags: ['高伤害', '经典'], caliber: '7.62x54mmR',
        baseStats: { recoil: 36, stability: 59, control: 42, range: 40, hipfire: 45, armor: 42 },
        baseDamage: 45, rpm: 669, magCapacity: 75
    },
    {
        id: 'qjb201', name: 'QJB201', type: '轻机枪', emoji: '🔫',
        tags: ['均衡', '稳定'], caliber: '5.8x42mm',
        baseStats: { recoil: 52, stability: 56, control: 50, range: 40, hipfire: 50, armor: 38 },
        baseDamage: 32, rpm: 785, magCapacity: 125
    },

    // ==================== 手枪 (7把) ====================
    {
        id: '357', name: '.357左轮', type: '手枪', emoji: '🔫',
        tags: ['高伤害', '左轮'], caliber: '.357 Magnum',
        baseStats: { recoil: 34, stability: 43, control: 62, range: 35, hipfire: 65, armor: 39 },
        baseDamage: 56, rpm: 182, magCapacity: 6
    },
    {
        id: '93r', name: '93R', type: '手枪', emoji: '🔫',
        tags: ['三连发', '快速'], caliber: '9x19mm',
        baseStats: { recoil: 44, stability: 38, control: 67, range: 22, hipfire: 78, armor: 32 },
        baseDamage: 34, rpm: 508, magCapacity: 12
    },
    {
        id: 'deagle', name: '沙漠之鹰', type: '手枪', emoji: '🦅',
        tags: ['超高伤害', '大后坐'], caliber: '.50 AE',
        baseStats: { recoil: 40, stability: 39, control: 66, range: 15, hipfire: 71, armor: 53 },
        baseDamage: 56, rpm: 207, magCapacity: 7
    },
    {
        id: 'g17', name: 'G17', type: '手枪', emoji: '🔫',
        tags: ['均衡', '标准'], caliber: '9x19mm',
        baseStats: { recoil: 42, stability: 35, control: 70, range: 27, hipfire: 75, armor: 25 },
        baseDamage: 27, rpm: 462, magCapacity: 17
    },
    {
        id: 'g18', name: 'G18', type: '手枪', emoji: '🔫',
        tags: ['全自动', '高射速'], caliber: '9x19mm',
        baseStats: { recoil: 30, stability: 43, control: 62, range: 10, hipfire: 67, armor: 16 },
        baseDamage: 23, rpm: 1172, magCapacity: 17
    },
    {
        id: 'm1911', name: 'M1911', type: '手枪', emoji: '🔫',
        tags: ['经典', '高伤害'], caliber: '.45 ACP',
        baseStats: { recoil: 39, stability: 40, control: 65, range: 15, hipfire: 67, armor: 30 },
        baseDamage: 40, rpm: 373, magCapacity: 7
    },
    {
        id: 'qsz92g', name: 'QSZ92G', type: '手枪', emoji: '🔫',
        tags: ['均衡', '基础'], caliber: '5.8x21mm',
        baseStats: { recoil: 55, stability: 41, control: 64, range: 27, hipfire: 77, armor: 32 },
        baseDamage: 34, rpm: 375, magCapacity: 15
    },

    // ==================== 特殊武器 (1把) ====================
    {
        id: 'bow', name: '复合弓', type: '特殊武器', emoji: '🏹',
        tags: ['无声', '高伤害'], caliber: '箭矢',
        baseStats: { recoil: 32, stability: 55, control: 66, range: 65, hipfire: 57, armor: 65 },
        baseDamage: 90, rpm: 182, magCapacity: 1
    }
];

const SLOT_NAMES = {
    muzzle: '枪口', barrel: '枪管', optic: '瞄具',
    foregrip: '前握把', rear_grip: '后握把', mag: '弹匣',
    stock: '枪托', functional: '功能配件', handguard: '护木',
    handguard_kit: '护木套件', cheek_pad: '托腮板',
    upper_rail: '上导轨', left_rail: '左导轨', right_rail: '右导轨',
    upper_patch: '上贴片', left_patch: '左贴片', right_patch: '右贴片',
    rail_bipod: '导轨脚架', side_optic: '侧瞄具', upper_side_optic: '上副瞄具',
    tactical_device: '战术设备', riser_optic: '增高座瞄具', lens_shade: '遮光罩',
    bolt: '拉机柄', stock_pad: '枪托垫', mag_seat: '弹匣座',
    grip_seat: '握把座', rear_grip_patch: '后握贴片', under_rail: '下导轨',
    lower_rail: '下导轨',
    stock_kit: '枪托套件', gas_block: '导气', trigger: '扳机',
    hammer: '击锤', bolt_carrier: '枪机', heat_shield: '隔热网',
    upper_handguard: '上护木', lever: '杠杆', bow_sight: '弓瞄具',
    bow_optic: '弓瞄具', bow_limb: '弓臂', bow_arm: '弓臂',
    bow_string: '弓弦', stabilizer: '稳定杆',
    arrow_rest: '箭台', grip_plate: '握把片', rear_grip_2: '后握把2',
    unique: '独特'
};