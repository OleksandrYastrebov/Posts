(self["webpackChunkvue_trainee"]=self["webpackChunkvue_trainee"]||[]).push([[909],{2446:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var o=n(9269),i=n(6237),l=n(1013),r=n(3856),a=n(7336),s=n(3027);const{passive:c}=s.rU,u=["both","horizontal","vertical"];var d=(0,r.L)({name:"QScrollObserver",props:{axis:{type:String,validator:e=>u.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:t}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let i,l,r=null;function u(){null!==r&&r();const o=Math.max(0,(0,a.u3)(i)),l=(0,a.OI)(i),s={top:o-n.position.top,left:l-n.position.left};if("vertical"===e.axis&&0===s.top||"horizontal"===e.axis&&0===s.left)return;const c=Math.abs(s.top)>=Math.abs(s.left)?s.top<0?"up":"down":s.left<0?"left":"right";n.position={top:o,left:l},n.directionChanged=n.direction!==c,n.delta=s,!0===n.directionChanged&&(n.direction=c,n.inflectionPoint=n.position),t("scroll",{...n})}function d(){i=(0,a.b0)(l,e.scrollTarget),i.addEventListener("scroll",v,c),v(!0)}function f(){void 0!==i&&(i.removeEventListener("scroll",v,c),i=void 0)}function v(t){if(!0===t||0===e.debounce||"0"===e.debounce)u();else if(null===r){const[t,n]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];r=()=>{n(t),r=null}}}(0,o.YP)((()=>e.scrollTarget),(()=>{f(),d()}));const p=(0,o.FN)();return(0,o.bv)((()=>{l=p.proxy.$el.parentNode,d()})),(0,o.Jd)((()=>{null!==r&&r(),f()})),Object.assign(p.proxy,{trigger:v,getPosition:()=>n}),s.ZT}}),f=n(5722),v=n(64),p=n(4300),h=(0,r.L)({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:t,emit:n}){const{proxy:{$q:r}}=(0,o.FN)(),s=(0,i.iH)(null),c=(0,i.iH)(r.screen.height),u=(0,i.iH)(!0===e.container?0:r.screen.width),h=(0,i.iH)({position:0,direction:"down",inflectionPoint:0}),g=(0,i.iH)(0),m=(0,i.iH)(!0===l.uX.value?0:(0,a.np)()),b=(0,o.Fl)((()=>"q-layout q-layout--"+(!0===e.container?"containerized":"standard"))),y=(0,o.Fl)((()=>!1===e.container?{minHeight:r.screen.height+"px"}:null)),w=(0,o.Fl)((()=>0!==m.value?{[!0===r.lang.rtl?"left":"right"]:`${m.value}px`}:null)),x=(0,o.Fl)((()=>0!==m.value?{[!0===r.lang.rtl?"right":"left"]:0,[!0===r.lang.rtl?"left":"right"]:`-${m.value}px`,width:`calc(100% + ${m.value}px)`}:null));function z(t){if(!0===e.container||!0!==document.qScrollPrevented){const o={position:t.position.top,direction:t.direction,directionChanged:t.directionChanged,inflectionPoint:t.inflectionPoint.top,delta:t.delta.top};h.value=o,void 0!==e.onScroll&&n("scroll",o)}}function L(t){const{height:o,width:i}=t;let l=!1;c.value!==o&&(l=!0,c.value=o,void 0!==e.onScrollHeight&&n("scroll-height",o),T()),u.value!==i&&(l=!0,u.value=i),!0===l&&void 0!==e.onResize&&n("resize",t)}function F({height:e}){g.value!==e&&(g.value=e,T())}function T(){if(!0===e.container){const e=c.value>g.value?(0,a.np)():0;m.value!==e&&(m.value=e)}}let q;const H={instances:{},view:(0,o.Fl)((()=>e.view)),isContainer:(0,o.Fl)((()=>e.container)),rootRef:s,height:c,containerHeight:g,scrollbarWidth:m,totalWidth:(0,o.Fl)((()=>u.value+m.value)),rows:(0,o.Fl)((()=>{const t=e.view.toLowerCase().split(" ");return{top:t[0].split(""),middle:t[1].split(""),bottom:t[2].split("")}})),header:(0,i.qj)({size:0,offset:0,space:!1}),right:(0,i.qj)({size:300,offset:0,space:!1}),footer:(0,i.qj)({size:0,offset:0,space:!1}),left:(0,i.qj)({size:300,offset:0,space:!1}),scroll:h,animate(){void 0!==q?clearTimeout(q):document.body.classList.add("q-body--layout-animate"),q=setTimeout((()=>{document.body.classList.remove("q-body--layout-animate"),q=void 0}),155)},update(e,t,n){H[e][t]=n}};if((0,o.JJ)(p.YE,H),(0,a.np)()>0){let $=null;const C=document.body;function P(){$=null,C.classList.remove("hide-scrollbar")}function R(){if(null===$){if(C.scrollHeight>r.screen.height)return;C.classList.add("hide-scrollbar")}else clearTimeout($);$=setTimeout(P,300)}function S(e){null!==$&&"remove"===e&&(clearTimeout($),P()),window[`${e}EventListener`]("resize",R)}(0,o.YP)((()=>!0!==e.container?"add":"remove"),S),!0!==e.container&&S("add"),(0,o.Ah)((()=>{S("remove")}))}return()=>{const n=(0,v.vs)(t.default,[(0,o.h)(d,{onScroll:z}),(0,o.h)(f.Z,{onResize:L})]),i=(0,o.h)("div",{class:b.value,style:y.value,ref:!0===e.container?void 0:s},n);return!0===e.container?(0,o.h)("div",{class:"q-layout-container overflow-hidden",ref:s},[(0,o.h)(f.Z,{onResize:F}),(0,o.h)("div",{class:"absolute-full",style:w.value},[(0,o.h)("div",{class:"scroll",style:x.value},[i])])]):i}}})},6974:function(e,t,n){"use strict";var o=n(9269),i=n(3856),l=n(64),r=n(4300);t["Z"]=(0,i.L)({name:"QPageContainer",setup(e,{slots:t}){const{proxy:{$q:n}}=(0,o.FN)(),i=(0,o.f3)(r.YE,(()=>{console.error("QPageContainer needs to be child of QLayout")}));(0,o.JJ)(r.Mw,!0);const a=(0,o.Fl)((()=>{const e={};return!0===i.header.space&&(e.paddingTop=`${i.header.size}px`),!0===i.right.space&&(e["padding"+(!0===n.lang.rtl?"Left":"Right")]=`${i.right.size}px`),!0===i.footer.space&&(e.paddingBottom=`${i.footer.size}px`),!0===i.left.space&&(e["padding"+(!0===n.lang.rtl?"Right":"Left")]=`${i.left.size}px`),e}));return()=>(0,o.h)("div",{class:"q-page-container",style:a.value},(0,l.KR)(t.default))}})},5722:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var o=n(9269),i=n(6237),l=n(1013);function r(){const e=(0,i.iH)(!l.uX.value);return!1===e.value&&(0,o.bv)((()=>{e.value=!0})),e}var a=n(3856),s=n(3027);const c="undefined"!==typeof ResizeObserver,u=!0===c?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var d=(0,a.L)({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:t}){let n,i=null,l={width:-1,height:-1};function a(t){!0===t||0===e.debounce||"0"===e.debounce?d():null===i&&(i=setTimeout(d,e.debounce))}function d(){if(clearTimeout(i),i=null,n){const{offsetWidth:e,offsetHeight:o}=n;e===l.width&&o===l.height||(l={width:e,height:o},t("resize",l))}}const f=(0,o.FN)();if(Object.assign(f.proxy,{trigger:a}),!0===c){let v;return(0,o.bv)((()=>{(0,o.Y3)((()=>{n=f.proxy.$el.parentNode,n&&(v=new ResizeObserver(a),v.observe(n),d())}))})),(0,o.Jd)((()=>{clearTimeout(i),void 0!==v&&(void 0!==v.disconnect?v.disconnect():n&&v.unobserve(n))})),s.ZT}{const p=r();let h;function g(){clearTimeout(i),void 0!==h&&(void 0!==h.removeEventListener&&h.removeEventListener("resize",a,s.rU.passive),h=void 0)}function m(){g(),n&&n.contentDocument&&(h=n.contentDocument.defaultView,h.addEventListener("resize",a,s.rU.passive),d())}return(0,o.bv)((()=>{(0,o.Y3)((()=>{n=f.proxy.$el,n&&m()}))})),(0,o.Jd)(g),()=>{if(!0===p.value)return(0,o.h)("object",{style:u.style,tabindex:-1,type:"text/html",data:u.url,"aria-hidden":"true",onLoad:m})}}}})},1410:function(e){e.exports=function(e,t,n){const o=void 0!==e.__vccOpts?e.__vccOpts:e,i=o[t];if(void 0===i)o[t]=n;else for(var l in n)void 0===i[l]&&(i[l]=n[l])}},7909:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var o=n(9269);function i(e,t,n,i,l,r){const a=(0,o.up)("router-view"),s=(0,o.up)("q-page-container"),c=(0,o.up)("q-layout");return(0,o.wg)(),(0,o.j4)(c,{class:"flex flex-center container",view:"hHh lpR fFf"},{default:(0,o.w5)((()=>[(0,o.Wm)(s,null,{default:(0,o.w5)((()=>[(0,o.Wm)(a)])),_:1})])),_:1})}var l={name:"AuthLayout"},r=n(7617),a=n(2446),s=n(6974),c=n(1410),u=n.n(c);const d=(0,r.Z)(l,[["render",i]]);var f=d;u()(l,"components",{QLayout:a.Z,QPageContainer:s.Z})}}]);
//# sourceMappingURL=909.4842b269.js.map