<template>
  <div class="section" :style="sectionStyle">
    <h1 class="section-title">《我爱陕西话》</h1>
    <audio controls>
      <source
        src="@/assets/武大相协相声我爱陕西话王远 于珏周末艺苑专场.mp3"
        type="audio/mpeg"
      />
      Your browser does not support the audio element.
    </audio>

    <SocialMediaBar
      bilibiliLink="https://space.bilibili.com/351975569"
      qqLink="http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=-LQ1zdHnlJA5ucahLtb4wkxsG9tnqt6P&authKey=5f2RBKq7HuxNrn5EQrVE6h7L3nbjx3W1kcbq%2FHIzliCMaOmaD%2FJZlla1HnOMUDPP&noverify=0&group_code=813418039=DWb0JMS__Rd60W7TBx7kwdtFrwup3-Fi&authKey=60nVjqyNVkUKFLd4zzBAWP9gN%2B88AqwE5sVKNjL7apI5xwnnR4FYi7PnZfXnucbq&noverify=0&group_code=474732833"
      :wechatQRCode="wechatQRCodeImage"
    />
  </div>
</template>

<script>
import backgroundImage from "@/assets/相声协会底图.webp";
import SocialMediaBar from "@/components/SocialMediaBar.vue"; // 确保路径正确
import wechatQRCodeImage from "@/assets/相声微信二维码.webp";

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
