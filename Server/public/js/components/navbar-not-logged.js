import{S as e,i as t,a as n,b as i,s,e as o,n as l,d as r,c as a,o as c,h as u,j as d,t as h,k as m,w as p,l as f,m as g,y as b,p as y,r as w,f as v}from"./index-0d9f0c09.js";import{w as j}from"./index-1c123138.js";import{loadLocaleContent as k,locales as H}from"../../../../../../../../../js/libraries/serverTools.js";function T(e,t,n){const i=e.slice();return i[23]=t[n][0],i[24]=t[n][1],i}function x(e){let t,n,s,o,l,a,c,v,j,k,x,W,M,O,U,E,N,S,R,z,I,q,A,B,C,D,F,G,J,K,P,Q,V,X,Y,Z,$,_,ee,te,ne,ie,se,oe,le,re,ae,ce,ue,de,he,me,pe,fe,ge=e[5].orgName+"",be=e[5].joinUs+"",ye=e[5].manifesto+"",we=e[5].initiatives+"",ve=e[5].groups+"",je=e[5].parties+"",ke=e[5].tradeUnions+"",He=e[5].cooperatives+"",Te=e[5].communes+"",xe=e[5].partners+"",Le=e[5].login+"",We=Object.entries(H),Me=[];for(let t=0;t<We.length;t+=1)Me[t]=L(T(e,We,t));return{c(){t=u("header"),n=u("input"),s=d(),o=u("label"),o.innerHTML='<span id="hamb-line"></span>',l=d(),a=u("a"),c=u("img"),j=d(),k=u("span"),x=d(),W=u("nav"),M=u("ul"),O=u("li"),U=u("a"),E=h(be),N=d(),S=u("li"),R=u("a"),z=h(ye),I=d(),q=u("li"),A=u("button"),B=h(we),C=d(),D=u("div"),F=u("a"),G=h(ve),J=d(),K=u("a"),P=h(je),Q=d(),V=u("a"),X=h(ke),Y=d(),Z=u("a"),$=h(He),_=d(),ee=u("a"),te=h(Te),ne=d(),ie=u("a"),se=h(xe),oe=d(),le=u("li"),re=u("a"),ae=h(Le),ce=d(),ue=u("li"),de=u("button"),de.innerHTML='<picture><source srcset="/img/common/globe.webp"/> \n                                <source srcset="/img/common/globe.png"/> \n                                <img id="locales-img" alt="globe"/></picture>',he=d(),me=u("div");for(let e=0;e<Me.length;e+=1)Me[e].c();m(n,"type","checkbox"),m(n,"id","side-menu"),m(o,"id","hamb"),m(o,"for","side-menu"),p(c.src,v="/img/common/flag.png")||m(c,"src","/img/common/flag.png"),m(c,"id","navbar-logo"),m(c,"alt","logo"),m(k,"id","navbar-logo-text"),m(a,"id","logo-container"),m(a,"href","/"+e[8]+"/"),m(U,"href","/"+e[8]+"/join-us"),m(R,"href","/"+e[8]+"/manifesto"),m(A,"class","options-button"),m(F,"href","/"+e[8]+"/groups"),m(K,"href","/"+e[8]+"/parties"),m(V,"href","/"+e[8]+"/trade-unions"),m(Z,"href","/"+e[8]+"/cooperatives"),m(ee,"href","/"+e[8]+"/communes"),m(ie,"href","/"+e[8]+"/partners"),m(D,"class","options-dropdown"),m(q,"id","options-container"),m(re,"href","/"+e[8]+"/auth"),m(ue,"id","locales"),m(me,"class","options-dropdown"),m(M,"id","menu"),m(W,"id","nav"),m(t,"id","navbar")},m(r,u){i(r,t,u),f(t,n),e[12](n),f(t,s),f(t,o),f(t,l),f(t,a),f(a,c),f(a,j),f(a,k),k.innerHTML=ge,e[13](k),f(t,x),f(t,W),f(W,M),f(M,O),f(O,U),f(U,E),f(M,N),f(M,S),f(S,R),f(R,z),f(M,I),f(M,q),f(q,A),f(A,B),f(q,C),f(q,D),f(D,F),f(F,G),f(D,J),f(D,K),f(K,P),f(D,Q),f(D,V),f(V,X),f(D,Y),f(D,Z),f(Z,$),f(D,_),f(D,ee),f(ee,te),f(D,ne),f(D,ie),f(ie,se),e[16](D),f(M,oe),f(M,le),f(le,re),f(re,ae),f(M,ce),f(M,ue),f(ue,de),f(M,he),f(M,me);for(let e=0;e<Me.length;e+=1)Me[e].m(me,null);e[20](me),e[21](t),pe||(fe=[g(n,"click",e[9]),g(A,"click",e[14]),g(A,"focusout",e[15]),g(de,"click",e[17]),g(de,"focusout",e[18])],pe=!0)},p(e,t){if(32&t&&ge!==(ge=e[5].orgName+"")&&(k.innerHTML=ge),32&t&&be!==(be=e[5].joinUs+"")&&b(E,be),32&t&&ye!==(ye=e[5].manifesto+"")&&b(z,ye),32&t&&we!==(we=e[5].initiatives+"")&&b(B,we),32&t&&ve!==(ve=e[5].groups+"")&&b(G,ve),32&t&&je!==(je=e[5].parties+"")&&b(P,je),32&t&&ke!==(ke=e[5].tradeUnions+"")&&b(X,ke),32&t&&He!==(He=e[5].cooperatives+"")&&b($,He),32&t&&Te!==(Te=e[5].communes+"")&&b(te,Te),32&t&&xe!==(xe=e[5].partners+"")&&b(se,xe),32&t&&Le!==(Le=e[5].login+"")&&b(ae,Le),2048&t){let n;for(We=Object.entries(H),n=0;n<We.length;n+=1){const i=T(e,We,n);Me[n]?Me[n].p(i,t):(Me[n]=L(i),Me[n].c(),Me[n].m(me,null))}for(;n<Me.length;n+=1)Me[n].d(1);Me.length=We.length}},d(n){n&&r(t),e[12](null),e[13](null),e[16](null),y(Me,n),e[20](null),e[21](null),pe=!1,w(fe)}}}function L(e){let t,n,s,o,l=e[24]+"";function a(){return e[19](e[23])}return{c(){t=u("button"),n=h(l)},m(e,l){i(e,t,l),f(t,n),s||(o=g(t,"click",a),s=!0)},p(t,n){e=t},d(e){e&&r(t),s=!1,o()}}}function W(e){let t,n=0!=Object.keys(e[5]).length,s=n&&x(e);return{c(){s&&s.c(),t=o(),this.c=l},m(e,n){s&&s.m(e,n),i(e,t,n)},p(e,[i]){32&i&&(n=0!=Object.keys(e[5]).length),n?s?s.p(e,i):(s=x(e),s.c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null)},i:l,o:l,d(e){s&&s.d(e),e&&r(t)}}}function M(e){setTimeout((()=>{e.style.display="none"}),100)}function O(e,t,n){let i,s,o,l,r,u,d=j(0),h=j({});a(e,h,(e=>n(5,i=e)));let m=k(h,"navbar-component",d);function p(e){let t=e.style.display;n(3,r.style.display="none",r),n(2,l.style.display="none",l),e.style.display="block"==t?"none":"block"}function f(e){localStorage.setItem("locale",e);let t=location.href.split("/"),n=Object.keys(H);t=t.filter((e=>!n.includes(e)));let i=t.slice(0,t.length-1).join("/")+"/"+e+"/"+t[t.length-1];location.href=i}c((()=>{!function(){if("ru"==m){let e=()=>{null==u?setTimeout(e,100):(window.innerWidth<1700&&window.innerWidth>1400||window.innerWidth<400)&&"100%"!=u.style.lineHeight?(n(4,u.style.lineHeight="120%",u),n(4,u.style.top="1rem",u),n(4,u.style.width="16rem",u)):(window.innerWidth>1700||window.innerWidth>400&&window.innerWidth<1400)&&"400%"!=u.style.lineHeight&&(n(4,u.style.lineHeight="400%",u),n(4,u.style.top="0rem",u),n(4,u.style.width="auto",u))};e(),addEventListener("resize",e)}}()}));return[s,o,l,r,u,i,d,h,m,function(){s.checked?n(1,o.style.background="white",o):setTimeout((()=>{n(1,o.style.position="relative",o),n(1,o.style.background="",o),n(1,o.style.boxShadow="",o)}),510)},p,f,function(e){v[e?"unshift":"push"]((()=>{s=e,n(0,s)}))},function(e){v[e?"unshift":"push"]((()=>{u=e,n(4,u)}))},()=>p(r),()=>M(r),function(e){v[e?"unshift":"push"]((()=>{r=e,n(3,r)}))},()=>p(l),()=>M(l),e=>f(e),function(e){v[e?"unshift":"push"]((()=>{l=e,n(2,l)}))},function(e){v[e?"unshift":"push"]((()=>{o=e,n(1,o)}))}]}class U extends e{constructor(e){super(),this.shadowRoot.innerHTML="<style>@import '/css/common.css';@import '/css/navbar.css';</style>",t(this,{target:this.shadowRoot,props:n(this.attributes),customElement:!0},O,W,s,{},null),e&&e.target&&i(e.target,this,e.anchor)}}customElements.define("navbar-not-logged",U);export{U as default};
