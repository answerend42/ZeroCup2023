<template>
  <div class="section" :style="sectionStyle">
    <div class="image1" :style="image1"></div>
    <div class="content" :style="contentStyle">
      <p>
        武汉大学珞源国学社（学生）是于2007年注册成立的校级学术社团。同时，也是全国第一家成立的区域性高校学生国学社团联谊组织“湖北高校国学联盟”的四家原始发起单位之一。珞，取自珞珈山，指代武大；源，源头、活力、发展之意。总意解为：珞珈山下的武大学子，将环聚在国学社周围，汲取国学之源头活水，求得国学之细水长流。
      </p>
      <p>
        学生社团本着“为天地立心，为生民立命，为往圣继绝学，为万世开太平”的宗旨，以“博学审问慎思明辨，以光大国学为己任，自强弘毅求是拓新，以有为将来而后图”为理念，期待聚集一批热爱国学的同学，在学生社团活动中提高自身国学素养，培养爱国情怀从而带动国学的推广与发展!
      </p>
    </div>
  </div>
</template>

<script>
import backgroundImage from "@/assets/国学社底图.png";
import contentBackgroundImage from "@/assets/文本框框架.png"; // 确认这是content区域背景图的正确路径
import image1 from "@/assets/国学社配图1.jpg";
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
