(function(e){function t(t){for(var a,o,c=t[0],r=t[1],l=t[2],u=0,p=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);d&&d(t);while(p.length)p.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],a=!0,c=1;c<s.length;c++){var r=s[c];0!==i[r]&&(a=!1)}a&&(n.splice(t--,1),e=o(o.s=s[0]))}return e}var a={},i={app:0},n=[];function o(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=a,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(s,a,function(t){return e[t]}.bind(null,a));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=r;n.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";s("85ec")},"0ceb":function(e,t,s){"use strict";s("212e")},"0dbe":function(e,t,s){e.exports=s.p+"img/77cfcfe5525d392a91457d5e35b0352c-1.0365195b.svg"},1280:function(e,t,s){e.exports=s.p+"img/77cfcfe5525d392a91457d5e35b0352c.0365195b.svg"},"156e":function(e,t,s){e.exports=s.p+"img/next-1.4b9c356c.svg"},"18f3":function(e,t,s){},"1b69":function(e,t,s){e.exports=s.p+"img/megaphone.d44587e6.svg"},"212e":function(e,t,s){},2802:function(e,t,s){"use strict";s("18f3")},"28b0":function(e,t,s){e.exports=s.p+"img/Account.2b8e51f2.svg"},"2d88":function(e,t,s){e.exports=s.p+"img/remove_red_eye-24px-1.b72b853c.svg"},"2e2c":function(e,t,s){e.exports=s.p+"img/Logo-1.6c34b040.svg"},3243:function(e,t,s){e.exports=s.p+"img/add.e4a2d5b6.svg"},3772:function(e,t,s){},"39ca":function(e,t,s){e.exports=s.p+"img/Visa Logo.c73a8473.svg"},"3ae7":function(e,t,s){e.exports=s.p+"img/nature (1)-1.237f055b.svg"},"3b22":function(e,t,s){e.exports=s.p+"img/pay.d0a197ee.svg"},"3e44":function(e,t,s){"use strict";s("64e7")},"3e6a":function(e,t,s){e.exports=s.p+"img/nature (1).15a7c58f.svg"},"434d":function(e,t,s){"use strict";s("f4a2")},4616:function(e,t,s){e.exports=s.p+"img/business-and-finance-2.4e2ae174.svg"},"55bd":function(e,t,s){"use strict";s("5651")},5651:function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("Home")],1)},n=[],o=(s("7b17"),s("ab8b"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"row no-gutter"},[s("div",{staticClass:"mobile-components no-gutter d-lg-none"},[s("div",{staticClass:"row no-gutter"},[s("div",{staticClass:"mobile-fixed-contents position-fixed"},[s("account-summery",{attrs:{device:"mobile"}}),s("card-types",{attrs:{device:"mobile"}}),s("cards-carousel")],1),s("div",{staticClass:"mobile-scrollable-contents"},[s("mobile-scrollble-contents")],1),s("div",{staticClass:"mobile-fixed-bottom-bar"},[s("mobile-bottom-bar")],1)])]),s("div",{staticClass:"desktop-components container no-gutter d-none d-lg-block"},[s("div",{staticClass:"row no-gutter"},[s("div",{staticClass:"col-3 no-gutter"},[s("div",{staticClass:"wrapper"},[s("div",{staticClass:"sticky-top"},[s("side-section")],1)])]),s("div",{staticClass:"col-9 no-gutter"},[s("main-section")],1)])])])])}),c=[],r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"mt-4"},["mobile"===e.device?s("div",{staticClass:"d-inline container row no-gutter"},e._l(e.typeOfCards,(function(t,a){return s("span",{key:"cardType-"+a,staticClass:"me-4"},[s("span",{staticClass:"card-label",on:{click:function(s){return e.changeCardType(t.id)}}},[s("span",{class:[t.selected?"border-bottom border-3 border-info text-white fw-bold":"text-secondary"]},[e._v(e._s(t.label)+" ")])])])})),0):e._e(),"desktop"===e.device?s("div",{staticClass:"d-inline"},e._l(e.typeOfCards,(function(t,a){return s("span",{key:"cardType-"+a,staticClass:"me-4"},[s("span",{on:{click:function(s){return e.changeCardType(t.id)}}},[s("span",{class:[t.selected?"border-bottom border-3 border-info text-dark fw-bold":"text-secondary"],attrs:{role:"button"}},[e._v(e._s(t.label)+" ")])])])})),0):e._e()])},l=[],d=(s("d3b7"),s("159b"),{name:"CardTypes",props:["device"],data:function(){return{typeOfCards:[{id:100,label:"My debit cards",selected:!0},{id:101,label:"All company cards"}]}},methods:{changeCardType:function(e){this.typeOfCards.forEach((function(t){e===t.id?t["selected"]=!0:t.selected=!1}))}}}),u=d,p=(s("434d"),s("2877")),m=Object(p["a"])(u,r,l,!1,null,"30ea7a4f",null),f=m.exports,v=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"row flex-nowrap mt-1 overflow-y-hidden overflow-x-hideen pb-4"},e._l(e.cards,(function(t){return s("div",{key:"card-"+t.id,staticClass:"col-11",attrs:{"data-card-":""+t.id},on:{click:function(s){return e.bringCardToFront(t.id)}}},[s("div",{staticClass:"show-card-no toggle-card-border-radius",on:{click:function(s){return e.toggleCardNo(t.id)}}},[e._v(" "+e._s(t.cardNoShown?"Hide card number":"Show card number")+" ")]),s("div",{staticClass:"px-4 py-3 card-border-radius position-relative",style:{backgroundColor:t.cardColor}},[e._m(0,!0),s("div",{staticClass:"fs-4 fw-bold pb-2"},[e._v(e._s(t.cardHolderName))]),s("div",{staticClass:"pb-2",class:[t.cardNoShown?"letter-spacing-5":"letter-spacing-1"],domProps:{innerHTML:e._s(t.cardNoShown?t.cardNoVisible:t.cardNoInvisible)}}),s("div",{staticClass:"d-flex justify-content-start fw-bold"},[s("div",{staticClass:"me-4"},[e._v(e._s(t.cardExpiry))]),s("div",{domProps:{innerHTML:e._s(t.cardCvvNo)}})]),e._m(1,!0)])])})),0),s("div",{staticClass:"d-flex justify-content-center"},e._l(e.cards,(function(t){return s("div",{key:"card-navigator-"+t.id,staticClass:"card-dot rounded me-3",class:[t.cardInView?"selected-card-dot":"deselected-card-dot"],on:{click:function(s){return e.bringCardToFront(t.id)}}})})),0)])},g=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"text-end pb-2"},[a("img",{attrs:{src:s("b86c"),alt:"Aspire"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"text-end pb-2"},[a("img",{attrs:{src:s("39ca"),alt:"Aspire"}})])}],b=(s("d81d"),{name:"CardsCarousel",data:function(){return{cards:[{id:100,cardColor:"#01d167",cardHolderName:"Mark Henry",cardNoVisible:"1234 5678 2020",cardNoInvisible:"&#9679; &#9679; &#9679; &#9679; &#9679; &#9679; &#9679; &#9679; 2020",cardExpiry:"Thru: 12/20",cardCvvNo:"CVV: * * *",cardInView:!0,cardNoShown:!1},{id:101,cardColor:"#2d2ddf",cardHolderName:"John Doe",cardNoVisible:"1234 5678 2020",cardNoInvisible:"&#9679; &#9679; &#9679; &#9679; &#9679; &#9679; &#9679; &#9679; 2020",cardExpiry:"Thru: 12/20",cardCvvNo:"CVV: * * *",cardInView:!1,cardNoShown:!1},{id:102,cardColor:"#4a184a",cardHolderName:"Jeff Bezos",cardNoVisible:"1234 5678 2020",cardNoInvisible:"&#9679; &#9679; &#9679; &#9679; &#9679; &#9679; &#9679; &#9679; 2020",cardExpiry:"Thru: 12/20",cardCvvNo:"CVV: * * *",cardInView:!1,cardNoShown:!1},{id:103,cardColor:"#01d167",cardHolderName:"Dwayne Johnson",cardNoVisible:"1234 5678 2020",cardNoInvisible:"&#9679; &#9679; &#9679; &#9679; &#9679; &#9679; &#9679; &#9679; 2020",cardExpiry:"Thru: 12/20",cardCvvNo:"CVV: * * *",cardInView:!1,cardNoShown:!1}]}},methods:{bringCardToFront:function(e){document.querySelector('[data-card-="'.concat(e,'"]')).scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"}),this.cards.forEach((function(t){e===t.id?t.cardInView=!0:t.cardInView=!1}))},toggleCardNo:function(e){this.cards.map((function(t){t.id===e&&(t.cardNoShown=!t.cardNoShown)}))}}}),x=b,C=(s("face"),Object(p["a"])(x,v,g,!1,null,"2e8ff349",null)),_=C.exports,h=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",["mobile"===e.device?s("div",[e._m(0),s("div",{staticClass:"row no-gutter"},[s("div",{staticClass:"col-6 fw-bold d-flex"},[s("div",{staticClass:"\n            aspire-bg-green\n            px-3\n            rounded-3\n            d-flex\n            align-self-center\n            flex-wrap\n            me-2\n          "},[e._v(" $$ ")]),s("div",{staticClass:"fs-5 text-light"},[e._v(" "+e._s(e.accountBalance.toLocaleString())+" ")])]),e._m(1)])]):e._e(),"desktop"===e.device?s("div",[e._m(2),s("div",{staticClass:"d-flex justify-content-between"},[s("div",{staticClass:"fw-bold d-flex"},[s("div",{staticClass:"\n            aspire-bg-green\n            px-3\n            rounded-3\n            align-self-center\n            flex-wrap\n            me-2\n            text-light\n          "},[e._v(" $$ ")]),s("div",{staticClass:"fs-5 text-dark"},[e._v(" "+e._s(e.accountBalance.toLocaleString())+" ")])]),e._m(3)])]):e._e()])},y=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row no-gutter py-2 text-light"},[a("div",{staticClass:"col-6 fs-6 align-self-end"},[e._v("Account balance")]),a("div",{staticClass:"col-6 text-end"},[a("img",{attrs:{src:s("6a43"),alt:"Aspire"}})])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-6 aspire-text-new-card d-flex justify-content-end"},[a("div",{staticClass:"px-1 align-self-center"},[a("img",{attrs:{src:s("df55"),alt:"Aspire"}})]),a("div",{staticClass:"pt-1 fw-bold fs-6 align-self-center"},[e._v("New card")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"py-2 text-dark"},[s("div",{staticClass:"fs-6 align-self-end"},[e._v("Account balance")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"\n          aspire-text-new-card\n          d-flex\n          justify-content-end\n          aspire-new-card-bg-desktop\n          text-light\n          py-1 px-3\n          rounded\n        "},[a("div",{staticClass:"px-1 align-self-center"},[a("img",{attrs:{src:s("eef4"),alt:"Aspire"}})]),a("div",{staticClass:"pt-1 fw-bold fs-6 align-self-center"},[e._v("New card")])])}],w={name:"AccountSummery",props:["device"],data:function(){return{accountBalance:3e3}}},N=w,k=(s("3e44"),Object(p["a"])(N,h,y,!1,null,"50c382db",null)),S=k.exports,I=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("card-actions",{attrs:{device:"mobile"}}),s("card-details",{attrs:{device:"mobile"}}),s("recent-transactions",{attrs:{device:"mobile"}})],1)},E=[],q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row no-gutter",class:["mobile"===e.device?"card-actions":"card-actions-desktop"]},e._l(e.menuItems,(function(t,i){return a("div",{key:"menu-item"+i,staticClass:"col"},[a("div",{staticClass:"text-center"},[a("div",{staticClass:"my-1"},[a("img",{attrs:{src:s("7799")("./"+t.logoIconName+".svg"),alt:""+t.logoIconName}})]),a("div",{staticClass:"text-dark pt-1 fw-bold"},[e._v(e._s(t.label))])])])})),0)},O=[],T={name:"CardActions",props:["device"],data:function(){return{menuItems:[{id:100,label:"Freeze Card",logoIconName:"Freezecard"},{id:101,label:"Set spend limit",logoIconName:"Set spend limit"},{id:102,label:"Add to GPay",logoIconName:"GPay"},{id:103,label:"Replace card",logoIconName:"Replace card"},{id:104,label:"Cancel card",logoIconName:"Deactivate card"}]}}},A=T,j=(s("c4306"),Object(p["a"])(A,q,O,!1,null,"39caac5c",null)),L=j.exports,$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card-details text-dark mt-4"},[a("div",{staticClass:"px-2 py-4 mx-4 card-details-collapsible-link fw-bold row",attrs:{"data-bs-toggle":"collapse","data-bs-target":"#card-details","aria-expanded":"false","aria-controls":"card-details"}},[e._m(0),a("div",{staticClass:"col-8 d-flex align-self-end"},[e._v("Card details")]),e.cardDetailsCollapsed?a("div",{staticClass:"col-2"},[a("img",{attrs:{src:s("6c59"),alt:"Aspire"}})]):a("div",{staticClass:"col-2"},[a("img",{attrs:{src:s("ce52"),alt:"Aspire"}})])]),e._m(1)])},V=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-2"},[a("img",{attrs:{src:s("e089"),alt:"Aspire"}})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"px-4 mx-4 collapse details",attrs:{id:"card-details"}},[s("p",[e._v(" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi aspernatur libero ut, repellendus, cumque nulla ex labore dolor dolore quod inventore ad nam perspiciatis soluta quos assumenda tempora id obcaecati molestias voluptate necessitatibus cupiditate voluptatem maxime! Repellat provident commodi porro perspiciatis nihil possimus optio esse? Quas molestias quidem alias animi. ")]),s("p",[e._v(" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi aspernatur libero ut, repellendus, cumque nulla ex labore dolor dolore quod inventore ad nam perspiciatis soluta quos assumenda tempora id obcaecati molestias voluptate necessitatibus cupiditate voluptatem maxime! Repellat provident commodi porro perspiciatis nihil possimus optio esse? Quas molestias quidem alias animi. ")]),s("p",[e._v(" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi aspernatur libero ut, repellendus, cumque nulla ex labore dolor dolore quod inventore ad nam perspiciatis soluta quos assumenda tempora id obcaecati molestias voluptate necessitatibus cupiditate voluptatem maxime! Repellat provident commodi porro perspiciatis nihil possimus optio esse? Quas molestias quidem alias animi. ")]),s("p",[e._v(" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi aspernatur libero ut, repellendus, cumque nulla ex labore dolor dolore quod inventore ad nam perspiciatis soluta quos assumenda tempora id obcaecati molestias voluptate necessitatibus cupiditate voluptatem maxime! Repellat provident commodi porro perspiciatis nihil possimus optio esse? Quas molestias quidem alias animi. ")]),s("p",[e._v(" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi aspernatur libero ut, repellendus, cumque nulla ex labore dolor dolore quod inventore ad nam perspiciatis soluta quos assumenda tempora id obcaecati molestias voluptate necessitatibus cupiditate voluptatem maxime! Repellat provident commodi porro perspiciatis nihil possimus optio esse? Quas molestias quidem alias animi. ")])])}],P={name:"CardDetails",data:function(){return{cardDetailsCollapsed:!0}},mounted:function(){this.collapsibleEvents()},methods:{collapsibleEvents:function(){var e=this;document.querySelector("#card-details").addEventListener("show.bs.collapse",(function(){e.cardDetailsCollapsed=!1})),document.querySelector("#card-details").addEventListener("hide.bs.collapse",(function(){e.cardDetailsCollapsed=!0}))}}},M=P,H=(s("2802"),Object(p["a"])(M,$,V,!1,null,"8f5d287e",null)),D=H.exports,R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"recent-transactions text-dark mt-4"},[a("div",{staticClass:"px-2 py-4 mx-4 recent-transactions-collapsible-link fw-bold row",attrs:{"data-bs-toggle":"collapse","data-bs-target":"#recent-transactions","aria-expanded":"false","aria-controls":"recent-transactions"}},[e._m(0),a("div",{staticClass:"col-8 d-flex align-self-end"},[e._v("Recent Transactions")]),e.recentTransactionsCollapsed?a("div",{staticClass:"col-2"},[a("img",{attrs:{src:s("6c59"),alt:"Aspire"}})]):a("div",{staticClass:"col-2"},[a("img",{attrs:{src:s("ce52"),alt:"Aspire"}})])]),a("div",{staticClass:"px-4 mx-4 collapse details",attrs:{id:"recent-transactions"}},[e._v(" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi aspernatur libero ut, repellendus, cumque nulla ex labore dolor dolore quod inventore ad nam perspiciatis soluta quos assumenda tempora id obcaecati molestias voluptate necessitatibus cupiditate voluptatem maxime! Repellat provident commodi porro perspiciatis nihil possimus optio esse? Quas molestias quidem alias animi. ")])])},B=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-2"},[a("img",{attrs:{src:s("c132"),alt:"Aspire"}})])}],F={name:"RecentTransactions",data:function(){return{recentTransactionsCollapsed:!0}},mounted:function(){this.collapsibleEvents()},methods:{collapsibleEvents:function(){var e=this;document.querySelector("#recent-transactions").addEventListener("show.bs.collapse",(function(){e.recentTransactionsCollapsed=!1})),document.querySelector("#recent-transactions").addEventListener("hide.bs.collapse",(function(){e.recentTransactionsCollapsed=!0}))}}},G=F,Q=(s("fffe"),Object(p["a"])(G,R,B,!1,null,"7810fed6",null)),z=Q.exports,J={name:"MobileScrollbleContents",components:{CardActions:L,CardDetails:D,RecentTransactions:z}},U=J,K=Object(p["a"])(U,I,E,!1,null,null,null),W=K.exports,X=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row no-gutter mobile-bottom-bar bg-light"},e._l(e.menuItems,(function(t,i){return a("div",{key:"menu-item"+i,staticClass:"col"},[a("div",{staticClass:"text-center"},[a("div",{staticClass:"my-1"},[a("img",{attrs:{src:s("7799")("./"+t.logoIconName+".svg"),alt:""+t.logoIconName}})]),a("div",{staticClass:"text-dark"},[e._v(e._s(t.label))])])])})),0)},Y=[],Z={name:"MobileBottomBar",data:function(){return{menuItems:[{id:100,label:"Home",logoIconName:"Logo-1"},{id:101,label:"Cards",logoIconName:"pay"},{id:102,label:"Payments",logoIconName:"77cfcfe5525d392a91457d5e35b0352c"},{id:103,label:"Credit",logoIconName:"Credit"},{id:104,label:"Profile",logoIconName:"Account"}]}}},ee=Z,te=(s("55bd"),Object(p["a"])(ee,X,Y,!1,null,"03b7bc36",null)),se=te.exports,ae=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"side-section min-vh-100 vh-100 p-5"},[a("img",{attrs:{src:s("a944"),alt:"Aspire"}}),a("div",{staticClass:"py-4 site-text fs-5"},[e._v(" Trusted way of banking for 3,000+ SMEs and startups in Singapore ")]),e._l(e.menuItems,(function(t,i){return a("div",{key:"menu-item"+i},[a("div",{staticClass:"d-flex mt-4",attrs:{role:"button"}},[a("div",{staticClass:"my-3"},[a("img",{attrs:{src:s("7799")("./"+t.logoIconName+".svg"),alt:""+t.logoIconName}})]),a("div",{staticClass:"fs-6 ms-4 my-3"},[e._v(e._s(t.label))])])])}))],2)},ie=[],ne={name:"SideSection",data:function(){return{menuItems:[{id:100,label:"Home",logoIconName:"Logo-1"},{id:101,label:"Cards",logoIconName:"pay"},{id:102,label:"Payments",logoIconName:"77cfcfe5525d392a91457d5e35b0352c"},{id:103,label:"Credit",logoIconName:"Credit"},{id:104,label:"Settings",logoIconName:"Account"}]}}},oe=ne,ce=(s("db82"),Object(p["a"])(oe,ae,ie,!1,null,"183e21dc",null)),re=ce.exports,le=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"main-section min-vh-100 vh-100 p-5"},[s("account-summery",{attrs:{device:"desktop"}}),s("card-types",{attrs:{device:"desktop"}}),s("div",{staticClass:"row desktop-details-section"},[s("div",{staticClass:"col-6"},[s("cards-carousel",{attrs:{device:"desktop"}}),s("card-actions",{attrs:{device:"desktop"}})],1),s("div",{staticClass:"col-6 mt-3 overflow-auto max-height-inherit"},[s("card-details",{attrs:{device:"desktop"}}),s("recent-transactions",{attrs:{device:"desktop"}})],1)])],1)},de=[],ue={name:"MainSection",components:{CardTypes:f,CardsCarousel:_,AccountSummery:S,CardActions:L,CardDetails:D,RecentTransactions:z}},pe=ue,me=(s("0ceb"),Object(p["a"])(pe,le,de,!1,null,"0867f157",null)),fe=me.exports,ve={name:"Home",components:{CardTypes:f,CardsCarousel:_,AccountSummery:S,MobileScrollbleContents:W,MobileBottomBar:se,SideSection:re,MainSection:fe},mounted:function(){var e=document.querySelector(".mobile-fixed-contents").offsetHeight;document.querySelector(".mobile-scrollable-contents").style.marginTop="".concat(e+25,"px")},data:function(){return{accountBalance:3e3}}},ge=ve,be=(s("728c"),Object(p["a"])(ge,o,c,!1,null,"13da5833",null)),xe=be.exports,Ce={name:"App",components:{Home:xe}},_e=Ce,he=(s("034f"),Object(p["a"])(_e,i,n,!1,null,null,null)),ye=he.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(ye)}}).$mount("#app")},"58d3":function(e,t,s){e.exports=s.p+"img/business-and-finance.4e2ae174.svg"},"64e7":function(e,t,s){},"6a43":function(e,t,s){e.exports=s.p+"img/Logo.78469921.svg"},"6c59":function(e,t,s){e.exports=s.p+"img/down-arrow.8a6c7ec3.svg"},"6fc0":function(e,t,s){e.exports=s.p+"img/user-1.987bad2d.svg"},"728c":function(e,t,s){"use strict";s("ebcd")},7799:function(e,t,s){var a={"./77cfcfe5525d392a91457d5e35b0352c-1.svg":"0dbe","./77cfcfe5525d392a91457d5e35b0352c.svg":"1280","./Account.svg":"28b0","./Credit.svg":"f496","./Deactivate card.svg":"870b","./Freezecard.svg":"cc2f","./GPay.svg":"efa3","./Group11889-1.svg":"c132","./Group11889.svg":"e089","./Logo-1.svg":"2e2c","./Logo-2.svg":"b86c","./Logo.svg":"6a43","./Payments.svg":"a1e6","./Replace card.svg":"e720","./Set spend limit.svg":"7f75","./Visa Logo.svg":"39ca","./add.svg":"3243","./box.svg":"df55","./business-and-finance-1.svg":"d8ef","./business-and-finance-2.svg":"4616","./business-and-finance-3.svg":"ea06","./business-and-finance.svg":"58d3","./down-arrow-1.svg":"ce52","./down-arrow.svg":"6c59","./file-storage-1.svg":"8a68","./file-storage.svg":"f479","./flights.svg":"d4f7","./megaphone.svg":"1b69","./nature (1)-1.svg":"3ae7","./nature (1).svg":"3e6a","./next-1.svg":"156e","./next-2.svg":"e40c","./next-3.svg":"8fa8","./next.svg":"d7ef","./pay-1.svg":"82bf","./pay.svg":"3b22","./pickup-car.svg":"7d9d","./remove_red_eye-24px-1.svg":"2d88","./remove_red_eye-24px.svg":"d946","./user-1.svg":"6fc0","./user.svg":"8838"};function i(e){var t=n(e);return s(t)}function n(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=n,e.exports=i,i.id="7799"},"7d9d":function(e,t,s){e.exports=s.p+"img/pickup-car.0dd7f1ff.svg"},"7f75":function(e,t,s){e.exports=s.p+"img/Set spend limit.4822f216.svg"},"82bf":function(e,t,s){e.exports=s.p+"img/pay-1.d0a197ee.svg"},"85ec":function(e,t,s){},"870b":function(e,t,s){e.exports=s.p+"img/Deactivate card.34618b12.svg"},8838:function(e,t,s){e.exports=s.p+"img/user.987bad2d.svg"},"8a68":function(e,t,s){e.exports=s.p+"img/file-storage-1.5f64d6de.svg"},"8fa8":function(e,t,s){e.exports=s.p+"img/next-3.4b9c356c.svg"},a037:function(e,t,s){},a1e6:function(e,t,s){e.exports=s.p+"img/Payments.5325f05a.svg"},a944:function(e,t,s){e.exports=s.p+"img/AspireLogo.e5180dd5.svg"},b86c:function(e,t,s){e.exports=s.p+"img/Logo-2.4e6dc8cb.svg"},c132:function(e,t,s){e.exports=s.p+"img/Group11889-1.a7fe6b25.svg"},c4306:function(e,t,s){"use strict";s("3772")},cc2f:function(e,t,s){e.exports=s.p+"img/Freezecard.b7b8643a.svg"},ce52:function(e,t,s){e.exports=s.p+"img/down-arrow-1.ec38e80f.svg"},d4f7:function(e,t,s){e.exports=s.p+"img/flights.b82bf18f.svg"},d590:function(e,t,s){},d7ef:function(e,t,s){e.exports=s.p+"img/next.4b9c356c.svg"},d8ef:function(e,t,s){e.exports=s.p+"img/business-and-finance-1.4e2ae174.svg"},d946:function(e,t,s){e.exports=s.p+"img/remove_red_eye-24px.bf6fc9de.svg"},d9cc:function(e,t,s){},db82:function(e,t,s){"use strict";s("d590")},df55:function(e,t,s){e.exports=s.p+"img/box.f98cc7fe.svg"},e089:function(e,t,s){e.exports=s.p+"img/Group11889.56bd0a5c.svg"},e40c:function(e,t,s){e.exports=s.p+"img/next-2.4b9c356c.svg"},e720:function(e,t,s){e.exports=s.p+"img/Replace card.574785a7.svg"},ea06:function(e,t,s){e.exports=s.p+"img/business-and-finance-3.4e2ae174.svg"},ebcd:function(e,t,s){},eef4:function(e,t,s){e.exports=s.p+"img/add.d1ec09b5.svg"},efa3:function(e,t,s){e.exports=s.p+"img/GPay.ecf0c349.svg"},f479:function(e,t,s){e.exports=s.p+"img/file-storage.5f64d6de.svg"},f496:function(e,t,s){e.exports=s.p+"img/Credit.3c6507b8.svg"},f4a2:function(e,t,s){},face:function(e,t,s){"use strict";s("d9cc")},fffe:function(e,t,s){"use strict";s("a037")}});
//# sourceMappingURL=app.5abcbc37.js.map