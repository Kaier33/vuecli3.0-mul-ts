import Vue from 'vue';
import App from '@/App.vue';
import Router from 'vue-router';

import ScreeningResults from '@/views/screening-results/ScreeningResults.vue';

Vue.use(Router);
const router = new Router({
    routes: [{
        path: '/',
        name: 'ScreeningResults',
        component: ScreeningResults,
    }],
});

Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');
