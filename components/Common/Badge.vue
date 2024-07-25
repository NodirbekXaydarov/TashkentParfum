<template>
  <span
    v-if="count"
    class="w-4.5 h-4.5 p-0.5 flex-center rounded-full bg-red shadow-badge text-white text-10 leading-3 transition-300"
    :class="wrapperClass"
  >
    {{ count }}
  </span>
</template>

<script setup>
const props = defineProps({
  count: {
    type: Number,
    required: true,
    default: 0,
  },
  wrapperClass: {
    type: String,
    required: false,
  },
});
</script>
