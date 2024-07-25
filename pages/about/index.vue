<template>
  <div class="container">
    <CommonBreadcrumb class="py-3" :links="links" />
  </div>
  <main class="bg-gray-100">
    <AboutInfo :about="about" />
    <AboutStatistics :statistics="statistics" />
    <HomeBrandParfum 
      :brandsProducts="brandsProducts.slice(0, 4)"
      class="my-6 sm:my-16"
    />
  </main>
</template>

<script setup>
// Statics store: AboutInfo, Statistics
const staticPagesStore = useStaticPagesStore();

await staticPagesStore.getStatistics();
const statistics = computed(() => staticPagesStore.statistics);

await staticPagesStore.getAbout();
const about = computed(() => staticPagesStore.about);

// Products store: Brands
const productsStore = useProductsStore();

if (!productsStore.brandsProducts.length)
  await productsStore.getBrandsProducts();

const brandsProducts = computed(() => productsStore.brandsProducts);

const links = [
  {
    path: "/",
    label: "Главная",
  },
  {
    label: "О нас",
    link: "/",
  },
];
</script>
