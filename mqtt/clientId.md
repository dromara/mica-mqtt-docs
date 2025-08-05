---
url: /mqtt/clientId.md
---
## 科普视频

* [mqtt科普、mqttx、mica-mqtt的使用**视频**](https://www.bilibili.com/video/BV1wv4y1F7Av/)

## 多个客户端使用相同 clientId 会导致前者被踢下线（周期性互踢，频繁上下线）

* clientId 对于在 mqtt 中起着十分重要的作用，请不要随意设置，建议按照产品、设备、sn等维度生成，并且**确保唯一**。
* 如果实在是要兼容老业务，mica-mqtt 中可以实现 `IMqttServerUniqueIdService` 接口（1.1.4开始支持），返回的 `uniqueId` 会替代 clientId，后续的场景也是需要使用这个 `uniqueId` 来处理。
