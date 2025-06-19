<template>
  <div class="productslist_alignments">
    <div class="section_one">
      <SectionOne />
    </div>
    <div class="">
      <MainPageSlider @categoryid="getCategoryId"  />
    </div>
  
    
    <div class="section_two">
      <SectionTwo :categoryid="propData" />
    </div>
  
  </div>
</template>
<script>
import SectionOne from "@/pages/Products/ProductsList/Components/SectionOne.vue";
import SectionTwo from "@/pages/Products/ProductsList/Components/SectionTwo.vue";
import MainPageSlider from "@/components/MainPageSlider.vue";
export default {
 
  data() {
    return {
      propData:null,
    };
  },
  components: {
    SectionOne,
    SectionTwo,
    // SectionThree,
  },
  created(){
    this.getCategoryId();
  },
  methods:{
    getCategoryId(categoryid){
      this.propData = categoryid;     
    }
    
  }
};
</script>
