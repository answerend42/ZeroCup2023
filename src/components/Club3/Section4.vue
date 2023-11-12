<template>
  <div class="section" :style="sectionStyle">
    <h1 class="section-title">《八极拳》</h1>
    <video controls>
      <source src="@/assets/八极拳.mp4" type="video/mp4" />
      Your browser does not support the video element.
    </video>

    <SocialMediaBar
      bilibiliLink="https://space.bilibili.com/382862165"
      qqLink="http://qm.qq.com/cgi-bin/qm/qr?_wv=http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=bRUNARysJ4v_n61FclPlwTLGMZYVJPY3&authKey=8fh3pG05XNT1FDi1ztvS%2Bw5v5i9hRZPxqCOlQtcnN5XPqaJMADmlfXYIwYGFCoLo&noverify=0&group_code=905556055&k=DWb0JMS__Rd60W7TBx7kwdtFrwup3-Fi&authKey=60nVjqyNVkUKFLd4zzBAWP9gN%2B88AqwE5sVKNjL7apI5xwnnR4FYi7PnZfXnucbq&noverify=0&group_code=474732833"
      :wechatQRCode="wechatQRCodeImage"
    />
  </div>
</template>

<script>
import backgroundImage from "@/assets/武术社团底图.png";
import SocialMediaBar from "@/components/SocialMediaBar.vue"; // 确保路径正确
import wechatQRCodeImage from "@/assets/武术微信二维码.png";

export default {
  name: "Section4",
  components: {
    SocialMediaBar,
  },
  data() {
    return {
      wechatQRCodeImage,
      // 数据部分
    };
  },
  methods: {
    // 方法部分
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative; /* 为社交媒体栏定位 */
}
.section-title {
  font-family: "Noto Serif SC", serif;
}
.social-media-bar {
  position: absolute;
  bottom: 0;
  width: 100%;
  /* 其他样式和SocialMediaBar.vue中的保持一致 */
}
</style>
