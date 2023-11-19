<template>
  <div>
    <Navbar :is-visible="currentSection !== 0" />
    <div @wheel.prevent="handleScroll" class="section-container">
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Section1 from "@/components/Traditional_culture/Section1.vue";
import Section2 from "@/components/Traditional_culture/Section2.vue";
import Section3 from "@/components/Traditional_culture/Section3.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Section1,
    Section2,
    Section3,
  },
  data() {
    return {
      currentSection: 0,
      isScrolling: false,
      sectionsOffsetTop: [],
    };
  },
  methods: {
    handleScroll(event) {
      if (this.isScrolling) return;

      this.isScrolling = true;
      const direction = event.deltaY > 0 ? 1 : -1;
      this.currentSection = this.currentSection + direction;

      // Bound the section index
      if (this.currentSection < 0) this.currentSection = 0;
      if (this.currentSection > this.sectionsOffsetTop.length - 1) {
        this.currentSection = this.sectionsOffsetTop.length - 1;
      }

      window.scrollTo({
        top: this.sectionsOffsetTop[this.currentSection],
        behavior: "smooth",
      });

      // Wait for the smooth scroll to finish before allowing another scroll
      setTimeout(() => {
        this.isScrolling = false;
      }, 1000);
    },
    calculateSectionsOffsetTop() {
      this.$nextTick(() => {
        this.sectionsOffsetTop = Array.from(
          this.$el.querySelectorAll(".section")
        ).map((el) => el.offsetTop);
      });
    },
  },
  mounted() {
    this.calculateSectionsOffsetTop();
    window.addEventListener("resize", this.calculateSectionsOffsetTop);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.calculateSectionsOffsetTop);
  },
};
</script>

<style>
/* Styles to maintain full view height for sections and other styles */
.section-container .section {
  height: 100vh;
}
/* Other styles */
</style>
