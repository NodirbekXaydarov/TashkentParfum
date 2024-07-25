<template>
  <div class="flex-between flex-col !items-start sm:flex-row gap-2">
    <FormInput
      :id="id"
      v-model="internalModel.number"
      v-mask="'#### #### #### ####'"
      class="w-full lg:max-w-64"
      :label="label ?? 'Номер карты'"
      :required="required"
      type="text"
      inputmode="numeric"
      min="0"
      minlength="16"
      maxlength="16"
      placeholder="card_mask"
      :error="error"
    />
    <FormInput
      :id="id"
      v-model="internalModel.valid"
      v-mask="'##/##'"
      :label="label ?? 'Срок'"
      :required="required"
      type="text"
      inputmode="numeric"
      min="0"
      minlength="5"
      maxlength="5"
      placeholder="card_valid_mask"
      :error="error"
    />
  </div>
</template>

<script setup lang="ts">
import type { ICreditCartForm } from "~/types/cart";
import type { IInput } from "~/types/components";

interface Props extends IInput {
  modelValue: ICreditCartForm
}

interface Emits {
  (e: 'update:modelValue', value: ICreditCartForm): void
}

const props = defineProps<Props>();

const emit = defineEmits<Emits>();

const internalModel = reactive({ ...props.modelValue });

watch(() => props.modelValue, (newVal) => {
  Object.assign(internalModel, newVal);
});

watch(internalModel, (newVal) => {
  emit('update:modelValue', newVal);
}, { deep: true });

</script>