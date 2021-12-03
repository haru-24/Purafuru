import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _50c0c198 = () => interopDefault(import('../pages/edit.vue' /* webpackChunkName: "pages/edit" */))
const _5a92636a = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _39c5e7c9 = () => interopDefault(import('../pages/mypage.vue' /* webpackChunkName: "pages/mypage" */))
const _1e62b12e = () => interopDefault(import('../pages/post.vue' /* webpackChunkName: "pages/post" */))
const _74bcba9e = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _22ba43ad = () => interopDefault(import('../pages/information/_page.vue' /* webpackChunkName: "pages/information/_page" */))
const _79131a6e = () => interopDefault(import('../pages/search/_search.vue' /* webpackChunkName: "pages/search/_search" */))
const _090f2b34 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _50c0c198,
    name: "edit"
  }, {
    path: "/login",
    component: _5a92636a,
    name: "login"
  }, {
    path: "/mypage",
    component: _39c5e7c9,
    name: "mypage"
  }, {
    path: "/post",
    component: _1e62b12e,
    name: "post"
  }, {
    path: "/register",
    component: _74bcba9e,
    name: "register"
  }, {
    path: "/information/:page?",
    component: _22ba43ad,
    name: "information-page"
  }, {
    path: "/search/:search?",
    component: _79131a6e,
    name: "search-search"
  }, {
    path: "/",
    component: _090f2b34,
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
