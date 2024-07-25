<template>
  <FormInput
    :id="id"
    v-model="model"
    v-mask="'(##)-###-##-##'"
    :label="label ?? 'phone_number'"
    required
    type="text"
    inputmode="numeric"
    min="0"
    minlength="9"
    maxlength="9"
    placeholder="phone_placeholder"
    :error="error"
  >
    <template #prefix>
      <span>+998</span>
    </template>
  </FormInput>
</template>

<script setup lang="ts">
import type { IInput } from "@/types/components";

const model = defineModel<string>();
defineProps<IInput>();
</script>

<style scoped>
input[type="search"]::-webkit-search-cancel-button {
  appearance: none;
  -webkit-appearance: none;
}
</style>
