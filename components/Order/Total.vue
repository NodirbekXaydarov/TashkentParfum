<template>
  <div class="w-full lg:max-w-sm bg-white py-5 rounded-xl">
    <div class="px-3">
      <div class="flex-between border-b border-gray-100 pb-3">
        <p class="text-gray-500 flex flex-1 text-xl">Итого:</p>
        <p class="text-gray-500 text-xl">
          <b class="text-black text-xl lg:text-2xl">{{ formatPrice(3600000) }}</b>
          uzs
        </p>
      </div>
      <div
        v-for="price in 4"
        :key="price"
        class="flex-between border-b border-gray-100 py-2"
      >
        <p class="text-gray-500 flex flex-1 text-base">Всего:</p>
        <p class="text-black text-base font-semibold">
          {{ formatPrice(price * 299299) }} uzs
        </p>
      </div>
    </div>

    <div class="bg-red-50 py-2 flex-between px-3 mt-3">
      <p class="text-red font-semibold">Кэшбек:</p>
      <p class="text-red font-semibold">{{ formatPrice(180000) }} (5%)</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { formatPrice } from "@/utils";
</script>
