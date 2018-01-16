const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    version: '^0.5.6',
    type: 'app',
    extractCSS: true,
    staticPath: './static',
    libraryPath: './src/components',
    baseCSSPath: './src/components/base/base.css',
    globalCSSPath: './src/components/base/global.css',
    webpack: {
        entry: {
            vendor: 'babel-polyfill',
            index: './src/views/index/index.js',
            dashboard: './src/views/dashboard/index.js',
            login: './src/views/login/index.js',
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
        plugins: [
            new HtmlWebpackPlugin({ filename: 'index.html', hash: true, template: './src/views/index/index.html', chunks: ['vendor', 'index'] }),
            new HtmlWebpackPlugin({ filename: 'dashboard.html', hash: true, template: './src/views/dashboard/index.html', chunks: ['vendor', 'dashboard'] }),
            new HtmlWebpackPlugin({ filename: 'login.html', hash: true, template: './src/views/login/index.html', chunks: ['vendor', 'login'] }),
        ],
    },
};
