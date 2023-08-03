<template>
  <h1 class="title">
    Вам подходит {{ length }} {{ declinedWord }}
  </h1>
</template>

<script setup>
const length = ref(inject('filteredFlatsLength'))

watch(length, (newValue) => {
  declinedWord.value = declineWordByCount(newValue, cases)
})

const cases = ['вариант', 'варианта', 'вариантов'];
const declinedWord = ref(declineWordByCount(length, cases))
</script>

<style lang='scss' scoped>
.title {
  font-size: 2.8rem;
  font-style: normal;
  font-weight: 600;
  line-height: 110%;
  margin-bottom: 60px;

  @include extra-small {
    margin-bottom: 80px;
  }
}
</style>