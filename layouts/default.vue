<template>
  <v-app>
    <div class="header_alligns">
      <HeaderComponent />
    </div>
    <br />

    <nuxt-page></nuxt-page>

   
    <div class="review_alligns">
      <ReviewComponent />
    </div>

    <div class="footer_alligns">
      <FooterComponent />
    </div>
  </v-app>
</template>
<script>
export default {};
</script>
