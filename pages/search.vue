<template>
  <div>
    <Navbar @all-serch-infomation="allSearhData" />
    <SerchBar class="mt-3" @serch-infomation="serchData" />

    <SearchSort
      @new-arrival-sort="newArrivalSort"
      @favorite-sort="favoriteSort"
    />
    <div v-if="!getInfodatas || isLoading" class="flex justify-center mt-44">
      <div
        class="animate-spin h-10 w-10 border-4 border-green-500 rounded-full"
        style="border-top-color: transparent"
      ></div>
    </div>

    <div v-else-if="getInfodatas && pageMaxValue >= 1">
      <SearchResult class="mt-5" :all_info_datas="getInfodatas" />
      <PagenationBtn
        class="mt-5"
        :max_page_value="pageMaxValue"
        @pagenation_click="pageTransitionFetch"
      />
    </div>
    <div v-else class="text-center mt-5 text-2xl font-bold">
      投稿がありません
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import {
  getSearchInformation,
  allInformation,
  favoriteSortInformation,
  getSearchInformationFavoriteSort,
} from '@/api/get'
import { Infomation } from '@/types/types'
import SerchBar from '@/components/shared/SerchBar.vue'
import SearchSort from '@/components/pages/search/SearchSort.vue'
import SearchResult from '@/components/pages/search/SearchResult.vue'
import PagenationBtn from '@/components/shared/PagenationBtn.vue'
import Navbar from '@/components/shared/Navbar.vue'

export default defineComponent({
  components: {
    Navbar,
    SerchBar,
    SearchSort,
    SearchResult,
    PagenationBtn,
  },

  setup(_props, context) {
    // 投稿情報をAPIでGET
    const getInfodatas = ref<Infomation[] | null | undefined>()
    // ローディング処理
    const isLoading = ref<boolean>(false)

    // ページ番号を入れる変数
    const currentPageNumber = ref<string>('')
    if (context.root.$route.query.p) {
      currentPageNumber.value = context.root.$route.query.p as string
    } else {
      currentPageNumber.value = '1'
    }
    // 表示するページ数の最大値
    const pageMaxValue = ref<string>('1')

    context.root.$router.afterEach((to) => {
      pageTransitionFetch(to.query.p as string)
    })

    // 10件ごと全データ
    const allInfoDataStoring = () => {
      isLoading.value = true
      allInformation(currentPageNumber.value).then((result) => {
        getInfodatas.value = result?.dbInfoData
        const dataCount = result?.dbDataCount as number
        pageMaxValue.value = String(Math.ceil(dataCount / 10))
        isLoading.value = false
      })
    }

    // 10件ごと全データ(お気に入り順)
    const favoriteSortInfoDataStoring = () => {
      isLoading.value = true
      favoriteSortInformation(currentPageNumber.value).then((result) => {
        getInfodatas.value = result?.dbInfoData
        const dataCount = result?.dbDataCount as number
        pageMaxValue.value = String(Math.ceil(dataCount / 10))
        isLoading.value = false
      })
    }

    // 10件ごと都道府県、ジャンルを入れて検索する
    const searchDataStoring = (prefecture: string, genre: string) => {
      isLoading.value = true
      getSearchInformation(prefecture, genre, currentPageNumber.value).then(
        (result) => {
          getInfodatas.value = result?.dbInfoData
          const dataCount = result?.dbDataCount as number
          pageMaxValue.value = String(Math.ceil(dataCount / 10))
          isLoading.value = false
        }
      )
    }

    // 10件ごと都道府県、ジャンルを入れて検索する(お気に入り順)
    const searchDataSortFavoriteStoring = (
      prefecture: string,
      genre: string
    ) => {
      isLoading.value = true
      getSearchInformationFavoriteSort(
        prefecture,
        genre,
        currentPageNumber.value
      ).then((result) => {
        getInfodatas.value = result?.dbInfoData
        const dataCount = result?.dbDataCount as number
        pageMaxValue.value = String(Math.ceil(dataCount / 10))
        isLoading.value = false
      })
    }

    // 画面遷移時queryの情報で分岐させる
    const displayDataBranch = () => {
      if (
        context.root.$route.query.prefecture &&
        context.root.$route.query.genre
      ) {
        searchDataStoring(
          context.root.$route.query.prefecture as string,
          context.root.$route.query.genre as string
        )
      } else {
        allInfoDataStoring()
      }
    }

    // 画面遷移時queryの情報で分岐させる(お気に入り順)
    const displaySortFavoriteDataBranch = () => {
      if (
        context.root.$route.query.prefecture &&
        context.root.$route.query.genre
      ) {
        searchDataSortFavoriteStoring(
          context.root.$route.query.prefecture as string,
          context.root.$route.query.genre as string
        )
      } else {
        favoriteSortInfoDataStoring()
      }
    }

    //  検索バーの値をfetchしてくる
    const serchData = (selectedPrefecture: string, selectedGenre: string) => {
      currentPageNumber.value = '1'
      if (context.root.$route.query.sort === 'new_arrival') {
        searchDataStoring(selectedPrefecture, selectedGenre)
      } else if (context.root.$route.query.sort === 'favorite') {
        searchDataSortFavoriteStoring(selectedPrefecture, selectedGenre)
      }
    }

    // 探すボタンを押して全データ取得
    const allSearhData = () => {
      currentPageNumber.value = '1'
      allInfoDataStoring()
    }

    // 新着順に並び替えボタンクリック
    const newArrivalSort = () => {
      context.root.$router.push({
        path: 'search',
        query: {
          p: context.root.$route.query.p,
          prefecture: context.root.$route.query.prefecture,
          genre: context.root.$route.query.genre,
          sort: 'new_arrival',
        },
      })
      displayDataBranch()
    }

    // お気に入り順に並び替えボタンクリック
    const favoriteSort = () => {
      context.root.$router.push({
        path: 'search',
        query: {
          p: context.root.$route.query.p,
          prefecture: context.root.$route.query.prefecture,
          genre: context.root.$route.query.genre,
          sort: 'favorite',
        },
      })
      displaySortFavoriteDataBranch()
    }

    // ページネーション
    const pageTransitionFetch = (queryPageNumber: string) => {
      currentPageNumber.value = queryPageNumber
      if (context.root.$route.query.sort === 'new_arrival') {
        displayDataBranch()
      } else if (context.root.$route.query.sort === 'favorite') {
        displaySortFavoriteDataBranch()
      }
    }

    // 新着順かお気に入り順かをクエリを見て分岐させる createdで発火
    const sortQueryBranch = () => {
      if (context.root.$route.query.sort === 'new_arrival') {
        newArrivalSort()
      } else if (context.root.$route.query.sort === 'favorite') {
        favoriteSort()
      } else {
        goTo404Error()
      }
    }
    sortQueryBranch()

    // 404エラーでエラーページに飛ばす
    const goTo404Error = () => {
      context.root.$nuxt.error({
        statusCode: 404,
      })
    }

    return {
      getInfodatas,
      getSearchInformation,
      allSearhData,
      serchData,
      newArrivalSort,
      favoriteSort,
      pageTransitionFetch,
      pageMaxValue,
      isLoading,
    }
  },
})
</script>
