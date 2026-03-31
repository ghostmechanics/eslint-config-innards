export default {
    rules: {
        // id-blacklist became id-denylist
        'id-blacklist': 'deprecated',
        'indent-legacy': 'deprecated',
        // ESLint restructured their rules export in https://github.com/eslint/eslint/pull/11555
        // need to now ignore the index.js file which exports them out
        'index': 'deprecated',
        'lines-around-directive': 'deprecated',
        'newline-after-var': 'deprecated',
        'newline-before-return': 'deprecated',
        'no-native-reassign': 'deprecated',
        'no-negated-in-lhs': 'deprecated',
        'no-spaced-func': 'deprecated',
        // no-warn-comments became no-warning-comments
        // 'no-warn-comments': 'deprecated',
        'prefer-reflect': 'deprecated',
        'require-jsdoc': 'deprecated',
        'valid-jsdoc': 'deprecated'
    }
};
