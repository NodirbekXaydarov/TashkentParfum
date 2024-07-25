<template>
  <div class="w-full flex justify-between items-center mb-5 container">
    <h3
      class="font-proxima-nova font-semibold leading-130 md:text-32 sm:text-2xl text-lg text-black"
    >
      {{ $t(headText) }}
    </h3>
    <NuxtLink
      v-show="navigateText"
      class="flex items-center gap-1 group cursor-pointer"
      :to="route"
    >
      <span
        class="font-proxima-nova text-base leading-130 text-gray-500 group-hover:text-red transition duration-200"
      >
        {{ $t(navigateText ?? "") }}
      </span>
      <i
        class="icon-arrow-right text-gray-500 group-hover:text-red transition duration-200"
      />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">

interface IProps {
  headText: string;
  navigateText?: string;
  route?: string;
}
defineProps<IProps>();
</script>
