<template>
  <div class="section" :style="sectionStyle">
    <div class="image1" :style="image1"></div>
    <div class="content" :style="contentStyle">
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
</template>

<script>
import backgroundImage from "@/assets/相声协会底图.png";
import contentBackgroundImage from "@/assets/文本框框架.png"; // 确认这是content区域背景图的正确路径
import image1 from "@/assets/相声配图1.jpg";
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
