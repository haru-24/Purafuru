<template>
  <div>
    <div v-if="$mq === 'lg'">
      <div v-if="individual_page_data">
        <img
          v-if="individual_page_data.image"
          :src="individual_page_data.image"
          class="w-full h-400"
        />
        <div v-else class="w-full h-400 flex items-center">
          <p class="text-center text-3xl font-bold">画像なし</p>
        </div>
      </div>
    </div>
    <!-- レスポンシブ対応 -->

    <div v-if="$mq === 'sm'">
      <div v-if="individual_page_data">
        <div
          v-if="individual_page_data.image"
          class="w-full flex justify-center"
        >
          <img :src="individual_page_data.image" class="h-64" />
        </div>

        <div v-else class="w-full flex items-center">
          <p class="text-center text-3xl font-bold">画像なし</p>
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
    individual_page_data: {
      type: Object as PropType<Infomation>,
      default: () => {},
    },
  },
})
</script>

<style scoped>
.h-400 {
  height: 400px;
}
</style>
