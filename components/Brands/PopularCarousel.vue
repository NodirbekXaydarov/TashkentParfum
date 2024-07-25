<template>
  <div>
    <Swiper v-bind="options" class="swiper-container-free-mode">
      <SwiperSlide
        v-for="brand of popularBrands"
        :key="brand.id"
        class="!w-[234px] !h-28"
      >
        <div
          class="p-5 w-full h-full flex items-center justify-center rounded-2xl bg-gray-100"
        >
          <img :src="brand.icon" alt="brands" class="object-cover grayscale" />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Grid } from "swiper/modules";
import type { Swiper as TSwiper } from "swiper/types";
import type { TManufacturer } from "~/types/products.types";

const props = defineProps({
  popularBrands: {
    type: Array as () => TManufacturer[],
    required: true,
    default: () => [],
  },
  caruselReverse: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const options = {
  modules: [Autoplay, Grid],
  loop: true,
  spaceBetween: 16,
  initialSlide: 15,
  speed: 8000,
  simulateTouch: true,
  preloadImages: true,
  slidesPerView: 'auto',
  slidesPerColumn: 3,
  centeredSlides: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: true,
    reverseDirection: props.caruselReverse,
  },
};
</script>

<style>
.swiper-container-free-mode > .swiper-wrapper {
  transition-timing-function: linear;
}
</style>
