import Wrapper from '@/utils/u-wrapper.vue';
import Basic from './basic.vue';
import Advanced from './advanced.vue';

export default {
    path: 'detail',
    component: Wrapper,
    children: [
        { path: '', redirect: 'basic' },
        { path: 'basic', component: Basic },
        { path: 'advanced', component: Advanced },
    ],
};
