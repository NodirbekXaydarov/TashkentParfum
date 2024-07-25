<script setup lang="ts">
interface Props {
  phoneNumber: string;
}

interface Emits {
  (e: "change-register-step", value: number): void;
}

defineProps<Props>();
const emits = defineEmits<Emits>();

// const { verify } = useAuthStore();

const otpCode = ref({ code: "" });

const checkCode = () => {
  // const uuid = useCookie("sms-uuid");
  // await verify(otpCode.value.code, uuid.value as string)
  //   .then(() => {
  //   })
  //   .catch((err) => console.log(err));
  emits('change-register-step', 3)
};
</script>

<template>
  <button
    class="flex-center mb-8 group mr-auto"
    @click="$emit('change-register-step', 1)"
  >
    <i class="icon-arrow-left text-3xl transition-300 group-hover:text-red" />
  </button>
  <div class="h-full text-center">
    <h2 class="text-xl lg:text-2xl mb-2">{{ $t("enter_code") }}</h2>
    <p class="text-gray">{{ $t("code_sent_phone") }}:</p>
    <div class="flex justify-center gap-2">
      <p class="font-bold">+998 {{ phoneNumber }}</p>
      <i class="icon-edit text-gray-500" @click="$emit('change-register-step', 1)" />
    </div>
    <FormInputOtp :otp-code="otpCode" />
  </div>

  <BaseButton text="approve" class="w-full" size="small" @click="checkCode" />
</template>
