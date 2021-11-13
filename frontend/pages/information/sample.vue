<template>
  <div>
    <Navbar />
    <div class="flex mt-6">
      <PostInformation class="-mr-20" />
      <div class="w-1/2">
        <PostCarousel />
        <Favorit class="mt-20" />
      </div>
    </div>
    <Review class="-mt-5" />
  </div>
</template>

<script>
import Navbar from '@/components/shared/Navbar.vue'
import PostInformation from '@/components/pages/information/PostInformation.vue'
import PostCarousel from '~/components/pages/information/PostCarousel.vue'
import Favorit from '~/components/pages/information/Favorit.vue'
import Review from '~/components/pages/information/Review.vue'

export default {
  components: {
    PostInformation,
    Navbar,
    PostCarousel,
    Favorit,
    Review,
  },
}
</script>
