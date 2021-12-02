<template>
  <div>
    <div v-if="!user_post_info_datas">ローディング中</div>
    <div v-else>
      <div
        v-for="(user_post_info_data, index) in user_post_info_datas"
        :key="index"
      >
        <nuxt-link
          tag="div"
          :to="{ path: 'information/page?id=' + user_post_info_data.id }"
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
              <div class="bg-white h-24 w-40 mr-3 inline-block">
                <img
                  v-if="user_post_info_data.image"
                  :src="user_post_info_data.image"
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
        <div class="flex justify-center">
          <div class="w-5/6 flex justify-end">
            <button
              class="mr-3"
              @click="deleteInfoBtnClick(user_post_info_data.id)"
            >
              削除
            </button>
            <nuxt-link
              tag="button"
              :to="{ path: '/edit', query: { id: user_post_info_data.id } }"
              class="mr-5"
              >編集</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { Infomation } from '@/types/types'
import { deleteInformation } from '@/api/delete'

export default defineComponent({
  props: {
    user_post_info_datas: {
      type: Array as PropType<Infomation[]>,
    },
  },
  setup() {
    const deleteInfoBtnClick = (id: number) => {
      deleteInformation(id)
    }
    return {
      deleteInfoBtnClick,
    }
  },
})
</script>
