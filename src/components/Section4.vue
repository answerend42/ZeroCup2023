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
    <div class="description-container">
      <p class="overall-description">
        转入武大校园，仿佛穿越了时光的隧道，我们置身于古风建筑的海洋中。<br />
        这里的每一片砖瓦，每一栋楼宇，都是时光的见证者，承载着历史的沉淀。<br />
        这将是我们探寻的奇妙旅程，仿佛在一本古老的经书中翻阅，寻找那些珍贵而深邃的文化符号。 <br />
        让我们携手走进这片文化的海洋，感受中华传统文化传承，聆听武大校园的古老诗行，让建筑成为时光的过渡，连接起千年的文化底蕴。
      </p>
    </div>
  </div>
</template>

<script>
import image1 from "../assets/武汉大学早期建筑群.jpg";
import image2 from "../assets/武汉大学图书馆.jpg";
import image3 from "../assets/宋卿体育馆.jpg";
import image4 from "../assets/周恩来故居.jpg";

import backgroundImage from "@/assets/主页底图.png";
export default {
  name: "Section4",
  data() {
    return {
      cards: [
        {
          image: image1,
          contentBrief: "武汉大学早期建筑群",
          contentFull:
            "武汉大学早期建筑位于湖北省武汉市东湖之滨的珞珈山、狮子山等十余座起伏的山丘之间。工程于1930年3月开工建设，1936年竣工，主要有文、法、理、工四个学院大楼和图书馆、体育馆、华中水工实验所、学生宿舍、饭厅、俱乐部、名人故居以及国立武汉大学牌坊、六一纪念亭等15处26栋建筑，建筑面积7万多平方米，占地面积200多公顷。建筑群特点是将中国传统建筑理念与西方建筑技术、古典建筑艺术融为一体；在建筑单体造型上，更是因山就势、形式各异、布局精巧、气势恢宏。武汉大学早期建筑是中国近代唯一完整规划和统筹设计并在较短时间内完成的大学校园建筑，是全国最大、最美的一组近代高校建筑群，堪称我国近代大学校园建筑的佳作和典范。",
          expanded: false,
          fullscreen: false,
        },
        {
          image: image2,
          contentBrief: "武汉大学图书馆",
          contentFull:
            "武汉大学图书馆以其历史悠久、藏书丰富、建筑宏伟、环境幽雅而闻名于世。图书馆源于1893年清末湖广总督张之洞创办的湖北自强学堂图书室，1917 年正式建馆，1928 年定名为国立武汉大学图书馆。1935 年启用坐落在东湖之滨、狮子山顶的老图书馆大楼。武汉大学图书馆老馆及其周围的建筑群，被列入第五批全国重点文物保护单位。  ",
          expanded: false,
          fullscreen: false,
        },
        {
          image: image3,
          contentBrief: "宋卿体育馆",
          contentFull:
            "宋卿体育馆位于狮子山西部南坡底，坐东朝西，是武汉大学早期建筑群的重要组成部分。该馆建于1935年，由黎元洪（字宋卿）之子黎绍基和黎绍业将其筹建江汉大学的基金十万大洋（中兴煤矿股票）转捐给武汉大学而建造。该馆为钢筋混凝土框架结构，长35米，宽21.3米，高15.1米，建筑面积2748平方米，建筑层数两层，上层为球场，下层为健身房。屋顶结构采用三绞拱钢架与钢筋混凝土相结合组成大跨度空间，别具一格的山墙，孔雀蓝琉璃瓦屋顶随三绞拱的弧线轮廓而转折，形成轮舵式的山墙和三重檐歇山顶，四隅设亭，二层内有看台，外有观景台，利用密檐高差采光通风。整个体育馆融使用功能、建筑艺术和当时先进的建筑技术为一体，堪称我国20世纪30年代体育馆建筑经典佳作。",
          expanded: false,
          fullscreen: false,
        },
        {
          image: image4,
          contentBrief: "周恩来故居",
          contentFull:
            "1937年，抗日战争全面爆发，国共两党实现第二次合作。国民政府西迁武汉，武汉成为全民族抗战指挥中心。12月，中共中央在武汉设长江局（对外称中共代表团），周恩来从延安来到武汉，主管军事和统战工作，并任改组后的国民政府军事委员会政治部副部长。1938年5月至9月，周恩来、邓颖超夫妇居住在“珞珈山十八栋”27号，即第19栋别墅。周恩来在寓居“十八栋”期间，组织领导“抗日活动宣传周”“七七抗战一周年纪念”等系列抗日宣传活动，先后在武汉大学做了3次演讲，给军官训练团授课，会见国民党高级将领、民主人士、文化界和新闻界的知名人士，宣传共产党的抗日主张。因此，这里有着“国共合作抗日小客厅”之誉。武汉大学周恩来故居因其重要的历史与文化价值，于1983年被武汉市人民政府列为武汉市文物保护单位，2001年，被国务院批准为全国重点文物保护单位。",
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
.description-container {
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
}

.overall-description {
  font-family: "思源宋体";
  font-size: 1.5em;
  font-weight: 700;

  /* 添加其他样式属性，如字体、颜色、背景等 */
}
.section {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  position: relative;
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
  background-color: rgba(255, 255, 255, 0.6);
  text-align: center;
  font-family: "思源宋体";
  transition: opacity 0.4s;
  z-index: 2;
}
</style>
