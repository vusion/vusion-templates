import Vue from 'vue';

import LinearProgress from './src/u-linear-progress.vue';

const Components = {
    LinearProgress,
}

window.Vue = Vue;
Object.keys(Components).forEach((key) => Vue.component(Components[key].options.name, Components[key]));

export {
    LinearProgress,
}