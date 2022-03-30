import Vue from 'vue';
import VeeValidate from 'vee-validate';
import vBlur from "v-blur";

import { store } from './_store';
import { router } from './_helpers';
import App from './app/App';
import './firebase.config';


Vue.use(VeeValidate);
Vue.use(vBlur);


new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
