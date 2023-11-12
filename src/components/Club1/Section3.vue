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
import image1 from "@/assets/笛箫配图1.jpg";
import image2 from "@/assets/笛箫配图3.jpg";
import image3 from "@/assets/笛箫配图4.jpg";
import backgroundImage from "@/assets/笛箫协会背景.png";
export default {
  name: "Section3",
  data() {
    return {
      cards: [
        {
          image: image1,
          contentBrief: "武汉笛箫迎新音乐会",
          contentFull:
            "佳期如梦，笛箫传情；良辰美景，初遇知音。横吹为笛，竖吹作箫，笛声清亮，箫音典雅，不管是“笛声依约芦花里，白鸟成行忽惊起”，还是“二十四桥明月夜，玉人何处教吹箫”，无不是处处彰显着她们的风韵，初到武大的你，在珞珈山下，也将觅到这样的地方。",
          expanded: false,
          fullscreen: false,
        },
        {
          image: image2,
          contentBrief: "武汉大学元旦晚会",
          contentFull:
            "悠扬的笛箫，和着有节奏的鼓点，加上郭元超学长英姿煞爽的舞刀，瞬间带领着我们踏进了金庸老先生笔下豪情万丈的武林世界。",
          expanded: false,
          fullscreen: false,
        },
        {
          image: image3,
          contentBrief: "“一梦笛箫”",
          contentFull:
            "《瑶族舞曲》脱胎于瑶族传统歌舞鼓乐《长鼓舞曲》，一梦的舞台上选用竹笛合奏的形式更是将瑶族人民欢歌乐舞的场面表现得淋漓尽致，突出了竹笛的音色和性能，小可爱们听完这一曲是不是都跃跃欲试，想要回去接着练习笛子了呢~",
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
  width: 200px;
  height: 500px; /*固定高度*/
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
