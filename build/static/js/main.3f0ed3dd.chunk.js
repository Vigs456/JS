(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,n){e.exports={nav:"Navbar_nav__2INr_",item:"Navbar_item__30dTO",activeLink:"Navbar_activeLink__3823A"}},124:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(42),r=n(8),o={dialogsData:[{id:1,name:"Anna"},{id:2,name:"John"},{id:3,name:"Sarah"},{id:4,name:"Nicole"},{id:5,name:"Rebeka"},{id:6,name:"Tonny"}],messages:[{id:1,message:"Hi"},{id:2,message:"Can i help you?"},{id:3,message:"Thanke you so much"},{id:4,message:"Thanke you so much"},{id:5,message:"Thanke you so much"}]},c=function(e){return{type:"ADD-MESSAGE",newMessageText:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MESSAGE":var n=t.newMessageText;Object(r.a)({},e.messages);return Object(r.a)({},e,{messages:[].concat(Object(a.a)(e.messages),[{id:6,message:n}])});default:return e}}},13:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var a=n(130),r=a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"24b3b3dc-906b-4087-ade3-45f2b4164002"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return r.post("follow/".concat(e))},unfollow:function(e){return r.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Please profileAPI object"),c.getProfile(e)}},c={getProfile:function(e){return r.get("profile/"+e)},getStatus:function(e){return r.get("profile/status/"+e)},updateStatus:function(e){return r.put("profile/status",{status:e})}},i={me:function(){return r.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return r.delete("auth/login")}}},131:function(e,t,n){e.exports={onlineFriends:"onlineFriends_onlineFriends__27RAw"}},132:function(e,t,n){},133:function(e,t,n){},134:function(e,t,n){},135:function(e,t,n){},137:function(e,t,n){e.exports={userPhoto:"users_userPhoto__2ICeM"}},138:function(e,t,n){e.exports=n.p+"static/media/user.ce8e7ab8.png"},139:function(e,t,n){e.exports=n.p+"static/media/preloader.98e49670.gif"},143:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(27),r=n(28),o=n(30),c=n(29),i=n(31),s=n(0),u=n.n(s),l=n(24),m=n(15),f=function(e){return{isAuth:e.auth.isAuth}},d=function(e){var t=function(t){function n(){return Object(a.a)(this,n),Object(o.a)(this,Object(c.a)(n).apply(this,arguments))}return Object(i.a)(n,t),Object(r.a)(n,[{key:"render",value:function(){return this.props.isAuth?u.a.createElement(e,this.props):u.a.createElement(l.a,{to:"/login"})}}]),n}(u.a.Component);return Object(m.b)(f)(t)}},169:function(e,t,n){e.exports=n(296)},174:function(e,t,n){},175:function(e,t,n){},296:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(0),r=n.n(a),o=n(62),c=n.n(o),i=(n(174),n(27)),s=n(28),u=n(30),l=n(29),m=n(31),f=(n(175),n(88)),d=n.n(f),p=n(10),g=function(e){return r.a.createElement("header",{className:d.a.header},r.a.createElement("img",{src:"https://cdn.overleaf.com/img/ol-brand/overleaf_og_logo.png"}),r.a.createElement("div",{className:d.a.loginBlock},e.isAuth?r.a.createElement("div",null,r.a.createElement("div",null,e.login),r.a.createElement("div",null,r.a.createElement("button",{onClick:e.logout},"Log out"))):r.a.createElement(p.b,{to:"/login"},"Login")))},E=n(15),h=n(9),v=n.n(h),b=n(8),w=n(13),_=n(38),O={userId:null,email:null,login:null,isAuth:!1},S=function(e,t,n,a){return{type:"SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:a}}},P=function(){return function(e){var t,n,a,r,o;return v.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,v.a.awrap(w.a.me());case 2:0===(t=c.sent).data.resultCode&&(n=t.data.data,a=n.id,r=n.login,o=n.email,e(S(a,o,r,!0)));case 4:case"end":return c.stop()}}))}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(b.a)({},e,{},t.payload);default:return e}},j=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(g,this.props)}}]),t}(r.a.Component),C=Object(E.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(e){return v.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.awrap(w.a.logout());case 2:0===t.sent.data.resultCode&&e(S(null,null,null,!1));case 4:case"end":return t.stop()}}))}}})(j),N=n(11),I=n.n(N),T=n(131),k=n.n(T),L=function(e){return r.a.createElement("div",{className:k.a.onlineFriends},r.a.createElement("img",{src:"https://sun9-62.userapi.com/c851136/v851136640/197f55/s9I257LWrm4.jpg?ava=1",alt:""}),r.a.createElement("img",{src:"https://sun9-21.userapi.com/c853516/v853516537/31d53/oSPxzDGhDow.jpg?ava=1",alt:""}),r.a.createElement("img",{src:"https://sun9-46.userapi.com/c855636/v855636465/1de064/LlZyD_A701Y.jpg?ava=1",alt:""}))},A=function(){return r.a.createElement("nav",{className:I.a.nav},r.a.createElement("div",{className:I.a.item},r.a.createElement(p.b,{to:"/Profile",activeClassName:I.a.activeLink},"Profile")),r.a.createElement("div",{className:I.a.item},r.a.createElement(p.b,{to:"/Dialogs",activeClassName:I.a.activeLink},"Messages")),r.a.createElement("div",{className:I.a.item},r.a.createElement(p.b,{to:"/Users",activeClassName:I.a.activeLink},"Users")),r.a.createElement("div",{className:I.a.item},r.a.createElement(p.b,{to:"/News",activeClassName:I.a.activeLink},"News")),r.a.createElement("div",{className:I.a.item},r.a.createElement(p.b,{to:"/Music",activeClassName:I.a.activeLink},"Music")),r.a.createElement("div",{className:I.a.item},r.a.createElement(p.b,{to:"/Settings",activeClassName:I.a.activeLink},"Settings")),r.a.createElement("div",{className:I.a.item},r.a.createElement(p.b,{to:"/Friends",activeClassName:I.a.activeLink},"Friends")),r.a.createElement("div",null,r.a.createElement(p.b,{to:"/Friends",activeClassName:I.a.activeLink},r.a.createElement(L,null))))},x=n(132),U=n.n(x),F=function(e){return r.a.createElement("div",{className:U.a.app_wrapper_conent},"Music")},R=n(133),z=n.n(R),D=function(e){return r.a.createElement("div",{className:z.a.app_wrapper_conent},"News")},G=n(134),M=n.n(G),W=function(e){return r.a.createElement("div",{className:M.a.app_wrapper_conent},"Settings")},H=n(135),q=n.n(H),B=function(e){return r.a.createElement("div",{className:q.a.app_wrapper_conent},"Friends")},Z=n(51),J=n(65),V=n(126),X=n(68),Y=n.n(X),K=n(136),$=n.n(K),Q=function(e){for(var t=e.totalItemsCount,n=e.pageSize,o=e.currentPage,c=e.onPageChanged,i=e.portionSize,s=void 0===i?10:i,u=Math.ceil(t/n),l=[],m=1;m<=u;m++)l.push(m);var f=Math.ceil(u/s),d=Object(a.useState)(1),p=Object(V.a)(d,2),g=p[0],E=p[1],h=(g-1)*s+1,v=g*s;return r.a.createElement("div",{className:Y.a.paginator},g>1&&r.a.createElement("button",{onClick:function(){E(g-1)}},"PREV"),l.filter((function(e){return e>=h&&e<=v})).map((function(e){return r.a.createElement("span",{className:$()(Object(J.a)({},Y.a.selectedPage,o===e),Y.a.pageNumber),key:e,onClick:function(t){c(e)}},e)})),f>g&&r.a.createElement("button",{onClick:function(){E(g+1)}},"NEXT"))},ee=n(137),te=n.n(ee),ne=n(138),ae=n.n(ne),re=function(e){var t=e.user,n=e.followingInProgress,a=e.unfollow,o=e.follow;return r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("div",null,r.a.createElement(p.b,{to:"/profile/"+t.id},r.a.createElement("img",{src:null!=t.photos.small?t.photos.small:ae.a,className:te.a.userPhoto}))),r.a.createElement("div",null,t.followed?r.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)}},"Unfollow"):r.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){o(t.id)}},"Follow"))),r.a.createElement("span",null,r.a.createElement("span",null,r.a.createElement("div",null," ",t.name," "),r.a.createElement("div",null," ",t.status," ")),r.a.createElement("span",null,r.a.createElement("div",null," ","user.location.country"," "),r.a.createElement("div",null," ","user.location.city"," "))))},oe=function(e){var t=e.currentPage,n=e.totalUsersCount,a=e.pageSize,o=e.onPageChanged,c=e.users,i=Object(Z.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged","users"]);return r.a.createElement("div",null,r.a.createElement(Q,{currentPage:t,onPageChanged:o,totalItemsCount:n,pageSize:a}),r.a.createElement("div",null,c.map((function(e){return r.a.createElement(re,{user:e,key:e.id,followingInProgress:i.followingInProgress,follow:i.follow,unfollow:i.unfollow})}))))},ce=n(42),ie=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(b.a)({},e,{},a):e}))},se={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},ue=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},le=function(e){return{type:"FOLLOW",userId:e}},me=function(e){return{type:"UNFOLLOW",userId:e}},fe=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},de=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},pe=function(e,t,n,a){return v.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t(de(!0,e)),r.next=3,v.a.awrap(n(e));case 3:0==r.sent.data.resultCode&&t(a(e)),t(de(!1,e));case 6:case"end":return r.stop()}}))},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(b.a)({},e,{users:ie(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(b.a)({},e,{users:ie(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(b.a)({},e,{users:t.users});case"SET_CURRENT_PAGE":return Object(b.a)({},e,{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(b.a)({},e,{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(b.a)({},e,{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(b.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(ce.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},Ee=n(41),he=(n(143),n(7)),ve=n(140),be=Object(ve.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),we=function(e){return e.usersPage.pageSize},_e=function(e){return e.usersPage.totalUsersCount},Oe=function(e){return e.usersPage.currentPage},Se=function(e){return e.usersPage.isFetching},Pe=function(e){return e.usersPage.followingInProgress},ye=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).onPageChanged=function(e){var t=n.props.pageSize;n.props.requestUsers(e,t)},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(Ee.a,null):null,r.a.createElement(oe,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),t}(r.a.Component),je=Object(he.d)(Object(E.b)((function(e){return console.log("mapStateToProps USERS"),{users:be(e),pageSize:we(e),totalUsersCount:_e(e),currentPage:Oe(e),isFetching:Se(e),followingInProgress:Pe(e)}}),{follow:function(e){return function(t){return v.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:pe(e,t,w.c.follow.bind(w.c),le);case 1:case"end":return n.stop()}}))}},unfollow:function(e){return function(t){return v.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:pe(e,t,w.c.unfollow.bind(w.c),me);case 1:case"end":return n.stop()}}))}},setCurrentPage:ue,toggleFollowingProgress:de,requestUsers:function(e,t){return function(n){var a;return v.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return n(fe(!0)),n(ue(e)),r.next=4,v.a.awrap(w.c.getUsers(e,t));case 4:a=r.sent,n(fe(!1)),n({type:"SET_USERS",users:a.items}),n({type:"SET_TOTAL_USERS_COUNT",count:a.totalCount});case 8:case"end":return r.stop()}}))}}}))(ye),Ce=n(125),Ne=n(32),Ie=n(84),Te=n(24),ke=n(52),Le=n.n(ke),Ae=Object(Ce.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return r.a.createElement("form",{onSubmit:t},Object(Ne.c)(Ne.a,"email","Login",[Ie.b]),Object(Ne.c)(Ne.a,"password","Passsword",[Ie.b],"password"),Object(Ne.c)(Ne.a,"rememberMe","checkbox",[],"checkbox","remember me"),n&&r.a.createElement("div",{className:Le.a.formSumaryError},n),r.a.createElement("div",null,r.a.createElement("button",null,"Login")))})),xe=Object(E.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(a){var r,o;return v.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,v.a.awrap(w.a.login(e,t,n));case 2:0===(r=c.sent).data.resultCode?a(P()):(o=r.data.messages.length>0?r.data.messages[0]:"Some error",a(Object(_.a)("login",{_error:o})));case 4:case"end":return c.stop()}}))}}})((function(e){var t=e.login;return e.isAuth?r.a.createElement(Te.a,{to:"/profile"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement(Ae,{onSubmit:function(e){t(e.email,e.password,e.rememberMe)}}))})),Ue={initialized:!1},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(b.a)({},e,{initialized:!0});default:return e}},Re=n(142),ze=n(93),De=n(124),Ge=n(127),Me=Object(he.c)({profilePage:ze.b,dialogsPage:De.b,usersPage:ge,auth:y,form:Ge.a,app:Fe}),We=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||he.d,He=Object(he.e)(Me,We(Object(he.a)(Re.a)));window.store=He;var qe=He,Be=function(e){return function(t){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(Ee.a,null)},r.a.createElement(e,t))}},Ze=r.a.lazy((function(){return n.e(4).then(n.bind(null,302))})),Je=r.a.lazy((function(){return n.e(3).then(n.bind(null,301))})),Ve=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.initializApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"app_wrapper"},r.a.createElement(C,null),r.a.createElement(A,null),r.a.createElement("div",{className:"app_wrapper_conent"},r.a.createElement(Te.b,{path:"/Profile/:userId?",render:Be(Je)}),r.a.createElement(Te.b,{path:"/dialogs",render:Be(Ze)}),r.a.createElement(Te.b,{path:"/users",render:function(){return r.a.createElement(je,null)}}),r.a.createElement(Te.b,{path:"/login",render:function(){return r.a.createElement(xe,null)}}),r.a.createElement(Te.b,{path:"/Music",render:function(){return r.a.createElement(F,null)}}),r.a.createElement(Te.b,{path:"/News",render:function(){return r.a.createElement(D,null)}}),r.a.createElement(Te.b,{path:"/Settings",render:function(){return r.a.createElement(W,null)}}),r.a.createElement(Te.b,{path:"/Friends",render:function(){return r.a.createElement(B,null)}}),r.a.createElement(Te.b,{path:"/Friends",render:function(){return r.a.createElement(L,null)}}))):r.a.createElement(Ee.a,null)}}]),t}(r.a.Component),Xe=Object(he.d)(Te.f,Object(E.b)((function(e){return{initialized:e.app.initialized}}),{initializApp:function(){return function(e){var t=e(P());Promise.all([t]).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(Ve),Ye=function(e){return r.a.createElement(p.a,null,r.a.createElement(E.a,{store:qe},r.a.createElement(Xe,null)))};c.a.render(r.a.createElement(Ye,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},32:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return f}));var a=n(51),r=n(0),o=n.n(r),c=n(52),i=n.n(c),s=n(87),u=function(e){e.input;var t=e.meta,n=t.touched,a=t.error,r=e.children,c=n&&a;return o.a.createElement("div",{className:i.a.formControl+" "+(c?i.a.error:"")},o.a.createElement("div",null,r),o.a.createElement("div",null,c&&o.a.createElement("span",null,a)))},l=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return o.a.createElement(u,e,o.a.createElement("textarea",Object.assign({},t,n)))},m=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return o.a.createElement(u,e,o.a.createElement("input",Object.assign({},t,n)))},f=function(e,t,n,a,r){var c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:{};return o.a.createElement("div",null,o.a.createElement(s.a,Object.assign({component:e,name:t,placeholder:n,validate:a,type:r},i)),c)}},41:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(139),c=n.n(o);t.a=function(e){return r.a.createElement("div",null,r.a.createElement("img",{src:c.a}))}},52:function(e,t,n){e.exports={formControl:"FormsControls_formControl__26bct",error:"FormsControls_error__2qkbA",formSumaryError:"FormsControls_formSumaryError__3ZzCG"}},68:function(e,t,n){e.exports={paginator:"paginator_paginator__3yVGe",pageNumber:"paginator_pageNumber__38a8H",selectedPage:"paginator_selectedPage__1Ln9Y"}},84:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},88:function(e,t,n){e.exports={header:"Header_header__kKpx_",loginBlock:"Header_loginBlock__2n47O"}},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"d",(function(){return m})),n.d(t,"c",(function(){return f})),n.d(t,"e",(function(){return d}));var a=n(9),r=n.n(a),o=n(42),c=n(8),i=n(13),s={posts:[{id:1,message:"Hi, how are you",likeCount:56,comments:4},{id:2,message:"It is my first post",likeCount:113,comments:1},{id:3,message:"Do you like my decoration?",likeCount:69,comments:0},{id:4,message:"It is my post width my friends",likeCount:71,comments:17}],profile:null,status:""},u=function(e){return{type:"ADD-POST",newPostText:e}},l=function(e){return{type:"SET_STATUS",status:e}},m=function(e){return function(t){var n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r.a.awrap(i.c.getProfile(e));case 2:n=a.sent,t({type:"SET_USERS_PROFILE",profile:n.data});case 4:case"end":return a.stop()}}))}},f=function(e){return function(t){var n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r.a.awrap(i.b.getStatus(e));case 2:n=a.sent,t(l(n.data));case 4:case"end":return a.stop()}}))}},d=function(e){return function(t){return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.a.awrap(i.b.updateStatus(e));case 2:0===n.sent.data.resultCode&&t(l(e));case 4:case"end":return n.stop()}}))}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.newPostText,likeCount:0,comments:0};return Object(c.a)({},e,{posts:[].concat(Object(o.a)(e.posts),[n]),newPostText:""});case"SET_USERS_PROFILE":return Object(c.a)({},e,{profile:t.profile});case"SET_STATUS":return Object(c.a)({},e,{status:t.status});default:return e}}}},[[169,1,2]]]);
//# sourceMappingURL=main.3f0ed3dd.chunk.js.map