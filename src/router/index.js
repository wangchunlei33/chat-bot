import Vue from 'vue'
import Router from 'vue-router'
import ChatBot from '@/components/ChatBot'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ChatBot',
      component: ChatBot
    }
  ]
})
