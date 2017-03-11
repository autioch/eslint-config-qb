module.exports = {
  env: {

    // Browser global variables
    browser: false,

    // CommonJS global variables and CommonJS scoping (use this for browser-only code that uses Browserify/WebPack).
    commonjs: false,

    // Enable all ECMAScript 6 features except for modules (this automatically sets the ecmaVersion parser option to 6).
    es6: false,

    // Node.js global variables and Node.js scoping
    node: false,

    // Globals common to both Node and Browser.
    'shared-node-browser': false
  },
  parserOptions: {
    ecmaFeatures: {

      // Enable support for the experimental object rest/spread properties
      experimentalObjectRestSpread: false,

      // Allow return statements in the global scope
      globalReturn: false,

      // Enable global strict mode
      impliedStrict: true,

      // Enable JSX
      jsx: false
    },
    ecmaVersion: 6,
    sourceType: 'script'
  }
};
