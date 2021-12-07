<template>
  <div>
    <p class="font-extrabold text-2xl ml-5">新着投稿</p>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide
        v-for="(infoData, index) in fetch_all_info_datas"
        :key="index"
        :style="{ backgroundImage: `url(${infoData.image})` }"
      >
        <nuxt-link
          tag="div"
          :to="{ path: 'information/page?id=' + infoData.id }"
          class="cursor-pointer text-gray-200"
        >
          <div>
            <div class="mt-5 text-center font-extrabold text-xl">
              <p class="">
                {{ infoData.posted_at }}
              </p>
              <p class="">
                {{ infoData.prefecture }}
              </p>
            </div>

            <p class="mt-8 text-4xl font-extrabold">
              {{ infoData.place_name }}
            </p>
          </div>
        </nuxt-link>
      </swiper-slide>

      <div slot="button-prev" class="swiper-button-prev"></div>
      <div slot="button-next" class="swiper-button-next"></div>
      <div
        slot="pagination"
        class="swiper-pagination swiper-pagination-white"
      ></div>
    </swiper>
  </div>
</template>

<script lang="ts">
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import { defineComponent, PropType } from '@nuxtjs/composition-api'
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
  props: {
    fetch_all_info_datas: {
      type: Array as PropType<Infomation[]>,
      defult: () => [],
    },
  },

  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
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
}

.swiper-button-prev,
.swiper-button-next {
  color: rgb(98, 204, 165);
}

.swiper-button-prev,
.swiper-button-next:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
</style>
