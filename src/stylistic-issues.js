module.exports = {
  rules: {

    // Enforce consistent spacing inside array brackets
    'array-bracket-spacing': ['error'],

    // Enforce consistent spacing inside single-line blocks
    'block-spacing': ['error'],

    // Enforce consistent brace style for blocks
    'brace-style': ['error'],

    // Enforce camelcase naming convention
    'camelcase': ['error'],

    // Enforce or disallow capitalization of the first letter of a comment
    'capitalized-comments': ['error'],

    // Require or disallow trailing commas
    'comma-dangle': ['error'],

    // Enforce consistent spacing before and after commas
    'comma-spacing': ['error'],

    // Enforce consistent comma style
    'comma-style': ['error'],

    // Enforce consistent spacing inside computed property brackets
    'computed-property-spacing': ['error'],

    // Enforce consistent naming when capturing the current execution context
    'consistent-this': ['error'],

    // Require or disallow newline at the end of files
    'eol-last': ['error'],

    // Require or disallow spacing between function identifiers and their invocations
    'func-call-spacing': ['error'],

    // Require function names to match the name of the variable or property to which they are assigned
    'func-name-matching': ['error'],

    // Require or disallow named function expressions
    'func-names': ['error'],

    // Enforce the consistent use of either function declarations or expressions
    'func-style': ['error'],

    // Disallow specified identifiers
    'id-blacklist': ['error', 'item', 'data'],

    // Enforce minimum and maximum identifier lengths
    'id-length': ['error', {
      exceptions: [],
      max: 30,
      min: 3,
      properties: 'never'
    }],

    // Require identifiers to match a specified regular expression
    'id-match': ['error'],

    // Enforce consistent indentation
    'indent': ['error', 2], // eslint-disable-line no-magic-numbers

    // Enforce the consistent use of either double or single quotes in JSX attributes
    'jsx-quotes': ['error'],

    // Enforce consistent spacing between keys and values in object literal properties
    'key-spacing': ['error'],

    // Enforce consistent spacing before and after keywords
    'keyword-spacing': ['error'],

    // Enforce position of line comments
    'line-comment-position': ['error'],

    // Enforce consistent linebreak style
    'linebreak-style': ['error', 'windows'],

    // Require empty lines around comments
    'lines-around-comment': ['error'],

    // Require or disallow newlines around directives
    'lines-around-directive': ['error'],

    // Enforce a maximum depth that blocks can be nested
    'max-depth': ['error'],

    // Enforce a maximum line length
    'max-len': ['error', {
      code: 120
    }],

    // Enforce a maximum number of lines per file
    'max-lines': ['error', {
      max: 200,
      skipBlankLines: true,
      skipComments: true
    }],

    // Enforce a maximum depth that callbacks can be nested
    'max-nested-callbacks': ['error'],

    // Enforce a maximum number of parameters in function definitions
    'max-params': ['error', 4], // eslint-disable-line no-magic-numbers

    // Enforce a maximum number of statements allowed in function blocks
    'max-statements': ['error'],

    // Enforce a maximum number of statements allowed per line
    'max-statements-per-line': ['error', {
      max: 20
    }], // eslint-disable-line no-magic-numbers

    // Enforce newlines between operands of ternary expressions
    'multiline-ternary': ['error', 'never'],

    // Require constructor names to begin with a capital letter
    'new-cap': ['error'],

    // Require parentheses when invoking a constructor with no arguments
    'new-parens': ['error'],

    // Require or disallow an empty line after variable declarations
    'newline-after-var': ['error'],

    // Require an empty line before return statements
    'newline-before-return': ['error'],

    // Require a newline after each call in a method chain
    'newline-per-chained-call': ['error'],

    // Disallow Array constructors
    'no-array-constructor': ['error'],

    // Disallow bitwise operators
    'no-bitwise': ['error'],

    // Disallow continue statements
    'no-continue': ['error'],

    // Disallow inline comments after code
    'no-inline-comments': ['error'],

    // Disallow if statements as the only statement in else blocks
    'no-lonely-if': ['error'],

    // Disallow mixed binary operators
    'no-mixed-operators': ['error'],

    // Disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': ['error'],

    // Disallow use of chained assignment expressions
    'no-multi-assign': ['error'],

    // Disallow multiple empty lines
    'no-multiple-empty-lines': ['error', {
      max: 1
    }],

    // Disallow negated conditions
    'no-negated-condition': ['error'],

    // Disallow nested ternary expressions
    'no-nested-ternary': ['error'],

    // Disallow Object constructors
    'no-new-object': ['error'],

    // Disallow the unary operators ++ and --
    'no-plusplus': ['error'],

    // Disallow specified syntax
    'no-restricted-syntax': ['error'],

    // Disallow all tabs
    'no-tabs': ['error'],

    // Disallow ternary operators
    'no-ternary': ['error'],

    // Disallow trailing whitespace at the end of lines
    'no-trailing-spaces': ['error'],

    // Disallow dangling underscores in identifiers
    'no-underscore-dangle': ['error'],

    // Disallow ternary operators when simpler alternatives exist
    'no-unneeded-ternary': ['error'],

    // Disallow whitespace before properties
    'no-whitespace-before-property': ['error'],

    // Enforce the location of single-line statements
    'nonblock-statement-body-position': ['error'],

    // Enforce consistent line breaks inside braces
    'object-curly-newline': ['error', {
      ObjectExpression: {
        minProperties: 1
      },
      ObjectPattern: {
        multiline: true
      }
    }],

    // Enforce consistent spacing inside braces
    'object-curly-spacing': ['error', 'always', {
      arraysInObjects: true
    }],

    // Enforce placing object properties on separate lines
    'object-property-newline': ['error'],

    // Enforce variables to be declared either together or separately in functions
    'one-var': ['error', {
      initialized: 'never',
      uninitialized: 'never'
    }],

    // Require or disallow newlines around variable declarations
    'one-var-declaration-per-line': ['error'],

    // Require or disallow assignment operator shorthand where possible
    'operator-assignment': ['error'],

    // Enforce consistent linebreak style for operators
    'operator-linebreak': ['error'],

    // Require or disallow padding within blocks
    'padded-blocks': ['error', 'never'],

    // Require quotes around object literal property names
    'quote-props': ['error', 'as-needed', {
      keywords: true,
      numbers: true,
      unnecessary: false
    }],

    // Enforce the consistent use of either backticks, double, or single quotes
    'quotes': ['error', 'single'],

    // Require JSDoc comments
    'require-jsdoc': ['off'],

    // Require or disallow semicolons instead of ASI
    'semi': ['error'],

    // Enforce consistent spacing before and after semicolons
    'semi-spacing': ['error'],

    // Require object keys to be sorted
    'sort-keys': ['error'],

    // Require variables within the same declaration block to be sorted
    'sort-vars': ['error', {
      ignoreCase: false
    }],

    // Enforce consistent spacing before blocks
    'space-before-blocks': ['error'],

    // Enforce consistent spacing before function definition opening parenthesis
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never'
    }],

    // Enforce consistent spacing inside parentheses
    'space-in-parens': ['error'],

    // Require spacing around infix operators
    'space-infix-ops': ['error'],

    // Enforce consistent spacing before or after unary operators
    'space-unary-ops': ['error'],

    // Enforce consistent spacing after the // or /* in a comment
    'spaced-comment': ['error', 'always'],

    // Require or disallow spacing between template tags and their literals
    'template-tag-spacing': ['error'],

    // Require or disallow Unicode byte order mark (BOM)
    'unicode-bom': ['error'],

    // Require parenthesis around regex literals
    'wrap-regex': ['error']

  }
};
