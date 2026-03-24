---
title: API 鉴权
---

# API 鉴权

所有请求均通过 Bearer Token 鉴权。

## 请求头

```http
Authorization: Bearer <YOUR_API_KEY>
Content-Type: application/json
```

## 安全建议

- 不要在前端明文暴露密钥
- 使用环境变量注入密钥
- 为不同环境（dev/staging/prod）使用不同密钥
- 定期轮换密钥

## 常见错误码

- `401 Unauthorized`：Key 不正确、已失效或请求头格式错误
- `429 Too Many Requests`：触发速率限制，建议降低并发并添加指数退避
