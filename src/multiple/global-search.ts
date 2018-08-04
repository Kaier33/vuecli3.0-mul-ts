import Vue from 'vue';
import App from '@/App.vue';
import Router from 'vue-router';

import filters from '@/assets/ts/filters';

Object.keys(filters).forEach((key: string) => {
    Vue.filter(key, (filters as any)[key]);
});

import GlobalSearch from '@/views/global-search/GlobalSearch.vue';

Vue.use(Router);
const router = new Router({
    routes: [{
        path: '/',
        name: 'GlobalSearch',
        component: GlobalSearch,
    }],
});

Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');

