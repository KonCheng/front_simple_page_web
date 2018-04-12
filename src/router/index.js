import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FirstComponent from '@/components/FirstComponent'
import UserComponent from '@/components/UserComponent'
import RankComponent from '@/components/RankComponent'
import BookComponent from '@/components/BookComponent'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/first',
      name: 'FirstComponent',
      component: FirstComponent,
      meta:{
        title:'FirstComponent'
      }
    },
    {
      path: '/user/:id',
      name: 'UserComponent',
      component: UserComponent
    }, {
      path: '/rank',
      name: 'RankComponent',
      component: RankComponent
    }, {
      path: '/book',
      name: 'BookComponent',
      component: BookComponent
    }

  ]
})
