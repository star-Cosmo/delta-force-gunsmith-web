// Simple script to update attachments.js stats from extracted_attachment_stats.json
const fs = require('fs');
const path = require('path');

const extractedPath = path.join(__dirname, '..', 'data', 'extracted_attachment_stats.json');
const attachmentsPath = path.join(__dirname, '..', 'data', 'attachments.js');

const extracted = JSON.parse(fs.readFileSync(extractedPath, 'utf8'));

// Simplified to Traditional Chinese mapping
const s2t = JSON.parse(fs.readFileSync(path.join(__dirname, 's2t_map.json'), 'utf8'));

// Convert simplified to traditional
function toTraditional(simplified) {
  let result = simplified;
  for (const [s, t] of Object.entries(s2t)) {
    // Escape special regex chars
    const escaped = s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    result = result.replace(new RegExp(escaped, 'g'), t);
  }
  return result;
}

// Build a lookup: traditional name -> extracted data
const tradLookup = {};
for (const [name, data] of Object.entries(extracted)) {
  const trad = toTraditional(name);
  tradLookup[trad] = { ...data };
}

// Read JS file
let jsContent = fs.readFileSync(attachmentsPath, 'utf8');

// Find all entries and update stats
// Pattern: { id:'...', name:'...', emoji:'...', stats:{...}, ... }
const entryRegex = /\{(\s*)id:'([^']+)',\s*name:'([^']+)',\s*emoji:'([^']*)',\s*stats:(\{[^}]*\})([^}]*?)(\s*)\}/g;

let changes = 0;
let notFound = [];

let newContent = jsContent.replace(entryRegex, (fullMatch, indent, id, name, emoji, statsStr, rest, trailIndent) => {
  // Skip none entries
  if (id.endsWith('_none') || id === 'none') {
    return fullMatch;
  }
  
  // Look up in extracted data
  let extData = tradLookup[name];
  if (!extData) {
    // Try direct match
    extData = extracted[name];
  }
  if (!extData) {
    notFound.push({ id, name });
    return fullMatch;
  }
  
  // Build new stats from extracted data (excluding 'value')
  const newStats = {};
  for (const [key, val] of Object.entries(extData)) {
    if (key === 'value') continue;
    newStats[key] = val;
  }
  
  // Parse current stats to compare
  const currentStats = {};
  const statRegex = /(\w+):([^,}]+)/g;
  let sm;
  while ((sm = statRegex.exec(statsStr)) !== null) {
    const sk = sm[1];
    let sv = sm[2].trim();
    if (sv.startsWith("'") || sv.startsWith('"')) {
      sv = sv.replace(/['"]/g, '');
    } else {
      sv = Number(sv);
    }
    currentStats[sk] = sv;
  }
  
  // Check if stats differ
  let differs = false;
  for (const [key, val] of Object.entries(newStats)) {
    if (currentStats[key] !== val) {
      differs = true;
      break;
    }
  }
  for (const key of Object.keys(currentStats)) {
    if (!(key in newStats)) {
      differs = true;
      break;
    }
  }
  
  if (!differs) {
    return fullMatch;
  }
  
  // Build new stats string
  const statEntries = Object.entries(newStats).map(([k, v]) => `${k}:${v}`);
  const newStatsStr = '{' + statEntries.join(', ') + '}';
  
  // Replace stats in the match
  const newEntry = fullMatch.replace(statsStr, newStatsStr);
  
  changes++;
  console.log(`UPDATED: ${id} "${name}"`);
  console.log(`  Old: ${JSON.stringify(currentStats)}`);
  console.log(`  New: ${JSON.stringify(newStats)}`);
  
  return newEntry;
});

console.log(`\nTotal changes: ${changes}`);
console.log(`Not found in extracted: ${notFound.length}`);
if (notFound.length > 0) {
  for (const nf of notFound) {
    console.log(`  ${nf.id}: "${nf.name}"`);
  }
}

// Write updated file
fs.writeFileSync(attachmentsPath, newContent);
console.log('\nUpdated attachments.js written successfully.');