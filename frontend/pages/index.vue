<template>
  <div>
    <Navbar />
    <HomeTitle />
    <HomeSerchBar class="mt-10" />
    <HomeCarousel class="mt-16" />
  </div>
</template>

<script>
import Navbar from '@/components/shared/Navbar.vue'
import HomeTitle from '@/components/pages/home/HomeTitle.vue'
import HomeSerchBar from '@/components/pages/home/HomeSerchBar.vue'
import HomeCarousel from '@/components/pages/home/HomeCarousel.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    HomeTitle,
    HomeSerchBar,
    HomeCarousel,
  },
}
</script>
