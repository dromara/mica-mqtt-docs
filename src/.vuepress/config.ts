import { defineUserConfig } from "vuepress";
import { llmsPlugin } from '@vuepress/plugin-llms'
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  head: [
    [
      "script",
      { async: true, src: "https://www.googletagmanager.com/gtag/js?id=G-TEFQVE72ZE" },
    ],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-TEFQVE72ZE');`,
    ],
  ],

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
