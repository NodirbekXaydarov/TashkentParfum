<template>
  <div class="flex flex-col gap-2" :class="wrapperClass">
    <label
      :for="id"
      :id="id"
      class="text-sm leading-4.5 text-gray"
      :class="labelClass"
    >
      {{ label }}
    </label>

    <slot />
  </div>
</template>

<script setup lang="ts">
// interface IProps {
//   id: number;
//   label: string
//   labelClass: string
//   wrapperClass: string
// }

// defineProps<IProps>()
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  labelClass: {
    type: String,
    required: false,
  },
  wrapperClass: {
    type: String,
    required: false,
  },
});
</script>
