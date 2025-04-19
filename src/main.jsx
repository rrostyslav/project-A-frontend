Object.defineProperty(exports, '__esModule', { value: true })
var solid_query_1 = require('@tanstack/solid-query')
var solid_router_1 = require('@tanstack/solid-router')
var web_1 = require('solid-js/web')
var routeTree_gen_1 = require('./routeTree.gen')
require('./styles.css')
var queryClient = new solid_query_1.QueryClient()
// Set up a Router instance
var router = (0, solid_router_1.createRouter)({
  routeTree: routeTree_gen_1.routeTree,
  defaultPreload: 'intent',
  defaultStaleTime: 5000,
  scrollRestoration: true,
})
var App = () => (
  <solid_query_1.QueryClientProvider client={queryClient}>
    <solid_router_1.RouterProvider router={router} />
  </solid_query_1.QueryClientProvider>
)
var rootElement = document.getElementById('app')
if (!rootElement.innerHTML) {
  ;(0, web_1.render)(() => <App />, rootElement)
}
