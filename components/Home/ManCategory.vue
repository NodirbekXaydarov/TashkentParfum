<template>
  <section class="container md:py-16 sm:py-10 py-8 flex justify-center">
    <div class="w-full">
      <SectionsHead
        head-text="best_for_man"
        navigate-text="all_categories"
        route="/products/categories"
      />
      <div
        class="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 !gap-x-6 gap-y-4"
      >
        <PopularProductCard
          v-for="category of manCategories.categories"
          :key="category?.id"
          :category="category"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { TCategoryDetail } from "~/types/products.types";

defineProps<{ manCategories: TCategoryDetail }>();
</script>
