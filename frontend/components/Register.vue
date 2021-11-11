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
              <select name="pref" class="bg-gray-100 rounded-sm">
                <option value="">選択してください</option>
                <option value="北海道">北海道</option>
                <option value="青森県">青森県</option>
                <option value="岩手県">岩手県</option>
                <option value="宮城県">宮城県</option>
                <option value="秋田県">秋田県</option>
                <option value="山形県">山形県</option>
                <option value="福島県">福島県</option>
                <option value="茨城県">茨城県</option>
                <option value="栃木県">栃木県</option>
                <option value="群馬県">群馬県</option>
                <option value="埼玉県">埼玉県</option>
                <option value="千葉県">千葉県</option>
                <option value="東京都" selected>東京都</option>
                <option value="神奈川県">神奈川県</option>
                <option value="新潟県">新潟県</option>
                <option value="富山県">富山県</option>
                <option value="石川県">石川県</option>
                <option value="福井県">福井県</option>
                <option value="山梨県">山梨県</option>
                <option value="長野県">長野県</option>
                <option value="岐阜県">岐阜県</option>
                <option value="静岡県">静岡県</option>
                <option value="愛知県">愛知県</option>
                <option value="三重県">三重県</option>
                <option value="滋賀県">滋賀県</option>
                <option value="京都府">京都府</option>
                <option value="大阪府">大阪府</option>
                <option value="兵庫県">兵庫県</option>
                <option value="奈良県">奈良県</option>
                <option value="和歌山県">和歌山県</option>
                <option value="鳥取県">鳥取県</option>
                <option value="島根県">島根県</option>
                <option value="岡山県">岡山県</option>
                <option value="広島県">広島県</option>
                <option value="山口県">山口県</option>
                <option value="徳島県">徳島県</option>
                <option value="香川県">香川県</option>
                <option value="愛媛県">愛媛県</option>
                <option value="高知県">高知県</option>
                <option value="福岡県">福岡県</option>
                <option value="佐賀県">佐賀県</option>
                <option value="長崎県">長崎県</option>
                <option value="熊本県">熊本県</option>
                <option value="大分県">大分県</option>
                <option value="宮崎県">宮崎県</option>
                <option value="鹿児島県">鹿児島県</option>
                <option value="沖縄県">沖縄県</option>
              </select>
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

<script></script>
<style scoped></style>
