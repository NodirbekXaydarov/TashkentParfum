<template>
  <div v-if="showBtn" class="flex !items-center gap-1 mt-6">
    <BaseButton
      text=""
      icon="icon-minus-circle !text-red"
      icon-position="right"
      variant="secondary"
      wrapper-class="!bg-white !py-2.5 !px-[13px] !rounded-r-sm border border-white hover:!border-red-20 hover:!bg-red-30"
      @click="minusBasketBtn"
    />
    <FormInput
      type="text"
      wrapper-class="!bg-white rounded-sm !px-0"
      input-class="w-full text-center !px-0"
      v-model="countProduct"

    />
    <BaseButton
      text=""
      icon="icon-add-circle !text-green"
      icon-position="right"
      variant="secondary"
      wrapper-class="!bg-white !py-2.5 !px-[13px] !rounded-l-sm border border-white hover:!border-green-100 hover:!bg-green-10"
      @click="addBasketBtn"
    />
  </div>
</template>

<script setup lang="ts">
interface Emits {
  (e: 'reset-cart-btn', value: boolean): void
}

interface IProps {
  showBtn: boolean
}

defineProps<IProps>()

const emit = defineEmits<Emits>();

const countProduct = ref(1);

const addBasketBtn = () => {
  return countProduct.value++;
};

const minusBasketBtn = () => {
  if (countProduct.value <= 1) {
    emit('reset-cart-btn', false)
    return countProduct.value = 1;
  }
  return countProduct.value--;
};
</script>
