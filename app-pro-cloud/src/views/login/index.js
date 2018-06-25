import Vue from 'vue';

import * as Components from 'library';
import { installComponents } from 'vusion-utils';
installComponents(Components, Vue);

import Index from './index.vue';
new Vue(Index).$mount('#app');
