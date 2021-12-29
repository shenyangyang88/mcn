module.exports = {
  productionSourceMap: false,
  // antd vue 自定义主题
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            // common theme
            "primary-color": "#3e1ebd",
            "body-background": "#f7f8fa",

            // layout theme
            "layout-body-background": "#f7f8fa",
            "layout-header-padding": "0 40px",
            "layout-header-background": "#fff",
          },
          javascriptEnabled: true,
        },
      },
    },
  },
};
