---
title: 常见问题
description: mica-mqtt 使用过程中的常见问题解答目录：涵盖接入报错、连接异常、部署运维、安全证书与依赖工具等方向的排查思路与解决方案入口。
icon: question
---

mica-mqtt 在实际使用中遇到问题时，先按现象在这里查找。

- [mica-mqtt 常见问题汇总](faq.md) —— 17 个高频问题的完整解答。

常见问题分类：

- **接入报错** —— `IMqttMessageListener Bean not found` 空指针、解码异常、`NoSuchMethodError`。
- **连接异常** —— clientId 重复被踢下线、结合 emqx 时高压重连、心跳超时的判定规则。
- **部署运维** —— nginx tcp 负载均衡、Mqtt 集群、服务器参数调优、SNAPSHOT 版本使用。
- **安全与证书** —— ssl 证书申请、自签证书与双向认证。
- **依赖与工具** —— maven 拉包慢、浏览器 mqtt.js websocket 连接、常用客户端工具。
