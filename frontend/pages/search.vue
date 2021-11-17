<template>
  <div>
    <Navbar />
    <SerchBar class="mt-3" @selectprefecture="serch" />

    <SearchSort />
    <SearchResult class="mt-5" :infodatas="fileterInfoDatas" />
    <PageNumbers class="mt-5" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from '@nuxtjs/composition-api'
import axios from 'axios'
import SerchBar from '../components/shared/SerchBar.vue'
import SearchSort from '../components/pages/search/SearchSort.vue'
import SearchResult from '../components/pages/search/SearchResult.vue'
import PageNumbers from '../components/shared/PageNumbers.vue'
import Navbar from '@/components/shared/Navbar.vue'

interface GetInfo {
  genre: string
  placeName: string
  prefecture: string
  postNumber: string
  address: string
  apealPoint: string
  recommendation: string
  image: string | null
  postUser: string | null
  postHistoryId: number | null
  userID: number | null
  favorites: number
  postedAt: string
}

export default defineComponent({
  components: {
    Navbar,
    SerchBar,
    SearchSort,
    SearchResult,
    PageNumbers,
  },

  setup() {
    // 検索
    const fileterInfoDatas = ref<GetInfo[]>()
    // serchbarからemitしてきた都道府県名でフィルタリング
    const serch = (prefecture: string) => {
      const fileteResult = getInfodatas.value.filter(
        (value) => value.prefecture === prefecture
      )
      console.log(prefecture)
      fileterInfoDatas.value = fileteResult
    }

    // 投稿情報をAPIでGET
    const getInfodatas = ref<GetInfo[]>([])
    const getPostInfo = () => {
      axios
        .get('http://localhost:8888/post_info')
        .then((res) => {
          getInfodatas.value = res.data
          fileterInfoDatas.value = res.data
        })
        .catch((err) => {
          throw err
        })
    }

    onMounted(() => {
      getPostInfo()
    })

    return {
      serch,
      getInfodatas,
      fileterInfoDatas,
    }
  },
})
</script>
