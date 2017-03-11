module.exports = {
  'extends': [
    './src/enviroment',
    './src/best-practices',
    './src/common-js',
    './src/es6',
    './src/possible-errors',
    './src/strict-mode',
    './src/stylistic-issues',
    './src/variables'
  ].map(require.resolve)
};
