const fs = require('node:fs/promises');
const { join } = require('node:path');
const extracted = require('./extracted.json');

const SEP = '\r\n';
const INDENT = `${SEP}    `;

const customOverrides = {
  'function-call-argument-newline': [
    'error',
    'consistent'
  ],
  'array-element-newline': [
    'error',
    'consistent'
  ]
};

const baseConfig = `/* eslint-disable max-lines, max-len, no-magic-numbers */${SEP}module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  env: {
    es6: true,
    'shared-node-browser': true,
    browser: true,
    node: true
  },${SEP}`;

const isCustomConfig = ([value]) => value.length !== 1 || value[0] !== 'error';
const saveFile = (fileName, fileData) => fs.writeFile(join(__dirname, '..', fileName), fileData, 'utf-8');
const filterObject = (obj, callbackFn) => Object.fromEntries(Object.entries(obj).filter(callbackFn));

(async () => {
  const existingOverrides = filterObject(require(`../index.js`).rules, isCustomConfig);

  await saveFile('overrides.json', JSON.stringify(existingOverrides, null, '  '));

  const overrides = {
    ...existingOverrides,
    ...customOverrides
  };

  const usedOverrides = new Set();

  const allRules = extracted.flatMap((group) => group.rules.map(({ label, comment }) => {
    const config = overrides[label] ? JSON.stringify(overrides[label], null, '  ') : `['error']`;

    if (overrides[label]) {
      usedOverrides.add(label);
    }

    return `${INDENT}// ${comment}${INDENT}'${label}': ${config.split('\n').join(INDENT)}`;
  })).join(`,${SEP}`);

  const data = `${baseConfig}rules: {${allRules}}${SEP}};${SEP}`;

  await saveFile('index.js', data);

  const unusedOverrides = new Set(Object.keys(overrides).filter((label) => !usedOverrides.has(label)));

  if (unusedOverrides.size) {
    console.warn('Unused overrides saved in a separte file.');

    const filtered = filterObject(overrides, ([key]) => unusedOverrides.has(key));

    await saveFile('overrides.unused.json', JSON.stringify(filtered, null, '  '));
  }
})();
