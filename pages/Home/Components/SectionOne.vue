<template>
  <div>
    <!-- home carousel -->
    <div class="web_header main_continer">
      <v-carousel height="900px">
        <v-carousel-item>
          <v-sheet class="bgsheetone">
            <div class="bgimage1">
              <v-img src="~/assets/images/bg1.png"> </v-img>
            </div>
            <v-container class="sub_container">               
                  <h1 class="slider_one_heading">
                    Your Seafood<br />
                    Journey Starts Here!
                  </h1>
                  <p class="slider_one_para">
                    Discover over 50+ varieties of seafood,<br />
                    from succulent shrimp to exotic lobster.<br />
                    Your culinary adventure awaits.
                  </p>           
                
                  <v-btn class="shopnow_btn" variant="tonal"
                    >Shop Now</v-btn
                  >
                          
            </v-container>
          </v-sheet>
        </v-carousel-item>
        <v-carousel-item>
          <v-sheet class="bgsheettwo">
            <div class="bgimage2">
              <v-img src="~/assets/images/bg2.png"> </v-img>
            </div>
            <v-container class="sub_container">
             
                  <h1 class="slider_one_heading">
                    Your Seafood<br />Journey Starts Here!
                  </h1>
                  <p class="slider_one_para">
                    Discover over 50+ varieties of seafood,<br />
                    from succulent shrimp to exotic lobster.<br />
                    Your culinary adventure awaits.
                  </p>
               
               
                  <v-btn class="shopnow_btnslidertwo" variant="tonal"
                    >Shop Now</v-btn
                  >
                
             
            </v-container>
          </v-sheet>
        </v-carousel-item>
        <v-carousel-item>
          <v-sheet class="bgsheetthree">
            <div class="bgimage3">
              <v-img src="~/assets/images/bg3.png"> </v-img>
            </div>
            <v-container class="sub_container">
            
                  <h1 class="slider_one_heading">
                    Your Seafood<br />
                    Journey Starts Here!
                  </h1>
                  <p class="slider_one_para">
                    Discover over 50+ varieties of seafood,<br />
                    from succulent shrimp to exotic lobster.<br />
                    Your culinary adventure awaits.
                  </p>
               
                <div>
                  <v-btn class="shopnow_btn" variant="tonal" color="orange"
                    >Shop Now</v-btn
                  >
                </div>
             
            </v-container>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>

    <div class="mobile_header main_continer">
      <v-carousel height="900px">
        <v-carousel-item>
          <v-sheet class="bgsheetone">
            <v-container class="sub_container">
             
             
                  <h1 class="slider_one_heading">
                    Your Seafood<br />
                    Journey Starts Here!
                  </h1>
                  <p class="slider_one_para">
                    Discover over 50+ varieties of seafood,<br />
                    from succulent shrimp to exotic lobster.<br />
                    Your culinary adventure awaits.
                  </p>
               
               
              <v-row class="btncontainer">
                <v-col>
                  <v-btn class="shopnow_btn" variant="tonal" color="orange"
                    >Shop Now</v-btn
                  >
                </v-col></v-row
              >
            </v-container>
          </v-sheet>
        </v-carousel-item>
        <v-carousel-item>
          <v-sheet class="bgsheettwo">
            <v-container class="sub_container">
              <h1 class="slider_one_heading">
                Your Seafood<br />Journey Starts Here!
              </h1>
              <p class="slider_one_para">
                Discover over 50+ varieties of seafood,<br />
                from succulent shrimp to exotic lobster.<br />
                Your culinary adventure awaits.
              </p>
               <v-row class="btncontainer">
              <v-col>
              <v-btn class="shopnow_btnslidertwo" variant="tonal"
                >Shop Now</v-btn
              >
              </v-col>
              </v-row>
            </v-container>
          </v-sheet>
        </v-carousel-item>
        <v-carousel-item>
          <v-sheet class="bgsheetthree">
            <v-container class="sub_container">
              <h1 class="slider_one_heading">
                Your Seafood<br />
                Journey Starts Here!
              </h1>
              <p class="slider_one_para">
                Discover over 50+ varieties of seafood,<br />
                from succulent shrimp to exotic lobster.<br />
                Your culinary adventure awaits.
              </p>
              <v-row class="btncontainer">
                <v-col>
                  <v-btn class="shopnow_btn" variant="tonal" color="orange"
                    >Shop Now</v-btn
                  >
                </v-col>
              </v-row>
            </v-container>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>
<script>
export default {};
</script>
