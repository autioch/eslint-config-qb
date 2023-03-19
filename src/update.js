const fs = require('node:fs/promises');
const { join } = require('node:path');
const newRuleNameList = require('./extracted.json');
const oldConfig = require('../index.json');

const saveFile = (fileName, fileData) => fs.writeFile(join(__dirname, '..', fileName), fileData, 'utf-8');

const plugins = {
  'simple-import-sort/imports': [
    'warn',
    {
      groups: [
        ['^[^.]'],
        ['^\\.'],
        ['^']
      ]
    }
  ],
  'simple-import-sort/exports': ['off']
};

(async () => {
  const { rules: oldRuleDict } = oldConfig;
  const allRules = [...newRuleNameList, ...Object.keys(plugins)];
  const newRuleList = allRules.map((ruleName) => [ruleName, oldRuleDict[ruleName] || plugins[ruleName] || ['error']]);

  // Provide some info on what changed
  const currentSet = new Set(allRules);
  const removed = Object.keys(oldRuleDict).filter((rule) => !currentSet.has(rule));
  const added = allRules.filter((rule) => !oldRuleDict[rule]);

  if (removed.length) {
    console.warn('Old rules have been removed: ', ...removed);

    const withSettings = Object.fromEntries(removed.map((ruleName) => [ruleName, oldRuleDict[ruleName]]));

    await saveFile('removed.json', JSON.stringify(withSettings, null, '  '));
  }

  if (added.length) {
    console.warn('New rules have been added with default config: ', ...added);

    await saveFile('added.json', JSON.stringify(added, null, '  '));
  }

  // save new config
  const newConfig = {
    ...oldConfig,
    rules: Object.fromEntries(newRuleList)
  };

  await saveFile('index.json', JSON.stringify(newConfig, null, '  '));
})();
