<template>
  <article>
    <div
      class="flex items-center h-[160px] p-5 relative bg-[#ffffff] group cursor-pointer transition-all w-full"
    >
      <div
        class="product-swiper w-[120px] h-[120px] bg-gradient-to-b from-gray-50 to-gray-50 mr-[22px]"
      >
        <Swiper v-bind="options">
          <SwiperSlide v-for="image in product?.images" :key="image.default">
            <img
              :src="image.default"
              alt="image.default"
              class="w-full aspect-square object-cover bg-white"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div class="flex flex-col flex-grow max-w-[315px] h-[120px] pr-5">
        <h2
          class="text-neutral-700 text-xl font-semibold leading-relaxed line-clamp-2"
        >
          {{ product?.title }}
        </h2>

        <div class="my-auto">
          <div class="flex gap-2 items-center">
            <ul class="flex gap-1">
              <li v-for="n in Math.floor(product?.star)" :key="n">
                <img src="/images/stars/star.svg" alt="heart" >
              </li>
            </ul>
            <p
              class="text-zinc-400 text-sm font-normal font-['ProximaNova'] leading-[18.20px]"
            >
              {{ product?.star.toFixed(1) }}
            </p>
          </div>
          <div class="flex items-center gap-1 mt-[20px]">
            <img
              src="/images/icons/heartcart.svg"
              alt="heartcard"
            />
            <p class="text-zinc-400 text-sm font-normal leading-[18.20px]">
              Добавить в избранное
            </p>
          </div>
        </div>
      </div>

      <div class="w-0 h-[120px] border border-gray-100 mx-3" />

      <div class="max-w-[158px] w-full">
        <p class="font-semibold text-neutral-700 text-xl leading-7">
          {{ formatPrice(product?.price) }} UZS
        </p>
        <p class="text-zinc-400 text-sm font-normal leading-[14.20px]">
          {{ formatPrice(product?.price) }} UZS
        </p>
        <BaseButton
          class="mt-6 w-full"
          icon="icon-check-circle"
          icon-position="right"
          text="Button"
          size="large"
          variant="primary"
        />
      </div>

      <button class="absolute top-5 right-5">
        <img src="/images/icons/trash.svg" alt="trash" >
      </button>
    </div>
    <div
      v-if="index !== cartItems.length - 1"
      class="w-full max-w-[739px] h-px relative bg-slate-100 mx-auto"
    />
  </article>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

const swiperModules = [EffectCoverflow, Pagination, Navigation, Autoplay];

const options = {
  slidesPerView: 1,
  centeredSlides: true,
  grabCursor: true,
  spaceBetween: 20,
  loop: true,
  speed: 900,
  modules: swiperModules,
  pagination: { clickable: true },
};

const formatPrice = (price) => {
  return new Intl.NumberFormat("ru-RU").format(price);
};
</script>

<style scoped>
.product-swiper .swiper-pagination-bullet {
  background-color: black !important;
  width: 4px !important;
  height: 4px !important;
  transition: all 0.3s;
}

.product-swiper .swiper-pagination-bullet-active {
  background: black !important;
  height: 4px;
  width: 4px;
  opacity: 1 !important;
  transition: all 0.3s;
}
</style>
