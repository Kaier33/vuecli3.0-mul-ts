// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from '@/App.vue';
import Router from 'vue-router';

import Encyclopedia from '@/views/encyclopedia/Encyclopedia.vue';

Vue.use(Router);

const router = new Router({
    routes: [{
        path: '/',
        name: 'Encyclopedia',
        component: Encyclopedia,
    }],
});

Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app'); 
