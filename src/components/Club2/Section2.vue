<template>
  <div class="section" :style="sectionStyle">
    <div class="image1" :style="image1"></div>
    <div class="container">
      <div class="text-box">
        <div class="content">
          <p>
            作为武大最欢乐的社团之一，我们以相声小品为主要发展方向，以弘扬中华传统文化为宗旨，本着“开心自己，快乐他人”的朴实理念，为校内全体相声小品爱好者提供一个学习、交流、展示自我的平台，同时也为武大学子传播笑声。
          </p>
          <p>
            2009年9月成立至今，我们举办过首次大学生毕业相声专场众筹的活动，有过和湖北曲艺界著名演员大兵、赵卫国，以及北京大逗相声社董建春、李丁等名角儿同台演出的经历，担得起灯光聚焦掌声雷动的荣耀，受得住坚守传统知音寥寥的寂寞。说书唱戏劝人方，三条大道走中央。人前遥看，醒木拍桌，我们深耕多年，只为守住一颗丹心，弘扬那中华民族源远流长的传统曲艺文化。
          </p>
          <p>
            武大相协全体人员恭候您的光临。加入相协，您不仅可以参加大佬们的独门演技培训；还可以和学富五车的高颜值学霸们近距离接触；更少不了和其他沉迷曲艺、不问世事的资深同好们进行交流……
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import backgroundImage from "@/assets/相声协会底图.webp";
import image1 from "@/assets/相声配图1.webp";
export default {
  name: "Section2",
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
</style>
