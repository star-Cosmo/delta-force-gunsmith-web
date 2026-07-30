// ===== 三角洲行动 · 武器-配件兼容性矩阵 =====
// 数据来源: hpromax.top 爬取数据 (hpromax_slots.csv) + extracted_compatibility.json
// 最后更新: 2026-07-29

// 扩展槽位空列表（这些槽位的配件选择逻辑在 script.js 中处理）
const EXT = [];

// ===== 武器-配件兼容性矩阵 =====
const WEAPON_ATTACHMENT_COMPATIBILITY = {

    // ==================== 突击步枪 ====================

    'ak-12': {
        optic: ['op_thermal_combat', 'op_thermal_holo', 'op_vmx', 'op_1p33', 'op_uhx', 'op_prism_2x', 'op_spirit_37', 'op_m157', 'op_viewpoint_3x', 'op_1p29', 'op_lpvo', 'op_sniper', 'op_scout', 'op_hamr', 'op_riser', 'op_riser2', 'op_riser', 'op_acog_6x', 'op_osight', 'op_cobra', 'op_combat_rd', 'op_mini_rd', 'op_okp7', 'op_xcog', 'op_xro', 'op_panorama', 'op_ap5000', 'op_holo_ii', 'op_red', 'op_ru_2x', 'op_holo', 'op_none'],
        muzzle: ['mu_xinhuo', 'mu_advanced', 'mu_dtk', 'mu_m7_silencer', 'mu_ak_brave', 'mu_pbs', 'mu_dead', 'mu_sandstorm', 'mu_fortress', 'mu_poseidon', 'mu_whisper', 'mu_titanium', 'mu_inferno', 'mu_ak_comp', 'mu_steel_brake', 'mu_practical', 'mu_flare_bell', 'mu_flame', 'mu_none'],
        barrel: ['br_none'],
        foregrip: ['fg_ec_stop', 'fg_dawn_tri', 'fg_dawn_vert', 'fg_cr_prism', 'fg_bipod_grip', 'fg_k1_elite', 'fg_x25u', 'fg_phantom_vert', 'fg_tactical_vert', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_fold', 'fg_vfg_knight', 'fg_zfsg', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_ak_scorpion', 'rg_rk3', 'rg_ak_skeleton', 'rg_ak_tower', 'rg_ak_stable', 'rg_ak_shooter', 'rg_ak_prac', 'rg_none'],
        mag: ['ma_aks74u_75', 'ma_aks74u_45', 'ma_ak12_30', 'ma_none'],
        stock: ['st_anchor_rail', 'st_qr_perf', 'st_ct_enhanced', 'st_shadow_core', 'st_mrgs_hollow', 'st_pt3_death', 'st_pt1_special', 'st_ur_tactical2', 'st_shadow_rail', 'st_skeleton_sniper', 'st_ak19', 'st_pivot_adv', 'st_416_stable', 'st_416_light', 'st_elite_light', 'st_raid_core', 'st_pivot_stable', 'st_lightning_rail', 'st_ak_endcap', 'st_ak', 'st_ak_folding', 'st_ak_polymer', 'st_utility_light', 'st_tactical', 'st_stable', 'st_core_rail', 'st_none'],
        mag_seat: ['fn_honey_sd', 'fn_honey_gn', 'fn_honey_bk', 'mag_seat_none'],
        bolt: ['fn_zentinert', 'bolt_none'],
        side_optic: ['op_osight_side', 'op_side_combat', 'op_side', 'op_xro_side', 'op_side_pano', 'side_optic_none'],
        upper_rail: ['fn_warrior_light', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'ur_none'],
        right_rail: ['fn_warrior_light', 'fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'rr_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'grip_seat'],
        slotVisibilityRules: [
            { when: { slot: 'slot', value: 'op_spirit_37' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_m157' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_lpvo' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_sniper' }, show: ['lens_shade', 'upper_side_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_scout' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser' }, show: ['optic', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser2' }, show: ['tactical_device', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'st_ak_folding' }, show: ['stock'], hide: [] },
            { when: { slot: 'slot', value: 'st_ak_polymer' }, show: ['stock'], hide: [] },
            { when: { slot: 'slot', value: 'rg_ak_tower' }, show: ['grip_seat'], hide: [] }
        ]
    },

    'akm': {
        optic: ['op_thermal_combat', 'op_thermal_holo', 'op_vmx', 'op_1p33', 'op_uhx', 'op_prism_2x', 'op_spirit_37', 'op_m157', 'op_viewpoint_3x', 'op_1p29', 'op_lpvo', 'op_sniper', 'op_scout', 'op_hamr', 'op_riser', 'op_riser2', 'op_riser', 'op_acog_6x', 'op_osight', 'op_cobra', 'op_combat_rd', 'op_mini_rd', 'op_okp7', 'op_xcog', 'op_pso_25', 'op_xro', 'op_panorama', 'op_ap5000', 'op_pso_8x', 'op_holo_ii', 'op_red', 'op_ru_2x', 'op_holo', 'op_none'],
        muzzle: ['mu_ffc_dual', 'mu_xinhuo', 'mu_advanced', 'mu_dtk', 'mu_m7_silencer', 'mu_ak_brave', 'mu_pbs', 'mu_dead', 'mu_sandstorm', 'mu_fortress', 'mu_poseidon', 'mu_whisper', 'mu_titanium', 'mu_inferno', 'mu_ak_comp', 'mu_steel_brake', 'mu_practical', 'mu_flare_bell', 'mu_flame', 'mu_none'],
        barrel: ['br_akm_perf', 'br_akm_beaver_l', 'br_akm_trans', 'br_akm_prac_l', 'br_akm_prac_std', 'br_none'],
        foregrip: ['fg_ec_stop', 'fg_cr_prism', 'fg_bipod_grip', 'fg_x25u', 'fg_phantom_vert', 'fg_tactical_vert', 'fg_rk0', 'fg_angle_stop', 'fg_phase_battle', 'fg_fold', 'fg_vfg_knight', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_ak_scorpion', 'rg_rk3', 'rg_ak_skeleton', 'rg_ak_tower', 'rg_ak_stable', 'rg_ak_shooter', 'rg_ak_prac', 'rg_none'],
        mag: ['ma_akm_40', 'ma_akm_30', 'ma_none'],
        stock: ['st_anchor_rail', 'st_qr_perf', 'st_ct_enhanced', 'st_shadow_core', 'st_mrgs_hollow', 'st_pt3_death', 'st_pt1_special', 'st_ur_tactical2', 'st_shadow_rail', 'st_skeleton_sniper', 'st_ak19', 'st_pivot_adv', 'st_416_stable', 'st_416_light', 'st_elite_light', 'st_raid_core', 'st_pivot_stable', 'st_lightning_rail', 'st_ak_endcap', 'st_ak', 'st_ak_folding', 'st_ak_polymer', 'st_utility_light', 'st_tactical', 'st_stable', 'st_core_rail', 'st_none'],
        stock_pad: ['st_ak_bumper', 'stock_pad_none'],
        mag_seat: ['fn_coyote_sd', 'fn_coyote_gn', 'fn_coyote_bk', 'mag_seat_none'],
        bolt: ['fn_zentinert', 'bolt_none'],
        side_optic: ['op_osight_side', 'op_side_combat', 'op_side', 'op_xro_side', 'op_side_pano', 'side_optic_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'upper_rail', 'left_rail', 'rail_bipod', 'right_patch', 'right_rail', 'left_patch', 'foregrip', 'grip_seat'],
        slotVisibilityRules: [
            { when: { slot: 'slot', value: 'op_spirit_37' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_m157' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_lpvo' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_sniper' }, show: ['lens_shade', 'upper_side_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_scout' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser' }, show: ['optic', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser2' }, show: ['tactical_device', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'br_akm_beaver_l' }, show: ['upper_rail', 'left_rail', 'rail_bipod', 'right_patch', 'right_rail', 'left_patch', 'foregrip'], hide: [] },
            { when: { slot: 'slot', value: 'br_akm_trans' }, show: ['upper_rail', 'left_rail', 'rail_bipod', 'right_rail', 'left_patch', 'right_patch', 'foregrip'], hide: [] },
            { when: { slot: 'slot', value: 'br_akm_prac_l' }, show: ['left_rail', 'right_rail', 'rail_bipod', 'left_patch', 'right_patch', 'foregrip'], hide: [] },
            { when: { slot: 'slot', value: 'br_akm_prac_std' }, show: ['right_rail', 'foregrip'], hide: [] },
            { when: { slot: 'slot', value: 'rg_ak_tower' }, show: ['grip_seat'], hide: [] }
        ]
    },

    'aks-74u': {
        optic: ['op_thermal_combat', 'op_thermal_holo', 'op_vmx', 'op_1p33', 'op_uhx', 'op_prism_2x', 'op_spirit_37', 'op_m157', 'op_viewpoint_3x', 'op_1p29', 'op_lpvo', 'op_sniper', 'op_scout', 'op_hamr', 'op_riser', 'op_riser2', 'op_riser', 'op_acog_6x', 'op_osight', 'op_cobra', 'op_combat_rd', 'op_mini_rd', 'op_okp7', 'op_xcog', 'op_pso_25', 'op_xro', 'op_panorama', 'op_ap5000', 'op_pso_8x', 'op_holo_ii', 'op_red', 'op_ru_2x', 'op_holo', 'op_none'],
        muzzle: ['mu_ffc_dual', 'mu_xinhuo', 'mu_advanced', 'mu_dtk', 'mu_m7_silencer', 'mu_ak_brave', 'mu_pbs', 'mu_dead', 'mu_sandstorm', 'mu_fortress', 'mu_poseidon', 'mu_whisper', 'mu_titanium', 'mu_inferno', 'mu_ak_comp', 'mu_steel_brake', 'mu_practical', 'mu_flare_bell', 'mu_flame', 'mu_none'],
        foregrip: ['fg_ec_stop', 'fg_cr_prism', 'fg_bipod_grip', 'fg_x25u', 'fg_phantom_vert', 'fg_tactical_vert', 'fg_rk0', 'fg_angle_stop', 'fg_phase_battle', 'fg_fold', 'fg_vfg_knight', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_ak_scorpion', 'rg_rk3', 'rg_ak_skeleton', 'rg_ak_tower', 'rg_ak_stable', 'rg_ak_shooter', 'rg_ak_prac', 'rg_none'],
        mag: ['ma_aks74u_75', 'ma_aks74u_45', 'ma_ak12_30', 'ma_none'],
        stock: ['st_anchor_rail', 'st_qr_perf', 'st_ct_enhanced', 'st_shadow_core', 'st_mrgs_hollow', 'st_pt3_death', 'st_pt1_special', 'st_ur_tactical2', 'st_shadow_rail', 'st_skeleton_sniper', 'st_ak19', 'st_pivot_adv', 'st_416_stable', 'st_416_light', 'st_elite_light', 'st_raid_core', 'st_pivot_stable', 'st_lightning_rail', 'st_ak_endcap', 'st_ak', 'st_ak_polymer', 'st_utility_light', 'st_tactical', 'st_stable', 'st_core_rail', 'st_none'],
        handguard: ['hg_none'],
        stock_pad: ['st_ak_bumper', 'stock_pad_none'],
        mag_seat: ['fn_honey_sd', 'fn_honey_gn', 'fn_honey_bk', 'mag_seat_none'],
        bolt: ['fn_zentinert', 'bolt_none'],
        upper_handguard: ['upper_handguard_none'],
        side_optic: ['op_osight_side', 'op_side_combat', 'op_side', 'op_xro_side', 'op_side_pano', 'side_optic_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'grip_seat'],
        slotVisibilityRules: [
            { when: { slot: 'slot', value: 'op_spirit_37' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_m157' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_lpvo' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_sniper' }, show: ['lens_shade', 'upper_side_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_scout' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser' }, show: ['optic', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser2' }, show: ['tactical_device', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'rg_ak_tower' }, show: ['grip_seat'], hide: [] }
        ]
    },

    'ar57': {
        optic: ['op_thermal_combat', 'op_thermal_holo', 'op_vmx', 'op_1p33', 'op_prism_2x', 'op_viewpoint_3x', 'op_1p29', 'op_scout', 'op_hamr', 'op_riser', 'op_riser', 'op_acog_6x', 'op_osight', 'op_cobra', 'op_combat_rd', 'op_mini_rd', 'op_xcog', 'op_xro', 'op_panorama', 'op_ap5000', 'op_holo_ii', 'op_red', 'op_ru_2x', 'op_holo', 'op_none'],
        muzzle: ['mu_web_titanium', 'mu_ffc_dual', 'mu_xinhuo', 'mu_advanced', 'mu_m7_silencer', 'mu_smg_echo', 'mu_dead', 'mu_sandstorm', 'mu_fortress', 'mu_poseidon', 'mu_whisper', 'mu_titanium', 'mu_inferno', 'mu_steel_brake', 'mu_practical', 'mu_bird', 'mu_flame', 'mu_none'],
        barrel: ['br_none'],
        foregrip: ['fg_resonance3', 'fg_ec_stop', 'fg_dawn_tri', 'fg_dawn_vert', 'fg_cr_prism', 'fg_resonance2', 'fg_bipod_grip', 'fg_k1_elite', 'fg_x25u', 'fg_resonance', 'fg_phantom_vert', 'fg_tactical_vert', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_fold', 'fg_vfg_knight', 'fg_zfsg', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_ar_modular', 'rg_ar_tower', 'rg_invasion', 'rg_phantom', 'rg_ar_moe', 'rg_shooter', 'rg_hurricane', 'rg_m7_stable', 'rg_416_prac', 'rg_none'],
        stock: ['st_anchor_rail', 'st_qr_perf', 'st_ct_enhanced', 'st_shadow_core', 'st_shadow_rail', 'st_skeleton_sniper', 'st_pivot_adv', 'st_416_stable', 'st_416_light', 'st_elite_light', 'st_raid_core', 'st_pivot_stable', 'st_lightning_rail', 'st_m4_buffer', 'st_utility_light', 'st_tactical', 'st_stable', 'st_core_rail', 'st_none'],
        stock_kit: ['rg_resonance_g2', 'st_restricted', 'stock_kit_none'],
        side_optic: ['op_osight_side', 'op_side_combat', 'op_side', 'op_xro_side', 'op_side_pano', 'side_optic_none'],
        rail_bipod: ['rb_util', 'rb_none'],
        left_rail: ['fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'lr_none'],
        right_rail: ['fn_warrior_light', 'fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'rr_none'],
        left_patch: ['fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'lp_none'],
        right_patch: ['fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'rp_none'],
        defaultHidden: ['lens_shade', 'riser_optic', 'rear_grip_patch', 'grip_seat'],
        slotVisibilityRules: [
            { when: { slot: 'slot', value: 'op_scout' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser' }, show: ['optic', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'rg_ar_modular' }, show: ['rear_grip_patch'], hide: [] },
            { when: { slot: 'slot', value: 'rg_ar_tower' }, show: ['grip_seat'], hide: [] }
        ]
    },

    'ash-12': {
        optic: ['op_thermal_combat', 'op_thermal_holo', 'op_vmx', 'op_1p33', 'op_uhx', 'op_prism_2x', 'op_spirit_37', 'op_m157', 'op_viewpoint_3x', 'op_1p29', 'op_lpvo', 'op_sniper', 'op_scout', 'op_hamr', 'op_riser', 'op_riser2', 'op_riser', 'op_acog_6x', 'op_osight', 'op_cobra', 'op_combat_rd', 'op_mini_rd', 'op_okp7', 'op_xcog', 'op_xro', 'op_panorama', 'op_ap5000', 'op_holo_ii', 'op_red', 'op_ru_2x', 'op_holo', 'op_none'],
        muzzle: ['mu_titan_silencer', 'mu_none'],
        barrel: ['br_none'],
        foregrip: ['fg_resonance3', 'fg_ec_stop', 'fg_dawn_tri', 'fg_dawn_vert', 'fg_cr_prism', 'fg_resonance2', 'fg_bipod_grip', 'fg_k1_elite', 'fg_x25u', 'fg_resonance', 'fg_phantom_vert', 'fg_tactical_vert', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_fold', 'fg_vfg_knight', 'fg_zfsg', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        mag: ['ma_none'],
        stock: ['st_none'],
        side_optic: ['op_osight_side', 'op_side_combat', 'op_side', 'op_xro_side', 'op_side_pano', 'side_optic_none'],
        upper_rail: ['fn_warrior_light', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'ur_none'],
        left_rail: ['fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'lr_none'],
        right_rail: ['fn_warrior_light', 'fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'rr_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device'],
        slotVisibilityRules: [
            { when: { slot: 'slot', value: 'op_spirit_37' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_m157' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_lpvo' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_sniper' }, show: ['lens_shade', 'upper_side_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_scout' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser' }, show: ['optic', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser2' }, show: ['tactical_device', 'riser_optic'], hide: [] }
        ]
    },

    'asval': {
        optic: ['op_thermal_combat', 'op_thermal_holo', 'op_vmx', 'op_1p33', 'op_uhx', 'op_prism_2x', 'op_spirit_37', 'op_m157', 'op_viewpoint_3x', 'op_1p29', 'op_lpvo', 'op_sniper', 'op_scout', 'op_hamr', 'op_riser', 'op_riser2', 'op_riser', 'op_acog_6x', 'op_osight', 'op_cobra', 'op_combat_rd', 'op_mini_rd', 'op_okp7', 'op_xcog', 'op_pso_25', 'op_xro', 'op_panorama', 'op_ap5000', 'op_pso_8x', 'op_holo_ii', 'op_red', 'op_ru_2x', 'op_holo', 'op_none'],
        barrel: ['br_vss_tsunami', 'br_none'],
        foregrip: ['fg_resonance3', 'fg_ec_stop', 'fg_dawn_tri', 'fg_dawn_vert', 'fg_cr_prism', 'fg_resonance2', 'fg_bipod_grip', 'fg_k1_elite', 'fg_x25u', 'fg_resonance', 'fg_phantom_vert', 'fg_tactical_vert', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_fold', 'fg_vfg_knight', 'fg_zfsg', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_ak_scorpion', 'rg_rk3', 'rg_ak_skeleton', 'rg_ak_tower', 'rg_ak_stable', 'rg_ak_shooter', 'rg_ak_prac', 'rg_none'],
        mag: ['ma_vss_45', 'ma_vss_30', 'ma_none'],
        stock: ['st_anchor_rail', 'st_qr_perf', 'st_ct_enhanced', 'st_shadow_core', 'st_mrgs_hollow', 'st_ur_tactical2', 'st_shadow_rail', 'st_vss_elite', 'st_asval_end', 'st_skeleton_sniper', 'st_416_stable', 'st_416_light', 'st_elite_light', 'st_raid_core', 'st_pivot_stable', 'st_lightning_rail', 'st_utility_light', 'st_tactical', 'st_stable', 'st_core_rail', 'st_none'],
        mag_seat: ['fn_coyote_sd', 'fn_coyote_gn', 'fn_coyote_bk', 'mag_seat_none'],
        bolt: ['fn_zentinert', 'bolt_none'],
        side_optic: ['op_osight_side', 'op_side_combat', 'op_side', 'op_xro_side', 'op_side_pano', 'side_optic_none'],
        left_rail: ['fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'lr_none'],
        right_rail: ['fn_warrior_light', 'fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'rr_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'grip_seat'],
        slotVisibilityRules: [
            { when: { slot: 'slot', value: 'op_spirit_37' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_m157' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_lpvo' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_sniper' }, show: ['lens_shade', 'upper_side_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_scout' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser' }, show: ['optic', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser2' }, show: ['tactical_device', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'rg_ak_tower' }, show: ['grip_seat'], hide: [] }
        ]
    },

    'aug': {
        optic: ['op_thermal_combat', 'op_thermal_holo', 'op_vmx', 'op_1p33', 'op_uhx', 'op_prism_2x', 'op_spirit_37', 'op_m157', 'op_viewpoint_3x', 'op_1p29', 'op_lpvo', 'op_sniper', 'op_scout', 'op_hamr', 'op_riser', 'op_riser2', 'op_riser', 'op_acog_6x', 'op_osight', 'op_cobra', 'op_combat_rd', 'op_mini_rd', 'op_okp7', 'op_xcog', 'op_xro', 'op_panorama', 'op_ap5000', 'op_holo_ii', 'op_red', 'op_ru_2x', 'op_holo', 'op_none'],
        muzzle: ['mu_web_titanium', 'mu_ffc_dual', 'mu_xinhuo', 'mu_advanced', 'mu_m7_silencer', 'mu_dead', 'mu_sandstorm', 'mu_fortress', 'mu_poseidon', 'mu_whisper', 'mu_titanium', 'mu_inferno', 'mu_steel_brake', 'mu_practical', 'mu_bird', 'mu_flame', 'mu_none'],
        barrel: ['br_none'],
        foregrip: ['fg_ec_stop', 'fg_cr_prism', 'fg_bipod_grip', 'fg_x25u', 'fg_phantom_vert', 'fg_tactical_vert', 'fg_rk0', 'fg_angle_stop', 'fg_phase_battle', 'fg_fold', 'fg_vfg_knight', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        mag: ['ma_none'],
        stock: ['st_none'],
        cheek_pad: ['st_universal_pad', 'cheek_pad_none'],
        mag_seat: ['fn_honey_sd', 'fn_honey_gn', 'fn_honey_bk', 'mag_seat_none'],
        side_optic: ['op_osight_side', 'op_side_combat', 'op_side', 'op_xro_side', 'op_side_pano', 'side_optic_none'],
        right_rail: ['fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'rr_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device'],
        slotVisibilityRules: [
            { when: { slot: 'slot', value: 'op_spirit_37' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_m157' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_lpvo' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_sniper' }, show: ['lens_shade', 'upper_side_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_scout' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser' }, show: ['optic', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser2' }, show: ['tactical_device', 'riser_optic'], hide: [] }
        ]
    },

    'car-15': {
        optic: ['op_thermal_combat', 'op_thermal_holo', 'op_vmx', 'op_1p33', 'op_uhx', 'op_prism_2x', 'op_spirit_37', 'op_m157', 'op_viewpoint_3x', 'op_1p29', 'op_lpvo', 'op_sniper', 'op_scout', 'op_hamr', 'op_riser', 'op_riser2', 'op_riser', 'op_acog_6x', 'op_osight', 'op_cobra', 'op_combat_rd', 'op_mini_rd', 'op_okp7', 'op_xcog', 'op_xro', 'op_panorama', 'op_ap5000', 'op_holo_ii', 'op_red', 'op_ru_2x', 'op_holo', 'op_none'],
        muzzle: ['mu_web_titanium', 'mu_ffc_dual', 'mu_xinhuo', 'mu_advanced', 'mu_m7_silencer', 'mu_dead', 'mu_sandstorm', 'mu_fortress', 'mu_poseidon', 'mu_whisper', 'mu_titanium', 'mu_inferno', 'mu_ops', 'mu_steel_brake', 'mu_practical', 'mu_bird', 'mu_flame', 'mu_none'],
        barrel: ['br_ar_integrated', 'br_ar_assault', 'br_ar_trench', 'br_ar_gabriel', 'br_ar_standard', 'br_ar_carbon', 'br_none'],
        rear_grip: ['rg_ar_modular', 'rg_ar_tower', 'rg_invasion', 'rg_phantom', 'rg_ar_moe', 'rg_shooter', 'rg_hurricane', 'rg_m7_stable', 'rg_416_prac', 'rg_none'],
        mag: ['ma_ar_60', 'ma_m4_60', 'ma_556_poly', 'ma_none'],
        stock: ['st_anchor_rail', 'st_qr_perf', 'st_ct_enhanced', 'st_shadow_core', 'st_ur_tactical2', 'st_skeleton_sniper', 'st_416_stable', 'st_416_light', 'st_elite_light', 'st_raid_core', 'st_pivot_stable', 'st_m4_buffer', 'st_utility_light', 'st_tactical', 'st_stable', 'st_none'],
        mag_seat: ['fn_honey_sd', 'fn_honey_gn', 'fn_honey_bk', 'mag_seat_none'],
        stock_kit: ['rg_resonance_g2', 'st_restricted', 'stock_kit_none'],
        lower_rail: ['fn_car15_light', 'lower_rail_none'],
        right_rail: ['fn_warrior_light', 'fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'rr_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'foregrip', 'upper_rail', 'rail_bipod', 'upper_patch', 'left_patch', 'left_rail', 'right_patch', 'rear_grip_patch', 'grip_seat'],
        slotVisibilityRules: [
            { when: { slot: 'slot', value: 'op_spirit_37' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_m157' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_lpvo' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_sniper' }, show: ['lens_shade', 'upper_side_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_scout' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser' }, show: ['optic', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser2' }, show: ['tactical_device', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'br_ar_integrated' }, show: ['foregrip', 'upper_rail', 'rail_bipod', 'upper_patch', 'left_patch', 'left_rail'], hide: [] },
            { when: { slot: 'slot', value: 'br_ar_assault' }, show: ['upper_rail', 'left_rail', 'foregrip'], hide: [] },
            { when: { slot: 'slot', value: 'br_ar_trench' }, show: ['foregrip', 'rail_bipod', 'upper_rail', 'left_rail', 'upper_patch', 'left_patch', 'right_patch'], hide: [] },
            { when: { slot: 'slot', value: 'br_ar_gabriel' }, show: ['foregrip', 'upper_rail', 'rail_bipod', 'left_patch', 'left_rail', 'upper_patch', 'right_patch'], hide: [] },
            { when: { slot: 'slot', value: 'br_ar_standard' }, show: ['upper_rail', 'rail_bipod', 'foregrip', 'left_patch', 'left_rail', 'upper_patch', 'right_patch'], hide: [] },
            { when: { slot: 'slot', value: 'br_ar_carbon' }, show: ['foregrip', 'upper_rail', 'rail_bipod', 'left_patch', 'left_rail', 'upper_patch', 'right_patch'], hide: [] },
            { when: { slot: 'slot', value: 'rg_ar_modular' }, show: ['rear_grip_patch'], hide: [] },
            { when: { slot: 'slot', value: 'rg_ar_tower' }, show: ['grip_seat'], hide: [] }
        ]
    },

    'g3': {
        optic: ['op_thermal_combat', 'op_thermal_holo', 'op_vmx', 'op_1p33', 'op_uhx', 'op_prism_2x', 'op_spirit_37', 'op_m157', 'op_viewpoint_3x', 'op_1p29', 'op_lpvo', 'op_sniper', 'op_scout', 'op_hamr', 'op_riser', 'op_riser2', 'op_riser', 'op_acog_6x', 'op_osight', 'op_cobra', 'op_combat_rd', 'op_mini_rd', 'op_okp7', 'op_xcog', 'op_xro', 'op_panorama', 'op_ap5000', 'op_holo_ii', 'op_red', 'op_ru_2x', 'op_holo', 'op_none'],
        muzzle: ['mu_ffc_dual', 'mu_xinhuo', 'mu_advanced', 'mu_m7_silencer', 'mu_dead', 'mu_sandstorm', 'mu_fortress', 'mu_poseidon', 'mu_whisper', 'mu_titanium', 'mu_inferno', 'mu_steel_brake', 'mu_practical', 'mu_flame', 'mu_none'],
        barrel: ['br_g3_marksman', 'br_g3_heavy', 'br_g3_storm', 'br_g3_guard', 'br_none'],
        foregrip: ['fg_resonance3', 'fg_ec_stop', 'fg_dawn_tri', 'fg_dawn_vert', 'fg_cr_prism', 'fg_resonance2', 'fg_bipod_grip', 'fg_k1_elite', 'fg_x25u', 'fg_resonance', 'fg_phantom_vert', 'fg_tactical_vert', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_fold', 'fg_vfg_knight', 'fg_zfsg', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_g3_guard', 'rg_g3_skeleton', 'rg_psg1', 'rg_none'],
        mag: ['ma_g3_30', 'ma_none'],
        stock: ['st_qr_perf', 'st_ct_enhanced', 'st_shadow_core', 'st_mrgs_hollow', 'st_ur_tactical2', 'st_shadow_rail', 'st_skeleton_sniper', 'st_pivot_adv', 'st_416_stable', 'st_416_light', 'st_elite_light', 'st_raid_core', 'st_pivot_stable', 'st_lightning_rail', 'st_mp5_telescope', 'st_g3_stable', 'st_mp5k_fold', 'st_g3_telescope', 'st_mp5', 'st_utility_light', 'st_tactical', 'st_stable', 'st_core_rail', 'st_none'],
        mag_seat: ['fn_grizzly_sd', 'fn_grizzly_gn', 'fn_grizzly_bk', 'mag_seat_none'],
        side_optic: ['op_osight_side', 'op_side_combat', 'op_side', 'op_xro_side', 'op_side_pano', 'side_optic_none'],
        rail_bipod: ['rb_util', 'rb_none'],
        right_rail: ['fn_warrior_light', 'fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'rr_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'upper_rail', 'left_patch', 'left_rail', 'right_patch', 'muzzle'],
        slotVisibilityRules: [
            { when: { slot: 'slot', value: 'op_spirit_37' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_m157' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_lpvo' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_sniper' }, show: ['lens_shade', 'upper_side_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_scout' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser' }, show: ['optic', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser2' }, show: ['tactical_device', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'br_g3_marksman' }, show: ['upper_rail', 'left_patch', 'left_rail', 'right_patch', 'muzzle'], hide: [] }
        ]
    },

    'k416': {
        optic: ['op_thermal_combat', 'op_thermal_holo', 'op_vmx', 'op_1p33', 'op_uhx', 'op_prism_2x', 'op_spirit_37', 'op_m157', 'op_viewpoint_3x', 'op_1p29', 'op_lpvo', 'op_sniper', 'op_scout', 'op_hamr', 'op_riser', 'op_riser2', 'op_riser', 'op_acog_6x', 'op_osight', 'op_cobra', 'op_combat_rd', 'op_mini_rd', 'op_okp7', 'op_xcog', 'op_xro', 'op_panorama', 'op_ap5000', 'op_holo_ii', 'op_red', 'op_ru_2x', 'op_holo', 'op_none'],
        muzzle: ['mu_web_titanium', 'mu_ffc_dual', 'mu_xinhuo', 'mu_advanced', 'mu_m7_silencer', 'mu_dead', 'mu_sandstorm', 'mu_fortress', 'mu_poseidon', 'mu_whisper', 'mu_titanium', 'mu_inferno', 'mu_steel_brake', 'mu_practical', 'mu_bird', 'mu_flame', 'mu_none'],
        barrel: ['br_k416a8_long', 'br_k416a8', 'br_k416_short', 'br_k416_elite', 'br_none'],
        foregrip: ['fg_resonance3', 'fg_ec_stop', 'fg_dawn_tri', 'fg_dawn_vert', 'fg_cr_prism', 'fg_resonance2', 'fg_bipod_grip', 'fg_k1_elite', 'fg_x25u', 'fg_resonance', 'fg_phantom_vert', 'fg_tactical_vert', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_fold', 'fg_vfg_knight', 'fg_zfsg', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_ar_modular', 'rg_ar_tower', 'rg_invasion', 'rg_phantom', 'rg_ar_moe', 'rg_shooter', 'rg_hurricane', 'rg_m7_stable', 'rg_none'],
        mag: ['ma_ar_60', 'ma_m4_60', 'ma_none'],
        stock: ['st_anchor_rail', 'st_qr_perf', 'st_ct_enhanced', 'st_shadow_core', 'st_416c_telescope', 'st_ur_tactical2', 'st_skeleton_sniper', 'st_416_stable', 'st_416_light', 'st_elite_light', 'st_raid_core', 'st_pivot_stable', 'st_m4_buffer', 'st_utility_light', 'st_tactical', 'st_none'],
        mag_seat: ['fn_honey_sd', 'fn_honey_gn', 'fn_honey_bk', 'mag_seat_none'],
        stock_kit: ['rg_resonance_g2', 'stock_kit_none'],
        side_optic: ['op_osight_side', 'op_side_combat', 'op_side', 'op_xro_side', 'op_side_pano', 'side_optic_none'],
        upper_rail: ['fn_warrior_light', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'ur_none'],
        left_rail: ['fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'lr_none'],
        right_rail: ['fn_warrior_light', 'fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'rr_none'],
        upper_patch: ['fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'up_none'],
        left_patch: ['fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'lp_none'],
        right_patch: ['fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'rp_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'rail_bipod', 'rear_grip_patch', 'grip_seat'],
        slotVisibilityRules: [
            { when: { slot: 'slot', value: 'op_spirit_37' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_m157' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_lpvo' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_sniper' }, show: ['lens_shade', 'upper_side_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_scout' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser' }, show: ['optic', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser2' }, show: ['tactical_device', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'br_k416a8_long' }, show: ['rail_bipod'], hide: [] },
            { when: { slot: 'slot', value: 'rg_ar_modular' }, show: ['rear_grip_patch'], hide: [] },
            { when: { slot: 'slot', value: 'rg_ar_tower' }, show: ['grip_seat'], hide: [] }
        ]
    },

    'k437': {
        optic: ['op_thermal_combat', 'op_thermal_holo', 'op_vmx', 'op_1p33', 'op_uhx', 'op_prism_2x', 'op_spirit_37', 'op_m157', 'op_viewpoint_3x', 'op_1p29', 'op_lpvo', 'op_sniper', 'op_scout', 'op_hamr', 'op_riser', 'op_riser2', 'op_riser', 'op_acog_6x', 'op_osight', 'op_cobra', 'op_combat_rd', 'op_mini_rd', 'op_okp7', 'op_xcog', 'op_xro', 'op_panorama', 'op_ap5000', 'op_holo_ii', 'op_red', 'op_ru_2x', 'op_holo', 'op_none'],
        muzzle: ['mu_web_titanium', 'mu_ffc_dual', 'mu_xinhuo', 'mu_advanced', 'mu_m7_silencer', 'mu_dead', 'mu_sandstorm', 'mu_fortress', 'mu_poseidon', 'mu_whisper', 'mu_titanium', 'mu_inferno', 'mu_steel_brake', 'mu_practical', 'mu_flame', 'mu_none'],
        barrel: ['br_none'],
        foregrip: ['fg_resonance3', 'fg_ec_stop', 'fg_dawn_tri', 'fg_dawn_vert', 'fg_cr_prism', 'fg_resonance2', 'fg_bipod_grip', 'fg_k1_elite', 'fg_x25u', 'fg_resonance', 'fg_phantom_vert', 'fg_tactical_vert', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_fold', 'fg_vfg_knight', 'fg_zfsg', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_ar_modular', 'rg_ar_tower', 'rg_invasion', 'rg_phantom', 'rg_ar_moe', 'rg_shooter', 'rg_hurricane', 'rg_m7_stable', 'rg_416_prac', 'rg_none'],
        mag: ['ma_none'],
        stock: ['st_anchor_rail', 'st_qr_perf', 'st_ct_enhanced', 'st_shadow_core', 'st_mrgs_hollow', 'st_ur_tactical2', 'st_shadow_rail', 'st_skeleton_sniper', 'st_416_stable', 'st_416_light', 'st_elite_light', 'st_raid_core', 'st_pivot_stable', 'st_lightning_rail', 'st_utility_light', 'st_tactical', 'st_stable', 'st_core_rail', 'st_none'],
        mag_seat: ['fn_honey_sd', 'fn_honey_gn', 'fn_honey_bk', 'mag_seat_none'],
        side_optic: ['op_osight_side', 'op_side_combat', 'op_side', 'op_xro_side', 'op_side_pano', 'side_optic_none'],
        upper_rail: ['fn_warrior_light', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'ur_none'],
        left_rail: ['fn_warrior_light', 'fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'lr_none'],
        right_rail: ['fn_warrior_light', 'fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'rr_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'rear_grip_patch', 'grip_seat'],
        slotVisibilityRules: [
            { when: { slot: 'slot', value: 'op_spirit_37' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_m157' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_lpvo' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_sniper' }, show: ['lens_shade', 'upper_side_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_scout' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser' }, show: ['optic', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser2' }, show: ['tactical_device', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'rg_ar_modular' }, show: ['rear_grip_patch'], hide: [] },
            { when: { slot: 'slot', value: 'rg_ar_tower' }, show: ['grip_seat'], hide: [] }
        ]
    },

    'kc17': {
        optic: ['op_thermal_combat', 'op_thermal_holo', 'op_vmx', 'op_1p33', 'op_uhx', 'op_prism_2x', 'op_spirit_37', 'op_m157', 'op_viewpoint_3x', 'op_1p29', 'op_lpvo', 'op_sniper', 'op_scout', 'op_hamr', 'op_riser', 'op_riser2', 'op_riser', 'op_acog_6x', 'op_osight', 'op_cobra', 'op_combat_rd', 'op_mini_rd', 'op_okp7', 'op_xcog', 'op_xro', 'op_panorama', 'op_ap5000', 'op_holo_ii', 'op_red', 'op_ru_2x', 'op_holo', 'op_none'],
        muzzle: ['mu_ffc_dual', 'mu_xinhuo', 'mu_advanced', 'mu_dtk', 'mu_m7_silencer', 'mu_ak_brave', 'mu_pbs', 'mu_dead', 'mu_sandstorm', 'mu_fortress', 'mu_poseidon', 'mu_whisper', 'mu_titanium', 'mu_inferno', 'mu_ak_comp', 'mu_steel_brake', 'mu_practical', 'mu_flare_bell', 'mu_flame', 'mu_none'],
        barrel: ['br_none'],
        foregrip: ['fg_resonance3', 'fg_ec_stop', 'fg_dawn_tri', 'fg_dawn_vert', 'fg_cr_prism', 'fg_resonance2', 'fg_bipod_grip', 'fg_k1_elite', 'fg_x25u', 'fg_resonance', 'fg_phantom_vert', 'fg_tactical_vert', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_fold', 'fg_vfg_knight', 'fg_zfsg', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_ar_modular', 'rg_ar_tower', 'rg_invasion', 'rg_phantom', 'rg_ar_moe', 'rg_shooter', 'rg_hurricane', 'rg_m7_stable', 'rg_416_prac', 'rg_none'],
        mag: ['ma_aks74u_45', 'ma_ak12_30', 'ma_none'],
        stock: ['st_anchor_rail', 'st_qr_perf', 'st_ct_enhanced', 'st_shadow_core', 'st_mrgs_hollow', 'st_ur_tactical2', 'st_shadow_rail', 'st_skeleton_sniper', 'st_416_stable', 'st_416_light', 'st_elite_light', 'st_raid_core', 'st_pivot_stable', 'st_lightning_rail', 'st_utility_light', 'st_tactical', 'st_core_rail', 'st_none'],
        mag_seat: ['fn_honey_sd', 'fn_honey_gn', 'fn_honey_bk', 'mag_seat_none'],
        side_optic: ['op_osight_side', 'op_side_combat', 'op_side', 'op_xro_side', 'op_side_pano', 'side_optic_none'],
        upper_rail: ['fn_dbal_x2', 'fn_laser', 'fn_la3c', 'fn_peq2', 'fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'ur_none'],
        left_rail: ['fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'lr_none'],
        right_rail: ['fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'rr_none'],
        left_patch: ['fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'lp_none'],
        right_patch: ['fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'rp_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'rear_grip_patch', 'grip_seat'],
        slotVisibilityRules: [
            { when: { slot: 'slot', value: 'op_spirit_37' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_m157' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_lpvo' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_sniper' }, show: ['lens_shade', 'upper_side_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_scout' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser' }, show: ['optic', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser2' }, show: ['tactical_device', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'rg_ar_modular' }, show: ['rear_grip_patch'], hide: [] },
            { when: { slot: 'slot', value: 'rg_ar_tower' }, show: ['grip_seat'], hide: [] }
        ]
    },

    'm16a4': {
        optic: ['op_thermal_combat', 'op_thermal_holo', 'op_vmx', 'op_1p33', 'op_uhx', 'op_prism_2x', 'op_spirit_37', 'op_m157', 'op_viewpoint_3x', 'op_1p29', 'op_lpvo', 'op_sniper', 'op_scout', 'op_hamr', 'op_riser', 'op_riser2', 'op_riser', 'op_acog_6x', 'op_osight', 'op_cobra', 'op_combat_rd', 'op_mini_rd', 'op_okp7', 'op_xcog', 'op_xro', 'op_panorama', 'op_ap5000', 'op_holo_ii', 'op_red', 'op_ru_2x', 'op_holo', 'op_none'],
        muzzle: ['mu_web_titanium', 'mu_ffc_dual', 'mu_xinhuo', 'mu_advanced', 'mu_m7_silencer', 'mu_dead', 'mu_sandstorm', 'mu_fortress', 'mu_poseidon', 'mu_whisper', 'mu_titanium', 'mu_inferno', 'mu_ops', 'mu_steel_brake', 'mu_practical', 'mu_bird', 'mu_flame', 'mu_none'],
        barrel: ['br_ar_integrated', 'br_ar_assault', 'br_ar_trench', 'br_ar_gabriel', 'br_ar_standard', 'br_ar_carbon', 'br_none'],
        rear_grip: ['rg_ar_modular', 'rg_ar_tower', 'rg_invasion', 'rg_phantom', 'rg_ar_moe', 'rg_shooter', 'rg_hurricane', 'rg_m7_stable', 'rg_416_prac', 'rg_none'],
        mag: ['ma_ar_60', 'ma_m4_60', 'ma_none'],
        stock: ['st_anchor_rail', 'st_qr_perf', 'st_ct_enhanced', 'st_shadow_core', 'st_ur_tactical2', 'st_skeleton_sniper', 'st_416_stable', 'st_416_light', 'st_elite_light', 'st_raid_core', 'st_pivot_stable', 'st_m4_buffer', 'st_utility_light', 'st_tactical', 'st_stable', 'st_none'],
        mag_seat: ['fn_honey_sd', 'fn_honey_bk', 'mag_seat_none'],
        stock_kit: ['rg_resonance_g2', 'st_restricted', 'stock_kit_none'],
        lower_rail: ['fn_car15_light', 'lower_rail_none'],
        side_optic: ['op_osight_side', 'op_side_combat', 'op_side', 'op_xro_side', 'op_side_pano', 'side_optic_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'foregrip', 'upper_rail', 'rail_bipod', 'right_rail', 'upper_patch', 'left_rail', 'left_patch', 'right_patch', 'rear_grip_patch', 'grip_seat'],
        slotVisibilityRules: [
            { when: { slot: 'slot', value: 'op_spirit_37' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_m157' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_lpvo' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_sniper' }, show: ['lens_shade', 'upper_side_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_scout' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser' }, show: ['optic', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser2' }, show: ['tactical_device', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'br_ar_integrated' }, show: ['foregrip', 'upper_rail', 'rail_bipod', 'right_rail', 'upper_patch', 'left_rail'], hide: [] },
            { when: { slot: 'slot', value: 'br_ar_assault' }, show: ['upper_rail', 'left_rail', 'foregrip', 'right_rail'], hide: [] },
            { when: { slot: 'slot', value: 'br_ar_trench' }, show: ['rail_bipod', 'foregrip', 'upper_rail', 'left_rail', 'right_rail', 'upper_patch', 'left_patch', 'right_patch'], hide: [] },
            { when: { slot: 'slot', value: 'br_ar_gabriel' }, show: ['foregrip', 'upper_rail', 'rail_bipod', 'left_rail', 'right_rail', 'upper_patch', 'right_patch', 'left_patch'], hide: [] },
            { when: { slot: 'slot', value: 'br_ar_standard' }, show: ['upper_rail', 'rail_bipod', 'foregrip', 'right_rail', 'upper_patch', 'left_rail', 'left_patch', 'right_patch'], hide: [] },
            { when: { slot: 'slot', value: 'br_ar_carbon' }, show: ['foregrip', 'upper_rail', 'rail_bipod', 'left_rail', 'right_rail', 'upper_patch', 'right_patch', 'left_patch'], hide: [] },
            { when: { slot: 'slot', value: 'rg_ar_modular' }, show: ['rear_grip_patch'], hide: [] },
            { when: { slot: 'slot', value: 'rg_ar_tower' }, show: ['grip_seat'], hide: [] }
        ]
    },

    'm4a1': {
        optic: ['op_thermal_combat', 'op_thermal_holo', 'op_vmx', 'op_1p33', 'op_uhx', 'op_prism_2x', 'op_spirit_37', 'op_m157', 'op_viewpoint_3x', 'op_1p29', 'op_lpvo', 'op_sniper', 'op_scout', 'op_hamr', 'op_riser', 'op_riser2', 'op_riser', 'op_acog_6x', 'op_osight', 'op_cobra', 'op_combat_rd', 'op_mini_rd', 'op_okp7', 'op_xcog', 'op_xro', 'op_panorama', 'op_ap5000', 'op_holo_ii', 'op_red', 'op_ru_2x', 'op_holo', 'op_none'],
        muzzle: ['mu_web_titanium', 'mu_ffc_dual', 'mu_xinhuo', 'mu_advanced', 'mu_m7_silencer', 'mu_dead', 'mu_sandstorm', 'mu_fortress', 'mu_poseidon', 'mu_whisper', 'mu_titanium', 'mu_inferno', 'mu_steel_brake', 'mu_practical', 'mu_bird', 'mu_flame', 'mu_none'],
        barrel: ['br_ar_integrated', 'br_ar_assault', 'br_ar_trench', 'br_ar_gabriel', 'br_ar_carbon', 'br_none'],
        foregrip: ['fg_resonance3', 'fg_ec_stop', 'fg_dawn_tri', 'fg_dawn_vert', 'fg_cr_prism', 'fg_resonance2', 'fg_bipod_grip', 'fg_k1_elite', 'fg_x25u', 'fg_resonance', 'fg_phantom_vert', 'fg_tactical_vert', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_fold', 'fg_vfg_knight', 'fg_zfsg', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_ar_modular', 'rg_ar_tower', 'rg_invasion', 'rg_phantom', 'rg_ar_moe', 'rg_shooter', 'rg_hurricane', 'rg_m7_stable', 'rg_416_prac', 'rg_none'],
        mag: ['ma_ar_60', 'ma_m4_60', 'ma_556_poly', 'ma_none'],
        stock: ['st_anchor_rail', 'st_qr_perf', 'st_ct_enhanced', 'st_shadow_core', 'st_ur_tactical2', 'st_skeleton_sniper', 'st_416_stable', 'st_416_light', 'st_elite_light', 'st_raid_core', 'st_pivot_stable', 'st_m4_buffer', 'st_utility_light', 'st_tactical', 'st_stable', 'st_none'],
        mag_seat: ['fn_honey_sd', 'fn_honey_gn', 'fn_honey_bk', 'mag_seat_none'],
        stock_kit: ['rg_resonance_g2', 'st_restricted', 'stock_kit_none'],
        side_optic: ['op_osight_side', 'op_side_combat', 'op_side', 'op_xro_side', 'op_side_pano', 'side_optic_none'],
        rail_bipod: ['rb_util', 'rb_none'],
        upper_rail: ['fn_warrior_light', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'ur_none'],
        left_rail: ['fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'lr_none'],
        right_rail: ['fn_warrior_light', 'fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'rr_none'],
        upper_patch: ['fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'up_none'],
        left_patch: ['fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'lp_none'],
        right_patch: ['fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'rp_none'],
        defaultHidden: [],
        slotVisibilityRules: []
    },

    'm7': {
        optic: ['op_thermal_combat', 'op_thermal_holo', 'op_vmx', 'op_1p33', 'op_uhx', 'op_prism_2x', 'op_spirit_37', 'op_m157', 'op_viewpoint_3x', 'op_1p29', 'op_lpvo', 'op_sniper', 'op_scout', 'op_hamr', 'op_riser', 'op_riser2', 'op_riser', 'op_acog_6x', 'op_osight', 'op_cobra', 'op_combat_rd', 'op_mini_rd', 'op_okp7', 'op_xcog', 'op_xro', 'op_panorama', 'op_ap5000', 'op_holo_ii', 'op_red', 'op_ru_2x', 'op_holo', 'op_none'],
        muzzle: ['mu_ffc_dual', 'mu_xinhuo', 'mu_advanced', 'mu_m7_silencer', 'mu_dead', 'mu_sandstorm', 'mu_fortress', 'mu_poseidon', 'mu_whisper', 'mu_titanium', 'mu_inferno', 'mu_steel_brake', 'mu_practical', 'mu_flame', 'mu_none'],
        barrel: ['br_none'],
        foregrip: ['fg_resonance3', 'fg_ec_stop', 'fg_dawn_tri', 'fg_dawn_vert', 'fg_cr_prism', 'fg_resonance2', 'fg_bipod_grip', 'fg_k1_elite', 'fg_x25u', 'fg_resonance', 'fg_phantom_vert', 'fg_tactical_vert', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_fold', 'fg_vfg_knight', 'fg_zfsg', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_ar_modular', 'rg_ar_tower', 'rg_invasion', 'rg_phantom', 'rg_ar_moe', 'rg_shooter', 'rg_hurricane', 'rg_416_prac', 'rg_none'],
        mag: ['ma_none'],
        stock: ['st_anchor_rail', 'st_qr_perf', 'st_ct_enhanced', 'st_shadow_core', 'st_mrgs_hollow', 'st_ur_tactical2', 'st_shadow_rail', 'st_skeleton_sniper', 'st_416_stable', 'st_416_light', 'st_elite_light', 'st_raid_core', 'st_pivot_stable', 'st_lightning_rail', 'st_utility_light', 'st_tactical', 'st_stable', 'st_core_rail', 'st_none'],
        mag_seat: ['fn_grizzly_sd', 'fn_grizzly_gn', 'fn_grizzly_bk', 'mag_seat_none'],
        side_optic: ['op_osight_side', 'op_side_combat', 'op_side', 'op_xro_side', 'op_side_pano', 'side_optic_none'],
        rail_bipod: ['rb_util', 'rb_none'],
        upper_rail: ['fn_warrior_light', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'ur_none'],
        left_rail: ['fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'lr_none'],
        right_rail: ['fn_warrior_light', 'fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'rr_none'],
        left_patch: ['fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'lp_none'],
        right_patch: ['fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'rp_none'],
        defaultHidden: [],
        slotVisibilityRules: []
    },

    'mcxlt': {
        optic: ['op_thermal_combat', 'op_thermal_holo', 'op_vmx', 'op_1p33', 'op_uhx', 'op_prism_2x', 'op_spirit_37', 'op_m157', 'op_viewpoint_3x', 'op_1p29', 'op_lpvo', 'op_sniper', 'op_scout', 'op_hamr', 'op_riser', 'op_riser2', 'op_riser', 'op_acog_6x', 'op_osight', 'op_cobra', 'op_combat_rd', 'op_mini_rd', 'op_okp7', 'op_xcog', 'op_xro', 'op_panorama', 'op_ap5000', 'op_holo_ii', 'op_red', 'op_ru_2x', 'op_holo', 'op_none'],
        muzzle: ['mu_web_titanium', 'mu_ffc_dual', 'mu_xinhuo', 'mu_advanced', 'mu_m7_silencer', 'mu_dead', 'mu_sandstorm', 'mu_fortress', 'mu_poseidon', 'mu_whisper', 'mu_titanium', 'mu_inferno', 'mu_steel_brake', 'mu_practical', 'mu_bird', 'mu_flame', 'mu_none'],
        barrel: ['br_none'],
        foregrip: ['fg_ec_stop', 'fg_cr_prism', 'fg_bipod_grip', 'fg_x25u', 'fg_phantom_vert', 'fg_tactical_vert', 'fg_rk0', 'fg_angle_stop', 'fg_phase_battle', 'fg_fold', 'fg_vfg_knight', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_ar_modular', 'rg_ar_tower', 'rg_invasion', 'rg_phantom', 'rg_ar_moe', 'rg_shooter', 'rg_hurricane', 'rg_m7_stable', 'rg_416_prac', 'rg_none'],
        mag: ['ma_ar_60', 'ma_m4_60', 'ma_none'],
        stock: ['st_anchor_rail', 'st_qr_perf', 'st_ct_enhanced', 'st_shadow_core', 'st_mrgs_hollow', 'st_ur_tactical2', 'st_shadow_rail', 'st_skeleton_sniper', 'st_416_stable', 'st_416_light', 'st_elite_light', 'st_raid_core', 'st_pivot_stable', 'st_lightning_rail', 'st_m4_buffer', 'st_utility_light', 'st_tactical', 'st_stable', 'st_core_rail', 'st_none'],
        mag_seat: ['fn_honey_sd', 'fn_honey_gn', 'fn_honey_bk', 'mag_seat_none'],
        side_optic: ['op_osight_side', 'op_side_combat', 'op_side', 'op_xro_side', 'op_side_pano', 'side_optic_none'],
        upper_rail: ['fn_warrior_light', 'fn_dbal_x2', 'fn_laser', 'fn_la3c', 'fn_peq2', 'fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'ur_none'],
        left_rail: ['fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'lr_none'],
        right_rail: ['fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'rr_none'],
        upper_patch: ['fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'up_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'rear_grip_patch', 'grip_seat'],
        slotVisibilityRules: [
            { when: { slot: 'slot', value: 'op_spirit_37' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_m157' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_lpvo' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_sniper' }, show: ['lens_shade', 'upper_side_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_scout' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser' }, show: ['optic', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser2' }, show: ['tactical_device', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'rg_ar_modular' }, show: ['rear_grip_patch'], hide: [] },
            { when: { slot: 'slot', value: 'rg_ar_tower' }, show: ['grip_seat'], hide: [] }
        ]
    },

    'mk47': {
        optic: ['op_thermal_combat', 'op_thermal_holo', 'op_vmx', 'op_1p33', 'op_uhx', 'op_prism_2x', 'op_spirit_37', 'op_m157', 'op_viewpoint_3x', 'op_1p29', 'op_lpvo', 'op_sniper', 'op_scout', 'op_hamr', 'op_riser', 'op_riser2', 'op_riser', 'op_acog_6x', 'op_osight', 'op_cobra', 'op_combat_rd', 'op_mini_rd', 'op_okp7', 'op_xcog', 'op_xro', 'op_panorama', 'op_ap5000', 'op_holo_ii', 'op_red', 'op_ru_2x', 'op_holo', 'op_none'],
        muzzle: ['mu_web_titanium', 'mu_ffc_dual', 'mu_xinhuo', 'mu_advanced', 'mu_dtk', 'mu_m7_silencer', 'mu_ak_brave', 'mu_pbs', 'mu_dead', 'mu_sandstorm', 'mu_fortress', 'mu_poseidon', 'mu_whisper', 'mu_titanium', 'mu_inferno', 'mu_ak_comp', 'mu_steel_brake', 'mu_practical', 'mu_flare_bell', 'mu_flame', 'mu_none'],
        barrel: ['br_none'],
        foregrip: ['fg_resonance3', 'fg_ec_stop', 'fg_dawn_tri', 'fg_dawn_vert', 'fg_cr_prism', 'fg_resonance2', 'fg_bipod_grip', 'fg_k1_elite', 'fg_x25u', 'fg_resonance', 'fg_phantom_vert', 'fg_tactical_vert', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_fold', 'fg_vfg_knight', 'fg_zfsg', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_ar_modular', 'rg_ar_tower', 'rg_invasion', 'rg_phantom', 'rg_ar_moe', 'rg_shooter', 'rg_hurricane', 'rg_m7_stable', 'rg_416_prac', 'rg_none'],
        mag: ['ma_akm_40', 'ma_none'],
        stock: ['st_anchor_rail', 'st_qr_perf', 'st_ct_enhanced', 'st_shadow_core', 'st_mrgs_hollow', 'st_ur_tactical2', 'st_shadow_rail', 'st_skeleton_sniper', 'st_416_stable', 'st_416_light', 'st_elite_light', 'st_raid_core', 'st_pivot_stable', 'st_lightning_rail', 'st_utility_light', 'st_tactical', 'st_core_rail', 'st_none'],
        mag_seat: ['fn_coyote_sd', 'fn_coyote_gn', 'fn_coyote_bk', 'mag_seat_none'],
        side_optic: ['op_osight_side', 'op_side_combat', 'op_side', 'op_xro_side', 'op_side_pano', 'side_optic_none'],
        upper_rail: ['fn_dbal_x2', 'fn_laser', 'fn_la3c', 'fn_peq2', 'fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'ur_none'],
        left_rail: ['fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'lr_none'],
        right_rail: ['fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'rr_none'],
        upper_patch: ['fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'up_none'],
        left_patch: ['fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'lp_none'],
        right_patch: ['fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'rp_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'rear_grip_patch', 'grip_seat'],
        slotVisibilityRules: [
            { when: { slot: 'slot', value: 'op_spirit_37' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_m157' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_lpvo' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_sniper' }, show: ['lens_shade', 'upper_side_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_scout' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser' }, show: ['optic', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser2' }, show: ['tactical_device', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'rg_ar_modular' }, show: ['rear_grip_patch'], hide: [] },
            { when: { slot: 'slot', value: 'rg_ar_tower' }, show: ['grip_seat'], hide: [] }
        ]
    },

    'ptr-32': {
        optic: ['op_thermal_combat', 'op_thermal_holo', 'op_vmx', 'op_1p33', 'op_uhx', 'op_prism_2x', 'op_spirit_37', 'op_m157', 'op_viewpoint_3x', 'op_1p29', 'op_lpvo', 'op_sniper', 'op_scout', 'op_hamr', 'op_riser', 'op_riser2', 'op_riser', 'op_acog_6x', 'op_osight', 'op_cobra', 'op_combat_rd', 'op_mini_rd', 'op_okp7', 'op_xcog', 'op_xro', 'op_panorama', 'op_ap5000', 'op_holo_ii', 'op_red', 'op_ru_2x', 'op_holo', 'op_none'],
        muzzle: ['mu_ffc_dual', 'mu_xinhuo', 'mu_advanced', 'mu_m7_silencer', 'mu_dead', 'mu_sandstorm', 'mu_fortress', 'mu_poseidon', 'mu_whisper', 'mu_titanium', 'mu_inferno', 'mu_steel_brake', 'mu_practical', 'mu_flame', 'mu_none'],
        barrel: ['br_g3_marksman', 'br_g3_heavy', 'br_g3_storm', 'br_g3_guard', 'br_none'],
        foregrip: ['fg_resonance3', 'fg_ec_stop', 'fg_dawn_tri', 'fg_dawn_vert', 'fg_cr_prism', 'fg_resonance2', 'fg_bipod_grip', 'fg_k1_elite', 'fg_x25u', 'fg_resonance', 'fg_phantom_vert', 'fg_tactical_vert', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_fold', 'fg_vfg_knight', 'fg_zfsg', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_g3_guard', 'rg_g3_skeleton', 'rg_psg1', 'rg_none'],
        mag: ['ma_akm_40', 'ma_akm_30', 'ma_none'],
        stock: ['st_anchor_rail', 'st_qr_perf', 'st_ct_enhanced', 'st_shadow_core', 'st_mrgs_hollow', 'st_ur_tactical2', 'st_shadow_rail', 'st_skeleton_sniper', 'st_pivot_adv', 'st_416_stable', 'st_416_light', 'st_elite_light', 'st_raid_core', 'st_pivot_stable', 'st_lightning_rail', 'st_mp5_telescope', 'st_g3_stable', 'st_mp5k_fold', 'st_g3_telescope', 'st_mp5', 'st_utility_light', 'st_tactical', 'st_stable', 'st_core_rail', 'st_none'],
        mag_seat: ['fn_coyote_sd', 'fn_coyote_gn', 'fn_coyote_bk', 'mag_seat_none'],
        side_optic: ['op_osight_side', 'op_side_combat', 'op_side', 'op_xro_side', 'op_side_pano', 'side_optic_none'],
        right_rail: ['fn_warrior_light', 'fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'rr_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'upper_rail', 'left_rail', 'rail_bipod', 'left_patch', 'right_patch', 'muzzle'],
        slotVisibilityRules: [
            { when: { slot: 'slot', value: 'op_spirit_37' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_m157' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_lpvo' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_sniper' }, show: ['lens_shade', 'upper_side_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_scout' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser' }, show: ['optic', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser2' }, show: ['tactical_device', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'br_g3_marksman' }, show: ['upper_rail', 'left_rail', 'rail_bipod', 'left_patch', 'right_patch', 'muzzle'], hide: [] }
        ]
    },

    'qbz95-1': {
        muzzle: ['mu_ffc_dual', 'mu_xinhuo', 'mu_advanced', 'mu_m7_silencer', 'mu_dead', 'mu_sandstorm', 'mu_fortress', 'mu_poseidon', 'mu_whisper', 'mu_titanium', 'mu_inferno', 'mu_steel_brake', 'mu_practical', 'mu_flame', 'mu_none'],
        barrel: ['br_none'],
        foregrip: ['fg_ec_stop', 'fg_dawn_tri', 'fg_dawn_vert', 'fg_cr_prism', 'fg_bipod_grip', 'fg_k1_elite', 'fg_x25u', 'fg_phantom_vert', 'fg_tactical_vert', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_fold', 'fg_vfg_knight', 'fg_zfsg', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_invasion', 'rg_phantom', 'rg_ar_moe', 'rg_shooter', 'rg_hurricane', 'rg_m7_stable', 'rg_416_prac', 'rg_none'],
        mag: ['ma_qbz_30', 'ma_qbz_60', 'ma_none'],
        handguard_kit: ['hg_qbz95_kit', 'hg_none'],
        cheek_pad: ['st_qbz_pad', 'cheek_pad_none'],
        mag_seat: ['fn_honey_sd', 'fn_honey_gn', 'fn_honey_bk', 'mag_seat_none'],
        defaultHidden: ['optic', 'upper_rail', 'left_rail', 'right_rail', 'side_optic', 'lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device'],
        slotVisibilityRules: [
            { when: { slot: 'slot', value: 'hg_qbz95_kit' }, show: ['optic', 'upper_rail', 'left_rail', 'right_rail', 'side_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_spirit_37' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_m157' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_lpvo' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_sniper' }, show: ['lens_shade', 'upper_side_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_scout' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser' }, show: ['optic', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser2' }, show: ['tactical_device', 'riser_optic'], hide: [] }
        ]
    },

    'rm277': {
        optic: ['op_thermal_combat', 'op_thermal_holo', 'op_vmx', 'op_1p33', 'op_uhx', 'op_prism_2x', 'op_spirit_37', 'op_m157', 'op_viewpoint_3x', 'op_1p29', 'op_lpvo', 'op_sniper', 'op_scout', 'op_hamr', 'op_riser', 'op_riser2', 'op_riser', 'op_acog_6x', 'op_osight', 'op_cobra', 'op_combat_rd', 'op_mini_rd', 'op_okp7', 'op_xcog', 'op_xro', 'op_panorama', 'op_ap5000', 'op_holo_ii', 'op_red', 'op_ru_2x', 'op_holo', 'op_none'],
        muzzle: ['mu_web_titanium', 'mu_xinhuo', 'mu_advanced', 'mu_m7_silencer', 'mu_dead', 'mu_sandstorm', 'mu_fortress', 'mu_poseidon', 'mu_whisper', 'mu_titanium', 'mu_inferno', 'mu_steel_brake', 'mu_practical', 'mu_bird', 'mu_flame', 'mu_none'],
        barrel: ['br_none'],
        foregrip: ['fg_resonance3', 'fg_ec_stop', 'fg_dawn_tri', 'fg_dawn_vert', 'fg_cr_prism', 'fg_resonance2', 'fg_bipod_grip', 'fg_k1_elite', 'fg_x25u', 'fg_resonance', 'fg_phantom_vert', 'fg_tactical_vert', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_fold', 'fg_vfg_knight', 'fg_zfsg', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_ar_modular', 'rg_ar_tower', 'rg_invasion', 'rg_phantom', 'rg_ar_moe', 'rg_shooter', 'rg_hurricane', 'rg_m7_stable', 'rg_416_prac', 'rg_none'],
        mag: ['ma_none'],
        cheek_pad: ['cheek_pad_none'],
        stock_pad: ['stock_pad_none'],
        mag_seat: ['fn_grizzly_gn', 'fn_grizzly_bk', 'mag_seat_none'],
        side_optic: ['op_osight_side', 'op_side_combat', 'op_side', 'op_xro_side', 'op_side_pano', 'side_optic_none'],
        rail_bipod: ['rb_util', 'rb_none'],
        left_rail: ['fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'lr_none'],
        right_rail: ['fn_warrior_light', 'fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'rr_none'],
        left_patch: ['fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'lp_none'],
        right_patch: ['fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'rp_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'rear_grip_patch', 'grip_seat'],
        slotVisibilityRules: [
            { when: { slot: 'slot', value: 'op_spirit_37' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_m157' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_lpvo' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_sniper' }, show: ['lens_shade', 'upper_side_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_scout' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser' }, show: ['optic', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser2' }, show: ['tactical_device', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'rg_ar_modular' }, show: ['rear_grip_patch'], hide: [] },
            { when: { slot: 'slot', value: 'rg_ar_tower' }, show: ['grip_seat'], hide: [] }
        ]
    },

    'scar-h': {
        optic: ['op_thermal_combat', 'op_thermal_holo', 'op_vmx', 'op_1p33', 'op_uhx', 'op_prism_2x', 'op_spirit_37', 'op_m157', 'op_viewpoint_3x', 'op_1p29', 'op_lpvo', 'op_sniper', 'op_scout', 'op_hamr', 'op_riser', 'op_riser2', 'op_riser', 'op_acog_6x', 'op_osight', 'op_cobra', 'op_combat_rd', 'op_mini_rd', 'op_okp7', 'op_xcog', 'op_xro', 'op_panorama', 'op_ap5000', 'op_holo_ii', 'op_red', 'op_ru_2x', 'op_holo', 'op_none'],
        muzzle: ['mu_web_titanium', 'mu_ffc_dual', 'mu_xinhuo', 'mu_advanced', 'mu_m7_silencer', 'mu_dead', 'mu_sandstorm', 'mu_fortress', 'mu_poseidon', 'mu_whisper', 'mu_titanium', 'mu_inferno', 'mu_steel_brake', 'mu_practical', 'mu_flame', 'mu_none'],
        barrel: ['br_none'],
        foregrip: ['fg_resonance3', 'fg_ec_stop', 'fg_dawn_tri', 'fg_dawn_vert', 'fg_cr_prism', 'fg_resonance2', 'fg_bipod_grip', 'fg_k1_elite', 'fg_x25u', 'fg_resonance', 'fg_phantom_vert', 'fg_tactical_vert', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_fold', 'fg_vfg_knight', 'fg_zfsg', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_ar_modular', 'rg_ar_tower', 'rg_invasion', 'rg_phantom', 'rg_ar_moe', 'rg_shooter', 'rg_hurricane', 'rg_m7_stable', 'rg_416_prac', 'rg_none'],
        mag: ['ma_none'],
        stock: ['st_anchor_rail', 'st_qr_perf', 'st_ct_enhanced', 'st_shadow_core', 'st_mrgs_hollow', 'st_ur_tactical2', 'st_shadow_rail', 'st_skeleton_sniper', 'st_pivot_adv', 'st_416_stable', 'st_416_light', 'st_elite_light', 'st_raid_core', 'st_pivot_stable', 'st_lightning_rail', 'st_scar_end', 'st_utility_light', 'st_tactical', 'st_stable', 'st_core_rail', 'st_none'],
        mag_seat: ['fn_grizzly_sd', 'fn_grizzly_gn', 'fn_grizzly_bk', 'mag_seat_none'],
        side_optic: ['op_osight_side', 'op_side_combat', 'op_side', 'op_xro_side', 'op_side_pano', 'side_optic_none'],
        upper_rail: ['fn_warrior_light', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'ur_none'],
        left_rail: ['fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'lr_none'],
        right_rail: ['fn_warrior_light', 'fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'rr_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'rear_grip_patch', 'grip_seat'],
        slotVisibilityRules: [
            { when: { slot: 'slot', value: 'op_spirit_37' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_m157' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_lpvo' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_sniper' }, show: ['lens_shade', 'upper_side_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_scout' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser' }, show: ['optic', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser2' }, show: ['tactical_device', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'rg_ar_modular' }, show: ['rear_grip_patch'], hide: [] },
            { when: { slot: 'slot', value: 'rg_ar_tower' }, show: ['grip_seat'], hide: [] }
        ]
    },

    'sg552': {
        optic: ['op_thermal_combat', 'op_thermal_holo', 'op_vmx', 'op_1p33', 'op_uhx', 'op_prism_2x', 'op_spirit_37', 'op_m157', 'op_viewpoint_3x', 'op_1p29', 'op_lpvo', 'op_sniper', 'op_scout', 'op_hamr', 'op_riser', 'op_riser2', 'op_riser', 'op_acog_6x', 'op_osight', 'op_cobra', 'op_combat_rd', 'op_mini_rd', 'op_okp7', 'op_xcog', 'op_xro', 'op_panorama', 'op_ap5000', 'op_holo_ii', 'op_red', 'op_ru_2x', 'op_holo', 'op_none'],
        muzzle: ['mu_web_titanium', 'mu_ffc_dual', 'mu_xinhuo', 'mu_advanced', 'mu_m7_silencer', 'mu_dead', 'mu_sandstorm', 'mu_fortress', 'mu_poseidon', 'mu_whisper', 'mu_titanium', 'mu_inferno', 'mu_steel_brake', 'mu_practical', 'mu_bird', 'mu_flame', 'mu_none'],
        barrel: ['br_none'],
        foregrip: ['fg_resonance3', 'fg_ec_stop', 'fg_dawn_tri', 'fg_dawn_vert', 'fg_cr_prism', 'fg_resonance2', 'fg_bipod_grip', 'fg_k1_elite', 'fg_x25u', 'fg_resonance', 'fg_phantom_vert', 'fg_tactical_vert', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_fold', 'fg_vfg_knight', 'fg_zfsg', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_ar_modular', 'rg_ar_tower', 'rg_invasion', 'rg_phantom', 'rg_ar_moe', 'rg_shooter', 'rg_hurricane', 'rg_m7_stable', 'rg_416_prac', 'rg_none'],
        mag: ['ma_none'],
        stock: ['st_anchor_rail', 'st_qr_perf', 'st_ct_enhanced', 'st_shadow_core', 'st_mrgs_hollow', 'st_ur_tactical2', 'st_shadow_rail', 'st_skeleton_sniper', 'st_pivot_adv', 'st_416_stable', 'st_416_light', 'st_elite_light', 'st_raid_core', 'st_pivot_stable', 'st_lightning_rail', 'st_utility_light', 'st_tactical', 'st_stable', 'st_core_rail', 'st_none'],
        mag_seat: ['fn_honey_sd', 'fn_honey_gn', 'fn_honey_bk', 'mag_seat_none'],
        side_optic: ['op_osight_side', 'op_side_combat', 'op_side', 'op_xro_side', 'op_side_pano', 'side_optic_none'],
        right_rail: ['fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'rr_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'rear_grip_patch', 'grip_seat'],
        slotVisibilityRules: [
            { when: { slot: 'slot', value: 'op_spirit_37' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_m157' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_lpvo' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_sniper' }, show: ['lens_shade', 'upper_side_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_scout' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser' }, show: ['optic', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser2' }, show: ['tactical_device', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'rg_ar_modular' }, show: ['rear_grip_patch'], hide: [] },
            { when: { slot: 'slot', value: 'rg_ar_tower' }, show: ['grip_seat'], hide: [] }
        ]
    },

    'tenglong': {
        optic: ['op_thermal_combat', 'op_thermal_holo', 'op_vmx', 'op_1p33', 'op_uhx', 'op_prism_2x', 'op_spirit_37', 'op_m157', 'op_viewpoint_3x', 'op_1p29', 'op_lpvo', 'op_sniper', 'op_scout', 'op_hamr', 'op_riser', 'op_riser2', 'op_riser', 'op_acog_6x', 'op_osight', 'op_cobra', 'op_combat_rd', 'op_mini_rd', 'op_okp7', 'op_xcog', 'op_xro', 'op_panorama', 'op_ap5000', 'op_holo_ii', 'op_red', 'op_ru_2x', 'op_holo', 'op_none'],
        muzzle: ['mu_web_titanium', 'mu_ffc_dual', 'mu_xinhuo', 'mu_advanced', 'mu_m7_silencer', 'mu_dead', 'mu_sandstorm', 'mu_fortress', 'mu_poseidon', 'mu_whisper', 'mu_titanium', 'mu_inferno', 'mu_steel_brake', 'mu_practical', 'mu_flame', 'mu_none'],
        barrel: ['br_none'],
        foregrip: ['fg_resonance3', 'fg_ec_stop', 'fg_dawn_tri', 'fg_dawn_vert', 'fg_cr_prism', 'fg_resonance2', 'fg_bipod_grip', 'fg_k1_elite', 'fg_x25u', 'fg_resonance', 'fg_phantom_vert', 'fg_tactical_vert', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_fold', 'fg_vfg_knight', 'fg_zfsg', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_qjb201_soldier', 'rg_qjb201_heavy', 'rg_qjb201_light', 'rg_none'],
        mag: ['ma_qbz_60', 'ma_none'],
        stock: ['st_anchor_rail', 'st_qr_perf', 'st_ct_enhanced', 'st_shadow_core', 'st_ur_tactical2', 'st_skeleton_sniper', 'st_416_stable', 'st_416_light', 'st_elite_light', 'st_raid_core', 'st_pivot_stable', 'st_m4_buffer', 'st_utility_light', 'st_tactical', 'st_stable', 'st_none'],
        mag_seat: ['fn_honey_sd', 'fn_honey_gn', 'fn_honey_bk', 'mag_seat_none'],
        gas_block: ['gas_block_none'],
        side_optic: ['op_osight_side', 'op_side_combat', 'op_side', 'op_xro_side', 'op_side_pano', 'side_optic_none'],
        upper_rail: ['fn_warrior_light', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'ur_none'],
        left_rail: ['fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'lr_none'],
        right_rail: ['fn_warrior_light', 'fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'rr_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device'],
        slotVisibilityRules: [
            { when: { slot: 'slot', value: 'op_spirit_37' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_m157' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_lpvo' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_sniper' }, show: ['lens_shade', 'upper_side_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_scout' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser' }, show: ['optic', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser2' }, show: ['tactical_device', 'riser_optic'], hide: [] }
        ]
    },

    // ==================== 冲锋枪 ====================

    'bizon': {
        optic: ['op_thermal_combat', 'op_thermal_holo', 'op_vmx', 'op_1p33', 'op_uhx', 'op_prism_2x', 'op_spirit_37', 'op_m157', 'op_viewpoint_3x', 'op_1p29', 'op_lpvo', 'op_sniper', 'op_scout', 'op_hamr', 'op_riser', 'op_riser2', 'op_riser', 'op_acog_6x', 'op_osight', 'op_cobra', 'op_combat_rd', 'op_mini_rd', 'op_okp7', 'op_xcog', 'op_xro', 'op_panorama', 'op_ap5000', 'op_holo_ii', 'op_red', 'op_ru_2x', 'op_holo', 'op_none'],
        muzzle: ['mu_ffc_dual', 'mu_xinhuo', 'mu_advanced', 'mu_m7_silencer', 'mu_ru_smg', 'mu_smg_echo', 'mu_dead', 'mu_sandstorm', 'mu_fortress', 'mu_poseidon', 'mu_whisper', 'mu_titanium', 'mu_inferno', 'mu_steel_brake', 'mu_practical', 'mu_flame', 'mu_none'],
        barrel: ['br_none'],
        rear_grip: ['rg_ak_scorpion', 'rg_rk3', 'rg_ak_skeleton', 'rg_ak_tower', 'rg_ak_stable', 'rg_ak_shooter', 'rg_none'],
        mag: ['ma_none'],
        stock: ['st_qr_perf', 'st_ct_enhanced', 'st_shadow_core', 'st_mrgs_hollow', 'st_pt3_death', 'st_pt1_special', 'st_ur_tactical2', 'st_shadow_rail', 'st_skeleton_sniper', 'st_ak19', 'st_pivot_adv', 'st_416_stable', 'st_416_light', 'st_elite_light', 'st_raid_core', 'st_pivot_stable', 'st_lightning_rail', 'st_ak_endcap', 'st_ak', 'st_ak_polymer', 'st_utility_light', 'st_tactical', 'st_stable', 'st_core_rail', 'st_none'],
        handguard: ['hg_bizon_carbon', 'hg_none'],
        stock_pad: ['st_ak_bumper', 'stock_pad_none'],
        bolt: ['fn_zentinert', 'bolt_none'],
        side_optic: ['op_osight_side', 'op_side_combat', 'op_side', 'op_xro_side', 'op_side_pano', 'side_optic_none'],
        left_rail: ['fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'lr_none'],
        right_rail: ['fn_warrior_light', 'fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'rr_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'grip_seat'],
        slotVisibilityRules: [
            { when: { slot: 'slot', value: 'op_spirit_37' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_m157' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_lpvo' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_sniper' }, show: ['lens_shade', 'upper_side_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_scout' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser' }, show: ['optic', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser2' }, show: ['tactical_device', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'rg_ak_tower' }, show: ['grip_seat'], hide: [] }
        ]
    },

    'mk4': {
        optic: ['op_thermal_combat', 'op_thermal_holo', 'op_vmx', 'op_1p33', 'op_uhx', 'op_prism_2x', 'op_spirit_37', 'op_m157', 'op_viewpoint_3x', 'op_1p29', 'op_lpvo', 'op_sniper', 'op_scout', 'op_hamr', 'op_riser', 'op_riser2', 'op_riser', 'op_acog_6x', 'op_osight', 'op_cobra', 'op_combat_rd', 'op_mini_rd', 'op_okp7', 'op_xcog', 'op_xro', 'op_panorama', 'op_ap5000', 'op_holo_ii', 'op_red', 'op_ru_2x', 'op_holo', 'op_none'],
        muzzle: ['mu_web_titanium', 'mu_ffc_dual', 'mu_xinhuo', 'mu_advanced', 'mu_m7_silencer', 'mu_smg_echo', 'mu_dead', 'mu_sandstorm', 'mu_fortress', 'mu_poseidon', 'mu_whisper', 'mu_titanium', 'mu_inferno', 'mu_steel_brake', 'mu_practical', 'mu_bird', 'mu_flame', 'mu_none'],
        barrel: ['br_mk4_deepspace', 'br_mk4_exclusive', 'br_none'],
        foregrip: ['fg_resonance3', 'fg_ec_stop', 'fg_dawn_vert', 'fg_cr_prism', 'fg_bipod_grip', 'fg_k1_elite', 'fg_x25u', 'fg_phantom_vert', 'fg_tactical_vert', 'fg_rk0', 'fg_angle_stop', 'fg_phase_battle', 'fg_fold', 'fg_vfg_knight', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_ar_modular', 'rg_ar_tower', 'rg_invasion', 'rg_phantom', 'rg_ar_moe', 'rg_shooter', 'rg_hurricane', 'rg_m7_stable', 'rg_416_prac', 'rg_none'],
        mag: ['ma_none'],
        stock: ['st_anchor_rail', 'st_qr_perf', 'st_ct_enhanced', 'st_shadow_core', 'st_ur_tactical2', 'st_skeleton_sniper', 'st_416_stable', 'st_416_light', 'st_elite_light', 'st_raid_core', 'st_pivot_stable', 'st_m4_buffer', 'st_utility_light', 'st_tactical', 'st_none'],
        mag_seat: ['fn_wasp_sd', 'fn_wasp_gn', 'fn_wasp_bk', 'mag_seat_none'],
        side_optic: ['op_osight_side', 'op_side_combat', 'op_side', 'op_xro_side', 'op_side_pano', 'side_optic_none'],
        upper_rail: ['fn_dbal_x2', 'fn_laser', 'fn_la3c', 'fn_peq2', 'fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'ur_none'],
        left_rail: ['fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'lr_none'],
        right_rail: ['fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'rr_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'rear_grip_patch', 'grip_seat'],
        slotVisibilityRules: [
            { when: { slot: 'slot', value: 'op_spirit_37' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_m157' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_lpvo' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_sniper' }, show: ['lens_shade', 'upper_side_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_scout' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser' }, show: ['optic', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser2' }, show: ['tactical_device', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'rg_ar_modular' }, show: ['rear_grip_patch'], hide: [] },
            { when: { slot: 'slot', value: 'rg_ar_tower' }, show: ['grip_seat'], hide: [] }
        ]
    },

    'mp5': {
        optic: ['op_thermal_combat', 'op_thermal_holo', 'op_vmx', 'op_1p33', 'op_uhx', 'op_prism_2x', 'op_spirit_37', 'op_m157', 'op_viewpoint_3x', 'op_1p29', 'op_lpvo', 'op_sniper', 'op_scout', 'op_hamr', 'op_riser', 'op_riser2', 'op_riser', 'op_acog_6x', 'op_osight', 'op_cobra', 'op_combat_rd', 'op_mini_rd', 'op_okp7', 'op_xcog', 'op_xro', 'op_panorama', 'op_ap5000', 'op_holo_ii', 'op_red', 'op_ru_2x', 'op_holo', 'op_none'],
        muzzle: ['mu_ffc_dual', 'mu_xinhuo', 'mu_advanced', 'mu_m7_silencer', 'mu_smg_echo', 'mu_dead', 'mu_sandstorm', 'mu_fortress', 'mu_poseidon', 'mu_whisper', 'mu_titanium', 'mu_inferno', 'mu_steel_brake', 'mu_practical', 'mu_flame', 'mu_none'],
        barrel: ['br_mp5_scout', 'br_mp5_covert', 'br_mp5_tactical', 'br_mp5_perf', 'br_none'],
        foregrip: ['fg_ec_stop', 'fg_cr_prism', 'fg_bipod_grip', 'fg_x25u', 'fg_phantom_vert', 'fg_tactical_vert', 'fg_rk0', 'fg_angle_stop', 'fg_phase_battle', 'fg_fold', 'fg_vfg_knight', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        mag: ['ma_mp5_50', 'ma_none'],
        stock: ['st_anchor_rail', 'st_qr_perf', 'st_ct_enhanced', 'st_shadow_core', 'st_mrgs_hollow', 'st_ur_tactical2', 'st_shadow_rail', 'st_skeleton_sniper', 'st_pivot_adv', 'st_416_stable', 'st_416_light', 'st_elite_light', 'st_raid_core', 'st_pivot_stable', 'st_lightning_rail', 'st_mp5_telescope', 'st_g3_stable', 'st_mp5k_fold', 'st_g3_telescope', 'st_mp5', 'st_utility_light', 'st_tactical', 'st_stable', 'st_core_rail', 'st_none'],
        mag_seat: ['fn_wasp_sd', 'fn_wasp_bk', 'mag_seat_none'],
        side_optic: ['op_osight_side', 'op_side_combat', 'op_side', 'op_xro_side', 'op_side_pano', 'side_optic_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'left_rail', 'right_rail', 'foregrip', 'muzzle', 'upper_rail'],
        slotVisibilityRules: [
            { when: { slot: 'slot', value: 'op_spirit_37' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_m157' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_lpvo' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_sniper' }, show: ['lens_shade', 'upper_side_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_scout' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser' }, show: ['optic', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser2' }, show: ['tactical_device', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'br_mp5_scout' }, show: ['left_rail', 'right_rail', 'foregrip', 'muzzle'], hide: [] },
            { when: { slot: 'slot', value: 'br_mp5_covert' }, show: ['upper_rail', 'left_rail', 'right_rail', 'foregrip'], hide: [] },
            { when: { slot: 'slot', value: 'br_mp5_tactical' }, show: ['left_rail', 'right_rail', 'foregrip', 'muzzle'], hide: [] },
            { when: { slot: 'slot', value: 'br_mp5_perf' }, show: ['right_rail', 'left_rail', 'muzzle'], hide: [] }
        ]
    },

    'mp7': {
        optic: ['op_thermal_combat', 'op_thermal_holo', 'op_vmx', 'op_1p33', 'op_uhx', 'op_prism_2x', 'op_spirit_37', 'op_m157', 'op_viewpoint_3x', 'op_1p29', 'op_lpvo', 'op_sniper', 'op_scout', 'op_hamr', 'op_riser', 'op_riser2', 'op_riser', 'op_acog_6x', 'op_osight', 'op_cobra', 'op_combat_rd', 'op_mini_rd', 'op_okp7', 'op_xcog', 'op_xro', 'op_panorama', 'op_ap5000', 'op_holo_ii', 'op_red', 'op_ru_2x', 'op_holo', 'op_none'],
        muzzle: ['mu_web_titanium', 'mu_ffc_dual', 'mu_xinhuo', 'mu_advanced', 'mu_m7_silencer', 'mu_smg_echo', 'mu_dead', 'mu_sandstorm', 'mu_fortress', 'mu_poseidon', 'mu_whisper', 'mu_titanium', 'mu_inferno', 'mu_steel_brake', 'mu_practical', 'mu_flame', 'mu_none'],
        barrel: ['br_none'],
        foregrip: ['fg_ec_stop', 'fg_dawn_tri', 'fg_dawn_vert', 'fg_cr_prism', 'fg_bipod_grip', 'fg_k1_elite', 'fg_x25u', 'fg_phantom_vert', 'fg_tactical_vert', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_fold', 'fg_vfg_knight', 'fg_zfsg', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_mp7_stable', 'rg_none'],
        mag: ['ma_none'],
        stock: ['st_anchor_rail', 'st_qr_perf', 'st_ct_enhanced', 'st_shadow_core', 'st_mrgs_hollow', 'st_ur_tactical2', 'st_shadow_rail', 'st_mp7_end', 'st_skeleton_sniper', 'st_416_stable', 'st_416_light', 'st_elite_light', 'st_raid_core', 'st_pivot_stable', 'st_lightning_rail', 'st_utility_light', 'st_tactical', 'st_stable', 'st_core_rail', 'st_none'],
        side_optic: ['op_osight_side', 'op_side_combat', 'op_side', 'op_xro_side', 'op_side_pano', 'side_optic_none'],
        left_rail: ['fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'lr_none'],
        right_rail: ['fn_warrior_light', 'fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'rr_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device'],
        slotVisibilityRules: [
            { when: { slot: 'slot', value: 'op_spirit_37' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_m157' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_lpvo' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_sniper' }, show: ['lens_shade', 'upper_side_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_scout' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser' }, show: ['optic', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser2' }, show: ['tactical_device', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_marksman_612' }, show: ['lens_shade', 'upper_side_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_optical_8x' }, show: ['lens_shade'], hide: [] }
        ]
    },

    'p90': {
        optic: ['op_thermal_combat', 'op_thermal_holo', 'op_vmx', 'op_1p33', 'op_uhx', 'op_prism_2x', 'op_spirit_37', 'op_m157', 'op_viewpoint_3x', 'op_1p29', 'op_lpvo', 'op_sniper', 'op_scout', 'op_hamr', 'op_riser', 'op_riser2', 'op_riser', 'op_acog_6x', 'op_osight', 'op_cobra', 'op_combat_rd', 'op_mini_rd', 'op_okp7', 'op_xcog', 'op_xro', 'op_panorama', 'op_ap5000', 'op_holo_ii', 'op_red', 'op_ru_2x', 'op_holo', 'op_none'],
        muzzle: ['mu_ffc_dual', 'mu_xinhuo', 'mu_advanced', 'mu_m7_silencer', 'mu_smg_echo', 'mu_dead', 'mu_sandstorm', 'mu_fortress', 'mu_poseidon', 'mu_whisper', 'mu_titanium', 'mu_inferno', 'mu_steel_brake', 'mu_practical', 'mu_flame', 'mu_none'],
        barrel: ['br_none'],
        foregrip: ['fg_ec_stop', 'fg_cr_prism', 'fg_bipod_grip', 'fg_x25u', 'fg_phantom_vert', 'fg_tactical_vert', 'fg_rk0', 'fg_angle_stop', 'fg_phase_battle', 'fg_fold', 'fg_vfg_knight', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        stock: ['st_none'],
        cheek_pad: ['st_universal_pad', 'cheek_pad_none'],
        side_optic: ['op_osight_side', 'op_side_combat', 'op_side', 'op_xro_side', 'op_side_pano', 'side_optic_none'],
        right_rail: ['fn_warrior_light', 'fn_olight_odin', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'rr_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device'],
        slotVisibilityRules: [
            { when: { slot: 'slot', value: 'op_spirit_37' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_m157' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_lpvo' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_sniper' }, show: ['lens_shade', 'upper_side_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_scout' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser' }, show: ['optic', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser2' }, show: ['tactical_device', 'riser_optic'], hide: [] }
        ]
    },

    'qcq171': {
        optic: ['op_thermal_combat', 'op_thermal_holo', 'op_vmx', 'op_1p33', 'op_uhx', 'op_prism_2x', 'op_spirit_37', 'op_m157', 'op_viewpoint_3x', 'op_1p29', 'op_lpvo', 'op_sniper', 'op_scout', 'op_hamr', 'op_riser', 'op_riser2', 'op_riser', 'op_acog_6x', 'op_osight', 'op_cobra', 'op_combat_rd', 'op_mini_rd', 'op_okp7', 'op_xcog', 'op_xro', 'op_panorama', 'op_ap5000', 'op_holo_ii', 'op_red', 'op_ru_2x', 'op_holo', 'op_none'],
        muzzle: ['mu_web_titanium', 'mu_ffc_dual', 'mu_xinhuo', 'mu_advanced', 'mu_m7_silencer', 'mu_smg_echo', 'mu_dead', 'mu_sandstorm', 'mu_fortress', 'mu_poseidon', 'mu_whisper', 'mu_titanium', 'mu_inferno', 'mu_steel_brake', 'mu_practical', 'mu_flame', 'mu_none'],
        barrel: ['br_none'],
        foregrip: ['fg_ec_stop', 'fg_dawn_tri', 'fg_dawn_vert', 'fg_cr_prism', 'fg_bipod_grip', 'fg_k1_elite', 'fg_x25u', 'fg_phantom_vert', 'fg_tactical_vert', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_fold', 'fg_vfg_knight', 'fg_zfsg', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_qjb201_soldier', 'rg_qjb201_heavy', 'rg_qjb201_light', 'rg_none'],
        mag: ['ma_none'],
        stock: ['st_anchor_rail', 'st_qr_perf', 'st_ct_enhanced', 'st_shadow_core', 'st_mrgs_hollow', 'st_ur_tactical2', 'st_shadow_rail', 'st_skeleton_sniper', 'st_416_stable', 'st_416_light', 'st_elite_light', 'st_raid_core', 'st_pivot_stable', 'st_lightning_rail', 'st_utility_light', 'st_tactical', 'st_stable', 'st_core_rail', 'st_none'],
        mag_seat: ['fn_wasp_sd', 'fn_wasp_gn', 'fn_wasp_bk', 'mag_seat_none'],
        bolt_carrier: ['bolt_carrier_none'],
        side_optic: ['op_osight_side', 'op_side_combat', 'op_side', 'op_xro_side', 'op_side_pano', 'side_optic_none'],
        upper_rail: ['fn_warrior_light', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'ur_none'],
        left_rail: ['fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'lr_none'],
        right_rail: ['fn_warrior_light', 'fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'rr_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device'],
        slotVisibilityRules: [
            { when: { slot: 'slot', value: 'op_spirit_37' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_m157' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_lpvo' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_sniper' }, show: ['lens_shade', 'upper_side_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_scout' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser' }, show: ['optic', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser2' }, show: ['tactical_device', 'riser_optic'], hide: [] }
        ]
    },

    'smg-45': {
        optic: ['op_thermal_combat', 'op_thermal_holo', 'op_vmx', 'op_1p33', 'op_uhx', 'op_prism_2x', 'op_spirit_37', 'op_m157', 'op_viewpoint_3x', 'op_1p29', 'op_lpvo', 'op_sniper', 'op_scout', 'op_hamr', 'op_riser', 'op_riser2', 'op_riser', 'op_acog_6x', 'op_osight', 'op_cobra', 'op_combat_rd', 'op_mini_rd', 'op_okp7', 'op_xcog', 'op_xro', 'op_panorama', 'op_ap5000', 'op_holo_ii', 'op_red', 'op_ru_2x', 'op_holo', 'op_none'],
        muzzle: ['mu_ffc_dual', 'mu_xinhuo', 'mu_advanced', 'mu_m7_silencer', 'mu_smg_echo', 'mu_dead', 'mu_sandstorm', 'mu_fortress', 'mu_poseidon', 'mu_whisper', 'mu_titanium', 'mu_inferno', 'mu_steel_brake', 'mu_practical', 'mu_flame', 'mu_none'],
        barrel: ['br_none'],
        foregrip: ['fg_resonance3', 'fg_ec_stop', 'fg_dawn_tri', 'fg_dawn_vert', 'fg_cr_prism', 'fg_resonance2', 'fg_bipod_grip', 'fg_k1_elite', 'fg_x25u', 'fg_resonance', 'fg_phantom_vert', 'fg_tactical_vert', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_fold', 'fg_vfg_knight', 'fg_zfsg', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_ar_modular', 'rg_ar_tower', 'rg_invasion', 'rg_phantom', 'rg_ar_moe', 'rg_shooter', 'rg_hurricane', 'rg_m7_stable', 'rg_416_prac', 'rg_none'],
        mag: ['ma_none'],
        stock: ['st_anchor_rail', 'st_qr_perf', 'st_ct_enhanced', 'st_shadow_core', 'st_mrgs_hollow', 'st_ur_tactical2', 'st_shadow_rail', 'st_skeleton_sniper', 'st_pivot_adv', 'st_416_stable', 'st_416_light', 'st_elite_light', 'st_raid_core', 'st_pivot_stable', 'st_lightning_rail', 'st_utility_light', 'st_tactical', 'st_stable', 'st_core_rail', 'st_none'],
        mag_seat: ['fn_wasp_gn', 'fn_wasp_bk', 'mag_seat_none'],
        side_optic: ['op_osight_side', 'op_side_combat', 'op_side', 'op_xro_side', 'op_side_pano', 'side_optic_none'],
        upper_rail: ['fn_warrior_light', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'ur_none'],
        left_rail: ['fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'lr_none'],
        right_rail: ['fn_warrior_light', 'fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'rr_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'rear_grip_patch', 'grip_seat'],
        slotVisibilityRules: [
            { when: { slot: 'slot', value: 'op_spirit_37' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_m157' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_lpvo' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_sniper' }, show: ['lens_shade', 'upper_side_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_scout' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser' }, show: ['optic', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser2' }, show: ['tactical_device', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'rg_ar_modular' }, show: ['rear_grip_patch'], hide: [] },
            { when: { slot: 'slot', value: 'rg_ar_tower' }, show: ['grip_seat'], hide: [] }
        ]
    },

    'sr-3m': {
        optic: ['op_thermal_combat', 'op_thermal_holo', 'op_vmx', 'op_1p33', 'op_uhx', 'op_prism_2x', 'op_spirit_37', 'op_m157', 'op_viewpoint_3x', 'op_1p29', 'op_lpvo', 'op_sniper', 'op_scout', 'op_hamr', 'op_riser', 'op_riser2', 'op_riser', 'op_acog_6x', 'op_osight', 'op_cobra', 'op_combat_rd', 'op_mini_rd', 'op_okp7', 'op_xcog', 'op_pso_25', 'op_xro', 'op_panorama', 'op_ap5000', 'op_pso_8x', 'op_holo_ii', 'op_red', 'op_ru_2x', 'op_holo', 'op_none'],
        muzzle: ['mu_ffc_dual', 'mu_xinhuo', 'mu_advanced', 'mu_dtk', 'mu_m7_silencer', 'mu_ru_smg', 'mu_ak_brave', 'mu_pbs', 'mu_smg_echo', 'mu_dead', 'mu_sandstorm', 'mu_fortress', 'mu_poseidon', 'mu_whisper', 'mu_titanium', 'mu_inferno', 'mu_ak_comp', 'mu_steel_brake', 'mu_practical', 'mu_flare_bell', 'mu_flame', 'mu_none'],
        barrel: ['br_none'],
        rear_grip: ['rg_ak_scorpion', 'rg_rk3', 'rg_ak_skeleton', 'rg_ak_tower', 'rg_ak_stable', 'rg_ak_shooter', 'rg_ak_prac', 'rg_none'],
        mag: ['ma_vss_45', 'ma_vss_30', 'ma_none'],
        stock: ['st_anchor_rail', 'st_qr_perf', 'st_ct_enhanced', 'st_shadow_core', 'st_mrgs_hollow', 'st_ur_tactical2', 'st_shadow_rail', 'st_skeleton_sniper', 'st_416_stable', 'st_416_light', 'st_elite_light', 'st_raid_core', 'st_pivot_stable', 'st_lightning_rail', 'st_sr3m', 'st_utility_light', 'st_tactical', 'st_stable', 'st_core_rail', 'st_none'],
        mag_seat: ['fn_coyote_sd', 'fn_coyote_bk', 'mag_seat_none'],
        bolt: ['fn_zentinert', 'bolt_none'],
        side_optic: ['op_osight_side', 'op_side_combat', 'op_side', 'op_xro_side', 'op_side_pano', 'side_optic_none'],
        left_rail: ['fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'lr_none'],
        right_rail: ['fn_warrior_light', 'fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'rr_none'],
        defaultHidden: [],
        slotVisibilityRules: []
    },

    'uzi': {
        optic: ['op_thermal_combat', 'op_thermal_holo', 'op_vmx', 'op_1p33', 'op_uhx', 'op_prism_2x', 'op_spirit_37', 'op_m157', 'op_viewpoint_3x', 'op_1p29', 'op_lpvo', 'op_sniper', 'op_scout', 'op_hamr', 'op_riser', 'op_riser2', 'op_riser', 'op_acog_6x', 'op_osight', 'op_cobra', 'op_combat_rd', 'op_mini_rd', 'op_okp7', 'op_xcog', 'op_xro', 'op_panorama', 'op_ap5000', 'op_holo_ii', 'op_red', 'op_ru_2x', 'op_holo', 'op_none'],
        muzzle: ['mu_ffc_dual', 'mu_xinhuo', 'mu_advanced', 'mu_m7_silencer', 'mu_smg_echo', 'mu_dead', 'mu_sandstorm', 'mu_fortress', 'mu_poseidon', 'mu_whisper', 'mu_titanium', 'mu_inferno', 'mu_steel_brake', 'mu_practical', 'mu_flame', 'mu_none'],
        barrel: ['br_none'],
        foregrip: ['fg_ec_stop', 'fg_cr_prism', 'fg_bipod_grip', 'fg_x25u', 'fg_phantom_vert', 'fg_tactical_vert', 'fg_rk0', 'fg_angle_stop', 'fg_phase_battle', 'fg_fold', 'fg_vfg_knight', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        mag: ['ma_none'],
        stock: ['st_anchor_rail', 'st_qr_perf', 'st_ct_enhanced', 'st_shadow_core', 'st_mrgs_hollow', 'st_ur_tactical2', 'st_shadow_rail', 'st_skeleton_sniper', 'st_416_stable', 'st_416_light', 'st_elite_light', 'st_raid_core', 'st_pivot_stable', 'st_lightning_rail', 'st_utility_light', 'st_tactical', 'st_stable', 'st_core_rail', 'st_none'],
        handguard: ['hg_uzi_perf', 'hg_uzi_rail', 'hg_none'],
        mag_seat: ['fn_wasp_sd', 'fn_wasp_gn', 'fn_wasp_bk', 'mag_seat_none'],
        left_rail: ['fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'lr_none'],
        right_rail: ['fn_warrior_light', 'fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'rr_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device'],
        slotVisibilityRules: [
            { when: { slot: 'slot', value: 'op_spirit_37' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_m157' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_lpvo' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_sniper' }, show: ['lens_shade', 'upper_side_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_scout' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser' }, show: ['optic', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser2' }, show: ['tactical_device', 'riser_optic'], hide: [] }
        ]
    },

    'vector': {
        optic: ['op_thermal_combat', 'op_thermal_holo', 'op_vmx', 'op_1p33', 'op_uhx', 'op_prism_2x', 'op_spirit_37', 'op_m157', 'op_viewpoint_3x', 'op_1p29', 'op_lpvo', 'op_sniper', 'op_scout', 'op_hamr', 'op_riser', 'op_riser2', 'op_riser', 'op_acog_6x', 'op_osight', 'op_cobra', 'op_combat_rd', 'op_mini_rd', 'op_okp7', 'op_xcog', 'op_xro', 'op_panorama', 'op_ap5000', 'op_holo_ii', 'op_red', 'op_ru_2x', 'op_holo', 'op_none'],
        muzzle: ['mu_ffc_dual', 'mu_xinhuo', 'mu_advanced', 'mu_m7_silencer', 'mu_smg_echo', 'mu_dead', 'mu_sandstorm', 'mu_fortress', 'mu_poseidon', 'mu_whisper', 'mu_titanium', 'mu_inferno', 'mu_steel_brake', 'mu_practical', 'mu_flame', 'mu_none'],
        barrel: ['br_vec_longsword', 'br_vec_fortress', 'br_vec_rail', 'br_none'],
        foregrip: ['fg_ec_stop', 'fg_cr_prism', 'fg_bipod_grip', 'fg_x25u', 'fg_phantom_vert', 'fg_tactical_vert', 'fg_rk0', 'fg_angle_stop', 'fg_phase_battle', 'fg_fold', 'fg_vfg_knight', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        mag: ['ma_none'],
        stock: ['st_anchor_rail', 'st_qr_perf', 'st_ct_enhanced', 'st_shadow_core', 'st_mrgs_hollow', 'st_vector_res', 'st_ur_tactical2', 'st_shadow_rail', 'st_skeleton_sniper', 'st_vector_end', 'st_416_stable', 'st_416_light', 'st_elite_light', 'st_raid_core', 'st_pivot_stable', 'st_lightning_rail', 'st_utility_light', 'st_tactical', 'st_stable', 'st_core_rail', 'st_none'],
        mag_seat: ['fn_wasp_sd', 'fn_wasp_gn', 'fn_wasp_bk', 'mag_seat_none'],
        side_optic: ['op_osight_side', 'op_side_combat', 'op_side', 'op_xro_side', 'op_side_pano', 'side_optic_none'],
        upper_rail: ['fn_warrior_light', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'ur_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'left_rail', 'rail_bipod', 'left_patch', 'upper_patch', 'right_rail', 'right_patch', 'muzzle'],
        slotVisibilityRules: [
            { when: { slot: 'slot', value: 'op_spirit_37' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_m157' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_lpvo' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_sniper' }, show: ['lens_shade', 'upper_side_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_scout' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser' }, show: ['optic', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser2' }, show: ['tactical_device', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'br_vec_longsword' }, show: ['left_rail', 'rail_bipod', 'left_patch', 'upper_patch', 'right_rail', 'right_patch', 'muzzle'], hide: [] },
            { when: { slot: 'slot', value: 'br_vec_fortress' }, show: ['right_rail', 'left_rail', 'muzzle'], hide: [] },
            { when: { slot: 'slot', value: 'br_vec_rail' }, show: ['left_rail', 'rail_bipod', 'right_rail', 'muzzle'], hide: [] }
        ]
    },

    'warrior': {
        optic: ['op_thermal_combat', 'op_thermal_holo', 'op_vmx', 'op_1p33', 'op_uhx', 'op_prism_2x', 'op_spirit_37', 'op_m157', 'op_viewpoint_3x', 'op_1p29', 'op_lpvo', 'op_sniper', 'op_scout', 'op_hamr', 'op_riser', 'op_riser2', 'op_riser', 'op_acog_6x', 'op_osight', 'op_cobra', 'op_combat_rd', 'op_mini_rd', 'op_okp7', 'op_xcog', 'op_xro', 'op_panorama', 'op_ap5000', 'op_holo_ii', 'op_red', 'op_ru_2x', 'op_holo', 'op_none'],
        muzzle: ['mu_ffc_dual', 'mu_xinhuo', 'mu_advanced', 'mu_m7_silencer', 'mu_ru_smg', 'mu_smg_echo', 'mu_dead', 'mu_sandstorm', 'mu_fortress', 'mu_poseidon', 'mu_whisper', 'mu_titanium', 'mu_inferno', 'mu_steel_brake', 'mu_practical', 'mu_flame', 'mu_none'],
        barrel: ['br_none'],
        foregrip: ['fg_ec_stop', 'fg_cr_prism', 'fg_bipod_grip', 'fg_x25u', 'fg_phantom_vert', 'fg_tactical_vert', 'fg_rk0', 'fg_angle_stop', 'fg_phase_battle', 'fg_fold', 'fg_vfg_knight', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_ak_scorpion', 'rg_rk3', 'rg_ak_skeleton', 'rg_ak_tower', 'rg_ak_stable', 'rg_ak_shooter', 'rg_ak_prac', 'rg_none'],
        mag: ['ma_none'],
        stock: ['st_anchor_rail', 'st_qr_perf', 'st_ct_enhanced', 'st_shadow_core', 'st_mrgs_hollow', 'st_pt3_death', 'st_pt1_special', 'st_ur_tactical2', 'st_shadow_rail', 'st_skeleton_sniper', 'st_ak19', 'st_pivot_adv', 'st_416_stable', 'st_416_light', 'st_elite_light', 'st_raid_core', 'st_pivot_stable', 'st_lightning_rail', 'st_ak_endcap', 'st_ak', 'st_ak_folding', 'st_ak_polymer', 'st_utility_light', 'st_tactical', 'st_stable', 'st_core_rail', 'st_none'],
        stock_pad: ['st_ak_bumper', 'stock_pad_none'],
        mag_seat: ['fn_wasp_sd', 'fn_wasp_bk', 'mag_seat_none'],
        bolt: ['fn_zentinert', 'bolt_none'],
        side_optic: ['op_osight_side', 'op_side_combat', 'op_side', 'op_xro_side', 'op_side_pano', 'side_optic_none'],
        right_rail: ['fn_warrior_light', 'fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'rr_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'grip_seat'],
        slotVisibilityRules: [
            { when: { slot: 'slot', value: 'op_spirit_37' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_m157' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_lpvo' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_sniper' }, show: ['lens_shade', 'upper_side_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_scout' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser' }, show: ['optic', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser2' }, show: ['tactical_device', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'rg_ak_tower' }, show: ['grip_seat'], hide: [] }
        ]
    },

    // ==================== 狙击步枪 ====================

    'awm': {
        optic: ['op_thermal_8x', 'op_thermal_combat', 'op_thermal_holo', 'op_vmx', 'op_1p33', 'op_uhx', 'op_prism_2x', 'op_spirit_612', 'op_spirit_37', 'op_m157', 'op_viewpoint_3x', 'op_1p29', 'op_marksman_612', 'op_lpvo', 'op_sniper', 'op_optical_8x', 'op_scout', 'op_hamr', 'op_riser', 'op_riser2', 'op_riser', 'op_m3_sniper', 'op_acog_6x', 'op_osight', 'op_cobra', 'op_combat_rd', 'op_mini_rd', 'op_okp7', 'op_xcog', 'op_xro', 'op_panorama', 'op_ap5000', 'op_holo_ii', 'op_red', 'op_ru_2x', 'op_holo', 'op_none'],
        muzzle: ['mu_titan_silencer', 'mu_resonance', 'mu_swirl', 'mu_none'],
        barrel: ['br_awm_skyline', 'br_none'],
        mag_seat: ['fn_grizzly_sd', 'fn_grizzly_gn', 'fn_grizzly_bk', 'mag_seat_none'],
        side_optic: ['op_osight_side', 'op_side_combat', 'op_side', 'op_xro_side', 'op_side_pano', 'side_optic_none'],
        unique: ['hg_awm_dome', 'unique_none'],
        defaultHidden: ['left_rail', 'right_rail', 'rail_bipod', 'left_patch', 'right_patch', 'lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device'],
        slotVisibilityRules: [
            { when: { slot: 'slot', value: 'hg_awm_dome' }, show: ['left_rail', 'right_rail', 'rail_bipod', 'left_patch', 'right_patch'], hide: [] },
            { when: { slot: 'slot', value: 'op_spirit_612' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_spirit_37' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_m157' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_marksman_612' }, show: ['lens_shade', 'upper_side_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_lpvo' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_sniper' }, show: ['lens_shade', 'upper_side_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_optical_8x' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_scout' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser' }, show: ['optic', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser2' }, show: ['tactical_device', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_m3_sniper' }, show: ['lens_shade'], hide: [] }
        ]
    },

    'm700': {
        optic: ['op_thermal_8x', 'op_thermal_combat', 'op_thermal_holo', 'op_vmx', 'op_1p33', 'op_uhx', 'op_prism_2x', 'op_spirit_612', 'op_spirit_37', 'op_m157', 'op_viewpoint_3x', 'op_1p29', 'op_marksman_612', 'op_lpvo', 'op_sniper', 'op_optical_8x', 'op_scout', 'op_hamr', 'op_riser', 'op_riser2', 'op_riser', 'op_m3_sniper', 'op_acog_6x', 'op_osight', 'op_cobra', 'op_combat_rd', 'op_mini_rd', 'op_okp7', 'op_xcog', 'op_xro', 'op_panorama', 'op_ap5000', 'op_holo_ii', 'op_red', 'op_ru_2x', 'op_holo', 'op_none'],
        muzzle: ['mu_ffc_dual', 'mu_xinhuo', 'mu_advanced', 'mu_m7_silencer', 'mu_resonance', 'mu_swirl', 'mu_dead', 'mu_sandstorm', 'mu_fortress', 'mu_poseidon', 'mu_whisper', 'mu_titanium', 'mu_inferno', 'mu_steel_brake', 'mu_practical', 'mu_flame', 'mu_none'],
        barrel: ['br_none'],
        mag: ['ma_none'],
        handguard: ['hg_m700_mil', 'hg_m700_adv', 'hg_m700_stable', 'hg_m700_black', 'hg_none'],
        side_optic: ['op_osight_side', 'op_side_combat', 'op_side', 'op_xro_side', 'op_side_pano', 'side_optic_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'right_rail', 'left_rail', 'rail_bipod', 'cheek_pad', 'foregrip', 'rear_grip', 'upper_rail', 'left_patch', 'upper_patch', 'right_patch', 'rear_grip_patch', 'grip_seat'],
        slotVisibilityRules: [
            { when: { slot: 'slot', value: 'op_spirit_612' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_spirit_37' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_m157' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_marksman_612' }, show: ['lens_shade', 'upper_side_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_lpvo' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_sniper' }, show: ['lens_shade', 'upper_side_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_optical_8x' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_scout' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser' }, show: ['optic', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser2' }, show: ['tactical_device', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_m3_sniper' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'hg_m700_mil' }, show: ['right_rail', 'left_rail', 'rail_bipod', 'cheek_pad'], hide: [] },
            { when: { slot: 'slot', value: 'hg_m700_adv' }, show: ['foregrip', 'rear_grip', 'rail_bipod', 'right_rail', 'upper_rail', 'left_rail', 'left_patch', 'upper_patch', 'right_patch'], hide: [] },
            { when: { slot: 'slot', value: 'hg_m700_stable' }, show: ['right_rail', 'left_rail', 'rail_bipod'], hide: [] },
            { when: { slot: 'slot', value: 'hg_m700_black' }, show: ['left_rail', 'right_rail', 'rail_bipod', 'cheek_pad'], hide: [] },
            { when: { slot: 'slot', value: 'rg_ar_modular' }, show: ['rear_grip_patch'], hide: [] },
            { when: { slot: 'slot', value: 'rg_ar_tower' }, show: ['grip_seat'], hide: [] }
        ]
    },

    'm82': {
        optic: ['op_thermal_combat', 'op_thermal_holo', 'op_vmx', 'op_1p33', 'op_spirit_612', 'op_spirit_37', 'op_m157', 'op_side_combat', 'op_viewpoint_3x', 'op_1p29', 'op_marksman_612', 'op_lpvo', 'op_sniper', 'op_optical_8x', 'op_scout', 'op_hamr', 'op_riser', 'op_riser2', 'op_riser', 'op_acog_6x', 'op_osight', 'op_cobra', 'op_combat_rd', 'op_mini_rd', 'op_okp7', 'op_xcog', 'op_xro', 'op_panorama', 'op_ap5000', 'op_holo_ii', 'op_red', 'op_ru_2x', 'op_holo', 'op_none'],
        muzzle: ['mu_titan_silencer', 'mu_resonance', 'mu_none'],
        barrel: ['br_none'],
        foregrip: ['fg_resonance3', 'fg_ec_stop', 'fg_dawn_tri', 'fg_dawn_vert', 'fg_cr_prism', 'fg_resonance2', 'fg_bipod_grip', 'fg_k1_elite', 'fg_x25u', 'fg_resonance', 'fg_phantom_vert', 'fg_tactical_vert', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_fold', 'fg_vfg_knight', 'fg_zfsg', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_ar_tower', 'rg_invasion', 'rg_phantom', 'rg_ar_moe', 'rg_shooter', 'rg_hurricane', 'rg_m7_stable', 'rg_416_prac', 'rg_none'],
        mag: ['ma_none'],
        stock: ['st_none'],
        side_optic: ['op_osight_side', 'op_side_combat', 'op_side', 'op_xro_side', 'op_side_pano', 'side_optic_none'],
        rail_bipod: ['rb_none'],
        upper_rail: ['fn_warrior_light', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'ur_none'],
        upper_patch: ['fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'up_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'grip_seat'],
        slotVisibilityRules: [
            { when: { slot: 'slot', value: 'op_spirit_612' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_spirit_37' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_m157' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_marksman_612' }, show: ['lens_shade', 'upper_side_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_lpvo' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_sniper' }, show: ['lens_shade', 'upper_side_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_optical_8x' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_scout' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser' }, show: ['optic', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser2' }, show: ['tactical_device', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'rg_ar_tower' }, show: ['grip_seat'], hide: [] }
        ]
    },

    'r93': {
        optic: ['op_thermal_8x', 'op_thermal_combat', 'op_thermal_holo', 'op_vmx', 'op_1p33', 'op_uhx', 'op_prism_2x', 'op_spirit_612', 'op_spirit_37', 'op_m157', 'op_viewpoint_3x', 'op_1p29', 'op_marksman_612', 'op_lpvo', 'op_sniper', 'op_optical_8x', 'op_scout', 'op_hamr', 'op_riser', 'op_riser2', 'op_riser', 'op_m3_sniper', 'op_acog_6x', 'op_osight', 'op_cobra', 'op_combat_rd', 'op_mini_rd', 'op_okp7', 'op_xcog', 'op_xro', 'op_panorama', 'op_ap5000', 'op_holo_ii', 'op_red', 'op_ru_2x', 'op_holo', 'op_none'],
        muzzle: ['mu_xinhuo', 'mu_advanced', 'mu_m7_silencer', 'mu_resonance', 'mu_swirl', 'mu_dead', 'mu_sandstorm', 'mu_fortress', 'mu_poseidon', 'mu_whisper', 'mu_titanium', 'mu_inferno', 'mu_steel_brake', 'mu_practical', 'mu_flame', 'mu_none'],
        barrel: ['br_none'],
        mag: ['ma_none'],
        heat_shield: ['fn_r93_net', 'heat_shield_none'],
        side_optic: ['op_osight_side', 'op_side_combat', 'op_side', 'op_xro_side', 'op_side_pano', 'side_optic_none'],
        rail_bipod: ['rb_util', 'rb_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device'],
        slotVisibilityRules: [
            { when: { slot: 'slot', value: 'op_spirit_612' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_spirit_37' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_m157' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_marksman_612' }, show: ['lens_shade', 'upper_side_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_lpvo' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_sniper' }, show: ['lens_shade', 'upper_side_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_optical_8x' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_scout' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser' }, show: ['optic', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser2' }, show: ['tactical_device', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_m3_sniper' }, show: ['lens_shade'], hide: [] }
        ]
    },

    'sv-98': {
        optic: ['op_thermal_8x', 'op_thermal_combat', 'op_thermal_holo', 'op_vmx', 'op_1p33', 'op_uhx', 'op_prism_2x', 'op_spirit_612', 'op_spirit_37', 'op_m157', 'op_viewpoint_3x', 'op_1p29', 'op_marksman_612', 'op_lpvo', 'op_sniper', 'op_optical_8x', 'op_scout', 'op_hamr', 'op_riser', 'op_riser2', 'op_riser', 'op_m3_sniper', 'op_acog_6x', 'op_osight', 'op_cobra', 'op_combat_rd', 'op_mini_rd', 'op_okp7', 'op_xcog', 'op_xro', 'op_panorama', 'op_ap5000', 'op_holo_ii', 'op_red', 'op_ru_2x', 'op_holo', 'op_none'],
        muzzle: ['mu_xinhuo', 'mu_advanced', 'mu_m7_silencer', 'mu_resonance', 'mu_swirl', 'mu_dead', 'mu_sandstorm', 'mu_fortress', 'mu_poseidon', 'mu_whisper', 'mu_titanium', 'mu_inferno', 'mu_steel_brake', 'mu_practical', 'mu_flame', 'mu_none'],
        barrel: ['br_none'],
        side_optic: ['op_osight_side', 'op_side_combat', 'op_side', 'op_xro_side', 'op_side_pano', 'side_optic_none'],
        rail_bipod: ['fn_sv98_bipod', 'rb_none'],
        upper_rail: ['fn_warrior_light', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'ur_none'],
        left_rail: ['fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'lr_none'],
        right_rail: ['fn_warrior_light', 'fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'rr_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device'],
        slotVisibilityRules: [
            { when: { slot: 'slot', value: 'op_spirit_612' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_spirit_37' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_m157' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_marksman_612' }, show: ['lens_shade', 'upper_side_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_lpvo' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_sniper' }, show: ['lens_shade', 'upper_side_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_optical_8x' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_scout' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser' }, show: ['optic', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser2' }, show: ['tactical_device', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_m3_sniper' }, show: ['lens_shade'], hide: [] }
        ]
    },

    // ==================== 精确射手步枪 ====================

    'lever': {
        optic: ['op_thermal_8x', 'op_thermal_combat', 'op_thermal_holo', 'op_vmx', 'op_1p33', 'op_uhx', 'op_prism_2x', 'op_spirit_612', 'op_spirit_37', 'op_m157', 'op_viewpoint_3x', 'op_1p29', 'op_marksman_612', 'op_lpvo', 'op_sniper', 'op_optical_8x', 'op_scout', 'op_hamr', 'op_riser', 'op_riser2', 'op_riser', 'op_m3_sniper', 'op_acog_6x', 'op_osight', 'op_cobra', 'op_combat_rd', 'op_mini_rd', 'op_okp7', 'op_xcog', 'op_xro', 'op_panorama', 'op_lever_watcher', 'op_ap5000', 'op_holo_ii', 'op_red', 'op_ru_2x', 'op_holo', 'op_none'],
        muzzle: ['mu_lever_steel', 'mu_none'],
        barrel: ['br_lever_pioneer', 'br_lever_hunter', 'br_none'],
        stock: ['st_lever_skeleton', 'st_lever_hammer', 'st_lever_sport', 'st_lever_bullpup', 'st_lever_stable', 'st_none'],
        lever: ['lv_rhino', 'lv_hummingbird', 'lever_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device'],
        slotVisibilityRules: [
            { when: { slot: 'slot', value: 'op_spirit_612' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_spirit_37' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_m157' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_marksman_612' }, show: ['lens_shade', 'upper_side_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_lpvo' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_sniper' }, show: ['lens_shade', 'upper_side_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_optical_8x' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_scout' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser' }, show: ['optic', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser2' }, show: ['tactical_device', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_m3_sniper' }, show: ['lens_shade'], hide: [] }
        ]
    },

    'm14': {
        optic: ['op_thermal_8x', 'op_thermal_combat', 'op_thermal_holo', 'op_vmx', 'op_1p33', 'op_uhx', 'op_prism_2x', 'op_spirit_612', 'op_spirit_37', 'op_m157', 'op_viewpoint_3x', 'op_1p29', 'op_marksman_612', 'op_lpvo', 'op_sniper', 'op_optical_8x', 'op_scout', 'op_hamr', 'op_riser', 'op_riser2', 'op_riser', 'op_m3_sniper', 'op_acog_6x', 'op_osight', 'op_cobra', 'op_combat_rd', 'op_mini_rd', 'op_okp7', 'op_xcog', 'op_xro', 'op_panorama', 'op_ap5000', 'op_holo_ii', 'op_red', 'op_ru_2x', 'op_holo', 'op_none'],
        muzzle: ['mu_ffc_dual', 'mu_xinhuo', 'mu_advanced', 'mu_m7_silencer', 'mu_dead', 'mu_sandstorm', 'mu_fortress', 'mu_poseidon', 'mu_whisper', 'mu_titanium', 'mu_inferno', 'mu_steel_brake', 'mu_practical', 'mu_flame', 'mu_none'],
        barrel: ['br_m14_insight', 'br_m14_light', 'br_m14_wander', 'br_none'],
        mag: ['ma_m14_30', 'ma_m14_20', 'ma_none'],
        handguard: ['hg_m14_rail', 'hg_m14_poly', 'hg_none'],
        handguard_kit: ['hg_m14_adv', 'hg_none'],
        cheek_pad: ['st_universal_pad', 'cheek_pad_none'],
        mag_seat: ['fn_grizzly_sd', 'fn_grizzly_gn', 'fn_grizzly_bk', 'mag_seat_none'],
        side_optic: ['op_osight_side', 'op_side_combat', 'op_side', 'op_xro_side', 'op_side_pano', 'side_optic_none'],
        defaultHidden: ['foregrip', 'stock', 'rail_bipod', 'upper_rail', 'left_rail', 'right_rail', 'upper_patch', 'lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'right_patch', 'left_patch', 'muzzle'],
        slotVisibilityRules: [
            { when: { slot: 'slot', value: 'hg_m14_adv' }, show: ['foregrip', 'stock', 'rail_bipod', 'upper_rail', 'left_rail', 'right_rail', 'upper_patch'], hide: [] },
            { when: { slot: 'slot', value: 'op_spirit_612' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_spirit_37' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_m157' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_marksman_612' }, show: ['lens_shade', 'upper_side_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_lpvo' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_sniper' }, show: ['lens_shade', 'upper_side_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_optical_8x' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_scout' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser' }, show: ['optic', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser2' }, show: ['tactical_device', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_m3_sniper' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'hg_m14_rail' }, show: ['foregrip', 'upper_rail', 'rail_bipod', 'upper_patch', 'left_rail', 'right_rail', 'right_patch', 'left_patch'], hide: [] },
            { when: { slot: 'slot', value: 'br_m14_insight' }, show: ['muzzle'], hide: [] },
            { when: { slot: 'slot', value: 'br_m14_light' }, show: ['muzzle'], hide: [] },
            { when: { slot: 'slot', value: 'br_m14_wander' }, show: ['muzzle'], hide: [] }
        ]
    },

    'mini-14': {
        optic: ['op_thermal_8x', 'op_thermal_combat', 'op_thermal_holo', 'op_vmx', 'op_1p33', 'op_uhx', 'op_prism_2x', 'op_spirit_612', 'op_spirit_37', 'op_m157', 'op_viewpoint_3x', 'op_1p29', 'op_marksman_612', 'op_lpvo', 'op_sniper', 'op_optical_8x', 'op_scout', 'op_hamr', 'op_riser', 'op_riser2', 'op_riser', 'op_m3_sniper', 'op_acog_6x', 'op_osight', 'op_cobra', 'op_combat_rd', 'op_mini_rd', 'op_okp7', 'op_xcog', 'op_xro', 'op_panorama', 'op_ap5000', 'op_holo_ii', 'op_red', 'op_ru_2x', 'op_holo', 'op_none'],
        muzzle: ['mu_web_titanium', 'mu_ffc_dual', 'mu_xinhuo', 'mu_advanced', 'mu_m7_silencer', 'mu_dead', 'mu_sandstorm', 'mu_fortress', 'mu_poseidon', 'mu_whisper', 'mu_titanium', 'mu_inferno', 'mu_steel_brake', 'mu_practical', 'mu_bird', 'mu_flame', 'mu_none'],
        barrel: ['br_none'],
        mag: ['ma_none'],
        handguard: ['hg_mini14_adv', 'hg_mini14_int', 'hg_mini14_poly', 'hg_none'],
        side_optic: ['op_osight_side', 'op_side_combat', 'op_side', 'op_xro_side', 'op_side_pano', 'side_optic_none'],
        defaultHidden: [],
        slotVisibilityRules: []
    },

    'psg-1': {
        optic: ['op_thermal_8x', 'op_thermal_combat', 'op_thermal_holo', 'op_vmx', 'op_1p33', 'op_uhx', 'op_prism_2x', 'op_spirit_612', 'op_spirit_37', 'op_m157', 'op_viewpoint_3x', 'op_1p29', 'op_marksman_612', 'op_lpvo', 'op_sniper', 'op_optical_8x', 'op_scout', 'op_hamr', 'op_riser', 'op_riser2', 'op_riser', 'op_m3_sniper', 'op_acog_6x', 'op_osight', 'op_cobra', 'op_combat_rd', 'op_mini_rd', 'op_okp7', 'op_xcog', 'op_xro', 'op_panorama', 'op_ap5000', 'op_holo_ii', 'op_red', 'op_ru_2x', 'op_holo', 'op_none'],
        muzzle: ['mu_ffc_dual', 'mu_xinhuo', 'mu_advanced', 'mu_m7_silencer', 'mu_resonance', 'mu_swirl', 'mu_dead', 'mu_sandstorm', 'mu_fortress', 'mu_poseidon', 'mu_whisper', 'mu_titanium', 'mu_inferno', 'mu_steel_brake', 'mu_practical', 'mu_flame', 'mu_none'],
        barrel: ['br_g3_marksman', 'br_g3_heavy', 'br_g3_storm', 'br_g3_guard', 'br_none'],
        foregrip: ['fg_resonance3', 'fg_ec_stop', 'fg_dawn_tri', 'fg_dawn_vert', 'fg_cr_prism', 'fg_resonance2', 'fg_bipod_grip', 'fg_k1_elite', 'fg_x25u', 'fg_resonance', 'fg_phantom_vert', 'fg_tactical_vert', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_fold', 'fg_vfg_knight', 'fg_zfsg', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_g3_guard', 'rg_g3_skeleton', 'rg_none'],
        mag: ['ma_g3_30', 'ma_none'],
        stock: ['st_anchor_rail', 'st_qr_perf', 'st_ct_enhanced', 'st_shadow_core', 'st_mrgs_hollow', 'st_ur_tactical2', 'st_shadow_rail', 'st_skeleton_sniper', 'st_pivot_adv', 'st_416_stable', 'st_416_light', 'st_elite_light', 'st_raid_core', 'st_pivot_stable', 'st_lightning_rail', 'st_mp5_telescope', 'st_mp5k_fold', 'st_g3_telescope', 'st_mp5', 'st_utility_light', 'st_tactical', 'st_stable', 'st_core_rail', 'st_none'],
        mag_seat: ['fn_grizzly_sd', 'fn_grizzly_gn', 'fn_grizzly_bk', 'mag_seat_none'],
        trigger: ['fn_psg_trigger', 'trigger_none'],
        side_optic: ['op_osight_side', 'op_side_combat', 'op_side', 'op_xro_side', 'op_side_pano', 'side_optic_none'],
        rail_bipod: ['rb_util', 'rb_none'],
        right_rail: ['fn_warrior_light', 'fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'rr_none'],
        defaultHidden: [],
        slotVisibilityRules: []
    },

    'sks': {
        optic: ['op_thermal_combat', 'op_thermal_holo', 'op_vmx', 'op_1p33', 'op_uhx', 'op_prism_2x', 'op_spirit_37', 'op_m157', 'op_viewpoint_3x', 'op_1p29', 'op_lpvo', 'op_sniper', 'op_scout', 'op_hamr', 'op_riser', 'op_riser2', 'op_riser', 'op_acog_6x', 'op_osight', 'op_cobra', 'op_combat_rd', 'op_mini_rd', 'op_okp7', 'op_xcog', 'op_xro', 'op_panorama', 'op_ap5000', 'op_holo_ii', 'op_red', 'op_ru_2x', 'op_holo', 'op_none'],
        muzzle: ['mu_ffc_dual', 'mu_xinhuo', 'mu_advanced', 'mu_dtk', 'mu_m7_silencer', 'mu_ak_brave', 'mu_pbs', 'mu_dead', 'mu_sandstorm', 'mu_fortress', 'mu_poseidon', 'mu_whisper', 'mu_titanium', 'mu_inferno', 'mu_ak_comp', 'mu_steel_brake', 'mu_practical', 'mu_flare_bell', 'mu_flame', 'mu_none'],
        barrel: ['br_none'],
        handguard_kit: ['hg_sks_adv', 'hg_none'],
        defaultHidden: [],
        slotVisibilityRules: []
    },

    'sr-25': {
        optic: ['op_thermal_8x', 'op_thermal_combat', 'op_thermal_holo', 'op_vmx', 'op_1p33', 'op_uhx', 'op_prism_2x', 'op_spirit_612', 'op_spirit_37', 'op_m157', 'op_viewpoint_3x', 'op_1p29', 'op_marksman_612', 'op_lpvo', 'op_sniper', 'op_optical_8x', 'op_scout', 'op_hamr', 'op_riser', 'op_riser2', 'op_riser', 'op_m3_sniper', 'op_acog_6x', 'op_osight', 'op_cobra', 'op_combat_rd', 'op_mini_rd', 'op_okp7', 'op_xcog', 'op_xro', 'op_panorama', 'op_ap5000', 'op_holo_ii', 'op_red', 'op_ru_2x', 'op_holo', 'op_none'],
        muzzle: ['mu_ffc_dual', 'mu_xinhuo', 'mu_advanced', 'mu_m7_silencer', 'mu_resonance', 'mu_swirl', 'mu_dead', 'mu_sandstorm', 'mu_fortress', 'mu_poseidon', 'mu_whisper', 'mu_titanium', 'mu_inferno', 'mu_steel_brake', 'mu_practical', 'mu_flame', 'mu_none'],
        barrel: ['br_none'],
        foregrip: ['fg_resonance3', 'fg_ec_stop', 'fg_dawn_tri', 'fg_dawn_vert', 'fg_cr_prism', 'fg_resonance2', 'fg_bipod_grip', 'fg_k1_elite', 'fg_x25u', 'fg_resonance', 'fg_phantom_vert', 'fg_tactical_vert', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_fold', 'fg_vfg_knight', 'fg_zfsg', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_ar_modular', 'rg_ar_tower', 'rg_invasion', 'rg_phantom', 'rg_ar_moe', 'rg_shooter', 'rg_hurricane', 'rg_m7_stable', 'rg_416_prac', 'rg_none'],
        mag: ['ma_none'],
        stock: ['st_anchor_rail', 'st_qr_perf', 'st_ct_enhanced', 'st_shadow_core', 'st_ur_tactical2', 'st_skeleton_sniper', 'st_416_stable', 'st_416_light', 'st_elite_light', 'st_raid_core', 'st_pivot_stable', 'st_m4_buffer', 'st_utility_light', 'st_tactical', 'st_stable', 'st_none'],
        handguard: ['hg_none'],
        side_optic: ['op_osight_side', 'op_side_combat', 'op_side', 'op_xro_side', 'op_side_pano', 'side_optic_none'],
        rail_bipod: ['rb_util', 'rb_none'],
        upper_rail: ['fn_warrior_light', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'ur_none'],
        left_rail: ['fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'lr_none'],
        right_rail: ['fn_warrior_light', 'fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'rr_none'],
        upper_patch: ['fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'up_none'],
        left_patch: ['fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'lp_none'],
        right_patch: ['fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'rp_none'],
        defaultHidden: [],
        slotVisibilityRules: []
    },

    'sr9': {
        optic: ['op_thermal_8x', 'op_thermal_combat', 'op_thermal_holo', 'op_vmx', 'op_1p33', 'op_uhx', 'op_prism_2x', 'op_spirit_612', 'op_spirit_37', 'op_m157', 'op_viewpoint_3x', 'op_1p29', 'op_marksman_612', 'op_lpvo', 'op_sniper', 'op_optical_8x', 'op_scout', 'op_hamr', 'op_riser', 'op_riser2', 'op_riser', 'op_m3_sniper', 'op_acog_6x', 'op_osight', 'op_cobra', 'op_combat_rd', 'op_mini_rd', 'op_okp7', 'op_xcog', 'op_xro', 'op_panorama', 'op_ap5000', 'op_holo_ii', 'op_red', 'op_ru_2x', 'op_holo', 'op_none'],
        muzzle: ['mu_ffc_dual', 'mu_xinhuo', 'mu_advanced', 'mu_m7_silencer', 'mu_resonance', 'mu_swirl', 'mu_dead', 'mu_sandstorm', 'mu_fortress', 'mu_poseidon', 'mu_whisper', 'mu_titanium', 'mu_inferno', 'mu_steel_brake', 'mu_practical', 'mu_flame', 'mu_none'],
        barrel: ['br_g3_marksman', 'br_g3_heavy', 'br_g3_storm', 'br_g3_guard', 'br_none'],
        foregrip: ['fg_resonance3', 'fg_ec_stop', 'fg_dawn_tri', 'fg_dawn_vert', 'fg_cr_prism', 'fg_resonance2', 'fg_bipod_grip', 'fg_k1_elite', 'fg_x25u', 'fg_resonance', 'fg_phantom_vert', 'fg_tactical_vert', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_fold', 'fg_vfg_knight', 'fg_zfsg', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        mag: ['ma_g3_30', 'ma_none'],
        mag_seat: ['fn_grizzly_sd', 'fn_grizzly_gn', 'fn_grizzly_bk', 'mag_seat_none'],
        trigger: ['fn_psg_trigger', 'trigger_none'],
        side_optic: ['op_osight_side', 'op_side_combat', 'op_side', 'op_xro_side', 'op_side_pano', 'side_optic_none'],
        right_rail: ['fn_warrior_light', 'fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'rr_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'upper_rail', 'left_rail', 'rail_bipod', 'left_patch', 'right_patch', 'muzzle'],
        slotVisibilityRules: [
            { when: { slot: 'slot', value: 'op_spirit_612' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_spirit_37' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_m157' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_marksman_612' }, show: ['lens_shade', 'upper_side_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_lpvo' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_sniper' }, show: ['lens_shade', 'upper_side_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_optical_8x' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_scout' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser' }, show: ['optic', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser2' }, show: ['tactical_device', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_m3_sniper' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'br_g3_marksman' }, show: ['upper_rail', 'left_rail', 'rail_bipod', 'left_patch', 'right_patch', 'muzzle'], hide: [] }
        ]
    },

    'svch': {
        optic: ['op_thermal_combat', 'op_thermal_holo', 'op_vmx', 'op_1p33', 'op_uhx', 'op_prism_2x', 'op_spirit_612', 'op_spirit_37', 'op_m157', 'op_viewpoint_3x', 'op_1p29', 'op_marksman_612', 'op_lpvo', 'op_sniper', 'op_optical_8x', 'op_scout', 'op_hamr', 'op_riser2', 'op_riser', 'op_m3_sniper', 'op_acog_6x', 'op_osight', 'op_cobra', 'op_combat_rd', 'op_mini_rd', 'op_okp7', 'op_xcog', 'op_xro', 'op_panorama', 'op_ap5000', 'op_holo_ii', 'op_red', 'op_ru_2x', 'op_holo', 'op_none'],
        muzzle: ['mu_web_titanium', 'mu_ffc_dual', 'mu_xinhuo', 'mu_advanced', 'mu_m7_silencer', 'mu_resonance', 'mu_swirl', 'mu_dead', 'mu_sandstorm', 'mu_fortress', 'mu_poseidon', 'mu_whisper', 'mu_titanium', 'mu_inferno', 'mu_steel_brake', 'mu_practical', 'mu_flame', 'mu_none'],
        barrel: ['br_none'],
        foregrip: ['fg_resonance3', 'fg_ec_stop', 'fg_dawn_tri', 'fg_dawn_vert', 'fg_cr_prism', 'fg_resonance2', 'fg_bipod_grip', 'fg_k1_elite', 'fg_x25u', 'fg_resonance', 'fg_phantom_vert', 'fg_tactical_vert', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_fold', 'fg_vfg_knight', 'fg_zfsg', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_none'],
        mag: ['ma_none'],
        stock: ['st_anchor_rail', 'st_qr_perf', 'st_ct_enhanced', 'st_shadow_core', 'st_mrgs_hollow', 'st_ur_tactical2', 'st_shadow_rail', 'st_skeleton_sniper', 'st_416_stable', 'st_416_light', 'st_elite_light', 'st_raid_core', 'st_pivot_stable', 'st_lightning_rail', 'st_utility_light', 'st_tactical', 'st_none'],
        handguard: ['hg_none'],
        mag_seat: ['fn_grizzly_sd', 'fn_grizzly_gn', 'fn_grizzly_bk', 'mag_seat_none'],
        side_optic: ['op_osight_side', 'op_side_combat', 'op_side', 'op_xro_side', 'op_side_pano', 'side_optic_none'],
        upper_rail: ['fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'ur_none'],
        left_rail: ['fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'lr_none'],
        right_rail: ['fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'rr_none'],
        upper_patch: ['fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'up_none'],
        left_patch: ['fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'lp_none'],
        right_patch: ['fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'rp_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'tactical_device', 'riser_optic'],
        slotVisibilityRules: [
            { when: { slot: 'slot', value: 'op_spirit_612' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_spirit_37' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_m157' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_marksman_612' }, show: ['lens_shade', 'upper_side_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_lpvo' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_sniper' }, show: ['lens_shade', 'upper_side_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_optical_8x' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_scout' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser2' }, show: ['tactical_device', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser' }, show: ['riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_m3_sniper' }, show: ['lens_shade'], hide: [] }
        ]
    },

    'svd': {
        optic: ['op_thermal_8x', 'op_thermal_combat', 'op_thermal_holo', 'op_vmx', 'op_1p33', 'op_uhx', 'op_prism_2x', 'op_spirit_612', 'op_spirit_37', 'op_m157', 'op_viewpoint_3x', 'op_1p29', 'op_marksman_612', 'op_lpvo', 'op_sniper', 'op_optical_8x', 'op_scout', 'op_hamr', 'op_riser', 'op_riser2', 'op_riser', 'op_m3_sniper', 'op_acog_6x', 'op_osight', 'op_cobra', 'op_combat_rd', 'op_mini_rd', 'op_okp7', 'op_xcog', 'op_pso_25', 'op_xro', 'op_panorama', 'op_ap5000', 'op_pso_8x', 'op_holo_ii', 'op_red', 'op_ru_2x', 'op_holo', 'op_none'],
        muzzle: ['mu_ffc_dual', 'mu_xinhuo', 'mu_advanced', 'mu_m7_silencer', 'mu_resonance', 'mu_swirl', 'mu_dead', 'mu_sandstorm', 'mu_fortress', 'mu_poseidon', 'mu_whisper', 'mu_titanium', 'mu_inferno', 'mu_steel_brake', 'mu_practical', 'mu_flame', 'mu_none'],
        barrel: ['br_none'],
        rear_grip: ['rg_none'],
        mag: ['ma_none'],
        handguard: ['hg_svd_rail', 'hg_none'],
        mag_seat: ['fn_grizzly_sd', 'fn_grizzly_gn', 'fn_grizzly_bk', 'mag_seat_none'],
        bolt: ['fn_zentinert', 'bolt_none'],
        side_optic: ['op_osight_side', 'op_side_combat', 'op_side', 'op_xro_side', 'op_side_pano', 'side_optic_none'],
        defaultHidden: [],
        slotVisibilityRules: []
    },

    'vss': {
        optic: ['op_thermal_8x', 'op_thermal_combat', 'op_thermal_holo', 'op_vmx', 'op_1p33', 'op_uhx', 'op_prism_2x', 'op_spirit_612', 'op_spirit_37', 'op_m157', 'op_viewpoint_3x', 'op_1p29', 'op_marksman_612', 'op_lpvo', 'op_sniper', 'op_optical_8x', 'op_scout', 'op_hamr', 'op_riser', 'op_riser2', 'op_riser', 'op_m3_sniper', 'op_acog_6x', 'op_osight', 'op_cobra', 'op_combat_rd', 'op_mini_rd', 'op_okp7', 'op_xcog', 'op_pso_25', 'op_xro', 'op_panorama', 'op_ap5000', 'op_pso_8x', 'op_holo_ii', 'op_red', 'op_ru_2x', 'op_holo', 'op_none'],
        barrel: ['br_vss_tsunami', 'br_none'],
        foregrip: ['fg_resonance3', 'fg_ec_stop', 'fg_dawn_tri', 'fg_dawn_vert', 'fg_cr_prism', 'fg_resonance2', 'fg_bipod_grip', 'fg_k1_elite', 'fg_x25u', 'fg_resonance', 'fg_phantom_vert', 'fg_tactical_vert', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_fold', 'fg_vfg_knight', 'fg_zfsg', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        mag: ['ma_vss_45', 'ma_vss_30', 'ma_none'],
        stock: ['st_vss_elite', 'st_none'],
        mag_seat: ['fn_coyote_sd', 'fn_coyote_gn', 'fn_coyote_bk', 'mag_seat_none'],
        bolt: ['fn_zentinert', 'bolt_none'],
        side_optic: ['op_osight_side', 'op_side_combat', 'op_side', 'op_xro_side', 'op_side_pano', 'side_optic_none'],
        left_rail: ['fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'lr_none'],
        right_rail: ['fn_warrior_light', 'fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'rr_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device'],
        slotVisibilityRules: [
            { when: { slot: 'slot', value: 'op_spirit_612' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_spirit_37' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_m157' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_marksman_612' }, show: ['lens_shade', 'upper_side_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_lpvo' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_sniper' }, show: ['lens_shade', 'upper_side_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_optical_8x' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_scout' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser' }, show: ['optic', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser2' }, show: ['tactical_device', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_m3_sniper' }, show: ['lens_shade'], hide: [] }
        ]
    },

    // ==================== 霰弹枪 ====================

    '725': {
        optic: ['op_thermal_combat', 'op_thermal_holo', 'op_vmx', 'op_1p33', 'op_uhx', 'op_prism_2x', 'op_spirit_37', 'op_m157', 'op_viewpoint_3x', 'op_1p29', 'op_lpvo', 'op_sniper', 'op_scout', 'op_hamr', 'op_riser', 'op_riser2', 'op_riser', 'op_acog_6x', 'op_osight', 'op_cobra', 'op_combat_rd', 'op_mini_rd', 'op_okp7', 'op_xcog', 'op_xro', 'op_panorama', 'op_ap5000', 'op_holo_ii', 'op_red', 'op_ru_2x', 'op_holo', 'op_none'],
        muzzle: ['mu_725_cowboy', 'mu_none'],
        barrel: ['br_725_falcon', 'br_725_interceptor', 'br_none'],
        stock: ['st_725_watcher', 'st_725_short', 'st_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device'],
        slotVisibilityRules: [
            { when: { slot: 'slot', value: 'op_spirit_37' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_m157' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_lpvo' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_sniper' }, show: ['lens_shade', 'upper_side_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_scout' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser' }, show: ['optic', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser2' }, show: ['tactical_device', 'riser_optic'], hide: [] }
        ]
    },

    'fs-12': {
        optic: ['op_thermal_combat', 'op_thermal_holo', 'op_vmx', 'op_uhx', 'op_prism_2x', 'op_viewpoint_3x', 'op_1p29', 'op_scout', 'op_hamr', 'op_riser', 'op_riser2', 'op_riser', 'op_acog_6x', 'op_osight', 'op_cobra', 'op_combat_rd', 'op_mini_rd', 'op_okp7', 'op_xcog', 'op_xro', 'op_panorama', 'op_ap5000', 'op_holo_ii', 'op_red', 'op_ru_2x', 'op_holo', 'op_none'],
        muzzle: ['mu_shotgun_echo', 'mu_shotgun_vortex', 'mu_shotgun_cannon', 'mu_shotgun_cage', 'mu_shotgun_precision', 'mu_shotgun_choke', 'mu_none'],
        barrel: ['br_none'],
        rear_grip: ['rg_ar_tower', 'rg_invasion', 'rg_phantom', 'rg_ar_moe', 'rg_shooter', 'rg_hurricane', 'rg_m7_stable', 'rg_416_prac', 'rg_none'],
        mag: ['ma_none'],
        stock: ['st_anchor_rail', 'st_qr_perf', 'st_ct_enhanced', 'st_shadow_core', 'st_mrgs_hollow', 'st_ur_tactical2', 'st_shadow_rail', 'st_skeleton_sniper', 'st_416_stable', 'st_416_light', 'st_elite_light', 'st_raid_core', 'st_lightning_rail', 'st_utility_light', 'st_tactical', 'st_stable', 'st_core_rail', 'st_none'],
        handguard: ['hg_none'],
        side_optic: ['op_osight_side', 'op_side_combat', 'op_side', 'op_xro_side', 'op_side_pano', 'side_optic_none'],
        defaultHidden: ['lens_shade', 'riser_optic', 'tactical_device', 'grip_seat'],
        slotVisibilityRules: [
            { when: { slot: 'slot', value: 'op_scout' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser' }, show: ['optic', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser2' }, show: ['tactical_device', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'rg_ar_tower' }, show: ['grip_seat'], hide: [] }
        ]
    },

    'm1014': {
        optic: ['op_thermal_combat', 'op_thermal_holo', 'op_vmx', 'op_1p33', 'op_uhx', 'op_prism_2x', 'op_spirit_37', 'op_m157', 'op_viewpoint_3x', 'op_1p29', 'op_lpvo', 'op_sniper', 'op_scout', 'op_hamr', 'op_riser', 'op_riser2', 'op_riser', 'op_acog_6x', 'op_osight', 'op_cobra', 'op_combat_rd', 'op_mini_rd', 'op_okp7', 'op_xcog', 'op_xro', 'op_panorama', 'op_ap5000', 'op_holo_ii', 'op_red', 'op_ru_2x', 'op_holo', 'op_none'],
        muzzle: ['mu_shotgun_echo', 'mu_shotgun_vortex', 'mu_shotgun_cannon', 'mu_shotgun_cage', 'mu_shotgun_precision', 'mu_shotgun_choke', 'mu_none'],
        barrel: ['br_none'],
        foregrip: ['fg_ec_stop', 'fg_dawn_tri', 'fg_dawn_vert', 'fg_cr_prism', 'fg_bipod_grip', 'fg_k1_elite', 'fg_x25u', 'fg_phantom_vert', 'fg_tactical_vert', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_fold', 'fg_vfg_knight', 'fg_zfsg', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        mag: ['ma_none'],
        stock: ['st_anchor_rail', 'st_qr_perf', 'st_ct_enhanced', 'st_shadow_core', 'st_ur_tactical2', 'st_skeleton_sniper', 'st_1014_fixed', 'st_1014_extend', 'st_416_stable', 'st_416_light', 'st_elite_light', 'st_raid_core', 'st_pivot_stable', 'st_utility_light', 'st_tactical', 'st_stable', 'st_none'],
        handguard: ['hg_m1014_rail', 'hg_none'],
        side_optic: ['op_osight_side', 'op_side_combat', 'op_side', 'op_xro_side', 'op_side_pano', 'side_optic_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'right_rail', 'left_rail', 'cheek_pad'],
        slotVisibilityRules: [
            { when: { slot: 'slot', value: 'op_spirit_37' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_m157' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_lpvo' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_sniper' }, show: ['lens_shade', 'upper_side_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_scout' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser' }, show: ['optic', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser2' }, show: ['tactical_device', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'hg_m1014_rail' }, show: ['right_rail', 'left_rail'], hide: [] },
            { when: { slot: 'slot', value: 'st_1014_fixed' }, show: ['cheek_pad'], hide: [] }
        ]
    },

    'm870': {
        optic: ['op_thermal_combat', 'op_thermal_holo', 'op_vmx', 'op_1p33', 'op_uhx', 'op_prism_2x', 'op_spirit_37', 'op_m157', 'op_viewpoint_3x', 'op_1p29', 'op_lpvo', 'op_sniper', 'op_scout', 'op_hamr', 'op_riser', 'op_riser2', 'op_riser', 'op_acog_6x', 'op_osight', 'op_cobra', 'op_combat_rd', 'op_mini_rd', 'op_okp7', 'op_xcog', 'op_xro', 'op_panorama', 'op_ap5000', 'op_holo_ii', 'op_red', 'op_ru_2x', 'op_holo', 'op_none'],
        muzzle: ['mu_shotgun_echo', 'mu_shotgun_vortex', 'mu_shotgun_cannon', 'mu_shotgun_cage', 'mu_shotgun_precision', 'mu_shotgun_choke', 'mu_none'],
        barrel: ['br_none'],
        mag: ['ma_none'],
        stock: ['st_qr_perf', 'st_ct_enhanced', 'st_shadow_core', 'st_ur_tactical2', 'st_skeleton_sniper', 'st_416_stable', 'st_416_light', 'st_elite_light', 'st_raid_core', 'st_pivot_stable', 'st_utility_light', 'st_tactical', 'st_stable', 'st_none'],
        handguard: ['hg_m870_rail', 'hg_none'],
        side_optic: ['op_osight_side', 'op_side_combat', 'op_side', 'op_xro_side', 'op_side_pano', 'side_optic_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'foregrip', 'left_rail', 'right_rail'],
        slotVisibilityRules: [
            { when: { slot: 'slot', value: 'op_spirit_37' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_m157' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_lpvo' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_sniper' }, show: ['lens_shade', 'upper_side_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_scout' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser' }, show: ['optic', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser2' }, show: ['tactical_device', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'hg_m870_rail' }, show: ['foregrip', 'left_rail', 'right_rail'], hide: [] }
        ]
    },

    's12k': {
        optic: ['op_thermal_combat', 'op_thermal_holo', 'op_vmx', 'op_1p33', 'op_uhx', 'op_prism_2x', 'op_spirit_37', 'op_m157', 'op_viewpoint_3x', 'op_1p29', 'op_lpvo', 'op_sniper', 'op_scout', 'op_hamr', 'op_riser', 'op_riser2', 'op_riser', 'op_acog_6x', 'op_osight', 'op_cobra', 'op_combat_rd', 'op_mini_rd', 'op_okp7', 'op_xcog', 'op_pso_25', 'op_xro', 'op_panorama', 'op_ap5000', 'op_pso_8x', 'op_holo_ii', 'op_red', 'op_ru_2x', 'op_holo', 'op_none'],
        muzzle: ['mu_shotgun_echo', 'mu_shotgun_vortex', 'mu_shotgun_cannon', 'mu_shotgun_cage', 'mu_shotgun_precision', 'mu_shotgun_choke', 'mu_none'],
        barrel: ['br_none'],
        foregrip: ['fg_resonance3', 'fg_ec_stop', 'fg_dawn_tri', 'fg_dawn_vert', 'fg_cr_prism', 'fg_resonance2', 'fg_bipod_grip', 'fg_k1_elite', 'fg_x25u', 'fg_resonance', 'fg_phantom_vert', 'fg_tactical_vert', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_fold', 'fg_vfg_knight', 'fg_zfsg', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_ak_scorpion', 'rg_rk3', 'rg_ak_skeleton', 'rg_ak_tower', 'rg_ak_stable', 'rg_ak_shooter', 'rg_none'],
        mag: ['ma_none'],
        stock: ['st_anchor_rail', 'st_qr_perf', 'st_ct_enhanced', 'st_shadow_core', 'st_mrgs_hollow', 'st_pt3_death', 'st_pt1_special', 'st_ur_tactical2', 'st_shadow_rail', 'st_skeleton_sniper', 'st_ak19', 'st_pivot_adv', 'st_416_stable', 'st_416_light', 'st_elite_light', 'st_raid_core', 'st_pivot_stable', 'st_lightning_rail', 'st_ak_endcap', 'st_ak', 'st_ak_folding', 'st_utility_light', 'st_tactical', 'st_stable', 'st_core_rail', 'st_none'],
        stock_pad: ['st_ak_bumper', 'stock_pad_none'],
        bolt: ['fn_zentinert', 'bolt_none'],
        side_optic: ['op_osight_side', 'op_side_combat', 'op_side', 'op_xro_side', 'op_side_pano', 'side_optic_none'],
        right_rail: ['fn_warrior_light', 'fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'rr_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'grip_seat'],
        slotVisibilityRules: [
            { when: { slot: 'slot', value: 'op_spirit_37' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_m157' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_lpvo' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_sniper' }, show: ['lens_shade', 'upper_side_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_scout' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser' }, show: ['optic', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser2' }, show: ['tactical_device', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'rg_ak_tower' }, show: ['grip_seat'], hide: [] }
        ]
    },

    // ==================== 机枪 ====================

    'm249': {
        optic: ['op_thermal_combat', 'op_thermal_holo', 'op_vmx', 'op_1p33', 'op_uhx', 'op_prism_2x', 'op_spirit_37', 'op_m157', 'op_viewpoint_3x', 'op_1p29', 'op_lpvo', 'op_sniper', 'op_scout', 'op_hamr', 'op_riser', 'op_riser2', 'op_riser', 'op_acog_6x', 'op_osight', 'op_cobra', 'op_combat_rd', 'op_mini_rd', 'op_okp7', 'op_xcog', 'op_xro', 'op_panorama', 'op_ap5000', 'op_holo_ii', 'op_red', 'op_ru_2x', 'op_holo', 'op_none'],
        muzzle: ['mu_web_titanium', 'mu_ffc_dual', 'mu_xinhuo', 'mu_advanced', 'mu_m7_silencer', 'mu_dead', 'mu_sandstorm', 'mu_fortress', 'mu_poseidon', 'mu_whisper', 'mu_titanium', 'mu_inferno', 'mu_steel_brake', 'mu_practical', 'mu_bird', 'mu_flame', 'mu_none'],
        barrel: ['br_none'],
        foregrip: ['fg_resonance3', 'fg_ec_stop', 'fg_dawn_tri', 'fg_dawn_vert', 'fg_cr_prism', 'fg_resonance2', 'fg_bipod_grip', 'fg_k1_elite', 'fg_x25u', 'fg_resonance', 'fg_phantom_vert', 'fg_tactical_vert', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_fold', 'fg_vfg_knight', 'fg_zfsg', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_none'],
        mag: ['ma_ar_60', 'ma_none'],
        stock: ['st_anchor_rail', 'st_qr_perf', 'st_ct_enhanced', 'st_shadow_core', 'st_mrgs_hollow', 'st_ur_tactical2', 'st_shadow_rail', 'st_skeleton_sniper', 'st_416_stable', 'st_416_light', 'st_elite_light', 'st_raid_core', 'st_pivot_stable', 'st_lightning_rail', 'st_utility_light', 'st_tactical', 'st_stable', 'st_core_rail', 'st_none'],
        handguard: ['hg_m249_bipod', 'hg_m249_mil', 'hg_m249_rail', 'hg_none'],
        side_optic: ['op_osight_side', 'op_side_combat', 'op_side', 'op_xro_side', 'op_side_pano', 'side_optic_none'],
        rail_bipod: ['rb_util', 'rb_none'],
        left_rail: ['fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'lr_none'],
        right_rail: ['fn_warrior_light', 'fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'rr_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'upper_patch', 'upper_rail', 'left_patch', 'right_patch'],
        slotVisibilityRules: [
            { when: { slot: 'slot', value: 'op_spirit_37' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_m157' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_lpvo' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_sniper' }, show: ['lens_shade', 'upper_side_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_scout' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser' }, show: ['optic', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser2' }, show: ['tactical_device', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'hg_m249_mil' }, show: ['upper_patch', 'upper_rail', 'left_patch', 'right_patch'], hide: [] }
        ]
    },

    'm250': {
        optic: ['op_thermal_combat', 'op_thermal_holo', 'op_vmx', 'op_1p33', 'op_uhx', 'op_prism_2x', 'op_spirit_37', 'op_m157', 'op_viewpoint_3x', 'op_1p29', 'op_lpvo', 'op_sniper', 'op_scout', 'op_hamr', 'op_riser', 'op_riser2', 'op_riser', 'op_acog_6x', 'op_osight', 'op_cobra', 'op_combat_rd', 'op_mini_rd', 'op_okp7', 'op_xcog', 'op_xro', 'op_panorama', 'op_ap5000', 'op_holo_ii', 'op_red', 'op_ru_2x', 'op_holo', 'op_none'],
        muzzle: ['mu_web_titanium', 'mu_ffc_dual', 'mu_xinhuo', 'mu_advanced', 'mu_m7_silencer', 'mu_dead', 'mu_sandstorm', 'mu_fortress', 'mu_poseidon', 'mu_whisper', 'mu_titanium', 'mu_inferno', 'mu_steel_brake', 'mu_practical', 'mu_flame', 'mu_none'],
        barrel: ['br_none'],
        foregrip: ['fg_resonance3', 'fg_ec_stop', 'fg_dawn_tri', 'fg_dawn_vert', 'fg_cr_prism', 'fg_resonance2', 'fg_bipod_grip', 'fg_k1_elite', 'fg_x25u', 'fg_resonance', 'fg_phantom_vert', 'fg_tactical_vert', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_fold', 'fg_vfg_knight', 'fg_zfsg', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_ar_modular', 'rg_ar_tower', 'rg_invasion', 'rg_phantom', 'rg_ar_moe', 'rg_shooter', 'rg_hurricane', 'rg_m7_stable', 'rg_416_prac', 'rg_none'],
        mag: ['ma_none'],
        stock: ['st_anchor_rail', 'st_qr_perf', 'st_ct_enhanced', 'st_shadow_core', 'st_mrgs_hollow', 'st_ur_tactical2', 'st_shadow_rail', 'st_skeleton_sniper', 'st_416_stable', 'st_416_light', 'st_elite_light', 'st_raid_core', 'st_pivot_stable', 'st_lightning_rail', 'st_utility_light', 'st_tactical', 'st_stable', 'st_core_rail', 'st_none'],
        side_optic: ['op_osight_side', 'op_side_combat', 'op_side', 'op_xro_side', 'op_side_pano', 'side_optic_none'],
        upper_rail: ['fn_warrior_light', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_combined', 'fn_kuangfeng', 'fn_combined', 'fn_kc_hound', 'fn_ranger', 'ur_none'],
        left_rail: ['fn_olight_odin', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'lr_none'],
        right_rail: ['fn_warrior_light', 'fn_olight_odin', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'rr_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'rear_grip_patch', 'grip_seat'],
        slotVisibilityRules: [
            { when: { slot: 'slot', value: 'op_spirit_37' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_m157' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_lpvo' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_sniper' }, show: ['lens_shade', 'upper_side_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_scout' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser' }, show: ['optic', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser2' }, show: ['tactical_device', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'rg_ar_modular' }, show: ['rear_grip_patch'], hide: [] },
            { when: { slot: 'slot', value: 'rg_ar_tower' }, show: ['grip_seat'], hide: [] }
        ]
    },

    'pkm': {
        optic: ['op_thermal_combat', 'op_thermal_holo', 'op_vmx', 'op_1p33', 'op_uhx', 'op_prism_2x', 'op_spirit_37', 'op_m157', 'op_viewpoint_3x', 'op_1p29', 'op_lpvo', 'op_sniper', 'op_scout', 'op_hamr', 'op_riser', 'op_riser2', 'op_riser', 'op_acog_6x', 'op_osight', 'op_cobra', 'op_combat_rd', 'op_mini_rd', 'op_okp7', 'op_xcog', 'op_xro', 'op_panorama', 'op_ap5000', 'op_holo_ii', 'op_red', 'op_ru_2x', 'op_holo', 'op_none'],
        muzzle: ['mu_ffc_dual', 'mu_xinhuo', 'mu_advanced', 'mu_dtk', 'mu_m7_silencer', 'mu_ak_brave', 'mu_pbs', 'mu_dead', 'mu_sandstorm', 'mu_fortress', 'mu_poseidon', 'mu_whisper', 'mu_titanium', 'mu_inferno', 'mu_ak_comp', 'mu_steel_brake', 'mu_practical', 'mu_flare_bell', 'mu_flame', 'mu_none'],
        barrel: ['br_none'],
        rear_grip: ['rg_ak_scorpion', 'rg_rk3', 'rg_ak_skeleton', 'rg_ak_tower', 'rg_ak_stable', 'rg_ak_shooter', 'rg_ak_prac', 'rg_none'],
        mag: ['ma_none'],
        stock: ['st_anchor_rail', 'st_qr_perf', 'st_ct_enhanced', 'st_shadow_core', 'st_mrgs_hollow', 'st_ur_tactical2', 'st_shadow_rail', 'st_skeleton_sniper', 'st_416_stable', 'st_416_light', 'st_elite_light', 'st_raid_core', 'st_pivot_stable', 'st_lightning_rail', 'st_utility_light', 'st_tactical', 'st_stable', 'st_core_rail', 'st_none'],
        rail_bipod: ['fn_pkm_bipod', 'rb_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic', 'riser_optic', 'tactical_device', 'grip_seat'],
        slotVisibilityRules: [
            { when: { slot: 'slot', value: 'op_spirit_37' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_m157' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_lpvo' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_sniper' }, show: ['lens_shade', 'upper_side_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_scout' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser' }, show: ['optic', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser2' }, show: ['tactical_device', 'riser_optic'], hide: [] },
            { when: { slot: 'slot', value: 'rg_ak_tower' }, show: ['grip_seat'], hide: [] }
        ]
    },

    'qjb201': {
        optic: ['op_thermal_combat', 'op_thermal_holo', 'op_vmx', 'op_1p33', 'op_uhx', 'op_prism_2x', 'op_viewpoint_3x', 'op_1p29', 'op_scout', 'op_hamr', 'op_riser', 'op_riser', 'op_acog_6x', 'op_osight', 'op_cobra', 'op_combat_rd', 'op_mini_rd', 'op_okp7', 'op_xcog', 'op_xro', 'op_panorama', 'op_ap5000', 'op_holo_ii', 'op_red', 'op_ru_2x', 'op_holo', 'op_none'],
        muzzle: ['mu_web_titanium', 'mu_ffc_dual', 'mu_xinhuo', 'mu_advanced', 'mu_m7_silencer', 'mu_dead', 'mu_sandstorm', 'mu_fortress', 'mu_poseidon', 'mu_whisper', 'mu_titanium', 'mu_inferno', 'mu_steel_brake', 'mu_practical', 'mu_flame', 'mu_none'],
        barrel: ['br_none'],
        foregrip: ['fg_resonance3', 'fg_ec_stop', 'fg_dawn_tri', 'fg_dawn_vert', 'fg_cr_prism', 'fg_resonance2', 'fg_bipod_grip', 'fg_k1_elite', 'fg_x25u', 'fg_resonance', 'fg_phantom_vert', 'fg_tactical_vert', 'fg_secret_angle', 'fg_rk0', 'fg_tactical_tri', 'fg_angle_stop', 'fg_race_stop', 'fg_phase_battle', 'fg_fold', 'fg_vfg_knight', 'fg_zfsg', 'fg_mini_stop', 'fg_util_vert', 'fg_none'],
        rear_grip: ['rg_qjb201_soldier', 'rg_qjb201_heavy', 'rg_qjb201_light', 'rg_none'],
        mag: ['ma_qbz_45', 'ma_qbz_30', 'ma_qbz_60', 'ma_none'],
        stock: ['st_anchor_rail', 'st_qr_perf', 'st_ct_enhanced', 'st_shadow_core', 'st_mrgs_hollow', 'st_ur_tactical2', 'st_shadow_rail', 'st_skeleton_sniper', 'st_416_stable', 'st_416_light', 'st_elite_light', 'st_raid_core', 'st_pivot_stable', 'st_lightning_rail', 'st_utility_light', 'st_tactical', 'st_stable', 'st_core_rail', 'st_none'],
        gas_block: ['gb_qjb201_stable', 'gb_qjb201_speed', 'gas_block_none'],
        rail_bipod: ['fn_qjb201_bipod', 'rb_none'],
        left_rail: ['fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'lr_none'],
        right_rail: ['fn_warrior_light', 'fn_olight_odin', 'fn_olight_baldr', 'fn_dbal_x2', 'fn_laser', 'fn_flare', 'fn_la3c', 'fn_peq2', 'fn_prac_light', 'rr_none'],
        defaultHidden: ['lens_shade', 'riser_optic'],
        slotVisibilityRules: [
            { when: { slot: 'slot', value: 'op_scout' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser' }, show: ['optic', 'riser_optic'], hide: [] }
        ]
    },

    // ==================== 手枪 ====================

    '357': {
        optic: ['op_thermal_combat', 'op_thermal_holo', 'op_vmx', 'op_1p33', 'op_uhx', 'op_prism_2x', 'op_spirit_37', 'op_m157', 'op_viewpoint_3x', 'op_1p29', 'op_lpvo', 'op_sniper', 'op_scout', 'op_hamr', 'op_riser', 'op_acog_6x', 'op_osight', 'op_cobra', 'op_combat_rd', 'op_mini_rd', 'op_okp7', 'op_xcog', 'op_xro', 'op_panorama', 'op_ap5000', 'op_holo_ii', 'op_red', 'op_ru_2x', 'op_holo', 'op_none'],
        muzzle: ['mu_smg_echo', 'mu_pistol_pure', 'mu_elite_pistol', 'mu_pistol_flame', 'mu_none'],
        barrel: ['br_357_long', 'br_357_std', 'br_357_prac_long', 'br_357_prac_short', 'br_357_barrel', 'br_none'],
        rear_grip: ['rg_357_wind', 'rg_357_sniper', 'rg_none'],
        defaultHidden: ['lens_shade', 'upper_side_optic'],
        slotVisibilityRules: [
            { when: { slot: 'slot', value: 'op_spirit_37' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_m157' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_lpvo' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_sniper' }, show: ['lens_shade', 'upper_side_optic'], hide: [] },
            { when: { slot: 'slot', value: 'op_scout' }, show: ['lens_shade'], hide: [] },
            { when: { slot: 'slot', value: 'op_riser' }, show: ['optic'], hide: [] }
        ]
    },

    '93r': {
        optic: ['op_vmx', 'op_osight', 'op_combat_rd', 'op_mini_rd', 'op_xro', 'op_panorama', 'op_none'],
        muzzle: ['mu_smg_echo', 'mu_pistol_pure', 'mu_elite_pistol', 'mu_pistol_flame', 'mu_none'],
        barrel: ['br_93r_tactical', 'br_93r_long', 'br_93r_light', 'br_93r_heavy', 'br_93r_prac', 'br_none'],
        rear_grip: ['rg_m9_flesh', 'rg_m9_stable', 'rg_m9_black', 'rg_none'],
        mag: ['ma_93r_24', 'ma_93r_18', 'ma_none'],
        under_rail: EXT,
        lower_rail: ['fn_jad_laser', 'fn_olight_baldr', 'fn_under_light', 'fn_prac_light', 'lower_rail_none'],
        defaultHidden: [],
        slotVisibilityRules: []
    },

    'deagle': {
        optic: ['op_thermal_holo', 'op_vmx', 'op_uhx', 'op_prism_2x', 'op_riser', 'op_osight', 'op_cobra', 'op_combat_rd', 'op_mini_rd', 'op_okp7', 'op_xro', 'op_panorama', 'op_holo_ii', 'op_red', 'op_ru_2x', 'op_holo', 'op_none'],
        muzzle: ['mu_smg_echo', 'mu_pistol_pure', 'mu_elite_pistol', 'mu_pistol_flame', 'mu_none'],
        barrel: ['br_deagle_comp', 'br_deagle_race', 'br_deagle_rifled', 'br_none'],
        rear_grip: ['rg_deagle', 'rg_none'],
        mag: ['ma_deagle_13', 'ma_none'],
        lower_rail: ['fn_jad_laser', 'fn_olight_baldr', 'fn_prac_light', 'lower_rail_none'],
        defaultHidden: [],
        slotVisibilityRules: [
            { when: { slot: 'slot', value: 'op_riser' }, show: ['optic'], hide: [] }
        ]
    },

    'g17': {
        optic: ['op_vmx', 'op_osight', 'op_combat_rd', 'op_mini_rd', 'op_xro', 'op_panorama', 'op_none'],
        muzzle: ['mu_smg_echo', 'mu_pistol_pure', 'mu_elite_pistol', 'mu_pistol_flame', 'mu_none'],
        barrel: ['br_g17_tactical', 'br_g17_light', 'br_none'],
        rear_grip: ['rg_xk', 'rg_xk_rubber', 'rg_xk_grip', 'rg_none'],
        mag: ['ma_g_33', 'ma_g_25', 'ma_none'],
        lower_rail: ['fn_jad_laser', 'fn_olight_baldr', 'fn_prac_light', 'lower_rail_none'],
        defaultHidden: [],
        slotVisibilityRules: []
    },

    'g18': {
        optic: ['op_vmx', 'op_osight', 'op_combat_rd', 'op_mini_rd', 'op_xro', 'op_panorama', 'op_none'],
        muzzle: ['mu_smg_echo', 'mu_pistol_pure', 'mu_elite_pistol', 'mu_pistol_flame', 'mu_none'],
        barrel: ['br_g18_impact', 'br_none'],
        rear_grip: ['rg_xk', 'rg_xk_rubber', 'rg_xk_grip', 'rg_none'],
        mag: ['ma_g_33', 'ma_g_25', 'ma_none'],
        lower_rail: ['fn_jad_laser', 'fn_olight_baldr', 'fn_prac_light', 'lower_rail_none'],
        defaultHidden: [],
        slotVisibilityRules: []
    },

    'm1911': {
        optic: ['op_vmx', 'op_osight', 'op_combat_rd', 'op_mini_rd', 'op_xro', 'op_panorama', 'op_none'],
        muzzle: ['mu_smg_echo', 'mu_pistol_pure', 'mu_elite_pistol', 'mu_pistol_flame', 'mu_none'],
        barrel: ['br_m1911_tactical', 'br_none'],
        rear_grip: ['rg_m1911_tactical', 'rg_none'],
        mag: ['ma_m1911_11', 'ma_none'],
        lower_rail: ['fn_jad_laser', 'fn_olight_baldr', 'fn_under_light', 'fn_prac_light', 'lower_rail_none'],
        trigger: ['fn_m1911_trigger', 'trigger_none'],
        hammer: ['fn_m1911_hammer', 'hammer_none'],
        defaultHidden: [],
        slotVisibilityRules: []
    },

    'qsz92g': {
        optic: ['op_vmx', 'op_osight', 'op_combat_rd', 'op_mini_rd', 'op_xro', 'op_panorama', 'op_none'],
        muzzle: ['mu_smg_echo', 'mu_pistol_pure', 'mu_elite_pistol', 'mu_pistol_flame', 'mu_none'],
        barrel: ['br_qsz92g_tactical', 'br_none'],
        lower_rail: ['fn_jad_laser', 'fn_olight_baldr', 'fn_prac_light', 'lower_rail_none'],
        defaultHidden: [],
        slotVisibilityRules: []
    },

    // ==================== 特殊武器 ====================

    'bow': {
        mag: ['ma_hvk', 'ma_none'],
        bow_optic: ['bo_no_frame', 'bo_smart', 'bow_optic_none'],
        bow_arm: ['ba_heavy', 'ba_light', 'bow_arm_none'],
        bow_string: ['bs_enhanced', 'bow_string_none'],
        stabilizer: ['sb_stable', 'sb_comp', 'stabilizer_none'],
        arrow_rest: ['ar_comp', 'arrow_rest_none'],
        grip_plate: ['gp_enhanced', 'gp_balanced', 'grip_plate_none'],
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
        const { when, show, hide } = rule;
        // 支持 'slot' 通配符：匹配任意槽位中 ID 等于 when.value 的配件
        let selectedId = null;
        if (when.slot === 'slot' && selectedAttachments) {
            for (const key of Object.keys(selectedAttachments)) {
                const att = selectedAttachments[key];
                if (att && att.id === when.value) {
                    selectedId = att.id;
                    break;
                }
            }
        } else {
            const selectedAtt = selectedAttachments ? selectedAttachments[when.slot] : null;
            selectedId = selectedAtt ? selectedAtt.id : null;
        }

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