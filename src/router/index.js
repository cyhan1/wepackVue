import Router from 'vue-router';
import Vue from 'vue';


Vue.use(Router);

export default new Router({
    routes: [
        { path: '/', name: 'index', component: resolve => (require(['@/components/index'], resolve)) }
       
    ]
})