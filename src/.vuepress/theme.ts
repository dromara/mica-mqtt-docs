import { hopeTheme } from "vuepress-theme-hope";

import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";

const SITE_URL = "https://mica-mqtt.dreamlu.net";

/**
 * 插件提取 og:image / JSON-LD image 用的是粗正则，
 * 会把 markdown 图片标题（`![alt](url "标题")`）一起截进 URL，这里去掉尾部标题
 */
const cleanImageUrl = (url: string): string =>
  url.replace(/\s+"[^"]*"\s*$/, "").trim();

const normalizeImages = (image?: string | string[]): string[] => {
  const list = Array.isArray(image) ? image : image ? [image] : [];
  const cleaned = list.map(cleanImageUrl);
  return cleaned.length ? cleaned : [`${SITE_URL}/logo.png`];
};

export default hopeTheme({
  hostname: SITE_URL,

  author: {
    name: "如梦技术",
    url: SITE_URL,
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
    // SEO：canonical / og:image 兜底 / twitter 卡片 / JSON-LD 增强
    seo: {
      // 首选地址。必须传字符串前缀，传 true 是空操作，一个标签都不会生成
      canonical: SITE_URL,
      // 正文没有配图时的 og:image 兜底，需要绝对地址
      fallBackImage: `${SITE_URL}/logo.png`,
      // 修正 og:image 里被截进来的 markdown 标题
      ogp: (ogp) => ({
        ...ogp,
        "og:image": cleanImageUrl(ogp["og:image"]),
      }),
      // 主题只在 frontmatter 有 banner/cover 时才生成 twitter 标签，这里统一兜底
      customHead: (head, page) => {
        const description = page.frontmatter.description ?? page.excerpt ?? "";
        head.push(["meta", { name: "twitter:card", content: "summary_large_image" }]);
        head.push(["meta", { name: "twitter:title", content: page.title }]);
        if (description)
          head.push(["meta", { name: "twitter:description", content: description }]);
        head.push(["meta", { name: "twitter:image", content: `${SITE_URL}/logo.png` }]);
      },
      // JSON-LD：补 url / inLanguage / description / image / publisher
      jsonLd: (jsonLD, page) => ({
        ...jsonLD,
        "@context": "https://schema.org",
        // 技术文档用 TechArticle 比 Article 更精确
        "@type":
          jsonLD["@type"] === "Article"
            ? ("TechArticle" as unknown as typeof jsonLD["@type"])
            : jsonLD["@type"],
        url: `${SITE_URL}${page.path}`,
        inLanguage: page.lang ?? "zh-CN",
        description: page.frontmatter.description ?? "",
        image: normalizeImages(
          (jsonLD as { image?: string | string[] }).image
        ),
        publisher: {
          "@type": "Organization",
          name: "如梦技术",
          url: SITE_URL,
        },
      }),
    },
    icon: {
      assets: "fontawesome"
    },
    slimsearch: {
      indexContent: true,
      suggestion: true
    },
    notice: [{
      path: '/',
      title: 'mica-mqtt 2.6.13 发布',
      content: 'mica-mqtt 2.6.13 发布，mica-mqtt-client 接口支持 Default Method\n',
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
