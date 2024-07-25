<template>
  <section class="max-w-[379px] w-full">
    <div class="h-[490px] relative bg-white rounded-xl p-5">
      <div class="flex items-center justify-between">
        <h2 class="text-zinc-400 text-xl font-medium leading-relaxed">Итого:</h2>
        <p class="text-neutral-700 text-2xl font-semibold leading-[31.20px]">3 610 000</p>
      </div>
      <div class="flex items-center gap-3 mt-5">
        <FormToggle />
        <p class="text-zinc-400 text-base font-normal">Использовать кэшбэк</p>
      </div>
      <div class="w-full h-px bg-slate-100 my-5" />
      <ul>
        <li class="flex items-center justify-between">
          <h4 class="text-neutral-500 text-base font-normal leading-snug">Всего:</h4>
          <p class="text-right text-neutral-700 text-base font-medium leading-snug">
            3 710 000 uzs
          </p>
        </li>
        <li class="w-full h-px bg-slate-100 my-3" />
        <li class="flex items-center justify-between">
          <h4 class="text-neutral-500 text-base font-normal leading-snug">Всего:</h4>
          <p class="text-right text-neutral-700 text-base font-medium leading-snug">
            3 710 000 uzs
          </p>
        </li>
        <li class="w-full h-px bg-slate-100 my-3" />
        <li class="flex items-center justify-between">
          <h4 class="text-neutral-500 text-base font-normal leading-snug">Всего:</h4>
          <p class="text-right text-neutral-700 text-base font-medium leading-snug">
            3 710 000 uzs
          </p>
        </li>
        <li class="w-full h-px bg-slate-100 my-3" />
        <li class="flex items-center justify-between">
          <h4 class="text-neutral-500 text-base font-normal leading-snug">Всего:</h4>
          <p class="text-right text-neutral-700 text-base font-medium leading-snug">
            3 710 000 uzs
          </p>
        </li>
        <li
          class="bg-[#FFF6F9] -mx-5 px-5 flex items-center justify-between py-3 mt-3 mb-5"
        >
          <h4 class="text-red text-base font-normal leading-snug">Кэшбек</h4>
          <p class="text-right text-red text-base font-medium leading-snug">
            +180 000 uzs (5%)
          </p>
        </li>
        <li class="flex items-center justify-between">
          <h4 class="text-neutral-500 text-base font-normal leading-snug">Всего:</h4>
          <p class="text-right text-neutral-700 text-base font-medium leading-snug">
            3 710 000 uzs
          </p>
        </li>
        <li>
          <FormSelect
            placeholder="Товары(3)"
            class="bg-white max-w-[110px] pl-0 mt-5"
            :options="selectOption"
            value-key="id"
            label-key="name"
          />
        </li>
      </ul>
    </div>
    <NuxtLink to="/cart/order">
      <BaseButton
        class="mt-[15px] w-full"
        text="Перейти к оформлению"
        size="large"
        variant="primary"
      />
    </NuxtLink>
  </section>
</template>

<script setup lang="ts">
const selectOption = [
  {
    id: 1,
    name: "Brand ",
  },
  {
    id: 2,
    name: "Brand2",
  },
  {
    id: 2,
    name: "Brand3",
  },
];
</script>
