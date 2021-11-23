<template>
  <div class="mt-20">
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
      <form class="py-8 px-8 rounded-xl" @submit.prevent="login">
        <h1 class="font-medium text-2xl text-center">ログイン</h1>

        <div class="my-5 text-sm">
          <label class="block text-black">e-mail</label>
          <input
            id="email"
            v-model="loginData.email"
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
            placeholder="e-mail"
          />
        </div>
        <div class="my-5 text-sm">
          <label for="password" class="block text-black">Password</label>
          <input
            id="password"
            v-model="loginData.password"
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
          <div class="flex justify-end mt-2">
            <p class="text-xs text-center font-light text-gray-400">
              アカウントをお持ちではないですか?
              <nuxt-Link tag="a" to="/register" class="text-black font-medium">
                新規登録
              </nuxt-Link>
            </p>
          </div>
        </div>

        <button
          type="submit"
          class="
            block
            text-center text-white
            bg-green-400
            p-3
            duration-300
            rounded-sm
            hover:bg-green-700
            w-full
            mt-10
          "
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'

export default defineComponent({
  setup(_props, context) {
    const loginData = reactive({
      email: '',
      password: '',
    })

    // 認証
    const login = () => {
      context.root.$auth.loginWith('local', {
        data: loginData,
      })
    }
    return {
      loginData,
      login,
    }
  },
})
</script>
<style scoped>
.wf-nicomoji {
  font-family: 'Nico Moji';
}
</style>
