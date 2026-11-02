---
title: 普通 Java 应用接入
description: 在普通 Java 应用中接入 mica-mqtt 的客户端与服务端：Maven 依赖引入、MqttClient 初始化与服务端启动配置，含 WebSocket、HTTP API 与全局订阅说明。
icon: fire
---

不依赖任何 Web 框架时，直接使用 `mica-mqtt-client` 和 `mica-mqtt-server` 两个模块。

- [mica-mqtt client 客户端使用文档（Java）](client.md) —— MqttClient 初始化、订阅与发送、接口代理，以及 2.2.9 起支持的全局订阅。
- [mica-mqtt server 服务端使用文档（Java）](server.md) —— MqttServer 启动、消息监听、SSL 与 WebSocket、HTTP API 的开启方式与依赖说明。

> 需要 Spring Boot、Solon 或 JFinal 的快速接入，请看 [mica-mqtt 快速上手](../README.md)。
