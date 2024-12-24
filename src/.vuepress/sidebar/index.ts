import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
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
          icon: "fire",
          prefix: "java/",
          collapsible: true,
          children: [{
              text: "mqtt client",
              icon: "microchip",
              link: "client",
            },{
              text: "mqtt server",
              icon: "server",
              link: "server",
            }]
        },
        {
          text: "Spring boot 应用",
          icon: "fire",
          prefix: "spring/",
          collapsible: true,
          children: [{
            text: "mqtt client",
            icon: "microchip",
            link: "client",
          },{
            text: "mqtt server",
            icon: "server",
            link: "server",
          }]
        },
        {
          text: "Solon 应用",
          icon: "fire",
          prefix: "solon/",
          collapsible: true,
          children: [{
            text: "mqtt client",
            icon: "microchip",
            link: "client",
          },{
            text: "mqtt server",
            icon: "server",
            link: "server",
          }]
        },
        {
          text: "JFinal 应用",
          icon: "fire",
          prefix: "jfinal/",
          collapsible: true,
          children: [{
            text: "mqtt client",
            icon: "microchip",
            link: "client",
          },{
            text: "mqtt server",
            icon: "server",
            link: "server",
          }]
        },
        {
          text: "Http Api 接口",
          icon: "a",
          link: "httpApi"
        },
      ],
    }
  ],
});
