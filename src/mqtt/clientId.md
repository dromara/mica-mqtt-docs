---
title: MQTT clientId：重复使用会被踢下线
description: MQTT clientId 使用规范：clientId 必须全局唯一，重复使用会导致客户端被服务端踢下线，mica-mqtt 提供 IMqttServerUniqueIdService 兼容老业务。
icon: passport
order: 5
---

## 科普视频

- [mqtt科普、mqttx、mica-mqtt的使用**视频**](https://www.bilibili.com/video/BV1wv4y1F7Av/)

## 多个客户端使用相同 clientId 会导致前者被踢下线（周期性互踢，频繁上下线）
- clientId 对于在 mqtt 中起着十分重要的作用，请不要随意设置，建议按照产品、设备、sn等维度生成，并且**确保唯一**。
- 如果实在是要兼容老业务，mica-mqtt 中可以实现 `IMqttServerUniqueIdService` 接口（1.1.4开始支持），返回的 `uniqueId` 会替代 clientId，后续的场景也是需要使用这个 `uniqueId` 来处理。

## 相关文档

- [MQTT 心跳保活：keepAlive 超时机制](keepalive.md)
- [MQTT 遗嘱消息：设备离线通知](will.md)
- [mica-mqtt server 服务端使用文档（Java）](../guide/java/server.md)
