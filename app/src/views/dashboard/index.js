import Vue from 'vue';

// import VueRouter from 'vue-router';
// Vue.use(VueRouter);

import * as Components from 'library';
import { installComponents } from 'vusion-utils';

installComponents(Components, Vue);

import Index from './index.vue';
new Vue(Index).$mount('#app');
