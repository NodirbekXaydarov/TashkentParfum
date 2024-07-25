<script setup lang="ts">
import type { IRegisterForm } from "@/types/auth";

interface Props {
  form: IRegisterForm;
}

interface Emits {
  (e: "change-process", value: string): void;
  (e: "change-register-step", value: number): void;
}

const props = defineProps<Props>();
const emits = defineEmits<Emits>();

const { entryPoint } = useAuthStore();

const isLoading = ref(false);
const form = unref(props.form);

watch(
  () => form.phoneNumber,
  () => {
    form.phoneNumber = form.phoneNumber.replace(/[()-]/g, "");
  }
);

const sendCode = async () => {
  isLoading.value = true;
  const { loading } = await entryPoint(form.phoneNumber);
  const session = useCookie("session");
  if (session.value) {
    isLoading.value = loading;
    emits("change-register-step", 2);
  }
};
</script>

<template>
  <h1 class="text-xl lg:text-2xl font-semibold text-black">
    {{ $t("register") }}
  </h1>

  <div class="h-full flex flex-col justify-between">
    <h2 class="text-lg lg:text-xl font-semibold mt-10 mb-2 text-black">
      {{ $t("enter_your_data") }}
    </h2>

    <form class="flex flex-col justify-between h-full" @submit.prevent="sendCode">
      <div class="flex flex-col gap-y-4">
        <FormInput
          id="fullName"
          v-model="form.fullName"
          type="text"
          label="fio"
          minlength="0"
          maxlength="32"
          required
          placeholder="full_name"
        />
        <FormInputPhone id="register-phone" v-model="form.phoneNumber" />
      </div>
      <BaseButton
        type="submit"
        text="send"
        wrapper-class="w-full"
        size="small"
        :disabled="isLoading"
        :loading="isLoading"
      />
    </form>
    <div>
      <div class="flex-between gap-2 my-4">
        <div class="w-full h-px bg-gray-400" />
        <div class="text-gray text-xs w-full text-center">{{ $t("have_account") }} ?</div>
        <div class="w-full h-px bg-gray-400" />
      </div>
      <BaseButton
        size="small"
        text="login"
        class="w-full !bg-gray-300 !text-black hover:!shadow-card"
        @click="$emit('change-process', 'login')"
      />
    </div>
  </div>
</template>
