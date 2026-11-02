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
      description:
        "mica-mqtt 官方文档：基于 Java AIO 实现的轻量级 MQTT Broker 与客户端，支持 MQTT 3.1/3.1.1/5.0、WebSocket 与 HTTP REST API，提供 Spring Boot、Solon、JFinal、Android 的接入指南。",
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
