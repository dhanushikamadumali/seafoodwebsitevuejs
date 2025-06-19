<template>
  <div>
    <div class="main_continer">
      <v-container>
        <v-row>
          <v-col lg="6" cols="12" class="image-container">
            <v-img
              src="assets\images\Home\Section03.png"
              alt="Freshest Deals"
              class="BannerImage"
            />
          </v-col>
          <v-col lg="6" cols="12">
            <p class="reel">Reel in the Freshest Deals</p>
            <!-- To be inline with the plan, br is inserted -->
            <p class="sub-reel">
              Unbeatable freshness, unmatched taste. <br />Shop today for the
              best in seafood.
            </p>

            <br />
            <br />

            <div class="button-container">
              <v-btn class="shop-now" variant="tonal">Shop Now</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {};
</script>
