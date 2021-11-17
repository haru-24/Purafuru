<template>
  <div>
    <div class="flex items-center justify-center mt-5">
      <div class="relative inline-flex">
        <select
          v-model="selectedPrefecture"
          class="
            border border-gray-300
            rounded-lg
            text-gray-600
            h-10
            pl-5
            pr-5
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
            name="pref"
            class="rounded-sm"
            :value="prefecture"
          >
            {{ prefecture }}
          </option>
        </select>
        <p class="mr-2 ml-2 text-xl mt-2">の</p>

        <select
          class="
            border border-gray-300
            rounded-lg
            text-gray-600
            h-10
            pl-5
            pr-5
            bg-white
            hover:border-gray-400
            focus:outline-none
            appearance-none
            shadow-lg
            font-semibold
          "
        >
          <option value="">選択してください</option>
          <option value="グルメ">グルメ</option>
          <option value="スポット">スポット</option>
        </select>
      </div>
      <p class="mr-1 ml-2 text-xl mt-1">を</p>
      <button
        type="button"
        class="
          border border-green-500
          text-green-500
          rounded-md
          px-4
          py-2
          m-2
          transition
          duration-500
          ease
          hover:text-white hover:bg-green-600
          focus:outline-none focus:shadow-outline
        "
        @click="emitSlectPrefecture"
      >
        探す
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import { utilPrefectures } from '@/utils/prefectures'

export default defineComponent({
  setup(_props, context) {
    const prefectures = ref<string[]>(utilPrefectures)
    const selectedPrefecture = ref<string>('東京都')

    const emitSlectPrefecture = () => {
      context.emit('selectprefecture', selectedPrefecture.value)
    }

    return {
      prefectures,
      selectedPrefecture,
      emitSlectPrefecture,
    }
  },
})
</script>
