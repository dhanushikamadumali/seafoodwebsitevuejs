<template>
  <div class="main_continer">
    <v-row>
      <v-col cols="12" lg="8">

        <!-- Header -->
        <p class="shop-cart-header">Shopping Cart</p>
        <br />
        <br />

        <div>
          <!-- Table showing ordered items -->
          <v-table class="responsive-table">
            <thead class="table-head-text">
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Sub Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Product">
                  <v-row>
                    <v-col>
                      <v-img
                        src="assets/images/ShoppingCart/Tuna.png"
                        alt="Tuna"
                        class="prod-image"
                    /></v-col>

                    <v-col class="prod-text">
                      <P>Tuna / Kelawalla</P>
                      <P>0.5 kg</P>
                    </v-col>
                  </v-row>
                </td>
                <td data-label="Price" class="price-text">$2,490</td>
                <td data-label="Quantity" class="quantity-section">
                  <v-btn icon="mdi-minus" :size="$vuetify.display.smAndDown ? 'x-small' : 'small'" rounded="xl"></v-btn>
                  <v-text class="mx-3">0</v-text>
                  <v-btn icon="mdi-plus" :size="$vuetify.display.smAndDown ? 'x-small' : 'small'" rounded="xl"></v-btn>
                </td>
                <td data-label="Sub Total" class="sub-total-text">$2,490</td>
                <td data-label="Action">
                  <v-btn icon color="white" elevation="0" >
                    <v-icon>mdi-trash-can-outline</v-icon>
                  </v-btn>
                </td>
              </tr>
              <tr>
                <td data-label="Product">
                  <v-row>
                    <v-col>
                      <v-img
                        src="assets/images/ShoppingCart/LargePrawns.png"
                        alt="Tuna"
                        class="prod-image"
                    /></v-col>

                    <v-col
                      class="prod-text"
                      >
                      <P>Large Prawns</P>
                      <P>0.5 kg</P>
                    </v-col>
                  </v-row>
                </td>
                <td data-label="Price" class="price-text">$3,050</td>
                <td data-label="Quantity" class="quantity-section">
                  <v-btn icon="mdi-minus"   :size="$vuetify.display.smAndDown ? 'x-small' : 'small'" rounded="xl"></v-btn>
                  <v-text class="mx-3">0</v-text>
                  <v-btn icon="mdi-plus"   :size="$vuetify.display.smAndDown ? 'x-small' : 'small'" rounded="xl"></v-btn>
                </td>
                <td data-label="Sub Total" class="sub-total-text">$6,100</td>
                <td data-label="Action">
                  <v-btn icon color="white" elevation="0">
                    <v-icon>mdi-trash-can-outline</v-icon>
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </v-table>
        </div>
      </v-col>
      <v-col cols="12" lg="4">
        <div class="calc-div">
          <v-card class="order-summary-head">
            <!-- Header -->

            <v-card-title>Order Summary</v-card-title>
          </v-card>
          <br />
          <v-card class="calc-table">
            <v-row> <v-divider></v-divider></v-row>
            <!-- Items Section -->
            <v-row>
              <v-col class="text-left"><v-card-item>Items</v-card-item></v-col>
              <v-col class="text-right"><v-card-item>2</v-card-item></v-col>
            </v-row>
            <V-row>
              <v-divider></v-divider>
            </V-row>
            <!-- Sub Total Section -->
            <v-row>
              <v-col class="text-left"
                ><v-card-item>Sub Total</v-card-item></v-col
              >
              <v-col class="text-right"
                ><v-card-item>LKR 8,590.00</v-card-item></v-col
              >
            </v-row>
            <v-row>
              <v-divider></v-divider>
            </v-row>
            <!-- Shipping Section -->
            <v-row>
              <v-col class="text-left"
                ><v-card-item>Shipping</v-card-item></v-col
              >
              <v-col class="text-right"
                ><v-card-item>LKR 300.00</v-card-item></v-col
              >
            </v-row>

            <!-- Total Section -->
            <v-row>
              <v-col class="text-left-bold"
                ><v-card-item>Total</v-card-item></v-col
              >
              <v-col class="text-right-bold"
                ><v-card-item>LKR 8,890.00</v-card-item></v-col
              >
            </v-row>
          </v-card>
          <br />

          <!-- Buttons -->

          <v-btn class="continue-shop-btn my-2">Continue Shopping</v-btn>

          <v-btn class="proceed-checkout-btn my-2">Proceed to Checkout</v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script></script>
