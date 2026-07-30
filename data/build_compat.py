#!/usr/bin/env python3
"""Build compatibility.js from extracted_compatibility.json + attachments.js + weapons.js"""

import json
import re
import os
import zhconv

BASE = r'e:\work_station\delta-force-gunsmith-web\delta-force-gunsmith-web\data'

# ===== 1. Load extracted_compatibility.json =====
with open(os.path.join(BASE, 'extracted_compatibility.json'), 'r', encoding='utf-8') as f:
    extracted = json.load(f)

# ===== 2. Build attachment name → ID mapping from attachments.js =====
with open(os.path.join(BASE, 'attachments.js'), 'r', encoding='utf-8') as f:
    attachments_js = f.read()

# Match all { id:'...', name:'...', ... } patterns
name_to_id = {}
for m in re.finditer(r"id\s*:\s*'([^']+)'\s*,\s*name\s*:\s*'([^']+)'", attachments_js):
    aid = m.group(1)
    aname = m.group(2)
    # Convert traditional Chinese to simplified for matching
    aname_simp = zhconv.convert(aname, 'zh-cn')
    name_to_id[aname_simp] = aid
    # Also keep original
    if aname_simp != aname:
        name_to_id[aname] = aid

print(f"Total name→ID mappings: {len(name_to_id)}")

# Some manual mappings for names that don't match exactly
MANUAL_NAME_MAP = {
    # .357
    '.357左轮逐风者长枪管': 'br_357_long',
    '.357左轮逐风者枪管': 'br_357_std',
    '左轮实用长管': 'br_357_prac_long',
    '左轮实用短管': 'br_357_prac_short',
    '.357口径左轮长枪管': 'br_357_barrel',
    '冲锋枪回声消音器': 'mu_smg_echo',
    '净化手枪消音器': 'mu_pistol_pure',
    '精英手枪制退器': 'mu_elite_pistol',
    '实用手枪消焰器': 'mu_pistol_flame',
    '.357左轮逐风者后握把': 'rg_357_wind',
    '左轮狙击后握': 'rg_357_sniper',
    
    # 93R
    '93R战术枪管': 'br_93r_tactical',
    '93R远射超长枪管': 'br_93r_long',
    '93R实用轻枪管': 'br_93r_light',
    '93R实用重枪管': 'br_93r_heavy',
    '93R实用长枪管': 'br_93r_prac',
    'JAD下挂激光': 'fn_jad_laser',
    'OLIGHTBaldr ProR多功能手电': 'fn_olight_baldr',
    '下挂手枪灯': 'fn_under_light',
    '实用枪灯': 'fn_prac_light',
    'M9肉色操控后握': 'rg_m9_flesh',
    'M9木色稳定后握': 'rg_m9_stable',
    'M9黑色均衡后握': 'rg_m9_black',
    '93R 24发弹匣': 'ma_93r_24',
    '93R 18发弹匣': 'ma_93r_18',
    
    # Deagle
    '沙漠之鹰镂空竞赛套件': 'br_deagle_comp',
    '沙鹰竞技枪管': 'br_deagle_race',
    '沙鹰膛线长枪管': 'br_deagle_rifled',
    '沙鹰13发弹匣': 'ma_deagle_13',
    '沙鹰竞技后握': 'rg_deagle',
    
    # G17
    'G17战术重枪管': 'br_g17_tactical',
    'G17轻量化枪管': 'br_g17_light',
    'G系手枪33发弹匣': 'ma_g_33',
    'G系手枪25发弹匣': 'ma_g_25',
    'XK橡胶套后握': 'rg_xk_rubber',
    'XK防滑纹后握': 'rg_xk_grip',
    
    # G18
    'G18冲击长枪管': 'br_g18_impact',
    
    # M1911
    'M1911夜鹰战术枪管': 'br_m1911_tactical',
    'M1911夜鹰战术扳机': 'fn_m1911_trigger',
    'M1911夜鹰战术击锤': 'fn_m1911_hammer',
    'M191111发扩容弹匣': 'ma_m1911_11',
    'M1911夜鹰战术后握把': 'rg_m1911_tactical',
    
    # QSZ92G
    'QSZ92G响尾蛇战术枪管': 'br_qsz92g_tactical',
    
    # Bow
    '复合弓无框瞄具': 'bo_no_frame',
    '复合弓智能倍镜': 'bo_smart',
    '复合弓重型弓臂': 'ba_heavy',
    '复合弓轻型弓臂': 'ba_light',
    'HVK速射箭匣': 'ma_hvk',
    '复合弓增强弓弦': 'bs_enhanced',
    '复合弓稳定平衡杆': 'sb_stable',
    '复合弓竞赛平衡杆': 'sb_comp',
    '复合弓竞赛箭台': 'ar_comp',
    '复合弓增强握把片': 'gp_enhanced',
    '复合弓均衡握把片': 'gp_balanced',
    
    # 725
    '725双管霰弹枪鹰隼长枪管': 'br_725_falcon',
    '725双管霰弹枪拦截者截短枪管': 'br_725_interceptor',
    '725双管霰弹枪牛仔消音器': 'mu_725_cowboy',
    '725双管霰弹枪守望者枪托': 'st_725_watcher',
    '725双管霰弹枪州长短枪托': 'st_725_short',
    
    # MK4
    'MK4深空镀铬枪管': 'br_mk4_deepspace',
    'MK4击剑手枪管': 'br_mk4_exclusive',

    # Lever action
    '杠杆式步枪拓荒者枪管': 'br_lever_pioneer',
    '杠杆式步枪猎鹿人枪管': 'br_lever_hunter',
    '杠杆式步枪守望者钢制制退器': 'mu_lever_steel',
    '杠杆式步枪骨架枪托': 'st_lever_skeleton',
    '杠杆式步枪战锤战术枪托': 'st_lever_hammer',
    '杠杆式步枪运动枪托': 'st_lever_sport',
    '杠杆式步枪无托后握把': 'st_lever_bullpup',
    '杠杆式步枪稳固狙击枪托': 'st_lever_stable',
    '杠杆式步枪犀牛杠杆': 'lv_rhino',
    '杠杆式步枪蜂鸟杠杆': 'lv_hummingbird',
    '杠杆式步枪守望者狙击镜': 'op_lever_watcher',
}

# Also add some common optics names from hpromax that differ from attachments.js
# Many optics in hpromax use slightly different names
OPTICS_MAP = {
    '先进白热成像战斗瞄准镜': 'op_thermal_combat',  # not in attachments.js
    '先进热融合全息瞄准镜': 'op_thermal_holo',  # not in attachments.js  
    'VMX无框瞄具': 'op_vmx',
    '1p33 2/4倍瞄准镜': 'op_1p33',
    'UHX全息瞄准镜': 'op_uhx',
    '棱镜通用二倍光学瞄具': 'op_prism_2x',
    '灵眼3/7弹道计算狙击镜': 'op_spirit_37',
    'M157火控光学系统': 'op_m157',
    '视点3倍瞄准镜': 'op_viewpoint_3x',
    '1p-29俄制3倍瞄准镜': 'op_1p29',
    'LPVO多倍率战斗瞄具': 'op_lpvo',
    '3/7可调倍率狙击镜': 'op_sniper',
    '侦察1.5/5可调瞄准镜': 'op_scout',
    'HAMR组合瞄准镜': 'op_hamr',
    'MEO微型瞄具增高架': 'op_riser',
    '多用途战术增高架': 'op_riser2',
    '微型瞄具增高架': 'op_riser',
    'M3狙击镜': 'op_m3_sniper',
    'ACOG精准六倍镜': 'op_acog_6x',
    'Osight微型瞄准镜': 'op_osight',
    'Cobra准直式瞄准镜': 'op_cobra',
    '战斗红点瞄准镜': 'op_combat_rd',
    '微型红点瞄准镜': 'op_mini_rd',
    'okp-7反射瞄准镜': 'op_okp7',
    'XCOG突击3.5倍瞄准镜': 'op_xcog',
    'XRO快速反应瞄准镜': 'op_xro',
    '全景红点瞄准镜': 'op_panorama',
    'AP5000反射式瞄准镜': 'op_ap5000',
    '全息二型瞄准镜': 'op_holo_ii',
    '反射式瞄准镜': 'op_red',
    '俄式准直二倍瞄准镜': 'op_ru_2x',
    '全息瞄准镜': 'op_holo',
    'PSO战斗2.5倍瞄准镜': 'op_pso_25',
    'PSO狙击8倍瞄准镜': 'op_pso_8x',
    '八倍先进热成像狙击镜': 'op_thermal_8x',
    '灵眼6/12弹道计算狙击镜': 'op_spirit_612',
    '6/12神射手变倍狙击镜': 'op_marksman_612',
    '光学狙击8倍瞄准镜': 'op_optical_8x',
    '侧置微型红点瞄准镜': 'op_side',
    '侧置Osight微型瞄准镜': 'op_osight_side',
    '侧置XRO快速反应瞄准镜': 'op_xro_side',
    '侧置全景红点瞄准镜': 'op_side_pano',
    '侧置战斗红点瞄准镜': 'op_side_combat',
}

# Combine all manual mappings
MANUAL_NAME_MAP.update(OPTICS_MAP)

# Additional common muzzle/barrel/etc mappings from hpromax
MORE_MANUAL = {
    # Common muzzle devices
    '喇叭口消焰器': 'mu_flare_bell',
    '共鸣狙击枪消音器': 'mu_resonance',
    '实用霰弹喉缩': 'mu_shotgun_choke',
    'PBS俄式消音器': 'mu_pbs',
    '先进多口径消音器': 'mu_advanced',
    '鸟笼消焰器': 'mu_bird',
    '钛金竞赛制退器': 'mu_titanium',
    '堡垒水平补偿器': 'mu_fortress',
    '漩涡消焰器': 'mu_swirl',
    '实用消音器': 'mu_practical',
    'DTK制退器': 'mu_dtk',
    '死寂消音器': 'mu_dead',
    '实用消焰器': 'mu_flame',
    '霰弹枪巨炮制退器': 'mu_shotgun_cannon',
    '炽火抑制器': 'mu_inferno',
    '蛛网钛制制退器': 'mu_web_titanium',
    'FFC双流制退器': 'mu_ffc_dual',
    '钢制膛口制退器': 'mu_steel_brake',
    '沙暴垂直补偿器': 'mu_sandstorm',
    '海神消焰器': 'mu_poseidon',
    '薪火螺旋消焰器': 'mu_xinhuo',
    'M7实用消音器': 'mu_m7_silencer',
    '轻语战术消音器': 'mu_whisper',
    
    # Common foregrips  
    '竞赛阻手器': 'fg_comp',
    '共振人体工学握把': 'fg_resonance',
    '相位战斗前握把': 'fg_phase',
    '实用垂直握把': 'fg_vertical',
    '战术三角握把': 'fg_tactical',
    '密令斜角握把': 'fg_angled',
    '折叠握把': 'fg_fold',
    'VFG骑士前握把': 'fg_vfg',
    'CR棱镜阻手器': 'fg_cr_prism',
    'K1精英斜角握把': 'fg_k1_elite',
    'X25U斜侧战斗握把': 'fg_x25u',
    'ZFSG战术握把': 'fg_zfsg',
    '黎明三角手电筒握把': 'fg_dawn_tri',
    '斜角阻手器': 'fg_angled_stop',
    '迷你阻手器': 'fg_mini_stop',
    '破晓垂直手电握把': 'fg_dawn_vert',
    'EC通用前阻手': 'fg_ec_stop',
    '幻影垂直握把': 'fg_phantom_vert',
    '密令斜角握把': 'fg_secret_angle',
    '战术三角握把': 'fg_tactical_tri',
    '斜角阻手器': 'fg_angle_stop',
    '相位战斗前握把': 'fg_phase_battle',
    '实用垂直握把': 'fg_util_vert',
    '共振三代握把': 'fg_resonance3',
    'VFG骑士前握把': 'fg_vfg_knight',
    '共振二代前握把': 'fg_resonance2',
    '伸缩脚架握把': 'fg_telescope_bipod',
    '幻影垂直握把': 'fg_phantom_vert',
    '战术垂直握把': 'fg_tactical_vert',
    'RK-0前握把': 'fg_rk0',
    '伸缩脚架握把': 'fg_bipod_grip',
    '共振人体工程握把': 'fg_resonance',
    
    # Common rear grips
    '幻影后握把': 'rg_phantom',
    '飓风D-1后握把': 'rg_hurricane',
    '稳固握把底座': 'rg_stable',
    'XK竞技后握': 'rg_xk',
    '射手D-2后握把': 'rg_shooter',
    'AK重塔握把': 'rg_ak_tower',
    'AR重塔握把': 'rg_ar_tower',
    'M9肉色操控后握': 'rg_m9_flesh',
    'RK3后握把': 'rg_rk3',
    'M7稳定后握把': 'rg_m7_stable',
    'M9黑色均衡后握': 'rg_m9_black',
    '稳定AK后握把': 'rg_ak_stable',
    'XK防滑纹后握': 'rg_xk_grip',
    'MP7稳固后握把': 'rg_mp7_stable',
    '共振二代一体枪托': 'rg_resonance_g2',
    
    # Mags
    '5.56x45 30发铝匣': 'ma_556_alu',
    '5.56x45 30发聚合物弹匣': 'ma_556_poly',
    'M4扩充45发弹匣': 'ma_m4_45',
    'M4 60发弹鼓': 'ma_m4_60',
    'AKM 30发聚合物弹匣': 'ma_akm_30',
    'AKM 40发延长匣': 'ma_akm_40',
    'AKM 70发大弹鼓': 'ma_akm_70',
    'SCAR-H 30发弹匣': 'ma_scar_30',
    'SCAR-H 50发弹鼓': 'ma_scar_50',
    'M14 20发弹匣': 'ma_m14_20',
    'M14 30发弹匣': 'ma_m14_30',
    'M14 50发弹鼓': 'ma_m14_50',
    'MP5 50发弹鼓': 'ma_mp5_50',
    'Vector 30发扩充弹匣': 'ma_vec_30',
    'Vector扩充40发弹匣': 'ma_vec_40',
    'Vector扩充CMAG70发': 'ma_vec_70',
    
    # Stocks
    '闪电导轨枪托': 'st_lightning',
    '骨架狙击枪托': 'st_skeleton',
    '实用稳定枪托': 'st_stable',
    '实用战术枪托': 'st_tactical',
    '精英轻型枪托': 'st_elite_light',
    '实用轻型枪托': 'st_elite_light2',
    'UR特种战术枪托': 'st_ur_tactical',
    '核心导轨枪托': 'st_core_rail',
    '通用托腮板': 'st_universal_pad',
    'PT1特种枪托': 'st_pt1_special',
    'PT3死士枪托': 'st_pt3_death',
    '侵掠核心枪托': 'st_invasion',
    'AK骨架枪托': 'st_ak',
    'AK聚合物枪托': 'st_ak_polymer',
    'AK折叠枪托': 'st_ak_folding',
    'AK枪托缓冲垫': 'st_ak_bumper',
    'AK枪托尾盖': 'st_ak_endcap',
    'MP5尾盖': 'st_mp5',
    'MP5伸缩枪托': 'st_mp5_telescope',
    'MP5K折叠枪托': 'st_mp5k_fold',
    'M4缓冲托芯': 'st_m4_buffer',
    '416稳固枪托': 'st_416_sturdy',
    '416-C伸缩枪托': 'st_416c_telescope',
    '416轻型枪托': 'st_416_light',
    '影袭导轨枪托': 'st_shadow_rail',
    '影袭托芯枪托': 'st_shadow_buffer',
    'M14 EBR枪托': 'st_m14_ebr',
    'SR-3M枪托尾盖': 'st_sr3m',
    '1014伸缩托(折叠)': 'st_1014',
    '1014固定枪托': 'st_1014_fixed',
    '1014伸缩托(展开)': 'st_1014_extend',
    '枢机先进战斗枪托': 'st_pivot_adv',
    '枢机稳固枪托': 'st_pivot_sturdy',
    'MRGS镂空枪托': 'st_mrgs_hollow',
    'Vector共振一体式枪托': 'st_vector_res',
    'Vector枪托尾盖': 'st_vector_end',
    'SCAR-H枪托尾盖': 'st_scar_end',
    'AS Val枪托尾盖': 'st_asval_end',
    'MP7枪托尾盖': 'st_mp7_end',
    'QBZ托腮板': 'st_qbz_pad',
    'M700托腮板': 'st_m700_pad',
    '锚点导轨后托': 'st_anchor_rail',
    'QR高性能后托': 'st_qr_perf',
    'CT增强型后托': 'st_ct_enhanced',
    'UR特種战术枪托': 'st_ur_tactical2',
    '影袭托芯枪托': 'st_shadow_core',
    '骨架狙击枪托': 'st_skeleton_sniper',
    '416稳固枪托': 'st_416_stable',
    '侵掠核心枪托': 'st_raid_core',
    '枢机稳固枪托': 'st_pivot_stable',
    '闪电导轨枪托': 'st_lightning_rail',
    '实用轻型枪托': 'st_utility_light',
    
    # Functional
    '组合式护木片': 'fn_combined',
    '游侠护木片': 'fn_ranger',
    'KC猎犬护木片': 'fn_kc_hound',
    '狂蜂护木片': 'fn_kuangfeng',
    'PERST-7蓝色激光镭指': 'fn_laser',
    'PEQ-2红色激光镭指': 'fn_peq2',
    'LA-3C绿色激光镭指': 'fn_la3c',
    'DBAL-X2紫色激光镭指': 'fn_dbal_x2',
    'OLIGHT Baldr Pro R多功能手电': 'fn_olight_baldr',
    'OLIGHT Odin S战术手电': 'fn_olight_odin',
    'OLIGHTBaldr Pro R多功能手电': 'fn_olight_baldr',
    'OLIGHTWARRIOR3S战术手电': 'fn_warrior_light',
    '耀斑战术手电': 'fn_flare',
    'CAR15绑手电筒': 'fn_car15_light',
    '下挂手枪灯': 'fn_under_light',
    '实用枪灯': 'fn_prac_light',
    '蜜獾小口径快拔套(黑)': 'fn_honey_bk',
    '蜜獾小口径快拔套(沙)': 'fn_honey_sd',
    '蜜獾小口径快拔套(绿)': 'fn_honey_gn',
    '野蜂冲锋枪快拔套(沙)': 'fn_wasp_sd',
    '野蜂冲锋枪快拔套(黑)': 'fn_wasp_bk',
    '野蜂冲锋枪快拔套(绿)': 'fn_wasp_gn',
    '灰熊全威力快拔套(黑)': 'fn_grizzly_bk',
    '灰熊全威力快拔套(沙)': 'fn_grizzly_sd',
    '灰熊全威力快拔套(绿)': 'fn_grizzly_gn',
    '郊狼中间威力快拔套(黑)': 'fn_coyote_bk',
    '郊狼中间威力快拔套(沙)': 'fn_coyote_sd',
    '郊狼中间威力快拔套(绿)': 'fn_coyote_gn',
    'AWM两脚架': 'fn_awm_bipod',
    'AUG脚架': 'fn_aug_bipod',
    'PKM两脚架': 'fn_pkm_bipod',
    'SV98两脚架': 'fn_sv98_bipod',
    '实用两脚架': 'fn_gen_bipod',
    'AK12脚架': 'fn_ak12_bipod',
    'PSG-1精确扳机': 'fn_psg_trigger',
    'M1911夜鹰战术击锤': 'fn_m1911_hammer',
    'M1911夜鹰战术扳机': 'fn_m1911_trigger',
    'R93枪管隔热网': 'fn_r93_net',
    '蜂网遮光罩': 'fn_honeycomb',
    
    # Handguards
    'M14聚合物一体枪托': 'hg_m14_poly',
    'M14导轨一体枪托': 'hg_m14_rail',
    'M14先进枪身系统': 'hg_m14_adv',
    'AWM穹顶套件': 'hg_awm_dome',
    'M700黑色一体枪托': 'hg_m700_black',
    'M700稳定一体枪托': 'hg_m700_stable',
    'M700先进枪身系统': 'hg_m700_adv',
    'M700军规护木': 'hg_m700_mil',
    'SVD导轨护木': 'hg_svd_rail',
    'SVD聚合物护木': 'hg_svd_poly',
    'SKS先进护木': 'hg_sks_adv',
    'UZI性能护木': 'hg_uzi_perf',
    'UZI导轨护木': 'hg_uzi_rail',
    'M249导轨护木': 'hg_m249_rail',
    'M249脚架护木': 'hg_m249_bipod',
    'M249军规导轨护木': 'hg_m249_mil',
    'M870导轨护木': 'hg_m870_rail',
    'M1014导轨护木': 'hg_m1014_rail',
    'AKS-74U导轨上护木': 'hg_aks74u_up',
    'AKS-74U导轨下护木': 'hg_aks74u_low',
    'Mini-14聚合物枪托': 'hg_mini14_poly',
    'Mini-14聚合物一体枪托': 'hg_mini14_int',
    'Mini-14先进枪身系统': 'hg_mini14_adv',
    '野牛碳纤维护木': 'hg_bizon_carbon',
    '95长弓平台套件': 'hg_qbz95_kit',
    'SR-25精英护木': 'hg_sr25_elite',
    
    # Rail attachments
    '组合式护木片(上导轨)': 'ur_combo',
    '狂蜂护木片(上导轨)': 'ur_bee',
    'DD蟒蛇护木片(上导轨)': 'ur_dd',
    'KC猎犬护木片(上导轨)': 'ur_kc',
    '游侠护木片(上导轨)': 'ur_ranger',
    '组合式护木片(左导轨)': 'lr_combo',
    '狂蜂护木片(左导轨)': 'lr_bee',
    'DD蟒蛇护木片(左导轨)': 'lr_dd',
    'KC猎犬护木片(左导轨)': 'lr_kc',
    '游侠护木片(左导轨)': 'lr_ranger',
    '组合式护木片(右导轨)': 'rr_combo',
    '狂蜂护木片(右导轨)': 'rr_bee',
    'DD蟒蛇护木片(右导轨)': 'rr_dd',
    'KC猎犬护木片(右导轨)': 'rr_kc',
    '游侠护木片(右导轨)': 'rr_ranger',
    '组合式护木片(上贴片)': 'up_combo',
    '狂蜂护木片(上贴片)': 'up_bee',
    'DD蟒蛇护木片(上贴片)': 'up_dd',
    'KC猎犬护木片(上贴片)': 'up_kc',
    '游侠护木片(上贴片)': 'up_ranger',
    '组合式护木片(左贴片)': 'lp_combo',
    '狂蜂护木片(左贴片)': 'lp_bee',
    'DD蟒蛇护木片(左贴片)': 'lp_dd',
    'KC猎犬护木片(左贴片)': 'lp_kc',
    '游侠护木片(左贴片)': 'lp_ranger',
    '组合式护木片(右贴片)': 'rp_combo',
    '狂蜂护木片(右贴片)': 'rp_bee',
    'DD蟒蛇护木片(右贴片)': 'rp_dd',
    'KC猎犬护木片(右贴片)': 'rp_kc',
    '游侠护木片(右贴片)': 'rp_ranger',
    
    # Rail bipod
    '实用两脚架': 'rb_util',
    
    # QJB201 specific
    'QJB201脚架': 'fn_qjb201_bipod',
    'QJB201新式稳固导气箍': 'gb_qjb201_stable',
    'QJB201新式高速导气箍': 'gb_qjb201_speed',
    '兵锋新式握把': 'rg_qjb201_soldier',
    '新式侍剑重型握把': 'rg_qjb201_heavy',
    '新式尖兵轻型握把': 'rg_qjb201_light',
    '5.8新式45发扩容弹匣': 'ma_qbz_45',
    '5.8新式30发弹匣': 'ma_qbz_30',
    '5.8新式60发弹鼓': 'ma_qbz_60',
    
    # Tenglong specific
    'OLIGHTWARRIOR3S战术手电': 'fn_warrior_light',
    
    # M7 specific (M7 has "M７" with fullwidth 7)
    'M7战斗步枪': 'm7',
    
    # Additional common names
    '无': 'none',
    
    # More missing mappings from fix_attachments
    '耀斑战术手电': 'fn_flare',
    '破晓垂直手电握把': 'fg_dawn_vert',
    '共振人体工程握把': 'fg_resonance',
    'OLIGHTBaldr Pro R多功能手电': 'fn_olight_baldr',
    '灰熊全威力快拔套（绿）': 'fn_grizzly_gn',
    'DD蟒蛇护木片': 'fn_combined',
    'OLIGHTOdinS战术手电': 'fn_olight_odin',
    'OLIGHTBaldrProR多功能手电': 'fn_olight_baldr',
    'OLIGHTWARRIOR3S战术手电': 'fn_warrior_light',
    '黎明三角手电握把': 'fg_dawn_tri',
    '竞赛阻手器': 'fg_comp',
    '侵袭后握把': 'rg_invasion',
    '416实用后握把': 'rg_416_prac',
    '模块化AR后握把': 'rg_ar_modular',
    'ARMOE后握把': 'rg_ar_moe',
    'AR MOE后握把': 'rg_ar_moe',
    '天蝎座后握把': 'rg_ak_scorpion',
    'AK镂空握把': 'rg_ak_skeleton',
    '射手AK后握把': 'rg_ak_shooter',
    '实用AK后握把': 'rg_ak_prac',
    'AK勇火消音器': 'mu_ak_brave',
    'AK实用补偿器': 'mu_ak_comp',
    'AK19枪托': 'st_ak19',
    '禁区一体枪托': 'st_restricted',
    'AR60发扩容弹匣': 'ma_ar_60',
    'M4弹鼓60发': 'ma_m4_60',
    'M4扩充45发弹匣': 'ma_m4_45',
    '蜜獾小口径快拔套(黑）': 'fn_honey_bk',
    '蜜獾小口径快拔套(沙）': 'fn_honey_sd',
    '蜜獾小口径快拔套（沙）': 'fn_honey_sd',
    '蜜獾小口径快拔套（黑）': 'fn_honey_bk',
    '野蜂冲锋枪快拔套(黑）': 'fn_wasp_bk',
    '野蜂冲锋枪快拔套（沙）': 'fn_wasp_sd',
    '野蜂冲锋枪快拔套（黑）': 'fn_wasp_bk',
    '灰熊全威力口径快拔套（黑）': 'fn_grizzly_bk',
    '灰熊全威力快拔套（沙）': 'fn_grizzly_sd',
    '郊狼中间威力口径快拔套(黑)': 'fn_coyote_bk',
    '郊狼中间威力快拔套（沙）': 'fn_coyote_sd',
    '郊狼中间威力快拔套(沙）': 'fn_coyote_sd',
    '泽宁特拉机柄帽': 'fn_zentinert',
    'G3平台神射枪管组合': 'br_g3_marksman',
    'OLIGHT Odin S战术手电': 'fn_olight_odin',
    'OLIGHT Baldr Pro R多功能手电': 'fn_olight_baldr',
    '霰弹枪回声消音器': 'mu_shotgun_echo',
    '霰弹枪涡流收束器': 'mu_shotgun_vortex',
    '霰弹枪囚笼补偿器': 'mu_shotgun_cage',
    '霰弹枪精密消音器': 'mu_shotgun_precision',
    '实用霰弹收束器': 'mu_shotgun_choke',
    '泰坦消音器': 'mu_titan_silencer',
    '俄系冲锋枪精密消音器': 'mu_ru_smg',
    'OPS消音器': 'mu_ops',
    'CAR15绑手电': 'fn_car15_light',
    
    # G3 platform
    'G3加强长枪管组合': 'br_g3_heavy',
    'G3飓风短枪管组合': 'br_g3_storm',
    'G3守卫标准枪管组合': 'br_g3_guard',
    'G3伸缩枪托': 'st_g3_telescope',
    'G3稳定枪托': 'st_g3_stable',
    '侍卫稳固后握把': 'rg_g3_guard',
    'G3镂空握把': 'rg_g3_skeleton',
    'G330发弹匣': 'ma_g3_30',
    'PSG-1后握把': 'rg_psg1',
    
    # AKS-74U
    'AKS-74U延长弹匣45发': 'ma_aks74u_45',
    'AK12聚合物30发弹匣': 'ma_ak12_30',
    'AKS-74U聚合物弹鼓75发': 'ma_aks74u_75',
    'AKM延长匣40发': 'ma_akm_40',
    'AKM30发聚合物弹匣': 'ma_akm_30',
    
    # VSS/AS VAL
    'VSS 45发弹匣': 'ma_vss_45',
    'VSS30发弹匣': 'ma_vss_30',
    'VSS海啸长枪管组合': 'br_vss_tsunami',
    'VSS精英一体枪托': 'st_vss_elite',
    
    # AR
    'AR聚合物30发': 'ma_556_poly',
    '灰熊全威力快拔套(绿）': 'fn_grizzly_gn',
    '郊狼中间威力快拔套(绿）': 'fn_coyote_gn',
    '郊狼中间威力快拔套（绿）': 'fn_coyote_gn',
    
    # M82-specific optics
    'M82专用狙击镜': 'op_m82_sniper',
    'M82专用热成像镜': 'op_m82_thermal',
}

MANUAL_NAME_MAP.update(MORE_MANUAL)

# ===== 3. Build slot name → key mapping =====
SLOT_NAME_TO_KEY = {
    '瞄具': 'optic', '瞄准镜': 'optic',
    '枪口': 'muzzle',
    '枪管': 'barrel',
    '前握把': 'foregrip',
    '后握把': 'rear_grip',
    '弹匣': 'mag',
    '枪托': 'stock',
    '功能性配件': 'functional', '功能配件': 'functional',
    '护木': 'handguard',
    '护木套件': 'handguard_kit',
    '枪托垫': 'stock_pad',
    '托腮板': 'cheek_pad',
    '弹匣座': 'mag_seat',
    '遮光罩': 'lens_shade',
    '上副瞄具': 'upper_side_optic',
    '战术设备': 'tactical_device',
    '增高座瞄具': 'riser_optic',
    '上导轨': 'upper_rail',
    '左导轨': 'left_rail',
    '右导轨': 'right_rail',
    '上贴片': 'upper_patch',
    '左贴片': 'left_patch',
    '右贴片': 'right_patch',
    '后握贴片': 'rear_grip_patch',
    '握把座': 'grip_seat',
    '侧瞄具': 'side_optic',
    '拉机柄': 'bolt',
    '上护木': 'upper_handguard',
    '下导轨': 'lower_rail',
    '隔热网': 'heat_shield',
    '导气': 'gas_block',
    '扳机': 'trigger',
    '击锤': 'hammer',
    '杠杆': 'lever',
    '导轨脚架': 'rail_bipod',
    '弓臂': 'bow_arm',
    '弓弦': 'bow_string',
    '稳定杆': 'stabilizer',
    '箭台': 'arrow_rest',
    '握把片': 'grip_plate',
    '弓瞄具': 'bow_optic',
    '枪机': 'bolt_carrier',
    '枪托套件': 'stock_kit',
    '后握把2': 'rear_grip',
    '独特': 'unique',
}

# ===== 4. Build weapon name → weapon ID mapping =====
EXTRACTED_KEY_TO_ID = {
    '复合弓': 'bow',
    '杠杆式步枪': 'lever',
    '沙漠之鹰': 'deagle',
    '腾龙突击步枪': 'tenglong',
    '野牛冲锋枪': 'bizon',
    '勇士冲锋枪': 'warrior',
}

# ===== 5. Also load weapons.js to get all weapon IDs for validation =====
with open(os.path.join(BASE, 'weapons.js'), 'r', encoding='utf-8') as f:
    weapons_js = f.read()

weapon_ids = set()
for m in re.finditer(r"id\s*:\s*'([^']+)'", weapons_js):
    weapon_ids.add(m.group(1))
print(f"Weapon IDs from weapons.js: {weapon_ids}")

# ===== Read existing compatibility.js to extract defaultHidden and slotVisibilityRules =====
with open(os.path.join(BASE, 'compatibility.js'), 'r', encoding='utf-8') as f:
    old_compat = f.read()

# Extract defaultHidden per weapon
default_hidden_map = {}
for m in re.finditer(r"'([^']+)'\s*:\s*\{[^}]*?defaultHidden:\s*\[([^\]]*)\]", old_compat):
    wid = m.group(1)
    hidden_str = m.group(2)
    hidden = re.findall(r"'([^']+)'", hidden_str)
    default_hidden_map[wid] = hidden

# Extract slotVisibilityRules per weapon
visibility_rules_map = {}
for m in re.finditer(r"'([^']+)'\s*:\s*\{", old_compat):
    wid = m.group(1)
    start = m.end()
    brace_count = 1
    end = start
    for i, c in enumerate(old_compat[start:], start):
        if c == '{':
            brace_count += 1
        elif c == '}':
            brace_count -= 1
            if brace_count == 0:
                end = i
                break
    block = old_compat[start-1:end+1]
    
    if 'slotVisibilityRules' in block:
        rules_match = re.search(r'slotVisibilityRules:\s*\[([\s\S]*?)\](?:\s*,\s*\}|\s*\})', block)
        if rules_match:
            rules_str = rules_match.group(1).strip()
            if rules_str:
                visibility_rules_map[wid] = rules_str
            else:
                visibility_rules_map[wid] = ''
        else:
            visibility_rules_map[wid] = ''

print(f"defaultHidden entries: {list(default_hidden_map.keys())}")
print(f"slotVisibilityRules entries: {list(visibility_rules_map.keys())}")

# ===== 6. Process each weapon =====
output_lines = []
output_lines.append('// ===== 三角洲行动 · 武器-配件兼容性矩阵 =====')
output_lines.append('// 数据来源: hpromax.top 爬取数据 (hpromax_slots.csv) + extracted_compatibility.json')
output_lines.append('// 最后更新: 2026-07-29')
output_lines.append('')
output_lines.append('// 扩展槽位空列表（这些槽位的配件选择逻辑在 script.js 中处理）')
output_lines.append('const EXT = [];')
output_lines.append('')
output_lines.append('// ===== 武器-配件兼容性矩阵 =====')
output_lines.append('const WEAPON_ATTACHMENT_COMPATIBILITY = {')
output_lines.append('')

categories = {
    '突击步枪': ['ak-12', 'akm', 'aks-74u', 'ar57', 'ash-12', 'asval', 'aug', 'car-15', 'g3', 'k416', 'k437', 'kc17', 'm16a4', 'm4a1', 'm7', 'mcxlt', 'mk47', 'ptr-32', 'qbz95-1', 'rm277', 'scar-h', 'sg552', 'tenglong'],
    '冲锋枪': ['bizon', 'mk4', 'mp5', 'mp7', 'p90', 'qcq171', 'smg-45', 'sr-3m', 'uzi', 'vector', 'warrior'],
    '狙击步枪': ['awm', 'm700', 'm82', 'r93', 'sv-98'],
    '射手步枪': ['lever', 'm14', 'mini-14', 'psg-1', 'sks', 'sr-25', 'sr9', 'svch', 'svd', 'vss'],
    '霰弹枪': ['725', 'fs-12', 'm1014', 'm870', 's12k'],
    '机枪': ['m249', 'm250', 'pkm', 'qjb201'],
    '手枪': ['357', '93r', 'deagle', 'g17', 'g18', 'm1911', 'qsz92g'],
    '特殊武器': ['bow'],
}

category_names = {
    '突击步枪': '突击步枪',
    '冲锋枪': '冲锋枪',
    '狙击步枪': '狙击步枪',
    '射手步枪': '精确射手步枪',
    '霰弹枪': '霰弹枪',
    '机枪': '机枪',
    '手枪': '手枪',
    '特殊武器': '特殊武器',
}

def get_extracted_key(wid):
    if wid in extracted:
        return wid
    for ek, ew in EXTRACTED_KEY_TO_ID.items():
        if ew == wid:
            return ek
    return None

def resolve_attachment_id(aname):
    """Resolve an attachment name to its ID, trying multiple strategies"""
    # Try direct lookup
    if aname in name_to_id:
        return name_to_id[aname]
    
    # Try manual mapping
    if aname in MANUAL_NAME_MAP:
        return MANUAL_NAME_MAP[aname]
    
    # Try converting to simplified and looking up
    aname_simp = zhconv.convert(aname, 'zh-cn')
    if aname_simp != aname and aname_simp in name_to_id:
        return name_to_id[aname_simp]
    
    if aname_simp in MANUAL_NAME_MAP:
        return MANUAL_NAME_MAP[aname_simp]
    
    return None

missing_count = {}
processed = set()
for cat_name, wids in categories.items():
    output_lines.append(f'    // ==================== {category_names[cat_name]} ====================')
    output_lines.append('')
    
    for wid in wids:
        ek = get_extracted_key(wid)
        if ek is None:
            print(f"WARNING: No extracted data for {wid}")
            continue
        
        wdata = extracted[ek]
        processed.add(wid)
        
        output_lines.append(f"    '{wid}': {{")
        
        slot_data = {}
        
        for hpromax_slot, attachment_names in wdata.items():
            slot_key = SLOT_NAME_TO_KEY.get(hpromax_slot)
            if slot_key is None:
                print(f"  WARNING: Unknown slot '{hpromax_slot}' for weapon {wid}")
                continue
            
            ids = []
            for aname in attachment_names:
                aid = resolve_attachment_id(aname)
                if aid:
                    ids.append(aid)
                else:
                    if aname not in missing_count:
                        missing_count[aname] = []
                    missing_count[aname].append(f"{wid}/{hpromax_slot}")
            
            # Add _none option
            none_id_map = {
                'optic': 'op_none', 'muzzle': 'mu_none', 'barrel': 'br_none',
                'foregrip': 'fg_none', 'rear_grip': 'rg_none', 'mag': 'ma_none',
                'stock': 'st_none', 'functional': 'fn_none', 'handguard': 'hg_none',
                'handguard_kit': 'hg_none', 'upper_rail': 'ur_none', 'left_rail': 'lr_none',
                'right_rail': 'rr_none', 'upper_patch': 'up_none', 'left_patch': 'lp_none',
                'right_patch': 'rp_none', 'rail_bipod': 'rb_none',
            }
            none_id = none_id_map.get(slot_key, f"{slot_key}_none")
            if none_id not in ids:
                ids.append(none_id)
            
            slot_data[slot_key] = ids
        
        # Get EXT slots from existing compat
        ext_slots = set()
        pattern = rf"'{re.escape(wid)}'\s*:\s*\{{"
        m = re.search(pattern, old_compat)
        if m:
            start = m.end()
            brace_count = 1
            end = start
            for i, c in enumerate(old_compat[start:], start):
                if c == '{':
                    brace_count += 1
                elif c == '}':
                    brace_count -= 1
                    if brace_count == 0:
                        end = i
                        break
            block = old_compat[start-1:end+1]
            for em in re.finditer(r"(\w+):\s*EXT", block):
                ext_slots.add(em.group(1))
        
        all_slots_to_output = {}
        for skey, sids in slot_data.items():
            all_slots_to_output[skey] = sids
        for es in ext_slots:
            if es not in all_slots_to_output:
                all_slots_to_output[es] = 'EXT'
        
        slot_order = [
            'optic', 'muzzle', 'barrel', 'foregrip', 'rear_grip', 'mag', 'stock',
            'functional', 'handguard', 'handguard_kit', 'cheek_pad', 'stock_pad',
            'mag_seat', 'grip_seat', 'rear_grip_patch', 'stock_kit', 'under_rail',
            'lower_rail', 'gas_block', 'heat_shield', 'trigger', 'hammer',
            'bolt', 'bolt_carrier', 'lever', 'upper_handguard',
            'side_optic', 'lens_shade', 'upper_side_optic', 'tactical_device',
            'riser_optic', 'rail_bipod', 'unique',
            'upper_rail', 'left_rail', 'right_rail',
            'upper_patch', 'left_patch', 'right_patch',
            'bow_optic', 'bow_arm', 'bow_string', 'stabilizer', 'arrow_rest', 'grip_plate',
            'rear_grip_2',
        ]
        
        sorted_slots = []
        for s in slot_order:
            if s in all_slots_to_output:
                sorted_slots.append(s)
        for s in all_slots_to_output:
            if s not in sorted_slots:
                sorted_slots.append(s)
        
        for i, skey in enumerate(sorted_slots):
            val = all_slots_to_output[skey]
            is_last = (i == len(sorted_slots) - 1)
            has_meta = (wid in default_hidden_map or wid in visibility_rules_map)
            
            if val == 'EXT':
                if is_last and not has_meta:
                    output_lines.append(f'        {skey}: EXT')
                else:
                    output_lines.append(f'        {skey}: EXT,')
            else:
                ids_str = ', '.join(f"'{x}'" for x in val)
                if is_last and not has_meta:
                    output_lines.append(f'        {skey}: [{ids_str}]')
                else:
                    output_lines.append(f'        {skey}: [{ids_str}],')
        
        if wid in default_hidden_map:
            dh = default_hidden_map[wid]
            dh_str = ', '.join(f"'{x}'" for x in dh)
            if wid in visibility_rules_map:
                output_lines.append(f'        defaultHidden: [{dh_str}],')
            else:
                output_lines.append(f'        defaultHidden: [{dh_str}]')

        if wid in visibility_rules_map:
            rules_str = visibility_rules_map[wid]
            if rules_str:
                output_lines.append(f'        slotVisibilityRules: [{rules_str}]')
            else:
                output_lines.append(f'        slotVisibilityRules: []')
        elif wid not in default_hidden_map and wid not in visibility_rules_map:
            output_lines.append(f'        slotVisibilityRules: []')
        elif wid in default_hidden_map and wid not in visibility_rules_map:
            output_lines.append(f'        slotVisibilityRules: []')
        
        output_lines.append('    },')
        output_lines.append('')

for wid in weapon_ids:
    if wid not in processed:
        print(f"WARNING: Weapon {wid} not processed!")

output_lines.append('};')
output_lines.append('')
output_lines.append('// ===== 获取兼容配件 =====')
output_lines.append('function getCompatibleAttachments(weaponId, slot, selectedAttachments) {')
output_lines.append('    const weaponCompat = WEAPON_ATTACHMENT_COMPATIBILITY[weaponId];')
output_lines.append('    if (!weaponCompat) {')
output_lines.append('        return ATTACHMENTS[slot] || [];')
output_lines.append('    }')
output_lines.append('')
output_lines.append('    const compatIds = weaponCompat[slot];')
output_lines.append('')
output_lines.append('    // 扩展槽位：如果武器有该槽位，返回空数组（或 ATTACHMENTS 中的对应列表）')
output_lines.append('    if (compatIds === undefined) {')
output_lines.append('        return ATTACHMENTS[slot] || [];')
output_lines.append('    }')
output_lines.append('')
output_lines.append('    // 扩展槽位（EXT = []）：如果武器有该槽位但配件列表为空，返回 [_none] 选项')
output_lines.append('    if (compatIds === EXT) {')
output_lines.append('        if (ATTACHMENTS[slot]) {')
output_lines.append('            return ATTACHMENTS[slot].filter(att => att.id.endsWith(\'_none\'));')
output_lines.append('        }')
output_lines.append('        return [];')
output_lines.append('    }')
output_lines.append('')
output_lines.append('    // 核心槽位：从 ATTACHMENTS 中过滤出兼容的配件')
output_lines.append('    let attPool = ATTACHMENTS[slot];')
output_lines.append('    if (!attPool) {')
output_lines.append('        attPool = [];')
output_lines.append('        for (const key of Object.keys(ATTACHMENTS)) {')
output_lines.append('            const catAtts = ATTACHMENTS[key];')
output_lines.append('            if (Array.isArray(catAtts)) {')
output_lines.append('                for (const att of catAtts) {')
output_lines.append('                    if (compatIds.includes(att.id) && !attPool.find(a => a.id === att.id)) {')
output_lines.append('                        attPool.push(att);')
output_lines.append('                    }')
output_lines.append('                }')
output_lines.append('            }')
output_lines.append('        }')
output_lines.append('    }')
output_lines.append('')
output_lines.append('    return attPool.filter(att => compatIds.includes(att.id));')
output_lines.append('}')
output_lines.append('')
output_lines.append('// ===== 获取当前可见槽位 =====')
output_lines.append('function getVisibleSlots(weaponId, selectedAttachments) {')
output_lines.append('    const weaponCompat = WEAPON_ATTACHMENT_COMPATIBILITY[weaponId];')
output_lines.append('    if (!weaponCompat) {')
output_lines.append('        return [];')
output_lines.append('    }')
output_lines.append('')
output_lines.append('    const rules = weaponCompat.slotVisibilityRules || [];')
output_lines.append('    const defaultHidden = weaponCompat.defaultHidden || [];')
output_lines.append('')
output_lines.append('    const allSlots = Object.keys(weaponCompat).filter(k => ![\'slotVisibilityRules\', \'defaultHidden\'].includes(k));')
output_lines.append('')
output_lines.append('    if (rules.length === 0) {')
output_lines.append('        return allSlots.filter(s => !defaultHidden.includes(s));')
output_lines.append('    }')
output_lines.append('')
output_lines.append('    let extraShow = [];')
output_lines.append('    let extraHide = [];')
output_lines.append('')
output_lines.append('    for (const rule of rules) {')
output_lines.append('        const { when, show, hide } = rule;')
output_lines.append('        const selectedAtt = selectedAttachments ? selectedAttachments[when.slot] : null;')
output_lines.append('        const selectedId = selectedAtt ? selectedAtt.id : null;')
output_lines.append('')
output_lines.append('        if (selectedId === when.value) {')
output_lines.append('            extraShow = extraShow.concat(show || []);')
output_lines.append('            extraHide = extraHide.concat(hide || []);')
output_lines.append('        }')
output_lines.append('    }')
output_lines.append('')
output_lines.append('    let visibleSlots = allSlots.filter(s => !defaultHidden.includes(s) && !extraHide.includes(s));')
output_lines.append('    for (const s of extraShow) {')
output_lines.append('        if (!visibleSlots.includes(s)) {')
output_lines.append('            visibleSlots.push(s);')
output_lines.append('        }')
output_lines.append('    }')
output_lines.append('')
output_lines.append('    return visibleSlots;')
output_lines.append('}')

# Write output
output_path = os.path.join(BASE, 'compatibility.js')
with open(output_path, 'w', encoding='utf-8') as f:
    f.write('\n'.join(output_lines))

print(f"\nWritten to {output_path}")
print(f"Total weapons processed: {len(processed)}")

# Report missing mappings
if missing_count:
    print(f"\n=== Missing mappings ({len(missing_count)} unique names) ===")
    for aname, locations in sorted(missing_count.items(), key=lambda x: -len(x[1]))[:30]:
        print(f"  '{aname}' -> (used in {len(locations)} places: {', '.join(locations[:3])}{'...' if len(locations) > 3 else ''})")