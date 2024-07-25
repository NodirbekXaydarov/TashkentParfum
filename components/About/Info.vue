<template>
  <section
    class="container py-4 flex flex-col lg:flex-row gap-4 lg:gap-20 pt-4 md:pt-6"
  >
    <div class="text-black font-inter">
      <h2 class="text-xl sm:text-3xl mb-2 sm:mb-4 font-bold">
        {{ $t("about") }}
      </h2>
      <div class="text-xs md:text-lg" v-dompurify-html="about.description"></div>
    </div>
    <img
      src="/images/about.webp"
      alt="about-image"
      class="sm:w-[400px] sm:h-[342px] sm:flex-shrink-0"
    />
  </section>
</template>

<script setup lang="ts">
import type { TAbout } from "~/types/statics.types";

interface Props {
  about: TAbout;
}

defineProps<Props>();
</script>
