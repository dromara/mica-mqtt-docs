---
title: mqtt 遗嘱消息
icon: message
order: 2
---

## 科普视频

- [mqtt科普、mqttx、mica-mqtt的使用**视频**](https://www.bilibili.com/video/BV1wv4y1F7Av/)

## MQTT 遗嘱消息场景

- 当客户端断开连接时，发送给相关的订阅者的遗嘱消息。在设备 A 进行连接时候，遗嘱消息设定为 `offline`，手机App B 订阅这个遗嘱主题。
- 当 A 异常断开时，手机App B 会收到这个 `offline` 的遗嘱消息，从而知道设备 A 离线了。
