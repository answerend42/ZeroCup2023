<template>
  <div class="section" :style="sectionStyle">
    <div class="image1" :style="image1"></div>
    <div class="content" :style="contentStyle">
      <p>
        武汉大学中华传统武术协会（学生）是以武汉大学武术队为前身的校级学生社团。协会自成立以来，在“自由之精神，独立之思想”的影响下百花齐放，是武汉大学一支实力强劲的队伍。社团旨在强健体魄，为爱好传统武术文化的武大人提供学习和交流的平台。在湖北省大学生武术比赛、全国高校健身气功大赛、香港国际武术比赛、国际武术交流营及其他国内国际赛事上，中华传武协会均取得过优异的成绩。
      </p>
      <p>你是否有一个沉睡的武侠梦?</p>
      <p>峨嵋顶峰的太极、仗剑天涯的伴侣、肝胆相照的兄弟</p>
      <p>还有千帆过尽后 一招一式还是初见的样子 你来了吗?</p>
      <p>你是哪一代的传武人?</p>
    </div>
  </div>
</template>

<script>
import backgroundImage from "@/assets/武术社团底图.png";
import contentBackgroundImage from "@/assets/文本框框架.png"; // 确认这是content区域背景图的正确路径
import image1 from "@/assets/武术配图1.jpg";
export default {
  name: "Section2",
  data() {
    return {
      contentStyle: {
        backgroundImage: `url(${contentBackgroundImage})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        maxWidth: "725px",
        height: "auto",
        margin: "auto", // 这确保了在 flex 父元素中居中
        textalign: "center",
        marginTop: "15%",
      },
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
  position: relative; /* 确保伪元素相对于此元素定位 */
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  height: 100vh;
  width: 100vw;
}

.content {
  /* 除了背景图样式，其他样式依然在这里定义 */
  width: 80%;
  max-width: 725px;
  text-align: left;
  font-size: 1.5em;
  font-family: 'Noto Serif SC', serif;
  font-weight: bold;
  flex: 1;
  margin-left: 10%;
  position: absolute;
  bottom: 75px;
  right: 0;
  /* 更多样式 */
}

.content {
  flex: 1; /* content也占据剩余空间 */
  /* 其他现有样式 */
  margin-left: 10%; /* 根据需要调整，以在图片和内容之间创建间隔 */
}
</style>
