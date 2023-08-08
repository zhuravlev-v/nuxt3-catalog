<template>
  <VueFinalModal
    :modal-id="'FlatModal'"
    class="flat-modal confirm-modal" 
    content-class="confirm-modal-content" 
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
    z-index="3000"
  >
    <div class="flat-modal__inner">
      <el-button @click="emit('closeFlatModal', { openThanks: false })" :icon="IconCross" circle />
      <FlatModalInfo :flat="flat" />
      <FlatModalForm :flat="flat" @closeModal="emit('closeFlatModal', { openThanks: true, open: openThanksModal })" />
    </div>
  </VueFinalModal>
</template>

<script setup>
import { VueFinalModal, useModal } from 'vue-final-modal'
import IconCross from './icons/IconCross.vue';
import ThanksModal from '@/components/ThanksModal.vue'

const props = defineProps({
  flat: { type: Object }
})

const emit = defineEmits(['closeFlatModal'])

const { open: openThanksModal, close: closeThanksModal } = useModal({
  component: ThanksModal,
  attrs: {
    onCloseThanksModal() {
      closeThanksModal()
    },
  },
})
</script>

<style>
.confirm-modal {
  display: flex;
  justify-content: center;
  /* align-items: center; */
  align-items: flex-start;
  z-index: 3000 !important;
}

.confirm-modal-content {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: #fff;
  border-radius: 0.5rem;
}

.confirm-modal-content>*+* {
  margin: 0.5rem 0;
}

.confirm-modal-content h1 {
  font-size: 1.375rem;
}

.confirm-modal-content button {
  /* margin: 0.25rem 0 0 auto; */
  margin: 0;
  padding: 0 8px;
  border: 1px solid;
  border-radius: 0.5rem;
  width: 40px;
  height: 40px;
}

.confirm-modal-content button:hover {
  border-color: #DEDEDE;
}

.dark .confirm-modal-content {
  background: #000;
}

.flat-modal {
  overflow-y: auto;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(75, 70, 92, 0.68);
  z-index: 99999;

  & .vfm__overlay {
    display: none;
  }

  &:target {
    display: block;
    pointer-events: auto;
  }
}

@media (min-width: 768px) {
  .flat-modal {
    padding: 80px 16px;
  }
}

@media (min-width: 1024px) {
  .flat-modal {
    padding: 100px 16px;
  }
}

@media (min-width: 1350px) {
  .flat-modal {
    /* padding: 200px 16px; */
  }
}


.flat-modal__inner {
  padding-top: 60px;
  position: relative;
}

@media (min-width: 768px) {
  .flat-modal__inner {
    padding-top: 70px;
  }
}

@media (min-width: 1350px) {
  .flat-modal__inner {
    padding-top: 80px;
  }
}

.vfm__content {
  margin: auto;
  padding: 0;
  border-radius: 0;
  width: 100vw;
  min-height: 100vh;
}

@media (min-width: 768px) {
  .vfm__content {
    width: 100%;
    max-width: 90vw;
    min-height: unset;
  }
}

@media (min-width: 1350px) {
  .vfm__content {
    /* width: max-content; */
    max-width: 1540px;
  }
}

.el-button {
  --el-button-hover-bg-color: rgba(102, 102, 102, 0.1);
  position: absolute;
  top: 16px;
  right: 17px;
  border-color: #DEDEDE;
  color: #666666;

  @media (min-width: 768px) {
    top: 30px;
    right: 30px;
  }

  & path {
    stroke: #666666;
  }
}
</style>