import { defineUserConfig } from "vuepress";
import { slimsearchPlugin } from '@vuepress/plugin-slimsearch'

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  theme,

  plugins: [
    slimsearchPlugin({
      indexContent: true,
      suggestion: true
    }),
  ],

});
