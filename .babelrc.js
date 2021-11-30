module.exports = {
    sourceType: 'unambiguous',
    presets: [
        [
            '@babel/env',
            {
                useBuiltIns: 'usage',
                corejs: 3,
                modules: false,
            },
        ],
    ],
    plugins: [
        '@babel/plugin-transform-runtime',
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-optional-chaining',
    ],
};
