/**
 * Created by hzlinguanfu on 17-9-27.
 */
'use strict';

const send = require('koa-send');
const path = require('path');
const normalize = require('path').normalize;

module.exports = function (opts) {
    const options = opts || {};
    options.root = path.resolve(options.realDir || process.cwd());
    options.index = options.index || 'index.html';
    const log = options.log || false;

    if (typeof options.realDir !== 'string')
        throw Error('realDir must be specified');

    return async (ctx, next) => {
        let path = ctx.path;
        console.log('path is', path, 'option is' , options.redirectPath);
        if (!options.redirectPath) {
            log && console.log(new Date().toISOString(), path);
            const sent = await send(ctx, path, options);
            if (sent)
                return;
            else
                return next();
        }
        if (path.indexOf(options.redirectPath) !== 0)
            return next();

        if (path === options.redirectPath)
            return ctx.redirect(normalize(options.redirectPath + ''));

        if (options.redirectPath){
            path = normalize(path.replace(options.redirectPath, ''));
        }

        log && console.log(new Date().toISOString(), path);
        const sent = await send(ctx, path, options);
        if (sent)
            return null;
        else
            return next();
    };
};
