<template>
  <div class="main-container">
    <v-container class="main">
      <v-row>
        <!-- Billing Details Section -->

        <v-col lg="8" cols="12">
          <div class="billing-section">
            <h2 class="heading">Billing Details</h2>

            <v-form class="billing_info">
              <v-row>
                <v-col lg="6" cols="12">
                  <p class="atext">First Name</p>

                  <v-text-field
                    class="text-field"
                    variant="outline"
                    placeholder="First Name"
                    density="comfortable"
                  ></v-text-field>
                </v-col>

                <v-col lg="6" cols="12">
                  <p class="atext">Last Name</p>

                  <v-text-field
                    class="text-field"
                    placeholder="Last Name"
                    variant="outline"
                    density="comfortable"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12">
                  <p class="atext">Address</p>

                  <v-textarea
                    class="text-area"
                    placeholder="Address"
                    variant="outline"
                    density="comfortable"
                  ></v-textarea>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12">
                  <div>
                    <p class="atext">City</p>
                  </div>

                  <v-autocomplete
                    class="text-field"
                    placeholder="City"
                    variant="outline"
                    density="comfortable"
                  ></v-autocomplete>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12">
                  <p class="atext">Contact Number</p>

                  <v-text-field
                    class="text-field"
                    placeholder="Contact Number"
                    variant="outline"
                    density="comfortable"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12">
                  <div>
                    <p class="atext">Order Notes (Optional)</p>
                  </div>

                  <v-textarea
                    class="text-area"
                    placeholder="Notes about your order"
                    variant="outline"
                    density="comfortable"
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-form>
          </div>
        </v-col>

        <!-- Order Summary Section -->

        <v-col lg="3" cols="12">
          <div class="left-div">
            <v-card class="text-shape">
              <v-card-title class="summary-heading">Order Summary</v-card-title>
            </v-card>

            <v-card class="hw">
              <v-row> </v-row>

              <br />

              <!-- Items Section -->

              <v-row>
                <v-col class="text-left">
                  <v-card-item>Items</v-card-item>
                </v-col>

                <v-col class="text-right">
                  <v-card-item>02</v-card-item>
                </v-col>
              </v-row>

              <v-divider class="divider"></v-divider>

              <!-- Sub Total Section -->

              <v-row>
                <v-col class="text-left">
                  <v-card-item>Sub Total</v-card-item>
                </v-col>

                <v-col class="text-right">
                  <v-card-item>LKR 8,590</v-card-item>
                </v-col>
              </v-row>

              <v-divider class="divider"></v-divider>

              <!-- Shipping Section -->

              <v-row>
                <v-col class="text-left">
                  <v-card-item>Shipping</v-card-item>
                </v-col>

                <v-col class="text-right">
                  <v-card-item>LKR 300.00</v-card-item>
                </v-col>
              </v-row>

              <v-divider class="divider"></v-divider>

              <!-- Total Section -->

              <v-row class="total">
                <v-col class="text-left-bold">
                  <v-card-item>Total</v-card-item>
                </v-col>

                <v-col class="text-right-bold">
                  <v-card-item>LKR 8,890</v-card-item>
                </v-col>
              </v-row>
            </v-card>

            <!-- Payment Method section  -->

            <v-card class="text-shape1">
              <v-card-title class="summary-heading"
                >Payment Method</v-card-title
              >
            </v-card>

            <v-row class="payment-option-COD">
              <div class="payment-option-image1">
                <img
                  src="assets/images/checkout/2.png"
                  alt="Cash on delivery"
                />
              </div>

              <span class="payment-text-1">Cash on delivery</span>

              <div class="arrow">
                <img
                  class="arr"
                  src="assets/images/checkout/chevron-right.png"
                  alt="Arrow"
                />
              </div>
            </v-row>

            <v-row class="payment-option-COD">
              <div class="payment-option-image2">
                <img
                  src="assets\images\checkout\Online-Transfer.png"
                  alt="Cash on dilevery"
                />
              </div>

              <span class="payment-text">Online transfer</span>

              <img src="assets\images\checkout\chevron-right.png" />
            </v-row>

            <!-- Place Order btn Section -->

            <v-row class="place-btn">
              <v-btn block class="place-order-btn mt-4">Place Order</v-btn>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>
