const { readdir } = require('node:fs/promises');
const fs = require('node:fs/promises');

(async () => {
  const files = await readdir('../rules');

  const overrides = {};

  for (const file of files) {
    const { rules } = require(`../rules/${file}`);
    Object.entries(rules).forEach(([key, value]) => {
      if (value.length === 1 && value[0] === 'error') {
        return;
      }

      overrides[key] = value;
    });
  }

  const data = JSON.stringify(overrides, null, 2);
  await fs.writeFile('./overrides.json', data, 'utf-8');
})();
