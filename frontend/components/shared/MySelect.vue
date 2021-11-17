<template>
  <select
    name="pref"
    class="
      rounded-sm
      border border-gray-300
      text-gray-600
      h-10
      pl-4
      pr-7
      bg-white
      hover:border-gray-400
      focus:outline-none
      appearance-none
      shadow-lg
      font-semibold
    "
  >
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

<script lang="ts">
// import { defineComponent, ref } from '@nuxtjs/composition-api'
// import { prefectures } from '@/utils/prefectures'
</script>
