<template>
  <div class="flex justify-between">
    <div class="bg-white w-5/12 m-auto mt-3 border-2">
      <div class="py-4 px-4 flex justify-center">
        <div class="flex-initial w-4/5">
          <form>
            <div class="my-5 text-sm">
              <label class="block text-black">ジャンル<span>※</span></label>
              <select
                v-model="postInformationData.genre"
                class="
                  border-gray-300
                  text-gray-600
                  h-8
                  bg-white
                  hover:border-gray-400
                  focus:outline-none
                  mt-2
                  border-2
                "
              >
                <option>グルメ</option>
                <option>スポット</option>
              </select>
            </div>
            <div class="my-5 text-sm">
              <label class="block text-black"
                >名前(店名,地名,建物名)<span>※</span></label
              >
              <input
                v-model="postInformationData.placeName"
                class="rounded-sm px-4 py-2 mt-2 border-2 w-full"
              />
            </div>
            <div class="my-5 text-sm">
              <label class="block text-black"
                >郵便番号(半角数字、ハイフンを入れてくだい)</label
              >
              <input
                v-model="postInformationData.postNumber"
                class="rounded-sm px-2 mt-2 focus:outline-none border-2"
              />
            </div>
            <div class="my-5 text-sm">
              <label class="block text-black">住所</label>
              <select
                v-model="postInformationData.prefecture"
                class="
                  mt-2
                  border-gray-300
                  text-gray-600
                  h-8
                  pr-2
                  bg-white
                  hover:border-gray-400
                  focus:outline-none
                  mb-2
                  border-2
                "
              >
                <option
                  v-for="prefecture in prefectures"
                  :key="prefecture"
                  name="pref"
                  class="rounded-sm"
                  :value="prefecture"
                  :selectedPrefecture="prefecture === '東京都'"
                >
                  {{ prefecture }}
                </option></select
              ><span>※</span>
              <textarea
                v-model="postInformationData.address"
                cols50
                class="rounded-sm px-4 py-2 border-2 w-full"
              />
            </div>
            <div class="my-5 text-sm">
              <label class="block text-black"
                >アピールポイント(200字以内)<span>※</span></label
              >
              <textarea
                v-model="postInformationData.apealPoint"
                cols50
                class="rounded-sm px-4 py-2 mt-2 border-2 w-full"
              />
            </div>
            <div class="my-5 text-sm">
              <label class="block text-black"
                >私の一押し！(メニューor景色など 50字以内)</label
              >
              <textarea
                v-model="postInformationData.recommendation"
                cols50
                class="rounded-sm px-4 py-2 mt-2 border-2 w-full"
              />
            </div>
            <p><span>※必須</span></p>
          </form>
        </div>
      </div>
    </div>
    <div class="w-5/12 mr-16">
      <div class="bg-white w-full mt-2 border-2 border-dashed py-60">
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
          @click="clickAllClearBtn"
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
          @click="clickPostBtn"
        >
          投稿
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'
import { postInformation } from '../../../api/post'
import { prefectures } from '~/utils/prefectures'
import { Infomation } from '~/types/types'

export default defineComponent({
  setup() {
    const postInformationData = reactive({
      genre: 'グルメ',
      placeName: '',
      prefecture: '東京都',
      postNumber: '',
      address: '',
      apealPoint: '',
      recommendation: '',
      image: null,
      postUser: '',
      postHistoryId: null,
      userID: null,
      favorites: 0,
    }) as Infomation

    // 投稿後のアラート

    const clickAllClearBtn = () => {
      postInformationData.placeName = ''
      postInformationData.postNumber = ''
      postInformationData.address = ''
      postInformationData.apealPoint = ''
      postInformationData.recommendation = ''
      postInformationData.image = ''
      postInformationData.postHistoryId = null
    }

    const clickPostBtn = () => {
      postInformation(postInformationData)
        .then((result) => {
          if (result) {
            alert('投稿しました')
            clickAllClearBtn()
          }
        })
        .catch(() => {
          alert('投稿に失敗しました')
        })
    }

    return {
      postInformationData,
      clickPostBtn,
      prefectures,
      clickAllClearBtn,
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
