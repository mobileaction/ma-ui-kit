module.exports = async ({ config }) => {
    config.resolve.extensions.push('.ts', '.tsx', '.scss')
    config.module.rules.push({
        test: /\.svg$/,
        use: ['url-loader'],
    })
    /*   config.module.rules.push({
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      }); */
    config.module.rules.push({ test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] });
    config.node = { fs: 'empty' };
    return config;
};
