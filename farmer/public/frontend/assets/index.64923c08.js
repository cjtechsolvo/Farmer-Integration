import{c as d,a as f,_ as p,b as m,d as _,r as h,o as g,e as y,s as v,f as L,B as $,g as b}from"./vendor.08dfb69b.js";const w=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};w();const E="modulepreload",a={},P="/assets/farmer/frontend/",C=function(n,s){return!s||s.length===0?n():Promise.all(s.map(o=>{if(o=`${P}${o}`,o in a)return;a[o]=!0;const e=o.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${t}`))return;const r=document.createElement("link");if(r.rel=e?"stylesheet":E,e||(r.as="script",r.crossOrigin=""),r.href=o,document.head.appendChild(r),e)return new Promise((l,u)=>{r.addEventListener("load",l),r.addEventListener("error",u)})})).then(()=>n())},O=[{path:"/",name:"Register",component:()=>C(()=>import("./userSelection.da5c7e43.js"),["assets/userSelection.da5c7e43.js","assets/userSelection.374ee91e.css","assets/vendor.08dfb69b.js","assets/vendor.1f7d581e.css"])}];let S=d({history:f("/"),routes:O});window.onload=function(){var i=document.querySelector(".for-signup .login-content");i&&i.classList.add("full-width-login");var n=document.querySelector(".for-signup .page-card-head");n&&n.classList.add("hide-page-card-head")};const k={};function q(i,n,s,o,e,t){const r=h("router-view");return g(),m("div",null,[_(r)])}var A=p(k,[["render",q]]);let c=y(A);v("resourceFetcher",b);c.use(S);c.use(L);c.component("Button",$);c.mount("#app");
