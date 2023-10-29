<template>
  <div class="organizations-page">
    我是 organizations
    <div>
      <Gallery :imageList="imageList" :slideshowInterval="5000" />
    </div>
    <!-- Clubs and Organizations Content -->
    <!-- Implement the card layout for clubs and organizations here (e.g., Traditional Martial Arts Association, Flute and Xiao Association, Folk Music Ensemble, Cross Talk Association) -->
  </div>
</template>

<script>
import Gallery from "./Gallery.vue";
export default {
  name: "OrganizationsPage",
  data() {
    return {
      imageList: [
        "./src/assets/01.jpg",
        "./src/assets/02.jpg",
        "./src/assets/03.jpg",
        "./src/assets/04.jpg",
        "./src/assets/05.jpg",
        // 添加更多图片
      ],
    };
  },
  components: {
    Gallery,
  },
};
</script>
