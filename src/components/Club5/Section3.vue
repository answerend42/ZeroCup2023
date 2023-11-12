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
import image1 from "@/assets/国学社配图2.jpg";
import image2 from "@/assets/国学社配图3.jpg";
import image3 from "@/assets/国学社配图4.jpg";
import backgroundImage from "@/assets/国学社底图.png";
export default {
  name: "Section3",
  data() {
    return {
      cards: [
        {
          image: image1,
          contentBrief: "晨读活动",
          contentFull:
            "为了“帮助社员培养健康的作息和日有所学的学习习惯”，今年我们特设暑期晨读活动，受到社员的热烈欢迎。大部分文章出自社员的投稿，其注释则由学术部负责整理，每日七时发布，社员们有一天的时间摘抄、朗读、讨论。",
          expanded: false,
          fullscreen: false,
        },
        {
          image: image2,
          contentBrief: "武汉大学国学知识竞赛",
          contentFull:
            "高朋满座，妙语连珠，其乐融融。参加本次国学知识竞赛的评委有：国学院的谢远笋老师，文学院刘莹学姐，以及弘毅学堂人文专业的李枕戈学长，当然，还有来自各个学院的二十位国学精英。我们欢聚一堂，共同庆祝这场国学盛宴。",
          expanded: false,
          fullscreen: false,
        },
        {
          image: image3,
          contentBrief: "打篆",
          contentFull:
            " 篆香，古称“印香”、“拓香”，是一种直接点燃熏香的过程，打香篆，是为了体会打篆过程中养心、静气、减压、祛躁、悦目。现代打篆的模型越来越多样，我们在打篆的过程中也能体会到不同的乐趣。不同材质的炉具，配以不同形式的“香印”，打出的一炉香，有不同的意境，也更具养生意义。~",
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
