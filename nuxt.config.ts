import dotenv from "dotenv";

dotenv.config();

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  modules: ["@nuxthub/core", "@nuxt/content", "nuxt-auth-utils"],
  content: {
    markdown: {
      mdc: true,
    },
  },
  css: ["./assets/css/main.css"],
  devtools: { enabled: true },
  hub: {
    database: true,
    // remote: true,
    projectKey: process.env.NUXT_HUB_PROJECT_KEY,
  },
  postcss: {
    plugins: {
      autoprefixer: {},
      tailwindcss: {},
    },
  },
  runtimeConfig: {
    app: {
      NEON_CONNECTION_STRING: process.env.NEON_CONNECTION_STRING,
    },
    oauth: {
      // provider in lowercase (github, google, etc.)
      google: {
        clientId: process.env.NUXT_OAUTH_GOOGLE_CLIENT_ID,
        clientSecret: process.env.NUXT_OAUTH_GOOGLE_CLIENT_SECRET,
      },
    },
  },
});
