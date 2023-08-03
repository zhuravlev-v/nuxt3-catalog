<template>
  <div class="filters">
    <div id="selectObjects" class="filters__select">
      <BaseSelect v-model="objectsValue" :options="objectsOptions" :label="'Выбрать ЖК'" />
    </div>
    <div class="filters__checkbox">
      <RoominessCheckbox />
    </div>
    <div id="rangeArea" class="filters__range">
      <BaseRangeSlider 
        :label="'Площадь, м2'" 
        v-model="areaMinMax"
        :min="areaMin" :max="areaMax"
      />
    </div>
    <div id="rangePrice" class="filters__range">
      <BaseRangeSlider 
      :label="'Стоимость, млн ₽'" 
      v-model="priceMinMax"
      :min="priceMin" :max="priceMax"
      />
    </div>
    <div id="selectObjects1" class="filters__select">
      <BaseSelect v-model="typesValue" :options="typesOptions" :label="'Выбрать тип'" />
    </div>
    <div class="filters__sorter">
      <SorterBy :sorters="sorters" :sortersValue="sortersValue" @toggle="handleSorter" />
    </div>
    <div class="filters__view">
      <ViewToggler v-model="togglerValue" :views="togglerViews" />
    </div>
  </div>
</template>

<script setup>
import { useFiltersFlatsStore } from '@/store/filtersFlats'

const filtersFlatsStore = useFiltersFlatsStore()
const { objectsValue, objectsOptions } = toRefs(filtersFlatsStore.filterObjects)
const { typesValue, typesOptions } = toRefs(filtersFlatsStore.filterTypes)
const { areaMinMax, areaMin, areaMax } = toRefs(filtersFlatsStore.filterRangeArea)
const { priceMinMax, priceMin, priceMax } = toRefs(filtersFlatsStore.filterRangePrice)
const { togglerValue, togglerViews } = toRefs(filtersFlatsStore.filterViews)
const { sortersValue, sorters } = toRefs(filtersFlatsStore.filterSorter)

const handleSorter = (id) => {
  filtersFlatsStore.toggleSorter(id)
}
</script>

<style lang='scss' scoped>
.filters {
  display: flex;
  flex-direction: column;
  gap: 24px;

  @include small {
    display: grid;
    align-items: end;
    grid-template-columns: repeat(6, 1fr);
    // grid-template-areas: 
    //   "head head"
    //   "nav  main"
    //   "nav  foot";
  }
  
  @include medium {
    // grid-template-columns: 16.995% 24.013% 16.995% 25% 16.995%;
    grid-template-columns: 15.5% 22% 15.5% 23% 15.5%;
    gap: 20px;
  }
  
  @include big {
    grid-template-columns: repeat(5, 230px);
    gap: 30px;
  }

  &__select {
    @include small {
      grid-column: span 3;
      grid-row: 1;
    }

    &#selectObjects {
      // grid-column: 1/5;
      @include medium {
        grid-column: 1;
      }
    }
    &#selectObjects1 {
      @include medium {
        // grid-column: 5/6;
        grid-column: span 1;
        grid-row: 1;
      }
    }
  }

  &__checkbox {
    @include small {
      grid-column: 1/3;
      grid-row: 2;
    }
    @include medium {
      grid-column: 2/3;
      grid-row: 1;
    }
  }

  &__range {
    grid-column: span 2;
    grid-row: 2;

    &#rangeArea {
      @include medium {
        grid-column: 3/4;
        grid-row: 1;
      }
    }

    &#rangePrice {
      @include medium {
        grid-column: 4/5;
        grid-row: 1;
      }
    }
  }

  &__sorter {
    @include small {
      grid-column: span 4;
      grid-row: 3;
    }

    @include medium {
      grid-column: 1/3;
      grid-row: 2;
    }
  }

  &__view {
    @include small {
      grid-column: span 2;
      grid-row: 3;
      justify-self: end;
    }

    @include medium {
      grid-column: -1/1;
      grid-row: 2;
    }
  }
}
</style>