// use in dev tools on https://eslint.org/docs/latest/rules/

(() => {
  const tmp = Array.from(document.querySelectorAll('.docs-main__content > h2, .docs-main__content > article.rule'));

  const byType = tmp
    .reduce((result, node) => {
      if (node.tagName === 'H2') {
        result.push({
          label: node.textContent.trim().replace(/&/u, 'and'),
          rules: []
        });

        return result;
      }

      if (node.classList.contains('rule--deprecated') || node.classList.contains('rule--removed')) {
        return result;
      }

      result.at(-1).rules.push({
        label: node.querySelector('.rule__name').textContent.trim(),
        comment: node.querySelector('.rule__description').textContent.trim()
      });

      return result;
    }, [])
    .filter((item) => item.rules.length > 1);

  const text = JSON.stringify(byType, null, '  ');

  copy(text); // eslint-disable-line no-undef
})();
