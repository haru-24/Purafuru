<template>
  <div>
    <div class="flex justify-center">
      <nav
        class="relative z-0 inline-flex rounded-md shadow-sm space-x-10 mb-5"
        aria-label="Pagination"
      >
        <button
          v-if="$route.query.p && $route.query.p !== '1'"
          href="#"
          class="
            relative
            inline-flex
            items-center
            px-2
            py-2
            rounded-l-md
            border border-gray-300
            bg-white
            text-sm
            font-medium
            text-gray-500
            hover:bg-gray-50
          "
          @click="prevPageBtnClick"
        >
          <svg
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
          <p>前のページ</p>
        </button>

        <button
          v-if="$route.query.p !== max_page_value"
          class="
            relative
            inline-flex
            items-center
            px-2
            py-2
            rounded-r-md
            border border-gray-300
            bg-white
            text-sm
            font-medium
            text-gray-500
            hover:bg-gray-50
          "
          @click="nextPageBtnClick"
        >
          <p>次のページ</p>
          <svg
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    max_page_value: String,
  },
  setup(_props, context) {
    // 次に進む
    const nextPageBtnClick = () => {
      if (!context.root.$route.query.p) {
        pageQueryPush('2')
        context.emit('pagenation_click', '2')
      } else {
        // ?=pageの番号を数値型に変換 ＋１する
        const queryPage = context.root.$route.query.p as string
        let pageNumber = parseInt(queryPage) as number
        pageNumber++
        //  足した値をストリングにしてrouter push
        const pageNumberStr: string = String(pageNumber)
        pageQueryPush(pageNumberStr)
        context.emit('pagenation_click', pageNumberStr)
      }
    }

    // 前に戻る
    const prevPageBtnClick = () => {
      if (context.root.$route.query.p) {
        // ?=pageの番号を数値型に変換 -１する
        const queryPage = context.root.$route.query.p as string
        let pageNumber = parseInt(queryPage) as number
        pageNumber--
        //  引いた値をストリングにしてrouter push
        const pageNumberStr: string = String(pageNumber)
        pageQueryPush(pageNumberStr)
        context.emit('pagenation_click', pageNumberStr)
      }
    }

    const pageQueryPush = (pageQuery: string) => {
      context.root.$router.push({
        query: {
          p: pageQuery,
          prefecture: context.root.$route.query.prefecture,
          genre: context.root.$route.query.genre,
        },
      })
    }
    return {
      nextPageBtnClick,
      prevPageBtnClick,
    }
  },
})
</script>
