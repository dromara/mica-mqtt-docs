---
title: 常见问题汇总
---

## 1、mica-mqtt-spring-boot-starter 空指针 NullPointerException
详细信息： Mqtt server IMqttMessageListener Bean not found

解决方案：IMqttMessageListener 为业务处理，必须要实现的接口。实现该接口并注册成 Spring Bean 即可。

## 2、解码异常
- mqtt 3.1 版协议规定 clientId 范围 1~23, 如果不再此范围会报错，mica-mqtt 服务端提供了 maxClientIdLength 参数，请按需配置。（v2.1.1 开始最大长度默认为 64）
- mica-mqtt 默认的最大包体长度为 8092（v1.3.6 开始默认为 10M），当包体大于这个值时会报异常，mica-mqtt 提供了 maxBytesInMessage 参数，请按需配置。
- mica-mqtt readBufferSize 默认为 8k，最大值可以设置为 132476（130k，受 t-io 限制），t-io 解码会尝试 10 次，也就是最大消息体支持 1.26 M。
- 如果要设置得更大，可以将 mica-mqtt readBufferSize 设置成 0 (v1.3.6 开始支持)，
- 然后在 java 启动变量中添加 `-Dtio.default.read.buffer.size=1048576` (1M，也就是最大支持 10M 消息体，请按需设置)。
- **大量消息，业务处理不赢**会导致解码异常，服务端可设置 `useQueueDecode(true)` 1.3.7 会默认成 true。不过业务一直处理不赢还是会照成更严重的问题。最后队列占满导致 jvm 内存溢出。建议集群并对接 kafka、rocketmq 等。

## 3、NoSuchMethodError: java.nio.ByteBuffer.XXX(I)Ljava/nio/ByteBuffer;
**存在此问题的版本**：`1.0.0`、`1.0.0-RC`、`1.0.3`、`1.0.4`
该问题主要是 jar 编译问题，由于 JDK9+ 改了 ByteBuffer 部分返回值的类型，导致 java9+ 下编译的 jar 在 java8 下运行会有问题。如果遇到此问题，请立刻反馈。

## 4、多个客户端使用相同 clientId 导致前者被踢下线（周期性上下线）
- 多个客户端相同 clientId 互踢日志关键字 **准备关闭连接 ... now bind on new context id:\[xxxx]** 
- clientId 对于在 mqtt 中起着十分重要的作用，请不要随意设置，建议按照产品、设备、sn等维度生成，并且**确保唯一**。
- 如果实在是要兼容老业务，可以实现 `IMqttServerUniqueIdService` (1.1.4开始支持) 接口，返回的 `uniqueId` 会替代 clientId，后续的场景也是需要使用这个 `uniqueId` 来处理。

## 5、nginx tcp 负载均衡
#### 5.1 搜索关键词 `nginx tcp 负载均衡` 即可：
- https://zhuanlan.zhihu.com/p/139275668
- http://nginx.org/en/docs/stream/ngx_stream_proxy_module.html

#### 5.2 配置 /etc/nginx/nginx.conf，示例:
```
stream {
  upstream stream_backend {
      zone tcp_servers 64k;
      hash $remote_addr;
      server 192.168.0.2:1883 max_fails=2 fail_timeout=30s;
      server 192.168.0.3:1883 max_fails=2 fail_timeout=30s;
  }

  server {
      listen 8883 ssl;
      status_zone tcp_server;
      proxy_pass stream_backend;
      proxy_buffer_size 4k;
      proxy_protocol    on; # 转发源ip信息, mica-mqtt 开源版 2.4.x 正式版开始支持。
      ssl_handshake_timeout 15s;
      ssl_certificate     /etc/emqx/certs/cert.pem;
      ssl_certificate_key /etc/emqx/certs/key.pem;
  }
}
```

## 6、Mqtt 集群
mica-mqtt 1.1.2 版本开始添加了 `mica-mqtt-broker` 模块，采用 redis pub/sub 实现集群，有需求的朋友可以参考。

## 7、SNAPSHOT 版本使用（central sonatype 不支持快照版，mica-mqtt 2.4.x 不再发布快照版）

**snapshots** 版本会及时响应修复最新的 bug 和需求。

SNAPSHOT 版本使用参考这里：https://www.dreamlu.net/mica2x/#%E4%BD%BF%E7%94%A8-snapshots

## 8、ssl 证书

**注意**：mica-mqtt 从 v2.3.9 开始支持 PKCS12 证书，mica-mqtt 支持 JKS 和 PKCS12 证书，根据后缀判断。`.jks, .keystore` 文件后缀会识别成为 `JKS` 证书，`.p12 和 .pfx` 会识别成 `PKCS12` 证书。其他默认成 JKS。

**maven** `resources` 拷贝文件是默认会做 `filter`，会导致我们的文件发生变化，导致不能读，`pom` 中你需要添加下面的配置。

```xml
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
	<artifactId>maven-resources-plugin</artifactId>
	<configuration>
		<nonFilteredFileExtensions>
			<nonFilteredFileExtension>jks</nonFilteredFileExtension>
			<nonFilteredFileExtension>pfx</nonFilteredFileExtension>
		</nonFilteredFileExtensions>
	</configuration>
</plugin>
```

### 8.1 申请的证书
腾讯云、阿里云等提供有 jks 证书，直接申请下载，记住申请时的密码：
代码中 `.useSsl("classpath:xxx.jks", "classpath:xxx.jks", "密码")` 即可

### 8.2 自签证书（双向认证）

1. 按这个文章生成服务端和客户端证书：https://www.toolhelper.cn/SSL/SSLGenerate 点击下载，解压，拷贝 `generate.pfx` 到项目。
2. 服务端使用 `.useSsl("classpath:generate.pfx", "密码")` 开启 ssl。（v2.3.9 开始支持 .pfx 和 .p12 后缀）
3. 客户端 mqttx 使用如下图：

**将 `generate.pfx` 转成 pem 证书** https://www.toolhelper.cn/SSL/PfxToPem

![输入图片说明](https://foruda.gitee.com/images/1731397117909805034/c878d443_372.png "屏幕截图")

更多教程：openssl自签名证书教程(单域名证书/泛域名证书/多域名证书)详见：https://www.orcy.net.cn/340.html

## 9、服务器配置调优

详见: [**Linux 操作系统参数和TCP 协议栈网络参数**章节](https://www.emqx.io/docs/zh/v3.0/tune.html#linux-%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E5%8F%82%E6%95%B0)

## 10、Mqtt client 动态更新 clientId，username，password
```java
/**
 * 客户端连接状态监听
 *
 * @author L.cm
 */
@Service
public class MqttClientConnectListener implements IMqttClientConnectListener {
	private static final Logger logger = LoggerFactory.getLogger(MqttClientConnectListener.class);

	@Autowired
	private ApplicationContext applicationContext;

	@Override
	public void onConnected(ChannelContext context, boolean isReconnect) {
		if (isReconnect) {
			logger.info("重连 mqtt 服务器重连成功...");
		} else {
			logger.info("连接 mqtt 服务器成功...");
		}
	}

	@Override
	public void onDisconnect(ChannelContext channelContext, Throwable throwable, String remark, boolean isRemove) {
		logger.error("mqtt 链接断开 remark:{} isRemove:{}", remark, isRemove, throwable);
		// 在断线时更新 clientId、username、password
		MqttClientCreator mqttClientCreator = applicationContext.getBean(MqttClientCreator.class);
		mqttClientCreator
			.clientId("newClient" + System.currentTimeMillis())
			.username("newUserName")
			.password("newPassword");
	}

}
```

## 11、浏览器 mqtt.js websocket 连接

**科普**：浏览器只能走 websocket mqtt 子协议，对应 mica-mqtt **8083** 端口。

**连错端口会报异常，如下：**
```java
org.tio.core.exception.TioDecodeException: java.lang.IllegalArgumentException: invalid QoS: 3
 at net.dreamlu.iot.mqtt.codec.MqttDecoder.doDecode(MqttDecoder.java:67)
```

**mqtt.js websocket 示例：**
```javascript
const clientId = 'mqttjs_' + Math.random().toString(16).substr(2, 8)

const host = 'ws://mqtt.dreamlu.net:8083/mqtt'

const options = {
  keepalive: 60,
  clientId: clientId,
  username: 'mqtt登录用户名',
  password: 'mqtt登录密码',
  protocolId: 'MQTT',
  protocolVersion: 4,
  clean: true,
  reconnectPeriod: 1000,
  connectTimeout: 30 * 1000,
  will: {
    topic: 'WillMsg',
    payload: 'Connection Closed abnormally..!',
    qos: 0,
    retain: false
  },
}

console.log('Connecting mqtt client')
const client = mqtt.connect(host, options)

client.on('error', (err) => {
  console.log('Connection error: ', err)
  client.end()
})

client.on('reconnect', () => {
  console.log('Reconnecting...')
})
```

## 十二、mqtt 心跳超时
- 客户端默认心跳超时 60s
- 服务端默认心跳检测 120s
- 服务端会默认以 1.5倍（keepaliveBackoff * 2） 客户端心跳超时进行判断，最长周期最长 2.5 倍。（所以客户端实际超时时间为 90s ~ 150s）

**拔网线**等**非正常断开**需要一个心跳检测周期才会触发断开。

## 十三、client、server 同时使用时 caffeine 依赖异常（v）
```java
Failed to instantiate [net.dreamlu.iot.mqtt.core.server.MqttServer]: Factory method 'mqttServer' threw 
exception; nested exception is java.lang.NoClassDefFoundError: 
com/github/benmanes/caffeine/cache/RemovalListener
```
**解决方案：** pom 中将 mqtt server 依赖放 mqtt client 前面。

## 十四、为什么群 突然解散了?
群没啥意义，没啥有用的反馈和意见，git issues 能记录问题，百度权重也很高。

有问题请 gitee 提 issues，**github 的消息太多了也经常好几天才会注意到**，谢谢！

