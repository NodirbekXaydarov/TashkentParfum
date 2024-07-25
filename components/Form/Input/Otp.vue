<template>
  <div>
    <div class="flex justify-center gap-2 my-4">
      <input
        v-for="(input, index) in 6"
        :id="'otp-input-' + index"
        :key="index"
        ref="otpInputs"
        v-mask="'#'"
        type="text"
        inputmode="numeric"
        maxlength="1"
        class="py-2 text-center w-10 border rounded flex-center otp-inp outline-none border-gray-300 transition-300 focus-within:!border-red"
        min="0"
        max="9"
        @input="onInputChange(index, $event)"
        @keyup="onInputKeyup($event)"
      >
    </div>
    <p class="text-gray">
      {{ $t("not_received_code") }}?
      <span v-if="isTimeOut" class="text-red cursor-pointer" @click="startTimer">
        {{ $t("resend_code") }}
      </span>
      <span v-else class="text-red">
        {{ timer }}
      </span>
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  otpCode: {
    code: string;
  };
}

const props = defineProps<Props>();

const otpCode = unref(props.otpCode);
const timer = ref("00:59");
const isTimeOut = ref(false);
let second = 60;
let intervalId: NodeJS.Timeout;

const otpInputs = ref<(HTMLInputElement | null)[]>([]);

function startTimer() {
  second = 59;
  isTimeOut.value = false;
  intervalId = setInterval(() => {
    second--;
    if (second == 0) {
      isTimeOut.value = true;
      clearInterval(intervalId);
    }
    const s = second < 10 ? `0${second}` : second;
    timer.value = `00:${s}`;
  }, 1000);
}
startTimer();

function onInputChange(index: number, e: Event) {
  const target = e.target as HTMLInputElement;
  const val = target.value;

  if (isNaN(+val) || val === "") {
    target.value = "";
    return;
  }

  const otpArray = otpCode.code.split('');
  otpArray[index] = val;
  otpCode.code = otpArray.join('');

  if (val !== "" && index < otpInputs.value.length - 1) {
    const nextInput = otpInputs.value[index + 1];
    nextInput?.focus();
  }
}

function onInputKeyup(e: KeyboardEvent) {
  const target = e.target as HTMLInputElement;
  const key = e.key.toLowerCase();
  const index = otpInputs.value.indexOf(target);

  if ((key === "backspace" || key === "delete") && index > 0) {
    target.value = "";
    const prevInput = otpInputs.value[index - 1];
    prevInput?.focus();
  }
}
</script>
