<template>
  <CommonModal :show icon-class="absolute">
    <Transition name="fade" mode="out-in">
      <div
        v-if="curStep === 'step-1'"
        class="bg-white w-full h-96 lg:max-w-96 mx-auto rounded-xl p-5 flex flex-col items-between"
      >
        <div class="flex-between mb-6">
          <div class="font-bold text-xl">Подтверждение</div>
        </div>

        <div class="h-full text-center">
          <h2 class="mb-2 font-bold">Введите код подтверждения</h2>
          <p class="text-gray">
            На ваш номер телефона отправлен код подтверждения для сброса пароля
          </p>
          <p class="font-bold">+998 99 *** ** 29</p>

          <FormInputOtp :otp-code="otpCode" />
        </div>
        <div>
          <BaseButton
            text="approve"
            class="w-full"
            size="small"
            @click="changeStep('step-2')"
          />
        </div>
      </div>
      <div
        v-else-if="curStep === 'step-2'"
        class="bg-white w-full h-96 lg:max-w-96 mx-auto rounded-xl p-5 flex flex-col items-between"
      >
        <h1>under the water</h1>
        <BaseButton
          text="approve"
          class="w-full"
          size="small"
          @click="$emit('add-card')"
        />
      </div>
    </Transition>
  </CommonModal>
</template>

<script setup lang="ts">
import type { steps } from "@/components/Auth/Register.vue";
interface Props {
  show: boolean;
}

interface Emits {
  (e: "add-card"): void;
}

defineProps<Props>();
defineEmits<Emits>();

const otpCode = ref("");
const curStep = ref<steps>("step-1");

const changeStep = (step: steps) => {
  curStep.value = step;
};
</script>
