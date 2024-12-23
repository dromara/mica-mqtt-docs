import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  {
    text: "主页",
    icon: "home",
    link: "/",
  },
  {
    text: "mqtt 科普",
    icon: "globe",
    prefix: "mqtt/",
    children: [
      {
        text: "Topic 规则",
        icon: "hashtag",
        link: "topic",
      },
      {
        text: "遗嘱消息",
        icon: "message",
        link: "will",
      },
      {
        text: "保留消息",
        icon: "inbox",
        link: "retain",
      },
      {
        text: "心跳保活",
        icon: "heart-pulse",
        link: "keepalive",
      },
      {
        text: "客户端 Id",
        icon: "passport",
        link: "clientId",
      },
      {
        text: "客户端工具",
        icon: "screwdriver-wrench",
        link: "tool",
      },
    ],
  },
  {
    text: "mica-mqtt 指南",
    icon: "lightbulb",
    prefix: "guide/",
    children: [
      {
        text: "普通 Java 应用",
        icon: "fire",
        prefix: "java/",
        children: ["client", "server"],
      },
      {
        text: "Spring boot 应用",
        icon: "fire",
        prefix: "spring/",
        children: ["client", "server"],
      },
      {
        text: "Solon 应用",
        icon: "fire",
        prefix: "solon/",
        children: ["client", "server"],
      },
      {
        text: "JFinal 应用",
        icon: "fire",
        prefix: "jfinal/",
        children: ["client", "server"],
      },
      {
        text: "Http Api 接口",
        icon: "a",
        link: "httpApi",
      },
    ],
  },
  {
    text: "常见问题汇总",
    icon: "question",
    link: "faq/faq"
  },
  {
    text: "发行版本",
    icon: "tag",
    link: "version/changelog"
  },
  {
    text: "PIG AI（mica-mqtt技术手册）",
    icon: "robot",
    link: "https://home.pig4cloud.com:38443/bot/index.html#/0/1809133293843144705/chat/1729581143528"
  },
]);
