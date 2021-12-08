<template>
  <div>
    <div v-if="!editInformationData.id">読み込み中</div>
    <div v-else>
      <div v-if="$mq === 'lg'">
        <div
          v-if="editInformationData.userID === $auth.user.id"
          class="flex justify-between"
        >
          <div class="bg-white w-5/12 m-auto mt-3 border-2">
            <div class="py-4 px-4 flex justify-center">
              <div class="flex-initial w-4/5">
                <form>
                  <div class="my-5 text-sm">
                    <label class="block text-black"
                      >ジャンル<span>※</span></label
                    >
                    <select
                      v-model="editInformationData.genre"
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
                      v-model="editInformationData.placeName"
                      class="rounded-sm px-4 py-2 mt-2 border-2 w-full"
                    />
                  </div>
                  <div class="my-5 text-sm">
                    <label class="block text-black"
                      >郵便番号(半角数字、ハイフンを入れてくだい)</label
                    >
                    <input
                      v-model="editInformationData.postNumber"
                      class="rounded-sm px-2 mt-2 focus:outline-none border-2"
                    />
                  </div>
                  <div class="my-5 text-sm">
                    <label class="block text-black">住所</label>
                    <select
                      v-model="editInformationData.prefecture"
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
                      v-model="editInformationData.address"
                      cols50
                      class="rounded-sm px-4 py-2 border-2 w-full"
                    />
                  </div>
                  <div class="my-5 text-sm">
                    <label class="block text-black"
                      >どんなところ？(200字以内)<span>※</span></label
                    >
                    <textarea
                      v-model="editInformationData.apealPoint"
                      cols50
                      class="rounded-sm px-4 py-2 mt-2 border-2 w-full"
                    />
                  </div>
                  <div class="my-5 text-sm">
                    <label class="block text-black"
                      >私の一押し！(メニューor景色など 50字以内)</label
                    >
                    <textarea
                      v-model="editInformationData.recommendation"
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
              <div
                v-if="editInformationData.image"
                class="h-full w-full flex items-center justify-center"
              >
                <img :src="editInformationData.image" alt="" class="img" />
              </div>
              <div
                v-else
                class="h-full w-full flex items-center justify-center"
              >
                <img
                  :src="editInformationData.imgOriginalUrl"
                  alt=""
                  class="img"
                />
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
                  画像を変更
                  <input
                    ref="imgPreview"
                    type="file"
                    class="h-11/12 inputImage"
                    @change="previewImage"
                  />
                </label>

                <button
                  class="
                    hover:text-red-900
                    text-red-500 text-xs
                    font-bold
                    inline
                    ml-4
                  "
                  @click="clickCancelBtn"
                >
                  取り消し
                </button>
              </div>
            </div>

            <div v-if="isLoading" class="flex justify-center mt-3">
              <Loading />
            </div>

            <div v-else class="flex justify-center mt-2 mb-2">
              <div class="flex justify-center mt-2">
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
                  @click="clickPutBtn"
                >
                  更新
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- レスポンシブ -->
      <div v-if="$mq === 'sm'">
        <div class="bg-white w-11/12 m-auto mt-3 border-2">
          <div class="py-2 px-2 flex justify-center">
            <div class="flex-initial w-4/5">
              <form>
                <div class="my-2 text-xs">
                  <label class="block text-black">ジャンル<span>※</span></label>
                  <select
                    v-model="editInformationData.genre"
                    class="
                      border-gray-300
                      text-gray-600
                      py-1
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
                <div class="my-5 text-xs">
                  <label class="block text-black"
                    >名前(店名,地名,建物名)<span>※</span></label
                  >
                  <input
                    v-model="editInformationData.placeName"
                    class="rounded-sm px-4 py-1 mt-2 border-2 w-full"
                  />
                </div>
                <div class="my-2 text-xs">
                  <label class="block text-black"
                    >郵便番号(半角数字、ハイフンを入れてくだい)</label
                  >
                  <input
                    v-model="editInformationData.postNumber"
                    class="rounded-sm px-2 mt-2 focus:outline-none border-2"
                  />
                </div>
                <div class="my-2 text-xs">
                  <label class="block text-black">住所</label>
                  <select
                    v-model="editInformationData.prefecture"
                    class="
                      mt-2
                      border-gray-300
                      text-gray-600
                      py-1
                      pr-1
                      bg-white
                      hover:border-gray-400
                      focus:outline-none
                      mb-1
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
                    v-model="editInformationData.address"
                    cols50
                    class="rounded-sm px-4 py-2 border-2 w-full"
                  />
                </div>
                <div class="my-2 text-xs">
                  <label class="block text-black"
                    >どんなところ？(200字以内)<span>※</span></label
                  >
                  <textarea
                    v-model="editInformationData.apealPoint"
                    cols50
                    class="rounded-sm px-4 py-2 mt-2 border-2 w-full"
                  />
                </div>
                <div class="my-2 text-xs">
                  <label class="block text-black"
                    >私の一押し！(メニューor景色など 50字以内)</label
                  >
                  <textarea
                    v-model="editInformationData.recommendation"
                    cols50
                    class="rounded-sm px-4 py-2 mt-2 border-2 w-full"
                  />
                </div>
                <p class="text-xs"><span>※必須</span></p>
              </form>
            </div>
          </div>
        </div>
        <div class="w-11/12 m-auto">
          <div class="mt-3">
            <label
              class="
                hover:bg-gray-200
                text-gray-500
                font-bold
                py-1
                px-2
                border border-gray-500
                rounded
                inline
              "
            >
              画像を変更
              <input
                ref="imgPreview"
                type="file"
                class="h-11/12 inputImage"
                @change="previewImage"
              />
            </label>
            <button
              class="
                hover:text-red-900
                text-red-500
                font-bold
                text-xs
                inline
                ml-2
              "
              @click="clickCancelBtn"
            >
              画像を削除する
            </button>
          </div>
          <div class="bg-white w-full mt-2 border-2 border-dashed h-48">
            <div
              v-if="editInformationData.image"
              class="h-full w-full flex items-center justify-center"
            >
              <img
                :src="editInformationData.image"
                alt=""
                class="h-48 w-full"
              />
            </div>
          </div>

          <div v-if="isLoading" class="flex justify-center mt-3">
            <Loading />
          </div>

          <div v-else class="flex justify-center mt-2 mb-2">
            <div class="flex justify-center mt-2">
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
                @click="clickPutBtn"
              >
                更新
              </button>
            </div>
          </div>
        </div>
      </div>

      <div v-else>このページは表示できません</div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  useRoute,
  ref,
} from '@nuxtjs/composition-api'
import { prefectures } from '~/utils/prefectures'
import { Infomation } from '~/types/types'
import { getIndividualInformation } from '@/api/get'
import { putEditPostInfodata } from '@/api/put'
import { deleteStorageData, postStrage } from '@/api/firebaseStorage'
import Loading from '@/components/shared/Loading.vue'
export default defineComponent({
  components: {
    Loading,
  },
  setup(_props, context) {
    const editInformationData = reactive({
      id: 0,
      genre: 'グルメ',
      placeName: '',
      prefecture: '東京都',
      postNumber: '',
      address: '',
      apealPoint: '',
      recommendation: '',
      image: '',
      postUser: '',
      postHistoryId: null,
      userID: null,
      favorites: 0,
      imgOriginalUrl: '',
    }) as Infomation

    const pageId = useRoute().value.query.id as string
    const pageDataStoring = () => {
      getIndividualInformation(pageId).then((result) => {
        const resultData = result as Infomation
        editInformationData.id = resultData.id
        editInformationData.genre = resultData.genre
        editInformationData.postNumber = resultData.postNumber
        editInformationData.prefecture = resultData.prefecture
        editInformationData.placeName = resultData.placeName
        editInformationData.address = resultData.address
        editInformationData.apealPoint = resultData.apealPoint
        editInformationData.recommendation = resultData.recommendation
        editInformationData.image = resultData.image
        editInformationData.postUser = resultData.postUser
        editInformationData.userID = resultData.userID
        editInformationData.favorites = resultData.favorites
        editInformationData.imgOriginalUrl = resultData.imgOriginalUrl
      })
    }
    pageDataStoring()

    const isLoading = ref<boolean>(false)

    const clickPutBtn = () => {
      isLoading.value = true
      // 画像の変更があるなら
      if (!editInformationData.image) {
        postStrage(editInformationData.imgOriginalUrl, imgData).then(
          (resultUrl) => {
            putEditPostInfodata(editInformationData, resultUrl?.getImgUrl).then(
              () => {
                if (confirm('更新しました')) {
                  context.root.$router.push('mypage')
                  isLoading.value = false
                }
              }
            )
          }
        )
      } else {
        putEditPostInfodata(
          editInformationData,
          editInformationData.image
        ).then(() => {
          if (confirm('更新しました')) {
            context.root.$router.push('mypage')
            isLoading.value = false
          }
        })
      }
    }

    // 画像のrefデータ
    const imgPreview = ref<HTMLImageElement | string>()

    // 画像データを追加
    let imgData: any = null
    const previewImage = (e: any) => {
      // 画像データがある場合
      if (editInformationData.imgOriginalUrl) {
        deleteStorageData(editInformationData.imgOriginalUrl).then(() => {})
      } else {
        editInformationData.image = ''
        editInformationData.imgOriginalUrl = ''
        imgData = e.target.files[0]
        editInformationData.imgOriginalUrl = URL.createObjectURL(
          imgData
        ) as string
        imgPreview.value = ''
      }
    }

    const clickCancelBtn = () => {
      editInformationData.imgOriginalUrl = ''
      URL.revokeObjectURL(editInformationData.imgOriginalUrl)
    }

    return {
      editInformationData,
      prefectures,
      clickPutBtn,
      clickCancelBtn,
      previewImage,
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
