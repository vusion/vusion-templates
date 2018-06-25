import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import * as Components from 'library';
import { installComponents } from 'vusion-utils';
installComponents(Components, Vue);

import { init } from './init';
init(Vue, VueRouter);
