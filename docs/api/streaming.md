---
title: 流式输出（Streaming）
---

# 流式输出（Streaming）

流式输出适合对响应时延敏感的场景（如聊天 UI、代码补全）。

## curl 示例

```bash
curl https://ai.dooo.ng/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer ${dooong_api_key}" \
  -N \
  -d '{
    "model": "gpt-5.2",
    "stream": true,
    "messages": [
      {"role": "user", "content": "请分三段解释什么是 API 网关"}
    ]
  }'
```

## JavaScript SDK 示例

```js
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.dooong_api_key,
  baseURL: "https://ai.dooo.ng/v1"
});

const stream = await client.chat.completions.create({
  model: "gpt-5.2",
  stream: true,
  messages: [{ role: "user", content: "输出一个简短发布公告" }]
});

for await (const chunk of stream) {
  const token = chunk.choices?.[0]?.delta?.content;
  if (token) process.stdout.write(token);
}
```

## 实践建议

- 前端按 token 增量渲染，避免长时间白屏
- 设置请求超时，网络抖动时可回退到非流式
- 对用户取消操作做中断处理，减少无效消耗
