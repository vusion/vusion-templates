const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    type: 'app',
    libraryPath: 'src/client/components/',
    assetsPath: 'src/client/static/',
    docs: false,
    // docs: process.env.NODE_ENV === 'development',
    extractCSS: true,
    webpack: {
        entry: {
            EXTENDS: true,
            /*bundle: './src/client/index.js',*/
            vendor: 'babel-polyfill',
            index: './src/client/views/index/index.js',
            dashboard: './src/client/views/dashboard/index.js',
            login: './src/client/views/login/index.js',
        },
        output: {
            path: path.resolve(__dirname, 'public'),
            publicPath: '/public/',
            filename: '[name].js',
            chunkFilename: 'chunk-[name]-[chunkhash].js',
        },
        resolve: {
            EXTENDS: true,
            alias: {
                EXTENDS: true,
                specific: path.join(__dirname, './src/client/specific'),
                services: path.join(__dirname, './src/client/services'),
                assets: path.join(__dirname, './src/client/assets'),
                shared: path.join(__dirname, './src/shared'),
                root: path.join(__dirname, './src/client'),
            },
        },
        plugins: [/*'EXTENDS',*/ /*new HtmlWebpackPlugin(),*/
            new HtmlWebpackPlugin({ filename: 'index.html', hash: true, template: './src/client/views/index/index.html', chunks: ['vendor', 'index'] }),
            new HtmlWebpackPlugin({ filename: 'dashboard.html', hash: true, template: './src/client/views/dashboard/index.html', chunks: ['vendor', 'dashboard'] }),
            new HtmlWebpackPlugin({ filename: 'login.html', hash: true, template: './src/client/views/login/index.html', chunks: ['vendor', 'login'] }),
        ],},


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
