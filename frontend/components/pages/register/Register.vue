<template>
  <div>
    <div class="bg-white w-8/12 m-auto my-10 shadow-md">
      <h1 class="text-center text-3xl">title</h1>
      <div class="py-8 px-8 rounded-xl flex justify-center">
        <div class="flex-initial w-2/5">
          <h1 class="font-medium text-2xl mt-3 text-center">新規登録</h1>
          <form action="" class="mt-6">
            <div class="my-5 text-sm">
              <label for="username" class="block text-black"
                >ニックネーム</label
              >
              <input
                id="username"
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
              <MySelect />
            </div>
            <div class="my-5 text-sm">
              <label for="password" class="block text-black">e-mail</label>
              <input
                id="password"
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
                placeholder="e-mail"
              />
            </div>
            <div class="my-5 text-sm">
              <label for="password" class="block text-black">Password</label>
              <input
                id="password"
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
              <label for="password" class="block text-black"
                >確認用Password</label
              >
              <input
                id="password"
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
                bg-gray-800
                p-3
                duration-300
                rounded-sm
                hover:bg-black
                w-full
              "
            >
              Sing-in
            </button>
          </form>
        </div>

        <div class="flex-intial w-3/6 ml-10 mt-40">
          <div
            class="flex md:justify-between justify-center items-center mt-10"
          >
            <div
              style="height: 1px"
              class="bg-gray-300 md:block hidden w-3/12"
            ></div>
            <p class="md:mx-2 text-sm font-light text-gray-400">
              連携済みアカウントで登録
            </p>
            <div
              style="height: 1px"
              class="bg-gray-300 md:block hidden w-3/12"
            ></div>
          </div>

          <div class="mt-7">
            <div>
              <button
                class="
                  text-center
                  w-full
                  text-white
                  bg-red-600
                  p-3
                  duration-300
                  rounded-sm
                  hover:bg-red-700
                  mb-10
                "
              >
                Google
              </button>
            </div>
            <div>
              <button
                class="
                  text-center
                  w-full
                  text-white
                  bg-blue-400
                  p-3
                  duration-300
                  rounded-sm
                  hover:bg-blue-500
                "
              >
                Twitter
              </button>
            </div>
          </div>

          <p class="mt-12 text-xs text-center font-light text-gray-400">
            <nuxt-Link tag="a" to="/login" class="text-black font-medium">
              ログインへ戻る
            </nuxt-Link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MySelect from '@/components/shared/MySelect.vue'
export default {
  components: {
    MySelect,
  },
}
</script>
<style scoped></style>
