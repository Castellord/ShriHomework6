!function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";n(19),n(3)},function(e,t,n){e.exports=n.p+"6f93b7e063adfbb0ccba4169ddae1411.svg"},function(e,t,n){e.exports=n.p+"8e3d910eadfc243c4a8e67ab39d86d41.svg"},function(e,t,n){"use strict";document.addEventListener("DOMContentLoaded",function(){function e(e){e>m?e=m:x>e&&(e=x),h=e,g=y(e),document.querySelector(".modal_knob .modal__value").innerHTML="+"+g,document.querySelector(".knob__value").innerHTML="+"+g,document.querySelector(".knob__indicator").style.strokeDasharray=360*h*1.73+v+" 629",document.querySelector(".knob__arrow").style.transform="rotate("+360*h+"deg)"}function t(e){var t=e.getBoundingClientRect();return[t.left+(t.right-t.left)/2,t.top+(t.bottom-t.top)/2]}function n(e,n){var o=t(n),i=[e.clientX,e.clientY],r=void 0;return e.targetTouches&&e.targetTouches[0]&&(i=[e.targetTouches[0].clientX,e.targetTouches[0].clientY]),r=Math.atan2(i[1]-o[1],i[0]-o[0]),r+=Math.PI/2}function o(e){e.preventDefault(),e.stopPropagation();var t=n(e,document.querySelector(".knob_center"));w=!0,k=t,S=h}function i(e){w=!1}function r(t){if(w){var o=k,i=n(t,document.querySelector(".knob_center")),r=i-o;k=i,0>r&&(r+=2*Math.PI),r>Math.PI&&(r-=2*Math.PI);var a=r/Math.PI/2,l=S+a;S=l,e(l)}}function a(){var e=document.querySelector(".knob-container");e.addEventListener("mousedown",o),document.addEventListener("mouseup",i),document.addEventListener("mousemove",r),e.addEventListener("touchstart",o),document.addEventListener("touchend",i),document.addEventListener("touchmove",r)}var l=document.querySelector(".modal__value"),c=document.querySelector(".adjust-bar.adjust-bar_theme_temp");c.oninput=function(){l.innerHTML=this.value>0?"+"+this.value:this.value};var d=document.querySelector(".devices__paginator .paginator__arrow_left"),s=document.querySelector(".devices__paginator .paginator__arrow_right"),p=document.querySelectorAll(".devices__panel").length,f=document.querySelector(".devices"),u=document.querySelector(".devices__paginator"),_=1;u.classList.toggle("paginator_hide",7>p),s.addEventListener("click",function(){_+=1,d.classList.toggle("paginator__arrow_disabled",1===_),f.scroll({top:0,left:1366,behavior:"smooth"})}),d.addEventListener("click",function(){_>1&&(_-=1,d.classList.toggle("paginator__arrow_disabled",1===_),f.scroll({top:0,left:-1366,behavior:"smooth"}))});var g=void 0,h=void 0,m=.42,x=-.42,b=26,v=265,y=function(e){return Math.floor(Math.abs(360*e*1.73+v)/53+b)},w=void 0,k=null,S=null;a(),e(0),document.querySelectorAll(".modal_close").forEach(function(e){e.onclick=function(){document.querySelectorAll(".modal").forEach(function(e){e.classList.toggle("modal_open",!1),document.querySelector("body").style.overflow="auto"})}});var q={manual:-10,cold:0,warm:23,hot:30};document.querySelectorAll(".modal__filter-item_temp").forEach(function(e){e.onclick=function(){document.querySelector(".adjust-bar_theme_temp").value=q[this.id],document.querySelector(".modal_temp .modal__value").innerHTML=q[this.id]>0?"+"+q[this.id]:q[this.id]}});var j=function(e){document.querySelector(e).classList.toggle("modal_open",!0),document.querySelector("body").style.overflow="hidden"};document.querySelectorAll(".panel_temp").forEach(function(e){e.onclick=function(){j(".modal_temp")}}),document.querySelectorAll(".panel_lamp").forEach(function(e){e.onclick=function(){j(".modal_light")}}),document.querySelectorAll(".panel_floor").forEach(function(e){e.onclick=function(){j(".modal_knob")}});var L=document.querySelector(".scenarios__paginator .paginator__arrow_left"),z=document.querySelector(".scenarios__paginator .paginator__arrow_right"),E=document.querySelectorAll(".scenarios__panel").length,T=document.querySelectorAll(".scenarios__page").length,M=document.querySelector(".scenarios"),A=document.querySelector(".scenarios__paginator"),P=1;A.classList.toggle("paginator_hide",9>=E),z.addEventListener("click",function(){T>P&&(P+=1,z.classList.toggle("paginator__arrow_disabled",P===T),L.classList.toggle("paginator__arrow_disabled",1===P),M.scroll({top:0,left:645,behavior:"smooth"}))}),L.addEventListener("click",function(){P>1&&(P-=1,z.classList.toggle("paginator__arrow_disabled",P===T),L.classList.toggle("paginator__arrow_disabled",1===P),M.scroll({top:0,left:-645,behavior:"smooth"}))});var C=document.querySelector(".filter__select-button"),N=document.querySelector(".filter__select-button .button__text"),H=document.querySelectorAll(".filter__select-item"),I=document.querySelector(".filter__select-popup");C.addEventListener("click",function(){I.classList.toggle("filter__select-popup_open")}),H.forEach(function(e){e.addEventListener("click",function(e){document.querySelector("#"+e.target.dataset.group).checked=!0,H.forEach(function(e){return e.classList.toggle("filter__select-item_checked",!1)}),e.target.classList.toggle("filter__select-item_checked",!0),I.classList.toggle("filter__select-popup_open",!1),N.innerText=e.target.innerText})}),document.querySelector(".menu__icon").addEventListener("click",function(){document.querySelector(".menu").classList.toggle("menu_open")})})},function(e,t,n){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e}},function(e,t,n){t=e.exports=n(4)(),t.push([e.id,"@font-face{font-family:'PT Sans';font-style:normal;font-weight:700;src:local('PT Sans Bold')url("+n(15)+");src:local('PT Sans Bold'),url("+n(17)+") format('woff2')}@font-face{font-family:'PT Sans Narrow';font-weight:700;src:url("+n(14)+");src:local('PT Sans Narrow Bold'),url("+n(16)+") format('woff2')}.adjust-bar{position:relative;display:flex;align-items:center;justify-content:space-between;width:100%;height:60px;margin:0;border-radius:30px;outline:none;-webkit-appearance:none;appearance:none}.adjust-bar::-webkit-slider-thumb{width:60px;height:60px;cursor:pointer;border:3px solid rgba(51,51,51,.1);border-radius:30px;box-shadow:0 0 0 4px #fff;-webkit-appearance:none;appearance:none}.adjust-bar::-moz-range-thumb{box-sizing:border-box;width:60px;height:60px;cursor:pointer;border:3px solid rgba(51,51,51,.1);border-radius:30px;background:0 0;box-shadow:0 0 0 4px #fff}.adjust-bar::-moz-range-track{background:0 0}.adjust-bar__container_theme_temp{position:relative}.adjust-bar__container_theme_temp::before,.adjust-bar__container_theme_temp::after{position:absolute;z-index:1;top:20px;pointer-events:none;color:#fff;font-size:18px;font-weight:700}.adjust-bar__container_theme_temp::before{left:15px;content:'–10'}.adjust-bar__container_theme_temp::after{right:15px;content:'+30'}.adjust-bar__container_theme_light{position:relative}.adjust-bar__container_theme_light::before,.adjust-bar__container_theme_light::after{position:absolute;z-index:1;content:'';pointer-events:none}.adjust-bar__container_theme_light::before{top:14px;left:14px;width:30px;height:30px;background:url("+n(6)+") center center/contain no-repeat}.adjust-bar__container_theme_light::after{top:13px;right:13px;width:34px;height:34px;background:url("+n(7)+") center center/contain no-repeat}.adjust-bar_theme_temp{background-image:linear-gradient(90deg,#068fff 0%,#ffd800 50%,#f76b1c 100%)}.adjust-bar_theme_light{background-image:linear-gradient(90deg,#ffe682 0%,#ff9e00 100%)}.button{display:flex;align-items:center;justify-content:center;cursor:pointer;background:#fff}.button_color_yellow{background:#ffd93e}.button_size_l{height:60px;border-radius:20px;font-size:18px;font-weight:700}.button:hover{box-shadow:0 2px 6px 0 rgba(255,225,225,.6)}.button:active{box-shadow:none}.content{display:flex;flex-wrap:wrap;justify-content:space-between;width:100%;padding-top:29px}.content__item{position:relative;width:100%;margin-bottom:29px}.content__item_half{width:49%}.content__item_main{padding-left:40px}.content__item_scenarios{padding-right:40px}.content__item-header{margin-bottom:20px;font-size:18px;font-weight:700}.content__item-header_devices{display:inline-block;margin-right:11px;padding-left:40px}#root{position:absolute;left:-10000px}.devices{display:flex;overflow-x:hidden;justify-content:flex-start;padding:20px 0 6px 40px}.devices__panel{margin-right:15px}.devices::after{display:inline-block;min-width:25px;content:''}.devices__paginator{position:absolute;top:0;right:40px}.filter__select{display:none}.filter__item-label{display:inline-block;min-height:30px;margin-right:11px;padding:8px 13px;cursor:pointer;border-radius:15px;background:#f7f7f7;font-size:13px;font-weight:700;line-height:1}.filter__item-label:hover{background:#ffd93e}.filter__item-radio{display:none}.filter__item-radio:checked+label{background:#ffd93e}.filter__item-radio_kitchen:checked~.devices .panel{display:none}.filter__item-radio_kitchen:checked~.devices .panel_kitchen{display:flex}.filter__item-radio_room:checked~.devices .panel{display:none}.filter__item-radio_room:checked~.devices .panel_room{display:flex}.filter__item-radio_lamp:checked~.devices .panel{display:none}.filter__item-radio_lamp:checked~.devices .panel_lamp{display:flex}.filter__item-radio_cam:checked~.devices .panel{display:none}.filter__item-radio_cam:checked~.devices .panel_cam{display:flex}.footer{display:flex;align-items:center;flex:0 0 auto;flex-wrap:wrap;justify-content:flex-start;width:100%;height:60px;padding-left:40px;font-size:12px}.footer__link{margin-right:20px}.header{width:100%;height:92px;padding:0 40px;border-bottom:1px solid #f0f0f0;background:#fff}.header,.knob{display:flex;align-items:center}.knob{position:relative;justify-content:center}.knob,.knob svg{width:220px;height:220px}.knob svg{transform:rotate(90deg)}.knob__indicator{transform:rotate(29deg);fill:none;stroke:#f5a623;stroke-width:20px;stroke-dasharray:0 629}.knob__indicator-bounds{transform:rotate(-29deg);fill:transparent;stroke:#fff;stroke-width:21px;stroke-dasharray:99 629}.knob__indicator-bg{fill:rgba(51,51,51,.7)}.knob__indicator-mask{transform:rotate(1deg);fill:transparent;stroke:#fff;stroke-width:22px;stroke-dasharray:4 1}.knob__self{cursor:pointer;fill:#fefefe;filter:url(\"#knob-shadow\")}.knob__value{position:absolute;user-select:none;pointer-events:none;font-size:66px;font-weight:700}.knob__wrapper{display:flex;align-items:center;justify-content:center;height:80%}.link,.link:active,.link:visited{color:rgba(51,51,51,.6)}.link{text-decoration:none}.link_active,.link:hover{color:inherit}.logo{position:relative;display:inline-block;width:108px;height:27px;background-image:url("+n(9)+");background-repeat:no-repeat;background-position:left top;background-size:cover}.logo__ya{z-index:10;width:69px}.logo__ya,.logo__ya-sub{position:absolute;top:0;left:0;display:block;height:100%;outline:0}.logo__ya-sub{z-index:5;width:100%}.main{display:flex;justify-content:space-between;height:331px;padding:0 20px 0 25px;border-radius:20px;background:url("+n(13)+') center center/cover no-repeat}.main__greeting{margin-top:6px;font-size:27px;font-weight:700;font-family:"PT Sans","Helvetica Neue",Helvetica,Arial,sans-serif}.main__info{width:61.585%;padding-top:20px;padding-left:20px;background:rgba(255,255,255,.6)}.main__panel{position:relative;margin-bottom:14px}.main__status{margin-top:6px;line-height:16px}.main__upcoming{overflow-y:scroll;width:220px;height:100%}.main__upcoming-wrapper{overflow:hidden;width:200px;height:100%}.main__weather{margin-top:25px}.menu{margin-left:52px}.menu__icon{display:none}.menu__item{margin-right:27px;font-size:16px;font-weight:700}.menu__list{display:flex;justify-content:flex-start;margin:0;padding:0;list-style:none}.modal{position:fixed;z-index:1;top:0;left:0;display:none;overflow:auto;align-items:center;flex-direction:column;justify-content:center;width:100%;height:100%;background:rgba(51,51,51,.5)}.modal_open{display:flex}.modal_open .modal__content{animation:modal .2s ease forwards}.modal__title{margin-bottom:6px;font-size:27px;font-weight:700}.modal__value{position:absolute;top:20px;right:20px;box-sizing:content-box;max-width:62px;height:40px;padding-right:32px;font-size:36px;font-weight:700}.modal__value_temp{background:url('+n(2)+") calc(100% + 10px)0%/contain no-repeat}.modal__value_light{height:45px;padding-right:45px;background:url("+n(1)+') right center/contain no-repeat}.modal__status{margin-bottom:20px}.modal__adjust{margin-top:25px}.modal__button{width:48.5%}.modal__content{width:100%;max-width:640px}.modal__body{position:relative;flex-shrink:0;margin-bottom:15px;padding:25px;border-radius:20px;background:#fff}.modal__controls{display:flex;flex-wrap:wrap;justify-content:space-between;width:100%}*{box-sizing:border-box}html,.page{height:100%}.page{width:1366px;margin:0 auto;padding:0;color:#333;font:14px Arial,sans-serif;line-height:1.143}.page__wrapper{display:flex;flex-direction:column;height:100%}.page__wrapper-content{flex:1 0 auto}.paginator{display:flex;justify-content:space-between;width:47px;height:16px}.paginator div{width:16px}.paginator_hide{display:none}.paginator__arrow{cursor:pointer;opacity:1}.paginator__arrow:hover{opacity:.5}.paginator__arrow:active{opacity:.3}.paginator__arrow_disabled{opacity:.3}.panel{display:flex;flex-direction:column;flex-shrink:0;justify-content:space-between;width:200px;min-height:100px;padding:14px;cursor:pointer;transition:opacity .3s ease-out;border-radius:20px;background:#f7f7f7}.panel:hover{background:#fff;box-shadow:0 2px 6px 0 rgba(197,186,186,.5)}.panel:active{box-shadow:none}.panel_device{height:120px}.panel_first{margin-top:20px}.panel_last{margin-bottom:20px}.panel__sub{color:#858585;font-size:12px}.panel__title{margin-bottom:4px;font-weight:700}.scenarios{display:flex;overflow-x:hidden;justify-content:flex-start;max-height:331px;background:#fff}.scenarios__page{display:grid;justify-content:space-between;margin-right:15px;grid-template-columns:repeat(3,200px);grid-template-rows:repeat(3,100px);grid-column-gap:15px;grid-row-gap:15px}.scenarios__paginator{position:absolute;top:0;right:40px}.scenarios_hide{display:none}.weather{display:flex}.weather__item{margin-right:18px}.weather__item-title{margin-bottom:4px;color:#858585}.weather__item-temp{font-family:"PT Sans Narrow","Helvetica Neue",Helvetica,Arial,sans-serif;font-size:36px;font-weight:700;line-height:1.16}.weather__item_outside{padding-right:31px}.weather__item_cloud-drizzle{background:url('+n(8)+") 100% 70%/26px no-repeat}.panel__icon{width:24px;height:24px}.panel__icon_temp_off{background:url("+n(12)+") center center/contain no-repeat}.panel__icon_temp_on{background:url("+n(2)+") center center/contain no-repeat}.panel__icon_light_off{background:url("+n(1)+") center center/contain no-repeat}.panel__icon_light_on{background:url("+n(11)+") center center/contain no-repeat}.panel__icon_clock{background:url("+n(10)+") center center/contain no-repeat}",""])},function(e,t,n){e.exports=n.p+"7f940b66e477501e620f756a36656b5c.svg"},function(e,t,n){e.exports=n.p+"fe52ec2a60f45b86956fb1262ff030ed.svg"},function(e,t,n){e.exports=n.p+"f75e0c68ad8c29ac6059583998a9b1a6.png"},function(e,t,n){e.exports=n.p+"d8a7f539e95ea4762bedc5392bb020a5.png"},function(e,t,n){e.exports=n.p+"d1c1988306f70588d01f93643bece77c.svg"},function(e,t,n){e.exports=n.p+"3dbf823c705d3068fa9c3aaeceda9ace.svg"},function(e,t,n){e.exports=n.p+"907199cec081fafbec723eac7326e4f8.svg"},function(e,t,n){e.exports=n.p+"fdd1b30654a9650ed242cb88ddd95952.webp"},function(e,t,n){e.exports=n.p+"e4606b0cfef41b7f1a83ae284cc0f7dc.eot"},function(e,t,n){e.exports=n.p+"1d1c48810af52fe5992df311be0b347e.eot"},function(e,t,n){e.exports=n.p+"a07d9e7e0f649a5e0ad8c66b9522c8a2.woff2"},function(e,t,n){e.exports=n.p+"de09a37f47974321409935574788445c.woff2"},function(e,t,n){function o(e,t){for(var n=0;n<e.length;n++){var o=e[n],i=s[o.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](o.parts[r]);for(;r<o.parts.length;r++)i.parts.push(a(o.parts[r],t))}else{for(var l=[],r=0;r<o.parts.length;r++)l.push(a(o.parts[r],t));s[o.id]={id:o.id,refs:1,parts:l}}}}function i(e){for(var t=[],n={},o=0;o<e.length;o++){var i=e[o],r=i[0],a=i[1],l=i[2],c=i[3],d={css:a,media:l,sourceMap:c};n[r]?n[r].parts.push(d):t.push(n[r]={id:r,parts:[d]})}return t}function r(){var e=document.createElement("style"),t=u();return e.type="text/css",t.appendChild(e),e}function a(e,t){var n,o,i;if(t.singleton){var a=g++;n=_||(_=r()),o=c.bind(null,n,a,!1),i=c.bind(null,n,a,!0)}else n=r(),o=d.bind(null,n),i=function(){n.parentNode.removeChild(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else i()}}function l(e,t,n){var o=["/** >>"+t+" **/","/** "+t+"<< **/"],i=e.lastIndexOf(o[0]),r=n?o[0]+n+o[1]:"";if(e.lastIndexOf(o[0])>=0){var a=e.lastIndexOf(o[1])+o[1].length;return e.slice(0,i)+r+e.slice(a)}return e+r}function c(e,t,n,o){var i=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=l(e.styleSheet.cssText,t,i);else{var r=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function d(e,t){var n=t.css,o=t.media,i=t.sourceMap;if(i&&"function"==typeof btoa)try{n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(JSON.stringify(i))+" */",n='@import url("data:stylesheet/css;base64,'+btoa(n)+'")'}catch(r){}if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var s={},p=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},f=p(function(){return/msie 9\b/.test(window.navigator.userAgent.toLowerCase())}),u=p(function(){return document.head||document.getElementsByTagName("head")[0]}),_=null,g=0;e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=f());var n=i(e);return o(n,t),function(e){for(var r=[],a=0;a<n.length;a++){var l=n[a],c=s[l.id];c.refs--,r.push(c)}if(e){var d=i(e);o(d,t)}for(var a=0;a<r.length;a++){var c=r[a];if(0===c.refs){for(var p=0;p<c.parts.length;p++)c.parts[p]();delete s[c.id]}}}}},function(e,t,n){var o=n(5);"string"==typeof o&&(o=[[e.id,o,""]]),n(18)(o,{})}]);