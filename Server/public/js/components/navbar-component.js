import{g as e,S as o,i as t,a as n,b as i,s as a,e as r,n as s,d as l,c,o as m,f as d,h as p,t as h,j as g,k as u,m as f,r as b,p as v,q as k,u as w,x as y}from"./index-3cab5f92.js";import{w as x}from"./index-eafa799e.js";import{loadLocaleContent as j,locales as z}from"../../../../../../js/libraries/serverTools.js";const{customElements:O}=e;function T(e,o,t){const n=e.slice();return n[14]=o[t][0],n[15]=o[t][1],n}function H(e){let o,t,n,a,r,s,c,m,y,x,j,O,H,M,N,S,E,R,U,q,I,X,A,B,C,D,F,G,J,K,P,Q,V,W,Y,Z,$,_,ee,oe,te,ne,ie,ae,re=e[3].orgName+"",se=e[3].manifesto+"",le=e[3].joinUs+"",ce=e[3].groups+"",me=e[3].communities+"",de=e[3].cooperatives+"",pe=e[3].partners+"",he=Object.entries(z),ge=[];for(let o=0;o<he.length;o+=1)ge[o]=L(T(e,he,o));return{c(){o=d("header"),t=d("input"),n=p(),a=d("label"),a.innerHTML='<span id="hamb-line"></span>',r=p(),s=d("a"),c=d("img"),y=p(),x=d("span"),j=h(re),O=p(),H=d("nav"),M=d("ul"),N=d("li"),S=d("a"),E=h(se),R=p(),U=d("li"),q=d("a"),I=h(le),X=p(),A=d("li"),B=d("a"),C=h(ce),D=p(),F=d("li"),G=d("a"),J=h(me),K=p(),P=d("li"),Q=d("a"),V=h(de),W=p(),Y=d("li"),Z=d("a"),$=h(pe),_=p(),ee=d("li"),oe=d("button"),oe.innerHTML='<picture><source srcset="/img/common/globe.webp"/> \n                                <source srcset="/img/common/globe.png"/> \n                                <img id="locales-img" alt="globe"/></picture>',te=p(),ne=d("div");for(let e=0;e<ge.length;e+=1)ge[e].c();g(t,"type","checkbox"),g(t,"id","side-menu"),g(a,"id","hamb"),g(a,"for","side-menu"),u(c.src,m="/img/common/flag.png")||g(c,"src","/img/common/flag.png"),g(c,"id","navbar-logo"),g(c,"alt","logo"),g(x,"id","navbar-logo-text"),g(s,"id","logo-container"),g(s,"href","/"+e[6]+"/"),g(S,"href","/"+e[6]+"/manifesto"),g(q,"href","/"+e[6]+"/join-us"),g(B,"href","/"+e[6]+"/groups"),g(G,"href","/"+e[6]+"/communities"),g(Q,"href","/"+e[6]+"/cooperatives"),g(Z,"href","/"+e[6]+"/partners"),g(ee,"id","locales"),g(ne,"id","locales-dropdown"),g(M,"id","menu"),g(H,"id","nav"),g(o,"id","navbar")},m(l,m){i(l,o,m),f(o,t),e[10](t),f(o,n),f(o,a),f(o,r),f(o,s),f(s,c),f(s,y),f(s,x),f(x,j),f(o,O),f(o,H),f(H,M),f(M,N),f(N,S),f(S,E),f(M,R),f(M,U),f(U,q),f(q,I),f(M,X),f(M,A),f(A,B),f(B,C),f(M,D),f(M,F),f(F,G),f(G,J),f(M,K),f(M,P),f(P,Q),f(Q,V),f(M,W),f(M,Y),f(Y,Z),f(Z,$),f(M,_),f(M,ee),f(ee,oe),f(M,te),f(M,ne);for(let e=0;e<ge.length;e+=1)ge[e].m(ne,null);e[12](ne),e[13](o),ie||(ae=[b(t,"click",e[7]),b(oe,"click",e[8])],ie=!0)},p(e,o){if(8&o&&re!==(re=e[3].orgName+"")&&v(j,re),8&o&&se!==(se=e[3].manifesto+"")&&v(E,se),8&o&&le!==(le=e[3].joinUs+"")&&v(I,le),8&o&&ce!==(ce=e[3].groups+"")&&v(C,ce),8&o&&me!==(me=e[3].communities+"")&&v(J,me),8&o&&de!==(de=e[3].cooperatives+"")&&v(V,de),8&o&&pe!==(pe=e[3].partners+"")&&v($,pe),512&o){let t;for(he=Object.entries(z),t=0;t<he.length;t+=1){const n=T(e,he,t);ge[t]?ge[t].p(n,o):(ge[t]=L(n),ge[t].c(),ge[t].m(ne,null))}for(;t<ge.length;t+=1)ge[t].d(1);ge.length=he.length}},d(t){t&&l(o),e[10](null),k(ge,t),e[12](null),e[13](null),ie=!1,w(ae)}}}function L(e){let o,t,n,a,r=e[15]+"";function s(){return e[11](e[14])}return{c(){o=d("button"),t=h(r)},m(e,r){i(e,o,r),f(o,t),n||(a=b(o,"click",s),n=!0)},p(o,t){e=o},d(e){e&&l(o),n=!1,a()}}}function M(e){let o,t=0!=Object.keys(e[3]).length,n=t&&H(e);return{c(){n&&n.c(),o=r(),this.c=s},m(e,t){n&&n.m(e,t),i(e,o,t)},p(e,[i]){8&i&&(t=0!=Object.keys(e[3]).length),t?n?n.p(e,i):(n=H(e),n.c(),n.m(o.parentNode,o)):n&&(n.d(1),n=null)},i:s,o:s,d(e){n&&n.d(e),e&&l(o)}}}function N(e,o,t){let n,i,a,r,s,l=x({});c(e,l,(e=>t(3,n=e)));let d=j(l,"navbar-component",s);function p(e){localStorage.setItem("locale",e);let o=location.href.split("/"),t=Object.keys(z);o=o.filter((e=>!t.includes(e)));let n=o.slice(0,o.length-1).join("/")+"/"+e+"/"+o[o.length-1];location.href=n}m((()=>{}));return[i,a,r,n,s,l,d,function(){i.checked?t(1,a.style.background="white",a):setTimeout((()=>{t(1,a.style.position="relative",a),t(1,a.style.background="",a),t(1,a.style.boxShadow="",a)}),510)},function(){"block"==r.style.display?t(2,r.style.display="none",r):t(2,r.style.display="block",r)},p,function(e){y[e?"unshift":"push"]((()=>{i=e,t(0,i)}))},e=>p(e),function(e){y[e?"unshift":"push"]((()=>{r=e,t(2,r)}))},function(e){y[e?"unshift":"push"]((()=>{a=e,t(1,a)}))}]}class S extends o{constructor(e){super(),this.shadowRoot.innerHTML="<style>@import '/css/common.css';#navbar{position:relative;top:0;width:min(100%,116rem);z-index:1000000000;height:5.26rem}#navbar *{font-family:var(--sans-serif, sans-serif)}#logo-container{display:flex;position:absolute;margin-left:1rem;height:100%;max-height:5.26rem;color:black;z-index:1;flex-direction:row;flex-wrap:nowrap;align-items:center}#navbar-logo{height:3.5rem;width:3.5rem;object-fit:contain;border-radius:10rem}#navbar-logo-text{position:relative;width:auto;height:100%;line-height:400%;white-space:nowrap;text-align:center;font-size:1.4rem;color:#292222;font-family:var(--sans-serif, sans-serif);font-weight:400;padding-left:1.2rem}#nav{position:fixed;width:100%;height:100%;background-color:white;overflow:hidden;z-index:0}#menu a{display:block;padding:1.2rem;padding-top:1rem;padding-bottom:1rem;color:black;font-size:1.4rem}#menu a:hover{background-color:rgb(220, 220, 220)}#menu a:active{background-color:#f7aec0}#menu li{list-style-type:none}#nav{max-height:0}#hamb{position:absolute;cursor:pointer;right:0rem;padding:2.8rem 2rem;z-index:9999}#hamb-line{background:black;display:block;height:2px;position:relative;width:24px}#hamb-line::before,#hamb-line::after{background:black;content:'';display:block;height:100%;position:absolute;transition:all .2s ease-out;width:100%}#hamb-line::before{top:5px}#hamb-line::after{top:-5px}#side-menu{display:none}#side-menu:checked~nav{display:block;max-height:100%;padding-top:5.625rem}#side-menu:checked~#logo-container{position:fixed}#side-menu:checked~#hamb{position:fixed}#side-menu:checked~#logo-container{position:fixed}#side-menu:checked~#hamb #hamb-line{background:transparent}#side-menu:checked~#hamb #hamb-line::before{transform:rotate(-45deg);top:0}#side-menu:checked~#hamb #hamb-line::after{transform:rotate(45deg);top:0}#locales{position:relative}#locales button{width:100%;text-align:left;height:4rem}#locales button:hover{opacity:0.5}#locales-img{position:relative;top:0rem;height:2rem;margin-left:1.2rem}#locales-dropdown{position:absolute;display:none;top:5.6rem;right:1.8rem;border:#404040 solid 0.1rem;padding:1.4rem;background-color:white}#locales-dropdown button{display:block;font-family:var(--sans-serif,sans-serif);font-size:1.3rem;width:100%}#locales-dropdown button:hover{color:rgb(127, 127, 127)}#locales-dropdown>*{padding-top:0.5rem}@media only screen and (min-width: 1500px){#navbar{position:relative;width:min(95%,116rem);left:50%;transform:translateX(-50%)}#nav{max-height:none;top:0;position:relative;float:right;width:fit-content;background-color:transparent;overflow:visible}#side-menu:checked~nav{padding-top:0}#menu li{float:left}#menu a:hover{background-color:transparent;color:rgb(127, 127, 127)}#menu a{padding:1.2rem;padding-top:1.9rem;padding-bottom:1.9rem}#hamb{display:none}#locales{position:relative;margin-right:1.8rem}#locales-img{top:0.9rem}#locales-dropdown{top:5,7rem}}</style>",t(this,{target:this.shadowRoot,props:n(this.attributes),customElement:!0},N,M,a,{},null),e&&e.target&&i(e.target,this,e.anchor)}}O.define("navbar-component",S);export{S as default};
