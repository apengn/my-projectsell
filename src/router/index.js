import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource';

Vue.use(Router);
Vue.use(VueResource);
import goods from '../components/goods/goods.vue'
import seller from '../components/seller/seller.vue'
import ratings from '../components/ratings/ratings.vue'
const routes = [{
  path: '/ratings',
  name: 'ratings',
  component: ratings
}, {
  path: '/goods',
  name: 'goods',
  component: goods
}, {
  path: '/seller',
  name: 'seller',
  component: seller
}]
export default new Router({
  routes
})
