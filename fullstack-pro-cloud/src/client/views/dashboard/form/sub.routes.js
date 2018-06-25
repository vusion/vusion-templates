import Wrapper from '@/utils/u-wrapper.vue';
import Basic from './basic.vue';
import Steps from './steps.vue';

export default {
    path: 'form',
    component: Wrapper,
    children: [
        { path: '', redirect: 'basic' },
        { path: 'basic', component: Basic },
        { path: 'steps', component: Steps },
    ],
};
