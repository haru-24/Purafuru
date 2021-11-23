<template>
  <div>
    <Register />
  </div>
</template>

<script>
import Vue from 'vue'
import Register from '../components/pages/register/Register.vue'

export default Vue.extend({
  auth: false,
  components: {
    Register,
  },
})
</script>
