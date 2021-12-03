export const NuxtLogo = () => import('../../components/NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const SharedNavbar = () => import('../../components/shared/Navbar.vue' /* webpackChunkName: "components/shared-navbar" */).then(c => wrapFunctional(c.default || c))
export const SharedPagenationBtn = () => import('../../components/shared/PagenationBtn.vue' /* webpackChunkName: "components/shared-pagenation-btn" */).then(c => wrapFunctional(c.default || c))
export const SharedSerchBar = () => import('../../components/shared/SerchBar.vue' /* webpackChunkName: "components/shared-serch-bar" */).then(c => wrapFunctional(c.default || c))
export const PagesHomeCarousel = () => import('../../components/pages/home/HomeCarousel.vue' /* webpackChunkName: "components/pages-home-carousel" */).then(c => wrapFunctional(c.default || c))
export const PagesHomeSubTitle = () => import('../../components/pages/home/HomeSubTitle.vue' /* webpackChunkName: "components/pages-home-sub-title" */).then(c => wrapFunctional(c.default || c))
export const PagesHomeTitle = () => import('../../components/pages/home/HomeTitle.vue' /* webpackChunkName: "components/pages-home-title" */).then(c => wrapFunctional(c.default || c))
export const PagesLogin = () => import('../../components/pages/login/Login.vue' /* webpackChunkName: "components/pages-login" */).then(c => wrapFunctional(c.default || c))
export const PagesMypageMyPosts = () => import('../../components/pages/mypage/MyPosts.vue' /* webpackChunkName: "components/pages-mypage-my-posts" */).then(c => wrapFunctional(c.default || c))
export const PagesMypageUserData = () => import('../../components/pages/mypage/UserData.vue' /* webpackChunkName: "components/pages-mypage-user-data" */).then(c => wrapFunctional(c.default || c))
export const PagesPost = () => import('../../components/pages/post/Post.vue' /* webpackChunkName: "components/pages-post" */).then(c => wrapFunctional(c.default || c))
export const PagesInformationFavorit = () => import('../../components/pages/information/Favorit.vue' /* webpackChunkName: "components/pages-information-favorit" */).then(c => wrapFunctional(c.default || c))
export const PagesInformationImageView = () => import('../../components/pages/information/ImageView.vue' /* webpackChunkName: "components/pages-information-image-view" */).then(c => wrapFunctional(c.default || c))
export const PagesInformationInformations = () => import('../../components/pages/information/Informations.vue' /* webpackChunkName: "components/pages-information-informations" */).then(c => wrapFunctional(c.default || c))
export const PagesInformationReview = () => import('../../components/pages/information/Review.vue' /* webpackChunkName: "components/pages-information-review" */).then(c => wrapFunctional(c.default || c))
export const PagesRegister = () => import('../../components/pages/register/Register.vue' /* webpackChunkName: "components/pages-register" */).then(c => wrapFunctional(c.default || c))
export const PagesEditInputEdit = () => import('../../components/pages/edit/InputEdit.vue' /* webpackChunkName: "components/pages-edit-input-edit" */).then(c => wrapFunctional(c.default || c))
export const PagesEditUpdateBtn = () => import('../../components/pages/edit/UpdateBtn.vue' /* webpackChunkName: "components/pages-edit-update-btn" */).then(c => wrapFunctional(c.default || c))
export const PagesSearchResult = () => import('../../components/pages/search/SearchResult.vue' /* webpackChunkName: "components/pages-search-result" */).then(c => wrapFunctional(c.default || c))
export const PagesSearchSort = () => import('../../components/pages/search/SearchSort.vue' /* webpackChunkName: "components/pages-search-sort" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
