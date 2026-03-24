---
title: API 接口总览
---

# API 接口总览

DooongAI 提供 OpenAI 兼容 API。你可以沿用 OpenAI SDK 与调用方式，只需替换 `baseURL` 与 `apiKey`。

## 基础配置

- Base URL: `https://ai.dooo.ng/v1`
- 鉴权头：`Authorization: Bearer <YOUR_API_KEY>`
- 数据格式：`application/json`

## 推荐先掌握的必要接口

1. `GET /v1/models`：获取模型列表
2. `POST /v1/chat/completions`：发起对话请求

## 获取模型列表

```bash
curl https://ai.dooo.ng/v1/models \
  -H "Authorization: Bearer ${dooong_api_key}"
```

返回成功后，可从 `data[*].id` 中选择可用模型。

## 发起最小对话请求

```bash
curl https://ai.dooo.ng/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer ${dooong_api_key}" \
  -d '{
    "model": "gpt-5.2",
    "messages": [
      {"role": "user", "content": "你好，请介绍一下你自己"}
    ]
  }'
```

## 更多接口与参数

除以上必要接口外，建议直接参考 OpenAI 官方文档：

- API 总览：`https://platform.openai.com/docs/api-reference`
- Chat Completions：`https://platform.openai.com/docs/api-reference/chat`
- Streaming：`https://platform.openai.com/docs/api-reference/streaming`

在 OpenAI 文档示例中，将 `baseURL` 替换为 DooongAI 地址即可。
