<template>
  <div class="!hidden md:!flex flex-between w-fit">
    <div
      v-for="(link, index) in links"
      :key="index"
      class="cursor-pointer text-[0.875rem]"
    >
      <NuxtLink v-if="index !== links.length - 1" :to="link.path"
        >{{ link.label }}
        <span
          class="w-1 h-1 rounded-full bg-gray-400 inline-block mx-2 align-middle"
        />
      </NuxtLink>
      <span v-else class="text-gray-400 text-[0.875rem]">{{ link.label }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BreadcrumbLinks } from "@/types";
interface Props {
  links: BreadcrumbLinks[];
}
defineProps<Props>();
</script>
