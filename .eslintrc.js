module.exports = {
    extends: [
        '@mobileaction',
    ],

    rules: {
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
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
