import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  lang: "en-US",

  title: "小玄 x 图解计算机基础",
  description:
    "图解计算机网络、操作系统、计算机组成、数据库，让天下没有难懂的八股文！",

  theme: defaultTheme({
    logo: "https://sns-avatar-qc.xhscdn.com/avatar/6649d0c156cd5c043e7b13f6.jpg?imageView2/2/w/540/format/webp|imageMogr2/strip2",

    navbar: ["/", "/get-started"],
  }),

  bundler: viteBundler(),
});
