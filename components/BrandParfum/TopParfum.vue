<template>
  <article
    class="brand-card bg-white rounded-2xl p-4 flex flex-col w-full cursor-pointer"
  >
    <div class="flex items-center space-x-3 group">
      <div class="flex flex-col w-full">
        <div class="flex items-center gap-3">
          <img
            class="w-11 h-11 object-cover border border-gray-350 rounded-full"
            :src="brand.icon"
            alt="product of logo"
          />
          <div>
            <h2
              class="text-dark font-semibold text-xl leading-130 duration-300 group-hover:text-red"
            >
              {{ brand.title }}
            </h2>
            <p
              v-if="brand.description"
              class="text-neutral-500 text-xs font-normal leading-none mt-1 duration-300 line-clamp-1"
            >
              {{ brand.description }}
            </p>
          </div>
        </div>
        <div class="inline">
          <p class="text-gray-100 font-normal text-xs leading-[16px]" />
        </div>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-2 mt-4 grow">
      <div class="relative group col-span-2 max-h-[200px]">
        <div class="inline">
          <img
            :src="brand.products[0].images[0].default"
            alt="product of img"
            class="w-full object-cover rounded-lg max-h-[200px] h-full aspect-square"
          />
          <div
            class="shadow-img absolute bottom-0 p-2 duration-300 opacity-0 flex items-end justify-start rounded-b-lg"
          >
            <p class="text-white font-semibold text-sm leading-[17px]">
              {{ formatPrice(brand.products[0].price) }} {{ $t("sum") }}
            </p>
          </div>
        </div>
      </div>
      <div class="relative group max-h-[120px]">
        <div class="inline">
          <img
            :src="brand.products[1].images[0].default"
            alt="parfume"
            class="w-full object-cover rounded-lg h-[120px]"
          />
          <div
            class="shadow-img absolute bottom-0 p-2 duration-300 opacity-0 flex items-end justify-start rounded-b-lg"
          >
            <p class="text-white font-semibold text-sm leading-[17px]">
              {{ formatPrice(brand.products[1].price) }} {{ $t("sum") }}
            </p>
          </div>
        </div>
      </div>
      <div class="relative group max-h-[120px]">
        <div class="inline">
          <img
            :src="brand.products[2].images[0].default"
            alt="parfume"
            class="w-full object-cover rounded-lg h-[120px]"
          />
          <div
            class="shadow-img absolute bottom-0 p-2 duration-300 opacity-0 flex items-end justify-start rounded-b-lg"
          >
            <p class="text-white font-semibold text-sm leading-[17px]">
              {{ formatPrice(brand.products[2].price) }} {{ $t("sum") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { formatPrice } from "@/utils";
import type { TBrandsProduct } from "~/types/products.types";

defineProps<{ brand: TBrandsProduct }>();
</script>

<style scoped>
.brand-card:hover .shadow-img {
  box-shadow: 0 8px 40px #2828281f;
  opacity: 100;
}
.shadow-img {
  background: linear-gradient(
    180deg,
    rgba(26, 26, 26, 0),
    rgba(26, 26, 26, 0.8) 73.96%,
    #1a1a1a
  );
  height: 80px;
  width: 100%;
}
</style>
