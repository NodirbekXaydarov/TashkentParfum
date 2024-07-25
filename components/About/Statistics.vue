<template>
  <section class="bg-white">
    <div class="py-4 sm:pt-8 sm:pb-[56px] container">
      <h2
        class="text-black text-xl sm:text-32 font-bold leading-[41.60px] mb-8"
      >
        {{ $t("statistics") }}
      </h2>
      <ul
        class="flex items-center justify-between max-lg:flex-col max-lg:items-start max-lg:gap-6"
      >
        <li
          v-for="(item, index) in statisticsArray"
          :key="index"
          class="flex items-center gap-4"
        >
          <img :src="item.icon" alt="icon-image" />
          <div>
            <h3
              class="text-black text-xl sm:text-32 font-bold leading-[41.60px]"
            >
              {{ formatNumbers(item.stat) }}
            </h3>
            <p class="text-gray-500 text-base font-normal leading-snug mt-0.5">
              {{ $t(item.label) }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { TStatistics } from "~/types/statics.types";

interface Props {
  statistics: TStatistics;
}

const props = defineProps<Props>();

// statistics v-for
const statisticsArray = [
  {
    icon: "/images/icons/Statistic-User.svg",
    label: "clients_trusted_us",
    stat: props.statistics.users_count,
  },
  {
    icon: "/images/icons/Statistic-Favorite.svg",
    label: "quality_products",
    stat: props.statistics.categories_count,
  },
  {
    icon: "/images/icons/Statistic-User.svg",
    label: "orders_to_date",
    stat: props.statistics.orders_count,
  },
];
</script>
