<template>
  <div class="bg-primary rounded-b-lg p-5 pt-10 flex flex-col">
    <p class="text-4xl font-bold">{{ $auth.user.user_name }}</p>
    <button
      class="
        mt-8
        w-32
        border border-gray-500
        text-gray-500
        rounded-md
        px-4
        py-2
        m-2
        transition
        duration-500
        ease
        hover:text-white hover:bg-gray-600
        focus:outline-none focus:shadow-outline
      "
      @click="$auth.logout()"
    >
      ログアウト
    </button>
    <div class="mb-1 mt-3 w-full">
      出身地 <span class="ml-5">{{ $auth.user.birth_place }}</span>
    </div>
    <div class="mb-1 mt-5 w-full">
      総お気に入り数
      <span v-if="user_favorite_count" class="ml-5">{{
        user_favorite_count
      }}</span>
      <span v-else>0</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['user_favorite_count'],
}
</script>
