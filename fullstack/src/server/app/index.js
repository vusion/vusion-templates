/* 应用程序入口
 * @Author: hzlinguanfu
 * @Date: 2018-01-09 14:15:04
 * @Last Modified by: xuefei
 * @Last Modified time: 2018-03-13 22:18:50
 */

// 将.env中配置到环境变量
require('../../config');

// middleware文件夹
const bodyParsePatch = require('./middleware/bodyParsePatch');
const handleCustomCode = require('./middleware/handleCustomCode');
const bunyanLogger = require('koa2-better-bunyan-logger');
// 项目内部其他
const staticFile = require('../utils/koa-static-redirect.js');
const log = require('../utils/logger').createLogger('app');
const routers = require('../routers/index');
const path = require('path');
const Koa = require('koa');
const config = require('config');
const views = require('koa-views');
const body = require('koa-better-body');
const validate = require('koa-validate');
const convert = require('koa-convert');
const debug = require('debug')('vukoa:server:app');

module.exports = (options) => {
// 应用配置
    const app = new Koa();
    app.name = config.name;
    app.keys = config.keys;

    // 日志
    app.use(bunyanLogger({
        name: 'vukoa',
    }));
    app.use(bunyanLogger.requestIdContext());
    app.use(bunyanLogger.requestLogger());

    // 配置控制台日志中间件
    // 正文解析
    app.use(convert(body({
        multipart: true,
        keepExtensions: true,
        strict: false,
    })));
    // 加载正文解析优化中间件
    app.use(bodyParsePatch());


    // 参数验证
    validate(app);

    // 加载静态文件
    log.info('加载静态文件，路径=>' + path.resolve(__dirname, './../../../public'));
    app.use(staticFile({
        realDir: path.resolve(__dirname, '../../../public/'),
        redirectPath: '/public/',
    }));
    // 加载ejs模板
    log.info('加载ejs模板,路径=>' + path.resolve(__dirname, './../../client/pages'));
    app.use(views(path.resolve(__dirname, './../../client/pages'), {
        extension: 'ejs',
    }));

    // 定义code方法
    handleCustomCode(app);
    // 路由解析
    log.info('开始路由解析');
    app.use(routers.routes()).use(routers.allowedMethods());
    log.info('服务器启动');
    return app;
};
