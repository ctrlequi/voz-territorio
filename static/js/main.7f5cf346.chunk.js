(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,n){e.exports=n(51)},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(3),o=n.n(a),c=n(27),r=n.n(c),i=(n(37),n(5)),l=n(4),u=n(7),s=n(6),m=n(8),p=(n(38),n(19)),h=n(15),d=(n(39),function(e){return o.a.createElement(o.a.Fragment,null,"Home")}),b=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){console.log("Home Did Mount")}},{key:"componentWillUnmount",value:function(){console.log("Home Will unMount")}},{key:"render",value:function(){return o.a.createElement(d,null)}}]),t}(a.Component),f=n(28),w=(n(40),n(22)),v=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={viewport:{latitude:19,longitude:-100,zoom:6},accessToken:"pk.eyJ1IjoicmFsZXhyZHoiLCJhIjoiY2lmdHB2aGo2MTZ4MnQ1bHkzeDJyaDMzNyJ9.UHhEm9gA1_uwAztXjb7iTQ"},n.onViewportChange=function(e){e.width,e.height;var t=Object(f.a)(e,["width","height"]);n.setState({viewport:t})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.viewport;return o.a.createElement("div",{id:"map-container"},o.a.createElement(w.b,Object.assign({height:"100%",width:"100%",mapStyle:"mapbox://styles/mapbox/outdoors-v9"},t,{mapboxApiAccessToken:this.state.accessToken,onViewportChange:function(t){return e.onViewportChange(t)}}),o.a.createElement(w.a,{class:"marker",latitude:19,longitude:-99,offsetLeft:-20,offsetTop:-10},o.a.createElement("div",null,"Hola"))))}}]),t}(a.Component),j=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",null,o.a.createElement(p.b,{to:"/"}," Prodcutos "),o.a.createElement(p.b,{to:"/new-product"}," + Producto ")),o.a.createElement(h.c,null,o.a.createElement(h.a,{exact:!0,path:"/",component:b}),o.a.createElement(h.a,{exact:!0,path:"/map",component:v})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(p.a,null,o.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.7f5cf346.chunk.js.map