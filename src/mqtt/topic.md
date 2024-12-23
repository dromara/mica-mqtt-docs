---
title: mqtt Topic 规则
icon: hashtag
order: 1
---

## topic 通配符含义
- `/`：用来表示层次，比如 `a/b`，`a/b/c`。
- `#`：表示匹配 `>=0` 个层次，比如 `a/#` 就匹配 `a/`，`a/b`，`a/b/c`。单独的一个 `#` 表示匹配所有。不允许 `a#` 和 `a/#/c`。
- `+`：表示匹配一个层次，例如 `a/+` 匹配 `a/b`，`a/c`，不匹配 `a/b/c`。单独的一个 `+` 是允许的，`a+` 不允许，也可以和多层通配符一起使用，`+/tennis/# `、`sport/+/player1` 都有有效的。

### 共享订阅
**mica-mqtt** 支持两种**共享订阅**方式：

1. 共享订阅：订阅前缀 `$queue/`，多个客户端订阅了 `$queue/topic`，发布者发布到 `topic`，则只有一个客户端会接收到消息。
2. 分组订阅：订阅前缀 `$share/<group>/`，组客户端订阅了 `$share/group1/topic`、`$share/group2/topic`..，发布者发布到 `topic`，则消息会发布到每个 **group** 中，但是每个 **group** 中只有一个客户端会接收到消息。

**注意：** 如果发布的 `topic` 以 `/` 开头，例如：`/topic/test`，需要订阅 `$share/group1//topic/test`，另外 mica-mqtt 默认随机消息路由，共享订阅的多个客户端会随机收到消息。
