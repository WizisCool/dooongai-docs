/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    "index",
    {
      type: "category",
      label: "接入指南",
      items: [
        "guides/getting-started",
        "guides/api-auth",
        "guides/base-url-and-models"
      ]
    },
    {
      type: "category",
      label: "API 接口",
      items: [
        "api/overview",
        "api/request-examples",
        "api/streaming",
        "api/error-handling"
      ]
    },
    {
      type: "category",
      label: "常见问题",
      collapsed: false,
      items: ["faq/cloudflare-challenge"]
    }
  ]
};

module.exports = sidebars;
