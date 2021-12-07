<template>
  <div class="flex flex-col min-h-screen">
    <div class="flex-grow">
      <Navbar />
      <HomeTitle />
      <HomeSubTitle class="-mt-4" />
      <SerchBar class="" />
    </div>

    <footer v-if="$mq === 'lg'">
      <div class="bg-img"></div>
      <div v-if="!getInfodatas" class="flex justify-center mt-64">
        <div
          class="
            animate-spin
            h-10
            w-10
            border-4 border-green-500
            rounded-full
            -mt-32
          "
          style="border-top-color: transparent"
        ></div>
      </div>

      <div v-else>
        <HomeCarousel
          v-if="$mq === 'lg'"
          class=""
          :fetch_all_info_datas="getInfodatas"
        />
      </div>
    </footer>
    <!-- レスポンシブ対応 -->
    <footer v-if="$mq === 'sm'">
      <div class="bg-img"></div>
      <div v-if="!getInfodatas" class="flex justify-center mt-64">
        <div
          class="
            animate-spin
            h-10
            w-10
            border-4 border-green-500
            rounded-full
            -mt-32
          "
          style="border-top-color: transparent"
        ></div>
      </div>

      <div v-else>
        <ResponsiveCarousel
          v-if="$mq === 'sm'"
          :fetch_all_info_datas="getInfodatas"
        />
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import SerchBar from '../components/shared/SerchBar.vue'
import Navbar from '@/components/shared/Navbar.vue'
import HomeTitle from '@/components/pages/home/HomeTitle.vue'
import HomeCarousel from '@/components/pages/home/HomeCarousel.vue'
import HomeSubTitle from '@/components/pages/home/HomeSubTitle.vue'
import ResponsiveCarousel from '@/components/pages/home/ResponsiveCarousel.vue'
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
    ResponsiveCarousel,
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
  height: 150px;
  width: 100%;
  padding: 100px 0 50px 0;
  background-image: url(./assets/images/_e_town0057_s1024_town0057_11.jpg);
  margin-bottom: -32px;
  opacity: 0.5;
}
</style>
