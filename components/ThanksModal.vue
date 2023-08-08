<template>
  <VueFinalModal 
    :modal-id="'ThanksModal'"
    class="thanks-modal confirm-modal" 
    content-class="confirm-modal-content" 
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
    z-index="3000"
  >
    <div class="thanks-modal__inner">
      <el-button @click="emit('closeThanksModal')" :icon="IconCross" circle />
      <h1 class="thanks-modal__title">Заявка успешно отправлена</h1>
      <h2 class="thanks-modal__subtitle">Наш менеджер свяжется с вами для уточнения деталей</h2>
      <el-button class="thanks-modal__btn" @click="emit('closeThanksModal')">
        Вернуться в каталог
      </el-button>
    </div>
  </VueFinalModal>
</template>

<script setup>
import { VueFinalModal } from 'vue-final-modal'
import IconCross from './icons/IconCross.vue';

const emit = defineEmits(['closeThanksModal'])
</script>

<style lang='scss'>
.thanks-modal {

}

.thanks-modal .thanks-modal__inner {
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @include small {
    padding: 0;
  }
}

.thanks-modal .thanks-modal__title {
  color: $color-black;
  text-align: center;
  font-size: 2.8em;
  font-weight: 600;
  line-height: 120%;
  margin-bottom: 24px;

  @include small {
    font-size: 3.2em;
  }

  @include medium {
    font-size: 4.2em;
  }
}

.thanks-modal .thanks-modal__subtitle {
  color: $color-black;
  text-align: center;
  font-size: 1.6em;
  font-style: normal;
  font-weight: 300;
  line-height: 155%;
}

.thanks-modal .thanks-modal__btn {
  margin-top: 40px; 
  display: inline-block;
  position: static;
  width: 100%;
  max-width: 360px;
  border-radius: 30px;
  background-color: $color-gold;
  border: none;
  color: $color-white;
  height: unset;
  padding: 13px 34px;
  font-weight: 700;

  @include big {
  }
}

.thanks-modal .el-button {
  border-color: #DEDEDE;
}

.thanks-modal .vfm__content {
  background: #EFF2F9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  @include small {
    width: max-content;
    padding: 120px 73.5px 100px;
  }

  @include medium {
    padding: 140px 95px 120px;
    max-width: 840px;
    width: 100%;
  }
}
</style>