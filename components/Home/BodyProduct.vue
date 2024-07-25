<template>
  <section class="container md:py-16 sm:py-10 py-8 flex justify-center">
    <div class="w-full">
      <SectionsHead
        head-text="products_for_body"
        navigate-text="all_products"
      />
      <div
        class="w-full grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-x-5 gap-y-4 justify-items-center"
      >
        <ProductCart
          v-for="product of bodyProducts"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { TProduct } from "~/types/products.types";

defineProps<{ bodyProducts: TProduct[] }>();
</script>
