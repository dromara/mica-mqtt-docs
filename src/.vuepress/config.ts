import { defineUserConfig } from "vuepress";
import { llmsPlugin } from '@vuepress/plugin-llms'
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
    llmsPlugin({
      llmsTxt: true,
      llmsFullTxt: true
    }),
  ],
});
