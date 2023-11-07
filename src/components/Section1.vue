<template>
  <div class="section">
    <div
      class="background"
      :style="'background-image: url(' + backgroundImage + ')'"
    ></div>
    <div class="content-wrapper">
      <div class="image3-container">
        <img src="../assets/珈粹.png" class="background-center" />
        <div class="background-bottom" style="width: 100%; overflow: hidden">
          <img
            src="../assets/words.png"
            class="background-bottom"
            style="width: 100%; max-width: 100%; height: auto"
          />
        </div>
      </div>
      <div class="svg-wrapper">
        <div class="guidance">向下滑动了解更多</div>
        <svg
          width="105"
          height="26"
          viewBox="0 0 105 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M52.093 24.64L1 1"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M52.093 24.64L103.186 1"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import image1 from "../assets/主页底图.png";
import image3 from "../assets/珈粹.png";
import image4 from "../assets/words.png";

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
  /* 根据需要可能要添加针对.content-wrapper的样式 */
}

.image3-container {
  /* 根据需要可能要添加针对.image3-container的样式 */
}

.background-center {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}

.background-bottom {
  width: 100%;
  text-align: center;
  overflow: hidden;
}

.background-bottom img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
  height: auto;
}

.svg-wrapper {
  position: absolute;
  bottom: 2em;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
}

.guidance {
  font-family: "思源宋体";
  font-size: 1.5vw;
}

@media (max-width: 768px) {
  .guidance {
    font-size: 3vw;
  }
}
</style>
