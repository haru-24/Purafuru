<template>
  <div class="">
    <nav
      class="
        font-sans
        flex flex-col
        text-center
        sm:flex-row sm:text-left sm:justify-between
        py-4
        px-6
        shadow
        sm:items-baseline
        w-full
        bg-green-300
      "
    >
      <div class="mb-2 sm:mb-0">
        <nuxt-Link
          tag="a"
          to="/"
          class="
            text-2xl
            no-underline
            text-grey-darkest
            hover:text-blue-dark
            font-extrabold
          "
          >Application Title</nuxt-Link
        >

        <nuxt-Link
          tag="a"
          to="/search"
          class="
            text-lg
            no-underline
            text-grey-darkest
            hover:text-blue-dark
            ml-10
          "
        >
          <span class="material-icons text-2xl"> search </span>探す</nuxt-Link
        >
        <a
          href="/two"
          class="
            text-lg
            no-underline
            text-grey-darkest
            hover:text-blue-dark
            ml-5
          "
          ><span class="material-icons text-2xl"> assignment </span>投稿</a
        >
      </div>
      <div>
        <nuxt-Link tag="a" to="mypage">
          <span class="material-icons text-4xl"> account_circle </span>
        </nuxt-Link>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'MyNavBar',
}
</script>
