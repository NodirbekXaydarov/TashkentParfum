<template>
  <NuxtLink :to="'/products/' + comment.product?.slug">
    <div
      class="flex flex-col justify-between mx-auto p-5 bg-white rounded-2xl lg:w-96 w-full h-full relative transition-300 cursor-pointer hover:comment-hover-shadow group"
    >
      <div class="flex gap-2">
        <div class="p-2 border border-gray-100 w-full max-w-20 rounded-10">
          <img
            class="object-contain w-full h-full"
            :src="comment.product?.images[0].compressed"
            :alt="comment.product?.title + ' img'"
          />
        </div>
        <div>
          <h2
            class="font-bold group-hover:text-red transition-colors transition-300"
          >
            {{ comment.product?.title }}
          </h2>
          <p class="text-[0.875rem]">{{ comment.comment }}</p>
        </div>
      </div>

      <div class="flex items-center gap-3 mt-4">
        <div class="w-10 h-10 bg-gray-300 flex-center rounded-full">
          <i class="icon-user text-2xl text-gray" />
        </div>
        <div>
          <h4>{{ comment.user?.full_name }}</h4>
          <div class="flex items-center gap-2 text-gray">
            <CommonStars :rating="comment.rate" />
            <span>
              {{ comment.created_at?.slice(0, 10) }}
            </span>
            <span> • </span>
            <span>{{ comment.created_at?.slice(-5) }}</span>
          </div>
        </div>
      </div>
      <div
        class="lg:opacity-0 group-hover:opacity-100 absolute bottom-4 right-4 transition-colors transition-300"
      >
        <img
          class="w-6 h-6 object-cover"
          src="/images/icons/share.svg"
          alt="share icon"
        />
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { TTopComment } from "~/types/products.types";

defineProps<{ comment: TTopComment }>();
</script>
