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
            index: ['babel-polyfill', 'whatwg-fetch', './src/client/views/index/index.js'],
            dashboard: ['babel-polyfill', 'whatwg-fetch', './src/client/views/dashboard/index.js'],
            login: ['babel-polyfill', 'whatwg-fetch', './src/client/views/login/index.js'],
        },
        output: {
            path: path.resolve(__dirname, 'public'),
            publicPath: '/public/',
        },
        resolve: {
            alias: {
                vue$: path.resolve(__dirname, 'node_modules/vue/dist/vue.esm.js'),
                'vue-router$': path.resolve(__dirname, 'node_modules/vue-router/dist/vue-router.esm.js'),
                '@': path.resolve(__dirname, 'src/client'),
            },
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: path.resolve(__dirname, './public/index.html'),
                hash: true,
                chunks: ['common', 'index'],
                template: './src/client/views/dashboard/index.html',
            }),
            new HtmlWebpackPlugin({
                filename: path.resolve(__dirname, './public/dashboard.html'),
                hash: true,
                chunks: ['common', 'dashboard'],
                template: './src/client/views/index/index.html',
            }),
            new HtmlWebpackPlugin({
                filename: path.resolve(__dirname, './public/login.html'),
                hash: true,
                chunks: ['common', 'login'],
                template: './src/client/views/login/index.html',
            }),
            // 关联生成的 dll 信息文件
            // new webpack.DllReferencePlugin({
            //     manifest: require('./dll/vendor.manifest.json'),
            // }),
            // 将 vendor.js 带上 hash 并注入到 html 中
            new AddAssetHtmlPlugin({
                filepath: path.resolve(__dirname, 'dll/vendor.js'),
                hash: true,
                includeSourcemap: false,
            }),
            // 将多个 entry chunk 的公共代码打包成公共 chunk
            new webpack.optimize.CommonsChunkPlugin({
                name: 'common',
                minChunks: 3,
            }),
            // 将子 chunk 的公共代码打包进父 chunk 中
            new webpack.optimize.CommonsChunkPlugin({
                children: true,
                minChunks: 3,
            }),
        ],
    },
    webpackDevServer: {
        host: 'http://localhost',
        // proxy: {
        //     context: ['/**'],
        //     target: 'http://local.163.com:8000',
        // },
        // port: 8000,
        publicPath: '/public/',
        contentBase: path.resolve(__dirname, 'public'),
    },
};
