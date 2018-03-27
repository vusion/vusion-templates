/**
 * 整合所有子路由
 */

const router = require('koa-router')();
const home = require('./home');
const log = require('../utils/logger').createLogger('vukoa:server:routers:index');


router.use('', home.routes(), home.allowedMethods());


module.exports = router;
