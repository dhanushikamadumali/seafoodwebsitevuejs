<template>
  <div>
   <v-row>   
   <!-- related product div -->
    <v-col lg="3" cols="12">
      <v-card class="related_productdiv" variant="flat">
        <div class="d-flex arrow_div">

        
             <v-btn  density="compact" @click="prevSlide" class="left_button" elevation="0">
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
         
          <!-- Left Arrow -->
          
         
          <!-- Right Arrow -->
           <v-btn density="compact" class="right_button" @click="nextSlide"  elevation="0">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>


        </div>

        <div class="related_product">
          <span>Related Products</span>
        </div>
        <div>
          <v-btn class="view_allbtn">View All</v-btn>
        </div>
      </v-card>   
    </v-col>
    <!-- products -->   
 
    <v-col lg="9" cols="12">
      <div class="best_seller" elevation="8">
          <v-slide-group v-model="model" class="pa-4" show-arrows>
              <v-slide-group-item v-for="(item, index)  in products" :key="index" v-slot="{ isSelected, toggle }">
                  <v-card :color="isSelected ? '' : 'white-lighten-1'" class="imagecard ma-3" 
                      @click="toggle">
                      <div class="d-flex align-start justify-center">
                          <v-img class="productimg" cover="fill" :src="item.img"></v-img>
                      </div>

                     <div class="productcard-btn"> 
                       <v-btn density="compact" icon="mdi-plus"></v-btn>
                      </div>
                   
                    
                      <div class="d-flex justify-left pt-6">
                          <span class="text-h6 productcard-title">{{ item.title }}</span>
                      </div>
                      <div class="d-flex justify-left pt-1">
                          <span class="productcard-subtitle">{{ item.subtitle }}</span>
                      </div>
                      <div class="d-flex justify-left pt-1">
                          <span class="text-h6 productcard-price">{{ item.price }}</span>
                      </div>
                  </v-card>
              </v-slide-group-item>
          </v-slide-group>
      </div>
      
      <!-- <v-slide-group v-model="model">
        <v-slide-group-item 
          v-for="(item, index) in products" 
          :key="index"
          v-slot="{ isSelected, toggle }"
        >
          <v-card 
            :color="isSelected ? '' : 'white-lighten-1'" 
            class="imagecard ma-5"
            @click="toggle"
           
          >
            <div class="d-flex align-start justify-center">
              <v-img class="productimg" cover :src="item.img"></v-img>
            </div>

            <div class="productcard-btn"> 
              <v-btn density="compact" icon="mdi-plus"></v-btn>
            </div>

            <div class="d-flex justify-left pt-6">
              <span class="text-h6 productcard-title">{{ item.title }}</span>
            </div>
            <div class="d-flex justify-left pt-1">
              <span class="productcard-subtitle">{{ item.subtitle }}</span>
            </div>
            <div class="d-flex justify-left pt-1">
              <span class="text-h6 productcard-price">Rs.{{ item.price }}</span>
            </div>
          </v-card>
        </v-slide-group-item>
      </v-slide-group> -->
    </v-col>
   </v-row>
  </div>
</template>
<script>
import Prawn from '@/assets/images/SingleProduct/Prawn.png';
import RiverPrawn from '@/assets/images/SingleProduct/RiverPrawn.png';
import Shrimps from '@/assets/images/SingleProduct/Shrimps.png';
import Prawnone from '@/assets/images/SingleProduct/Prawn.png';

import Shrimpsone from '@/assets/images/SingleProduct/Shrimps.png';
export default {
    data () {
      return {
        products: [
          {
            img: Prawn,
            title: "Large Prawns",
            subtitle:
              "Minimum Weight 500g",
            price: "Rs.2490.00",
          },
             {
                img: RiverPrawn,
                title: "Giant River Prawns",
                subtitle:
                  "Minimum Weight 500g",
                price: "Rs.2490.00",
              },
             {
                img: Shrimps,
                title: "Shrimps",
                subtitle:
                  "Minimum Weight 500g",
                price: "Rs.2490.00",
              },   
          {
            img: Prawnone,
            title: "Large Prawns",
            subtitle:
              "Minimum Weight 500g",
            price: "Rs.2490.00",
          },
           
             {
                img: Shrimpsone,
                title: "Shrimps",
                subtitle:
                  "Minimum Weight 500g",
                price: "Rs.2490.00",
              },      
        ],
        model: 0, // Controls the active slide index
        totalSlides: 15, // Number of slides
      };
    },

  methods: {
    nextSlide() {
      if (this.model < this.totalSlides - 1) {
        this.model++;
      }
    },
    prevSlide() {
      if (this.model > 0) {
        this.model--;
      }
    },
  },
    
   
}
</script>