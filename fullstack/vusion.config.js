const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');

module.exports = {
    type: 'app',
    staticPath: 'src/client/static/',
    docs: false,
    clean: false,   //dev时不删除public文件
    uglifyJS: true,
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
