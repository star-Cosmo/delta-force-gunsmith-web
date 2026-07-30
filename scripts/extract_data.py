#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
从 hpromax_all_data.json 提取数据：
1. extracted_compatibility.json: 武器ID → 槽位名 → 配件名列表
2. extracted_attachment_stats.json: 配件名 → 属性值(deltas)
"""

import json
import os
import sys

# 路径配置
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
JSON_PATH = os.path.join(BASE_DIR, 'hpromax_csv', 'hpromax_all_data.json')
OUTPUT_DIR = os.path.join(BASE_DIR, 'data')
COMPAT_OUTPUT = os.path.join(OUTPUT_DIR, 'extracted_compatibility.json')
STATS_OUTPUT = os.path.join(OUTPUT_DIR, 'extracted_attachment_stats.json')

# 属性名映射（中文 → 英文 key）
ATTR_MAP = {
    '后坐力控制': 'recoil',
    '据枪稳定性': 'stability',
    '操控速度': 'control',
    '优势射程': 'range',
    '有效射程': 'range',
    '腰际射击精度': 'hipfire',
    '护甲伤害': 'armor',
    '枪口初速': 'muzzle_velocity',
    '枪声传播距离': 'sound_range',
    '射速': 'rpm',
    '容量': 'capacity',
    '基础伤害': 'damage',
    '价值': 'value',
}


def extract_deltas(deltas_dict):
    """将中文属性名映射为英文 key，过滤掉非属性字段"""
    result = {}
    for cn_key, value in deltas_dict.items():
        if cn_key in ATTR_MAP:
            result[ATTR_MAP[cn_key]] = value
    return result


def normalize_name(name):
    """标准化配件名称，去除空格等"""
    return name.strip() if name else name


def main():
    print(f"读取数据文件: {JSON_PATH}")
    with open(JSON_PATH, 'r', encoding='utf-8') as f:
        all_data = json.load(f)

    print(f"共 {len(all_data)} 个武器条目")

    compatibility = {}  # weaponId -> {slot_name: [accessory_names]}
    all_attachment_stats = {}  # accessory_name -> {attr: value}

    for entry in all_data:
        weapon_id = entry.get('weaponId', '')
        weapon_name = entry.get('weaponName', '')

        if not weapon_id:
            continue

        print(f"  处理武器: {weapon_id} ({weapon_name})")

        pref = entry.get('preferenceOptions', {})
        optics = pref.get('optics', {})
        options_by_slot = optics.get('optionsBySlot', {})

        if not options_by_slot:
            print(f"    警告: 武器 {weapon_id} 没有 optionsBySlot 数据")
            continue

        weapon_slots = {}

        for slot_name, accessories in options_by_slot.items():
            if not accessories:
                continue

            acc_names = []
            for acc in accessories:
                name = normalize_name(acc.get('name', ''))
                if not name:
                    continue

                acc_names.append(name)

                # 收集配件属性
                deltas = acc.get('deltas', {})
                if deltas:
                    extracted = extract_deltas(deltas)
                    if name not in all_attachment_stats:
                        all_attachment_stats[name] = extracted
                    else:
                        # 合并属性（同配件在不同武器/槽位可能出现多次）
                        existing = all_attachment_stats[name]
                        for k, v in extracted.items():
                            if k not in existing:
                                existing[k] = v

            # 去重，保持顺序
            seen = set()
            unique_names = []
            for n in acc_names:
                if n not in seen:
                    seen.add(n)
                    unique_names.append(n)
            weapon_slots[slot_name] = unique_names

        compatibility[weapon_id] = weapon_slots

    # 输出前验证
    print(f"\n提取完成: {len(compatibility)} 个武器, {len(all_attachment_stats)} 个配件")

    # 确保输出目录存在
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    # 输出 compatibility
    with open(COMPAT_OUTPUT, 'w', encoding='utf-8') as f:
        json.dump(compatibility, f, ensure_ascii=False, indent=2)
    print(f"已输出: {COMPAT_OUTPUT}")

    # 输出 attachment stats
    with open(STATS_OUTPUT, 'w', encoding='utf-8') as f:
        json.dump(all_attachment_stats, f, ensure_ascii=False, indent=2)
    print(f"已输出: {STATS_OUTPUT}")

    # ===== 验证点 =====
    print("\n===== 验证 =====")

    # 验证点1: MK4 枪管只有 2 个专属配件（深空镀铬 + MK4专属），而非 5 个通用配件
    if 'mk4' in compatibility:
        mk4_barrel = compatibility['mk4'].get('枪管', [])
        print(f"MK4 枪管配件 ({len(mk4_barrel)} 个): {mk4_barrel}")
        # 检查是否只包含专属配件
        generic_barrels = ['海狸长枪管(通用)', '短枪管组合(通用)', '实用标准枪管(通用)']
        has_generic = [b for b in mk4_barrel if b in generic_barrels]
        if has_generic:
            print(f"  ⚠ 警告: MK4 枪管包含通用配件: {has_generic}")
        else:
            print(f"  ✓ MK4 枪管不包含通用配件（正确）")
        # 检查是否只有2个专属配件
        mk4_specific = [b for b in mk4_barrel if 'MK4' in b or '深空' in b]
        print(f"  MK4专属枪管: {mk4_specific}")
    else:
        print("  ⚠ 未找到 MK4 武器数据")

    # 验证点2: EC通用前阻手(fg_ec_stop) 存在且 hipfire 值为 +16
    ec_name = 'EC通用前阻手'
    if ec_name in all_attachment_stats:
        ec_stats = all_attachment_stats[ec_name]
        print(f"\nEC通用前阻手 属性: {ec_stats}")
        if ec_stats.get('hipfire') == 16:
            print(f"  ✓ hipfire 值为 +16（正确）")
        else:
            print(f"  ⚠ hipfire 值为 {ec_stats.get('hipfire')}（期望 +16）")
    else:
        # 尝试模糊搜索
        ec_candidates = [n for n in all_attachment_stats if 'EC' in n or '前阻' in n]
        print(f"\n未找到 'EC通用前阻手'，包含 'EC' 或 '前阻' 的配件: {ec_candidates}")

    return 0


if __name__ == '__main__':
    sys.exit(main())