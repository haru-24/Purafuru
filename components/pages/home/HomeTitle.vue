<template>
  <div>
    <div v-if="$mq === 'lg'" class="grid gap-6 mb-8 md:grid-cols-2 ml-2">
      <div class="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
        <h4
          class="
            mb-4
            font-extrabold
            text-4xl text-gray-600
            dark:text-gray-300
            wf-nicomoji
          "
        >
          シェアトリ
        </h4>
        <p class="font-semibold text-gray-600 text-xl">
          ガイド本だけでは伝わらない土地の魅力を<span class="text-yellow-600"
            >発信</span
          ><br />
          旅に出た際に新たな魅力を<span class="text-green-600">発見</span>
        </p>
      </div>
    </div>
    <!-- レスポンシブ対応 -->
    <div v-if="$mq === 'sm'">
      <h4
        class="
          mt-16
          text-center
          mb-10
          font-extrabold
          text-4xl text-gray-600
          dark:text-gray-300
          wf-nicomoji
        "
      >
        シェアトリ
      </h4>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeTitle',
}
</script>

<style scoped>
.nuxt-logo {
  height: 180px;
}
.wf-nicomoji {
  font-family: 'Nico Moji';
}
</style>
