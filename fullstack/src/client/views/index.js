import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import * as Components from 'library';
import { install } from 'vusion-utils';
install(Components, Vue);

import routes from './routes';

new Vue({
    router: new VueRouter({
        routes,
    }),
}).$mount('#app');
