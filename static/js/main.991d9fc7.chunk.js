(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(e,t,n){e.exports=n(61)},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(24),c=n.n(r),i=(n(44),n(5)),l=n(4),u=n(7),s=n(6),m=n(8),d=(n(45),n(15)),p=n(16),h=(n(46),function(e){return o.a.createElement(o.a.Fragment,null,"Home")}),b=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){console.log("Home Did Mount")}},{key:"componentWillUnmount",value:function(){console.log("Home Will unMount")}},{key:"render",value:function(){return o.a.createElement(h,null)}}]),t}(a.Component),v=n(34),f=(n(47),n(30)),O=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={viewport:{latitude:19,longitude:-100,zoom:6},accessToken:"pk.eyJ1IjoicmFsZXhyZHoiLCJhIjoiY2lmdHB2aGo2MTZ4MnQ1bHkzeDJyaDMzNyJ9.UHhEm9gA1_uwAztXjb7iTQ"},n.onViewportChange=function(e){e.width,e.height;var t=Object(v.a)(e,["width","height"]);n.setState({viewport:t})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.viewport;return o.a.createElement("div",{id:"map-container"},o.a.createElement(f.b,Object.assign({height:"100%",width:"100%",mapStyle:"mapbox://styles/mapbox/outdoors-v9"},t,{mapboxApiAccessToken:this.state.accessToken,onViewportChange:function(t){return e.onViewportChange(t)}}),o.a.createElement(f.a,{class:"marker",latitude:19,longitude:-99,offsetLeft:-20,offsetTop:-10},o.a.createElement("div",null,"Hola"))))}}]),t}(a.Component),g=n(20),j=(n(54),function(e){return o.a.createElement(o.a.Fragment,null,"AddObservation")}),E=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){console.log("AddObservation Did Mount")}},{key:"componentWillUnmount",value:function(){console.log("AddObservation Will unMount")}},{key:"render",value:function(){return o.a.createElement(j,null)}}]),t}(a.Component),y=Object(g.b)()(E),w=n(37),k=(n(55),function(e){var t=Object(w.a)({},e),n=t.onNameChange,a=t.name,r=t.addPerson;return o.a.createElement("div",{className:"Register"},o.a.createElement("input",{type:"text",onChange:n,value:a}),o.a.createElement("button",{onClick:r},"Registrsar"))}),A=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={name:null,newId:null},n.handleNameChange=function(e){n.setState({name:e.target.value})},n.addPerson=function(){n.props.dispatch({type:"ADD_PERSON",userId:n.state.newId,name:n.state.name}),n.setState({redirect:!0})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){console.log("Register Did Mount")}},{key:"componentWillUnmount",value:function(){console.log("Register Will unMount")}},{key:"render",value:function(){var e={name:this.state.name,onNameChange:this.handleNameChange,addPerson:this.addPerson};return o.a.createElement(k,e)}}]),t}(a.Component),C=Object(g.b)()(A),D=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(d.b,{basename:"/"},o.a.createElement("div",{className:"App"},o.a.createElement("header",null,o.a.createElement(d.c,{to:"/"}," Home "),o.a.createElement(d.c,{to:"/map"}," Map "),o.a.createElement(d.c,{to:"/register"}," Registro "),o.a.createElement(d.c,{to:"/add-observation"}," +Observaci\xf3n ")),o.a.createElement("section",{className:"Container"},o.a.createElement(p.c,null,o.a.createElement(p.a,{exact:!0,path:"/",component:b}),o.a.createElement(p.a,{exact:!0,path:"/map",component:O}),o.a.createElement(p.a,{exact:!0,path:"/register",component:C}),o.a.createElement(p.a,{exact:!0,path:"/add-observation",component:y})))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=n(19),I=n(26);var N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(console.log("state people",e),t.type){case"ADD_PERSON":console.log("ADD_PERSON",t);var n={userId:t.id,name:t.name};return[].concat(Object(I.a)(e),[n]);default:return e}};var R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(console.log("state observations",e),t.type){case"ADD_OBSERVATION":var n={observationId:t.id,userId:t.userId,coordinates:t.coordinates,date:t.date,title:t.title};return[].concat(Object(I.a)(e),[n]);case"REMOVE_OBSERVATION":return e.filter(function(e){return e.observationId!=t.id});default:return e}},x=Object(M.b)({people:N,observations:R});c.a.render(o.a.createElement(g.a,{store:Object(M.c)(x)},o.a.createElement(d.a,{baseUrl:"/hw-react-redux"},o.a.createElement(D,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[39,1,2]]]);
//# sourceMappingURL=main.991d9fc7.chunk.js.map