(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{298:function(e,t,a){e.exports={cover_image:"ProfileInfo_cover_image__3eF2B",descriptionBlock:"ProfileInfo_descriptionBlock__3tEU-"}},299:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__2gq7w",posts:"MyPosts_posts__21fZN"}},300:function(e,t,a){e.exports={item:"Post_item__3dOjk"}},301:function(e,t,a){"use strict";a.r(t);var s=a(27),n=a(28),o=a(30),r=a(29),u=a(31),c=a(0),i=a.n(c),l=a(298),p=a.n(l),m=a(41),f=a(126),d=function(e){var t=Object(c.useState)(!1),a=Object(f.a)(t,2),s=a[0],n=a[1],o=Object(c.useState)(e.status),r=Object(f.a)(o,2),u=r[0],l=r[1];Object(c.useEffect)((function(){l(e.status)}),[e.status]);return i.a.createElement("div",null,!s&&i.a.createElement("div",null,i.a.createElement("span",{onDoubleClick:function(){n(!0)}},e.status||"No status")),s&&i.a.createElement("div",null,i.a.createElement("input",{autoFocus:!0,onBlur:function(){n(!1),e.updateStatus(u)},onChange:function(e){l(e.currentTarget.value)},value:u})))},b=function(e){var t=e.profile,a=e.status,s=e.updateStatus;return t?i.a.createElement("div",null,i.a.createElement("div",{className:p.a.cover_image},i.a.createElement("img",{src:"https://abduzeedo.com/sites/default/files/originals/0ec5c569226647.5b79b483096c1.jpg"})),i.a.createElement("div",{className:p.a.descriptionBlock},i.a.createElement("img",{src:t.photos.large}),i.a.createElement(d,{status:a,updateStatus:s}))):i.a.createElement(m.a,null)},E=a(42),g=a(299),h=a.n(g),v=a(300),j=a.n(v),P=function(e){return i.a.createElement("div",{className:j.a.item},i.a.createElement("img",{src:"https://i.pinimg.com/originals/13/04/f2/1304f2e4626bdbe0070fef0b9756408d.jpg",alt:""}),e.message,i.a.createElement("div",null,i.a.createElement("span",null,"Like")," ",e.likeCount,i.a.createElement("span",null," Comments")," ",e.comments))},O=a(87),_=a(125),k=a(84),S=a(32),y=Object(k.a)(10),w=Object(_.a)({form:"ProfileAddNewPostForm"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(O.a,{component:S.b,name:"newPostText",placeholder:"Post Message",validate:[k.b,y]})),i.a.createElement("div",null,i.a.createElement("button",null,"Add post")))})),B=function(e){var t=Object(E.a)(e.posts).reverse().map((function(e){return i.a.createElement(P,{message:e.message,likeCount:e.likeCount,key:e.id,comments:e.comments})}));i.a.createRef();return i.a.createElement("div",{className:h.a.postsBlock},i.a.createElement("div",null,i.a.createElement("h2",null,"My posts"),i.a.createElement(w,{onSubmit:function(t){e.addPost(t.newPostText)}})),i.a.createElement("div",{className:h.a.posts},t))},N=a(93),x=a(15),C=Object(x.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(Object(N.a)(t))}}}))(B),I=function(e){return i.a.createElement("div",null,i.a.createElement(b,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),i.a.createElement(C,null))},M=a(24),T=(a(143),a(7)),U=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.autorizedUserId)||this.props.history.push("/login"),this.props.getUsersProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return i.a.createElement(I,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),t}(i.a.Component);t.default=Object(T.d)(Object(x.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,autorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUsersProfile:N.d,getStatus:N.c,updateStatus:N.e}),M.f)(U)}}]);
//# sourceMappingURL=3.7744b8fb.chunk.js.map