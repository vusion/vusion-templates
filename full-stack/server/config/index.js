/**
 * 应用配置处理
 */
'use strict';

const defaultsDeep = require('lodash/defaultsDeep');
const baseConfig = require('./app.base.json');
const env = process.env.NODE_ENV || 'development';

const envConfig = require(`./app.${env}.json`);

module.exports = defaultsDeep(envConfig, baseConfig);
