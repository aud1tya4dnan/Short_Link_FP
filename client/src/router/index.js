import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import FrontView from '../views/FrontView.vue'
import Notfound from '../views/Notfound.vue'
import Redirect from '../views/Redirect.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/dashboard/:uid',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue')
    },
    {
      path: '/frontpage',
      name: 'frontpage',
      component: FrontView
    },
    {
      path: "/:catchAll(.*)",
      name: "notfound",
      component: Notfound
    },
    {
      path: '/:slink',
      name: 'slink',
      component: Redirect
    }
  ]
})

export default router
