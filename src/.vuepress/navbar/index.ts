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
        text: "消息质量 QoS",
        icon: "spinner",
        link: "qos",
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
        text: "Android 原生应用",
        icon: "mobile",
        prefix: "android/",
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
        icon: "h",
        link: "httpApi",
      },
      {
        text: "大模型 MCP",
        icon: "h",
        link: "mcp",
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
    icon: "tags",
    prefix: "version/",
    children: [
      {
        text: "发行版本",
        icon: "tag",
        link: "changelog"
      },
      {
        text: "升级指南",
        icon: "arrow-up",
        link: "update"
      }
    ]
  }
]);
