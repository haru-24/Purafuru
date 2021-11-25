<template>
  <div class="">
    <div v-if="individual_page_data">
      <div class="flex justify-center">
        <div>
          <p class="font-bold text-3xl">お気に入り</p>
        </div>

        <div class="mt-1">
          <span class="material-icons text-4xl"> favorite_border </span>
        </div>
      </div>
      <div class="text-3xl font-bold flex justify-center">
        <p>{{ individual_page_data.favorites }}</p>
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
