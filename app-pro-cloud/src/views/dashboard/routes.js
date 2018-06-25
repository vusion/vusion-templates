import Dashboard from './index.vue';
import Overview from './overview.vue';

/**
 * 这里会解析子目录下所有名为 routes.js 的文件
 */
const routesList = [];
const routesImported = require.context('./', true, /sub\.routes\.js/);
routesImported.keys().forEach((key) => routesList.push(routesImported(key).default));

export default [
    { path: '/', component: Dashboard, children: [
        { path: 'overview', component: Overview },
        ...routesList,
    ] },
    { path: '*', redirect: '/' },
];
