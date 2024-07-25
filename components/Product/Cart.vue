<template>
  <article
    :class="wrapper"
    class="w-full flex flex-col product-card relative hover:border-gray-100 rounded-xl bg-[#F2F3F5] group cursor-pointer transition-all overflow-hidden"
  >
    <div
      class="favorite-icon p-[6px] z-10 rounded-md bg-white/60 border border-transparent hover:border-red/70 group inline-block absolute top-3 right-3 transition-all"
      @click="product.id"
    >
      <img
        class="w-5 h-5"
        :src="product.is_liked ? heartDone : heart"
        alt="productIcon"
      />
    </div>

    <div class="product-swiper relative">
      <Swiper v-bind="options">
        <SwiperSlide v-for="image in product?.images" :key="image?.default">
          <img
            :src="image?.default"
            :alt="product.title"
            class="min-w-[100px] w-full aspect-square object-cover bg-white"
            :class="wrapperImg"
          />
        </SwiperSlide>
      </Swiper>
      <img
        v-if="isDiscounted"
        class="absolute top-0 left-0 z-10"
        src="/public/images/cart/discount-flag.svg"
        alt="discount-flag"
      />
    </div>

    <div class="p-4 flex flex-col flex-grow">
      <!-- <p class="text-xs text-red line-clamp-1">{{ $t(product.title ?? "") }}</p> -->
      <NuxtLink
        class="text-xs text-red line-clamp-1"
        :to="'/products/' + product.slug"
      >
        {{ product.title }}
      </NuxtLink>
      <h2
        class="line-clamp-2 text-sm mt-1 group-hover:text-red transition-colors flex-grow"
      >
        {{ product.manufacturer?.title }}
      </h2>
      <div class="my-auto">
        <p v-if="isDiscounted" class="text-xs text-red line-through">
          {{ formatPrice(product.price_without_discount) }} UZS
        </p>
        <p class="font-bold">{{ formatPrice(product.price) }} UZS</p>
        <CommonStars :rating="product?.rate" rating-pos="right" />
      </div>
      <BaseButton
        v-if="showBtn"
        class="mt-6 whitespace-nowrap"
        icon="icon-bag !text-white"
        icon-position="left"
        text="to_cart"
        size="large"
        variant="primary"
        @click="showCountBtn"
      />
      <CommonBasketBtn :show-btn="!showBtn" @reset-cart-btn="showCountBtn" />
    </div>
  </article>
</template>

<script setup lang="ts">
import { formatPrice } from "#imports";
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

import heartDone from "../../assets/img/cards/heartdone.svg";
import heart from "../../assets/img/cards/heart.svg";

import type { TProduct } from "~/types/products.types";
const showBtn = ref(true);

interface IProps {
  product: TProduct;
  wrapperImg?: string;
  wrapper?: string;
}


const props = defineProps<IProps>();

const showCountBtn = () => {
  showBtn.value = !showBtn.value;
};

const isDiscounted = ref(props.product.price_without_discount);

const swiperModules = [EffectCoverflow, Pagination, Navigation, Autoplay];

const like = ref<number[]>([]); // Array to store liked product IDs

// const toggleLike = (productId: number | undefined) => {
//   const index = like.value.indexOf(productId);
//   if (index === -1) {
//     like.value.push(productId); // Add productId to liked products
//   } else {
//     like.value.splice(index, 1); // Remove productId from liked products
//   }
// };

// const formatPrice = (price: number | string) => {
//   return new Intl.NumberFormat("ru-RU").format(price);
// };

// const isLiked = (productId: number) => {
//   return like.value.includes(productId);
// };

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
</script>

<style scoped>
.product-card:hover {
  box-shadow: 0 8px 40px rgba(40, 40, 40, 0.12);
}

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

/* only this works */
:global(.swiper-pagination-bullet) {
  background: #383838;
}
</style>
