<template>
  <div>
    <Navbar />
    <HomeTitle />
    <HomeSubTitle />
    <SerchBar class="mt-10" />
    <HomeCarousel class="mt-16" />
  </div>
</template>

<script>
import SerchBar from '../components/shared/SerchBar.vue'
import Navbar from '@/components/shared/Navbar.vue'
import HomeTitle from '@/components/pages/home/HomeTitle.vue'
import HomeCarousel from '@/components/pages/home/HomeCarousel.vue'
import HomeSubTitle from '@/components/pages/home/HomeSubTitle.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    HomeTitle,
    SerchBar,
    HomeCarousel,
    HomeSubTitle,
  },
}
</script>
