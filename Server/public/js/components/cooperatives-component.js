import{S as t,i as e,a as o,b as n,s as i,e as a,n as r,d as s,c as m,o as c,f as l,t as p,g,h,j as d,k as f,l as b,m as u,p as w}from"./index-4348483d.js";import{w as x}from"./index-71440b21.js";import{coops as v,addMarkersCoops as j}from"../../../../../../../../../js/coops.js";import{loadLocaleContent as k}from"../../../../../../../../../js/libraries/serverTools.js";import"../../../../../../../../../js/components/map-component.js";function y(t,e,o){const n=t.slice();return n[6]=e[o],n}function z(t){let e,o,i,a,r,m,c,x,j,k,z,E,O,R,T,_,A,C,H,L,M,N,S,q=t[0].heading+"",B=t[0].p1+"",F=t[0].p2+"",G=t[0].subheading1+"",I=t[0].subheading2+"",J=v,K=[];for(let e=0;e<J.length;e+=1)K[e]=D(y(t,J,e));return{c(){e=l("div"),o=l("div"),i=l("h1"),a=p(q),r=g(),m=l("img"),x=g(),j=l("p"),k=p(B),z=g(),E=l("p"),O=p(F),R=g(),T=l("h3"),_=p(G),A=g(),C=l("map-component"),L=g(),M=l("h4"),N=p(I),S=g();for(let t=0;t<K.length;t+=1)K[t].c();h(m,"id","coops-img"),d(m.src,c="/img/common/coops.svg")||h(m,"src","/img/common/coops.svg"),h(m,"alt","coops"),f(C,"id","map"),f(C,"callback",H=t[5]),h(o,"id","text-container"),h(e,"id","container")},m(t,s){n(t,e,s),b(e,o),b(o,i),b(i,a),b(o,r),b(o,m),b(o,x),b(o,j),b(j,k),b(o,z),b(o,E),b(E,O),b(o,R),b(o,T),b(T,_),b(o,A),b(o,C),b(o,L),b(o,M),b(M,N),b(o,S);for(let t=0;t<K.length;t+=1)K[t].m(o,null)},p(t,e){if(1&e&&q!==(q=t[0].heading+"")&&u(a,q),1&e&&B!==(B=t[0].p1+"")&&u(k,B),1&e&&F!==(F=t[0].p2+"")&&u(O,F),1&e&&G!==(G=t[0].subheading1+"")&&u(_,G),1&e&&H!==(H=t[5])&&f(C,"callback",H),1&e&&I!==(I=t[0].subheading2+"")&&u(N,I),9&e){let n;for(J=v,n=0;n<J.length;n+=1){const i=y(t,J,n);K[n]?K[n].p(i,e):(K[n]=D(i),K[n].c(),K[n].m(o,null))}for(;n<K.length;n+=1)K[n].d(1);K.length=J.length}},d(t){t&&s(e),w(K,t)}}}function D(t){let e,o,i,a,r,m,c,d,f,w,x,v,j,k,y,z,D,E,O,R,T,_,A,C,H,L,M,N,S,q,B,F,G,I,J,K,P,Q,U,V,W,X,Y,Z,$,tt,et,ot,nt,it,at,rt,st,mt,ct,lt,pt,gt,ht,dt,ft=t[0].name+"",bt=t[6].name+"",ut=t[0].location+"",wt=t[6].location[0][t[3]]+"",xt=t[0].market+"",vt=t[6].market[t[3]]+"",jt=t[0].workers+"",kt=t[6].workers+"",yt=t[0].status+"",zt=t[6].status[t[3]]+"",Dt=t[0].website+"",Et=t[6].website+"",Ot=t[0].contact+"",Rt=t[6].contact[1][t[3]]+"",Tt=t[0].description+"",_t=t[6].description[t[3]]+"";return{c(){e=l("div"),o=l("div"),i=l("div"),a=l("p"),r=l("b"),m=p(ft),c=p(": "),d=p(bt),f=g(),w=l("p"),x=l("b"),v=p(ut),j=p(": "),k=p(wt),y=g(),z=l("p"),D=l("b"),E=p(xt),O=p(": "),R=p(vt),T=g(),_=l("p"),A=l("b"),C=p(jt),H=p(": "),L=p(kt),M=g(),N=l("p"),S=l("b"),q=p(yt),B=p(": "),F=p(zt),G=g(),I=l("p"),J=l("b"),K=p(Dt),P=p(": "),Q=l("a"),U=p(Et),V=g(),W=l("p"),X=l("b"),Y=p(Ot),Z=p(": "),$=l("a"),tt=p(Rt),et=g(),ot=l("picture"),nt=l("source"),it=g(),at=l("source"),rt=g(),st=l("img"),mt=g(),ct=l("p"),lt=l("b"),pt=p(Tt),gt=p(": "),ht=p(_t),dt=g(),h(Q,"href","https://www."+t[6].website),h(Q,"target","_blank"),h(Q,"rel","noreferrer"),h($,"href",t[6].contact[0]),h($,"target",";_blank;"),h($,"rel","noreferrer"),h(nt,"srcset","/img/coops/"+t[6].logo+".webp"),h(at,"srcset","/img/coops/"+t[6].logo+".png"),h(st,"class","coop-logo"),h(st,"alt","logo"),h(o,"class","img-general-info"),h(e,"class","location-info")},m(t,s){n(t,e,s),b(e,o),b(o,i),b(i,a),b(a,r),b(r,m),b(r,c),b(a,d),b(i,f),b(i,w),b(w,x),b(x,v),b(x,j),b(w,k),b(i,y),b(i,z),b(z,D),b(D,E),b(D,O),b(z,R),b(i,T),b(i,_),b(_,A),b(A,C),b(A,H),b(_,L),b(i,M),b(i,N),b(N,S),b(S,q),b(S,B),b(N,F),b(i,G),b(i,I),b(I,J),b(J,K),b(J,P),b(I,Q),b(Q,U),b(i,V),b(i,W),b(W,X),b(X,Y),b(X,Z),b(W,$),b($,tt),b(o,et),b(o,ot),b(ot,nt),b(ot,it),b(ot,at),b(ot,rt),b(ot,st),b(e,mt),b(e,ct),b(ct,lt),b(lt,pt),b(lt,gt),b(ct,ht),b(e,dt)},p(t,e){1&e&&ft!==(ft=t[0].name+"")&&u(m,ft),1&e&&ut!==(ut=t[0].location+"")&&u(v,ut),1&e&&xt!==(xt=t[0].market+"")&&u(E,xt),1&e&&jt!==(jt=t[0].workers+"")&&u(C,jt),1&e&&yt!==(yt=t[0].status+"")&&u(q,yt),1&e&&Dt!==(Dt=t[0].website+"")&&u(K,Dt),1&e&&Ot!==(Ot=t[0].contact+"")&&u(Y,Ot),1&e&&Tt!==(Tt=t[0].description+"")&&u(pt,Tt)},d(t){t&&s(e)}}}function E(t){let e,o=0!=Object.keys(t[0]).length,i=o&&z(t);return{c(){i&&i.c(),e=a(),this.c=r},m(t,o){i&&i.m(t,o),n(t,e,o)},p(t,[n]){1&n&&(o=0!=Object.keys(t[0]).length),o?i?i.p(t,n):(i=z(t),i.c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null)},i:r,o:r,d(t){i&&i.d(t),t&&s(e)}}}function O(t,e,o){let n,i,a=x({});m(t,a,(t=>o(0,n=t)));let r=k(a,"cooperatives-component",i);function s(t,e,o){let n=t([51.505,-.09],3);j(n,e,o)}c((()=>{}));return[n,i,a,r,s,t=>s(t,n,r)]}class R extends t{constructor(t){super(),this.shadowRoot.innerHTML="<style>@import '/css/common.css';#coops-img{position:absolute;width:10.5rem;left:50%;transform:translate(-50%);z-index:0;opacity:0.2}#text-container>:nth-child(3){margin-top:8rem}.img-general-info{display:flex;align-content:center;width:100%;justify-content:space-between;gap:3rem;align-items:center}.img-general-info>:first-child{flex:none}.coop-logo{position:relative;right:0;max-height:6rem;max-width:100%}h4{margin-bottom:2rem}.location-info{position:relative;margin-bottom:2rem}.location-info p{margin-bottom:0}a{color:#DD1C1A}#map{--height:30rem;--width:100%;--margin-bottom:3rem}#text-container{max-width:calc(100vw - 4rem);margin:auto}h1{margin-bottom:1rem;font-size:2.2rem;text-align:center}h3{margin-bottom:1rem}#container{margin:auto;max-width:800px;margin-top:1rem;margin-bottom:4rem}#container>div>p{margin-bottom:1rem}#container p{text-align:justify}@media only screen and (max-width: 600px){.img-general-info{display:flex;flex-direction:column-reverse;align-content:left;width:100%;gap:1rem;align-items:left;margin-bottom:0rem}.img-general-info>:nth-child(2){width:max-content}.img-general-info>:nth-child(1){width:100%}}</style>",e(this,{target:this.shadowRoot,props:o(this.attributes),customElement:!0},O,E,i,{},null),t&&t.target&&n(t.target,this,t.anchor)}}customElements.define("cooperatives-component",R);export{R as default};
