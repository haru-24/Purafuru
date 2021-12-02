<template>
  <div>
    <Navbar />
    <InputEdit />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import Navbar from '../components/shared/Navbar.vue'
import InputEdit from '@/components/pages/edit/InputEdit.vue'

export default defineComponent({
  components: {
    InputEdit,
    Navbar,
  },
  middleware: 'authFilter',
})
</script>
