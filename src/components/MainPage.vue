<template>
  <div class="main-page">
    <div v-for="(section, index) in sections" :key="index" class="section">
      <div
        class="background"
        :style="'background-image: url(' + section.backgroundImage + ')'"
      ></div>
      <div class="section-content" v-html="section.content"></div>
    </div>
  </div>
</template>

<script>
import image1 from "../assets/主页底图.png";
import image2 from "../assets/Tab start.png";
import image3 from "../assets/珈粹.png";
import image4 from "../assets/words.png";

export default {
  name: "MainPage",
  data() {
    return {
      sections: [
        {
          content: `
            <div class="content-wrapper">
              <div class="image3-container">
                <img src="${image3}" class="background-center" />
                <div class="background-bottom" style="width: 100%; overflow: hidden;">
                  <img src="${image4}" class="background-bottom" style="width: 100%; max-width: 100%; height: auto;">
                </div>
              </div>
              <div class="svg-wrapper">
                <div class="guidance">向下滑动了解更多</div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <svg width="105" height="26" viewBox="0 0 105 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M52.093 24.64L1 1" stroke="black" stroke-width="2" stroke-linecap="round"/>
                  <path d="M52.093 24.64L103.186 1" stroke="black" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </div>
            </div>`,
          backgroundImage: image1,
        },
        { content: "第二页内容", backgroundImage: image1 },
        { content: "第三页内容", backgroundImage: image1 },
        { content: "第四页内容", backgroundImage: image1 },

      ],
    };
  },
  mounted() {
    let currentSection = 0;
    const sections = this.$el.getElementsByClassName("section");
    let isScrolling = false;

    window.addEventListener("wheel", (event) => {
      event.preventDefault();

      if (!isScrolling) {
        if (event.deltaY > 0) {
          scrollToSection(currentSection + 1);
        } else {
          scrollToSection(currentSection - 1);
        }
      }
    });

    function scrollToSection(sectionIndex) {
      if (sectionIndex < 0) {
        sectionIndex = 0;
      } else if (sectionIndex >= sections.length) {
        sectionIndex = sections.length - 1;
      }

      const targetSection = sections[sectionIndex];
      const targetOffset = targetSection.offsetTop;
      const currentOffset = window.pageYOffset;
      const distance = targetOffset - currentOffset;
      const duration = 800;
      let startTime;

      function scrollAnimation(currentTime) {
        if (!startTime) {
          startTime = currentTime;
        }

        const timeElapsed = currentTime - startTime;
        const percentage = Math.min(timeElapsed / duration, 1);
        window.scrollTo(0, currentOffset + distance * percentage);

        if (percentage < 1) {
          requestAnimationFrame(scrollAnimation);
        } else {
          currentSection = sectionIndex;
          isScrolling = false;
        }
      }

      isScrolling = true;
      requestAnimationFrame(scrollAnimation);
    }
  },
};
</script>

<style>
/* 全局样式 */
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

.background-center {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}

.background-bottom {
  width: 100%; /* 调整宽度为100% */
  text-align: center;
  overflow: hidden;
}

.background-bottom img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
  height: auto; /* 去掉固定高度 */
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
    font-family: "思源宋体";
    font-size: 3vw;
  }
}
</style>
