import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import '../core/library';
import Index from './index.vue';

new Vue(Index).$mount('#app');
