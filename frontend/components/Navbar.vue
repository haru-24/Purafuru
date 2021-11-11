<template>
  <div>
    <nav
      class="
        font-sans
        flex flex-col
        text-center
        sm:flex-row sm:text-left sm:justify-between
        py-4
        px-6
        bg-orange-300
        shadow
        sm:items-baseline
        w-full
      "
    >
      <div class="mb-2 sm:mb-0">
        <nuxt-Link
          tag="a"
          to="/"
          href="/home"
          class="text-2xl no-underline text-grey-darkest hover:text-blue-dark"
          >Applecation Title</nuxt-Link
        >

        <a
          href="/one"
          class="
            text-lg
            no-underline
            text-grey-darkest
            hover:text-blue-dark
            ml-10
          "
        >
          <span class="material-icons text-2xl"> search </span>探す</a
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
          ><span class="material-icons text-2xl"> favorite_border </span>投稿</a
        >
      </div>
      <div>
        <span class="material-icons text-4xl"> account_circle </span>
      </div>
    </nav>
  </div>
</template>
