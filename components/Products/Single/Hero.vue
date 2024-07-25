<template>
  <section class="bg-white sm:rounded-xl p-6 flex flex-col sm:flex-row mb-6">
    <!-- swipers -->
    <div class="flex flex-col justify-between select-none">
      <Swiper
        v-bind="options2"
        touch-events-target="container"
        :thumbs="{ swiper: thumbsSwiper }"
        class="mySwiper2"
        @click="toggleModalActive"
      >
        <SwiperSlide
          v-for="(image, index) in productDetails.images"
          :key="index"
        >
          <img :src="image.compressed" alt="image-slider" />
        </SwiperSlide>
      </Swiper>

      <Swiper
        v-bind="options"
        class="mySwiper !hidden sm:!block"
        @swiper="setThumbsSwiper"
      >
        <SwiperSlide
          v-for="(image, index) in productDetails.images"
          :key="index"
          class="!w-fit"
        >
          <img :src="image.compressed" alt="image-slider" />
        </SwiperSlide>
      </Swiper>

      <!-- Modal Swiper -->
      <!-- <CommonModal :show="showModal" @close="toggleModalActive">
        <div class="flex-center flex-col">
          <Swiper
            v-bind="options4"
            touch-events-target="container"
            :thumbs="{ swiper: thumbsSwiper2 }"
            class="mySwiper4"
          >
            <SwiperSlide v-for="(image, index) in productData.images" :key="index">
              <img :src="image" alt="image-slider" />
            </SwiperSlide>
          </Swiper>

          <Swiper v-bind="options3" class="mySwiper3" @swiper="setThumbsSwiper2">
            <SwiperSlide
              v-for="(image, index) in productData.images"
              :key="index"
              class="!w-fit"
            >
              <img :src="image" alt="image-slider" />
            </SwiperSlide>
          </Swiper>
        </div>
      </CommonModal> -->
    </div>

    <div class="w-full ml-0 sm:ml-5">
      <div
        class="w-full flex justify-between text-gray flex-col md:flex-row mt-3 sm:mt-0 items-start"
      >
        <!-- tags -->
        <div>
          <span class="bg-gray-300 px-2 py-1 text-[13px] font-semibold rounded">
            {{ productDetails?.category?.title }}
          </span>
        </div>

        <!-- stars -->
        <CommonStars
          :rating="productDetails.rate"
          :rating-pos="'left'"
          star-size="16px"
          wrapper-class="mt-2 md:mt-0 flex-row-reverse sm:flex-row"
          rating-class="ml-1 sm:ml-0"
        />
      </div>

      <!-- title -->
      <h1 class="tex-base md:text-xl font-semibold text-gray-51 my-2 sm:my-4">
        {{ productDetails.title }}
      </h1>
      <div class="text-gray-51 pb-5 sm:border-y border-gray-200">
        <!-- type -->
        <div>
          <div class="flex flex-row mb-2 mt-4">
            <p class="font-semibold">Типь:&nbsp;</p>
            <span class="text-gray-500">{{
              productDetails.product_group_title
            }}</span>
          </div>
          <div class="flex flex-row">
            <NuxtLink
              v-for="(group, index) in productDetails?.groups?.slice(0, 5)"
              :key="index"
              :to="'/products/' + group.slug"
              class="p-1 border rounded-md border-gray-400 hover:border-red"
              :class="[{ 'ml-3': index !== 0 }]"
            >
              <img width="36" height="36" :src="'?'" alt="no image" />
            </NuxtLink>
          </div>
        </div>

        <!-- volumes -->
        <div>
          <div class="flex flex-row mb-2 mt-4">
            <p class="font-semibold">Объём:&nbsp;</p>
            <span class="text-gray-500">
              {{ productDetails.unit_value + " " + productDetails.unit.title }}
            </span>
          </div>
          <div class="flex flex-row">
            <!-- volumes coming not array but single object, NO NEED v-for -->
            <button
              v-for="(unit, index) in 1"
              :key="index"
              class="p-2 sm:p-1 md:px-3 md:py-2 border rounded-md border-gray-400 hover:border-red"
              :class="[
                { 'ml-3 sm:ml-1 md:ml-3': index !== 0 },
                { '!border-red border-2': activeVolume === index },
              ]"
              @click="selectVolume(index)"
            >
              {{ productDetails.unit_value + " " + productDetails.unit.title }}
            </button>
          </div>
        </div>
      </div>

      <!-- prices -->
      <div class="mb-4 sm:my-4 flex flex-row items-center sm:block">
        <p class="text-xl sm:text-2xl font-bold text-gray-51">
          {{ formatPrice(productDetails.price) }} {{ $t("sum") }}
        </p>
        <p
          v-if="productDetails.price_without_discount"
          class="text-red ml-3 sm:ml-0 line-through"
        >
          {{ formatPrice(productDetails.price_without_discount) }}
          {{ $t("sum") }}
        </p>
      </div>

      <!-- actions -->
      <div class="flex flex-row">
        <BaseButton
          text="Добавить в корзину"
          icon="icon-cart"
          icon-position="left"
          wrapper-class="xl:px-[18px] xl:py-3 sm:px-2 sm:py-1 px-[18px] py-3 font-bold"
        />
        <BaseButton
          text="Поделиться"
          icon="icon-share !text-gray"
          icon-position="left"
          wrapper-class="!hidden xl:!flex ml-3 !p-[11px] font-bold !bg-gray-300 !text-gray hover:!shadow-gray-300 hover:!bg-gray-350"
        />
        <BaseButton
          text=""
          icon="icon-share !text-gray"
          icon-position="left"
          wrapper-class="xl:hidden ml-3 !p-[11px] font-bold !bg-gray-300 !text-gray hover:!shadow-gray-300 hover:!bg-gray-350"
        />
        <BaseButton
          text=""
          icon="icon-like !text-gray"
          icon-position="left"
          wrapper-class="ml-3 !p-[11px] font-bold !bg-gray-300 !text-gray hover:!shadow-gray-300 hover:!bg-gray-350"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { formatPrice } from "~/utils";
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs, EffectCube } from "swiper/modules";
import type { Swiper as TSwiper } from "swiper/types";
import type { TProductDetails } from "~/types/products.types";

defineProps<{ productDetails: TProductDetails }>();

const showModal = ref(false);
const toggleModalActive = () => (showModal.value = !showModal.value);

const activeVolume = ref<number>(0);

const selectVolume = (i: number) => {
  activeVolume.value = i;
};

const thumbsSwiper = ref<TSwiper | undefined>(undefined);

const setThumbsSwiper = (swiper: TSwiper) => {
  thumbsSwiper.value = swiper;
};

const thumbsSwiper2 = ref<TSwiper | undefined>(undefined);

// const setThumbsSwiper2 = (swiper: TSwiper) => {
//   thumbsSwiper2.value = swiper;
// };

const modules = [FreeMode, Navigation, Thumbs];
const modules2 = [FreeMode, Navigation, Thumbs, EffectCube];

const options = {
  freemode: true,
  grabCursor: true,
  watchSlidesProgress: true,
  spaceBetween: 8,
  modules,
};
const options2 = {
  grabCursor: true,
  loop: true,
  // effect: "cube",
  // cubeEffect: {
  //   shadow: false,
  // },
  modules: modules2,
};
const options3 = {
  freemode: true,
  grabCursor: true,
  watchSlidesProgress: true,
  spaceBetween: 8,
  modules,
};
const options4 = {
  grabCursor: true,

  loop: true,
  modules: modules2,
};
</script>

<style scoped>
.swiper-slide {
  display: flex;
  overflow: hidden;
}

.mySwiper2 {
  height: 385px;
  width: 300px;
  border: 1px solid #eaebed;
  border-radius: 12px;
  overflow: hidden;
}

.mySwiper {
  height: 10%;
  box-sizing: border-box;
}

.mySwiper .swiper-slide {
  width: 40px;
  height: 40px;
  opacity: 0.4;
  border: 1px solid #eaebed;
  border-radius: 6px;
  cursor: pointer;
}

.mySwiper .swiper-slide:hover {
  border-color: red;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
  border-color: #f62559;
}

.swiper-slide img {
  display: block;
  object-fit: contain;
}
/* 
.mySwiper4 {
  height: 385px;
  width: 300px;
  border: 1px solid #eaebed;
  border-radius: 12px;
  overflow: hidden;
}

.mySwiper3 {
  height: 10%;
  box-sizing: border-box;
}

.mySwiper3 .swiper-slide {
  width: 40px;
  height: 40px;
  opacity: 0.4;
  border: 1px solid #eaebed;
  border-radius: 6px;
  cursor: pointer;
}

.mySwiper3 .swiper-slide:hover {
  border-color: red;
}

.mySwiper3 .swiper-slide-thumb-active {
  opacity: 1;
  border-color: #f62559;
} */
</style>
