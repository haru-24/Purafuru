<template>
  <div class="">
    <div v-if="$mq === 'lg'">
      <div v-if="individual_page_data">
        <div v-if="$auth.loggedIn" class="flex justify-center">
          <div>
            <button
              :class="{ isFavorite: isFavorite }"
              class="
                font-bold
                text-3xl
                border border-pink-500
                text-pink-500
                rounded-md
                px-4
                py-2
                m-2
                transition
                duration-500
                ease
                hover:bg-pink-200
                focus:outline-none focus:shadow-outline
                inline-block
              "
              @click="favoriteBtnClick"
            >
              お気に入り
              <span class="material-icons text-4xl inline-block mb-1">
                favorite_border
              </span>
            </button>
          </div>
        </div>
        <div v-else class="flex justify-center">
          <div>
            <div
              class="
                font-bold
                text-3xl
                border border-gray-500
                text-gray-500
                rounded-md
                px-4
                py-2
                m-2
                transition
                duration-500
                ease
                focus:outline-none focus:shadow-outline
                inline-block
              "
              @click="pleaseLoginClick"
            >
              お気に入り
              <span class="material-icons text-4xl inline-block mb-1">
                favorite_border
              </span>
            </div>
          </div>
        </div>
        <div class="text-3xl font-bold flex justify-center">
          <p>{{ favorites }}</p>
        </div>
      </div>
    </div>

    <div v-if="$mq === 'sm'">
      <div v-if="individual_page_data">
        <div v-if="$auth.loggedIn" class="flex justify-center">
          <div>
            <button
              :class="{ isFavorite: isFavorite }"
              class="
                font-bold
                text-sm
                border border-pink-500
                text-pink-500
                rounded-md
                px-2
                py-1
                m-2
                transition
                duration-500
                ease
                hover:bg-pink-200
                focus:outline-none focus:shadow-outline
                inline-block
              "
              @click="favoriteBtnClick"
            >
              お気に入り
              <span class="material-icons text-sm inline-block">
                favorite_border
              </span>
              <span class="text-sm font-bold">
                {{ favorites }}
              </span>
            </button>
          </div>
        </div>
        <div v-else class="flex justify-center">
          <div>
            <div
              class="
                font-bold
                text-sm
                border border-gray-500
                text-gray-500
                rounded-md
                px-2
                py-1
                m-2
                transition
                duration-500
                ease
                focus:outline-none focus:shadow-outline
                inline-block
              "
              @click="pleaseLoginClick"
            >
              お気に入り
              <span class="material-icons text-sm inline-block">
                favorite_border
              </span>
              <span class="text-sm font-bold">
                {{ favorites }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  useStore,
  ref,
} from '@nuxtjs/composition-api'
import { Infomation } from '@/types/types'
import { getUserFavoriteData, getFavoritesNumber } from '@/api/get'
import { putPostInfoFavoriteData } from '@/api/put'
import { postFavoritePageData } from '@/api/post'
import { deleteFavorite } from '@/api/delete'

export default defineComponent({
  props: {
    individual_page_data: {
      type: Object as PropType<Infomation>,
      default: () => {},
    },
  },
  setup(props) {
    // お気に入り数格納
    const favorites = ref<number>(0)
    //  お気に入りの数
    getFavoritesNumber(props.individual_page_data.id).then((result) => {
      favorites.value = result as number
    })

    // ログインしているか否か
    let userID: number | null = null
    if (useStore().$auth.state.user) {
      userID = useStore().$auth.state.user.id
    }

    // お気に入りしているか判定
    const isFavorite = ref<boolean | undefined>(false)
    // ユーザーがお気に入りしているか否か
    getUserFavoriteData(userID, props.individual_page_data.id).then(
      (result) => {
        isFavorite.value = result
      }
    )

    const favoriteBtnClick = async () => {
      if (!isFavorite.value) {
        await postFavoritePageData(userID, props.individual_page_data.id)
        favorites.value++
        isFavorite.value = true
        await putPostInfoFavoriteData(
          favorites.value,
          props.individual_page_data.id
        )
      } else if (confirm('お気に入り登録解除しますか?')) {
        // お気に入り登録を解除する
        await deleteFavorite(userID, props.individual_page_data.id)
        favorites.value--
        isFavorite.value = false
        await putPostInfoFavoriteData(
          favorites.value,
          props.individual_page_data.id
        )
      }
    }

    const pleaseLoginClick = () => {
      alert('ログイン後お気に入り登録ができます')
    }

    return {
      favoriteBtnClick,
      favorites,
      isFavorite,
      pleaseLoginClick,
    }
  },
})
</script>

<style scoped>
.isFavorite {
  --tw-bg-opacity: 1;
  background-color: rgba(219, 39, 119);
  color: rgba(255, 255, 255);
}
.isFavorite:hover {
  --tw-bg-opacity: 1;
  background-color: rgba(190, 24, 93, var(--tw-text-opacity));
  color: rgba(255, 255, 255, var(--tw-text-opacity));
}
</style>
