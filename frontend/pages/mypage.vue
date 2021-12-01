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
import axios from 'axios'
import Navbar from '../components/shared/Navbar.vue'
import UserData from '../components/pages/mypage/UserData.vue'
import MyPosts from '../components/pages/mypage/MyPosts.vue'
import PagenationBtn from '../components/shared/PagenationBtn.vue'
import { Infomation } from '@/types/types'

export default defineComponent({
  components: {
    Navbar,
    UserData,
    MyPosts,
    PagenationBtn,
  },
  middleware: 'authFilter',

  setup() {
    const userPostInformationDatas = ref<Infomation>()
    const getUserPostData = async () => {
      try {
        const result = await axios.get(
          'http://localhost:8888/post_info/userPostInfo',
          {
            params: {
              userID: useStore().$auth.state.user.id,
            },
          }
        )
        if (result) {
          userPostInformationDatas.value = result.data.rows
        }
      } catch (err) {
        console.log(err)
      }
    }
    getUserPostData()

    return {
      userPostInformationDatas,
    }
  },
})
</script>
