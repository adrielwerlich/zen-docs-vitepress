import { defineConfig } from "vitepress";
debugger;
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Zen Erp Docs",
  description: "Documentação ZEN ERP",
  transformHead: ({ pageData }) => {
    const head = [];
    head.push([
      "script",
      { src: "https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js" },
    ]);
    // head.push(['meta', { property: 'og:description', content: pageData.frontmatter.description }])
    return head;
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],

    search: {
      provider: "local",
      // excluding pages from search based on url pattern. For example, if url contain catalog, exclude other clients
      options: {
        _render(src, env, md) {
          if (env.relativePath.includes("account")) {
            debugger;
          }
          if (src.includes("disabledFor")) {
            const regex = /disabledFor:\s*\[(.*?)\]/s;
            const match = src.match(regex);

            if (match) {
              const values = match[1].split(",").map((value) => value.trim());
              console.log("$$$", values); // Output: ["hanas", "john", "doe"]
            }
          }
          // console.log(src, env, md);
          const html = md.render(src, env);
          if (env.frontmatter?.search === false) return "";
          if (env.relativePath.startsWith("some/path")) return "";
          return html;
        },
      },
    },
  },
});
