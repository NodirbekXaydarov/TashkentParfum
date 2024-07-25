<template>
  <section class="container md:py-16 sm:py-10 py-8 flex justify-center">
    <div class="w-full">
      <SectionsHead head-text="popular_sections" navigate-text="all_sections" />
      <div
        class="w-full grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 !gap-x-6 gap-y-4"
      >
        <PopularProductCard
          v-for="category of popularCategories"
          :key="category.id"
          :category="category"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { TPopularCategory } from "~/types/products.types";

defineProps<{ popularCategories: TPopularCategory[] }>();
</script>
