// use in dev tools on https://eslint.org/docs/latest/rules/

(() => {
  const rules = Array
    .from(document.querySelectorAll('article.rule:not(.rule--deprecated):not(.rule--removed) .rule__name'))
    .map((node) => node.textContent.trim());

  copy(JSON.stringify(rules, null, '  ')); // eslint-disable-line no-undef
})();
