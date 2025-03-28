import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Register',
    component: () => import('@/component/userSelection.vue'),
  },
  {
    path: '/testing',
    name: 'Tester',
    component: () => import('@/component/test.vue'),
  },
]

let router = createRouter({
  history: createWebHistory('/'),
  routes,
})

export default router
