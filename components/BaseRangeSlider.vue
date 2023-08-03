<template>
  <div class="slider">
    <p class="slider__label">{{ label }}</p>
    <div class="slider__box">
      <div class="slider__inputs">
        <div class="input-wrapper">
          <input 
            id="min" 
            type="number" 
            :value="modelValue[0]" 
            @change="updateByInput" 
            :min="min" :max="max"
          >
        </div>
        <div class="input-wrapper">
          <input 
            id="max" 
            type="number" 
            :value="modelValue[1]" 
            @change="updateByInput" 
            :min="min" :max="max"
          >
        </div>
      </div>
      <el-slider 
        :model-value="modelValue" 
        @input="updateValue" 
        range :size="'small'" :input-size="'small'" 
        :min="min" :max="max"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  label: { type: String, default: 'label' },
  min: { type: Number, required: true },
  max: { type: Number, required: true },
  modelValue: { type: Array },
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (newRange) => {
  emit('update:modelValue', newRange)
}

const updateByInput = (event) => {
  const newValue = event.target.value
  let newRange = [props.modelValue[0], props.modelValue[1]]

  event.target.id === 'min'
    ? newRange[0] = newValue
    : newRange[1] = newValue

  newRange = [
    Math.max(newRange[0], props.min),
    Math.min(newRange[1], props.max)
  ]
  updateValue(newRange)
}
</script>

<style lang='scss' scoped>
.slider {
  padding-bottom: 6px;

  &__label {
    color: #666;
    font-size: 1.1em;
    font-weight: 400;
    margin-bottom: 10px;
  }

  &__box {
    border-radius: 4px;
    border: 1px solid #DEDEDE;
    background: $color-white;
    height: 46px;
    padding-top: 7px;
  }

  &__inputs {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: calc(100% - 12px);
    position: relative;

    &::after {
      content: ' ';
      display: block;
      width: 1px;
      height: 65%;
      background-color: #DEDEDE;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}

.input-wrapper {
  width: 50%;

  & input {
    border: 0;
    outline: 0;
    text-align: center;
    width: 100%;
    color: $color-black;
    font-size: 1.4em;
    font-weight: 400;
    line-height: 100%;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      /* display: none; <- Crashes Chrome on hover */
      -webkit-appearance: none;
      margin: 0;
      /* <-- Apparently some margin are still there even though it's hidden */
    }
  }
}

.el-slider {
  --el-slider-button-wrapper-size: 12px;
  --el-slider-button-size: 12px;
  --el-slider-height: 1px;
  --el-slider-button-wrapper-offset: -50%;

  transform: translateY(54%);
  width: calc(100% - 24px);
  margin: 0 auto;

  &:deep(.el-slider__button-wrapper) {
    transform: translate(-50%, -50%);
  }

  &:deep(.el-slider__button) {
    vertical-align: unset;
  }
}

.el-slider--small {
  height: 12px;
}
</style>