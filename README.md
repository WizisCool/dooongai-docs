# DooongAI 文档站

`ai.dooo.ng` 的产品名为 `DooongAI`，是一个公益性质的一站式 AI 模型 API 中转服务，面向 Codex、GPT 等模型以及 OpenCode、OpenClaw 等工具的统一接入。

本仓库使用 `Docusaurus` 构建文档，部署目标路径为 `https://ai.dooo.ng/docs/`。

## 技术栈

- Docusaurus (中文站点)
- Node.js 20+

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

## 本地部署版本

### 方式一：Node 直接部署（推荐开发测试）

```bash
npm install
npm run build
npm run serve
```

默认访问：`http://localhost:3000`

### 方式二：静态产物一键打包

Windows（生成 zip）：

```bat
scripts\\package-static-win.bat
```

Linux（生成 tar.gz）：

```bash
chmod +x scripts/package-static-linux.sh
./scripts/package-static-linux.sh
```

产物输出目录：`release/`

## 目录说明

- `docs/guides/` 接入指南
- `docs/api/` API 接口文档
- `docs/faq/` 常见问题排障
- `static/` 静态资源（图片、附件）
- `docusaurus.config.js` 站点配置
- `sidebars.js` 文档侧边栏

## 部署说明

1. 执行 `npm run build` 生成静态文件到 `build/`。
2. 将 `build/` 目录内容部署到服务器网站目录的 `/docs`。
3. 确保站点将 `https://ai.dooo.ng/docs/` 直接指向该静态目录。
