const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');

module.exports = {
    version: '>=0.6.0',
    type: 'app',
    extractCSS: true,
    staticPath: './static',
    docs: false,
    uglifyJS: true,
    sourceMap: true,
    libraryPath: './src/components',
    webpack: {
        entry: {
            bundle: ['babel-polyfill', 'whatwg-fetch', './src/views/index.js'],   // babel-polyfill与whatwg-fetch为了兼容IE
        },
        output: {
            path: path.resolve(__dirname, 'public'),
            publicPath: '/public/',
        },
        resolve: {
            alias: {
                vue$: path.resolve(__dirname, 'node_modules/vue/dist/vue.esm.js'),
                'vue-router$': path.resolve(__dirname, 'node_modules/vue-router/dist/vue-router.esm.js'),
                src: path.resolve(__dirname, 'src'),
            },
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: path.resolve(__dirname, './src/views/index.html'),
                hash: true,
                inject: true,
                chunks: ['bundle'],
                template: './index.ftl',
            }),
            new webpack.DllReferencePlugin({
                manifest: require('./dll/vendor.manifest.json'),
            }),
            new CopyWebpackPlugin([
                path.resolve(__dirname, 'dll/vendor.js'),
            ]),
            new HtmlWebpackIncludeAssetsPlugin({
                assets: ['vendor.js'],
                append: false,
                hash: true,
            }),
        ],
    },
};
