import { defineStore } from 'pinia'

export const useModalStore = defineStore('modals', () => {
  const flatModal = ref(false)
  const thanksModal = ref(false)

  const toggleModal = (modalName, status) => {
    modalName.value = status
  }

  return { 
    flatModal,
    thanksModal,
    toggleModal
  }
})