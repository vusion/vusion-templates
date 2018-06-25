import Wrapper from '@/utils/u-wrapper.vue';
import Table from './table.vue';
import Advanced from './advanced.vue';
import Sub1 from './sub1.vue';
import Sub2 from './sub2.vue';

export default {
    path: 'list',
    component: Wrapper,
    children: [
        { path: '', redirect: 'table' },
        { path: 'table', component: Table },
        { path: 'advanced', component: Advanced, children: [
            { path: '', redirect: 'sub1' },
            { path: 'sub1', component: Sub1 },
            { path: 'sub2', component: Sub2 },
        ] },
    ],
};
