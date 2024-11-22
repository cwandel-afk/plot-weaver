// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  content: {
    documentDriven: true,
    markdown: {
      mdc: true,
    },
  },
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  hub: {
    database: true,
  },
  modules: ["@nuxthub/core", "@nuxt/content", "nuxt-auth-utils"],
  postcss: {
    plugins: {
      autoprefixer: {},
      tailwindcss: {},
    },
  },
  runtimeConfig: {
    oauth: {
      // provider in lowercase (github, google, etc.)
      google: {
        clientId: process.env.NUXT_OAUTH_GOOGLE_CLIENT_ID,
        clientSecret: process.env.NUXT_OAUTH_GOOGLE_CLIENT_SECRET,
      },
    },
  },
});
