const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');

module.exports = {
    version: '>=0.6.5',
    type: 'app',
    staticPath: './static',
    docs: false,
    uglifyJS: true,
    extractCSS: true,
    sourceMap: true,
    libraryPath: './src/components',
    webpack: {
        entry: {
            index: ['babel-polyfill', 'whatwg-fetch', './src/views/index/index.js'], // babel-polyfill与whatwg-fetch为了兼容IE
            dashboard: ['babel-polyfill', 'whatwg-fetch', './src/views/dashboard/index.js'],
            login: ['babel-polyfill', 'whatwg-fetch', './src/views/login/index.js'],
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
        module: {
            rules: [{
                test: /\.ftl$/i,
                use: [{
                    loader: 'underscore-template-loader',
                    query: {
                        attributes: ['img:src', 'link:style', 'script:src'],
                        root: '~',
                        engine: 'lodash',
                        withImports: false,
                        parseDynamicRoutes: false,
                        parseMacros: false,
                        interpolate: '<%=([\\s\\S]+?)%>',
                    },
                }],
            }],
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: path.resolve(__dirname, './src/views/index/index.html'),
                hash: true,
                inject: false,
                chunks: ['index'],
                template: './template/index.ftl',
            }),
            new HtmlWebpackPlugin({
                filename: path.resolve(__dirname, './src/views/dashboard/index.html'),
                hash: true,
                inject: false,
                chunks: ['dashboard'],
                template: './template/dashboard.ftl',
            }),
            new HtmlWebpackPlugin({
                filename: path.resolve(__dirname, './src/views/login/index.html'),
                hash: true,
                inject: false,
                chunks: ['login'],
                template: './template/login.ftl',
            }),
            new webpack.DllReferencePlugin({
                manifest: require('./dll/vendor.manifest.json'),
                context: path.resolve(__dirname, 'dll'),
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
