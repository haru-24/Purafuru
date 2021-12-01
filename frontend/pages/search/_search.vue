<template>
  <div>
    <Navbar @all-serch-infomation="allSearhData" />
    <SerchBar class="mt-3" @serch-infomation="serchData" />

    <SearchSort
      @new-arrival-sort="newArrivalSort"
      @favorite-sort="favoriteSort"
    />
    <SearchResult class="mt-5" :all_info_datas="getInfodatas" />
    <PagenationBtn
      class="mt-5"
      :max_page_value="pageMaxValue"
      @pagenation_click="pagenationBtnClick"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import SerchBar from '../../components/shared/SerchBar.vue'
import SearchSort from '../../components/pages/search/SearchSort.vue'
import SearchResult from '../../components/pages/search/SearchResult.vue'
import PagenationBtn from '../../components/shared/PagenationBtn.vue'
import { getSearchInformation, allInformation } from '../../api/get'
import { Infomation } from '../../types/types'
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

    // ページ番号を入れる変数
    const CurrentPageNumber = ref<string>('')
    if (context.root.$route.query.page) {
      CurrentPageNumber.value = context.root.$route.query.page as string
    } else {
      CurrentPageNumber.value = '1'
    }
    // 表示するページ数の最大値
    const pageMaxValue = ref<string>('1')

    // 10件ごと全データ検索
    const allInfoDataStoring = () => {
      allInformation(CurrentPageNumber.value).then((result) => {
        getInfodatas.value = result?.dbInfoData
        const dataCount = result?.dbDataCount as number
        pageMaxValue.value = String(Math.ceil(dataCount / 10))
      })
    }
    // 10件ごと都道府県、ジャンルを入れて検索する
    const searchDataStoring = (prefecture: string, genre: string) => {
      getSearchInformation(prefecture, genre, CurrentPageNumber.value).then(
        (result) => {
          getInfodatas.value = result?.dbInfoData
          const dataCount = result?.dbDataCount as number
          pageMaxValue.value = String(Math.ceil(dataCount / 10))
          console.log(pageMaxValue.value)
        }
      )
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
    displayDataBranch()

    //  検索バーの値をfetchしてくる
    const serchData = (selectedPrefecture: string, selectedGenre: string) => {
      CurrentPageNumber.value = '1'
      searchDataStoring(selectedPrefecture, selectedGenre)
    }

    // 探すボタンを押して全データ取得
    const allSearhData = () => {
      CurrentPageNumber.value = '1'
      allInfoDataStoring()
    }

    // ソートボタンの状態
    let newArrivalSortBtnOn: boolean = true
    let favoriteSortBtnOn: boolean = false

    // 新着順に並び替え
    const newArrivalSort = () => {
      newArrivalSortBtnOn = true
      favoriteSortBtnOn = false
      displayDataBranch()
    }

    // お気に入り順に並び替え
    const favoriteSort = () => {
      newArrivalSortBtnOn = false
      favoriteSortBtnOn = true
      if (getInfodatas.value) {
        getInfodatas.value.sort((a: Infomation, b: Infomation) => {
          if (a.favorites < b.favorites) return 1
          if (a.favorites > b.favorites) return -1
          return 0
        })
      }
    }

    // ページネーション🔥🔥🔥🔥🔥🔥🔥
    const pagenationBtnClick = (queryPageNumber: string) => {
      CurrentPageNumber.value = queryPageNumber
      if (newArrivalSortBtnOn) {
        displayDataBranch()
      } else if (favoriteSortBtnOn) {
        if (
          context.root.$route.query.prefecture &&
          context.root.$route.query.genre
        ) {
          getSearchInformation(
            context.root.$route.query.prefecture as string,
            context.root.$route.query.genre as string,
            CurrentPageNumber.value
          ).then((result) => {
            getInfodatas.value = result?.dbInfoData
            favoriteSort()
          })
        } else {
          allInformation(CurrentPageNumber.value).then((result) => {
            getInfodatas.value = result?.dbInfoData
            favoriteSort()
          })
        }
      }
    }
    favoriteSort()

    return {
      getInfodatas,
      getSearchInformation,
      allSearhData,
      serchData,
      newArrivalSort,
      favoriteSort,
      pagenationBtnClick,
      pageMaxValue,
    }
  },
})
</script>
