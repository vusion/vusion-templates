module.exports = {
    type: 'app',
    root: __dirname,
    port: 8000,
    entry: './src/server/app',
    controller: './src/server/app/controller/',
    routes: './src/server/config/routes.js',
    middlewares: ['auth'],
};
