const fs = require('node:fs/promises');
const { join } = require('node:path');
const extracted = require('./extracted.json');

const SEP = '\r\n';
const IND = `${SEP}    `;

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
  },${SEP}  `;

const isCustomConfig = ([, value]) => value.length !== 1 || value[0] !== 'error';
const saveFile = (fileName, fileData) => fs.writeFile(join(__dirname, fileName), fileData, 'utf-8');
const filterObject = (obj, callbackFn) => Object.fromEntries(Object.entries(obj).filter(callbackFn));

(async () => {
  const overrides = filterObject(require(`../index.js`).rules, isCustomConfig);

  const withOverrides = extracted.map((ruleName) => {
    const config = overrides[label] ? JSON.stringify(overrides[label]).split('\n').join(IND) : `['error']`;

    return `${IND}// ${comment}${IND}'${label}': ${config}`;
  });

  const data = `${baseConfig}rules: {${withOverrides.join(`,${SEP}`)}}${SEP}};${SEP}`;

  await saveFile('overrides.json', JSON.stringify(overrides, null, '  '));
  await saveFile(join('..', 'index.js'), data);
})();
