<template>
  <section class="lg:pt-8 md:pt-6 pt-4 lg:pb-16 md:pb-12 pb-8 bg-white">
    <div class="container w-full">
      <SectionsHead
        head-text="popular_brands"
        navigate-text="all_brands"
        route="/brands"
      />
    </div>
    <div class="flex flex-col gap-y-4">
      <BrandsPopularCarousel
        v-for="i in 3"
        :carusel-reverse="i % 2 == 0"
        :popular-brands="manufacturerList"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { popularBrands } from "~/mocks";
import type { TManufacturer } from "~/types/products.types";

defineProps<{ manufacturerList: TManufacturer[] }>();
</script>
