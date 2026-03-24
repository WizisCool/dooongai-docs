---
title: API 请求示例
---

# API 请求示例

本文给出 DooongAI 的必要接口示例，便于直接复制验证。

## 基础信息

- Base URL: `https://api.ai.dooo.ng/v1`
- 鉴权头：`Authorization: Bearer <YOUR_API_KEY>`
- 内容类型：`Content-Type: application/json`

## 1) 查看可用模型

```bash
curl https://api.ai.dooo.ng/v1/models \
  -H "Authorization: Bearer ${AI_DOOO_NG_API_KEY}"
```

## 2) Chat Completions（非流式）

```bash
curl https://api.ai.dooo.ng/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer ${AI_DOOO_NG_API_KEY}" \
  -d '{
    "model": "gpt-4o-mini",
    "messages": [
      {"role": "system", "content": "You are a helpful assistant."},
      {"role": "user", "content": "用一句话介绍 DooongAI。"}
    ],
    "temperature": 0.3
  }'
```

## 3) Chat Completions（JSON 输出约束）

```bash
curl https://api.ai.dooo.ng/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer ${AI_DOOO_NG_API_KEY}" \
  -d '{
    "model": "gpt-4o-mini",
    "messages": [
      {"role": "user", "content": "返回一个包含 name 和 summary 的 JSON"}
    ],
    "response_format": {"type": "json_object"}
  }'
```

## 4) JavaScript SDK 示例

```js
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.AI_DOOO_NG_API_KEY,
  baseURL: "https://api.ai.dooo.ng/v1"
});

const completion = await client.chat.completions.create({
  model: "gpt-4o-mini",
  messages: [{ role: "user", content: "写一个 3 点 API 接入建议" }]
});

console.log(completion.choices[0]?.message?.content);
```

## 更多用法

除必要接口外，其余参数、接口能力、最佳实践请参考 OpenAI 官方文档：

- `https://platform.openai.com/docs/api-reference`
