<template>
  <div class="section" :style="sectionStyle">

  </div>
</template>

<script>
import backgroundImage from "../assets/文本框.webp";
export default {
  name: "Section2",
  data() {
    return {
    };
  },
  computed: {
    sectionStyle() {
      return {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      };
    },
  },
};
</script>

<style scoped>
.section {
  position: relative; /* 确保伪元素相对于此元素定位 */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}
</style>
