<template>
  <CommonModal
    :show
    icon-class="absolute -top-2 lg:right-10 right-0"
    @close="handleCloseModal"
  >
    <div
      class="w-full max-w-md lg:max-w-[50rem] h-full lg:max-h-[34rem] flex-between mx-auto bg-white rounded-xl relative"
    >
      <div class="w-full h-full">
        <Transition name="fade" mode="out-in">
          <AuthLogin
            v-if="currentProcess === 'login'"
            @change-process="changeProcess"
            @close-modal="handleCloseModal"
          />
          <AuthResetPassword
            v-else-if="currentProcess === 'reset-password'"
            @change-process="changeProcess"
          />
          <AuthRegister
            v-else-if="currentProcess === 'register'"
            @change-process="changeProcess"
          />
        </Transition>
      </div>
      <div class="w-full h-full bg-red-gradient p-4 rounded-r-xl hidden lg:block">
        <div class="auth-bg-pattern flex flex-col justify-center text-center">
          <div>
            <div class="flex-x-center">
              <img
                class="w-24 h-12"
                src="/images/logo.svg"
                alt="toshkent parfum logo-white"
              />
            </div>
            <p class="text-white mt-3">
              {{ $t("perfume_info") }}
            </p>
          </div>
          <div class="my-4 flex-x-center">
            <img src="/images/auth/banner.webp" alt="toshkent parfum auth banner" />
          </div>

          <div class="flex-center gap-4">
            <a
              v-for="appLink in mobileAppStoreLinks"
              :key="appLink.key"
              :href="appLink.link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                class="h-12 object-contain object-center"
                :src="appLink.img"
                :alt="appLink.key"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </CommonModal>
</template>

<script setup lang="ts">
import { mobileAppStoreLinks } from "@/data";
interface Props {
  show: boolean;
}

interface Emits {
  (e: "close"): void;
}

defineProps<Props>();
const emits = defineEmits<Emits>();

const currentProcess = ref("login");
const changeProcess = (val?: string) => (currentProcess.value = val ?? "");

function handleCloseModal() {
  changeProcess("login");
  emits("close");
}
</script>
