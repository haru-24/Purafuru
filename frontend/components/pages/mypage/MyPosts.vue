<template>
  <div>
    <div v-if="!user_post_info_datas">ローディング中</div>
    <div v-else>
      <div
        v-for="(user_post_info_data, index) in user_post_info_datas"
        :key="index"
      >
        <div class="flex justify-center">
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
            <div class="mt-3">
              <span class="ml-3">{{ user_post_info_data.posted_at }}</span>
              <span class="ml-3">{{ user_post_info_data.prefecture }}</span>
              <span class="ml-3">{{ user_post_info_data.post_user }}</span>
              <p class="text-3xl font-semibold ml-3 mt-7">
                {{ user_post_info_data.place_name }}
              </p>
            </div>
            <div class="mt-5">
              <p>郵便番号</p>
              <p class="ml-3">{{ user_post_info_data.post_number }}</p>
              <p>住所</p>
              <p class="ml-3">{{ user_post_info_data.address }}</p>
            </div>
            <div class="flex items-end mb-3">
              <div class="inline-block">
                <div class="mr-3">
                  <span class="material-icons text-3xl"> favorite_border </span>
                  <span class="text-2xl font-medium">{{
                    user_post_info_data.favorites
                  }}</span>
                </div>
              </div>
              <div class="bg-white h-24 w-40 mr-3 inline-block">画像</div>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <div class="w-5/6 flex justify-end">
            <button class="mr-3">削除</button>
            <button class="mr-5">編集</button>
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
    user_post_info_datas: {
      type: Array as PropType<Infomation[]>,
    },
  },
})
</script>
