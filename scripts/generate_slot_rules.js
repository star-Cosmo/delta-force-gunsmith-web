// ===== 从 hpromax_rules.csv 生成 slotVisibilityRules =====
const fs = require('fs');
const path = require('path');

// 读取 CSV
const csvPath = path.join(__dirname, '..', 'hpromax_csv', 'hpromax_rules.csv');
const csvContent = fs.readFileSync(csvPath, 'utf-8');

// 解析 CSV（跳过 BOM 和标题行）
const lines = csvContent.trim().split('\n').map(l => l.trim());
const header = lines[0];
const dataLines = lines.slice(1);

// 解析 CSV 行
function parseCSVLine(line) {
    const result = [];
    let current = '';
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
        const ch = line[i];
        if (ch === '"') {
            inQuotes = !inQuotes;
        } else if (ch === ',' && !inQuotes) {
            result.push(current.trim());
            current = '';
        } else {
            current += ch;
        }
    }
    result.push(current.trim());
    return result;
}

// ===== 武器名 → weaponId 映射 =====
const weaponNameToId = {
    '.357左轮': '357',
    '725双管霰弹枪': '725',
    '杠杆式步枪': 'lever',
    '沙漠之鹰': 'deagle',
    '腾龙突击步枪': 'tenglong',
    '野牛冲锋枪': 'bizon',
    '勇士冲锋枪': 'warrior',
    'AK-12突击步枪': 'ak-12',
    'AKM突击步枪': 'akm',
    'AKS-74U突击步枪': 'aks-74u',
    'AR57突击步枪': 'ar57',
    'ASh-12战斗步枪': 'ash-12',
    'ASVal突击步枪': 'asval',
    'AUG突击步枪': 'aug',
    'AWM狙击步枪': 'awm',
    'CAR-15突击步枪': 'car-15',
    'FS-12霰弹枪': 'fs-12',
    'G3战斗步枪': 'g3',
    'K416突击步枪': 'k416',
    'K437突击步枪': 'k437',
    'KC17突击步枪': 'kc17',
    'M1014霰弹枪': 'm1014',
    'M14射手步枪': 'm14',
    'M16A4突击步枪': 'm16a4',
    'M249轻机枪': 'm249',
    'M250通用机枪': 'm250',
    'M4A1突击步枪': 'm4a1',
    'M700狙击步枪': 'm700',
    'M７战斗步枪': 'm7',
    'M82狙击步枪': 'm82',
    'M870霰弹枪': 'm870',
    'MCXLT突击步枪': 'mcxlt',
    'Mini-14射手步枪': 'mini-14',
    'MK47突击步枪': 'mk47',
    'MK4冲锋枪': 'mk4',
    'MP5冲锋枪': 'mp5',
    'MP7冲锋枪': 'mp7',
    'P90冲锋枪': 'p90',
    'PKM通用机枪': 'pkm',
    'PSG-1射手步枪': 'psg-1',
    'PTR-32突击步枪': 'ptr-32',
    'QBZ95-1突击步枪': 'qbz95-1',
    'QCQ171冲锋枪': 'qcq171',
    'QJB201轻机枪': 'qjb201',
    'R93狙击步枪': 'r93',
    'RM277突击步枪': 'rm277',
    'S12K霰弹枪': 's12k',
    'SCAR-H战斗步枪': 'scar-h',
    'SG552突击步枪': 'sg552',
    'SKS射手步枪': 'sks',
    'SMG-45冲锋枪': 'smg-45',
    'SR-25射手步枪': 'sr-25',
    'SR-3M紧凑突击步枪': 'sr-3m',
    'SR9射手步枪': 'sr9',
    'SV-98狙击步枪': 'sv-98',
    'SVCH精确射手步枪': 'svch',
    'SVD狙击步枪': 'svd',
    'UZI冲锋枪': 'uzi',
    'Vector冲锋枪': 'vector',
    'VSS射手步枪': 'vss',
};

// ===== 配件中文名 → 配件ID 映射 =====
// 基于 attachments.js 中的数据
const attachmentNameToId = {
    // 瞄具
    '灵眼3/7弹道计算狙击镜': 'op_spirit_37',
    '灵眼6/12弹道计算狙击镜': 'op_spirit_612',
    '眼6/12弹道计算狙击镜': 'op_spirit_612', // MP7 的 typo
    'M157火控光学系统': 'op_m157_fire', // 可能不在 attachments.js 中，使用推测 ID
    '6/12神射手变倍狙击镜': 'op_marksman_612',
    'LPVO多倍率战斗瞄具': 'op_lpvo',
    '3/7可调倍率狙击镜': 'op_sniper',
    '光学狙击8倍瞄准镜': 'op_optical_8x',
    '侦察1.5/5可调瞄准镜': 'op_scout',
    'MEO微型瞄具增高架': 'op_riser',
    '多用途战术增高架': 'op_riser2',
    '微型瞄具增高架': 'op_riser3', // 推测 ID，可能不同于 op_riser
    'M3狙击镜': 'op_m3_sniper',

    // 后握把
    '模块化AR后握把': 'rg_ar_tower',
    'AR重塔握把': 'rg_ar_tower',
    'AK重塔握把': 'rg_ak_tower',
    '.357左轮逐风者后握把': 'rg_357_storm',

    // 枪托
    '锚点导轨后托': 'st_anchor_rail',
    'QR高性能后托': 'st_qr_perf',
    'CT增强型后托': 'st_ct_enhanced',
    '影袭托芯枪托': 'st_shadow_core',
    'MRGS镂空枪托': 'st_mrgs_hollow',
    'PT3死士枪托': 'st_pt3_death',
    'PT1特种枪托': 'st_pt1_special',
    'UR特种战术枪托': 'st_ur_tactical2',
    '影袭导轨枪托': 'st_shadow_rail',
    '骨架狙击枪托': 'st_skeleton_sniper',
    'AK19枪托': 'st_ak19',
    '枢机先进战斗枪托': 'st_pivot_adv',
    '416稳固枪托': 'st_416_stable',
    '416轻型枪托': 'st_416_light',
    '精英轻型枪托': 'st_elite_light',
    '侵掠核心枪托': 'st_raid_core',
    '枢机稳固枪托': 'st_pivot_stable',
    '闪电导轨枪托': 'st_lightning_rail',
    'AK枪托尾盖': 'st_ak_endcap',
    'AK骨架枪托': 'st_ak',
    '实用轻型枪托': 'st_utility_light',
    '实用战术枪托': 'st_tactical',
    '实用稳定枪托': 'st_stable',
    '核心导轨枪托': 'st_core_rail',
    'AK折叠枪托': 'st_ak_folding',
    'AK聚合物枪托': 'st_ak_polymer',
    'S12K撞火枪托': 'st_s12k_bump',
    'M16A4稳定枪托': 'st_m16a4_stable',

    // 护木/套件
    'M14先进枪身系统': 'hg_m14_adv',
    'M14导轨一体枪托': 'hg_m14_rail',
    'M14聚合物一体枪托': 'hg_m14_poly',
    'M700黑色一体枪托': 'hg_m700_black',
    'M700稳定一体枪托': 'hg_m700_stable',
    'M700先进枪身系统': 'hg_m700_adv',
    'M700军规护木': 'hg_m700_mil',
    'SVD导轨护木': 'hg_svd_rail',
    'SVD聚合物护木': 'hg_svd_poly',
    'SKS先进护木': 'hg_sks_adv',
    'UZI性能护木': 'hg_uzi_perf',
    'UZI导轨护木': 'hg_uzi_rail',
    'M249脚架护木': 'hg_m249_bipod',
    'M249军规导轨护木': 'hg_m249_mil',
    'M249导轨护木': 'hg_m249_rail',
    'M870导轨护木': 'hg_m870_rail',
    'M1014导轨护木': 'hg_m1014_rail',
    'AKS74U导轨上护木': 'hg_aks74u_up',
    'AKS74U导轨下护木': 'hg_aks74u_low',
    'Mini-14聚合物枪托': 'hg_mini14_poly',
    'Mini-14聚合物一体枪托': 'hg_mini14_int',
    'Mini-14先进枪身系统': 'hg_mini14_adv',
    '野牛碳纤维护木': 'hg_bizon_carbon',
    '95长弓平台套件': 'hg_qbz95_kit',
    'SVCH一体式护木': 'hg_svch_int',
    'SVD握把转接': 'hg_svd_grip_adapter',
    'SR-25精英护木': 'hg_sr25_elite',
    'HVK格斗套件': 'fn_hvk_combat',
    'HVK链锯套件': 'fn_hvk_saw',
    'HVK双发套件': 'fn_hvk_double',

    // 枪管 - .357
    '.357左轮逐风者长枪管': 'br_357_storm_l',
    '.357左轮逐风者枪管': 'br_357_storm',

    // 枪管 - 725
    '725双管霰弹枪鹰隼长枪管': 'br_725_falcon_l',

    // 枪管 - 杠杆式步枪
    '杠杆式步枪拓荒者枪管': 'br_lever_pioneer',
    '杠杆式步枪猎鹿人枪管': 'br_lever_deer',
    '杠杆式步枪骨架枪托': 'st_lever_skeleton',

    // 枪管 - 腾龙
    '新式蛟龙战术长枪管': 'br_tenglong_jiaolong',

    // 枪管 - 野牛
    'QR高性能后托': 'st_qr_perf',

    // 枪管 - 勇士
    '勇士海狸枪管': 'br_warrior_beaver',
    '勇士战术枪管': 'br_warrior_tactical',

    // 枪管 - AK-12
    'AK12精英脚架长枪管': 'br_ak12_elite_bipod_l',
    'AK12前线长枪管': 'br_ak12_front_l',

    // 枪管 - AKM
    'AKM性能枪管组合': 'br_akm_perf',
    'AKM海狸长枪管组合': 'br_akm_beaver_l',
    'AKM海狸枪管组合': 'br_akm_beaver_s',
    'AKM超然长枪管组合': 'br_akm_trans',
    'AKM实用长枪管组合': 'br_akm_prac_l',
    'AKM实用标准枪管组合': 'br_akm_prac_std',

    // 枪管 - AKS-74U
    'AKS-74U聚合物弹鼓75发': 'ma_aks74u_75',
    'AKS-74U聚合物弹鼓75': 'ma_aks74u_75',

    // 枪管 - AR57
    'AR57激流超长枪管': 'br_ar57_rapid_l',
    '夜莺一体消音组合': 'br_ar57_nightingale',
    '共振二代一体枪托': 'st_resonance_g2',
    '禁区一体枪托': 'st_forbidden',

    // 枪管 - ASh-12
    // HVK双发套件 already mapped

    // 枪管 - ASVal
    'ASVal刺客高级枪管': 'br_asval_assassin',
    'VSS海啸长枪管组合': 'br_vss_tsunami_l',
    'VSS精英一体枪托': 'st_vss_elite',

    // 枪管 - AUG
    'AUG晨零一体消音管': 'br_aug_morning',
    'AUG精英脚架长枪管': 'br_aug_elite_bipod_l',
    'AUG尖兵标准枪管': 'br_aug_vanguard',
    'AUG实用集成三倍镜枪管': 'br_aug_integrated_3x',
    'AUG60发弹鼓': 'ma_aug_60',

    // 枪管 - AWM
    'AWM穹顶套件': 'hg_awm_dome',

    // 枪管 - CAR-15
    'AR特勤一体消音组合': 'br_ar_integrated',
    'AR特攻短枪管组合': 'br_ar_assault',
    'AR战壕标准枪管组合': 'br_ar_trench',
    'AR加百列长枪管组合': 'br_ar_gabriel',
    'AR标准枪管组合': 'br_ar_standard',
    'AR碳纤维枪管组合': 'br_ar_carbon',
    'M4弹鼓60发': 'ma_m4_60',

    // 枪管 - G3
    'G3平台神射枪管组合': 'br_g3_marksman',
    'G3加强长枪管组合': 'br_g3_enhanced_l',
    'G3飓风短枪管组合': 'br_g3_hurricane',
    'G3守卫标准枪管组合': 'br_g3_guardian',
    'G350发弹鼓': 'ma_g3_50',

    // 枪管 - K416
    'K416A8长枪管组合': 'br_k416a8_long',
    'K416特勤短枪管组合': 'br_k416_short',

    // 枪管 - K437
    'K437特攻一体消音枪管': 'br_k437_integrated',
    'K437长矛手长枪管组合': 'br_k437_lancer_l',
    'K43760发弹鼓': 'ma_k437_60',

    // 枪管 - KC17
    'KC17影舞者消音': 'br_kc17_shadow',

    // 枪管 - M1014
    '1014固定枪托': 'st_1014_fixed',

    // 枪管 - M14
    'M14洞察超长枪管': 'br_m14_insight',
    'M14轻语短枪管': 'br_m14_light',
    'M14漫游标准枪管': 'br_m14_wander',
    'M1450发弹鼓': 'ma_m14_50',

    // 枪管 - M249
    'M249脚架护木': 'hg_m249_bipod',

    // 枪管 - M4A1
    'M16A4稳定枪托': 'st_m16a4_stable',

    // 枪管 - M700
    'M700一体消音管': 'br_m700_integrated',

    // 枪管 - M7
    'M7灵蜥短枪管': 'br_m7_lizard',
    'M7堤风超长枪管组合': 'br_m7_dyke_l',
    'M7实用长枪管组合': 'br_m7_prac_l',

    // 枪管 - M82
    '短吻鳄枪管组合': 'br_m82_gator',

    // 枪管 - MCXLT
    'MCX LT焰魂枪管': 'br_mcxlt_flame',
    'MCX LT猎手枪管': 'br_mcxlt_hunter',

    // 枪管 - Mini-14
    'Mini-14 20发弹匣': 'ma_mini14_20',

    // 枪管 - MK47
    'MK47鏖战枪管': 'br_mk47_fierce',

    // 枪管 - MK4
    'MK4深空镀铬枪管': 'br_mk4_deepspace',
    'MK4击剑手枪管': 'br_mk4_fencer',

    // 枪管 - MP5
    'MP5SD特勤一体消音枪管': 'br_mp5_sd',
    'MP5斥候长枪管组合': 'br_mp5_scout',
    'MP5隐蔽短枪管组合': 'br_mp5_covert',
    'MP5战术枪管组合': 'br_mp5_tactical',
    'MP5性能枪管组合': 'br_mp5_perf',
    'MP5 50发弹鼓': 'ma_mp5_50',

    // 枪管 - MP7
    'MP7蜂刺长枪管组合': 'br_mp7_stinger_l',
    'MP7增强枪管组合': 'br_mp7_enhanced',

    // 枪管 - P90
    'P90长弓精钢枪管': 'br_p90_longbow',
    'P90重攻长枪管': 'br_p90_heavy_l',
    'P90猎豹重枪管': 'br_p90_cheetah',

    // 枪管 - PKM
    'PKM地平线重枪管': 'br_pkm_horizon',
    'PKM壕战短枪管': 'br_pkm_trench',

    // 枪管 - PTR-32 (uses G3 barrels)
    // Already mapped

    // 枪管 - QBZ95-1
    'QBZ95-1长弓枪管组合': 'br_qbz95_longbow',
    'QBZ95战术枪管': 'br_qbz95_tactical',
    'QBZ95-1实用短枪管': 'br_qbz95_prac_short',
    '5.8新式60发弹鼓': 'ma_qbz_60',

    // 枪管 - QCQ171
    'QCQ171新式渗透一体消音枪管': 'br_qcq171_infil',
    'QCQ171新式红缨战术长枪管': 'br_qcq171_red_l',
    'QCQ171新式狡兔短枪管组合': 'br_qcq171_rabbit',
    '新式75发扩容弹鼓': 'ma_qcq171_75',

    // 枪管 - QJB201
    'QJB201新式重锤战术枪管': 'br_qjb201_hammer',
    'QJB201新式獠牙短枪管': 'br_qjb201_fang',

    // 枪管 - R93
    'R93裂变长枪管': 'br_r93_fission_l',

    // 枪管 - RM277
    'RM277鲸鲨枪管组合': 'br_rm277_whale',
    'RM277重型一体枪管': 'br_rm277_heavy',

    // 枪管 - S12K
    'S12K破阵长枪管组合': 'br_s12k_breaker_l',
    'S12K防御者短枪管组合': 'br_s12k_defender',
    'S12K实用长枪管组合': 'br_s12k_prac_l',
    'S12K实用短枪管组合': 'br_s12k_prac_short',

    // 枪管 - SCAR-H
    'SCARH海狸长枪管': 'br_scar_beaver',
    'SCARH 50发弹鼓': 'ma_scar_50',

    // 枪管 - SG552
    'SG552猎犬轻型枪管': 'br_sg552_hound',
    'SG552骑士重枪管': 'br_sg552_knight',

    // 枪管 - SMG-45
    'SMG45裂变长枪管': 'br_smg45_fission_l',
    'SMG45竹鼠短枪管': 'br_smg45_bamboo',
    'SMG长弩超长枪管': 'br_smg45_crossbow_l',
    'SMG45实用重枪管': 'br_smg45_prac_heavy',

    // 枪管 - SR-25
    'SR25瞬息短枪管': 'br_sr25_moment',
    'SR25追风长枪管': 'br_sr25_wind_l',
    'SR25新星超长枪管': 'br_sr25_nova_l',

    // 枪管 - SR-3M
    'SR-3M铸钢战术枪管': 'br_sr3m_steel',

    // 枪管 - SVCH
    'SVCH碳纤长枪管': 'br_svch_carbon_l',
    'SVCH凌风并联弹匣': 'ma_svch_twin',

    // 枪管 - UZI
    'UZI军需长枪管': 'br_uzi_supply_l',
    'UZI突击标准枪管': 'br_uzi_assault',
    'UZI竞赛性能长枪管': 'br_uzi_race_l',

    // 枪管 - Vector
    'Vector长剑超长枪管组合': 'br_vec_longsword',
    'Vector堡垒重枪管组合': 'br_vec_fortress',
    'Vector导轨枪管组合': 'br_vec_rail',
    'Vector扩容CMAG70发': 'ma_vec_70',

    // 其他
    'AKM大弹鼓70发': 'ma_akm_70',
    'svd聚合物护木': 'hg_svd_poly',
};

// ===== 槽位中文名 → 槽位 key 映射 =====
const slotNameToKey = {
    '遮光罩': 'lens_shade',
    '上副瞄具': 'upper_side_optic',
    '瞄准镜': 'optic',
    '前握把': 'foregrip',
    '导轨脚架': 'rail_bipod',
    '上导轨': 'upper_rail',
    '右导轨': 'right_rail',
    '上贴片': 'upper_patch',
    '左导轨': 'left_rail',
    '右贴片': 'right_patch',
    '左贴片': 'left_patch',
    '枪托': 'stock',
    '战术设备': 'tactical_device',
    '增高座瞄具': 'riser_optic',
    '托腮板': 'cheek_pad',
    '弹匣座': 'mag_seat',
    '枪托垫': 'stock_pad',
    '握把座': 'grip_seat',
    '后握把': 'rear_grip',
    '后握贴片': 'rear_grip_patch',
    '护木': 'handguard',
    '护木套件': 'handguard_kit',
    '侧瞄具': 'side_optic',
    '枪口': 'muzzle',
    '隔热网': 'heat_shield',
    '弹匣': 'mag',
    '下导轨': 'lower_rail',
    '后握把2': 'rear_grip_2',
    '枪机': 'bolt_carrier',
    '导气': 'gas_block',
    '扳机': 'trigger',
    '击锤': 'hammer',
    '杠杆': 'lever',
    '上护木': 'upper_handguard',
    '弓臂': 'bow_arm',
    '弓弦': 'bow_string',
    '稳定杆': 'stabilizer',
    '箭台': 'arrow_rest',
    '握把片': 'grip_plate',
    '弓瞄具': 'bow_optic',
};

// ===== 处理数据 =====
// 使用 (triggerId, action) 作为 key，因为同一 trigger 可能同时有 add 和 disable
const weaponRules = {}; // { weaponId: { 'triggerId|action': { trigger, action, slots: [] } } }

for (const line of dataLines) {
    if (!line.trim()) continue;
    const parts = parseCSVLine(line);
    if (parts.length < 5) continue;

    const csvWeaponId = parts[0];
    const weaponName = parts[1];
    const triggerName = parts[2];
    const action = parts[3]; // 'add' or 'disable'
    const slotName = parts[4];

    // 映射 weaponId
    let weaponId = weaponNameToId[weaponName];
    if (!weaponId) {
        weaponId = csvWeaponId;
        console.warn(`Unknown weapon: ${weaponName} (${csvWeaponId})`);
    }

    // 映射 trigger ID
    const triggerId = attachmentNameToId[triggerName];
    if (!triggerId) {
        console.warn(`Unknown trigger: ${triggerName} for weapon ${weaponName}`);
        continue;
    }

    // 映射 slot key
    const slotKey = slotNameToKey[slotName];
    if (!slotKey) {
        console.warn(`Unknown slot: ${slotName} for weapon ${weaponName}`);
        continue;
    }

    const actionKey = action === 'add' ? 'show' : 'hide';
    const ruleKey = `${triggerId}|${actionKey}`;

    // 初始化
    if (!weaponRules[weaponId]) weaponRules[weaponId] = {};
    if (!weaponRules[weaponId][ruleKey]) {
        weaponRules[weaponId][ruleKey] = { trigger: triggerId, action: actionKey, slots: [] };
    }

    if (!weaponRules[weaponId][ruleKey].slots.includes(slotKey)) {
        weaponRules[weaponId][ruleKey].slots.push(slotKey);
    }
}

// ===== 生成 rules 数组 =====
const result = {};
for (const [weaponId, rulesMap] of Object.entries(weaponRules)) {
    const rules = Object.values(rulesMap);
    result[weaponId] = rules;
}

// ===== 输出 JSON =====
const outputPath = path.join(__dirname, '..', 'data', 'slot_visibility_rules.json');
fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf-8');
console.log(`Generated rules for ${Object.keys(result).length} weapons`);
console.log(`Output: ${outputPath}`);

// 打印每个武器的规则数量
for (const [weaponId, rules] of Object.entries(result).sort()) {
    console.log(`  ${weaponId}: ${rules.length} rules`);
}