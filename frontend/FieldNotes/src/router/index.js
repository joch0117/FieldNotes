import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../pages/HomePage.vue'
import LoginPage from '../pages/LoginPage.vue'
import RegisterPage from '../pages/RegisterPage.vue'
import DashboardPage from '../pages/DashboardPage.vue'
import CreateNotePage from '../pages/CreateNotePage.vue'
import NoteDetailPage from '../pages/NoteDetailPage.vue'
import EditNotePage from '../pages/EditNotePage.vue'
import EditAccountPage from '../pages/EditAccountPage.vue'
import CguPage from '../pages/CguPage.vue'
import { sessionState } from '../stores/sessionStore'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/login', name: 'login', component: LoginPage, meta: { guestOnly: true } },
  { path: '/register', name: 'register', component: RegisterPage, meta: { guestOnly: true } },
  { path: '/dashboard', name: 'dashboard', component: DashboardPage, meta: { requiresAuth: true } },
  { path: '/notes/new', name: 'newNote', component: CreateNotePage, meta: { requiresAuth: true } },
  { path: '/notes/:id', name: 'noteDetail', component: NoteDetailPage, props: true, meta: { requiresAuth: true } },
  { path: '/notes/:id/edit', name: 'editNote', component: EditNotePage, props: true, meta: { requiresAuth: true } },
  { path: '/account', name: 'editAccount', component: EditAccountPage, meta: { requiresAuth: true } },
  { path: '/cgu', name: 'cgu', component: CguPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to) => {
  if (to.meta.requiresAuth && !sessionState.isAuthenticated) {
    return { name: 'login' }
  }

  if (to.meta.guestOnly && sessionState.isAuthenticated) {
    return { name: 'dashboard' }
  }

  return true
})

export default router
