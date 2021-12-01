<template>
  <div>
    <p class="font-extrabold text-2xl ml-5">新着投稿</p>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide
        v-for="(getInfoData, index) in getInfodatas"
        :key="index"
        :style="{ backgroundImage: `url(${getInfoData.image})` }"
      >
        <div>
          <div>
            <div class="mt-5 text-center font-extrabold text-xl">
              <p class="">
                {{ getInfoData.posted_at }}
              </p>
              <p class="">
                {{ getInfoData.prefecture }}
              </p>
            </div>

            <p class="mt-8 text-4xl font-extrabold">
              {{ getInfoData.place_name }}
            </p>
            <p></p>
          </div>
        </div>
      </swiper-slide>

      <div slot="button-prev" class="swiper-button-prev"></div>
      <div slot="button-next" class="swiper-button-next"></div>
      <div slot="pagination" class="swiper-pagination"></div>
    </swiper>
  </div>
</template>

<script lang="ts">
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import { defineComponent, ref } from '@nuxtjs/composition-api'
import { allInformation } from '@/api/get'
import { Infomation } from '@/types/types'
export default defineComponent({
  name: 'SwiperExampleMultipleSlidesPerBiew',
  title: 'Multiple slides per view',
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
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
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        // spaceBetween: 30,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          loop: true,
        },

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
})
</script>

<style scoped>
.swiper-container {
  height: 300px;
  width: 100%;
}
.swiper-slide {
  background-size: cover;

  background-repeat: no-repeat;
  text-align: center;
  justify-content: center;

  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;

  -webkit-box-align: center;
  -ms-flex-align: center;

  border-left: 1px solid #fff;
}
</style>
