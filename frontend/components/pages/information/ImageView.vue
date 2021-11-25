<template>
  <div>
    <img v-if="imageUrl.data" :src="imageUrl.data" class="w-11/12 h-400" />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  PropType,
  watch,
} from '@nuxtjs/composition-api'
import { getDownloadURL, getStorage, ref } from 'firebase/storage'
import { Infomation } from '@/types/types'
import { app } from '~/plugins/firebase'

export default defineComponent({
  props: {
    individual_page_data: {
      type: Object as PropType<Infomation>,
      default: () => {},
    },
  },

  setup(props) {
    const fetchImageData = reactive({
      imageData: '',
    })
    watch(
      () => props.individual_page_data,
      () => {
        fetchImageData.imageData = props.individual_page_data.image
      }
    )
    watch(fetchImageData, () => previewImage())

    const imageUrl = reactive({
      data: '',
    })

    const previewImage = () => {
      const storage = getStorage(app)
      getDownloadURL(ref(storage, fetchImageData.imageData))
        .then((res) => {
          console.log(res)
          imageUrl.data = res
        })
        .catch((err) => {
          console.log(err)
        })
    }
    return {
      imageUrl,
    }
  },
})
</script>

<style scoped>
.h-400 {
  height: 400px;
}
</style>
