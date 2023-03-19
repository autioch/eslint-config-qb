/* eslint-disable max-lines, max-len, no-magic-numbers */
module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  env: {
    es6: true,
    'shared-node-browser': true,
    browser: true,
    node: true
  },
  rules: {
    // Enforce return statements in callbacks of array methods
    'array-callback-return': ['error'],

    // Require `super()` calls in constructors
    'constructor-super': ['error'],

    // Enforce "for" loop update clause moving the counter in the right direction
    'for-direction': ['error'],

    // Enforce `return` statements in getters
    'getter-return': ['error'],

    // Disallow using an async function as a Promise executor
    'no-async-promise-executor': ['error'],

    // Disallow `await` inside of loops
    'no-await-in-loop': ['error'],

    // Disallow reassigning class members
    'no-class-assign': ['error'],

    // Disallow comparing against -0
    'no-compare-neg-zero': ['error'],

    // Disallow assignment operators in conditional expressions
    'no-cond-assign': [
      'error',
      'except-parens'
    ],

    // Disallow reassigning `const` variables
    'no-const-assign': ['error'],

    // Disallow expressions where the operation doesn't affect the value
    'no-constant-binary-expression': ['error'],

    // Disallow constant expressions in conditions
    'no-constant-condition': [
      'error',
      {
        checkLoops: true
      }
    ],

    // Disallow returning value from constructor
    'no-constructor-return': ['error'],

    // Disallow control characters in regular expressions
    'no-control-regex': ['error'],

    // Disallow the use of `debugger`
    'no-debugger': ['error'],

    // Disallow duplicate arguments in `function` definitions
    'no-dupe-args': ['error'],

    // Disallow duplicate class members
    'no-dupe-class-members': ['error'],

    // Disallow duplicate conditions in if-else-if chains
    'no-dupe-else-if': ['error'],

    // Disallow duplicate keys in object literals
    'no-dupe-keys': ['error'],

    // Disallow duplicate case labels
    'no-duplicate-case': ['error'],

    // Disallow duplicate module imports
    'no-duplicate-imports': [
      'error',
      {
        includeExports: false
      }
    ],

    // Disallow empty character classes in regular expressions
    'no-empty-character-class': ['error'],

    // Disallow empty destructuring patterns
    'no-empty-pattern': ['error'],

    // Disallow reassigning exceptions in `catch` clauses
    'no-ex-assign': ['error'],

    // Disallow fallthrough of `case` statements
    'no-fallthrough': ['error'],

    // Disallow reassigning `function` declarations
    'no-func-assign': ['error'],

    // Disallow assigning to imported bindings
    'no-import-assign': ['error'],

    // Disallow variable or `function` declarations in nested blocks
    'no-inner-declarations': [
      'error',
      'both'
    ],

    // Disallow invalid regular expression strings in `RegExp` constructors
    'no-invalid-regexp': [
      'error',
      {
        allowConstructorFlags: []
      }
    ],

    // Disallow irregular whitespace
    'no-irregular-whitespace': [
      'error',
      {
        skipComments: false,
        skipRegExps: false,
        skipStrings: false,
        skipTemplates: false
      }
    ],

    // Disallow literal numbers that lose precision
    'no-loss-of-precision': ['error'],

    // Disallow characters which are made with multiple code points in character class syntax
    'no-misleading-character-class': ['error'],

    // Disallow `new` operators with global non-constructor functions
    'no-new-native-nonconstructor': ['error'],

    // Disallow `new` operators with the `Symbol` object
    'no-new-symbol': ['error'],

    // Disallow calling global object properties as functions
    'no-obj-calls': ['error'],

    // Disallow returning values from Promise executor functions
    'no-promise-executor-return': ['error'],

    // Disallow calling some `Object.prototype` methods directly on objects
    'no-prototype-builtins': ['off'],

    // Disallow assignments where both sides are exactly the same
    'no-self-assign': [
      'error',
      {
        props: true
      }
    ],

    // Disallow comparisons where both sides are exactly the same
    'no-self-compare': ['error'],

    // Disallow returning values from setters
    'no-setter-return': ['error'],

    // Disallow sparse arrays
    'no-sparse-arrays': ['error'],

    // Disallow template literal placeholder syntax in regular strings
    'no-template-curly-in-string': ['error'],

    // Disallow `this`/`super` before calling `super()` in constructors
    'no-this-before-super': ['error'],

    // Disallow the use of undeclared variables unless mentioned in `/*global */` comments
    'no-undef': [
      'error',
      {
        'typeof': true
      }
    ],

    // Disallow confusing multiline expressions
    'no-unexpected-multiline': ['error'],

    // Disallow unmodified loop conditions
    'no-unmodified-loop-condition': ['error'],

    // Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements
    'no-unreachable': ['error'],

    // Disallow loops with a body that allows only one iteration
    'no-unreachable-loop': ['error'],

    // Disallow control flow statements in `finally` blocks
    'no-unsafe-finally': ['error'],

    // Disallow negating the left operand of relational operators
    'no-unsafe-negation': ['error'],

    // Disallow use of optional chaining in contexts where the `undefined` value is not allowed
    'no-unsafe-optional-chaining': ['error'],

    // Disallow unused private class members
    'no-unused-private-class-members': ['error'],

    // Disallow unused variables
    'no-unused-vars': [
      'error',
      {
        args: 'all',
        caughtErrors: 'all',
        ignoreRestSiblings: false,
        vars: 'all'
      }
    ],

    // Disallow the use of variables before they are defined
    'no-use-before-define': [
      'error',
      {
        classes: true,
        functions: true,
        variables: true
      }
    ],

    // Disallow useless backreferences in regular expressions
    'no-useless-backreference': ['error'],

    // Disallow assignments that can lead to race conditions due to usage of `await` or `yield`
    'require-atomic-updates': ['error'],

    // Require calls to `isNaN()` when checking for `NaN`
    'use-isnan': ['error'],

    // Enforce comparing `typeof` expressions against valid strings
    'valid-typeof': [
      'error',
      {
        requireStringLiterals: false
      }
    ],

    // Enforce getter and setter pairs in objects and classes
    'accessor-pairs': [
      'error',
      {
        getWithoutSet: false,
        setWithoutGet: true
      }
    ],

    // Require braces around arrow function bodies
    'arrow-body-style': [
      'error',
      'as-needed',
      {
        requireReturnForObjectLiteral: false
      }
    ],

    // Enforce the use of variables within the scope they are defined
    'block-scoped-var': ['error'],

    // Enforce camelcase naming convention
    camelcase: [
      'error',
      {
        properties: 'always'
      }
    ],

    // Enforce or disallow capitalization of the first letter of a comment
    'capitalized-comments': [
      'off',
      'always',
      {
        ignoreConsecutiveComments: false,
        ignoreInlineComments: false
      }
    ],

    // Enforce that class methods utilize `this`
    'class-methods-use-this': [
      'error',
      {
        exceptMethods: []
      }
    ],

    // Enforce a maximum cyclomatic complexity allowed in a program
    complexity: [
      'error',
      {
        max: 20
      }
    ],

    // Require `return` statements to either always or never specify values
    'consistent-return': [
      'error',
      {
        treatUndefinedAsUnspecified: true
      }
    ],

    // Enforce consistent naming when capturing the current execution context
    'consistent-this': [
      'error',
      'that'
    ],

    // Enforce consistent brace style for all control statements
    curly: [
      'error',
      'all'
    ],

    // Require `default` cases in `switch` statements
    'default-case': ['error'],

    // Enforce default clauses in switch statements to be last
    'default-case-last': ['error'],

    // Enforce default parameters to be last
    'default-param-last': ['error'],

    // Enforce dot notation whenever possible
    'dot-notation': [
      'error',
      {
        allowKeywords: true
      }
    ],

    // Require the use of `===` and `!==`
    eqeqeq: ['warn'],

    // Require function names to match the name of the variable or property to which they are assigned
    'func-name-matching': ['error'],

    // Require or disallow named `function` expressions
    'func-names': [
      'error',
      'always'
    ],

    // Enforce the consistent use of either `function` declarations or expressions
    'func-style': [
      'error',
      'declaration',
      {
        allowArrowFunctions: true
      }
    ],

    // Require grouped accessor pairs in object literals and classes
    'grouped-accessor-pairs': ['error'],

    // Require `for-in` loops to include an `if` statement
    'guard-for-in': ['warn'],

    // Disallow specified identifiers
    'id-denylist': ['error'],

    // Enforce minimum and maximum identifier lengths
    'id-length': [
      'error',
      {
        exceptions: [],
        max: 30,
        min: 2,
        properties: 'always'
      }
    ],

    // Require identifiers to match a specified regular expression
    'id-match': ['off'],

    // Require or disallow initialization in variable declarations
    'init-declarations': ['off'],

    // Require or disallow logical assignment logical operator shorthand
    'logical-assignment-operators': ['error'],

    // Enforce a maximum number of classes per file
    'max-classes-per-file': ['error'],

    // Enforce a maximum depth that blocks can be nested
    'max-depth': [
      'error',
      {
        max: 4
      }
    ],

    // Enforce a maximum number of lines per file
    'max-lines': [
      'error',
      {
        max: 300,
        skipBlankLines: true,
        skipComments: true
      }
    ],

    // Enforce a maximum number of lines of code in a function
    'max-lines-per-function': ['error'],

    // Enforce a maximum depth that callbacks can be nested
    'max-nested-callbacks': [
      'error',
      {
        max: 3
      }
    ],

    // Enforce a maximum number of parameters in function definitions
    'max-params': [
      'error',
      {
        max: 4
      }
    ],

    // Enforce a maximum number of statements allowed in function blocks
    'max-statements': [
      'error',
      {
        max: 20
      },
      {
        ignoreTopLevelFunctions: false
      }
    ],

    // Enforce a particular style for multiline comments
    'multiline-comment-style': ['error'],

    // Require constructor names to begin with a capital letter
    'new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: true,
        newIsCapExceptions: [],
        capIsNewExceptions: [],
        properties: true
      }
    ],

    // Disallow the use of `alert`, `confirm`, and `prompt`
    'no-alert': ['error'],

    // Disallow `Array` constructors
    'no-array-constructor': ['error'],

    // Disallow bitwise operators
    'no-bitwise': [
      'error',
      {
        allow: [],
        int32Hint: false
      }
    ],

    // Disallow the use of `arguments.caller` or `arguments.callee`
    'no-caller': ['error'],

    // Disallow lexical declarations in case clauses
    'no-case-declarations': ['error'],

    // Disallow arrow functions where they could be confused with comparisons
    'no-confusing-arrow': [
      'error',
      {
        allowParens: false
      }
    ],

    // Disallow the use of `console`
    'no-console': [
      'error',
      {
        allow: ['warn']
      }
    ],

    // Disallow `continue` statements
    'no-continue': ['off'],

    // Disallow deleting variables
    'no-delete-var': ['error'],

    // Disallow division operators explicitly at the beginning of regular expressions
    'no-div-regex': ['warn'],

    // Disallow `else` blocks after `return` statements in `if` statements
    'no-else-return': ['error'],

    // Disallow empty block statements
    'no-empty': [
      'error',
      {
        allowEmptyCatch: true
      }
    ],

    // Disallow empty functions
    'no-empty-function': ['warn'],

    // Disallow empty static blocks
    'no-empty-static-block': ['error'],

    // Disallow `null` comparisons without type-checking operators
    'no-eq-null': ['error'],

    // Disallow the use of `eval()`
    'no-eval': ['error'],

    // Disallow extending native types
    'no-extend-native': [
      'error',
      {
        exceptions: []
      }
    ],

    // Disallow unnecessary calls to `.bind()`
    'no-extra-bind': ['error'],

    // Disallow unnecessary boolean casts
    'no-extra-boolean-cast': ['error'],

    // Disallow unnecessary labels
    'no-extra-label': ['error'],

    // Disallow unnecessary semicolons
    'no-extra-semi': ['error'],

    // Disallow leading or trailing decimal points in numeric literals
    'no-floating-decimal': ['error'],

    // Disallow assignments to native objects or read-only global variables
    'no-global-assign': [
      'error',
      {
        exceptions: []
      }
    ],

    // Disallow shorthand type conversions
    'no-implicit-coercion': [
      'error',
      {
        allow: ['!!'],
        'boolean': true,
        number: true,
        string: true
      }
    ],

    // Disallow declarations in the global scope
    'no-implicit-globals': ['error'],

    // Disallow the use of `eval()`-like methods
    'no-implied-eval': ['error'],

    // Disallow inline comments after code
    'no-inline-comments': ['error'],

    // Disallow use of `this` in contexts where the value of `this` is `undefined`
    'no-invalid-this': ['error'],

    // Disallow the use of the `__iterator__` property
    'no-iterator': ['error'],

    // Disallow labels that share a name with a variable
    'no-label-var': ['error'],

    // Disallow labeled statements
    'no-labels': [
      'error',
      {
        allowLoop: false,
        allowSwitch: false
      }
    ],

    // Disallow unnecessary nested blocks
    'no-lone-blocks': ['error'],

    // Disallow `if` statements as the only statement in `else` blocks
    'no-lonely-if': ['error'],

    // Disallow function declarations that contain unsafe references inside loop statements
    'no-loop-func': ['error'],

    // Disallow magic numbers
    'no-magic-numbers': [
      'error',
      {
        detectObjects: true,
        enforceConst: true,
        ignore: [
          -1,
          0,
          1,
          10
        ],
        ignoreArrayIndexes: false
      }
    ],

    // Disallow mixed binary operators
    'no-mixed-operators': [
      'error',
      {
        allowSamePrecedence: true,
        groups: []
      }
    ],

    // Disallow use of chained assignment expressions
    'no-multi-assign': ['error'],

    // Disallow multiline strings
    'no-multi-str': ['error'],

    // Disallow negated conditions
    'no-negated-condition': ['error'],

    // Disallow nested ternary expressions
    'no-nested-ternary': ['error'],

    // Disallow `new` operators outside of assignments or comparisons
    'no-new': ['error'],

    // Disallow `new` operators with the `Function` object
    'no-new-func': ['error'],

    // Disallow `Object` constructors
    'no-new-object': ['error'],

    // Disallow `new` operators with the `String`, `Number`, and `Boolean` objects
    'no-new-wrappers': ['error'],

    // Disallow `\8` and `\9` escape sequences in string literals
    'no-nonoctal-decimal-escape': ['error'],

    // Disallow octal literals
    'no-octal': ['error'],

    // Disallow octal escape sequences in string literals
    'no-octal-escape': ['error'],

    // Disallow reassigning `function` parameters
    'no-param-reassign': [
      'error',
      {
        props: false
      }
    ],

    // Disallow the unary operators `++` and `--`
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true
      }
    ],

    // Disallow the use of the `__proto__` property
    'no-proto': ['error'],

    // Disallow variable redeclaration
    'no-redeclare': [
      'error',
      {
        builtinGlobals: true
      }
    ],

    // Disallow multiple spaces in regular expressions
    'no-regex-spaces': ['error'],

    // Disallow specified names in exports
    'no-restricted-exports': ['error'],

    // Disallow specified global variables
    'no-restricted-globals': ['error'],

    // Disallow specified modules when loaded by `import`
    'no-restricted-imports': [
      'error',
      {
        paths: [
          'underscore',
          'ramda'
        ]
      }
    ],

    // Disallow certain properties on certain objects
    'no-restricted-properties': ['off'],

    // Disallow specified syntax
    'no-restricted-syntax': ['error'],

    // Disallow assignment operators in `return` statements
    'no-return-assign': [
      'error',
      'always'
    ],

    // Disallow unnecessary `return await`
    'no-return-await': ['error'],

    // Disallow `javascript:` urls
    'no-script-url': ['error'],

    // Disallow comma operators
    'no-sequences': ['error'],

    // Disallow variable declarations from shadowing variables declared in the outer scope
    'no-shadow': [
      'error',
      {
        allow: [],
        builtinGlobals: true,
        hoist: 'all'
      }
    ],

    // Disallow identifiers from shadowing restricted names
    'no-shadow-restricted-names': ['error'],

    // Disallow ternary operators
    'no-ternary': ['off'],

    // Disallow throwing literals as exceptions
    'no-throw-literal': ['error'],

    // Disallow initializing variables to `undefined`
    'no-undef-init': ['error'],

    // Disallow the use of `undefined` as an identifier
    'no-undefined': ['error'],

    // Disallow dangling underscores in identifiers
    'no-underscore-dangle': [
      'error',
      {
        allow: [],
        allowAfterSuper: false,
        allowAfterThis: false
      }
    ],

    // Disallow ternary operators when simpler alternatives exist
    'no-unneeded-ternary': [
      'error',
      {
        defaultAssignment: true
      }
    ],

    // Disallow unused expressions
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: false,
        allowTernary: false
      }
    ],

    // Disallow unused labels
    'no-unused-labels': ['error'],

    // Disallow unnecessary calls to `.call()` and `.apply()`
    'no-useless-call': ['error'],

    // Disallow unnecessary `catch` clauses
    'no-useless-catch': ['error'],

    // Disallow unnecessary computed property keys in objects and classes
    'no-useless-computed-key': ['error'],

    // Disallow unnecessary concatenation of literals or template literals
    'no-useless-concat': ['error'],

    // Disallow unnecessary constructors
    'no-useless-constructor': ['error'],

    // Disallow unnecessary escape characters
    'no-useless-escape': ['error'],

    // Disallow renaming import, export, and destructured assignments to the same name
    'no-useless-rename': [
      'error',
      {
        ignoreDestructuring: false,
        ignoreExport: false,
        ignoreImport: false
      }
    ],

    // Disallow redundant return statements
    'no-useless-return': ['error'],

    // Require `let` or `const` instead of `var`
    'no-var': ['error'],

    // Disallow `void` operators
    'no-void': ['error'],

    // Disallow specified warning terms in comments
    'no-warning-comments': [
      'error',
      {
        location: 'start',
        terms: [
          'fixme',
          'xxx'
        ]
      }
    ],

    // Disallow `with` statements
    'no-with': ['error'],

    // Require or disallow method and property shorthand syntax for object literals
    'object-shorthand': [
      'error',
      'always',
      {
        avoidExplicitReturnArrows: true,
        avoidQuotes: false,
        ignoreConstructors: false
      }
    ],

    // Enforce variables to be declared either together or separately in functions
    'one-var': [
      'error',
      {
        initialized: 'never',
        uninitialized: 'never'
      }
    ],

    // Require or disallow newlines around variable declarations
    'one-var-declaration-per-line': [
      'error',
      'always'
    ],

    // Require or disallow assignment operator shorthand where possible
    'operator-assignment': [
      'off',
      'never'
    ],

    // Require using arrow functions for callbacks
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: true
      }
    ],

    // Require `const` declarations for variables that are never reassigned after declared
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false
      }
    ],

    // Require destructuring from arrays and/or objects
    'prefer-destructuring': [
      'error',
      {
        array: true,
        object: true
      },
      {
        enforceForRenamedProperties: false
      }
    ],

    // Disallow the use of `Math.pow` in favor of the `**` operator
    'prefer-exponentiation-operator': ['error'],

    // Enforce using named capture group in regular expression
    'prefer-named-capture-group': ['error'],

    // Disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals
    'prefer-numeric-literals': ['off'],

    // Disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn()`
    'prefer-object-has-own': ['error'],

    // Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead
    'prefer-object-spread': ['error'],

    // Require using Error objects as Promise rejection reasons
    'prefer-promise-reject-errors': [
      'error',
      {
        allowEmptyReject: false
      }
    ],

    // Disallow use of the `RegExp` constructor in favor of regular expression literals
    'prefer-regex-literals': ['error'],

    // Require rest parameters instead of `arguments`
    'prefer-rest-params': ['error'],

    // Require spread operators instead of `.apply()`
    'prefer-spread': ['error'],

    // Require template literals instead of string concatenation
    'prefer-template': ['error'],

    // Require quotes around object literal property names
    'quote-props': [
      'error',
      'as-needed',
      {
        keywords: true,
        unnecessary: true,
        numbers: true
      }
    ],

    // Enforce the consistent use of the radix argument when using `parseInt()`
    radix: [
      'error',
      'always'
    ],

    // Disallow async functions which have no `await` expression
    'require-await': ['error'],

    // Enforce the use of `u` flag on RegExp
    'require-unicode-regexp': ['error'],

    // Require generator functions to contain `yield`
    'require-yield': ['error'],

    // Enforce sorted import declarations within modules
    'sort-imports': ['off'],

    // Require object keys to be sorted
    'sort-keys': ['off'],

    // Require variables within the same declaration block to be sorted
    'sort-vars': [
      'error',
      {
        ignoreCase: true
      }
    ],

    // Enforce consistent spacing after the `//` or `/*` in a comment
    'spaced-comment': [
      'error',
      'always',
      {
        exceptions: [],
        markers: []
      }
    ],

    // Require or disallow strict mode directives
    strict: ['off'],

    // Require symbol descriptions
    'symbol-description': ['error'],

    // Require `var` declarations be placed at the top of their containing scope
    'vars-on-top': ['error'],

    // Require or disallow "Yoda" conditions
    yoda: ['error'],

    // Enforce linebreaks after opening and before closing array brackets
    'array-bracket-newline': ['error'],

    // Enforce consistent spacing inside array brackets
    'array-bracket-spacing': [
      'error',
      'never',
      {
        arraysInArrays: true,
        objectsInArrays: false,
        singleValue: false
      }
    ],

    // Enforce line breaks after each array element
    'array-element-newline': [
      'error',
      'consistent'
    ],

    // Require parentheses around arrow function arguments
    'arrow-parens': [
      'error',
      'always',
      {
        requireForBlockBody: true
      }
    ],

    // Enforce consistent spacing before and after the arrow in arrow functions
    'arrow-spacing': [
      'error',
      {
        after: true,
        before: true
      }
    ],

    // Disallow or enforce spaces inside of blocks after opening block and before closing block
    'block-spacing': ['error'],

    // Enforce consistent brace style for blocks
    'brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: false
      }
    ],

    // Require or disallow trailing commas
    'comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'never'
      }
    ],

    // Enforce consistent spacing before and after commas
    'comma-spacing': [
      'error',
      {
        after: true,
        before: false
      }
    ],

    // Enforce consistent comma style
    'comma-style': [
      'error',
      'last',
      {
        exceptions: {}
      }
    ],

    // Enforce consistent spacing inside computed property brackets
    'computed-property-spacing': [
      'error',
      'never'
    ],

    // Enforce consistent newlines before and after dots
    'dot-location': [
      'error',
      'property'
    ],

    // Require or disallow newline at the end of files
    'eol-last': [
      'error',
      'always'
    ],

    // Require or disallow spacing between function identifiers and their invocations
    'func-call-spacing': [
      'error',
      'never'
    ],

    // Enforce line breaks between arguments of a function call
    'function-call-argument-newline': [
      'error',
      'consistent'
    ],

    // Enforce consistent line breaks inside function parentheses
    'function-paren-newline': ['error'],

    // Enforce consistent spacing around `*` operators in generator functions
    'generator-star-spacing': [
      'error',
      {
        after: true,
        before: true
      }
    ],

    // Enforce the location of arrow function bodies
    'implicit-arrow-linebreak': ['error'],

    // Enforce consistent indentation
    indent: [
      'error',
      2,
      {
        ArrayExpression: 1,
        CallExpression: {
          arguments: 'first'
        },
        FunctionDeclaration: {
          body: 1,
          parameters: 'first'
        },
        FunctionExpression: {
          body: 1,
          parameters: 'first'
        },
        MemberExpression: 1,
        ObjectExpression: 1,
        SwitchCase: 1,
        VariableDeclarator: {
          'const': 3,
          let: 2,
          'var': 2
        },
        outerIIFEBody: 1
      }
    ],

    // Enforce the consistent use of either double or single quotes in JSX attributes
    'jsx-quotes': [
      'error',
      'prefer-double'
    ],

    // Enforce consistent spacing between keys and values in object literal properties
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
        mode: 'strict'
      }
    ],

    // Enforce consistent spacing before and after keywords
    'keyword-spacing': [
      'error',
      {
        after: true,
        before: true,
        overrides: {}
      }
    ],

    // Enforce position of line comments
    'line-comment-position': [
      'error',
      {
        position: 'above'
      }
    ],

    // Enforce consistent linebreak style
    'linebreak-style': [
      'error',
      'windows'
    ],

    // Require empty lines around comments
    'lines-around-comment': [
      'error',
      {
        afterBlockComment: false,
        afterLineComment: false,
        beforeBlockComment: true,
        beforeLineComment: true,
        allowBlockStart: true,
        allowBlockEnd: false,
        allowObjectStart: true,
        allowObjectEnd: false,
        allowArrayStart: true,
        allowArrayEnd: false,
        ignorePattern: 'eslint',
        applyDefaultIgnorePatterns: false
      }
    ],

    // Require or disallow an empty line between class members
    'lines-between-class-members': ['error'],

    // Enforce a maximum line length
    'max-len': [
      'error',
      {
        code: 120
      }
    ],

    // Enforce a maximum number of statements allowed per line
    'max-statements-per-line': [
      'error',
      {
        max: 1
      }
    ],

    // Enforce newlines between operands of ternary expressions
    'multiline-ternary': [
      'error',
      'never'
    ],

    // Enforce or disallow parentheses when invoking a constructor with no arguments
    'new-parens': ['error'],

    // Require a newline after each call in a method chain
    'newline-per-chained-call': [
      'error',
      {
        ignoreChainWithDepth: 3
      }
    ],

    // Disallow unnecessary parentheses
    'no-extra-parens': [
      'error',
      'all',
      {
        conditionalAssign: true,
        ignoreJSX: 'all',
        nestedBinaryExpressions: false,
        returnAssign: true
      }
    ],

    // Disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': ['error'],

    // Disallow multiple spaces
    'no-multi-spaces': [
      'error',
      {
        exceptions: {}
      }
    ],

    // Disallow multiple empty lines
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 1
      }
    ],

    // Disallow all tabs
    'no-tabs': ['error'],

    // Disallow trailing whitespace at the end of lines
    'no-trailing-spaces': [
      'error',
      {
        skipBlankLines: false
      }
    ],

    // Disallow whitespace before properties
    'no-whitespace-before-property': ['error'],

    // Enforce the location of single-line statements
    'nonblock-statement-body-position': [
      'error',
      'below'
    ],

    // Enforce consistent line breaks after opening and before closing braces
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          minProperties: 1
        },
        ObjectPattern: {
          multiline: true
        }
      }
    ],

    // Enforce consistent spacing inside braces
    'object-curly-spacing': [
      'error',
      'always',
      {
        arraysInObjects: true,
        objectsInObjects: true
      }
    ],

    // Enforce placing object properties on separate lines
    'object-property-newline': [
      'error',
      {
        allowMultiplePropertiesPerLine: false
      }
    ],

    // Enforce consistent linebreak style for operators
    'operator-linebreak': [
      'error',
      'after'
    ],

    // Require or disallow padding within blocks
    'padded-blocks': [
      'error',
      {
        blocks: 'never',
        classes: 'never',
        switches: 'never'
      }
    ],

    // Require or disallow padding lines between statements
    'padding-line-between-statements': ['error'],

    // Enforce the consistent use of either backticks, double, or single quotes
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
        avoidEscape: true
      }
    ],

    // Enforce spacing between rest and spread operators and their expressions
    'rest-spread-spacing': [
      'error',
      'never'
    ],

    // Require or disallow semicolons instead of ASI
    semi: [
      'error',
      'always',
      {
        omitLastInOneLineBlock: false
      }
    ],

    // Enforce consistent spacing before and after semicolons
    'semi-spacing': [
      'error',
      {
        after: true,
        before: false
      }
    ],

    // Enforce location of semicolons
    'semi-style': ['error'],

    // Enforce consistent spacing before blocks
    'space-before-blocks': [
      'error',
      {
        functions: 'always',
        keywords: 'always',
        classes: 'always'
      }
    ],

    // Enforce consistent spacing before `function` definition opening parenthesis
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'ignore'
      }
    ],

    // Enforce consistent spacing inside parentheses
    'space-in-parens': [
      'error',
      'never'
    ],

    // Require spacing around infix operators
    'space-infix-ops': [
      'error',
      {
        int32Hint: false
      }
    ],

    // Enforce consistent spacing before or after unary operators
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false,
        overrides: {}
      }
    ],

    // Enforce spacing around colons of switch statements
    'switch-colon-spacing': ['error'],

    // Require or disallow spacing around embedded expressions of template strings
    'template-curly-spacing': [
      'error',
      'never'
    ],

    // Require or disallow spacing between template tags and their literals
    'template-tag-spacing': [
      'error',
      'never'
    ],

    // Require or disallow Unicode byte order mark (BOM)
    'unicode-bom': [
      'error',
      'never'
    ],

    // Require parentheses around immediate `function` invocations
    'wrap-iife': [
      'error',
      'inside',
      {
        functionPrototypeMethods: false
      }
    ],

    // Require parenthesis around regex literals
    'wrap-regex': ['off'],

    // Require or disallow spacing around the `*` in `yield*` expressions
    'yield-star-spacing': [
      'error',
      {
        after: true,
        before: true
      }
    ]
  }
};
