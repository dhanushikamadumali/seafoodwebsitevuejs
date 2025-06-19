// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  // devtools: { enabled: true },
  ssr: false,
  build: {
    transpile: ["vuetify"],
  },

  // spaLoadingTemplate: 'abs.html',
  app: {
    head: {
      title:
        "SeafoodExpress - Shop Fresh Fish & Seafood | Online Order | Delivery",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        {
          name: "description",
          content:
            "Seafood Express: Shop Fresh Fish & Seafood | Online Order | Free Delivery ",
        },
      ],
    },
  },
  modules: [   
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Inter: true,
          Lato: true,
        },
      },
    ],
    //...
  ],
  plugins: ['~/plugins/mixins.js'],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  css: [
    "~/assets/scss/global_styles.scss",
    "~/assets/scss/header.scss",
    "~/assets/scss/footer.scss",
    "~/assets/scss/home.scss",
    "~/assets/scss/review.scss",
    "~/assets/scss/shoppingcart.scss",
    "~/assets/scss/checkout.scss",
    "~/assets/scss/product.scss",
    "~/assets/scss/faq.scss",
    "~/assets/scss/mainpageslider.scss",   
    "~/assets/scss/bestsellerslider.scss",   

  ],

  hooks: {
    "pages:extend"(pages) {
      // add a route
      pages.push(
        {
          name: "home",
          path: "/",
          file: "~/pages/Home/index.vue",
        },
        {
          name: "productslist",
          path: "/productslist/:categoryid",
          file: "~/pages/Products/ProductsList/index.vue",
        },
        {
          name: "shoppingcart",
          path: "/shoppingcart",
          file: "~/pages/ShoppingCart/index.vue",
        },
        {
          name: "checkout",
          path: "/checkout",
          file: "~/pages/Checkout/index.vue",
        },
        {
          name: "contactus",
          path: "/contactus",
          file: "~/pages/ContactUs/index.vue",
        },
        {
          name: "faq",
          path: "/faq",
          file: "~/pages/Faq/index.vue",
        },
        {
          name: "singleproduct",
          path: "/singleproduct",
          file: "~/pages/Products/SingleProduct/index.vue",
        },
      );
    },
  },
});
