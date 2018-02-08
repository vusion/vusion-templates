/**
 * 应用程序CLI
 */

'use strict';

const program = require('commander');
const pkg = require('./package.json');

program
    .version(pkg.version);

program
    .command('app')
    .description('start app server')
    .option('-p, --port <port>', 'port (or $PORT)', Number, process.env.PORT || 8000)
    .action((options) => {
        require('./server/app')({
            root: __dirname,
            port: options.port,
            type: 'app',
            controller: './server/app/controller/',
            routes: './server/config/routes.js',
            middlewares: ['auth'],
        });
    });

program.parse(process.argv);
