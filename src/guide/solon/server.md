---
title: mica-mqtt-server-solon-plugin 使用文档
icon: server
order: 2
---

本插件基于 https://gitee.com/peigenlpy/mica-mqtt-solon-plugin 调整合并到官方（已经过作者同意）。

## 科普视频

- [mqtt科普、mqttx、mica-mqtt的使用**视频**](https://www.bilibili.com/video/BV1wv4y1F7Av/)

## 版本兼容
| 要求  | Solon 版本 |
|-----|-----------|
| 最高  | 3.x   |
| 最低  | 2.8.0 |

## 一、添加依赖

```xml
<dependency>
    <groupId>org.dromara.mica-mqtt</groupId>
    <artifactId>mica-mqtt-server-solon-plugin</artifactId>
    <version>${version}</version>
</dependency>
```

## 二、mqtt 服务

### 2.1 配置项

```yaml
mqtt:
  server:
    enabled: true               # 是否开启服务端，默认：true
#    ip: 0.0.0.0                # 服务端 ip 默认为空，0.0.0.0，建议不要设置
    port: 1883                  # 端口，默认：1883
    name: Mica-Mqtt-Server      # 名称，默认：Mica-Mqtt-Server
    buffer-allocator: HEAP      # 堆内存和堆外内存，默认：堆内存
    heartbeat-timeout: 120000   # 心跳超时，单位毫秒，默认: 1000 * 120
    read-buffer-size: 8KB       # 接收数据的 buffer size，默认：8k
    max-bytes-in-message: 10MB  # 消息解析最大 bytes 长度，默认：10M
    auth:
      enable: false             # 是否开启 mqtt 认证
      username: mica            # mqtt 认证用户名
      password: mica            # mqtt 认证密码
    debug: true                 # 如果开启 prometheus 指标收集建议关闭
    stat-enable: true           # 开启指标收集，debug 和 prometheus 开启时需要打开，默认开启，关闭节省内存
    proxy-protocol-enable: false   # 代理协议支持，nginx 可开启 tcp proxy_protocol on; 时转发源 ip 信息。2.4.1 版本开始支持
    web-port: 8083              # http、websocket 端口，默认：8083
    websocket-enable: true      # 是否开启 websocket，默认： true
    http-enable: false          # 是否开启 http api，默认： false
    http-basic-auth:
      enable: false             # 是否开启 http basic auth，默认： false
      username: mica            # http basic auth 用户名
      password: mica            # http basic auth 密码
    ssl:                        # mqtt tcp ssl 认证
      enabled: false            # 是否开启 ssl 认证，2.1.0 开始支持双向认证
      keystore-path:            # 必须参数：ssl keystore 目录，支持 classpath:/ 路径。
      keystore-pass:            # 必选参数：ssl keystore 密码
      truststore-path:          # 可选参数：ssl 双向认证 truststore 目录，支持 classpath:/ 路径。
      truststore-pass:          # 可选参数：ssl 双向认证 truststore 密码
      client-auth: none         # 是否需要客户端认证（双向认证），默认：NONE（不需要）
```

注意：**ssl** 存在三种情况

| 服务端开启ssl                            | 客户端                                        |
| ---------------------------------------- | --------------------------------------------- |
| ClientAuth 为 NONE（不需要客户端验证）   | 仅仅需要开启 ssl 即可不用配置证书             |
| ClientAuth 为 OPTIONAL（与客户端协商）   | 需开启 ssl 并且配置 truststore 证书           |
| ClientAuth 为 REQUIRE (必须的客户端验证) | 需开启 ssl 并且配置 truststore、 keystore证书 |

### 2.2 可实现接口（注册成 Solon Bean 即可）

| 接口                            | 是否必须       | 说明                                            |
|-------------------------------|------------|-----------------------------------------------|
| IMqttServerUniqueIdService    | 否          | 用于 clientId 不唯一时，自定义实现唯一标识，后续接口使用它替代 clientId |
| IMqttServerAuthHandler        | 是          | 用于服务端认证                                       |
| IMqttServerSubscribeValidator | 否（建议实现）    | 1.1.3 新增，用于对客户端订阅校验                           |
| IMqttServerPublishPermission  | 否（建议实现）    | 1.2.2 新增，用于对客户端发布权限校验                         |
| IMqttMessageListener          | 否（1.3.x为否） | 消息监听                                          |
| IMqttConnectStatusListener    | 是          | 连接状态监听                                        |
| IMqttSessionManager           | 否          | session 管理                                    |
| IMqttSessionListener          | 否          | session 监听                                    |
| IMqttMessageStore             | 集群是，单机否    | 遗嘱和保留消息存储                                     |
| AbstractMqttMessageDispatcher | 集群是，单机否    | 消息转发，（遗嘱、保留消息转发）                              |
| IpStatListener                | 否          | t-io ip 状态监听                                  |
| IMqttMessageInterceptor       | 否          | 消息拦截器，1.3.9 新增                                |

### 2.3 IMqttMessageListener (用于监听客户端上传的消息) 使用示例

```java
@Component
public class MqttServerMessageListener implements IMqttMessageListener {
   private static final Logger logger = LoggerFactory.getLogger(MqttServerMessageListener.class);

   @Override
   public void onMessage(ChannelContext context, String clientId, Message message) {
      logger.info("clientId:{} message:{} payload:{}", clientId, message, new String(message.getPayload(), StandardCharsets.UTF_8));
   }
}
```

### 2.4 自定义配置（可选）

```java
@Configuration
public class MqttServerCustomizerConfiguration {

	@Bean
	public MqttServerCustomizer mqttServerCustomizer() {
		return new MqttServerCustomizer() {
			@Override
			public void customize(MqttServerCreator creator) {
				// 此处可自定义配置 creator，会覆盖 yml 中的配置
				System.out.println("----------------MqttServerCustomizer-----------------");
			}
		};
	}

}
```

### 2.5 MqttServerTemplate 使用示例

```java
@Component
public class ServerService {
   @Inject
   private MqttServerTemplate server;

   public boolean publish(String body) {
      server.publishAll("/test/123", body.getBytes(StandardCharsets.UTF_8));
      return true;
   }
}
```

### 2.6 客户端上下线监听
使用 Solon event 解耦客户端上下线监听，注意：会跟自定义的 `IMqttConnectStatusListener` 实现冲突，取一种即可。

```java
@Component
public class MqttConnectOfflineListener implements EventListener<MqttClientOfflineEvent> {
   private static final Logger logger = LoggerFactory.getLogger(MqttConnectOfflineListener.class);

   @Override
   public void onEvent(MqttClientOfflineEvent mqttClientOfflineEvent) throws Throwable {
      logger.info("MqttClientOnlineEvent:{}", mqttClientOfflineEvent);
   }
}
```
```java
@Component
public class MqttConnectOnlineListener implements EventListener<MqttClientOnlineEvent> {
	private static final Logger logger = LoggerFactory.getLogger(MqttConnectOnlineListener.class);

	@Override
	public void onEvent(MqttClientOnlineEvent mqttClientOnlineEvent) throws Throwable {
		logger.info("MqttClientOnlineEvent:{}", mqttClientOnlineEvent);
	}
}
```
