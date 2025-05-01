export const ROUTES = {
  LOGIN: '/login',
  SIGNUP: '/signup',
  NOT_FOUND: '/:pathMatch(.*)*',
}

export type RouteNames = (typeof ROUTES)[keyof typeof ROUTES]
