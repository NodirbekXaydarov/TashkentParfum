<template>
  <section>
    <SectionsHead head-text="reviews" />

    <div class="select-none mt-5">
      <Swiper
        :breakpoints="{
          768: {
            slidesPerView: 2,
          },
          1170: {
            slidesPerView: 3,
          },
        }"
        :slides-per-column="1"
        :slides-per-view="1"
        :space-between="20"
        :autoplay="{
          delay: 2000,
          disableOnInteraction: false,
        }"
        :loop="true"
        :modules="modules"
      >
        <SwiperSlide
          v-for="comment in topComments"
          :key="comment.id"
          class="px-4 md:px-2 !h-auto"
        >
          <ProductComment :comment="comment" />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import type { TTopComment } from "~/types/products.types";

const modules = [Autoplay];

defineProps<{ topComments: TTopComment[] }>();
</script>
