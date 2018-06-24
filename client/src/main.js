// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import { sync } from 'vuex-router-sync';

import 'vuetify/dist/vuetify.min.css';
import Vuetify from 'vuetify';
import store from '@/store/store';
import VueYoutubeEmbed from 'vue-youtube-embed';
// Helpers
import colors from 'vuetify/es5/util/colors';

Vue.config.productionTip = false;

Vue.use(VueYoutubeEmbed);
Vue.use(Vuetify, {
    theme: {
        primary: colors.red.darken1, // #E53935
        secondary: colors.red.lighten4, // #FFCDD2
        accent: colors.indigo.base // #3F51B5
    }
});

sync(store, router);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
});
