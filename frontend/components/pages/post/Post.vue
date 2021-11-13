<template>
  <div class="flex justify-between">
    <div class="bg-white w-5/12 m-auto mt-3 border-2">
      <div class="py-4 px-4 flex justify-center">
        <div class="flex-initial w-4/5">
          <form>
            <div class="my-5 text-sm">
              <label class="block text-black">ジャンル</label>
              <select
                class="
                  border border-gray-300
                  text-gray-600
                  h-10
                  pl-5
                  pr-7
                  bg-white
                  hover:border-gray-400
                  focus:outline-none
                  appearance-none
                  mt-2
                "
              >
                <option value="">選択してください</option>
                <option value="グルメ">グルメ</option>
                <option value="スポット">スポット</option>
              </select>
            </div>
            <div class="my-5 text-sm">
              <label class="block text-black"
                >名前(店名,地名,建物名)<span>※</span></label
              >
              <input
                id="password"
                type="password"
                class="rounded-sm px-4 py-2 mt-3 border-2 w-full"
              />
            </div>
            <div class="my-5 text-sm">
              <label class="block text-black">郵便番号</label>
              <input class="rounded-sm px-2 mt-3 focus:outline-none border-2" />
            </div>
            <div class="my-5 text-sm">
              <label class="block text-black">住所</label>
              <textarea
                cols50
                class="rounded-sm px-4 py-2 mt-3 border-2 w-full"
              />
            </div>
            <div class="my-5 text-sm">
              <label class="block text-black"
                >アピールポイント(200字以内)<span>※</span></label
              >
              <textarea
                cols50
                class="rounded-sm px-4 py-2 mt-3 border-2 w-full"
              />
            </div>
            <div class="my-5 text-sm">
              <label class="block text-black"
                >私の一押し！(メニューor景色など 50字以内)</label
              >
              <textarea
                cols50
                class="rounded-sm px-4 py-2 mt-3 border-2 w-full"
              />
            </div>
            <p><span>※必須</span></p>
          </form>
        </div>
      </div>
    </div>
    <div class="w-5/12 mr-16">
      <div class="bg-white w-full mt-3 border-2 border-dashed py-60">
        <div class="h-full w-full text-gray-400 text-center text-4xl">
          image
        </div>
      </div>
      <div class="flex justify-center mt-10">
        <button
          type="button"
          class="
            bg-red-500
            hover:bg-red-700
            text-white
            font-bold
            py-2
            px-4
            border border-red-700
            rounded
            mr-5
          "
        >
          削除
        </button>
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
        >
          投稿
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
span {
  color: red;
}
textarea {
  resize: none;
}
</style>
