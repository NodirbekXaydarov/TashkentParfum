<template>
  <article
    class="relative overflow-hidden group hover:shadow-card transition duration-300 w-full bg-white rounded-2xl md:pl-5 md:pt-5 sm:pl-4 sm:pt-4 pl-3 pt-3 pb-4 cursor-pointer"
  >
    <div class="flex flex-col items-start justify-between h-full">
      <p
        class="font-proxima-nova leading-130 md:text-xl sm:text-lg text-base pr-[40%]"
      >
        {{ category?.title }}
      </p>
      <div class="opacity-0 group-hover:opacity-100 transition duration-300">
        <NuxtLink :to="'/products/' + category?.title" class="text-sm text-red">
          {{ $t("go_home") }}
        </NuxtLink>
      </div>
    </div>
    <img
      class="absolute right-0 bottom-0 w-[28%]"
      :src="category?.icon_src.medium"
      :alt="category?.title"
    />
  </article>
</template>

<script setup lang="ts">
import type { TPopularCategory, TCategoryDetail } from "~/types/products.types";

defineProps<{ category: TPopularCategory | TCategoryDetail }>();
</script>
