<template>
  <div>
    <v-row>
      <!-- first collumns -->
      <v-col lg="6" cols="12">
        <span class="heading">Have Any Questions?</span>

        <div class="pt-5"></div>
        <span class="sub_heading"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br />
          Suspendisse massa libero, mattis volutpat id.</span
        >

        <div class="pt-5"></div>

        <v-btn class="button"><span class="text"> Contact Us</span> </v-btn>
      </v-col>

      <!-- second collumns -->
      <v-col lg="6">
        <div class="mobile_header">
          <div class="pt-10"></div>
        </div>
        <div>
          <v-expansion-panels>
            <!-- first faq -->
            <v-expansion-panel class="expansion_raw" elevation="0">
              <v-expansion-panel-title
                collapse-icon="mdi-minus"
                expand-icon="mdi-plus"
              >
                <template v-slot:actions>
                  <v-icon class="icon" large> </v-icon>
                </template>
                <span class="qustion">
                  What payment methods do you accept?</span
                >
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <span class="answer">
                  Bank transfer, Cash on Delivery, and secure online
                  payments.</span
                >
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>

          <div class="pt-8"></div>

          <!-- second faq -->
          <v-expansion-panels>
            <v-expansion-panel class="expansion_raw" elevation="0">
              <v-expansion-panel-title
                collapse-icon="mdi-minus"
                expand-icon="mdi-plus"
              >
                <template v-slot:actions>
                  <v-icon class="icon" large> </v-icon>
                </template>
                <span class="qustion"> Can I cancel my order?</span>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <span class="answer">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.</span
                >
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>

          <div class="pt-8"></div>

          <!-- third faq -->
          <v-expansion-panels>
            <v-expansion-panel class="expansion_raw" elevation="0">
              <v-expansion-panel-title
                collapse-icon="mdi-minus"
                expand-icon="mdi-plus"
              >
                <template v-slot:actions>
                  <v-icon class="icon" large> </v-icon>
                </template>
                <span class="qustion"> What if my delivery is late?</span>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <span class="answer">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.</span
                >
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>

          <div class="pt-8"></div>

          <!-- fourth faq -->
          <v-expansion-panels>
            <v-expansion-panel class="expansion_raw" elevation="0">
              <v-expansion-panel-title
                collapse-icon="mdi-minus"
                expand-icon="mdi-plus"
              >
                <template v-slot:actions>
                  <v-icon class="icon" large> </v-icon>
                </template>
                <span class="qustion"
                  >How do I track my orders and payment status?</span
                >
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <span class="answer">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.</span
                >
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {};
</script>
<style>
.static-panel {
}
</style>
