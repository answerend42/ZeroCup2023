<template>
  <div class="section" :style="sectionStyle">
    <SocialMediaBar
      bilibiliLink="https://www.bilibili.com/video/BV1Mf4y1p72X/?vd_source=f357924ca794641455faadbea305923b"
      qqLink="http://qm.qq.com/cgi-bin/qm/qr?_wv=http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=K3SzdEoH99qzgNQFRoSq4iWmEdbu4qdr&authKey=Wk%2BrFR%2FFXRJGEQ8E03Ed0hPHqPFlRQnaCMHZVara%2FWaYg2BMlXi1WQPbCOyNWxU8&noverify=0&group_code=539257495&http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=-LQ1zdHnlJA5ucahLtb4wkxsG9tnqt6P&authKey=5f2RBKq7HuxNrn5EQrVE6h7L3nbjx3W1kcbq%2FHIzliCMaOmaD%2FJZlla1HnOMUDPP&noverify=0&group_code=813418039=DWb0JMS__Rd60W7TBx7kwdtFrwup3-Fi&authKey=60nVjqyNVkUKFLd4zzBAWP9gN%2B88AqwE5sVKNjL7apI5xwnnR4FYi7PnZfXnucbq&noverify=0&group_code=474732833"
      :wechatQRCode="wechatQRCodeImage"
    />
  </div>
</template>

<script>
import backgroundImage from "@/assets/国学社底图.webp";
import SocialMediaBar from "@/components/SocialMediaBar.vue"; // 确保路径正确
import wechatQRCodeImage from "@/assets/国学社微信二维码.webp";

export default {
  name: "Section3",
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
