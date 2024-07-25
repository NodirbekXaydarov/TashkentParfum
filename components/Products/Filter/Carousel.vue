<template>
  <Swiper v-bind="options" class="mySwiper mt-5">
    <SwiperSlide v-for="product in allProduct" :key="product?.id">
      <ProductCart
        wrapper="!border-2 !border-gray-200"
        wrapper-img="!bg-white-gradient"
        :product="product"
      />
    </SwiperSlide>
  </Swiper>
  <div class="prev-btn left-5">
    <i class="icon-arrow-left" />
  </div>
  <div class="next-btn right-5">
    <i class="icon-arrow-right" />
  </div>
</template>

<script setup lang="ts">
import { allProduct } from "~/mocks/all-product";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

const modules = [Pagination, Navigation];

const options = {
  navigation: {
    nextEl: ".next-btn",
    prevEl: ".prev-btn",
  },
  modules: modules,
  loop: true,
  breakpoints: {
    "375": {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    "640": {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    "768": {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    "1024": {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
};
</script>

<style scoped>
.next-btn i,
.prev-btn i {
  font-size: 24px;
  padding: 8px !important;
  border-radius: 100% !important;
  z-index: 90;
  color: #383838;
  transition: all 100ms ease-in-out;
}

.next-btn,
.prev-btn {
  display: flex;
  background-color: white;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: 50%;
  box-shadow: 0px 0px 40px 0px rgba(56, 56, 56, 0.32) !important;
  z-index: 10;
}

.next-btn > i:hover,
.prev-btn > i:hover {
  background: #e8e8e8 !important;
}
</style>
