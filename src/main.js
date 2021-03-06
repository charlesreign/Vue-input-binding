import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router'
import Routes from './router/router'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  routes:Routes,
  mode:'history'
})

//custom directive
// Vue.directive('rainbow',{
//   bind(el,binding,vnode){
//     el.style.color = "#"+Math.random().toString().slice(2,8)
//   }
// })

// Vue.directive('theme',{
//   bind(el,binding,vnode){
//     if(binding.value == 'dark'){
//       el.style.backgroundColor = "#"+Math.random().toString().slice(2,8)
//     }
    
//   }
// })

//Filters
// Vue.filter('to-uppercase',function (value) {
//   return value.toUpperCase()
// })

// Vue.filter('snippet', function (value) {
//   return value.slice(0,100) + '...'
// })

new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})
