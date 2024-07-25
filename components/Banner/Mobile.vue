<template>
  <Swiper v-bind="options">
    <SwiperSlide v-for="(slide, index) in slides" :key="index">
      <div
        class="md:hidden relative sm:w-[550px] sm:h-[300px] w-[343px] h-[200px] rounded-xl overflow-hidden bg-slider-gradient"
      >
        <img
          class="absolute w-full h-full object-cover bg-slider-gradient"
          :src="slide.img"
          :alt="slide?.title"
        >
        <div
          class="font-proxima-nova relative z-10 flex justify-start items-end h-full pl-4 pb-4 bg-slider-gradient"
        >
          <div class="">
            <h1
              class="text-base sm:text-xl font-proxima-nova text-white leading-130 mb-1"
            >
              {{ slide?.title }}
            </h1>
            <p
              class="text-xs sm:text-sm font-proxima-nova text-white leading-130 mb-3"
            >
              {{ slide?.desc }}
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
  </Swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

const options = {
  modules: [Autoplay],
  loop: true,
  spaceBetween: 24,
  slidesPerView: 1,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
};

const slides = [
  {
    id: 1,
    title: "Коллекция самой лучшей парфюмерии",
    desc: "Парфюмерия от премиумных  брендов как Dior, Armani, Carolina Herrera CH",
    img: "/data/carousel/slide.jpg",
  },
  {
    id: 2,
    title: "Все виды корейской косметики",
    desc: "В магазине «Ташкент Парфюм» представлен широкий ассортимент корейской косметики и средств по уходу за лицом и телом",
    img: "/data/carousel/slide-2.webp",
  },
  {
    id: 3,
    title: "Коллекция самой лучшей парфюмерии",
    desc: "Парфюмерия от премиумных  брендов как Dior, Armani, Carolina Herrera CH",
    img: "/data/carousel/slide.jpg",
  },
  {
    id: 4,
    title: "Все виды корейской косметики",
    desc: "В магазине «Ташкент Парфюм» представлен широкий ассортимент корейской косметики и средств по уходу за лицом и телом",
    img: "/data/carousel/slide-2.webp",
  },
];
</script>

<style scoped>
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
</style>
