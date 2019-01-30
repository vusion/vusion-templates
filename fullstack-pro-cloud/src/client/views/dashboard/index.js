import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import * as Components from 'library';
import { install } from 'vusion-utils';
install(Components, Vue);

import { init } from './init';
init(Vue, VueRouter);
