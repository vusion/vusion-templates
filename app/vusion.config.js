const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    version: '^0.5.6',
    type: 'app',
    docs: true,
    extractCSS: true,
    staticPath: './static',
    libraryPath: './src/components',
    baseCSSPath: './src/components/base/base.css',
    globalCSSPath: './src/components/base/global.css',
    webpack: {
        entry: {
            common: 'babel-polyfill',
            index: './src/views/index/index.js',
            dashboard: './src/views/dashboard/index.js',
            login: './src/views/login/index.js',
        },
        plugins: [
            new HtmlWebpackPlugin({ filename: 'index.html', hash: true, template: './src/views/index/index.html', chunks: ['common', 'index'] }),
            new HtmlWebpackPlugin({ filename: 'dashboard.html', hash: true, template: './src/views/dashboard/index.html', chunks: ['common', 'dashboard'] }),
            new HtmlWebpackPlugin({ filename: 'login.html', hash: true, template: './src/views/login/index.html', chunks: ['common', 'login'] }),
        ],
    },
};
