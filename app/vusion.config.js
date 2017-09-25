const path = require('path');
const HtmlWebpackPlugin = global.plugins.HtmlWebpackPlugin;

module.exports = {
    version: '^0.5.0',
    type: 'app',
    uglifyJS: true,
    extractCSS: true,
    webpack: {
        entry: {
            index: './src/index/index.js',
            dashboard: './src/dashboard/index.js',
            login: './src/login/index.js',
        },
        plugins: [
            'EXTENDS',
            new HtmlWebpackPlugin({ filename: 'index.html', hash: true, template: './src/index/index.html', chunks: ['index'] }),
            new HtmlWebpackPlugin({ filename: 'dashboard.html', hash: true, template: './src/dashboard/index.html', chunks: ['dashboard'] }),
            new HtmlWebpackPlugin({ filename: 'login.html', hash: true, template: './src/login/index.html', chunks: ['login'] }),
        ],
    },
};
