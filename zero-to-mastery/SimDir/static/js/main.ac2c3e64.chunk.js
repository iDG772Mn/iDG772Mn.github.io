(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,r){e.exports=r(34)},28:function(e,t,r){},30:function(e,t,r){},34:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(15),i=r.n(c),o=r(7),s=r(2),l=r(17),u=r(18),d=(r(28),r(4)),m=r(5),h=r(8),E=r(6),p=r(9),f=function(e){var t=e.onSearch;return a.a.createElement("div",{className:"ma3"},a.a.createElement("input",{className:"bw1 b--pink bg-washed-red",type:"search",placeholder:"search directory",onChange:t}))},y=(r(30),function(e){e.id;var t=e.name,r=e.email,n=e.picture,c=e.cell;return a.a.createElement("div",{className:"bg-light-blue br4 pa2 dib ma2 grow bw1 shadow-3 tc"},a.a.createElement("img",{className:"cards",src:"".concat(n),alt:" "}),a.a.createElement("div",null,a.a.createElement("p",{className:"ttc f6"},t),a.a.createElement("p",{className:"f7"},c),a.a.createElement("p",{className:"f7"},r)))}),g=function(e){var t=e.directory,r=t.map(function(e,r){return a.a.createElement(y,{key:r,id:t[r].id,name:t[r].name,email:t[r].email,picture:t[r].picture,cell:t[r].cell})});return a.a.createElement("div",{className:"flex flex-wrap justify-center"},r)},v=function(e){return a.a.createElement("div",{style:{overflowY:"scroll",height:"83vh"}},e.children)},b=function(e){function t(e){var r;return Object(d.a)(this,t),(r=Object(h.a)(this,Object(E.a)(t).call(this,e))).state={hasError:!1},r}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Oops. Something went wrong..."):this.props.children}}]),t}(n.Component),w=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestDirectory()}},{key:"render",value:function(){var e=this.props,t=e.searchField,r=e.onSearch,n=e.directory,c=e.isPending,i=n.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())});return c?a.a.createElement("h2",{className:"tc"},"Loading...."):a.a.createElement("div",{className:"tc avenir"},a.a.createElement("h1",{className:"orange"},"Simulated Directory"),a.a.createElement(f,{onSearch:r}),a.a.createElement(v,null,a.a.createElement(b,null,a.a.createElement(g,{directory:i}))),a.a.createElement("div",{className:"f6 ma3"},"Directory populated using ",a.a.createElement("a",{href:"https://randomuser.me/",target:"_new"},"Random User Generator"),"."))}}]),t}(n.Component),O=Object(o.b)(function(e){return{searchField:e.searchDirectory.searchField,directory:e.requestDirectory.directory,isPending:e.requestDirectory.isPending,error:e.requestDirectory.error}},function(e){return{onSearch:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestDirectory:function(){return e(function(e){e({type:"REQUEST_PEOPLE_PENDING"}),fetch("https://randomuser.me/api/?results=100").then(function(e){return e.json()}).then(function(t){return e({type:"REQUEST_PEOPLE_SUCCESS",payload:t})}).catch(function(t){return e({type:"REQUEST_PEOPLE_FAILED",payload:t})})})}}})(w);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r(32);var j={searchField:""},P={isPending:!1,directory:[],error:""},S=Object(l.createLogger)(),D=Object(s.c)({searchDirectory:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestDirectory:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_PEOPLE_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_PEOPLE_SUCCESS":for(var r=t.payload.results,n=[],a=0;a<r.length;a++){var c={id:a,picture:r[a].picture.large,name:r[a].name.first+" "+r[a].name.last,username:r[a].login.username,email:r[a].email,cell:r[a].cell};n=n.concat(c)}return Object.assign({},e,{isPending:!1,directory:n});case"REQUEST_PEOPLE_FAILED":return Object.assign({},e,{isPending:!1,error:t.payload});default:return e}}}),N=Object(s.d)(D,Object(s.a)(u.a,S));i.a.render(a.a.createElement(o.a,{store:N},a.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,2,1]]]);
//# sourceMappingURL=main.ac2c3e64.chunk.js.map