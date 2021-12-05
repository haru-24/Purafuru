<template>
  <div>
    <div>
      <Navbar />
      <div
        v-if="error.statusCode === 404"
        class="bg-white relative overflow-hidden h-screen relative"
      >
        <div
          class="
            container
            mx-auto
            h-screen
            pt-32
            md:pt-0
            px-6
            z-10
            flex
            items-center
            justify-between
          "
        >
          <div
            class="
              container
              mx-auto
              px-6
              flex flex-col-reverse
              lg:flex-row
              justify-between
              items-center
              relative
            "
          >
            <div class="w-full mb-16 md:mb-8 text-center lg:text-left">
              <h2
                class="
                  font-light font-sans
                  text-center
                  lg:text-left
                  text-3xl
                  lg:text-5xl
                  mt-12
                  md:mt-0
                  text-gray-700
                "
              >
                お探しのページは
                <br />
                見つかりませんでした
              </h2>
              <nuxt-link
                tag="button"
                to="/"
                class="
                  px-2
                  py-2
                  w-36
                  mt-16
                  font-light
                  transition
                  ease-in
                  duration-200
                  hover:bg-green-500
                  border-2
                  text-lg
                  border-gray-300
                  bg-green-400
                  focus:outline-none
                  rounded-lg
                "
              >
                ホームへ戻る
              </nuxt-link>
            </div>
            <div
              class="
                block
                w-full
                mx-auto
                md:mt-0
                relative
                max-w-md
                lg:max-w-2xl
              "
            >
              <img src="@/assets/images/404_notfound.png" />
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div>
          errorが発生しました
          {{ error }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import Navbar from '@/components/shared/Navbar.vue'
export default defineComponent({
  components: {
    Navbar,
  },
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  setup(props) {
    console.log(props.error)
  },
})
</script>
