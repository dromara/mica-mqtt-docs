---
url: /mqtt/keepalive.md
description: >-
  MQTT 心跳保活机制说明：客户端 keepAlive 与服务端心跳检测的超时计算规则，以及 mica-mqtt 中 keepaliveBackoff
  对实际断开判定时间的影响。
---
## 科普视频

* [mqtt科普、mqttx、mica-mqtt的使用**视频**](https://www.bilibili.com/video/BV1wv4y1F7Av/)

## mqtt 心跳超时

* 客户端默认心跳超时 60s
* 服务端默认心跳检测 120s
* 服务端会默认以 1.5 倍（`keepaliveBackoff` \* 2） **客户端心跳超时**进行判断，最长周期最长 2.5 倍。（所以客户端实际超时时间为 90s ~ 150s）

**拔网线**等**非正常断开**需要一个心跳检测周期才会触发断开。

## 相关文档

* [MQTT 遗嘱消息：设备离线通知](will.md)
* [MQTT clientId：重复使用会被踢下线](clientId.md)
* [mica-mqtt client 客户端使用文档（Java）](../guide/java/client.md)
