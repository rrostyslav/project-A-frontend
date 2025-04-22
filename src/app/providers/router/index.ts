import { createRouter, createWebHistory } from 'vue-router'
import { ROUTES } from '@/shared/types'
import { DefaultLayout } from '@/shared/ui/layouts'

const GreetingPage = () => import('@/pages/greeting').then(({ GreetingPage }) => GreetingPage)
const NotFoundPage = () => import('@/pages/not-found').then(({ NotFoundPage }) => NotFoundPage)

const routes = [
  {
    path: ROUTES.GREETING,
    name: 'greeting',
    component: GreetingPage,
    meta: { layout: DefaultLayout },
  },
  {
    path: ROUTES.NOT_FOUND,
    name: 'not-found',
    component: NotFoundPage,
  },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
