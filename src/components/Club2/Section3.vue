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
import image1 from "@/assets/相声配图2.jpg";
import image2 from "@/assets/相声配图3.jpg";
import image3 from "@/assets/相声配图4.jpg";
import backgroundImage from "@/assets/相声协会底图.png";
export default {
  name: "Section3",
  data() {
    return {
      cards: [
        {
          image: image1,
          contentBrief: "2019封箱表演",
          contentFull:
            "百年武大，十年相协。自武汉大学相声小品协会成立以来，已有十个年头。十年来，历届社团成员风雨兼程，不忘初心，奉献了一场又一场的精彩演出：本着“开心他人，快乐自己”的朴素理念，为学校师生带了欢笑与喜乐；以弘扬中华传统文化为目标，在相声小品等传统艺术形式注入新的活力。本次演出可谓后浪拍前浪，相协的新生力量们积极踊跃，带来了多场精彩的节目。",
          expanded: false,
          fullscreen: false,
        },
        {
          image: image2,
          contentBrief: "中华传统技艺联合演出",
          contentFull:
            "《凭什么》也秉承苗阜王声式逗捧风格，以“此处不留爷，自有留爷处。处处不留爷，爷还在武大住”为核心，讲述从相声小品协会到歌舞剧社，再到话剧社的一段经历，在戏谑欢笑中体现出没有本事还抱怨凭什么并自以为是的丑态，巧妙地传播正能量，点明主题：少问凭什么，多问怎么做。使观众在娱乐观赏中增长见识，于捧腹大笑的同时发人深省，更具观赏性。",
          expanded: false,
          fullscreen: false,
        },
        {
          image: image3,
          contentBrief: "壬寅年封箱演出",
          contentFull:
            " 本次封箱演出共由十名演员带来了《十八愁》、《批三国》、《好为人师》等六个节目，节目类型包括快板、相声、太平歌词，充分展现了演员台下的辛勤练习与长时间的曲艺文化积累，以及幕后工作人员的积极配合与精心准备。俗话说“台上一分钟，台下十年功”，本次演出的成功背后是这半年时间的投入，是协会各部门的付出与合作，是台词剧本的一次次打磨，是协会老师与前辈的纠正与指导，也是演员精益求精的不断练习。即使经历了疫情封控所带来的各种困难，各会员、演员也没有放弃，而是积极准备，在学业繁忙的同时，也能抓紧利用空闲时间，在宿舍、露天环境等艰苦条件下坚持排练，最终为我们带来了这一场精彩的封箱演出。~",
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
