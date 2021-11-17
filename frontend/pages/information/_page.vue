<template>
  <div>
    <Navbar />
    <div class="flex mt-6">
      <PostInformation class="-mr-20 flex-1 w-1/2" :pagedatas="getValues" />
      <div class="w-1/2 flex-1">
        <PostCarousel class="mr-5" :pagedatas="getValues" />
        <Favorit class="mt-20" :pagedatas="getValues" />
      </div>
    </div>
    <Review :pageid="pageId" class="-mt-5" />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  ref,
  useFetch,
  useRoute,
} from '@nuxtjs/composition-api'
import axios, { AxiosResponse } from 'axios'
import Navbar from '@/components/shared/Navbar.vue'
import PostInformation from '@/components/pages/information/PostInformation.vue'
import PostCarousel from '~/components/pages/information/PostCarousel.vue'
import Favorit from '~/components/pages/information/Favorit.vue'
import Review from '~/components/pages/information/Review.vue'

export default defineComponent({
  components: {
    PostInformation,
    Navbar,
    PostCarousel,
    Favorit,
    Review,
  },

  setup() {
    const getValues = ref<AxiosResponse>()
    const pageId = useRoute().value.query.id

    const { fetch } = useFetch(() => {
      axios
        .get(`http://localhost:8888/post_info/${pageId}`)
        .then((res) => {
          console.log(res)
          getValues.value = res.data
        })
        .catch((err) => {
          throw err
        })
    })

    onMounted(() => {
      fetch()
    })
    return {
      getValues,
      pageId,
    }
  },
})
</script>
