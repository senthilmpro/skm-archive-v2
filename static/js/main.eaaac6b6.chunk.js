(this["webpackJsonpskm-archive-v2"]=this["webpackJsonpskm-archive-v2"]||[]).push([[0],{18:function(e,t,n){e.exports=n(45)},23:function(e,t,n){},24:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(17),i=n.n(c),l=(n(23),n(24),n(2)),o=n.n(l),u=n(4),s=n(3),f=n(5),p=n(6),m=n(7),h=n.n(m),d=function(){function e(){Object(f.a)(this,e)}return Object(p.a)(e,null,[{key:"fetchWordpress",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"dumppro.wordpress.com",10,t="https://public-api.wordpress.com/rest/v1.1/sites/".concat("dumppro.wordpress.com","/posts?number=").concat(10,"&fields=title"),e.next=5,h.a.get(t).then((function(e){return e.data}));case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchArchiveUrl",value:function(){var e=Object(u.a)(o.a.mark((function e(t){var n,r=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.map((function(e){var t=r.getArchiveUrlLink(e.title);return h.a.get(t)})),e.abrupt("return",h.a.all(n));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getArchiveUrlLink",value:function(e){return e.replace("/details/","/metadata/").replace("/download/","/metadata/")}}]),e}(),v=function(){function e(){Object(f.a)(this,e)}return Object(p.a)(e,null,[{key:"getFilesDirectories",value:function(e){}},{key:"getFileUrl",value:function(e){if(!e)return[];var t=["Metadata","Archive BitTorrent","BitTorrent","Thumbnail","BitTorrentContents","Text"];if(e.is_dark)return[];var n=e.server,r=e.dir,a=e.files,c=[];return a&&a.length>0&&(c=(c=a.filter((function(e){return-1===t.indexOf(e.format)})).filter((function(e){return"original"===e.source}))).map((function(e){return"https://".concat(n).concat(r,"/").concat(e.name)}))),c}},{key:"getDownloadUrl",value:function(e){var t=e.metadata&&e.metadata.identifier;return"https://archive.org/download/".concat(t)}}]),e}();n(43);function b(e){var t=Object(r.useState)(!1),n=Object(s.a)(t,2),c=n[0],i=n[1],l=e.files,o=e.title,u=e.showLinks,f=e.url,p=o.split("/").pop(),m=u?l.map((function(e,t){return a.a.createElement("li",{key:t},a.a.createElement("a",{href:e},e))})):l.map((function(e,t){return a.a.createElement("li",{key:t},a.a.createElement("a",{href:e},e.split("/").pop()))}));return a.a.createElement("div",{className:"post_container"},a.a.createElement("div",{style:{width:"100%"},className:"entry_container"},a.a.createElement("h3",null,p),a.a.createElement("button",{className:"btn btn-info dl-button",onClick:function(){return function(e){window.open(e,"_blank")}(f)}},"DL"),a.a.createElement("button",{onClick:function(){return i((function(e){return!e}))},style:{marginLeft:"10px",display:l.length>0?"block":"none"},className:["btn","btn-primary","link-button"].join(" ")},"Show Links")),a.a.createElement("span",{className:"files-count"},a.a.createElement("span",null,"File count ")," : ",a.a.createElement("b",null,l.length)),a.a.createElement("div",{style:{display:c?"block":"none"}},a.a.createElement("ul",{className:"links_list"},m)))}n(44);function k(){var e=Object(r.useState)(!0),t=Object(s.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)([]),l=Object(s.a)(i,2),f=l[0],p=l[1],m=Object(r.useState)(!1),h=Object(s.a)(m,2),k=h[0],E=h[1],w=Object(r.useState)(!0),g=Object(s.a)(w,2),y=g[0],j=g[1],O=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n,r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.next=3,d.fetchWordpress();case 3:return t=e.sent,e.next=6,d.fetchArchiveUrl(t.posts);case 6:return n=e.sent,console.log("archiveResponse ",n),r=n.map((function(e){return e.data})),console.log("Archive Data : ",r),a=[],r.forEach((function(e,n){var r={title:t.posts[n].title,files:v.getFileUrl(e),isDark:!!e.is_dark,url:v.getDownloadUrl(e)};r.isDark||a.push(r),console.log(r)})),a.length>0&&(E(!0),p(a)),c(!1),e.abrupt("return",a);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=f.map((function(e){return a.a.createElement("li",null,a.a.createElement(b,{files:e.files,title:e.title,showLinks:y,url:e.url}))}));return Object(r.useEffect)((function(){O()}),[]),a.a.createElement(a.a.Fragment,null,n&&a.a.createElement("div",null,"Loading..."),!n&&a.a.createElement(a.a.Fragment,null,!k&&a.a.createElement("div",{className:"container"},"No posts found"),k&&a.a.createElement("div",null,a.a.createElement("h2",null,"Archive Link Checker v2"),a.a.createElement("label",null,"Show Links : ")," ",a.a.createElement("input",{type:"checkbox",onChange:function(){return j((function(e){return!e}))},checked:y}),a.a.createElement("div",{style:{width:"95%",paddingTop:"45px"}},a.a.createElement("ul",{className:"list_box"},x)))))}var E=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.eaaac6b6.chunk.js.map