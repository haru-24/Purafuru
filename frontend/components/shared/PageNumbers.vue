<template>
  <div>
    <div class="flex justify-center">
      <nav
        class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
        aria-label="Pagination"
      >
        <button
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
        >
          <span class="sr-only">Previous</span>
          <!-- Heroicon name: solid/chevron-left -->
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
        </button>
        <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
        <button
          href="#"
          aria-current="page"
          class="
            z-10
            bg-indigo-50
            border-green-500
            text-green-600
            relative
            inline-flex
            items-center
            px-4
            py-2
            border
            text-sm
            font-medium
          "
        >
          1
        </button>
        <button
          href="#"
          class="
            z-10
            bg-indigo-50
            border-green-500
            text-green-600
            relative
            inline-flex
            items-center
            px-4
            py-2
            border
            text-sm
            font-medium
          "
        >
          1
        </button>
        <button
          href="#"
          class="
            z-10
            bg-indigo-50
            border-green-500
            text-green-600
            relative
            inline-flex
            items-center
            px-4
            py-2
            border
            text-sm
            font-medium
          "
        >
          1
        </button>

        <button
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
          <span class="sr-only">Next</span>
          <!-- Heroicon name: solid/chevron-right -->
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
  setup(_props, context) {
    const nextPageBtnClick = () => {
      if (!context.root.$route.query.page) {
        context.root.$router.push({
          query: {
            page: '2',
            prefecture: context.root.$route.query.prefecture,
            genre: context.root.$route.query.genre,
          },
        })
        context.emit('next_page', '2')
      } else {
        // ?=pageの番号を数値型に変換 ＋１する
        const queryPage = context.root.$route.query.page as string
        let pageNumber = parseInt(queryPage) as number
        pageNumber++
        //  足した値をストリングにしてrouter push
        const pageNumberStr: string = String(pageNumber)
        context.root.$router.push({
          query: {
            page: pageNumberStr,
            prefecture: context.root.$route.query.prefecture,
            genre: context.root.$route.query.genre,
          },
        })
        context.emit('next_page', pageNumberStr)
      }
    }

    return {
      nextPageBtnClick,
    }
  },
})
</script>
