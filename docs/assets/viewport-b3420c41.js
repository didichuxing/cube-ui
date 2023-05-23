import{_ as y,r as _,o as i,a as c,F as b,b as A,n as w,d as h,t as f,e as v,c as L,w as R,f as x,g as N,m as S,D as V,B as $,h as B,i as m,v as C}from"./index-9017f177.js";const D="side-nav",E={name:D,props:{data:{type:Object,default(){return{}}}},methods:{derail(s){let e=s.isRootActive;s.isRootActive=!e}}},O={class:"nav-ul"},T=["onClick"],I={key:2,class:"angle"};function j(s,e,a,l,t,o){const r=_("side-nav",!0),u=_("router-link");return i(),c("ul",O,[(i(!0),c(b,null,A(a.data,(n,p)=>(i(),c("li",{class:w(["nav-li",{"nav-li_open":n.isRootActive,"nav-li_active":n.hasActived}]),key:p},[n.name?(i(),c(b,{key:0},[h("p",{class:"nav-name",onClick:k=>o.derail(n)},f(n.name),9,T),v(r,{data:n.subList},null,8,["data"])],64)):(i(),L(u,{key:1,"active-class":"nav-active",to:{path:p}},{default:R(()=>[x(f(n),1)]),_:2},1032,["to"])),n.angle?(i(),c("span",I,f(n.angle),1)):N("",!0),n.angle?(i(),c("div",{key:3,class:w(["arrow",{rotate:n.isRootActive}])},null,2)):N("",!0)],2))),128))])}const q=y(E,[["render",j]]);let d={};const z={props:{navList:{type:Object,default(){return{}}}},components:{SideNav:q},mounted(){let s="",e="";const a=this.navList;this.$watch("$route.path",l=>{s=l.split("/").pop(),d&&(d.hasActived=!1,e||(d.isRootActive=!1,window.innerWidth>960&&setTimeout(()=>{const t=document.querySelector(".page-sidelist .nav-active");t&&t.scrollIntoViewIfNeeded()},0))),e=this.seekRoot(a,s),d=e&&a[e],d&&(d.isRootActive=!0,d.hasActived=!0)},{immediate:!0})},methods:{seekRoot(s,e,a){const l=Object.keys(s);for(let t=0;t<l.length;t++){let o=l[t];if(o===e)return a;if(s[o].subList){let r=s[o].subList;const u=this.seekRoot(r,e,a||o);if(u)return u}}}}},F={class:"page-sidelist"};function M(s,e,a,l,t,o){const r=_("side-nav");return i(),c("nav",F,[v(r,{data:a.navList},null,8,["data"])])}const P=y(z,[["render",M]]),U="/assets/close-07238fd9.svg",W="/assets/menu-1ebe6d60.svg";const G={props:{lang:{type:String,default:"zh-CN"}},data(){return{navList:S[this.lang],showCatalog:!1}},watch:{$route(){this.showCatalog=!1,window.scrollTo(0,0)},showCatalog(s){document.documentElement.className=s?"ov-hidden":""}},methods:{toggleCatalog(){this.showCatalog=!this.showCatalog}},mounted(){const s=document.querySelector(".md-body"),e=/#cube-(.*)-anchor/,a=window.location.hash.match(e);if(a){const l=decodeURIComponent(a[1]),t=s.querySelector(`#${l}`);t&&t.scrollIntoView()}window.scrollTo(0,0)},components:{SideList:P,Display:V,Back:$}},H={class:"docs-view"};function J(s,e,a,l,t,o){const r=_("back"),u=_("side-list"),n=_("router-view"),p=_("display"),k=B("highlight");return i(),c("div",H,[m(h("img",{class:"menu",onClick:e[0]||(e[0]=(...g)=>o.toggleCatalog&&o.toggleCatalog(...g)),src:U},null,512),[[C,t.showCatalog]]),m(h("img",{class:"menu",onClick:e[1]||(e[1]=(...g)=>o.toggleCatalog&&o.toggleCatalog(...g)),src:W},null,512),[[C,!t.showCatalog]]),v(r),m(h("div",{class:w(["mask",{active:t.showCatalog}]),onClick:e[2]||(e[2]=(...g)=>o.toggleCatalog&&o.toggleCatalog(...g))},null,2),[[C,t.showCatalog]]),h("div",{class:w(["nav-list-wrapper",{active:t.showCatalog}])},[v(u,{"nav-list":t.navList},null,8,["nav-list"])],2),m(v(n,{class:"page-doc md-body"},null,512),[[k]]),v(p)])}const Q=y(G,[["render",J]]);export{Q as V};
