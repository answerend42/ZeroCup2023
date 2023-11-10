<template>
  <div id="app">
    <Navbar
  :is-visible="currentSection !== 0"
  @navigate-to-section="scrollToSection"
/>
    <div @wheel.prevent="handleScroll" class="section-container">
      <Section1 ref="section1" />
      <Section2 ref="section2" />
      <Section3 ref="section3" />
      <Section4 ref="section4" />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Section1 from "@/components/Section1.vue";
import Section2 from "@/components/Section2.vue";
import Section3 from "@/components/Section3.vue";
import Section4 from "@/components/Section4.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Section1,
    Section2,
    Section3,
    Section4,
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
    scrollToSection(sectionIndex) {
      this.isScrolling = true;
      this.currentSection = sectionIndex;

      window.scrollTo({
        top: this.sectionsOffsetTop[sectionIndex],
        behavior: "smooth",
      });

      setTimeout(() => {
        this.isScrolling = false;
      }, 1000);
    },
    scrollToAnchor() {
    this.calculateSectionsOffsetTop();
    this.$nextTick(() => {
      if (window.location.hash) {
        const sectionId = window.location.hash.substring(1); // 去除锚点前的#
        const sectionNumber = Number(sectionId.replace("section", "")) - 1;

        if (!isNaN(sectionNumber) && sectionNumber >= 0 && sectionNumber < this.sectionsOffsetTop.length) {
          window.scrollTo({
            top: this.sectionsOffsetTop[sectionNumber],
            behavior: "smooth",
          });
        }
      }
    });
  },
},
mounted() {
  window.addEventListener("hashchange", this.scrollToAnchor);
  this.scrollToAnchor(); // 确保在页面加载时调用
  this.calculateSectionsOffsetTop();
  window.addEventListener("resize", this.calculateSectionsOffsetTop);
},
  beforeDestroy() {
    window.removeEventListener("resize", this.calculateSectionsOffsetTop);
  },
};
</script>

<style>
.section-container .section {
  height: 100vh;
}
/* Other styles */
</style>
