<template>
  <div class="section" :style="sectionStyle">
    <div class="card-container">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="card"
        @mouseenter="expandCard(index)"
        @mouseleave="resetCard(index)"
        @click="toggleFullScreenImage(index)"
        :class="{ expanded: card.expanded, fullscreen: card.fullscreen }"
      >
        <!-- 全屏时显示详细介绍的文本框 -->
        <div v-if="card.fullscreen" class="card-text-overlay">
          <p>{{ card.contentFull }}</p>
        </div>
        <!-- 非全屏时显示简略介绍的文本内容 -->
        <div class="card-content" v-show="!card.fullscreen">
          <p>{{ card.contentBrief }}</p>
        </div>
        <img :src="card.image" alt="Card Image" />
      </div>
    </div>
  </div>
</template>

<script>
import image1 from "@/assets/民乐团配图2.webp";
import image2 from "@/assets/民乐团配图3.webp";
import image3 from "@/assets/民乐团配图4.webp";
import backgroundImage from "@/assets/民乐团底图.webp";
export default {
  name: "Section3",
  data() {
    return {
      cards: [
        {
          image: image1,
          contentBrief: "指挥 魏维",
          contentFull:
            "魏维老师毕业于武汉音乐学院作曲系，现为国家一级作曲家，其创作的多部作品曾荣获省、国家级奖项。在魏维老师的带领下，我们民乐团已经排演了多部大型民族管弦乐作品，培养出一批优秀的学生指挥与演奏人才；现如今，乐团正以崭新的面貌向着又一个辉煌时期迈进。",
          expanded: false,
          fullscreen: false,
        },
        {
          image: image2,
          contentBrief: "民乐团赴德国演出交流实录",
          contentFull:
            "中德两方充分肯定了鲁尔都市孔子学院十年来的办学成就，希望未来孔子学院的文化交流越办越好，让更多的德国人民和世界看到中国文化独特的魅力和价值，对世界文明发展和人类美好生活做出积极贡献！",
          expanded: false,
          fullscreen: false,
        },
        {
          image: image3,
          contentBrief: "“国韵珞珈”民乐专场",
          contentFull:
            "返场曲《阿细跳月》的最后一个音符落下，指挥魏维老师抬手，转身，我们起立，鞠躬，谢幕。今年的“国韵珞珈”民乐专场音乐会到此落下帷幕，感谢所有为之付出的演职人员，感谢每一位认真聆听的听众！~",
          expanded: false,
          fullscreen: false,
        },
      ],
    };
  },
  methods: {
    expandCard(index) {
      this.cards[index].expanded = true;
    },
    resetCard(index) {
      this.cards[index].expanded = false;
    },
    toggleFullScreenImage(index) {
      this.cards[index].fullscreen = !this.cards[index].fullscreen;
      if (this.cards[index].fullscreen) {
        this.cards.forEach((card, i) => {
          if (i !== index) {
            card.fullscreen = false;
          }
        });
      }
    },
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
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.card-container {
  display: flex;
  flex-wrap: wrap;
}

.card {
  width: 300px;
  height: 800px; /*固定高度*/
  transition: width 0.4s; /* 过渡宽度属性 */
  margin: 10px;
  cursor: pointer;
  background-color: #fff; /* 设置卡片的背景颜色 */
  overflow: hidden; /* 隐藏内容溢出 */
  position: relative; /* 相对定位 */
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 保证图片覆盖整个卡片 */
  transition: transform 0.4s; /* 过渡图片变换 */
}

.card.expanded {
  width: 600px; /* 高度不变，宽度变宽 */
}

.card-text-overlay {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 10px;
  text-align: center;
  z-index: 4;
}

.card.fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw; /* 视口宽度 */
  height: 100vh; /* 视口高度 */
  margin: 0; /* 移除外边距 */
  padding: 0; /* 移除内边距 */
  z-index: 3;
  cursor: zoom-out;
}

.card.fullscreen img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 保证图片覆盖整个容器 */
}

.card.fullscreen .card-text-overlay {
  display: block;
}

.card-content {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: auto;
  font-family: 'Noto Serif SC', serif;
  font-weight: 700;
  background-color: rgba(255, 255, 255, 0.6);
  text-align: center;
  transition: opacity 0.4s;
  z-index: 2;
}
</style>
