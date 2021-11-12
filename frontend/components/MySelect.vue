<template>
  <select name="pref" class="bg-gray-100 rounded-sm">
    <option
      v-for="prefecture in prefectures"
      :key="prefecture"
      :value="prefecture"
      :selected="prefecture === '東京都'"
    >
      {{ prefecture }}
    </option>
  </select>
</template>

<script>
import { prefectures } from '@/utils/prefectures'
export default {
  data() {
    return {
      prefectures: prefectures,
    }
  },
}
</script>
