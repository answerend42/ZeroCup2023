<template>
  <div class="section" :style="sectionStyle">
    <div class="image1" :style="image1"></div>
    <div class="container">
      <div class="text-box">
        <div class="content">
          <p>
            武汉大学笛箫协会（学生）正式成立于 1990
            年，度过30余年的春秋与一代代笛箫人的辛勤耕耘，已成为一个 1000
            人左右的民乐爱好者大家庭，是目前武汉大学最大的民乐类社团。
          </p>
          <p>
            武汉大学，这座拥有着130年笛箫协会始终以弘扬民乐艺术，繁荣校园文化为己任，为众多爱好笛箫与民乐艺术的同学提供一个学习、交流的平台和自我展示的舞台，为笛箫艺术与传统文化的发展传播贡献我们的一份绵薄之力。年悠久历史的学府，它犹如一座沉淀着时光的庙堂，承载着无数学子的梦想与探索。这里并非仅仅是一所学府，而是一座文化的宝库，承载着古老智慧的珍宝。
          </p>
          <p>
            笛箫让大家相聚在这里，携手并肩，把梦想变成现实。无论是专业老师每周辛勤教学笛、箫等乐器，还是每晚新老会员们在各大操场相约练习，或是一年一度倾注心血、盛情演出的“一梦笛箫音乐会”，我们在每个年轮里都续写着有缘相聚、笛箫传情的佳话。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import backgroundImage from "@/assets/笛箫协会背景.webp";
import image1 from "@/assets/笛箫配图2.webp";
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
@media screen and (max-width: 600px) {
  .image1 {
    display: none;
  }
}
</style>
