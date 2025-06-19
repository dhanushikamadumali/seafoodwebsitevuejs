<template>
  <div>
    <!-- heading -->
    <span class="heading_one">Products/Prawns/Large Prawns</span>
    <v-row >
      <!-- first collumns -->
      <v-col lg="6" cols="12" class="single_img">
        <v-img src="~/assets/images/SingleProduct/Frame 1171275970.png"></v-img>
      </v-col>
      <!-- second collumns -->
      <v-col lg="6" cols="12">
        <div><span class="product_name">Large Prawns</span></div>
        <div class="mt-4">
          <span class="product_weight">Minimum Order : 400g </span>
        </div>
        <div class="mt-8"><span class="type">Type</span></div>
        <div class="d-flex mt-4">
          <v-btn class="tail_onbtn mr-4" variant="outlined">Tail On</v-btn>
          <v-btn class="peeled_btn" variant="outlined">Peeled</v-btn>
        </div>
        <div class="mt-4">
          <span class="weight_quantity">Weight & Quantity</span>
        </div>
        <div class="d-flex mt-4 align-items-center">
          <div class="weight_card">500g</div>
          <div class="d-flex  ms-3 ">
              <v-btn icon="mdi-plus" class="plusbtn"></v-btn>
            <v-text class="quantity-text">1</v-text>
              <v-btn  icon="mdi-minus" class="minusbtn"></v-btn>
          </div>
        </div>
        
        <v-row>
          <v-col lg="6" cols="12">
           <div class="product_price"><span >LKR 3,050 </span></div> 
          </v-col>
          <v-col lg="6" cols="12"
            ><v-btn class="add_cardbtn">Add To Cart</v-btn></v-col
          >
        </v-row>

        <v-row>
          <v-col lg="3" cols="12"></v-col>
          <v-col lg="9" cols="12">
            <v-btn class="view_cart">
              <div class="view_cart_right">
                 <!-- Display only the first four images -->
                <div v-for="(item, index) in images.slice(0, 4)" :key="index" class="view_cart_imgdiv">
                  <v-img class="view_cart_img" :src="item.img"></v-img>
                </div>

                <!-- Show Plus Button if there are more than four images -->
                <div v-if="images.length > 4">
                  <v-btn icon="mdi-plus" class="plus_button"></v-btn>
                </div>      
              

                <span>View Cart</span>
                <div class="cart_wrapper">
                  <div class="card_icondiv">
                    <v-img src="~/assets/images/SingleProduct/cart.png"></v-img>
                  </div>
                  <div class="count">2</div>
                </div>
              </div>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-divider class="divider"></v-divider>
  </div>
</template>
<script>
import Prawn from "@/assets/images/SingleProduct/image 44.png";
import Tuna from "@/assets/images/SingleProduct/image 44@2x.png";
import Salmon from "@/assets/images/SingleProduct/image 44 copy.png";
import Crab from "@/assets/images/SingleProduct/image 44@2x copy.png";
import Lobster from "@/assets/images/SingleProduct/image 44 copy 2.png";
export default {
  data() {
    return {
      images: [
        { img: Prawn },
        { img: Tuna },
        { img: Salmon },
        { img: Crab },
        { img: Lobster },
      ],
    };
  },
};
</script>
