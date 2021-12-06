<template>
  <div>
    <div class="ml-5 -mb-1">
      <button
        class="w-32 h-12 border-4 border-primary rounded-md hover:bg-gray-100"
        :class="{ push: isNewArrivalsButton }"
        @click="pushNewArrivalsButton"
      >
        新着順
      </button>
      <button
        class="
          w-32
          h-12
          border-4 border-primary
          rounded-md
          -ml-2
          hover:bg-gray-100
        "
        :class="{ push: isFavoritButton }"
        @click="pushFavoritButton"
      >
        お気に入り順
      </button>
    </div>
    <div class="border-2 border-primary"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup(_props, context) {
    const hello = ref<string>('こんにちは')
    const isNewArrivalsButton = ref<boolean>()
    const isFavoritButton = ref<boolean>()

    // 画面更新時の判定
    const currentBtnOn = () => {
      if (context.root.$route.query.sort === 'new_arrival') {
        isFavoritButton.value = false
        isNewArrivalsButton.value = true
      } else if (context.root.$route.query.sort === 'favorite') {
        isNewArrivalsButton.value = false
        isFavoritButton.value = true
      }
    }
    currentBtnOn()

    // ボタンの切り替え
    const pushNewArrivalsButton = () => {
      if (isNewArrivalsButton.value === false) {
        isNewArrivalsButton.value = true
        isFavoritButton.value = false
      }
      context.emit('new-arrival-sort')
    }

    const pushFavoritButton = () => {
      if (isFavoritButton.value === false) {
        isFavoritButton.value = true
        isNewArrivalsButton.value = false
      }
      context.emit('favorite-sort')
    }

    return {
      hello,
      pushNewArrivalsButton,
      pushFavoritButton,
      isNewArrivalsButton,
      isFavoritButton,
    }
  },
})
</script>

<style scoped>
.push {
  background-color: #e2e8f0;
}
</style>
