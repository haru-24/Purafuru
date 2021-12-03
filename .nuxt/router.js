import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _712fdb7f = () => interopDefault(import('../pages/edit.vue' /* webpackChunkName: "pages/edit" */))
const _7faa1d78 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _0a53b820 = () => interopDefault(import('../pages/mypage.vue' /* webpackChunkName: "pages/mypage" */))
const _3ed1cb15 = () => interopDefault(import('../pages/post.vue' /* webpackChunkName: "pages/post" */))
const _f8d91dd0 = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _33068db4 = () => interopDefault(import('../pages/information/_page.vue' /* webpackChunkName: "pages/information/_page" */))
const _6ad780d6 = () => interopDefault(import('../pages/search/_search.vue' /* webpackChunkName: "pages/search/_search" */))
const _12f963a6 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/edit",
    component: _712fdb7f,
    name: "edit"
  }, {
    path: "/login",
    component: _7faa1d78,
    name: "login"
  }, {
    path: "/mypage",
    component: _0a53b820,
    name: "mypage"
  }, {
    path: "/post",
    component: _3ed1cb15,
    name: "post"
  }, {
    path: "/register",
    component: _f8d91dd0,
    name: "register"
  }, {
    path: "/information/:page?",
    component: _33068db4,
    name: "information-page"
  }, {
    path: "/search/:search?",
    component: _6ad780d6,
    name: "search-search"
  }, {
    path: "/",
    component: _12f963a6,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
