import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home'
import AboutView from '../views/About'
import PersonsView from '../views/Persons'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/persons',
    name: 'persons',
    component: PersonsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active'
})

export default router
