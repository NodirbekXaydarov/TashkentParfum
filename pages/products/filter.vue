<template>
  <section class="bg-gray-100">
    <ProductsFilter />
  </section>
</template>

<script setup lang="ts">
import axios from 'axios';

onMounted(() => {

  const params = {
    category_id__in: 164,
    page: 2,
    size: 12
  }

  axios.get("https://toshkent-parfum.uz/api/v1/products/", {params})
  .then(response => console.log(response.data?.results))
})
</script>
