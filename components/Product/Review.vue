<template>
  <div class="border-gray-200 pb-4">
    <div class="flex flex-row items-center">
      <div class="mr-3">
        <img
          class="border rounded-full border-gray-300"
          width="44px"
          height="44px"
          :src="review.user?.avatar_src.small ?? '/images/User.svg'"
          alt="User-image"
        />
      </div>
      <div>
        <p class="text-sm sm:text-xl font-semibold">{{ review.comment }}</p>
        <div class="flex flex-row">
          <CommonStars
            :rating="review.rate"
            icon-class="sm:w-4 sm:h-4 w-[14px] h-[14px]"
            wrapper-class="mr-2"
          />
          <span class="text-gray text-xs sm:text-base">{{
            getTimeComment(review.created_at)
          }}</span>
        </div>
      </div>
    </div>
    <p class="mt-3">
      {{ review.comment }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { TProductComment } from "~/types/products.types";

defineProps<{ review: TProductComment }>();

// Formatting review time
function getTimeComment(timeString: string | undefined) {
  if (!timeString) return "";

  const time = new Date(timeString);
  const now = new Date();

  const hour =
    ("0" + time.getHours()).slice(-2) +
    ":" +
    ("0" + time.getMinutes()).slice(-2);

  if (now.toLocaleDateString() === time.toLocaleDateString()) {
    return "Сегодня, " + hour;
  } else if (now.getFullYear() === time.getFullYear()) {
    return (
      time
        .toLocaleDateString("ru-RU", {
          day: "numeric",
          month: "long",
        })
        .replace(" г.", ",")
        .replace(/(\d+ \p{L}+)/u, "$1,")
        .replace(/(^|\s)([а-я])/g, (match: string) => match.toUpperCase())
        .replace(/(\d+ \w+)/, "$1,") +
      " " +
      hour
    );
  }
  return (
    time
      .toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
      .replace(" г.", ",")
      .replace(/(\d+ \p{L}+)/u, "$1,")
      .replace(/(^|\s)([а-я])/g, (match: string) => match.toUpperCase())
      .replace(/(\d+ \w+)/, "$1,") +
    " " +
    hour
  );
}
</script>
