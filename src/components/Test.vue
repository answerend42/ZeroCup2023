<template>
  <div id="app">
    <img-slider :items="carouselItems" :autoPlay="true" :interval="3000" />
  </div>
</template>

<script>
import ImgSlider from "@/components/ImgSlider.vue";

export default {
  components: {
    ImgSlider,
  },
  data() {
    return {
      carouselItems: [
        { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/5689/rock.jpg" },
        { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/5689/grooves.jpg" },
        { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/5689/arch.jpg" },
        { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/5689/sunset.jpg" },
      ],
    };
  },
};
</script>
