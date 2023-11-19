<template>
  <div class="section" :style="sectionStyle">
    <div class="image1" :style="image1"></div>
    <div class="container">
      <div class="text-box">
        <div class="content">
          <p>
            武汉大学中华传统武术协会（学生）是以武汉大学武术队为前身的校级学生社团。协会自成立以来，在“自由之精神，独立之思想”的影响下百花齐放，是武汉大学一支实力强劲的队伍。社团旨在强健体魄，为爱好传统武术文化的武大人提供学习和交流的平台。在湖北省大学生武术比赛、全国高校健身气功大赛、香港国际武术比赛、国际武术交流营及其他国内国际赛事上，中华传武协会均取得过优异的成绩。
          </p>
          <p>你是否有一个沉睡的武侠梦?</p>
          <p>峨嵋顶峰的太极、仗剑天涯的伴侣、肝胆相照的兄弟</p>
          <p>还有千帆过尽后 一招一式还是初见的样子 你来了吗?</p>
          <p>你是哪一代的传武人?</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import backgroundImage from "@/assets/武术社团底图.webp";
import image1 from "@/assets/武术配图1.webp";
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
