// ===== 三角洲行动 · 配件数据库 =====
// 数据来源: deltaforcetools.gg/tw/wiki/attachment (官方Wiki)
// 最后更新: 2026-07-29 (hpromax数据修正)
// 属性说明: recoil=后座力控制, stability=持枪稳定性, control=操控速度, range=有效射程, hipfire=腰际射击精度, armor=护甲伤害

const ATTACHMENTS = {
    // ===== 枪口 (23个) =====
    muzzle: [
        { id:'mu_flare_bell',    name:'喇叭口消焰器',        emoji:'🔥', stats:{recoil:+3}, tuning:[] },
        { id:'mu_resonance',     name:'共鳴狙擊槍消音器',    emoji:'🤫', stats:{range:'+30%', control:-9, stability:-6}, tuning:[] },
        { id:'mu_shotgun_choke', name:'實用霰彈喉縮',        emoji:'🔧', stats:{recoil:+5, hipfire:+4, control:-4}, tuning:[] },
        { id:'mu_pbs',           name:'PBS俄式消音器',       emoji:'🤫', stats:{recoil:+10, control:-13}, tuning:[] },
        { id:'mu_advanced',      name:'先進多口徑消音器',    emoji:'🤫', stats:{recoil:+9, control:-6, hipfire:-4, range:'+18%'}, tuning:[] },
        { id:'mu_bird',          name:'鳥籠消焰器',          emoji:'🔥', stats:{recoil:+2, stability:+1}, tuning:[] },
        { id:'mu_titanium',      name:'鈦金競賽制退器',      emoji:'🔧', stats:{recoil:+12, control:-3}, tuning:[] },
        { id:'mu_fortress',      name:'堡壘水平補償器',      emoji:'🧱', stats:{recoil:+9}, tuning:[] },
        { id:'mu_swirl',         name:'漩渦消焰器',          emoji:'🔥', stats:{recoil:+2, stability:+5, control:-2}, tuning:[] },
        { id:'mu_practical',     name:'實用消音器',          emoji:'🤫', stats:{recoil:+2, stability:+2}, tuning:[] },
        { id:'mu_dtk',           name:'DTK制退器',           emoji:'🔧', stats:{hipfire:+12}, tuning:[] },
        { id:'mu_dead',          name:'死寂消音器',          emoji:'🤫', stats:{recoil:+8, range:'+24%', control:-13, stability:-5}, tuning:[] },
        { id:'mu_flame',         name:'實用消焰器',          emoji:'🔥', stats:{recoil:+2}, tuning:[] },
        { id:'mu_elite_pistol',  name:'精英手槍制退器',      emoji:'🔫', stats:{control:-3}, tuning:[] },
        { id:'mu_shotgun_cannon',name:'霰彈槍巨炮制退器',    emoji:'💥', stats:{recoil:+20, control:-2, stability:-2}, tuning:[] },
        { id:'mu_inferno',       name:'熾火抑制器',          emoji:'⚡', stats:{recoil:+6, control:-1}, tuning:[] },
        { id:'mu_ffc_dual',     name:'FFC雙流制退器',       emoji:'🌊', stats:{recoil:+10, control:-4, stability:+3}, tuning:[] },
        { id:'mu_steel_brake',  name:'鋼製膛口制退器',        emoji:'🔩', stats:{recoil:+6, stability:-1}, tuning:[] },
        { id:'mu_sandstorm',    name:'沙暴垂直補償器',        emoji:'🏜️', stats:{recoil:+9}, tuning:[] },
        { id:'mu_poseidon',     name:'海神消焰器',            emoji:'🔱', stats:{recoil:+7}, tuning:[] },
        { id:'mu_xinhuo',       name:'薪火螺旋消焰器',        emoji:'🔥', stats:{recoil:+4, stability:+1}, tuning:[] },
        { id:'mu_m7_silencer',  name:'M7實用消音器',          emoji:'🤫', stats:{recoil:+8, control:-4, stability:+2}, tuning:[] },
        { id:'mu_whisper',      name:'輕語戰術消音器',        emoji:'🤫', stats:{recoil:+6, control:-5, stability:+2, hipfire:-4, range:'+18%'}, tuning:[] },
        { id:'mu_none',          name:'無',                  emoji:'❌', stats:{}, tuning:[] }
    ],

    // ===== 枪管 =====
    // 涵盖所有武器专属枪管，按武器分组注释
    barrel: [
        // -- M4A1 / AR平台 --
        { id:'br_ar_trench',    name:'AR戰壕標準槍管組合',   emoji:'📏', stats:{recoil:+5, range:'+18%'}, tuning:[], weaponHint:'M4A1 / AR' },
        { id:'br_ar_assault',   name:'AR特攻短槍管組合',     emoji:'📐', stats:{recoil:+4, control:+8, hipfire:+8, stability:-6}, tuning:[], weaponHint:'M4A1 / AR' },
        { id:'br_ar_gabriel',   name:'AR加百列長槍管組合',   emoji:'🛡️', stats:{recoil:+9, stability:+4, control:-7, hipfire:-12, range:'+30%'}, tuning:[], weaponHint:'M4A1 / AR' },
        { id:'br_ar_integrated',name:'AR特勤一體消音組合',   emoji:'🤫', stats:{recoil:+4, control:-3, stability:-6, range:'+18%'}, tuning:[], weaponHint:'M4A1 / AR' },
        { id:'br_ar_carbon',    name:'AR碳纖維槍管組合',     emoji:'🪶', stats:{recoil:+6, stability:+3, control:-5, hipfire:-12, range:'+18%'}, tuning:[], weaponHint:'M4A1 / AR' },
        { id:'br_ar_standard',  name:'AR標準槍管組合',       emoji:'📍', stats:{recoil:+2, control:+6, hipfire:+8, stability:-6}, tuning:[], weaponHint:'M4A1 / AR' },

        // -- AKM --
        { id:'br_akm_perf',     name:'AKM性能槍管組合',      emoji:'🔧', stats:{recoil:+2, stability:+2, control:+2, hipfire:+4, range:'+6%'}, tuning:[], weaponHint:'AKM' },
        { id:'br_akm_beaver_l', name:'AKM海狸長槍管組合',    emoji:'📏', stats:{recoil:+9, stability:+4, control:-7, hipfire:-12, range:'+30%'}, tuning:[], weaponHint:'AKM' },
        { id:'br_akm_beaver_s', name:'AKM海狸短槍管組合',    emoji:'📐', stats:{recoil:+4, control:+8, hipfire:+8, stability:-6}, tuning:[], weaponHint:'AKM' },
        { id:'br_akm_prac_l',   name:'AKM實用長槍管組合',    emoji:'🛡️', stats:{recoil:+6, stability:+3, control:-5, hipfire:-12, range:'+18%'}, tuning:[], weaponHint:'AKM' },
        { id:'br_akm_prac_std', name:'AKM實用標準槍管組合',  emoji:'📍', stats:{recoil:+2, control:+6, hipfire:+8, stability:-6}, tuning:[], weaponHint:'AKM' },
        { id:'br_akm_trans',    name:'AKM超然長槍管組合',    emoji:'⭐', stats:{recoil:+5, range:'+18%'}, tuning:[], weaponHint:'AKM' },

        // -- K416 --
        { id:'br_k416_short',   name:'K416特勤短槍管組合',   emoji:'🔧', stats:{recoil:+4, control:+8, hipfire:+8, stability:-6}, tuning:[], weaponHint:'K416' },
        { id:'br_k416_elite',   name:'K416精英重槍管組合',   emoji:'⭐', stats:{recoil:+3, range:'+6%'}, tuning:[], weaponHint:'K416' },
        { id:'br_k416a8',       name:'K416A8槍管組合',       emoji:'🎯', stats:{recoil:+5, range:'+18%'}, tuning:[], weaponHint:'K416' },
        { id:'br_k416a8_long',  name:'K416A8長槍管組合',     emoji:'📏', stats:{recoil:+9, stability:+4, control:-7, hipfire:-12, range:'+30%'}, tuning:[], weaponHint:'K416' },

        // -- SCAR-H --
        { id:'br_scar_beaver',  name:'SCAR-H海狸長槍管',     emoji:'📏', stats:{recoil:+9, stability:+4, control:-7, hipfire:-12, range:'+30%'}, tuning:[], weaponHint:'SCAR-H' },
        { id:'br_scar_zero',    name:'SCAR-H零式短槍管',     emoji:'📐', stats:{recoil:+4, control:+8, hipfire:+8, stability:-6}, tuning:[], weaponHint:'SCAR-H' },
        { id:'br_scar_std',     name:'SCAR-H實用標準槍管',   emoji:'📍', stats:{recoil:+3, range:'+6%'}, tuning:[], weaponHint:'SCAR-H' },

        // -- M14 --
        { id:'br_m14_wander',   name:'M14漫遊標準槍管',      emoji:'🎯', stats:{recoil:+5, range:'+18%'}, tuning:[], weaponHint:'M14' },
        { id:'br_m14_insight',  name:'M14洞察超長槍管',      emoji:'🔭', stats:{recoil:+9, stability:+4, control:-7, hipfire:-12, range:'+30%'}, tuning:[], weaponHint:'M14' },
        { id:'br_m14_light',    name:'M14輕語短槍管',        emoji:'💨', stats:{recoil:+4, control:+8, hipfire:+8, stability:-6}, tuning:[], weaponHint:'M14' },

        // -- MP5 --
        { id:'br_mp5_perf',     name:'MP5性能槍管組合',      emoji:'🔧', stats:{recoil:+2, stability:+2, control:+2, hipfire:+4, range:'+6%'}, tuning:[], weaponHint:'MP5' },
        { id:'br_mp5_tactical', name:'MP5戰術槍管組合',      emoji:'🎖️', stats:{recoil:+2, control:+2, stability:+2, hipfire:+4, range:'+6%'}, tuning:[], weaponHint:'MP5' },
        { id:'br_mp5_scout',    name:'MP5斥候長槍管組合',    emoji:'🔭', stats:{recoil:+5, range:'+18%'}, tuning:[], weaponHint:'MP5' },
        { id:'br_mp5_covert',   name:'MP5隱蔽短槍管組合',    emoji:'🤫', stats:{recoil:+4, control:+8, hipfire:+8, stability:-6}, tuning:[], weaponHint:'MP5' },

        // -- AWM --
        { id:'br_awm_skyline',  name:'AWM天際線長槍管',      emoji:'🌌', stats:{recoil:+9, stability:+4, control:-4, hipfire:-8, range:'+30%'}, tuning:[], weaponHint:'AWM' },

        // -- Vector --
        { id:'br_vec_fortress', name:'Vector堡壘重槍管組合', emoji:'🧱', stats:{recoil:+8, control:+6, hipfire:+8}, tuning:[], weaponHint:'Vector' },
        { id:'br_vec_rail',     name:'Vector導軌槍管組合',   emoji:'〰️', stats:{recoil:+3, range:'+6%'}, tuning:[], weaponHint:'Vector' },
        { id:'br_vec_longsword',name:'Vector長劍超長槍管組合',emoji:'🗡️', stats:{recoil:+9, stability:+4, control:-7, hipfire:-12, range:'+30%'}, tuning:[], weaponHint:'Vector' },

        // -- 通用枪管 --
        { id:'br_beaver',       name:'海狸長槍管(通用)',     emoji:'📏', stats:{recoil:+9, stability:+4, control:-7, hipfire:-12, range:'+30%'}, tuning:[], weaponHint:'通用' },
        { id:'br_short',        name:'短槍管組合(通用)',     emoji:'📐', stats:{recoil:+4, control:+8, hipfire:+8, stability:-6}, tuning:[], weaponHint:'通用' },
        { id:'br_std',          name:'實用標準槍管(通用)',   emoji:'📍', stats:{recoil:+5, range:'+18%'}, tuning:[], weaponHint:'通用' },

        { id:'br_none',         name:'無',                   emoji:'❌', stats:{}, tuning:[] }
    ],

    // ===== 瞄具 (33个) =====
    optic: [
        // 基础瞄具
        { id:'op_red',         name:'反射式瞄準鏡',           emoji:'🔴', stats:{control:-2}, tuning:[] },
        { id:'op_panorama',    name:'全景紅點瞄準鏡',         emoji:'⭕', stats:{control:-2}, tuning:[] },
        { id:'op_holo',        name:'全息瞄準鏡',             emoji:'🔵', stats:{control:-2}, tuning:[] },
        { id:'op_holo_ii',     name:'全息二型瞄準鏡',         emoji:'🔵', stats:{control:-2}, tuning:[] },
        // 高倍镜
        { id:'op_sniper',      name:'3/7可調倍率狙擊鏡',     emoji:'🎯', stats:{}, tuning:[] },
        { id:'op_scout',       name:'偵察1.5/5可調瞄準鏡',   emoji:'🔍', stats:{}, tuning:[] },
        { id:'op_pso_25',      name:'PSO戰鬥2.5倍瞄準鏡',    emoji:'🔍', stats:{control:-6}, tuning:[] },
        { id:'op_xcog',        name:'XCOG突擊3.5倍瞄準鏡',   emoji:'🔍', stats:{control:-4}, tuning:[] },
        { id:'op_pso_8x',      name:'PSO狙擊8倍瞄準鏡',      emoji:'🎯', stats:{stability:+2, control:-8}, tuning:[] },
        { id:'op_viewpoint_3x',name:'視點3倍瞄準鏡',          emoji:'🔍', stats:{control:-4}, tuning:[] },
        { id:'op_acog_6x',     name:'ACOG精準六倍鏡',        emoji:'🔍', stats:{control:-2}, tuning:[] },
        { id:'op_hamr',        name:'HAMR組合瞄準鏡',         emoji:'🔍', stats:{control:-6}, tuning:[] },
        { id:'op_lpvo',        name:'LPVO高倍率戰鬥瞄準器',   emoji:'🔍', stats:{control:-6}, tuning:[] },
        { id:'op_spirit_37',   name:'靈眼3/7測距狙擊瞄準鏡', emoji:'👁️', stats:{}, tuning:[] },
        { id:'op_spirit_612',  name:'靈眼6/12測距狙擊瞄準鏡',emoji:'👁️', stats:{}, tuning:[] },
        { id:'op_marksman_612',name:'6/12神射手變倍狙擊鏡',  emoji:'🎯', stats:{}, tuning:[] },
        { id:'op_m3_sniper',   name:'M3狙擊鏡',              emoji:'🎯', stats:{stability:+6, control:-8}, tuning:[] },
        { id:'op_optical_8x',  name:'光學狙擊8倍瞄準鏡',     emoji:'🎯', stats:{stability:+6, control:-8}, tuning:[] },
        // 侧置/特殊
        { id:'op_iron',        name:'機械瞄具',               emoji:'👁️', stats:{}, tuning:[] },
        { id:'op_riser',       name:'微型瞄準器增高架',       emoji:'📐', stats:{control:+2}, tuning:[] },
        { id:'op_riser2',      name:'多用途戰術增高架',       emoji:'📐', stats:{control:+2}, tuning:[] },
        { id:'op_side',        name:'側置微型紅點瞄準鏡',     emoji:'👁️', stats:{control:-2}, tuning:[] },
        { id:'op_osight',      name:'Osight微型瞄準鏡',       emoji:'🔴', stats:{control:-2}, tuning:[] },
        { id:'op_ru_2x',       name:'俄式準直儀二倍瞄準鏡',   emoji:'🇷🇺', stats:{control:-2}, tuning:[] },
        { id:'op_xro_side',    name:'側置XRO快速反應瞄準鏡',  emoji:'👁️', stats:{control:-2}, tuning:[] },
        { id:'op_okp7',        name:'OKP-7反射瞄準鏡',        emoji:'🔴', stats:{control:-2}, tuning:[] },
        { id:'op_ap5000',      name:'AP5000反射式瞄準鏡',     emoji:'🔴', stats:{control:-2}, tuning:[] },
        { id:'op_osight_side', name:'側置Osight微型瞄準鏡',   emoji:'👁️', stats:{control:-2}, tuning:[] },
        { id:'op_combat_rd',   name:'戰鬥紅點瞄準鏡',         emoji:'🔴', stats:{control:-2}, tuning:[] },
        { id:'op_cobra',       name:'Cobra準直儀瞄準鏡',      emoji:'🐍', stats:{control:-2}, tuning:[] },
        { id:'op_mini_rd',     name:'微型紅點瞄準鏡',         emoji:'🔴', stats:{control:-2}, tuning:[] },
        { id:'op_xro',         name:'XRO快速反應瞄準鏡',      emoji:'👁️', stats:{control:-2}, tuning:[] },
        { id:'op_side_pano',   name:'側置全景紅點瞄準鏡',     emoji:'👁️', stats:{control:-2}, tuning:[] },
        { id:'op_side_combat', name:'側置戰鬥紅點瞄準鏡',     emoji:'👁️', stats:{control:-2}, tuning:[] },
        { id:'op_none',        name:'無',                     emoji:'❌', stats:{}, tuning:[] }
    ],

    // ===== 前握把 (24个) =====
    foregrip: [
        { id:'fg_comp',        name:'競賽阻手器',             emoji:'🏁', stats:{control:+5, hipfire:+12, recoil:-2}, tuning:[] },
        { id:'fg_resonance',   name:'共振人體工學握把',       emoji:'🔽', stats:{recoil:+9, control:-1}, tuning:[] },
        { id:'fg_phase',       name:'相位戰鬥前握把',         emoji:'⚔️', stats:{recoil:+4, control:+1, stability:+2, hipfire:+4}, tuning:[] },
        { id:'fg_vertical',    name:'實用垂直握把',           emoji:'🔽', stats:{recoil:+2}, tuning:[] },
        { id:'fg_tactical',    name:'戰術三角握把',           emoji:'🔺', stats:{recoil:+4, control:+2}, tuning:[] },
        { id:'fg_angled',      name:'密令斜角握把',           emoji:'📐', stats:{recoil:+9, control:-1}, tuning:[] },
        { id:'fg_fold',        name:'摺疊握把',               emoji:'📂', stats:{recoil:-3, control:+2, stability:+5}, tuning:[] },
        { id:'fg_vfg',         name:'VFG騎士前握把',          emoji:'🛡️', stats:{control:+4}, tuning:[] },
        { id:'fg_cr_prism',    name:'CR稜鏡阻手器',           emoji:'🔷', stats:{recoil:+6}, tuning:[] },
        { id:'fg_k1_elite',    name:'K1精英斜角握把',         emoji:'⭐', stats:{recoil:+6}, tuning:[] },
        { id:'fg_x25u',        name:'X25U斜側戰鬥握把',       emoji:'⚡', stats:{recoil:+10, hipfire:+8, control:-3, stability:-3}, tuning:[] },
        { id:'fg_zfsg',        name:'ZFSG戰術握把',           emoji:'🎯', stats:{hipfire:+12, recoil:-1}, tuning:[] },
        { id:'fg_dawn_tri',    name:'黎明三角手電筒握把',     emoji:'🔦', stats:{recoil:+8, control:-5}, tuning:[] },
        { id:'fg_angled_stop', name:'斜角阻手器',             emoji:'📐', stats:{control:+8, recoil:-2}, tuning:[] },
        { id:'fg_mini_stop',   name:'迷你阻手器',             emoji:'📍', stats:{control:+2}, tuning:[] },
        { id:'fg_dawn_vert',   name:'破曉垂直手電筒握把',     emoji:'🔦', stats:{recoil:+6, stability:+2, control:-7}, tuning:[] },
        { id:'fg_resonance_g2', name:'共振二代前握把',         emoji:'🔽', stats:{recoil:+6, control:+6, stability:-4}, tuning:[] },
        { id:'fg_resonance_g3', name:'共振三代握把',           emoji:'🔽', stats:{recoil:+4, control:-2, stability:+4, hipfire:+8}, tuning:[] },
        { id:'fg_ec_stop',      name:'EC通用前阻手',           emoji:'🛑', stats:{recoil:-4, control:+6, stability:+2, hipfire:+16}, tuning:[] },
        { id:'fg_phantom_vert', name:'幻影垂直握把',           emoji:'👻', stats:{recoil:+4, control:+8, stability:-4}, tuning:[] },
        { id:'fg_tactical_vert',name:'戰術垂直握把',           emoji:'🎖️', stats:{control:+6}, tuning:[] },
        { id:'fg_rk0',          name:'RK-0前握把',             emoji:'🔧', stats:{recoil:+6}, tuning:[] },
        { id:'fg_bipod_grip',   name:'伸縮腳架握把',           emoji:'🦵', stats:{control:+1, hipfire:-12}, tuning:[] },
        { id:'fg_none',        name:'無',                     emoji:'❌', stats:{}, tuning:[] }
    ],

    // ===== 后握把 (16个) =====
    rear_grip: [
        { id:'rg_phantom',     name:'幻影後握把',             emoji:'👻', stats:{recoil:+3, control:+9, stability:-4}, tuning:[] },
        { id:'rg_hurricane',   name:'颶風D-1後握把',          emoji:'🌪️', stats:{control:+4}, tuning:[] },
        { id:'rg_stable',      name:'穩固握把底座',           emoji:'🧱', stats:{recoil:+2, stability:+7, control:-5}, tuning:[] },
        { id:'rg_xk',          name:'XK競技後握',             emoji:'🏆', stats:{recoil:+6, control:+2}, tuning:[] },
        { id:'rg_shooter',     name:'射手D-2後握把',          emoji:'🎯', stats:{stability:+4}, tuning:[] },
        { id:'rg_deagle',      name:'沙鷹競技後握',           emoji:'🦅', stats:{recoil:+6}, tuning:[] },
        { id:'rg_ak_tower',    name:'AK重塔握把',             emoji:'🗼', stats:{recoil:+1, control:+1, stability:+1, hipfire:+4}, tuning:[] },
        { id:'rg_ar_tower',    name:'AR重塔握把',             emoji:'🗼', stats:{recoil:+1, control:+1, stability:+1, hipfire:+4}, tuning:[] },
        { id:'rg_m9_flesh',    name:'M9肉色操控後握',         emoji:'🤚', stats:{recoil:+2, control:+4}, tuning:[] },
        { id:'rg_rk3',         name:'RK3後握把',               emoji:'🔧', stats:{recoil:+3, control:+3}, tuning:[] },
        { id:'rg_m7_stable',   name:'M7穩定後握把',           emoji:'🛡️', stats:{recoil:+2}, tuning:[] },
        { id:'rg_m9_black',    name:'M9黑色均衡後握',         emoji:'⚫', stats:{recoil:+3, control:+3}, tuning:[] },
        { id:'rg_ak_stable',   name:'穩定AK後握把',           emoji:'🔫', stats:{recoil:+4}, tuning:[] },
        { id:'rg_xk_grip',     name:'XK防滑紋後握',           emoji:'✋', stats:{recoil:+2, control:+4}, tuning:[] },
        { id:'rg_mp7_stable',  name:'MP7穩固後握把',          emoji:'🔧', stats:{recoil:+6, stability:+6, control:-4}, tuning:[] },
        { id:'rg_resonance_g2',name:'共振二代一體槍托',       emoji:'🔧', stats:{recoil:+7, hipfire:+4, stability:-6}, tuning:[] },
        { id:'rg_none',        name:'無',                     emoji:'❌', stats:{}, tuning:[] }
    ],

    // ===== 弹匣 (59个) =====
    mag: [
        // -- M4A1 / K416 / AR 共用 (5.56x45mm) --
        { id:'ma_556_alu',     name:'5.56x45 30發鋁匣',       emoji:'📦', stats:{}, tuning:[], weaponHint:'M4A1 / K416' },
        { id:'ma_556_poly',    name:'5.56x45 30發聚合物彈匣', emoji:'📦', stats:{control:+2}, tuning:[], weaponHint:'M4A1 / K416' },
        { id:'ma_m4_45',       name:'M4擴充45發彈匣',         emoji:'📦', stats:{}, tuning:[], weaponHint:'M4A1 / K416' },
        { id:'ma_m4_60',       name:'M4 60發彈鼓',            emoji:'🥁', stats:{control:-12}, tuning:[], weaponHint:'M4A1 / K416' },

        // -- AKM 专属 (7.62x39mm) --
        { id:'ma_akm_30',      name:'AKM 30發聚合物彈匣',     emoji:'📦', stats:{control:+4}, tuning:[], weaponHint:'AKM' },
        { id:'ma_akm_40',      name:'AKM 40發延長匣',         emoji:'📦', stats:{control:-8}, tuning:[], weaponHint:'AKM' },
        { id:'ma_akm_70',      name:'AKM 70發大彈鼓',         emoji:'🥁', stats:{control:-15}, tuning:[], weaponHint:'AKM' },

        // -- SCAR-H 专属 (7.62x51mm) --
        { id:'ma_scar_30',     name:'SCAR-H 30發彈匣',        emoji:'📦', stats:{control:-8}, tuning:[], weaponHint:'SCAR-H' },
        { id:'ma_scar_50',     name:'SCAR-H 50發彈鼓',        emoji:'🥁', stats:{control:-15}, tuning:[], weaponHint:'SCAR-H' },

        // -- M14 专属 (7.62x51mm) --
        { id:'ma_m14_20',      name:'M14 20發彈匣',           emoji:'📦', stats:{control:-4}, tuning:[], weaponHint:'M14' },
        { id:'ma_m14_30',      name:'M14 30發彈匣',           emoji:'📦', stats:{control:-8}, tuning:[], weaponHint:'M14' },
        { id:'ma_m14_50',      name:'M14 50發彈鼓',           emoji:'🥁', stats:{control:-12}, tuning:[], weaponHint:'M14' },

        // -- MP5 专属 (9x19mm) --
        { id:'ma_mp5_50',      name:'MP5 50發彈鼓',           emoji:'🥁', stats:{control:-9}, tuning:[], weaponHint:'MP5' },

        // -- Vector 专属 (.45 ACP) --
        { id:'ma_vec_30',      name:'Vector 30發擴充彈匣',    emoji:'📦', stats:{control:-4}, tuning:[], weaponHint:'Vector' },
        { id:'ma_vec_40',      name:'Vector擴充40發彈匣',     emoji:'📦', stats:{control:-4}, tuning:[], weaponHint:'Vector' },
        { id:'ma_vec_70',      name:'Vector擴充CMAG70發',     emoji:'🥁', stats:{control:-15}, tuning:[], weaponHint:'Vector' },

        // -- AWM (栓动步枪, 固定5发) --
        { id:'ma_none',        name:'無',                     emoji:'❌', stats:{}, tuning:[] }
    ],

    // ===== 枪托 (大量) =====
    stock: [
        // 通用枪托
        { id:'st_lightning',   name:'閃電導軌槍托',           emoji:'⚡', stats:{control:+12, stability:-6}, tuning:[] },
        { id:'st_skeleton',    name:'骨架狙擊槍托',           emoji:'🦴', stats:{control:+8, stability:+6, recoil:-4, hipfire:-16}, tuning:[] },
        { id:'st_stable',      name:'實用穩定槍托',           emoji:'📍', stats:{recoil:+2}, tuning:[] },
        { id:'st_tactical',    name:'實用戰術槍托',           emoji:'🎖️', stats:{recoil:+4}, tuning:[] },
        { id:'st_elite_light', name:'精英輕型槍托',           emoji:'🪶', stats:{recoil:+3, control:+3}, tuning:[] },
        { id:'st_elite_light2',name:'實用輕型槍托',           emoji:'🪶', stats:{control:+2}, tuning:[] },
        { id:'st_ur_tactical', name:'UR特種戰術槍托',         emoji:'🎖️', stats:{recoil:+8, stability:+4, control:-4}, tuning:[] },
        { id:'st_core_rail',   name:'核心導軌槍托',           emoji:'〰️', stats:{recoil:+2, control:+2}, tuning:[] },
        { id:'st_universal_pad',name:'通用托腮板',             emoji:'🛡️', stats:{recoil:+1, stability:+3}, tuning:[] },
        { id:'st_pt1_special', name:'PT1特種槍托',             emoji:'⭐', stats:{recoil:+8, stability:-4, control:+4}, tuning:[] },
        { id:'st_pt3_death',   name:'PT3死士槍托',             emoji:'💀', stats:{recoil:+3, stability:+3, control:+3, hipfire:-4}, tuning:[] },
        { id:'st_invasion',    name:'侵掠核心槍托',           emoji:'⚔️', stats:{recoil:+6}, tuning:[] },

        // AK系列枪托
        { id:'st_ak',          name:'AK骨架槍托',              emoji:'🔫', stats:{control:+8, recoil:-3, stability:-3}, tuning:[] },
        { id:'st_ak_polymer',  name:'AK聚合物槍托',            emoji:'🔫', stats:{recoil:+1, stability:+1}, tuning:[] },
        { id:'st_ak_folding',  name:'AK摺疊槍托',              emoji:'📂', stats:{control:+5}, tuning:[] },
        { id:'st_ak_bumper',   name:'AK槍托緩衝墊',            emoji:'🛡️', stats:{}, tuning:[] },
        { id:'st_ak_endcap',   name:'AK槍托尾蓋',              emoji:'🔧', stats:{recoil:-10, stability:-4, control:+12, hipfire:+12}, tuning:[] },

        // MP5系列枪托
        { id:'st_mp5',         name:'MP5尾蓋',                 emoji:'🇩🇪', stats:{control:+12, hipfire:+12, recoil:-10, stability:-4}, tuning:[] },
        { id:'st_mp5_telescope',name:'MP5伸縮槍托',            emoji:'📏', stats:{control:+2, hipfire:+8}, tuning:[] },
        { id:'st_mp5k_fold',   name:'MP5K摺疊槍托',            emoji:'📂', stats:{recoil:+3, stability:+2}, tuning:[] },

        // M4/AR系列枪托
        { id:'st_m4_buffer',   name:'M4緩衝托芯',              emoji:'🔧', stats:{recoil:-10, stability:-4, control:+12, hipfire:+12}, tuning:[] },
        { id:'st_416_sturdy',  name:'416穩固槍托',             emoji:'🧱', stats:{recoil:+4, stability:+8, control:-6}, tuning:[] },
        { id:'st_416c_telescope',name:'416-C伸縮槍托',         emoji:'📏', stats:{recoil:+4, stability:-6, control:+8, hipfire:+8}, tuning:[] },
        { id:'st_416_light',   name:'416輕型槍托',             emoji:'🪶', stats:{recoil:+6, stability:-6, control:+6}, tuning:[] },
        { id:'st_shadow_rail', name:'影襲導軌槍托',           emoji:'⚡', stats:{recoil:+7, stability:-6, control:+7}, tuning:[] },
        { id:'st_shadow_buffer',name:'影襲托芯槍托',           emoji:'⚡', stats:{recoil:+2, stability:-6, control:+10, hipfire:+8}, tuning:[] },

        // M14专属枪托
        { id:'st_m14_ebr',     name:'M14 EBR槍托',             emoji:'🎯', stats:{recoil:+5, stability:+3, control:+2, hipfire:-8}, tuning:[] },

        // 其他专属枪托
        { id:'st_sr3m',        name:'SR-3M槍托尾蓋',           emoji:'🔧', stats:{control:+12, hipfire:+3, recoil:-10, stability:-4}, tuning:[] },
        { id:'st_1014',        name:'1014伸縮托(摺疊)',         emoji:'📂', stats:{recoil:+5, control:+8, hipfire:+12}, tuning:[] },
        { id:'st_1014_fixed',  name:'1014固定槍托',            emoji:'🔒', stats:{recoil:+8, control:+4}, tuning:[] },
        { id:'st_1014_extend', name:'1014伸縮托(展開)',         emoji:'📏', stats:{recoil:+15, hipfire:+4}, tuning:[] },
        { id:'st_pivot_adv',   name:'樞機先進戰鬥槍托',       emoji:'⚔️', stats:{recoil:+4, stability:+1, control:+1, hipfire:+8}, tuning:[] },
        { id:'st_pivot_sturdy',name:'樞機穩固槍托',           emoji:'🧱', stats:{recoil:+6}, tuning:[] },
        { id:'st_mrgs_hollow', name:'MRGS鏤空槍托',            emoji:'🕳️', stats:{stability:+6, control:+4, hipfire:-8}, tuning:[] },
        { id:'st_vector_res',  name:'Vector共振一體式槍托',    emoji:'🔧', stats:{recoil:+12, stability:-5, control:+6, hipfire:+12}, tuning:[] },
        { id:'st_vector_end',  name:'Vector槍托尾蓋',          emoji:'🔧', stats:{recoil:-10, stability:-4, control:+12, hipfire:+12}, tuning:[] },
        { id:'st_scar_end',    name:'SCAR-H槍托尾蓋',          emoji:'🔧', stats:{recoil:-10, stability:-4, control:+12, hipfire:+3}, tuning:[] },
        { id:'st_asval_end',   name:'AS Val槍托尾蓋',          emoji:'🔧', stats:{recoil:-10, stability:-4, control:+12, hipfire:+3}, tuning:[] },
        { id:'st_mp7_end',     name:'MP7槍托尾蓋',             emoji:'🔧', stats:{recoil:-10, stability:-4, control:+12, hipfire:+3}, tuning:[] },
        { id:'st_qbz_pad',     name:'QBZ托腮板',               emoji:'🛡️', stats:{recoil:+3, stability:+3, control:+3}, tuning:[] },
        { id:'st_m700_pad',    name:'M700托腮板',              emoji:'🛡️', stats:{stability:+3, control:+1}, tuning:[] },
        { id:'st_anchor_rail', name:'錨點導軌後托',           emoji:'⚓', stats:{recoil:+4, control:-2, stability:+6}, tuning:[] },
        { id:'st_qr_perf',     name:'QR高性能後托',           emoji:'⚡', stats:{recoil:+3, control:-2, stability:+3, hipfire:+16}, tuning:[] },
        { id:'st_ct_enhanced', name:'CT增強型後托',           emoji:'🛡️', stats:{recoil:+2, control:+6, stability:+2, hipfire:-8}, tuning:[] },

        { id:'st_none',        name:'無槍托',                  emoji:'❌', stats:{control:+15, recoil:-5, stability:-5, hipfire:+10, range:-5}, tuning:[] }
    ],

    // ===== 功能配件 (38个) =====
    functional: [
        // 护木片
        { id:'fn_combined',    name:'組合式護木片',           emoji:'🛡️', stats:{recoil:+1, stability:+1, control:-2}, tuning:[] },
        { id:'fn_ranger',      name:'遊俠護木片',             emoji:'🛡️', stats:{recoil:+1}, tuning:[] },
        { id:'fn_kc_hound',    name:'KC獵犬護木片',           emoji:'🛡️', stats:{}, tuning:[] },
        { id:'fn_kuangfeng',   name:'狂蜂護木片',             emoji:'🐝', stats:{hipfire:+4}, tuning:[] },

        // 激光镭指
        { id:'fn_laser',       name:'PERST-7藍色激光鐳指',    emoji:'🔦', stats:{}, tuning:[] },
        { id:'fn_peq2',        name:'PEQ-2紅色激光鐳指',      emoji:'🔦', stats:{}, tuning:[] },
        { id:'fn_la3c',        name:'LA-3C綠色激光鐳指',      emoji:'🔦', stats:{}, tuning:[] },
        { id:'fn_dbal_x2',     name:'DBAL-X2紫色激光鐳指',    emoji:'🔦', stats:{}, tuning:[] },

        // 手电筒
        { id:'fn_olight_baldr',name:'OLIGHT Baldr Pro R多功能手電筒', emoji:'🔦', stats:{}, tuning:[] },
        { id:'fn_olight_odin', name:'OLIGHT Odin S戰術手電筒',emoji:'🔦', stats:{}, tuning:[] },
        { id:'fn_flare',       name:'耀斑戰術手電筒',         emoji:'🔦', stats:{}, tuning:[] },
        { id:'fn_car15_light', name:'CAR15綁手電筒',          emoji:'🔦', stats:{}, tuning:[] },
        { id:'fn_under_light', name:'下掛手槍燈',             emoji:'🔦', stats:{control:-1}, tuning:[] },
        { id:'fn_prac_light',  name:'實用槍燈',               emoji:'🔦', stats:{control:-1}, tuning:[] },

        // 快拔套
        { id:'fn_honey_bk',    name:'蜜獾小口徑快拔套(黑)',  emoji:'🦡', stats:{control:+1}, tuning:[] },
        { id:'fn_honey_sd',    name:'蜜獾小口徑快拔套(沙)',  emoji:'🦡', stats:{control:+1}, tuning:[] },
        { id:'fn_honey_gn',    name:'蜜獾小口徑快拔套(綠)',  emoji:'🦡', stats:{control:+1}, tuning:[] },
        { id:'fn_wasp_sd',     name:'野蜂衝鋒槍快拔套(沙)',  emoji:'🐝', stats:{control:+1}, tuning:[] },
        { id:'fn_wasp_bk',     name:'野蜂衝鋒槍快拔套(黑)',  emoji:'🐝', stats:{control:+1}, tuning:[] },
        { id:'fn_wasp_gn',     name:'野蜂衝鋒槍快拔套(綠)',  emoji:'🐝', stats:{control:+1}, tuning:[] },
        { id:'fn_grizzly_bk',  name:'灰熊全威力快拔套(黑)',  emoji:'🐻', stats:{control:+1}, tuning:[] },
        { id:'fn_grizzly_sd',  name:'灰熊全威力快拔套(沙)',  emoji:'🐻', stats:{control:+1}, tuning:[] },
        { id:'fn_grizzly_gn',  name:'灰熊全威力快拔套(綠)',  emoji:'🐻', stats:{control:+1}, tuning:[] },
        { id:'fn_coyote_bk',   name:'郊狼中間威力快拔套(黑)',emoji:'🐺', stats:{control:+1}, tuning:[] },
        { id:'fn_coyote_sd',   name:'郊狼中間威力快拔套(沙)',emoji:'🐺', stats:{control:+1}, tuning:[] },
        { id:'fn_coyote_gn',   name:'郊狼中間威力快拔套(綠)',emoji:'🐺', stats:{control:+1}, tuning:[] },

        // 脚架
        { id:'fn_awm_bipod',   name:'AWM兩腳架',              emoji:'🦵', stats:{}, tuning:[] },
        { id:'fn_aug_bipod',   name:'AUG腳架',                emoji:'🦵', stats:{}, tuning:[] },
        { id:'fn_pkm_bipod',   name:'PKM兩腳架',              emoji:'🦵', stats:{}, tuning:[] },
        { id:'fn_sv98_bipod',  name:'SV98兩腳架',             emoji:'🦵', stats:{}, tuning:[] },
        { id:'fn_gen_bipod',   name:'實用兩腳架',             emoji:'🦵', stats:{}, tuning:[] },
        { id:'fn_ak12_bipod',  name:'AK12腳架',               emoji:'🦵', stats:{}, tuning:[] },

        // 其他功能配件
        { id:'fn_psg_trigger', name:'PSG-1精確扳機',          emoji:'🎯', stats:{}, tuning:[] },
        { id:'fn_m1911_hammer',name:'M1911夜鷹戰術擊錘',     emoji:'🔨', stats:{recoil:-4}, tuning:[] },
        { id:'fn_m1911_trigger',name:'M1911夜鷹戰術扳機',    emoji:'🎯', stats:{recoil:-4}, tuning:[] },
        { id:'fn_r93_net',     name:'R93槍管隔熱網',          emoji:'🕸️', stats:{control:+1}, tuning:[] },
        { id:'fn_honeycomb',   name:'蜂網遮光罩',             emoji:'🍯', stats:{control:-3, stability:-3}, tuning:[] },

        { id:'fn_none',        name:'無',                     emoji:'❌', stats:{}, tuning:[] }
    ],

    // ===== 护木套件 (1个) =====
    handguard_kit: [
        { id:'hg_m14_adv',     name:'M14先進槍身系統',        emoji:'⭐', stats:{recoil:+4, control:+4}, tuning:[], weaponHint:'M14' },
        { id:'hg_none',        name:'無',                     emoji:'❌', stats:{}, tuning:[] }
    ],

    // ===== 护木 (25个) =====
    handguard: [
        { id:'hg_m14_poly',    name:'M14聚合物一體槍托',      emoji:'🔫', stats:{control:+4}, tuning:[], weaponHint:'M14' },
        { id:'hg_m14_rail',    name:'M14導軌一體槍托',        emoji:'〰️', stats:{recoil:+2, control:+4}, tuning:[], weaponHint:'M14' },
        { id:'hg_awm_dome',    name:'AWM穹頂套件',            emoji:'🌌', stats:{stability:+4, control:+3, recoil:-3}, tuning:[], weaponHint:'AWM' },
        { id:'hg_m700_black',  name:'M700黑色一體槍托',      emoji:'⚫', stats:{control:+7, stability:-3}, tuning:[], weaponHint:'M700' },
        { id:'hg_m700_stable', name:'M700穩定一體槍托',      emoji:'🛡️', stats:{stability:+7, control:-3}, tuning:[], weaponHint:'M700' },
        { id:'hg_m700_adv',    name:'M700先進槍身系統',      emoji:'⭐', stats:{control:+5, stability:+5, recoil:-2}, tuning:[], weaponHint:'M700' },
        { id:'hg_m700_mil',    name:'M700軍規護木',          emoji:'🎖️', stats:{control:+4, recoil:-6}, tuning:[], weaponHint:'M700' },
        { id:'hg_svd_rail',    name:'SVD導軌護木',           emoji:'〰️', stats:{control:+2, stability:+6}, tuning:[], weaponHint:'SVD' },
        { id:'hg_svd_poly',    name:'SVD聚合物護木',         emoji:'🔫', stats:{stability:+4}, tuning:[], weaponHint:'SVD' },
        { id:'hg_sks_adv',     name:'SKS先進護木',           emoji:'⭐', stats:{recoil:+6, control:+2}, tuning:[], weaponHint:'SKS' },
        { id:'hg_uzi_perf',    name:'UZI性能護木',           emoji:'🔧', stats:{recoil:+8, control:+3, stability:+3, hipfire:+8}, tuning:[], weaponHint:'UZI' },
        { id:'hg_uzi_rail',    name:'UZI導軌護木',           emoji:'〰️', stats:{recoil:+4, control:+4}, tuning:[], weaponHint:'UZI' },
        { id:'hg_m249_rail',   name:'M249導軌護木',          emoji:'〰️', stats:{recoil:+4, control:+4}, tuning:[], weaponHint:'M249' },
        { id:'hg_m249_bipod',  name:'M249腳架護木',          emoji:'🦵', stats:{}, tuning:[], weaponHint:'M249' },
        { id:'hg_m249_mil',    name:'M249軍規導軌護木',      emoji:'🎖️', stats:{recoil:+4, stability:+4}, tuning:[], weaponHint:'M249' },
        { id:'hg_m870_rail',   name:'M870導軌護木',          emoji:'〰️', stats:{recoil:+2, control:+2}, tuning:[], weaponHint:'M870' },
        { id:'hg_m1014_rail',  name:'M1014導軌護木',         emoji:'〰️', stats:{recoil:+3, control:+3}, tuning:[], weaponHint:'M1014' },
        { id:'hg_aks74u_up',   name:'AKS-74U導軌上護木',    emoji:'〰️', stats:{recoil:+2, control:+2, stability:+2, hipfire:+8}, tuning:[], weaponHint:'AKS-74U' },
        { id:'hg_aks74u_low',  name:'AKS-74U導軌下護木',    emoji:'〰️', stats:{recoil:+2, control:+2, stability:+2, hipfire:+8}, tuning:[], weaponHint:'AKS-74U' },
        { id:'hg_mini14_poly', name:'Mini-14聚合物槍托',     emoji:'🔫', stats:{control:+4}, tuning:[], weaponHint:'Mini-14' },
        { id:'hg_mini14_int',  name:'Mini-14聚合物一體槍托', emoji:'🔫', stats:{recoil:+4}, tuning:[], weaponHint:'Mini-14' },
        { id:'hg_mini14_adv',  name:'Mini-14先進槍身系統',   emoji:'⭐', stats:{recoil:+4, control:+4}, tuning:[], weaponHint:'Mini-14' },
        { id:'hg_bizon_carbon',name:'野牛碳纖維護木',        emoji:'🪶', stats:{recoil:+4, control:+4}, tuning:[], weaponHint:'PP-19 Bizon' },
        { id:'hg_qbz95_kit',   name:'95長弓平台套件',        emoji:'🏹', stats:{recoil:+6, control:+2, stability:+2, hipfire:-8}, tuning:[], weaponHint:'QBZ-95' },
        { id:'hg_sr25_elite',  name:'SR-25精英護木',         emoji:'⭐', stats:{control:+2, stability:+2}, tuning:[], weaponHint:'SR-25' },
        { id:'hg_none',        name:'無',                     emoji:'❌', stats:{}, tuning:[] }
    ]
};