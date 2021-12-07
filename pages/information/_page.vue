<template>
  <div>
    <div v-if="$mq === 'lg'">
      <Navbar />
      <div v-if="!informationData" class="flex justify-center mt-44">
        <div
          class="animate-spin h-10 w-10 border-4 border-green-500 rounded-full"
          style="border-top-color: transparent"
        ></div>
      </div>
      <div v-else>
        <div class="flex mt-6">
          <Informations
            class="-mr-20 flex-1 w-1/2"
            :individual_page_data="informationData"
          />
          <div class="w-1/2 flex-1 mt-20">
            <ImageView
              class="flex justify-center"
              :individual_page_data="informationData"
            />
            <Favorit class="mt-20" :individual_page_data="informationData" />
          </div>
        </div>
        <Review :pageid="pageId" class="-mt-10" />
      </div>
    </div>

    <!-- レスポンシブ対応 -->
    <div v-if="$mq === 'sm'">
      <Navbar />
      <div v-if="!informationData" class="flex justify-center mt-44">
        <div
          class="animate-spin h-10 w-10 border-4 border-green-500 rounded-full"
          style="border-top-color: transparent"
        ></div>
      </div>
      <div v-else>
        <div class="">
          <div>
            <p>{{ informationData.prefecture }}</p>
          </div>
          <div class="flex justify-items-start w-2/3 inline-block">
            <p
              v-if="informationData.genre === 'スポット'"
              class="text-lg font-semibold inline-block mt-1 ml-2"
            >
              <span class="material-icons mr-2 inline-block mb-1">
                explore </span
              >{{ informationData.placeName }}
            </p>
            <p
              v-if="informationData.genre === 'グルメ'"
              class="text-lg font-semibold inline-block mt-1 ml-2"
            >
              <span class="material-icons mr-2 inline-block mb-1">
                restaurant_menu</span
              >{{ informationData.placeName }}
            </p>
          </div>
          <div class="flex justify-end -mt-10">
            <Favorit class="" :individual_page_data="informationData" />
          </div>
          <div>
            <ImageView :individual_page_data="informationData" />
          </div>
          <Informations class="" :individual_page_data="informationData" />
          <Review :pageid="pageId" class="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  ref,
  useRoute,
} from '@nuxtjs/composition-api'
import { getIndividualInformation } from '../../api/get'
import { Infomation } from '../../types/types'
import Navbar from '@/components/shared/Navbar.vue'
import Informations from '~/components/pages/information/Informations.vue'
import ImageView from '~/components/pages/information/ImageView.vue'
import Favorit from '~/components/pages/information/Favorit.vue'
import Review from '~/components/pages/information/Review.vue'

export default defineComponent({
  components: {
    Informations,
    Navbar,
    ImageView,
    Favorit,
    Review,
  },

  setup() {
    const pageId = useRoute().value.query.id as string
    const informationData = ref<Infomation | null | undefined>()

    onMounted(() => {
      // データ取得
      getIndividualInformation(pageId).then((result) => {
        informationData.value = result
        console.log(informationData.value)
      })
    })
    return {
      informationData,
      pageId,
    }
  },
})
</script>
