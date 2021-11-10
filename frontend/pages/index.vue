<template>
  <div class="container">
    {{ name }}
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    // 取得先のURL
    const url = 'http://localhost:8888'
    // リクエスト（Get）
    const response = await $axios.$get(url)
    // 配列で返ってくるのでJSONにして返却
    return {
      name: response,
    }
  },
  data() {
    return {
      name: null,
    }
  },
}
</script>
