import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/company/',
      name: 'company',
      component: () =>
        import ('./views/Company.vue')
    },
    {
      path: '/production/',
      name: 'production',
      component: () =>
        import ('./views/Production.vue')
    },
    {
      path: '/contacts/',
      name: 'contacts',
      component: () =>
        import ('./views/Contacts.vue')
    },
    {
      path: '/sales/',
      name: 'sales',
      component: () =>
        import ('./views/Sales.vue')
    },
    {
      path: '/sertificates/',
      name: 'sertificates',
      component: () =>
        import ('./views/Sertificates.vue')
    },
    {
      path: '/laboratory-tests/',
      name: 'laboratory-tests',
      component: () =>
        import ('./views/LaboratoryTests.vue')
    },
    {
      path: '/how-does-it-work/',
      name: 'how-does-it-work',
      component: () =>
        import ('./views/HowDoesItWork.vue')
    },
    {
      path: '/clients/',
      name: 'clients',
      component: () =>
        import ('./views/Clients.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/AboutView.vue')
    }
  ]
})

export default router
