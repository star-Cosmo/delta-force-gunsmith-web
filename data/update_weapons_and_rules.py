#!/usr/bin/env python3
"""Update weapons.js base stats from hpromax_weapons.csv and generate slotVisibilityRules"""

import csv
import json
import re
import os
import zhconv

BASE = r'e:\work_station\delta-force-gunsmith-web\delta-force-gunsmith-web'

# ===== PART 1: Load hpromax_weapons.csv =====
csv_path = os.path.join(BASE, 'hpromax_csv', 'hpromax_weapons.csv')
weapons_csv = {}
with open(csv_path, 'r', encoding='utf-8-sig') as f:
    reader = csv.DictReader(f)
    for row in reader:
        wid = row['ID'].strip()
        weapons_csv[wid] = {
            'name': row['名称'],
            'type': row['类型'],
            'baseDamage': int(row['基础伤害']),
            'range': int(row['优势射程']),
            'recoil': int(row['后坐力控制']),
            'control': int(row['操控速度']),
            'stability': int(row['据枪稳定性']),
            'hipfire': int(row['腰际射击精度']),
            'armor': int(row['护甲伤害']),
            'rpm': int(row['射速']),
            'magCapacity': int(row['容量']),
        }

print(f"Loaded {len(weapons_csv)} weapons from CSV")

# ===== PART 2: Update weapons.js =====
weapons_js_path = os.path.join(BASE, 'data', 'weapons.js')
with open(weapons_js_path, 'r', encoding='utf-8') as f:
    weapons_js = f.read()

# Build weapon name→ID mapping from weapons.js
weapon_name_to_id = {}
for m in re.finditer(r"id:\s*'([^']+)'", weapons_js):
    wid = m.group(1)
    # Find the name
    name_match = re.search(rf"id:\s*'{re.escape(wid)}'[^}}]*?name:\s*'([^']+)'", weapons_js)
    if name_match:
        weapon_name_to_id[name_match.group(1)] = wid

# Build ID→CSV row mapping
weapon_csv_by_id = {}
for wid, data in weapons_csv.items():
    weapon_csv_by_id[wid] = data

# Also map by name
for wid, data in weapons_csv.items():
    name = data['name']
    if name not in weapon_name_to_id:
        # Try to find matching ID
        for wname, wjs_id in weapon_name_to_id.items():
            if wname in name or name in wname:
                weapon_csv_by_id[wjs_id] = data
                break

# Manual name→ID mapping
CSV_NAME_TO_ID = {
    '.357左轮': '357',
    '725双管霰弹枪': '725',
    '93R': '93r',
    '复合弓': 'bow',
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
    'G17': 'g17',
    'G18': 'g18',
    'G3战斗步枪': 'g3',
    'K416突击步枪': 'k416',
    'K437突击步枪': 'k437',
    'KC17突击步枪': 'kc17',
    'M1014霰弹枪': 'm1014',
    'M14射手步枪': 'm14',
    'M16A4突击步枪': 'm16a4',
    'M1911': 'm1911',
    'M249轻机枪': 'm249',
    'M250通用机枪': 'm250',
    'M7战斗步枪': 'm7',
    'M700狙击步枪': 'm700',
    'M82狙击步枪': 'm82',
    'M870霰弹枪': 'm870',
    'MCXLT突击步枪': 'mcxlt',
    'Mini-14精确射手步枪': 'mini-14',
    'MK4冲锋枪': 'mk4',
    'MK47突击步枪': 'mk47',
    'MP5冲锋枪': 'mp5',
    'MP7冲锋枪': 'mp7',
    'P90冲锋枪': 'p90',
    'PKM通用机枪': 'pkm',
    'PSG-1精确射手步枪': 'psg-1',
    'PTR-32突击步枪': 'ptr-32',
    'QBZ95-1突击步枪': 'qbz95-1',
    'QCQ171冲锋枪': 'qcq171',
    'QJB201轻机枪': 'qjb201',
    'QSZ92G': 'qsz92g',
    'R93狙击步枪': 'r93',
    'RM277突击步枪': 'rm277',
    'S12K霰弹枪': 's12k',
    'SCAR-H战斗步枪': 'scar-h',
    'SG552突击步枪': 'sg552',
    'SKS精确射手步枪': 'sks',
    'SMG-45冲锋枪': 'smg-45',
    'SR-25精确射手步枪': 'sr-25',
    'SR-3M冲锋枪': 'sr-3m',
    'SR9射手步枪': 'sr9',
    'SV-98狙击步枪': 'sv-98',
    'SVCH精确射手步枪': 'svch',
    'SVD精确射手步枪': 'svd',
    'UZI冲锋枪': 'uzi',
    'Vector冲锋枪': 'vector',
    'VSS射手步枪': 'vss',
}

# Build csv_id → weapon.js_id mapping
csv_to_js_id = {}
for csv_name, js_id in CSV_NAME_TO_ID.items():
    csv_to_js_id[csv_name] = js_id

# Also try direct match
for csv_id in weapons_csv:
    if csv_id in weapon_name_to_id:
        csv_to_js_id[csv_id] = csv_id
    elif csv_id in CSV_NAME_TO_ID:
        csv_to_js_id[csv_id] = CSV_NAME_TO_ID[csv_id]

# Also try by name
for csv_id, csv_data in weapons_csv.items():
    if csv_id not in csv_to_js_id:
        for csv_name, js_id in CSV_NAME_TO_ID.items():
            if csv_data['name'] == csv_name:
                csv_to_js_id[csv_id] = js_id
                break

print(f"CSV→JS ID mappings: {len(csv_to_js_id)}")

# Update weapons.js
changes = 0
for csv_name, js_id in csv_to_js_id.items():
    if csv_name not in weapons_csv:
        continue
    csv_data = weapons_csv[csv_name]
    
    # Find the weapon block in weapons.js
    pattern = rf"id:\s*'{re.escape(js_id)}'.*?baseStats:\s*\{{([^}}]*)\}}"
    match = re.search(pattern, weapons_js, re.DOTALL)
    if not match:
        print(f"  WARNING: Could not find {js_id} in weapons.js")
        continue
    
    old_stats_str = match.group(1)
    # Parse old stats
    old_stats = {}
    for sm in re.finditer(r"(\w+):\s*(\d+)", old_stats_str):
        old_stats[sm.group(1)] = int(sm.group(2))
    
    # New stats
    new_stats = {
        'recoil': csv_data['recoil'],
        'stability': csv_data['stability'],
        'control': csv_data['control'],
        'range': csv_data['range'],
        'hipfire': csv_data['hipfire'],
        'armor': csv_data['armor'],
    }
    
    # Check if differs
    differs = False
    for k, v in new_stats.items():
        if k not in old_stats or old_stats[k] != v:
            differs = True
            break
    
    if not differs:
        continue
    
    # Build new stats string
    new_stats_str = 'recoil: ' + str(new_stats['recoil']) + ', stability: ' + str(new_stats['stability']) + ', control: ' + str(new_stats['control']) + ', range: ' + str(new_stats['range']) + ', hipfire: ' + str(new_stats['hipfire']) + ', armor: ' + str(new_stats['armor'])
    
    # Replace in weapons.js
    old_full = match.group(0)
    new_full = old_full.replace('{' + old_stats_str + '}', '{ ' + new_stats_str + ' }')
    weapons_js = weapons_js.replace(old_full, new_full)
    
    changes += 1
    print(f"  UPDATE: {js_id} ({csv_name})")
    print(f"    Old: {old_stats}")
    print(f"    New: {new_stats}")

# Also update baseDamage, rpm, magCapacity
for csv_name, js_id in csv_to_js_id.items():
    if csv_name not in weapons_csv:
        continue
    csv_data = weapons_csv[csv_name]
    
    # Find baseDamage
    pattern = rf"id:\s*'{re.escape(js_id)}'.*?baseDamage:\s*(\d+)"
    match = re.search(pattern, weapons_js, re.DOTALL)
    if match:
        old_dmg = int(match.group(1))
        new_dmg = csv_data['baseDamage']
        if old_dmg != new_dmg:
            weapons_js = re.sub(
                rf"(id:\s*'{re.escape(js_id)}'.*?baseDamage:\s*)\d+",
                rf"\g<1>{new_dmg}",
                weapons_js,
                count=1,
                flags=re.DOTALL
            )
            print(f"  UPDATE baseDamage: {js_id} {old_dmg}→{new_dmg}")
            changes += 1
    
    # Find rpm
    pattern = rf"id:\s*'{re.escape(js_id)}'.*?rpm:\s*(\d+)"
    match = re.search(pattern, weapons_js, re.DOTALL)
    if match:
        old_rpm = int(match.group(1))
        new_rpm = csv_data['rpm']
        if old_rpm != new_rpm:
            weapons_js = re.sub(
                rf"(id:\s*'{re.escape(js_id)}'.*?rpm:\s*)\d+",
                rf"\g<1>{new_rpm}",
                weapons_js,
                count=1,
                flags=re.DOTALL
            )
            print(f"  UPDATE rpm: {js_id} {old_rpm}→{new_rpm}")
            changes += 1
    
    # Find magCapacity
    pattern = rf"id:\s*'{re.escape(js_id)}'.*?magCapacity:\s*(\d+)"
    match = re.search(pattern, weapons_js, re.DOTALL)
    if match:
        old_mag = int(match.group(1))
        new_mag = csv_data['magCapacity']
        if old_mag != new_mag:
            weapons_js = re.sub(
                rf"(id:\s*'{re.escape(js_id)}'.*?magCapacity:\s*)\d+",
                rf"\g<1>{new_mag}",
                weapons_js,
                count=1,
                flags=re.DOTALL
            )
            print(f"  UPDATE magCapacity: {js_id} {old_mag}→{new_mag}")
            changes += 1

print(f"\nTotal weapon stat changes: {changes}")

# Write updated weapons.js
with open(weapons_js_path, 'w', encoding='utf-8') as f:
    f.write(weapons_js)
print("weapons.js updated!")

# ===== PART 3: Generate slotVisibilityRules =====
rules_path = os.path.join(BASE, 'hpromax_csv', 'hpromax_rules.csv')
compat_path = os.path.join(BASE, 'data', 'compatibility.js')

# Load attachment name→ID mapping from attachments.js
with open(os.path.join(BASE, 'data', 'attachments.js'), 'r', encoding='utf-8') as f:
    att_js = f.read()

att_name_to_id = {}
for m in re.finditer(r"id\s*:\s*'([^']+)'\s*,\s*name\s*:\s*'([^']+)'", att_js):
    aid = m.group(1)
    aname = m.group(2)
    att_name_to_id[aname] = aid
    aname_simp = zhconv.convert(aname, 'zh-cn')
    if aname_simp != aname:
        att_name_to_id[aname_simp] = aid

# Load manual name map from build_compat.py
# (we'll use the same resolve function)
MANUAL_NAME_MAP = {}
# Load from the manual_name_map.json
manual_map_path = os.path.join(BASE, 'data', 'manual_name_map.json')
if os.path.exists(manual_map_path):
    with open(manual_map_path, 'r', encoding='utf-8') as f:
        MANUAL_NAME_MAP = json.load(f)

# Also add optics map
OPTICS_MAP = {
    '先进白热成像战斗瞄准镜': 'op_thermal_combat',
    '先进热融合全息瞄准镜': 'op_thermal_holo',
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
MANUAL_NAME_MAP.update(OPTICS_MAP)

# Slot name mapping
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

def resolve_attachment_id(aname):
    if aname in att_name_to_id:
        return att_name_to_id[aname]
    if aname in MANUAL_NAME_MAP:
        return MANUAL_NAME_MAP[aname]
    aname_simp = zhconv.convert(aname, 'zh-cn')
    if aname_simp != aname and aname_simp in att_name_to_id:
        return att_name_to_id[aname_simp]
    if aname_simp in MANUAL_NAME_MAP:
        return MANUAL_NAME_MAP[aname_simp]
    return None

# Read hpromax_rules.csv
rules = {}
with open(rules_path, 'r', encoding='utf-8-sig') as f:
    reader = csv.DictReader(f)
    for row in reader:
        weapon_name = row['武器名称'].strip()
        trigger_att = row['触发配件'].strip()
        action = row['动作'].strip()
        target_slot = row['目标槽位'].strip()
        
        # Map weapon name to ID
        wid = CSV_NAME_TO_ID.get(weapon_name)
        if wid is None:
            # Try direct match
            if weapon_name in weapons_csv:
                wid = csv_to_js_id.get(weapon_name)
        if wid is None:
            continue
        
        # Map trigger attachment name to ID
        trigger_id = resolve_attachment_id(trigger_att)
        if trigger_id is None:
            continue
        
        # Map target slot to key
        slot_key = SLOT_NAME_TO_KEY.get(target_slot)
        if slot_key is None:
            continue
        
        if wid not in rules:
            rules[wid] = []
        
        if action == 'add':
            rules[wid].append({
                'when': {'slot': 'slot', 'value': trigger_id},
                'show': [slot_key],
                'hide': []
            })
        elif action == 'remove':
            rules[wid].append({
                'when': {'slot': 'slot', 'value': trigger_id},
                'show': [],
                'hide': [slot_key]
            })

print(f"\nGenerated slotVisibilityRules for {len(rules)} weapons")

# Update compatibility.js with slotVisibilityRules
with open(compat_path, 'r', encoding='utf-8') as f:
    compat_js = f.read()

# For each weapon, replace slotVisibilityRules
for wid, weapon_rules in rules.items():
    # Group rules by trigger_id to consolidate
    consolidated = {}
    for rule in weapon_rules:
        tid = rule['when']['value']
        if tid not in consolidated:
            consolidated[tid] = {'show': [], 'hide': []}
        consolidated[tid]['show'].extend(rule['show'])
        consolidated[tid]['hide'].extend(rule['hide'])
    
    # Remove duplicates
    for tid in consolidated:
        consolidated[tid]['show'] = list(dict.fromkeys(consolidated[tid]['show']))
        consolidated[tid]['hide'] = list(dict.fromkeys(consolidated[tid]['hide']))
    
    # Build rules string
    rule_parts = []
    for tid, actions in consolidated.items():
        show_str = ', '.join(f"'{s}'" for s in actions['show'])
        hide_str = ', '.join(f"'{s}'" for s in actions['hide'])
        rule_parts.append(f"{{ when: {{ slot: 'slot', value: '{tid}' }}, show: [{show_str}], hide: [{hide_str}] }}")
    
    rules_str = ',\n            '.join(rule_parts)
    
    if rules_str:
        new_rules = f"slotVisibilityRules: [\n            {rules_str}\n        ]"
    else:
        new_rules = "slotVisibilityRules: []"
    
    # Replace in compatibility.js
    # Find the weapon block and its slotVisibilityRules
    pattern = rf"'{re.escape(wid)}'\s*:\s*\{{.*?slotVisibilityRules:\s*\[.*?\]"
    match = re.search(pattern, compat_js, re.DOTALL)
    if match:
        old = match.group(0)
        new = re.sub(r'slotVisibilityRules:\s*\[.*?\]', new_rules, old, count=1, flags=re.DOTALL)
        compat_js = compat_js.replace(old, new)
        print(f"  Updated slotVisibilityRules for {wid}")

# Write updated compatibility.js
with open(compat_path, 'w', encoding='utf-8') as f:
    f.write(compat_js)
print(f"\ncompatibility.js updated with slotVisibilityRules!")

print("\nDone!")