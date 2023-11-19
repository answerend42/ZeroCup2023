<template>
  <div class="section" :style="sectionStyle">
    <div class="image1" :style="image1"></div>
    <div class="container">
      <div class="text-box">
        <div class="content">
          珞珈山下四时春，繁花美景各不同。众多的讲座、报告以及珞珈金秋艺术节、珞珈国际金秋文化艺术节、珞珈学生社团国际交流营、校园文化活动超市、樱花诗赛、樱花笔会、珞珈剧苑、礼敬中华优秀传统文化等文化活动，成为大学生成长中不可或缺的重要部分，带给学子们是心智的启迪、心灵的充实和精神的洗礼。学术类、实践类、艺术类、体育类四大类共150多个校级学生社团遍及武大校园。大学生艺术团、康腾实践中心、文华戏剧社、春英诗社、英语街俱乐部、印刷摄影协会、人文爱乐合唱团、大学生书画协会、浪淘石文学社、中华传统武术协会、心理卫生协会、绿舟环保协会等是校园里一道又一道亮丽的人文风景线。
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
    </div>
  </div>
</template>

<script>
import backgroundImage from "@/assets/主页底图.webp";
import image1 from "@/assets/传统文化活动.webp";
import buttonImage1 from "@/assets/笛箫协会.webp";
export default {
  name: "Section5",
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
      buttons: [
        {
          name: "查看更多传统文化活动点这里",
          link: "/traditional_culture",
          background: buttonImage1,
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
.button {
  padding: 10px 20px;
  margin: 5px 0;
  background-color: #f0f0f0;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  font-family: "Noto Serif SC", serif;
  font-weight: 700;
  font-size: 24px;
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
