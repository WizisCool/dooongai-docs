---
title: Cloudflare 质询或阻止
---

# Cloudflare 质询或阻止

如果你在调用 DooongAI API 时遇到 Cloudflare 质询页面、403 阻止或安全校验，请先检查 Base URL 是否正确。

## 先检查 Base URL（最重要）

必须使用：

```txt
https://ai.dooo.ng/v1
```

> 只有调用带 `/v1` 的 API 路径，才会绕过 Cloudflare 质询。

## 常见错误写法

- `https://ai.dooo.ng`（缺少 `/v1`）

## 排查步骤

1. 在客户端配置中把 Base URL 改为 `https://ai.dooo.ng/v1`
2. 重新请求 `GET /v1/models` 验证
3. 再发起 `POST /v1/chat/completions`

## 验证示例

```bash
curl https://ai.dooo.ng/v1/models \
  -H "Authorization: Bearer ${dooong_api_key}"
```

如果模型列表返回正常，说明已绕过 Cloudflare 质询并成功进入 API 网关链路。
