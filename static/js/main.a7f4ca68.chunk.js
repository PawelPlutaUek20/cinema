(this.webpackJsonpkino=this.webpackJsonpkino||[]).push([[0],{12:function(e,t,n){e.exports={space:"Reservation_space__3DaUI",seat:"Reservation_seat__3xJMx",reserved:"Reservation_reserved__2C3OL",selected:"Reservation_selected__3dpJc",info:"Reservation_info__2soKp",infoText:"Reservation_infoText__2CHoA"}},44:function(e,t,n){},70:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(18),r=n.n(s),i=(n(44),n(39)),o=n(6),l=n(14),j=n(8),d=n(17),u=n(21),b=Object(u.b)({name:"cinema",initialState:{seatsSelected:[],seatsNumber:0,seatsNext:!0},reducers:{makeReservation:function(e,t){e.seatsSelected=[],e.seatsNumber=t.payload.seatsNumber,e.seatsNext=t.payload.seatsNext},select:function(e,t){e.seatsSelected=[].concat(Object(d.a)(e.seatsSelected),[t.payload])},unselect:function(e,t){e.seatsSelected=e.seatsSelected.filter((function(e){return e.id!==t.payload.id}))}}}),f=b.actions,m=f.makeReservation,h=f.select,x=f.unselect,O=function(e){return e.cinema},p=b.reducer,v=n(12),y=n.n(v),g=n(2),N=function(e){var t=Object(j.b)(),n=Object(j.c)(O);return Object(g.jsx)("div",{className:"".concat(y.a.space," ").concat(e.seat?y.a.seat:""," ").concat(e.seat&&e.seat.reserved?y.a.reserved:e.seat&&n.seatsSelected.some((function(t){return t.id===e.seat.id}))?y.a.selected:""),onClick:function(){n.seatsSelected.some((function(t){return t.id===e.seat.id}))?t(x(e.seat)):e.seat&&!n.seatsSelected.some((function(t){return t.id===e.seat.id}))&&t(h(e.seat))}})},w=function(e){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("div",{className:"".concat(y.a.space," ").concat(y.a.seat," ").concat(e.type&&y.a[e.type]," ").concat(y.a.info)}),Object(g.jsx)("div",{className:y.a.infoText,children:e.name})]})},k=n(73),S=n(75),_=function(e,t,n){var c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],a=n.filter((function(e){return!e.reserved}));if(e>a.length||e<=0)return[];if(t){for(var s=function(t){for(var n=a.filter((function(e){return e.cords.x===t})),s=0;s<n.length-e+1;s++){var r=n.slice(s,e+s);r[e-1].cords.y-r[0].cords.y===e-1&&c.push(r)}},r=0;r<a[a.length-1].cords.x+1;r++)s(r);c=c[Math.floor(Math.random()*c.length)]?c[Math.floor(Math.random()*c.length)]:[]}else if(!t){for(var i=new Set;Object(d.a)(i).length<e;)i.add(a[Math.floor(Math.random()*a.length)]);c=Object(d.a)(i)}return c},z=n(37),C=n.n(z);function M(){var e=Object(j.b)(),t=Object(o.f)(),n=Object(j.c)(O),a=Object(c.useState)([]),s=Object(l.a)(a,2),r=s[0],i=s[1],d=Object(c.useState)([]),u=Object(l.a)(d,2),b=u[0],f=u[1];Object(c.useEffect)((function(){C.a.get("/cinema/db.json").then((function(e){return e.data.seats})).catch((function(e){console.log(e)})).then((function(e){i(e),f(function(e){var t=Array.from(Array(10),(function(){return new Array(15).fill(null)}));return e.forEach((function(e){t[e.cords.x][e.cords.y]=e})),t}(e))}))}),[]),Object(c.useEffect)((function(){n.seatsSelected.length||_(n.seatsNumber,n.seatsNext,r).forEach((function(t){return e(h(t))}))}),[e,r,n]);return Object(g.jsxs)(k.a,{className:"d-flex flex-column vh-100 justify-content-center align-items-center",children:[Object(g.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(15, 50px)",gap:"10px"},children:b.map((function(e,t){return e.map((function(e,n){return Object(g.jsx)(N,{seat:e},"s".concat(t).concat(n))}))}))}),Object(g.jsxs)("div",{className:"d-flex mt-5 justify-content-center align-items-center w-100",children:[Object(g.jsx)(w,{name:"Miejsca Dost\u0119pne",type:""}),Object(g.jsx)(w,{name:"Miejsca zarezerwowane",type:"reserved"}),Object(g.jsx)(w,{name:"Tw\xf3j wyb\xf3r",type:"selected"}),Object(g.jsx)(S.a,{className:"rounded-0 h-100",variant:"outline-dark",onClick:function(){t.push("/summary")},style:{width:"230px",marginLeft:"78px"},children:"Rezerwuj"})]})]})}var R=n(74),T=n(38);function E(){var e=Object(j.b)(),t=Object(o.f)(),n=Object(j.c)(O),a=Object(c.useState)(n.seatsNumber),s=Object(l.a)(a,2),r=s[0],i=s[1],d=Object(c.useState)(n.seatsNext),u=Object(l.a)(d,2),b=u[0],f=u[1];return Object(g.jsx)(k.a,{className:"d-flex vh-100 justify-content-center align-items-center",children:Object(g.jsxs)(R.a,{onSubmit:function(n){n.preventDefault(),e(m({seatsNumber:r,seatsNext:b})),t.push("/reservation")},children:[Object(g.jsxs)(R.a.Group,{as:R.a.Row,controlId:"formSeatsNumber",children:[Object(g.jsx)(R.a.Label,{column:!0,children:"Liczba miejsc:"}),Object(g.jsx)(T.a,{children:Object(g.jsx)(R.a.Control,{type:"number",value:r,onChange:function(e){return i(parseInt(e.target.value))}})})]}),Object(g.jsx)(R.a.Group,{children:Object(g.jsx)(R.a.Check,{label:"Czy miejsca maj\u0105 by\u0107 obok siebie?",checked:b,onChange:function(e){return f(e.target.checked)}})}),Object(g.jsx)(S.a,{block:!0,type:"submit",className:"rounded-0",variant:"outline-dark",style:{height:"50px"},children:"Wybierz miejsca"})]})})}function W(){var e=Object(j.c)(O);return Object(g.jsxs)(k.a,{className:"ml-4",children:[Object(g.jsx)("h3",{className:"font-weight-bold mt-4",children:"Twoja rezerwacja przebieg\u0142a pomy\u015blnie!"}),Object(g.jsx)("p",{className:"mt-4",children:"Wybra\u0142e\u015b miejsca:"}),Object(g.jsx)("ul",{children:e.seatsSelected.map((function(e){return Object(g.jsxs)("li",{children:["rz\u0105d ",e.cords.x,", miejsce ",e.cords.y," (",e.id,")"]},e.id)}))}),Object(g.jsx)("p",{className:"font-weight-bold mt-5",children:"Dzi\u0119kujemy! W razie problem\xf3w prosimy o kontakt z dzie\u0142em administracji."})]})}n(70);var A=function(){return Object(g.jsx)(i.a,{children:Object(g.jsxs)(o.c,{children:[Object(g.jsx)(o.a,{path:"/reservation",children:Object(g.jsx)(M,{})}),Object(g.jsx)(o.a,{path:"/summary",children:Object(g.jsx)(W,{})}),Object(g.jsx)(o.a,{path:"/",children:Object(g.jsx)(E,{})})]})})},D=Object(u.a)({reducer:{cinema:p}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(71);r.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(j.a,{store:D,children:Object(g.jsx)(A,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[72,1,2]]]);
//# sourceMappingURL=main.a7f4ca68.chunk.js.map