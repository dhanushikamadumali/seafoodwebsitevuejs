<template>
  <div class="faq">
    <!-- section one -->

    <div class="sectionOne">
      <SectionOne />
    </div>

    <div class="pt-8"></div>

    <!-- section two-->
    <div class="sectionTwo">
      <SectionTwo />
    </div>
  </div>
</template>
<script>
import SectionOne from "@/pages/Faq/Components/SectionOne.vue";
import SectionTwo from "@/pages/Faq/Components/SectionTwo.vue";
export default {
  components: {
    SectionOne,
    SectionTwo,
  },
};
</script>
