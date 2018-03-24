const debug = require('debug')('kp:config:index');
const VError = require('verror');
const result = require('dotenv').config({
    path: './src/config/.env',
});
if (result.error)
    console.error(result.error + 'dotevn解析出错');
else
    console.info('dotevn解析的环境变量 %o', result.parsed);
process.env.HOSTNAME = result.parsed.HOSTNAME;

const config = require('config');
console.log('hostname: %s', config.util.getEnv('HOSTNAME'));
module.exports = config;
