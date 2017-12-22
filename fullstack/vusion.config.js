const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    type: 'app',
    libraryPath: 'src/client/library.js',
    assetsPath: 'src/client/static/',
    docs: false,
    // docs: process.env.NODE_ENV === 'development',
    extractCSS: true,
    webpack: {
        entry: {
            EXTENDS: true,
            bundle: './src/client/index.js',
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
        plugins: ['EXTENDS', new HtmlWebpackPlugin()],
    },
    webpackDevServer: {
        host: 'http://local.163.com',
        // proxy: {
        //     context: ['/**'],
        //     target: 'http://local.163.com:8000',
        // },
        // port: 8000,
        publicPath: '/public/',
        contentBase: path.resolve(__dirname, 'public'),
    },
};
