<!-- ImgSlider.vue -->
<template>
  <div class="slider">
    <div class="slides" :style="slideStyles">
      <div class="slide" v-for="(item, index) in items" :key="index">
        <img :src="item.src" alt="Slide">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: Array, // 轮播项数组，每个项包含 { src: 图片地址 }
    autoPlay: Boolean, // 是否自动播放
    interval: Number, // 自动播放间隔
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  computed: {
    slideStyles() {
      return {
        transform: `translateX(-${this.currentIndex * 100}%)`,
        transition: "transform 0.5s ease-in-out",
      };
    },
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
    },
  },
  created() {
    if (this.autoPlay) {
      this.timer = setInterval(this.nextSlide, this.interval);
    }
  },
  beforeDestroy() {
    if (this.autoPlay) {
      clearInterval(this.timer);
    }
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
.slider {
  overflow: hidden;
  position: relative;
  max-width: 600px;
  margin: 0 auto;
}

.slides {
  display: flex;
}

.slide {
  width: 100%;
}

img {
  max-width: 100%;
  height: auto;
}
</style>
