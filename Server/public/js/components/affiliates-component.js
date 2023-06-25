import{S as t,i as e,a as i,b as n,s as o,e as a,c as s,n as r,d as l,f as m,g as c,h,j as d,o as g,t as f}from"./index-95aedb1a.js";import"../../../../../../../../../js/components/map-component.js";function p(t,e,i){const n=t.slice();return n[1]=e[i],n}function u(t){let e,i,o,m,d,g,p,u,b,x,w,v,y,k,C,z,j,D,T,A,E,F,G,L,O,R,S,W=t[1].name+"",_=t[1].type+"",q=t[1].link+"",H=t[1].description+"";return{c(){e=a("div"),i=a("div"),o=a("div"),m=a("p"),d=a("b"),d.textContent="Name: ",g=f(W),p=s(),u=a("p"),b=a("b"),b.textContent="Type: ",x=f(_),w=s(),v=a("p"),y=a("b"),y.textContent="Link: ",k=a("a"),C=f(q),z=s(),j=a("picture"),D=a("source"),T=s(),A=a("source"),E=s(),F=a("img"),G=s(),L=a("p"),O=a("b"),O.textContent="Description: ",R=f(H),S=s(),l(k,"href",t[1].link),l(k,"target",";_blank;"),l(k,"rel","noreferrer"),l(D,"srcset","/img/affiliates/"+t[1].logo+".webp"),l(A,"srcset","/img/affiliates/"+t[1].logo+".png"),l(F,"class","affiliate-logo"),l(F,"alt","logo"),l(e,"class","location-info")},m(t,a){n(t,e,a),c(e,i),c(i,o),c(o,m),c(m,d),c(m,g),c(o,p),c(o,u),c(u,b),c(u,x),c(o,w),c(o,v),c(v,y),c(v,k),c(k,C),c(i,z),c(i,j),c(j,D),c(j,T),c(j,A),c(j,E),c(j,F),c(e,G),c(e,L),c(L,O),c(L,R),c(e,S)},p:r,d(t){t&&h(e)}}}function b(t){let e,i,o,g,f,b,x,w,v,y,k,C,z,j=t[0],D=[];for(let e=0;e<j.length;e+=1)D[e]=u(p(t,j,e));return{c(){e=a("div"),i=a("div"),o=a("h1"),o.textContent="Affiliates",g=s(),f=a("img"),x=s(),w=a("p"),w.textContent="We affiliate with organizations and initiatives that align with our mission. Together, we are a united force driven by a shared worldview where there is no place for authoritarian exploitative systems, but where systems promoting equity and democracy thrive.",v=s(),y=a("h3"),y.textContent="Our affiliates",k=s(),C=a("h4"),C.textContent="Online",z=s();for(let t=0;t<D.length;t+=1)D[t].c();this.c=r,l(f,"id","hands-img"),m(f.src,b="/img/common/handshake.svg")||l(f,"src","/img/common/handshake.svg"),l(f,"alt","hands"),l(i,"id","text-container"),l(e,"id","container")},m(t,a){n(t,e,a),c(e,i),c(i,o),c(i,g),c(i,f),c(i,x),c(i,w),c(i,v),c(i,y),c(i,k),c(i,C),c(i,z);for(let t=0;t<D.length;t+=1)D[t].m(i,null)},p(t,[e]){if(1&e){let n;for(j=t[0],n=0;n<j.length;n+=1){const o=p(t,j,n);D[n]?D[n].p(o,e):(D[n]=u(o),D[n].c(),D[n].m(i,null))}for(;n<D.length;n+=1)D[n].d(1);D.length=j.length}},i:r,o:r,d(t){t&&h(e),d(D,t)}}}function x(t){return g((()=>{})),[[{name:"Gaia's Fall",type:"a place to discuss and organize",link:"https://discord.libsoc.org",description:"Gaia's Fall is a server that promotes Solarpunk ideals, environmentalism, anarchism, and anti-capitalism. We encourage civil debates, discussions of theories and possibilities, and the creation of communities focused on shaping a better world. It is our official Discord server where we organize and work together.",logo:"gaias_fall"}]]}class w extends t{constructor(t){super(),this.shadowRoot.innerHTML="<style>@import '/css/common.css';#hands-img{position:absolute;width:10.5rem;left:50%;transform:translate(-50%);z-index:0;opacity:0.2}#text-container>:nth-child(3){margin-top:8rem}.location-info>:first-child{display:flex;align-content:center;width:100%;justify-content:space-between;gap:3rem;align-items:center}.location-info>:first-child>:first-child{flex:none}.affiliate-logo{position:relative;right:0;max-height:6rem;max-width:100%;border-radius:1rem}h4{margin-bottom:2rem}.location-info{position:relative;margin-bottom:2rem}.location-info p{margin-bottom:0}a{font-size:1.2rem;color:#DD1C1A}#text-container{max-width:calc(100vw - 4rem);margin:auto}h1{margin-bottom:1rem;font-size:2.5rem;text-align:center}h3{margin-bottom:2rem}#container{margin:auto;max-width:1200px;margin-top:1rem;margin-bottom:4rem}#container>div>p{margin-bottom:1rem}#container p{font-size:1.2rem;text-align:justify}</style>",e(this,{target:this.shadowRoot,props:i(this.attributes),customElement:!0},x,b,o,{},null),t&&t.target&&n(t.target,this,t.anchor)}}customElements.define("affiliates-component",w);export{w as default};