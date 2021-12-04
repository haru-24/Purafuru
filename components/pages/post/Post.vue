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
      <div class="bg-white w-full mt-32 border-2 border-dashed h-2/4">
        <div class="h-full w-full flex items-center justify-center">
          <img :src="postInformationData.imgOriginalUrl" alt="" class="img" />
        </div>
      </div>
      <div class="mt-3">
        <label
          class="
            hover:bg-gray-200
            text-gray-500
            font-bold
            py-2
            px-2
            border border-gray-500
            rounded
            inline
          "
        >
          画像を選択
          <input
            ref="imgPreview"
            type="file"
            class="h-11/12 inputImage"
            @change="previewImage"
          />
        </label>

        <button
          class="hover:text-red-900 text-red-500 font-bold inline ml-4"
          @click="clickCancelBtn"
        >
          取り消し
        </button>
      </div>

      <div v-if="isLoading" class="flex justify-center mt-3">
        <div
          class="animate-spin h-10 w-10 border-4 border-green-500 rounded-full"
          style="border-top-color: transparent"
        ></div>
      </div>

      <div v-else class="flex justify-center mt-10">
        <PostDeleteBtn @all_clear_btn="clickAllClearBtn" />
        <PostBtn @post_btn="clickPostBtn" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  useStore,
  ref,
} from '@nuxtjs/composition-api'
import { postInformation } from '../../../api/post'
import { postStrage } from '@/api/firebaseStorage'
import { prefectures } from '~/utils/prefectures'
import { Infomation, UserData } from '~/types/types'
import PostBtn from '@/components/pages/post/PostBtn.vue'
import PostDeleteBtn from '@/components/pages/post/PostDeleteBtn.vue'

export default defineComponent({
  components: {
    PostBtn,
    PostDeleteBtn,
  },
  setup(_props) {
    const postInformationData = reactive({
      genre: 'グルメ',
      placeName: '',
      prefecture: '東京都',
      postNumber: '',
      address: '',
      apealPoint: '',
      recommendation: '',
      imgOriginalUrl: '',
      postUser: '',
      postHistoryId: null,
      userID: null,
      favorites: 0,
    }) as Infomation

    // ユーザーデータ
    const userData = {
      id: useStore().$auth.state.user.id,
      userName: useStore().$auth.state.user.user_name,
    } as UserData

    // 画像のrefデータ
    const imgPreview = ref<HTMLImageElement | string>()

    // 画像データをプレビューする
    let imgData: any = null
    const previewImage = (e: any) => {
      imgData = e.target.files[0]
      postInformationData.imgOriginalUrl = URL.createObjectURL(
        imgData
      ) as string
      imgPreview.value = ''
    }

    const clickCancelBtn = () => {
      postInformationData.imgOriginalUrl = ''
      URL.revokeObjectURL(postInformationData.imgOriginalUrl)
    }

    // 投稿後のアラート

    const clickAllClearBtn = () => {
      postInformationData.placeName = ''
      postInformationData.postNumber = ''
      postInformationData.address = ''
      postInformationData.apealPoint = ''
      postInformationData.recommendation = ''
      postInformationData.imgOriginalUrl = ''
      postInformationData.postHistoryId = null
    }

    const isLoading = ref<boolean>(false)

    const clickPostBtn = () => {
      isLoading.value = true
      postStrage(postInformationData.imgOriginalUrl, imgData)
        .then((strageUrl) => {
          console.log(strageUrl)
          console.log(postInformationData.imgOriginalUrl)
          postInformation(postInformationData, userData, strageUrl?.getImgUrl)
        })
        .then(() => {
          alert('投稿しました')
          clickAllClearBtn()
          isLoading.value = false
        })
        .catch(() => {
          alert('投稿に失敗しました')
          isLoading.value = false
        })
    }

    return {
      postInformationData,
      clickPostBtn,
      prefectures,
      clickAllClearBtn,
      previewImage,
      clickCancelBtn,
      imgPreview,
      isLoading,
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
.img {
  width: 100%;
  height: 350px;
  object-fit: cover;
}
.inputImage {
  display: none;
}
</style>
