module.exports = {
    env: {
        commonjs: true,
        es6: true,
        node: true
    },
    extends: [
      'eslint:recommended',
      'plugin:security/recommended'
    ],
    plugins: [
      'security'
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
        ecmaVersion: 2019,
        sourceType:'script'
    },
    rules: {
        'detect-non-literal-fs-filename': [0],
        'detect-non-literal-require': [0],
        quotes: [
          'warn',
          'single',
          {
            'avoidEscape': true,
            'allowTemplateLiterals': true
          }
        ],
        strict: [
          'warn',
          'global'
        ],
        eqeqeq: 'warn',
        'no-console': 'warn',
        semi: [
          'warn',
          'always',
          {
            'omitLastInOneLineBlock': true
          }
        ],
        'no-template-curly-in-string': 'warn',
        indent: [
          'warn',
          'tab'
        ],
        'no-tabs': [
          'warn',
          {
            'allowIndentationTabs': true
          }
        ]
    }
};