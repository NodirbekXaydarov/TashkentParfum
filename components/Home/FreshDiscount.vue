<template>
  <section class="container md:pt-16 sm:pt-10 pt-8 flex justify-center">
    <div class="w-full">
      <SectionsHead
        head-text="fresh_discount"
        navigate-text="all_goods_in_discount"
      />
      <div
        class="w-full grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-x-5 gap-y-4 justify-items-center"
      >
        <ProductCart
          v-for="product of discountProducts"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { TProduct } from "~/types/products.types";

defineProps<{ discountProducts: TProduct[] }>();
</script>
