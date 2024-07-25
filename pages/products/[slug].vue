<template>
  <main class="container p-0 sm:px-[15px]">
    <CommonBreadcrumb class="py-3" :links="links" />

    <div class="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6">
      <div>
        <!-- Products Single Hero Section -->
        <ProductsSingleHero :product-details="productDetails" />

        <!-- Products Single About Section -->
        <ProductsSingleAbout :product-details="productDetails" />

        <!-- Products Single Reviews Section -->
        <!-- comment rates are MUST HAVE here! -->
        <ProductsSingleReviews
          :product-details="productDetails"
          :product-comments="productComments"
          :product-comment-rates="productCommentRates!"
        />

        <SectionsHead :head-text="'Схожие продукты'" />
      </div>

      <!-- Ad -->
      <aside>
        <a href="https://uic.group/" target="_blank">
          <img
            class="hidden lg:block rounded-xl"
            src="/images/uic/aside.webp"
            alt="advertisement"
          />
        </a>
        <a href="https://uic.group/" target="_blank">
          <img
            class="lg:hidden rounded-xl"
            src="/images//uic/banner.webp"
            alt="advertisement"
          />
        </a>
      </aside>
    </div>
  </main>
</template>

<script setup lang="ts">
import type {
  TProductDetails,
  TProductComment,
  TProductCommentRates,
} from "~/types/products.types";

const route = useRoute();
const slug = route.params.slug;

const productsStore = useProductsStore();

// Product details
await productsStore.getProductDetails(slug);
const productDetails = computed<TProductDetails>(
  () => productsStore.productDetails,
);

const productComments = ref<TProductComment[]>([]);
const productCommentRates = ref<TProductCommentRates>();

if (productDetails.value.id) {
  // Product comments
  await productsStore.getCommentsByProductId(productDetails.value.id);
  productComments.value = productsStore.productComments;

  // Product comment rates
  await productsStore.getCommentRatesByProductId(productDetails.value.id);
  productCommentRates.value = productsStore.productCommentRates;
}

const links = [
  {
    path: "/",
    label: "Главная",
  },
  {
    path: "/products",
    label: "Продукты",
  },
  {
    path: "/products/" + slug,
    label: productDetails.value.title,
  },
];
</script>
