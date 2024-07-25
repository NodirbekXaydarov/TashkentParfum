<template>
  <Transition name="toast">
    <div
      v-if="toastActive"
      class="fixed top-6 right-6 w-84 flex-between gap-3 p-2 bg-white rounded-lg shadow-toast"
    >
      <!-- icons -->
      <div class="flex-y-center gap-2.5">
        <span
          class="h-16 w-1 rounded-full self-stretch flex-shrink-0 bg-red"
          :class="{
            'bg-red': error,
            'bg-yellow': error,
            'bg-green': !error,
          }"
        />
        <i
          class="w-8.5 h-8.5 flex-center text-22"
          :class="{
            'icon-circle-info text-red': error,
            'icon-circle-info text-yellow': error,
            'icon-check-circle text-green': error,
          }"
        />
      </div>

      <!-- info -->
      <div class="flex flex-col flex-grow gap-0.5">
        <h6 class="text-black text-base leading-5">Title</h6>
        <p class="text-gray text-sm leading-4">Description</p>
      </div>

      <!-- close -->
      <i
        class="w-6 h-6 icon-close-circle text-2xl leading-6 cursor-pointer text-gray-500"
        @click="hideToast"
      />
    </div>
  </Transition>
</template>

<script setup lang="ts">
defineProps<{ title: string; text: string; error: string }>();

const toastActive = ref(true);
const hideToast = () => (toastActive.value = false);
</script>

<style scoped>
.toast-enter-from,
.toast-leave-to {
  right: -100%;
}

.toast-leave-from {
  right: 26px;
}

.toast-enter-active,
.toast-leave-active {
  transition: all 1s linear;
}
</style>
