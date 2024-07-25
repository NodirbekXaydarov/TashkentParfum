<template>
  <div class="relative">
    <div class="select-none">
      <span class="text-gray text-14">{{ label }}</span>

      <div
        class="flex-between gap-1 bg-gray-200 px-3 py-1 rounded-md transition-colors hover:bg-gray-300 cursor-pointer mt-2"
        :class="[
          { '!cursor-not-allowed bg-gray-300': !options.length },
          wrapperClass,
        ]"
        @click="toggleDropDown"
      >
        <i
          v-if="iconPosition === 'left'"
          class="text-black transition-transform"
          :class="[icon]"
        />
        <span class="leading-130 py-2">{{ selectedValue?.label || options[0].label }}</span>
        <i
          v-if="iconPosition === 'right'"
          class="text-black transition-transform"
          :class="[icon, { 'rotate-180 text-red': isDropDownOpened }]"
        />
      </div>
    </div>
    <Transition name="move" mode="out-in">
      <div
        v-if="isDropDownOpened && options.length"
        class="absolute top-full mt-1 z-10 w-full bg-white rounded-md border border-gray-300 max-h-52 overflow-y-auto"
        :class="[wrapperClass, dropdownClass]"
      >
        <div
          v-for="option in options"
          :key="option.id"
          class="px-4 h-11 flex items-center border-b border-gray-300 transition-colors hover:bg-gray-100 cursor-pointer"
          :class="[
            {
              'bg-gray-400/50 hover:bg-gray-400/50':
                option.id === selectedValue?.id,
            },
          ]"
          @click="changeSelectedVal(option)"
        >
          {{ option.label }}
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import type { ISelect } from "@/types";

interface Props {
  label?: string;
  options: ISelect[];
  placeholder?: string;
  modelValue: ISelect | null;
  class?: string;
  wrapperClass?: string;
  icon?: string;
  iconPosition?: string;
  dropdownClass?: string;
}

const props = withDefaults(defineProps<Props>(), {
  icon: "icon-chevron-down",
  iconPosition: "right",
});
const emits = defineEmits(["update:modelValue"]);

const isDropDownOpened = ref(false);
const selectedValue = ref(props.modelValue);

watch(
  () => props.modelValue,
  (newValue) => {
    selectedValue.value = newValue;
  },
);

const toggleDropDown = () => (isDropDownOpened.value = !isDropDownOpened.value);

function changeSelectedVal(val: ISelect) {
  selectedValue.value = val;
  emits("update:modelValue", val);
  toggleDropDown();
}
</script>

<style>
.select-enter-active,
.select-leave-active {
  transition: all 0.5s ease;
}

.select-enter-from,
.select-leave-to {
  opacity: 0;
  transform-origin: top;
  transform: scaleY(0.96);
}
</style>
