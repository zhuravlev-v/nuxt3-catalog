<template>
  <div class="sorter">
    <p class="sorter__text">Сортировать по:</p>
    <button 
      v-for="sorter of sorters" :key="sorter.id" 
      @click="toggleSorter(sorter.id)"
      :class="['sorter-btn', { 'sorter-btn__active': sorter.id === sortersValue }]" 
    >
      <span class="sorter-btn__text">{{ sorter.label }}</span>
      <div class="sorter-btn__arrow" :class="{ 'sorter-btn__arrow_up': sorter.ascent }">
        <IconsIconTriangle />
      </div>
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  sortersValue: { type: String, required: true },
  sorters: { type: Array, required: true },
})

const sorters = toRef(props, 'sorters')

const emit = defineEmits(['toggle'])

const toggleSorter = (id) => {
  emit('toggle', id)
}

</script>

<style lang='scss' scoped>
.sorter {
  color: #666;
  font-size: 1.4em;
  font-style: normal;
  font-weight: 300;
  // line-height: 155%;
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;

  @include small {
    font-size: 1.6em;
  }

  &__text {}
}

.sorter-btn {
  display: flex;
  gap: 4px;
  align-items: center;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;

  &__active {
    color: $color-gold;
  }

  &__text {}

  &__arrow {

    & img, svg {
      transition: transform 0.15s ease-out;
    }

    &_up {

      & img, svg {
        transform: rotate(180deg);
      }

    }
  }
}
</style>