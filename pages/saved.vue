<template>
  <main class="container p-0 sm:px-[15px]">
    <CommonBreadcrumb class="py-3" :links="links" />

    <section class="text-black sm:rounded-xl mt-5 mb-32">
      <div class="mb-4">
        <h3 class="leading-130 sm:text-32 text-lg font-bold mb-2 sm:mb-4">
          {{ $t("favourites") }}
        </h3>
      </div>
      <div v-if="!isHaveSaved">
        <div class="flex-center flex-col text-center">
          <img class="mb-4" src="/images/empty/empty.svg" alt="empty-image" />
          <h4 class="mb-1 text-2xl font-bold">Пусто 😕</h4>
          <p class="text-gray">{{ $t("no_saved_products") }}</p>
        </div>
      </div>
      <div v-else>carts</div>
    </section>
  </main>
</template>

<script setup lang="ts">
const isHaveSaved = ref(false);

const links = [
  {
    path: "/",
    label: "Главная",
  },
  {
    path: "/saved",
    label: "Избранные",
  },
];
</script>
