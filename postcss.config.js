// postcss.config.js
module.exports = {
    plugins: {
    // "postcss-modules": {}, // 不再需要 generateScopedName: ""
      "postcss-px-to-viewport": {
        viewportWidth: 1920, // 设计稿宽度
        viewportHeight: 1080, // 设计稿高度
        unitPrecision: 5,
        viewportUnit: "vw",
        selectorBlackList: [".ignore", ".hairlines", ".button"],
        minPixelValue: 1,
        mediaQuery: false,
      },
    },
  };
