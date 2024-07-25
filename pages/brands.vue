<template>
  <main class="container">
    <section class="py-3">
      <CommonBreadcrumb :links="links" />

      <div class="lg:pt-6 pt-4 flex-between">
        <h1 class="lg:text-3xl text-lg font-bold">Все бренды</h1>

        <div>
          <CommonSearch :search-data="brands" />
        </div>
      </div>
    </section>

    <section
      class="grid lg:grid-cols-4 sm:grid-cols-3 lg:gap-6 grid-cols-2 gap-2"
    >
      <div v-for="brand in brands" class="w-full h-32 bg-white p-4 rounded-2xl">
        <img
          class="w-full h-full p-4 object-contain grayscale transition-all delay-300 hover:grayscale-0 hover:p-2 cursor-pointer"
          :src="brand.icon"
          :alt="'brand' + brand.title + 'image'"
        />
      </div>
    </section>

    <div class="flex-x-center py-8">
      <button
        class="bg-red-100 text-red py-2 px-5 rounded-md hover:bg-red hover:text-white transition-300"
        @click="loadMoreBrands"
      >
        <i class="icon-arrow-down align-middle" />
        <span class="text-xs"> Загрузить еще </span>
      </button>
    </div>
  </main>
</template>

<script setup lang="ts">
const productsStore = useProductsStore();
if (!productsStore.manufacturerList.length)
  await productsStore.getManufacturerList();

const brands = computed(() => productsStore.manufacturerList);

const links = [
  {
    path: "/",
    label: "Главная",
  },
  {
    path: "/brands",
    label: "Все бренды",
  },
];

let page = 1;
const loadMoreBrands = async () => {
  productsStore.getManufacturerList(++page);
};
</script>
