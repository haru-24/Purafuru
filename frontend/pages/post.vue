<template>
  <div>
    <Navbar />
    <Post />
  </div>
</template>

<script>
import Navbar from '../components/shared/Navbar.vue'
import Post from '@/components/pages/post/Post.vue'
export default {
  components: {
    Post,
    Navbar,
  },
}
</script>
