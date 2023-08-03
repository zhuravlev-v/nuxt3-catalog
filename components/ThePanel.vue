<template>
  <div class="panel">
    <PanelTitle />
    <div class="panel__inner">
      <TheFilters />
    </div>
  </div>
</template>

<script setup>
</script>

<style lang='scss' scoped>
.panel {
  margin-bottom: 40px;
  padding-top: 30px;
  border-top: 1px solid #DEDEDE;

  @include extra-small {
    padding-top: 40px;
  }

  @include small {
    margin-bottom: 45px;
  }

  &__inner {

  }
}
</style>