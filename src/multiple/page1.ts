import Vue from 'vue';
import App from '@/App.vue';
import Router from 'vue-router';

import Testpage from '@/views/Test1.vue';

Vue.use(Router);
const router = new Router({
    routes: [{
        path: '/',
        name: 'Testpage1',
        component: Testpage,
    }],
});

Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');
