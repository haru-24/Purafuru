<template>
  <div>
    <Navbar />
    <HomeTitle />
    <HomeSubTitle class="-mt-4" />
    <SerchBar class="" />
    <div class="bg-img"></div>
    <div v-if="!getInfodatas" class="flex justify-center mt-44">
      <div
        class="animate-spin h-10 w-10 border-4 border-green-500 rounded-full"
        style="border-top-color: transparent"
      ></div>
    </div>

    <div v-else>
      <HomeCarousel class="" :fetch_all_info_datas="getInfodatas" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import SerchBar from '../components/shared/SerchBar.vue'
import Navbar from '@/components/shared/Navbar.vue'
import HomeTitle from '@/components/pages/home/HomeTitle.vue'
import HomeCarousel from '@/components/pages/home/HomeCarousel.vue'
import HomeSubTitle from '@/components/pages/home/HomeSubTitle.vue'
import { allInformation } from '@/api/get'
import { Infomation } from '@/types/types'

export default defineComponent({
  name: 'Home',
  components: {
    Navbar,
    HomeTitle,
    SerchBar,
    HomeCarousel,
    HomeSubTitle,
  },

  setup() {
    // 投稿情報をAPIでGET
    const getInfodatas = ref<Infomation[] | null | undefined>()
    // 全データ取得
    const allSearhData = () => {
      allInformation('1').then((result) => {
        getInfodatas.value = result?.dbInfoData
      })
    }
    allSearhData()
    return {
      getInfodatas,
    }
  },
})
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
