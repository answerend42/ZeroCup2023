<template>
  <div class="section" :style="sectionStyle">
    <div class="image1" :style="image1"></div>
    <div class="container">
      <div class="text-box">
        <div class="content">
          武汉大学中国传统文化研究中心是教育部人文社会科学重点研究基地，国家“985工程”创新基地。中心是跨学科研究中国传统文化的学术机构，涉及中国史、哲学、文学等一级学科。中心下设有中国传统文化综合研究室、中国传统文化与现代化研究室、荆楚文化研究室和《人文论丛》编辑部。
          中心致力于中国传统文化的研究和推广，着力探索中国文化的“源”和“流”。在中国文化史、先秦两汉思想史、中国古代礼制研究、明清社会经济史、明清哲学史、元明清文学、近代中外文化交流、近代文化转型等领域，形成鲜明特色。同时积极服务国家和地方文化建设，在中小学中华优秀传统文化教育和普及等方面，也取得显著成绩。
          本着惟一性的平台建设宗旨，基地既是中国传统文化领域的学术研究中心，也是该领域的人才培养、学术交流、资料建设和社会服务中心。
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import backgroundImage from "@/assets/国学社底图.webp";
import image1 from "@/assets/传统文化研究中心.webp";
export default {
  name: "Section1",
  data() {
    return {
      image1: {
        height: "auto", // 或者设置为具体高度
        width: "50%", // 根据需要调整宽度
        backgroundImage: `url(${image1})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        // 如果需要，可以添加其他样式
      },
    };
  },
  computed: {
    sectionStyle() {
      return {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      };
    },
  },
};
</script>

<style scoped>
.section {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  height: 100vh;
  width: 100vw;
}

.content {
  text-align: left;
  font-size: 30px;
  font-family: "Noto Serif SC", serif;
  font-weight: bold;
  position: static;
  /* 其他样式 */
}

.container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.text-box {
  position: relative;
  overflow: hidden;
  width: 800px;
  padding: 40px;
  background-color: #f0f0f0; /* 自定义纯色背景 */
}
.text-box::before,
.text-box::after {
  content: "";
  position: absolute;
  z-index: 0;
  width: 15%; /* 调整边角大小为容器宽度的百分比 */
  height: 15%; /* 调整边角大小为容器高度的百分比 */
  transition: all 0.3s ease; /* 过渡效果 */
}

.text-box::before {
  bottom: 0; /* 调整边角距离底部的位置 */
  left: 0; /* 调整边角距离左侧的位置 */
  background-image: url("@/assets/边框.webp");
  background-size: contain;
  background-repeat: no-repeat;
}

.text-box::after {
  top: 0; /* 调整边角距离顶部的位置 */
  right: 0; /* 调整边角距离右侧的位置 */
  transform: rotate(180deg);
  background-image: url("@/assets/边框.webp");
  background-size: contain;
  background-repeat: no-repeat;
}
@media screen and (max-width: 767px) {
  .image1 {
    display: none;
  }
  .content {
    font-size: 20px;
  }
  .text-box {
    width: auto;
    height: auto;
    padding: 40px;
  }
}
</style>
