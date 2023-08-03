<template>
  <el-radio-group :model-value="modelValue" @change="updateValue" size="large">
    <el-radio-button v-for="view in views" :key="view" :label="view">
      <slot>
        <component :is="view === 'card' ? viewGrid : viewList" />
      </slot>
    </el-radio-button>
  </el-radio-group>
</template>

<script setup>
const viewGrid = resolveComponent('icons/IconViewGrid')
const viewList = resolveComponent('icons/IconViewList')

const props = defineProps({
  views: { type: Array, required: true },
  modelValue: { type: String, required: true },
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (newValue) => {
  emit('update:modelValue', newValue)
}
</script>

<style lang='scss' scoped>
.el-radio-group {
  display: flex;
  gap: 10px;
}

.el-radio-button {
  --el-radio-button-checked-bg-color: #FDC83E;
  --el-radio-button-checked-text-color: var(--el-color-white);
  --el-radio-button-checked-border-color: #FDC83E;
  width: 46px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  border: 1px solid;
  border-color: #DEDEDE;
  background-color: transparent;
  cursor: pointer;
  transition: var(--el-transition-all);

  &:hover {
    border-color: $color-gold;

    &:deep(.paintable) {
      stroke: $color-gold;
    }
  }

  &:deep(.paintable) {
    stroke: $color-black;
    transition: all 0.45s ease;
  }

  &.is-active {
    background-color: var(--el-radio-button-checked-bg-color);
    border-color: var(--el-radio-button-checked-border-color);

    &:deep(.paintable) {
      stroke: $color-white;
    }

    &:deep(.el-radio-button__inner) {
      box-shadow: unset;

      &:hover {
        color: $color-white;
      }

      & img {}
    }
  }

  & :deep(.el-radio-button__inner) {
    border-radius: inherit;
    box-sizing: border-box;
    padding: 0;
    background-color: transparent;
    border: unset;

    &:hover {
      color: unset;
    }
  }

}
</style>