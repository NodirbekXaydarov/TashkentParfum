<template>
  <button
    class="flex-center gap-2 active:scale-95 cursor-pointer transition-300 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-white disabled:hover:shadow-none"
    :class="[
      variants[variant],
      sizes[size],
      wrapperClass,
      { '!pointer-events-none': loading },
    ]"
    :disabled
    :type
    @click="$emit('click')"
  >
    <!-- loader -->
    <BaseLoader v-if="loading" :color="loaderColors[variant]" />

    <!-- main -->
    <template v-else>
      <slot>
        <i
          v-if="iconPosition === 'left'"
          class="text-xl leading-5 md:text-2xl md:leading-6 text-inherit"
          :class="[icon]"
        />
        <span v-if="text" class="text-xs leading-5 md:text-sm md:leading-6 text-inherit">
          {{ $t(text) }}
        </span>
        <i
          v-if="iconPosition === 'right'"
          class="text-xl text-gray-500 leading-5 md:text-2xl md:leading-6 text-inherit"
          :class="[icon]"
        />
      </slot>
    </template>
  </button>
</template>

<script setup lang="ts">
import type { IVariants, ISize, IProps, ILoaderColors } from '~/types/components';


const props = withDefaults(defineProps<IProps>(), {
  variant: "primary",
  size: "medium",
  iconPosition: "right",
  type: "button",
  wrapperClass: "",
});

interface Emits {
  (e: 'click') : void
}
defineEmits<Emits>()

const variants: IVariants = {
  primary: "bg-red text-white hover:bg-red-500 hover:shadow-red-btn",
  secondary: "bg-red-100 text-red hover:bg-red-200",
  transparent: "bg-white-12 text-white hover:bg-white-24",
};

const sizes: ISize = {
  small: "rounded-md py-2 px-4 text-xs leading-5",
  medium: "rounded-lg py-2.5 px-5 text-sm leading-6",
  large: "rounded-10 sm:py-3 py-2 sm:px-5.5 px-4 text-base leading-6.5",
};

const loaderColors: ILoaderColors = {
  primary: "white",
  transparent: "white",
  secondary: "#F62559",
};

const iconColor = computed(() =>
  props.variant === "secondary" && !props.disabled ? "text-red" : "text-white",
);

</script>