const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

module.exports = {
    version: '>=0.7.4',
    type: 'app',
    staticPath: 'src/client/static/',
    docs: false,
    extractCSS: true,
    sourceMap: false,
    libraryPath: 'src/client/components/',
    webpack: {
        entry: {
            bundle: ['babel-polyfill', 'whatwg-fetch', './src/client/views/index.js'],
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
                filename: path.resolve(__dirname, './src/client/pages/index.ejs'),
                hash: true,
                inject: true,
                chunks: ['bundle'],
                template: './src/client/pages/index.html',
            }),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
            }),
            // 关联生成的 dll 信息文件
            new webpack.DllReferencePlugin({
                manifest: require('./dll/vendor.manifest.json'),
            }),
            // 将 vendor.js 带上 hash 并注入到 html 中
            new AddAssetHtmlPlugin({
                filepath: path.resolve(__dirname, 'dll/vendor.js'),
                hash: true,
                includeSourcemap: false,
            }),
            // 将子 chunk 的公共代码打包进父 chunk 中
            new webpack.optimize.CommonsChunkPlugin({
                children: true,
                minChunks: 3,
            }),
        ],
    },
    webpackDevServer: {
        host: 'http://localhost.com',
        // proxy: {
        //     context: ['/**'],
        //     target: 'http://localhost.com:8000',
        // },
        // port: 8000,
        publicPath: '/public/',
        contentBase: path.resolve(__dirname, 'public'),
    },
};
