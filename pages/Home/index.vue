<template>
  <div class="home_alignments">
    <div class="section_one">
      <SectionOne />
    </div>
    <div class="section_two">
      <SectionTwo />
    </div>
    <div class="section_three">
      <SectionThree />
    </div>
    <div class="section_four">
      <SectionFour />
    </div>
    <div class="section_five">
      <SectionFive />
    </div>
  </div>
</template>
<script>
import SectionOne from "@/pages/Home/Components/SectionOne.vue";
import SectionTwo from "@/pages/Home/Components/SectionTwo.vue";
import SectionThree from "@/pages/Home/Components/SectionThree.vue";
import SectionFour from "@/pages/Home/Components/SectionFour.vue";
import SectionFive from "@/pages/Home/Components/SectionFive.vue";
export default {
  components: {
    SectionOne,
    SectionTwo,
    SectionThree,
    SectionFour,
    SectionFive,
  },
};
</script>
