<template>
  <Marquee />
  <header
    class="hidden sticky w-full top-0 z-50 lg:block bg-white shadow-toast"
    :class="{ 'pr-4': isCatalogOpen }"
  >
    <!-- banner -->
    <div class="hidden lg:flex bg-gray-100 py-3">
      <div class="container flex-between">
        <!-- contacts links -->
        <div class="flex-center gap-6">
          <a
            href="tel:+9998712007007"
            class="icon-phone-inc flex-y-center gap-1 text-gray hover-red"
          >
            <span class="family-proxima-nova text-xs leading-130">
              {{ formatPhone("712007007") }}
            </span>
          </a>

          <a
            href="https://yandex.ru/maps/?ll=25.45,41.578&z=18"
            class="icon-map flex-y-center gap-1 text-gray hover-red"
          >
            <span class="text-xs leading-130"
              >Yunusobod, Ahmad Donish ko'chasi, 4/80</span
            >
          </a>
        </div>

        <!-- socials and lang toggle -->
        <div class="flex-y-center gap-x-[30px]">
          <!-- socials links -->
          <div class="flex-y-center gap-4">
            <a
              href="#!"
              class="icon-facebook text-xl leading-5 text-gray-500 hover-red"
            />
            <a
              href="#!"
              class="icon-instagram-solid text-xl leading-5 text-gray-500 hover-red"
            />
            <a
              href="#!"
              class="icon-telegram-solid text-xl leading-5 text-gray-500 hover-red"
            />
          </div>

          <!-- lang -->
          <FormSelect v-model="curLang" wrapper-class="!text-sm" :options="langs" />
        </div>
      </div>
    </div>

    <!-- header -->
    <div class="container flex-between py-4">
      <!-- logo -->
      <NuxtLink to="/">
        <img src="/images/logo.svg" class="h-13 mr-6" alt="logo" />
      </NuxtLink>

      <!-- search -->
      <div class="flex-y-center gap-4 flex-grow">
        <!-- catalog -->
        <BaseButton
          text="catalog"
          :icon="isCatalogOpen ? 'icon-close-circle' : 'icon-burger'"
          icon-position="left"
          variant="primary"
          wrapper-class="!bg-black-gradient hover:!shadow-none !p-2"
          @click="changeCatalogStatus"
        />

        <!-- search input -->
        <CommonSearch :search-data="searchFilter" />
      </div>

      <!-- carts -->
      <div class="flex-y-center gap-5 ml-8.5">
        <!-- orders -->
        <a href="#!" class="flex-center flex-col group">
          <div class="relative flex">
            <i class="icon-box text-28 leading-7 text-gray group-red" />
            <CommonBadge
              :count="0"
              wrapper-class="absolute -top-1 -right-1 group-hover:!shadow-red"
            />
          </div>

          <span class="text-gray text-xs leading-130 group-hover:text-red transition-300">
            {{ $t("my_orders") }}
          </span>
        </a>

        <!-- cart -->
        <NuxtLink to="/cart" class="flex-center flex-col group">
          <div class="relative flex">
            <i class="icon-cart text-28 leading-7 text-gray group-red" />
            <CommonBadge
              :count="0"
              wrapper-class="absolute -top-1 -right-1 group-hover:!shadow-red"
            />
          </div>

          <span class="text-gray text-xs leading-130 group-red">{{ $t("basket") }}</span>
        </NuxtLink>

        <!-- likes -->
        <a href="#!" class="flex-center flex-col group">
          <div class="relative flex">
            <i class="icon-like text-28 leading-7 text-gray group-red" />
            <CommonBadge
              :count="3"
              wrapper-class="absolute -top-1 -right-1 group-hover:!shadow-red"
            />
          </div>

          <span class="text-gray text-xs leading-130 group-hover:text-red transition-300">
            {{ $t("favourites") }}
          </span>
        </a>
      </div>

      <!-- login -->
      <BaseButton
        v-if="!isAuthenticated"
        text="login"
        icon="icon-login"
        icon-position="left"
        wrapper-class="ml-8"
        @click="openModal"
      />
      <NuxtLink v-else to="/profile">
        <BaseButton
          text="profile"
          icon="icon-user !text-gray"
          icon-position="left"
          variant="secondary"
          wrapper-class="ml-8 !text-gray !bg-gray-200"
        />
      </NuxtLink>
    </div>
    <!-- navigation -->
    <nav class="hidden lg:block bg-white border-t border-gray-200">
      <ul class="container flex-between py-4">
        <li v-for="(nav, key) in navLinks" :key class="flex-y-center gap-4 group">
          <span v-if="key !== 0" class="w-px h-3 rounded-px bg-gray-400" />
          <NuxtLink
            to="/products/filter"
            class="h-5.5 text-black text-sm leading-130 flex flex-col gap-2 group overflow-hidden"
          >
            <span
              class="origin-bottom-right rotate-0 translate-y-0 group-hover:-translate-y-5 group-hover:rotate-12 transition-300 group-red"
              >{{ $t(nav.text) }}</span
            >
            <span
              class="origin-top-right -rotate-12 translate-y-3.5 group-hover:-translate-y-6.5 group-hover:rotate-0 transition-300 group-red"
              >{{ $t(nav.text) }}</span
            >
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <Transition name="move" mode="out-in">
      <CommonCatalog v-if="isCatalogOpen" @open-auth-modal="changeCatalogStatus" />
    </Transition>

    <AuthModal :show="isOpen" @close="closeModal" />
  </header>
</template>

<script setup lang="ts">
import { searchFilter } from "@/mocks";
import type { ISelect } from "~/types";

const { setLocale } = useI18n();
const { isOpen, openModal, closeModal } = useModal();
const { isAuthenticated } = useAuthStore();

const isCatalogOpen = ref(false);
const curLang = ref<ISelect>({ id: "uz", label: "O'zbekcha", value: "uz" });

watch(
  () => curLang,
  () => {
    setLocale(curLang.value.value);
  },
  { deep: true }
);

const changeCatalogStatus = () => {
  isCatalogOpen.value = !isCatalogOpen.value;
  if (navigator.platform.toUpperCase().indexOf("MAC") >= 0) {
    document.body.style.overflowY = isCatalogOpen.value ? "hidden" : "auto";
    document.body.style.paddingRight = "15px";
  } else {
    document.body.style.overflowY = isCatalogOpen.value ? "hidden" : "auto";
  }
};

const navLinks = ref([
  {
    text: "products",
    url: "#!",
  },
  {
    text: "fresh_discount",
    url: "#!",
  },
  {
    text: "face_products",
    url: "#!",
  },
  {
    text: "bath_bombs",
    url: "#!",
  },
  {
    text: "makeup_products",
    url: "#!",
  },
  {
    text: "hair_dyes",
    url: "#!",
  },
  {
    text: "mens_products",
    url: "#!",
  },
  {
    text: "bathroom_products",
    url: "#!",
  },
]);

const langs: ISelect[] = [
  {
    id: "uz",
    label: "O'zbekcha",
    value: "uz",
  },
  {
    id: "ru",
    label: "Русский",
    value: "ru",
  },
  {
    id: "en",
    label: "English",
    value: "en",
  },
];
</script>

<style scoped>
img[alt="logo"] {
  filter: invert(24%) sepia(94%) saturate(3255%) hue-rotate(332deg) brightness(98%)
    contrast(97%);
}
.catalog-enter-active,
.catalog-leave-active {
  transition: all 200ms ease;
}

.catalog-enter-from,
.catalog-leave-to {
  opacity: 0;
}
</style>
