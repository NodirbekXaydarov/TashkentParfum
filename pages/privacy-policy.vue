<template>
  <main class="container p-0 sm:px-[15px]">
    <CommonBreadcrumb class="py-3" :links="links" />

    <section class="bg-white text-black sm:rounded-xl p-6 my-6 lg:mx-24">
      <div class="mb-4">
        <h1 class="font-inter leading-130 sm:text-32 text-lg font-bold">
          {{ staticPageData.title }}
        </h1>
        <h3 class="font-inter sm:text-2xl text-base font-semibold sm:my-8 my-3">
          {{ staticPageData.second_title }}
        </h3>
        <div class="text-sm sm:text-base" v-dompurify-html="staticPageData.body"></div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const staticPagesStore = useStaticPagesStore();

await staticPagesStore.getStaticPages();
const staticPages = computed(() => staticPagesStore.staticPages);

const firstSlug = staticPages.value[0]?.slug;
await staticPagesStore.getStaticPageDetails(firstSlug);
const staticPageData = computed(() => staticPagesStore.staticPageDetails);

const links = [
  {
    path: "/",
    label: "Главная",
  },
  {
    path: "/privacy-policy",
    label: "Privacy Policy",
  },
];
</script>
