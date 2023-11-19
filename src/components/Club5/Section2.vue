<template>
  <div class="section" :style="sectionStyle">
    <div class="image1" :style="image1"></div>
    <div class="container">
      <div class="text-box">
        <div class="content">
          <p>
            武汉大学珞源国学社（学生）是于2007年注册成立的校级学术社团。同时，也是全国第一家成立的区域性高校学生国学社团联谊组织“湖北高校国学联盟”的四家原始发起单位之一。珞，取自珞珈山，指代武大；源，源头、活力、发展之意。总意解为：珞珈山下的武大学子，将环聚在国学社周围，汲取国学之源头活水，求得国学之细水长流。
          </p>
          <p>
            学生社团本着“为天地立心，为生民立命，为往圣继绝学，为万世开太平”的宗旨，以“博学审问慎思明辨，以光大国学为己任，自强弘毅求是拓新，以有为将来而后图”为理念，期待聚集一批热爱国学的同学，在学生社团活动中提高自身国学素养，培养爱国情怀从而带动国学的推广与发展!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import backgroundImage from "@/assets/国学社底图.webp";
import image1 from "@/assets/国学社配图1.webp";
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
