<template>
  <section class="container flex justify-center">
    <div class="w-full">
      <SectionsHead
        head-text="parfume_from_top_brands"
        navigate-text="all_brands"
        route="/"
      />
      <div
        class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 !gap-x-6 gap-y-4 justify-items-center"
      >
        <BrandParfumTopParfum
          v-for="brand in brandsProducts"
          :key="brand.id"
          :brand="brand"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { TBrandsProduct } from "~/types/products.types";

defineProps<{ brandsProducts: TBrandsProduct[] }>();
</script>
