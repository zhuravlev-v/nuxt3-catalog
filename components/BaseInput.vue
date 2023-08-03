<template>
  <div class="input">
    <label :for="id" class="input__label">{{ label }}</label>
    <el-input 
      v-if="isPhone"    
      v-maska data-maska="+7 ### ###-##-##"   
      :model-value="modelValue"
      :id="id"
      @input="updateValue" 
      placeholder="+7 (XXX) XXX-XX-XX"
      :class="{
        'el-input__error': validation?.invalid
      }"
    />
    <el-input     
      v-else
      :model-value="modelValue"
      :id="id"
      @input="updateValue" 
      :placeholder="placeholder"
      :class="{
        'el-input__error': validation?.invalid
      }"
    />
    <p v-show="validation?.message" class="input__error">{{ validation?.message }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  isPhone: { type: Boolean, default: false },
  validation: { type: Object, required: false },
  label: { type: String, default: 'label' },
  placeholder: { type: String, default: 'Please input' },
  id: { type: [String, Number], required: true },
  modelValue: { type: String },
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (newRange) => {
  emit('update:modelValue', newRange)
}

</script>

<style lang='scss' scoped>
.input {
  color: #666;
  font-size: 1.4em;
  font-weight: 400;
  line-height: normal;

  &:deep(.el-input__error) {
    & .el-input__wrapper {
      box-shadow: 0 0 0 1px #EA5455 inset;
      
      &.is-focus {
        box-shadow: 0 0 0 1px EA5455 inset;
      }
    }
  }


  &:deep(.el-input__wrapper) {
    padding: 8px 11px;
    border-radius: 4px;
    box-shadow: 0 0 0 1px #EAEAEA inset;
    
    &.is-focus {
      box-shadow: 0 0 0 1px $color-gold inset;
    }
  }

  &:deep(.el-input__inner) {
    
  }

  &__label {
    display: inline-block;
    color: #929292;
    // font-size: 1.1em;
    font-size: 0.79em;
    font-weight: 400;
    line-height: 100%;
    margin-bottom: 10px;
  }

  &__error {
    color: #EA5455;
    font-size: 0.85em;
    font-weight: 400;
    line-height: 116.667%;
    margin-top: 4px;
  }
}
</style>