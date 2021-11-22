<template>
  <div>
    <Navbar @all-serch-infomation="allSearhData" />
    <SerchBar class="mt-3" @serch-infomation="serchData" />

    <SearchSort />
    <SearchResult class="mt-5" :infodatas="getInfodatas" />
    <PageNumbers class="mt-5" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from '@nuxtjs/composition-api'
import SerchBar from '../../components/shared/SerchBar.vue'
import SearchSort from '../../components/pages/search/SearchSort.vue'
import SearchResult from '../../components/pages/search/SearchResult.vue'
import PageNumbers from '../../components/shared/PageNumbers.vue'
import { getSearchInformation, allSearchInformation } from '../../api/get'
import { Infomation } from '../../types/types'
import Navbar from '@/components/shared/Navbar.vue'

export default defineComponent({
  components: {
    Navbar,
    SerchBar,
    SearchSort,
    SearchResult,
    PageNumbers,
  },

  setup(_props, context) {
    // 投稿情報をAPIでGET
    const getInfodatas = ref<Infomation | null | undefined>()

    onMounted(() => {
      if (
        context.root.$route.query.prefecture &&
        context.root.$route.query.genre
      ) {
        getSearchInformation(
          context.root.$route.query.prefecture as string,
          context.root.$route.query.genre as string
        ).then((result) => {
          getInfodatas.value = result
        })
      } else {
        allSearchInformation().then((result) => {
          getInfodatas.value = result
        })
      }
    })

    //  検索バーの値をfetchしてくる
    const serchData = (selectedPrefecture: string, selectedGenre: string) => {
      getSearchInformation(selectedPrefecture, selectedGenre).then((result) => {
        getInfodatas.value = result
      })
    }

    // 全データ取得
    const allSearhData = () => {
      allSearchInformation().then((result) => {
        getInfodatas.value = result
      })
    }

    return {
      getInfodatas,
      getSearchInformation,
      allSearhData,
      serchData,
    }
  },
})
</script>
