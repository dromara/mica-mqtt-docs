import { hopeTheme } from "vuepress-theme-hope";

import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://mica-mqtt.dreamlu.net",

  author: {
    name: "如梦技术",
    url: "https://www.dreamlu.net",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "logo.png",

  repo: "dromara/mica-mqtt",

  docsDir: "src",

  navbar: zhNavbar,

  sidebar: zhSidebar,

  footer:
      "<a href=\"https://beian.miit.gov.cn\" target=\"_blank\" rel=\"nofollow\">京ICP备13040556号-2</a>&nbsp&nbsp" +
      "<a href=\"http://creativecommons.org/licenses/by/4.0/\" target=\"_blank\" rel=\"nofollow\">CC BY 4.0</a>",

  displayFooter: true,

  // 打印按钮
  print: true,

  // page meta
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

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
    notice: [{
      path: '/',
      title: 'mica-mqtt 2.4.0 正式版发布',
      content: 'xxxx',
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
