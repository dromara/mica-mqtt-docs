import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "mqtt科普",
      icon: "globe",
      prefix: "mqtt/",
      children: "structure",
    },
    {
      text: "mica-mqtt指南",
      icon: "lightbulb",
      prefix: "guide/",
      children: [
        {
          text: "普通 Java 应用",
          icon: "java",
          prefix: "java/",
          children: ["client", "server"],
        },
        {
          text: "Spring boot 应用",
          icon: "java",
          prefix: "spring/",
          children: ["client", "server"],
        },
        {
          text: "Solon 应用",
          icon: "java",
          prefix: "solon/",
          children: ["client", "server"],
        },
        {
          text: "JFinal 应用",
          icon: "java",
          prefix: "jfinal/",
          children: ["client", "server"],
        },
      ],
    }
  ],
});
