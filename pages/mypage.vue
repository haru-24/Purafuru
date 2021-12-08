<template>
  <div>
    <Navbar />
    <UserData :user_favorite_count="userFavoriteCount" />
    <div v-if="!userPostInformationDatas" class="flex justify-center mt-10">
      <Loading />
    </div>
    <div v-else>
      <SortBtn
        @emit_post_histry_btn="clickPostHistoryBtn"
        @emit_favorite_btn="clickFavoritePageBtn"
      />
      <MyPosts
        v-if="!isFavoritePage"
        class="mt-3"
        :user_post_info_datas="userPostInformationDatas"
        @refresh_my_post_data="refreshMyData"
      />
      <div v-else>
        <div v-if="!userFavoritePageDatas" class="flex justify-center mt-10">
          <Loading />
        </div>
        <MyfavoritePage
          v-else
          class="mt-3"
          :user_favorite_page_datas="userFavoritePageDatas"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, useStore, ref } from '@nuxtjs/composition-api'
import Navbar from '../components/shared/Navbar.vue'
import UserData from '../components/pages/mypage/UserData.vue'
import MyPosts from '../components/pages/mypage/MyPosts.vue'
import SortBtn from '@/components/pages/mypage/SortBtn.vue'
import Loading from '@/components/shared/Loading.vue'
import MyfavoritePage from '@/components/pages/mypage/MyfavoritePage.vue'
import { Infomation } from '@/types/types'
import {
  getUserPostInfoData,
  getUserFavoritePageId,
  getUserFavoritePages,
} from '@/api/get'

export default defineComponent({
  components: {
    Navbar,
    UserData,
    MyPosts,
    SortBtn,
    MyfavoritePage,
    Loading,
  },
  middleware: 'authFilter',

  setup() {
    // ユーザーが投稿したデータを入れる
    const userPostInformationDatas = ref<Infomation[]>()

    // お気に入りボタンが押されているか否か
    const isFavoritePage = ref<boolean>(false)

    // ユーザーの投稿したデータを取得

    getUserPostInfoData(useStore().$auth.state.user.id).then((result) => {
      userPostInformationDatas.value = result
    })

    // デリートあと再取得
    const refreshMyData = (userId: number) => {
      getUserPostInfoData(userId).then((result) => {
        userPostInformationDatas.value = result
      })
    }

    // ユーザーがお気に入りしたページデータ取得
    const userFavoritePageNumber = ref<number[] | undefined>()
    // ユーザーがお気に入りにしたページの数
    const userFavoriteCount = ref<number | undefined>()
    getUserFavoritePageId(useStore().$auth.state.user.id).then((result) => {
      userFavoritePageNumber.value = result?.map(
        (value) => value.favoritePageId
      )
      userFavoriteCount.value = result?.length
    })

    // ユーザーがお気に入りしたページの情報を格納
    const userFavoritePageDatas = ref<Infomation[] | undefined>()

    const fetchFavoritePages = () => {
      getUserFavoritePages(userFavoritePageNumber.value as number[]).then(
        (result) => {
          userFavoritePageDatas.value = result
        }
      )
    }
    fetchFavoritePages()

    // 投稿履歴とお気に位にページの切り替え
    const clickPostHistoryBtn = () => {
      isFavoritePage.value = false
    }

    const clickFavoritePageBtn = () => {
      isFavoritePage.value = true
      fetchFavoritePages()
    }

    return {
      userPostInformationDatas,
      refreshMyData,
      userFavoriteCount,
      isFavoritePage,
      userFavoritePageDatas,
      clickPostHistoryBtn,
      clickFavoritePageBtn,
    }
  },
})
</script>
