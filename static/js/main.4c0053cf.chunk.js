(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(e,t,n){e.exports=n(63)},45:function(e,t,n){},46:function(e,t,n){},51:function(e,t,n){},54:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(27),r=n.n(l),i=(n(45),n(5)),c=n(4),s=n(7),u=n(6),d=n(8),m=(n(46),n(13)),p=n(14),h=n(19),v=n(36),g=(n(51),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){console.log("Home Did Mount")}},{key:"componentWillUnmount",value:function(){console.log("Home Will unMount")}},{key:"render",value:function(){return o.a.createElement("div",{className:"Home"},o.a.createElement(v.a,{url:"https://ralexrdz.github.io/mongoose-intro/",width:"100%",height:"100%",id:"myId",className:"myClassname",display:"initial",position:"relative"}))}}]),t}(a.Component)),b=n(37),E=n(30),f=(n(54),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={viewport:{latitude:19,longitude:-100,zoom:6},accessToken:"pk.eyJ1IjoicmFsZXhyZHoiLCJhIjoiY2lmdHB2aGo2MTZ4MnQ1bHkzeDJyaDMzNyJ9.UHhEm9gA1_uwAztXjb7iTQ",popup:null},n.onViewportChange=function(e){e.width,e.height;var t=Object(b.a)(e,["width","height"]);n.setState({viewport:t})},n.showPop=function(e){e?(console.log("obs popup",e),n.setState({popup:e})):n.setState({popup:null})},n.goToObservationDetails=function(e){console.log("goToObservationDetails",e),n.setState({redirect:n.state.popup.id})},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;if(this.state.redirect)return o.a.createElement(h.a,{to:"/observations/".concat(this.state.popup.id)});var t=this.state.viewport,n=this.props.observations.map(function(t){return o.a.createElement(E.a,{latitude:parseFloat(t.lat),longitude:parseFloat(t.lng),offsetLeft:-20,offsetTop:-10,key:t.id},o.a.createElement("div",{className:"marker",onClick:function(){return e.showPop(t)}}))}),a=null;if(this.state.popup){console.log("state pop",this.state.popup);var l=this.state.popup,r=l.contents.find(function(e){return"image"===e.type});a=o.a.createElement(E.b,{latitude:parseFloat(l.lat),longitude:parseFloat(l.lng),offsetLeft:-20,offsetTop:-10},o.a.createElement("div",{className:"popup",onClick:function(){return e.goToObservationDetails(l)}},r&&o.a.createElement("div",{className:"popupThumb"},o.a.createElement("img",{src:r.imageUrl,alt:""})),o.a.createElement("div",{className:"popupTitle"},l.title)))}return o.a.createElement("div",{id:"map-container"},o.a.createElement(E.c,Object.assign({height:"100%",width:"100%",mapStyle:"mapbox://styles/mapbox/outdoors-v9"},t,{mapboxApiAccessToken:this.state.accessToken,onViewportChange:function(t){return e.onViewportChange(t)}}),n,a))}}]),t}(a.Component)),C=Object(m.b)(function(e){return{user:e.user,observations:e.observations}})(f),y=n(17),O=n(3),A=n(18),j=(n(60),function(e){var t=Object(y.a)({},e),n=(t.title,t.lat,t.lng,t.date,t.hour,t.min,t.observationContents),a=t.onAddObservation,l=t.onFieldChange,r=t.onContentChange,i=t.onSetDateNow,c=t.onSetMyLocation,s=t.onAddSubtitle,u=t.onAddTextArea,d=t.onAddImage,m=t.onAddVideo,p=n.map(function(e){var t;switch(e.type){case"paragraph":t=o.a.createElement("div",{key:e.id},o.a.createElement("textarea",{id:e.id,value:e.text,onChange:r}));break;case"subtitle":t=o.a.createElement("div",{key:e.id},o.a.createElement("input",{id:e.id,className:"subtitle",value:e.text,onChange:r}));break;case"image":console.log("imageUrl",e),t=o.a.createElement("div",{key:e.id},o.a.createElement("img",{src:e.url,alt:""}));break;case"video":console.log(e),t=o.a.createElement("div",{key:e.id},o.a.createElement("iframe",{title:"video",width:"560",height:"315",src:e.url,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))}return t});return o.a.createElement("section",{className:"AddObservation"},o.a.createElement("header",null,o.a.createElement("div",{id:"observationInfo"},o.a.createElement("div",null,"Titulo: ",o.a.createElement("input",{name:"title",type:"text",onChange:l})),o.a.createElement("div",null,o.a.createElement("div",null,"Fecha: ",o.a.createElement("input",{name:"date",type:"date",onChange:l,lang:"es"})),o.a.createElement("div",null,"Hora: ",o.a.createElement("input",{className:"small",name:"hour",type:"number",onChange:l}),"Minuto: ",o.a.createElement("input",{className:"small",name:"min",type:"number",onChange:l})),o.a.createElement("div",null,o.a.createElement("button",{onClick:i},"Hoy"))),o.a.createElement("br",null),o.a.createElement("div",null,"Ubicaci\xf3n:",o.a.createElement("div",null,"lat: ",o.a.createElement("input",{className:"small",name:"lat",type:"text",onChange:l}),"\xa0 lng: ",o.a.createElement("input",{className:"small",name:"lng",type:"text",onChange:l})),o.a.createElement("div",null,o.a.createElement("button",{onClick:c},"Mi ubicaci\xf3n actual"),o.a.createElement("button",{onClick:c},"Ubicar en mapa"))),o.a.createElement("br",null),o.a.createElement("div",null,"Palabras clave (divide usando comas): ",o.a.createElement("input",{name:"tags",type:"text",onChange:l}))),o.a.createElement("div",{id:"observationAdd"},o.a.createElement("button",{onClick:a},"Registrar Observaci\xf3n"))),o.a.createElement("br",null),o.a.createElement("div",{id:"observationContent"},o.a.createElement("header",null,o.a.createElement("div",null,o.a.createElement("button",{onClick:s},"Agrega Subtitulo"),"\xa0",o.a.createElement("button",{onClick:u},"Agrega Parrafo")),o.a.createElement("br",null),o.a.createElement("div",null,o.a.createElement("input",{type:"text",name:"imageUrl",placeholder:"url",onChange:l})," o ",o.a.createElement("input",{type:"file",name:"imageFile",onChange:l}),o.a.createElement("button",{onClick:d},"Agrega imagen")),o.a.createElement("br",null),o.a.createElement("div",null,o.a.createElement("input",{type:"text",name:"videoUrl",onChange:l}),o.a.createElement("button",{onClick:m},"Agrega video"))),o.a.createElement("div",{id:"contents"},p)))}),w=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={title:"",lat:0,lng:0,date:null,hour:0,min:0,tags:[],imageUrl:"",videoUrl:"",imageFile:"",observationContents:[]},n.handleSetDateNow=function(){console.log("setDateNow")},n.handleSetMyLocation=function(){console.log("setMyLocation")},n.handleAddSubtitle=function(){console.log("addSubtitle");var e={type:"subtitle",text:"",id:n.state.observationContents.length};n.setState({observationContents:[].concat(Object(A.a)(n.state.observationContents),[e])})},n.handleAddTextArea=function(){var e={type:"paragraph",text:"",id:n.state.observationContents.length};n.setState({observationContents:[].concat(Object(A.a)(n.state.observationContents),[e])})},n.handleAddImage=function(){console.log("addImage");var e={type:"image",url:n.state.imageUrl,id:n.state.observationContents.length};n.setState({observationContents:[].concat(Object(A.a)(n.state.observationContents),[e])})},n.handleAddVideo=function(){console.log("addVideo"),console.log(n.state.videoUrl);var e={type:"video",url:n.state.videoUrl,id:n.state.observationContents.length};n.setState({observationContents:[].concat(Object(A.a)(n.state.observationContents),[e])})},n.handleContentChange=function(e){console.log("handleContentChange",e.target.id);var t=n.state.observationContents;t.find(function(t){return t.id==e.target.id}).text=e.target.value,n.setState({observationContents:Object(A.a)(t)})},n.handleContentDelete=function(e){console.log("handleContentChange",e)},n.handleContentChangePosition=function(e){console.log("handleContentChange",e)},n.handleFieldChange=function(e){if("videoUrl"===e.target.name){if(e.target.value.split("v=")[1]){var t=e.target.value.split("v=")[1].split("&")[0];n.setState({videoUrl:"https://www.youtube.com/embed/".concat(t)})}}else n.setState(Object(O.a)({},e.target.name,e.target.value))},n.handleAddObservation=function(){console.log("addObservation"),n.props.dispatch({type:"ADD_OBSERVATION",title:n.state.title,lat:n.state.lat,lng:n.state.lng,date:n.state.date,hour:n.state.hour,min:n.state.min,tags:n.state.tags,imageUrl:n.state.imageUrl,videoUrl:n.state.videoUrl,imageFile:n.state.imageFile,observationContents:n.state.observationContents}),n.setState({redirect:!0})},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){console.log("AddObservation Did Mount")}},{key:"componentWillUnmount",value:function(){console.log("AddObservation Will unMount")}},{key:"render",value:function(){var e=Object(y.a)({},this.state,{onFieldChange:this.handleFieldChange,onContentChange:this.handleContentChange,onSetDateNow:this.handleSetDateNow,onSetMyLocation:this.handleSetMyLocation,onAddSubtitle:this.handleAddSubtitle,onAddTextArea:this.handleAddTextArea,onAddImage:this.handleAddImage,onAddVideo:this.handleAddVideo,onAddObservation:this.handleAddObservation});return o.a.createElement(j,e)}}]),t}(a.Component),k=Object(m.b)(function(e){return{user:e.user}})(w),S=(n(61),function(e){var t=Object(y.a)({},e),n=t.onNameChange,a=t.name,l=t.addPerson;return o.a.createElement("div",{className:"Register"},o.a.createElement("input",{type:"text",onChange:n,value:a}),o.a.createElement("button",{onClick:l},"Registrsar"))}),D=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={name:"",newId:null,redirect:!1},n.handleNameChange=function(e){n.setState({name:e.target.value})},n.addPerson=function(){n.props.dispatch({type:"ADD_PERSON",userId:n.state.newId,name:n.state.name}),n.setState({redirect:!0})},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){console.log("Register Did Mount")}},{key:"componentWillUnmount",value:function(){console.log("Register Will unMount")}},{key:"render",value:function(){if(this.state.redirect)return o.a.createElement(h.a,{to:"/"});var e={name:this.state.name,onNameChange:this.handleNameChange,addPerson:this.addPerson};return o.a.createElement(S,e)}}]),t}(a.Component),N=Object(m.b)()(D),x=(n(62),function(e){var t=Object(y.a)({},e),n=t.title,a=t.lat,l=t.lng,r=t.date,i=t.hour,c=t.min,s=t.tags,u=t.contents.map(function(e){switch(e.type){case"subtitle":return o.a.createElement("h3",null,"c.text");case"paragraph":return o.a.createElement("p",null,"c.text");case"image":return o.a.createElement("div",null,o.a.createElement("img",{src:e.imageUrl,alt:""}));case"video":return o.a.createElement("div",{key:e.id},o.a.createElement("iframe",{title:"video",width:"560",height:"315",src:e.url,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}));case"link":return o.a.createElement("div",null,o.a.createElement("a",{href:e.url},e.text))}});return o.a.createElement("div",{className:"ObservationDetail"},o.a.createElement("h1",null,n),o.a.createElement("div",null,"lat: ",a," lng: ",l),o.a.createElement("div",null,r&&r.toString()," ",i,":",c),o.a.createElement("ul",null,s&&s.map(function(e){return o.a.createElement("li",null,"#",e)})),u)}),U=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={name:"",newId:null,redirect:!1},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){console.log("ObservationDetail Did Mount")}},{key:"componentWillUnmount",value:function(){console.log("ObservationDetail Will unMount")}},{key:"render",value:function(){var e=this;console.log(this.props.match);var t=this.props.observations.find(function(t){return t.id==e.props.match.params.id});console.log(t);var n=Object(y.a)({},t);return o.a.createElement(x,n)}}]),t}(a.Component),M=Object(m.b)(function(e){return{user:e.user,observations:e.observations}})(U),I=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return console.log("user",this.props.user),console.log("observations",this.props.observations),o.a.createElement(p.b,{basename:"/"},o.a.createElement("div",{className:"App"},o.a.createElement("header",null,o.a.createElement(p.c,{to:"/"}," Home "),o.a.createElement(p.c,{to:"/map"}," Map "),this.props.user?o.a.createElement(p.c,{to:"/profile"}," Perfil de ",this.props.user.name," "):o.a.createElement(p.c,{to:"/register"}," Registro "),o.a.createElement(p.c,{to:"/add-observation"}," Nueva observaci\xf3n ")),o.a.createElement("section",{className:"Container"},o.a.createElement(h.d,null,o.a.createElement(h.b,{exact:!0,path:"/",component:g}),o.a.createElement(h.b,{exact:!0,path:"/map",component:C}),o.a.createElement(h.b,{exact:!0,path:"/register",component:N}),o.a.createElement(h.b,{exact:!0,path:"/add-observation",component:k}),o.a.createElement(h.b,{exact:!0,path:"/observations/:id",component:M})))))}}]),t}(a.Component),T=Object(m.b)(function(e){return{user:e.user,observations:e.observations}})(I);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=n(22);var P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(console.log("state people",e),t.type){case"ADD_PERSON":console.log("ADD_PERSON",t);var n={userId:t.id,name:t.name};return[].concat(Object(A.a)(e),[n]);default:return e}},R=[{title:"Hola asdasd asdjkhasd qweq we kjahsd",lat:19,lng:-99,id:123,contents:[{type:"image",imageUrl:"http://1.bp.blogspot.com/-kesHIYYUBqk/TnhfgS_3ofI/AAAAAAAAFso/AdSpsDicrXg/s1600/FoolMoon.jpg"}]}];var H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(console.log("state observations",e),t.type){case"ADD_OBSERVATION":var n={title:t.title,lat:t.lat,lng:t.lng,date:t.date,hour:t.hour,tags:t.tags,imageUrl:t.imageUrl,videoUrl:t.videoUrl,imageFile:t.imageFile,observationContents:t.observationContents};return[].concat(Object(A.a)(e),[n]);case"REMOVE_OBSERVATION":return e.filter(function(e){return e.observationId!=t.id});default:return e}};var V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(console.log("state usere",e),t.type){case"ADD_PERSON":return{userId:t.id,name:t.name};default:return e}},W=Object(F.b)({people:P,observations:H,user:V});r.a.render(o.a.createElement(m.a,{store:Object(F.c)(W)},o.a.createElement(p.a,{baseUrl:"/hw-react-redux"},o.a.createElement(T,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[40,1,2]]]);
//# sourceMappingURL=main.4c0053cf.chunk.js.map