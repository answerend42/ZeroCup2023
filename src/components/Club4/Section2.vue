<template>
  <div class="section" :style="sectionStyle">
    <div class="image1" :style="image1"></div>
    <div class="content" :style="contentStyle">
      <p>
        武汉大学大学生艺术团民乐团成立于2001年，是武汉大学艺术教育中心直接领导，由包括艺术特长生在内的大学生组成的学生艺术团体。乐团在武汉大学团委的关怀和驻团指挥魏维老师的指导下，曾代表武汉大学先后赴美国、法国、德国、奥地利、卢森堡等国进行专场巡演与艺术交流，并获得了极高的赞誉。
      </p>
      <p>
        在这里有专业的指挥，会各种乐器并乐于招徒弟的大佬，来自全校各个专业各个年级的同学；有统一的排练，一学期一次的音乐会，以及各种比赛演出的机会，以及成员的各种迷惑性日常——
        在大家都很安静的时候突然迷之自信地邦邦邦来了段旋律；
        数了76个小节的空拍进对旋律感觉自己巨牛；
        大家突然开始发一串数字互相交流，或者唱着旋律你接一句我跟一句……
      </p>
    </div>
  </div>
</template>

<script>
import backgroundImage from "@/assets/民乐团底图.png";
import contentBackgroundImage from "@/assets/文本框框架.png"; // 确认这是content区域背景图的正确路径
import image1 from "@/assets/民乐团配图1.jpg";
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
        maxWidth: "725px",
        height: "auto",
        margin: "auto", // 这确保了在 flex 父元素中居中
        textalign: "center",
        marginTop: "15%",
      },
      image1: {
        height: "auto", // 或者设置为具体高度
        width: "50%", // 根据需要调整宽度
        backgroundImage: `url(${image1})`,
        backgroundSize: "contain",
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
  max-width: 725px;
  text-align: left;
  font-size: 1.5em;
  font-family: 'Noto Serif SC', serif;
  font-weight: bold;
  flex: 1;
  margin-left: 10%;
  position: absolute;
  bottom: 75px;
  right: 0;
  /* 更多样式 */
}

.content {
  flex: 1; /* content也占据剩余空间 */
  /* 其他现有样式 */
  margin-left: 10%; /* 根据需要调整，以在图片和内容之间创建间隔 */
}
</style>
