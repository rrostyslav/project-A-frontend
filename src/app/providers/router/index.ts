import { createRouter, createWebHistory } from 'vue-router'
import { ROUTES } from '@/shared/types'
import { GuestLayout } from '@/shared/ui/layouts'

const LoginPage = () => import('@/pages/login').then((m) => m.Login)
const SignupPage = () => import('@/pages/signup').then((m) => m.Signup)

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: ROUTES.LOGIN },
    {
      path: ROUTES.LOGIN,
      name: 'login',
      component: LoginPage,
      meta: { layout: GuestLayout },
    },
    {
      path: ROUTES.SIGNUP,
      name: 'signup',
      component: SignupPage,
      meta: { layout: GuestLayout },
    },
    { path: '/:pathMatch(.*)*', redirect: ROUTES.LOGIN },
  ],
})
