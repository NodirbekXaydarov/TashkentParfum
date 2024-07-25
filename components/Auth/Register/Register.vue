<script setup lang="ts">
import { load } from "@fingerprintjs/fingerprintjs";

import type { IRegisterForm } from "@/types/auth";

const fpPromise = load();
const fp = ref();

onBeforeMount(async () => {
  fpPromise.then((fp) => fp.get()).then((result) => (fp.value = result.visitorId));
});

interface Emits {
  (e: "change-process", value: string): void;
}

defineEmits<Emits>();

const currentStep = ref(1);

const form = ref<IRegisterForm>({
  fullName: "",
  password: "",
  phoneNumber: "",
  signature: '',
});

watch(() => fp.value, (newFp) => {
  form.value.signature = newFp
});

const changeRegisterProcess = (val: number) => (currentStep.value = val);
</script>

<template>
  <Transition name="fade" mode="out-in">
    <div
      v-if="currentStep == 1"
      class="w-full h-full flex flex-col justify-between gap-2 py-6 px-5"
    >
      <AuthRegisterEntrypoint
        :form="form"
        @change-process="(val: string) => $emit('change-process', val)"
        @change-register-step="changeRegisterProcess"
      />
    </div>
    <div
      v-else-if="currentStep == 2"
      class="w-full h-full flex flex-col justify-between gap-2 py-6 px-5"
    >
      <AuthRegisterVerify
        :phone-number="form.phoneNumber"
        @change-register-step="changeRegisterProcess"
      />
    </div>
    <div v-else class="w-full h-full flex flex-col justify-between gap-2 py-6 px-5">
      <AuthRegisterLaststep :form="form" @change-register-step="changeRegisterProcess" />
    </div>
  </Transition>
</template>
