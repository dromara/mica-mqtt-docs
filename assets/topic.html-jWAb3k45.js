import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{e as t,f as c,o as a}from"./app-CFW9q3uN.js";const d={};function r(i,e){return a(),t("div",null,e[0]||(e[0]=[c('<h2 id="科普视频" tabindex="-1"><a class="header-anchor" href="#科普视频"><span>科普视频</span></a></h2><ul><li><a href="https://www.bilibili.com/video/BV1wv4y1F7Av/" target="_blank" rel="noopener noreferrer">mqtt科普、mqttx、mica-mqtt的使用<strong>视频</strong></a></li></ul><h2 id="topic-通配符-订阅才可以使用通配符-发布不允许出现通配符" tabindex="-1"><a class="header-anchor" href="#topic-通配符-订阅才可以使用通配符-发布不允许出现通配符"><span>topic 通配符（订阅才可以使用通配符，发布不允许出现通配符）</span></a></h2><ul><li><code>/</code>：用来表示层次，比如 <code>a/b</code>，<code>a/b/c</code>。</li><li><code>#</code>：表示匹配 <code>&gt;=0</code> 个层次，比如 <code>a/#</code> 就匹配 <code>a/</code>，<code>a/b</code>，<code>a/b/c</code>。单独的一个 <code>#</code> 表示匹配所有。不允许 <code>a#</code> 和 <code>a/#/c</code>。</li><li><code>+</code>：表示匹配一个层次，例如 <code>a/+</code> 匹配 <code>a/b</code>，<code>a/c</code>，不匹配 <code>a/b/c</code>。单独的一个 <code>+</code> 是允许的，<code>a+</code> 不允许，也可以和多层通配符一起使用，<code>+/tennis/# </code>、<code>sport/+/player1</code> 都有有效的。</li></ul><h3 id="共享订阅" tabindex="-1"><a class="header-anchor" href="#共享订阅"><span>共享订阅</span></a></h3><p><strong>mica-mqtt</strong> 支持两种<strong>共享订阅</strong>方式：</p><ol><li>共享订阅：订阅前缀 <code>$queue/</code>，多个客户端订阅了 <code>$queue/topic</code>，发布者发布到 <code>topic</code>，则只有一个客户端会接收到消息。</li><li>分组订阅：订阅前缀 <code>$share/&lt;group&gt;/</code>，组客户端订阅了 <code>$share/group1/topic</code>、<code>$share/group2/topic</code>..，发布者发布到 <code>topic</code>，则消息会发布到每个 <strong>group</strong> 中，但是每个 <strong>group</strong> 中只有一个客户端会接收到消息。</li></ol><p><strong>注意：</strong> 如果发布的 <code>topic</code> 以 <code>/</code> 开头，例如：<code>/topic/test</code>，需要订阅 <code>$share/group1//topic/test</code>，另外 mica-mqtt 默认随机消息路由，共享订阅的多个客户端会随机收到消息。</p>',8)]))}const m=o(d,[["render",r],["__file","topic.html.vue"]]),l=JSON.parse('{"path":"/mqtt/topic.html","title":"mqtt Topic 规则","lang":"zh-CN","frontmatter":{"title":"mqtt Topic 规则","icon":"hashtag","order":1,"description":"科普视频 mqtt科普、mqttx、mica-mqtt的使用视频 topic 通配符（订阅才可以使用通配符，发布不允许出现通配符） /：用来表示层次，比如 a/b，a/b/c。 #：表示匹配 >=0 个层次，比如 a/# 就匹配 a/，a/b，a/b/c。单独的一个 # 表示匹配所有。不允许 a# 和 a/#/c。 +：表示匹配一个层次，例如 a/+ ...","head":[["meta",{"property":"og:url","content":"https://mica-mqtt.dromara.org/mqtt/topic.html"}],["meta",{"property":"og:site_name","content":"mica-mqtt"}],["meta",{"property":"og:title","content":"mqtt Topic 规则"}],["meta",{"property":"og:description","content":"科普视频 mqtt科普、mqttx、mica-mqtt的使用视频 topic 通配符（订阅才可以使用通配符，发布不允许出现通配符） /：用来表示层次，比如 a/b，a/b/c。 #：表示匹配 >=0 个层次，比如 a/# 就匹配 a/，a/b，a/b/c。单独的一个 # 表示匹配所有。不允许 a# 和 a/#/c。 +：表示匹配一个层次，例如 a/+ ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-26T03:13:54.000Z"}],["meta",{"property":"article:modified_time","content":"2025-02-26T03:13:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"mqtt Topic 规则\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-26T03:13:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"mica-mqtt@dromara.org\\",\\"url\\":\\"https://dromara.org\\"}]}"]]},"git":{"createdTime":1733802831000,"updatedTime":1740539634000,"contributors":[{"name":"如梦技术","username":"如梦技术","email":"596392912@qq.com","commits":6,"url":"https://github.com/如梦技术"}]},"readingTime":{"minutes":1.04,"words":313},"filePathRelative":"mqtt/topic.md","localizedDate":"2024年12月10日","autoDesc":true,"excerpt":"<h2>科普视频</h2>\\n<ul>\\n<li><a href=\\"https://www.bilibili.com/video/BV1wv4y1F7Av/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">mqtt科普、mqttx、mica-mqtt的使用<strong>视频</strong></a></li>\\n</ul>\\n<h2>topic 通配符（订阅才可以使用通配符，发布不允许出现通配符）</h2>\\n<ul>\\n<li><code>/</code>：用来表示层次，比如 <code>a/b</code>，<code>a/b/c</code>。</li>\\n<li><code>#</code>：表示匹配 <code>&gt;=0</code> 个层次，比如 <code>a/#</code> 就匹配 <code>a/</code>，<code>a/b</code>，<code>a/b/c</code>。单独的一个 <code>#</code> 表示匹配所有。不允许 <code>a#</code> 和 <code>a/#/c</code>。</li>\\n<li><code>+</code>：表示匹配一个层次，例如 <code>a/+</code> 匹配 <code>a/b</code>，<code>a/c</code>，不匹配 <code>a/b/c</code>。单独的一个 <code>+</code> 是允许的，<code>a+</code> 不允许，也可以和多层通配符一起使用，<code>+/tennis/# </code>、<code>sport/+/player1</code> 都有有效的。</li>\\n</ul>"}');export{m as comp,l as data};
