import { createRouter, createWebHistory } from 'vue-router'
import TheHome from '../views/TheHome.vue'
import TheSinguuuup from '../views/TheSingup.vue'
import TheLogin from '../views/TheLogin.vue'
import TheCreatePublication from '../views/TheCreatePublication.vue'
import EspacePerso from '../views/EspacePerso.vue'
import  ModifierUser  from '../views/ModifierUser.vue'
import DeleteUser from '../views/DeleteUser.vue'
const routes = [
    {
      path: '/',
      name: 'TheHome',
      component: TheHome
    },
    {
      path: '/singup',
      name: 'TheSingup',
      component: TheSinguuuup
    },
    {
        path: '/login',
        name: 'TheLogin',
        component: TheLogin
      
      },
      {
        path: '/posts',
        name: 'TheCreatePublication',
        component: TheCreatePublication,
      },
      {
        path: '/selfSpace',
        name: 'EspacePerso',
        component: EspacePerso,
      },
    {
      path: '/ModifyUser',
      name: '  ModifierUser',
      component:   ModifierUser, 
    },
    {
      path: '/DeleteUser',
      name: 'DeleteUser',
      component:DeleteUser, 
    },
  ]

  const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
  export default router