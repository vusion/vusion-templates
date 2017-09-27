import Vue from 'vue';
import { installComponents } from './utils';

import * as CloudUI from 'cloud-ui.vusion/theme-dark';
delete CloudUI.default;

installComponents(CloudUI, Vue);
