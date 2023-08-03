<template>
  <div class="home">
    <ThePanel />
    <FlatList :flatList="filteredFlats" />
  </div>
</template>

<script setup>
import { useFlatsStore } from '@/store/flats'
import { useFiltersFlatsStore } from '@/store/filtersFlats'

const flatsStore = useFlatsStore()
await flatsStore.fetchFlats()
const flats = flatsStore.flats

const filtersFlatsStore = useFiltersFlatsStore()
const filteredFlats = useFilter(flats, filtersFlatsStore)

const filteredFlatsLength = computed(() => filteredFlats.value.length)
provide('filteredFlatsLength', filteredFlatsLength)

</script>

<style lang='scss' scoped>
.home {
  max-width: 1302px;
  margin: 60px auto 0px;
  padding: 0 16px;
  
  @include extra-small {
    margin: 80px auto 0;
  }
}
</style>