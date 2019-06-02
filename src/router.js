import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Login from './views/Login/Login.vue'
import Dashboard from './views/Dashboard/Dashboard.vue'
import Device from './views/Device/Device.vue'
import User from './views/User/User.vue'
import Register from './views/Register/Register.vue'
import DeviceView from './views/Device/DeviceView.vue'
import DeviceUpdate from './views/Device/DeviceUpdate.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/dashboard'
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        guest: true
      }
    },
    {
      path: '/signup',
      name: 'register',
      component: Register,
      meta: {
        guest: true
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: User,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/devices/add',
      name: 'device',
      component: Device,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/devices/view/:id',
      name: 'deviceId',
      component: DeviceView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/devices/update/:id',
      name: 'updateDevice',
      component: DeviceUpdate,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/devices/delete/:id',
      name: 'deleteDevice',
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        return import(/* webpackChunkName: "about" */ './views/About.vue')
      }
    }
  ]
})
