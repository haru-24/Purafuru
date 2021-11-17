<template>
  <div class="">
    <div v-for="(pagedata, index) in pagedatas" :key="index">
      <div class="flex justify-center">
        <div>
          <p class="font-bold text-3xl">お気に入り</p>
        </div>

        <div class="mt-1">
          <span class="material-icons text-4xl"> favorite_border </span>
        </div>
      </div>
      <div class="text-3xl font-bold flex justify-center">
        <p>{{ pagedata.favorites }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['pagedatas'],
}
</script>
