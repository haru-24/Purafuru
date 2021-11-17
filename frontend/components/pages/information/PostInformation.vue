<template>
  <div>
    <div v-for="(pagedata, index) in pagedatas" :key="index">
      <div class="ml-10">
        <div class="text-lg">
          <p class="inline-block mr-3">2000/20/20</p>
          <p class="inline-block mr-3">{{ pagedata.prefecture }}</p>
          <p class="inline-block mr-3">{{ pagedata.post_user }}</p>
        </div>

        <div>
          <div class="text-4xl font-bold mt-5">
            <p>{{ pagedata.place_name }}</p>
          </div>
          <div class="mt-10 flex">
            <div class="flex-initial mr-7 font-bold text-2xl">
              <p>住所</p>
            </div>
            <div class="flex-initial">
              <p>{{ pagedata.post_number }}</p>
              <p>{{ pagedata.address }}</p>
            </div>
          </div>
          <div>
            <div class="mr-7 font-bold text-2xl mt-10">
              <p>アピールポイント</p>
            </div>
            <div class="w-2/3 h-32 mt-3">
              <p class="break-words ml-20">
                {{ pagedata.apeal_point }}
              </p>
            </div>
          </div>
          <div>
            <div class="mr-7 font-bold text-2xl mt-10">
              <p>オススメのメニュー or スポット</p>
            </div>
            <div class="w-2/3 h-32 mt-3">
              <p class="break-words ml-20">{{ pagedata.recommendation }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['pagedatas'],
}
</script>

<style scoped></style>
