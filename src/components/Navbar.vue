<template>
  <nav class="navbar" :class="{ 'navbar-visible': isNavbarVisible }">
    <div class="container">
      <ul>
        <li><router-link to="/">主页</router-link></li>
        <li><router-link to="/organizations">学生组织</router-link></li>
        <li><router-link to="/traditional-buildings">传统建筑</router-link></li>
        <li><router-link to="/traditional-culture">传统文化</router-link></li>
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
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isNavbarVisible = window.scrollY > window.innerHeight / 3 * 2;
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
  background-color: #000000;
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
  font-family: "思源宋体";
  color: white;
  display: inline; /* 使li项在同一行水平排列 */
  margin: 1.5vw;
}

a {
  text-decoration: none;
  color: white;
}

@media (max-width: 768px) {
  li {
    font-size: 3vw; /* 在小屏幕上增加字体大小 */
    margin: 3vw;
  }
}
</style>
