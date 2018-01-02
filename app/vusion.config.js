const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    version: '^0.5.6',
    type: 'app',
    extractCSS: true,
    uglifyJS: true,
    docs: true,
    libraryPath: './src/library',
    globalCSSPath: './src/library/base/global.css',
    webpack: {
        entry: {
            index: './src/views/index/index.js',
            dashboard: './src/views/dashboard/index.js',
            login: './src/views/login/index.js',
        },
        plugins: [
            'EXTENDS',
            new HtmlWebpackPlugin({ filename: 'index.html', hash: true, template: './src/views/index/index.html', chunks: ['index'] }),
            new HtmlWebpackPlugin({ filename: 'dashboard.html', hash: true, template: './src/views/dashboard/index.html', chunks: ['dashboard'] }),
            new HtmlWebpackPlugin({ filename: 'login.html', hash: true, template: './src/views/login/index.html', chunks: ['login'] }),
        ],
    },
};
