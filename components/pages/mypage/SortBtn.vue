<template>
  <div>
    <div v-if="$mq === 'lg'">
      <div class="ml-5 -mb-1">
        <button
          class="
            w-32
            h-12
            border-4 border-green-400
            rounded-md
            hover:bg-green-100
          "
          :class="{ push: isHistoryBtn }"
          @click="pushHistoryBtn"
        >
          投稿履歴
        </button>
        <button
          class="
            w-44
            h-12
            border-4 border-green-400
            rounded-md
            -ml-2
            hover:bg-green-100
          "
          :class="{ push: isUserFavoriteBtn }"
          @click="pushUserFavoriteBtn"
        >
          お気に入りした投稿
        </button>
      </div>
      <div class="border-2 border-green-400"></div>
    </div>

    <!-- レスポンシブ対応 -->
    <div v-if="$mq === 'sm'">
      <div class="ml-1 mt-3 -mb-1">
        <button
          class="
            w-24
            h-8
            border-4 border-green-400
            rounded-md
            hover:bg-green-100
            text-xs
          "
          :class="{ push: isHistoryBtn }"
          @click="pushHistoryBtn"
        >
          投稿履歴
        </button>
        <button
          class="
            w-32
            h-8
            border-4 border-green-400
            rounded-md
            -ml-2
            hover:bg-green-100
            text-xs
          "
          :class="{ push: isUserFavoriteBtn }"
          @click="pushUserFavoriteBtn"
        >
          お気に入りした投稿
        </button>
      </div>
      <div class="border-2 border-green-400 -mb-4"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup(_props, context) {
    const isHistoryBtn = ref<boolean>(true)
    const isUserFavoriteBtn = ref<boolean>(false)

    // ボタンを押したときの動作
    const pushHistoryBtn = () => {
      isHistoryBtn.value = true
      isUserFavoriteBtn.value = false
      context.emit('emit_post_histry_btn')
    }
    const pushUserFavoriteBtn = () => {
      isHistoryBtn.value = false
      isUserFavoriteBtn.value = true
      context.emit('emit_favorite_btn')
    }

    return {
      isHistoryBtn,
      isUserFavoriteBtn,
      pushHistoryBtn,
      pushUserFavoriteBtn,
    }
  },
})
</script>

<style scoped>
.push {
  background-color: rgba(209, 250, 229);
}
</style>
