<template>
  <div>
    <Navbar />
    <UserData />
    <MyPosts class="mt-3" />
    <PageNumbers />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '../components/shared/Navbar.vue'
import UserData from '../components/pages/mypage/UserData.vue'
import MyPosts from '../components/pages/mypage/MyPosts.vue'
import PageNumbers from '../components/shared/PageNumbers.vue'

export default Vue.extend({
  components: {
    Navbar,
    UserData,
    MyPosts,
    PageNumbers,
  },
  middleware: 'authFilter',
})
</script>
