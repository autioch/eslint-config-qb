module.exports = Object.assign({}, ...[
  require('./best-practices'),
  require('./common-js'),
  require('./es6'),
  require('./possible-errors'),
  require('./strict-mode'),
  require('./stylistic-issues'),
  require('./variables')
].map(({ rules }) => rules));
