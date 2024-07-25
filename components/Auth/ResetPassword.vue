<template>
  <div class="w-full h-full flex flex-col justify-between">
    <!--! STEP - 1 -->
    <Transition name="fade" mode="out-in">
      <form
        v-if="resetProcess === 'step-1'"
        class="w-full h-full flex flex-col justify-between py-6 px-5"
        @submit.prevent="resetPassProcess('step-2')"
      >
        <div>
          <button class="flex-center mb-8 group" @click="$emit('changeProcess', 'login')">
            <i class="icon-arrow-left text-3xl transition-300 group-hover:text-red" />
          </button>
          <div class="lg:text-xl text-lg font-bold mb-4 text-black">
            {{ $t("reset_password") }}
          </div>
          <div class="h-full">
            <FormInputPhone id="phoneNumber" v-model="form.phone" />
          </div>
        </div>
        <BaseButton
          text="Подтвердить"
          type="submit"
          class="w-full"
          :class="!checkIsBtnDisabled() ? 'hover:!shadow-none' : 'hover:shadow-dark'"
          size="small"
          :disabled="!checkIsBtnDisabled()"
          @click="resetPassProcess('step-2')"
        />
      </form>
      <!--! STEP - 2 -->
      <div
        v-else-if="resetProcess === 'step-2'"
        class="w-full flex flex-col justify-center h-full py-6 px-5"
      >
        <button
          class="flex-center mb-8 group mr-auto"
          @click="resetPassProcess('step-1')"
        >
          <i class="icon-arrow-left text-3xl transition-300 group-hover:text-red" />
        </button>
        <div class="h-full text-center">
          <h2 class="text-xl lg:text-2xl mb-2">{{ $t("enter_code") }}</h2>
          <p class="text-gray">{{ $t("code_sent_phone") }}:</p>
          <div class="flex justify-center gap-2">
            <p class="font-bold">+998 {{ form.phone }}</p>
            <i
              class="icon-edit text-gray-500 cursor-pointer transition-300 hover:text-red"
              @click="resetPassProcess('step-1')"
            />
          </div>
          <FormInputOtp :otp-code="otpCode" />
        </div>

        <BaseButton
          text="approval"
          class="w-full"
          size="small"
          @click="handleSendOtp"
        />
      </div>
      <!--! STEP - 3 -->
      <div
        v-else-if="resetProcess === 'step-3'"
        class="w-full flex flex-col justify-between gap-4 h-full py-6 px-5"
      >
        <div>
          <button class="flex-center mb-8 group" @click="resetPassProcess('step-2')">
            <i class="icon-arrow-left text-3xl transition-300 group-hover:text-red" />
          </button>
          <div class="lg:text-xl text-lg font-bold mb-4 text-black">
            {{ $t("new_password") }}
          </div>
          <div class="my-4">
            <FormInputPassword
              id="password-reset-input"
              v-model="changedPasswords.password"
              :type="!isTypePassword ? 'password' : 'text'"
              @change-input-type="changeInputType"
            />
          </div>
          <div class="my-4">
            <FormInputPassword
              id="password-reset-confirm-input"
              v-model="changedPasswords.passwordConfirm"
              :type="!isTypePassword ? 'password' : 'text'"
              label="approval"
              placeholder="re_enter_password"
              @change-input-type="changeInputType"
            />
          </div>
          <div v-show="checkPasswordMatch()">
            {{ $t("password_not_match") }}
          </div>
        </div>
        <BaseButton
          text="approve"
          class="w-full"
          size="small"
          @click="$emit('changeProcess', 'login')"
        />
      </div>
    </Transition>
  </div>
</template>
<script setup lang="ts">
defineEmits<{ changeProcess: [value: string] }>();

const form = ref({
  phone: "",
  password: "",
});

const otpCode = ref({ code: "" })

const isTypePassword = ref(false);
const resetProcess = ref<steps>("step-1");
const changedPasswords = ref({ password: "", passwordConfirm: "" });

function handleSendOtp() {
  console.log(otpCode.value.code)
}

const checkIsBtnDisabled = () => form.value.phone.length === 14;
watch(
  () => form.value.phone,
  () => checkIsBtnDisabled(),
);
const resetPassProcess = (val: steps) => (resetProcess.value = val);
const changeInputType = () => (isTypePassword.value = !isTypePassword.value);

const checkPasswordMatch = () => changedPasswords.value.password.trim() === changedPasswords.value.passwordConfirm.trim();
</script>
