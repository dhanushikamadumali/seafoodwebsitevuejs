<template>
  <div class="ml-6 mr-6">
    <v-footer class="footer_align">
      <v-row class="container">
        <!-- footer left section -->
        <v-col lg="3" md="3" cols="12">
          <div class="flex justify-content">
            <div class="web_header">
              <div class="ml-6">
                <!-- footer logo -->
                <v-img src="~/assets/images/LogoNew.png" width="150px" height="120px"></v-img>
              </div>
              <p class="pt-3 ml-6 left_para">
                Lorem ipsum dolor sit amet,<br />
                consectetur adipiscing elit.<br />
                Suspendisse massa libero, mattis<br />
                volutpat id.
              </p>
            </div>
          </div>
          <div class="mobile_header">
            <div class="img">
              <!-- footer logo -->
              <v-img src="~/assets/images/LogoNew.png" width="150px" height="120px"></v-img>
            </div>
            <p class="pt-3 left_para">
              Lorem ipsum dolor sit amet,<br />
              consectetur adipiscing elit.<br />
              Suspendisse massa libero, mattis<br />
              volutpat id.
            </p>

          </div>
        </v-col>

        <!-- footer right section -->
        <v-col lg="9" md="9" cols="12">
          <div class="">
            <v-row class="flex justify-content">
              <v-col cols="6" lg="3" md="3">
                <div class="d-flex justify-content">
                  <div class="ml-4">
                    <span class="right_header">Shop</span>
                  </div>
                </div>

                <div class="pt-4">
                  <v-list-item class="" @click="">
                    <span class="right_text">Products</span>
                  </v-list-item>
                  <v-list-item class="" @click="">
                    <span class="right_text">Delivery Areas</span>
                  </v-list-item>
                </div>
              </v-col>

              <v-col cols="6" lg="3" md="3">
                <div class="d-flex justify-content">
                  <div class="ml-4">
                    <span class="right_header">Help</span>
                  </div>
                </div>

                <div class="pt-4">
                  <v-list-item class="" @click="">
                    <span class="right_text">FAQ</span>
                  </v-list-item>
                  <v-list-item class="" @click="">
                    <span class="right_text">Contact Us</span>
                  </v-list-item>
                </div>
              </v-col>

              <v-col cols="6" lg="3" md="3">
                <div class="d-flex justify-content">
                  <div class="ml-4">
                    <span class="right_header">Account</span>
                  </div>
                </div>
                <div class="pt-4">
                  <v-list-item class="" @click="">
                    <span class="right_text">My Account</span>
                  </v-list-item>
                  <v-list-item class="" @click="">
                    <span class="right_text">Sign In</span>
                  </v-list-item>
                  <v-list-item class="" @click="">
                    <span class="right_text">View Cart</span>
                  </v-list-item>
                </div>
              </v-col>

              <v-col cols="6" lg="3" md="3">
                <div class="d-flex justify-content-center">
                  <div class="ml-4">
                    <span class="right_header">Follow Us</span>
                  </div>
                </div>
                <div class="pt-4 ml-4">
                  <!-- social media icons -->
                  <v-icon icon="mdi-facebook" class="navicon"></v-icon>
                  <v-icon icon="mdi-instagram" class="navicon"></v-icon>
                  <v-icon icon="mdi-linkedin" class="navicon"></v-icon>
                  <v-icon icon="mdi-youtube" class="navicon"></v-icon>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-footer>

    <!-- copyrights section -->
    <div class="footer_section_below pt-2">
      <span class="copy_write_text">
        © 2021 - 2024 SeafoodExpress. All Rights Reserved
      </span>
    </div>
  </div>

</template>

<script>
export default {
  components: {},

  data() { },
  methods: {},
};
</script>
