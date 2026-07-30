#!/usr/bin/env python3
"""Fix attachments.js: update stats, add missing attachments, fix name→ID mappings"""

import json
import re
import os
import zhconv

BASE = r'e:\work_station\delta-force-gunsmith-web\delta-force-gunsmith-web\data'

# ===== 1. Load extracted_attachment_stats.json =====
with open(os.path.join(BASE, 'extracted_attachment_stats.json'), 'r', encoding='utf-8') as f:
    extracted_stats = json.load(f)

# Build simplified→traditional lookup for stats
s2t_stats = {}
for name, data in extracted_stats.items():
    trad = zhconv.convert(name, 'zh-tw')
    s2t_stats[name] = data  # simplified
    s2t_stats[trad] = data  # traditional

# ===== 2. Read attachments.js =====
with open(os.path.join(BASE, 'attachments.js'), 'r', encoding='utf-8') as f:
    att_js = f.read()

# ===== 3. Read extracted_compatibility.json for missing attachment names =====
with open(os.path.join(BASE, 'extracted_compatibility.json'), 'r', encoding='utf-8') as f:
    extracted = json.load(f)

# Collect all unique attachment names from extracted data
all_extracted_names = set()
for wdata in extracted.values():
    for slot, names in wdata.items():
        for name in names:
            all_extracted_names.add(name)

# ===== 4. Build existing name→ID mapping from attachments.js =====
# Match all { id:'...', name:'...', ... } patterns
existing_name_to_id = {}
for m in re.finditer(r"id\s*:\s*'([^']+)'\s*,\s*name\s*:\s*'([^']+)'", att_js):
    aid = m.group(1)
    aname = m.group(2)
    existing_name_to_id[aname] = aid
    # Also add simplified version
    aname_simp = zhconv.convert(aname, 'zh-cn')
    if aname_simp != aname:
        existing_name_to_id[aname_simp] = aid

print(f"Existing attachments: {len(existing_name_to_id)}")

# ===== 5. Identify missing names =====
# Missing = names in extracted that have no ID mapping in existing_name_to_id
# But first check if they can be resolved via zhconv
missing_names = set()
for name in all_extracted_names:
    aid = existing_name_to_id.get(name)
    if aid is None:
        # Try simplified
        name_simp = zhconv.convert(name, 'zh-cn')
        aid = existing_name_to_id.get(name_simp)
    if aid is None:
        # Try traditional
        name_trad = zhconv.convert(name, 'zh-tw')
        aid = existing_name_to_id.get(name_trad)
    if aid is None:
        missing_names.add(name)

print(f"Missing names: {len(missing_names)}")

# ===== 6. Manual mapping for missing names =====
# Many of these are rail/functional attachments that exist but with different naming
MANUAL_MAP = {
    # Rail attachments - these exist in upper_rail/left_rail/right_rail/upper_patch/etc.
    # 'DD蟒蛇护木片' → needs to be mapped to the right slot-specific ID
    # In compatibility, these are per-slot: ur_dd, lr_dd, rr_dd, up_dd, lp_dd, rp_dd
    # But in extracted compatibility, they use generic names without slot suffix
    'DD蟒蛇护木片': 'fn_combined',  # placeholder - will be handled per-slot in build_compat.py
    
    # Functional items
    'OLIGHTOdinS战术手电': 'fn_olight_odin',
    'OLIGHTBaldrProR多功能手电': 'fn_olight_baldr',
    'OLIGHTWARRIOR3S战术手电': 'fn_warrior_light',
    
    # Foregrips
    '黎明三角手电握把': 'fg_dawn_tri',
    '竞赛阻手器': 'fg_comp',
    
    # Rear grips
    '侵袭后握把': 'rg_invasion',
    '416实用后握把': 'rg_416_prac',
    '模块化AR后握把': 'rg_ar_modular',
    'ARMOE后握把': 'rg_ar_moe',
    'AR MOE后握把': 'rg_ar_moe',
    '天蝎座后握把': 'rg_ak_scorpion',
    'AK镂空握把': 'rg_ak_skeleton',
    '射手AK后握把': 'rg_ak_shooter',
    '实用AK后握把': 'rg_ak_prac',
    
    # Muzzle
    'AK勇火消音器': 'mu_ak_brave',
    'AK实用补偿器': 'mu_ak_comp',
    
    # Stocks
    'AK19枪托': 'st_ak19',
    '禁区一体枪托': 'st_restricted',
    
    # Magazines
    'AR60发扩容弹匣': 'ma_ar_60',
    'M4弹鼓60发': 'ma_m4_60',
    'M4扩充45发弹匣': 'ma_m4_45',
    
    # Mag seat / quick draw
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
    
    # Zentinert bolt handle
    '泽宁特拉机柄帽': 'fn_zentinert',
    
    # G3 platform
    'G3平台神射枪管组合': 'br_g3_marksman',
    
    # Various
    'OLIGHTWARRIOR3S战术手电': 'fn_warrior_light',
    'OLIGHT Odin S战术手电': 'fn_olight_odin',
    'OLIGHT Baldr Pro R多功能手电': 'fn_olight_baldr',
}

# ===== 7. Identify truly new attachments that need to be added =====
# Count how many times each missing name appears
name_counts = {}
for wdata in extracted.values():
    for slot, names in wdata.items():
        for name in names:
            if name in missing_names:
                if name not in name_counts:
                    name_counts[name] = 0
                name_counts[name] += 1

# Sort by frequency
sorted_missing = sorted(name_counts.items(), key=lambda x: -x[1])

print(f"\nTop missing names (most frequent):")
for name, count in sorted_missing[:50]:
    # Check if in MANUAL_MAP
    mapped = MANUAL_MAP.get(name, 'NOT_FOUND')
    # Get stats
    stats = None
    for lookup in [name, zhconv.convert(name, 'zh-cn'), zhconv.convert(name, 'zh-tw')]:
        if lookup in s2t_stats:
            stats = s2t_stats[lookup]
            break
    stats_str = ''
    if stats:
        stat_parts = [f"{k}:{v}" for k, v in stats.items() if k != 'value']
        stats_str = f" [{', '.join(stat_parts)}]"
    print(f"  '{name}' ({count}x) → {mapped}{stats_str}")

# ===== 8. Update existing attachment stats =====
# We'll update stats in attachments.js for entries that have matching names in extracted_stats
changes = 0
not_found = []

def update_stats(match):
    global changes, not_found
    aid = match.group(2)
    aname = match.group(3)
    
    # Skip none entries
    if aid.endswith('_none') or aid == 'none':
        return match.group(0)
    
    # Find stats
    ext_data = None
    for lookup in [aname, zhconv.convert(aname, 'zh-cn'), zhconv.convert(aname, 'zh-tw')]:
        if lookup in s2t_stats:
            ext_data = s2t_stats[lookup]
            break
    
    if ext_data is None:
        not_found.append((aid, aname))
        return match.group(0)
    
    # Build new stats
    new_stats = {}
    for k, v in ext_data.items():
        if k == 'value':
            continue
        new_stats[k] = v
    
    # Parse current stats
    old_stats_str = match.group(5)
    current_stats = {}
    for sm in re.finditer(r"(\w+):([^,}]+)", old_stats_str):
        sk = sm.group(1)
        sv = sm.group(2).strip().strip("'\"")
        try:
            sv = int(sv)
        except ValueError:
            pass
        current_stats[sk] = sv
    
    # Check if differs
    differs = False
    for k, v in new_stats.items():
        if k not in current_stats or current_stats[k] != v:
            differs = True
            break
    for k in current_stats:
        if k not in new_stats:
            differs = True
            break
    
    if not differs:
        return match.group(0)
    
    # Build new stats string
    stat_entries = [f"{k}:{v}" for k, v in sorted(new_stats.items())]
    new_stats_str = '{' + ', '.join(stat_entries) + '}'
    
    old_entry = match.group(0)
    new_entry = old_entry.replace(old_stats_str, new_stats_str)
    
    changes += 1
    print(f"  UPDATE: {aid} '{aname}'")
    print(f"    Old: {current_stats}")
    print(f"    New: {new_stats}")
    
    return new_entry

# Pattern for attachment entries
entry_pattern = re.compile(r"(\{)\s*id\s*:\s*'([^']+)'\s*,\s*name\s*:\s*'([^']+)'\s*,\s*emoji\s*:\s*'([^']*)'\s*,\s*stats\s*:\s*(\{[^}]*\})([^}]*?)(\s*\})", re.DOTALL)

print("\n=== Updating existing attachment stats ===")
new_att_js = entry_pattern.sub(update_stats, att_js)

print(f"\nTotal stats updated: {changes}")
print(f"Not found in extracted: {len(not_found)}")

# ===== 9. Write updated attachments.js =====
with open(os.path.join(BASE, 'attachments.js'), 'w', encoding='utf-8') as f:
    f.write(new_att_js)

print("\nattachments.js updated!")

# ===== 10. Generate the extended manual mapping for build_compat.py =====
# Save the manual mapping to a JSON file so build_compat.py can use it
manual_map_path = os.path.join(BASE, 'manual_name_map.json')
with open(manual_map_path, 'w', encoding='utf-8') as f:
    json.dump(MANUAL_MAP, f, ensure_ascii=False, indent=2)

print(f"\nManual mapping saved to {manual_map_path}")
print(f"\n=== Missing names still unresolved (top 30) ===")
still_missing = [(n, c) for n, c in sorted_missing if n not in MANUAL_MAP and MANUAL_MAP.get(n, 'NOT_FOUND') == 'NOT_FOUND']
for name, count in still_missing[:30]:
    print(f"  '{name}' ({count}x)")