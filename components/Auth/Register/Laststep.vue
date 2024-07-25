<script setup lang="ts">
import type { IRegisterForm } from "@/types/auth";

interface Props {
  form: IRegisterForm;
}

interface Emits {
  (e: "change-register-step", value: number): void;
}

const props = defineProps<Props>();
defineEmits<Emits>();

const { register } = useAuthStore();

const passwordConfirm = ref("");
const isTypePassword = ref(false);

const form = unref(props.form);

const changeInputType = () => (isTypePassword.value = !isTypePassword.value);

async function handleRegister() {
  console.log("register started");
  await register(form);
}
</script>

<template>
  <div class="text-lg lg:text-xl font-bold text-black">
    {{ $t("safety") }}
  </div>
  <div>
    <div class="lg:text-xl text-lg font-bold mb-4 text-black">
      {{ $t("set_password") }}
    </div>
    <div class="my-4">
      <FormInputPassword
        id="password-reset-input"
        v-model="form.password"
        :type="!isTypePassword ? 'password' : 'text'"
        @change-input-type="changeInputType"
      />
    </div>
    <div class="my-4">
      <FormInputPassword
        id="password-reset-confirm-input"
        v-model="passwordConfirm"
        :type="!isTypePassword ? 'password' : 'text'"
        label="approval"
        placeholder="re_enter_password"
        @change-input-type="changeInputType"
      />
    </div>
  </div>
  <BaseButton text="approval" class="w-full" size="small" @click="handleRegister" />
</template>
