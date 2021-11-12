<template>
  <div>
    <div class="flex justify-center">
      <div
        class="bg-gray-200 w-5/6 h-32 rounded-md shadow-md flex justify-between"
      >
        <div class="mt-3">
          <span class="ml-3">日付</span>
          <span class="ml-3">東京都</span>
          <span class="ml-3">USERNAME</span>
          <p class="text-3xl font-semibold ml-3 mt-7">店名</p>
        </div>
        <div class="mt-5">
          <p>郵便番号</p>
          <p class="ml-3">777-7777</p>
          <p>住所</p>
          <p class="ml-3">広島県〇〇市あああ区ああああああ1-1-1-1-1</p>
        </div>
        <div class="flex items-end mb-3">
          <div class="inline-block">
            <div class="mr-3">
              <span class="material-icons text-3xl"> favorite_border </span>
              <span class="text-2xl font-medium">32</span>
            </div>
          </div>
          <div class="bg-white h-24 w-40 mr-3 inline-block">画像</div>
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <div class="w-5/6 flex justify-end">
        <button class="mr-3">削除</button>
        <button class="mr-5">編集</button>
      </div>
    </div>
  </div>
</template>
