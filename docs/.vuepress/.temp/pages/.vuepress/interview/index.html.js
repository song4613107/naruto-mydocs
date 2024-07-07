import comp from "/Users/naruto/Desktop/naruto/my-docs/docs/.vuepress/.temp/pages/.vuepress/interview/index.html.vue"
const data = JSON.parse("{\"path\":\"/.vuepress/interview/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Hello\",\"slug\":\"hello\",\"link\":\"#hello\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\".vuepress/interview/README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
