<template>
  <div class="section">
    <div
      class="background"
      :style="'background-image: url(' + backgroundImage + ')'"
    ></div>
    <div class="content-wrapper">
      <div class="image3-container">
        <img src="@/assets/相声协会logo.jpg" class="background-center" />
      </div>
      <p class="tagline">继承传统,藿香正气</p>
    </div>
  </div>
</template>

<script>
import image1 from "@/assets/相声协会底图.png";

export default {
  name: "Section1",
  data() {
    return {
      backgroundImage: image1,
    };
  },
};
</script>

<style scoped>
.section {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.background {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

.content-wrapper {
  text-align: center;
}

.image3-container {
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
}

.background-center {
  display: block;
  margin: 0 auto;
  transform: scale(2);
  width: 240px;
}
.tagline {
  position: absolute;
  top: 70%; /* 根据logo实际缩放后的大小调整此值 */
  left: 50%;
  transform: translate(-50%, 20px); /* 水平居中并稍微垂直偏移 */
  width: 100%;
  font-size: 50px;
  font-family: 'Noto Serif SC', serif;
  font-weight: 700;
}
</style>
