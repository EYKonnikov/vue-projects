import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from './components/Main.vue'
import Menu from './components/Menu.vue'
import App from './App.vue'


Vue.use(VueRouter)

const routes = [
  { path: '/', component: Main },
  { path: '/menu', component: Menu }
];

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
