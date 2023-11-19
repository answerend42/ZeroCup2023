<template>
  <nav class="navbar" :class="{ 'navbar-visible': isNavbarVisible }">
    <div class="container">
      <ul>
        <li><a @click="goToSection(0)">主页</a></li>
        <li><a @click="goToSection(2)">学生组织</a></li>
        <li><a @click="goToSection(3)">传统建筑</a></li>
        <li><a @click="goToSection(4)">传统文化</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isNavbarVisible: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isNavbarVisible = window.scrollY > (window.innerHeight / 3) * 2;
    },
    goToSection(sectionNumber) {
      this.$emit('navigate-to-section', sectionNumber);
      console.log("Navigating to section:", sectionNumber);
      const sectionId = `section${sectionNumber + 1}`;
      // 使用window.location.href进行跳转并附带锚点，以滚动到特定的Section
      window.location.href = `/#${sectionId}`;
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: transparent;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: background-color 0.3s;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 2; /* Add a higher z-index value to make sure the navbar is on top of other content */
}

.navbar-visible {
  background-color: rgba(0, 0, 0, 0.1); /* 黑色背景，50% 透明度 */
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.container {
  display: flex;
  justify-content: center;
  padding: 10px 20px;
}

ul {
  list-style: none;
  padding: 0;
  text-align: center; /* 让整个列表水平居中 */
}

li {
  font-size: 1.5vw;
  font-family: 'Noto Serif SC', serif;
  color: white;
  display: inline; /* 使li项在同一行水平排列 */
  margin: 1.5vw;
}

a {
  text-decoration: none;
  color: white;
}

@media (max-width: 767px) {
  li {
    font-size: 3vw; /* 在小屏幕上增加字体大小 */
    margin: 3vw;
  }
}
</style>
