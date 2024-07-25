<template>
  <label
    id="test"
    :class="{ '!bg-red': isChecked }"
    class="relative bg-gray-25 rounded-full flex items-center cursor-pointer w-11 h-6 group transition-300"
  >
    <!-- circle -->
    <span
      class="w-5 h-5 rounded-full bg-white group-hover:shadow-black-sm flex-shrink-0 transition-300"
      :class="{ 'translate-x-5.5': isChecked, 'translate-x-0.5': !isChecked }"
    />

    <input
      v-model="isChecked"
      type="checkbox"
      class="absolute top-0 opacity-0"
    >
  </label>
</template>

<script setup>
const isChecked = ref(false);
</script>


