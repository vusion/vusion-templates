const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    version: '>=0.6.0',
    type: 'app',
    extractCSS: true,
    staticPath: './static',
    libraryPath: './src/components',
    webpack: {
        entry: {
            vendor: 'babel-polyfill',
            bundle: './src/views/index.js',
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
        plugins: [
            new HtmlWebpackPlugin({ filename: 'index.html', hash: true, template: './src/views/index.html', chunks: ['vendor', 'bundle'] }),
        ],
    },
};
