<template>
  <footer class="lg:hidden bg-white pt-4">
    <div class="container">
      <div class="bg-gray-100 rounded-2xl p-4">
        <a to="/">
          <img
            src="/images/logo.svg"
            class="h-12 max-w-28 object-contain"
            alt="tashkent parfume logo svg, png, webp"
          />
        </a>
        <div class="flex-center gap-4">
          <a
            v-for="appLink in mobileAppStoreLinks"
            :key="appLink.key"
            :href="appLink.link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              class="h-12 object-contain object-center"
              :src="appLink.img"
              :alt="appLink.key"
            />
          </a>
        </div>
        <div class="flex flex-col">
          <a to="tel:+998712097887">
            <i class="icon-phone-calling h-7 text-gray-500 align-middle mr-3" />
            <span class="leading-130 text-base text-black font-semibold">
              {{ formatPhone("712007007") }}
            </span>
          </a>
          <a to="mailto:tashkentparfume@gmail.com">
            <i class="icon-email h-7 text-gray-500 align-middle mr-3" />
            <span class="leading-130 text-base text-black font-semibold"
              >tashkentparfume@gmail.com</span
            >
          </a>
        </div>
      </div>
      <div class="grid grid-cols-2 mt-4">
        <ul
          v-for="link in footer_links"
          :key="link.id"
          class="flex flex-col gap-y-2"
        >
          <li class="font-semibold">{{ $t(link.label) }}</li>
          <li
            v-for="path in link.links"
            :key="path"
            class="text-gray-500 cursor-pointer hover:translate-x-2 hover:text-red transition-all"
          >
            {{ $t(path) }}
          </li>
        </ul>
        <ul>
          <li class="font-semibold mb-3">{{ $t("our") }}</li>
          <li class="font-semibold flex gap-4">
            <CommonTooltip text="Facebook">
              <i
                class="icon-facebook text-gray-500 group-hover:text-red texttransition-colors w-full h-full"
              />
            </CommonTooltip>
            <CommonTooltip text="Instagram">
              <i
                class="icon-instagram-solid text-gray-500 group-hover:text-red texttransition-colors w-full h-full"
              />
            </CommonTooltip>
            <CommonTooltip text="Telegram">
              <i
                class="icon-telegram-solid text-gray-500 group-hover:text-red texttransition-colors w-full h-full"
              />
            </CommonTooltip>
          </li>
        </ul>
      </div>
      <div class="bg-gray-100 p-5 rounded-2xl my-4">
        <h1 class="text-xl font-semibold leading-130 mb-3">
          {{ $t("be_in_our_tg") }}
        </h1>
        <a href="https://t.me/toshkent_parfume" rel="noopener" target="_blank">
          <div
            class="bg-blue-50 p-3 rounded-lg flex gap-2 border hover:border-blue hover:text-blue transition"
          >
            <img
              class="w-6 object-contain object-center"
              src="/images/icons/telegram-gradient.svg"
              alt="tashkent parfum telegram kanali"
            />
            <span class="transition-colors"> {{ $t("contact_with_tg") }} </span>
          </div>
        </a>
      </div>
    </div>
    <div class="bg-gray-100">
      <div class="container flex-between py-3">
        <div>
          <span class="font-semibold text-[0.875rem]">
            Toshkent Parfum© {{ new Date().getUTCFullYear() }}.
            <br />
            {{ $t("all_rights_reserved") }}
          </span>
          <br />
          <a
            href="https://toshkent-parfum.uz/pages/terms-of-use"
            target="_blank"
            class="font-semibold"
          >
            {{ $t("privacy_policy") }}
          </a>
        </div>
        <a
          class="px-2"
          href="https://uic.group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img class="w-16" src="/images/uic/logo.svg" alt="UIC group logo" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { footer_links, mobileAppStoreLinks } from "~/data";
</script>
