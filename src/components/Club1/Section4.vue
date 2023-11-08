<template>
  <div class="section" :style="sectionStyle">
    <audio controls>
      <source src="@/assets/1.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>

    <SocialMediaBar
      bilibiliLink="https://space.bilibili.com/220761508"
      qqLink="你的QQ链接"
      :wechatQRCode="wechatQRCodeImage"
    />
  </div>
</template>

<script>
import backgroundImage from "@/assets/笛箫协会背景.png";
import SocialMediaBar from "@/components/SocialMediaBar.vue"; // 确保路径正确
import wechatQRCodeImage from '@/assets/笛箫协会公众号.png';

export default {
  name: "Section4",
  components: {
    SocialMediaBar,
  },
  data() {
    return {
      wechatQRCodeImage
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

.social-media-bar {
  position: absolute;
  bottom: 0;
  width: 100%;
  /* 其他样式和SocialMediaBar.vue中的保持一致 */
}
</style>
