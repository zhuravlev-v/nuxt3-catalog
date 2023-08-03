<template>
  <div class="checkbox">
    <p class="checkbox__label">Комнатность</p>
    <el-checkbox-group v-model="roominessValue" size="large">
      <el-checkbox-button v-for="room in rooms" :key="room" :label="room">
        {{ room }}
      </el-checkbox-button>
    </el-checkbox-group>
  </div>
</template>

<script setup>
import { useFiltersFlatsStore } from '@/store/filtersFlats'

const store = useFiltersFlatsStore()
const { roominessValue, rooms } = toRefs(store.filterRoominess)
</script>

<style lang='scss' scoped>
.checkbox {
  &__label {
    color: #666;
    font-size: 1.1em;
    font-weight: 400;
    margin-bottom: 10px;
  }
}
.el-checkbox-group {
  display: flex;
  gap: 10px;
}

.el-checkbox-button {
  --el-checkbox-button-checked-bg-color: #FDC83E;
  --el-checkbox-button-checked-text-color: var(--el-color-white);
  --el-checkbox-button-checked-border-color: #FDC83E;

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
    
    &:deep(.el-checkbox-button__inner) {
      color: $color-gold;
    }
  }

  &.is-checked {
    background-color: var(--el-checkbox-button-checked-bg-color);
    border-color: var(--el-checkbox-button-checked-border-color);

    &:hover {
      &:deep(.el-checkbox-button__inner) {
        color: $color-white;
      }
    }

    &:deep(.el-checkbox-button__inner) {
      box-shadow: unset;

      &:hover {
        color: $color-white;
      }
    }
  }

  & :deep(.el-checkbox-button__inner) {
    border-radius: inherit;
    box-sizing: border-box;
    // width: calc(100% - 2px);
    // height: calc(100% - 2px);
    padding: 0;
    // display: flex;
    // align-items: center;
    // justify-content: center;
    background-color: transparent;
    border: unset;

    &:hover {
      // color: unset;
      color: var(--el-button-text-color,var(--el-text-color-regular));
    }
  }

}
</style>