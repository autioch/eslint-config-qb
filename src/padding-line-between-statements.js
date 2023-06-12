/*
 * Example file showing how this rule behaves.
 * And some other as well.
 */
// https://eslint.org/docs/latest/rules/padding-line-between-statements

/*
 * Option blankLine can be:
 * - any
 * - never
 * - always
 */
/*
 * Option prev/next can be:
 *
 */

'use strict';

export function example(config) {
  const { option1 = false, option2 = 10, option3: renamedOption } = config;
  const mix = option1 ? option2 : renamedOption;
  let sum = 0;

  // that's inline comment
  const max = typeof mix === 'function' ? mix() : mix;

  function inner() {
    return 'a';
  }

  // that's inline comment
  inner();
  inner();
  for (let i = 0; i < max; i++) {
    sum += i;
  }

  return sum;
}

