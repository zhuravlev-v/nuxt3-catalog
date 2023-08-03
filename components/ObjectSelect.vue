<template>
  <div class="select">
    <p class="select__label">
      Выбрать ЖК
    </p>
    <ClientOnly>
      <el-select 
        v-model="valueObjects" 
        :suffix-icon="IconTriangle" 
        class="m-2"
        placeholder="Select" size="large"
      >
        <el-option 
          v-for="item in optionsObject" 
          :key="item.value" 
          :label="item.label" 
          :value="item.value"
        />
      </el-select>
    </ClientOnly>
  </div>
</template>

<script setup>
import IconTriangle from './icons/IconTriangle.vue';
import { useFlatsStore } from '@/store/flats'

// const flatsObjects = useFlatsStore().flatsObjects
// const valueObjects = ref('all')

// const optionsObject = computed(() => {
//   return [
//     { value: 'all', label: 'Любой' },
//     ...flatsObjects.map(object => ({ value: object, label: object }))
//   ]
// })
</script>

<style lang='scss' scoped>
.select {
  // TODO handle duplication
  &__label {
    color: #666;
    font-size: 1.1em;
    font-weight: 400;
    margin-bottom: 10px;
  }
}

.el-select {
  --el-select-input-font-size: 8px;
  --el-select-input-focus-border-color: #FDC83E;
  --el-color-primary: #000000;

  & .el-icon svg {
    width: 8px;
    height: 8px;
  }
}

// doesn't work
body:deep(.el-select-dropdown__item.selected) {
  color: #FDC83E !important;
}
</style>