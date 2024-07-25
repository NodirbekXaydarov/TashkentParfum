<template>
  <section class="container">
    <CommonBreadcrumb :links="links" />

    <h1 class="text-neutral-700 text-[32px] font-bold mb-6 leading-[41.60px]">Корзина</h1>

    <NuxtLink to="/cart/order">order steps</NuxtLink>
  </section>
</template>
<script setup lang="ts">
const links = [
  {
    label: "Корзина",
    path: "/",
  },
];
</script>
