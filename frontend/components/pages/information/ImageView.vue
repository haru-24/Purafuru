<template>
  <div>
    <div v-if="individual_page_data">
      <img
        v-if="individual_page_data.image"
        :src="individual_page_data.image"
        class="w-11/12 h-400"
      />
      <div v-else class="w-full h-400 flex items-center">
        <p class="text-center text-3xl font-bold">画像なし</p>
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
