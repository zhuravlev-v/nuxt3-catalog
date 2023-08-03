<template>
  <div class="select">
    <p class="select__label">
      {{ label }}
    </p>
    <ClientOnly>
      <el-select 
        :model-value="modelValue" 
        @change="updateValue" 
        :suffix-icon="IconTriangle" 
        class="m-2"
        placeholder="Select" size="large"
      >
        <el-option 
          v-for="option in options" :key="option.value" 
          :label="option.label" 
          :value="option.value"
        />
      </el-select>
    </ClientOnly>
  </div>
</template>

<script setup>
import IconTriangle from './icons/IconTriangle.vue';

const props = defineProps({
  label: { type: String, required: false, default: 'label' },
  options: { type: Array, required: true },
  modelValue: { type: String },
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (newValue) => {
  emit('update:modelValue', newValue)
}
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

  width: 100%;
  // @include small {
  // }

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