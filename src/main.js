import Vue from 'vue'
import Ze from './Ze.vue'
import router from './router'

Vue.prototype.$axios = require('axios');
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(Ze),
}).$mount('#app')