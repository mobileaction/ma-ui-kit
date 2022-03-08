module.exports = {
    root: true,
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: {
            ts: '@typescript-eslint/parser',
            '<template>': 'espree',
        },
    },
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        'plugin:@typescript-eslint/recommended',
        '@mobileaction',
    ],
    rules: {
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
    },
    env: {
        jest: true,
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                'tests/unit/**/*.spec.{j,t}s?(x)',
                './tests/**/setup.js',
            ],
            env: {
                jest: true,
            },
        },
    ],
};
