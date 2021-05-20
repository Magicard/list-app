import Form from "./components/Form";

require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'

window.Vue = Vue
Vue.use(VueRouter)

import Welcome from "./components/Welcome";
import Page from "./components/Page";
import App from "./components/App";
import Well from "./components/Well";

Vue.component('welcome', Welcome);
Vue.component('page', Page);
Vue.component('form', Form);
Vue.component('well', Well);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/home',
            name:'welcome',
            component:Welcome,
            props: {
                title: "Home sweet home."
            }

        },
        {
            path: '/info',
            name:'page',
            component:Page,
            props: {
                title: "Info",
                author : {
                    name : "Teo",
                    role : "Junior Dev",
                    code : "Broken"
                }
            }
        },
        {
            path: '/form',
            name: 'form',
            component: Form,
        },
        {
            path: '/well',
            name: 'well',
            component: Well,
        }
    ],
});

const app= new Vue({
    el: '#app',
    components: {App},
    router: router
})


