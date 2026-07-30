// ===== 三角洲行动 · 武器-配件兼容性矩阵 =====
// 数据来源: hpromax.top 爬取数据 (hpromax_slots.csv) + extracted_compatibility.json
// 最后更新: 2026-07-29

// 扩展槽位空列表（这些槽位的配件选择逻辑在 script.js 中处理）
const EXT = [];

// ===== 武器-配件兼容性矩阵 =====
const WEAPON_ATTACHMENT_COMPATIBILITY = {

    // ==================== 突击步枪 ====================

    'ak-12': {
        optic: ['op_357_先进白热成像战斗', 'op_357_先进热融合全息', 'op_357_VMX无框', 'op_357_1p33_2_4倍', 'op_357_UHX全息', 'op_357_棱镜通用二倍光学', 'op_357_灵眼3_7弹道计算狙击镜', 'op_357_M157火控光学系统', 'op_357_视点3倍', 'op_357_1p_29俄制3倍', 'op_357_LPVO多倍率战斗', 'op_357_3_7可调倍率狙击镜', 'op_357_侦察1_5_5可调', 'op_357_HAMR组合', 'op_357_MEO微型瞄具增高架', 'op_725_多用途战术增高架', 'op_725_微型瞄具增高架', 'op_357_ACOG精准六倍镜', 'op_357_Osight微型', 'op_357_Cobra准直式', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_okp_7反射', 'op_357_XCOG突击3_5倍', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_357_AP5000反射式', 'op_357_全息二型', 'op_357_反射式', 'op_357_俄式准直二倍', 'op_357_全息', 'op_none'],
        muzzle: ['mu_xinhuo', 'mu_tenglong_先进多口径', 'mu_dtk', 'mu_tenglong_M7实用', 'mu_ak_12_AK勇火', 'mu_pbs', 'mu_dead', 'mu_tenglong_沙暴垂直', 'mu_tenglong_堡垒水平', 'mu_poseidon', 'mu_tenglong_轻语战术', 'mu_tenglong_钛金竞赛', 'mu_tenglong_炽火抑制器', 'mu_ak_12_AK实用', 'mu_tenglong_钢制膛口', 'mu_tenglong_实用_2', 'mu_flare_bell', 'mu_tenglong_实用', 'mu_none'],
        barrel: ['br_ak_12_AK12精英脚架长', 'br_ak_12_AK12前线长', 'br_none'],
        foregrip: ['fg_ec_stop', 'fg_tenglong_黎明三角手电握把', 'fg_tenglong_破晓垂直手电握把', 'fg_tenglong_CR棱镜阻手器', 'fg_bipod_grip', 'fg_k1_elite', 'fg_tenglong_X25U斜侧战斗握把', 'fg_phantom_vert', 'fg_tenglong_战术垂直握把', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_tenglong_折叠握把', 'fg_vfg_knight', 'fg_tenglong_ZFSG战术握把', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_bizon_天蝎座', 'rg_bizon_RK3', 'rg_bizon_AK镂空握把', 'rg_ak_tower', 'rg_bizon_稳定AK', 'rg_bizon_射手AK', 'rg_warrior_实用AK', 'rg_none'],
        mag: ['ma_ak_12_AKS_74U聚合物弹鼓75发', 'ma_ak_12_AKS_74U延长弹匣45发', 'ma_ak_12_AKS74U3', 'ma_ak_12_AK12聚合物30发', 'ma_none'],
        stock: ['st_tenglong_锚点导轨后托', 'st_tenglong_QR高性能后托', 'st_tenglong_CT增强型后托', 'st_shadow_core', 'st_bizon_MRGS镂空', 'st_bizon_PT3死士', 'st_bizon_PT1特种', 'st_ur_tactical2', 'st_bizon_影袭导轨', 'st_skeleton_sniper', 'st_bizon_AK19', 'st_bizon_枢机先进战斗', 'st_416_stable', 'st_tenglong_416轻型', 'st_tenglong_精英轻型', 'st_raid_core', 'st_pivot_stable', 'st_lightning_rail', 'st_bizon_AK枪托尾盖', 'st_bizon_AK骨架', 'st_warrior_AK折叠', 'st_bizon_AK聚合物', 'st_utility_light', 'st_tenglong_实用战术', 'st_tenglong_实用稳定', 'st_bizon_核心导轨', 'st_none'],
        mag_seat: ['ms_ak_12_蜜獾小口径快拔套沙', 'ms_tenglong_蜜獾小口径快拔套绿', 'ms_ak_12_蜜獾小口径快拔套黑', 'mag_seat_none'],
        bolt: ['bolt_bizon_泽宁特拉机柄帽', 'bolt_none'],
        side_optic: ['op_tenglong_侧置Osight微型', 'op_tenglong_侧置战斗红点', 'op_tenglong_侧置微型红点', 'op_tenglong_侧置XRO快速反应', 'op_tenglong_侧置全景红点', 'side_optic_none'],
        upper_rail: ['ur_tenglong_OLIGHTWARRIOR3S战术手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'ur_none'],
        right_rail: ['ur_tenglong_OLIGHTWARRIOR3S战术手电', 'rr_bizon_OLIGHTOdinS战术手电', 'rr_ak_12_OLIGHTBaldrProR多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'rr_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'grip_seat']
        slotVisibilityRules: [
        {trigger:'op_spirit_37', action:'show', slots:['lens_shade']},
        {trigger:'op_m157_fire', action:'show', slots:['lens_shade']},
        {trigger:'op_lpvo', action:'show', slots:['lens_shade']},
        {trigger:'op_sniper', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_scout', action:'show', slots:['lens_shade']},
        {trigger:'op_riser', action:'show', slots:['optic']},
        {trigger:'op_725_多用途战术增高架', action:'show', slots:['tactical_device', 'riser_optic']},
        {trigger:'op_riser3', action:'show', slots:['riser_optic']},
        {trigger:'br_ak12_elite_bipod_l', action:'show', slots:['left_patch', 'left_rail', 'upper_patch', 'right_patch', 'foregrip', 'muzzle']},
        {trigger:'br_ak12_front_l', action:'show', slots:['upper_patch', 'left_rail', 'rail_bipod', 'left_patch', 'right_patch', 'foregrip', 'muzzle']},
        {trigger:'st_warrior_AK折叠', action:'show', slots:['stock']},
        {trigger:'st_bizon_AK聚合物', action:'show', slots:['stock']},
        {trigger:'rg_ak_tower', action:'show', slots:['grip_seat']},
        {trigger:'ma_aks74u_75', action:'hide', slots:['mag_seat']}
        ]
    },

    'akm': {
        optic: ['op_357_先进白热成像战斗', 'op_357_先进热融合全息', 'op_357_VMX无框', 'op_357_1p33_2_4倍', 'op_357_UHX全息', 'op_357_棱镜通用二倍光学', 'op_357_灵眼3_7弹道计算狙击镜', 'op_357_M157火控光学系统', 'op_357_视点3倍', 'op_357_1p_29俄制3倍', 'op_357_LPVO多倍率战斗', 'op_357_3_7可调倍率狙击镜', 'op_357_侦察1_5_5可调', 'op_357_HAMR组合', 'op_357_MEO微型瞄具增高架', 'op_725_多用途战术增高架', 'op_725_微型瞄具增高架', 'op_357_ACOG精准六倍镜', 'op_357_Osight微型', 'op_357_Cobra准直式', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_okp_7反射', 'op_357_XCOG突击3_5倍', 'op_akm_PSO战斗2_5倍', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_357_AP5000反射式', 'op_akm_PSO狙击8倍', 'op_357_全息二型', 'op_357_反射式', 'op_357_俄式准直二倍', 'op_357_全息', 'op_none'],
        muzzle: ['mu_tenglong_FFC双流', 'mu_xinhuo', 'mu_tenglong_先进多口径', 'mu_dtk', 'mu_tenglong_M7实用', 'mu_ak_12_AK勇火', 'mu_pbs', 'mu_dead', 'mu_tenglong_沙暴垂直', 'mu_tenglong_堡垒水平', 'mu_poseidon', 'mu_tenglong_轻语战术', 'mu_tenglong_钛金竞赛', 'mu_tenglong_炽火抑制器', 'mu_ak_12_AK实用', 'mu_tenglong_钢制膛口', 'mu_tenglong_实用_2', 'mu_flare_bell', 'mu_tenglong_实用', 'mu_none'],
        barrel: ['br_akm_AKM性能', 'br_akm_AKM海狸长', 'br_akm_AKM海狸', 'br_akm_AKM超然长', 'br_akm_AKM实用长', 'br_akm_AKM实用标准', 'br_none'],
        foregrip: ['fg_ec_stop', 'fg_tenglong_CR棱镜阻手器', 'fg_bipod_grip', 'fg_tenglong_X25U斜侧战斗握把', 'fg_phantom_vert', 'fg_tenglong_战术垂直握把', 'fg_rk0', 'fg_angle_stop', 'fg_phase_battle', 'fg_tenglong_折叠握把', 'fg_vfg_knight', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_bizon_天蝎座', 'rg_bizon_RK3', 'rg_bizon_AK镂空握把', 'rg_ak_tower', 'rg_bizon_稳定AK', 'rg_bizon_射手AK', 'rg_warrior_实用AK', 'rg_none'],
        mag: ['ma_akm_AKM大弹鼓70发', 'ma_akm_AKM延长匣40发', 'ma_akm_AKM30发聚合物', 'ma_akm_AK762弹匣30发木色', 'ma_none'],
        stock: ['st_tenglong_锚点导轨后托', 'st_tenglong_QR高性能后托', 'st_tenglong_CT增强型后托', 'st_shadow_core', 'st_bizon_MRGS镂空', 'st_bizon_PT3死士', 'st_bizon_PT1特种', 'st_ur_tactical2', 'st_bizon_影袭导轨', 'st_skeleton_sniper', 'st_bizon_AK19', 'st_bizon_枢机先进战斗', 'st_416_stable', 'st_tenglong_416轻型', 'st_tenglong_精英轻型', 'st_raid_core', 'st_pivot_stable', 'st_lightning_rail', 'st_bizon_AK枪托尾盖', 'st_bizon_AK骨架', 'st_warrior_AK折叠', 'st_bizon_AK聚合物', 'st_utility_light', 'st_tenglong_实用战术', 'st_tenglong_实用稳定', 'st_bizon_核心导轨', 'st_none'],
        stock_pad: ['sp_bizon_AK枪托缓冲垫', 'stock_pad_none'],
        mag_seat: ['ms_akm_郊狼中间威力快拔套沙', 'ms_akm_郊狼中间威力快拔套绿', 'ms_akm_郊狼中间威力口径快拔套黑', 'mag_seat_none'],
        bolt: ['bolt_bizon_泽宁特拉机柄帽', 'bolt_none'],
        side_optic: ['op_tenglong_侧置Osight微型', 'op_tenglong_侧置战斗红点', 'op_tenglong_侧置微型红点', 'op_tenglong_侧置XRO快速反应', 'op_tenglong_侧置全景红点', 'side_optic_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'upper_rail', 'left_rail', 'rail_bipod', 'right_patch', 'right_rail', 'left_patch', 'foregrip', 'grip_seat']
        slotVisibilityRules: [
        {trigger:'op_spirit_37', action:'show', slots:['lens_shade']},
        {trigger:'op_m157_fire', action:'show', slots:['lens_shade']},
        {trigger:'op_lpvo', action:'show', slots:['lens_shade']},
        {trigger:'op_sniper', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_scout', action:'show', slots:['lens_shade']},
        {trigger:'op_riser', action:'show', slots:['optic']},
        {trigger:'op_725_多用途战术增高架', action:'show', slots:['tactical_device', 'riser_optic']},
        {trigger:'op_riser3', action:'show', slots:['riser_optic']},
        {trigger:'br_akm_AKM性能', action:'hide', slots:['foregrip']},
        {trigger:'br_akm_AKM海狸长', action:'show', slots:['upper_rail', 'left_rail', 'rail_bipod', 'right_patch', 'right_rail', 'left_patch', 'foregrip']},
        {trigger:'br_akm_beaver_s', action:'show', slots:['upper_rail', 'left_rail', 'right_rail', 'left_patch', 'right_patch', 'foregrip']},
        {trigger:'br_akm_AKM超然长', action:'show', slots:['upper_rail', 'left_rail', 'rail_bipod', 'right_rail', 'left_patch', 'right_patch', 'foregrip']},
        {trigger:'br_akm_AKM实用长', action:'show', slots:['left_rail', 'right_rail', 'rail_bipod', 'left_patch', 'right_patch', 'foregrip']},
        {trigger:'br_akm_AKM实用标准', action:'show', slots:['right_rail', 'foregrip']},
        {trigger:'st_tenglong_锚点导轨后托', action:'hide', slots:['stock_pad']},
        {trigger:'st_tenglong_QR高性能后托', action:'hide', slots:['stock_pad']},
        {trigger:'st_tenglong_CT增强型后托', action:'hide', slots:['stock_pad']},
        {trigger:'st_shadow_core', action:'hide', slots:['stock_pad']},
        {trigger:'st_bizon_MRGS镂空', action:'hide', slots:['stock_pad']},
        {trigger:'st_bizon_PT3死士', action:'hide', slots:['stock_pad']},
        {trigger:'st_bizon_PT1特种', action:'hide', slots:['stock_pad']},
        {trigger:'st_ur_tactical2', action:'hide', slots:['stock_pad']},
        {trigger:'st_bizon_影袭导轨', action:'hide', slots:['stock_pad']},
        {trigger:'st_skeleton_sniper', action:'hide', slots:['stock_pad']},
        {trigger:'st_ak19', action:'hide', slots:['stock_pad']},
        {trigger:'st_bizon_枢机先进战斗', action:'hide', slots:['stock_pad']},
        {trigger:'st_416_stable', action:'hide', slots:['stock_pad']},
        {trigger:'st_tenglong_416轻型', action:'hide', slots:['stock_pad']},
        {trigger:'st_tenglong_精英轻型', action:'hide', slots:['stock_pad']},
        {trigger:'st_raid_core', action:'hide', slots:['stock_pad']},
        {trigger:'st_pivot_stable', action:'hide', slots:['stock_pad']},
        {trigger:'st_lightning_rail', action:'hide', slots:['stock_pad']},
        {trigger:'st_bizon_AK枪托尾盖', action:'hide', slots:['stock_pad']},
        {trigger:'st_bizon_AK骨架', action:'hide', slots:['stock_pad']},
        {trigger:'st_utility_light', action:'hide', slots:['stock_pad']},
        {trigger:'st_tenglong_实用战术', action:'hide', slots:['stock_pad']},
        {trigger:'st_tenglong_实用稳定', action:'hide', slots:['stock_pad']},
        {trigger:'st_bizon_核心导轨', action:'hide', slots:['stock_pad']},
        {trigger:'rg_ak_tower', action:'show', slots:['grip_seat']},
        {trigger:'ma_akm_70', action:'hide', slots:['mag_seat']}
        ]
    },

    'aks-74u': {
        optic: ['op_357_先进白热成像战斗', 'op_357_先进热融合全息', 'op_357_VMX无框', 'op_357_1p33_2_4倍', 'op_357_UHX全息', 'op_357_棱镜通用二倍光学', 'op_357_灵眼3_7弹道计算狙击镜', 'op_357_M157火控光学系统', 'op_357_视点3倍', 'op_357_1p_29俄制3倍', 'op_357_LPVO多倍率战斗', 'op_357_3_7可调倍率狙击镜', 'op_357_侦察1_5_5可调', 'op_357_HAMR组合', 'op_357_MEO微型瞄具增高架', 'op_725_多用途战术增高架', 'op_725_微型瞄具增高架', 'op_357_ACOG精准六倍镜', 'op_357_Osight微型', 'op_357_Cobra准直式', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_okp_7反射', 'op_357_XCOG突击3_5倍', 'op_akm_PSO战斗2_5倍', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_357_AP5000反射式', 'op_akm_PSO狙击8倍', 'op_357_全息二型', 'op_357_反射式', 'op_357_俄式准直二倍', 'op_357_全息', 'op_none'],
        muzzle: ['mu_tenglong_FFC双流', 'mu_xinhuo', 'mu_tenglong_先进多口径', 'mu_dtk', 'mu_tenglong_M7实用', 'mu_ak_12_AK勇火', 'mu_pbs', 'mu_dead', 'mu_tenglong_沙暴垂直', 'mu_tenglong_堡垒水平', 'mu_poseidon', 'mu_tenglong_轻语战术', 'mu_tenglong_钛金竞赛', 'mu_tenglong_炽火抑制器', 'mu_ak_12_AK实用', 'mu_tenglong_钢制膛口', 'mu_tenglong_实用_2', 'mu_flare_bell', 'mu_tenglong_实用', 'mu_none'],
        foregrip: ['fg_ec_stop', 'fg_tenglong_CR棱镜阻手器', 'fg_bipod_grip', 'fg_tenglong_X25U斜侧战斗握把', 'fg_phantom_vert', 'fg_tenglong_战术垂直握把', 'fg_rk0', 'fg_angle_stop', 'fg_phase_battle', 'fg_tenglong_折叠握把', 'fg_vfg_knight', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_bizon_天蝎座', 'rg_bizon_RK3', 'rg_bizon_AK镂空握把', 'rg_ak_tower', 'rg_bizon_稳定AK', 'rg_bizon_射手AK', 'rg_warrior_实用AK', 'rg_none'],
        mag: ['ma_ak_12_AKS_74U聚合物弹鼓75发', 'ma_ak_12_AKS_74U延长弹匣45发', 'ma_aks_74u_AKS74U30发', 'ma_ak_12_AK12聚合物30发', 'ma_aks_74u_AK545口径30发', 'ma_none'],
        stock: ['st_tenglong_锚点导轨后托', 'st_tenglong_QR高性能后托', 'st_tenglong_CT增强型后托', 'st_shadow_core', 'st_bizon_MRGS镂空', 'st_bizon_PT3死士', 'st_bizon_PT1特种', 'st_ur_tactical2', 'st_bizon_影袭导轨', 'st_skeleton_sniper', 'st_bizon_AK19', 'st_bizon_枢机先进战斗', 'st_416_stable', 'st_tenglong_416轻型', 'st_tenglong_精英轻型', 'st_raid_core', 'st_pivot_stable', 'st_lightning_rail', 'st_bizon_AK枪托尾盖', 'st_bizon_AK骨架', 'st_bizon_AK聚合物', 'st_utility_light', 'st_tenglong_实用战术', 'st_tenglong_实用稳定', 'st_bizon_核心导轨', 'st_none'],
        handguard: ['hg_aks_74u_AKS74U导轨下', 'hg_none'],
        stock_pad: ['sp_bizon_AK枪托缓冲垫', 'stock_pad_none'],
        mag_seat: ['ms_aks_74u_蜜獾小口径快拔套沙', 'ms_tenglong_蜜獾小口径快拔套绿', 'ms_tenglong_蜜獾小口径快拔套黑', 'mag_seat_none'],
        bolt: ['bolt_bizon_泽宁特拉机柄帽', 'bolt_none'],
        upper_handguard: ['uh_aks_74u_AKS74U导轨上', 'upper_handguard_none'],
        side_optic: ['op_tenglong_侧置Osight微型', 'op_tenglong_侧置战斗红点', 'op_tenglong_侧置微型红点', 'op_tenglong_侧置XRO快速反应', 'op_tenglong_侧置全景红点', 'side_optic_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'grip_seat']
        slotVisibilityRules: [
        {trigger:'op_spirit_37', action:'show', slots:['lens_shade']},
        {trigger:'op_m157_fire', action:'show', slots:['lens_shade']},
        {trigger:'op_lpvo', action:'show', slots:['lens_shade']},
        {trigger:'op_sniper', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_scout', action:'show', slots:['lens_shade']},
        {trigger:'op_riser', action:'show', slots:['optic']},
        {trigger:'op_725_多用途战术增高架', action:'show', slots:['tactical_device', 'riser_optic']},
        {trigger:'op_riser3', action:'show', slots:['riser_optic']},
        {trigger:'hg_aks74u_low', action:'show', slots:['right_rail', 'left_rail']},
        {trigger:'hg_aks74u_up', action:'show', slots:['upper_rail']},
        {trigger:'st_tenglong_锚点导轨后托', action:'hide', slots:['stock_pad']},
        {trigger:'st_tenglong_QR高性能后托', action:'hide', slots:['stock_pad']},
        {trigger:'st_tenglong_CT增强型后托', action:'hide', slots:['stock_pad']},
        {trigger:'st_shadow_core', action:'hide', slots:['stock_pad']},
        {trigger:'st_bizon_MRGS镂空', action:'hide', slots:['stock_pad']},
        {trigger:'st_bizon_PT3死士', action:'hide', slots:['stock_pad']},
        {trigger:'st_bizon_PT1特种', action:'hide', slots:['stock_pad']},
        {trigger:'st_ur_tactical2', action:'hide', slots:['stock_pad']},
        {trigger:'st_bizon_影袭导轨', action:'hide', slots:['stock_pad']},
        {trigger:'st_skeleton_sniper', action:'hide', slots:['stock_pad']},
        {trigger:'st_ak19', action:'hide', slots:['stock_pad']},
        {trigger:'st_bizon_枢机先进战斗', action:'hide', slots:['stock_pad']},
        {trigger:'st_416_stable', action:'hide', slots:['stock_pad']},
        {trigger:'st_tenglong_416轻型', action:'hide', slots:['stock_pad']},
        {trigger:'st_tenglong_精英轻型', action:'hide', slots:['stock_pad']},
        {trigger:'st_raid_core', action:'hide', slots:['stock_pad']},
        {trigger:'st_pivot_stable', action:'hide', slots:['stock_pad']},
        {trigger:'st_lightning_rail', action:'hide', slots:['stock_pad']},
        {trigger:'st_bizon_AK枪托尾盖', action:'hide', slots:['stock_pad']},
        {trigger:'st_bizon_AK骨架', action:'hide', slots:['stock_pad']},
        {trigger:'st_utility_light', action:'hide', slots:['stock_pad']},
        {trigger:'st_tenglong_实用战术', action:'hide', slots:['stock_pad']},
        {trigger:'st_tenglong_实用稳定', action:'hide', slots:['stock_pad']},
        {trigger:'st_bizon_核心导轨', action:'hide', slots:['stock_pad']},
        {trigger:'rg_ak_tower', action:'show', slots:['grip_seat']},
        {trigger:'ma_aks74u_75', action:'hide', slots:['mag_seat']}
        ]
    },

    'ar57': {
        optic: ['op_357_先进白热成像战斗', 'op_357_先进热融合全息', 'op_357_VMX无框', 'op_357_1p33_2_4倍', 'op_357_棱镜通用二倍光学', 'op_357_视点3倍', 'op_357_1p_29俄制3倍', 'op_357_侦察1_5_5可调', 'op_357_HAMR组合', 'op_357_MEO微型瞄具增高架', 'op_725_微型瞄具增高架', 'op_357_ACOG精准六倍镜', 'op_357_Osight微型', 'op_357_Cobra准直式', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_XCOG突击3_5倍', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_357_AP5000反射式', 'op_357_全息二型', 'op_357_反射式', 'op_357_俄式准直二倍', 'op_357_全息', 'op_none'],
        muzzle: ['mu_web_titanium', 'mu_tenglong_FFC双流', 'mu_xinhuo', 'mu_tenglong_先进多口径', 'mu_tenglong_M7实用', 'mu_357_冲锋枪回声', 'mu_dead', 'mu_tenglong_沙暴垂直', 'mu_tenglong_堡垒水平', 'mu_poseidon', 'mu_tenglong_轻语战术', 'mu_tenglong_钛金竞赛', 'mu_tenglong_炽火抑制器', 'mu_tenglong_钢制膛口', 'mu_tenglong_实用_2', 'mu_ar57_鸟笼', 'mu_tenglong_实用', 'mu_none'],
        barrel: ['br_ar57_夜莺一体消音组合', 'br_ar57_AR57激流超长', 'br_none'],
        foregrip: ['fg_resonance3', 'fg_ec_stop', 'fg_tenglong_黎明三角手电握把', 'fg_tenglong_破晓垂直手电握把', 'fg_tenglong_CR棱镜阻手器', 'fg_resonance2', 'fg_bipod_grip', 'fg_k1_elite', 'fg_tenglong_X25U斜侧战斗握把', 'fg_tenglong_共振人体工程握把', 'fg_phantom_vert', 'fg_tenglong_战术垂直握把', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_tenglong_折叠握把', 'fg_vfg_knight', 'fg_tenglong_ZFSG战术握把', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_ar57_模块化AR', 'rg_ar_tower', 'rg_ar57_侵袭', 'rg_ar57_幻影', 'rg_ar57_AR_MOE', 'rg_ar57_射手D_2', 'rg_ar57_飓风D_1', 'rg_ar57_M7稳定', 'rg_ar57_416实用', 'rg_none'],
        stock: ['st_tenglong_锚点导轨后托', 'st_tenglong_QR高性能后托', 'st_tenglong_CT增强型后托', 'st_shadow_core', 'st_bizon_影袭导轨', 'st_skeleton_sniper', 'st_bizon_枢机先进战斗', 'st_416_stable', 'st_tenglong_416轻型', 'st_tenglong_精英轻型', 'st_raid_core', 'st_pivot_stable', 'st_lightning_rail', 'st_tenglong_M4缓冲托芯', 'st_utility_light', 'st_tenglong_实用战术', 'st_tenglong_实用稳定', 'st_bizon_核心导轨', 'st_none'],
        stock_kit: ['sk_ar57_共振二代一体', 'sk_ar57_禁区一体', 'stock_kit_none'],
        side_optic: ['op_tenglong_侧置Osight微型', 'op_tenglong_侧置战斗红点', 'op_tenglong_侧置微型红点', 'op_tenglong_侧置XRO快速反应', 'op_tenglong_侧置全景红点', 'side_optic_none'],
        rail_bipod: ['rb_util', 'rb_none'],
        left_rail: ['rr_tenglong_OLIGHT_Odin_S战术手电', 'rr_ar57_OLIGHTBaldr_Pro_R多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'lr_none'],
        right_rail: ['ur_tenglong_OLIGHTWARRIOR3S战术手电', 'rr_tenglong_OLIGHT_Odin_S战术手电', 'rr_ar57_OLIGHTBaldr_Pro_R多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'rr_none'],
        left_patch: ['ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'lp_none'],
        right_patch: ['ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'rp_none'],
        defaultHidden: ['lens_shade', 'riser_optic', 'rear_grip_patch', 'grip_seat']
        slotVisibilityRules: [
        {trigger:'op_scout', action:'show', slots:['lens_shade']},
        {trigger:'op_riser', action:'show', slots:['optic']},
        {trigger:'op_riser3', action:'show', slots:['riser_optic']},
        {trigger:'br_ar57_rapid_l', action:'show', slots:['upper_rail']},
        {trigger:'rg_ar_tower', action:'show', slots:['rear_grip_patch', 'grip_seat']},
        {trigger:'br_ar57_nightingale', action:'hide', slots:['muzzle']},
        {trigger:'st_resonance_g2', action:'hide', slots:['rear_grip', 'stock']},
        {trigger:'st_forbidden', action:'hide', slots:['rear_grip', 'stock']}
        ]
    },

    'ash-12': {
        optic: ['op_357_先进白热成像战斗', 'op_357_先进热融合全息', 'op_357_VMX无框', 'op_357_1p33_2_4倍', 'op_357_UHX全息', 'op_357_棱镜通用二倍光学', 'op_357_灵眼3_7弹道计算狙击镜', 'op_357_M157火控光学系统', 'op_357_视点3倍', 'op_357_1p_29俄制3倍', 'op_357_LPVO多倍率战斗', 'op_357_3_7可调倍率狙击镜', 'op_357_侦察1_5_5可调', 'op_357_HAMR组合', 'op_357_MEO微型瞄具增高架', 'op_725_多用途战术增高架', 'op_725_微型瞄具增高架', 'op_357_ACOG精准六倍镜', 'op_357_Osight微型', 'op_357_Cobra准直式', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_okp_7反射', 'op_357_XCOG突击3_5倍', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_357_AP5000反射式', 'op_357_全息二型', 'op_357_反射式', 'op_357_俄式准直二倍', 'op_357_全息', 'op_none'],
        muzzle: ['mu_ash_12_泰坦', 'mu_ash_12_余烬', 'mu_ash_12_泰坦_2', 'mu_none'],
        barrel: ['br_ash_12_HVK双发套件', 'br_ash_12_ASh_12战斧重型', 'br_ash_12_ASh_12_CQB短', 'br_ash_12_ASh_12歼灭高精长', 'br_none'],
        foregrip: ['fg_resonance3', 'fg_ec_stop', 'fg_tenglong_黎明三角手电握把', 'fg_tenglong_破晓垂直手电握把', 'fg_tenglong_CR棱镜阻手器', 'fg_resonance2', 'fg_bipod_grip', 'fg_k1_elite', 'fg_tenglong_X25U斜侧战斗握把', 'fg_tenglong_共振人体工程握把', 'fg_phantom_vert', 'fg_tenglong_战术垂直握把', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_tenglong_折叠握把', 'fg_vfg_knight', 'fg_tenglong_ZFSG战术握把', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        mag: ['ma_ash_12_ASh_12扩容30发', 'ma_none'],
        stock: ['st_ash_12_ASh_12狙击', 'st_ash_12_ASh_12骨架', 'st_none'],
        side_optic: ['op_tenglong_侧置Osight微型', 'op_tenglong_侧置战斗红点', 'op_tenglong_侧置微型红点', 'op_tenglong_侧置XRO快速反应', 'op_tenglong_侧置全景红点', 'side_optic_none'],
        upper_rail: ['ur_tenglong_OLIGHTWARRIOR3S战术手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'ur_none'],
        left_rail: ['rr_bizon_OLIGHTOdinS战术手电', 'rr_ak_12_OLIGHTBaldrProR多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'lr_none'],
        right_rail: ['ur_tenglong_OLIGHTWARRIOR3S战术手电', 'rr_bizon_OLIGHTOdinS战术手电', 'rr_ak_12_OLIGHTBaldrProR多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'rr_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device']
        slotVisibilityRules: [
        {trigger:'op_spirit_37', action:'show', slots:['lens_shade']},
        {trigger:'op_m157_fire', action:'show', slots:['lens_shade']},
        {trigger:'op_lpvo', action:'show', slots:['lens_shade']},
        {trigger:'op_sniper', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_scout', action:'show', slots:['lens_shade']},
        {trigger:'op_riser', action:'show', slots:['optic']},
        {trigger:'op_725_多用途战术增高架', action:'show', slots:['tactical_device', 'riser_optic']},
        {trigger:'op_riser3', action:'show', slots:['riser_optic']},
        {trigger:'fn_hvk_double', action:'hide', slots:['muzzle', 'stock']}
        ]
    },

    'asval': {
        optic: ['op_357_先进白热成像战斗', 'op_357_先进热融合全息', 'op_357_VMX无框', 'op_357_1p33_2_4倍', 'op_357_UHX全息', 'op_357_棱镜通用二倍光学', 'op_357_灵眼3_7弹道计算狙击镜', 'op_357_M157火控光学系统', 'op_357_视点3倍', 'op_357_1p_29俄制3倍', 'op_357_LPVO多倍率战斗', 'op_357_3_7可调倍率狙击镜', 'op_357_侦察1_5_5可调', 'op_357_HAMR组合', 'op_357_MEO微型瞄具增高架', 'op_725_多用途战术增高架', 'op_725_微型瞄具增高架', 'op_357_ACOG精准六倍镜', 'op_357_Osight微型', 'op_357_Cobra准直式', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_okp_7反射', 'op_357_XCOG突击3_5倍', 'op_akm_PSO战斗2_5倍', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_357_AP5000反射式', 'op_akm_PSO狙击8倍', 'op_357_全息二型', 'op_357_反射式', 'op_357_俄式准直二倍', 'op_357_全息', 'op_none'],
        barrel: ['br_asval_ASVal刺客高级', 'br_asval_VSS海啸长', 'br_none'],
        foregrip: ['fg_resonance3', 'fg_ec_stop', 'fg_tenglong_黎明三角手电握把', 'fg_tenglong_破晓垂直手电握把', 'fg_tenglong_CR棱镜阻手器', 'fg_resonance2', 'fg_bipod_grip', 'fg_k1_elite', 'fg_tenglong_X25U斜侧战斗握把', 'fg_tenglong_共振人体工程握把', 'fg_phantom_vert', 'fg_tenglong_战术垂直握把', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_tenglong_折叠握把', 'fg_vfg_knight', 'fg_tenglong_ZFSG战术握把', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_bizon_天蝎座', 'rg_bizon_RK3', 'rg_bizon_AK镂空握把', 'rg_ak_tower', 'rg_bizon_稳定AK', 'rg_bizon_射手AK', 'rg_warrior_实用AK', 'rg_none'],
        mag: ['ma_asval_VSS_45发', 'ma_asval_VSS30发', 'ma_none'],
        stock: ['st_tenglong_锚点导轨后托', 'st_tenglong_QR高性能后托', 'st_tenglong_CT增强型后托', 'st_shadow_core', 'st_bizon_MRGS镂空', 'st_ur_tactical2', 'st_bizon_影袭导轨', 'st_asval_VSS精英一体', 'st_asval_AS_Val枪托尾盖', 'st_skeleton_sniper', 'st_416_stable', 'st_tenglong_416轻型', 'st_tenglong_精英轻型', 'st_raid_core', 'st_pivot_stable', 'st_lightning_rail', 'st_utility_light', 'st_tenglong_实用战术', 'st_tenglong_实用稳定', 'st_bizon_核心导轨', 'st_none'],
        mag_seat: ['ms_akm_郊狼中间威力快拔套沙', 'ms_asval_郊狼中间威力快拔套绿', 'ms_akm_郊狼中间威力口径快拔套黑', 'mag_seat_none'],
        bolt: ['bolt_bizon_泽宁特拉机柄帽', 'bolt_none'],
        side_optic: ['op_tenglong_侧置Osight微型', 'op_tenglong_侧置战斗红点', 'op_tenglong_侧置微型红点', 'op_tenglong_侧置XRO快速反应', 'op_tenglong_侧置全景红点', 'side_optic_none'],
        left_rail: ['rr_tenglong_OLIGHT_Odin_S战术手电', 'rr_tenglong_OLIGHT_Baldr_Pro_R多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'lr_none'],
        right_rail: ['ur_tenglong_OLIGHTWARRIOR3S战术手电', 'rr_tenglong_OLIGHT_Odin_S战术手电', 'rr_tenglong_OLIGHT_Baldr_Pro_R多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'rr_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'grip_seat']
        slotVisibilityRules: [
        {trigger:'op_spirit_37', action:'show', slots:['lens_shade']},
        {trigger:'op_m157_fire', action:'show', slots:['lens_shade']},
        {trigger:'op_lpvo', action:'show', slots:['lens_shade']},
        {trigger:'op_sniper', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_scout', action:'show', slots:['lens_shade']},
        {trigger:'op_riser', action:'show', slots:['optic']},
        {trigger:'op_725_多用途战术增高架', action:'show', slots:['tactical_device', 'riser_optic']},
        {trigger:'op_riser3', action:'show', slots:['riser_optic']},
        {trigger:'br_asval_assassin', action:'show', slots:['upper_rail', 'rail_bipod']},
        {trigger:'br_vss_tsunami_l', action:'show', slots:['upper_rail', 'rail_bipod']},
        {trigger:'rg_ak_tower', action:'show', slots:['grip_seat']},
        {trigger:'st_vss_elite', action:'hide', slots:['rear_grip']}
        ]
    },

    'aug': {
        optic: ['op_357_先进白热成像战斗', 'op_357_先进热融合全息', 'op_357_VMX无框', 'op_357_1p33_2_4倍', 'op_357_UHX全息', 'op_357_棱镜通用二倍光学', 'op_357_灵眼3_7弹道计算狙击镜', 'op_357_M157火控光学系统', 'op_357_视点3倍', 'op_357_1p_29俄制3倍', 'op_357_LPVO多倍率战斗', 'op_357_3_7可调倍率狙击镜', 'op_357_侦察1_5_5可调', 'op_357_HAMR组合', 'op_357_MEO微型瞄具增高架', 'op_725_多用途战术增高架', 'op_725_微型瞄具增高架', 'op_357_ACOG精准六倍镜', 'op_357_Osight微型', 'op_357_Cobra准直式', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_okp_7反射', 'op_357_XCOG突击3_5倍', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_357_AP5000反射式', 'op_357_全息二型', 'op_357_反射式', 'op_357_俄式准直二倍', 'op_357_全息', 'op_none'],
        muzzle: ['mu_web_titanium', 'mu_tenglong_FFC双流', 'mu_xinhuo', 'mu_tenglong_先进多口径', 'mu_tenglong_M7实用', 'mu_dead', 'mu_tenglong_沙暴垂直', 'mu_tenglong_堡垒水平', 'mu_poseidon', 'mu_tenglong_轻语战术', 'mu_tenglong_钛金竞赛', 'mu_tenglong_炽火抑制器', 'mu_tenglong_钢制膛口', 'mu_tenglong_实用_2', 'mu_ar57_鸟笼', 'mu_tenglong_实用', 'mu_none'],
        barrel: ['br_aug_AUG晨零', 'br_aug_AUG精英脚架长', 'br_aug_AUG尖兵标准', 'br_aug_AUG实用集成三倍镜', 'br_none'],
        foregrip: ['fg_ec_stop', 'fg_tenglong_CR棱镜阻手器', 'fg_bipod_grip', 'fg_tenglong_X25U斜侧战斗握把', 'fg_phantom_vert', 'fg_tenglong_战术垂直握把', 'fg_rk0', 'fg_angle_stop', 'fg_phase_battle', 'fg_tenglong_折叠握把', 'fg_vfg_knight', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        mag: ['ma_aug_AUG45发扩容', 'ma_aug_AUG60发', 'ma_none'],
        stock: ['st_aug_AUG枪托垫', 'st_none'],
        cheek_pad: ['st_universal_pad', 'cheek_pad_none'],
        mag_seat: ['ms_ak_12_蜜獾小口径快拔套沙', 'ms_tenglong_蜜獾小口径快拔套绿', 'ms_tenglong_蜜獾小口径快拔套黑', 'mag_seat_none'],
        side_optic: ['op_tenglong_侧置Osight微型', 'op_tenglong_侧置战斗红点', 'op_tenglong_侧置微型红点', 'op_tenglong_侧置XRO快速反应', 'op_tenglong_侧置全景红点', 'side_optic_none'],
        right_rail: ['rr_bizon_OLIGHTOdinS战术手电', 'fn_93r_OLIGHTBaldr_ProR多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'rr_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device']
        slotVisibilityRules: [
        {trigger:'op_spirit_37', action:'show', slots:['lens_shade']},
        {trigger:'op_m157_fire', action:'show', slots:['lens_shade']},
        {trigger:'op_lpvo', action:'show', slots:['lens_shade']},
        {trigger:'op_sniper', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_scout', action:'show', slots:['lens_shade']},
        {trigger:'op_riser', action:'show', slots:['optic']},
        {trigger:'op_725_多用途战术增高架', action:'show', slots:['tactical_device', 'riser_optic']},
        {trigger:'op_riser3', action:'show', slots:['riser_optic']},
        {trigger:'br_aug_morning', action:'hide', slots:['muzzle']},
        {trigger:'br_aug_morning', action:'show', slots:['left_rail']},
        {trigger:'br_aug_elite_bipod_l', action:'show', slots:['upper_rail', 'left_rail', 'right_patch']},
        {trigger:'br_aug_vanguard', action:'show', slots:['right_patch', 'upper_rail', 'left_rail']},
        {trigger:'br_aug_integrated_3x', action:'hide', slots:['side_optic']},
        {trigger:'ma_aug_60', action:'hide', slots:['mag_seat']}
        ]
    },

    'car-15': {
        optic: ['op_357_先进白热成像战斗', 'op_357_先进热融合全息', 'op_357_VMX无框', 'op_357_1p33_2_4倍', 'op_357_UHX全息', 'op_357_棱镜通用二倍光学', 'op_357_灵眼3_7弹道计算狙击镜', 'op_357_M157火控光学系统', 'op_357_视点3倍', 'op_357_1p_29俄制3倍', 'op_357_LPVO多倍率战斗', 'op_357_3_7可调倍率狙击镜', 'op_357_侦察1_5_5可调', 'op_357_HAMR组合', 'op_357_MEO微型瞄具增高架', 'op_725_多用途战术增高架', 'op_725_微型瞄具增高架', 'op_357_ACOG精准六倍镜', 'op_357_Osight微型', 'op_357_Cobra准直式', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_okp_7反射', 'op_357_XCOG突击3_5倍', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_357_AP5000反射式', 'op_357_全息二型', 'op_357_反射式', 'op_357_俄式准直二倍', 'op_357_全息', 'op_none'],
        muzzle: ['mu_web_titanium', 'mu_tenglong_FFC双流', 'mu_xinhuo', 'mu_tenglong_先进多口径', 'mu_tenglong_M7实用', 'mu_dead', 'mu_tenglong_沙暴垂直', 'mu_tenglong_堡垒水平', 'mu_poseidon', 'mu_tenglong_轻语战术', 'mu_tenglong_钛金竞赛', 'mu_tenglong_炽火抑制器', 'mu_car_15_OPS', 'mu_tenglong_钢制膛口', 'mu_tenglong_实用_2', 'mu_ar57_鸟笼', 'mu_tenglong_实用', 'mu_none'],
        barrel: ['br_car_15_AR特勤一体消音组合', 'br_car_15_AR特攻短', 'br_car_15_AR战壕标准', 'br_car_15_AR加百列长', 'br_car_15_AR标准', 'br_car_15_AR碳纤维', 'br_none'],
        rear_grip: ['rg_ar57_模块化AR', 'rg_ar_tower', 'rg_ar57_侵袭', 'rg_ar57_幻影', 'rg_car_15_ARMOE', 'rg_ar57_射手D_2', 'rg_ar57_飓风D_1', 'rg_ar57_M7稳定', 'rg_ar57_416实用', 'rg_none'],
        mag: ['ma_car_15_AR60发扩容', 'ma_car_15_M4弹鼓60发', 'ma_car_15_M4扩容45发', 'ma_car_15_AR聚合物30发', 'ma_none'],
        stock: ['st_tenglong_锚点导轨后托', 'st_tenglong_QR高性能后托', 'st_tenglong_CT增强型后托', 'st_shadow_core', 'st_ur_tactical2', 'st_skeleton_sniper', 'st_416_stable', 'st_tenglong_416轻型', 'st_tenglong_精英轻型', 'st_raid_core', 'st_pivot_stable', 'st_tenglong_M4缓冲托芯', 'st_utility_light', 'st_tenglong_实用战术', 'st_tenglong_实用稳定', 'st_none'],
        mag_seat: ['ms_aks_74u_蜜獾小口径快拔套沙', 'ms_tenglong_蜜獾小口径快拔套绿', 'ms_tenglong_蜜獾小口径快拔套黑', 'mag_seat_none'],
        stock_kit: ['sk_ar57_共振二代一体', 'sk_ar57_禁区一体', 'stock_kit_none'],
        lower_rail: ['fn_car_15_CAR15绑手电', 'lower_rail_none'],
        right_rail: ['ur_tenglong_OLIGHTWARRIOR3S战术手电', 'rr_tenglong_OLIGHT_Odin_S战术手电', 'rr_tenglong_OLIGHT_Baldr_Pro_R多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'rr_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'foregrip', 'upper_rail', 'rail_bipod', 'upper_patch', 'left_patch', 'left_rail', 'right_patch', 'rear_grip_patch', 'grip_seat']
        slotVisibilityRules: [
        {trigger:'op_spirit_37', action:'show', slots:['lens_shade']},
        {trigger:'op_m157_fire', action:'show', slots:['lens_shade']},
        {trigger:'op_lpvo', action:'show', slots:['lens_shade']},
        {trigger:'op_sniper', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_scout', action:'show', slots:['lens_shade']},
        {trigger:'op_riser', action:'show', slots:['optic']},
        {trigger:'op_725_多用途战术增高架', action:'show', slots:['tactical_device', 'riser_optic']},
        {trigger:'op_riser3', action:'show', slots:['riser_optic']},
        {trigger:'br_car_15_AR特勤一体消音组合', action:'hide', slots:['muzzle', 'lower_rail']},
        {trigger:'br_car_15_AR特勤一体消音组合', action:'show', slots:['foregrip', 'upper_rail', 'rail_bipod', 'upper_patch', 'left_patch', 'left_rail']},
        {trigger:'br_car_15_AR特攻短', action:'hide', slots:['lower_rail']},
        {trigger:'br_car_15_AR特攻短', action:'show', slots:['upper_rail', 'left_rail', 'foregrip']},
        {trigger:'br_car_15_AR战壕标准', action:'hide', slots:['lower_rail']},
        {trigger:'br_car_15_AR战壕标准', action:'show', slots:['foregrip', 'rail_bipod', 'upper_rail', 'left_rail', 'upper_patch', 'left_patch', 'right_patch']},
        {trigger:'br_car_15_AR加百列长', action:'hide', slots:['lower_rail']},
        {trigger:'br_car_15_AR加百列长', action:'show', slots:['foregrip', 'upper_rail', 'rail_bipod', 'left_patch', 'left_rail', 'upper_patch', 'right_patch']},
        {trigger:'br_car_15_AR标准', action:'hide', slots:['lower_rail']},
        {trigger:'br_car_15_AR标准', action:'show', slots:['upper_rail', 'rail_bipod', 'foregrip', 'left_patch', 'left_rail', 'upper_patch', 'right_patch']},
        {trigger:'br_car_15_AR碳纤维', action:'hide', slots:['lower_rail']},
        {trigger:'br_car_15_AR碳纤维', action:'show', slots:['foregrip', 'upper_rail', 'rail_bipod', 'left_patch', 'left_rail', 'upper_patch', 'right_patch']},
        {trigger:'rg_ar_tower', action:'show', slots:['rear_grip_patch', 'grip_seat']},
        {trigger:'ma_m4_60', action:'hide', slots:['mag_seat']},
        {trigger:'st_resonance_g2', action:'hide', slots:['rear_grip', 'stock']},
        {trigger:'st_forbidden', action:'hide', slots:['rear_grip', 'stock']}
        ]
    },

    'g3': {
        optic: ['op_357_先进白热成像战斗', 'op_357_先进热融合全息', 'op_357_VMX无框', 'op_357_1p33_2_4倍', 'op_357_UHX全息', 'op_357_棱镜通用二倍光学', 'op_357_灵眼3_7弹道计算狙击镜', 'op_357_M157火控光学系统', 'op_357_视点3倍', 'op_357_1p_29俄制3倍', 'op_357_LPVO多倍率战斗', 'op_357_3_7可调倍率狙击镜', 'op_357_侦察1_5_5可调', 'op_357_HAMR组合', 'op_357_MEO微型瞄具增高架', 'op_725_多用途战术增高架', 'op_725_微型瞄具增高架', 'op_357_ACOG精准六倍镜', 'op_357_Osight微型', 'op_357_Cobra准直式', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_okp_7反射', 'op_357_XCOG突击3_5倍', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_357_AP5000反射式', 'op_357_全息二型', 'op_357_反射式', 'op_357_俄式准直二倍', 'op_357_全息', 'op_none'],
        muzzle: ['mu_tenglong_FFC双流', 'mu_xinhuo', 'mu_tenglong_先进多口径', 'mu_tenglong_M7实用', 'mu_dead', 'mu_tenglong_沙暴垂直', 'mu_tenglong_堡垒水平', 'mu_poseidon', 'mu_tenglong_轻语战术', 'mu_tenglong_钛金竞赛', 'mu_tenglong_炽火抑制器', 'mu_tenglong_钢制膛口', 'mu_tenglong_实用_2', 'mu_tenglong_实用', 'mu_none'],
        barrel: ['br_g3_G3平台神射', 'br_g3_G3加强长', 'br_g3_G3飓风短', 'br_g3_G3守卫标准', 'br_none'],
        foregrip: ['fg_resonance3', 'fg_ec_stop', 'fg_tenglong_黎明三角手电握把', 'fg_tenglong_破晓垂直手电握把', 'fg_tenglong_CR棱镜阻手器', 'fg_resonance2', 'fg_bipod_grip', 'fg_k1_elite', 'fg_tenglong_X25U斜侧战斗握把', 'fg_tenglong_共振人体工程握把', 'fg_phantom_vert', 'fg_tenglong_战术垂直握把', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_tenglong_折叠握把', 'fg_vfg_knight', 'fg_tenglong_ZFSG战术握把', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_g3_侍卫稳固', 'rg_g3_G3镂空握把', 'rg_g3_PSG_1', 'rg_none'],
        mag: ['ma_g3_G330发', 'ma_g3_G350发', 'ma_none'],
        stock: ['st_tenglong_QR高性能后托', 'st_tenglong_CT增强型后托', 'st_shadow_core', 'st_bizon_MRGS镂空', 'st_ur_tactical2', 'st_bizon_影袭导轨', 'st_skeleton_sniper', 'st_bizon_枢机先进战斗', 'st_416_stable', 'st_tenglong_416轻型', 'st_tenglong_精英轻型', 'st_raid_core', 'st_pivot_stable', 'st_lightning_rail', 'st_g3_MP5伸缩', 'st_g3_G3稳定', 'st_g3_MP5K折叠', 'st_g3_G3伸缩', 'st_g3_MP5尾盖', 'st_utility_light', 'st_tenglong_实用战术', 'st_tenglong_实用稳定', 'st_bizon_核心导轨', 'st_none'],
        mag_seat: ['ms_awm_灰熊全威力快拔套沙', 'ms_g3_灰熊全威力快拔套绿', 'ms_awm_灰熊全威力口径快拔套黑', 'mag_seat_none'],
        side_optic: ['op_tenglong_侧置Osight微型', 'op_tenglong_侧置战斗红点', 'op_tenglong_侧置微型红点', 'op_tenglong_侧置XRO快速反应', 'op_tenglong_侧置全景红点', 'side_optic_none'],
        rail_bipod: ['rb_util', 'rb_none'],
        right_rail: ['ur_tenglong_OLIGHTWARRIOR3S战术手电', 'rr_tenglong_OLIGHT_Odin_S战术手电', 'rr_tenglong_OLIGHT_Baldr_Pro_R多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'rr_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'upper_rail', 'left_patch', 'left_rail', 'right_patch', 'muzzle']
        slotVisibilityRules: [
        {trigger:'op_spirit_37', action:'show', slots:['lens_shade']},
        {trigger:'op_m157_fire', action:'show', slots:['lens_shade']},
        {trigger:'op_lpvo', action:'show', slots:['lens_shade']},
        {trigger:'op_sniper', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_scout', action:'show', slots:['lens_shade']},
        {trigger:'op_riser', action:'show', slots:['optic']},
        {trigger:'op_725_多用途战术增高架', action:'show', slots:['tactical_device', 'riser_optic']},
        {trigger:'op_riser3', action:'show', slots:['riser_optic']},
        {trigger:'br_g3_marksman', action:'show', slots:['upper_rail', 'left_patch', 'left_rail', 'right_patch', 'muzzle']},
        {trigger:'br_g3_enhanced_l', action:'show', slots:['left_rail', 'left_patch', 'right_patch', 'muzzle']},
        {trigger:'br_g3_hurricane', action:'hide', slots:['rail_bipod']},
        {trigger:'br_g3_hurricane', action:'show', slots:['left_patch', 'right_patch', 'left_rail', 'muzzle']},
        {trigger:'br_g3_guardian', action:'show', slots:['right_patch', 'left_rail', 'left_patch', 'muzzle']},
        {trigger:'ma_g3_50', action:'hide', slots:['mag_seat']}
        ]
    },

    'k416': {
        optic: ['op_357_先进白热成像战斗', 'op_357_先进热融合全息', 'op_357_VMX无框', 'op_357_1p33_2_4倍', 'op_357_UHX全息', 'op_357_棱镜通用二倍光学', 'op_357_灵眼3_7弹道计算狙击镜', 'op_357_M157火控光学系统', 'op_357_视点3倍', 'op_357_1p_29俄制3倍', 'op_357_LPVO多倍率战斗', 'op_357_3_7可调倍率狙击镜', 'op_357_侦察1_5_5可调', 'op_357_HAMR组合', 'op_357_MEO微型瞄具增高架', 'op_725_多用途战术增高架', 'op_725_微型瞄具增高架', 'op_357_ACOG精准六倍镜', 'op_357_Osight微型', 'op_357_Cobra准直式', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_okp_7反射', 'op_357_XCOG突击3_5倍', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_357_AP5000反射式', 'op_357_全息二型', 'op_357_反射式', 'op_357_俄式准直二倍', 'op_357_全息', 'op_none'],
        muzzle: ['mu_web_titanium', 'mu_tenglong_FFC双流', 'mu_xinhuo', 'mu_tenglong_先进多口径', 'mu_tenglong_M7实用', 'mu_dead', 'mu_tenglong_沙暴垂直', 'mu_tenglong_堡垒水平', 'mu_poseidon', 'mu_tenglong_轻语战术', 'mu_tenglong_钛金竞赛', 'mu_tenglong_炽火抑制器', 'mu_tenglong_钢制膛口', 'mu_tenglong_实用_2', 'mu_ar57_鸟笼', 'mu_tenglong_实用', 'mu_none'],
        barrel: ['br_k416_K416A8长', 'br_k416_K416A8', 'br_k416_K416特勤短', 'br_k416_K416精英重', 'br_none'],
        foregrip: ['fg_resonance3', 'fg_ec_stop', 'fg_tenglong_黎明三角手电握把', 'fg_tenglong_破晓垂直手电握把', 'fg_tenglong_CR棱镜阻手器', 'fg_resonance2', 'fg_bipod_grip', 'fg_k1_elite', 'fg_tenglong_X25U斜侧战斗握把', 'fg_tenglong_共振人体工程握把', 'fg_phantom_vert', 'fg_tenglong_战术垂直握把', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_tenglong_折叠握把', 'fg_vfg_knight', 'fg_tenglong_ZFSG战术握把', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_ar57_模块化AR', 'rg_ar_tower', 'rg_ar57_侵袭', 'rg_ar57_幻影', 'rg_car_15_ARMOE', 'rg_ar57_射手D_2', 'rg_ar57_飓风D_1', 'rg_ar57_M7稳定', 'rg_none'],
        mag: ['ma_car_15_AR60发扩容', 'ma_car_15_M4弹鼓60发', 'ma_car_15_M4扩容45发', 'ma_k416', 'ma_none'],
        stock: ['st_tenglong_锚点导轨后托', 'st_tenglong_QR高性能后托', 'st_tenglong_CT增强型后托', 'st_shadow_core', 'st_k416_416_C伸缩', 'st_ur_tactical2', 'st_skeleton_sniper', 'st_416_stable', 'st_tenglong_416轻型', 'st_tenglong_精英轻型', 'st_raid_core', 'st_pivot_stable', 'st_tenglong_M4缓冲托芯', 'st_utility_light', 'st_tenglong_实用战术', 'st_none'],
        mag_seat: ['ms_aks_74u_蜜獾小口径快拔套沙', 'ms_tenglong_蜜獾小口径快拔套绿', 'ms_tenglong_蜜獾小口径快拔套黑', 'mag_seat_none'],
        stock_kit: ['sk_ar57_共振二代一体', 'stock_kit_none'],
        side_optic: ['op_tenglong_侧置Osight微型', 'op_tenglong_侧置战斗红点', 'op_tenglong_侧置微型红点', 'op_tenglong_侧置XRO快速反应', 'op_tenglong_侧置全景红点', 'side_optic_none'],
        upper_rail: ['ur_tenglong_OLIGHTWARRIOR3S战术手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'ur_none'],
        left_rail: ['rr_bizon_OLIGHTOdinS战术手电', 'rr_ak_12_OLIGHTBaldrProR多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'lr_none'],
        right_rail: ['ur_tenglong_OLIGHTWARRIOR3S战术手电', 'rr_bizon_OLIGHTOdinS战术手电', 'rr_ak_12_OLIGHTBaldrProR多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'rr_none'],
        upper_patch: ['ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'up_none'],
        left_patch: ['ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'lp_none'],
        right_patch: ['ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'rp_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'rail_bipod', 'rear_grip_patch', 'grip_seat']
        slotVisibilityRules: [
        {trigger:'op_spirit_37', action:'show', slots:['lens_shade']},
        {trigger:'op_m157_fire', action:'show', slots:['lens_shade']},
        {trigger:'op_lpvo', action:'show', slots:['lens_shade']},
        {trigger:'op_sniper', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_scout', action:'show', slots:['lens_shade']},
        {trigger:'op_riser', action:'show', slots:['optic']},
        {trigger:'op_725_多用途战术增高架', action:'show', slots:['tactical_device', 'riser_optic']},
        {trigger:'op_riser3', action:'show', slots:['riser_optic']},
        {trigger:'br_k416_K416A8长', action:'show', slots:['rail_bipod']},
        {trigger:'br_k416_K416特勤短', action:'hide', slots:['upper_patch']},
        {trigger:'rg_ar_tower', action:'show', slots:['rear_grip_patch', 'grip_seat']},
        {trigger:'ma_m4_60', action:'hide', slots:['mag_seat']},
        {trigger:'st_resonance_g2', action:'hide', slots:['stock', 'rear_grip']}
        ]
    },

    'k437': {
        optic: ['op_357_先进白热成像战斗', 'op_357_先进热融合全息', 'op_357_VMX无框', 'op_357_1p33_2_4倍', 'op_357_UHX全息', 'op_357_棱镜通用二倍光学', 'op_357_灵眼3_7弹道计算狙击镜', 'op_357_M157火控光学系统', 'op_357_视点3倍', 'op_357_1p_29俄制3倍', 'op_357_LPVO多倍率战斗', 'op_357_3_7可调倍率狙击镜', 'op_357_侦察1_5_5可调', 'op_357_HAMR组合', 'op_357_MEO微型瞄具增高架', 'op_725_多用途战术增高架', 'op_725_微型瞄具增高架', 'op_357_ACOG精准六倍镜', 'op_357_Osight微型', 'op_357_Cobra准直式', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_okp_7反射', 'op_357_XCOG突击3_5倍', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_357_AP5000反射式', 'op_357_全息二型', 'op_357_反射式', 'op_357_俄式准直二倍', 'op_357_全息', 'op_none'],
        muzzle: ['mu_web_titanium', 'mu_tenglong_FFC双流', 'mu_xinhuo', 'mu_tenglong_先进多口径', 'mu_tenglong_M7实用', 'mu_dead', 'mu_tenglong_沙暴垂直', 'mu_tenglong_堡垒水平', 'mu_poseidon', 'mu_tenglong_轻语战术', 'mu_tenglong_钛金竞赛', 'mu_tenglong_炽火抑制器', 'mu_tenglong_钢制膛口', 'mu_tenglong_实用_2', 'mu_tenglong_实用', 'mu_none'],
        barrel: ['br_k437_K437特攻一体消音', 'br_k437_K437长矛手长', 'br_k437_K437断刃短', 'br_none'],
        foregrip: ['fg_resonance3', 'fg_ec_stop', 'fg_tenglong_黎明三角手电握把', 'fg_tenglong_破晓垂直手电握把', 'fg_tenglong_CR棱镜阻手器', 'fg_resonance2', 'fg_bipod_grip', 'fg_k1_elite', 'fg_tenglong_X25U斜侧战斗握把', 'fg_tenglong_共振人体工程握把', 'fg_phantom_vert', 'fg_tenglong_战术垂直握把', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_tenglong_折叠握把', 'fg_vfg_knight', 'fg_tenglong_ZFSG战术握把', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_ar57_模块化AR', 'rg_ar_tower', 'rg_ar57_侵袭', 'rg_ar57_幻影', 'rg_car_15_ARMOE', 'rg_ar57_射手D_2', 'rg_ar57_飓风D_1', 'rg_ar57_M7稳定', 'rg_ar57_416实用', 'rg_none'],
        mag: ['ma_k437_K43760发', 'ma_k437_45发K437扩容', 'ma_none'],
        stock: ['st_tenglong_锚点导轨后托', 'st_tenglong_QR高性能后托', 'st_tenglong_CT增强型后托', 'st_shadow_core', 'st_bizon_MRGS镂空', 'st_ur_tactical2', 'st_bizon_影袭导轨', 'st_skeleton_sniper', 'st_416_stable', 'st_tenglong_416轻型', 'st_tenglong_精英轻型', 'st_raid_core', 'st_pivot_stable', 'st_lightning_rail', 'st_utility_light', 'st_tenglong_实用战术', 'st_tenglong_实用稳定', 'st_bizon_核心导轨', 'st_none'],
        mag_seat: ['ms_aks_74u_蜜獾小口径快拔套沙', 'ms_tenglong_蜜獾小口径快拔套绿', 'ms_tenglong_蜜獾小口径快拔套黑', 'mag_seat_none'],
        side_optic: ['op_tenglong_侧置Osight微型', 'op_tenglong_侧置战斗红点', 'op_tenglong_侧置微型红点', 'op_tenglong_侧置XRO快速反应', 'op_tenglong_侧置全景红点', 'side_optic_none'],
        upper_rail: ['ur_tenglong_OLIGHTWARRIOR3S战术手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'ur_none'],
        left_rail: ['ur_tenglong_OLIGHTWARRIOR3S战术手电', 'rr_bizon_OLIGHTOdinS战术手电', 'rr_tenglong_OLIGHT_Baldr_Pro_R多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'lr_none'],
        right_rail: ['ur_tenglong_OLIGHTWARRIOR3S战术手电', 'rr_bizon_OLIGHTOdinS战术手电', 'rr_tenglong_OLIGHT_Baldr_Pro_R多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'rr_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'rear_grip_patch', 'grip_seat']
        slotVisibilityRules: [
        {trigger:'op_spirit_37', action:'show', slots:['lens_shade']},
        {trigger:'op_m157_fire', action:'show', slots:['lens_shade']},
        {trigger:'op_lpvo', action:'show', slots:['lens_shade']},
        {trigger:'op_sniper', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_scout', action:'show', slots:['lens_shade']},
        {trigger:'op_riser', action:'show', slots:['optic']},
        {trigger:'op_725_多用途战术增高架', action:'show', slots:['tactical_device', 'riser_optic']},
        {trigger:'op_riser3', action:'show', slots:['riser_optic']},
        {trigger:'br_k437_integrated', action:'show', slots:['right_patch', 'left_patch']},
        {trigger:'br_k437_lancer_l', action:'show', slots:['left_patch', 'right_patch']},
        {trigger:'rg_ar_tower', action:'show', slots:['rear_grip_patch', 'grip_seat']},
        {trigger:'ma_k437_60', action:'hide', slots:['mag_seat']},
        {trigger:'br_k437_integrated', action:'hide', slots:['muzzle']}
        ]
    },

    'kc17': {
        optic: ['op_357_先进白热成像战斗', 'op_357_先进热融合全息', 'op_357_VMX无框', 'op_357_1p33_2_4倍', 'op_357_UHX全息', 'op_357_棱镜通用二倍光学', 'op_357_灵眼3_7弹道计算狙击镜', 'op_357_M157火控光学系统', 'op_357_视点3倍', 'op_357_1p_29俄制3倍', 'op_357_LPVO多倍率战斗', 'op_357_3_7可调倍率狙击镜', 'op_357_侦察1_5_5可调', 'op_357_HAMR组合', 'op_357_MEO微型瞄具增高架', 'op_725_多用途战术增高架', 'op_725_微型瞄具增高架', 'op_357_ACOG精准六倍镜', 'op_357_Osight微型', 'op_357_Cobra准直式', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_okp_7反射', 'op_357_XCOG突击3_5倍', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_357_AP5000反射式', 'op_357_全息二型', 'op_357_反射式', 'op_357_俄式准直二倍', 'op_357_全息', 'op_none'],
        muzzle: ['mu_tenglong_FFC双流', 'mu_xinhuo', 'mu_tenglong_先进多口径', 'mu_dtk', 'mu_tenglong_M7实用', 'mu_ak_12_AK勇火', 'mu_pbs', 'mu_dead', 'mu_tenglong_沙暴垂直', 'mu_tenglong_堡垒水平', 'mu_poseidon', 'mu_tenglong_轻语战术', 'mu_tenglong_钛金竞赛', 'mu_tenglong_炽火抑制器', 'mu_ak_12_AK实用', 'mu_tenglong_钢制膛口', 'mu_tenglong_实用_2', 'mu_flare_bell', 'mu_tenglong_实用', 'mu_none'],
        barrel: ['br_kc17_KC17影舞者消音', 'br_kc17_KC17短刃', 'br_kc17_KC17长剑', 'br_none'],
        foregrip: ['fg_resonance3', 'fg_ec_stop', 'fg_tenglong_黎明三角手电握把', 'fg_tenglong_破晓垂直手电握把', 'fg_tenglong_CR棱镜阻手器', 'fg_resonance2', 'fg_bipod_grip', 'fg_k1_elite', 'fg_tenglong_X25U斜侧战斗握把', 'fg_tenglong_共振人体工程握把', 'fg_phantom_vert', 'fg_tenglong_战术垂直握把', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_tenglong_折叠握把', 'fg_vfg_knight', 'fg_tenglong_ZFSG战术握把', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_ar57_模块化AR', 'rg_ar_tower', 'rg_ar57_侵袭', 'rg_ar57_幻影', 'rg_car_15_ARMOE', 'rg_ar57_射手D_2', 'rg_ar57_飓风D_1', 'rg_ar57_M7稳定', 'rg_ar57_416实用', 'rg_none'],
        mag: ['ma_kc17_AKS_74U聚合物弹鼓75', 'ma_ak_12_AKS_74U延长弹匣45发', 'ma_ak_12_AK12聚合物30发', 'ma_none'],
        stock: ['st_tenglong_锚点导轨后托', 'st_tenglong_QR高性能后托', 'st_tenglong_CT增强型后托', 'st_kc17_KC17先进战斗', 'st_shadow_core', 'st_bizon_MRGS镂空', 'st_ur_tactical2', 'st_bizon_影袭导轨', 'st_skeleton_sniper', 'st_416_stable', 'st_tenglong_416轻型', 'st_tenglong_精英轻型', 'st_raid_core', 'st_pivot_stable', 'st_lightning_rail', 'st_utility_light', 'st_tenglong_实用战术', 'st_bizon_核心导轨', 'st_none'],
        mag_seat: ['ms_aks_74u_蜜獾小口径快拔套沙', 'ms_tenglong_蜜獾小口径快拔套绿', 'ms_tenglong_蜜獾小口径快拔套黑', 'mag_seat_none'],
        side_optic: ['op_tenglong_侧置Osight微型', 'op_tenglong_侧置战斗红点', 'op_tenglong_侧置微型红点', 'op_tenglong_侧置XRO快速反应', 'op_tenglong_侧置全景红点', 'side_optic_none'],
        upper_rail: ['ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'ur_none'],
        left_rail: ['rr_bizon_OLIGHTOdinS战术手电', 'rr_tenglong_OLIGHT_Baldr_Pro_R多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'lr_none'],
        right_rail: ['rr_bizon_OLIGHTOdinS战术手电', 'rr_tenglong_OLIGHT_Baldr_Pro_R多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'rr_none'],
        left_patch: ['ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'lp_none'],
        right_patch: ['ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'rp_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'rear_grip_patch', 'grip_seat']
        slotVisibilityRules: [
        {trigger:'op_spirit_37', action:'show', slots:['lens_shade']},
        {trigger:'op_m157_fire', action:'show', slots:['lens_shade']},
        {trigger:'op_lpvo', action:'show', slots:['lens_shade']},
        {trigger:'op_sniper', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_scout', action:'show', slots:['lens_shade']},
        {trigger:'op_riser', action:'show', slots:['optic']},
        {trigger:'op_725_多用途战术增高架', action:'show', slots:['tactical_device', 'riser_optic']},
        {trigger:'op_riser3', action:'show', slots:['riser_optic']},
        {trigger:'rg_ar_tower', action:'show', slots:['rear_grip_patch', 'grip_seat']},
        {trigger:'ma_aks74u_75', action:'hide', slots:['mag_seat']},
        {trigger:'br_kc17_shadow', action:'hide', slots:['muzzle']}
        ]
    },

    'm16a4': {
        optic: ['op_357_先进白热成像战斗', 'op_357_先进热融合全息', 'op_357_VMX无框', 'op_357_1p33_2_4倍', 'op_357_UHX全息', 'op_357_棱镜通用二倍光学', 'op_357_灵眼3_7弹道计算狙击镜', 'op_357_M157火控光学系统', 'op_357_视点3倍', 'op_357_1p_29俄制3倍', 'op_357_LPVO多倍率战斗', 'op_357_3_7可调倍率狙击镜', 'op_357_侦察1_5_5可调', 'op_357_HAMR组合', 'op_357_MEO微型瞄具增高架', 'op_725_多用途战术增高架', 'op_725_微型瞄具增高架', 'op_357_ACOG精准六倍镜', 'op_357_Osight微型', 'op_357_Cobra准直式', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_okp_7反射', 'op_357_XCOG突击3_5倍', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_357_AP5000反射式', 'op_357_全息二型', 'op_357_反射式', 'op_357_俄式准直二倍', 'op_357_全息', 'op_none'],
        muzzle: ['mu_web_titanium', 'mu_tenglong_FFC双流', 'mu_xinhuo', 'mu_tenglong_先进多口径', 'mu_tenglong_M7实用', 'mu_dead', 'mu_tenglong_沙暴垂直', 'mu_tenglong_堡垒水平', 'mu_poseidon', 'mu_tenglong_轻语战术', 'mu_tenglong_钛金竞赛', 'mu_tenglong_炽火抑制器', 'mu_car_15_OPS', 'mu_tenglong_钢制膛口', 'mu_tenglong_实用_2', 'mu_ar57_鸟笼', 'mu_tenglong_实用', 'mu_none'],
        barrel: ['br_car_15_AR特勤一体消音组合', 'br_car_15_AR特攻短', 'br_car_15_AR战壕标准', 'br_car_15_AR加百列长', 'br_car_15_AR标准', 'br_car_15_AR碳纤维', 'br_none'],
        rear_grip: ['rg_ar57_模块化AR', 'rg_ar_tower', 'rg_ar57_侵袭', 'rg_ar57_幻影', 'rg_car_15_ARMOE', 'rg_ar57_射手D_2', 'rg_ar57_飓风D_1', 'rg_ar57_M7稳定', 'rg_ar57_416实用', 'rg_none'],
        mag: ['ma_car_15_AR60发扩容', 'ma_car_15_M4弹鼓60发', 'ma_car_15_M4扩容45发', 'ma_m16a4_AR聚合物30发', 'ma_none'],
        stock: ['st_tenglong_锚点导轨后托', 'st_tenglong_QR高性能后托', 'st_tenglong_CT增强型后托', 'st_shadow_core', 'st_ur_tactical2', 'st_skeleton_sniper', 'st_416_stable', 'st_tenglong_416轻型', 'st_tenglong_精英轻型', 'st_raid_core', 'st_pivot_stable', 'st_tenglong_M4缓冲托芯', 'st_utility_light', 'st_tenglong_实用战术', 'st_tenglong_实用稳定', 'st_none'],
        mag_seat: ['ms_tenglong_蜜獾小口径快拔套沙', 'ms_m16a4_蜜獾小口径快拔套〔绿', 'ms_tenglong_蜜獾小口径快拔套黑', 'mag_seat_none'],
        stock_kit: ['sk_ar57_共振二代一体', 'sk_ar57_禁区一体', 'stock_kit_none'],
        lower_rail: ['fn_car_15_CAR15绑手电', 'lower_rail_none'],
        side_optic: ['op_tenglong_侧置Osight微型', 'op_tenglong_侧置战斗红点', 'op_tenglong_侧置微型红点', 'op_tenglong_侧置XRO快速反应', 'op_tenglong_侧置全景红点', 'side_optic_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'foregrip', 'upper_rail', 'rail_bipod', 'right_rail', 'upper_patch', 'left_rail', 'left_patch', 'right_patch', 'rear_grip_patch', 'grip_seat']
        slotVisibilityRules: [
        {trigger:'op_spirit_37', action:'show', slots:['lens_shade']},
        {trigger:'op_m157_fire', action:'show', slots:['lens_shade']},
        {trigger:'op_lpvo', action:'show', slots:['lens_shade']},
        {trigger:'op_sniper', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_scout', action:'show', slots:['lens_shade']},
        {trigger:'op_riser', action:'show', slots:['optic']},
        {trigger:'op_725_多用途战术增高架', action:'show', slots:['tactical_device', 'riser_optic']},
        {trigger:'op_riser3', action:'show', slots:['riser_optic']},
        {trigger:'br_car_15_AR特勤一体消音组合', action:'hide', slots:['muzzle', 'lower_rail']},
        {trigger:'br_car_15_AR特勤一体消音组合', action:'show', slots:['foregrip', 'upper_rail', 'rail_bipod', 'right_rail', 'upper_patch', 'left_rail']},
        {trigger:'br_car_15_AR特攻短', action:'hide', slots:['lower_rail']},
        {trigger:'br_car_15_AR特攻短', action:'show', slots:['upper_rail', 'left_rail', 'foregrip', 'right_rail']},
        {trigger:'br_car_15_AR战壕标准', action:'hide', slots:['lower_rail']},
        {trigger:'br_car_15_AR战壕标准', action:'show', slots:['rail_bipod', 'foregrip', 'upper_rail', 'left_rail', 'right_rail', 'upper_patch', 'left_patch', 'right_patch']},
        {trigger:'br_car_15_AR加百列长', action:'hide', slots:['lower_rail']},
        {trigger:'br_car_15_AR加百列长', action:'show', slots:['foregrip', 'upper_rail', 'rail_bipod', 'left_rail', 'right_rail', 'upper_patch', 'right_patch', 'left_patch']},
        {trigger:'br_car_15_AR标准', action:'hide', slots:['lower_rail']},
        {trigger:'br_car_15_AR标准', action:'show', slots:['upper_rail', 'rail_bipod', 'foregrip', 'right_rail', 'upper_patch', 'left_rail', 'left_patch', 'right_patch']},
        {trigger:'br_car_15_AR碳纤维', action:'hide', slots:['lower_rail']},
        {trigger:'br_car_15_AR碳纤维', action:'show', slots:['foregrip', 'upper_rail', 'rail_bipod', 'left_rail', 'right_rail', 'upper_patch', 'right_patch', 'left_patch']},
        {trigger:'rg_ar_tower', action:'show', slots:['rear_grip_patch', 'grip_seat']},
        {trigger:'ma_m4_60', action:'hide', slots:['mag_seat']},
        {trigger:'st_resonance_g2', action:'hide', slots:['rear_grip', 'stock']},
        {trigger:'st_forbidden', action:'hide', slots:['rear_grip', 'stock']}
        ]
    },

    'm4a1': {
        optic: ['op_357_先进白热成像战斗', 'op_357_先进热融合全息', 'op_357_VMX无框', 'op_357_1p33_2_4倍', 'op_357_UHX全息', 'op_357_棱镜通用二倍光学', 'op_357_灵眼3_7弹道计算狙击镜', 'op_357_M157火控光学系统', 'op_357_视点3倍', 'op_357_1p_29俄制3倍', 'op_357_LPVO多倍率战斗', 'op_357_3_7可调倍率狙击镜', 'op_357_侦察1_5_5可调', 'op_357_HAMR组合', 'op_357_MEO微型瞄具增高架', 'op_725_多用途战术增高架', 'op_725_微型瞄具增高架', 'op_357_ACOG精准六倍镜', 'op_357_Osight微型', 'op_357_Cobra准直式', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_okp_7反射', 'op_357_XCOG突击3_5倍', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_357_AP5000反射式', 'op_357_全息二型', 'op_357_反射式', 'op_357_俄式准直二倍', 'op_357_全息', 'op_none'],
        muzzle: ['mu_web_titanium', 'mu_tenglong_FFC双流', 'mu_xinhuo', 'mu_tenglong_先进多口径', 'mu_tenglong_M7实用', 'mu_dead', 'mu_tenglong_沙暴垂直', 'mu_tenglong_堡垒水平', 'mu_poseidon', 'mu_tenglong_轻语战术', 'mu_tenglong_钛金竞赛', 'mu_tenglong_炽火抑制器', 'mu_tenglong_钢制膛口', 'mu_tenglong_实用_2', 'mu_ar57_鸟笼', 'mu_tenglong_实用', 'mu_none'],
        barrel: ['br_car_15_AR特勤一体消音组合', 'br_car_15_AR特攻短', 'br_car_15_AR战壕标准', 'br_car_15_AR加百列长', 'br_car_15_AR碳纤维', 'br_none'],
        foregrip: ['fg_resonance3', 'fg_ec_stop', 'fg_tenglong_黎明三角手电握把', 'fg_tenglong_破晓垂直手电握把', 'fg_tenglong_CR棱镜阻手器', 'fg_resonance2', 'fg_bipod_grip', 'fg_k1_elite', 'fg_tenglong_X25U斜侧战斗握把', 'fg_tenglong_共振人体工程握把', 'fg_phantom_vert', 'fg_tenglong_战术垂直握把', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_tenglong_折叠握把', 'fg_vfg_knight', 'fg_tenglong_ZFSG战术握把', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_ar57_模块化AR', 'rg_ar_tower', 'rg_ar57_侵袭', 'rg_ar57_幻影', 'rg_ar57_AR_MOE', 'rg_ar57_射手D_2', 'rg_ar57_飓风D_1', 'rg_ar57_M7稳定', 'rg_ar57_416实用', 'rg_none'],
        mag: ['ma_car_15_AR60发扩容', 'ma_car_15_M4弹鼓60发', 'ma_car_15_M4扩容45发', 'ma_car_15_AR聚合物30发', 'ma_none'],
        stock: ['st_tenglong_锚点导轨后托', 'st_tenglong_QR高性能后托', 'st_tenglong_CT增强型后托', 'st_shadow_core', 'st_ur_tactical2', 'st_skeleton_sniper', 'st_416_stable', 'st_tenglong_416轻型', 'st_tenglong_精英轻型', 'st_raid_core', 'st_pivot_stable', 'st_tenglong_M4缓冲托芯', 'st_m4a1_M16A4稳定', 'st_utility_light', 'st_tenglong_实用战术', 'st_tenglong_实用稳定', 'st_none'],
        mag_seat: ['ms_ak_12_蜜獾小口径快拔套沙', 'ms_tenglong_蜜獾小口径快拔套绿', 'ms_tenglong_蜜獾小口径快拔套黑', 'mag_seat_none'],
        stock_kit: ['sk_ar57_共振二代一体', 'sk_ar57_禁区一体', 'stock_kit_none'],
        side_optic: ['op_tenglong_侧置Osight微型', 'op_tenglong_侧置战斗红点', 'op_tenglong_侧置微型红点', 'op_tenglong_侧置XRO快速反应', 'op_tenglong_侧置全景红点', 'side_optic_none'],
        rail_bipod: ['rb_util', 'rb_none'],
        upper_rail: ['ur_tenglong_OLIGHTWARRIOR3S战术手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'ur_none'],
        left_rail: ['rr_bizon_OLIGHTOdinS战术手电', 'rr_tenglong_OLIGHT_Baldr_Pro_R多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'lr_none'],
        right_rail: ['ur_tenglong_OLIGHTWARRIOR3S战术手电', 'rr_bizon_OLIGHTOdinS战术手电', 'rr_tenglong_OLIGHT_Baldr_Pro_R多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'rr_none'],
        upper_patch: ['ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'up_none'],
        left_patch: ['ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'lp_none'],
        right_patch: ['ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'rp_none'],
        defaultHidden: [],
        slotVisibilityRules: [
        {trigger:'op_spirit_37', action:'show', slots:['lens_shade']},
        {trigger:'op_m157_fire', action:'show', slots:['lens_shade']},
        {trigger:'op_lpvo', action:'show', slots:['lens_shade']},
        {trigger:'op_sniper', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_scout', action:'show', slots:['lens_shade']},
        {trigger:'op_riser', action:'show', slots:['optic']},
        {trigger:'op_725_多用途战术增高架', action:'show', slots:['tactical_device', 'riser_optic']},
        {trigger:'op_riser3', action:'show', slots:['riser_optic']},
        {trigger:'br_car_15_AR特勤一体消音组合', action:'hide', slots:['muzzle']},
        {trigger:'br_car_15_AR特攻短', action:'hide', slots:['left_patch', 'upper_patch', 'rail_bipod', 'right_patch']},
        {trigger:'st_m16a4_stable', action:'show', slots:['cheek_pad']},
        {trigger:'rg_ar_tower', action:'show', slots:['rear_grip_patch', 'grip_seat']},
        {trigger:'ma_m4_60', action:'hide', slots:['mag_seat']},
        {trigger:'st_resonance_g2', action:'hide', slots:['rear_grip', 'stock']},
        {trigger:'st_forbidden', action:'hide', slots:['rear_grip', 'stock']}
        ]
    },

    'm7': {
        optic: ['op_357_先进白热成像战斗', 'op_357_先进热融合全息', 'op_357_VMX无框', 'op_357_1p33_2_4倍', 'op_357_UHX全息', 'op_357_棱镜通用二倍光学', 'op_357_灵眼3_7弹道计算狙击镜', 'op_357_M157火控光学系统', 'op_357_视点3倍', 'op_357_1p_29俄制3倍', 'op_357_LPVO多倍率战斗', 'op_357_3_7可调倍率狙击镜', 'op_357_侦察1_5_5可调', 'op_357_HAMR组合', 'op_357_MEO微型瞄具增高架', 'op_725_多用途战术增高架', 'op_725_微型瞄具增高架', 'op_357_ACOG精准六倍镜', 'op_357_Osight微型', 'op_357_Cobra准直式', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_okp_7反射', 'op_357_XCOG突击3_5倍', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_357_AP5000反射式', 'op_357_全息二型', 'op_357_反射式', 'op_357_俄式准直二倍', 'op_357_全息', 'op_none'],
        muzzle: ['mu_tenglong_FFC双流', 'mu_xinhuo', 'mu_tenglong_先进多口径', 'mu_tenglong_M7实用', 'mu_dead', 'mu_tenglong_沙暴垂直', 'mu_tenglong_堡垒水平', 'mu_poseidon', 'mu_tenglong_轻语战术', 'mu_tenglong_钛金竞赛', 'mu_tenglong_炽火抑制器', 'mu_tenglong_钢制膛口', 'mu_tenglong_实用_2', 'mu_tenglong_实用', 'mu_none'],
        barrel: ['br_m7_M7灵蜥短', 'br_m7_M7堤风超长', 'br_m7_M7实用长', 'br_none'],
        foregrip: ['fg_resonance3', 'fg_ec_stop', 'fg_tenglong_黎明三角手电握把', 'fg_tenglong_破晓垂直手电握把', 'fg_tenglong_CR棱镜阻手器', 'fg_resonance2', 'fg_bipod_grip', 'fg_k1_elite', 'fg_tenglong_X25U斜侧战斗握把', 'fg_tenglong_共振人体工程握把', 'fg_phantom_vert', 'fg_tenglong_战术垂直握把', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_tenglong_折叠握把', 'fg_vfg_knight', 'fg_tenglong_ZFSG战术握把', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_ar57_模块化AR', 'rg_ar_tower', 'rg_ar57_侵袭', 'rg_ar57_幻影', 'rg_car_15_ARMOE', 'rg_ar57_射手D_2', 'rg_ar57_飓风D_1', 'rg_ar57_416实用', 'rg_none'],
        mag: ['ma_m7_M745发6_8', 'ma_m7_M730发6_8', 'ma_none'],
        stock: ['st_tenglong_锚点导轨后托', 'st_tenglong_QR高性能后托', 'st_tenglong_CT增强型后托', 'st_shadow_core', 'st_bizon_MRGS镂空', 'st_ur_tactical2', 'st_bizon_影袭导轨', 'st_skeleton_sniper', 'st_416_stable', 'st_tenglong_416轻型', 'st_tenglong_精英轻型', 'st_raid_core', 'st_pivot_stable', 'st_lightning_rail', 'st_utility_light', 'st_tenglong_实用战术', 'st_tenglong_实用稳定', 'st_bizon_核心导轨', 'st_none'],
        mag_seat: ['ms_awm_灰熊全威力快拔套沙', 'ms_m7_灰熊全威力快拔套绿', 'ms_awm_灰熊全威力口径快拔套黑', 'mag_seat_none'],
        side_optic: ['op_tenglong_侧置Osight微型', 'op_tenglong_侧置战斗红点', 'op_tenglong_侧置微型红点', 'op_tenglong_侧置XRO快速反应', 'op_tenglong_侧置全景红点', 'side_optic_none'],
        rail_bipod: ['rb_util', 'rb_none'],
        upper_rail: ['ur_tenglong_OLIGHTWARRIOR3S战术手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'ur_none'],
        left_rail: ['rr_bizon_OLIGHTOdinS战术手电', 'rr_ak_12_OLIGHTBaldrProR多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'lr_none'],
        right_rail: ['ur_tenglong_OLIGHTWARRIOR3S战术手电', 'rr_bizon_OLIGHTOdinS战术手电', 'rr_ak_12_OLIGHTBaldrProR多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'rr_none'],
        left_patch: ['ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'lp_none'],
        right_patch: ['ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'rp_none'],
        defaultHidden: [],
        slotVisibilityRules: [
        {trigger:'op_spirit_37', action:'show', slots:['lens_shade']},
        {trigger:'op_m157_fire', action:'show', slots:['lens_shade']},
        {trigger:'op_lpvo', action:'show', slots:['lens_shade']},
        {trigger:'op_sniper', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_scout', action:'show', slots:['lens_shade']},
        {trigger:'op_riser', action:'show', slots:['optic']},
        {trigger:'op_725_多用途战术增高架', action:'show', slots:['tactical_device', 'riser_optic']},
        {trigger:'op_riser3', action:'show', slots:['riser_optic']},
        {trigger:'br_m7_lizard', action:'hide', slots:['rail_bipod']},
        {trigger:'br_m7_dyke_l', action:'show', slots:['upper_patch', 'muzzle']},
        {trigger:'rg_ar_tower', action:'show', slots:['rear_grip_patch', 'grip_seat']},
        {trigger:'br_m7_lizard', action:'show', slots:['muzzle']},
        {trigger:'br_m7_prac_l', action:'show', slots:['muzzle']}
        ]
    },

    'mcxlt': {
        optic: ['op_357_先进白热成像战斗', 'op_357_先进热融合全息', 'op_357_VMX无框', 'op_357_1p33_2_4倍', 'op_357_UHX全息', 'op_357_棱镜通用二倍光学', 'op_357_灵眼3_7弹道计算狙击镜', 'op_357_M157火控光学系统', 'op_357_视点3倍', 'op_357_1p_29俄制3倍', 'op_357_LPVO多倍率战斗', 'op_357_3_7可调倍率狙击镜', 'op_357_侦察1_5_5可调', 'op_357_HAMR组合', 'op_357_MEO微型瞄具增高架', 'op_725_多用途战术增高架', 'op_725_微型瞄具增高架', 'op_357_ACOG精准六倍镜', 'op_357_Osight微型', 'op_357_Cobra准直式', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_okp_7反射', 'op_357_XCOG突击3_5倍', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_357_AP5000反射式', 'op_357_全息二型', 'op_357_反射式', 'op_357_俄式准直二倍', 'op_357_全息', 'op_none'],
        muzzle: ['mu_web_titanium', 'mu_tenglong_FFC双流', 'mu_xinhuo', 'mu_tenglong_先进多口径', 'mu_tenglong_M7实用', 'mu_dead', 'mu_tenglong_沙暴垂直', 'mu_tenglong_堡垒水平', 'mu_poseidon', 'mu_tenglong_轻语战术', 'mu_tenglong_钛金竞赛', 'mu_tenglong_炽火抑制器', 'mu_tenglong_钢制膛口', 'mu_tenglong_实用_2', 'mu_ar57_鸟笼', 'mu_tenglong_实用', 'mu_none'],
        barrel: ['br_mcxlt_MCX_LT焰魂', 'br_mcxlt_MCX_LT猎手', 'br_none'],
        foregrip: ['fg_ec_stop', 'fg_tenglong_CR棱镜阻手器', 'fg_bipod_grip', 'fg_tenglong_X25U斜侧战斗握把', 'fg_phantom_vert', 'fg_tenglong_战术垂直握把', 'fg_rk0', 'fg_angle_stop', 'fg_phase_battle', 'fg_tenglong_折叠握把', 'fg_vfg_knight', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_ar57_模块化AR', 'rg_ar_tower', 'rg_ar57_侵袭', 'rg_ar57_幻影', 'rg_ar57_AR_MOE', 'rg_ar57_射手D_2', 'rg_ar57_飓风D_1', 'rg_ar57_M7稳定', 'rg_ar57_416实用', 'rg_none'],
        mag: ['ma_car_15_AR60发扩容', 'ma_car_15_M4弹鼓60发', 'ma_car_15_M4扩容45发', 'ma_m249_AR聚合物30发', 'ma_none'],
        stock: ['st_tenglong_锚点导轨后托', 'st_tenglong_QR高性能后托', 'st_tenglong_CT增强型后托', 'st_shadow_core', 'st_bizon_MRGS镂空', 'st_ur_tactical2', 'st_bizon_影袭导轨', 'st_skeleton_sniper', 'st_416_stable', 'st_tenglong_416轻型', 'st_tenglong_精英轻型', 'st_raid_core', 'st_pivot_stable', 'st_lightning_rail', 'st_tenglong_M4缓冲托芯', 'st_utility_light', 'st_tenglong_实用战术', 'st_tenglong_实用稳定', 'st_bizon_核心导轨', 'st_none'],
        mag_seat: ['ms_ak_12_蜜獾小口径快拔套沙', 'ms_tenglong_蜜獾小口径快拔套绿', 'ms_tenglong_蜜獾小口径快拔套黑', 'mag_seat_none'],
        side_optic: ['op_tenglong_侧置Osight微型', 'op_tenglong_侧置战斗红点', 'op_tenglong_侧置微型红点', 'op_tenglong_侧置XRO快速反应', 'op_tenglong_侧置全景红点', 'side_optic_none'],
        upper_rail: ['ur_tenglong_OLIGHTWARRIOR3S战术手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'ur_none'],
        left_rail: ['rr_bizon_OLIGHTOdinS战术手电', 'rr_tenglong_OLIGHT_Baldr_Pro_R多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'lr_none'],
        right_rail: ['rr_bizon_OLIGHTOdinS战术手电', 'rr_tenglong_OLIGHT_Baldr_Pro_R多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'rr_none'],
        upper_patch: ['ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'up_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'rear_grip_patch', 'grip_seat']
        slotVisibilityRules: [
        {trigger:'op_spirit_37', action:'show', slots:['lens_shade']},
        {trigger:'op_m157_fire', action:'show', slots:['lens_shade']},
        {trigger:'op_lpvo', action:'show', slots:['lens_shade']},
        {trigger:'op_sniper', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_scout', action:'show', slots:['lens_shade']},
        {trigger:'op_riser', action:'show', slots:['optic']},
        {trigger:'op_725_多用途战术增高架', action:'show', slots:['tactical_device', 'riser_optic']},
        {trigger:'op_riser3', action:'show', slots:['riser_optic']},
        {trigger:'br_mcxlt_flame', action:'show', slots:['right_patch', 'left_patch', 'heat_shield', 'foregrip']},
        {trigger:'br_mcxlt_hunter', action:'show', slots:['left_patch', 'right_patch', 'foregrip']},
        {trigger:'rg_ar_tower', action:'show', slots:['rear_grip_patch', 'grip_seat']},
        {trigger:'ma_m4_60', action:'hide', slots:['mag_seat']},
        {trigger:'br_mcxlt_flame', action:'hide', slots:['muzzle']}
        ]
    },

    'mk47': {
        optic: ['op_357_先进白热成像战斗', 'op_357_先进热融合全息', 'op_357_VMX无框', 'op_357_1p33_2_4倍', 'op_357_UHX全息', 'op_357_棱镜通用二倍光学', 'op_357_灵眼3_7弹道计算狙击镜', 'op_357_M157火控光学系统', 'op_357_视点3倍', 'op_357_1p_29俄制3倍', 'op_357_LPVO多倍率战斗', 'op_357_3_7可调倍率狙击镜', 'op_357_侦察1_5_5可调', 'op_357_HAMR组合', 'op_357_MEO微型瞄具增高架', 'op_725_多用途战术增高架', 'op_725_微型瞄具增高架', 'op_357_ACOG精准六倍镜', 'op_357_Osight微型', 'op_357_Cobra准直式', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_okp_7反射', 'op_357_XCOG突击3_5倍', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_357_AP5000反射式', 'op_357_全息二型', 'op_357_反射式', 'op_357_俄式准直二倍', 'op_357_全息', 'op_none'],
        muzzle: ['mu_web_titanium', 'mu_tenglong_FFC双流', 'mu_xinhuo', 'mu_tenglong_先进多口径', 'mu_dtk', 'mu_tenglong_M7实用', 'mu_ak_12_AK勇火', 'mu_pbs', 'mu_dead', 'mu_tenglong_沙暴垂直', 'mu_tenglong_堡垒水平', 'mu_poseidon', 'mu_tenglong_轻语战术', 'mu_tenglong_钛金竞赛', 'mu_tenglong_炽火抑制器', 'mu_ak_12_AK实用', 'mu_tenglong_钢制膛口', 'mu_tenglong_实用_2', 'mu_flare_bell', 'mu_tenglong_实用', 'mu_none'],
        barrel: ['br_mk47_MK47鏖战', 'br_mk47_MK47余烬', 'br_none'],
        foregrip: ['fg_resonance3', 'fg_ec_stop', 'fg_tenglong_黎明三角手电握把', 'fg_tenglong_破晓垂直手电握把', 'fg_tenglong_CR棱镜阻手器', 'fg_resonance2', 'fg_bipod_grip', 'fg_k1_elite', 'fg_tenglong_X25U斜侧战斗握把', 'fg_tenglong_共振人体工程握把', 'fg_phantom_vert', 'fg_tenglong_战术垂直握把', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_tenglong_折叠握把', 'fg_vfg_knight', 'fg_tenglong_ZFSG战术握把', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_ar57_模块化AR', 'rg_ar_tower', 'rg_ar57_侵袭', 'rg_ar57_幻影', 'rg_car_15_ARMOE', 'rg_ar57_射手D_2', 'rg_ar57_飓风D_1', 'rg_ar57_M7稳定', 'rg_ar57_416实用', 'rg_none'],
        mag: ['ma_mk47_MK4730发', 'ma_akm_AKM延长匣40发', 'ma_none'],
        stock: ['st_tenglong_锚点导轨后托', 'st_tenglong_QR高性能后托', 'st_tenglong_CT增强型后托', 'st_mk47_MK47主宰者后托', 'st_shadow_core', 'st_bizon_MRGS镂空', 'st_ur_tactical2', 'st_bizon_影袭导轨', 'st_skeleton_sniper', 'st_416_stable', 'st_tenglong_416轻型', 'st_tenglong_精英轻型', 'st_raid_core', 'st_pivot_stable', 'st_lightning_rail', 'st_utility_light', 'st_tenglong_实用战术', 'st_bizon_核心导轨', 'st_none'],
        mag_seat: ['ms_mk47_郊狼中间威力快拔套沙', 'ms_asval_郊狼中间威力快拔套绿', 'ms_akm_郊狼中间威力口径快拔套黑', 'mag_seat_none'],
        side_optic: ['op_tenglong_侧置Osight微型', 'op_tenglong_侧置战斗红点', 'op_tenglong_侧置微型红点', 'op_tenglong_侧置XRO快速反应', 'op_tenglong_侧置全景红点', 'side_optic_none'],
        upper_rail: ['ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'ur_none'],
        left_rail: ['rr_bizon_OLIGHTOdinS战术手电', 'rr_tenglong_OLIGHT_Baldr_Pro_R多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'lr_none'],
        right_rail: ['rr_bizon_OLIGHTOdinS战术手电', 'rr_tenglong_OLIGHT_Baldr_Pro_R多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'rr_none'],
        upper_patch: ['ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'up_none'],
        left_patch: ['ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'lp_none'],
        right_patch: ['ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'rp_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'rear_grip_patch', 'grip_seat']
        slotVisibilityRules: [
        {trigger:'op_spirit_37', action:'show', slots:['lens_shade']},
        {trigger:'op_m157_fire', action:'show', slots:['lens_shade']},
        {trigger:'op_lpvo', action:'show', slots:['lens_shade']},
        {trigger:'op_sniper', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_scout', action:'show', slots:['lens_shade']},
        {trigger:'op_riser', action:'show', slots:['optic']},
        {trigger:'op_725_多用途战术增高架', action:'show', slots:['tactical_device', 'riser_optic']},
        {trigger:'op_riser3', action:'show', slots:['riser_optic']},
        {trigger:'br_mk47_fierce', action:'hide', slots:['upper_patch']},
        {trigger:'rg_ar_tower', action:'show', slots:['rear_grip_patch', 'grip_seat']}
        ]
    },

    'ptr-32': {
        optic: ['op_357_先进白热成像战斗', 'op_357_先进热融合全息', 'op_357_VMX无框', 'op_357_1p33_2_4倍', 'op_357_UHX全息', 'op_357_棱镜通用二倍光学', 'op_357_灵眼3_7弹道计算狙击镜', 'op_357_M157火控光学系统', 'op_357_视点3倍', 'op_357_1p_29俄制3倍', 'op_357_LPVO多倍率战斗', 'op_357_3_7可调倍率狙击镜', 'op_357_侦察1_5_5可调', 'op_357_HAMR组合', 'op_357_MEO微型瞄具增高架', 'op_725_多用途战术增高架', 'op_725_微型瞄具增高架', 'op_357_ACOG精准六倍镜', 'op_357_Osight微型', 'op_357_Cobra准直式', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_okp_7反射', 'op_357_XCOG突击3_5倍', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_357_AP5000反射式', 'op_357_全息二型', 'op_357_反射式', 'op_357_俄式准直二倍', 'op_357_全息', 'op_none'],
        muzzle: ['mu_tenglong_FFC双流', 'mu_xinhuo', 'mu_tenglong_先进多口径', 'mu_tenglong_M7实用', 'mu_dead', 'mu_tenglong_沙暴垂直', 'mu_tenglong_堡垒水平', 'mu_poseidon', 'mu_tenglong_轻语战术', 'mu_tenglong_钛金竞赛', 'mu_tenglong_炽火抑制器', 'mu_tenglong_钢制膛口', 'mu_tenglong_实用_2', 'mu_tenglong_实用', 'mu_none'],
        barrel: ['br_g3_G3平台神射', 'br_g3_G3加强长', 'br_g3_G3飓风短', 'br_g3_G3守卫标准', 'br_none'],
        foregrip: ['fg_resonance3', 'fg_ec_stop', 'fg_tenglong_黎明三角手电握把', 'fg_tenglong_破晓垂直手电握把', 'fg_tenglong_CR棱镜阻手器', 'fg_resonance2', 'fg_bipod_grip', 'fg_k1_elite', 'fg_tenglong_X25U斜侧战斗握把', 'fg_tenglong_共振人体工程握把', 'fg_phantom_vert', 'fg_tenglong_战术垂直握把', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_tenglong_折叠握把', 'fg_vfg_knight', 'fg_tenglong_ZFSG战术握把', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_g3_侍卫稳固', 'rg_g3_G3镂空握把', 'rg_g3_PSG_1', 'rg_none'],
        mag: ['ma_akm_AKM延长匣40发', 'ma_akm_AKM30发聚合物', 'ma_ptr_32_AK762弹匣30发木色', 'ma_none'],
        stock: ['st_tenglong_锚点导轨后托', 'st_tenglong_QR高性能后托', 'st_tenglong_CT增强型后托', 'st_shadow_core', 'st_bizon_MRGS镂空', 'st_ur_tactical2', 'st_bizon_影袭导轨', 'st_skeleton_sniper', 'st_bizon_枢机先进战斗', 'st_416_stable', 'st_tenglong_416轻型', 'st_tenglong_精英轻型', 'st_raid_core', 'st_pivot_stable', 'st_lightning_rail', 'st_g3_MP5伸缩', 'st_g3_G3稳定', 'st_g3_MP5K折叠', 'st_g3_G3伸缩', 'st_g3_MP5尾盖', 'st_utility_light', 'st_tenglong_实用战术', 'st_tenglong_实用稳定', 'st_bizon_核心导轨', 'st_none'],
        mag_seat: ['ms_akm_郊狼中间威力快拔套沙', 'ms_ptr_32_郊狼中间威力快拔套绿', 'ms_akm_郊狼中间威力口径快拔套黑', 'mag_seat_none'],
        side_optic: ['op_tenglong_侧置Osight微型', 'op_tenglong_侧置战斗红点', 'op_tenglong_侧置微型红点', 'op_tenglong_侧置XRO快速反应', 'op_tenglong_侧置全景红点', 'side_optic_none'],
        right_rail: ['ur_tenglong_OLIGHTWARRIOR3S战术手电', 'rr_bizon_OLIGHTOdinS战术手电', 'rr_ar57_OLIGHTBaldr_Pro_R多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'rr_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'upper_rail', 'left_rail', 'rail_bipod', 'left_patch', 'right_patch', 'muzzle']
        slotVisibilityRules: [
        {trigger:'op_spirit_37', action:'show', slots:['lens_shade']},
        {trigger:'op_m157_fire', action:'show', slots:['lens_shade']},
        {trigger:'op_lpvo', action:'show', slots:['lens_shade']},
        {trigger:'op_sniper', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_scout', action:'show', slots:['lens_shade']},
        {trigger:'op_riser', action:'show', slots:['optic']},
        {trigger:'op_725_多用途战术增高架', action:'show', slots:['tactical_device', 'riser_optic']},
        {trigger:'op_riser3', action:'show', slots:['riser_optic']},
        {trigger:'br_g3_marksman', action:'show', slots:['upper_rail', 'left_rail', 'rail_bipod', 'left_patch', 'right_patch', 'muzzle']},
        {trigger:'br_g3_enhanced_l', action:'show', slots:['left_rail', 'left_patch', 'rail_bipod', 'right_patch', 'muzzle']},
        {trigger:'br_g3_hurricane', action:'show', slots:['right_patch', 'left_patch', 'left_rail', 'muzzle']},
        {trigger:'br_g3_guardian', action:'show', slots:['left_rail', 'left_patch', 'rail_bipod', 'right_patch', 'muzzle']}
        ]
    },

    'qbz95-1': {
        muzzle: ['mu_tenglong_FFC双流', 'mu_xinhuo', 'mu_tenglong_先进多口径', 'mu_tenglong_M7实用', 'mu_dead', 'mu_tenglong_沙暴垂直', 'mu_tenglong_堡垒水平', 'mu_poseidon', 'mu_tenglong_轻语战术', 'mu_tenglong_钛金竞赛', 'mu_tenglong_炽火抑制器', 'mu_tenglong_钢制膛口', 'mu_tenglong_实用_2', 'mu_tenglong_实用', 'mu_none'],
        barrel: ['br_qbz95_1_QBZ95_1长弓', 'br_qbz95_1_QBZ95战术', 'br_qbz95_1_QBZ95_1实用短', 'br_none'],
        foregrip: ['fg_ec_stop', 'fg_tenglong_黎明三角手电握把', 'fg_tenglong_破晓垂直手电握把', 'fg_tenglong_CR棱镜阻手器', 'fg_bipod_grip', 'fg_k1_elite', 'fg_tenglong_X25U斜侧战斗握把', 'fg_phantom_vert', 'fg_tenglong_战术垂直握把', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_tenglong_折叠握把', 'fg_vfg_knight', 'fg_tenglong_ZFSG战术握把', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_ar57_侵袭', 'rg_ar57_幻影', 'rg_ar57_AR_MOE', 'rg_ar57_射手D_2', 'rg_ar57_飓风D_1', 'rg_ar57_M7稳定', 'rg_ar57_416实用', 'rg_none'],
        mag: ['ma_qbz95_1_扩容', 'ma_qbz95_1_5_8新式30发', 'ma_tenglong_5_8新式60发', 'ma_none'],
        handguard_kit: ['hg_qbz95_kit', 'hg_none'],
        cheek_pad: ['st_qbz_pad', 'cheek_pad_none'],
        mag_seat: ['ms_aks_74u_蜜獾小口径快拔套沙', 'ms_tenglong_蜜獾小口径快拔套绿', 'ms_tenglong_蜜獾小口径快拔套黑', 'mag_seat_none'],
        defaultHidden: ['optic', 'upper_rail', 'left_rail', 'right_rail', 'side_optic', 'lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device']
        slotVisibilityRules: [
        {trigger:'hg_qbz95_kit', action:'show', slots:['optic', 'upper_rail', 'left_rail', 'right_rail', 'side_optic']},
        {trigger:'br_qbz95_longbow', action:'show', slots:['left_patch', 'right_patch', 'rail_bipod', 'muzzle']},
        {trigger:'br_qbz95_tactical', action:'show', slots:['right_patch', 'left_patch', 'rail_bipod', 'muzzle']},
        {trigger:'ma_qbz_60', action:'hide', slots:['mag_seat']},
        {trigger:'op_spirit_37', action:'show', slots:['lens_shade']},
        {trigger:'op_m157_fire', action:'show', slots:['lens_shade']},
        {trigger:'op_lpvo', action:'show', slots:['lens_shade']},
        {trigger:'op_sniper', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_scout', action:'show', slots:['lens_shade']},
        {trigger:'op_riser', action:'show', slots:['optic']},
        {trigger:'op_725_多用途战术增高架', action:'show', slots:['tactical_device', 'riser_optic']},
        {trigger:'op_riser3', action:'show', slots:['riser_optic']},
        {trigger:'br_qbz95_prac_short', action:'show', slots:['muzzle']}
        ]
    },

    'rm277': {
        optic: ['op_357_先进白热成像战斗', 'op_357_先进热融合全息', 'op_357_VMX无框', 'op_357_1p33_2_4倍', 'op_357_UHX全息', 'op_357_棱镜通用二倍光学', 'op_357_灵眼3_7弹道计算狙击镜', 'op_357_M157火控光学系统', 'op_357_视点3倍', 'op_357_1p_29俄制3倍', 'op_357_LPVO多倍率战斗', 'op_357_3_7可调倍率狙击镜', 'op_357_侦察1_5_5可调', 'op_357_HAMR组合', 'op_357_MEO微型瞄具增高架', 'op_725_多用途战术增高架', 'op_725_微型瞄具增高架', 'op_357_ACOG精准六倍镜', 'op_357_Osight微型', 'op_357_Cobra准直式', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_okp_7反射', 'op_357_XCOG突击3_5倍', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_357_AP5000反射式', 'op_357_全息二型', 'op_357_反射式', 'op_357_俄式准直二倍', 'op_357_全息', 'op_none'],
        muzzle: ['mu_rm277_RM277断流', 'mu_web_titanium', 'mu_xinhuo', 'mu_tenglong_先进多口径', 'mu_tenglong_M7实用', 'mu_dead', 'mu_tenglong_沙暴垂直', 'mu_tenglong_堡垒水平', 'mu_poseidon', 'mu_tenglong_轻语战术', 'mu_tenglong_钛金竞赛', 'mu_tenglong_炽火抑制器', 'mu_tenglong_钢制膛口', 'mu_tenglong_实用_2', 'mu_ar57_鸟笼', 'mu_tenglong_实用', 'mu_none'],
        barrel: ['br_rm277_RM277鲸鲨', 'br_rm277_RM277重型一体', 'br_none'],
        foregrip: ['fg_resonance3', 'fg_ec_stop', 'fg_tenglong_黎明三角手电握把', 'fg_tenglong_破晓垂直手电握把', 'fg_tenglong_CR棱镜阻手器', 'fg_resonance2', 'fg_bipod_grip', 'fg_k1_elite', 'fg_tenglong_X25U斜侧战斗握把', 'fg_tenglong_共振人体工程握把', 'fg_phantom_vert', 'fg_tenglong_战术垂直握把', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_tenglong_折叠握把', 'fg_vfg_knight', 'fg_tenglong_ZFSG战术握把', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_ar57_模块化AR', 'rg_ar_tower', 'rg_ar57_侵袭', 'rg_ar57_幻影', 'rg_car_15_ARMOE', 'rg_ar57_射手D_2', 'rg_ar57_飓风D_1', 'rg_ar57_M7稳定', 'rg_ar57_416实用', 'rg_none'],
        mag: ['ma_rm277_M7_45发6_8', 'ma_none'],
        cheek_pad: ['cp_rm277_RM277托腮板', 'cheek_pad_none'],
        stock_pad: ['sp_rm277_RM277托垫', 'stock_pad_none'],
        mag_seat: ['ms_rm277_灰熊全威力快拔套沙', 'ms_awm_灰熊全威力快拔套绿', 'ms_awm_灰熊全威力口径快拔套黑', 'mag_seat_none'],
        side_optic: ['op_tenglong_侧置Osight微型', 'op_tenglong_侧置战斗红点', 'op_tenglong_侧置微型红点', 'op_tenglong_侧置XRO快速反应', 'op_tenglong_侧置全景红点', 'side_optic_none'],
        rail_bipod: ['rb_util', 'rb_none'],
        left_rail: ['rr_tenglong_OLIGHT_Odin_S战术手电', 'rr_tenglong_OLIGHT_Baldr_Pro_R多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'lr_none'],
        right_rail: ['ur_tenglong_OLIGHTWARRIOR3S战术手电', 'rr_tenglong_OLIGHT_Odin_S战术手电', 'rr_tenglong_OLIGHT_Baldr_Pro_R多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'rr_none'],
        left_patch: ['ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'lp_none'],
        right_patch: ['ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'rp_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'rear_grip_patch', 'grip_seat']
        slotVisibilityRules: [
        {trigger:'op_spirit_37', action:'show', slots:['lens_shade']},
        {trigger:'op_m157_fire', action:'show', slots:['lens_shade']},
        {trigger:'op_lpvo', action:'show', slots:['lens_shade']},
        {trigger:'op_sniper', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_scout', action:'show', slots:['lens_shade']},
        {trigger:'op_riser', action:'show', slots:['optic']},
        {trigger:'op_725_多用途战术增高架', action:'show', slots:['tactical_device', 'riser_optic']},
        {trigger:'op_riser3', action:'show', slots:['riser_optic']},
        {trigger:'br_rm277_whale', action:'show', slots:['upper_rail']},
        {trigger:'br_rm277_heavy', action:'hide', slots:['muzzle', 'rail_bipod']},
        {trigger:'br_rm277_heavy', action:'show', slots:['upper_rail']},
        {trigger:'rg_ar_tower', action:'show', slots:['rear_grip_patch', 'grip_seat']}
        ]
    },

    'scar-h': {
        optic: ['op_357_先进白热成像战斗', 'op_357_先进热融合全息', 'op_357_VMX无框', 'op_357_1p33_2_4倍', 'op_357_UHX全息', 'op_357_棱镜通用二倍光学', 'op_357_灵眼3_7弹道计算狙击镜', 'op_357_M157火控光学系统', 'op_357_视点3倍', 'op_357_1p_29俄制3倍', 'op_357_LPVO多倍率战斗', 'op_357_3_7可调倍率狙击镜', 'op_357_侦察1_5_5可调', 'op_357_HAMR组合', 'op_357_MEO微型瞄具增高架', 'op_725_多用途战术增高架', 'op_725_微型瞄具增高架', 'op_357_ACOG精准六倍镜', 'op_357_Osight微型', 'op_357_Cobra准直式', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_okp_7反射', 'op_357_XCOG突击3_5倍', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_357_AP5000反射式', 'op_357_全息二型', 'op_357_反射式', 'op_357_俄式准直二倍', 'op_357_全息', 'op_none'],
        muzzle: ['mu_web_titanium', 'mu_tenglong_FFC双流', 'mu_xinhuo', 'mu_tenglong_先进多口径', 'mu_tenglong_M7实用', 'mu_dead', 'mu_tenglong_沙暴垂直', 'mu_tenglong_堡垒水平', 'mu_poseidon', 'mu_tenglong_轻语战术', 'mu_tenglong_钛金竞赛', 'mu_tenglong_炽火抑制器', 'mu_tenglong_钢制膛口', 'mu_tenglong_实用_2', 'mu_tenglong_实用', 'mu_none'],
        barrel: ['br_scar_h_SCARH零式短', 'br_scar_h_SCARH实用标准', 'br_scar_h_SCARH海狸长', 'br_none'],
        foregrip: ['fg_resonance3', 'fg_ec_stop', 'fg_tenglong_黎明三角手电握把', 'fg_tenglong_破晓垂直手电握把', 'fg_tenglong_CR棱镜阻手器', 'fg_resonance2', 'fg_bipod_grip', 'fg_k1_elite', 'fg_tenglong_X25U斜侧战斗握把', 'fg_tenglong_共振人体工程握把', 'fg_phantom_vert', 'fg_tenglong_战术垂直握把', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_tenglong_折叠握把', 'fg_vfg_knight', 'fg_tenglong_ZFSG战术握把', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_ar57_模块化AR', 'rg_ar_tower', 'rg_ar57_侵袭', 'rg_ar57_幻影', 'rg_ar57_AR_MOE', 'rg_ar57_射手D_2', 'rg_ar57_飓风D_1', 'rg_ar57_M7稳定', 'rg_ar57_416实用', 'rg_none'],
        mag: ['ma_scar_h_SCARH30发', 'ma_scar_h_SCARH_50发', 'ma_none'],
        stock: ['st_tenglong_锚点导轨后托', 'st_tenglong_QR高性能后托', 'st_tenglong_CT增强型后托', 'st_shadow_core', 'st_bizon_MRGS镂空', 'st_ur_tactical2', 'st_bizon_影袭导轨', 'st_skeleton_sniper', 'st_bizon_枢机先进战斗', 'st_416_stable', 'st_tenglong_416轻型', 'st_tenglong_精英轻型', 'st_raid_core', 'st_pivot_stable', 'st_lightning_rail', 'st_scar_h_SCAR_H枪托尾盖', 'st_utility_light', 'st_tenglong_实用战术', 'st_tenglong_实用稳定', 'st_bizon_核心导轨', 'st_none'],
        mag_seat: ['ms_awm_灰熊全威力快拔套沙', 'ms_awm_灰熊全威力快拔套绿', 'ms_awm_灰熊全威力口径快拔套黑', 'mag_seat_none'],
        side_optic: ['op_tenglong_侧置Osight微型', 'op_tenglong_侧置战斗红点', 'op_tenglong_侧置微型红点', 'op_tenglong_侧置XRO快速反应', 'op_tenglong_侧置全景红点', 'side_optic_none'],
        upper_rail: ['ur_tenglong_OLIGHTWARRIOR3S战术手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'ur_none'],
        left_rail: ['rr_tenglong_OLIGHT_Odin_S战术手电', 'rr_tenglong_OLIGHT_Baldr_Pro_R多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'lr_none'],
        right_rail: ['ur_tenglong_OLIGHTWARRIOR3S战术手电', 'rr_tenglong_OLIGHT_Odin_S战术手电', 'rr_tenglong_OLIGHT_Baldr_Pro_R多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'rr_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'rear_grip_patch', 'grip_seat']
        slotVisibilityRules: [
        {trigger:'op_spirit_37', action:'show', slots:['lens_shade']},
        {trigger:'op_m157_fire', action:'show', slots:['lens_shade']},
        {trigger:'op_lpvo', action:'show', slots:['lens_shade']},
        {trigger:'op_sniper', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_scout', action:'show', slots:['lens_shade']},
        {trigger:'op_riser', action:'show', slots:['optic']},
        {trigger:'op_725_多用途战术增高架', action:'show', slots:['tactical_device', 'riser_optic']},
        {trigger:'op_riser3', action:'show', slots:['riser_optic']},
        {trigger:'br_scar_beaver', action:'show', slots:['upper_patch', 'left_patch', 'rail_bipod', 'right_patch']},
        {trigger:'rg_ar_tower', action:'show', slots:['rear_grip_patch', 'grip_seat']},
        {trigger:'ma_scar_50', action:'hide', slots:['mag_seat']}
        ]
    },

    'sg552': {
        optic: ['op_357_先进白热成像战斗', 'op_357_先进热融合全息', 'op_357_VMX无框', 'op_357_1p33_2_4倍', 'op_357_UHX全息', 'op_357_棱镜通用二倍光学', 'op_357_灵眼3_7弹道计算狙击镜', 'op_357_M157火控光学系统', 'op_357_视点3倍', 'op_357_1p_29俄制3倍', 'op_357_LPVO多倍率战斗', 'op_357_3_7可调倍率狙击镜', 'op_357_侦察1_5_5可调', 'op_357_HAMR组合', 'op_357_MEO微型瞄具增高架', 'op_725_多用途战术增高架', 'op_725_微型瞄具增高架', 'op_357_ACOG精准六倍镜', 'op_357_Osight微型', 'op_357_Cobra准直式', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_okp_7反射', 'op_357_XCOG突击3_5倍', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_357_AP5000反射式', 'op_357_全息二型', 'op_357_反射式', 'op_357_俄式准直二倍', 'op_357_全息', 'op_none'],
        muzzle: ['mu_web_titanium', 'mu_tenglong_FFC双流', 'mu_xinhuo', 'mu_tenglong_先进多口径', 'mu_tenglong_M7实用', 'mu_dead', 'mu_tenglong_沙暴垂直', 'mu_tenglong_堡垒水平', 'mu_poseidon', 'mu_tenglong_轻语战术', 'mu_tenglong_钛金竞赛', 'mu_tenglong_炽火抑制器', 'mu_tenglong_钢制膛口', 'mu_tenglong_实用_2', 'mu_ar57_鸟笼', 'mu_tenglong_实用', 'mu_none'],
        barrel: ['br_sg552_SG552猎犬轻型', 'br_sg552_SG552骑士重', 'br_none'],
        foregrip: ['fg_resonance3', 'fg_ec_stop', 'fg_tenglong_黎明三角手电握把', 'fg_tenglong_破晓垂直手电握把', 'fg_tenglong_CR棱镜阻手器', 'fg_resonance2', 'fg_bipod_grip', 'fg_k1_elite', 'fg_tenglong_X25U斜侧战斗握把', 'fg_tenglong_共振人体工程握把', 'fg_phantom_vert', 'fg_tenglong_战术垂直握把', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_tenglong_折叠握把', 'fg_vfg_knight', 'fg_tenglong_ZFSG战术握把', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_ar57_模块化AR', 'rg_ar_tower', 'rg_ar57_侵袭', 'rg_ar57_幻影', 'rg_car_15_ARMOE', 'rg_ar57_射手D_2', 'rg_ar57_飓风D_1', 'rg_ar57_M7稳定', 'rg_ar57_416实用', 'rg_none'],
        mag: ['ma_sg552_SG55245发扩容', 'ma_sg552_SG552', 'ma_none'],
        stock: ['st_tenglong_锚点导轨后托', 'st_tenglong_QR高性能后托', 'st_tenglong_CT增强型后托', 'st_shadow_core', 'st_bizon_MRGS镂空', 'st_ur_tactical2', 'st_bizon_影袭导轨', 'st_skeleton_sniper', 'st_bizon_枢机先进战斗', 'st_416_stable', 'st_tenglong_416轻型', 'st_tenglong_精英轻型', 'st_raid_core', 'st_pivot_stable', 'st_lightning_rail', 'st_utility_light', 'st_tenglong_实用战术', 'st_tenglong_实用稳定', 'st_sg552_SG552枪托尾盖', 'st_bizon_核心导轨', 'st_none'],
        mag_seat: ['ms_aks_74u_蜜獾小口径快拔套沙', 'ms_tenglong_蜜獾小口径快拔套绿', 'ms_tenglong_蜜獾小口径快拔套黑', 'mag_seat_none'],
        side_optic: ['op_tenglong_侧置Osight微型', 'op_tenglong_侧置战斗红点', 'op_tenglong_侧置微型红点', 'op_tenglong_侧置XRO快速反应', 'op_tenglong_侧置全景红点', 'side_optic_none'],
        right_rail: ['rr_sg552_VARRIOR3S战术手电', 'rr_bizon_OLIGHTOdinS战术手电', 'rr_ak_12_OLIGHTBaldrProR多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'rr_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'rear_grip_patch', 'grip_seat']
        slotVisibilityRules: [
        {trigger:'op_spirit_37', action:'show', slots:['lens_shade']},
        {trigger:'op_m157_fire', action:'show', slots:['lens_shade']},
        {trigger:'op_lpvo', action:'show', slots:['lens_shade']},
        {trigger:'op_sniper', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_scout', action:'show', slots:['lens_shade']},
        {trigger:'op_riser', action:'show', slots:['optic']},
        {trigger:'op_725_多用途战术增高架', action:'show', slots:['tactical_device', 'riser_optic']},
        {trigger:'op_riser3', action:'show', slots:['riser_optic']},
        {trigger:'br_sg552_hound', action:'show', slots:['left_rail', 'upper_rail']},
        {trigger:'br_sg552_knight', action:'show', slots:['upper_rail', 'left_rail', 'rail_bipod', 'upper_patch', 'left_patch', 'right_patch']},
        {trigger:'rg_ar_tower', action:'show', slots:['rear_grip_patch', 'grip_seat']}
        ]
    },

    'tenglong': {
        optic: ['op_357_先进白热成像战斗', 'op_357_先进热融合全息', 'op_357_VMX无框', 'op_357_1p33_2_4倍', 'op_357_UHX全息', 'op_357_棱镜通用二倍光学', 'op_357_灵眼3_7弹道计算狙击镜', 'op_357_M157火控光学系统', 'op_357_视点3倍', 'op_357_1p_29俄制3倍', 'op_357_LPVO多倍率战斗', 'op_357_3_7可调倍率狙击镜', 'op_357_侦察1_5_5可调', 'op_357_HAMR组合', 'op_357_MEO微型瞄具增高架', 'op_725_多用途战术增高架', 'op_725_微型瞄具增高架', 'op_357_ACOG精准六倍镜', 'op_357_Osight微型', 'op_357_Cobra准直式', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_okp_7反射', 'op_357_XCOG突击3_5倍', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_357_AP5000反射式', 'op_357_全息二型', 'op_357_反射式', 'op_357_俄式准直二倍', 'op_357_全息', 'op_none'],
        muzzle: ['mu_web_titanium', 'mu_tenglong_FFC双流', 'mu_xinhuo', 'mu_tenglong_先进多口径', 'mu_tenglong_M7实用', 'mu_dead', 'mu_tenglong_沙暴垂直', 'mu_tenglong_堡垒水平', 'mu_poseidon', 'mu_tenglong_轻语战术', 'mu_tenglong_钛金竞赛', 'mu_tenglong_炽火抑制器', 'mu_tenglong_钢制膛口', 'mu_tenglong_实用_2', 'mu_tenglong_实用', 'mu_none'],
        barrel: ['br_tenglong_新式蛟龙战术长', 'br_tenglong_新式雪豹短', 'br_none'],
        foregrip: ['fg_resonance3', 'fg_ec_stop', 'fg_tenglong_黎明三角手电握把', 'fg_tenglong_破晓垂直手电握把', 'fg_tenglong_CR棱镜阻手器', 'fg_resonance2', 'fg_bipod_grip', 'fg_k1_elite', 'fg_tenglong_X25U斜侧战斗握把', 'fg_tenglong_共振人体工程握把', 'fg_phantom_vert', 'fg_tenglong_战术垂直握把', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_tenglong_折叠握把', 'fg_vfg_knight', 'fg_tenglong_ZFSG战术握把', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_tenglong_兵锋新式握把', 'rg_tenglong_新式侍剑重型握把', 'rg_tenglong_新式尖兵轻型握把', 'rg_none'],
        mag: ['ma_tenglong_5_8新式45发', 'ma_tenglong_5_8新式60发', 'ma_none'],
        stock: ['st_tenglong_锚点导轨后托', 'st_tenglong_QR高性能后托', 'st_tenglong_CT增强型后托', 'st_shadow_core', 'st_ur_tactical2', 'st_skeleton_sniper', 'st_416_stable', 'st_tenglong_416轻型', 'st_tenglong_精英轻型', 'st_raid_core', 'st_pivot_stable', 'st_tenglong_M4缓冲托芯', 'st_utility_light', 'st_tenglong_实用战术', 'st_tenglong_实用稳定', 'st_none'],
        mag_seat: ['ms_tenglong_蜜獾小口径快拔套沙', 'ms_tenglong_蜜獾小口径快拔套绿', 'ms_tenglong_蜜獾小口径快拔套黑', 'mag_seat_none'],
        gas_block: ['gb_tenglong_新式腾龙稳固', 'gb_tenglong_新式腾龙高速', 'gas_block_none'],
        side_optic: ['op_tenglong_侧置Osight微型', 'op_tenglong_侧置战斗红点', 'op_tenglong_侧置微型红点', 'op_tenglong_侧置XRO快速反应', 'op_tenglong_侧置全景红点', 'side_optic_none'],
        upper_rail: ['ur_tenglong_OLIGHTWARRIOR3S战术手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'ur_none'],
        left_rail: ['rr_tenglong_OLIGHT_Odin_S战术手电', 'rr_tenglong_OLIGHT_Baldr_Pro_R多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'lr_none'],
        right_rail: ['ur_tenglong_OLIGHTWARRIOR3S战术手电', 'rr_tenglong_OLIGHT_Odin_S战术手电', 'rr_tenglong_OLIGHT_Baldr_Pro_R多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'rr_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device']
        slotVisibilityRules: [
        {trigger:'op_spirit_37', action:'show', slots:['lens_shade']},
        {trigger:'op_m157_fire', action:'show', slots:['lens_shade']},
        {trigger:'op_lpvo', action:'show', slots:['lens_shade']},
        {trigger:'op_sniper', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_scout', action:'show', slots:['lens_shade']},
        {trigger:'op_riser', action:'show', slots:['optic']},
        {trigger:'op_725_多用途战术增高架', action:'show', slots:['tactical_device', 'riser_optic']},
        {trigger:'op_riser3', action:'show', slots:['riser_optic']},
        {trigger:'br_tenglong_jiaolong', action:'show', slots:['upper_patch', 'left_patch', 'rail_bipod', 'right_patch']},
        {trigger:'ma_qbz_60', action:'hide', slots:['mag_seat']}
        ]
    },

    // ==================== 冲锋枪 ====================

    'bizon': {
        optic: ['op_357_先进白热成像战斗', 'op_357_先进热融合全息', 'op_357_VMX无框', 'op_357_1p33_2_4倍', 'op_357_UHX全息', 'op_357_棱镜通用二倍光学', 'op_357_灵眼3_7弹道计算狙击镜', 'op_357_M157火控光学系统', 'op_357_视点3倍', 'op_357_1p_29俄制3倍', 'op_357_LPVO多倍率战斗', 'op_357_3_7可调倍率狙击镜', 'op_357_侦察1_5_5可调', 'op_357_HAMR组合', 'op_357_MEO微型瞄具增高架', 'op_725_多用途战术增高架', 'op_725_微型瞄具增高架', 'op_357_ACOG精准六倍镜', 'op_357_Osight微型', 'op_357_Cobra准直式', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_okp_7反射', 'op_357_XCOG突击3_5倍', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_357_AP5000反射式', 'op_357_全息二型', 'op_357_反射式', 'op_357_俄式准直二倍', 'op_357_全息', 'op_none'],
        muzzle: ['mu_tenglong_FFC双流', 'mu_xinhuo', 'mu_tenglong_先进多口径', 'mu_tenglong_M7实用', 'mu_bizon_俄系冲锋枪精密', 'mu_357_冲锋枪回声', 'mu_dead', 'mu_tenglong_沙暴垂直', 'mu_tenglong_堡垒水平', 'mu_poseidon', 'mu_tenglong_轻语战术', 'mu_tenglong_钛金竞赛', 'mu_tenglong_炽火抑制器', 'mu_tenglong_钢制膛口', 'mu_tenglong_实用_2', 'mu_tenglong_实用', 'mu_none'],
        barrel: ['br_bizon_野牛刀锋超长', 'br_bizon_野牛打击者标准', 'br_bizon_野牛伞兵短', 'br_none'],
        rear_grip: ['rg_bizon_天蝎座', 'rg_bizon_RK3', 'rg_bizon_AK镂空握把', 'rg_ak_tower', 'rg_bizon_稳定AK', 'rg_bizon_射手AK', 'rg_none'],
        mag: ['ma_bizon_野牛_64发弹筒', 'ma_none'],
        stock: ['st_tenglong_QR高性能后托', 'st_tenglong_CT增强型后托', 'st_shadow_core', 'st_bizon_MRGS镂空', 'st_bizon_PT3死士', 'st_bizon_PT1特种', 'st_ur_tactical2', 'st_bizon_影袭导轨', 'st_skeleton_sniper', 'st_bizon_AK19', 'st_bizon_枢机先进战斗', 'st_416_stable', 'st_tenglong_416轻型', 'st_tenglong_精英轻型', 'st_raid_core', 'st_pivot_stable', 'st_lightning_rail', 'st_bizon_AK枪托尾盖', 'st_bizon_AK骨架', 'st_bizon_AK聚合物', 'st_utility_light', 'st_tenglong_实用战术', 'st_tenglong_实用稳定', 'st_bizon_核心导轨', 'st_none'],
        handguard: ['hg_bizon_野牛碳纤维', 'hg_none'],
        stock_pad: ['sp_bizon_AK枪托缓冲垫', 'stock_pad_none'],
        bolt: ['bolt_bizon_泽宁特拉机柄帽', 'bolt_none'],
        side_optic: ['op_tenglong_侧置Osight微型', 'op_tenglong_侧置战斗红点', 'op_tenglong_侧置微型红点', 'op_tenglong_侧置XRO快速反应', 'op_tenglong_侧置全景红点', 'side_optic_none'],
        left_rail: ['rr_bizon_OLIGHTOdinS战术手电', 'rr_tenglong_OLIGHT_Baldr_Pro_R多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'lr_none'],
        right_rail: ['ur_tenglong_OLIGHTWARRIOR3S战术手电', 'rr_bizon_OLIGHTOdinS战术手电', 'rr_tenglong_OLIGHT_Baldr_Pro_R多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'rr_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'grip_seat']
        slotVisibilityRules: [
        {trigger:'op_spirit_37', action:'show', slots:['lens_shade']},
        {trigger:'op_m157_fire', action:'show', slots:['lens_shade']},
        {trigger:'op_lpvo', action:'show', slots:['lens_shade']},
        {trigger:'op_sniper', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_scout', action:'show', slots:['lens_shade']},
        {trigger:'op_riser', action:'show', slots:['optic']},
        {trigger:'op_725_多用途战术增高架', action:'show', slots:['tactical_device', 'riser_optic']},
        {trigger:'op_riser3', action:'show', slots:['riser_optic']},
        {trigger:'st_tenglong_QR高性能后托', action:'hide', slots:['stock_pad']},
        {trigger:'st_tenglong_CT增强型后托', action:'hide', slots:['stock_pad']},
        {trigger:'st_shadow_core', action:'hide', slots:['stock_pad']},
        {trigger:'st_bizon_MRGS镂空', action:'hide', slots:['stock_pad']},
        {trigger:'st_bizon_PT3死士', action:'hide', slots:['stock_pad']},
        {trigger:'st_bizon_PT1特种', action:'hide', slots:['stock_pad']},
        {trigger:'st_ur_tactical2', action:'hide', slots:['stock_pad']},
        {trigger:'st_bizon_影袭导轨', action:'hide', slots:['stock_pad']},
        {trigger:'st_skeleton_sniper', action:'hide', slots:['stock_pad']},
        {trigger:'st_ak19', action:'hide', slots:['stock_pad']},
        {trigger:'st_bizon_枢机先进战斗', action:'hide', slots:['stock_pad']},
        {trigger:'st_416_stable', action:'hide', slots:['stock_pad']},
        {trigger:'st_tenglong_416轻型', action:'hide', slots:['stock_pad']},
        {trigger:'st_tenglong_精英轻型', action:'hide', slots:['stock_pad']},
        {trigger:'st_raid_core', action:'hide', slots:['stock_pad']},
        {trigger:'st_pivot_stable', action:'hide', slots:['stock_pad']},
        {trigger:'st_lightning_rail', action:'hide', slots:['stock_pad']},
        {trigger:'st_bizon_AK枪托尾盖', action:'hide', slots:['stock_pad']},
        {trigger:'st_bizon_AK骨架', action:'hide', slots:['stock_pad']},
        {trigger:'st_utility_light', action:'hide', slots:['stock_pad']},
        {trigger:'st_tenglong_实用战术', action:'hide', slots:['stock_pad']},
        {trigger:'st_tenglong_实用稳定', action:'hide', slots:['stock_pad']},
        {trigger:'st_bizon_核心导轨', action:'hide', slots:['stock_pad']},
        {trigger:'rg_ak_tower', action:'show', slots:['grip_seat']}
        ]
    },

    'mk4': {
        optic: ['op_357_先进白热成像战斗', 'op_357_先进热融合全息', 'op_357_VMX无框', 'op_357_1p33_2_4倍', 'op_357_UHX全息', 'op_357_棱镜通用二倍光学', 'op_357_灵眼3_7弹道计算狙击镜', 'op_357_M157火控光学系统', 'op_357_视点3倍', 'op_357_1p_29俄制3倍', 'op_357_LPVO多倍率战斗', 'op_357_3_7可调倍率狙击镜', 'op_357_侦察1_5_5可调', 'op_357_HAMR组合', 'op_357_MEO微型瞄具增高架', 'op_725_多用途战术增高架', 'op_725_微型瞄具增高架', 'op_357_ACOG精准六倍镜', 'op_357_Osight微型', 'op_357_Cobra准直式', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_okp_7反射', 'op_357_XCOG突击3_5倍', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_357_AP5000反射式', 'op_357_全息二型', 'op_357_反射式', 'op_357_俄式准直二倍', 'op_357_全息', 'op_none'],
        muzzle: ['mu_web_titanium', 'mu_tenglong_FFC双流', 'mu_xinhuo', 'mu_tenglong_先进多口径', 'mu_tenglong_M7实用', 'mu_357_冲锋枪回声', 'mu_dead', 'mu_tenglong_沙暴垂直', 'mu_tenglong_堡垒水平', 'mu_poseidon', 'mu_tenglong_轻语战术', 'mu_tenglong_钛金竞赛', 'mu_tenglong_炽火抑制器', 'mu_tenglong_钢制膛口', 'mu_tenglong_实用_2', 'mu_ar57_鸟笼', 'mu_tenglong_实用', 'mu_none'],
        barrel: ['br_mk4_MK4深空镀铬', 'br_mk4_MK4击剑手', 'br_none'],
        foregrip: ['fg_resonance3', 'fg_ec_stop', 'fg_tenglong_破晓垂直手电握把', 'fg_tenglong_CR棱镜阻手器', 'fg_bipod_grip', 'fg_k1_elite', 'fg_tenglong_X25U斜侧战斗握把', 'fg_phantom_vert', 'fg_tenglong_战术垂直握把', 'fg_rk0', 'fg_angle_stop', 'fg_phase_battle', 'fg_tenglong_折叠握把', 'fg_vfg_knight', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_ar57_模块化AR', 'rg_ar_tower', 'rg_ar57_侵袭', 'rg_ar57_幻影', 'rg_car_15_ARMOE', 'rg_ar57_射手D_2', 'rg_ar57_飓风D_1', 'rg_ar57_M7稳定', 'rg_ar57_416实用', 'rg_none'],
        mag: ['ma_mk4_MK4_48发', 'ma_none'],
        stock: ['st_tenglong_锚点导轨后托', 'st_tenglong_QR高性能后托', 'st_tenglong_CT增强型后托', 'st_shadow_core', 'st_ur_tactical2', 'st_skeleton_sniper', 'st_416_stable', 'st_tenglong_416轻型', 'st_tenglong_精英轻型', 'st_raid_core', 'st_pivot_stable', 'st_tenglong_M4缓冲托芯', 'st_m4a1_M16A4稳定', 'st_utility_light', 'st_tenglong_实用战术', 'st_none'],
        mag_seat: ['ms_warrior_野蜂冲锋枪快拔套沙', 'ms_mk4_野蜂冲锋枪快拔套绿', 'ms_warrior_野蜂冲锋枪快拔套黑', 'mag_seat_none'],
        side_optic: ['op_tenglong_侧置Osight微型', 'op_tenglong_侧置战斗红点', 'op_tenglong_侧置微型红点', 'op_tenglong_侧置XRO快速反应', 'op_tenglong_侧置全景红点', 'side_optic_none'],
        upper_rail: ['ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'ur_none'],
        left_rail: ['rr_bizon_OLIGHTOdinS战术手电', 'rr_tenglong_OLIGHT_Baldr_Pro_R多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'lr_none'],
        right_rail: ['rr_bizon_OLIGHTOdinS战术手电', 'rr_tenglong_OLIGHT_Baldr_Pro_R多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'rr_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'rear_grip_patch', 'grip_seat']
        slotVisibilityRules: [
        {trigger:'op_spirit_37', action:'show', slots:['lens_shade']},
        {trigger:'op_m157_fire', action:'show', slots:['lens_shade']},
        {trigger:'op_lpvo', action:'show', slots:['lens_shade']},
        {trigger:'op_sniper', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_scout', action:'show', slots:['lens_shade']},
        {trigger:'op_riser', action:'show', slots:['optic']},
        {trigger:'op_725_多用途战术增高架', action:'show', slots:['tactical_device', 'riser_optic']},
        {trigger:'op_riser3', action:'show', slots:['riser_optic']},
        {trigger:'br_mk4_MK4深空镀铬', action:'show', slots:['left_patch', 'right_patch', 'foregrip']},
        {trigger:'br_mk4_MK4击剑手', action:'show', slots:['right_patch', 'upper_patch', 'left_patch', 'foregrip']},
        {trigger:'st_m16a4_stable', action:'show', slots:['cheek_pad']},
        {trigger:'rg_ar_tower', action:'show', slots:['rear_grip_patch', 'grip_seat']}
        ]
    },

    'mp5': {
        optic: ['op_357_先进白热成像战斗', 'op_357_先进热融合全息', 'op_357_VMX无框', 'op_357_1p33_2_4倍', 'op_357_UHX全息', 'op_357_棱镜通用二倍光学', 'op_357_灵眼3_7弹道计算狙击镜', 'op_357_M157火控光学系统', 'op_357_视点3倍', 'op_357_1p_29俄制3倍', 'op_357_LPVO多倍率战斗', 'op_357_3_7可调倍率狙击镜', 'op_357_侦察1_5_5可调', 'op_357_HAMR组合', 'op_357_MEO微型瞄具增高架', 'op_725_多用途战术增高架', 'op_725_微型瞄具增高架', 'op_357_ACOG精准六倍镜', 'op_357_Osight微型', 'op_357_Cobra准直式', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_okp_7反射', 'op_357_XCOG突击3_5倍', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_357_AP5000反射式', 'op_357_全息二型', 'op_357_反射式', 'op_357_俄式准直二倍', 'op_357_全息', 'op_none'],
        muzzle: ['mu_tenglong_FFC双流', 'mu_xinhuo', 'mu_tenglong_先进多口径', 'mu_tenglong_M7实用', 'mu_357_冲锋枪回声', 'mu_dead', 'mu_tenglong_沙暴垂直', 'mu_tenglong_堡垒水平', 'mu_poseidon', 'mu_tenglong_轻语战术', 'mu_tenglong_钛金竞赛', 'mu_tenglong_炽火抑制器', 'mu_tenglong_钢制膛口', 'mu_tenglong_实用_2', 'mu_tenglong_实用', 'mu_none'],
        barrel: ['br_mp5_MP5SD特勤一体消音', 'br_mp5_MP5斥候长', 'br_mp5_MP5隐蔽短', 'br_mp5_MP5战术', 'br_mp5_MP5性能', 'br_none'],
        foregrip: ['fg_ec_stop', 'fg_tenglong_CR棱镜阻手器', 'fg_bipod_grip', 'fg_tenglong_X25U斜侧战斗握把', 'fg_phantom_vert', 'fg_tenglong_战术垂直握把', 'fg_rk0', 'fg_angle_stop', 'fg_phase_battle', 'fg_tenglong_折叠握把', 'fg_vfg_knight', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        mag: ['ma_mp5_MP5_50发', 'ma_none'],
        stock: ['st_tenglong_锚点导轨后托', 'st_tenglong_QR高性能后托', 'st_tenglong_CT增强型后托', 'st_shadow_core', 'st_bizon_MRGS镂空', 'st_ur_tactical2', 'st_bizon_影袭导轨', 'st_skeleton_sniper', 'st_bizon_枢机先进战斗', 'st_416_stable', 'st_tenglong_416轻型', 'st_tenglong_精英轻型', 'st_raid_core', 'st_pivot_stable', 'st_lightning_rail', 'st_g3_MP5伸缩', 'st_g3_G3稳定', 'st_g3_MP5K折叠', 'st_g3_G3伸缩', 'st_g3_MP5尾盖', 'st_utility_light', 'st_tenglong_实用战术', 'st_tenglong_实用稳定', 'st_bizon_核心导轨', 'st_none'],
        mag_seat: ['ms_warrior_野蜂冲锋枪快拔套沙', 'ms_warrior_野蜂冲锋枪快拔套绿', 'ms_warrior_野蜂冲锋枪快拔套黑', 'mag_seat_none'],
        side_optic: ['op_tenglong_侧置Osight微型', 'op_tenglong_侧置战斗红点', 'op_tenglong_侧置微型红点', 'op_tenglong_侧置XRO快速反应', 'op_tenglong_侧置全景红点', 'side_optic_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'left_rail', 'right_rail', 'foregrip', 'muzzle', 'upper_rail']
        slotVisibilityRules: [
        {trigger:'op_spirit_37', action:'show', slots:['lens_shade']},
        {trigger:'op_m157_fire', action:'show', slots:['lens_shade']},
        {trigger:'op_lpvo', action:'show', slots:['lens_shade']},
        {trigger:'op_sniper', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_scout', action:'show', slots:['lens_shade']},
        {trigger:'op_riser', action:'show', slots:['optic']},
        {trigger:'op_725_多用途战术增高架', action:'show', slots:['tactical_device', 'riser_optic']},
        {trigger:'op_riser3', action:'show', slots:['riser_optic']},
        {trigger:'br_mp5_sd', action:'hide', slots:['muzzle']},
        {trigger:'br_mp5_sd', action:'show', slots:['right_rail']},
        {trigger:'br_mp5_MP5斥候长', action:'show', slots:['left_rail', 'right_rail', 'foregrip', 'muzzle']},
        {trigger:'br_mp5_MP5隐蔽短', action:'hide', slots:['muzzle']},
        {trigger:'br_mp5_MP5隐蔽短', action:'show', slots:['upper_rail', 'left_rail', 'right_rail', 'foregrip']},
        {trigger:'br_mp5_MP5战术', action:'show', slots:['left_rail', 'right_rail', 'foregrip', 'muzzle']},
        {trigger:'br_mp5_MP5性能', action:'hide', slots:['foregrip']},
        {trigger:'br_mp5_MP5性能', action:'show', slots:['right_rail', 'left_rail', 'muzzle']},
        {trigger:'ma_mp5_MP5_50发', action:'hide', slots:['mag_seat']}
        ]
    },

    'mp7': {
        optic: ['op_357_先进白热成像战斗', 'op_357_先进热融合全息', 'op_357_VMX无框', 'op_357_1p33_2_4倍', 'op_357_UHX全息', 'op_357_棱镜通用二倍光学', 'op_357_灵眼3_7弹道计算狙击镜', 'op_357_M157火控光学系统', 'op_357_视点3倍', 'op_357_1p_29俄制3倍', 'op_357_LPVO多倍率战斗', 'op_357_3_7可调倍率狙击镜', 'op_357_侦察1_5_5可调', 'op_357_HAMR组合', 'op_357_MEO微型瞄具增高架', 'op_725_多用途战术增高架', 'op_725_微型瞄具增高架', 'op_357_ACOG精准六倍镜', 'op_357_Osight微型', 'op_357_Cobra准直式', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_okp_7反射', 'op_357_XCOG突击3_5倍', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_357_AP5000反射式', 'op_357_全息二型', 'op_357_反射式', 'op_357_俄式准直二倍', 'op_357_全息', 'op_none'],
        muzzle: ['mu_web_titanium', 'mu_tenglong_FFC双流', 'mu_xinhuo', 'mu_tenglong_先进多口径', 'mu_tenglong_M7实用', 'mu_357_冲锋枪回声', 'mu_dead', 'mu_tenglong_沙暴垂直', 'mu_tenglong_堡垒水平', 'mu_poseidon', 'mu_tenglong_轻语战术', 'mu_tenglong_钛金竞赛', 'mu_tenglong_炽火抑制器', 'mu_tenglong_钢制膛口', 'mu_tenglong_实用_2', 'mu_tenglong_实用', 'mu_none'],
        barrel: ['br_mp7_HVK格斗套件', 'br_mp7_MP7月影镀铬', 'br_mp7_MP7狼牙轻', 'br_mp7_MP7蜂刺长', 'br_mp7_MP7增强', 'br_none'],
        foregrip: ['fg_ec_stop', 'fg_tenglong_黎明三角手电握把', 'fg_tenglong_破晓垂直手电握把', 'fg_tenglong_CR棱镜阻手器', 'fg_bipod_grip', 'fg_k1_elite', 'fg_tenglong_X25U斜侧战斗握把', 'fg_phantom_vert', 'fg_tenglong_战术垂直握把', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_tenglong_折叠握把', 'fg_vfg_knight', 'fg_tenglong_ZFSG战术握把', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_mp7_MP7稳固', 'rg_mp7_MP7平衡', 'rg_none'],
        mag: ['ma_mp7_MP7_60发', 'ma_mp7_MP7_40发', 'ma_mp7_MP7_30发', 'ma_none'],
        stock: ['st_tenglong_锚点导轨后托', 'st_tenglong_QR高性能后托', 'st_tenglong_CT增强型后托', 'st_shadow_core', 'st_bizon_MRGS镂空', 'st_ur_tactical2', 'st_bizon_影袭导轨', 'st_mp7_MP7枪托尾盖', 'st_skeleton_sniper', 'st_416_stable', 'st_tenglong_416轻型', 'st_tenglong_精英轻型', 'st_raid_core', 'st_pivot_stable', 'st_lightning_rail', 'st_utility_light', 'st_tenglong_实用战术', 'st_tenglong_实用稳定', 'st_bizon_核心导轨', 'st_none'],
        side_optic: ['op_tenglong_侧置Osight微型', 'op_tenglong_侧置战斗红点', 'op_tenglong_侧置微型红点', 'op_tenglong_侧置XRO快速反应', 'op_tenglong_侧置全景红点', 'side_optic_none'],
        left_rail: ['rr_tenglong_OLIGHT_Odin_S战术手电', 'rr_tenglong_OLIGHT_Baldr_Pro_R多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'lr_none'],
        right_rail: ['ur_tenglong_OLIGHTWARRIOR3S战术手电', 'rr_tenglong_OLIGHT_Odin_S战术手电', 'rr_tenglong_OLIGHT_Baldr_Pro_R多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'rr_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device']
        slotVisibilityRules: [
        {trigger:'op_spirit_37', action:'show', slots:['lens_shade']},
        {trigger:'op_m157_fire', action:'show', slots:['lens_shade']},
        {trigger:'op_lpvo', action:'show', slots:['lens_shade']},
        {trigger:'op_sniper', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_scout', action:'show', slots:['lens_shade']},
        {trigger:'op_riser', action:'show', slots:['optic']},
        {trigger:'op_725_多用途战术增高架', action:'show', slots:['tactical_device', 'riser_optic']},
        {trigger:'op_riser3', action:'show', slots:['riser_optic']},
        {trigger:'fn_hvk_combat', action:'show', slots:['upper_rail', 'optic', 'muzzle']},
        {trigger:'br_mp7_stinger_l', action:'show', slots:['left_patch', 'right_patch', 'rail_bipod']},
        {trigger:'br_mp7_enhanced', action:'show', slots:['right_patch', 'left_patch', 'rail_bipod']},
        {trigger:'op_spirit_612', action:'show', slots:['lens_shade']},
        {trigger:'op_lever_6_12神射手变倍狙击镜', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_lever_光学狙击8倍', action:'show', slots:['lens_shade']},
        {trigger:'fn_hvk_combat', action:'hide', slots:['foregrip', 'rear_grip', 'mag', 'side_optic']}
        ]
    },

    'p90': {
        optic: ['op_357_先进白热成像战斗', 'op_357_先进热融合全息', 'op_357_VMX无框', 'op_357_1p33_2_4倍', 'op_357_UHX全息', 'op_357_棱镜通用二倍光学', 'op_357_灵眼3_7弹道计算狙击镜', 'op_357_M157火控光学系统', 'op_357_视点3倍', 'op_357_1p_29俄制3倍', 'op_357_LPVO多倍率战斗', 'op_357_3_7可调倍率狙击镜', 'op_357_侦察1_5_5可调', 'op_357_HAMR组合', 'op_357_MEO微型瞄具增高架', 'op_725_多用途战术增高架', 'op_725_微型瞄具增高架', 'op_357_ACOG精准六倍镜', 'op_357_Osight微型', 'op_357_Cobra准直式', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_okp_7反射', 'op_357_XCOG突击3_5倍', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_357_AP5000反射式', 'op_357_全息二型', 'op_357_反射式', 'op_357_俄式准直二倍', 'op_357_全息', 'op_none'],
        muzzle: ['mu_tenglong_FFC双流', 'mu_xinhuo', 'mu_tenglong_先进多口径', 'mu_tenglong_M7实用', 'mu_357_冲锋枪回声', 'mu_dead', 'mu_tenglong_沙暴垂直', 'mu_tenglong_堡垒水平', 'mu_poseidon', 'mu_tenglong_轻语战术', 'mu_tenglong_钛金竞赛', 'mu_tenglong_炽火抑制器', 'mu_tenglong_钢制膛口', 'mu_tenglong_实用_2', 'mu_tenglong_实用', 'mu_none'],
        barrel: ['br_p90_P90长弓精钢', 'br_p90_P90猎豹重', 'br_p90_P90重攻长', 'br_none'],
        foregrip: ['fg_ec_stop', 'fg_tenglong_CR棱镜阻手器', 'fg_bipod_grip', 'fg_tenglong_X25U斜侧战斗握把', 'fg_phantom_vert', 'fg_tenglong_战术垂直握把', 'fg_rk0', 'fg_angle_stop', 'fg_phase_battle', 'fg_tenglong_折叠握把', 'fg_vfg_knight', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        stock: ['st_p90_P90枪托垫', 'st_none'],
        cheek_pad: ['st_universal_pad', 'cheek_pad_none'],
        side_optic: ['op_tenglong_侧置Osight微型', 'op_tenglong_侧置战斗红点', 'op_tenglong_侧置微型红点', 'op_tenglong_侧置XRO快速反应', 'op_tenglong_侧置全景红点', 'side_optic_none'],
        right_rail: ['ur_tenglong_OLIGHTWARRIOR3S战术手电', 'rr_tenglong_OLIGHT_Odin_S战术手电', 'rr_p90_OLIGHT_Baldr_Pro_R功能', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'rr_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device']
        slotVisibilityRules: [
        {trigger:'op_spirit_37', action:'show', slots:['lens_shade']},
        {trigger:'op_m157_fire', action:'show', slots:['lens_shade']},
        {trigger:'op_lpvo', action:'show', slots:['lens_shade']},
        {trigger:'op_sniper', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_scout', action:'show', slots:['lens_shade']},
        {trigger:'op_riser', action:'show', slots:['optic']},
        {trigger:'op_725_多用途战术增高架', action:'show', slots:['tactical_device', 'riser_optic']},
        {trigger:'op_riser3', action:'show', slots:['riser_optic']},
        {trigger:'br_p90_longbow', action:'hide', slots:['side_optic', 'foregrip']},
        {trigger:'br_p90_longbow', action:'show', slots:['left_rail', 'upper_rail', 'muzzle']},
        {trigger:'br_p90_heavy_l', action:'show', slots:['left_rail', 'muzzle', 'foregrip']},
        {trigger:'br_p90_cheetah', action:'show', slots:['muzzle']}
        ]
    },

    'qcq171': {
        optic: ['op_357_先进白热成像战斗', 'op_357_先进热融合全息', 'op_357_VMX无框', 'op_357_1p33_2_4倍', 'op_357_UHX全息', 'op_357_棱镜通用二倍光学', 'op_357_灵眼3_7弹道计算狙击镜', 'op_357_M157火控光学系统', 'op_357_视点3倍', 'op_357_1p_29俄制3倍', 'op_357_LPVO多倍率战斗', 'op_357_3_7可调倍率狙击镜', 'op_357_侦察1_5_5可调', 'op_357_HAMR组合', 'op_357_MEO微型瞄具增高架', 'op_725_多用途战术增高架', 'op_725_微型瞄具增高架', 'op_357_ACOG精准六倍镜', 'op_357_Osight微型', 'op_357_Cobra准直式', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_okp_7反射', 'op_357_XCOG突击3_5倍', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_357_AP5000反射式', 'op_357_全息二型', 'op_357_反射式', 'op_357_俄式准直二倍', 'op_357_全息', 'op_none'],
        muzzle: ['mu_web_titanium', 'mu_tenglong_FFC双流', 'mu_xinhuo', 'mu_tenglong_先进多口径', 'mu_tenglong_M7实用', 'mu_357_冲锋枪回声', 'mu_dead', 'mu_tenglong_沙暴垂直', 'mu_tenglong_堡垒水平', 'mu_poseidon', 'mu_tenglong_轻语战术', 'mu_tenglong_钛金竞赛', 'mu_tenglong_炽火抑制器', 'mu_tenglong_钢制膛口', 'mu_tenglong_实用_2', 'mu_tenglong_实用', 'mu_none'],
        barrel: ['br_qcq171_QCQ171新式渗透一体消音', 'br_qcq171_QCQ171新式红缨战术长', 'br_qcq171_QCQ171新式狡兔短', 'br_none'],
        foregrip: ['fg_ec_stop', 'fg_tenglong_黎明三角手电握把', 'fg_tenglong_破晓垂直手电握把', 'fg_tenglong_CR棱镜阻手器', 'fg_bipod_grip', 'fg_k1_elite', 'fg_tenglong_X25U斜侧战斗握把', 'fg_phantom_vert', 'fg_tenglong_战术垂直握把', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_tenglong_折叠握把', 'fg_vfg_knight', 'fg_tenglong_ZFSG战术握把', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_tenglong_兵锋新式握把', 'rg_tenglong_新式侍剑重型握把', 'rg_tenglong_新式尖兵轻型握把', 'rg_none'],
        mag: ['ma_qcq171_新式75发扩容', 'ma_qcq171_新式45发扩容', 'ma_none'],
        stock: ['st_tenglong_锚点导轨后托', 'st_tenglong_QR高性能后托', 'st_tenglong_CT增强型后托', 'st_shadow_core', 'st_bizon_MRGS镂空', 'st_ur_tactical2', 'st_bizon_影袭导轨', 'st_skeleton_sniper', 'st_416_stable', 'st_tenglong_416轻型', 'st_tenglong_精英轻型', 'st_raid_core', 'st_pivot_stable', 'st_lightning_rail', 'st_utility_light', 'st_tenglong_实用战术', 'st_tenglong_实用稳定', 'st_bizon_核心导轨', 'st_none'],
        mag_seat: ['ms_qcq171_野蜂冲锋枪快拔套沙', 'ms_mk4_野蜂冲锋枪快拔套绿', 'ms_warrior_野蜂冲锋枪快拔套黑', 'mag_seat_none'],
        bolt_carrier: ['bc_qcq171_QCQ171新式稳固', 'bc_qcq171_QCQ171新式高射速化', 'bolt_carrier_none'],
        side_optic: ['op_tenglong_侧置Osight微型', 'op_tenglong_侧置战斗红点', 'op_tenglong_侧置微型红点', 'op_tenglong_侧置XRO快速反应', 'op_tenglong_侧置全景红点', 'side_optic_none'],
        upper_rail: ['ur_tenglong_OLIGHTWARRIOR3S战术手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'ur_none'],
        left_rail: ['rr_tenglong_OLIGHT_Odin_S战术手电', 'rr_tenglong_OLIGHT_Baldr_Pro_R多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'lr_none'],
        right_rail: ['ur_tenglong_OLIGHTWARRIOR3S战术手电', 'rr_tenglong_OLIGHT_Odin_S战术手电', 'rr_tenglong_OLIGHT_Baldr_Pro_R多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'rr_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device']
        slotVisibilityRules: [
        {trigger:'op_spirit_37', action:'show', slots:['lens_shade']},
        {trigger:'op_m157_fire', action:'show', slots:['lens_shade']},
        {trigger:'op_lpvo', action:'show', slots:['lens_shade']},
        {trigger:'op_sniper', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_scout', action:'show', slots:['lens_shade']},
        {trigger:'op_riser', action:'show', slots:['optic']},
        {trigger:'op_725_多用途战术增高架', action:'show', slots:['tactical_device', 'riser_optic']},
        {trigger:'op_riser3', action:'show', slots:['riser_optic']},
        {trigger:'br_qcq171_infil', action:'show', slots:['left_patch', 'upper_patch', 'rail_bipod', 'right_patch', 'foregrip']},
        {trigger:'br_qcq171_red_l', action:'show', slots:['left_patch', 'upper_patch', 'rail_bipod', 'right_patch', 'foregrip']},
        {trigger:'br_qcq171_rabbit', action:'hide', slots:['upper_rail', 'foregrip']},
        {trigger:'ma_qcq171_75', action:'hide', slots:['mag_seat']},
        {trigger:'br_qcq171_infil', action:'hide', slots:['muzzle']}
        ]
    },

    'smg-45': {
        optic: ['op_357_先进白热成像战斗', 'op_357_先进热融合全息', 'op_357_VMX无框', 'op_357_1p33_2_4倍', 'op_357_UHX全息', 'op_357_棱镜通用二倍光学', 'op_357_灵眼3_7弹道计算狙击镜', 'op_357_M157火控光学系统', 'op_357_视点3倍', 'op_357_1p_29俄制3倍', 'op_357_LPVO多倍率战斗', 'op_357_3_7可调倍率狙击镜', 'op_357_侦察1_5_5可调', 'op_357_HAMR组合', 'op_357_MEO微型瞄具增高架', 'op_725_多用途战术增高架', 'op_725_微型瞄具增高架', 'op_357_ACOG精准六倍镜', 'op_357_Osight微型', 'op_357_Cobra准直式', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_okp_7反射', 'op_357_XCOG突击3_5倍', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_357_AP5000反射式', 'op_357_全息二型', 'op_357_反射式', 'op_357_俄式准直二倍', 'op_357_全息', 'op_none'],
        muzzle: ['mu_tenglong_FFC双流', 'mu_xinhuo', 'mu_tenglong_先进多口径', 'mu_tenglong_M7实用', 'mu_357_冲锋枪回声', 'mu_dead', 'mu_tenglong_沙暴垂直', 'mu_tenglong_堡垒水平', 'mu_poseidon', 'mu_tenglong_轻语战术', 'mu_tenglong_钛金竞赛', 'mu_tenglong_炽火抑制器', 'mu_tenglong_钢制膛口', 'mu_tenglong_实用_2', 'mu_tenglong_实用', 'mu_none'],
        barrel: ['br_smg_45_SMG45裂变长', 'br_smg_45_SMG45竹鼠短', 'br_smg_45_SMG长弩超长', 'br_smg_45_SMG45实用重', 'br_none'],
        foregrip: ['fg_resonance3', 'fg_ec_stop', 'fg_tenglong_黎明三角手电握把', 'fg_tenglong_破晓垂直手电握把', 'fg_tenglong_CR棱镜阻手器', 'fg_resonance2', 'fg_bipod_grip', 'fg_k1_elite', 'fg_tenglong_X25U斜侧战斗握把', 'fg_tenglong_共振人体工程握把', 'fg_phantom_vert', 'fg_tenglong_战术垂直握把', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_tenglong_折叠握把', 'fg_vfg_knight', 'fg_tenglong_ZFSG战术握把', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_ar57_模块化AR', 'rg_ar_tower', 'rg_ar57_侵袭', 'rg_ar57_幻影', 'rg_ar57_AR_MOE', 'rg_ar57_射手D_2', 'rg_ar57_飓风D_1', 'rg_ar57_M7稳定', 'rg_ar57_416实用', 'rg_none'],
        mag: ['ma_smg_45_SMG4540发扩容', 'ma_none'],
        stock: ['st_tenglong_锚点导轨后托', 'st_tenglong_QR高性能后托', 'st_tenglong_CT增强型后托', 'st_shadow_core', 'st_bizon_MRGS镂空', 'st_ur_tactical2', 'st_bizon_影袭导轨', 'st_skeleton_sniper', 'st_bizon_枢机先进战斗', 'st_416_stable', 'st_tenglong_416轻型', 'st_tenglong_精英轻型', 'st_raid_core', 'st_pivot_stable', 'st_lightning_rail', 'st_utility_light', 'st_tenglong_实用战术', 'st_tenglong_实用稳定', 'st_smg_45_SMG45枪托尾盖', 'st_bizon_核心导轨', 'st_none'],
        mag_seat: ['ms_smg_45_野蜂冲锋枪快拔套〔沙', 'ms_mk4_野蜂冲锋枪快拔套绿', 'ms_warrior_野蜂冲锋枪快拔套黑', 'mag_seat_none'],
        side_optic: ['op_tenglong_侧置Osight微型', 'op_tenglong_侧置战斗红点', 'op_tenglong_侧置微型红点', 'op_tenglong_侧置XRO快速反应', 'op_tenglong_侧置全景红点', 'side_optic_none'],
        upper_rail: ['ur_tenglong_OLIGHTWARRIOR3S战术手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'ur_none'],
        left_rail: ['rr_tenglong_OLIGHT_Odin_S战术手电', 'rr_ar57_OLIGHTBaldr_Pro_R多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'lr_none'],
        right_rail: ['ur_tenglong_OLIGHTWARRIOR3S战术手电', 'rr_tenglong_OLIGHT_Odin_S战术手电', 'rr_ar57_OLIGHTBaldr_Pro_R多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'rr_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'rear_grip_patch', 'grip_seat']
        slotVisibilityRules: [
        {trigger:'op_spirit_37', action:'show', slots:['lens_shade']},
        {trigger:'op_m157_fire', action:'show', slots:['lens_shade']},
        {trigger:'op_lpvo', action:'show', slots:['lens_shade']},
        {trigger:'op_sniper', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_scout', action:'show', slots:['lens_shade']},
        {trigger:'op_riser', action:'show', slots:['optic']},
        {trigger:'op_725_多用途战术增高架', action:'show', slots:['tactical_device', 'riser_optic']},
        {trigger:'op_riser3', action:'show', slots:['riser_optic']},
        {trigger:'br_smg45_fission_l', action:'show', slots:['upper_patch', 'rail_bipod', 'left_patch', 'right_patch']},
        {trigger:'rg_ar_tower', action:'show', slots:['rear_grip_patch', 'grip_seat']},
        {trigger:'br_smg45_bamboo', action:'show', slots:['muzzle']},
        {trigger:'br_smg45_crossbow_l', action:'show', slots:['muzzle']},
        {trigger:'br_smg45_prac_heavy', action:'show', slots:['muzzle']}
        ]
    },

    'sr-3m': {
        optic: ['op_357_先进白热成像战斗', 'op_357_先进热融合全息', 'op_357_VMX无框', 'op_357_1p33_2_4倍', 'op_357_UHX全息', 'op_357_棱镜通用二倍光学', 'op_357_灵眼3_7弹道计算狙击镜', 'op_357_M157火控光学系统', 'op_357_视点3倍', 'op_357_1p_29俄制3倍', 'op_357_LPVO多倍率战斗', 'op_357_3_7可调倍率狙击镜', 'op_357_侦察1_5_5可调', 'op_357_HAMR组合', 'op_357_MEO微型瞄具增高架', 'op_725_多用途战术增高架', 'op_725_微型瞄具增高架', 'op_357_ACOG精准六倍镜', 'op_357_Osight微型', 'op_357_Cobra准直式', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_okp_7反射', 'op_357_XCOG突击3_5倍', 'op_akm_PSO战斗2_5倍', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_357_AP5000反射式', 'op_akm_PSO狙击8倍', 'op_357_全息二型', 'op_357_反射式', 'op_357_俄式准直二倍', 'op_357_全息', 'op_none'],
        muzzle: ['mu_tenglong_FFC双流', 'mu_sr_3m_SR_3M隐击', 'mu_xinhuo', 'mu_tenglong_先进多口径', 'mu_dtk', 'mu_tenglong_M7实用', 'mu_bizon_俄系冲锋枪精密', 'mu_ak_12_AK勇火', 'mu_pbs', 'mu_357_冲锋枪回声', 'mu_dead', 'mu_tenglong_沙暴垂直', 'mu_tenglong_堡垒水平', 'mu_poseidon', 'mu_tenglong_轻语战术', 'mu_tenglong_钛金竞赛', 'mu_tenglong_炽火抑制器', 'mu_ak_12_AK实用', 'mu_tenglong_钢制膛口', 'mu_tenglong_实用_2', 'mu_flare_bell', 'mu_tenglong_实用', 'mu_none'],
        barrel: ['br_sr_3m_SR_3M铸钢战术', 'br_none'],
        rear_grip: ['rg_bizon_天蝎座', 'rg_bizon_RK3', 'rg_bizon_AK镂空握把', 'rg_ak_tower', 'rg_bizon_稳定AK', 'rg_bizon_射手AK', 'rg_warrior_实用AK', 'rg_none'],
        mag: ['ma_asval_VSS_45发', 'ma_asval_VSS30发', 'ma_none'],
        stock: ['st_tenglong_锚点导轨后托', 'st_tenglong_QR高性能后托', 'st_tenglong_CT增强型后托', 'st_shadow_core', 'st_bizon_MRGS镂空', 'st_ur_tactical2', 'st_bizon_影袭导轨', 'st_skeleton_sniper', 'st_416_stable', 'st_tenglong_416轻型', 'st_tenglong_精英轻型', 'st_raid_core', 'st_pivot_stable', 'st_lightning_rail', 'st_sr_3m_SR_3M枪托尾盖', 'st_utility_light', 'st_tenglong_实用战术', 'st_tenglong_实用稳定', 'st_bizon_核心导轨', 'st_none'],
        mag_seat: ['ms_akm_郊狼中间威力快拔套沙', 'ms_sr_3m_郊狼中间威力快拔套〔绿', 'ms_akm_郊狼中间威力口径快拔套黑', 'mag_seat_none'],
        bolt: ['bolt_bizon_泽宁特拉机柄帽', 'bolt_none'],
        side_optic: ['op_tenglong_侧置Osight微型', 'op_tenglong_侧置战斗红点', 'op_tenglong_侧置微型红点', 'op_tenglong_侧置XRO快速反应', 'op_tenglong_侧置全景红点', 'side_optic_none'],
        left_rail: ['rr_tenglong_OLIGHT_Odin_S战术手电', 'rr_tenglong_OLIGHT_Baldr_Pro_R多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'lr_none'],
        right_rail: ['ur_tenglong_OLIGHTWARRIOR3S战术手电', 'rr_tenglong_OLIGHT_Odin_S战术手电', 'rr_tenglong_OLIGHT_Baldr_Pro_R多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'rr_none'],
        defaultHidden: [],
        slotVisibilityRules: [
        {trigger:'op_spirit_37', action:'show', slots:['lens_shade']},
        {trigger:'op_m157_fire', action:'show', slots:['lens_shade']},
        {trigger:'op_lpvo', action:'show', slots:['lens_shade']},
        {trigger:'op_sniper', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_scout', action:'show', slots:['lens_shade']},
        {trigger:'op_riser', action:'show', slots:['optic']},
        {trigger:'op_725_多用途战术增高架', action:'show', slots:['tactical_device', 'riser_optic']},
        {trigger:'op_riser3', action:'show', slots:['riser_optic']},
        {trigger:'br_sr3m_steel', action:'show', slots:['foregrip', 'upper_rail', 'right_patch', 'left_patch']},
        {trigger:'rg_ak_tower', action:'show', slots:['grip_seat']}
        ]
    },

    'uzi': {
        optic: ['op_357_先进白热成像战斗', 'op_357_先进热融合全息', 'op_357_VMX无框', 'op_357_1p33_2_4倍', 'op_357_UHX全息', 'op_357_棱镜通用二倍光学', 'op_357_灵眼3_7弹道计算狙击镜', 'op_357_M157火控光学系统', 'op_357_视点3倍', 'op_357_1p_29俄制3倍', 'op_357_LPVO多倍率战斗', 'op_357_3_7可调倍率狙击镜', 'op_357_侦察1_5_5可调', 'op_357_HAMR组合', 'op_357_MEO微型瞄具增高架', 'op_725_多用途战术增高架', 'op_725_微型瞄具增高架', 'op_357_ACOG精准六倍镜', 'op_357_Osight微型', 'op_357_Cobra准直式', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_okp_7反射', 'op_357_XCOG突击3_5倍', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_357_AP5000反射式', 'op_357_全息二型', 'op_357_反射式', 'op_357_俄式准直二倍', 'op_357_全息', 'op_none'],
        muzzle: ['mu_tenglong_FFC双流', 'mu_xinhuo', 'mu_tenglong_先进多口径', 'mu_tenglong_M7实用', 'mu_357_冲锋枪回声', 'mu_dead', 'mu_tenglong_沙暴垂直', 'mu_tenglong_堡垒水平', 'mu_poseidon', 'mu_tenglong_轻语战术', 'mu_tenglong_钛金竞赛', 'mu_tenglong_炽火抑制器', 'mu_tenglong_钢制膛口', 'mu_tenglong_实用_2', 'mu_tenglong_实用', 'mu_none'],
        barrel: ['br_uzi_UZI军需长', 'br_uzi_UZI突击标准', 'br_uzi_UZI竞赛性能长', 'br_none'],
        foregrip: ['fg_ec_stop', 'fg_tenglong_CR棱镜阻手器', 'fg_bipod_grip', 'fg_tenglong_X25U斜侧战斗握把', 'fg_phantom_vert', 'fg_tenglong_战术垂直握把', 'fg_rk0', 'fg_angle_stop', 'fg_phase_battle', 'fg_tenglong_折叠握把', 'fg_vfg_knight', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        mag: ['ma_uzi_UZI_45发', 'ma_uzi_UZI35发', 'ma_none'],
        stock: ['st_tenglong_锚点导轨后托', 'st_tenglong_QR高性能后托', 'st_tenglong_CT增强型后托', 'st_shadow_core', 'st_bizon_MRGS镂空', 'st_ur_tactical2', 'st_bizon_影袭导轨', 'st_skeleton_sniper', 'st_416_stable', 'st_tenglong_416轻型', 'st_tenglong_精英轻型', 'st_raid_core', 'st_pivot_stable', 'st_lightning_rail', 'st_uzi_UZI枪托尾盖', 'st_uzi_UZI', 'st_utility_light', 'st_tenglong_实用战术', 'st_tenglong_实用稳定', 'st_bizon_核心导轨', 'st_none'],
        handguard: ['hg_uzi_UZI性能', 'hg_uzi_UZI导轨', 'hg_none'],
        mag_seat: ['ms_warrior_野蜂冲锋枪快拔套沙', 'ms_mk4_野蜂冲锋枪快拔套绿', 'ms_warrior_野蜂冲锋枪快拔套黑', 'mag_seat_none'],
        left_rail: ['rr_tenglong_OLIGHT_Odin_S战术手电', 'rr_ak_12_OLIGHTBaldrProR多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'lr_none'],
        right_rail: ['ur_tenglong_OLIGHTWARRIOR3S战术手电', 'rr_tenglong_OLIGHT_Odin_S战术手电', 'rr_ak_12_OLIGHTBaldrProR多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'rr_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device']
        slotVisibilityRules: [
        {trigger:'op_spirit_37', action:'show', slots:['lens_shade']},
        {trigger:'op_m157_fire', action:'show', slots:['lens_shade']},
        {trigger:'op_lpvo', action:'show', slots:['lens_shade']},
        {trigger:'op_sniper', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_scout', action:'show', slots:['lens_shade']},
        {trigger:'op_riser', action:'show', slots:['optic']},
        {trigger:'op_725_多用途战术增高架', action:'show', slots:['tactical_device', 'riser_optic']},
        {trigger:'op_riser3', action:'show', slots:['riser_optic']},
        {trigger:'hg_uzi_UZI性能', action:'hide', slots:['foregrip', 'left_rail', 'right_rail']},
        {trigger:'br_uzi_supply_l', action:'show', slots:['muzzle']},
        {trigger:'br_uzi_assault', action:'show', slots:['muzzle']},
        {trigger:'br_uzi_race_l', action:'show', slots:['muzzle']}
        ]
    },

    'vector': {
        optic: ['op_357_先进白热成像战斗', 'op_357_先进热融合全息', 'op_357_VMX无框', 'op_357_1p33_2_4倍', 'op_357_UHX全息', 'op_357_棱镜通用二倍光学', 'op_357_灵眼3_7弹道计算狙击镜', 'op_357_M157火控光学系统', 'op_357_视点3倍', 'op_357_1p_29俄制3倍', 'op_357_LPVO多倍率战斗', 'op_357_3_7可调倍率狙击镜', 'op_357_侦察1_5_5可调', 'op_357_HAMR组合', 'op_357_MEO微型瞄具增高架', 'op_725_多用途战术增高架', 'op_725_微型瞄具增高架', 'op_357_ACOG精准六倍镜', 'op_357_Osight微型', 'op_357_Cobra准直式', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_okp_7反射', 'op_357_XCOG突击3_5倍', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_357_AP5000反射式', 'op_357_全息二型', 'op_357_反射式', 'op_357_俄式准直二倍', 'op_357_全息', 'op_none'],
        muzzle: ['mu_tenglong_FFC双流', 'mu_xinhuo', 'mu_tenglong_先进多口径', 'mu_tenglong_M7实用', 'mu_357_冲锋枪回声', 'mu_dead', 'mu_tenglong_沙暴垂直', 'mu_tenglong_堡垒水平', 'mu_poseidon', 'mu_tenglong_轻语战术', 'mu_tenglong_钛金竞赛', 'mu_tenglong_炽火抑制器', 'mu_tenglong_钢制膛口', 'mu_tenglong_实用_2', 'mu_tenglong_实用', 'mu_none'],
        barrel: ['br_vector_Vector长剑超长', 'br_vector_Vector堡垒重', 'br_vector_Vector导轨', 'br_none'],
        foregrip: ['fg_ec_stop', 'fg_tenglong_CR棱镜阻手器', 'fg_bipod_grip', 'fg_tenglong_X25U斜侧战斗握把', 'fg_phantom_vert', 'fg_tenglong_战术垂直握把', 'fg_rk0', 'fg_angle_stop', 'fg_phase_battle', 'fg_tenglong_折叠握把', 'fg_vfg_knight', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        mag: ['ma_vector_Vector扩容40发', 'ma_vector_Vector扩容CMAG70发', 'ma_vector_Vector扩容30发', 'ma_none'],
        stock: ['st_tenglong_锚点导轨后托', 'st_tenglong_QR高性能后托', 'st_tenglong_CT增强型后托', 'st_shadow_core', 'st_bizon_MRGS镂空', 'st_vector_Vector共振一体式', 'st_ur_tactical2', 'st_bizon_影袭导轨', 'st_skeleton_sniper', 'st_vector_Vector枪托尾盖', 'st_416_stable', 'st_tenglong_416轻型', 'st_tenglong_精英轻型', 'st_raid_core', 'st_pivot_stable', 'st_lightning_rail', 'st_utility_light', 'st_tenglong_实用战术', 'st_tenglong_实用稳定', 'st_bizon_核心导轨', 'st_none'],
        mag_seat: ['ms_qcq171_野蜂冲锋枪快拔套沙', 'ms_mk4_野蜂冲锋枪快拔套绿', 'ms_warrior_野蜂冲锋枪快拔套黑', 'mag_seat_none'],
        side_optic: ['op_tenglong_侧置Osight微型', 'op_tenglong_侧置战斗红点', 'op_tenglong_侧置微型红点', 'op_tenglong_侧置XRO快速反应', 'op_tenglong_侧置全景红点', 'side_optic_none'],
        upper_rail: ['ur_tenglong_OLIGHTWARRIOR3S战术手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'ur_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'left_rail', 'rail_bipod', 'left_patch', 'upper_patch', 'right_rail', 'right_patch', 'muzzle']
        slotVisibilityRules: [
        {trigger:'op_spirit_37', action:'show', slots:['lens_shade']},
        {trigger:'op_m157_fire', action:'show', slots:['lens_shade']},
        {trigger:'op_lpvo', action:'show', slots:['lens_shade']},
        {trigger:'op_sniper', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_scout', action:'show', slots:['lens_shade']},
        {trigger:'op_riser', action:'show', slots:['optic']},
        {trigger:'op_725_多用途战术增高架', action:'show', slots:['tactical_device', 'riser_optic']},
        {trigger:'op_riser3', action:'show', slots:['riser_optic']},
        {trigger:'br_vector_Vector长剑超长', action:'show', slots:['left_rail', 'rail_bipod', 'left_patch', 'upper_patch', 'right_rail', 'right_patch', 'muzzle']},
        {trigger:'br_vector_Vector堡垒重', action:'show', slots:['right_rail', 'left_rail', 'muzzle']},
        {trigger:'br_vector_Vector导轨', action:'show', slots:['left_rail', 'rail_bipod', 'right_rail', 'muzzle']},
        {trigger:'ma_vec_70', action:'hide', slots:['mag_seat']},
        {trigger:'br_vector_Vector堡垒重', action:'hide', slots:['foregrip']}
        ]
    },

    'warrior': {
        optic: ['op_357_先进白热成像战斗', 'op_357_先进热融合全息', 'op_357_VMX无框', 'op_357_1p33_2_4倍', 'op_357_UHX全息', 'op_357_棱镜通用二倍光学', 'op_357_灵眼3_7弹道计算狙击镜', 'op_357_M157火控光学系统', 'op_357_视点3倍', 'op_357_1p_29俄制3倍', 'op_357_LPVO多倍率战斗', 'op_357_3_7可调倍率狙击镜', 'op_357_侦察1_5_5可调', 'op_357_HAMR组合', 'op_357_MEO微型瞄具增高架', 'op_725_多用途战术增高架', 'op_725_微型瞄具增高架', 'op_357_ACOG精准六倍镜', 'op_357_Osight微型', 'op_357_Cobra准直式', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_okp_7反射', 'op_357_XCOG突击3_5倍', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_357_AP5000反射式', 'op_357_全息二型', 'op_357_反射式', 'op_357_俄式准直二倍', 'op_357_全息', 'op_none'],
        muzzle: ['mu_tenglong_FFC双流', 'mu_xinhuo', 'mu_tenglong_先进多口径', 'mu_tenglong_M7实用', 'mu_bizon_俄系冲锋枪精密', 'mu_357_冲锋枪回声', 'mu_dead', 'mu_tenglong_沙暴垂直', 'mu_tenglong_堡垒水平', 'mu_poseidon', 'mu_tenglong_轻语战术', 'mu_tenglong_钛金竞赛', 'mu_tenglong_炽火抑制器', 'mu_tenglong_钢制膛口', 'mu_tenglong_实用_2', 'mu_tenglong_实用', 'mu_none'],
        barrel: ['br_warrior_勇士海狸', 'br_warrior_勇士战术', 'br_none'],
        foregrip: ['fg_ec_stop', 'fg_tenglong_CR棱镜阻手器', 'fg_bipod_grip', 'fg_tenglong_X25U斜侧战斗握把', 'fg_phantom_vert', 'fg_tenglong_战术垂直握把', 'fg_rk0', 'fg_angle_stop', 'fg_phase_battle', 'fg_tenglong_折叠握把', 'fg_vfg_knight', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_bizon_天蝎座', 'rg_bizon_RK3', 'rg_bizon_AK镂空握把', 'rg_ak_tower', 'rg_bizon_稳定AK', 'rg_bizon_射手AK', 'rg_warrior_实用AK', 'rg_none'],
        mag: ['ma_warrior_勇士45发扩容', 'ma_none'],
        stock: ['st_tenglong_锚点导轨后托', 'st_tenglong_QR高性能后托', 'st_tenglong_CT增强型后托', 'st_shadow_core', 'st_bizon_MRGS镂空', 'st_bizon_PT3死士', 'st_bizon_PT1特种', 'st_ur_tactical2', 'st_bizon_影袭导轨', 'st_skeleton_sniper', 'st_bizon_AK19', 'st_bizon_枢机先进战斗', 'st_416_stable', 'st_tenglong_416轻型', 'st_tenglong_精英轻型', 'st_raid_core', 'st_pivot_stable', 'st_lightning_rail', 'st_bizon_AK枪托尾盖', 'st_bizon_AK骨架', 'st_warrior_AK折叠', 'st_bizon_AK聚合物', 'st_utility_light', 'st_tenglong_实用战术', 'st_tenglong_实用稳定', 'st_bizon_核心导轨', 'st_none'],
        stock_pad: ['sp_bizon_AK枪托缓冲垫', 'stock_pad_none'],
        mag_seat: ['ms_warrior_野蜂冲锋枪快拔套沙', 'ms_warrior_野蜂冲锋枪快拔套绿', 'ms_warrior_野蜂冲锋枪快拔套黑', 'mag_seat_none'],
        bolt: ['bolt_bizon_泽宁特拉机柄帽', 'bolt_none'],
        side_optic: ['op_tenglong_侧置Osight微型', 'op_tenglong_侧置战斗红点', 'op_tenglong_侧置微型红点', 'op_tenglong_侧置XRO快速反应', 'op_tenglong_侧置全景红点', 'side_optic_none'],
        right_rail: ['ur_tenglong_OLIGHTWARRIOR3S战术手电', 'rr_bizon_OLIGHTOdinS战术手电', 'fn_93r_OLIGHTBaldr_ProR多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'rr_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'grip_seat']
        slotVisibilityRules: [
        {trigger:'op_spirit_37', action:'show', slots:['lens_shade']},
        {trigger:'op_m157_fire', action:'show', slots:['lens_shade']},
        {trigger:'op_lpvo', action:'show', slots:['lens_shade']},
        {trigger:'op_sniper', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_scout', action:'show', slots:['lens_shade']},
        {trigger:'op_riser', action:'show', slots:['optic']},
        {trigger:'op_725_多用途战术增高架', action:'show', slots:['tactical_device', 'riser_optic']},
        {trigger:'op_riser3', action:'show', slots:['riser_optic']},
        {trigger:'br_warrior_beaver', action:'show', slots:['upper_rail', 'left_rail', 'left_patch', 'right_patch', 'foregrip']},
        {trigger:'br_warrior_tactical', action:'show', slots:['left_rail', 'foregrip']},
        {trigger:'st_tenglong_锚点导轨后托', action:'hide', slots:['stock_pad']},
        {trigger:'st_tenglong_QR高性能后托', action:'hide', slots:['stock_pad']},
        {trigger:'st_tenglong_CT增强型后托', action:'hide', slots:['stock_pad']},
        {trigger:'st_shadow_core', action:'hide', slots:['stock_pad']},
        {trigger:'st_bizon_MRGS镂空', action:'hide', slots:['stock_pad']},
        {trigger:'st_bizon_PT3死士', action:'hide', slots:['stock_pad']},
        {trigger:'st_bizon_PT1特种', action:'hide', slots:['stock_pad']},
        {trigger:'st_ur_tactical2', action:'hide', slots:['stock_pad']},
        {trigger:'st_bizon_影袭导轨', action:'hide', slots:['stock_pad']},
        {trigger:'st_skeleton_sniper', action:'hide', slots:['stock_pad']},
        {trigger:'st_ak19', action:'hide', slots:['stock_pad']},
        {trigger:'st_bizon_枢机先进战斗', action:'hide', slots:['stock_pad']},
        {trigger:'st_416_stable', action:'hide', slots:['stock_pad']},
        {trigger:'st_tenglong_416轻型', action:'hide', slots:['stock_pad']},
        {trigger:'st_tenglong_精英轻型', action:'hide', slots:['stock_pad']},
        {trigger:'st_raid_core', action:'hide', slots:['stock_pad']},
        {trigger:'st_pivot_stable', action:'hide', slots:['stock_pad']},
        {trigger:'st_lightning_rail', action:'hide', slots:['stock_pad']},
        {trigger:'st_bizon_AK枪托尾盖', action:'hide', slots:['stock_pad']},
        {trigger:'st_bizon_AK骨架', action:'hide', slots:['stock_pad']},
        {trigger:'st_utility_light', action:'hide', slots:['stock_pad']},
        {trigger:'st_tenglong_实用战术', action:'hide', slots:['stock_pad']},
        {trigger:'st_tenglong_实用稳定', action:'hide', slots:['stock_pad']},
        {trigger:'st_bizon_核心导轨', action:'hide', slots:['stock_pad']},
        {trigger:'rg_ak_tower', action:'show', slots:['grip_seat']}
        ]
    },

    // ==================== 狙击步枪 ====================

    'awm': {
        optic: ['op_lever_八倍先进热成像狙击镜', 'op_357_先进白热成像战斗', 'op_357_先进热融合全息', 'op_357_VMX无框', 'op_357_1p33_2_4倍', 'op_357_UHX全息', 'op_357_棱镜通用二倍光学', 'op_lever_灵眼6_12弹道计算狙击镜', 'op_357_灵眼3_7弹道计算狙击镜', 'op_357_M157火控光学系统', 'op_357_视点3倍', 'op_357_1p_29俄制3倍', 'op_lever_6_12神射手变倍狙击镜', 'op_357_LPVO多倍率战斗', 'op_357_3_7可调倍率狙击镜', 'op_lever_光学狙击8倍', 'op_357_侦察1_5_5可调', 'op_357_HAMR组合', 'op_357_MEO微型瞄具增高架', 'op_725_多用途战术增高架', 'op_725_微型瞄具增高架', 'op_lever_M3狙击镜', 'op_357_ACOG精准六倍镜', 'op_357_Osight微型', 'op_357_Cobra准直式', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_okp_7反射', 'op_357_XCOG突击3_5倍', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_357_AP5000反射式', 'op_357_全息二型', 'op_357_反射式', 'op_357_俄式准直二倍', 'op_357_全息', 'op_none'],
        muzzle: ['mu_ash_12_泰坦', 'mu_awm_共鸣狙击枪', 'mu_awm_漩涡', 'mu_none'],
        barrel: ['br_awm_AWM天际线长', 'br_none'],
        mag_seat: ['ms_awm_灰熊全威力快拔套沙', 'ms_awm_灰熊全威力快拔套绿', 'ms_awm_灰熊全威力口径快拔套黑', 'mag_seat_none'],
        side_optic: ['op_tenglong_侧置Osight微型', 'op_tenglong_侧置战斗红点', 'op_tenglong_侧置微型红点', 'op_tenglong_侧置XRO快速反应', 'op_tenglong_侧置全景红点', 'side_optic_none'],
        unique: ['hg_awm_dome', 'unique_none'],
        defaultHidden: ['left_rail', 'right_rail', 'rail_bipod', 'left_patch', 'right_patch', 'lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device']
        slotVisibilityRules: [
        {trigger:'hg_awm_dome', action:'show', slots:['left_rail', 'right_rail', 'rail_bipod', 'left_patch', 'right_patch']},
        {trigger:'op_spirit_612', action:'show', slots:['lens_shade']},
        {trigger:'op_spirit_37', action:'show', slots:['lens_shade']},
        {trigger:'op_m157_fire', action:'show', slots:['lens_shade']},
        {trigger:'op_lever_6_12神射手变倍狙击镜', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_lpvo', action:'show', slots:['lens_shade']},
        {trigger:'op_sniper', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_lever_光学狙击8倍', action:'show', slots:['lens_shade']},
        {trigger:'op_scout', action:'show', slots:['lens_shade']},
        {trigger:'op_riser', action:'show', slots:['optic']},
        {trigger:'op_725_多用途战术增高架', action:'show', slots:['tactical_device', 'riser_optic']},
        {trigger:'op_riser3', action:'show', slots:['riser_optic']},
        {trigger:'op_lever_M3狙击镜', action:'show', slots:['lens_shade']}
        ]
    },

    'm700': {
        optic: ['op_lever_八倍先进热成像狙击镜', 'op_357_先进白热成像战斗', 'op_357_先进热融合全息', 'op_357_VMX无框', 'op_357_1p33_2_4倍', 'op_357_UHX全息', 'op_357_棱镜通用二倍光学', 'op_lever_灵眼6_12弹道计算狙击镜', 'op_357_灵眼3_7弹道计算狙击镜', 'op_357_M157火控光学系统', 'op_357_视点3倍', 'op_357_1p_29俄制3倍', 'op_lever_6_12神射手变倍狙击镜', 'op_357_LPVO多倍率战斗', 'op_357_3_7可调倍率狙击镜', 'op_lever_光学狙击8倍', 'op_357_侦察1_5_5可调', 'op_357_HAMR组合', 'op_357_MEO微型瞄具增高架', 'op_725_多用途战术增高架', 'op_725_微型瞄具增高架', 'op_lever_M3狙击镜', 'op_357_ACOG精准六倍镜', 'op_357_Osight微型', 'op_357_Cobra准直式', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_okp_7反射', 'op_357_XCOG突击3_5倍', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_357_AP5000反射式', 'op_357_全息二型', 'op_357_反射式', 'op_357_俄式准直二倍', 'op_357_全息', 'op_none'],
        muzzle: ['mu_tenglong_FFC双流', 'mu_xinhuo', 'mu_tenglong_先进多口径', 'mu_tenglong_M7实用', 'mu_awm_共鸣狙击枪', 'mu_awm_漩涡', 'mu_dead', 'mu_tenglong_沙暴垂直', 'mu_tenglong_堡垒水平', 'mu_poseidon', 'mu_tenglong_轻语战术', 'mu_tenglong_钛金竞赛', 'mu_tenglong_炽火抑制器', 'mu_tenglong_钢制膛口', 'mu_tenglong_实用_2', 'mu_tenglong_实用', 'mu_none'],
        barrel: ['br_m700_M700', 'br_m700_M700猎食军规', 'br_m700_M700平流层长', 'br_none'],
        mag: ['ma_m700_M700_10发', 'ma_none'],
        handguard: ['hg_m700_M700军规', 'hg_m700_M700先进', 'hg_m700_M700稳定一体', 'hg_m700_M700黑色一体', 'hg_none'],
        side_optic: ['op_tenglong_侧置Osight微型', 'op_tenglong_侧置战斗红点', 'op_tenglong_侧置微型红点', 'op_tenglong_侧置XRO快速反应', 'op_tenglong_侧置全景红点', 'side_optic_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'right_rail', 'left_rail', 'rail_bipod', 'cheek_pad', 'foregrip', 'rear_grip', 'upper_rail', 'left_patch', 'upper_patch', 'right_patch', 'rear_grip_patch', 'grip_seat']
        slotVisibilityRules: [
        {trigger:'op_spirit_612', action:'show', slots:['lens_shade']},
        {trigger:'op_spirit_37', action:'show', slots:['lens_shade']},
        {trigger:'op_m157_fire', action:'show', slots:['lens_shade']},
        {trigger:'op_lever_6_12神射手变倍狙击镜', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_lpvo', action:'show', slots:['lens_shade']},
        {trigger:'op_sniper', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_lever_光学狙击8倍', action:'show', slots:['lens_shade']},
        {trigger:'op_scout', action:'show', slots:['lens_shade']},
        {trigger:'op_riser', action:'show', slots:['optic']},
        {trigger:'op_725_多用途战术增高架', action:'show', slots:['tactical_device', 'riser_optic']},
        {trigger:'op_riser3', action:'show', slots:['riser_optic']},
        {trigger:'op_lever_M3狙击镜', action:'show', slots:['lens_shade']},
        {trigger:'br_m700_integrated', action:'hide', slots:['muzzle']},
        {trigger:'hg_m700_M700军规', action:'show', slots:['right_rail', 'left_rail', 'rail_bipod', 'cheek_pad']},
        {trigger:'hg_m700_M700先进', action:'show', slots:['foregrip', 'rear_grip', 'rail_bipod', 'right_rail', 'upper_rail', 'left_rail', 'left_patch', 'upper_patch', 'right_patch']},
        {trigger:'hg_m700_M700稳定一体', action:'show', slots:['right_rail', 'left_rail', 'rail_bipod']},
        {trigger:'hg_m700_M700黑色一体', action:'show', slots:['left_rail', 'right_rail', 'rail_bipod', 'cheek_pad']},
        {trigger:'rg_ar_tower', action:'show', slots:['rear_grip_patch', 'grip_seat']}
        ]
    },

    'm82': {
        optic: ['op_357_先进白热成像战斗', 'op_357_先进热融合全息', 'op_357_VMX无框', 'op_357_1p33_2_4倍', 'op_lever_灵眼6_12弹道计算狙击镜', 'op_357_灵眼3_7弹道计算狙击镜', 'op_357_M157火控光学系统', 'op_tenglong_侧置战斗红点', 'op_357_视点3倍', 'op_357_1p_29俄制3倍', 'op_lever_6_12神射手变倍狙击镜', 'op_357_LPVO多倍率战斗', 'op_357_3_7可调倍率狙击镜', 'op_lever_光学狙击8倍', 'op_357_侦察1_5_5可调', 'op_357_HAMR组合', 'op_357_MEO微型瞄具增高架', 'op_725_多用途战术增高架', 'op_725_微型瞄具增高架', 'op_357_ACOG精准六倍镜', 'op_357_Osight微型', 'op_357_Cobra准直式', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_okp_7反射', 'op_357_XCOG突击3_5倍', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_357_AP5000反射式', 'op_357_全息二型', 'op_357_反射式', 'op_357_俄式准直二倍', 'op_357_全息', 'op_none'],
        muzzle: ['mu_ash_12_泰坦', 'mu_awm_共鸣狙击枪', 'mu_none'],
        barrel: ['br_m82_短吻鳄', 'br_none'],
        foregrip: ['fg_resonance3', 'fg_ec_stop', 'fg_tenglong_黎明三角手电握把', 'fg_tenglong_破晓垂直手电握把', 'fg_tenglong_CR棱镜阻手器', 'fg_resonance2', 'fg_bipod_grip', 'fg_k1_elite', 'fg_tenglong_X25U斜侧战斗握把', 'fg_tenglong_共振人体工程握把', 'fg_phantom_vert', 'fg_tenglong_战术垂直握把', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_tenglong_折叠握把', 'fg_vfg_knight', 'fg_tenglong_ZFSG战术握把', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_ar_tower', 'rg_ar57_侵袭', 'rg_ar57_幻影', 'rg_car_15_ARMOE', 'rg_ar57_射手D_2', 'rg_ar57_飓风D_1', 'rg_ar57_M7稳定', 'rg_ar57_416实用', 'rg_none'],
        mag: ['ma_m82_M82扩容', 'ma_none'],
        stock: ['st_m82_AMR_HT镂空', 'st_none'],
        side_optic: ['op_tenglong_侧置Osight微型', 'op_tenglong_侧置战斗红点', 'op_tenglong_侧置微型红点', 'op_tenglong_侧置XRO快速反应', 'op_tenglong_侧置全景红点', 'side_optic_none'],
        rail_bipod: ['fn_m82_巨像稳定器', 'rb_none'],
        upper_rail: ['ur_tenglong_OLIGHTWARRIOR3S战术手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'ur_none'],
        upper_patch: ['ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'up_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'grip_seat']
        slotVisibilityRules: [
        {trigger:'op_spirit_612', action:'show', slots:['lens_shade']},
        {trigger:'op_spirit_37', action:'show', slots:['lens_shade']},
        {trigger:'op_m157_fire', action:'show', slots:['lens_shade']},
        {trigger:'op_lever_6_12神射手变倍狙击镜', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_lpvo', action:'show', slots:['lens_shade']},
        {trigger:'op_sniper', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_lever_光学狙击8倍', action:'show', slots:['lens_shade']},
        {trigger:'op_scout', action:'show', slots:['lens_shade']},
        {trigger:'op_riser', action:'show', slots:['optic']},
        {trigger:'op_725_多用途战术增高架', action:'show', slots:['tactical_device', 'riser_optic']},
        {trigger:'op_riser3', action:'show', slots:['riser_optic']},
        {trigger:'br_m82_gator', action:'hide', slots:['upper_patch']},
        {trigger:'rg_ar_tower', action:'show', slots:['grip_seat']}
        ]
    },

    'r93': {
        optic: ['op_lever_八倍先进热成像狙击镜', 'op_357_先进白热成像战斗', 'op_357_先进热融合全息', 'op_357_VMX无框', 'op_357_1p33_2_4倍', 'op_357_UHX全息', 'op_357_棱镜通用二倍光学', 'op_lever_灵眼6_12弹道计算狙击镜', 'op_357_灵眼3_7弹道计算狙击镜', 'op_357_M157火控光学系统', 'op_357_视点3倍', 'op_357_1p_29俄制3倍', 'op_lever_6_12神射手变倍狙击镜', 'op_357_LPVO多倍率战斗', 'op_357_3_7可调倍率狙击镜', 'op_lever_光学狙击8倍', 'op_357_侦察1_5_5可调', 'op_357_HAMR组合', 'op_357_MEO微型瞄具增高架', 'op_725_多用途战术增高架', 'op_725_微型瞄具增高架', 'op_lever_M3狙击镜', 'op_357_ACOG精准六倍镜', 'op_357_Osight微型', 'op_357_Cobra准直式', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_okp_7反射', 'op_357_XCOG突击3_5倍', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_357_AP5000反射式', 'op_357_全息二型', 'op_357_反射式', 'op_357_俄式准直二倍', 'op_357_全息', 'op_none'],
        muzzle: ['mu_xinhuo', 'mu_tenglong_先进多口径', 'mu_tenglong_M7实用', 'mu_awm_共鸣狙击枪', 'mu_awm_漩涡', 'mu_dead', 'mu_tenglong_沙暴垂直', 'mu_tenglong_堡垒水平', 'mu_poseidon', 'mu_tenglong_轻语战术', 'mu_tenglong_钛金竞赛', 'mu_tenglong_炽火抑制器', 'mu_tenglong_钢制膛口', 'mu_tenglong_实用_2', 'mu_tenglong_实用', 'mu_none'],
        barrel: ['br_r93_R93裂变长', 'br_r93_R93轻盈短', 'br_none'],
        mag: ['ma_r93_R93_15发', 'ma_none'],
        heat_shield: ['fn_r93_R93枪管隔热网', 'heat_shield_none'],
        side_optic: ['op_tenglong_侧置Osight微型', 'op_tenglong_侧置战斗红点', 'op_tenglong_侧置微型红点', 'op_tenglong_侧置XRO快速反应', 'op_tenglong_侧置全景红点', 'side_optic_none'],
        rail_bipod: ['rb_util', 'rb_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device']
        slotVisibilityRules: [
        {trigger:'op_spirit_612', action:'show', slots:['lens_shade']},
        {trigger:'op_spirit_37', action:'show', slots:['lens_shade']},
        {trigger:'op_m157_fire', action:'show', slots:['lens_shade']},
        {trigger:'op_lever_6_12神射手变倍狙击镜', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_lpvo', action:'show', slots:['lens_shade']},
        {trigger:'op_sniper', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_lever_光学狙击8倍', action:'show', slots:['lens_shade']},
        {trigger:'op_scout', action:'show', slots:['lens_shade']},
        {trigger:'op_riser', action:'show', slots:['optic']},
        {trigger:'op_725_多用途战术增高架', action:'show', slots:['tactical_device', 'riser_optic']},
        {trigger:'op_riser3', action:'show', slots:['riser_optic']},
        {trigger:'op_lever_M3狙击镜', action:'show', slots:['lens_shade']},
        {trigger:'br_r93_fission_l', action:'show', slots:['right_rail', 'upper_rail', 'left_rail', 'upper_patch']}
        ]
    },

    'sv-98': {
        optic: ['op_lever_八倍先进热成像狙击镜', 'op_357_先进白热成像战斗', 'op_357_先进热融合全息', 'op_357_VMX无框', 'op_357_1p33_2_4倍', 'op_357_UHX全息', 'op_357_棱镜通用二倍光学', 'op_lever_灵眼6_12弹道计算狙击镜', 'op_357_灵眼3_7弹道计算狙击镜', 'op_357_M157火控光学系统', 'op_357_视点3倍', 'op_357_1p_29俄制3倍', 'op_lever_6_12神射手变倍狙击镜', 'op_357_LPVO多倍率战斗', 'op_357_3_7可调倍率狙击镜', 'op_lever_光学狙击8倍', 'op_357_侦察1_5_5可调', 'op_357_HAMR组合', 'op_357_MEO微型瞄具增高架', 'op_725_多用途战术增高架', 'op_725_微型瞄具增高架', 'op_lever_M3狙击镜', 'op_357_ACOG精准六倍镜', 'op_357_Osight微型', 'op_357_Cobra准直式', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_okp_7反射', 'op_357_XCOG突击3_5倍', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_357_AP5000反射式', 'op_357_全息二型', 'op_357_反射式', 'op_357_俄式准直二倍', 'op_357_全息', 'op_none'],
        muzzle: ['mu_xinhuo', 'mu_tenglong_先进多口径', 'mu_tenglong_M7实用', 'mu_awm_共鸣狙击枪', 'mu_awm_漩涡', 'mu_dead', 'mu_tenglong_沙暴垂直', 'mu_tenglong_堡垒水平', 'mu_poseidon', 'mu_tenglong_轻语战术', 'mu_tenglong_钛金竞赛', 'mu_tenglong_炽火抑制器', 'mu_tenglong_钢制膛口', 'mu_tenglong_实用_2', 'mu_tenglong_实用', 'mu_none'],
        barrel: ['br_sv_98_SV98灵巧短', 'br_sv_98_SV98龙萤轻', 'br_sv_98_SV98升华超长', 'br_none'],
        side_optic: ['op_tenglong_侧置Osight微型', 'op_tenglong_侧置战斗红点', 'op_tenglong_侧置微型红点', 'op_tenglong_侧置XRO快速反应', 'op_tenglong_侧置全景红点', 'side_optic_none'],
        rail_bipod: ['fn_sv_98_SV98两', 'rb_none'],
        upper_rail: ['ur_tenglong_OLIGHTWARRIOR3S战术手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'ur_none'],
        left_rail: ['rr_tenglong_OLIGHT_Odin_S战术手电', 'rr_ak_12_OLIGHTBaldrProR多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'lr_none'],
        right_rail: ['ur_tenglong_OLIGHTWARRIOR3S战术手电', 'rr_tenglong_OLIGHT_Odin_S战术手电', 'rr_ak_12_OLIGHTBaldrProR多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'rr_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device']
        slotVisibilityRules: [
        {trigger:'op_spirit_612', action:'show', slots:['lens_shade']},
        {trigger:'op_spirit_37', action:'show', slots:['lens_shade']},
        {trigger:'op_m157_fire', action:'show', slots:['lens_shade']},
        {trigger:'op_lever_6_12神射手变倍狙击镜', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_lpvo', action:'show', slots:['lens_shade']},
        {trigger:'op_sniper', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_lever_光学狙击8倍', action:'show', slots:['lens_shade']},
        {trigger:'op_scout', action:'show', slots:['lens_shade']},
        {trigger:'op_riser', action:'show', slots:['optic']},
        {trigger:'op_725_多用途战术增高架', action:'show', slots:['tactical_device', 'riser_optic']},
        {trigger:'op_riser3', action:'show', slots:['riser_optic']},
        {trigger:'op_lever_M3狙击镜', action:'show', slots:['lens_shade']}
        ]
    },

    // ==================== 精确射手步枪 ====================

    'lever': {
        optic: ['op_lever_八倍先进热成像狙击镜', 'op_357_先进白热成像战斗', 'op_357_先进热融合全息', 'op_357_VMX无框', 'op_357_1p33_2_4倍', 'op_357_UHX全息', 'op_357_棱镜通用二倍光学', 'op_lever_灵眼6_12弹道计算狙击镜', 'op_357_灵眼3_7弹道计算狙击镜', 'op_357_M157火控光学系统', 'op_357_视点3倍', 'op_357_1p_29俄制3倍', 'op_lever_6_12神射手变倍狙击镜', 'op_357_LPVO多倍率战斗', 'op_357_3_7可调倍率狙击镜', 'op_lever_光学狙击8倍', 'op_357_侦察1_5_5可调', 'op_357_HAMR组合', 'op_357_MEO微型瞄具增高架', 'op_725_多用途战术增高架', 'op_725_微型瞄具增高架', 'op_lever_M3狙击镜', 'op_357_ACOG精准六倍镜', 'op_357_Osight微型', 'op_357_Cobra准直式', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_okp_7反射', 'op_357_XCOG突击3_5倍', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_lever_杠杆式步枪守望者狙击镜', 'op_357_AP5000反射式', 'op_357_全息二型', 'op_357_反射式', 'op_357_俄式准直二倍', 'op_357_全息', 'op_none'],
        muzzle: ['mu_lever_杠杆式步枪守望者钢制', 'mu_none'],
        barrel: ['br_lever_杠杆式步枪拓荒者', 'br_lever_杠杆式步枪猎鹿人', 'br_none'],
        stock: ['st_lever_杠杆式步枪骨架', 'st_lever_杠杆式步枪战锤战术', 'st_lever_杠杆式步枪运动', 'st_lever_杠杆式步枪无托', 'st_lever_杠杆式步枪稳固狙击', 'st_none'],
        lever: ['fn_lever_杠杆式步枪犀牛杠杆', 'fn_lever_杠杆式步枪蜂鸟杠杆', 'lever_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device']
        slotVisibilityRules: [
        {trigger:'op_spirit_612', action:'show', slots:['lens_shade']},
        {trigger:'op_spirit_37', action:'show', slots:['lens_shade']},
        {trigger:'op_m157_fire', action:'show', slots:['lens_shade']},
        {trigger:'op_lever_6_12神射手变倍狙击镜', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_lpvo', action:'show', slots:['lens_shade']},
        {trigger:'op_sniper', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_lever_光学狙击8倍', action:'show', slots:['lens_shade']},
        {trigger:'op_scout', action:'show', slots:['lens_shade']},
        {trigger:'op_riser', action:'show', slots:['optic']},
        {trigger:'op_725_多用途战术增高架', action:'show', slots:['tactical_device', 'riser_optic']},
        {trigger:'op_riser3', action:'show', slots:['riser_optic']},
        {trigger:'op_lever_M3狙击镜', action:'show', slots:['lens_shade']},
        {trigger:'br_lever_pioneer', action:'show', slots:['foregrip', 'left_rail', 'right_rail']},
        {trigger:'br_lever_deer', action:'show', slots:['foregrip', 'upper_rail', 'left_rail', 'right_patch', 'right_rail', 'left_patch']},
        {trigger:'st_lever_skeleton', action:'show', slots:['cheek_pad']}
        ]
    },

    'm14': {
        optic: ['op_lever_八倍先进热成像狙击镜', 'op_357_先进白热成像战斗', 'op_357_先进热融合全息', 'op_357_VMX无框', 'op_357_1p33_2_4倍', 'op_357_UHX全息', 'op_357_棱镜通用二倍光学', 'op_lever_灵眼6_12弹道计算狙击镜', 'op_357_灵眼3_7弹道计算狙击镜', 'op_357_M157火控光学系统', 'op_357_视点3倍', 'op_357_1p_29俄制3倍', 'op_lever_6_12神射手变倍狙击镜', 'op_357_LPVO多倍率战斗', 'op_357_3_7可调倍率狙击镜', 'op_lever_光学狙击8倍', 'op_357_侦察1_5_5可调', 'op_357_HAMR组合', 'op_357_MEO微型瞄具增高架', 'op_725_多用途战术增高架', 'op_725_微型瞄具增高架', 'op_lever_M3狙击镜', 'op_357_ACOG精准六倍镜', 'op_357_Osight微型', 'op_357_Cobra准直式', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_okp_7反射', 'op_357_XCOG突击3_5倍', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_357_AP5000反射式', 'op_357_全息二型', 'op_357_反射式', 'op_357_俄式准直二倍', 'op_357_全息', 'op_none'],
        muzzle: ['mu_tenglong_FFC双流', 'mu_xinhuo', 'mu_tenglong_先进多口径', 'mu_tenglong_M7实用', 'mu_dead', 'mu_tenglong_沙暴垂直', 'mu_tenglong_堡垒水平', 'mu_poseidon', 'mu_tenglong_轻语战术', 'mu_tenglong_钛金竞赛', 'mu_tenglong_炽火抑制器', 'mu_tenglong_钢制膛口', 'mu_tenglong_实用_2', 'mu_tenglong_实用', 'mu_none'],
        barrel: ['br_m14_M14洞察超长', 'br_m14_M14轻语短', 'br_m14_M14漫游标准', 'br_none'],
        mag: ['ma_m14_M14_30发', 'ma_m14_M14_20发', 'ma_m14_M1450发', 'ma_none'],
        handguard: ['hg_m14_M14导轨一体', 'hg_m14_M14聚合物一体', 'hg_none'],
        handguard_kit: ['hg_m14_adv', 'hg_none'],
        cheek_pad: ['st_universal_pad', 'cheek_pad_none'],
        mag_seat: ['ms_awm_灰熊全威力快拔套沙', 'ms_g3_灰熊全威力快拔套绿', 'ms_awm_灰熊全威力口径快拔套黑', 'mag_seat_none'],
        side_optic: ['op_tenglong_侧置Osight微型', 'op_tenglong_侧置战斗红点', 'op_tenglong_侧置微型红点', 'op_tenglong_侧置XRO快速反应', 'op_tenglong_侧置全景红点', 'side_optic_none'],
        defaultHidden: ['foregrip', 'stock', 'rail_bipod', 'upper_rail', 'left_rail', 'right_rail', 'upper_patch', 'lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'right_patch', 'left_patch', 'muzzle']
        slotVisibilityRules: [
        {trigger:'hg_m14_adv', action:'hide', slots:['cheek_pad', 'handguard']},
        {trigger:'hg_m14_adv', action:'show', slots:['foregrip', 'stock', 'rail_bipod', 'upper_rail', 'left_rail', 'right_rail', 'upper_patch']},
        {trigger:'op_spirit_612', action:'show', slots:['lens_shade']},
        {trigger:'op_spirit_37', action:'show', slots:['lens_shade']},
        {trigger:'op_m157_fire', action:'show', slots:['lens_shade']},
        {trigger:'op_lever_6_12神射手变倍狙击镜', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_lpvo', action:'show', slots:['lens_shade']},
        {trigger:'op_sniper', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_lever_光学狙击8倍', action:'show', slots:['lens_shade']},
        {trigger:'op_scout', action:'show', slots:['lens_shade']},
        {trigger:'op_riser', action:'show', slots:['optic']},
        {trigger:'op_725_多用途战术增高架', action:'show', slots:['tactical_device', 'riser_optic']},
        {trigger:'op_riser3', action:'show', slots:['riser_optic']},
        {trigger:'op_lever_M3狙击镜', action:'show', slots:['lens_shade']},
        {trigger:'ma_m14_50', action:'hide', slots:['mag_seat']},
        {trigger:'hg_m14_M14导轨一体', action:'show', slots:['foregrip', 'upper_rail', 'rail_bipod', 'upper_patch', 'left_rail', 'right_rail', 'right_patch', 'left_patch']},
        {trigger:'hg_m14_M14导轨一体', action:'hide', slots:['handguard_kit']},
        {trigger:'br_m14_M14洞察超长', action:'show', slots:['muzzle']},
        {trigger:'br_m14_M14轻语短', action:'show', slots:['muzzle']},
        {trigger:'br_m14_M14漫游标准', action:'show', slots:['muzzle']}
        ]
    },

    'mini-14': {
        optic: ['op_lever_八倍先进热成像狙击镜', 'op_357_先进白热成像战斗', 'op_357_先进热融合全息', 'op_357_VMX无框', 'op_357_1p33_2_4倍', 'op_357_UHX全息', 'op_357_棱镜通用二倍光学', 'op_lever_灵眼6_12弹道计算狙击镜', 'op_357_灵眼3_7弹道计算狙击镜', 'op_357_M157火控光学系统', 'op_357_视点3倍', 'op_357_1p_29俄制3倍', 'op_lever_6_12神射手变倍狙击镜', 'op_357_LPVO多倍率战斗', 'op_357_3_7可调倍率狙击镜', 'op_lever_光学狙击8倍', 'op_357_侦察1_5_5可调', 'op_357_HAMR组合', 'op_357_MEO微型瞄具增高架', 'op_725_多用途战术增高架', 'op_725_微型瞄具增高架', 'op_lever_M3狙击镜', 'op_357_ACOG精准六倍镜', 'op_357_Osight微型', 'op_357_Cobra准直式', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_okp_7反射', 'op_357_XCOG突击3_5倍', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_357_AP5000反射式', 'op_357_全息二型', 'op_357_反射式', 'op_357_俄式准直二倍', 'op_357_全息', 'op_none'],
        muzzle: ['mu_web_titanium', 'mu_tenglong_FFC双流', 'mu_xinhuo', 'mu_tenglong_先进多口径', 'mu_tenglong_M7实用', 'mu_dead', 'mu_tenglong_沙暴垂直', 'mu_tenglong_堡垒水平', 'mu_poseidon', 'mu_tenglong_轻语战术', 'mu_tenglong_钛金竞赛', 'mu_tenglong_炽火抑制器', 'mu_tenglong_钢制膛口', 'mu_tenglong_实用_2', 'mu_ar57_鸟笼', 'mu_tenglong_实用', 'mu_none'],
        barrel: ['br_mini_14_Mini_14增强', 'br_none'],
        mag: ['ma_mini_14_Mini_14_30发', 'ma_mini_14_Mini_14_20发', 'ma_none'],
        handguard: ['hg_mini_14_Mini_14先进', 'hg_mini_14_Mini_14聚合物一体', 'hg_mini_14_Mini_14聚合物', 'hg_none'],
        side_optic: ['op_tenglong_侧置Osight微型', 'op_tenglong_侧置战斗红点', 'op_tenglong_侧置微型红点', 'op_tenglong_侧置XRO快速反应', 'op_tenglong_侧置全景红点', 'side_optic_none'],
        defaultHidden: [],
        slotVisibilityRules: [
        {trigger:'ma_mini14_20', action:'show', slots:['mag_seat']},
        {trigger:'op_spirit_612', action:'show', slots:['lens_shade']},
        {trigger:'op_spirit_37', action:'show', slots:['lens_shade']},
        {trigger:'op_m157_fire', action:'show', slots:['lens_shade']},
        {trigger:'op_lever_6_12神射手变倍狙击镜', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_lpvo', action:'show', slots:['lens_shade']},
        {trigger:'op_sniper', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_lever_光学狙击8倍', action:'show', slots:['lens_shade']},
        {trigger:'op_scout', action:'show', slots:['lens_shade']},
        {trigger:'op_riser', action:'show', slots:['optic']},
        {trigger:'op_725_多用途战术增高架', action:'show', slots:['tactical_device', 'riser_optic']},
        {trigger:'op_riser3', action:'show', slots:['riser_optic']},
        {trigger:'op_lever_M3狙击镜', action:'show', slots:['lens_shade']},
        {trigger:'hg_mini_14_Mini_14先进', action:'show', slots:['stock', 'foregrip', 'rail_bipod', 'left_rail', 'right_rail']},
        {trigger:'hg_mini_14_Mini_14聚合物一体', action:'show', slots:['right_rail', 'foregrip', 'left_rail']},
        {trigger:'hg_mini_14_Mini_14聚合物', action:'show', slots:['stock', 'foregrip', 'left_rail', 'right_rail']}
        ]
    },

    'psg-1': {
        optic: ['op_lever_八倍先进热成像狙击镜', 'op_357_先进白热成像战斗', 'op_357_先进热融合全息', 'op_357_VMX无框', 'op_357_1p33_2_4倍', 'op_357_UHX全息', 'op_357_棱镜通用二倍光学', 'op_lever_灵眼6_12弹道计算狙击镜', 'op_357_灵眼3_7弹道计算狙击镜', 'op_357_M157火控光学系统', 'op_357_视点3倍', 'op_357_1p_29俄制3倍', 'op_lever_6_12神射手变倍狙击镜', 'op_357_LPVO多倍率战斗', 'op_357_3_7可调倍率狙击镜', 'op_lever_光学狙击8倍', 'op_357_侦察1_5_5可调', 'op_357_HAMR组合', 'op_357_MEO微型瞄具增高架', 'op_725_多用途战术增高架', 'op_725_微型瞄具增高架', 'op_lever_M3狙击镜', 'op_357_ACOG精准六倍镜', 'op_357_Osight微型', 'op_357_Cobra准直式', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_okp_7反射', 'op_357_XCOG突击3_5倍', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_357_AP5000反射式', 'op_357_全息二型', 'op_357_反射式', 'op_357_俄式准直二倍', 'op_357_全息', 'op_none'],
        muzzle: ['mu_tenglong_FFC双流', 'mu_xinhuo', 'mu_tenglong_先进多口径', 'mu_tenglong_M7实用', 'mu_awm_共鸣狙击枪', 'mu_awm_漩涡', 'mu_dead', 'mu_tenglong_沙暴垂直', 'mu_tenglong_堡垒水平', 'mu_poseidon', 'mu_tenglong_轻语战术', 'mu_tenglong_钛金竞赛', 'mu_tenglong_炽火抑制器', 'mu_tenglong_钢制膛口', 'mu_tenglong_实用_2', 'mu_tenglong_实用', 'mu_none'],
        barrel: ['br_g3_G3平台神射', 'br_g3_G3加强长', 'br_g3_G3飓风短', 'br_g3_G3守卫标准', 'br_none'],
        foregrip: ['fg_resonance3', 'fg_ec_stop', 'fg_tenglong_黎明三角手电握把', 'fg_tenglong_破晓垂直手电握把', 'fg_tenglong_CR棱镜阻手器', 'fg_resonance2', 'fg_bipod_grip', 'fg_k1_elite', 'fg_tenglong_X25U斜侧战斗握把', 'fg_tenglong_共振人体工程握把', 'fg_phantom_vert', 'fg_tenglong_战术垂直握把', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_tenglong_折叠握把', 'fg_vfg_knight', 'fg_tenglong_ZFSG战术握把', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_g3_侍卫稳固', 'rg_g3_G3镂空握把', 'rg_psg_1_G3', 'rg_none'],
        mag: ['ma_psg_1_PSG20发扩容', 'ma_g3_G330发', 'ma_none'],
        stock: ['st_tenglong_锚点导轨后托', 'st_tenglong_QR高性能后托', 'st_tenglong_CT增强型后托', 'st_shadow_core', 'st_bizon_MRGS镂空', 'st_ur_tactical2', 'st_bizon_影袭导轨', 'st_skeleton_sniper', 'st_bizon_枢机先进战斗', 'st_416_stable', 'st_tenglong_416轻型', 'st_tenglong_精英轻型', 'st_raid_core', 'st_pivot_stable', 'st_psg_1_G3', 'st_lightning_rail', 'st_g3_MP5伸缩', 'st_g3_MP5K折叠', 'st_g3_G3伸缩', 'st_g3_MP5尾盖', 'st_utility_light', 'st_tenglong_实用战术', 'st_tenglong_实用稳定', 'st_bizon_核心导轨', 'st_none'],
        mag_seat: ['ms_awm_灰熊全威力快拔套沙', 'ms_g3_灰熊全威力快拔套绿', 'ms_awm_灰熊全威力口径快拔套黑', 'mag_seat_none'],
        trigger: ['fn_psg_1_PSG_1精确扳机', 'trigger_none'],
        side_optic: ['op_tenglong_侧置Osight微型', 'op_tenglong_侧置战斗红点', 'op_tenglong_侧置微型红点', 'op_tenglong_侧置XRO快速反应', 'op_tenglong_侧置全景红点', 'side_optic_none'],
        rail_bipod: ['rb_util', 'rb_none'],
        right_rail: ['ur_tenglong_OLIGHTWARRIOR3S战术手电', 'rr_bizon_OLIGHTOdinS战术手电', 'rr_tenglong_OLIGHT_Baldr_Pro_R多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'rr_none'],
        defaultHidden: [],
        slotVisibilityRules: [
        {trigger:'op_spirit_612', action:'show', slots:['lens_shade']},
        {trigger:'op_spirit_37', action:'show', slots:['lens_shade']},
        {trigger:'op_m157_fire', action:'show', slots:['lens_shade']},
        {trigger:'op_lever_6_12神射手变倍狙击镜', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_lpvo', action:'show', slots:['lens_shade']},
        {trigger:'op_sniper', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_lever_光学狙击8倍', action:'show', slots:['lens_shade']},
        {trigger:'op_scout', action:'show', slots:['lens_shade']},
        {trigger:'op_riser', action:'show', slots:['optic']},
        {trigger:'op_725_多用途战术增高架', action:'show', slots:['tactical_device', 'riser_optic']},
        {trigger:'op_riser3', action:'show', slots:['riser_optic']},
        {trigger:'op_lever_M3狙击镜', action:'show', slots:['lens_shade']},
        {trigger:'br_g3_marksman', action:'show', slots:['upper_rail', 'left_patch', 'left_rail', 'right_patch', 'muzzle']},
        {trigger:'br_g3_enhanced_l', action:'show', slots:['left_patch', 'right_patch', 'left_rail', 'muzzle']},
        {trigger:'br_g3_hurricane', action:'hide', slots:['rail_bipod']},
        {trigger:'br_g3_hurricane', action:'show', slots:['left_patch', 'right_patch', 'left_rail', 'muzzle']},
        {trigger:'br_g3_guardian', action:'show', slots:['left_patch', 'right_patch', 'left_rail', 'muzzle']}
        ]
    },

    'sks': {
        optic: ['op_357_先进白热成像战斗', 'op_357_先进热融合全息', 'op_357_VMX无框', 'op_357_1p33_2_4倍', 'op_357_UHX全息', 'op_357_棱镜通用二倍光学', 'op_357_灵眼3_7弹道计算狙击镜', 'op_357_M157火控光学系统', 'op_357_视点3倍', 'op_357_1p_29俄制3倍', 'op_357_LPVO多倍率战斗', 'op_357_3_7可调倍率狙击镜', 'op_357_侦察1_5_5可调', 'op_357_HAMR组合', 'op_357_MEO微型瞄具增高架', 'op_725_多用途战术增高架', 'op_725_微型瞄具增高架', 'op_357_ACOG精准六倍镜', 'op_357_Osight微型', 'op_357_Cobra准直式', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_okp_7反射', 'op_357_XCOG突击3_5倍', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_357_AP5000反射式', 'op_357_全息二型', 'op_357_反射式', 'op_357_俄式准直二倍', 'op_357_全息', 'op_none'],
        muzzle: ['mu_tenglong_FFC双流', 'mu_xinhuo', 'mu_tenglong_先进多口径', 'mu_dtk', 'mu_tenglong_M7实用', 'mu_ak_12_AK勇火', 'mu_pbs', 'mu_dead', 'mu_tenglong_沙暴垂直', 'mu_tenglong_堡垒水平', 'mu_poseidon', 'mu_tenglong_轻语战术', 'mu_tenglong_钛金竞赛', 'mu_tenglong_炽火抑制器', 'mu_ak_12_AK实用', 'mu_tenglong_钢制膛口', 'mu_tenglong_实用_2', 'mu_flare_bell', 'mu_tenglong_实用', 'mu_none'],
        barrel: ['br_sks_SKS瞬息超长', 'br_sks_SKS截断标准', 'br_none'],
        handguard_kit: ['hg_sks_adv', 'hg_none'],
        defaultHidden: [],
        slotVisibilityRules: [
        {trigger:'hg_sks_adv', action:'show', slots:['rear_grip', 'stock', 'mag', 'foregrip', 'rail_bipod', 'upper_rail', 'left_rail', 'right_rail']},
        {trigger:'op_spirit_37', action:'show', slots:['lens_shade']},
        {trigger:'op_m157_fire', action:'show', slots:['lens_shade']},
        {trigger:'op_lpvo', action:'show', slots:['lens_shade']},
        {trigger:'op_sniper', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_scout', action:'show', slots:['lens_shade']},
        {trigger:'op_riser', action:'show', slots:['optic']},
        {trigger:'op_725_多用途战术增高架', action:'show', slots:['tactical_device', 'riser_optic']},
        {trigger:'op_riser3', action:'show', slots:['riser_optic']},
        {trigger:'rg_ak_tower', action:'show', slots:['grip_seat']}
        ]
    },

    'sr-25': {
        optic: ['op_lever_八倍先进热成像狙击镜', 'op_357_先进白热成像战斗', 'op_357_先进热融合全息', 'op_357_VMX无框', 'op_357_1p33_2_4倍', 'op_357_UHX全息', 'op_357_棱镜通用二倍光学', 'op_lever_灵眼6_12弹道计算狙击镜', 'op_357_灵眼3_7弹道计算狙击镜', 'op_357_M157火控光学系统', 'op_357_视点3倍', 'op_357_1p_29俄制3倍', 'op_lever_6_12神射手变倍狙击镜', 'op_357_LPVO多倍率战斗', 'op_357_3_7可调倍率狙击镜', 'op_lever_光学狙击8倍', 'op_357_侦察1_5_5可调', 'op_357_HAMR组合', 'op_357_MEO微型瞄具增高架', 'op_725_多用途战术增高架', 'op_725_微型瞄具增高架', 'op_lever_M3狙击镜', 'op_357_ACOG精准六倍镜', 'op_357_Osight微型', 'op_357_Cobra准直式', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_okp_7反射', 'op_357_XCOG突击3_5倍', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_357_AP5000反射式', 'op_357_全息二型', 'op_357_反射式', 'op_357_俄式准直二倍', 'op_357_全息', 'op_none'],
        muzzle: ['mu_tenglong_FFC双流', 'mu_xinhuo', 'mu_tenglong_先进多口径', 'mu_tenglong_M7实用', 'mu_awm_共鸣狙击枪', 'mu_awm_漩涡', 'mu_dead', 'mu_tenglong_沙暴垂直', 'mu_tenglong_堡垒水平', 'mu_poseidon', 'mu_tenglong_轻语战术', 'mu_tenglong_钛金竞赛', 'mu_tenglong_炽火抑制器', 'mu_tenglong_钢制膛口', 'mu_tenglong_实用_2', 'mu_tenglong_实用', 'mu_none'],
        barrel: ['br_sr_25_SR25瞬息短', 'br_sr_25_SR25追风长', 'br_sr_25_SR25新星超长', 'br_none'],
        foregrip: ['fg_resonance3', 'fg_ec_stop', 'fg_tenglong_黎明三角手电握把', 'fg_tenglong_破晓垂直手电握把', 'fg_tenglong_CR棱镜阻手器', 'fg_resonance2', 'fg_bipod_grip', 'fg_k1_elite', 'fg_tenglong_X25U斜侧战斗握把', 'fg_tenglong_共振人体工程握把', 'fg_phantom_vert', 'fg_tenglong_战术垂直握把', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_tenglong_折叠握把', 'fg_vfg_knight', 'fg_tenglong_ZFSG战术握把', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_ar57_模块化AR', 'rg_ar_tower', 'rg_ar57_侵袭', 'rg_ar57_幻影', 'rg_ar57_AR_MOE', 'rg_ar57_射手D_2', 'rg_ar57_飓风D_1', 'rg_ar57_M7稳定', 'rg_ar57_416实用', 'rg_none'],
        mag: ['ma_sr_25_SR2530发扩容', 'ma_sr_25_SR2520发', 'ma_none'],
        stock: ['st_tenglong_锚点导轨后托', 'st_tenglong_QR高性能后托', 'st_tenglong_CT增强型后托', 'st_shadow_core', 'st_ur_tactical2', 'st_skeleton_sniper', 'st_416_stable', 'st_tenglong_416轻型', 'st_tenglong_精英轻型', 'st_raid_core', 'st_pivot_stable', 'st_tenglong_M4缓冲托芯', 'st_utility_light', 'st_tenglong_实用战术', 'st_tenglong_实用稳定', 'st_none'],
        handguard: ['hg_sr_25_SR_25主宰者', 'hg_sr_25_SR25精英', 'hg_none'],
        side_optic: ['op_tenglong_侧置Osight微型', 'op_tenglong_侧置战斗红点', 'op_tenglong_侧置微型红点', 'op_tenglong_侧置XRO快速反应', 'op_tenglong_侧置全景红点', 'side_optic_none'],
        rail_bipod: ['rb_util', 'rb_none'],
        upper_rail: ['ur_tenglong_OLIGHTWARRIOR3S战术手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'ur_none'],
        left_rail: ['rr_bizon_OLIGHTOdinS战术手电', 'rr_ak_12_OLIGHTBaldrProR多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'lr_none'],
        right_rail: ['ur_tenglong_OLIGHTWARRIOR3S战术手电', 'rr_bizon_OLIGHTOdinS战术手电', 'rr_ak_12_OLIGHTBaldrProR多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'rr_none'],
        upper_patch: ['ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'up_none'],
        left_patch: ['ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'lp_none'],
        right_patch: ['ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'rp_none'],
        defaultHidden: [],
        slotVisibilityRules: [
        {trigger:'op_spirit_612', action:'show', slots:['lens_shade']},
        {trigger:'op_spirit_37', action:'show', slots:['lens_shade']},
        {trigger:'op_m157_fire', action:'show', slots:['lens_shade']},
        {trigger:'op_lever_6_12神射手变倍狙击镜', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_lpvo', action:'show', slots:['lens_shade']},
        {trigger:'op_sniper', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_lever_光学狙击8倍', action:'show', slots:['lens_shade']},
        {trigger:'op_scout', action:'show', slots:['lens_shade']},
        {trigger:'op_riser', action:'show', slots:['optic']},
        {trigger:'op_725_多用途战术增高架', action:'show', slots:['tactical_device', 'riser_optic']},
        {trigger:'op_riser3', action:'show', slots:['riser_optic']},
        {trigger:'op_lever_M3狙击镜', action:'show', slots:['lens_shade']},
        {trigger:'rg_ar_tower', action:'show', slots:['rear_grip_patch', 'grip_seat']},
        {trigger:'br_sr25_moment', action:'show', slots:['muzzle']},
        {trigger:'br_sr25_wind_l', action:'show', slots:['muzzle']},
        {trigger:'br_sr25_nova_l', action:'show', slots:['muzzle']}
        ]
    },

    'sr9': {
        optic: ['op_lever_八倍先进热成像狙击镜', 'op_357_先进白热成像战斗', 'op_357_先进热融合全息', 'op_357_VMX无框', 'op_357_1p33_2_4倍', 'op_357_UHX全息', 'op_357_棱镜通用二倍光学', 'op_lever_灵眼6_12弹道计算狙击镜', 'op_357_灵眼3_7弹道计算狙击镜', 'op_357_M157火控光学系统', 'op_357_视点3倍', 'op_357_1p_29俄制3倍', 'op_lever_6_12神射手变倍狙击镜', 'op_357_LPVO多倍率战斗', 'op_357_3_7可调倍率狙击镜', 'op_lever_光学狙击8倍', 'op_357_侦察1_5_5可调', 'op_357_HAMR组合', 'op_357_MEO微型瞄具增高架', 'op_725_多用途战术增高架', 'op_725_微型瞄具增高架', 'op_lever_M3狙击镜', 'op_357_ACOG精准六倍镜', 'op_357_Osight微型', 'op_357_Cobra准直式', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_okp_7反射', 'op_357_XCOG突击3_5倍', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_357_AP5000反射式', 'op_357_全息二型', 'op_357_反射式', 'op_357_俄式准直二倍', 'op_357_全息', 'op_none'],
        muzzle: ['mu_tenglong_FFC双流', 'mu_xinhuo', 'mu_tenglong_先进多口径', 'mu_tenglong_M7实用', 'mu_awm_共鸣狙击枪', 'mu_awm_漩涡', 'mu_dead', 'mu_tenglong_沙暴垂直', 'mu_tenglong_堡垒水平', 'mu_poseidon', 'mu_tenglong_轻语战术', 'mu_tenglong_钛金竞赛', 'mu_tenglong_炽火抑制器', 'mu_tenglong_钢制膛口', 'mu_tenglong_实用_2', 'mu_tenglong_实用', 'mu_none'],
        barrel: ['br_g3_G3平台神射', 'br_g3_G3加强长', 'br_g3_G3飓风短', 'br_g3_G3守卫标准', 'br_none'],
        foregrip: ['fg_resonance3', 'fg_ec_stop', 'fg_tenglong_黎明三角手电握把', 'fg_tenglong_破晓垂直手电握把', 'fg_tenglong_CR棱镜阻手器', 'fg_resonance2', 'fg_bipod_grip', 'fg_k1_elite', 'fg_tenglong_X25U斜侧战斗握把', 'fg_tenglong_共振人体工程握把', 'fg_phantom_vert', 'fg_tenglong_战术垂直握把', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_tenglong_折叠握把', 'fg_vfg_knight', 'fg_tenglong_ZFSG战术握把', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        mag: ['ma_sr9_PSG_20发扩容', 'ma_g3_G330发', 'ma_none'],
        mag_seat: ['ms_awm_灰熊全威力快拔套沙', 'ms_awm_灰熊全威力快拔套绿', 'ms_awm_灰熊全威力口径快拔套黑', 'mag_seat_none'],
        trigger: ['fn_psg_1_PSG_1精确扳机', 'trigger_none'],
        side_optic: ['op_tenglong_侧置Osight微型', 'op_tenglong_侧置战斗红点', 'op_tenglong_侧置微型红点', 'op_tenglong_侧置XRO快速反应', 'op_tenglong_侧置全景红点', 'side_optic_none'],
        right_rail: ['ur_tenglong_OLIGHTWARRIOR3S战术手电', 'rr_tenglong_OLIGHT_Odin_S战术手电', 'rr_ak_12_OLIGHTBaldrProR多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'rr_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'upper_rail', 'left_rail', 'rail_bipod', 'left_patch', 'right_patch', 'muzzle']
        slotVisibilityRules: [
        {trigger:'op_spirit_612', action:'show', slots:['lens_shade']},
        {trigger:'op_spirit_37', action:'show', slots:['lens_shade']},
        {trigger:'op_m157_fire', action:'show', slots:['lens_shade']},
        {trigger:'op_lever_6_12神射手变倍狙击镜', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_lpvo', action:'show', slots:['lens_shade']},
        {trigger:'op_sniper', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_lever_光学狙击8倍', action:'show', slots:['lens_shade']},
        {trigger:'op_scout', action:'show', slots:['lens_shade']},
        {trigger:'op_riser', action:'show', slots:['optic']},
        {trigger:'op_725_多用途战术增高架', action:'show', slots:['tactical_device', 'riser_optic']},
        {trigger:'op_riser3', action:'show', slots:['riser_optic']},
        {trigger:'op_lever_M3狙击镜', action:'show', slots:['lens_shade']},
        {trigger:'br_g3_marksman', action:'show', slots:['upper_rail', 'left_rail', 'rail_bipod', 'left_patch', 'right_patch', 'muzzle']},
        {trigger:'br_g3_enhanced_l', action:'show', slots:['left_rail', 'left_patch', 'rail_bipod', 'right_patch']},
        {trigger:'br_g3_hurricane', action:'show', slots:['right_patch', 'left_patch', 'left_rail']},
        {trigger:'br_g3_guardian', action:'show', slots:['left_rail', 'left_patch', 'rail_bipod', 'right_patch']}
        ]
    },

    'svch': {
        optic: ['op_357_先进白热成像战斗', 'op_357_先进热融合全息', 'op_357_VMX无框', 'op_357_1p33_2_4倍', 'op_357_UHX全息', 'op_357_棱镜通用二倍光学', 'op_lever_灵眼6_12弹道计算狙击镜', 'op_357_灵眼3_7弹道计算狙击镜', 'op_357_M157火控光学系统', 'op_357_视点3倍', 'op_357_1p_29俄制3倍', 'op_lever_6_12神射手变倍狙击镜', 'op_357_LPVO多倍率战斗', 'op_357_3_7可调倍率狙击镜', 'op_lever_光学狙击8倍', 'op_357_侦察1_5_5可调', 'op_357_HAMR组合', 'op_725_多用途战术增高架', 'op_725_微型瞄具增高架', 'op_lever_M3狙击镜', 'op_357_ACOG精准六倍镜', 'op_357_Osight微型', 'op_357_Cobra准直式', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_okp_7反射', 'op_357_XCOG突击3_5倍', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_357_AP5000反射式', 'op_357_全息二型', 'op_357_反射式', 'op_357_俄式准直二倍', 'op_357_全息', 'op_none'],
        muzzle: ['mu_web_titanium', 'mu_tenglong_FFC双流', 'mu_xinhuo', 'mu_tenglong_先进多口径', 'mu_tenglong_M7实用', 'mu_awm_共鸣狙击枪', 'mu_awm_漩涡', 'mu_dead', 'mu_tenglong_沙暴垂直', 'mu_tenglong_堡垒水平', 'mu_poseidon', 'mu_tenglong_轻语战术', 'mu_tenglong_钛金竞赛', 'mu_tenglong_炽火抑制器', 'mu_tenglong_钢制膛口', 'mu_tenglong_实用_2', 'mu_tenglong_实用', 'mu_none'],
        barrel: ['br_svch_SVCH碳纤长', 'br_svch_SVCH精工短', 'br_none'],
        foregrip: ['fg_resonance3', 'fg_ec_stop', 'fg_tenglong_黎明三角手电握把', 'fg_tenglong_破晓垂直手电握把', 'fg_tenglong_CR棱镜阻手器', 'fg_resonance2', 'fg_bipod_grip', 'fg_k1_elite', 'fg_tenglong_X25U斜侧战斗握把', 'fg_tenglong_共振人体工程握把', 'fg_phantom_vert', 'fg_tenglong_战术垂直握把', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_tenglong_折叠握把', 'fg_vfg_knight', 'fg_tenglong_ZFSG战术握把', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_svch_SVCH星象稳固握把', 'rg_svch_SVCH风影轻质握把', 'rg_none'],
        mag: ['ma_svch_SVCH凌风并联', 'ma_svch_SVCH扩容', 'ma_none'],
        stock: ['st_svch_SVCH支点后托', 'st_tenglong_锚点导轨后托', 'st_tenglong_QR高性能后托', 'st_tenglong_CT增强型后托', 'st_shadow_core', 'st_bizon_MRGS镂空', 'st_ur_tactical2', 'st_bizon_影袭导轨', 'st_skeleton_sniper', 'st_416_stable', 'st_tenglong_416轻型', 'st_tenglong_精英轻型', 'st_raid_core', 'st_pivot_stable', 'st_lightning_rail', 'st_utility_light', 'st_tenglong_实用战术', 'st_none'],
        handguard: ['hg_svch_SVCH突袭短', 'hg_svch_SVCH一体式', 'hg_none'],
        mag_seat: ['ms_awm_灰熊全威力快拔套沙', 'ms_m7_灰熊全威力快拔套绿', 'ms_awm_灰熊全威力口径快拔套黑', 'mag_seat_none'],
        side_optic: ['op_tenglong_侧置Osight微型', 'op_tenglong_侧置战斗红点', 'op_tenglong_侧置微型红点', 'op_tenglong_侧置XRO快速反应', 'op_tenglong_侧置全景红点', 'side_optic_none'],
        upper_rail: ['rr_bizon_OLIGHTOdinS战术手电', 'rr_tenglong_OLIGHT_Baldr_Pro_R多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'ur_none'],
        left_rail: ['rr_bizon_OLIGHTOdinS战术手电', 'rr_tenglong_OLIGHT_Baldr_Pro_R多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'lr_none'],
        right_rail: ['rr_bizon_OLIGHTOdinS战术手电', 'rr_tenglong_OLIGHT_Baldr_Pro_R多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'rr_none'],
        upper_patch: ['ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'up_none'],
        left_patch: ['ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'lp_none'],
        right_patch: ['ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'rp_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'tactical_device', 'riser_optic']
        slotVisibilityRules: [
        {trigger:'hg_svch_int', action:'show', slots:['optic']},
        {trigger:'op_spirit_612', action:'show', slots:['lens_shade']},
        {trigger:'op_spirit_37', action:'show', slots:['lens_shade']},
        {trigger:'op_m157_fire', action:'show', slots:['lens_shade']},
        {trigger:'op_lever_6_12神射手变倍狙击镜', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_lpvo', action:'show', slots:['lens_shade']},
        {trigger:'op_sniper', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_lever_光学狙击8倍', action:'show', slots:['lens_shade']},
        {trigger:'op_scout', action:'show', slots:['lens_shade']},
        {trigger:'op_725_多用途战术增高架', action:'show', slots:['tactical_device', 'riser_optic']},
        {trigger:'op_riser3', action:'show', slots:['riser_optic']},
        {trigger:'op_lever_M3狙击镜', action:'show', slots:['lens_shade']},
        {trigger:'br_svch_carbon_l', action:'show', slots:['bolt_carrier']},
        {trigger:'ma_svch_twin', action:'hide', slots:['mag_seat']}
        ]
    },

    'svd': {
        optic: ['op_lever_八倍先进热成像狙击镜', 'op_357_先进白热成像战斗', 'op_357_先进热融合全息', 'op_357_VMX无框', 'op_357_1p33_2_4倍', 'op_357_UHX全息', 'op_357_棱镜通用二倍光学', 'op_lever_灵眼6_12弹道计算狙击镜', 'op_357_灵眼3_7弹道计算狙击镜', 'op_357_M157火控光学系统', 'op_357_视点3倍', 'op_357_1p_29俄制3倍', 'op_lever_6_12神射手变倍狙击镜', 'op_357_LPVO多倍率战斗', 'op_357_3_7可调倍率狙击镜', 'op_lever_光学狙击8倍', 'op_357_侦察1_5_5可调', 'op_357_HAMR组合', 'op_357_MEO微型瞄具增高架', 'op_725_多用途战术增高架', 'op_725_微型瞄具增高架', 'op_lever_M3狙击镜', 'op_357_ACOG精准六倍镜', 'op_357_Osight微型', 'op_357_Cobra准直式', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_okp_7反射', 'op_357_XCOG突击3_5倍', 'op_akm_PSO战斗2_5倍', 'op_357_XRO快速反应', 'op_svd_ARU快速反应', 'op_357_全景红点', 'op_357_AP5000反射式', 'op_akm_PSO狙击8倍', 'op_357_全息二型', 'op_357_反射式', 'op_357_俄式准直二倍', 'op_357_全息', 'op_none'],
        muzzle: ['mu_tenglong_FFC双流', 'mu_xinhuo', 'mu_tenglong_先进多口径', 'mu_tenglong_M7实用', 'mu_awm_共鸣狙击枪', 'mu_awm_漩涡', 'mu_dead', 'mu_tenglong_沙暴垂直', 'mu_tenglong_堡垒水平', 'mu_poseidon', 'mu_tenglong_轻语战术', 'mu_tenglong_钛金竞赛', 'mu_tenglong_炽火抑制器', 'mu_tenglong_钢制膛口', 'mu_tenglong_实用_2', 'mu_tenglong_实用', 'mu_none'],
        barrel: ['br_svd_SVD黑刺超长', 'br_svd_实用长', 'br_none'],
        rear_grip: ['rg_svd_聚合物一体', 'rg_svd_SVD握把转接', 'rg_none'],
        mag: ['ma_svd_SVD_20发', 'ma_none'],
        handguard: ['hg_svd_SVD导轨', 'hg_svd_聚合物', 'hg_none'],
        mag_seat: ['ms_awm_灰熊全威力快拔套沙', 'ms_g3_灰熊全威力快拔套绿', 'ms_awm_灰熊全威力口径快拔套黑', 'mag_seat_none'],
        bolt: ['bolt_bizon_泽宁特拉机柄帽', 'bolt_none'],
        side_optic: ['op_tenglong_侧置Osight微型', 'op_tenglong_侧置战斗红点', 'op_tenglong_侧置微型红点', 'op_tenglong_侧置XRO快速反应', 'op_tenglong_侧置全景红点', 'side_optic_none'],
        defaultHidden: [],
        slotVisibilityRules: [
        {trigger:'op_spirit_612', action:'show', slots:['lens_shade']},
        {trigger:'op_spirit_37', action:'show', slots:['lens_shade']},
        {trigger:'op_m157_fire', action:'show', slots:['lens_shade']},
        {trigger:'op_lever_6_12神射手变倍狙击镜', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_lpvo', action:'show', slots:['lens_shade']},
        {trigger:'op_sniper', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_lever_光学狙击8倍', action:'show', slots:['lens_shade']},
        {trigger:'op_scout', action:'show', slots:['lens_shade']},
        {trigger:'op_riser', action:'show', slots:['optic']},
        {trigger:'op_725_多用途战术增高架', action:'show', slots:['tactical_device', 'riser_optic']},
        {trigger:'op_riser3', action:'show', slots:['riser_optic']},
        {trigger:'op_lever_M3狙击镜', action:'show', slots:['lens_shade']},
        {trigger:'hg_svd_SVD导轨', action:'show', slots:['rail_bipod', 'upper_rail', 'foregrip', 'upper_patch', 'left_rail', 'right_rail']},
        {trigger:'hg_svd_poly', action:'show', slots:['foregrip', 'right_rail', 'left_rail']},
        {trigger:'hg_svd_grip_adapter', action:'show', slots:['stock', 'rear_grip_2']},
        {trigger:'rg_ak_tower', action:'show', slots:['grip_seat']}
        ]
    },

    'vss': {
        optic: ['op_lever_八倍先进热成像狙击镜', 'op_357_先进白热成像战斗', 'op_357_先进热融合全息', 'op_357_VMX无框', 'op_357_1p33_2_4倍', 'op_357_UHX全息', 'op_357_棱镜通用二倍光学', 'op_lever_灵眼6_12弹道计算狙击镜', 'op_357_灵眼3_7弹道计算狙击镜', 'op_357_M157火控光学系统', 'op_357_视点3倍', 'op_357_1p_29俄制3倍', 'op_lever_6_12神射手变倍狙击镜', 'op_357_LPVO多倍率战斗', 'op_357_3_7可调倍率狙击镜', 'op_lever_光学狙击8倍', 'op_357_侦察1_5_5可调', 'op_357_HAMR组合', 'op_357_MEO微型瞄具增高架', 'op_725_多用途战术增高架', 'op_725_微型瞄具增高架', 'op_lever_M3狙击镜', 'op_357_ACOG精准六倍镜', 'op_357_Osight微型', 'op_357_Cobra准直式', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_okp_7反射', 'op_357_XCOG突击3_5倍', 'op_akm_PSO战斗2_5倍', 'op_357_XRO快速反应', 'op_svd_ARU快速反应', 'op_357_全景红点', 'op_357_AP5000反射式', 'op_akm_PSO狙击8倍', 'op_357_全息二型', 'op_357_反射式', 'op_357_俄式准直二倍', 'op_357_全息', 'op_none'],
        barrel: ['br_asval_VSS海啸长', 'br_none'],
        foregrip: ['fg_resonance3', 'fg_ec_stop', 'fg_tenglong_黎明三角手电握把', 'fg_tenglong_破晓垂直手电握把', 'fg_tenglong_CR棱镜阻手器', 'fg_resonance2', 'fg_bipod_grip', 'fg_k1_elite', 'fg_tenglong_X25U斜侧战斗握把', 'fg_tenglong_共振人体工程握把', 'fg_phantom_vert', 'fg_tenglong_战术垂直握把', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_tenglong_折叠握把', 'fg_vfg_knight', 'fg_tenglong_ZFSG战术握把', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        mag: ['ma_asval_VSS_45发', 'ma_asval_VSS30发', 'ma_none'],
        stock: ['st_asval_VSS精英一体', 'st_none'],
        mag_seat: ['ms_akm_郊狼中间威力快拔套沙', 'ms_akm_郊狼中间威力快拔套绿', 'ms_akm_郊狼中间威力口径快拔套黑', 'mag_seat_none'],
        bolt: ['bolt_bizon_泽宁特拉机柄帽', 'bolt_none'],
        side_optic: ['op_tenglong_侧置Osight微型', 'op_tenglong_侧置战斗红点', 'op_tenglong_侧置微型红点', 'op_tenglong_侧置XRO快速反应', 'op_tenglong_侧置全景红点', 'side_optic_none'],
        left_rail: ['rr_tenglong_OLIGHT_Odin_S战术手电', 'rr_tenglong_OLIGHT_Baldr_Pro_R多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'lr_none'],
        right_rail: ['ur_tenglong_OLIGHTWARRIOR3S战术手电', 'rr_tenglong_OLIGHT_Odin_S战术手电', 'rr_tenglong_OLIGHT_Baldr_Pro_R多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'rr_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device']
        slotVisibilityRules: [
        {trigger:'op_spirit_612', action:'show', slots:['lens_shade']},
        {trigger:'op_spirit_37', action:'show', slots:['lens_shade']},
        {trigger:'op_m157_fire', action:'show', slots:['lens_shade']},
        {trigger:'op_lever_6_12神射手变倍狙击镜', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_lpvo', action:'show', slots:['lens_shade']},
        {trigger:'op_sniper', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_lever_光学狙击8倍', action:'show', slots:['lens_shade']},
        {trigger:'op_scout', action:'show', slots:['lens_shade']},
        {trigger:'op_riser', action:'show', slots:['optic']},
        {trigger:'op_725_多用途战术增高架', action:'show', slots:['tactical_device', 'riser_optic']},
        {trigger:'op_riser3', action:'show', slots:['riser_optic']},
        {trigger:'op_lever_M3狙击镜', action:'show', slots:['lens_shade']},
        {trigger:'br_vss_tsunami_l', action:'show', slots:['upper_rail', 'rail_bipod']}
        ]
    },

    // ==================== 霰弹枪 ====================

    '725': {
        optic: ['op_357_先进白热成像战斗', 'op_357_先进热融合全息', 'op_357_VMX无框', 'op_357_1p33_2_4倍', 'op_357_UHX全息', 'op_357_棱镜通用二倍光学', 'op_357_灵眼3_7弹道计算狙击镜', 'op_357_M157火控光学系统', 'op_357_视点3倍', 'op_357_1p_29俄制3倍', 'op_357_LPVO多倍率战斗', 'op_357_3_7可调倍率狙击镜', 'op_357_侦察1_5_5可调', 'op_357_HAMR组合', 'op_357_MEO微型瞄具增高架', 'op_725_多用途战术增高架', 'op_725_微型瞄具增高架', 'op_357_ACOG精准六倍镜', 'op_357_Osight微型', 'op_357_Cobra准直式', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_okp_7反射', 'op_357_XCOG突击3_5倍', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_357_AP5000反射式', 'op_357_全息二型', 'op_357_反射式', 'op_357_俄式准直二倍', 'op_357_全息', 'op_none'],
        muzzle: ['mu_725_双管霰弹枪牛仔', 'mu_none'],
        barrel: ['br_725_双管霰弹枪鹰隼长', 'br_725_双管霰弹枪拦截者截短', 'br_none'],
        stock: ['st_725_双管霰弹枪守望者', 'st_725_双管霰弹枪州长短', 'st_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device']
        slotVisibilityRules: [
        {trigger:'op_spirit_37', action:'show', slots:['lens_shade']},
        {trigger:'op_m157_fire', action:'show', slots:['lens_shade']},
        {trigger:'op_lpvo', action:'show', slots:['lens_shade']},
        {trigger:'op_sniper', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_scout', action:'show', slots:['lens_shade']},
        {trigger:'op_riser', action:'show', slots:['optic']},
        {trigger:'op_725_多用途战术增高架', action:'show', slots:['tactical_device', 'riser_optic']},
        {trigger:'op_riser3', action:'show', slots:['riser_optic']},
        {trigger:'br_725_falcon_l', action:'show', slots:['foregrip', 'left_rail', 'right_rail', 'upper_patch', 'left_patch', 'right_patch']}
        ]
    },

    'fs-12': {
        optic: ['op_357_先进白热成像战斗', 'op_357_先进热融合全息', 'op_357_VMX无框', 'op_357_UHX全息', 'op_357_棱镜通用二倍光学', 'op_357_视点3倍', 'op_357_1p_29俄制3倍', 'op_357_侦察1_5_5可调', 'op_357_HAMR组合', 'op_357_MEO微型瞄具增高架', 'op_725_多用途战术增高架', 'op_725_微型瞄具增高架', 'op_357_ACOG精准六倍镜', 'op_357_Osight微型', 'op_357_Cobra准直式', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_okp_7反射', 'op_357_XCOG突击3_5倍', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_357_AP5000反射式', 'op_357_全息二型', 'op_357_反射式', 'op_357_俄式准直二倍', 'op_357_全息', 'op_none'],
        muzzle: ['mu_fs_12_霰弹枪回声', 'mu_fs_12_霰弹枪涡流收束器', 'mu_fs_12_霰弹枪巨炮', 'mu_fs_12_霰弹枪囚笼', 'mu_fs_12_霰弹枪精密', 'mu_fs_12_实用霰弹收束器', 'mu_none'],
        barrel: ['br_fs_12_FS_12剑冢长', 'br_none'],
        rear_grip: ['rg_ar_tower', 'rg_ar57_侵袭', 'rg_ar57_幻影', 'rg_ar57_AR_MOE', 'rg_ar57_射手D_2', 'rg_ar57_飓风D_1', 'rg_ar57_M7稳定', 'rg_ar57_416实用', 'rg_none'],
        mag: ['ma_fs_12_FS_12扩容', 'ma_fs_12_FS_12加长', 'ma_fs_12_FS_12短', 'ma_none'],
        stock: ['st_tenglong_锚点导轨后托', 'st_tenglong_QR高性能后托', 'st_tenglong_CT增强型后托', 'st_shadow_core', 'st_bizon_MRGS镂空', 'st_ur_tactical2', 'st_bizon_影袭导轨', 'st_skeleton_sniper', 'st_416_stable', 'st_tenglong_416轻型', 'st_tenglong_精英轻型', 'st_raid_core', 'st_lightning_rail', 'st_utility_light', 'st_tenglong_实用战术', 'st_tenglong_实用稳定', 'st_bizon_核心导轨', 'st_none'],
        handguard: ['hg_fs_12_FS_12人体工学', 'hg_none'],
        side_optic: ['op_tenglong_侧置Osight微型', 'op_tenglong_侧置战斗红点', 'op_tenglong_侧置微型红点', 'op_tenglong_侧置XRO快速反应', 'op_tenglong_侧置全景红点', 'side_optic_none'],
        defaultHidden: ['lens_shade', 'riser_optic', 'tactical_device', 'grip_seat']
        slotVisibilityRules: [
        {trigger:'op_scout', action:'show', slots:['lens_shade']},
        {trigger:'op_riser', action:'show', slots:['optic']},
        {trigger:'op_725_多用途战术增高架', action:'show', slots:['tactical_device', 'riser_optic']},
        {trigger:'op_riser3', action:'show', slots:['riser_optic']},
        {trigger:'rg_ar_tower', action:'show', slots:['grip_seat']}
        ]
    },

    'm1014': {
        optic: ['op_357_先进白热成像战斗', 'op_357_先进热融合全息', 'op_357_VMX无框', 'op_357_1p33_2_4倍', 'op_357_UHX全息', 'op_357_棱镜通用二倍光学', 'op_357_灵眼3_7弹道计算狙击镜', 'op_357_M157火控光学系统', 'op_357_视点3倍', 'op_357_1p_29俄制3倍', 'op_357_LPVO多倍率战斗', 'op_357_3_7可调倍率狙击镜', 'op_357_侦察1_5_5可调', 'op_357_HAMR组合', 'op_357_MEO微型瞄具增高架', 'op_725_多用途战术增高架', 'op_725_微型瞄具增高架', 'op_357_ACOG精准六倍镜', 'op_357_Osight微型', 'op_357_Cobra准直式', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_okp_7反射', 'op_357_XCOG突击3_5倍', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_357_AP5000反射式', 'op_357_全息二型', 'op_357_反射式', 'op_357_俄式准直二倍', 'op_357_全息', 'op_none'],
        muzzle: ['mu_fs_12_霰弹枪回声', 'mu_fs_12_霰弹枪涡流收束器', 'mu_fs_12_霰弹枪巨炮', 'mu_fs_12_霰弹枪囚笼', 'mu_fs_12_霰弹枪精密', 'mu_fs_12_实用霰弹收束器', 'mu_none'],
        barrel: ['br_m1014_M1014断点', 'br_none'],
        foregrip: ['fg_ec_stop', 'fg_tenglong_黎明三角手电握把', 'fg_tenglong_破晓垂直手电握把', 'fg_tenglong_CR棱镜阻手器', 'fg_bipod_grip', 'fg_k1_elite', 'fg_tenglong_X25U斜侧战斗握把', 'fg_phantom_vert', 'fg_tenglong_战术垂直握把', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_tenglong_折叠握把', 'fg_vfg_knight', 'fg_tenglong_ZFSG战术握把', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        mag: ['ma_m1014_霰弹枪快速装填器', 'ma_none'],
        stock: ['st_tenglong_锚点导轨后托', 'st_tenglong_QR高性能后托', 'st_tenglong_CT增强型后托', 'st_shadow_core', 'st_ur_tactical2', 'st_skeleton_sniper', 'st_m1014_1014固定', 'st_m1014_1014伸缩托折叠', 'st_m1014_1014伸缩托展开', 'st_416_stable', 'st_tenglong_416轻型', 'st_tenglong_精英轻型', 'st_raid_core', 'st_pivot_stable', 'st_utility_light', 'st_tenglong_实用战术', 'st_tenglong_实用稳定', 'st_none'],
        handguard: ['hg_m1014_M1014导轨', 'hg_none'],
        side_optic: ['op_tenglong_侧置Osight微型', 'op_tenglong_侧置战斗红点', 'op_tenglong_侧置微型红点', 'op_tenglong_侧置XRO快速反应', 'op_tenglong_侧置全景红点', 'side_optic_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'right_rail', 'left_rail', 'cheek_pad']
        slotVisibilityRules: [
        {trigger:'op_spirit_37', action:'show', slots:['lens_shade']},
        {trigger:'op_m157_fire', action:'show', slots:['lens_shade']},
        {trigger:'op_lpvo', action:'show', slots:['lens_shade']},
        {trigger:'op_sniper', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_scout', action:'show', slots:['lens_shade']},
        {trigger:'op_riser', action:'show', slots:['optic']},
        {trigger:'op_725_多用途战术增高架', action:'show', slots:['tactical_device', 'riser_optic']},
        {trigger:'op_riser3', action:'show', slots:['riser_optic']},
        {trigger:'hg_m1014_M1014导轨', action:'show', slots:['right_rail', 'left_rail']},
        {trigger:'st_m1014_1014固定', action:'show', slots:['cheek_pad']}
        ]
    },

    'm870': {
        optic: ['op_357_先进白热成像战斗', 'op_357_先进热融合全息', 'op_357_VMX无框', 'op_357_1p33_2_4倍', 'op_357_UHX全息', 'op_357_棱镜通用二倍光学', 'op_357_灵眼3_7弹道计算狙击镜', 'op_357_M157火控光学系统', 'op_357_视点3倍', 'op_357_1p_29俄制3倍', 'op_357_LPVO多倍率战斗', 'op_357_3_7可调倍率狙击镜', 'op_357_侦察1_5_5可调', 'op_357_HAMR组合', 'op_357_MEO微型瞄具增高架', 'op_725_多用途战术增高架', 'op_725_微型瞄具增高架', 'op_357_ACOG精准六倍镜', 'op_357_Osight微型', 'op_357_Cobra准直式', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_okp_7反射', 'op_357_XCOG突击3_5倍', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_357_AP5000反射式', 'op_357_全息二型', 'op_357_反射式', 'op_357_俄式准直二倍', 'op_357_全息', 'op_none'],
        muzzle: ['mu_fs_12_霰弹枪回声', 'mu_fs_12_霰弹枪涡流收束器', 'mu_fs_12_霰弹枪巨炮', 'mu_fs_12_霰弹枪囚笼', 'mu_fs_12_霰弹枪精密', 'mu_fs_12_实用霰弹收束器', 'mu_none'],
        barrel: ['br_m870_M870扩容', 'br_none'],
        mag: ['ma_m1014_霰弹枪快速装填器', 'ma_none'],
        stock: ['st_tenglong_QR高性能后托', 'st_tenglong_CT增强型后托', 'st_shadow_core', 'st_ur_tactical2', 'st_skeleton_sniper', 'st_416_stable', 'st_tenglong_416轻型', 'st_tenglong_精英轻型', 'st_raid_core', 'st_pivot_stable', 'st_utility_light', 'st_tenglong_实用战术', 'st_tenglong_实用稳定', 'st_none'],
        handguard: ['hg_m870_M870导轨', 'hg_none'],
        side_optic: ['op_tenglong_侧置Osight微型', 'op_tenglong_侧置战斗红点', 'op_tenglong_侧置微型红点', 'op_tenglong_侧置XRO快速反应', 'op_tenglong_侧置全景红点', 'side_optic_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'foregrip', 'left_rail', 'right_rail']
        slotVisibilityRules: [
        {trigger:'op_spirit_37', action:'show', slots:['lens_shade']},
        {trigger:'op_m157_fire', action:'show', slots:['lens_shade']},
        {trigger:'op_lpvo', action:'show', slots:['lens_shade']},
        {trigger:'op_sniper', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_scout', action:'show', slots:['lens_shade']},
        {trigger:'op_riser', action:'show', slots:['optic']},
        {trigger:'op_725_多用途战术增高架', action:'show', slots:['tactical_device', 'riser_optic']},
        {trigger:'op_riser3', action:'show', slots:['riser_optic']},
        {trigger:'hg_m870_M870导轨', action:'show', slots:['foregrip', 'left_rail', 'right_rail']}
        ]
    },

    's12k': {
        optic: ['op_357_先进白热成像战斗', 'op_357_先进热融合全息', 'op_357_VMX无框', 'op_357_1p33_2_4倍', 'op_357_UHX全息', 'op_357_棱镜通用二倍光学', 'op_357_灵眼3_7弹道计算狙击镜', 'op_357_M157火控光学系统', 'op_357_视点3倍', 'op_357_1p_29俄制3倍', 'op_357_LPVO多倍率战斗', 'op_357_3_7可调倍率狙击镜', 'op_357_侦察1_5_5可调', 'op_357_HAMR组合', 'op_357_MEO微型瞄具增高架', 'op_725_多用途战术增高架', 'op_725_微型瞄具增高架', 'op_357_ACOG精准六倍镜', 'op_357_Osight微型', 'op_357_Cobra准直式', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_okp_7反射', 'op_357_XCOG突击3_5倍', 'op_akm_PSO战斗2_5倍', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_357_AP5000反射式', 'op_akm_PSO狙击8倍', 'op_357_全息二型', 'op_357_反射式', 'op_357_俄式准直二倍', 'op_357_全息', 'op_none'],
        muzzle: ['mu_fs_12_霰弹枪回声', 'mu_fs_12_霰弹枪涡流收束器', 'mu_fs_12_霰弹枪巨炮', 'mu_fs_12_霰弹枪囚笼', 'mu_fs_12_霰弹枪精密', 'mu_fs_12_实用霰弹收束器', 'mu_none'],
        barrel: ['br_s12k_S12K破阵长', 'br_s12k_S12K防御者短', 'br_s12k_S12K实用长', 'br_s12k_S12K实用短', 'br_none'],
        foregrip: ['fg_resonance3', 'fg_ec_stop', 'fg_tenglong_黎明三角手电握把', 'fg_tenglong_破晓垂直手电握把', 'fg_tenglong_CR棱镜阻手器', 'fg_resonance2', 'fg_bipod_grip', 'fg_k1_elite', 'fg_tenglong_X25U斜侧战斗握把', 'fg_tenglong_共振人体工程握把', 'fg_phantom_vert', 'fg_tenglong_战术垂直握把', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_tenglong_折叠握把', 'fg_vfg_knight', 'fg_tenglong_ZFSG战术握把', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_bizon_天蝎座', 'rg_bizon_RK3', 'rg_bizon_AK镂空握把', 'rg_ak_tower', 'rg_bizon_稳定AK', 'rg_bizon_射手AK', 'rg_none'],
        mag: ['ma_s12k_S12K扩容24发', 'ma_s12k_S12K扩容10发', 'ma_none'],
        stock: ['st_tenglong_锚点导轨后托', 'st_tenglong_QR高性能后托', 'st_tenglong_CT增强型后托', 'st_shadow_core', 'st_bizon_MRGS镂空', 'st_bizon_PT3死士', 'st_bizon_PT1特种', 'st_ur_tactical2', 'st_bizon_影袭导轨', 'st_skeleton_sniper', 'st_bizon_AK19', 'st_bizon_枢机先进战斗', 'st_s12k_S12K撞火', 'st_416_stable', 'st_tenglong_416轻型', 'st_tenglong_精英轻型', 'st_raid_core', 'st_pivot_stable', 'st_lightning_rail', 'st_bizon_AK枪托尾盖', 'st_bizon_AK骨架', 'st_warrior_AK折叠', 'st_utility_light', 'st_tenglong_实用战术', 'st_tenglong_实用稳定', 'st_bizon_核心导轨', 'st_none'],
        stock_pad: ['sp_bizon_AK枪托缓冲垫', 'stock_pad_none'],
        bolt: ['bolt_bizon_泽宁特拉机柄帽', 'bolt_none'],
        side_optic: ['op_tenglong_侧置Osight微型', 'op_tenglong_侧置战斗红点', 'op_tenglong_侧置微型红点', 'op_tenglong_侧置XRO快速反应', 'op_tenglong_侧置全景红点', 'side_optic_none'],
        right_rail: ['ur_tenglong_OLIGHTWARRIOR3S战术手电', 'rr_tenglong_OLIGHT_Odin_S战术手电', 'rr_tenglong_OLIGHT_Baldr_Pro_R多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'rr_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'grip_seat']
        slotVisibilityRules: [
        {trigger:'op_spirit_37', action:'show', slots:['lens_shade']},
        {trigger:'op_m157_fire', action:'show', slots:['lens_shade']},
        {trigger:'op_lpvo', action:'show', slots:['lens_shade']},
        {trigger:'op_sniper', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_scout', action:'show', slots:['lens_shade']},
        {trigger:'op_riser', action:'show', slots:['optic']},
        {trigger:'op_725_多用途战术增高架', action:'show', slots:['tactical_device', 'riser_optic']},
        {trigger:'op_riser3', action:'show', slots:['riser_optic']},
        {trigger:'br_s12k_breaker_l', action:'show', slots:['left_rail', 'left_patch', 'rail_bipod', 'right_patch']},
        {trigger:'br_s12k_defender', action:'show', slots:['left_rail']},
        {trigger:'br_s12k_prac_l', action:'show', slots:['upper_rail', 'left_rail', 'rail_bipod', 'right_patch', 'left_patch']},
        {trigger:'br_s12k_prac_short', action:'show', slots:['left_patch', 'upper_rail', 'left_rail', 'right_patch']},
        {trigger:'st_tenglong_锚点导轨后托', action:'hide', slots:['stock_pad']},
        {trigger:'st_tenglong_QR高性能后托', action:'hide', slots:['stock_pad']},
        {trigger:'st_tenglong_CT增强型后托', action:'hide', slots:['stock_pad']},
        {trigger:'st_shadow_core', action:'hide', slots:['stock_pad']},
        {trigger:'st_bizon_MRGS镂空', action:'hide', slots:['stock_pad']},
        {trigger:'st_bizon_PT3死士', action:'hide', slots:['stock_pad']},
        {trigger:'st_bizon_PT1特种', action:'hide', slots:['stock_pad']},
        {trigger:'st_ur_tactical2', action:'hide', slots:['stock_pad']},
        {trigger:'st_bizon_影袭导轨', action:'hide', slots:['stock_pad']},
        {trigger:'st_skeleton_sniper', action:'hide', slots:['stock_pad']},
        {trigger:'st_ak19', action:'hide', slots:['stock_pad']},
        {trigger:'st_bizon_枢机先进战斗', action:'hide', slots:['stock_pad']},
        {trigger:'st_s12k_bump', action:'hide', slots:['stock_pad', 'rear_grip']},
        {trigger:'st_416_stable', action:'hide', slots:['stock_pad']},
        {trigger:'st_tenglong_416轻型', action:'hide', slots:['stock_pad']},
        {trigger:'st_tenglong_精英轻型', action:'hide', slots:['stock_pad']},
        {trigger:'st_raid_core', action:'hide', slots:['stock_pad']},
        {trigger:'st_pivot_stable', action:'hide', slots:['stock_pad']},
        {trigger:'st_lightning_rail', action:'hide', slots:['stock_pad']},
        {trigger:'st_bizon_AK枪托尾盖', action:'hide', slots:['stock_pad']},
        {trigger:'st_bizon_AK骨架', action:'hide', slots:['stock_pad']},
        {trigger:'st_utility_light', action:'hide', slots:['stock_pad']},
        {trigger:'st_tenglong_实用战术', action:'hide', slots:['stock_pad']},
        {trigger:'st_tenglong_实用稳定', action:'hide', slots:['stock_pad']},
        {trigger:'st_bizon_核心导轨', action:'hide', slots:['stock_pad']},
        {trigger:'rg_ak_tower', action:'show', slots:['grip_seat']}
        ]
    },

    // ==================== 机枪 ====================

    'm249': {
        optic: ['op_357_先进白热成像战斗', 'op_357_先进热融合全息', 'op_357_VMX无框', 'op_357_1p33_2_4倍', 'op_357_UHX全息', 'op_357_棱镜通用二倍光学', 'op_357_灵眼3_7弹道计算狙击镜', 'op_357_M157火控光学系统', 'op_357_视点3倍', 'op_357_1p_29俄制3倍', 'op_357_LPVO多倍率战斗', 'op_357_3_7可调倍率狙击镜', 'op_357_侦察1_5_5可调', 'op_357_HAMR组合', 'op_357_MEO微型瞄具增高架', 'op_725_多用途战术增高架', 'op_725_微型瞄具增高架', 'op_357_ACOG精准六倍镜', 'op_357_Osight微型', 'op_357_Cobra准直式', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_okp_7反射', 'op_357_XCOG突击3_5倍', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_357_AP5000反射式', 'op_357_全息二型', 'op_357_反射式', 'op_357_俄式准直二倍', 'op_357_全息', 'op_none'],
        muzzle: ['mu_web_titanium', 'mu_tenglong_FFC双流', 'mu_xinhuo', 'mu_tenglong_先进多口径', 'mu_tenglong_M7实用', 'mu_dead', 'mu_tenglong_沙暴垂直', 'mu_tenglong_堡垒水平', 'mu_poseidon', 'mu_tenglong_轻语战术', 'mu_tenglong_钛金竞赛', 'mu_tenglong_炽火抑制器', 'mu_tenglong_钢制膛口', 'mu_tenglong_实用_2', 'mu_ar57_鸟笼', 'mu_tenglong_实用', 'mu_none'],
        barrel: ['br_m249_HVK链锯套件', 'br_m249_M249海湾短', 'br_m249_M249犀牛长', 'br_none'],
        foregrip: ['fg_resonance3', 'fg_ec_stop', 'fg_tenglong_黎明三角手电握把', 'fg_tenglong_破晓垂直手电握把', 'fg_tenglong_CR棱镜阻手器', 'fg_resonance2', 'fg_bipod_grip', 'fg_k1_elite', 'fg_tenglong_X25U斜侧战斗握把', 'fg_tenglong_共振人体工程握把', 'fg_phantom_vert', 'fg_tenglong_战术垂直握把', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_tenglong_折叠握把', 'fg_vfg_knight', 'fg_tenglong_ZFSG战术握把', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_m249_M249蝎尾握把', 'rg_none'],
        mag: ['ma_car_15_AR60发扩容', 'ma_car_15_M4扩容45发', 'ma_m249_AR聚合物30发', 'ma_none'],
        stock: ['st_tenglong_锚点导轨后托', 'st_tenglong_QR高性能后托', 'st_tenglong_CT增强型后托', 'st_shadow_core', 'st_bizon_MRGS镂空', 'st_m249_M249精英骨架', 'st_ur_tactical2', 'st_bizon_影袭导轨', 'st_skeleton_sniper', 'st_416_stable', 'st_tenglong_416轻型', 'st_tenglong_精英轻型', 'st_raid_core', 'st_pivot_stable', 'st_lightning_rail', 'st_m249_M249尾盖', 'st_utility_light', 'st_tenglong_实用战术', 'st_tenglong_实用稳定', 'st_bizon_核心导轨', 'st_none'],
        handguard: ['hg_m249_M249', 'hg_m249_M249军规导轨', 'hg_m249_M249导轨', 'hg_none'],
        side_optic: ['op_tenglong_侧置Osight微型', 'op_tenglong_侧置战斗红点', 'op_tenglong_侧置微型红点', 'op_tenglong_侧置XRO快速反应', 'op_tenglong_侧置全景红点', 'side_optic_none'],
        rail_bipod: ['rb_util', 'rb_none'],
        left_rail: ['rr_bizon_OLIGHTOdinS战术手电', 'rr_tenglong_OLIGHT_Baldr_Pro_R多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'lr_none'],
        right_rail: ['ur_tenglong_OLIGHTWARRIOR3S战术手电', 'rr_bizon_OLIGHTOdinS战术手电', 'rr_tenglong_OLIGHT_Baldr_Pro_R多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'rr_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'upper_patch', 'upper_rail', 'left_patch', 'right_patch']
        slotVisibilityRules: [
        {trigger:'op_spirit_37', action:'show', slots:['lens_shade']},
        {trigger:'op_m157_fire', action:'show', slots:['lens_shade']},
        {trigger:'op_lpvo', action:'show', slots:['lens_shade']},
        {trigger:'op_sniper', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_scout', action:'show', slots:['lens_shade']},
        {trigger:'op_riser', action:'show', slots:['optic']},
        {trigger:'op_725_多用途战术增高架', action:'show', slots:['tactical_device', 'riser_optic']},
        {trigger:'op_riser3', action:'show', slots:['riser_optic']},
        {trigger:'fn_hvk_saw', action:'hide', slots:['rail_bipod', 'foregrip', 'stock', 'rear_grip', 'handguard']},
        {trigger:'fn_hvk_saw', action:'show', slots:['upper_rail']},
        {trigger:'hg_m249_bipod', action:'hide', slots:['foregrip', 'left_rail', 'rail_bipod']},
        {trigger:'hg_m249_M249军规导轨', action:'hide', slots:['rail_bipod']},
        {trigger:'hg_m249_M249军规导轨', action:'show', slots:['upper_patch', 'upper_rail', 'left_patch', 'right_patch']}
        ]
    },

    'm250': {
        optic: ['op_357_先进白热成像战斗', 'op_357_先进热融合全息', 'op_357_VMX无框', 'op_357_1p33_2_4倍', 'op_357_UHX全息', 'op_357_棱镜通用二倍光学', 'op_357_灵眼3_7弹道计算狙击镜', 'op_357_M157火控光学系统', 'op_357_视点3倍', 'op_357_1p_29俄制3倍', 'op_357_LPVO多倍率战斗', 'op_357_3_7可调倍率狙击镜', 'op_357_侦察1_5_5可调', 'op_357_HAMR组合', 'op_357_MEO微型瞄具增高架', 'op_725_多用途战术增高架', 'op_725_微型瞄具增高架', 'op_357_ACOG精准六倍镜', 'op_357_Osight微型', 'op_357_Cobra准直式', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_okp_7反射', 'op_357_XCOG突击3_5倍', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_357_AP5000反射式', 'op_357_全息二型', 'op_357_反射式', 'op_357_俄式准直二倍', 'op_357_全息', 'op_none'],
        muzzle: ['mu_web_titanium', 'mu_tenglong_FFC双流', 'mu_xinhuo', 'mu_tenglong_先进多口径', 'mu_tenglong_M7实用', 'mu_dead', 'mu_tenglong_沙暴垂直', 'mu_tenglong_堡垒水平', 'mu_poseidon', 'mu_tenglong_轻语战术', 'mu_tenglong_钛金竞赛', 'mu_tenglong_炽火抑制器', 'mu_tenglong_钢制膛口', 'mu_tenglong_实用_2', 'mu_tenglong_实用', 'mu_none'],
        barrel: ['br_m250_M250钛金长', 'br_m250_M250侍卫短', 'br_none'],
        foregrip: ['fg_resonance3', 'fg_ec_stop', 'fg_tenglong_黎明三角手电握把', 'fg_tenglong_破晓垂直手电握把', 'fg_tenglong_CR棱镜阻手器', 'fg_resonance2', 'fg_bipod_grip', 'fg_k1_elite', 'fg_tenglong_X25U斜侧战斗握把', 'fg_tenglong_共振人体工程握把', 'fg_phantom_vert', 'fg_tenglong_战术垂直握把', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_tenglong_折叠握把', 'fg_vfg_knight', 'fg_tenglong_ZFSG战术握把', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_ar57_模块化AR', 'rg_ar_tower', 'rg_ar57_侵袭', 'rg_ar57_幻影', 'rg_car_15_ARMOE', 'rg_ar57_射手D_2', 'rg_ar57_飓风D_1', 'rg_ar57_M7稳定', 'rg_ar57_416实用', 'rg_none'],
        mag: ['ma_m250_M25075发弹链', 'ma_none'],
        stock: ['st_tenglong_锚点导轨后托', 'st_tenglong_QR高性能后托', 'st_tenglong_CT增强型后托', 'st_shadow_core', 'st_bizon_MRGS镂空', 'st_ur_tactical2', 'st_bizon_影袭导轨', 'st_skeleton_sniper', 'st_416_stable', 'st_tenglong_416轻型', 'st_tenglong_精英轻型', 'st_raid_core', 'st_pivot_stable', 'st_lightning_rail', 'st_utility_light', 'st_tenglong_实用战术', 'st_tenglong_实用稳定', 'st_bizon_核心导轨', 'st_none'],
        side_optic: ['op_tenglong_侧置Osight微型', 'op_tenglong_侧置战斗红点', 'op_tenglong_侧置微型红点', 'op_tenglong_侧置XRO快速反应', 'op_tenglong_侧置全景红点', 'side_optic_none'],
        upper_rail: ['ur_tenglong_OLIGHTWARRIOR3S战术手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'ur_tenglong_组合式', 'ur_tenglong_狂蜂', 'ur_tenglong_DD蟒蛇', 'ur_tenglong_KC猎犬', 'ur_tenglong_游侠', 'ur_none'],
        left_rail: ['rr_bizon_OLIGHTOdinS战术手电', 'rr_m250_OLIGHT_Baldr_Pro_R多功育', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'lr_none'],
        right_rail: ['ur_tenglong_OLIGHTWARRIOR3S战术手电', 'rr_bizon_OLIGHTOdinS战术手电', 'rr_m250_OLIGHT_Baldr_Pro_R多功育', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'rr_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'rear_grip_patch', 'grip_seat']
        slotVisibilityRules: [
        {trigger:'op_spirit_37', action:'show', slots:['lens_shade']},
        {trigger:'op_m157_fire', action:'show', slots:['lens_shade']},
        {trigger:'op_lpvo', action:'show', slots:['lens_shade']},
        {trigger:'op_sniper', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_scout', action:'show', slots:['lens_shade']},
        {trigger:'op_riser', action:'show', slots:['optic']},
        {trigger:'op_725_多用途战术增高架', action:'show', slots:['tactical_device', 'riser_optic']},
        {trigger:'op_riser3', action:'show', slots:['riser_optic']},
        {trigger:'rg_ar_tower', action:'show', slots:['rear_grip_patch', 'grip_seat']}
        ]
    },

    'pkm': {
        optic: ['op_357_先进白热成像战斗', 'op_357_先进热融合全息', 'op_357_VMX无框', 'op_357_1p33_2_4倍', 'op_357_UHX全息', 'op_357_棱镜通用二倍光学', 'op_357_灵眼3_7弹道计算狙击镜', 'op_357_M157火控光学系统', 'op_357_视点3倍', 'op_357_1p_29俄制3倍', 'op_357_LPVO多倍率战斗', 'op_357_3_7可调倍率狙击镜', 'op_357_侦察1_5_5可调', 'op_357_HAMR组合', 'op_357_MEO微型瞄具增高架', 'op_725_多用途战术增高架', 'op_725_微型瞄具增高架', 'op_357_ACOG精准六倍镜', 'op_357_Osight微型', 'op_357_Cobra准直式', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_okp_7反射', 'op_357_XCOG突击3_5倍', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_357_AP5000反射式', 'op_357_全息二型', 'op_357_反射式', 'op_357_俄式准直二倍', 'op_357_全息', 'op_none'],
        muzzle: ['mu_tenglong_FFC双流', 'mu_xinhuo', 'mu_tenglong_先进多口径', 'mu_dtk', 'mu_tenglong_M7实用', 'mu_ak_12_AK勇火', 'mu_pbs', 'mu_dead', 'mu_tenglong_沙暴垂直', 'mu_tenglong_堡垒水平', 'mu_poseidon', 'mu_tenglong_轻语战术', 'mu_tenglong_钛金竞赛', 'mu_tenglong_炽火抑制器', 'mu_ak_12_AK实用', 'mu_tenglong_钢制膛口', 'mu_tenglong_实用_2', 'mu_flare_bell', 'mu_tenglong_实用', 'mu_none'],
        barrel: ['br_pkm_PKM地平线重', 'br_pkm_PKM壕战短', 'br_none'],
        rear_grip: ['rg_bizon_天蝎座', 'rg_bizon_RK3', 'rg_bizon_AK镂空握把', 'rg_ak_tower', 'rg_bizon_稳定AK', 'rg_bizon_射手AK', 'rg_warrior_实用AK', 'rg_none'],
        mag: ['ma_pkm_PKM扩容弹箱', 'ma_none'],
        stock: ['st_tenglong_锚点导轨后托', 'st_tenglong_QR高性能后托', 'st_tenglong_CT增强型后托', 'st_shadow_core', 'st_bizon_MRGS镂空', 'st_ur_tactical2', 'st_bizon_影袭导轨', 'st_skeleton_sniper', 'st_pkm_PKM泽宁特', 'st_416_stable', 'st_tenglong_416轻型', 'st_tenglong_精英轻型', 'st_raid_core', 'st_pivot_stable', 'st_lightning_rail', 'st_pkm_PKM枪托尾盖', 'st_utility_light', 'st_tenglong_实用战术', 'st_tenglong_实用稳定', 'st_bizon_核心导轨', 'st_none'],
        rail_bipod: ['fn_pkm_PKM两', 'rb_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'grip_seat']
        slotVisibilityRules: [
        {trigger:'op_spirit_37', action:'show', slots:['lens_shade']},
        {trigger:'op_m157_fire', action:'show', slots:['lens_shade']},
        {trigger:'op_lpvo', action:'show', slots:['lens_shade']},
        {trigger:'op_sniper', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_scout', action:'show', slots:['lens_shade']},
        {trigger:'op_riser', action:'show', slots:['optic']},
        {trigger:'op_725_多用途战术增高架', action:'show', slots:['tactical_device', 'riser_optic']},
        {trigger:'op_riser3', action:'show', slots:['riser_optic']},
        {trigger:'br_pkm_horizon', action:'show', slots:['foregrip', 'upper_rail', 'left_rail', 'right_rail']},
        {trigger:'br_pkm_trench', action:'hide', slots:['rail_bipod']},
        {trigger:'br_pkm_trench', action:'show', slots:['upper_rail', 'left_rail', 'foregrip', 'right_rail']},
        {trigger:'rg_ak_tower', action:'show', slots:['grip_seat']}
        ]
    },

    'qjb201': {
        optic: ['op_357_先进白热成像战斗', 'op_357_先进热融合全息', 'op_357_VMX无框', 'op_357_1p33_2_4倍', 'op_357_UHX全息', 'op_357_棱镜通用二倍光学', 'op_357_视点3倍', 'op_357_1p_29俄制3倍', 'op_357_侦察1_5_5可调', 'op_357_HAMR组合', 'op_357_MEO微型瞄具增高架', 'op_725_微型瞄具增高架', 'op_357_ACOG精准六倍镜', 'op_357_Osight微型', 'op_357_Cobra准直式', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_okp_7反射', 'op_357_XCOG突击3_5倍', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_357_AP5000反射式', 'op_357_全息二型', 'op_357_反射式', 'op_357_俄式准直二倍', 'op_357_全息', 'op_none'],
        muzzle: ['mu_web_titanium', 'mu_tenglong_FFC双流', 'mu_xinhuo', 'mu_tenglong_先进多口径', 'mu_tenglong_M7实用', 'mu_dead', 'mu_tenglong_沙暴垂直', 'mu_tenglong_堡垒水平', 'mu_poseidon', 'mu_tenglong_轻语战术', 'mu_tenglong_钛金竞赛', 'mu_tenglong_炽火抑制器', 'mu_tenglong_钢制膛口', 'mu_tenglong_实用_2', 'mu_tenglong_实用', 'mu_none'],
        barrel: ['br_qjb201_QJB201新式重锤战术', 'br_qjb201_QJB201新式獠牙短', 'br_none'],
        foregrip: ['fg_resonance3', 'fg_ec_stop', 'fg_tenglong_黎明三角手电握把', 'fg_tenglong_破晓垂直手电握把', 'fg_tenglong_CR棱镜阻手器', 'fg_resonance2', 'fg_bipod_grip', 'fg_k1_elite', 'fg_tenglong_X25U斜侧战斗握把', 'fg_tenglong_共振人体工程握把', 'fg_phantom_vert', 'fg_tenglong_战术垂直握把', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_tenglong_折叠握把', 'fg_vfg_knight', 'fg_tenglong_ZFSG战术握把', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_tenglong_兵锋新式握把', 'rg_tenglong_新式侍剑重型握把', 'rg_tenglong_新式尖兵轻型握把', 'rg_none'],
        mag: ['ma_qjb201_5_8新式45发扩容', 'ma_qbz95_1_5_8新式30发', 'ma_tenglong_5_8新式60发', 'ma_none'],
        stock: ['st_tenglong_锚点导轨后托', 'st_tenglong_QR高性能后托', 'st_tenglong_CT增强型后托', 'st_shadow_core', 'st_bizon_MRGS镂空', 'st_ur_tactical2', 'st_bizon_影袭导轨', 'st_skeleton_sniper', 'st_416_stable', 'st_tenglong_416轻型', 'st_tenglong_精英轻型', 'st_raid_core', 'st_pivot_stable', 'st_lightning_rail', 'st_utility_light', 'st_tenglong_实用战术', 'st_tenglong_实用稳定', 'st_bizon_核心导轨', 'st_none'],
        gas_block: ['gb_qjb201_QJB201新式稳固', 'gb_qjb201_QJB201新式高速', 'gas_block_none'],
        rail_bipod: ['fn_qjb201_QJB201', 'rb_none'],
        left_rail: ['rr_tenglong_OLIGHT_Odin_S战术手电', 'rr_ar57_OLIGHTBaldr_Pro_R多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'lr_none'],
        right_rail: ['ur_tenglong_OLIGHTWARRIOR3S战术手电', 'rr_tenglong_OLIGHT_Odin_S战术手电', 'rr_ar57_OLIGHTBaldr_Pro_R多功能手电', 'ur_tenglong_DBAL_X2紫色激光镭指', 'ur_tenglong_PERST_7蓝色激光镭指', 'ur_tenglong_耀斑战术手电', 'ur_tenglong_LA_3C绿色激光镭指', 'ur_tenglong_PEQ_2红色激光镭指', 'fn_93r_实用枪灯', 'rr_none'],
        defaultHidden: ['lens_shade', 'riser_optic']
        slotVisibilityRules: [
        {trigger:'br_qjb201_hammer', action:'show', slots:['left_patch', 'upper_rail', 'upper_patch', 'right_patch']},
        {trigger:'br_qjb201_fang', action:'hide', slots:['rail_bipod']},
        {trigger:'br_qjb201_fang', action:'show', slots:['upper_patch', 'left_patch', 'upper_rail', 'right_patch']},
        {trigger:'op_scout', action:'show', slots:['lens_shade']},
        {trigger:'op_riser', action:'show', slots:['optic']},
        {trigger:'op_riser3', action:'show', slots:['riser_optic']}
        ]
    },

    // ==================== 手枪 ====================

    '357': {
        optic: ['op_357_先进白热成像战斗', 'op_357_先进热融合全息', 'op_357_VMX无框', 'op_357_1p33_2_4倍', 'op_357_UHX全息', 'op_357_棱镜通用二倍光学', 'op_357_灵眼3_7弹道计算狙击镜', 'op_357_M157火控光学系统', 'op_357_视点3倍', 'op_357_1p_29俄制3倍', 'op_357_LPVO多倍率战斗', 'op_357_3_7可调倍率狙击镜', 'op_357_侦察1_5_5可调', 'op_357_HAMR组合', 'op_357_MEO微型瞄具增高架', 'op_357_ACOG精准六倍镜', 'op_357_Osight微型', 'op_357_Cobra准直式', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_okp_7反射', 'op_357_XCOG突击3_5倍', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_357_AP5000反射式', 'op_357_全息二型', 'op_357_反射式', 'op_357_俄式准直二倍', 'op_357_全息', 'op_none'],
        muzzle: ['mu_357_冲锋枪回声', 'mu_357_净化手枪', 'mu_357_精英手枪', 'mu_357_实用手枪', 'mu_none'],
        barrel: ['br_357__左轮逐风者长', 'br_357__左轮逐风者', 'br_357_左轮实用长管', 'br_357_左轮实用短管', 'br_357__口径左轮长', 'br_none'],
        rear_grip: ['rg_357__左轮逐风者', 'rg_357_左轮狙击后握', 'rg_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic']
        slotVisibilityRules: [
        {trigger:'op_spirit_37', action:'show', slots:['lens_shade']},
        {trigger:'op_m157_fire', action:'show', slots:['lens_shade']},
        {trigger:'op_lpvo', action:'show', slots:['lens_shade']},
        {trigger:'op_sniper', action:'show', slots:['lens_shade', 'upper_side_optic']},
        {trigger:'op_scout', action:'show', slots:['lens_shade']},
        {trigger:'op_riser', action:'show', slots:['optic']},
        {trigger:'br_357_storm_l', action:'show', slots:['foregrip', 'rail_bipod', 'upper_rail', 'right_rail', 'upper_patch', 'left_rail', 'right_patch', 'left_patch']},
        {trigger:'br_357_storm', action:'show', slots:['foregrip', 'upper_rail', 'rail_bipod', 'left_rail', 'upper_patch', 'right_rail', 'left_patch', 'right_patch']},
        {trigger:'rg_357_storm', action:'show', slots:['stock']}
        ]
    },

    '93r': {
        optic: ['op_357_VMX无框', 'op_357_Osight微型', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_none'],
        muzzle: ['mu_357_冲锋枪回声', 'mu_357_净化手枪', 'mu_357_精英手枪', 'mu_357_实用手枪', 'mu_none'],
        barrel: ['br_93r_93R战术', 'br_93r_93R远射超长', 'br_93r_93R实用轻', 'br_93r_93R实用重', 'br_93r_93R实用长', 'br_none'],
        rear_grip: ['rg_93r_M9肉色操控后握', 'rg_93r_M9木色稳定后握', 'rg_93r_M9黑色均衡后握', 'rg_none'],
        mag: ['ma_93r_93R_24发', 'ma_93r_93R_18发', 'ma_none'],
        under_rail: EXT,
        lower_rail: ['fn_93r_JAD下挂激光', 'fn_93r_OLIGHTBaldr_ProR多功能手电', 'fn_93r_下挂手枪灯', 'fn_93r_实用枪灯', 'lower_rail_none'],
        defaultHidden: [],
        slotVisibilityRules: []
    },

    'deagle': {
        optic: ['op_357_先进热融合全息', 'op_357_VMX无框', 'op_357_UHX全息', 'op_357_棱镜通用二倍光学', 'op_357_MEO微型瞄具增高架', 'op_357_Osight微型', 'op_357_Cobra准直式', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_okp_7反射', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_357_全息二型', 'op_357_反射式', 'op_357_俄式准直二倍', 'op_357_全息', 'op_none'],
        muzzle: ['mu_357_冲锋枪回声', 'mu_357_净化手枪', 'mu_357_精英手枪', 'mu_357_实用手枪', 'mu_none'],
        barrel: ['br_deagle_沙漠之鹰镂空竞赛套件', 'br_deagle_沙鹰竞技', 'br_deagle_沙鹰膛线长', 'br_none'],
        rear_grip: ['rg_deagle_沙鹰竞技后握', 'rg_none'],
        mag: ['ma_deagle_沙鹰13发', 'ma_none'],
        lower_rail: ['fn_93r_JAD下挂激光', 'fn_93r_OLIGHTBaldr_ProR多功能手电', 'fn_93r_实用枪灯', 'lower_rail_none'],
        defaultHidden: [],
        slotVisibilityRules: [
        {trigger:'op_riser', action:'show', slots:['optic']}
        ]
    },

    'g17': {
        optic: ['op_357_VMX无框', 'op_357_Osight微型', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_none'],
        muzzle: ['mu_357_冲锋枪回声', 'mu_357_净化手枪', 'mu_357_精英手枪', 'mu_357_实用手枪', 'mu_none'],
        barrel: ['br_g17_G17战术重', 'br_g17_G17轻量化', 'br_none'],
        rear_grip: ['rg_g17_XK竞技后握', 'rg_g17_XK橡胶套后握', 'rg_g17_XK防滑纹后握', 'rg_none'],
        mag: ['ma_g17_G系手枪33发', 'ma_g17_G系手枪25发', 'ma_none'],
        lower_rail: ['fn_93r_JAD下挂激光', 'rr_tenglong_OLIGHT_Baldr_Pro_R多功能手电', 'fn_93r_实用枪灯', 'lower_rail_none'],
        defaultHidden: [],
        slotVisibilityRules: []
    },

    'g18': {
        optic: ['op_357_VMX无框', 'op_357_Osight微型', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_none'],
        muzzle: ['mu_357_冲锋枪回声', 'mu_357_净化手枪', 'mu_357_精英手枪', 'mu_357_实用手枪', 'mu_none'],
        barrel: ['br_g18_G18冲击长', 'br_none'],
        rear_grip: ['rg_g17_XK竞技后握', 'rg_g17_XK橡胶套后握', 'rg_g17_XK防滑纹后握', 'rg_none'],
        mag: ['ma_g17_G系手枪33发', 'ma_g17_G系手枪25发', 'ma_none'],
        lower_rail: ['fn_93r_JAD下挂激光', 'rr_tenglong_OLIGHT_Baldr_Pro_R多功能手电', 'fn_93r_实用枪灯', 'lower_rail_none'],
        defaultHidden: [],
        slotVisibilityRules: []
    },

    'm1911': {
        optic: ['op_357_VMX无框', 'op_357_Osight微型', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_none'],
        muzzle: ['mu_357_冲锋枪回声', 'mu_357_净化手枪', 'mu_357_精英手枪', 'mu_357_实用手枪', 'mu_none'],
        barrel: ['br_m1911_M1911夜鹰战术', 'br_none'],
        rear_grip: ['rg_m1911_M1911夜鹰战术', 'rg_none'],
        mag: ['ma_m1911_M191111发扩容', 'ma_none'],
        lower_rail: ['fn_93r_JAD下挂激光', 'rr_tenglong_OLIGHT_Baldr_Pro_R多功能手电', 'fn_93r_下挂手枪灯', 'fn_93r_实用枪灯', 'lower_rail_none'],
        trigger: ['fn_m1911_M1911夜鹰战术扳机', 'trigger_none'],
        hammer: ['fn_m1911_M1911夜鹰战术击锤', 'hammer_none'],
        defaultHidden: [],
        slotVisibilityRules: []
    },

    'qsz92g': {
        optic: ['op_357_VMX无框', 'op_357_Osight微型', 'op_357_战斗红点', 'op_357_微型红点', 'op_357_XRO快速反应', 'op_357_全景红点', 'op_none'],
        muzzle: ['mu_357_冲锋枪回声', 'mu_357_净化手枪', 'mu_357_精英手枪', 'mu_357_实用手枪', 'mu_none'],
        barrel: ['br_qsz92g_QSZ92G响尾蛇战术', 'br_none'],
        lower_rail: ['fn_93r_JAD下挂激光', 'rr_tenglong_OLIGHT_Baldr_Pro_R多功能手电', 'fn_93r_实用枪灯', 'lower_rail_none'],
        defaultHidden: [],
        slotVisibilityRules: []
    },

    // ==================== 特殊武器 ====================

    'bow': {
        mag: ['ma_bow_HVK速射箭匣', 'ma_none'],
        bow_optic: ['bo_bow_复合弓无框', 'bo_bow_复合弓智能倍镜', 'bow_optic_none'],
        bow_arm: ['ba_bow_复合弓重型弓臂', 'ba_bow_复合弓轻型弓臂', 'bow_arm_none'],
        bow_string: ['bs_bow_复合弓增强弓弦', 'bow_string_none'],
        stabilizer: ['sb_bow_复合弓稳定平衡杆', 'sb_bow_复合弓竞赛平衡杆', 'stabilizer_none'],
        arrow_rest: ['ar_bow_复合弓竞赛箭台', 'arrow_rest_none'],
        grip_plate: ['gp_bow_复合弓增强握把片', 'gp_bow_复合弓均衡握把片', 'grip_plate_none'],
        defaultHidden: [],
        slotVisibilityRules: []
    },

};

// ===== 获取兼容配件 =====
function getCompatibleAttachments(weaponId, slot, selectedAttachments) {
    const weaponCompat = WEAPON_ATTACHMENT_COMPATIBILITY[weaponId];
    if (!weaponCompat) {
        return ATTACHMENTS[slot] || [];
    }

    const compatIds = weaponCompat[slot];

    // 扩展槽位：如果武器有该槽位，返回空数组（或 ATTACHMENTS 中的对应列表）
    if (compatIds === undefined) {
        return ATTACHMENTS[slot] || [];
    }

    // 扩展槽位（EXT = []）：如果武器有该槽位但配件列表为空，返回 [_none] 选项
    if (compatIds === EXT) {
        if (ATTACHMENTS[slot]) {
            return ATTACHMENTS[slot].filter(att => att.id.endsWith('_none'));
        }
        return [];
    }

    // 核心槽位：从 ATTACHMENTS 中过滤出兼容的配件
    let attPool = ATTACHMENTS[slot];
    if (!attPool) {
        attPool = [];
        for (const key of Object.keys(ATTACHMENTS)) {
            const catAtts = ATTACHMENTS[key];
            if (Array.isArray(catAtts)) {
                for (const att of catAtts) {
                    if (compatIds.includes(att.id) && !attPool.find(a => a.id === att.id)) {
                        attPool.push(att);
                    }
                }
            }
        }
    }

    return attPool.filter(att => compatIds.includes(att.id));
}

// ===== 获取当前可见槽位 =====
function getVisibleSlots(weaponId, selectedAttachments) {
    const weaponCompat = WEAPON_ATTACHMENT_COMPATIBILITY[weaponId];
    if (!weaponCompat) {
        return [];
    }

    const rules = weaponCompat.slotVisibilityRules || [];
    const defaultHidden = weaponCompat.defaultHidden || [];

    const allSlots = Object.keys(weaponCompat).filter(k => !['slotVisibilityRules', 'defaultHidden'].includes(k));

    if (rules.length === 0) {
        return allSlots.filter(s => !defaultHidden.includes(s));
    }

    let extraShow = [];
    let extraHide = [];

    for (const rule of rules) {
        // 支持新格式 {trigger, action, slots}
        if (rule.trigger) {
            let matched = false;
            if (selectedAttachments) {
                for (const key of Object.keys(selectedAttachments)) {
                    const att = selectedAttachments[key];
                    if (att && att.id === rule.trigger) {
                        matched = true;
                        break;
                    }
                }
            }
            if (matched) {
                if (rule.action === 'show') {
                    extraShow = extraShow.concat(rule.slots || []);
                } else if (rule.action === 'hide') {
                    extraHide = extraHide.concat(rule.slots || []);
                }
            }
            continue;
        }
        // 兼容旧格式 {when, show, hide}
        const { when, show, hide } = rule;
        const selectedAtt = selectedAttachments ? selectedAttachments[when.slot] : null;
        const selectedId = selectedAtt ? selectedAtt.id : null;

        if (selectedId === when.value) {
            extraShow = extraShow.concat(show || []);
            extraHide = extraHide.concat(hide || []);
        }
    }

    let visibleSlots = allSlots.filter(s => !defaultHidden.includes(s) && !extraHide.includes(s));
    for (const s of extraShow) {
        if (!visibleSlots.includes(s)) {
            visibleSlots.push(s);
        }
    }

    return visibleSlots;
}