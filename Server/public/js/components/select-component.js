import{g as t,S as e,i as r,a as i,b as o,v as n,s,f as l,n as a,j as d,d as u,o as c,t as h,h as p,k as f,w as m,m as v,r as b,p as g,q as w,x as y}from"./index-3cab5f92.js";import{px2rem as x,getTextWidth as $,getCanvasFont as k}from"../../../../../../js/libraries/miscTools.js";const{customElements:z}=t;function L(t,e,r){const i=t.slice();return i[26]=e[r],i[27]=e,i[28]=r,i}function j(t){let e,r,i,n,s,a,d=t[26]+"",c=t[28];const f=()=>t[14](e,c),m=()=>t[14](null,c);function w(){return t[15](t[28])}return{c(){e=l("button"),r=l("span"),i=h(d),n=p(),e.value=t[28]},m(t,l){o(t,e,l),v(e,r),v(r,i),v(e,n),f(),s||(a=b(e,"click",w),s=!0)},p(e,r){t=e,4&r&&d!==(d=t[26]+"")&&g(i,d),c!==t[28]&&(m(),c=t[28],f())},d(t){t&&u(e),m(),s=!1,a()}}}function M(t){let e,r,i,n,s,a,c,y,x,$,k,z=(null!=t[0]?t[0]:"")+"",M=t[2],T=[];for(let e=0;e<M.length;e+=1)T[e]=j(L(t,M,e));return{c(){e=l("button"),r=l("div"),i=l("span"),n=h(z),s=p(),a=l("img"),y=p(),x=l("div");for(let t=0;t<T.length;t+=1)T[t].c();d(i,"id","current-options-span"),d(r,"id","current-options-div"),d(a,"id","arrow-down"),f(a.src,c="../assets/arrow_down.svg")||d(a,"src","../assets/arrow_down.svg"),d(a,"alt","arrow down"),d(e,"id","current-option-button"),d(x,"id","options-holder"),m(x,"display","none")},m(l,d){o(l,e,d),v(e,r),v(r,i),v(i,n),t[12](i),v(e,s),v(e,a),t[13](e),o(l,y,d),o(l,x,d);for(let t=0;t<T.length;t+=1)T[t].m(x,null);t[16](x),$||(k=b(e,"click",t[9]),$=!0)},p(t,e){if(1&e&&z!==(z=(null!=t[0]?t[0]:"")+"")&&g(n,z),1062&e){let r;for(M=t[2],r=0;r<M.length;r+=1){const i=L(t,M,r);T[r]?T[r].p(i,e):(T[r]=j(i),T[r].c(),T[r].m(x,null))}for(;r<T.length;r+=1)T[r].d(1);T.length=M.length}},d(r){r&&u(e),t[12](null),t[13](null),r&&u(y),r&&u(x),w(T,r),t[16](null),$=!1,k()}}}function T(t){let e,r=t[8],i=M(t);return{c(){e=l("div"),i.c(),this.c=a,d(e,"class","select")},m(r,n){o(r,e,n),i.m(e,null),t[17](e)},p(t,[o]){256&o&&s(r,r=t[8])?(i.d(1),i=M(t),i.c(),i.m(e,null)):i.p(t,o)},i:a,o:a,d(r){r&&u(e),i.d(r),t[17](null)}}}function E(t,e,r){let i,o,n,s,{callback:l=null}=e,{options:a=[""]}=e,{value:d=null}=e,{valueindex:u=null}=e,h=arguments[0],p=[],f=0,m=null;function v(t,e){if(null!==t){if(e.includes(t)){let i=e.findIndex((e=>e==t));r(6,n.innerHTML=t,n),r(5,p[i].style.display="none",p),r(11,u=i)}r(8,f+=1)}}function b(t,e){null!=t&&null!=e&&e[t]!=d&&(r(0,d=e[t]),r(8,f+=1))}function g(){"none"==o.style.display?r(4,o.style.display="initial",o):r(4,o.style.display="none",o)}function w(t,e){r(11,u=t),r(0,d=a[t]),null!=e&&null!=e&&e(t)}function z(){r(4,o.style.display="none",o)}function L(t,e){let r;if(null!=t&&null!=e){let i=getComputedStyle(t).getPropertyValue("--width");if(isNaN(i)||""==i){if(null==m)return m=new ResizeObserver((()=>L(t,e))),void m.observe(s);i=getComputedStyle(s).getPropertyValue("width"),r=x(parseFloat(i.slice(0,i.length-2)))}else r=parseFloat(i.slice(0,i.length-2));let o=[];for(let t=0;t<e.children.length;t++){let r=e.children[t].children[0],i=$(r.innerHTML,k(r));o.push(i)}let n=x(Math.max(...o));if(n>r){let t=1.1*n+"rem";e.style.width=t;for(let r=0;r<e.children.length;r++){e.children[r].style.width=t}e.style.marginLeft=-(1.1*n-r)/2-.05+"rem"}else{let t=r+.1+"rem";for(let r=0;r<e.children.length;r++){e.children[r].style.width=t}}}}function j(t){y[t?"unshift":"push"]((()=>{n=t,r(6,n)}))}function M(t){y[t?"unshift":"push"]((()=>{s=t,r(7,s)}))}function T(t,e){y[t?"unshift":"push"]((()=>{p[e]=t,r(5,p)}))}c((()=>{h.addEventListener("focusout",z)}));const E=t=>w(t,l);function H(t){y[t?"unshift":"push"]((()=>{o=t,r(4,o)}))}function R(t){y[t?"unshift":"push"]((()=>{i=t,r(3,i)}))}return t.$$set=t=>{"callback"in t&&r(1,l=t.callback),"options"in t&&r(2,a=t.options),"value"in t&&r(0,d=t.value),"valueindex"in t&&r(11,u=t.valueindex)},t.$$.update=()=>{5&t.$$.dirty&&v(d,a),2052&t.$$.dirty&&b(u,a),24&t.$$.dirty&&L(i,o)},[d,l,a,i,o,p,n,s,f,g,w,u,j,M,T,E,H,R]}class H extends e{constructor(t){super(),this.shadowRoot.innerHTML="<style>@import '/css/common.css';#current-options-div{position:relative;overflow:hidden;width:calc(100% - 2.5rem);text-align:var(--text-align,left);padding-top:0.5rem}#arrow-down{right:0.5rem;width:1.365rem;position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}.select{position:relative;margin-top:var(--margin-top,0);width:var(--width);max-width:var(--max-width);height:var(--height,2.75rem);border:var(--border,rgba(0,0,0,var(--opacity,1)) solid);border-width:var(--border-width, 0.063rem);border-radius:var(--border-radius,0.126rem)}.select button{width:var(--width);max-width:var(--max-width)}#current-option-button,#current-option-button *{opacity:var(--opacity,1);font-family:var(--font-family,var(--serif), serif);font-size:var(--font-size, 1.3rem)}.select>:first-child{margin-right:-2.75rem;padding-right:0.0rem}.select span{position:relative;padding-top:0.5rem;white-space:nowrap}#current-option-button{display:flex;width:100%;height:100%;padding-left:0.341rem;font-weight:var(--font-weight,400)}#options-holder{position:absolute;margin-top:calc(-1 * var(--border-width, 0.063rem));background:white;z-index:1;margin-left:-0.05rem;border-radius:var(--border-radius-options,0.126rem)}#options-holder *{font-size:var(--options-font-size, 1.2rem);font-family:var(--font-family,var(--serif), serif)}#options-holder button{display:flex;position:relative;width:var(--width);background:white;font-weight:400;text-align:var(--text-align,left);padding-top:0.341rem;padding-bottom:0.341rem;padding-right:3.515rem;padding-left:0.341rem}#options-holder button:hover{background:#cdcdcd}#options-holder button{border:black solid;border-width:0 var(--border-width-options,var(--border-width, 0.063rem)) 0 var(--border-width-options,var(--border-width, 0.063rem))}#options-holder>:first-child{border-top:black solid var(--border-width-options,var(--border-width, 0.063rem));border-top-left-radius:var(--border-radius-options,0.126rem);border-top-right-radius:var(--border-radius-options,0.126rem)}#options-holder>:last-child{border-bottom:black solid var(--border-width-options,var(--border-width, 0.063rem));border-bottom-left-radius:var(--border-radius-options,0.126rem);border-bottom-right-radius:var(--border-radius-options,0.126rem)}</style>",r(this,{target:this.shadowRoot,props:i(this.attributes),customElement:!0},E,T,s,{callback:1,options:2,value:0,valueindex:11},null),t&&(t.target&&o(t.target,this,t.anchor),t.props&&(this.$set(t.props),n()))}static get observedAttributes(){return["callback","options","value","valueindex"]}get callback(){return this.$$.ctx[1]}set callback(t){this.$$set({callback:t}),n()}get options(){return this.$$.ctx[2]}set options(t){this.$$set({options:t}),n()}get value(){return this.$$.ctx[0]}set value(t){this.$$set({value:t}),n()}get valueindex(){return this.$$.ctx[11]}set valueindex(t){this.$$set({valueindex:t}),n()}}z.define("select-component",H);export{H as default};
