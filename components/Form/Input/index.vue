<template>
  <div>
    <label
      v-if="label"
      :for="id"
      class="mb-2 inline-block fontSize-10 text-gray"
      >{{ $t(label) }}</label
    >
    <div
      class="relative flex-center gap-1 rounded-lg border focus-within:border-gray-400 bg-gray-200 px-3 py-2.5 transition-300"
      :class="[wrapperClass, { '!border-red': error }]"
    >
      <slot name="prefix" />
      <input
        :id="id"
        v-model="model"
        :type="type"
        autocomplete="off"
        :placeholder="$t(placeholder ?? '')"
        :required="required"
        class="border border-red text-base leading-5.5 text-black bg-transparent flex-grow border-none outline-none placeholder:text-gray-500 group-input"
        :class="[inputClass, { '!text-red': error }]"
      >
      <slot name="suffix" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IInput } from "@/types/components";

defineProps<IInput>();
const model = defineModel<string>();
</script>

<style scoped>
input[type="search"]::-webkit-search-cancel-button {
  appearance: none;
  -webkit-appearance: none;
}
</style>
