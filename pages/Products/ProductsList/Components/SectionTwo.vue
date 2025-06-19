<template>
  <div>
    <div class="main-container">
      <v-row class="all_product_align">
        <div class=" all_product"><span>All Products</span></div>
      </v-row>
      <v-row>
        
        <!-- Filter Products By Card -->
        <v-col lg="3" md="3" cols="12">
          <v-card class="mx-auto filter_card" max-width="647" max-height="370" border flat>
            <v-list-item class="card_header">
              <div class="header_title">Filter Products By</div>
            </v-list-item>
            <v-divider></v-divider>
            
            <v-card-text class="text-medium-emphasis pa-6">
              <div class="price mb-4">Price</div>
              <v-divider class="mb-6"></v-divider>
              
              <v-range-slider v-model="value" :min="400" :max="25000" step="100" thumb-label="always"
              color="#27abe2"></v-range-slider>
              
              
              <v-btn class="filter_btn" variant="outlined">
                <div class="filter_btn_text">Filter</div>
              </v-btn>
              
              <div class="price_range">
                Price: LKR {{ value[0].toLocaleString() }} - LKR {{ value[1].toLocaleString() }}
              </div>
            </v-card-text>
            
          </v-card>
        </v-col>
        
        
        <!-- Sort Box -->
        <v-col lg="9" md="9" cols="12">
          <v-card class="mx-auto filter_card mb-6" max-width="1090" max-height="366" border flat>
            <v-card-text class="text-medium-emphasis pa-6">
              <v-row>
                <v-col lg="6" md="6" cols="12" class="sort_text ">
                  Showing {{ startIndex + 1 }}-{{ Math.min(endIndex, totalItems) }} of {{ totalItems }} results
                </v-col>
                <v-col lg="6" md="6" cols="12">
                  
                  <v-row>
                    <v-col lg="5" md="5" cols="12" class="sort_text">
                      SORT BY:
                    </v-col>
                    <v-col lg="7" md="7" cols="12" class="">
                      <v-select v-model="sortBy" :items="sortOptions" class="custom-select" 
                      style="max-width: 300px;"
                      variant="outlined"
                      >
                    </v-select>
                    
                    <!-- <v-autocomplete v-model="sortBy" :items="sortOptions" class="custom-select" variant="outlined"
                    dense style="max-width: 300px;"></v-autocomplete> -->
                    
                  </v-col>
                </v-row>
                
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
        <!-- Above Row -->
        
        <v-row>
          <v-col v-for="(item, index) in paginatedProducts.slice(0, 3)" :key="index" cols="12" md="4">
            <v-card class="pb-2 card">
              <div class="product-card">
                <v-img :src="'http://127.0.0.1:8000/storage'+'/'+item.product_image" class="product-image"></v-img>
                <div class="productcard-btn"> <v-btn density="compact" icon="mdi-plus"></v-btn></div>
              </div>
              <div class="ml-4 pt-4">
                <strong class="text-h6 productcard-title mb-4 ">{{ item.product_name }}</strong>
                <div class="productcard-subtitle mb-3">
                  Minimum weight 500g
                </div>
                <strong class="text-h6  productcard-price">RS. {{ item.fixed_item_unit_price }}</strong>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    
    <!-- Below Row -->
    <v-row>
      <v-col v-for="(item, index) in paginatedProducts.slice(3, 15)" :key="index" cols="12" md="3">
        
        <v-card class="pb-3 card">
          <div class="product-card">
             <v-img class="img" cover="fill" :src="item.img"></v-img>
            <div class="productcard-btn"> <v-btn density="compact" icon="mdi-plus"></v-btn></div>
          </div>
          
          <div class="ml-4 pt-4">
            <strong class="text-h6 productcard-title mb-4">{{ item.product_name }}</strong>
            <div class="productcard-subtitle mb-3">
              {{ item.subtitle }}
            </div>
            <strong class="text-h6 productcard-price">RS. {{ item.fixed_item_unit_price }}</strong>
          </div>
          
        </v-card>
      </v-col>
    </v-row>
    
    
    <!-- Pagination -->
    <v-row dense class="mt-4">
      <v-col cols="12" class="text-center">
        <v-pagination v-model="currentPage" :length="pageCount" :total-visible="5" circle></v-pagination>
      </v-col>
    </v-row>  
    
  </div>
</div>
</template>

<script>
import cuttlefishImage from '@/assets/images/Productlist/cuttlefish.png';
import PrawnsImage from '@/assets/images/Productlist/Prawns.png';
import TunaImage from '@/assets/images/Productlist/Tuna.png';
import YellowfinTunaImage from '@/assets/images/Productlist/YellowfinTuna.png';



export default { 
  props: {
    categoryid: {
      type: Number,      
    },
  }, 
  data: () => ({
    search: "",
    value: [400, 25000],    
    currentPage: 1,
    itemsPerPage: 15,
    sortBy: null,
    sortOptions: ["Price: Low to High", "Price: High to Low", "Title: A-Z", "Title: Z-A"],
    searchdata:"",
    products: [
      {
          id:1,
          img: PrawnsImage,
          title: "Prawns",
          subtitle: "3 Products",
      },
      {
          id:2,
          img: TunaImage,
          title: "Tuna",
          subtitle: "3 Products",
      },
     
      {
          id:5,
          img: YellowfinTunaImage,
          title: "Cuttlefish",
          subtitle: "3 Products",
      },
      {
          id:6,
          img: cuttlefishImage,
          title: "Prawns",
          subtitle: "3 Products",
      },
     
    ],   
    id:"",
     items:"",
   
  }), 
 
  computed: {
    totalItems() {
      return this.products.length;
    },
    startIndex() {
      return (this.currentPage - 1) * this.itemsPerPage;
    },
    endIndex() {
      return this.startIndex + this.itemsPerPage;
    },
    
    //Sorted data
    paginatedProducts() {
      let sortedProducts = [...this.products];
      if (this.sortBy === "Price: Low to High") {
        sortedProducts.sort((a, b) => a.price - b.price);
      } else if (this.sortBy === "Price: High to Low") {
        sortedProducts.sort((a, b) => b.price - a.price);
      } else if (this.sortBy === "Title: A-Z") {
        sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
      } else if (this.sortBy === "Title: Z-A") {
        sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
      }
      return sortedProducts.slice(this.startIndex, this.endIndex);
    },    
    pageCount() {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    },    
    
  },
  
};
</script>
