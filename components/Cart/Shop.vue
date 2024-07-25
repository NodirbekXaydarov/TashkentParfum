<template>
  <section>
    <div
      class="flex flex-col w-full min-w-[779px] xl:w-[600px] rounded-lg border border-gray-100 bg-white p-1 mb-5"
    >
      <ProductShopItem
        v-for="product of cartItem"
        :key="product?.id"
        v-bind="product"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { cartItem } from "~/mocks/cart-item";
</script>

<style scoped>
.product-card:hover {
  box-shadow: 0 8px 40px rgba(40, 40, 40, 0.12);
}
</style>
