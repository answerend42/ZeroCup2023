<template>
  <div class="main-page">
    <div class="background">
      <div>
        <img src="../assets/珞源国学社.png" class="background-center" />
      </div>
      <div>
        <img src="../assets/Tab start.png" class="background-bottom" />
      </div>
    </div>
    <div class="background"></div>
    <div class="background"></div>
    <div class="background"></div>
    <div class="background"></div>
    <div class="background"></div>
    <div class="background"></div>
    <div class="background"></div>
    <div class="background"></div>
    <div class="background"></div>
  </div>
</template>

<script>
export default {
  name: "MainPage",
};
</script>

<style scoped>
.background {
  width: 100%;
  height: 100vh;
  background-image: url(".././assets/background.png");
  background-size: cover;
}
.background-center {
  width: 40%;
  height: auto;
  margin: 0 auto;
  display: block;
}
.background-bottom {
  width: 40%;
  height: auto;
  margin: 6em auto;
  display: block;
  text-align: center;
}
.content {
  /* Add main content styles here (card layout with Chinese cultural elements) */
}
</style>
