const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    type: 'app',
    staticPath: 'src/client/static/',
    globalCSSPath: './global.css',
    docs: false,
    uglifyJS: true,
    // docs: process.env.NODE_ENV === 'development',
    extractCSS: true,
    sourceMap: false,
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
