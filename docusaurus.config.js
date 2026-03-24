// @ts-check

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const config = {
  title: "DooongAI 文档",
  tagline: "公益性质的一站式 AI 模型 API 中转服务",
  favicon: "img/logo.png",

  url: isGitHubPages ? "https://wiziscool.github.io" : "https://ai.dooo.ng",
  baseUrl: isGitHubPages ? "/dooongai-docs/" : "/",

  organizationName: "ai-dooo-ng",
  projectName: "dooongai-docs",

  onBrokenLinks: "throw",

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn"
    }
  },

  i18n: {
    defaultLocale: "zh-CN",
    locales: ["zh-CN"]
  },

  presets: [
    [
      "classic",
      {
        docs: {
          path: "docs",
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js")
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ],

  themeConfig: {
    image: "img/social-card.svg",
    navbar: {
      logo: {
        alt: "DooongAI Logo",
        src: "img/logo.png"
      },
      title: "DooongAI Docs",
      items: [
        {
          type: "docSidebar",
          sidebarId: "docsSidebar",
          position: "left",
          label: "文档"
        },
        {
          href: "https://ai.dooo.ng",
          label: "主站",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "文档",
          items: [
            {
              label: "快速开始",
              to: "/getting-started"
            },
            {
              label: "API 鉴权",
              to: "/api-auth"
            }
          ]
        },
        {
          title: "平台",
          items: [
            {
              label: "ai.dooo.ng",
              href: "https://ai.dooo.ng"
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ai.dooo.ng`
    },
    prism: {
      additionalLanguages: ["bash", "json", "yaml"]
    }
  }
};

module.exports = config;
