<template>
  <div class="">
    <div v-if="individual_page_data">
      <div class="flex justify-center">
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
      <div class="text-3xl font-bold flex justify-center">
        <p>{{ favorites }}</p>
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
  watch,
} from '@nuxtjs/composition-api'
import { Infomation } from '@/types/types'
import { getUserFavoriteData } from '@/api/get'
import { postFavoritePageData } from '@/api/post'
import { putPostInfoFavoriteData } from '@/api/put'
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

    // お気に入りしているか判定
    const isFavorite = ref<boolean | undefined>(false)

    watch(
      () => props.individual_page_data,
      () => {
        favorites.value = props.individual_page_data.favorites
        confilmUserFavorite()
      }
    )
    // ログインしているか否か
    let userID: number | null = null
    if (useStore().$auth.state.user) {
      userID = useStore().$auth.state.user.id
    }

    // ユーザーがお気に入りしているか否か
    const confilmUserFavorite = () => {
      getUserFavoriteData(userID, props.individual_page_data.id).then(
        (result) => {
          isFavorite.value = result
        }
      )
    }

    // お気に入りボタンクリック処理
    const favoriteBtnClick = () => {
      try {
        if (!isFavorite.value) {
          // favoritesテーブルにお気に入りしたことを伝える
          postFavoritePageData(userID, props.individual_page_data.id).then(
            () => {
              favorites.value++
              isFavorite.value = true
              // post_infoにfavoriteの数を入れる
              putPostInfoFavoriteData(
                favorites.value,
                props.individual_page_data.id
              )
            }
          )
        } else {
          // お気に入り登録を解除する
          deleteFavorite(userID, props.individual_page_data.id).then(() => {
            favorites.value--
            isFavorite.value = false
          })
        }
      } catch (err) {
        console.log(err)
      }
    }

    return {
      favoriteBtnClick,
      favorites,
      isFavorite,
    }
  },
})
</script>

<style scoped>
.isFavorite {
  --tw-bg-opacity: 1;
  background-color: rgba(219, 39, 119, var(--tw-bg-opacity));
  color: rgba(255, 255, 255, var(--tw-text-opacity));
}
</style>
