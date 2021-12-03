<template>
  <div>
    <div
      class="
        bg-white
        lg:w-4/12
        md:6/12
        w-10/12
        m-auto
        my-10
        shadow-md
        rounded-lg
      "
    >
      <h1
        class="
          text-4xl text-center
          no-underline
          text-gray-800
          hover:text-blue-dark
          font-extrabold
          wf-nicomoji
        "
      >
        プラフル
      </h1>

      <div action="" class="py-8 px-8 rounded-xl">
        <h1 class="font-medium text-2xl mt-3 text-center">新規登録</h1>
        <div class="my-5 text-sm">
          <label for="username" class="block text-black">ニックネーム</label>
          <input
            v-model="registerData.userName"
            type="text"
            autofocus
            class="
              rounded-sm
              px-4
              py-3
              mt-3
              focus:outline-none
              bg-gray-100
              w-full
            "
            placeholder="ニックネーム"
          />
        </div>
        <div class="my-5 text-sm py-3 mt-3">
          <label for="username" class="block text-black mb-3">出身地</label>
          <select
            v-model="registerData.birthPlace"
            name="pref"
            class="
              rounded-sm
              text-gray-600
              h-8
              pl-4
              bg-gray-100
              hover:border-gray-400
              focus:outline-none
              font-semibold
            "
          >
            <option
              v-for="prefecture in prefectures"
              :key="prefecture"
              :value="prefecture"
              :selected="prefecture === '東京都'"
            >
              {{ prefecture }}
            </option>
          </select>
        </div>
        <div class="my-5 text-sm">
          <label for="password" class="block text-black">e-mail</label>
          <input
            v-model="registerData.email"
            class="
              rounded-sm
              px-4
              py-3
              mt-3
              focus:outline-none
              bg-gray-100
              w-full
            "
            placeholder="e-mail"
          />
        </div>
        <div class="my-5 text-sm">
          <label for="password" class="block text-black">Password</label>
          <input
            v-model="registerData.password"
            type="password"
            class="
              rounded-sm
              px-4
              py-3
              mt-3
              focus:outline-none
              bg-gray-100
              w-full
            "
            placeholder="Password"
          />
        </div>
        <div class="my-5 text-sm">
          <label for="password" class="block text-black">確認用Password</label>
          <input
            v-model="registerData.confirmPassword"
            type="password"
            class="
              rounded-sm
              px-4
              py-3
              mt-3
              focus:outline-none
              bg-gray-100
              w-full
            "
            placeholder="確認用Password"
          />
        </div>

        <button
          class="
            block
            text-center text-white
            bg-green-400
            p-3
            duration-300
            rounded-sm
            hover:bg-green-700
            w-full
          "
          @click="clickRegisterBtn"
        >
          Sing-in
        </button>
        <p class="mt-3 text-xs text-center font-light text-gray-400">
          <nuxt-Link tag="a" to="/login" class="text-black font-medium">
            ログインへ戻る
          </nuxt-Link>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'
import { prefectures } from '@/utils/prefectures'
import { UserData } from '@/types/types'
import { postRegister } from '@/api/post'

export default defineComponent({
  setup(_props, context) {
    const registerData = reactive({
      userName: '',
      birthPlace: '東京都',
      email: '',
      password: '',
      confirmPassword: '',
    }) as UserData

    // 認証
    const login = () => {
      context.root.$auth.loginWith('local', {
        data: {
          email: registerData.email,
          password: registerData.password,
        },
      })
    }

    const clickRegisterBtn = () => {
      postRegister(registerData).then(() => {
        login()
      })
    }

    return {
      registerData,
      prefectures,
      clickRegisterBtn,
    }
  },
})
</script>
<style scoped>
.wf-nicomoji {
  font-family: 'Nico Moji';
}
</style>
