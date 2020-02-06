module.exports = {
    "env": {
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2019,
        "sourceType":"script"
    },
    "rules": {
        "quotes": [
          "warn",
          "single",
          {
            "avoidEscape": true,
            "allowTemplateLiterals": true
          }
        ],
        "strict": [
          "warn",
          "global"
        ],
        "eqeqeq": "off",
        "no-console": "warn",
        "semi": [
          "warn",
          "always",
          {
            "omitLastInOneLineBlock": true
          }
        ],
        "no-template-curly-in-string": "warn",
        "indent": [
          "warn",
          4
        ],
        "no-tabs": [
          "warn",
          {
            "allowIndentationTabs": true
          }
        ]
    }
};