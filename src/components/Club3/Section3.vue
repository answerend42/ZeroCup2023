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
import image1 from "@/assets/武术配图2.jpg";
import image2 from "@/assets/武术配图3.jpg";
import image3 from "@/assets/武术配图4.jpg";
import backgroundImage from "@/assets/武术社团底图.png";
export default {
  name: "Section3",
  data() {
    return {
      cards: [
        {
          image: image1,
          contentBrief: "大学生比武大会",
          contentFull:
            "一年一度的湖北省大学生武术比赛是协会的重头戏。其次，每年一度的樱花武术节和民族传统体育大会中，协会也作为常驻嘉宾参与其中。除此之外，协会还会在各院系迎新晚会、公益演出中承担表演任务。2019年7月，协会成员代表武汉大学前往湖北武当山参加第33届大学生武术比赛，取得共5金6银6铜，团体总分第二，男子总分第二，女子总分第三的佳绩。2021年12月，协会成员再次前往湖北武当参加第35届大学生武术套路锦标赛。虽然由于疫情防控等原因，成员们未能充分备赛，但还是获得了1金1银4铜、女子团体总分第8名、男女团体总分第8名、精神文明风尚奖的优异成绩。",
          expanded: false,
          fullscreen: false,
        },
        {
          image: image2,
          contentBrief: "平时的对练",
          contentFull:
            "武术：刀：初级刀、自选刀、南刀、春秋大刀 枪：初级枪、自选枪、大枪、太极枪 拳：三段长拳、自选长拳、南拳、太极拳、八极拳、少林拳、大洪拳、小洪拳 棍：初级棍、自选棍、太极棍 剑：初级剑、自选剑、对练剑、太极剑 鞭：牧羊鞭、九节鞭 梅花桩：五势架势、成拳 气功：八段锦、易筋经、五禽戏、六字诀",
          expanded: false,
          fullscreen: false,
        },
        {
          image: image3,
          contentBrief: "陈家沟太极拳探访",
          contentFull:
            "温县陈家沟公认是太极拳的发源地，历经百年传承，温县太极拳习练者较其他地方更多，水平更高，习练习练氛围更浓厚。以温县的陈式太极拳发展为典型，以小见大，窥河南乃至全国太极文化发展及潜力，在调研力量不够的情况下是一个很好的办法。我们从太极拳本身入手，调查当地太极文化，联系当下推及传统武术，希望能让大家更客观得认识太极拳，认识传统武术。~",
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
