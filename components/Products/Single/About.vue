<template>
  <section class="bg-white text-black sm:rounded-xl p-6 mb-6">
    <div class="mb-4">
      <h3 class="leading-130 sm:text-32 text-lg font-bold mb-2 sm:mb-4">
        О продукте
      </h3>

      <h4 class="font-semibold text-base sm:text-xl mb-2">Описание:</h4>
      <div
        class="text-sm sm:text-base"
        v-dompurify-html="productDetails.description"
      ></div>
    </div>
    <div class="grid sm:grid-cols-2">
      <div class="py-2 sm:py-4">
        <p class="text-gray">Год выпуска:</p>
        <span class="font-semibold">{{ productDetails.year }}</span>
      </div>
      <div class="py-2 sm:py-4">
        <p class="text-gray">Объем:</p>
        <span class="font-semibold">{{
          productDetails.unit_value + " " + productDetails.unit.title
        }}</span>
      </div>
      <div class="py-2 sm:py-4">
        <p class="text-gray">Бренд:</p>
        <span class="font-semibold">{{
          productDetails.manufacturer?.title
        }}</span>
      </div>
      <div class="py-2 sm:py-4">
        <p class="text-gray">Предпочтительный пол:</p>
        <span class="font-semibold">{{ productDetails.targeted_gender }}</span>
      </div>
      <div class="py-2 sm:py-4">
        <p class="text-gray">Страна изготовитель:</p>
        <span class="font-semibold">{{
          productDetails.manufactured_country
        }}</span>
      </div>
      <div class="py-2 sm:py-4">
        <p class="text-gray">Целевая аудитория:</p>
        <span class="font-semibold">{{
          productDetails.targeted_audience
        }}</span>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { TProductDetails } from "~/types/products.types";

const props = defineProps<{ productDetails: TProductDetails }>();
</script>
