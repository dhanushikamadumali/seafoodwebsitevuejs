<template>
  <div>
    <!-- mobile drawer -->
    <div class="mobile_header">
      <v-navigation-drawer v-model="drawer" temporary>
        <v-list density="compact" nav>
          <v-list-item class="mr-6" prepend-icon="mdi-account-outline"
            ><span class="header_text"> Sign in</span></v-list-item
          >
          <v-list-item class="mr-6" prepend-icon="mdi-heart-outline"
            ><span class="header_text">Whishlist</span></v-list-item
          >
          <v-list-item class="mr-6" prepend-icon="mdi-cart-outline" @click="$router.push(`/shoppingcart`)"
            ><span class="header_text">Cart</span></v-list-item
          >
          <v-list-item class="mr-6" prepend-icon="mdi-menu"
            ><span class="header_text">Product</span></v-list-item
          >
          <v-list-item class="mr-6"  prepend-icon="mdi-truck"
            ><span class="header_text" >Delivery Areas</span></v-list-item
          >
          <v-list-item class="mr-6" prepend-icon="mdi-contacts"
            ><span class="header_text">Contact Us</span></v-list-item
          >
          <v-list-item class="mr-6" prepend-icon="mdi-comment-quote"
            ><span class="header_text">FAQ</span></v-list-item
          >
        </v-list>
      </v-navigation-drawer>
    </div>
    <!-- header nav one -->
    <div><div class="headernavone"></div></div>
    <!-- header nav two -->
    <v-app-bar elevation="1" class="web_header hedernavtwo">
      <div class="mobile_header">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </div>
      <v-col class="ml-10 web_header">
        <v-img src="~/assets/images/LogoNew.png" height="106" width="85">
        </v-img>
      </v-col>
      <!-- <v-spacer class="mobile_header"></v-spacer> -->
        <v-col>
        <v-text-field
          type="text"
          density="compact"
          placeholder="Search for product"
          variant="outlined"
          @click:append-inner="visible = !visible"
          class="searchbox"
        >
          <template v-slot:prepend-inner>
            <div class="icon-with-divider">
              <v-icon icon="mdi-text-search" class="pt-1"></v-icon>
              <div class="divider"></div>
            </div>
          </template>
          <template v-slot:append-inner>
            <v-btn
              class="searchicon"
              icon="mdi-magnify"
              size="small"
              variant="flat"
              flat
            ></v-btn>
          </template>
        </v-text-field>     
     </v-col>
      <v-spacer></v-spacer>
      <div class="web_header">
        <v-list-item class="mr-3">        
          <span class="header_text">
            <v-icon icon="mdi-account-outline" class="navicon"></v-icon
            >
            Signin</span
          >
        </v-list-item>
      </div>
      <div class="web_header">
        <v-list-item class="mr-3">         
          <span class="header_text"
            ><v-icon icon="mdi-heart-outline" class="navicon"></v-icon
            >Whishlist</span
          ></v-list-item
        >
      </div>
      <div class="web_header">
        <v-list-item class="mr-10" @click="$router.push(`/shoppingcart`)">
          <span class="header_text"
            ><v-icon icon="mdi-cart-outline" class="navicon"></v-icon>Cart</span
          ></v-list-item
        >
      </div>
    </v-app-bar>
    <!-- header nav three -->
    <div class="web_header">
      <v-app-bar elevation="0" class="hedernavthree">
        <div class="web_header">
          <v-list-item class="ml-10" @click="$router.push(`/productslist/0`)">
            <span class="header_text">
              <v-icon
                icon="mdi-menu"
                width="16"
                height="14"
                class="menuicon"
              ></v-icon>
              Product</span
            ></v-list-item
          >
        </div>
        <div class="web_header">
          <v-list-item class="ml-10">
            <span class="header_text">Delivery Areas</span></v-list-item
          >
        </div>
        <div class="web_header">
          <v-list-item class="ml-12">
            <span class="header_text">Contact Us</span></v-list-item
          >
        </div>
        <div class="web_header">
          <v-list-item class="ml-10">
            <span class="header_text">FAQ</span></v-list-item
          >
        </div>
        <v-col class="ml-16"> </v-col>
        <div class="web_header">
          <v-list-item class="mr-10">
            <div class="d-flex">
              <v-img
                src="~/assets/images/logos_whatsapp-icon.png"
                height="22"
                width="24"
                class="mb-2 mr-3"
              ></v-img>
              <span class="phoneno">075-291-291</span>
            </div>
          </v-list-item>
        </div>
      </v-app-bar>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      drawer: null,
    };
  },
};
</script>
