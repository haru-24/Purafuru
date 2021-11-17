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
          @click="postReviewData"
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
import {
  defineComponent,
  onMounted,
  ref,
  useFetch,
} from '@nuxtjs/composition-api'
import axios from 'axios'

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
      fetch()
    })

    const { fetch } = useFetch(() => {
      axios
        .get(`http://localhost:8888/review/${props.pageid}`)
        .then((res) => {
          reviewDatas.value = res.data
        })
        .catch((err) => {
          throw err
        })
    })

    const postReviewData = async () => {
      if (inputReview.value !== '') {
        axios
          .post('http://localhost:8888/review', {
            // username
            review: inputReview.value,
            post_information_id: props.pageid,
          })

          .catch((err) => {
            throw err
          })
        inputReview.value = ''
        await fetch()
      } else {
        window.alert('文字が入力されていません')
      }
    }

    return {
      inputReview,
      postReviewData,
      reviewDatas,
    }
  },
})
</script>
