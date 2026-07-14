import {defineUserConfig} from "vuepress";
import {llmsPlugin} from '@vuepress/plugin-llms'
import {viteBundler} from '@vuepress/bundler-vite'
import zipPack from 'vite-plugin-zip-pack'
import path from 'node:path'
import {fileURLToPath} from 'node:url'
import theme from "./theme.js";

const dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(dirname, 'dist');

// @ts-ignore
export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "mica-mqtt",
      description: "mica-mqtt 文档",
    }
  },

  theme,

  bundler: viteBundler({
    viteOptions: {
      plugins: [
        zipPack({
          inDir: distDir,
          outDir: dirname,
          outFileName: 'dist.zip',
        }),
      ],
    },
  }),

  plugins: [
    llmsPlugin({
      llmsTxt: true,
      llmsFullTxt: true
    }),
  ],
});
