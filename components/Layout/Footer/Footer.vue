<template>
  <footer class="hidden lg:block bg-white">
    <div class="container pt-6">
      <div class="bg-gray-100 rounded-2xl px-5 py-4 flex-between">
        <div class="flex-between gap-9">
          <a href="/">
            <img
              src="/images/logo.svg"
              class="h-12 max-w-28 object-contain logo-hue-rotate"
              alt="tashkent parfume logo"
            />
          </a>
          <div class="flex-between gap-6">
            <a class="text-black hover:text-red" href="tel:+998712097887">
              <i
                class="icon-phone-calling h-7 text-gray-500 align-middle mr-3"
              />
              <span class="leading-130 text-base text-inherit transition-300">
                {{ formatPhone("712097887") }}</span
              >
            </a>
            <a
              class="text-black hover:text-red"
              href="mailto:tashkentparfume@gmail.com"
            >
              <i class="icon-email h-7 text-gray-500 align-middle mr-3" />
              <span class="leading-130 text-base text-inherit transition-300">
                tashkentparfume@gmail.com
              </span>
            </a>
          </div>
        </div>
        <div class="flex-between gap-4">
          <a
            href="https://apps.apple.com/uz/app/toshkent-parfum/id6458222909"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              class="h-10 object-center"
              src="/images/icons/apple.svg"
              alt="Toshkent parfum apple store"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=uz.tashkentparfum.tashkentparfumapp&pli=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              class="h-10 object-center"
              src="/images/icons/google-play.svg"
              alt="Toshkent parfum apk"
            />
          </a>
        </div>
      </div>
      <div class="flex-between !items-start my-8 gap-8">
        <div class="flex gap-10">
          <ul
            v-for="link in footer_links"
            :key="link.id"
            class="flex flex-col gap-y-3"
          >
            <li class="font-semibold">{{ $t(link.label) }}</li>
            <li
              v-for="path in link.links"
              :key="path"
              class="text-gray-500 cursor-pointer hover:translate-x-2 hover:text-red transition-all"
            >
              {{ $t(path) }}
            </li>

            <ul v-if="link.id == 2">
              <li class="font-semibold mb-3">{{ $t("our") }}</li>
              <li class="font-semibold flex items-center gap-4">
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
          </ul>
        </div>
        <div class="bg-gray-100 p-5 rounded-2xl flex-between gap-14 max-w-xl">
          <div>
            <h1 class="text-xl font-semibold leading-130 mb-3">
              {{ $t("be_in_our_tg") }}
            </h1>
            <a
              href="https://t.me/toshkent_parfume"
              rel="noopener"
              target="_blank"
            >
              <div
                class="bg-blue-50 p-3 rounded-lg flex gap-2 border hover:border-blue hover:text-blue transition"
              >
                <img
                  class="w-6 object-contain object-center"
                  src="/images/icons/telegram-gradient.svg"
                  alt="tashkent parfum telegram kanali"
                />
                <span class="transition-colors">
                  {{ $t("contact_with_tg") }}
                </span>
              </div>
            </a>
          </div>
          <div>
            <img
              src="/images/telegram-glass.svg"
              alt="Toshkent parfum telegram kanali"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-100">
      <div class="container flex-between py-5">
        <div class="font-semibold text-[0.875rem]">
          Toshkent Parfum© {{ new Date().getUTCFullYear() }}.
          {{ $t("all_rights_reserved") }}
        </div>
        <a
          class="px-2"
          href="https://uic.group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img class="w-12" src="/images/uic/logo.svg" alt="UIC group logo" />
        </a>
        <NuxtLink to="/privacy-policy">
          <div class="font-semibold text-[0.875rem]">
            {{ $t("privacy_policy") }}
          </div>
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { footer_links } from "~/data";
</script>
