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
import axios from 'axios'
import { Infomation } from '@/types/types'

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
    const isFavorite = ref<boolean>(false)

    watch(
      () => props.individual_page_data,
      () => {
        favorites.value = props.individual_page_data.favorites
        getUserFavoriteData()
      }
    )
    // ログインしているか否か
    let userID: number | null = null
    if (useStore().$auth.state.user) {
      userID = useStore().$auth.state.user.id
    }

    // ユーザーがお気に入りしているか否か
    const getUserFavoriteData = async () => {
      try {
        const result = await axios.get('http://localhost:8888/user_favorite', {
          params: {
            user_id: userID,
            favorite_page_id: props.individual_page_data.id,
          },
        })
        if (result.data) {
          isFavorite.value = true
        } else {
          isFavorite.value = false
        }
      } catch (err) {
        console.log(err)
      }
    }

    // お気に入りボタンクリック処理
    const favoriteBtnClick = async () => {
      try {
        if (!isFavorite.value) {
          const result = await axios.post(
            'http://localhost:8888/user_favorite',
            {
              user_id: userID,
              favorite_page_id: props.individual_page_data.id,
            }
          )
          if (result) {
            favorites.value++
            isFavorite.value = true
            await axios
              .put('http://localhost:8888/post_info/favorite', {
                favorites: favorites.value,
                id: props.individual_page_data.id,
              })
              .then((res) => {
                console.log(res)
              })
              .catch((err) => {
                console.log(err)
              })
          }
        } else {
          await axios
            .delete('http://localhost:8888/user_favorite', {
              data: {
                user_id: userID,
                favorite_page_id: props.individual_page_data.id,
              },
            })
            .then((res) => {
              if (res) {
                favorites.value--
                isFavorite.value = false
              }
            })
            .catch((err) => {
              console.log(err)
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
