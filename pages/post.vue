<template>
  <div>
    <Navbar />
    <Post />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import Navbar from '../components/shared/Navbar.vue'
import Post from '@/components/pages/post/Post.vue'

export default defineComponent({
  components: {
    Post,
    Navbar,
  },
  middleware: 'authFilter',
})
</script>
