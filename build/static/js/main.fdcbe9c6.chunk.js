(window.webpackJsonpminiapp=window.webpackJsonpminiapp||[]).push([[0],{223:function(e,t,a){e.exports=a(360)},334:function(e,t,a){},335:function(e,t,a){},336:function(e,t,a){},338:function(e,t,a){},339:function(e,t,a){},358:function(e,t,a){e.exports=a.p+"static/media/empty_doc.8182911a.png"},359:function(e,t,a){e.exports=a.p+"static/media/story.da7365b3.png"},360:function(e,t,a){"use strict";a.r(t);a(224),a(258),a(260),a(262),a(264),a(265),a(266),a(267),a(268),a(269),a(272),a(273),a(275),a(276),a(277),a(278),a(279),a(280),a(282),a(283),a(284),a(285),a(286),a(287),a(290),a(291),a(292),a(293),a(294),a(296),a(298),a(300),a(302),a(303),a(304),a(305),a(306),a(307),a(309),a(311);var n=a(51),r=a(52),o=a(55),c=a(53),s=a(56),i=a(0),l=a.n(i),u=a(68),p=a.n(u),h=(a(320),a(321),a(5)),d=(a(334),a(335),a(336),a(9)),m=a.n(d),f=a(50),b=a(42),g=a(4),v=a.n(g),y=a(7),_=(a(338),a(339),a(54)),x=a(33);a(95);function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function w(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(a,!0).forEach((function(t){Object(f.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function E(e){return O.apply(this,arguments)}function O(){return(O=Object(y.a)(v.a.mark((function e(t){var a,n,r,o,c=arguments;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>1&&void 0!==c[1]?c[1]:{},n=c.length>2&&void 0!==c[2]?c[2]:{},r=a?"?"+Object.keys(a).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent("object"===typeof a[e]?JSON.stringify(a[e]):a[e])})).join("&"):"",o="".concat(t).concat(r),e.next=5,new Promise((function(e,t){fetch(o,w({method:"GET"},n)).then((function(e){return e.json()})).then((function(t){return e(t)})).catch((function(t){return e({error:{code:-1,text:t.toString()}})}))}));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var j=["SF Pro Text","SF Pro Text Heavy","SF Pro Text Semibold","SF Pro Display","SF Pro Display Bold","SF Pro Display Semibold","SF Pro Display Medium","SF Pro Rounded","SF Pro Rounded Semibold","SF Pro Rounded Bold","SF UI Display","SF UI Text","TT Commons","TT Commons Bold","TT Commons Demibold","Manrope ExtraBold"];function C(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=!0,a=!1,n=void 0;try{for(var r,o=function(){var e=r.value,t=document.createElement("span");t.style.position="fixed",t.style.fontFamily=e,t.style.opacity="0",t.innerText="test",document.body.appendChild(t),t.onload=function(){return t.remove()}},c=e[Symbol.iterator]();!(t=(r=c.next()).done);t=!0)o()}catch(s){a=!0,n=s}finally{try{t||null==c.return||c.return()}finally{if(a)throw n}}}function S(e){return new Promise((function(t){return setTimeout(t,e)}))}function P(e,t){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if("object"!==typeof t)return"".concat(e," ").concat(t);if(void 0!==e){var n=[];return n[e]||(n[e]=e%100>4&&e%100<20?2:[2,0,1,1,1,2][Math.min(e%10,5)]),(a?e+" ":"")+t[n[e]]}}function I(e){try{return e.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g,"$1 ")}catch(t){return 0}}function D(){var e=window.location.search.length>0&&JSON.parse('{"'+decodeURI(window.location.search.substring(1)).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}');return e&&e.vk_chat_id&&(e.vk_chat_id=decodeURIComponent(e.vk_chat_id)),e}function A(e,t){var a=document.createElement("a");a.href=e,t&&(a.download=t),a.target="_blank",a.click(),a.remove()}function T(e,t,a,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{x:0,y:0,width:0,height:0};a="number"===typeof a?new Array(4).fill(a):a,e.save(),e.beginPath(),e.moveTo(r.x+a[0],r.y),e.lineTo(r.x+r.width-a[1],r.y),e.quadraticCurveTo(r.x+r.width,r.y,r.x+r.width,r.y+a[1]),e.lineTo(r.x+r.width,r.y+r.height-a[2]),e.quadraticCurveTo(r.x+r.width,r.y+r.height,r.x+r.width-a[2],r.y+r.height),e.lineTo(r.x+a[3],r.y+r.height),e.quadraticCurveTo(r.x,r.y+r.height,r.x,r.y+r.height-a[3]),e.lineTo(r.x,r.y+a[0]),e.quadraticCurveTo(r.x,r.y,r.x+a[0],r.y),e.closePath();var o=n?n.x:r.x,c=n?n.y:r.y,s=n?n.width:r.width,i=n?n.height:r.height;e.clip(),e.drawImage(t,o,c,s,i),e.restore()}function F(e){return M.apply(this,arguments)}function M(){return(M=Object(y.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=document.createElement("img")).crossOrigin="anonymous",a.src=t,e.next=5,new Promise((function(e){return a.onload=function(){return e()}}));case 5:return e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"main";this.back=Object(y.a)(v.a.mark((function t(){var a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null===e.state.popout||void 0===e.state.popout){t.next=4;break}return e.setState({popout:null}),window.history.pushState({pop:"popout"},"Title"),t.abrupt("return");case 4:if(1!==(a=e.state.history).length){t.next=9;break}m.a.send("VKWebAppClose",{status:"success"}),t.next=13;break;case 9:if(!(a.length>1)){t.next=13;break}return a.pop(),t.next=13,e.setState({activePanel:a[a.length-1],history:a,snackbar:null});case 13:case"end":return t.stop()}}),t)}))),this.go=function(t){var a=e.state.history;"object"===typeof t&&t.currentTarget&&(t=t.currentTarget.dataset.to),a[a.length-1]!==t&&(a.push(t),window.history.pushState({activePanel:t},"Title"),e.setState({activePanel:t,history:a,snackbar:null}))},this.setActiveModal=function(t){e.setState({activeModal:t})},this.setActivePanel=function(t,a){e.setState({activePanel:t,history:a?[].concat(Object(_.a)(a),[t]):[t]})},this.setPopout=function(t){e.setState({popout:t})},this.setSnackbar=function(){var t=Object(y.a)(v.a.mark((function t(a){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.state.snackbar){t.next=5;break}return t.next=3,e.setState({snackbar:null});case 3:return t.next=5,S(100);case 5:e.setState({snackbar:l.a.createElement(h.r,{onClose:function(){return e.setState({snackbar:null})}},a)});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),this.setAlert=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[{title:"\u041e\u043a",autoclose:!0}];e.setPopout(l.a.createElement(h.b,{actions:n,actionsLayout:"vertical",onClose:function(){return e.setPopout(null)},header:t,text:a}))},this.state.history=[t],this.state.activePanel=t}function V(){return{activePanel:this.state.activePanel,onSwipeBack:this.back,history:this.state.history,popout:this.state.popout}}var W=a(96),z=a.n(W);function K(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function N(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?K(a,!0).forEach((function(t){Object(f.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):K(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var B=4,R=2,J=3,G="https://vds2153919.my-ihor.ru:8081/api/",L=G+"apps.get",H="https://vds2153919.my-ihor.ru:8088/",q=!1,Y=0;function Z(){return{2:{2:{0:23,1:24},1:{2:23,3:24}},3:{2:{0:23,1:29,2:30},1:{3:23,4:29,5:30}},4:{2:{0:16,1:20,2:29,3:30},1:{4:16,5:20,6:29,7:30}}}[B]}function $(e,t){var a=Z();if(0===e||0===t)return Y;for(var n=a[e],r=Object.keys(n).map((function(e){return[e,n[e]]})),o=0;o<r.length;o++){var c=r[o];if(o===r.length-1)return parseInt(c[0]);if(parseInt(t)<=parseInt(c[1]))return parseInt(c[0])}return Y}function Q(e){return X.apply(this,arguments)}function X(){return(X=Object(y.a)(v.a.mark((function e(t){var a,n,r,o,c,s,i;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a={},n=0,r=["groupsJoinUser","groupsMessageUser"];case 3:if(!(n<r.length)){e.next=28;break}o=r[n],a[o]=[],c=t[o],s=0;case 8:if(!(s<c.length)){e.next=25;break}return e.prev=9,e.next=12,m.a.send("VKWebAppGetGroupInfo",{group_id:c[s]});case 12:i=e.sent,a[o].push(i),e.next=22;break;case 16:return e.prev=16,e.t0=e.catch(9),console.error(e.t0),s--,e.next=22,S(1e3);case 22:s++,e.next=8;break;case 25:n++,e.next=3;break;case 28:return e.abrupt("return",N({},t,{},a));case 29:case"end":return e.stop()}}),e,null,[[9,16]])})))).apply(this,arguments)}function ee(){return te.apply(this,arguments)}function te(){return(te=Object(y.a)(v.a.mark((function e(){var t,a,n,r,o,c,s,i,l,u,p,h,d,f,b,g,y,_,x,k,w,O,j,C,S,P,I=arguments;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=I.length>0&&void 0!==I[0]&&I[0],q=t,a=parseInt(D().vk_app_id||0),e.next=5,E(L,{app_id:a});case 5:for((n=e.sent.response)||(n={app_id:a,group_id_join:new Array(B*J*2).fill(1),group_id_message:new Array(B*R*2).fill(1),save_photo_album:!1,need_panel_upload_photo:!1,tg_urls:[],is_show_tg:!1,categories_for_tg:[],category_group_default:0,album_name:"\ud83e\udd2a",album_caption:"\u0423\u0437\u043d\u0430\u0439 \u043a\u0430\u043a \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0435 \u0441\u0442\u0438\u043a\u0435\u0440\u044b - vk.com/app51535584#mark",need_upload_default_album_photo:!1,album_default_photo_url:"https://i.ibb.co/vDCcZsf/photo-2023-01-27-14-38-48.jpg"}),r=[],o=[],s=(c=n).category_group_default,i=c.is_show_tg,l=c.categories_for_tg,u=c.need_panel_upload_photo,p=c.need_upload_default_album_photo,h=c.album_default_photo_url,d=c.group_id_join,f=c.group_id_message,b=c.save_photo_album,g=c.tg_urls,Y=s,y=0;y<d.length;y+=J)r.push(d.slice(y,y+J));for(_=0;_<f.length;_+=R)o.push(f.slice(_,_+R));return e.next=13,m.a.send("VKWebAppGetUserInfo");case 13:if(x=e.sent,k=x.sex,w=x.bdate,O=w&&3===w.split(".").length?(new Date).getFullYear()-parseInt(x.bdate.split(".")[2]):0,j=$(k,O),C=r[j],S=o[j],P={groupsJoinCategory:r,groupsJoinUser:C,groupsMessageCategory:o,groupsMessageUser:S,vk_user:x,app:n,showGroupsCategory:j,savePhotoAlbum:b,need_upload_default_album_photo:p,album_default_photo_url:h,is_show_tg:i,categories_for_tg:l,need_panel_upload_photo:u,need_panel_sex_years:0===k||0===O,tg_urls:g,sex:k,years:O},!q){e.next=25;break}return e.next=24,Q(P);case 24:P=e.sent;case 25:return console.debug(P),e.abrupt("return",P);case 27:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ae(){var e=this;return l.a.createElement(h.g,{onChange:function(t){return e.setState({selectedSex:t.target.value})},defaultValue:0===this.state.sex||1===this.state.sex?"1":"2",options:Object.keys(Z()).map((function(e){return{value:"".concat(e),label:1==e?"\u0436\u0435\u043d\u0441\u043a\u0438\u0439":"\u043c\u0443\u0436\u0441\u043a\u043e\u0439"}}))})}function ne(){var e=this;return l.a.createElement(h.g,{onChange:function(t){return e.setState({selectedYears:t.target.value})},defaultValue:"".concat(Z()[2][0]),options:Object.keys(Z()[this.state.selectedSex||1]).map((function(t,a,n){var r=Z()[e.state.selectedSex||1][t],o=0===a?"\u0434\u043e ".concat(r):n[a+1]?"\u043e\u0442 ".concat(Z()[e.state.selectedSex||1][n[a-1]]+1," \u0434\u043e ").concat(r):"\u043e\u0442 ".concat(r);return{value:"".concat(r),label:o}}))})}function re(e){return oe.apply(this,arguments)}function oe(){return(oe=Object(y.a)(v.a.mark((function e(t){var a,n,r,o,c,s,i,l,u,p;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("object"===typeof t&&t.currentTarget&&(t=t.currentTarget.dataset.to),a=this.state,n=a.selectedSex,r=a.selectedYears,n||(n=0===this.state.sex||1===this.state.sex?"1":"2"),r||(r="".concat(Z()[2][0])),e.prev=4,o=this.state,c=o.groupsJoinCategory,s=o.groupsMessageCategory,i=$(n,r),l=c[i],u=s[i],p=N({sex:n,years:r,groupsJoinUser:l,groupsMessageUser:u,showGroupsCategory:i},t?{history:[t],activePanel:t}:{}),!q){e.next=11;break}return e.next=10,Q(p);case 10:p=e.sent;case 11:this.setState(p),console.debug(p),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(4),console.error("ERR",e.t0,this.state),console.debug({selectedSex:n,selectedYears:r});case 19:case"end":return e.stop()}}),e,this,[[4,15]])})))).apply(this,arguments)}function ce(e){return se.apply(this,arguments)}function se(){return(se=Object(y.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.send("VKWebAppStorageGet",{keys:[t]});case 2:return e.abrupt("return",e.sent.keys[0].value);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ie(e,t){return m.a.send("VKWebAppStorageSet",{key:e,value:t})}function le(e){return ue.apply(this,arguments)}function ue(){return(ue=Object(y.a)(v.a.mark((function e(t){var a,n,r=arguments;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.length>1&&void 0!==r[1]&&r[1],e.prev=1,e.next=4,m.a.send("VKWebAppGetAuthToken",{app_id:parseInt(D().vk_app_id),scope:t});case 4:if(n=e.sent,!(t.includes(",")?n.scope.split(",").length===t.split(",").length:n.scope===t)){e.next=9;break}return e.abrupt("return",n.access_token);case 9:if(!a){e.next=15;break}return e.next=12,le(t,a);case 12:return e.abrupt("return",e.sent);case 15:return e.abrupt("return",!1);case 16:e.next=27;break;case 18:if(e.prev=18,e.t0=e.catch(1),!a){e.next=26;break}return e.next=23,le(t,a);case 23:return e.abrupt("return",e.sent);case 26:return e.abrupt("return",!1);case 27:case"end":return e.stop()}}),e,null,[[1,18]])})))).apply(this,arguments)}function pe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;m.a.subscribe(function(){var a=Object(y.a)(v.a.mark((function a(n){var r,o,c,s,i;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:r=n.detail,o=r.type,c=r.data,void 0!==o&&console.debug(o,c),"VKWebAppUpdateConfig"===o?(s=document.createAttribute("scheme"),i=c.scheme?"client_light"===c.scheme?"bright_light":c.scheme:"bright_light",s.value=t||i,document.body.attributes.setNamedItem(s),e[o]&&"function"===typeof e[o]&&e[o]()):e[o]&&"function"===typeof e[o]&&e[o]();case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}())}function he(e,t,a,n){return de.apply(this,arguments)}function de(){return(de=Object(y.a)(v.a.mark((function e(t,a,n,r){var o,c,s,i,l,u,p,h,d,f,b,g,_,x,k=arguments;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=k.length>4&&void 0!==k[4]&&k[4],c=k.length>5&&void 0!==k[5]?k[5]:"perm_album",r){e.next=8;break}return e.next=5,le("photos");case 5:if(r=e.sent){e.next=8;break}return e.abrupt("return",-1);case 8:if(e.t0=o,!e.t0){e.next=13;break}return e.next=12,ce(c);case 12:e.t0=e.sent;case 13:if(""!==(i=e.t0)&&o){e.next=23;break}return e.next=17,m.a.send("VKWebAppCallAPIMethod",{method:"photos.createAlbum",params:{title:a,v:"5.126",access_token:r}});case 17:if(s=e.sent.response.id,!o){e.next=21;break}return e.next=21,ie(c,"".concat(s));case 21:e.next=24;break;case 23:s=parseInt(i);case 24:u=!1,p=0;case 26:if(!(p<1)){e.next=51;break}return e.prev=27,e.next=30,m.a.send("VKWebAppCallAPIMethod",{method:"photos.getUploadServer",params:{album_id:s,v:"5.126",access_token:r}});case 30:l=e.sent.response.upload_url,e.next=48;break;case 33:if(e.prev=33,e.t1=e.catch(27),u){e.next=46;break}return u=!0,p--,e.next=40,m.a.send("VKWebAppCallAPIMethod",{method:"photos.createAlbum",params:{title:a,v:"5.126",access_token:r}});case 40:if(s=e.sent.response.id,!o){e.next=44;break}return e.next=44,ie(c,"".concat(s));case 44:e.next=48;break;case 46:return console.error(e.t1),e.abrupt("return",-2);case 48:p++,e.next=26;break;case 51:t instanceof Blob&&(t=[t]),h=!0,d=!1,f=void 0,e.prev=55,b=v.a.mark((function e(){var t,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=_.value,(a=new FormData).append("photo",t,"image.png"),e.prev=3,e.next=6,new Promise((function(e){return z()(H+l,{method:"POST",body:a}).then((function(e){return e.json()})).then(function(){var t=Object(y.a)(v.a.mark((function t(a){var o,c,i;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,o=a.server,c=a.photos_list,i=a.hash,t.next=4,m.a.send("VKWebAppCallAPIMethod",{method:"photos.save",params:{album_id:s,server:o,photos_list:c,hash:i,caption:n,v:"5.126",access_token:r}});case 4:e(s),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0),e(-3);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}())}));case 6:return e.t0=e.sent,e.abrupt("return",{v:e.t0});case 10:return e.prev=10,e.t1=e.catch(3),console.error(e.t1),e.abrupt("return",{v:-4});case 14:case"end":return e.stop()}}),e,null,[[3,10]])})),g=t[Symbol.iterator]();case 58:if(h=(_=g.next()).done){e.next=66;break}return e.delegateYield(b(),"t2",60);case 60:if("object"!==typeof(x=e.t2)){e.next=63;break}return e.abrupt("return",x.v);case 63:h=!0,e.next=58;break;case 66:e.next=72;break;case 68:e.prev=68,e.t3=e.catch(55),d=!0,f=e.t3;case 72:e.prev=72,e.prev=73,h||null==g.return||g.return();case 75:if(e.prev=75,!d){e.next=78;break}throw f;case 78:return e.finish(75);case 79:return e.finish(72);case 80:case"end":return e.stop()}}),e,null,[[27,33],[55,68,72,80],[73,,75,79]])})))).apply(this,arguments)}function me(){return(me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function fe(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var be,ge=l.a.createElement("rect",{x:21,width:286,height:195,rx:24,fill:"white",fillOpacity:.05}),ve=l.a.createElement("circle",{cx:49,cy:28,r:16,fill:"white",fillOpacity:.1}),ye=l.a.createElement("rect",{x:73,y:14,width:100,height:12,rx:6,fill:"white",fillOpacity:.1}),_e=l.a.createElement("rect",{x:73,y:32,width:130,height:10,rx:5,fill:"white",fillOpacity:.1}),xe=l.a.createElement("rect",{x:21,y:90,width:286,height:105,fill:"white",fillOpacity:.1}),ke=l.a.createElement("rect",{x:33,y:61,width:77,height:16,rx:8,fill:"white",fillOpacity:.1}),we=l.a.createElement("rect",{y:111,width:327,height:84,fill:"url(#paint0_linear_17_4678)"}),Ee=l.a.createElement("rect",{x:138,y:143,width:52,height:52,rx:26,fill:"white",fillOpacity:.1}),Oe=l.a.createElement("path",{d:"M167.59 158C169.773 158 170.823 158.203 171.914 158.786C172.903 159.315 173.685 160.097 174.214 161.086C174.797 162.177 175 163.227 175 165.41V172.59C175 174.773 174.797 175.823 174.214 176.914C173.685 177.903 172.903 178.685 171.914 179.214C170.823 179.797 169.773 180 167.59 180H160.41C158.227 180 157.177 179.797 156.086 179.214C155.097 178.685 154.315 177.903 153.786 176.914C153.203 175.823 153 174.773 153 172.59V165.41C153 163.227 153.203 162.177 153.786 161.086C154.315 160.097 155.097 159.315 156.086 158.786C157.177 158.203 158.227 158 160.41 158H167.59ZM154.999 166L155 172.59C155 174.471 155.142 175.209 155.55 175.971C155.892 176.611 156.389 177.108 157.029 177.45C157.791 177.858 158.529 178 160.41 178H167.59C169.471 178 170.209 177.858 170.971 177.45C171.611 177.108 172.108 176.611 172.45 175.971C172.858 175.209 173 174.471 173 172.59L172.999 166H154.999ZM167.59 160H160.41C158.529 160 157.791 160.142 157.029 160.55C156.389 160.892 155.892 161.389 155.55 162.029C155.264 162.563 155.109 163.086 155.041 163.999H172.959C172.891 163.086 172.736 162.563 172.45 162.029C172.108 161.389 171.611 160.892 170.971 160.55C170.209 160.142 169.471 160 167.59 160Z",fill:"white"}),je=l.a.createElement("defs",null,l.a.createElement("linearGradient",{id:"paint0_linear_17_4678",x1:163.5,y1:111,x2:163.5,y2:195,gradientUnits:"userSpaceOnUse"},l.a.createElement("stop",{stopColor:"#303030",stopOpacity:0}),l.a.createElement("stop",{offset:.397005,stopColor:"#303030",stopOpacity:.7}),l.a.createElement("stop",{offset:.622967,stopColor:"#303030"}))),Ce=function(e){var t=e.svgRef,a=e.title,n=fe(e,["svgRef","title"]);return l.a.createElement("svg",me({width:327,height:195,viewBox:"0 0 327 195",fill:"none",ref:t},n),a?l.a.createElement("title",null,a):null,ge,ve,ye,_e,xe,ke,we,Ee,Oe,je)},Se=l.a.forwardRef((function(e,t){return l.a.createElement(Ce,me({svgRef:t},e))})),Pe=(a.p,a(365)),Ie=a(366),De=function(e){function t(e){return Object(n.a)(this,t),Object(o.a)(this,Object(c.a)(t).call(this,e))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.t,n=t.activeModal;return l.a.createElement(h.n,{activeModal:n},l.a.createElement(h.m,{id:"access",onClose:function(){return a.setActiveModal(null)},icon:l.a.createElement(Se,null),header:"\u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u0435 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0434\u0430\u043d\u043d\u044b\u043c",subheader:"\u041c\u044b \u043d\u0435 \u0431\u0443\u0434\u0435\u043c \u043d\u0438\u0447\u0435\u0433\u043e \u0434\u0435\u043b\u0430\u0442\u044c \u0431\u0435\u0437 \u0432\u0430\u0448\u0435\u0433\u043e \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f",actions:l.a.createElement(h.e,{size:"l",stretched:!0,onClick:Object(y.a)(v.a.mark((function t(){var n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,le("photos");case 3:n=t.sent,e.props.t.setState({access_token:n}),e.props.t.forceUpdate(),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(0);case 10:a.setActiveModal(null);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))},"\u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c")}))}}]),t}(l.a.PureComponent),Ae=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(c.a)(t).call(this,e))).state={activeStep:0,steps:2},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.activeStep,n=t.steps,r=this.props,o=r.onEnd,c=r.t,s=this.onboard_data,i=s.icon,u=s.title,p=s.text,d=s.button,m=s.buttonOnClick,f=s.body;return l.a.createElement("div",{className:"Onboard"},l.a.createElement("div",{className:"Onboard-Content"},i&&l.a.createElement("img",{alt:"icon",src:i,width:44,height:44}),l.a.createElement("h1",null,u),l.a.createElement("p",null,p),l.a.createElement("div",{className:"Pagination"},new Array(n).fill(0).map((function(e,t){return l.a.createElement("div",{key:"Pagination_".concat(t),className:"Pagination-Circle",style:{opacity:a===t?1:.3}})})))),f,l.a.createElement("div",{style:{display:"flex",width:"100%"}},l.a.createElement(h.e,{size:"l",stretched:!0,style:{transition:"all 300ms ease-in-out",marginTop:f?32:53},onClick:Object(y.a)(v.a.mark((function t(){var r,s,i;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!m||"function"!==typeof m){t.next=3;break}return t.next=3,m();case 3:r=c.state,s=r.sex,i=r.years,a<n-1&&(0===s||0===i)?e.setState({activeStep:a+1}):o();case 5:case"end":return t.stop()}}),t)})))},d)))}},{key:"onboard_data",get:function(){var e=this,t=this.props.t;return[{icon:"https://em-content.zobj.net/thumbs/160/apple/354/ring_1f48d.png",title:"\u0411\u0440\u0430\u043a\u043e\u0441\u043e\u0447\u0435\u0442\u0430\u043d\u0438\u0435",text:"\u041c\u044b \u043f\u043e\u043c\u043e\u0436\u0435\u043c \u0437\u0430\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0442\u0435\u0431\u0435 \u0431\u0440\u0430\u043a \u0441 \u043b\u044e\u0431\u0438\u043c\u044b\u043c",button:"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c",buttonOnClick:function(){return e.props.t.setActiveModal("access")}},{title:"\u0415\u0449\u0451 \u043a\u043e\u0435-\u0447\u0442\u043e",text:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u0432\u043e\u0437\u0440\u0430\u0441\u0442 \u0438 \u043f\u043e\u043b, \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c",body:l.a.createElement("div",{className:"Onboard-Body"},l.a.createElement("div",null,l.a.createElement("span",null,"\u041f\u043e\u043b"),ae.bind(t)()),l.a.createElement("div",null,l.a.createElement("span",null,"\u0412\u043e\u0437\u0440\u0430\u0441\u0442"),ne.bind(t)())),button:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u0430\u043d\u043a\u0435\u0442\u0435",buttonOnClick:re.bind(t)}][this.state.activeStep]}}]),t}(l.a.PureComponent),Te=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(c.a)(t).call(this,e))).state={step_data:[]},U.bind(Object(b.a)(a))("onboard"),a.componentDidMount=a.componentDidMount.bind(Object(b.a)(a)),a.onChangeInputData=a.onChangeInputData.bind(Object(b.a)(a)),a.createDocument=a.createDocument.bind(Object(b.a)(a)),a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=Object(y.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this,e.next=3,ee(!0);case 3:return e.t1=e.sent,e.next=6,e.t0.setState.call(e.t0,e.t1);case 6:return pe({VKWebAppUpdateConfig:function(){m.a.supports("VKWebAppSetViewSettings")&&m.a.send("VKWebAppSetViewSettings",{status_bar_style:"dark",action_bar_color:"#272727"})}},"space_gray"),m.a.send("VKWebAppInit"),e.next=10,C(["SF Pro Text Medium"]);case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){clearInterval(be)}},{key:"onChangeInputData",value:function(e,t,a){if(!t||!a){var n=e.currentTarget;t=n.dataset.obj,a=n.dataset.key,e=n.value}var r=this.state[t]||{};r[a]=e,this.setState(Object(f.a)({},t,r))}},{key:"createDocument",value:function(){var e=this,t=12e4;this.setState({time:t}),be=setInterval((function(){t-=1e3,e.setState({time:t}),t<=0&&clearInterval(be)}),1e3),this.go("subscribe"),setTimeout(Object(y.a)(v.a.mark((function t(){var n,r,o,c,s,i,l,u,p,h,d,m,f,b,g,y,_,k,w,E,O,j,C,S,P,I,D,A,M,U;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(x.loadImage)(a(358));case 2:for(n=t.sent,r=Object(x.createCanvas)(n.width,n.height),(o=r.getContext("2d")).drawImage(n,0,0),o.font="17px SF Pro Text Medium",o.textAlign="left",o.fillStyle="#000000",c=e.state,s=285,i=["data_husband","data_wife","data_general"],l=0;l<i.length;l++)for(u=2===l?["last_name_husband","last_name_wife","regplace","regdate"]:["last_name","first_name","middle_name","citizenship","birthday","birthplace"],p=0;p<u.length;p++)h=u[p],d=c[i[l]][h],"birthday"!==h&&"regdate"!==h||(d=new Date(d).toLocaleDateString("ru-RU",{day:"numeric",month:"long",year:"numeric"})),l+p>0&&(s+=38,1===l&&0===p&&(s+=86),2===l&&0===p&&(s+=200),2===l&&2===p&&(s+=37),2===l&&3===p&&(s+=13)),o.fillText(d,"birthday"===h||h.startsWith("reg")?500:318,s);return m=r.toDataURL("image/png"),t.next=16,new Promise((function(e){return r.toBlob((function(t){return e(t)}))}));case 16:return f=t.sent,t.next=19,Object(x.loadImage)(m);case 19:return b=t.sent,t.next=22,Object(x.loadImage)(a(359));case 22:if(g=t.sent,y=Object(x.createCanvas)(g.width,g.height),(_=y.getContext("2d")).drawImage(g,0,0),T(_,b,69,null,{x:142.96,y:366.04,width:795.07,height:1140.24}),k=y.toDataURL("image/png"),e.setState({doc:m,doc_blob:f,story:k}),!e.state.access_token){t.next=46;break}if(w=e.state,E=w.savePhotoAlbum,O=w.need_upload_default_album_photo,j=w.album_default_photo_url,C=e.state.app,S=C.album_name,P=C.album_caption,!E){t.next=46;break}return t.next=35,new Promise((function(e){return y.toBlob((function(t){return e(t)}))}));case 35:if(I=t.sent,!O){t.next=45;break}return t.next=39,F(j);case 39:return D=t.sent,A=a(33),M=A.createCanvas,U=M(D.width,D.height),U.getContext("2d").drawImage(D,0,0),t.next=44,new Promise((function(e){return U.toBlob((function(t){return e(t)}))}));case 44:I=t.sent;case 45:he(I,S,P,e.state.access_token);case 46:case"end":return t.stop()}}),t)}))))}},{key:"render",value:function(){var e=this,t=this.state,n=t.activeModal,r=t.step_data,o=t.time,c=t.doc,s=t.doc_blob,i=t.story,u=t.snackbar,p=this.state[r[2]],d=function(e){var t,a,n,r,o,c;return c=parseInt(Math.floor(e/1e3)),o=parseInt(Math.floor(c/60)),r=parseInt(Math.floor(o/60)),n=parseInt(c%60),a=parseInt(o%60),{hours:t=parseInt(r%24),minutes:a,seconds:n,str:{hours:t.toLocaleString("ru",{minimumIntegerDigits:2}),minutes:a.toLocaleString("ru",{minimumIntegerDigits:2}),seconds:n.toLocaleString("ru",{minimumIntegerDigits:2})}}}(o).str;return l.a.createElement(h.t,Object.assign({},V.bind(this)(),{modal:l.a.createElement(De,{t:this,activeModal:n})}),l.a.createElement(h.o,{id:"onboard"},l.a.createElement(Ae,{onEnd:function(){e.go("main1")},t:this}),l.a.createElement("img",{alt:"bg",className:"Background",src:a(94)})),l.a.createElement(h.o,{id:"main1"},l.a.createElement("div",{className:"Steps"},this.steps.map((function(t,a){return l.a.createElement("div",{key:"div-".concat(a)},l.a.createElement("h1",null,"\u0428\u0430\u0433 ",a+1),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("img",{alt:"img",src:t[0],width:28,height:28}),l.a.createElement("div",null,l.a.createElement("h3",null,t[1]),l.a.createElement("span",null,e.state[t[2]]?"\u0417\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e":"\u041d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e"))),l.a.createElement(h.e,{onClick:function(){e.setState({step_data:t}),e.go("input_data")}},e.state[t[2]]?"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c":"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u044c")))})),l.a.createElement("div",null,l.a.createElement("h1",null,"\u0428\u0430\u0433 ",this.steps.length+1),l.a.createElement(h.e,{size:"l",disabled:this.steps.filter((function(t){return e.state[t[2]]})).length<this.steps.length,onClick:this.createDocument},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0430\u043d\u043a\u0435\u0442\u0443"))),l.a.createElement("img",{alt:"bg",className:"Background",src:a(94)})),l.a.createElement(h.o,{id:"input_data"},l.a.createElement(h.j,null,l.a.createElement("div",{className:"EmojiTitle"},l.a.createElement("img",{alt:"img",src:r[0]}),l.a.createElement("h1",null,r[1])),l.a.createElement(h.s,{size:24}),"data_general"!==r[2]?l.a.createElement(l.a.Fragment,null,l.a.createElement(h.i,{top:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"},l.a.createElement(h.k,{value:p&&p.last_name,"data-obj":r[2],"data-key":"last_name",onChange:this.onChangeInputData})),l.a.createElement(h.i,{top:"\u0418\u043c\u044f"},l.a.createElement(h.k,{value:p&&p.first_name,"data-obj":r[2],"data-key":"first_name",onChange:this.onChangeInputData})),l.a.createElement(h.i,{top:"\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e"},l.a.createElement(h.k,{value:p&&p.middle_name,"data-obj":r[2],"data-key":"middle_name",onChange:this.onChangeInputData})),l.a.createElement(h.i,{top:"\u0413\u0440\u0430\u0436\u0434\u0430\u043d\u0441\u0442\u0432\u043e"},l.a.createElement(h.k,{value:p&&p.citizenship,"data-obj":r[2],"data-key":"citizenship",onChange:this.onChangeInputData})),l.a.createElement(h.i,{top:"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f"},l.a.createElement(h.h,{value:p&&p.birthday,onChange:function(t){return e.onChangeInputData(t,r[2],"birthday")}})),l.a.createElement(h.i,{top:"\u041c\u0435\u0441\u0442\u043e \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f"},l.a.createElement(h.k,{value:p&&p.birthplace,"data-obj":r[2],"data-key":"birthplace",onChange:this.onChangeInputData}))):l.a.createElement(l.a.Fragment,null,l.a.createElement(h.i,{top:"\u041d\u043e\u0432\u0430\u044f \u0444\u0430\u043c\u0438\u043b\u0438\u044f \u043c\u0443\u0436\u0430"},l.a.createElement(h.k,{value:p&&p.last_name_husband,"data-obj":r[2],"data-key":"last_name_husband",onChange:this.onChangeInputData})),l.a.createElement(h.i,{top:"\u041d\u043e\u0432\u0430\u044f \u0444\u0430\u043c\u0438\u043b\u0438\u044f \u0436\u0435\u043d\u044b"},l.a.createElement(h.k,{value:p&&p.last_name_wife,"data-obj":r[2],"data-key":"last_name_wife",onChange:this.onChangeInputData})),l.a.createElement(h.i,{top:"\u041c\u0435\u0441\u0442\u043e \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0431\u0440\u0430\u043a\u0430"},l.a.createElement(h.k,{value:p&&p.regplace,"data-obj":r[2],"data-key":"regplace",onChange:this.onChangeInputData})),l.a.createElement(h.i,{top:"\u0414\u0430\u0442\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0431\u0440\u0430\u043a\u0430"},l.a.createElement(h.h,{value:p&&p.regdate,onChange:function(t){return e.onChangeInputData(t,r[2],"regdate")}}))),l.a.createElement(h.i,null,l.a.createElement(h.e,{size:"l",stretched:!0,onClick:this.back},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))),l.a.createElement("img",{alt:"bg",className:"Background",src:a(94)})),l.a.createElement(h.o,{id:"subscribe"},l.a.createElement("div",{className:"EmojiTitle"},l.a.createElement("img",{alt:"img",src:"https://em-content.zobj.net/thumbs/160/apple/354/love-letter_1f48c.png"}),l.a.createElement("h1",null,"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442 \u043f\u043e\u0447\u0442\u0438 \u0433\u043e\u0442\u043e\u0432")),l.a.createElement("p",null,l.a.createElement("br",null),"\u0412\u0440\u0435\u043c\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430: ",l.a.createElement("span",{style:{color:"#FFFFFF"}},d.minutes,":",d.seconds),l.a.createElement("br",null)," ",l.a.createElement("br",null),"\u0427\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u043e\u0447\u0435\u0440\u0435\u0434\u044c \u0438 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0441\u0440\u0430\u0437\u0443, \u043f\u043e\u0434\u043f\u0438\u0448\u0438\u0442\u0435\u0441\u044c \u043d\u0430 \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0430"),l.a.createElement(h.l,null,[["groupsJoinUser",l.a.createElement(Pe.a,{fill:"#FFFFFF"}),"VKWebAppJoinGroup"],["groupsMessageUser",l.a.createElement(Ie.a,{fill:"#FFFFFF"}),"VKWebAppAllowMessagesFromGroup"]].map((function(t,a){return e.state[t[0]]&&e.state[t[0]].map((function(n,r){return l.a.createElement(h.q,{key:"Cell-".concat(a,"-").concat(r),before:l.a.createElement(h.d,{size:48,src:n.photo_50}),after:t[1],onClick:Object(y.a)(v.a.mark((function a(){var r,o;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,m.a.send(t[2],{group_id:n.id});case 3:r=e.state.subscribed||0,r++,o=e.state.time,r>=e.state.groupsJoinUser.length+e.state.groupsMessageUser.length&&(o=0,clearInterval(be)),e.setState({subscribed:r,time:o}),a.next=12;break;case 10:a.prev=10,a.t0=a.catch(0);case 12:case"end":return a.stop()}}),a,null,[[0,10]])}))),subtitle:"".concat(I(n.members_count)," ").concat(P(n.members_count,["\u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a","\u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0430","\u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u043e\u0432"],!1))},n.name)}))}))),l.a.createElement(h.e,{size:"l",disabled:o>0,onClick:function(){return e.go("result1")}},"\u0414\u0430\u043b\u0435\u0435")),l.a.createElement(h.o,{id:"result1"},l.a.createElement("div",{className:"EmojiTitle"},l.a.createElement("img",{alt:"img",src:"https://em-content.zobj.net/thumbs/160/apple/354/ring_1f48d.png"}),l.a.createElement("h1",null,"\u0421\u0432\u0438\u0434\u0435\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e")),l.a.createElement("img",{alt:"doc",src:c}),l.a.createElement("div",{className:"Buttons"},l.a.createElement(h.e,{size:"l",onClick:function(){m.a.send("VKWebAppShowStoryBox",{background_type:"image",blob:i,attachment:{url:"https://vk.com/app".concat(D().vk_app_id),text:"go_to",type:"url"}})}},"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0432 \u0438\u0441\u0442\u043e\u0440\u0438\u0438"),l.a.createElement(h.e,{size:"l",onClick:Object(y.a)(v.a.mark((function t(){var a,n,r,o;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setPopout(l.a.createElement(h.p,null)),a=e.state.app,n=a.album_name,r=a.album_caption,t.next=4,he(s,n,r);case 4:o=t.sent,e.setPopout(null),o>=0&&A("https://vk.com/album".concat(D().vk_user_id,"_").concat(o)),e.setSnackbar(-1===o?"\u0414\u043b\u044f \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c \u0434\u043e\u0441\u0442\u0443\u043f":o<0?"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0438 :(":"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442 \u0441\u043e\u0445\u0440\u0430\u043d\u0451\u043d \u0432 \u0430\u043b\u044c\u0431\u043e\u043c \u0412\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0435");case 8:case"end":return t.stop()}}),t)})))},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0441\u0432\u0438\u0434\u0435\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e"),l.a.createElement(h.e,{size:"l",mode:"tertiary",onClick:function(){e.setActivePanel("main1")}},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0434\u0440\u0443\u0433\u043e\u0435 \u0441\u0432\u0438\u0434\u0435\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e")),u))}},{key:"steps",get:function(){return[["https://em-content.zobj.net/thumbs/160/apple/354/woman-with-veil-light-skin-tone_1f470-1f3fb-200d-2640-fe0f.png","\u0414\u0430\u043d\u043d\u044b\u0435 \u0436\u0435\u043d\u044b","data_wife"],["https://em-content.zobj.net/thumbs/160/apple/354/person-in-tuxedo_light-skin-tone_1f935-1f3fb_1f3fb.png","\u0414\u0430\u043d\u043d\u044b\u0435 \u043c\u0443\u0436\u0430","data_husband"],["https://em-content.zobj.net/thumbs/160/apple/354/red-heart_2764-fe0f.png","\u041e\u0431\u0449\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0435","data_general"]]}}]),t}(l.a.Component),Fe=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(c.a)(t).call(this,e))).state={},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;m.a.subscribe((function(t){var a=t.detail,n=a.type,r=a.data;"VKWebAppUpdateConfig"===n&&e.setState({appearance:r.appearance})}))}},{key:"render",value:function(){return l.a.createElement(h.f,{webviewType:h.u.INTERNAL,appearance:this.state.appearance},l.a.createElement(h.a,null,l.a.createElement(h.c,null,l.a.createElement(Te,null))))}}]),t}(l.a.Component);p.a.render(l.a.createElement(Fe,null),document.getElementById("root"))},94:function(e,t,a){e.exports=a.p+"static/media/bg.7763e98a.png"}},[[223,1,2]]]);
//# sourceMappingURL=main.fdcbe9c6.chunk.js.map