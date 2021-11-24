<template>
  <div>
    <Login />
  </div>
</template>

<script>
import Login from '@/components/pages/login/Login.vue'
export default {
  components: {
    Login,
  },
  middleware: 'authComplete',
}
</script>
