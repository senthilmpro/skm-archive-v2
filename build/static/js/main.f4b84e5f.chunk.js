(this["webpackJsonpskm-archive-v2"]=this["webpackJsonpskm-archive-v2"]||[]).push([[0],{21:function(e,t,n){e.exports=n(49)},26:function(e,t,n){},27:function(e,t,n){e.exports=n.p+"static/media/logo.25bf045c.svg"},28:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(20),s=n.n(i),c=(n(26),n(27),n(28),n(4)),o=n.n(c),l=n(6),u=n(2),h=n(3),p=n(8),d=n(7),f=n(5),m=n(9),k=n(10),v=n.n(k),b=function(){function e(){Object(u.a)(this,e)}return Object(h.a)(e,null,[{key:"fetchWordpress",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"dumppro.wordpress.com",10,t="https://public-api.wordpress.com/rest/v1.1/sites/".concat("dumppro.wordpress.com","/posts?number=").concat(10,"&fields=title"),e.next=5,v.a.get(t).then((function(e){return e.data}));case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchArchiveUrl",value:function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.map((function(e){var t=a.getArchiveUrlLink(e.title);return v.a.get(t)})),e.abrupt("return",v.a.all(n));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getArchiveUrlLink",value:function(e){return e.replace("/details/","/metadata/").replace("/download/","/metadata/")}}]),e}(),w=function(){function e(){Object(u.a)(this,e)}return Object(h.a)(e,null,[{key:"getFilesDirectories",value:function(e){}},{key:"getFileUrl",value:function(e){if(!e)return[];var t=["Metadata","Archive BitTorrent","BitTorrent","Thumbnail","BitTorrentContents","Text"];if(e.is_dark)return[];var n=e.server,a=e.dir,r=e.files,i=[];return r&&r.length>0&&(i=(i=r.filter((function(e){return-1===t.indexOf(e.format)})).filter((function(e){return"original"===e.source}))).map((function(e){return"https://".concat(n).concat(a,"/").concat(e.name)}))),i}}]),e}(),g=(n(47),function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(p.a)(this,Object(d.a)(t).call(this))).hideLinks=e.hideLinks.bind(Object(f.a)(e)),e.state={displayLink:"none"},e}return Object(m.a)(t,e),Object(h.a)(t,[{key:"hideLinks",value:function(){"none"===this.state.displayLink?this.setState({displayLink:"block"}):this.setState({displayLink:"none"})}},{key:"render",value:function(){var e,t=this.props.files,n=this.props.title.split("/").pop(),a=this.props.showLinks,i=t.length,s=this.state.displayLink;return e=a?t.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("a",{href:e},e))})):t.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("a",{href:e},e.split("/").pop()))})),r.a.createElement("div",{style:{width:"100%"},className:"entry_container"},r.a.createElement("h3",null,n),r.a.createElement("span",null,"File count ")," : ",r.a.createElement("b",null,i),r.a.createElement("button",{onClick:this.hideLinks,style:{display:i>0?"block":"none"},className:["btn","btn-primary"].join(" ")},"Show Links"),r.a.createElement("div",{style:{display:s}},r.a.createElement("ul",{className:"links_list"},e)))}}]),t}(r.a.Component)),y=(n(48),function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(p.a)(this,Object(d.a)(t).call(this))).state={data:[],postsFound:!1,loading:!0,showLinks:!0},e.getWpData=e.getWpData.bind(Object(f.a)(e)),e.showFullLinks=e.showFullLinks.bind(Object(f.a)(e)),e.getWpData(),e}return Object(m.a)(t,e),Object(h.a)(t,[{key:"getWpData",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,b.fetchWordpress();case 3:return t=e.sent,e.next=6,b.fetchArchiveUrl(t.posts);case 6:return n=e.sent,console.log("archiveResponse ",n),a=n.map((function(e){return e.data})),r=[],a.forEach((function(e,n){var a={title:t.posts[n].title,files:w.getFileUrl(e),isDark:!!e.is_dark&&e.is_dark};a.isDark||r.push(a),console.log(a)})),r.length>0&&this.setState({postsFound:!0,data:r}),console.log(r),this.setState({loading:!1}),e.abrupt("return",r);case 15:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"showFullLinks",value:function(){var e=this.state.showLinks;this.setState({showLinks:!e})}},{key:"render",value:function(){var e=this;if(this.state.loading)return r.a.createElement("div",{className:"container"},"Loading");var t=this.state.data.map((function(t){return r.a.createElement("li",null,r.a.createElement(g,{files:t.files,title:t.title,showLinks:e.state.showLinks}))}));return this.state.postsFound?r.a.createElement("div",null,r.a.createElement("h2",null,"Archive Link Checker v2"),r.a.createElement("label",null,"Show Links : ")," ",r.a.createElement("input",{type:"checkbox",onChange:this.showFullLinks,checked:this.state.showLinks}),r.a.createElement("div",{style:{width:"95%",paddingTop:"45px"}},r.a.createElement("ul",{className:"list_box"},t))):r.a.createElement("div",{className:"container"},"No posts found")}}]),t}(r.a.Component));var E=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[21,1,2]]]);
//# sourceMappingURL=main.f4b84e5f.chunk.js.map