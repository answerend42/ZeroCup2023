<template>
  <div class="section" :style="sectionStyle">
    <div class="container">
      <div class="text-box">
        <div class="content">
          <p>
            在武汉大学的校园里，一批热爱传统文化的珞珈学子自发组建了传统文化社团，精心呵护着中华传统文化的瑰宝，将古老的传统与当代的青春相融合。
          </p>
          <p>
            每一次活动，都是一场文化的盛宴。古典舞蹈、书法、传统音乐，种种古老而精致的艺术在这里得到了传承。学子们身着华丽的传统服饰，舞动着古老的舞蹈步伐，仿佛穿越回了千年前的宫廷盛宴。书法墨宝在纸上舞动，勾勒出千姿百态的意境，传统音乐的琴弦在校园的角落里回荡，勾勒出一曲曲悠扬的乐章。
          </p>
          <p>
            在这里，传统文化不再是枯燥的历史课本，而是一幅幅生动的画卷，一段段婉转的音符，将学子们带入了中华文化的瑰丽世界。传统文化社团，如同一朵盛开的文化之花，绽放着丰富多彩的光芒。
          </p>
        </div>
      </div>
    </div>
    <img
      src="@/assets/传统文化社团.webp"
      alt="Top Left Image"
      class="top-left-image"
    />
    <div class="buttons" :style="buttonsStyle">
      <a
        v-for="button in buttons"
        :key="button.name"
        :href="button.link"
        class="button-link"
      >
        <button
          class="button"
          :style="{ backgroundImage: 'url(' + button.background + ')' }"
        >
          {{ button.name }}
        </button>
      </a>
    </div>
  </div>
</template>

<script>
import backgroundImage from "@/assets/index_page_3.webp";
import buttonImage1 from "@/assets/笛箫协会.webp";
import buttonImage2 from "@/assets/传统武术协会.webp";
import buttonImage3 from "@/assets/珞珈民乐团.webp";
import buttonImage4 from "@/assets/相声协会.webp";
import buttonImage5 from "@/assets/珞源国学社.webp";
export default {
  name: "Section3",
  data() {
    return {
      buttonsStyle: {
        position: "absolute",
        bottom: "40px",
        left: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "400px", // 根据按钮的大小和间距需要调整
      },
      buttons: [
        {
          name: "笛箫协会",
          background: buttonImage1,
          link: "/organizations/club1",
        },
        {
          name: "相声小品协会",
          background: buttonImage4,
          link: "/organizations/club2",
        },
        {
          name: "传统武术协会",
          background: buttonImage2,
          link: "/organizations/club3",
        },
        {
          name: "珞珈民乐团",
          background: buttonImage3,
          link: "/organizations/club4",
        },
        {
          name: "珞源国学社",
          background: buttonImage5,
          link: "/organizations/club5",
        },
      ],
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
.buttons {
  /* 通过 data 中的 buttonsStyle 设置样式 */
}

.button {
  padding: 10px 20px;
  margin: 5px 0;
  background-color: #f0f0f0;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 458.4px;
  height: 75.2px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  font-family: "Noto Serif SC", serif;
  font-weight: 700;
  font-size: 30px;
}

.button:hover {
  background-color: #e0e0e0;
}

.section {
  position: relative; /* 确保伪元素相对于此元素定位 */
  display: flex;
  justify-content: center;
  align-items: center;
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
  margin-left: 500px;
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
.top-left-image {
  width: 100px; /* 调整宽度，可以根据需要修改 */
  position: absolute;
  top: 150px;
  left: 200px;
  z-index: 2; /* 确保图片位于内容和伪元素之间 */
  transform: scale(4);
}
@media screen and (max-width: 767px) {
  .content {
    display: none;
  }
  .top-left-image {
    display: none;
  }
  .button {
    width: 100vw;
    background-size: cover;
    font-family: "Noto Serif SC", serif;
    font-weight: 700;
    font-size: 20px;
  }
}
</style>
