(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(e,a,t){e.exports={history:"Transactions_history__2pG3r",type:"Transactions_type__4g_IB",info:"Transactions_info__3PucU"}},function(e,a,t){e.exports={card:"User_card__2RDT7",info:"User_info__fTEy8",name:"User_name__Y-EpK",tag:"User_tag__3u7IR",location:"User_location__2eLun",stats:"User_stats__2DmpA"}},,function(e,a,t){e.exports={item:"FriendListItem_item__1JfCM",status:"FriendListItem_status__2CPVw",statusRed:"FriendListItem_statusRed__21Nmi FriendListItem_status__2CPVw",statusGreen:"FriendListItem_statusGreen__23jWV FriendListItem_status__2CPVw",avatar:"FriendListItem_avatar__39YKi"}},function(e){e.exports=JSON.parse('{"username":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://cdn-icons-png.flaticon.com/512/2922/2922506.png","stats":{"followers":5603,"views":4827,"likes":1308}}')},function(e,a,t){e.exports={statistics:"Statistics_statistics__2QFok",list:"Statistics_list__3oKT7",item:"Statistics_item__1vE2T"}},,,function(e,a,t){e.exports={list:"FriendList_list__N5Wgd"}},function(e,a,t){e.exports={container:"Template_container__2i3P3"}},function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(e){e.exports=JSON.parse('[{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998592.png","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://cdn-icons-png.flaticon.com/512/616/616438.png","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://cdn-icons-png.flaticon.com/512/1623/1623681.png","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://cdn-icons-png.flaticon.com/512/2977/2977285.png","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998749.png","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},,,,,,function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var c=t(3),n=t.n(c),s=t(8),i=t.n(s),r=(t(18),t(19),t(2)),d=t.n(r),l=t(0);function o(e){var a=e.username,t=e.tag,c=e.location,n=e.avatar,s=e.stats;return Object(l.jsxs)("div",{className:d.a.card,children:[Object(l.jsx)("img",{src:n,alt:t,className:"avatar"}),Object(l.jsxs)("div",{className:d.a.info,children:[Object(l.jsx)("p",{className:d.a.name,children:a}),Object(l.jsx)("p",{className:d.a.tag,children:t}),Object(l.jsx)("p",{className:d.a.location,children:c}),Object(l.jsxs)("ul",{className:d.a.stats,children:[Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{className:"label",children:"Followers "}),Object(l.jsx)("span",{className:"quantity",children:s.followers})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{className:"label",children:"Views "}),Object(l.jsx)("span",{className:"quantity",children:s.views})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{className:"label",children:"Likes "}),Object(l.jsx)("span",{className:"quantity",children:s.likes})]})]})]})]})}var b=t(6),m=t.n(b);function u(e){var a=e.title,t=e.stats;return Object(l.jsxs)("section",{className:m.a.statistics,children:[a&&Object(l.jsx)("h2",{className:"title",children:a}),Object(l.jsx)("ul",{className:m.a.list,children:t.map((function(e){var a=e.id,t=e.label,c=e.percentage;return Object(l.jsxs)("li",{className:m.a.item,children:[Object(l.jsxs)("span",{className:"label",children:[t," "]}),Object(l.jsxs)("span",{className:"percentage",children:[c," "]})]},a)}))})]})}var j=t(9),p=t.n(j),f=t(4),h=t.n(f);function O(e){var a=e.avatar,t=e.name,c=e.isOnline;return Object(l.jsxs)("li",{className:h.a.item,children:[Object(l.jsx)("span",{className:c?h.a.statusRed:h.a.statusGreen}),Object(l.jsx)("img",{className:h.a.avatar,src:a,alt:"User avatar",width:"48"}),Object(l.jsx)("p",{className:h.a.name,children:t})]})}function y(e){var a=e.friends;return Object(l.jsx)("ul",{className:p.a.list,children:a.map((function(e){return Object(l.jsx)(O,{avatar:e.avatar,name:e.name,isOnline:e.isOnline},e.id)}))})}var _=t(1),x=t.n(_);function v(e){var a=e.items;return Object(l.jsxs)("table",{className:x.a.history,children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{className:x.a.type,children:"Type"}),Object(l.jsx)("th",{className:x.a.type,children:"Amount"}),Object(l.jsx)("th",{className:x.a.type,children:"Currency"})]})}),Object(l.jsx)("tbody",{children:a.map((function(e){var a=e.id,t=e.type,c=e.amount,n=e.currency;return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{className:x.a.info,children:t}),Object(l.jsx)("td",{className:x.a.info,children:c}),Object(l.jsx)("td",{className:x.a.info,children:n})]},a)}))})]})}var N=t(10),g=t.n(N);function w(e){var a=e.children;return Object(l.jsx)("div",{className:g.a.container,children:a})}var U=t(5),L=t(11),F=t(12),T=t(13),I=U.username,S=U.tag,G=U.location,J=U.avatar,P=U.stats;function C(){return Object(l.jsxs)(c.Fragment,{children:[Object(l.jsx)(w,{children:Object(l.jsx)(o,{username:I,tag:S,location:G,avatar:J,stats:P})}),Object(l.jsx)(w,{children:Object(l.jsx)(u,{title:"Static",stats:L})}),Object(l.jsx)(w,{children:Object(l.jsx)(y,{friends:F})}),Object(l.jsx)(w,{children:Object(l.jsx)(v,{items:T})})]})}i.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(C,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.3413edd8.chunk.js.map