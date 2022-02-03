module.exports = {
    root: true,
    env: {
        node: true,
        jest: true,
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'semi': ['error', 'always'],
        'comma-dangle': ['error', 'always-multiline'],
    },
    extends: [
        'plugin:vue/strongly-recommended',
        '@vue/standard',
        '@vue/typescript'
    ],
    plugins: ['jest', 'import', 'vue'],
    parserOptions: {
        parser: 'babel-eslint',
    },
    overrides: [
        {
            files: [
                '**/*.{j,t}s?(x)',
            ],
            env: {
                jest: true,
            },
        },
    ],
};
