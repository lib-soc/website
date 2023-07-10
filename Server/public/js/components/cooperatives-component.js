import{S as t,i as e,a as o,b as n,s as i,e as a,n as r,d as s,c,o as m,f as l,t as p,g,h as d,j as h,k as f,l as u,m as b,p as w}from"./index-4348483d.js";import{w as x}from"./index-71440b21.js";import{coops as v,addMarkersCoops as k}from"../../../../../../../../../js/coops.js";import{loadLocaleContent as j}from"../../../../../../../../../js/libraries/serverTools.js";import"../../../../../../../../../js/components/map-component.js";function y(t,e,o){const n=t.slice();return n[6]=e[o],n}function z(t){let e,o,i,a,r,c,m,x,k,j,z,E,O,R,T,_,A,C,H,L,M=t[0].heading+"",N=t[0].p1+"",S=t[0].p2+"",q=t[0].subheading1+"",B=v,F=[];for(let e=0;e<B.length;e+=1)F[e]=D(y(t,B,e));return{c(){e=l("div"),o=l("div"),i=l("h1"),a=p(M),r=g(),c=l("img"),x=g(),k=l("p"),j=p(N),z=g(),E=l("p"),O=p(S),R=g(),T=l("h3"),_=p(q),A=g(),C=l("map-component"),L=g();for(let t=0;t<F.length;t+=1)F[t].c();d(c,"id","coops-img"),h(c.src,m="/img/common/coops.svg")||d(c,"src","/img/common/coops.svg"),d(c,"alt","coops"),f(C,"id","map"),f(C,"callback",H=t[5]),d(o,"id","text-container"),d(e,"id","container")},m(t,s){n(t,e,s),u(e,o),u(o,i),u(i,a),u(o,r),u(o,c),u(o,x),u(o,k),u(k,j),u(o,z),u(o,E),u(E,O),u(o,R),u(o,T),u(T,_),u(o,A),u(o,C),u(o,L);for(let t=0;t<F.length;t+=1)F[t].m(o,null)},p(t,e){if(1&e&&M!==(M=t[0].heading+"")&&b(a,M),1&e&&N!==(N=t[0].p1+"")&&b(j,N),1&e&&S!==(S=t[0].p2+"")&&b(O,S),1&e&&q!==(q=t[0].subheading1+"")&&b(_,q),1&e&&H!==(H=t[5])&&f(C,"callback",H),1&e){let n;for(B=v,n=0;n<B.length;n+=1){const i=y(t,B,n);F[n]?F[n].p(i,e):(F[n]=D(i),F[n].c(),F[n].m(o,null))}for(;n<F.length;n+=1)F[n].d(1);F.length=B.length}},d(t){t&&s(e),w(F,t)}}}function D(t){let e,o,i,a,r,c,m,h,f,w,x,v,k,j,y,z,D,E,O,R,T,_,A,C,H,L,M,N,S,q,B,F,G,I,J,K,P,Q,U,V,W,X,Y,Z,$,tt,et,ot,nt,it,at,rt,st,ct,mt,lt,pt,gt,dt,ht,ft=t[0].name+"",ut=t[6].name+"",bt=t[0].location+"",wt=t[0][t[6].location[0]]+"",xt=t[0].market+"",vt=t[0][t[6].market]+"",kt=t[0].workers+"",jt=t[6].workers+"",yt=t[0].status+"",zt=t[0][t[6].status]+"",Dt=t[0].website+"",Et=t[6].website+"",Ot=t[0].contact+"",Rt=t[0][t[6].contact[1]]+"",Tt=t[0].description+"",_t=t[0][t[6].description]+"";return{c(){e=l("div"),o=l("div"),i=l("div"),a=l("p"),r=l("b"),c=p(ft),m=p(": "),h=p(ut),f=g(),w=l("p"),x=l("b"),v=p(bt),k=p(": "),j=p(wt),y=g(),z=l("p"),D=l("b"),E=p(xt),O=p(": "),R=p(vt),T=g(),_=l("p"),A=l("b"),C=p(kt),H=p(": "),L=p(jt),M=g(),N=l("p"),S=l("b"),q=p(yt),B=p(": "),F=p(zt),G=g(),I=l("p"),J=l("b"),K=p(Dt),P=p(": "),Q=l("a"),U=p(Et),V=g(),W=l("p"),X=l("b"),Y=p(Ot),Z=p(": "),$=l("a"),tt=p(Rt),et=g(),ot=l("picture"),nt=l("source"),it=g(),at=l("source"),rt=g(),st=l("img"),ct=g(),mt=l("p"),lt=l("b"),pt=p(Tt),gt=p(": "),dt=p(_t),ht=g(),d(Q,"href","https://www."+t[6].website),d(Q,"target","_blank"),d(Q,"rel","noreferrer"),d($,"href",t[6].contact[0]),d($,"target",";_blank;"),d($,"rel","noreferrer"),d(nt,"srcset","/img/coops/"+t[6].logo+".webp"),d(at,"srcset","/img/coops/"+t[6].logo+".png"),d(st,"class","coop-logo"),d(st,"alt","logo"),d(o,"class","img-general-info"),d(e,"class","location-info")},m(t,s){n(t,e,s),u(e,o),u(o,i),u(i,a),u(a,r),u(r,c),u(r,m),u(a,h),u(i,f),u(i,w),u(w,x),u(x,v),u(x,k),u(w,j),u(i,y),u(i,z),u(z,D),u(D,E),u(D,O),u(z,R),u(i,T),u(i,_),u(_,A),u(A,C),u(A,H),u(_,L),u(i,M),u(i,N),u(N,S),u(S,q),u(S,B),u(N,F),u(i,G),u(i,I),u(I,J),u(J,K),u(J,P),u(I,Q),u(Q,U),u(i,V),u(i,W),u(W,X),u(X,Y),u(X,Z),u(W,$),u($,tt),u(o,et),u(o,ot),u(ot,nt),u(ot,it),u(ot,at),u(ot,rt),u(ot,st),u(e,ct),u(e,mt),u(mt,lt),u(lt,pt),u(lt,gt),u(mt,dt),u(e,ht)},p(t,e){1&e&&ft!==(ft=t[0].name+"")&&b(c,ft),1&e&&bt!==(bt=t[0].location+"")&&b(v,bt),1&e&&wt!==(wt=t[0][t[6].location[0]]+"")&&b(j,wt),1&e&&xt!==(xt=t[0].market+"")&&b(E,xt),1&e&&vt!==(vt=t[0][t[6].market]+"")&&b(R,vt),1&e&&kt!==(kt=t[0].workers+"")&&b(C,kt),1&e&&yt!==(yt=t[0].status+"")&&b(q,yt),1&e&&zt!==(zt=t[0][t[6].status]+"")&&b(F,zt),1&e&&Dt!==(Dt=t[0].website+"")&&b(K,Dt),1&e&&Ot!==(Ot=t[0].contact+"")&&b(Y,Ot),1&e&&Rt!==(Rt=t[0][t[6].contact[1]]+"")&&b(tt,Rt),1&e&&Tt!==(Tt=t[0].description+"")&&b(pt,Tt),1&e&&_t!==(_t=t[0][t[6].description]+"")&&b(dt,_t)},d(t){t&&s(e)}}}function E(t){let e,o=0!=Object.keys(t[0]).length,i=o&&z(t);return{c(){i&&i.c(),e=a(),this.c=r},m(t,o){i&&i.m(t,o),n(t,e,o)},p(t,[n]){1&n&&(o=0!=Object.keys(t[0]).length),o?i?i.p(t,n):(i=z(t),i.c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null)},i:r,o:r,d(t){i&&i.d(t),t&&s(e)}}}function O(t,e,o){let n,i,a=x({});c(t,a,(t=>o(0,n=t)));let r=j(a,"cooperatives-component",i);function s(t,e){let o=t([22,0],2);k(o,e)}m((()=>{}));return[n,i,a,r,s,t=>s(t,n)]}class R extends t{constructor(t){super(),this.shadowRoot.innerHTML="<style>@import '/css/common.css';#coops-img{position:absolute;width:10.5rem;left:50%;transform:translate(-50%);z-index:0;opacity:0.2}#text-container>:nth-child(3){margin-top:8rem}.img-general-info{display:flex;align-content:center;width:100%;justify-content:space-between;gap:3rem;align-items:center}.img-general-info>:first-child{flex:none}.coop-logo{position:relative;right:0;max-height:6rem;max-width:100%}.location-info{position:relative;margin-bottom:2rem}.location-info p{margin-bottom:0}a{color:#DD1C1A}#map{--height:30rem;--width:100%;--margin-bottom:3rem}#text-container{max-width:calc(100vw - 4rem);margin:auto}h1{margin-bottom:1rem;font-size:2.2rem;text-align:center}h3{margin-bottom:1rem}#container{margin:auto;max-width:800px;margin-top:1rem;margin-bottom:4rem}#container>div>p{margin-bottom:1rem}#container p{text-align:justify}@media only screen and (max-width: 600px){.img-general-info{display:flex;flex-direction:column-reverse;align-content:left;width:100%;gap:1rem;align-items:left;margin-bottom:0rem}.img-general-info>:nth-child(2){width:max-content}.img-general-info>:nth-child(1){width:100%}}</style>",e(this,{target:this.shadowRoot,props:o(this.attributes),customElement:!0},O,E,i,{},null),t&&t.target&&n(t.target,this,t.anchor)}}customElements.define("cooperatives-component",R);export{R as default};
