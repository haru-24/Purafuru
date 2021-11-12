<template>
  <div>
    <Navbar />
    <SerchBar class="mt-3" />
    <SearchSort />
    <SearchResult class="mt-5" />
    <PageNumbers class="mt-5" />
  </div>
</template>

<script>
import SerchBar from '../components/shared/SerchBar.vue'
import SearchSort from '../components/pages/search/SearchSort.vue'
import SearchResult from '../components/pages/search/SearchResult.vue'
import PageNumbers from '../components/shared/PageNumbers.vue'
import Navbar from '@/components/shared/Navbar.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    SerchBar,
    SearchSort,
    SearchResult,
    PageNumbers,
  },
}
</script>
