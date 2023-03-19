module.exports = {
  rules: {
    // Enforce linebreaks after opening and before closing array brackets
    'array-bracket-newline': ['error'],

    // Enforce consistent spacing inside array brackets
    'array-bracket-spacing': [
      "error",
      "never",
      {
        "arraysInArrays": true,
        "objectsInArrays": false,
        "singleValue": false
      }
    ],

    // Enforce line breaks after each array element
    'array-element-newline': ['error'],

    // Require parentheses around arrow function arguments
    'arrow-parens': [
      "error",
      "always",
      {
        "requireForBlockBody": true
      }
    ],

    // Enforce consistent spacing before and after the arrow in arrow functions
    'arrow-spacing': [
      "error",
      {
        "after": true,
        "before": true
      }
    ],

    // Disallow or enforce spaces inside of blocks after opening block and before closing block
    'block-spacing': ['error'],

    // Enforce consistent brace style for blocks
    'brace-style': [
      "error",
      "1tbs",
      {
        "allowSingleLine": false
      }
    ],

    // Require or disallow trailing commas
    'comma-dangle': [
      "error",
      {
        "arrays": "never",
        "objects": "never",
        "imports": "never",
        "exports": "never",
        "functions": "never"
      }
    ],

    // Enforce consistent spacing before and after commas
    'comma-spacing': [
      "error",
      {
        "after": true,
        "before": false
      }
    ],

    // Enforce consistent comma style
    'comma-style': [
      "error",
      "last",
      {
        "exceptions": {}
      }
    ],

    // Enforce consistent spacing inside computed property brackets
    'computed-property-spacing': [
      "error",
      "never"
    ],

    // Enforce consistent newlines before and after dots
    'dot-location': [
      "error",
      "property"
    ],

    // Require or disallow newline at the end of files
    'eol-last': [
      "error",
      "always"
    ],

    // Require or disallow spacing between function identifiers and their invocations
    'func-call-spacing': [
      "error",
      "never"
    ],

    // Enforce line breaks between arguments of a function call
    'function-call-argument-newline': ['error'],

    // Enforce consistent line breaks inside function parentheses
    'function-paren-newline': ['error'],

    // Enforce consistent spacing around `*` operators in generator functions
    'generator-star-spacing': [
      "error",
      {
        "after": true,
        "before": true
      }
    ],

    // Enforce the location of arrow function bodies
    'implicit-arrow-linebreak': ['error'],

    // Enforce consistent indentation
    'indent': [
      "error",
      2,
      {
        "ArrayExpression": 1,
        "CallExpression": {
          "arguments": "first"
        },
        "FunctionDeclaration": {
          "body": 1,
          "parameters": "first"
        },
        "FunctionExpression": {
          "body": 1,
          "parameters": "first"
        },
        "MemberExpression": 1,
        "ObjectExpression": 1,
        "SwitchCase": 1,
        "VariableDeclarator": {
          "const": 3,
          "let": 2,
          "var": 2
        },
        "outerIIFEBody": 1
      }
    ],

    // Enforce the consistent use of either double or single quotes in JSX attributes
    'jsx-quotes': [
      "error",
      "prefer-double"
    ],

    // Enforce consistent spacing between keys and values in object literal properties
    'key-spacing': [
      "error",
      {
        "beforeColon": false,
        "afterColon": true,
        "mode": "strict"
      }
    ],

    // Enforce consistent spacing before and after keywords
    'keyword-spacing': [
      "error",
      {
        "after": true,
        "before": true,
        "overrides": {}
      }
    ],

    // Enforce position of line comments
    'line-comment-position': [
      "error",
      {
        "position": "above"
      }
    ],

    // Enforce consistent linebreak style
    'linebreak-style': [
      "error",
      "windows"
    ],

    // Require empty lines around comments
    'lines-around-comment': [
      "error",
      {
        "afterBlockComment": false,
        "afterLineComment": false,
        "beforeBlockComment": true,
        "beforeLineComment": true,
        "allowBlockStart": true,
        "allowBlockEnd": false,
        "allowObjectStart": true,
        "allowObjectEnd": false,
        "allowArrayStart": true,
        "allowArrayEnd": false,
        "ignorePattern": "eslint",
        "applyDefaultIgnorePatterns": false
      }
    ],

    // Require or disallow an empty line between class members
    'lines-between-class-members': ['error'],

    // Enforce a maximum line length
    'max-len': [
      "error",
      {
        "code": 120
      }
    ],

    // Enforce a maximum number of statements allowed per line
    'max-statements-per-line': [
      "error",
      {
        "max": 1
      }
    ],

    // Enforce newlines between operands of ternary expressions
    'multiline-ternary': [
      "error",
      "never"
    ],

    // Enforce or disallow parentheses when invoking a constructor with no arguments
    'new-parens': ['error'],

    // Require a newline after each call in a method chain
    'newline-per-chained-call': [
      "error",
      {
        "ignoreChainWithDepth": 3
      }
    ],

    // Disallow unnecessary parentheses
    'no-extra-parens': [
      "error",
      "all",
      {
        "conditionalAssign": true,
        "ignoreJSX": "all",
        "nestedBinaryExpressions": false,
        "returnAssign": true
      }
    ],

    // Disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': ['error'],

    // Disallow multiple spaces
    'no-multi-spaces': [
      "error",
      {
        "exceptions": {}
      }
    ],

    // Disallow multiple empty lines
    'no-multiple-empty-lines': [
      "error",
      {
        "max": 1,
        "maxBOF": 0,
        "maxEOF": 1
      }
    ],

    // Disallow all tabs
    'no-tabs': ['error'],

    // Disallow trailing whitespace at the end of lines
    'no-trailing-spaces': [
      "error",
      {
        "skipBlankLines": false
      }
    ],

    // Disallow whitespace before properties
    'no-whitespace-before-property': ['error'],

    // Enforce the location of single-line statements
    'nonblock-statement-body-position': [
      "error",
      "below"
    ],

    // Enforce consistent line breaks after opening and before closing braces
    'object-curly-newline': [
      "error",
      {
        "ObjectExpression": {
          "minProperties": 1
        },
        "ObjectPattern": {
          "multiline": true
        }
      }
    ],

    // Enforce consistent spacing inside braces
    'object-curly-spacing': [
      "error",
      "always",
      {
        "arraysInObjects": true,
        "objectsInObjects": true
      }
    ],

    // Enforce placing object properties on separate lines
    'object-property-newline': [
      "error",
      {
        "allowMultiplePropertiesPerLine": false
      }
    ],

    // Enforce consistent linebreak style for operators
    'operator-linebreak': [
      "error",
      "after"
    ],

    // Require or disallow padding within blocks
    'padded-blocks': [
      "error",
      {
        "blocks": "never",
        "classes": "never",
        "switches": "never"
      }
    ],

    // Require or disallow padding lines between statements
    'padding-line-between-statements': ['error'],

    // Enforce the consistent use of either backticks, double, or single quotes
    'quotes': [
      "error",
      "single",
      {
        "allowTemplateLiterals": true,
        "avoidEscape": true
      }
    ],

    // Enforce spacing between rest and spread operators and their expressions
    'rest-spread-spacing': [
      "error",
      "never"
    ],

    // Require or disallow semicolons instead of ASI
    'semi': [
      "error",
      "always",
      {
        "omitLastInOneLineBlock": false
      }
    ],

    // Enforce consistent spacing before and after semicolons
    'semi-spacing': [
      "error",
      {
        "after": true,
        "before": false
      }
    ],

    // Enforce location of semicolons
    'semi-style': ['error'],

    // Enforce consistent spacing before blocks
    'space-before-blocks': [
      "error",
      {
        "functions": "always",
        "keywords": "always",
        "classes": "always"
      }
    ],

    // Enforce consistent spacing before `function` definition opening parenthesis
    'space-before-function-paren': [
      "error",
      {
        "anonymous": "never",
        "named": "never",
        "asyncArrow": "ignore"
      }
    ],

    // Enforce consistent spacing inside parentheses
    'space-in-parens': [
      "error",
      "never"
    ],

    // Require spacing around infix operators
    'space-infix-ops': [
      "error",
      {
        "int32Hint": false
      }
    ],

    // Enforce consistent spacing before or after unary operators
    'space-unary-ops': [
      "error",
      {
        "words": true,
        "nonwords": false,
        "overrides": {}
      }
    ],

    // Enforce spacing around colons of switch statements
    'switch-colon-spacing': ['error'],

    // Require or disallow spacing around embedded expressions of template strings
    'template-curly-spacing': [
      "error",
      "never"
    ],

    // Require or disallow spacing between template tags and their literals
    'template-tag-spacing': [
      "error",
      "never"
    ],

    // Require or disallow Unicode byte order mark (BOM)
    'unicode-bom': [
      "error",
      "never"
    ],

    // Require parentheses around immediate `function` invocations
    'wrap-iife': [
      "error",
      "inside",
      {
        "functionPrototypeMethods": false
      }
    ],

    // Require parenthesis around regex literals
    'wrap-regex': [
      "off"
    ],

    // Require or disallow spacing around the `*` in `yield*` expressions
    'yield-star-spacing': [
      "error",
      {
        "after": true,
        "before": true
      }
    ]
  }
};
