---
url: /guide/jfinal/index.md
description: >-
  在 JFinal 应用中接入 mica-mqtt：通过 mica-mqtt-client-jfinal-plugin 与
  mica-mqtt-server-jfinal-plugin 集成，含插件注册、主题订阅、消息发送与监听示例代码。
---
JFinal 项目引入对应的 plugin 即可，客户端与服务端通过插件配置。

* [mica-mqtt-client-jfinal-plugin 使用文档](client.md) —— 在 Config 中注册客户端插件、启动后订阅主题、发送消息，以及监听器示例代码。
* [mica-mqtt-server-jfinal-plugin 使用文档](server.md) —— 注册服务端插件、开启 MQTT、WebSocket 与 HTTP API，并通过 MqttServerKit 发送消息。

> 需要普通 Java 应用的接入方式，请看 [mica-mqtt client 客户端使用文档（Java）](../java/client.md)。
