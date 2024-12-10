import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "mqtt科普",
    icon: "globe",
    prefix: "mqtt/",
    children: [
      {
        text: "Topic 规则",
        icon: "hashtag",
        link: "topic",
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
    text: "mica-mqtt指南",
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
