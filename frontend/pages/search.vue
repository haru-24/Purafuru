<template>
  <div>
    <Navbar />
    <SerchBar class="mt-3" @selectprefecture="serch" />

    <SearchSort />
    <SearchResult class="mt-5" :infodatas="getInfodatas" />
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
    // 投稿情報をAPIでGET
    const getInfodatas = ref<GetInfo[]>([])
    const getPostInfo = () => {
      axios
        .get('http://localhost:8888/post_info')
        .then((res) => {
          getInfodatas.value = res.data
        })
        .catch((err) => {
          throw err
        })
    }

    onMounted(() => {
      getPostInfo()
    })
    // 個別
    const serch = (serchPrefecture: string, serachGenre: string) => {
      axios
        .post('http://localhost:8888/post_info/search', {
          prefecture: serchPrefecture,
          genre: serachGenre,
        })
        .then((res) => {
          getInfodatas.value = res.data
        })
        .catch((err) => {
          throw err
        })
    }

    return {
      getInfodatas,
      serch,
    }
  },
})
</script>
