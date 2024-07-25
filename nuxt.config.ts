// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  css: ["~/assets/css/main.css"],
  modules: [
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@nuxtjs/i18n",
    "@nuxtjs/tailwindcss",
    "@nuxt/eslint",
    "@pinia/nuxt",
  ],
  i18n: {
    defaultLocale: "uz",
    locales: [
      { code: "uz", file: "uz.json" },
      { code: "ru", file: "ru.json" },
      { code: "en", file: "en.json" },
    ],
    langDir: "locales",
    strategy: "no_prefix",
  },
  pinia: {
    storesDirs: ["./stores/**", "./custom-folder/stores/**"],
  },
});
