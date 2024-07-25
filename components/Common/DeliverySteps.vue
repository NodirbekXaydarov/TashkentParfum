<template>
  <div class="w-full lg:max-w-3xl">
    <div class="flex-between w-full rounded-full h-16 bg-white pr-4">
      <div
        class="w-full max-w-5 h-0.5"
        :class="currentStep > 1 || currentStep === 1 ? 'bg-red' : 'bg-gray-200'"
      />
      <div
        class="flex-center px-2 py-2 rounded-full gap-1 w-full md:max-w-48"
        :class="
          currentStep > 1
            ? 'bg-red text-white'
            : currentStep === 1
            ? 'bg-red-50'
            : 'bg-gray-200 text-black'
        "
      >
        <i class="icon-location text-inherit align-middle" />
        <span class="text-inherit font-semibold text-base hidden md:block">
          {{ $t('delivery_address') }}
        </span>
      </div>
      <div
        class="w-full max-w-16 h-0.5 bg-gray-200"
        :class="currentStep > 2 || currentStep === 2 ? 'bg-red' : 'bg-gray-200'"
      />
      <div
        class="flex-center px-4 py-2 bg-gray-200 rounded-full gap-1 w-full"
        :class="
          currentStep > 2
            ? 'bg-red text-white'
            : currentStep === 2
            ? 'bg-red-50'
            : 'bg-gray-200 text-black'
        "
      >
        <i class="icon-user text-inherit align-middle" />
        <span class="text-inherit font-semibold text-base hidden md:block">
          {{ $t('contact_detail') }}
        </span>
      </div>
      <div
        class="w-full max-w-16 h-0.5 bg-gray-200"
        :class="currentStep > 3 || currentStep === 3 ? 'bg-red' : 'bg-gray-200'"
      />
      <div
        class="flex-center px-4 py-2 bg-gray-200 rounded-full gap-1 w-full md:max-w-36"
        :class="
          currentStep > 3
            ? 'bg-red text-white'
            : currentStep === 3
            ? 'bg-red-50'
            : 'bg-gray-200 text-black'
        "
      >
        <i class="icon-wallet text-inherit align-middle" />
        <span class="text-inherit font-semibold text-base hidden md:block"> Оплата </span>
      </div>
    </div>
    <div class="bg-white rounded-2xl mt-4 p-5">
      <slot />
      <div class="flex items-center justify-between border-t pt-5 mt-5">
        <BaseButton
          icon-position="left"
          icon="icon-arrow-left !text-black"
          text="to_cart"
          size="small"
          wrapper-class="!bg-gray-200 !text-black hover:!bg-gray-300"
          class="hover:!shadow-none"
          @click="$emit('prevStep')"
        />
        <BaseButton
          icon-position="right"
          icon="icon-arrow-right"
          text="continue"
          size="small"
          variant="primary"
          :disabled="!canGoNext"
          :class="{ 'hover:!shadow-none': true }"
          @click="handleNextStep"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  currentStep: number;
  canGoNext: boolean;
}
const { canGoNext, currentStep } = defineProps<Props>();
const emits = defineEmits<{ prevStep: []; nextStep: []; "handle-payment": [] }>();

watch(
  () => canGoNext,
  (value) => {
    console.log(value);
  }
);

function handleNextStep() {
  if (currentStep < 3) {
    emits("nextStep");
  } else {
    emits("handle-payment");
  }
}
</script>
