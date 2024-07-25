import { ref } from "vue";

export const useModal = () => {
  const isOpen = ref(false);

  function openModal() {
    isOpen.value = true;
  }

  function closeModal() {
    isOpen.value = false;
  }

  return {
    isOpen,
    openModal,
    closeModal,
  };
};
