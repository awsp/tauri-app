import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",

  ssr: false,

  nitro: {
    preset: "static",
  },

  devServer: {
    host: "0",
  },

  devtools: { enabled: true },

  experimental: {
    viteEnvironmentApi: true,
    inlineRouteRules: true,
  },

  modules: ["@nuxtjs/color-mode", "motion-v/nuxt", "@vueuse/nuxt", "@nuxt/icon", "@nuxt/fonts"],

  imports: {
    imports: [
      {
        from: "tailwind-variants",
        name: "tv",
      },
      {
        from: "tailwind-variants",
        name: "VariantProps",
        type: true,
      },
    ],
  },

  colorMode: {
    storageKey: "my-app-color-mode",
    classSuffix: "",
  },

  icon: {
    clientBundle: {
      scan: true,
      sizeLimitKb: 0,
    },

    mode: "svg",
    class: "shrink-0",
    fetchTimeout: 2000,
    serverBundle: "local",
  },

  css: ["~/assets/css/tailwind.css"],

  vite: {
    clearScreen: false,
    envPrefix: ["VITE_", "TAURI_"],
    server: {
      strictPort: true,
    },
    plugins: [tailwindcss()],
  },

  ignore: ["**/src-tauri/**"],
});