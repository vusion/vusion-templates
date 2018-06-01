const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

module.exports = {
    type: 'app',
    staticPath: 'src/client/assets/',
    docs: false,
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
                filename: path.resolve(__dirname, './public/index.html'),
                hash: true,
                inject: false,
                chunks: ['commons', 'index'],
                template: './src/client/template/index.ftl',
            }),
            new HtmlWebpackPlugin({
                filename: path.resolve(__dirname, './public/dashboard.html'),
                hash: true,
                inject: false,
                chunks: ['commons', 'dashboard'],
                template: './src/client/template/dashboard.ftl',
            }),
            new HtmlWebpackPlugin({
                filename: path.resolve(__dirname, './public/login.html'),
                hash: true,
                inject: false,
                chunks: ['commons', 'login'],
                template: './src/client/template/login.ftl',
            }),
            new webpack.DllReferencePlugin({
                manifest: require('./dll/vendor.manifest.json'),
                context: path.resolve(__dirname, 'dll'),
            }),
            new AddAssetHtmlPlugin({
                filepath: path.resolve(__dirname, 'dll/vendor.js'),
                hash: true,
                includeSourcemap: false,
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'commons',
            }),
            new webpack.optimize.CommonsChunkPlugin({
                children: true,
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
