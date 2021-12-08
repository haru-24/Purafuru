<template>
  <div>
    <div v-if="$mq === 'lg'">
      <div v-if="!user_favorite_page_datas">ローディング中</div>
      <div v-else>
        <div
          v-for="(user_favorite_page_data, index) in user_favorite_page_datas"
          :key="index"
          class="mt-5 mb-5"
        >
          <nuxt-link
            tag="div"
            :to="{ path: 'information/page?id=' + user_favorite_page_data.id }"
            class="flex justify-center cursor-pointer"
          >
            <div
              class="
                bg-gray-200
                w-5/6
                h-32
                rounded-md
                shadow-md
                flex
                justify-between
              "
            >
              <div class="mt-3 w-1/3">
                <span class="ml-3">{{
                  user_favorite_page_data.posted_at
                }}</span>
                <span class="ml-3">{{
                  user_favorite_page_data.prefecture
                }}</span>
                <span class="ml-3">{{
                  user_favorite_page_data.post_user
                }}</span>
                <p class="text-3xl font-semibold ml-3 mt-7">
                  {{ user_favorite_page_data.place_name }}
                </p>
              </div>
              <div class="mt-5 w-1/3">
                <p>住所</p>
                <p class="ml-3">{{ user_favorite_page_data.post_number }}</p>
                <p class="ml-3">{{ user_favorite_page_data.address }}</p>
              </div>
              <div class="flex items-end mb-3">
                <div class="inline-block">
                  <div class="mr-3">
                    <span class="material-icons text-3xl">
                      favorite_border
                    </span>
                    <span class="text-2xl font-medium"
                      >{{ user_favorite_page_data.favorites }}
                    </span>
                  </div>
                </div>
                <div class="bg-white h-24 w-40 mr-3 inline-block">
                  <img
                    v-if="user_favorite_page_data.image"
                    :src="user_favorite_page_data.image"
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
              </div>
            </div>
          </nuxt-link>
          <div class="flex justify-center"></div>
        </div>
      </div>
    </div>

    <!-- レスポンシブ -->
    <div v-if="$mq === 'sm'">
      <div v-if="!user_favorite_page_datas">ローディング中</div>
      <div v-else>
        <div
          v-for="(user_favorite_page_data, index) in user_favorite_page_datas"
          :key="index"
        >
          <div class="flex justify-center">
            <nuxt-link
              tag="div"
              :to="{
                path: 'information/page?id=' + user_favorite_page_data.id,
              }"
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
                  {{ user_favorite_page_data.place_name }}
                </p>
                <p class="ml-3 text-xs">
                  {{ user_favorite_page_data.post_number }}
                </p>
                <p class="ml-3 text-xs">
                  {{ user_favorite_page_data.address }}
                </p>
              </div>

              <div class="flex items-end mb-2 w-2/5">
                <div class="inline-block mr-1">
                  <div class="">
                    <span class="material-icons"> favorite_border </span>
                    <span class="font-medium">{{
                      user_favorite_page_data.favorites
                    }}</span>
                  </div>
                </div>
                <img
                  v-if="user_favorite_page_data.image"
                  :src="user_favorite_page_data.image"
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
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { Infomation } from '@/types/types'

export default defineComponent({
  props: {
    user_favorite_page_datas: {
      type: Array as PropType<Infomation[]>,
    },
  },
})
</script>
