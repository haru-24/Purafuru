<template>
  <div>
    <div
      v-for="(infodata, index) in infodatas"
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
          <div class="bg-white h-24 w-40 mr-3 inline-block">画像</div>
        </div>
      </nuxt-link>
    </div>

    <div class="flex justify-center"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: ['infodatas'],
})
</script>

<style scoped></style>
