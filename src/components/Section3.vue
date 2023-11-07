<template>
  <div class="section" :style="sectionStyle">
    <div class="content" :style="contentStyle">
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
    <div class="buttons" :style="buttonsStyle">
      <button
        class="button"
        v-for="button in buttons"
        :key="button.name"
        :style="{ backgroundImage: 'url(' + button.background + ')' }"
      >
        {{ button.name }}
      </button>
    </div>
  </div>
</template>

<script>
import backgroundImage from "@/assets/index_page_3.png";
import contentBackgroundImage from "@/assets/文本框框架.png"; // 确认这是content区域背景图的正确路径
import buttonImage1 from "@/assets/笛箫协会.png";
import buttonImage2 from "@/assets/传统武术协会.png";
import buttonImage3 from "@/assets/珞珈民乐团.png";
import buttonImage4 from "@/assets/相声协会.png";
export default {
  name: "Section3",
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
        maxWidth: "700px",
        height: "auto",
        marginLeft: "auto", // 改变为marginLeft以推动到右侧
        marginRight: "10%", // 保持距离右侧一定的间隙
        textalign: "center",
      },
      buttonsStyle: {
        position: "absolute",
        bottom: "20px",
        left: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "400px", // 根据按钮的大小和间距需要调整
      },
      buttons: [
        { name: "笛箫协会", background: buttonImage1 },
        { name: "传统武术协会", background: buttonImage2 },
        { name: "民乐团", background: buttonImage3 },
        { name: "传统武术", background: buttonImage4 },
      ], // 其他数据
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
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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

.section::before {
  content: ""; /* 伪元素需要content属性 */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url("../assets/牌坊.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.9; /* 设置透明度 */
  z-index: -1; /* 确保伪元素位于内容之下 */
}

.content {
  z-index: 1; /* 确保内容位于伪元素之上 */
  /* 其他样式 */
  width: auto;
}

.content {
  /* 除了背景图样式，其他样式依然在这里定义 */
  width: 80%;
  max-width: 600px;
  text-align: left;
  font-size: 1.5em;
  font-family: "思源宋体";
  font-weight: bold;
  justify-content: flex-end; /* 修改为 flex-end 使子元素对齐到容器的右侧 */
  align-items: center;
  /* 更多样式 */
}
</style>
