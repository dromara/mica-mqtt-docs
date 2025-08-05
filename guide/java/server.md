---
url: /guide/java/server.md
---
## 科普视频

* [mqtt科普、mqttx、mica-mqtt的使用**视频**](https://www.bilibili.com/video/BV1wv4y1F7Av/)

## 使用

#### 1. 添加依赖

```xml
<dependency>
  <groupId>org.dromara.mica-mqtt</groupId>
  <artifactId>mica-mqtt-server</artifactId>
  <version>${mica-mqtt.version}</version>
</dependency>
```

#### 2. 服务端使用（2.5.x或以上）

```java
// 注意：为了能接受更多链接（降低内存），请添加 jvm 参数 -Xss129k
MqttServer mqttServer = MqttServer.create()
    // 服务端 ip 默认为空，0.0.0.0，建议不要设置，端口 默认：1883
    .enableMqtt(1883)
    // 默认为： 8192（mqtt 默认最大消息大小），为了降低内存可以减小小此参数，如果消息过大 t-io 会尝试解析多次（建议根据实际业务情况而定）
    .readBufferSize(8192)
//  最大包体长度
//  .maxBytesInMessage(1024 * 100)
//  mqtt 3.1 协议会校验 clientId 长度。
//  .maxClientIdLength(64)
    .messageListener((context, clientId, topic, qos, message) -> {
        logger.info("clientId:{} payload:{}", clientId, new String(message.payload(), StandardCharsets.UTF_8));
    })
    // 客户端连接状态监听
    .connectStatusListener(new MqttConnectStatusListener())
    // 自定义消息拦截器
    .addInterceptor(new MqttMessageInterceptor())
    // 开启 websocket
    .enableMqttWs()
    // 开启 mqtt http 接口
    .enableMqttHttpApi(builder ->
        builder
            .basicAuth("mica", "mica") // http basic 认证
            .mcpServer()               // 开启 mcp 服务
            .build()
    )
    // 开始 stat 监控
    .statEnable()
    // 开启 debug 信息日志
    .debug()
    .start();

// 定时下发消息
mqttServer.schedule(() -> {
    String message = "mica最牛皮 " + System.currentTimeMillis();
    mqttServer.publishAll("/test/123", message.getBytes(StandardCharsets.UTF_8));
}, 2000);

// 2.3.2 开始支持 stop 关闭
// mqttServer.stop();
```

#### 2. 服务端使用（2.4.x或以下）

```java
// 注意：为了能接受更多链接（降低内存），请添加 jvm 参数 -Xss129k
MqttServer mqttServer = MqttServer.create()
    // 服务端 ip 默认为空，0.0.0.0，建议不要设置
    .ip("0.0.0.0")
    // 默认：1883
    .port(1883)
    // 默认为： 8092（mqtt 默认最大消息大小），为了降低内存可以减小小此参数，如果消息过大 t-io 会尝试解析多次（建议根据实际业务情况而定）
    .readBufferSize(512)
    // 最大包体长度，如果包体过大需要设置此参数，默认为： 8092
    .maxBytesInMessage(1024 * 100)
    // 自定义认证
    .authHandler((clientId, userName, password) -> true)
    // 消息监听
    .messageListener((context, clientId, message) -> {
        logger.info("clientId:{} message:{} payload:{}", clientId, message, new String(message.getPayload(), StandardCharsets.UTF_8));
    })
    // 心跳超时时间，默认：120s
    .heartbeatTimeout(120_1000L)
    // ssl 配置
    .useSsl("", "", "")
    // 开启代理协议，支持 nginx 开启 tcp proxy_protocol on; 时转发源 ip 信息。2.4.1 版本开始支持
    .proxyProtocolEnable()
    // 自定义客户端上下线监听
    .connectStatusListener(new IMqttConnectStatusListener() {
        @Override
        public void online(String clientId) {

        }

        @Override
        public void offline(String clientId) {

        }
    })
    // 自定义消息转发，可用 mq 广播实现集群化处理
    .messageDispatcher(new IMqttMessageDispatcher() {
        @Override
        public void config(MqttServer mqttServer) {

        }

        @Override
        public boolean send(Message message) {
            return false;
        }

        @Override
        public boolean send(String clientId, Message message) {
            return false;
        }
    })
    .debug() // 开启 debug 信息日志
    .start();

// 发送给某个客户端
mqttServer.publish("clientId","/test/123", "mica最牛皮".getBytes(StandardCharsets.UTF_8));

// 发送给所有在线监听这个 topic 的客户端
mqttServer.publishAll("/test/123", "mica最牛皮".getBytes(StandardCharsets.UTF_8));

// 停止服务
mqttServer.stop();
```

#### 3. http 和 websocket 依赖（2.4.2或之前版本需要该步骤）：

开启 http 或 websocket 需要添加 mica-net-http 依赖，如果不需要 http、websocket 把它们可以使用 `.httpEnable(false)` 和 `.websocketEnable(false)` 关掉就不需要该依赖了。

```xml
<dependency>
    <groupId>net.dreamlu</groupId>
    <artifactId>mica-net-http</artifactId>
    <version>${mica-net.version}</version>
</dependency>
```

如何确定 mica-net 的版本？可以打开 idea maven 依赖查看，当前依赖的 `mica-net-core` 版本，请确保跟 `mica-net-core` 使用一样的版本，避免版本兼容问题。

![img.png](img.png)

另外 http api 需要项目带有 jackson、fastjson、fastjson2、gson、hutool-json、snack3（mica-mqtt 2.3.4开始支持） 这些json工具其一。
