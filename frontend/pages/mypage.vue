<template>
  <div>
    <Navbar />
    <UserData />
    <MyPosts class="mt-3" :user_post_info_datas="userPostInformationDatas" />
    <PagenationBtn />
  </div>
</template>

<script lang="ts">
import { defineComponent, useStore, ref } from '@nuxtjs/composition-api'

import Navbar from '../components/shared/Navbar.vue'
import UserData from '../components/pages/mypage/UserData.vue'
import MyPosts from '../components/pages/mypage/MyPosts.vue'
import PagenationBtn from '../components/shared/PagenationBtn.vue'
import { Infomation } from '@/types/types'
import { getUserPostInfoData } from '@/api/get'

export default defineComponent({
  components: {
    Navbar,
    UserData,
    MyPosts,
    PagenationBtn,
  },
  middleware: 'authFilter',

  setup() {
    const userPostInformationDatas = ref<Infomation[]>()
    const userPostInfoDataStoring = () => {
      getUserPostInfoData(useStore().$auth.state.user.id).then((result) => {
        userPostInformationDatas.value = result
      })
    }

    userPostInfoDataStoring()

    return {
      userPostInformationDatas,
    }
  },
})
</script>
