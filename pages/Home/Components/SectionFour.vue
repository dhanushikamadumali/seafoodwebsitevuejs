<template>
  <div>
    <div class="main_continer">
      <!--  Best selling items -->

      <v-row>
        
        <v-col lg="6" md="6" cols="6">
          <div class="pl-12">
            <span class="slider_title">Our Best Sellers</span>
          </div>
        </v-col>
        <v-col lg="6" md="6" cols="6">
          <div class="d-flex justify-end pr-12">
          <a href=""><span class="see_all">See All</span></a>
        </div>
        </v-col>
      
      </v-row>

      <BestSellerSlider />
    </div>
  </div>
</template>
import BestSellerSlider from "@/components/BestSellerSlider.vue";
<script>
export default {};
</script>
