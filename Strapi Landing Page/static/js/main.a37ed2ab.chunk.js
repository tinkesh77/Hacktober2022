(this["webpackJsonpkode-camp-react-task"]=this["webpackJsonpkode-camp-react-task"]||[]).push([[0],{109:function(e,a,t){"use strict";t.r(a);var c=t(0),s=t.n(c),r=t(21),n=t.n(r),i=(t(59),t(76),t(113)),l=t(112),d=t(117),o={character1:t(77).default,character2:t(60).default,character3:t(78).default,character4:t(79).default,character5:t(80).default,character6:t(81).default,character7:t(82).default,character8:t(83).default,character9:t(84).default,character10:t(85).default,character11:t(86).default,character12:t(87).default,character13:t(88).default,character14:t(89).default,character15:t(90).default,character16:t(91).default},j={planet1:t(61).default,planet2:t(62).default,planet3:t(63).default,planet4:t(92).default,planet5:t(93).default,planet6:t(94).default,planet7:t(95).default,planet8:t(96).default,planet9:t(97).default,planet10:t(63).default,planet11:t(62).default,planet12:t(61).default},m=[{image:j.planet9,name:"Planet Alpha",pop:235,id:1},{image:j.planet8,name:"Planet Alpha",pop:235,id:2},{image:j.planet7,name:"Planet Alpha",pop:235,id:3},{image:j.planet6,name:"Planet Alpha",pop:235,id:4},{image:j.planet6,name:"Planet Alpha",pop:235,id:5},{image:j.planet5,name:"Planet Alpha",pop:235,id:6},{image:j.planet1,name:"Planet Alpha",pop:235,id:7},{image:j.planet2,name:"Planet Alpha",pop:235,id:8},{image:j.planet2,name:"Planet Alpha",pop:235,id:9},{image:j.planet4,name:"Planet Alpha",pop:235,id:10},{image:j.planet3,name:"Planet Alpha",pop:235,id:11},{image:j.planet5,name:"Planet Alpha",pop:235,id:12}],b=[{image:o.character7,name:"Brooklyn Simmons",desc:"Brooklyn is really a nice person. She's been living on planet Alpha for the last 10 years",friends:23,id:1},{image:o.character13,name:"Cameron Williamson",desc:"Cameron is really a nice person. She's been living on planet Alpha for the last 10 years",friends:23,id:2},{image:o.character2,name:"Leslie Alexander",desc:"Leslie is really a nice person. She's been living on planet Alpha for the last 10 years",friends:23,id:3},{image:o.character8,name:"Kristin Watson",desc:"Kristin is really a nice person. She's been living on planet Alpha for the last 10 years",friends:23,id:4},{image:o.character5,name:"Jenny Wilson",desc:"Jenny is really a nice person. She's been living on planet Alpha for the last 10 years",friends:23,id:5},{image:o.character12,name:"Marvin McKinney",desc:"Marvin is really a nice person. She's been living on planet Alpha for the last 10 years",friends:23,id:6},{image:o.character6,name:"Jerome Bell",desc:"Jerome is really a nice person. She's been living on planet Alpha for the last 10 years",friends:23,id:7},{image:o.character4,name:"Guy Hawkins",desc:"Guy is really a nice person. She's been living on planet Alpha for the last 10 years",friends:23,id:8},{image:o.character10,name:"Robert Fox",desc:"Robert is really a nice person. She's been living on planet Alpha for the last 10 years",friends:23,id:9},{image:o.character3,name:"Diego Vega",desc:"Diego is really a nice person. She's been living on planet Alpha for the last 10 years",friends:23,id:10},{image:o.character1,name:"Dawn Weir",desc:"Dawn is really a nice person. She's been living on planet Alpha for the last 10 years",friends:23,id:11},{image:o.character9,name:"Eleanor Pena",desc:"Eleanor is really a nice person. She's been living on planet Alpha for the last 10 years",friends:23,id:12}],h=t(98).default,p=t(1),u=function(){return Object(p.jsx)("div",{className:"loader",children:Object(p.jsx)("div",{className:"loader-div",children:Object(p.jsx)("img",{id:"loader-img",src:h,alt:""})})})},f=t(6),x=t(66),O=t(118),g=t(18),y=t(116),v=t(115),N=t(111),w=function(e){var a=e.cancel,t=Object(c.useState)(!1),s=Object(f.a)(t,2),r=s[0],n=s[1];return Object(p.jsxs)(v.a,{id:"planets-form",noValidate:!0,validated:r,onSubmit:function(e){!1===e.currentTarget.checkValidity()&&(e.preventDefault(),e.stopPropagation()),n(!0)},children:[Object(p.jsxs)(v.a.Group,{className:"mb-3",children:[Object(p.jsx)(v.a.Label,{children:"Image"}),Object(p.jsx)(v.a.Control,{id:"planet-image",size:"lg",type:"url",required:!0}),Object(p.jsx)(v.a.Control.Feedback,{type:"invalid"}),Object(p.jsx)(v.a.Text,{className:"",children:"Paste the URL of a JPG or PNG of max 20 kb"})]}),Object(p.jsxs)(v.a.Group,{className:"mb-3",children:[Object(p.jsx)(v.a.Label,{children:"Name"}),Object(p.jsx)(v.a.Control,{id:"planet-name",size:"lg",type:"text",required:!0}),Object(p.jsx)(v.a.Control.Feedback,{type:"invalid"})]}),Object(p.jsxs)(v.a.Group,{className:"mb-3",children:[Object(p.jsx)(v.a.Label,{children:"Description"}),Object(p.jsx)(v.a.Control,{size:"lg",as:"textarea",rows:3,required:!0}),Object(p.jsx)(v.a.Control.Feedback,{type:"invalid",children:"Bummer! We can\u2019t create this planet right now. Probably a black hole in the way. Try later please."})]}),Object(p.jsxs)("div",{className:"d-flex justify-content-end",children:[Object(p.jsx)(N.a,{className:"me-3",variant:"primary",type:"button",onClick:a,id:"cancel-btn",children:"Cancel"}),Object(p.jsx)(N.a,{variant:"primary",type:"submit",id:"submit-btn",children:"Create Planet"})]})]})},S=function(e){var a=e.show,t=e.close;return Object(p.jsxs)(y.a,{size:"lg",show:a,onHide:t,backdrop:"static",keyboard:!1,id:"planet-modal",children:[Object(p.jsx)(y.a.Header,{closeButton:!0}),Object(p.jsx)(y.a.Header,{children:Object(p.jsx)(y.a.Title,{className:"modal-title",children:"Planet"})}),Object(p.jsx)(y.a.Body,{children:Object(p.jsx)(w,{cancel:t})})]})},k=t(70);var A=function(e){var a=e.show,t=e.close,s=Object(c.useState)([{image:o.character16,name:"Darlene Robertson",id:1},{image:o.character4,name:"Kathryn Murphy",id:2},{image:o.character3,name:"Jenny Wilson",id:3},{image:o.character5,name:"Arlene McCoy",id:4},{image:o.character11,name:"Darell Steward",id:5},{image:o.character6,name:"Bessie Cooper",id:6}]),r=Object(f.a)(s,2),n=r[0];return r[1],console.log(n),Object(p.jsxs)(k.a,{show:a,onHide:t,placement:"end",backdrop:!1,scroll:!0,id:"planet-sidebar",children:[Object(p.jsxs)(k.a.Header,{className:"d-flex flex-column align-items-start",children:[Object(p.jsx)(g.c,{className:"close-btn flex-column align-self-end",onClick:t}),Object(p.jsx)(k.a.Title,{className:"d-flex justify-content-between",children:"Planet Alpha"}),Object(p.jsx)("p",{className:"sidebar-subtitle",children:"Planet Alpha is the place to be if you like everything related to planets. I know it\u2019s a bit meta, but come see by yourself."}),Object(p.jsx)("div",{className:"sidebar-pop",children:"Population"}),Object(p.jsx)("div",{className:"sidebar-no",children:"234"})]}),Object(p.jsxs)(k.a.Body,{children:[Object(p.jsxs)("div",{className:"d-flex mb-3 justify-content-between",children:[Object(p.jsx)("h5",{className:"sidebar-characters align-self-center mt-1",children:"Characters"}),Object(p.jsx)(g.b,{className:"close-btn"})]}),Object(p.jsx)("div",{className:"chars ",children:n.map((function(e){return Object(p.jsxs)("div",{className:"d-flex mb-3 justify-content-start",children:[Object(p.jsx)("img",{src:e.image,alt:""}),Object(p.jsxs)("div",{className:"ms-3 mt-2 align-self-center",children:[Object(p.jsx)("h6",{className:"sidebar-name",children:e.name}),Object(p.jsx)("p",{className:"sidebar-friends",children:"23 friends"})]})]},e.id)}))})]})]})},C=function(e){var a=e.data,t=Object(c.useState)(!1),s=Object(f.a)(t,2),r=s[0],n=s[1],i=Object(c.useState)(!1),d=Object(f.a)(i,2),o=d[0],j=d[1],m=function(){document.querySelector(".planet-cards").style.border="2px solid #121c33",j(!0);var e=document.querySelector("#planet-row");e.style.marginRight="300px",e.classList.remove("row-cols-xl-4"),e.classList.remove("row-cols-lg-3"),e.classList.remove("row-cols-md-2"),e.classList.add("row-cols-xl-3")};return Object(p.jsxs)("div",{children:[Object(p.jsx)(l.a,{xs:1,lg:3,md:2,xl:4,className:"g-3",id:"planet-row",children:a.map((function(e){return Object(p.jsx)(x.a,{children:Object(p.jsxs)(O.a,{id:"planet-cards",className:"planet-cards",onClick:m,children:[Object(p.jsx)(O.a.Img,{variant:"top",src:e.image}),Object(p.jsxs)(O.a.Body,{children:[Object(p.jsx)(O.a.Title,{children:e.name}),Object(p.jsxs)(O.a.Text,{children:["pop: ",e.pop]})]})]})},e.id)}))}),Object(p.jsx)(g.b,{className:"plus-circle",onClick:function(){return n(!0)}}),Object(p.jsx)(S,{show:r,close:function(){return n(!1)}}),Object(p.jsx)(A,{show:o,close:function(){j(!1),document.querySelector(".planet-cards").style.border="none";var e=document.querySelector("#planet-row");e.style.marginRight="0px",e.classList.add("row-cols-xl-4"),e.classList.add("row-cols-lg-3"),e.classList.add("row-cols-md-2")}})]})},P=function(e){var a=Object(c.useState)(null),t=Object(f.a)(a,2),s=t[0],r=t[1],n=Object(c.useState)(!0),i=Object(f.a)(n,2),l=i[0],d=i[1];return Object(c.useEffect)((function(){setTimeout((function(){fetch(s).then((function(a){d(!1),r(e)}))}),1500)}),[]),{cards:s,isPending:l}},L=function(){var e=P(m),a=e.cards,t=e.isPending;return Object(p.jsxs)("div",{children:[t&&Object(p.jsx)(u,{}),a&&Object(p.jsx)(C,{data:m})]})},B=t(114),T=t(41),q=function(e){return Object(p.jsxs)("div",{id:"navigation",className:"d-flex justify-content-between",children:[Object(p.jsx)(d.a,{children:Object(p.jsxs)(B.a,{variant:"pills",className:"pb-3",id:"tabs",children:[Object(p.jsx)(B.a.Item,{className:"planets",children:Object(p.jsx)(B.a.Link,{as:T.b,to:"/",active:e.true,children:"PLANETS"})}),Object(p.jsx)(B.a.Item,{className:"characters",children:Object(p.jsx)(B.a.Link,{as:T.b,to:"/characters",active:e.false,children:"CHARACTERS"})})]})}),Object(p.jsxs)(v.a.Select,{id:"dropdown-basic",className:e.display,children:[Object(p.jsx)("option",{children:"Planets: All"}),Object(p.jsx)("option",{value:"1",children:"Alpha"})]})]})},G=t(9),H=function(e){var a=e.cancel,s=Object(c.useState)(!1),r=Object(f.a)(s,2),n=r[0],i=r[1];return Object(p.jsxs)(v.a,{id:"character-form",noValidate:!0,validated:n,onSubmit:function(e){!1===e.currentTarget.checkValidity()&&(e.preventDefault(),e.stopPropagation()),i(!0)},children:[Object(p.jsxs)(v.a.Group,{className:"mb-3",children:[Object(p.jsx)(v.a.Label,{children:"Image"}),Object(p.jsx)(v.a.Control,{id:"planet-image",size:"lg",type:"url",required:!0}),Object(p.jsx)(v.a.Control.Feedback,{type:"invalid"}),Object(p.jsx)(v.a.Text,{className:"",children:"Paste the URL of a JPG or PNG of max 20 kb"})]}),Object(p.jsxs)(v.a.Group,{className:"mb-3",children:[Object(p.jsx)(v.a.Label,{children:"Name"}),Object(p.jsx)(v.a.Control,{id:"planet-name",size:"lg",type:"text",required:!0}),Object(p.jsx)(v.a.Control.Feedback,{type:"invalid"})]}),Object(p.jsxs)(v.a.Group,{className:"mb-3",children:[Object(p.jsx)(v.a.Label,{children:"Description"}),Object(p.jsx)(v.a.Control,{size:"lg",as:"textarea",rows:3,required:!0}),Object(p.jsx)(v.a.Control.Feedback,{type:"invalid",children:"Bummer! We can\u2019t create this planet right now. Probably a black hole in the way. Try later please."})]}),Object(p.jsxs)(v.a.Group,{className:"mb-3",id:"friend",children:[Object(p.jsx)(v.a.Label,{children:"Friends"}),Object(p.jsxs)("div",{className:"form-control d-flex justify-content-between  mb-3",type:"text",children:[Object(p.jsxs)("div",{className:"d-flex friend  align-items-center gap-2",children:[Object(p.jsx)("img",{className:" ms-1 ",src:t(60).default,alt:"profile pic"}),Object(p.jsx)("p",{className:"mb-0  jane",children:"Jane Cooper"}),Object(p.jsx)("p",{className:"mb-1  ms-1 close",children:Object(p.jsx)(g.c,{})})]}),Object(p.jsx)("p",{className:"mb-0 down",children:Object(p.jsx)(g.a,{})})]})]}),Object(p.jsxs)("div",{className:"d-flex justify-content-end",children:[Object(p.jsx)(N.a,{className:"me-3",variant:"primary",type:"button",onClick:a,id:"cancel-btn",children:"Cancel"}),Object(p.jsx)(N.a,{variant:"primary",type:"submit",id:"submit-btn",children:"Create Character"})]})]})},R=function(e){var a=e.show,t=e.close;return Object(p.jsxs)(y.a,{size:"lg",show:a,onHide:t,backdrop:"static",keyboard:!1,id:"planet-modal",children:[Object(p.jsx)(y.a.Header,{closeButton:!0}),Object(p.jsx)(y.a.Header,{children:Object(p.jsx)(y.a.Title,{className:"modal-title",children:"Character"})}),Object(p.jsx)(y.a.Body,{children:Object(p.jsx)(H,{cancel:t})})]})};var F=function(e){var a=e.show,t=e.close,s=e.title,r=e.desc,n=Object(c.useState)([{image:o.character9,name:"Eleanor Pena",id:1},{image:o.character16,name:"Brooklyn Simmons",id:2},{image:o.character4,name:"Kristin Watson",id:3},{image:o.character12,name:"Cody Fisher",id:4},{image:o.character14,name:"Courtney Henry",id:5},{image:o.character5,name:"Annette Black",id:6}]),i=Object(f.a)(n,2),l=i[0];return i[1],console.log(l),Object(p.jsxs)(k.a,{show:a,onHide:t,placement:"end",backdrop:!1,scroll:!0,id:"planet-sidebar",children:[Object(p.jsxs)(k.a.Header,{className:"d-flex flex-column align-items-start",children:[Object(p.jsx)(g.c,{className:"close-btn flex-column align-self-end",onClick:t}),Object(p.jsx)(k.a.Title,{id:"sidebar-title",className:"d-flex justify-content-between",children:s}),Object(p.jsx)("p",{className:"sidebar-subtitle",children:r}),Object(p.jsxs)("div",{className:"d-flex flex-row w-100",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"sidebar-pop",children:"Planet"}),Object(p.jsx)("div",{className:"sidebar-no",children:"Alpha"})]}),Object(p.jsxs)("div",{className:"sidebar-friends-div",children:[Object(p.jsx)("div",{className:"sidebar-pop",children:"Friends"}),Object(p.jsx)("div",{className:"sidebar-no",children:"23"})]})]})]}),Object(p.jsxs)(k.a.Body,{children:[Object(p.jsx)("h5",{className:"sidebar-characters",children:"Friends"}),Object(p.jsx)("div",{className:"chars ",children:l.map((function(e){return Object(p.jsxs)("div",{className:"d-flex mb-3 justify-content-start",children:[Object(p.jsx)("img",{src:e.image,alt:""}),Object(p.jsxs)("div",{className:"ms-3 mt-2 align-self-center",children:[Object(p.jsx)("h6",{className:"sidebar-name",children:e.name}),Object(p.jsx)("p",{className:"sidebar-friends",children:"Amet minim mollit non deserunt ullamco."})]})]},e.id)}))})]})]})},D=function(){var e=Object(c.useState)(""),a=Object(f.a)(e,2),t=a[0],s=a[1],r=Object(c.useState)(!1),n=Object(f.a)(r,2),i=n[0],d=n[1],o=Object(c.useState)(!1),j=Object(f.a)(o,2),m=j[0],h=j[1];return Object(p.jsxs)("div",{children:[Object(p.jsx)(l.a,{xs:1,md:2,lg:3,xl:4,className:"g-3",id:"character-row",children:b.map((function(e){return Object(p.jsx)(x.a,{id:"character-col",children:Object(p.jsx)(O.a,{id:"character-cards",className:"h-100 character-cards",onClick:function(){return function(e){document.querySelector(".character-cards").style.border="2px solid #121c33",h(!0);var a=document.querySelector("#character-row");a.style.marginRight="300px",a.classList.remove("row-cols-xl-4"),a.classList.remove("row-cols-lg-3"),a.classList.remove("row-cols-md-2"),a.classList.add("row-cols-xl-3"),document.querySelector("#dropdown-basic").style.marginRight="300px",s(e)}(e)},children:Object(p.jsxs)(O.a.Body,{id:"character-body",children:[Object(p.jsx)(O.a.Img,{variant:"top",src:e.image}),Object(p.jsx)(O.a.Title,{className:"ms-3",id:"character-name",children:e.name}),Object(p.jsxs)(O.a.Text,{className:"ms-3",children:[e.friends," friends"]})]})},e.id)})}))}),Object(p.jsx)(g.b,{className:"plus-circle",onClick:function(){return d(!0)}}),Object(p.jsx)(R,{show:i,close:function(){return d(!1)}}),Object(p.jsx)(F,{show:m,close:function(){h(!1),document.querySelector(".character-cards").style.border="none";var e=document.querySelector("#character-row");e.style.marginRight="0px",e.classList.add("row-cols-xl-4"),e.classList.add("row-cols-lg-3"),e.classList.add("row-cols-md-2"),document.querySelector("#dropdown-basic").style.marginRight="0px"},title:t.name,desc:t.desc})]})},J=function(){var e=P(m).cards;return Object(p.jsx)(T.a,{children:Object(p.jsx)("div",{class:"home",children:Object(p.jsxs)(G.c,{children:[Object(p.jsxs)(G.a,{exact:!0,path:"/",children:[e&&Object(p.jsx)(q,{true:!0,false:!1,display:"d-none"}),Object(p.jsx)(L,{})]}),Object(p.jsxs)(G.a,{path:"/characters",children:[e&&Object(p.jsx)(q,{true:!1,false:!0,display:"d-block"}),Object(p.jsx)(D,{})]})]})})})},z=function(){return Object(p.jsx)(i.a,{className:"p-5",children:Object(p.jsxs)(l.a,{children:[Object(p.jsx)(d.a,{expand:"lg",variant:"light",className:"flex-column align-items-start ",children:Object(p.jsx)(d.a.Brand,{href:"#",className:"pb-1",children:"Spacious"})}),Object(p.jsx)(J,{})]})})};var I=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(z,{})})};n.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(I,{})}),document.getElementById("root"))},59:function(e,a,t){},60:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/character-2.6859fefd.png"},61:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/planet-1.384a5457.svg"},62:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/planet-2.83ed008c.svg"},63:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/planet-3.1e7e89f2.svg"},77:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/character-1.b8cf9c50.png"},78:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/character-3.a7f4a59a.png"},79:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/character-4.1fd020f5.png"},80:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/character-5.2316ee86.png"},81:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/character-6.839b5ded.png"},82:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/character-7.fadfa678.png"},83:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/character-8.341f1453.png"},84:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/character-9.d1414f7c.png"},85:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/character-10.f6fdbe59.png"},86:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/character-11.436dd33b.png"},87:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/character-12.93868536.png"},88:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/character-13.323d7c56.png"},89:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/character-14.e769e338.png"},90:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/character-15.6290ce78.png"},91:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/character-16.68426aac.png"},92:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/planet-4.dcf17b9a.svg"},93:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/planet-5.92952d74.svg"},94:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/planet-6.66e9910c.svg"},95:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/planet-7.2f74e7f8.svg"},96:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/planet-8.48c0a610.svg"},97:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/planet-9.c5b1f749.svg"},98:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/planet-loader.7e184522.svg"}},[[109,1,2]]]);
//# sourceMappingURL=main.a37ed2ab.chunk.js.map