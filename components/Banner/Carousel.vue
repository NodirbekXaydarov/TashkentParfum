<template>
  <Swiper @slideChange="onSlideChange" v-bind="options">
    <SwiperSlide v-for="slide in slides" :key="slide.id">
      <div
        class="md:block hidden relative lg:!w-[982px] lg:h-[439px] md:w-[660px] md:h-[320px] rounded-xl overflow-hidden bg-slider-gradient"
      >
        <img
          class="absolute w-full h-full object-cover bg-slider-gradient"
          :src="slide.img"
          :alt="$t(slide?.title)"
        />
        <div
          class="font-proxima-nova relative z-10 flex justify-start items-end h-full lg:pl-9 lg:pb-9 pl-6 pb-6 bg-slider-gradient"
        >
          <div class="">
            <h1 class="lg:text-32 text-2xl text-white leading-[130%] mb-2">
              {{ $t(slide?.title) }}
            </h1>
            <p class="lg:text-base text-sm text-white leading-[130%] mb-3.5">
              {{ $t(slide?.desc) }}
            </p>
            <BaseButton
              text="about_product_more"
              variant="transparent"
              size="large"
            />
          </div>
        </div>
      </div>
    </SwiperSlide>
    <div class="swiper-pagination"></div>
  </Swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const modules = [Autoplay, Pagination];
const options = {
  modules,
  loop: true,
  pagination: {
    clickable: true,
    el: '.swiper-pagination'
  },
  spaceBetween: 24,
  slidesPerView: 1.55,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
};

const slides = [
  {
    id: 1,
    title: "best_perfume_collection",
    desc: "premium_perfume_brands",
    img: "/data/carousel/slide.jpg",
  },
  {
    id: 2,
    title: "all_kinds_of_korean_cosmetics",
    desc: "wide_range_of_korean_cosmetics",
    img: "/data/carousel/slide-2.webp",
  },
  {
    id: 3,
    title: "best_perfume_collection",
    desc: "premium_perfume_brands",
    img: "/data/carousel/slide.jpg",
  },
  {
    id: 4,
    title: "all_kinds_of_korean_cosmetics",
    desc: "wide_range_of_korean_cosmetics",
    img: "/data/carousel/slide-2.webp",
  },
];
</script>

<style scoped>
.swiper-slide {
  opacity: 0.4;
}
.swiper-slide.swiper-slide-active {
  opacity: 1 !important;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.progress-container {
  position: relative;
  height: 4px;
  background: #f0f0f0;
  margin-top: 10px;
}

.swiper-pagination-bullet {
  background: #f0f0f0 !important; /* Default bullet color */
}

.swiper-pagination-bullet .swiper-pagination-bullet-active {
  background: rgb(160, 11, 11) !important; /* Active bullet color */
}

</style>
