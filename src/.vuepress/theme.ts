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

/**
 * 发布日期：优先用 frontmatter 的 date/time，没有则退回 git 首次提交时间。
 * 插件只认 frontmatter 的 date/time，不填的话 JSON-LD 与 article:published_time 会整条缺失。
 */
const getPublishedTime = (page: {
  frontmatter: { date?: string | Date; time?: string | Date };
  data?: { git?: { createdTime?: string | Date } };
}): string | undefined => {
  const raw =
    page.frontmatter.date ?? page.frontmatter.time ?? page.data?.git?.createdTime;
  if (!raw) return undefined;
  const date = new Date(raw);
  return Number.isNaN(date.getTime()) ? undefined : date.toISOString();
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
      ogp: (ogp, page) => {
        const image = cleanImageUrl(ogp["og:image"]);
        const description = ogp["og:description"] || page.excerpt || "";
        const publishedTime = getPublishedTime(page);

        return {
          ...ogp,
          "og:image": image,
          // 社交卡片跟 og 用同一张图。之前 twitter:image 写死成 logo，
          // 而 og:image 取的是正文首图，两边不一致，Twitter/X 会抓错图。
          "twitter:card": "summary_large_image",
          "twitter:title": ogp["og:title"],
          "twitter:description": description,
          "twitter:image": image,
          ...(publishedTime ? { "article:published_time": publishedTime } : {}),
        };
      },
      // JSON-LD：补 url / inLanguage / description / image / publisher
      jsonLd: (jsonLD, page) => {
        const publishedTime = getPublishedTime(page);

        return {
          ...jsonLD,
          "@context": "https://schema.org",
          // 技术文档用 TechArticle 比 Article 更精确
          "@type":
            jsonLD["@type"] === "Article"
              ? ("TechArticle" as unknown as typeof jsonLD["@type"])
              : jsonLD["@type"],
          url: `${SITE_URL}${page.path}`,
          inLanguage: page.lang ?? "zh-CN",
          description: page.frontmatter.description ?? page.excerpt ?? "",
          image: normalizeImages(
            (jsonLD as { image?: string | string[] }).image
          ),
          ...(publishedTime ? { datePublished: publishedTime } : {}),
          publisher: {
            "@type": "Organization",
            name: "如梦技术",
            url: SITE_URL,
          },
        };
      },
    },
    icon: {
      assets: "fontawesome",
      // 离线打包图标：只把站内实际用到的图标打进产物，
      // 不再从 cdn.jsdelivr.net 拉 fontawesome（国内网络不稳时图标会变空框）。
      // 依赖 @fortawesome/fontawesome-svg-core 与 @fortawesome/free-solid-svg-icons。
      offline: true,
    },
    slimsearch: {
      indexContent: true,
      suggestion: true
    },
    notice: [{
      path: '/',
      title: 'mica-mqtt 2.6.14 发布',
      content: 'mica-mqtt 2.6.13 发布，新增 connAckTimeout 配置项，修复等待 CONNACK 期间重复重连、重复打开 Socket 的问题',
      // path 为 '/' 会被所有页面命中，默认每次新会话都弹一次、还压住页面标题。
      // showOnce 用 localStorage 记住已关闭状态，同一条公告只在首次访问时出现。
      showOnce: true,
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
