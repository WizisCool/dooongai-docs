# DooongAI 文档站

`ai.dooo.ng` 的产品名为 `DooongAI`，是一个公益性质的一站式 AI 模型 API 中转服务，面向 Codex、GPT 等模型以及 OpenCode、OpenClaw 等工具的统一接入。

本仓库使用 `Docusaurus` 构建文档，并通过 `GitHub Actions` 自动部署到 `GitHub Pages`。

## 技术栈

- Docusaurus (中文站点)
- Node.js 20+
- GitHub Actions + GitHub Pages

## 本地开发

```bash
npm install
npm run start
```

默认地址：`http://localhost:3000`

## 构建

```bash
npm run build
```

构建产物目录：`build/`

## 目录说明

- `docs/` 文档正文（接入指南、工具教程、FAQ）
- `static/` 静态资源（图片、附件）
- `docusaurus.config.js` 站点配置
- `sidebars.js` 文档侧边栏
- `.github/workflows/deploy.yml` 自动部署流程

## 部署说明

1. 在 GitHub 仓库启用 Pages，并将 Source 设置为 `GitHub Actions`。
2. 提交到默认分支后，`deploy.yml` 会自动构建并发布站点。
3. 如需自定义域名，可在仓库中添加 `static/CNAME`。
