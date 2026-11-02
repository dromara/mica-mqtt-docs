---
title: mica-mqtt 大模型 MCP 服务接入
description: mica-mqtt 服务端 MCP 协议配置文档：说明在 mica-mqtt-server-spring-boot-starter 中开启 MCP 子配置的三个端点、yaml 配置示例与内置工具。
icon: lightbulb
---

### 启用配置

在 `mica-mqtt-server-spring-boot-starter` 中，需要开启 `http-listener` 并启用 `mcp` 子配置，默认提供 3 个端点：

| 端点 | 配置项 | 默认值 | 说明 |
| --- | --- | --- | --- |
| Stream HTTP 端点 | `mqtt.server.http-listener.mcp.endpoint` | `/mcp/message` | 流式 HTTP 消息端点 |
| SSE 端点 | `mqtt.server.http-listener.mcp.sse-endpoint` | `/mcp/sse` | SSE 连接端点 |
| SSE Message 端点 | `mqtt.server.http-listener.mcp.sse-message-endpoint` | `/mcp/message` | SSE 消息端点 |

配置示例：

```yaml
mqtt:
  server:
    http-listener:
      enable: true
      port: 18083
      basic-auth:
        enable: true
        username: mica
        password: mica
      mcp:
        enable: true
        endpoint: /mcp/message          # stream http endpoint
        sse-endpoint: /mcp/sse          # sse 端点
        sse-message-endpoint: /mcp/sse/message  # sse message 端点
```

![mica-mqtt 服务端 MCP 配置示例 =1115x1203](/assets/image/mica-mqtt-mcp-config.png)

注意：请求头添加的是 mica-mqtt-server 的 http api 默认的 basic 认证的密钥。

### 工具

![mica-mqtt MCP 内置的 mqtt 状态与 mqtt 发布工具 =1443x1547](/assets/image/mica-mqtt-mcp-tools.png)

注意：mica-mqtt-server mcp 目前内置了 mqtt 状态和 mqtt 发布2个 tools 工具，未来会添加更多。

## 效果

![通过 MCP 客户端查看 mqtt 状态的效果 =1083x1269](/assets/image/mica-mqtt-mcp-test1.png)

![通过 MCP 客户端发布 mqtt 消息的效果 =1507x925](/assets/image/mica-mqtt-mcp-test2.png)

## 相关文档

- [mica-mqtt-server-spring-boot-starter 使用文档](spring/server.md)
- [mica-mqtt HTTP REST API 接口文档](httpApi.md)
