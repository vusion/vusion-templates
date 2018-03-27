const router = require('koa-router')();
const homeController = require('../app/controller/home');

const routers = router
    .get('/', homeController.page)
    .get('/overview', homeController.page)

module.exports = routers;
