const rules = require('./extracted.json');
const fs = require('node:fs/promises');
const overrides = require('./overrides.json');

const INDENT = '\n    ';

(async () => {
    for (const group of rules) {


        const list = group.rules.map(({ name, comment }) => {
            const config = JSON.stringify(overrides[name], null, 2) || `['error']`;
            return [
                '',
                `// ${comment}`,
                `'${name}': ${config.split('\n').join(INDENT)}`
            ].join(INDENT);
        }).join(`,${INDENT}`);

        const data = `module.exports = {\n  rules: {${list}}\n};\n`;

        await fs.writeFile('../src2/' + group.name + '.js', data, 'utf-8');
    }
})();
