(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{104:function(e,t,a){e.exports=a(256)},110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){},130:function(e,t,a){},131:function(e,t,a){},135:function(e,t,a){},256:function(e,t,a){"use strict";a.r(t);a(105);var n=a(3),c=a.n(n),r=a(93),l=a.n(r),o=(a(110),a(101)),i=a(6),u=a(15),s=(a(111),a(38)),m=(a(112),a(113),function(e){var t=e.name,a=e.slug,n=e.value,r=e.setValue;Object(s.a)(e,["name","slug","value","setValue"]);return c.a.createElement("input",{value:n,onChange:function(e){r(e.target.value)},className:"inputNav",placeholder:a,name:t,type:"text"})}),f=a(94),p=a.n(f).a.create({baseURL:"https://cubo-network.herokuapp.com/"}),E=function(e){var t=e.firstName,a=e.setFirstName,n=e.lastName,r=e.setLastName,l=e.participation,o=e.setParticipation;Object(s.a)(e,["firstName","setFirstName","lastName","setLastName","participation","setParticipation"]);return c.a.createElement("div",{className:"navBarComponent"},c.a.createElement(m,{value:t,setValue:a,slug:"First name",name:"firstName"}),c.a.createElement(m,{value:n,setValue:r,slug:"Last Name",name:"lastName"}),c.a.createElement(m,{value:l,setValue:o,slug:"Participation",name:"participation"}),c.a.createElement("button",{onClick:function(){return function(){if(""===t||""===n||""===l)return alert("Por favor preencha todos os campos!");p.post("user",{firstName:t,lastName:n,participation:l}).then((function(){return a(""),r(""),o(""),alert("Dados gravados com sucesso")})).catch((function(e){return console.log(e)}))}()},className:"buttonSendNav"},"Send"))};a(130);var b=function(){return c.a.createElement("div",{className:"titleDesc"},c.a.createElement("h1",null,"DATA"),c.a.createElement("h5",null,"Lorem ipsum dolor sit amet consectetur, adipisicing elit."))},v=(a(131),a(261)),d=0,N=function(e){return Object(n.useEffect)((function(){p.get("user").then((function(t){var a=t.data;e.setList(a)})).catch((function(e){return console.log(e)}))}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(v.a,{bordered:!0},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null),c.a.createElement("th",null,"First Name"),c.a.createElement("th",null,"Last Name"),c.a.createElement("th",null,"Participation"))),c.a.createElement("tbody",null,e.listTable.map((function(e){return c.a.createElement("tr",{key:d++},c.a.createElement("th",{scope:"row"},e.id),c.a.createElement("td",null,e.firstName),c.a.createElement("td",null,e.lastName),c.a.createElement("td",null,e.participation+"%"))})))))},h=a(39),g=(a(135),a(95)),j=a(103);var O=function(){var e=Object(n.useState)({}),t=Object(u.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(""),o=Object(u.a)(l,2),i=o[0],s=o[1],m=Object(n.useState)({}),f=Object(u.a)(m,2),E=f[0],b=f[1],v=Object(n.useState)({}),d=Object(u.a)(v,2),N=d[0],O=d[1],S=Object(n.useState)({}),L=Object(u.a)(S,2),k=L[0],w=L[1];return Object(n.useEffect)((function(){p.get("user").then((function(e){var t=e.data;b(function(e){for(var t=[e[0].participation],a=1;a<e.length;a++)t=[].concat(Object(h.a)(t),[e[a].participation]);return t}(t)),O(function(e){for(var t=[e[0].firstName+" "+e[0].lastName],a=1;a<e.length;a++)t=[].concat(Object(h.a)(t),[e[a].firstName+" "+e[a].lastName]);return t}(t)),w(function(e){var t=[e[0].color];console.log(e[0].color);for(var a=1;a<e.length;a++)t=[].concat(Object(h.a)(t),[e[a].color]);return t}(t)),s(t)})).catch((function(e){return console.log(e)}))}),[]),Object(n.useEffect)((function(){console.log(k)}),[k]),Object(n.useEffect)((function(){""===i?console.log("Error"):r({labels:N,datasets:[{data:E,backgroundColor:k,hoverBackgroundColor:k}]})}),[i]),c.a.createElement(j.c,{className:"containerGraphicPie"},c.a.createElement(g.Doughnut,{width:400,data:a,legend:{position:"right"},options:{responsive:!0}}))};var S=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(""),o=Object(u.a)(l,2),i=o[0],s=o[1],m=Object(n.useState)(""),f=Object(u.a)(m,2),p=f[0],v=f[1],d=Object(n.useState)(""),h=Object(u.a)(d,2),g=h[0],j=h[1];return c.a.createElement("div",null,c.a.createElement(E,{firstName:i,setFirstName:s,lastName:p,setLastName:v,participation:g,setParticipation:j}),c.a.createElement(b,null),c.a.createElement("div",{className:"containerData"},c.a.createElement(N,{listTable:a,setList:r}),c.a.createElement(O,null)))};var L=function(){return c.a.createElement(o.a,null,c.a.createElement(i.a,{path:"/",component:S,exact:!0}))};var k=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(L,null))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(k,null)),document.getElementById("root"))}},[[104,1,2]]]);
//# sourceMappingURL=main.674d00c7.chunk.js.map