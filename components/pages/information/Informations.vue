<template>
  <div>
    <div v-if="!individual_page_data"></div>
    <div v-else>
      <div v-if="$mq === 'lg'">
        <div class="ml-10">
          <div class="text-lg">
            <p class="inline-block mr-3">{{ individual_page_data.postedAt }}</p>
            <p class="inline-block mr-3">
              {{ individual_page_data.prefecture }}
            </p>
            <p class="mr-3 mt-3">
              <span class="mr-12">投稿者</span
              >{{ individual_page_data.postUser }}
            </p>
          </div>

          <div>
            <div class="text-4xl font-bold mt-5">
              <p>{{ individual_page_data.placeName }}</p>
            </div>
            <div class="mt-10 flex">
              <div class="flex-initial mr-7 font-bold text-2xl">
                <p>住所</p>
              </div>
              <div class="flex-initial">
                <p>{{ individual_page_data.postNumber }}</p>
                <p>{{ individual_page_data.address }}</p>
              </div>
            </div>
            <div>
              <div class="mr-7 font-bold text-2xl mt-10">
                <p>アピールポイント</p>
              </div>
              <div class="w-2/3 mt-3">
                <p class="break-words ml-10">
                  {{ individual_page_data.apealPoint }}
                </p>
              </div>
            </div>
            <div>
              <div class="mr-7 font-bold text-2xl mt-10">
                <p>オススメのメニュー or スポット</p>
              </div>
              <div class="w-2/3 mt-3">
                <p class="break-words ml-10">
                  {{ individual_page_data.recommendation }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- レスポンシブ対応 -->

      <div v-if="$mq === 'sm'">
        <div class="ml-2">
          <div class="text-sm">
            <p class="inline-block m2-1">{{ individual_page_data.postedAt }}</p>

            <p class="mr-1 mt-3 inline-block">
              <span class="mr-3">投稿者</span
              >{{ individual_page_data.postUser }}
            </p>
          </div>
          <div>
            <div class="mt-3 flex">
              <div class="flex-initial mr-7 font-bold text-base">
                <p>住所</p>
              </div>
              <div class="flex-initial text-sm">
                <p>{{ individual_page_data.postNumber }}</p>
                <p>{{ individual_page_data.address }}</p>
              </div>
            </div>
            <div>
              <div class="font-bold text-base mt-6">
                <p>アピールポイント</p>
              </div>
              <div class="w-11/12 mt-1 mr-2">
                <p class="break-words ml-5 text-sm">
                  {{ individual_page_data.apealPoint }}
                </p>
              </div>
            </div>
            <div>
              <div class="font-bold text-base mt-4">
                <p>オススメのメニュー or スポット</p>
              </div>
              <div class="w-11/12 mt-3">
                <p class="break-words ml-5 text-sm">
                  {{ individual_page_data.recommendation }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { Infomation } from '@/types/types'

export default defineComponent({
  props: {
    individual_page_data: {
      type: Object as PropType<Infomation>,
      default: () => {},
    },
  },
  setup() {
    return {}
  },
})
</script>

<style scoped></style>
