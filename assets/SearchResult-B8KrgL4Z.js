import{u as P,g as se,h as le,i as Y,j as te,k as ae,t as ie,l as ue,m as $,n as w,p as re,w as _,q as l,v as ne,R as T,x as oe,y as ce,z as ve,D as me,A as he,B as de,C as ye,E as pe,F as ge,G as Q,H as fe,I as qe,J as He,K as M,L as U,M as Re}from"./app-Dxx2E1T3.js";const ke=["/","/faq/faq.html","/guide/","/guide/httpApi.html","/mqtt/clientId.html","/mqtt/keepalive.html","/mqtt/retain.html","/mqtt/tool.html","/mqtt/topic.html","/mqtt/will.html","/version/changelog.html","/guide/java/client.html","/guide/java/server.html","/guide/jfinal/client.html","/guide/jfinal/server.html","/guide/solon/client.html","/guide/solon/server.html","/guide/spring/client.html","/guide/spring/server.html","/404.html","/faq/","/mqtt/","/version/","/guide/java/","/guide/jfinal/","/guide/solon/","/guide/spring/"],we="SLIMSEARCH_QUERY_HISTORY",p=P(we,[]),Qe=()=>{const{queryHistoryCount:t}=Q,a=t>0;return{enabled:a,queryHistories:p,addQueryHistory:i=>{a&&(p.value=Array.from(new Set([i,...p.value.slice(0,t-1)])))},removeQueryHistory:i=>{p.value=[...p.value.slice(0,i),...p.value.slice(i+1)]}}},b=t=>ke[t.id]+("anchor"in t?`#${t.anchor}`:""),xe="SLIMSEARCH_RESULT_HISTORY",{resultHistoryCount:O}=Q,g=P(xe,[]),Ce=()=>{const t=O>0;return{enabled:t,resultHistories:g,addResultHistory:a=>{if(t){const i={link:b(a),display:a.display};"header"in a&&(i.header=a.header),g.value=[i,...g.value.slice(0,O-1)]}},removeResultHistory:a=>{g.value=[...g.value.slice(0,a),...g.value.slice(a+1)]}}},Se=t=>{const a=me(),i=Y(),x=he(),r=$(0),q=w(()=>r.value>0),d=de([]);return ye(()=>{const{search:y,terminate:C}=pe(),f=ge(o=>{const{resultsFilter:H=n=>n,querySplitter:E,suggestionsFilter:S,...L}=a.value;o?(r.value+=1,y(o,i.value,L).then(n=>H(n,o,i.value,x.value)).then(n=>{r.value-=1,d.value=n}).catch(n=>{console.warn(n),r.value-=1,r.value||(d.value=[])})):d.value=[]},Q.searchDelay-Q.suggestDelay,{maxWait:5e3});_([t,i],([o])=>{f(o.join(" "))},{immediate:!0}),fe(()=>{C()})}),{isSearching:q,results:d}};var je=se({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(t,{emit:a}){const i=le(),x=Y(),r=te(ae),{enabled:q,addQueryHistory:d,queryHistories:y,removeQueryHistory:C}=Qe(),{enabled:f,resultHistories:o,addResultHistory:H,removeResultHistory:E}=Ce(),S=q||f,L=ie(t,"queries"),{results:n,isSearching:B}=Se(L),u=ue({isQuery:!0,index:0}),m=$(0),h=$(0),F=w(()=>S&&(y.value.length>0||o.value.length>0)),j=w(()=>n.value.length>0),D=w(()=>n.value[m.value]||null),z=()=>{const{isQuery:e,index:s}=u;s===0?(u.isQuery=!e,u.index=e?o.value.length-1:y.value.length-1):u.index=s-1},G=()=>{const{isQuery:e,index:s}=u;s===(e?y.value.length-1:o.value.length-1)?(u.isQuery=!e,u.index=0):u.index=s+1},J=()=>{m.value=m.value>0?m.value-1:n.value.length-1,h.value=D.value.contents.length-1},K=()=>{m.value=m.value<n.value.length-1?m.value+1:0,h.value=0},V=()=>{h.value<D.value.contents.length-1?h.value+=1:K()},W=()=>{h.value>0?h.value-=1:J()},A=e=>e.map(s=>Re(s)?s:l(s[0],s[1])),N=e=>{if(e.type==="customField"){const s=qe[e.index]||"$content",[c,k=""]=He(s)?s[x.value].split("$content"):s.split("$content");return e.display.map(v=>l("div",A([c,...v,k])))}return e.display.map(s=>l("div",A(s)))},R=()=>{m.value=0,h.value=0,a("updateQuery",""),a("close")},X=()=>q?l("ul",{class:"slimsearch-result-list"},l("li",{class:"slimsearch-result-list-item"},[l("div",{class:"slimsearch-result-title"},r.value.queryHistory),y.value.map((e,s)=>l("div",{class:["slimsearch-result-item",{active:u.isQuery&&u.index===s}],onClick:()=>{a("updateQuery",e)}},[l(M,{class:"slimsearch-result-type"}),l("div",{class:"slimsearch-result-content"},e),l("button",{class:"slimsearch-remove-icon",innerHTML:U,onClick:c=>{c.preventDefault(),c.stopPropagation(),C(s)}})]))])):null,Z=()=>f?l("ul",{class:"slimsearch-result-list"},l("li",{class:"slimsearch-result-list-item"},[l("div",{class:"slimsearch-result-title"},r.value.resultHistory),o.value.map((e,s)=>l(T,{to:e.link,class:["slimsearch-result-item",{active:!u.isQuery&&u.index===s}],onClick:()=>{R()}},()=>[l(M,{class:"slimsearch-result-type"}),l("div",{class:"slimsearch-result-content"},[e.header?l("div",{class:"content-header"},e.header):null,l("div",e.display.map(c=>A(c)).flat())]),l("button",{class:"slimsearch-remove-icon",innerHTML:U,onClick:c=>{c.preventDefault(),c.stopPropagation(),E(s)}})]))])):null;return re("keydown",e=>{if(t.isFocusing){if(j.value){if(e.key==="ArrowUp")W();else if(e.key==="ArrowDown")V();else if(e.key==="Enter"){const s=D.value.contents[h.value];d(t.queries.join(" ")),H(s),i.push(b(s)),R()}}else if(f){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:s}=u;u.isQuery?(a("updateQuery",y.value[s]),e.preventDefault()):(i.push(o.value[s].link),R())}}}}),_([m,h],()=>{var e;(e=document.querySelector(".slimsearch-result-list-item.active .slimsearch-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>l("div",{class:["slimsearch-result-wrapper",{empty:t.queries.length?!j.value:!F.value}],id:"slimsearch-results"},t.queries.length?B.value?l(ne,{hint:r.value.searching}):j.value?l("ul",{class:"slimsearch-result-list"},n.value.map(({title:e,contents:s},c)=>{const k=m.value===c;return l("li",{class:["slimsearch-result-list-item",{active:k}]},[l("div",{class:"slimsearch-result-title"},e||r.value.defaultTitle),s.map((v,ee)=>{const I=k&&h.value===ee;return l(T,{to:b(v),class:["slimsearch-result-item",{active:I,"aria-selected":I}],onClick:()=>{d(t.queries.join(" ")),H(v),R()}},()=>[v.type==="text"?null:l(v.type==="title"?oe:v.type==="heading"?ce:ve,{class:"slimsearch-result-type"}),l("div",{class:"slimsearch-result-content"},[v.type==="text"&&v.header?l("div",{class:"content-header"},v.header):null,l("div",N(v))])])})])})):r.value.emptyResult:S?F.value?[X(),Z()]:r.value.emptyHistory:r.value.emptyResult)}});export{je as default};
