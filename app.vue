<template>
  <div>
    <SplashScreen v-if="loading" />
    <nuxt-layout v-if="loading === false"> </nuxt-layout>
  </div>
</template>
<script>
import SplashScreen from "~/components/SpashScreen.vue";
export default {
  data() {
    return {
      loading: true,
    };
  },
  components: {
    SplashScreen,
  },
  created() {
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  },
};
</script>
