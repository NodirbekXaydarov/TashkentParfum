<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="show"
        class="bg-black/80 fixed top-0 left-0 w-screen h-screen z-[9999] flex-center"
        @click="closeModal"
      >
        <!-- content -->

        <div
          class="relative w-full max-w-sm sm:max-w-md lg:max-w-[768px] mx-auto h-screen max-h-[75svh]"
          @click.stop
        >
          <slot />

          <button class="absolute top-4 left-[calc(100%-1rem)] md:left-[calc(100%+5rem)]" @click="closeModal">
            <i
              class="icon-close-circle text-gray md:text-white text-3xl hover:rotate-180 transition duration-150"
              :class="iconClass"
            />
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
interface Props {
  title?: string;
  show: boolean;
  iconClass?: string;
}
const { show } = defineProps<Props>();

const emit = defineEmits<{ close: [value: boolean] }>();

const closeModal = () => {
  emit("close", false);
};

onMounted(() => {
  document.addEventListener("keydown", (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      emit("close", false);
    }
  });
});
onMounted(() => {
  watch(
    () => show,
    () => (document.body.style.overflowY = show ? "hidden" : "auto"),
    { immediate: true }
  );
});
</script>
