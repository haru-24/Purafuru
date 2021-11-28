<template>
  <div>
    <div
      v-for="(infodata, index) in all_info_datas"
      :key="index"
      class="flex justify-center"
    >
      <nuxt-link
        tag="div"
        :to="{ path: 'information/page?id=' + infodata.id }"
        class="
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
        <div class="mt-2 w-1/3">
          <p>郵便番号</p>
          <p class="ml-3">{{ infodata.post_number }}</p>
          <p>住所</p>
          <p class="ml-3">{{ infodata.address }}</p>
        </div>
        <div class="flex items-end mb-3">
          <div class="inline-block">
            <div class="mr-3">
              <span class="material-icons text-3xl"> favorite_border </span>
              <span class="text-2xl font-medium">{{ infodata.favorites }}</span>
            </div>
          </div>
          <img
            :src="fetchStorage(infodata.image)"
            class="bg-white h-24 w-40 mr-3 inline-block"
          />{{ fetchStorage(infodata.image) }}
        </div>
      </nuxt-link>
    </div>

    <div class="flex justify-center"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { getStorage, ref, getDownloadURL } from 'firebase/storage'
import { app } from '@/plugins/firebase'
import { Infomation } from '@/types/types'

export default defineComponent({
  props: {
    all_info_datas: {
      type: Array as PropType<Infomation[]>,
      defult: () => [],
    },
  },

  setup() {
    const fetchStorage = async (imageUrl: string) => {
      const storage = getStorage(app)
      const result = await getDownloadURL(ref(storage, imageUrl))

      console.log(result)
    }

    return { fetchStorage }
  },
})
</script>

<style scoped></style>
