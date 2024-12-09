import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "mqtt科普",
    icon: "lightbulb",
    prefix: "mqtt/",
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
    text: "指南",
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
    text: "模块",
    icon: "lightbulb",
    prefix: "version/",
    children: [
      "changelog"
    ],
  },
  {
    text: "更新记录",
    icon: "lightbulb",
    prefix: "version/",
    children: [
        "changelog"
    ],
  }
]);
