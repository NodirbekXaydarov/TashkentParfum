<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-x-6 gap-y-3 mb-4"
  >
    <button
      v-for="(creditCard, idx) of creditCards"
      :key="idx"
      class="bg-white py-2 px-3 rounded-xl border border-gray-300 relative flex items-center gap-2 w-full transition-300"
      :class="{ 'border-red': creditCard.number === selectedCard.number }"
      @click="changeCard(creditCard)"
    >
      <div
        class="w-1 h-7 bg-gray-200 absolute left-0 top-1/2 rounded-r-md -translate-y-1/2 transition-300"
        :class="{ 'bg-red': creditCard.number === selectedCard.number }"
      />
      <div class="w-10 h-10 lg:w-12 lg:h-12">
        <img
          class="w-full object-cover"
          :src="`/images/payments/cards/${creditCard.type}.svg`"
          :alt="creditCard.type + 'svg logo'"
        >
      </div>
      <div class="font-bold text-black text-14">
        {{ creditCard.number }}
      </div>
    </button>
  </div>
</template>

<script setup lang="ts">
import type { ICreditCartForm } from "@/types/cart";

interface Props {
  creditCards: ICreditCartForm[];
}

interface Emits {
  (e: "change-credit-card", value: ICreditCartForm): void;
}

defineProps<Props>();
const emit = defineEmits<Emits>();

const selectedCard = ref<ICreditCartForm>({
  type: "humo",
  number: "",
  valid: "",
});

function changeCard(card: ICreditCartForm) {
  emit('change-credit-card', card);
  selectedCard.value = card
}
</script>
