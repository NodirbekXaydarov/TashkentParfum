<template>
  <section class="w-full lg:mt-8 mt-4 mb-10 bg-gray-100">
    <!-- Banner Carousel -->
    <HomeBannerCarousel />

    <!-- Popular Section -->
    <HomePopularSection :popular-categories />

    <!-- Story section not found -->
    <!-- <LazyHomeStories /> -->

    <!-- Parfum Top Brands -->
    <LazyHomeBrandParfum :brands-products="brandsProducts.slice(0, 4)" />

    <!-- Recommend Product -->
    <LazyHomeRecommend
      :recommended-products="recommendedProducts.slice(0, 6)"
    />

    <!-- Popular Brands Carousel -->
    <LazyHomeBrandCarousel :manufacturer-list />

    <!-- Fresh Discount -->
    <LazyHomeFreshDiscount :discount-products="discountProducts.slice(0, 6)" />

    <!-- Man Category -->
    <LazyHomeManCategory :man-categories />

    <!-- Body Products -->
    <LazyHomeBodyProduct :body-products="bodyProducts.slice(0, 6)" />

    <!--! Comments Section -->
    <LazyHomeComments :top-comments />

    <!-- Parfum Ladies -->
    <LazyHomeParfumLadies :woman-products="womanProducts.slice(0, 6)" />
  </section>
</template>

<script setup lang="ts">
import { useProductsStore } from '~/stores/products';

// Products store:
const productsStore = useProductsStore();

// Popular Categories
if (!productsStore.popularCategories.length)
  await productsStore.getPopularCategories();

const popularCategories = computed(() => productsStore.popularCategories);

// Brands Products
if (!productsStore.brandsProducts.length)
  await productsStore.getBrandsProducts();

const brandsProducts = computed(() => productsStore.brandsProducts);

// Recommended
if (!productsStore.recommendedProducts.length)
  await productsStore.getRecommended();

const recommendedProducts = computed(() => productsStore.recommendedProducts);

// Popular brands
if (!productsStore.manufacturerList.length)
  await productsStore.getManufacturerList();

const manufacturerList = computed(() => productsStore.manufacturerList);

// Man categories
//if (!Object.keys(productsStore.categoriesById).length)
await productsStore.getCategoriesbyId(164);

const manCategories = computed(() => productsStore.categoriesById);

// Discount
if (!productsStore.discountProducts.length)
  await productsStore.getDiscountProducts();

const discountProducts = computed(() => productsStore.discountProducts);

// Products for Body
await productsStore.getProductsByCategoryId(110);

const bodyProducts = computed(() => productsStore.bodyProducts);

// Products for Woman
await productsStore.getProductsByCategoryId(12);

const womanProducts = computed(() => productsStore.womanProducts);

// Top Comments
if (!productsStore.topComments.length) await productsStore.getTopComments();

const topComments = computed(() => productsStore.topComments);

</script>
