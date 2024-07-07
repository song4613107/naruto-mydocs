export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/naruto/Desktop/naruto/my-docs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"首页"} }],
  ["/interview/1-douyin.html", { loader: () => import(/* webpackChunkName: "interview_1-douyin.html" */"/Users/naruto/Desktop/naruto/my-docs/docs/.vuepress/.temp/pages/interview/1-douyin.html.js"), meta: {"title":"1.抖音剪映"} }],
  ["/interview/2-ali.html", { loader: () => import(/* webpackChunkName: "interview_2-ali.html" */"/Users/naruto/Desktop/naruto/my-docs/docs/.vuepress/.temp/pages/interview/2-ali.html.js"), meta: {"title":"2.阿里淘系P6"} }],
  ["/interview/", { loader: () => import(/* webpackChunkName: "interview_index.html" */"/Users/naruto/Desktop/naruto/my-docs/docs/.vuepress/.temp/pages/interview/index.html.js"), meta: {"title":"面试"} }],
  ["/interview/preface.html", { loader: () => import(/* webpackChunkName: "interview_preface.html" */"/Users/naruto/Desktop/naruto/my-docs/docs/.vuepress/.temp/pages/interview/preface.html.js"), meta: {"title":"面试模块介绍"} }],
  ["/interview/share.html", { loader: () => import(/* webpackChunkName: "interview_share.html" */"/Users/naruto/Desktop/naruto/my-docs/docs/.vuepress/.temp/pages/interview/share.html.js"), meta: {"title":"前端面试心得"} }],
  ["/js_docs/", { loader: () => import(/* webpackChunkName: "js_docs_index.html" */"/Users/naruto/Desktop/naruto/my-docs/docs/.vuepress/.temp/pages/js_docs/index.html.js"), meta: {"title":"JavaScript知识介绍"} }],
  ["/vue_react_docs/", { loader: () => import(/* webpackChunkName: "vue_react_docs_index.html" */"/Users/naruto/Desktop/naruto/my-docs/docs/.vuepress/.temp/pages/vue_react_docs/index.html.js"), meta: {"title":"前端框架介绍"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/naruto/Desktop/naruto/my-docs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
