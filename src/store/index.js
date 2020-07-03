import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    product: 'Socks',
    details:['80% cotton', '20% polyester', 'Gender-neutral'],
    selectedVariant: 0,
    variants: [
      {
        variantId: 2234,
        variantColor:'green',
        variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
        variantQuantity:10
      },
      {
        variantId: 2235,
        variantColor:'blue',
        variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg',
        variantQuantity:0
      }
    ],
    cart: [],
    premium: true,
    name: null,
    review: null,
    rating: null,
    errors:[],
    reviews: []
  },
  actions: {
  },
  modules: {
  },
  getters,
  mutations
})
