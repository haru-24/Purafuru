<template>
  <div>
    <div class="flex items-center justify-center mt-5">
      <div class="relative inline-flex">
        <select
          v-model="selectedPrefecture"
          class="
            border border-gray-300
            rounded-lg
            text-gray-600
            h-10
            pl-5
            pr-5
            bg-white
            hover:border-gray-400
            focus:outline-none
            shadow-lg
            font-semibold
          "
        >
          <option
            v-for="prefecture in prefectures"
            :key="prefecture"
            name="pref"
            class="rounded-sm"
            :value="prefecture"
          >
            {{ prefecture }}
          </option>
        </select>
        <p class="mr-2 ml-2 text-xl mt-2">の</p>

        <select
          v-model="selectedGenre"
          class="
            border border-gray-300
            rounded-lg
            text-gray-600
            h-10
            pl-2
            pr-2
            bg-white
            hover:border-gray-400
            focus:outline-none
            shadow-lg
            font-semibold
          "
        >
          <option value="グルメ">グルメ</option>
          <option value="スポット">スポット</option>
        </select>
      </div>
      <p class="mr-1 ml-2 text-xl mt-1">を</p>
      <button
        class="
          border border-green-500
          text-green-500
          rounded-md
          px-4
          py-2
          m-2
          transition
          duration-500
          ease
          hover:text-white hover:bg-green-600
          focus:outline-none focus:shadow-outline
        "
        @click="onClickSearchBtn"
      >
        探す
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from '@nuxtjs/composition-api'
import { prefectures } from '../../utils/prefectures'

export default defineComponent({
  setup(_props, context) {
    const selectedPrefecture = ref<string>('')
    const selectedGenre = ref<string>('')

    // 初回ロード時デフォルトの値を入れておく
    if (
      !sessionStorage.getItem('prefecture') &&
      !sessionStorage.getItem('genre')
    ) {
      sessionStorage.setItem('prefecture', '東京都')
      sessionStorage.setItem('genre', 'グルメ')
    }

    // ページ遷移した際にセッションストレージの値を表示する
    selectedPrefecture.value = sessionStorage.getItem('prefecture') as string
    selectedGenre.value = sessionStorage.getItem('genre') as string

    const onClickSearchBtn = () => {
      // サーチページにいる場合フェッチする
      if (location.pathname === '/search') {
        context.emit(
          'serch-infomation',
          selectedPrefecture.value,
          selectedGenre.value
        )
        // クエリストリングを挿入する
        goToSearchPage()
      } else {
        // 違う場合サーチに遷移する
        goToSearchPage()
      }
    }

    //  セッションに格納
    const setSessionStrageInfoData = () => {
      sessionStorage.setItem('prefecture', selectedPrefecture.value)
      sessionStorage.setItem('genre', selectedGenre.value)
    }

    watch([selectedPrefecture, selectedGenre], () => {
      setSessionStrageInfoData()
    })

    const goToSearchPage = () => {
      context.root.$router.push({
        path: 'search',
        query: {
          prefecture: selectedPrefecture.value,
          genre: selectedGenre.value,
        },
      })
    }

    return {
      selectedPrefecture,
      onClickSearchBtn,
      selectedGenre,
      prefectures,
      goToSearchPage,
    }
  },
})
</script>
