<template>
  <div class="gallery">
    <div class="image-container">
      <div class="image-wrapper">
        <div class="image-track" :style="imageTrackStyles">
          <div
            v-for="(image, index) in images"
            :key="index"
            class="image-slide"
          >
            <img
              :src="image.src"
              alt="Gallery Image"
              @mouseover="pauseSlideshow"
              @mouseout="startSlideshow"
              class="image"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="pagination">
      <div class="pagination-dots">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="pagination-dot"
          @click="goToImage(index)"
          :class="{ active: index === currentImage }"
        ></div>
      </div>
      <div class="image-description">
        {{ images[currentImage].description }}
      </div>
    </div>
  </div>
</template>

<script>
import image1 from "@/assets/晨读1.webp";
import image2 from "@/assets/晨读2.webp";
import image3 from "@/assets/晨读3.webp";
import image4 from "@/assets/晨读4.webp";
import image5 from "@/assets/晨读5.webp";

export default {
  data() {
    return {
      images: [
        {
          src: image1,
          description: "竹枝词九首(节选)",
        },
        {
          src: image2,
          description: "木兰花慢",
        },
        {
          src: image3,
          description: "九歌·湘夫人",
        },
        {
          src: image4,
          description: "搜神后记·白水素女",
        },
        {
          src: image5,
          description: "续齐谐记·阳羡书生",
        },
        // 添加更多图片
      ],
      currentImage: 0,
      slideshowTimer: null,
    };
  },
  computed: {
    imageTrackStyles() {
      return {
        transform: `translateX(-${this.currentImage * 100}%)`,
      };
    },
  },
  methods: {
    nextImage() {
      this.currentImage = (this.currentImage + 1) % this.images.length;
    },
    prevImage() {
      this.currentImage =
        (this.currentImage - 1 + this.images.length) % this.images.length;
    },

    goToImage(index) {
      this.currentImage = index;
    },
    startSlideshow() {
      this.slideshowTimer = setInterval(() => {
        this.nextImage();
      }, 10000);
    },
    pauseSlideshow() {
      clearInterval(this.slideshowTimer);
    },
  },
  mounted() {
    this.startSlideshow();
  },
  beforeDestroy() {
    clearInterval(this.slideshowTimer);
  },
};
</script>

<style scoped>
.gallery {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-container {
  position: relative;
  max-width: 80%;
  text-align: center;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  max-height: 600px;
  margin: 0 auto;
}

.image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.image-track {
  display: flex;
  transition: transform 3.5s;
}

.image-slide {
  min-width: 100%;
  max-width: 100%;
}

.image {
  width: 100%;
  height: 100%;
  transform: scale(0.6);
  object-fit: contain;
}

.pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin-bottom: 10px;
}

.pagination-dots {
  display: flex;
  align-items: center;
}

.pagination-dot {
  width: 10px;
  height: 10px;
  background-color: transparent;
  border: 2px solid #000;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.pagination-dot.active {
  background-color: #000;
}

.image-description {
  text-align: right;
  font-weight: bold;
  font-family: 'Noto Serif SC', serif;
  color: #000;
}
</style>
