import{S as t,i as n,a as i,b as a,s,e as o,c as e,n as r,d as u,f as l,l as m,g as p,r as f,o as h,j as c}from"./index-5b685137.js";import*as d from"../../../../../../../../../js/libraries/authTools.js";function g(t){let n,i,s,h,c,d,g,x,b,C,y,v,I,w,j,k,E,T,z,M,O,R,D;return{c(){n=o("div"),i=o("h2"),i.textContent="CONFIRMATION CODE",s=e(),h=o("div"),c=o("input"),d=o("span"),d.textContent="-",g=e(),x=o("input"),b=o("span"),b.textContent="-",C=e(),y=o("input"),v=o("span"),v.textContent="-",I=e(),w=o("input"),j=o("span"),j.textContent="-",k=e(),E=o("input"),T=e(),z=o("span"),M=e(),O=o("button"),O.textContent="Confirm",this.c=r,u(i,"class","auth-title title-highlight"),u(c,"class","authConfirmationInput"),u(c,"type","text"),u(c,"maxlength","1"),u(d,"class","dash"),u(x,"class","authConfirmationInput"),u(x,"type","text"),u(x,"maxlength","1"),u(b,"class","dash"),u(y,"class","authConfirmationInput"),u(y,"type","text"),u(y,"maxlength","1"),u(v,"class","dash"),u(w,"class","authConfirmationInput"),u(w,"type","text"),u(w,"maxlength","1"),u(j,"class","dash"),u(E,"class","authConfirmationInput"),u(E,"type","text"),u(E,"maxlength","1"),u(h,"id","confirmationInputs"),u(z,"id","confirmation-msg"),u(O,"class","auth-button"),u(n,"class","pane auth-pane")},m(o,e){a(o,n,e),l(n,i),l(n,s),l(n,h),l(h,c),t[6](c),l(h,d),l(h,g),l(h,x),t[8](x),l(h,b),l(h,C),l(h,y),t[10](y),l(h,v),l(h,I),l(h,w),t[12](w),l(h,j),l(h,k),l(h,E),t[14](E),l(n,T),l(n,z),t[16](z),l(n,M),l(n,O),t[17](O),R||(D=[m(c,"input",t[7]),m(x,"input",t[9]),m(y,"input",t[11]),m(w,"input",t[13]),m(E,"input",t[15]),m(O,"click",t[18])],R=!0)},p:r,i:r,o:r,d(i){i&&p(n),t[6](null),t[8](null),t[10](null),t[12](null),t[14](null),t[16](null),t[17](null),R=!1,f(D)}}}function x(t,n,i){let a,s,o=[];function e(t,n){n.data in["0","1","2","3","4","5","6","7","8","9"]?t<4?o[t+1].focus():d.confirmEmail(a,r(),u):i(0,o[t].value="",o)}function r(){let t="";for(let n of o)t+=n.value;return parseInt(t)}function u(t){"true"==t?d.toDashboard():i(1,a.innerHTML="Wrong code",a)}h((()=>{}));return[o,a,s,e,r,u,function(t){c[t?"unshift":"push"]((()=>{o[0]=t,i(0,o)}))},t=>e(0,t),function(t){c[t?"unshift":"push"]((()=>{o[1]=t,i(0,o)}))},t=>e(1,t),function(t){c[t?"unshift":"push"]((()=>{o[2]=t,i(0,o)}))},t=>e(2,t),function(t){c[t?"unshift":"push"]((()=>{o[3]=t,i(0,o)}))},t=>e(3,t),function(t){c[t?"unshift":"push"]((()=>{o[4]=t,i(0,o)}))},t=>e(4,t),function(t){c[t?"unshift":"push"]((()=>{a=t,i(1,a)}))},function(t){c[t?"unshift":"push"]((()=>{s=t,i(2,s)}))},()=>d.confirmEmail(a,r(),u)]}class b extends t{constructor(t){super(),this.shadowRoot.innerHTML="<style>@import '/css/common.css';.auth-pane{position:relative;padding:3.4rem;padding-top:5.5rem;padding-bottom:5.5rem;width:33rem;height:auto;margin:auto}.auth-title{position:relative;left:0.7rem;top:0.2rem;margin-bottom:1.4rem}.authConfirmationInput{position:relative;width:3.16rem;font-family:var(--serif,serif);font-size:3rem;border-radius:0.34rem;margin-bottom:0.7rem;text-align:center;padding-left:0;padding-bottom:0.3 rem}.dash{display:block;font-size:3rem;font-family:var(--serif,serif)}#confirmationInputs{margin:auto;display:grid;justify-content:space-between;grid-auto-flow:column}.auth-button{margin-top:1.4rem;height:3.4rem;width:100%;font-family:var(--sans-serif,sans-serif);font-size:1.6rem;color:white;background-color:var(--pink);border-color:var(--pink);border-radius:0.5rem;filter:drop-shadow(0.07rem 0.14rem 0.07rem rgb(0 0 0 / 0.4))}#confirmation-msg{display:inline;color:red}</style>",n(this,{target:this.shadowRoot,props:i(this.attributes),customElement:!0},x,g,s,{},null),t&&t.target&&a(t.target,this,t.anchor)}}customElements.define("confirmation-component",b);export{b as default};
