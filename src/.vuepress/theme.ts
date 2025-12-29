import { hopeTheme } from "vuepress-theme-hope";

import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://mica-mqtt.dreamlu.net",

  author: {
    name: "如梦技术",
    url: "https://mica-mqtt.dreamlu.net",
  },

  logo: "logo.png",

  repo: "dromara/mica-mqtt",
  docsRepo: "dromara/mica-mqtt-docs",
  docsDir: "src",

  navbar: zhNavbar,

  sidebar: zhSidebar,

  footer: "",

  displayFooter: true,

  // 打印按钮
  print: true,

  // These features are enabled for demo, only preserve features you need here
  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true
  },

  plugins: {
    icon: {
      assets: "fontawesome"
    },
    slimsearch: {
      indexContent: true,
      suggestion: true
    },
    notice: [{
      path: '/',
      title: 'mica-mqtt 2.5.11 发布',
      content: 'mica-mqtt 2.5.11 发布，重构 topic 参数变量提取，优化编解码！',
      actions: [
        {
          text: '立即查看',
          link: '/version/changelog.html',
          type: 'primary',
        },
      ],
    }]
  },
});
