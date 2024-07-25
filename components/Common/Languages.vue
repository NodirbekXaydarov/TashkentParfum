<template>
  <div
    ref="select"
    class="relative cursor-pointer rounded-lg py-2.5 px-3"
    :class="[
      { '!border-black': selectActive },
      { '!border-red': error },
      wrapperClass,
    ]"
    @click="toggleSelectActive"
  >
    <!-- select -->
    <div
      class="w-full flex-y-center justify-between gap-2 max-w-[74px]"
      :class="selectClass"
    >
      <p class="text-gray text-xs leading-130">{{ displayLabel }}</p>

      <i
        class="icon-chevron-down flex-center text-black transition-300"
        :class="{ 'rotate-180': selectActive }"
      />
    </div>

    <!-- options -->
    <div
      v-show="selectActive"
      class="absolute z-30 flex flex-col top-12 left-0 w-full border border-sky bg-white rounded-lg hover:shadow-toast transition-300 max-w-[100px]"
      :class="optionsWrapper"
      @click="onClickOption"
    >
      <span
        v-for="(option, key) in options"
        :key="option.id"
        class="w-full text-left flex py-2.5 px-3 bg-white first-of-type:border-none border-t border-sky text-base leading-5.8 text-gray-500 hover:bg-gray-200 hover:text-black transition-300"
        :class="[
          optionClass,
          { 'font-bold': isActiveOption(option) }, // Highlight selected option
        ]"
        @click="setActiveOption(option)"
      >
        {{ option.label }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { onClickOutside } from "@vueuse/core";

const options = [
  { id: 0, label: "O'zbekcha" },
  { id: 1, label: "Ўзбекча" },
  { id: 2, label: "Русский" },
];

const activeOption = ref(null);
const selectActive = ref(false);
const select = ref();

const displayLabel = computed(() => {
  return activeOption.value ? activeOption.value.label : options[0].label;
});

const isActiveOption = (option) => {
  return activeOption.value && option.id === activeOption.value.id;
};

const setActiveOption = (option) => {
  activeOption.value = option;
  selectActive.value = false;
};

const toggleSelectActive = () => {
  selectActive.value = !selectActive.value;
};

onClickOutside(select, (event) => {
  if (!select.value.contains(event.target)) {
    selectActive.value = false;
  }
});
</script>
