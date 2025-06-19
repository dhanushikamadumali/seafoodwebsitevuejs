<template>
  <div class="singleproduct">
    <div class="section_one">
      <SectionOne />
    </div>
    <div class="section_two">
      <SectionTwo />
    </div>
    <!-- <div class="section_three"> 
      <SectionThree />
    </div> -->
  </div>
</template>
<script>
import SectionOne from "@/pages/Products/SingleProduct/Components/SectionOne.vue";
import SectionTwo from "@/pages/Products/SingleProduct/Components/SectionTwo.vue";
// import SectionThree from "@/pages/Home/Components/SectionThree.vue";
export default {
  components: {
    SectionOne,
    SectionTwo,
    // SectionThree,
  },
};
</script>
