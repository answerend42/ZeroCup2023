<template>
  <div class="section" :style="sectionStyle">
    <div class="image1" :style="image1"></div>
    <div class="content" :style="contentStyle">
      <p>
        中华文化，源远流长，博大精深，如同一座博物馆，珍藏着无数的文明密码。
      </p>
      <p>
        武汉大学，这座拥有着130年悠久历史的学府，它犹如一座沉淀着时光的庙堂，承载着无数学子的梦想与探索。这里并非仅仅是一所学府，而是一座文化的宝库，承载着古老智慧的珍宝。
      </p>
      <p>
        这片土地上，每一颗沉淀的文化之珠都散发着独特的光芒。让我们深入其中，感受传统文化的魅力，如同在博物馆里品味历史的岁月沉香，与中华文明的悠久历史对话，领悟古今交融的智慧之美。
      </p>
    </div>
  </div>
</template>

<script>
import backgroundImage from "@/assets/笛箫协会背景.png";
import contentBackgroundImage from "@/assets/文本框框架.png"; // 确认这是content区域背景图的正确路径
import image1 from "@/assets/01.jpg";
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
        maxWidth: "650px",
        height: "auto",
        margin: "auto", // 这确保了在 flex 父元素中居中
        textalign: "center",
        marginTop: "15%",
      },
      image1: {
        height: "auto", // 或者设置为具体高度
        width: "50%", // 根据需要调整宽度
        backgroundImage: `url(${image1})`,
        backgroundSize: "cover",
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
  max-width: 600px;
  text-align: left;
  font-size: 1.5em;
  font-family: "思源宋体";
  font-weight: bold;
  flex: 1;
  margin-left: 10%;
  /* 更多样式 */
}

.content {
  flex: 1; /* content也占据剩余空间 */
  /* 其他现有样式 */
  margin-left: 10%; /* 根据需要调整，以在图片和内容之间创建间隔 */
}
</style>
