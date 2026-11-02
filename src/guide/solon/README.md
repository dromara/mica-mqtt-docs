---
title: Solon 应用接入
description: 在 Solon 应用中接入 mica-mqtt：通过 mica-mqtt-client-solon-plugin 与 mica-mqtt-server-solon-plugin 集成，含配置项、消息监听、Token 校验与监控对接。
icon: fire
---

Solon 项目引入对应的 plugin 即可，客户端与服务端配置统一写在 `application.yml` 里。

- [mica-mqtt-client-solon-plugin 使用文档](client.md) —— 配置项、可实现接口、上下线监听、订阅示例、共享订阅 topic 说明与 MqttClientTemplate 用法。
- [mica-mqtt-server-solon-plugin 使用文档](server.md) —— 服务端配置项、消息监听接口、HTTP API 自定义 Token 校验，以及 Prometheus + Grafana 监控对接。

> 需要普通 Java 应用的接入方式，请看 [mica-mqtt client 客户端使用文档（Java）](../java/client.md)。
