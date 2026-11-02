---
url: /mqtt/will.md
description: MQTT 遗嘱消息机制说明：客户端异常断开时由服务端代发遗嘱消息，常用于设备离线通知，以及 mica-mqtt 客户端 willMessage 的配置方式。
---
## 科普视频

* [mqtt科普、mqttx、mica-mqtt的使用**视频**](https://www.bilibili.com/video/BV1wv4y1F7Av/)

## MQTT 遗嘱消息场景

* 当客户端断开连接时，发送给相关的订阅者的遗嘱消息。在设备 A 进行连接时候，遗嘱消息设定为 `offline`，手机App B 订阅这个遗嘱主题。
* 当 A 异常断开时，手机App B 会收到这个 `offline` 的遗嘱消息，从而知道设备 A 离线了。

## 相关文档

* [MQTT 心跳保活：keepAlive 超时机制](keepalive.md)
* [MQTT clientId：重复使用会被踢下线](clientId.md)
* [mica-mqtt client 客户端使用文档（Java）](../guide/java/client.md)
