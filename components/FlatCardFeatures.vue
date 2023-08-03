<template>
  <div class="features card__features">
    <span class="feature" v-for="feature of featuresShorten">
      {{ feature }}
    </span>
    <el-tooltip
      v-if="isManyFeatures"
      class="box-item"
      :popper-class="'features__tooltip'"
      effect="dark"
      content="Акция: Подарок"
      placement="bottom-start"
    > 
      <template #content>
        <p class="feature-hidden" v-for="feature of featuresHidden">
          {{ feature }}
        </p>
      </template>
      <span class="feature">
        +{{ featuresHidden.length }}
      </span>
    </el-tooltip>
  </div>
</template>

<script setup scoped>
const props = defineProps({
  features: { type: Array, required: true }
})

const isManyFeatures = computed(() => {
  return props.features.length > 2 
})

const featuresShorten = computed(() => {
  return isManyFeatures 
  ? props.features.slice(0, 2)
  : props.features
})

const featuresHidden = computed(() => {
  return isManyFeatures 
  ? props.features.slice(2, props.features.length)
  : props.features
})

</script>

<style lang='scss'>
.el-popper.features__tooltip {
  --el-text-color-primary: #E5F3FF;
  padding: 8px 10px;
  border: none;

  // &:deep(.el-popper__arrow) {
  //   display: none;
  // }
}

.el-popper__arrow {
  display: none;
}

.feature.el-tooltip__trigger {
  cursor: pointer;
}

.feature-hidden {
  color: $color-blue;
  font-size: 1em;
  font-weight: 400;
  height: min-content;
}

.features {

}

.feature {
  display: inline-block;
  border-radius: 16px;
  background: $color-blue-light;
  color: $color-blue;
  padding: 6px 10px;
  font-size: 1.2em;
  font-weight: 400;
  height: min-content;
}
</style>