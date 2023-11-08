<template>
  <div class="social-media-bar">
    <a :href="bilibiliLink" target="_blank">
      <font-awesome-icon :icon="['fab', 'bilibili']" size="2xl" />
    </a>
    <a :href="qqLink" target="_blank">
      <font-awesome-icon :icon="['fab', 'qq']" size="2xl" />
    </a>
    <a @click="showWeixinModal">
      <font-awesome-icon :icon="['fab', 'weixin']" size="2xl" />
    </a>
    <!-- 微信二维码模态框 -->
    <div class="modal" :style="{ display: showWeixin ? 'block' : 'none' }">
      <div class="modal-content">
        <span class="close" @click="toggleModal">&times;</span>
        <img :src="wechatQRCode" alt="WeChat QR Code" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SocialMediaBar",
  props: {
    bilibiliLink: {
      type: String,
      default: "#",
    },
    qqLink: {
      type: String,
      default: "#",
    },
    wechatQRCode: {
      type: String,
      default: "#",
    },
  },
  data() {
    return {
      showWeixin: false, // 控制微信模态框的显示
    };
  },
  methods: {
    showWeixinModal() {
      this.showWeixin = true; // 直接设置为 true，因为这个方法只是打开模态框
    },
    toggleModal() {
      this.showWeixin = false; // 这个方法会关闭模态框
    },
  },
};
</script>

<style scoped>
.social-media-bar {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  background-color: rgba(
    255,
    255,
    255,
    0
  ); /* 可以根据你的网站风格调整背景颜色 */
}

.social-media-bar a {
  color: inherit; /* 保持图标颜色与链接颜色一致 */
  text-decoration: none; /* 去掉下划线 */
}

.modal {
  display: none; /* 隐藏模态框 */
  position: fixed; /* 固定定位 */
  z-index: 1000; /* 确保模态框在最顶部 */
  left: 0;
  top: 0;
  width: 100%; /* 全屏宽度 */
  height: 100%; /* 全屏高度 */
  overflow: auto; /* 启用滚动 */
  background-color: rgba(0, 0, 0, 0.4); /* 半透明背景 */
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 居中显示 */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* 宽度 */
  max-width: 500px; /* 最大宽度 */
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.modal {
  display: none; /* 由 v-show 控制，这里不需要修改 */
  /* 其他样式保持不变 */
}
</style>
