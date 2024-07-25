<template>
  <div class="w-full h-full py-6 px-5 flex flex-col justify-between">
    <div>
      <div class="text-xl lg:text-2xl font-semibold text-black">
        {{ $t("welcome") }} 👋
      </div>
    </div>

    <form class="h-full flex flex-col justify-between" @submit.prevent="handleForm">
      <div>
        <div class="text-lg lg:text-xl font-semibold text-black mt-8">
          {{ $t("login") }}
        </div>
        <div class="my-4">
          <FormInputPhone id="login-phone-number" v-model="loginForm.phone" />
        </div>
        <div class="my-4">
          <FormInputPassword id="login-password" v-model="loginForm.password" />
        </div>
        <div
          class="text-red/70 cursor-pointer w-fit ml-auto fontSize-10 transition-300 hover:text-red"
          @click="$emit('changeProcess', 'reset-password')"
        >
          {{ $t("forgot_password") }}
        </div>
      </div>
      <BaseButton
        type="submit"
        text="login"
        wrapper-class="w-full"
        size="small"
        :loading="isLoading"
      />
    </form>
    <div>
      <div class="flex-between gap-2 my-4">
        <div class="w-full h-[2px] bg-gray-400" />
        <div class="text-gray text-xs">{{ $t("or") }}</div>
        <div class="w-full h-[2px] bg-gray-400" />
      </div>
      <BaseButton
        size="small"
        text="register"
        class="w-full !bg-gray-300 !text-black hover:!shadow-card"
        @click="$emit('changeProcess', 'register')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import { z } from "zod";
interface Emits {
  (e: "changeProcess", value: string): void;
  (e: "close-modal"): void;
}
const emits = defineEmits<Emits>();

const { login, isLoading } = useAuthStore();

const loginSchema = toTypedSchema(
  z.object({
    phone: z.string(),
    password: z
      .string()
      .min(8, { message: "Password should be at least 8 characters long" }),
  })
);

const { validate, handleSubmit } = useForm({
  validationSchema: loginSchema,
  initialValues: {
    phone: "",
    password: "",
  },
});

const loginForm = ref<{ phone: string; password: string }>({
  phone: "",
  password: "",
});

watch(loginForm.value, (form) => {
  loginForm.value.phone = form.phone.replace(/[()-]/g, "");
  console.log(form);
});

async function handleForm() {
  const isFormValid = computed(() => Object.values(loginForm.value).every(Boolean));

  if (isFormValid.value) {
    loginForm.value.phone = loginForm.value.phone.replace(/[()-]/g, "");
    await login(loginForm.value);
    emits("close-modal");
  } else {
    alert("fill every field!!");
  }
}
</script>
