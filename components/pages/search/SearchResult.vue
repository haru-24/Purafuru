<template>
  <div>
    <div v-if="$mq === 'lg'">
      <div
        v-for="(infodata, index) in all_info_datas"
        :key="index"
        class="flex justify-center"
      >
        <nuxt-link
          tag="div"
          :to="{ path: 'information/page?id=' + infodata.id }"
          class="
            cursor-pointer
            bg-gray-100
            w-5/6
            h-32
            rounded-md
            shadow-md
            flex
            justify-between
            transform
            motion-reduce:transform-none
            hover:-translate-y-1 hover:scale-103
            transition
            ease-in-out
            duration-300
            mt-8
          "
        >
          <div class="mt-3 w-1/3">
            <span class="ml-3">{{ infodata.posted_at }}</span>
            <span class="ml-3">{{ infodata.prefecture }}</span>
            <span class="ml-3">{{ infodata.post_user }}</span>
            <p class="text-2xl font-semibold ml-3 mt-4">
              {{ infodata.place_name }}
            </p>
          </div>
          <div class="mt-3 w-1/3">
            <p>住所</p>
            <p class="ml-3">{{ infodata.post_number }}</p>
            <p class="ml-3">{{ infodata.address }}</p>
          </div>
          <div class="flex items-end mb-3">
            <div class="inline-block">
              <div class="mr-3">
                <span class="material-icons text-3xl mb-2">
                  favorite_border
                </span>
                <span class="text-2xl font-medium">{{
                  infodata.favorites
                }}</span>
              </div>
            </div>
            <img
              v-if="infodata.image"
              :src="infodata.image"
              class="h-24 w-40 mr-3 inline-block"
            />
            <div
              v-else
              class="
                bg-white
                h-24
                w-40
                mr-3
                inline-block
                flex
                items-center
                text-center
              "
            >
              <p class="ml-12">画像なし</p>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>

    <!-- レスポンシブ対応 -->
    <div v-if="$mq === 'sm'">
      <div
        v-for="(infodata, index) in all_info_datas"
        :key="index"
        class="flex justify-center"
      >
        <nuxt-link
          tag="div"
          :to="{ path: 'information/page?id=' + infodata.id }"
          class="
            cursor-pointer
            bg-gray-100
            w-11/12
            h-20
            rounded-md
            shadow-md
            flex
            justify-between
            transform
            motion-reduce:transform-none
            hover:-translate-y-1 hover:scale-103
            transition
            ease-in-out
            duration-300
            mt-4
          "
        >
          <div class="w-3/5 mt-1">
            <p class="font-semibold ml-3 text-xs mt-1">
              {{ infodata.place_name }}
            </p>
            <p class="ml-3 text-xs">{{ infodata.post_number }}</p>
            <p class="ml-3 text-xs">{{ infodata.address }}</p>
          </div>

          <div class="flex items-end mb-2 w-2/5">
            <div class="inline-block mr-1">
              <div class="">
                <span class="material-icons"> favorite_border </span>
                <span class="font-medium">{{ infodata.favorites }}</span>
              </div>
            </div>
            <img
              v-if="infodata.image"
              :src="infodata.image"
              class="h-16 w-24 mr-1 inline-block"
            />
            <div
              v-else
              class="
                bg-white
                h-16
                w-24
                mr-1
                inline-block
                flex
                items-center
                text-center
              "
            >
              <p class="text-xs ml-6">画像なし</p>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { Infomation } from '@/types/types'

export default defineComponent({
  props: {
    all_info_datas: {
      type: Array as PropType<Infomation[]>,
      defult: () => [],
    },
  },
})
</script>

<style scoped></style>
