'use strict';

module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "parserOptions": {
        "ecmaVersion": 6
    },
    "rules": {
        "accessor-pairs": 2,
        "array-bracket-spacing": [2, "never"],
        "array-callback-return": 2,
        "arrow-body-style": [2, "as-needed"],
        "array-bracket-newline": [2, "never"],
        "array-element-newline": [2, { "multiline": true }],
        "arrow-parens": [2, "as-needed"],
        "arrow-spacing": 2,
        "block-scoped-var": 2,
        "block-spacing": [2, "always"],
        "brace-style": [2, "stroustrup"],
        "callback-return": 0,
        "camelcase": 2,
        "capitalized-comments": 0,
        "class-methods-use-this": 2,
        "comma-dangle": 2,
        "comma-spacing": [2, {"before": false, "after": true}],
        "comma-style": [2, "last"],
        "complexity": [2, 5],
        "computed-property-spacing": [2, "never"],
        "consistent-return": 0,
        "consistent-this": [2, "self"],
        "constructor-super": 2,
        "curly": 2,
        "default-case": 2,
        "dot-location": [2, "property"],
        "dot-notation": 2,
        "eol-last": 2,
        "eqeqeq": 2,
        "for-direction": 2,
        "func-call-spacing": 2,
        "func-name-matching": 2,
        "func-names": 2,
        "func-style": [2, "expression"],
        "function-paren-newline": [2, "consistent"],
        "generator-star-spacing": 0,
        "getter-return": 2,
        "global-require": 2,
        "guard-for-in": 2,
        "handle-callback-err": [2, "^.*(e|E)rr"],
        "id-blacklist": [2, "e"],
        "id-length": [2, {"min": 3}],
        "id-match": 0,
        "implicit-arrow-linebreak": 2,
        "indent": [2, 4],
        "init-declarations": [2, "never", {"ignoreForLoopInit": true}],
        "jsx-quotes": 2,
        "key-spacing": 2,
        "keyword-spacing": 2,
        "line-comment-position": 2,
        "linebreak-style": 2,
        "lines-around-comment": [2, {"beforeBlockComment": false}],
        "lines-between-class-members": 2,
        "max-depth": 2,
        "max-len": 0,
        "max-lines": [1, {"max": 150}],
        "max-nested-callbacks": [2, 3],
        "max-params": [2, 4],
        "max-statements-per-line": 2,
        "max-statements": 0,
        "multiline-comment-style": [1, "separate-lines"],
        "multiline-ternary": [2, "never"],
        "new-cap": [2, {"capIsNew": false}],
        "new-parens": 2,
        "newline-per-chained-call": 0,
        "no-alert": 2,
        "no-array-constructor": 2,
        "no-bitwise": 2,
        "no-buffer-constructor": 1,
        "no-caller": 2,
        "no-case-declarations": 2,
        "no-catch-shadow": 0,
        "no-class-assign": 2,
        "no-compare-neg-zero": 2,
        "no-confusing-arrow": [2, {"allowParens": true}],
        "no-console": 0,
        "no-const-assign": 2,
        "no-constant-condition": 2,
        "no-continue": 2,
        "no-control-regex": 2,
        "no-debugger": 2,
        "no-delete-var": 2,
        "no-div-regex": 2,
        "no-dupe-args": 2,
        "no-dupe-class-members": 2,
        "no-dupe-keys": 2,
        "no-duplicate-case": 2,
        "no-duplicate-imports": 2,
        "no-else-return": 2,
        "no-empty-character-class": 2,
        "no-empty-function": 2,
        "no-empty-pattern": 2,
        "no-empty": 2,
        "no-eq-null": 2,
        "no-eval": 2,
        "no-ex-assign": 2,
        "no-extend-native": 2,
        "no-extra-bind": 2,
        "no-extra-boolean-cast": 2,
        "no-extra-label": 2,
        "no-extra-parens": 2,
        "no-extra-semi": 2,
        "no-fallthrough": 2,
        "no-floating-decimal": 2,
        "no-func-assign": 2,
        "no-global-assign": 2,
        "no-implicit-coercion": 2,
        "no-implicit-globals": 2,
        "no-implied-eval": 2,
        "no-inline-comments": 0,
        "no-inner-declarations": 2,
        "no-invalid-regexp": 2,
        "no-invalid-this": 2,
        "no-irregular-whitespace": 2,
        "no-iterator": 2,
        "no-label-var": 2,
        "no-labels": 2,
        "no-lone-blocks": 2,
        "no-lonely-if": 2,
        "no-loop-func": 2,
        "no-magic-numbers": [2, {"enforceConst": true}],
        "no-mixed-operators": 0,
        "no-mixed-requires": 2,
        "no-mixed-spaces-and-tabs": 2,
        "no-multi-assign": 2,
        "no-multi-spaces": 2,
        "no-multi-str": 2,
        "no-multiple-empty-lines": 2,
        "no-negated-condition": 2,
        "no-nested-ternary": 1,
        "no-new-func": 2,
        "no-new-object": 2,
        "no-new-require": 2,
        "no-new-symbol": 2,
        "no-new-wrappers": 2,
        "no-new": 2,
        "no-obj-calls": 2,
        "no-octal-escape": 2,
        "no-octal": 2,
        "no-param-reassign": 2,
        "no-path-concat": 2,
        "no-plusplus": [2, {"allowForLoopAfterthoughts": true}],
        "no-process-env": 2,
        "no-process-exit": 2,
        "no-proto": 2,
        "no-prototype-builtins": 2,
        "no-redeclare": 2,
        "no-regex-spaces": 2,
        "no-restricted-globals": 0,
        "no-restricted-imports": 0,
        "no-restricted-modules": 0,
        "no-restricted-properties": 0,
        "no-restricted-syntax": 0,
        "no-return-assign": 2,
        "no-return-await": 2,
        "no-script-url": 2,
        "no-self-assign": 2,
        "no-self-compare": 2,
        "no-sequences": 2,
        "no-shadow-restricted-names": 2,
        "no-shadow": 2,
        "no-sparse-arrays": 2,
        "no-sync": 2,
        "no-tabs": 2,
        "no-template-curly-in-string": 2,
        "no-ternary": 0,
        "no-this-before-super": 2,
        "no-throw-literal": 2,
        "no-trailing-spaces": 2,
        "no-undef-init": 2,
        "no-undef": 2,
        "no-undefined": 2,
        "no-underscore-dangle": 0,
        "no-unexpected-multiline": 2,
        "no-unmodified-loop-condition": 2,
        "no-unneeded-ternary": 1,
        "no-unreachable": 2,
        "no-unsafe-finally": 2,
        "no-unsafe-negation": 2,
        "no-unused-expressions": 2,
        "no-unused-labels": 2,
        "no-unused-vars": 2,
        "no-use-before-define": 2,
        "no-useless-call": 2,
        "no-useless-computed-key": 2,
        "no-useless-constructor": 2,
        "no-useless-escape": 2,
        "no-useless-rename": 2,
        "no-useless-return": 2,
        "no-var": 2,
        "no-void": 2,
        "no-warning-comments": 0,
        "no-whitespace-before-property": 2,
        "no-with": 2,
        "nonblock-statement-body-position": 0,
        "object-curly-newline": [2, {"minProperties": 1}],
        "object-curly-spacing": 2,
        "object-property-newline": 2,
        "object-shorthand": 0,
        "one-var-declaration-per-line": 2,
        "one-var": [2, "never"],
        "operator-assignment": 2,
        "operator-linebreak": [2, "none"],
        "padded-blocks": [2, "never"],
        "padding-line-between-statements": [2, 
            {"blankLine": "always", "prev": "directive", "next": "*"},
            {"blankLine": "any", "prev": "directive", "next": "directive"},
            {"blankLine": "always", "prev": ["const", "let", "var"], "next": ["const", "let", "var"]},
            {"blankLine": "any", "prev": ["const", "let", "var"], "next": ["const", "let", "var"]},
            {"blankLine": "always", "prev": "*", "next": "return"},
            {"blankLine": "always", "prev": "*", "next": "multiline-expression"}
        ],
        "prefer-arrow-callback": 2,
        "prefer-const": 2,
        "prefer-destructuring": [2, {"array": true, "object": true}, {"enforceForRenamedProperties": false}],
        "prefer-numeric-literals": 0,
        "prefer-promise-reject-errors": 2,
        "prefer-rest-params": 2,
        "prefer-spread": 1,
        "prefer-template": 2,
        "quote-props": [2, "consistent-as-needed"],
        "quotes": [2, "single", {"allowTemplateLiterals": true}],
        "radix": 2,
        "require-await": 2,
        "require-jsdoc": 0,
        "require-yield": 0,
        "rest-spread-spacing": 2,
        "semi-spacing": 2,
        "semi": 2,
        "semi-style": 2,
        "sort-imports": 2,
        "sort-keys": 0,
        "sort-vars": 0,
        "space-before-blocks": 2,
        "space-before-function-paren": [2, "never"],
        "space-in-parens": [2, "never"],
        "space-infix-ops": 2,
        "space-unary-ops": 2,
        "spaced-comment": 2,
        "strict": [2, "global"],
        "switch-colon-spacing": 2,
        "symbol-description": 2,
        "template-curly-spacing": 2,
        "template-tag-spacing": [2, "never"],
        "unicode-bom": 2,
        "use-isnan": 2,
        "valid-jsdoc": 0,
        "valid-typeof": [2, {"requireStringLiterals": true}],
        "vars-on-top": 2,
        "wrap-iife": [2, "outside"],
        "wrap-regex": 2,
        "yield-star-spacing": 0,
        "yoda": 2
    }
};