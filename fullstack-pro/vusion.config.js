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
                filename: path.resolve(__dirname, './src/client/views/index/index.html'),
                hash: true,
                inject: false,
                chunks: ['index'],
                template: './src/client/template/index.ftl',
            }),
            new HtmlWebpackPlugin({
                filename: path.resolve(__dirname, './src/client/views/dashboard/index.html'),
                hash: true,
                inject: false,
                chunks: ['dashboard'],
                template: './src/client/template/dashboard.ftl',
            }),
            new HtmlWebpackPlugin({
                filename: path.resolve(__dirname, './src/client/views/login/index.html'),
                hash: true,
                inject: false,
                chunks: ['login'],
                template: './src/client/template/login.ftl',
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
