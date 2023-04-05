# eslint-config-qb

Custom configuration for eslint.

## Usage
1. Install `npm i -D eslint-config-qb`
2. Use in eslint config:
- create `.eslintrc.js` with contents `module.exports = { 'extends': ['qb'] };`
- add in eslint config `extends: ['qb']`.
3. Add script `"lint": "eslint . --fix --ext .js"`.

## Target
- ES6,
- Nodejs,
- browser.

## Objectives
- as strict as possible,
- simple and easy to understand code,
- no tricks,
- no hacks.

## Updating
1. Rules defined at https://eslint.org/docs/latest/rules/
2. Use script `src/extract.js` in Chrome dev tools and copy results to `./src/extracted.json`.
3. Run `npm run update` to update the `index.json` file.

## TODO
- overrides for test files and other

## Ideas
- https://github.com/SonarSource/eslint-plugin-sonarjs
- https://github.com/mysticatea/eslint-plugin-node
- https://github.com/eslint-community/eslint-plugin-promise
- https://github.com/dustinspecker/awesome-eslint
