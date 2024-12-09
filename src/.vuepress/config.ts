import { defineUserConfig } from "vuepress";
import { slimsearchPlugin } from '@vuepress/plugin-slimsearch'

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "mica-mqtt",
      description: "mica-mqtt 文档",
    }
  },

  theme,

  plugins: [
    slimsearchPlugin({
      indexContent: true,
      suggestion: true
    }),
  ],

});
