---
title: mica mqtt client 客户端使用文档
icon: microchip
order: 1
---

## 科普视频

- [mqtt科普、mqttx、mica-mqtt的使用**视频**](https://www.bilibili.com/video/BV1wv4y1F7Av/)

## 使用

#### 1. 添加依赖

```xml
<dependency>
  <groupId>org.dromara.mica-mqtt</groupId>
  <artifactId>mica-mqtt-client</artifactId>
  <version>${mica-mqtt.version}</version>
</dependency>
```

#### 2. 客户端使用
```java
// 初始化 mqtt 客户端
MqttClient client = MqttClient.create()
    .ip("127.0.0.1")                // mqtt 服务端 ip 地址
    .port(1883)                     // 默认：1883
    .username("admin")              // 账号
    .password("123456")             // 密码
    .version(MqttVersion.MQTT_5)    // 默认：3_1_1
    .clientId("xxxxxx")             // 非常重要务必手动设置，一般设备 sn 号，默认：MICA-MQTT- 前缀和 36进制的纳秒数
    .readBufferSize(512)            // 消息一起解析的长度，默认：为 8092 （mqtt 消息最大长度）
    .maxBytesInMessage(1024 * 10)   // 最大包体长度,如果包体过大需要设置此参数，默认为： 10M (10*1024*1024)
    .keepAliveSecs(120)             // 默认：60s
    .timeout(10)                    // 超时时间，t-io 配置，可为 null，为 null 时，t-io 默认为 5
    .reconnect(true)                // 是否重连，默认：true
    .reInterval(5000)               // 重连重试时间，reconnect 为 true 时有效，t-io 默认为：5000
    .willMessage(builder -> {
        builder.topic("/test/offline").messageText("down");    // 遗嘱消息
    })
    .connectListener(new IMqttClientConnectListener() {
        @Override
        public void onConnected(ChannelContext context, boolean isReconnect) {
            logger.info("链接服务器成功...");
        }
        
        @Override
        public void onDisconnect(ChannelContext channelContext, Throwable throwable, String remark, boolean isRemove) {
            logger.info("与链接服务器断开连接...");
        }
    })
    .properties()                   // mqtt5 properties
    .connectSync();                 // 同步连接，也可以使用 connect()，可以避免 broker 没启动照成启动卡住。

    // 消息订阅，同类方法 subxxx
    client.subQos0("/test/#", (context, topic, message, payload) -> {
        logger.info(topic + '\t' + new String(payload, StandardCharsets.UTF_8));
    });
    // 取消订阅
    client.unSubscribe("/test/#");

    // 发送消息
    client.publish("/test/client", "mica最牛皮".getBytes(StandardCharsets.UTF_8));

    // 断开连接
    client.disconnect();
    // 重连
    client.reconnect();
    // 停止
    client.stop();
```

#### 3. 全局订阅（2.2.9开始支持）

**说明**：由于 mica-mqtt-client 采用传统 mq 的思维进行的开发。其实是跟 mqtt 部分是有违背的。传统 mqtt client 不会按 topic 进行不通的订阅，采用的是这里的**全局订阅**方式。

**注意**：全局订阅也是可以监听到 `subQos0`、`subQos1`、`subQos2` 的消息。采用 `globalSubscribe`，保留 session 停机重启，依然可以接受到消息。

```java
// 初始化 mqtt 客户端
MqttClient.create()
    .ip("127.0.0.1")
    .port(1883)
    .username("admin")
    .password("123456")
    // 采用 globalSubscribe，保留 session 停机重启后，可以接受到离线消息，注意：clientId 要不能变化。
    .clientId("globalTest")
    .cleanSession(false)
    // 全局订阅的 topic
    .globalSubscribe("/test", "/test/123", "/debug/#")
    // 全局监听，也会监听到服务端 http api 订阅的数据
    .globalMessageListener((context, topic, message, payload) -> {
        System.out.println("topic:\t" + topic);
        System.out.println("payload:\t" + ByteBufferUtil.toString(payload));
    })
    .connectSync();
```
