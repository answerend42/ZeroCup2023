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
          @mouseover="goToImage(index)"
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
export default {
  data() {
    return {
      images: [
        {
          src: "./src/assets/01.jpg",
          description: "图片介绍1",
        },
        {
          src: "./src/assets/02.jpg",
          description: "图片介绍2",
        },
        {
          src: "./src/assets/03.jpg",
          description: "图片介绍3",
        },
        {
          src: "./src/assets/04.jpg",
          description: "图片介绍4",
        },
        {
          src: "./src/assets/05.jpg",
          description: "图片介绍5",
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
}

.image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
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

.pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%; /* Image container takes 80% of the page width */
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
  color: #000;
}
</style>
