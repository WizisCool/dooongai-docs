---
title: 快速开始
---

# 快速开始

本指南帮助你在 5 分钟内完成 API 接入。

> `ai.dooo.ng`（DooongAI）提供 OpenAI 兼容接口，你可以用大多数现有 SDK 和工具直接接入。

## 1. 注册并登录

访问 `https://ai.dooo.ng` 完成注册与登录。

## 2. 创建 API Key

在控制台创建 API Key，并妥善保存。请勿将 Key 提交到代码仓库。

## 3. 配置请求参数

- `baseURL`: 平台提供的 API 地址
- `apiKey`: 你的密钥
- `model`: 你要调用的模型名

建议使用环境变量：

```bash
export AI_DOOO_NG_BASE_URL="https://api.ai.dooo.ng/v1"
export AI_DOOO_NG_API_KEY="<YOUR_API_KEY>"
```

## 4. 发送首个请求

```bash
curl https://api.ai.dooo.ng/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer ${AI_DOOO_NG_API_KEY}" \
  -d '{
    "model": "gpt-4o-mini",
    "messages": [
      {"role": "user", "content": "hello"}
    ]
  }'
```

如成功返回内容，说明接入完成。

## 5. 接入建议（参考 Sub2API 常见实践）

- 优先使用 HTTPS 接口地址
- 服务端保存 API Key，不在前端暴露
- 生产环境做好请求限流与重试退避
- 多模型场景先在控制台确认可用模型再上线
