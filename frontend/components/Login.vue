<template>
  <div>
    <div class="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
      <h1 class="text-center text-3xl">title</h1>
      <div class="py-8 px-8 rounded-xl">
        <h1 class="font-medium text-2xl mt-3 text-center">ログイン</h1>
        <form action="" class="mt-6">
          <div class="my-5 text-sm">
            <label for="username" class="block text-black">e-mail</label>
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
            <div class="flex justify-end mt-2 text-xs text-gray-600">
              <a href="../../pages/auth/forget_password.html hover:text-black"
                >Forget Password?</a
              >
            </div>
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
            Login
          </button>
        </form>

        <div class="flex md:justify-between justify-center items-center mt-10">
          <div
            style="height: 1px"
            class="bg-gray-300 md:block hidden w-4/12"
          ></div>
          <p class="md:mx-2 text-sm font-light text-gray-400">
            Login With Social
          </p>
          <div
            style="height: 1px"
            class="bg-gray-300 md:block hidden w-4/12"
          ></div>
        </div>

        <div class="grid md:grid-cols-2 gap-2 mt-7">
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
          アカウントをお持ちではないですか?
          <nuxt-Link tag="a" to="/register" class="text-black font-medium">
            新規登録
          </nuxt-Link>
        </p>
      </div>
    </div>
  </div>
</template>

<script></script>
<style scoped></style>
