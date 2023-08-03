<template>
  <div class="flat-list-container">
    <ul :class="classObject">
      <template v-if="flatList.length">
        <li v-for="flat of flatListPaginated" :key="flat.id" class="flat-list__item">
          <FlatCard :flat="flat" :layout="layout" />
        </li>
      </template>
      <template v-else>
        <li class="flat-list__empty">
          <p class="flat-list__empty-text">По вашему запросу ничего не найдено</p>
        </li>
      </template>
    </ul>
    <el-pagination     
      :current-page="currentPage"
      @current-change="currentChange"
      :page-size="pageSize"
      :pager-count="5"
      :total="flatList.length"
      layout="pager"
    />
  </div>
</template>

<script setup>
import { useFiltersFlatsStore } from '@/store/filtersFlats'

const props = defineProps({
  flatList: { type: Array, required: true }
})

const filtersFlatsStore = useFiltersFlatsStore()
const { togglerValue: layout } = toRefs(filtersFlatsStore.filterViews)

const classObject = computed(() => {
  return {
    'flat-list': true,
    [`flat-list_${layout.value}`]: props.flatList.length && true,
    [`flat-list__empty`]: props.flatList.length === 0,
  }
})

const currentPage = ref(1)
const pageSize = ref(4)

const setPageSize = () => {
  const windowWidth = document.body.clientWidth
  if (layout.value === 'card') {
    if (windowWidth < 768) {
      pageSize.value = 4
    }
    else if (windowWidth > 768 && windowWidth < 1350) {
      pageSize.value = 6
    }
    else {
      pageSize.value = 8
    }
  }
  else {
    pageSize.value = 6
  }
}

// Hydration node mismatch occurs because of client hook may change pageSize value
onBeforeMount(() => {
  setPageSize()
  window.addEventListener('resize', setPageSize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', setPageSize)
})

watch(layout, () => {
  setPageSize()
})

const currentChange = (newPage) => {
  currentPage.value = newPage
}
const flatListPaginated = computed(() => {
  const first = pageSize.value * (currentPage.value - 1)
  const last = pageSize.value * currentPage.value
  return props.flatList.slice(first, last)
})

</script>

<style lang='scss' scoped>

.el-pagination {
  --el-pagination-font-size: 18px;
  --el-pagination-bg-color: transparent;
  --el-pagination-button-disabled-bg-color: transparent;
  --el-pagination-button-width: min-content;
  --el-pagination-button-height: 32px;
  --el-pagination-button-color: #0A2F85;

  margin: 45px auto 0;
  width: max-content;

  &:deep(.el-pager li) {
    padding: 0 10px;
    font-weight: 600;
  }

  &:deep(.el-pager li.is-active) {
    font-weight: 600;
  }

}

.flat-list-container {
  margin: 0 0 60px;
  
  @include small {
    margin: 0 0 105px;
  }
  
  @include medium {
    margin: 0 0 155px;
  }
}
.flat-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(295px, 351px));
  justify-content: center;
  row-gap: 30px;
  column-gap: 30px;
  // justify-content: start;
  justify-content: center;

  &__empty {
    display: block;
  }

  @include extra-small {
    column-gap: 34px;
  }

  @include medium {
    grid-template-columns: repeat(auto-fit, minmax(295px, 308px));
  }

  @include big {
    grid-template-columns: repeat(auto-fit, minmax(295px, 295px));
    column-gap: 30px;
  }

  &_list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__item {}

  &__empty {
    margin: 80px auto 120px;

    @include small {
      margin: 187px auto 243px;
    }

    @include medium {
      margin: 208px auto 238px;
    }
  }

  &__empty-text {
    color: $color-black;
    text-align: center;
    font-size: 1.6em;
    font-style: normal;
    font-weight: 300;
    line-height: 155%;

    @include small {
      font-size: 2em;
    }
  }
}
</style>