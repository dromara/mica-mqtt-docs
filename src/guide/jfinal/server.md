---
title: mica-mqtt-server-jfinal-plugin 使用文档
icon: server
order: 2
---

## 科普视频

- [mqtt科普、mqttx、mica-mqtt的使用**视频**](https://www.bilibili.com/video/BV1wv4y1F7Av/)

## 使用

#### 1. 添加依赖
```xml
<dependency>
    <groupId>org.dromara.mica-mqtt</groupId>
    <artifactId>mica-mqtt-server-jfinal-plugin</artifactId>
    <version>${最新版本}</version>
</dependency>
```

#### 2. 删除 jfinal-demo 中的 slf4j-nop 依赖

#### 3. 添加 slf4j-log4j12
```xml
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-log4j12</artifactId>
    <version>1.7.33</version>
</dependency>
```

#### 4. 插件配置（2.5.x或以上）
```java
MqttServerPlugin plugin = new MqttServerPlugin();
plugin.config(mqttServerCreator -> {
    // mqttServerCreator 上有很多方法，详见 mica-mqtt-core
    mqttServerCreator.enableMqtt(1883).enableMqttWs();
});
```

#### 4. 插件配置（2.4.x或以下）
```java
MqttServerPlugin plugin = new MqttServerPlugin();
plugin.config(mqttServerCreator -> {
    // mqttServerCreator 上有很多方法，详见 mica-mqtt-core
    mqttServerCreator.port(1883).webPort(8083).websocketEnable(true);
});
```

#### 5. 插件使用
```java
// 更多方法可以直接使用 MqttServerKit 点出来
MqttServerKit.publish(String clientId, String topic, byte[] payload);
```
