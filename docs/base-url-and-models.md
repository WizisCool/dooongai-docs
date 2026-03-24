---
title: Base URL 与模型
---

# Base URL 与模型

`ai.dooo.ng` 提供兼容 OpenAI 风格的接口。

## Base URL

请在控制台或平台公告中确认最新地址。常见形式如下：

```txt
https://api.ai.dooo.ng/v1
```

> 若客户端需要分开配置 Host 与路径，请确保最终请求落在 `/v1/*` 路由上。

## 模型名

模型名以平台控制台展示为准。示例：

- `gpt-4o-mini`
- `gpt-4.1`
- `codex-*`（如平台提供）

### 选型建议

- 首次联通性测试：优先选择低成本模型
- 代码任务：优先选择代码能力更强的模型
- 长文本/复杂任务：按控制台能力说明选择高上下文模型

## SDK 示例（JavaScript）

```js
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.AI_DOOO_NG_API_KEY,
  baseURL: "https://api.ai.dooo.ng/v1"
});

const resp = await client.chat.completions.create({
  model: "gpt-4o-mini",
  messages: [{ role: "user", content: "Write a short hello world" }]
});

console.log(resp.choices[0]?.message?.content);
```

## 生产接入前检查

- 已验证 `GET /v1/models` 可返回列表
- 至少一个 Chat 请求可以成功返回
- 重试策略已覆盖 `429` 与 `5xx`
- 日志中无明文 API Key
