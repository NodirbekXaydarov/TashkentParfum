<template>
  <section class="container">
    <CommonBreadcrumb :links="links" />
    <div class="flex items-start gap-6 pt-8 w-full">
      <Aside class="lg:block hidden" />
      <div class="lg:w-3/4 w-full">
        <div class="flex justify-between">
          <h1
            class="font-proxima-nova lg:text-32 sm:text-2xl text-xl leading-130 font-bold"
          >
            Все продукты
          </h1>
          <div class="lg:block hidden">
            <FormSelect
              v-model="selectValue"
              :options="options"
              value-key="id"
              label-key="label"
              placeholder="По популярности"
              wrapper-class="w-[260px] bg-white"
              options-wrapper="!overflow-hidden"
            />
          </div>
        </div>
        <div class="lg:hidden flex justify-between items-center">
          <FormSelect
            v-model="selectValue"
            :options="options"
            icon="icon-filter text-lg"
            iconPosition="left"
            value-key="id"
            label-key="label"
            placeholder="По популярности"
            wrapper-class="w-[187px] bg-transparent !text-sm !justify-start"
            dropdownClass="w-[200px] "
            options-wrapper="!overflow-hidden"
          />
          <BaseButton
            size="medium"
            variant="transparent"
            icon="icon-filter !text-sm"
            iconPosition="right"
            text="Фильтр"
            wrapperClass="bg-transparent !text-gray-51 !hover:shadow-dark !hover-bg-transparent"
          />
        </div>
        <div class="py-5 px-8 bg-white mt-5 rounded-xl relative">
          <h3 class="leading-130 font-proxima-nova font-bold text-2xl">
            Популярные предложения
          </h3>
          <Carousel />
        </div>
        <CommonAllProduct />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Carousel from "./Carousel.vue";
import Aside from "./Aside.vue";

const selectValue = ref();

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
const options = [
  {
    id: 1,
    label: "По популярности",
  },
  {
    id: 2,
    label: "По цене",
  },
  {
    id: 3,
    label: "По рейтенгу",
  },
];
</script>
