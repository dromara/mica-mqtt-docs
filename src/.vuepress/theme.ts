import { hopeTheme } from "vuepress-theme-hope";

import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://mica-mqtt.dromara.org",

  author: {
    name: "mica-mqtt@dromara.org",
    url: "https://dromara.org",
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
      title: 'mica-mqtt 2.4.9 发布',
      content: '🐛 mqtt server 修复 http/ws 端口占用 gitee #ICID15',
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
