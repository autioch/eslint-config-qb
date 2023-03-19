module.exports = {
  rules: {
    // Enforce getter and setter pairs in objects and classes,
    'accessor-pairs': ['error'],
    
    // Require braces around arrow function bodies,
    'arrow-body-style': ['error'],
    
    // Enforce the use of variables within the scope they are defined,
    'block-scoped-var': ['error'],
    
    // Enforce camelcase naming convention,
    'camelcase': ['error'],
    
    // Enforce or disallow capitalization of the first letter of a comment,
    'capitalized-comments': ['error'],
    
    // Enforce that class methods utilize `this`,
    'class-methods-use-this': ['error'],
    
    // Enforce a maximum cyclomatic complexity allowed in a program,
    'complexity': ['error'],
    
    // Require `return` statements to either always or never specify values,
    'consistent-return': ['error'],
    
    // Enforce consistent naming when capturing the current execution context,
    'consistent-this': ['error'],
    
    // Enforce consistent brace style for all control statements,
    'curly': ['error'],
    
    // Require `default` cases in `switch` statements,
    'default-case': ['error'],
    
    // Enforce default clauses in switch statements to be last,
    'default-case-last': ['error'],
    
    // Enforce default parameters to be last,
    'default-param-last': ['error'],
    
    // Enforce dot notation whenever possible,
    'dot-notation': ['error'],
    
    // Require the use of `===` and `!==`,
    'eqeqeq': ['error'],
    
    // Require function names to match the name of the variable or property to which they are assigned,
    'func-name-matching': ['error'],
    
    // Require or disallow named `function` expressions,
    'func-names': ['error'],
    
    // Enforce the consistent use of either `function` declarations or expressions,
    'func-style': ['error'],
    
    // Require grouped accessor pairs in object literals and classes,
    'grouped-accessor-pairs': ['error'],
    
    // Require `for-in` loops to include an `if` statement,
    'guard-for-in': ['error'],
    
    // Disallow specified identifiers,
    'id-denylist': ['error'],
    
    // Enforce minimum and maximum identifier lengths,
    'id-length': ['error'],
    
    // Require identifiers to match a specified regular expression,
    'id-match': ['error'],
    
    // Require or disallow initialization in variable declarations,
    'init-declarations': ['error'],
    
    // Require or disallow logical assignment logical operator shorthand,
    'logical-assignment-operators': ['error'],
    
    // Enforce a maximum number of classes per file,
    'max-classes-per-file': ['error'],
    
    // Enforce a maximum depth that blocks can be nested,
    'max-depth': ['error'],
    
    // Enforce a maximum number of lines per file,
    'max-lines': ['error'],
    
    // Enforce a maximum number of lines of code in a function,
    'max-lines-per-function': ['error'],
    
    // Enforce a maximum depth that callbacks can be nested,
    'max-nested-callbacks': ['error'],
    
    // Enforce a maximum number of parameters in function definitions,
    'max-params': ['error'],
    
    // Enforce a maximum number of statements allowed in function blocks,
    'max-statements': ['error'],
    
    // Enforce a particular style for multiline comments,
    'multiline-comment-style': ['error'],
    
    // Require constructor names to begin with a capital letter,
    'new-cap': ['error'],
    
    // Disallow the use of `alert`, `confirm`, and `prompt`,
    'no-alert': ['error'],
    
    // Disallow `Array` constructors,
    'no-array-constructor': ['error'],
    
    // Disallow bitwise operators,
    'no-bitwise': ['error'],
    
    // Disallow the use of `arguments.caller` or `arguments.callee`,
    'no-caller': ['error'],
    
    // Disallow lexical declarations in case clauses,
    'no-case-declarations': ['error'],
    
    // Disallow arrow functions where they could be confused with comparisons,
    'no-confusing-arrow': ['error'],
    
    // Disallow the use of `console`,
    'no-console': ['error'],
    
    // Disallow `continue` statements,
    'no-continue': ['error'],
    
    // Disallow deleting variables,
    'no-delete-var': ['error'],
    
    // Disallow division operators explicitly at the beginning of regular expressions,
    'no-div-regex': ['error'],
    
    // Disallow `else` blocks after `return` statements in `if` statements,
    'no-else-return': ['error'],
    
    // Disallow empty block statements,
    'no-empty': ['error'],
    
    // Disallow empty functions,
    'no-empty-function': ['error'],
    
    // Disallow empty static blocks,
    'no-empty-static-block': ['error'],
    
    // Disallow `null` comparisons without type-checking operators,
    'no-eq-null': ['error'],
    
    // Disallow the use of `eval()`,
    'no-eval': ['error'],
    
    // Disallow extending native types,
    'no-extend-native': ['error'],
    
    // Disallow unnecessary calls to `.bind()`,
    'no-extra-bind': ['error'],
    
    // Disallow unnecessary boolean casts,
    'no-extra-boolean-cast': ['error'],
    
    // Disallow unnecessary labels,
    'no-extra-label': ['error'],
    
    // Disallow unnecessary semicolons,
    'no-extra-semi': ['error'],
    
    // Disallow leading or trailing decimal points in numeric literals,
    'no-floating-decimal': ['error'],
    
    // Disallow assignments to native objects or read-only global variables,
    'no-global-assign': ['error'],
    
    // Disallow shorthand type conversions,
    'no-implicit-coercion': ['error'],
    
    // Disallow declarations in the global scope,
    'no-implicit-globals': ['error'],
    
    // Disallow the use of `eval()`-like methods,
    'no-implied-eval': ['error'],
    
    // Disallow inline comments after code,
    'no-inline-comments': ['error'],
    
    // Disallow use of `this` in contexts where the value of `this` is `undefined`,
    'no-invalid-this': ['error'],
    
    // Disallow the use of the `__iterator__` property,
    'no-iterator': ['error'],
    
    // Disallow labels that share a name with a variable,
    'no-label-var': ['error'],
    
    // Disallow labeled statements,
    'no-labels': ['error'],
    
    // Disallow unnecessary nested blocks,
    'no-lone-blocks': ['error'],
    
    // Disallow `if` statements as the only statement in `else` blocks,
    'no-lonely-if': ['error'],
    
    // Disallow function declarations that contain unsafe references inside loop statements,
    'no-loop-func': ['error'],
    
    // Disallow magic numbers,
    'no-magic-numbers': ['error'],
    
    // Disallow mixed binary operators,
    'no-mixed-operators': ['error'],
    
    // Disallow use of chained assignment expressions,
    'no-multi-assign': ['error'],
    
    // Disallow multiline strings,
    'no-multi-str': ['error'],
    
    // Disallow negated conditions,
    'no-negated-condition': ['error'],
    
    // Disallow nested ternary expressions,
    'no-nested-ternary': ['error'],
    
    // Disallow `new` operators outside of assignments or comparisons,
    'no-new': ['error'],
    
    // Disallow `new` operators with the `Function` object,
    'no-new-func': ['error'],
    
    // Disallow `Object` constructors,
    'no-new-object': ['error'],
    
    // Disallow `new` operators with the `String`, `Number`, and `Boolean` objects,
    'no-new-wrappers': ['error'],
    
    // Disallow `\8` and `\9` escape sequences in string literals,
    'no-nonoctal-decimal-escape': ['error'],
    
    // Disallow octal literals,
    'no-octal': ['error'],
    
    // Disallow octal escape sequences in string literals,
    'no-octal-escape': ['error'],
    
    // Disallow reassigning `function` parameters,
    'no-param-reassign': ['error'],
    
    // Disallow the unary operators `++` and `--`,
    'no-plusplus': ['error'],
    
    // Disallow the use of the `__proto__` property,
    'no-proto': ['error'],
    
    // Disallow variable redeclaration,
    'no-redeclare': ['error'],
    
    // Disallow multiple spaces in regular expressions,
    'no-regex-spaces': ['error'],
    
    // Disallow specified names in exports,
    'no-restricted-exports': ['error'],
    
    // Disallow specified global variables,
    'no-restricted-globals': ['error'],
    
    // Disallow specified modules when loaded by `import`,
    'no-restricted-imports': ['error'],
    
    // Disallow certain properties on certain objects,
    'no-restricted-properties': ['error'],
    
    // Disallow specified syntax,
    'no-restricted-syntax': ['error'],
    
    // Disallow assignment operators in `return` statements,
    'no-return-assign': ['error'],
    
    // Disallow unnecessary `return await`,
    'no-return-await': ['error'],
    
    // Disallow `javascript:` urls,
    'no-script-url': ['error'],
    
    // Disallow comma operators,
    'no-sequences': ['error'],
    
    // Disallow variable declarations from shadowing variables declared in the outer scope,
    'no-shadow': ['error'],
    
    // Disallow identifiers from shadowing restricted names,
    'no-shadow-restricted-names': ['error'],
    
    // Disallow ternary operators,
    'no-ternary': ['error'],
    
    // Disallow throwing literals as exceptions,
    'no-throw-literal': ['error'],
    
    // Disallow initializing variables to `undefined`,
    'no-undef-init': ['error'],
    
    // Disallow the use of `undefined` as an identifier,
    'no-undefined': ['error'],
    
    // Disallow dangling underscores in identifiers,
    'no-underscore-dangle': ['error'],
    
    // Disallow ternary operators when simpler alternatives exist,
    'no-unneeded-ternary': ['error'],
    
    // Disallow unused expressions,
    'no-unused-expressions': ['error'],
    
    // Disallow unused labels,
    'no-unused-labels': ['error'],
    
    // Disallow unnecessary calls to `.call()` and `.apply()`,
    'no-useless-call': ['error'],
    
    // Disallow unnecessary `catch` clauses,
    'no-useless-catch': ['error'],
    
    // Disallow unnecessary computed property keys in objects and classes,
    'no-useless-computed-key': ['error'],
    
    // Disallow unnecessary concatenation of literals or template literals,
    'no-useless-concat': ['error'],
    
    // Disallow unnecessary constructors,
    'no-useless-constructor': ['error'],
    
    // Disallow unnecessary escape characters,
    'no-useless-escape': ['error'],
    
    // Disallow renaming import, export, and destructured assignments to the same name,
    'no-useless-rename': ['error'],
    
    // Disallow redundant return statements,
    'no-useless-return': ['error'],
    
    // Require `let` or `const` instead of `var`,
    'no-var': ['error'],
    
    // Disallow `void` operators,
    'no-void': ['error'],
    
    // Disallow specified warning terms in comments,
    'no-warning-comments': ['error'],
    
    // Disallow `with` statements,
    'no-with': ['error'],
    
    // Require or disallow method and property shorthand syntax for object literals,
    'object-shorthand': ['error'],
    
    // Enforce variables to be declared either together or separately in functions,
    'one-var': ['error'],
    
    // Require or disallow newlines around variable declarations,
    'one-var-declaration-per-line': ['error'],
    
    // Require or disallow assignment operator shorthand where possible,
    'operator-assignment': ['error'],
    
    // Require using arrow functions for callbacks,
    'prefer-arrow-callback': ['error'],
    
    // Require `const` declarations for variables that are never reassigned after declared,
    'prefer-const': ['error'],
    
    // Require destructuring from arrays and/or objects,
    'prefer-destructuring': ['error'],
    
    // Disallow the use of `Math.pow` in favor of the `**` operator,
    'prefer-exponentiation-operator': ['error'],
    
    // Enforce using named capture group in regular expression,
    'prefer-named-capture-group': ['error'],
    
    // Disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals,
    'prefer-numeric-literals': ['error'],
    
    // Disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn()`,
    'prefer-object-has-own': ['error'],
    
    // Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead,
    'prefer-object-spread': ['error'],
    
    // Require using Error objects as Promise rejection reasons,
    'prefer-promise-reject-errors': ['error'],
    
    // Disallow use of the `RegExp` constructor in favor of regular expression literals,
    'prefer-regex-literals': ['error'],
    
    // Require rest parameters instead of `arguments`,
    'prefer-rest-params': ['error'],
    
    // Require spread operators instead of `.apply()`,
    'prefer-spread': ['error'],
    
    // Require template literals instead of string concatenation,
    'prefer-template': ['error'],
    
    // Require quotes around object literal property names,
    'quote-props': ['error'],
    
    // Enforce the consistent use of the radix argument when using `parseInt()`,
    'radix': ['error'],
    
    // Disallow async functions which have no `await` expression,
    'require-await': ['error'],
    
    // Enforce the use of `u` flag on RegExp,
    'require-unicode-regexp': ['error'],
    
    // Require generator functions to contain `yield`,
    'require-yield': ['error'],
    
    // Enforce sorted import declarations within modules,
    'sort-imports': ['error'],
    
    // Require object keys to be sorted,
    'sort-keys': ['error'],
    
    // Require variables within the same declaration block to be sorted,
    'sort-vars': ['error'],
    
    // Enforce consistent spacing after the `//` or `/*` in a comment,
    'spaced-comment': ['error'],
    
    // Require or disallow strict mode directives,
    'strict': ['error'],
    
    // Require symbol descriptions,
    'symbol-description': ['error'],
    
    // Require `var` declarations be placed at the top of their containing scope,
    'vars-on-top': ['error'],
    
    // Require or disallow "Yoda" conditions,
    'yoda': ['error']}
};
