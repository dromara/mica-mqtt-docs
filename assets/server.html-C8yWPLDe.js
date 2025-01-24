import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as t,o as n}from"./app-Ahs-Nxtx.js";const e={};function l(h,i){return n(),a("div",null,i[0]||(i[0]=[t(`<h2 id="科普视频" tabindex="-1"><a class="header-anchor" href="#科普视频"><span>科普视频</span></a></h2><ul><li><a href="https://www.bilibili.com/video/BV1wv4y1F7Av/" target="_blank" rel="noopener noreferrer">mqtt科普、mqttx、mica-mqtt的使用<strong>视频</strong></a></li></ul><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2><h4 id="_1-添加依赖" tabindex="-1"><a class="header-anchor" href="#_1-添加依赖"><span>1. 添加依赖</span></a></h4><div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dependency</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;org.dromara.mica-mqtt&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;mica-mqtt-server-jfinal-plugin&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;\${最新版本}&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dependency</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-删除-jfinal-demo-中的-slf4j-nop-依赖" tabindex="-1"><a class="header-anchor" href="#_2-删除-jfinal-demo-中的-slf4j-nop-依赖"><span>2. 删除 jfinal-demo 中的 slf4j-nop 依赖</span></a></h4><h4 id="_3-添加-slf4j-log4j12" tabindex="-1"><a class="header-anchor" href="#_3-添加-slf4j-log4j12"><span>3. 添加 slf4j-log4j12</span></a></h4><div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dependency</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;org.slf4j&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;slf4j-log4j12&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;1.7.33&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dependency</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-插件配置" tabindex="-1"><a class="header-anchor" href="#_4-插件配置"><span>4. 插件配置</span></a></h4><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">MqttServerPlugin</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> plugin </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> MqttServerPlugin</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">plugin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">config</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(mqttServerCreator </span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">-&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // mqttServerCreator 上有很多方法，详见 mica-mqtt-core</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">    mqttServerCreator</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">port</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1883</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">webPort</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">8083</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">websocketEnable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-插件使用" tabindex="-1"><a class="header-anchor" href="#_5-插件使用"><span>5. 插件使用</span></a></h4><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 更多方法可以直接使用 MqttServerKit 点出来</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">MqttServerKit</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">publish</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> clientId, </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> topic, </span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">byte</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[] payload);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,12)]))}const p=s(e,[["render",l],["__file","server.html.vue"]]),d=JSON.parse('{"path":"/guide/jfinal/server.html","title":"mica-mqtt-server-jfinal-plugin 使用文档","lang":"zh-CN","frontmatter":{"title":"mica-mqtt-server-jfinal-plugin 使用文档","icon":"server","order":2,"description":"科普视频 mqtt科普、mqttx、mica-mqtt的使用视频 使用 1. 添加依赖 2. 删除 jfinal-demo 中的 slf4j-nop 依赖 3. 添加 slf4j-log4j12 4. 插件配置 5. 插件使用","head":[["meta",{"property":"og:url","content":"https://mica-mqtt.dromara.org/guide/jfinal/server.html"}],["meta",{"property":"og:site_name","content":"mica-mqtt"}],["meta",{"property":"og:title","content":"mica-mqtt-server-jfinal-plugin 使用文档"}],["meta",{"property":"og:description","content":"科普视频 mqtt科普、mqttx、mica-mqtt的使用视频 使用 1. 添加依赖 2. 删除 jfinal-demo 中的 slf4j-nop 依赖 3. 添加 slf4j-log4j12 4. 插件配置 5. 插件使用"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-13T01:59:54.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-13T01:59:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"mica-mqtt-server-jfinal-plugin 使用文档\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-13T01:59:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"mica-mqtt@dromara.org\\",\\"url\\":\\"https://dromara.org\\"}]}"]]},"headers":[{"level":2,"title":"科普视频","slug":"科普视频","link":"#科普视频","children":[]},{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[]}],"git":{"createdTime":1733820248000,"updatedTime":1734055194000,"contributors":[{"name":"如梦技术","username":"如梦技术","email":"596392912@qq.com","commits":2,"url":"https://github.com/如梦技术"}]},"readingTime":{"minutes":0.49,"words":146},"filePathRelative":"guide/jfinal/server.md","localizedDate":"2024年12月10日","autoDesc":true,"excerpt":"<h2>科普视频</h2>\\n<ul>\\n<li><a href=\\"https://www.bilibili.com/video/BV1wv4y1F7Av/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">mqtt科普、mqttx、mica-mqtt的使用<strong>视频</strong></a></li>\\n</ul>\\n<h2>使用</h2>\\n<h4>1. 添加依赖</h4>\\n<div class=\\"language-xml line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"xml\\" data-title=\\"xml\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&lt;</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">dependency</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">    &lt;</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">groupId</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&gt;org.dromara.mica-mqtt&lt;/</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">groupId</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">    &lt;</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">artifactId</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&gt;mica-mqtt-server-jfinal-plugin&lt;/</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">artifactId</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">    &lt;</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">version</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&gt;${最新版本}&lt;/</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">version</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&lt;/</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">dependency</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&gt;</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{p as comp,d as data};