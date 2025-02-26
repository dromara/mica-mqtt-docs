---
title: mqtt 心跳保活
icon: heart-pulse
order: 4
---

## 科普视频

- [mqtt科普、mqttx、mica-mqtt的使用**视频**](https://www.bilibili.com/video/BV1wv4y1F7Av/)

## mqtt 心跳超时
- 客户端默认心跳超时 60s
- 服务端默认心跳检测 120s
- 服务端会默认以 1.5 倍（`keepaliveBackoff` * 2） **客户端心跳超时**进行判断，最长周期最长 2.5 倍。（所以客户端实际超时时间为 90s ~ 150s）

**拔网线**等**非正常断开**需要一个心跳检测周期才会触发断开。
