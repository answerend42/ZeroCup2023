<template>
  <div class="section" :style="sectionStyle">
    <div class="image1" :style="image1"></div>
    <div class="container">
      <div class="text-box">
        <div class="content">
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
    </div>
  </div>
</template>

<script>
import backgroundImage from "@/assets/民乐团底图.webp";
import image1 from "@/assets/民乐团配图1.webp";
export default {
  name: "Section2",
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
</style>
