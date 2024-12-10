import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
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
        text: "Bar",
        icon: "lightbulb",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "Foo",
        icon: "lightbulb",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
      },
    ],
  },
  {
    text: "常见问题汇总",
    icon: "lightbulb",
    link: "faq/readme"
  },
  {
    text: "发行版本",
    icon: "tag",
    link: "version/changelog"
  }
]);
