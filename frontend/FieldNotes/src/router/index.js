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

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/login', name: 'login', component: LoginPage },
  { path: '/register', name: 'register', component: RegisterPage },
  { path: '/dashboard', name: 'dashboard', component: DashboardPage },
  { path: '/notes/new', name: 'newNote', component: CreateNotePage },
  { path: '/notes/:id', name: 'noteDetail', component: NoteDetailPage, props: true },
  { path: '/notes/:id/edit', name: 'editNote', component: EditNotePage, props: true },
  { path: '/account', name: 'editAccount', component: EditAccountPage },
  { path: '/cgu', name: 'cgu', component: CguPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
