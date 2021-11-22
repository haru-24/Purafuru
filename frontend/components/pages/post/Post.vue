<template>
  <div class="flex justify-between">
    <div class="bg-white w-5/12 m-auto mt-3 border-2">
      <div class="py-4 px-4 flex justify-center">
        <div class="flex-initial w-4/5">
          <form>
            <div class="my-5 text-sm">
              <label class="block text-black">ジャンル</label>
              <select
                v-model="postInfo.genre"
                class="
                  border border-gray-300
                  text-gray-600
                  h-10
                  pl-5
                  pr-7
                  bg-white
                  hover:border-gray-400
                  focus:outline-none
                  appearance-none
                  mt-2
                "
              >
                <option>選択してください</option>
                <option>グルメ</option>
                <option>スポット</option>
              </select>
            </div>
            <div class="my-5 text-sm">
              <label class="block text-black"
                >名前(店名,地名,建物名)<span>※</span></label
              >
              <input
                v-model="postInfo.placeName"
                class="rounded-sm px-4 py-2 mt-3 border-2 w-full"
              />
            </div>
            <div class="my-5 text-sm">
              <label class="block text-black"
                >郵便番号(ハイフンを入れてくだい)</label
              >
              <input
                v-model="postInfo.postNumber"
                class="rounded-sm px-2 mt-3 focus:outline-none border-2"
              />
            </div>
            <div class="my-5 text-sm">
              <label class="block text-black">住所</label>
              <select v-model="selectedPrefecture" class="mt-2">
                <option
                  v-for="prefecture in prefectures"
                  :key="prefecture"
                  name="pref"
                  class="rounded-sm"
                  :value="prefecture"
                  :selectedPrefecture="prefecture === '東京都'"
                >
                  {{ prefecture }}
                </option>
              </select>
              <textarea
                v-model="postInfo.address"
                cols50
                class="rounded-sm px-4 py-2 border-2 w-full"
              />
            </div>
            <div class="my-5 text-sm">
              <label class="block text-black"
                >アピールポイント(200字以内)<span>※</span></label
              >
              <textarea
                v-model="postInfo.apealPoint"
                cols50
                class="rounded-sm px-4 py-2 mt-3 border-2 w-full"
              />
            </div>
            <div class="my-5 text-sm">
              <label class="block text-black"
                >私の一押し！(メニューor景色など 50字以内)</label
              >
              <textarea
                v-model="postInfo.recommendation"
                cols50
                class="rounded-sm px-4 py-2 mt-3 border-2 w-full"
              />
            </div>
            <p><span>※必須</span></p>
          </form>
        </div>
      </div>
    </div>
    <div class="w-5/12 mr-16">
      <div class="bg-white w-full mt-3 border-2 border-dashed py-60">
        <div class="h-full w-full text-gray-400 text-center text-4xl">
          image
        </div>
      </div>
      <div class="flex justify-center mt-10">
        <button
          type="button"
          class="
            bg-red-500
            hover:bg-red-700
            text-white
            font-bold
            py-2
            px-4
            border border-red-700
            rounded
            mr-5
          "
        >
          削除
        </button>
        <button
          type="button"
          class="
            bg-gray-500
            hover:bg-gray-700
            text-white
            font-bold
            py-2
            px-4
            border border-gray-700
            rounded
          "
          @click="sendData"
        >
          投稿
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from '@nuxtjs/composition-api'
import axios from 'axios'
import { prefectures } from '~/utils/prefectures'

interface PostInfo {
  genre: string
  placeName: string
  prefecture: string
  postNumber: string
  address: string
  apealPoint: string
  recommendation: string
  image: string | null
  postUser: string | null
  postHistoryId: number | null
  userID: number | null
  favorites: number
}

export default defineComponent({
  setup() {
    const selectedPrefecture = ref<string>('東京都')
    const postInfo = reactive({
      genre: '',
      placeName: '',
      prefecture: selectedPrefecture.value,
      postNumber: '',
      address: '',
      apealPoint: '',
      recommendation: '',
      image: null,
      postUser: '',
      postHistoryId: null,
      userID: null,
      favorites: 0,
    }) as PostInfo

    const postAlert = () => {
      alert('投稿しました')
      postInfo.genre = ''
      postInfo.placeName = ''
      postInfo.postNumber = ''
      postInfo.address = ''
      postInfo.apealPoint = ''
      postInfo.recommendation = ''
      postInfo.image = ''
      postInfo.postHistoryId = null
    }

    const sendData = async () => {
      axios
        .post('http://localhost:8888/post_info', {
          genre: postInfo.genre,
          place_name: postInfo.placeName,
          prefecture: selectedPrefecture.value,
          post_number: postInfo.postNumber,
          address: postInfo.address,
          apeal_point: postInfo.apealPoint,
          recommendation: postInfo.recommendation,
          image: postInfo.image,
          post_user: postInfo.postUser,
          post_history_id: postInfo.postHistoryId,
          user_id: postInfo.userID,
          favorites: postInfo.favorites,
        })
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
      await postAlert()
    }

    return {
      postInfo,
      sendData,
      prefectures,
      selectedPrefecture,
    }
  },
})
</script>

<style scoped>
span {
  color: red;
}
textarea {
  resize: none;
}
</style>
