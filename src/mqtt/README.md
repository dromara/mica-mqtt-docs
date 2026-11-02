---
title: MQTT 协议科普
description: MQTT 协议入门与 mica-mqtt 使用要点：涵盖 Topic 规则与通配符、遗嘱消息、保留消息、心跳保活、clientId 唯一性、QoS 等级选择，以及常用客户端工具推荐。
icon: globe
---

MQTT 是一种轻量的发布/订阅消息传输协议，广泛用于物联网设备接入。mica-mqtt 同时提供 Broker 服务端与 Client 客户端，下面几篇文档帮你快速理解协议本身的关键机制。

## 协议机制

- [MQTT Topic 规则：通配符与共享订阅](topic.md) —— 主题层级划分，`#` 与 `+` 通配符的匹配范围，以及 mica-mqtt 支持的 `$queue` 与 `$share` 两种共享订阅前缀。
- [MQTT 遗嘱消息：设备离线通知](will.md) —— 客户端异常断开时由服务端代发遗嘱消息，常用于通知订阅方设备已离线。
- [MQTT 保留消息：订阅即得最新状态](retain.md) —— 服务端为指定主题保留最后一条消息，新订阅者建立订阅时立即收到。
- [MQTT 心跳保活：keepAlive 超时机制](keepalive.md) —— 客户端与服务端的心跳周期，以及断线判定的实际超时时间是怎么算出来的。
- [MQTT clientId：重复使用会被踢下线](clientId.md) —— clientId 的唯一性要求，以及兼容老业务时可用的替代方案。

## 选型与工具

- [MQTT 消息质量 QoS 0/1/2 区别与选型](qos.md) —— 三种 QoS 的特点、适用场景，以及 mica-mqtt-client 的发送性能参考值。
- [MQTT 客户端工具：桌面端与多语言库](tool.md) —— mqttx 等桌面工具，以及 Android、iOS、JavaScript、Dart 的客户端库。

## 视频教程

- [mqtt 科普、mqttx、mica-mqtt 的使用视频](https://www.bilibili.com/video/BV1wv4y1F7Av/)

## 下一步

- 动手接入请看 [mica-mqtt 快速上手](../guide/README.md)。
