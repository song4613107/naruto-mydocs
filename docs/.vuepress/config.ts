import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  lang: "en-US",

  title: "小玄 x 计算机基础",
  description:
    "详细解析HTML、CSS、JavaScript、Vue、React、浏览器、计算机网络，让天下没有难懂的八股文！",

  theme: defaultTheme({
    logo: "https://sns-avatar-qc.xhscdn.com/avatar/6649d0c156cd5c043e7b13f6.jpg?imageView2/2/w/540/format/webp|imageMogr2/strip2",

    navbar: ["/", "/interview/", "/js_docs/", "/vue_react_docs/"],

    sidebar: [
      {
        text: "一、前言", // 必要的
        path: "/interview/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        children: ["/interview/preface"],
      },
      {
        text: "二、面试真题",
        path: "/interview/",
        collapsable: false,
        sidebarDepth: 2,
        children: ["/interview/1-douyin", "/interview/2-ali"],
      },
      {
        text: "三、面试心得",
        path: "/interview/",
        collapsable: false,
        sidebarDepth: 2,
        children: ["/interview/share"],
      },
    ],
  }),

  bundler: viteBundler(),
});
