// ===== 将生成的 slotVisibilityRules 写入 compatibility.js =====
const fs = require('fs');
const path = require('path');

// 读取生成的规则
const rulesPath = path.join(__dirname, '..', 'data', 'slot_visibility_rules.json');
const rulesData = JSON.parse(fs.readFileSync(rulesPath, 'utf-8'));

// 读取 compatibility.js
const compatPath = path.join(__dirname, '..', 'data', 'compatibility.js');
let compatContent = fs.readFileSync(compatPath, 'utf-8');

// 为每个武器替换 slotVisibilityRules
for (const [weaponId, rules] of Object.entries(rulesData)) {
    // 生成规则数组的 JS 代码
    const rulesStr = JSON.stringify(rules, null, 12)
        .replace(/"([^"]+)":/g, '$1:')  // 去掉 key 的引号
        .replace(/: "([^"]+)"/g, ': \'$1\'');  // 字符串值用单引号

    // 查找该武器的 slotVisibilityRules: [] 并替换
    // 使用正则匹配武器键和其后的 slotVisibilityRules
    const weaponKey = `'${weaponId}':`;
    const escapedKey = weaponKey.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    // 匹配从武器键到 slotVisibilityRules: [] 的模式
    const regex = new RegExp(`(${escapedKey}[\\s\\S]*?)(slotVisibilityRules: \\[\\])`, 'g');
    
    const before = compatContent;
    compatContent = compatContent.replace(regex, `$1slotVisibilityRules: ${rulesStr}`);
    
    if (before === compatContent) {
        console.warn(`Could not find slotVisibilityRules for weapon: ${weaponId}`);
    } else {
        console.log(`Updated slotVisibilityRules for: ${weaponId} (${rules.length} rules)`);
    }
}

// 更新 getVisibleSlots 函数以支持新格式 {trigger, action, slots}
const oldGetVisibleSlots = `// ===== 获取当前可见槽位 =====
function getVisibleSlots(weaponId, selectedAttachments) {
    const weaponCompat = WEAPON_ATTACHMENT_COMPATIBILITY[weaponId];
    if (!weaponCompat) {
        return [];
    }

    const rules = weaponCompat.slotVisibilityRules || [];
    const defaultHidden = weaponCompat.defaultHidden || [];

    // 获取武器原始拥有的所有槽位（排除元数据字段）
    const allSlots = Object.keys(weaponCompat).filter(k => !['slotVisibilityRules', 'defaultHidden'].includes(k));

    // 如果没有规则，返回所有槽位（排除默认隐藏的）
    if (rules.length === 0) {
        return allSlots.filter(s => !defaultHidden.includes(s));
    }

    // 收集所有额外显示和隐藏的槽位
    let extraShow = [];
    let extraHide = [];

    for (const rule of rules) {
        const { when, show, hide } = rule;
        const selectedAtt = selectedAttachments ? selectedAttachments[when.slot] : null;
        const selectedId = selectedAtt ? selectedAtt.id : null;

        if (selectedId === when.value) {
            extraShow = extraShow.concat(show || []);
            extraHide = extraHide.concat(hide || []);
        }
    }

    // 基础槽位 = 所有槽位 - 默认隐藏 - 被规则隐藏 + 被规则显示
    let visibleSlots = allSlots.filter(s => !defaultHidden.includes(s) && !extraHide.includes(s));
    for (const s of extraShow) {
        if (!visibleSlots.includes(s)) {
            visibleSlots.push(s);
        }
    }

    return visibleSlots;
}`;

const newGetVisibleSlots = `// ===== 获取当前可见槽位 =====
function getVisibleSlots(weaponId, selectedAttachments) {
    const weaponCompat = WEAPON_ATTACHMENT_COMPATIBILITY[weaponId];
    if (!weaponCompat) {
        return [];
    }

    const rules = weaponCompat.slotVisibilityRules || [];
    const defaultHidden = weaponCompat.defaultHidden || [];

    // 获取武器原始拥有的所有槽位（排除元数据字段）
    const allSlots = Object.keys(weaponCompat).filter(k => !['slotVisibilityRules', 'defaultHidden'].includes(k));

    // 如果没有规则，返回所有槽位（排除默认隐藏的）
    if (rules.length === 0) {
        return allSlots.filter(s => !defaultHidden.includes(s));
    }

    // 收集所有额外显示和隐藏的槽位
    let extraShow = [];
    let extraHide = [];

    for (const rule of rules) {
        const { trigger, action, slots } = rule;
        // 检查触发配件是否已选中
        // trigger 是配件 ID，需要遍历所有已选配件检查是否匹配
        let isTriggered = false;
        if (selectedAttachments) {
            for (const slotKey of Object.keys(selectedAttachments)) {
                const att = selectedAttachments[slotKey];
                if (att && att.id === trigger) {
                    isTriggered = true;
                    break;
                }
            }
        }

        if (isTriggered) {
            if (action === 'show') {
                extraShow = extraShow.concat(slots || []);
            } else if (action === 'hide') {
                extraHide = extraHide.concat(slots || []);
            }
        }
    }

    // 基础槽位 = 所有槽位 - 默认隐藏 - 被规则隐藏 + 被规则显示
    let visibleSlots = allSlots.filter(s => !defaultHidden.includes(s) && !extraHide.includes(s));
    for (const s of extraShow) {
        if (!visibleSlots.includes(s)) {
            visibleSlots.push(s);
        }
    }

    return visibleSlots;
}`;

compatContent = compatContent.replace(oldGetVisibleSlots, newGetVisibleSlots);

// 写回文件
fs.writeFileSync(compatPath, compatContent, 'utf-8');
console.log(`\nUpdated compatibility.js successfully!`);
console.log(`Total weapons with rules: ${Object.keys(rulesData).length}`);