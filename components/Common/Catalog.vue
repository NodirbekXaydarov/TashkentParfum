<template>
  <div
    class="fixed top-36 left-0 pr-4 bg-white z-30 w-full h-[calc(100svh-9rem)] hidden lg:block"
  >
    <div class="container h-full py-8 grid grid-cols-4 gap-y-6 overflow-y-auto">
      <div v-for="item in catalogData" :key="item.id">
        <h2 class="font-semibold text-xl mb-6">{{ $t(item.label) }}</h2>
        <ul>
          <li
            v-for="(link, index) in item.links"
            :key="index + link"
            class="mb-3 text-black transition-300 hover:text-red hover:translate-x-1"
          >
            <NuxtLink to="#">
              {{ $t(link) }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { catalogData } from "~/data";
</script>
