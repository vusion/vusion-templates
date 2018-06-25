/**
 * @TRAP: 使用 DllPlugin 有时会报错`Cannot find module "dll-reference vendor"`
 * 目前通过拆分出一份 init 文件来处理，暂时没有更好的解决方案
 * https://github.com/webpack/webpack/issues/5478
 */
import routes from './routes';

export const init = (Vue, VueRouter) => {
    new Vue({
        el: '#app',
        router: new VueRouter({
            routes,
        }),
    });
};
