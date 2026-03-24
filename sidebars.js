/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    "index",
    {
      type: "category",
      label: "接入指南",
      items: ["getting-started", "api-auth", "base-url-and-models"]
    },
    {
      type: "category",
      label: "API 接口",
      items: [
        "api-overview",
        "api-request-examples",
        "api-streaming",
        "api-error-handling"
      ]
    }
  ]
};

module.exports = sidebars;
