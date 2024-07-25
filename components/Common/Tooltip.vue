<script setup lang="ts">
defineProps<{ text: string }>();
</script>
<template>
  <div class="relative group cursor-pointer">
    <span
      class="absolute -top-9 p-1 rounded transition-300 text-white bg-gray -z-30 opacity-0 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 group-hover:z-0"
    >
      {{ text }}
    </span>
    <slot />
  </div>
</template>
