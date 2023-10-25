<template>
  <div>
    <div class="header">
      <!-- 背景图片 -->
    </div>
    <nav class="navbar" :class="{ 'navbar-visible': hasScrolled }">
      <div class="container">
        <ul>
          <li><router-link to="/">主页</router-link></li>
          <li><router-link to="/clubs">社团</router-link></li>
          <li><router-link to="/organizations">学生组织</router-link></li>
          <li>
            <router-link to="/traditional-buildings">传统建筑</router-link>
          </li>
          <li><router-link to="/traditional-culture">传统文化</router-link></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hasScrolled: false, // 标记页面是否已向下滚动一个页面
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll); // 监听滚动事件
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll); // 移除滚动事件监听器
  },
  methods: {
    handleScroll() {
      if (window.scrollY > window.innerHeight) {
        this.hasScrolled = true; // 页面向下滚动了一个页面
      } else {
        this.hasScrolled = false; // 页面未滚动一个页面
      }
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: rgba(0, 0, 0, 0); /* 将初始背景设置为完全透明 */
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: background-color 0.5s;
  transition: opacity 0.5s;
}

.navbar-visible {
  background-color: rgba(0, 0, 0, 0.7); /* 逐渐显示的颜色 */
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.container {
  padding: 20px 20px;
}

ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

li {
  font-size: 16px;
  font-family: "思源宋体";
  color: white;
  width: 100%;
  text-align: center;
  line-height: 1.6;
}

a {
  text-decoration: none;
  color: white;
}
</style>
