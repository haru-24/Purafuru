<template>
  <div>
    <Navbar />
    <HomeTitle />
    <HomeSubTitle class="-mt-4" />
    <SerchBar class="" />
    <div class="bg-img"></div>
    <HomeCarousel class="" />
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

<style scoped>
.bg-img {
  height: 300;
  padding: 100px 0 50px 0;
  background-image: url(./assets/images/_e_town0057_s1024_town0057_11.jpg);
  margin-bottom: -32px;
  opacity: 0.5;
}
</style>
