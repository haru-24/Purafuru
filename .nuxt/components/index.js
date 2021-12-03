export { default as NuxtLogo } from '../../components/NuxtLogo.vue'
export { default as SharedNavbar } from '../../components/shared/Navbar.vue'
export { default as SharedPagenationBtn } from '../../components/shared/PagenationBtn.vue'
export { default as SharedSerchBar } from '../../components/shared/SerchBar.vue'
export { default as PagesHomeCarousel } from '../../components/pages/home/HomeCarousel.vue'
export { default as PagesHomeSubTitle } from '../../components/pages/home/HomeSubTitle.vue'
export { default as PagesHomeTitle } from '../../components/pages/home/HomeTitle.vue'
export { default as PagesEditInputEdit } from '../../components/pages/edit/InputEdit.vue'
export { default as PagesEditUpdateBtn } from '../../components/pages/edit/UpdateBtn.vue'
export { default as PagesInformationFavorit } from '../../components/pages/information/Favorit.vue'
export { default as PagesInformationImageView } from '../../components/pages/information/ImageView.vue'
export { default as PagesInformationInformations } from '../../components/pages/information/Informations.vue'
export { default as PagesInformationReview } from '../../components/pages/information/Review.vue'
export { default as PagesMypageMyPosts } from '../../components/pages/mypage/MyPosts.vue'
export { default as PagesMypageUserData } from '../../components/pages/mypage/UserData.vue'
export { default as PagesPost } from '../../components/pages/post/Post.vue'
export { default as PagesLogin } from '../../components/pages/login/Login.vue'
export { default as PagesRegister } from '../../components/pages/register/Register.vue'
export { default as PagesSearchResult } from '../../components/pages/search/SearchResult.vue'
export { default as PagesSearchSort } from '../../components/pages/search/SearchSort.vue'

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
