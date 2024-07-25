<template>
  <FormInput
    :id="id"
    v-model="model"
    :type="!type ? (isPassword ? 'password' : 'text') : type"
    :required="required"
    min="0"
    minlength="8"
    maxlength="32"
    :placeholder="placeholder ?? 'enter_password'"
    :label="label ?? 'password'"
  >
    <template #suffix>
      <span
        v-if="!type"
        class="cursor-pointer"
        @click="isPassword = !isPassword"
      >
        <i v-if="isPassword" class="icon-eye align-middle text-gray" />
        <i v-else class="icon-eye-closed align-middle text-gray" />
      </span>
      <span v-else class="cursor-pointer" @click="$emit('change-input-type')">
        <i v-if="type === 'password'" class="icon-eye align-middle text-gray" />
        <i v-else class="icon-eye-closed align-middle text-gray" />
      </span>
    </template>
  </FormInput>
</template>
<script setup lang="ts">
import type { IInput } from "~/types/components";

defineProps<IInput>();
defineEmits<{ "change-input-type": [] }>();
const model = defineModel<string>();

const isPassword = ref(true);
</script>
