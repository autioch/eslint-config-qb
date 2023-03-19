const rules = require('./extracted.json');
const fs = require('node:fs/promises');

(async () => {
    for (const group of rules) {

        const list = group.rules.map(({ name, comment }) => {
            return [
                '',
                `// ${comment},`,
                `'${name}': ['error']`
            ].join('\n    ');
        }).join(',\n    ');

        const data = `module.exports = {\n  rules: {${list}}\n};\n`;

        await fs.writeFile('../src2/' + group.name + '.js', data, 'utf-8');
    }
})();
