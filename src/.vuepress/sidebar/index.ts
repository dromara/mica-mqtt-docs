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
      children: "structure",
    }
  ],
});
