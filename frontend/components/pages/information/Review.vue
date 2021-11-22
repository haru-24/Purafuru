<template>
  <div class="ml-10">
    <div>
      <div class="mr-7 font-bold text-2xl">
        <p class="inline mr-10">クチコミ</p>
        <input
          v-model="inputReview"
          type="text"
          class="h-8 w-48 inline border-2 boder-gray-200"
        />
        <button
          class="bg-gray-500 hover:bg-gray-700 text-white px-4 rounded"
          @click="postReview"
        >
          追加
        </button>
      </div>

      <div
        v-for="(reviewData, index) in reviewDatas"
        :key="index"
        class="text-lg ml-20 mt-3"
      >
        <p class="inline-block mr-3">{{ reviewData.reviewed_at }}</p>
        <p class="inline-block mr-3">広島県</p>
        <p class="inline-block mr-3">USERNAME</p>
        <div class="inline-block ml-10">
          <p>{{ reviewData.review }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from '@nuxtjs/composition-api'
import { getAllReviewData } from '../../../api/get'
import { postReviewData } from '../../../api/post'

interface ReviewData {
  id: number
  user: string
  reviewedAt: string
  review: string
  postInformationID: number
}

export default defineComponent({
  props: ['pageid'],
  setup(props) {
    const reviewDatas = ref<ReviewData[]>()
    const inputReview = ref<string>('')

    onMounted(() => {
      getAllReviewData(props.pageid).then((result) => {
        reviewDatas.value = result
      })
    })

    const postReview = () => {
      postReviewData(inputReview.value, props.pageid).then((result) => {
        reviewDatas.value?.push(result)
        inputReview.value = ''
      })
    }

    return {
      inputReview,
      postReview,
      reviewDatas,
    }
  },
})
</script>
