<template>
  <nav class="navbar" :class="{ 'navbar-visible': isNavbarVisible }">
    <div class="container">
      <ul>
        <li><router-link to="/">主页</router-link></li>
        <li><router-link to="/clubs">社团</router-link></li>
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
      this.isNavbarVisible = window.scrollY > window.innerHeight;
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
}

.navbar-visible {
  background-color: #000000;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.container {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
}

ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 20px;
}

li {
  font-size: 18px;
  font-family: "思源宋体";
  color: white;
}

a {
  text-decoration: none;
  color: white;
}
</style>
