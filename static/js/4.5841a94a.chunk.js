(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{297:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__iVzMW",dialogsItems:"Dialogs_dialogsItems__3GBP4",item:"Dialogs_item__30HFl",activeLink:"Dialogs_activeLink__2asRd",messages:"Dialogs_messages__1nfoR",message:"Dialogs_message__39_aB"}},302:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),i=t(297),l=t.n(i),m=function(e){return n.a.createElement("div",{className:l.a.message},e.message)},o=t(10),c=function(e){var a="/dialogs/"+e.id;return n.a.createElement("div",{className:l.a.item},n.a.createElement(o.b,{to:a},e.name))},r=t(24),g=t(87),d=t(125),u=t(32),_=t(84),f=Object(_.a)(30),E=Object(d.a)({form:"dialogAddMessageForm"})((function(e){return n.a.createElement("form",{onSubmit:e.handleSubmit},n.a.createElement("div",null,n.a.createElement(g.a,{component:u.b,name:"newMessageText",placeholder:"Enter your message",validate:[_.b,f]})),n.a.createElement("div",null,n.a.createElement("button",null,"Send message")))})),b=function(e){n.a.createRef();var a=e.dialogsPage,t=a.dialogsData.map((function(e){return n.a.createElement(c,{id:e.id,key:e.id,name:e.name})})),s=a.messages.map((function(e){return n.a.createElement(m,{message:e.message,key:e.id})}));a.newMessageText;return e.isAuth?n.a.createElement("div",{className:l.a.dialogs},n.a.createElement("div",{className:l.a.dialogsItems},t),n.a.createElement("div",{className:l.a.messages},n.a.createElement(E,{onSubmit:function(a){e.snedMessage(a.newMessageText)}}),n.a.createElement("div",null,s))):n.a.createElement(r.a,{to:"/login"})},p=t(124),v=t(15),D=t(143),M=t(7);a.default=Object(M.d)(Object(v.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{snedMessage:function(a){e(Object(p.a)(a))}}})),D.a)(b)}}]);
//# sourceMappingURL=4.5841a94a.chunk.js.map