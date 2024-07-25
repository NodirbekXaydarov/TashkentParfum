<template>
  <div
    class="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5 mt-5 mb-[18px]"
  >
    <template v-for="(product, ind) in allProduct" :key="product?.id">
      <ProductCart
        v-if="ind / 12 !== 1"
        class="col-span-1 w-full"
        :product="product"
      />
      <div v-else class="w-full md:col-span-4 sm:col-span-3 col-span-2">
        <img
          class="!w-full md:rounded-xl rounded-md"
          :src="product?.images"
          alt="advertise"
        >
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { allProduct } from "~/mocks/all-product";
</script>
