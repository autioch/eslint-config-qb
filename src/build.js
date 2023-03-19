const rules = require('./extracted.json');
const fs = require('node:fs/promises');
const savedOverrides = require('./overrides.json');

const INDENT = '\r\n    ';

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

const overrides = {
  ...savedOverrides,
  ...customOverrides
};

(async () => {
  const usedOverrides = new Set();

  const allRules = rules.flatMap((group) => group.rules.map(({ name, comment }) => {
    const config = overrides[name] ? JSON.stringify(overrides[name], null, 2) : `['error']`;
    if (overrides[name]) {
      usedOverrides.add(name);
    }
    return `${INDENT}// ${comment}${INDENT}'${name}': ${config.split('\n').join(INDENT)}`;
  })).join(`,\r\n`);

  const data = `/* eslint-disable max-lines, max-len, no-magic-numbers */\r\nmodule.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  env: {
    es6: true,
    'shared-node-browser': true,
    browser: true,
    node: true
  },
  rules: {${allRules}}\n};\n`;

  await fs.writeFile(
    '../index.js',
    data,
    'utf-8'
  );

  const unusedOverrides = new Set(Object.keys(overrides).filter((name) => !usedOverrides.has(name)));

  if (unusedOverrides.size) {
    console.warn('Unused overrides saved in a separte file.');

    const filtered = Object.fromEntries(Object.entries(overrides).filter(([key]) => unusedOverrides.has(key)));
    const data2 = JSON.stringify(filtered, null, 2);

    await fs.writeFile(
      './overrides.unused.json',
      data2,
      'utf-8'
    );
  }
})();
