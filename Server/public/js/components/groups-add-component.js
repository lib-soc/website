import{S as t,i as n,a as e,b as i,u as o,s as r,e as l,n as a,d as s,c as u,g as c,o as p,f as m,h as d,j as f,k as b,l as g,m as h,r as w,x as v,t as y}from"./index-0d9f0c09.js";import{w as k}from"./index-1c123138.js";import{getData as x,loadLocaleContent as j,sendData as C}from"../../../../../../../../../js/libraries/serverTools.js";import{addMarkersEntries as $,translate as S}from"../../../../../../../../../js/libraries/mapTools.js";import{validatePosNumber as T}from"../../../../../../../../../js/libraries/miscTools.js";import"../../../../../../../../../js/components/map-component.js";function z(t){let n,e,o,l,a,u,c,p,m,v,y,k,x,j,L,C,$,S,T,z,A=t[7];function G(t,n){return t[14]?t[14]&&!t[8]?M:N:O}let E=G(t),U=E(t),I=H(t),R=!(t[14]&&t[8])&&J(t);return{c(){n=d("div"),e=d("button"),o=f(),l=d("div"),U.c(),a=f(),u=d("div"),c=d("label"),c.textContent="Location:",p=f(),m=d("div"),v=d("input"),y=f(),k=d("div"),x=f(),I.c(),j=f(),L=d("button"),L.textContent="Submit",C=f(),$=d("p"),S=f(),R&&R.c(),b(e,"class","close-button"),b(c,"for","address-input"),b(v,"id","address-input"),b(v,"type","text"),v.readOnly=!0,b(k,"class","ghost-input"),b(m,"class","input-wrapper"),b(u,"id","address-input-wrapper"),b(u,"class","input-label-wrapper"),b(L,"id","submit-button"),b($,"id","confirmation-msg"),b(l,"id","text-container"),b(n,"id","container")},m(r,s){i(r,n,s),g(n,e),g(n,o),g(n,l),U.m(l,null),g(l,a),g(l,u),g(u,c),g(u,p),g(u,m),g(m,v),t[33](v),g(m,y),g(m,k),g(l,x),I.m(l,null),g(l,j),g(l,L),g(l,C),g(l,$),t[39]($),g(l,S),R&&R.m(l,null),T||(z=[h(e,"click",t[13]),h(v,"input",t[34]),h(L,"click",t[17])],T=!0)},p(t,n){E===(E=G(t))&&U?U.p(t,n):(U.d(1),U=E(t),U&&(U.c(),U.m(l,a))),128&n[0]&&r(A,A=t[7])?(I.d(1),I=H(t),I.c(),I.m(l,j)):I.p(t,n),t[14]&&t[8]?R&&(R.d(1),R=null):R?R.p(t,n):(R=J(t),R.c(),R.m(l,null))},d(e){e&&s(n),U.d(),t[33](null),I.d(e),t[39](null),R&&R.d(),T=!1,w(z)}}}function N(t){let n,e,o,r;return{c(){n=d("div"),e=d("button"),e.textContent="Leave",b(n,"id","button-line")},m(l,a){i(l,n,a),g(n,e),t[30](e),t[32](n),o||(r=h(e,"click",t[31]),o=!0)},p:a,d(e){e&&s(n),t[30](null),t[32](null),o=!1,r()}}}function M(t){let n,e,o,r,l,a,u,c;return{c(){n=d("div"),e=d("button"),o=y("Move"),l=f(),a=d("button"),a.textContent="Leave",b(e,"style",r="display: "+(t[8]?"none":"initial")),b(n,"id","button-line")},m(r,s){i(r,n,s),g(n,e),g(e,o),t[25](e),g(n,l),g(n,a),t[27](a),t[29](n),u||(c=[h(e,"click",t[26]),h(a,"click",t[28])],u=!0)},p(t,n){256&n[0]&&r!==(r="display: "+(t[8]?"none":"initial"))&&b(e,"style",r)},d(e){e&&s(n),t[25](null),t[27](null),t[29](null),u=!1,w(c)}}}function O(t){let n,e,o,r,l,u;return{c(){n=d("div"),e=d("button"),e.textContent="Create",o=f(),r=d("button"),r.textContent="Join",b(n,"id","button-line")},m(a,s){i(a,n,s),g(n,e),t[20](e),g(n,o),g(n,r),t[22](r),t[24](n),l||(u=[h(e,"click",t[21]),h(r,"click",t[23])],l=!0)},p:a,d(e){e&&s(n),t[20](null),t[22](null),t[24](null),l=!1,w(u)}}}function A(t){let n,e,o,r,l,u,c;return{c(){n=d("div"),e=d("label"),e.textContent="Members:",o=f(),r=d("div"),l=d("input"),b(e,"for","members-input"),b(l,"id","members-input"),b(l,"type","number"),l.value=1,b(r,"class","input-wrapper"),b(n,"id","members-input-wrapper"),b(n,"class","input-label-wrapper")},m(a,s){i(a,n,s),g(n,e),g(n,o),g(n,r),g(r,l),t[35](l),u||(c=h(l,"input",t[36]),u=!0)},p:a,d(e){e&&s(n),t[35](null),u=!1,c()}}}function G(t){let n,e,o,r,l,u,c,p,m;return{c(){n=d("div"),e=d("label"),e.textContent="Contact:",o=f(),r=d("div"),l=d("input"),u=f(),c=d("div"),b(e,"for","contact-input"),b(l,"id","contact-input"),b(l,"type","text"),b(c,"class","ghost-input"),b(r,"class","input-wrapper"),b(n,"class","input-label-wrapper")},m(a,s){i(a,n,s),g(n,e),g(n,o),g(n,r),g(r,l),t[37](l),g(r,u),g(r,c),p||(m=h(l,"input",t[38]),p=!0)},p:a,d(e){e&&s(n),t[37](null),p=!1,m()}}}function H(t){let n,e,o=0==t[7]&&A(t),r=(0==t[7]||1==t[7])&&G(t);return{c(){o&&o.c(),n=f(),r&&r.c(),e=l()},m(t,l){o&&o.m(t,l),i(t,n,l),r&&r.m(t,l),i(t,e,l)},p(t,i){0==t[7]?o?o.p(t,i):(o=A(t),o.c(),o.m(n.parentNode,n)):o&&(o.d(1),o=null),0==t[7]||1==t[7]?r?r.p(t,i):(r=G(t),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null)},d(t){o&&o.d(t),t&&s(n),r&&r.d(t),t&&s(e)}}}function J(t){let n,e;return{c(){n=d("map-component"),v(n,"id","map"),v(n,"callback",e=t[40])},m(t,e){i(t,n,e)},p(t,i){1024&i[0]&&e!==(e=t[40])&&v(n,"callback",e)},d(t){t&&s(n)}}}function E(t){let n,e=3==t[9]&&z(t);return{c(){e&&e.c(),n=l()},m(t,o){e&&e.m(t,o),i(t,n,o)},p(t,i){3==t[9]?e?e.p(t,i):(e=z(t),e.c(),e.m(n.parentNode,n)):e&&(e.d(1),e=null)},d(t){e&&e.d(t),t&&s(n)}}}function U(t){let n,e=t[9],o=E(t);return{c(){o.c(),n=l(),this.c=a},m(t,e){o.m(t,e),i(t,n,e)},p(t,i){512&i[0]&&r(e,e=t[9])?(o.d(1),o=E(t),o.c(),o.m(n.parentNode,n)):o.p(t,i)},i:a,o:a,d(t){t&&s(n),o.d(t)}}}function I(t,n,e){let i=L.latLng(n,e);t.setLatLng(i)}function R(t){t.nextElementSibling.innerHTML=t.value}function _(t,n,e){let i,o,{map:r=null}=n,l=k(0);u(t,l,(t=>e(9,i=t)));let a,s,d,f,b,g=k({});u(t,g,(t=>e(10,o=t)));let h,w,v,y;x("/assets/groups.json",(t=>{a=JSON.parse(t),s={};for(let t of a){let n=t.country;null==t.contact&&(t.contact="https://discord.gg/Qk8KUk787z"),n in s?s[n].push(t):s[n]=[t]}l.update((t=>t+1))}));let z=["","",""],N={},M=function(t,n){let e=new L.Icon({iconUrl:"/img/common/markers/marker-black.png",shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]});return L.marker([t,n],{icon:e})}(0,0);M.setOpacity(0);let O,A=[],G=c("profile-component"),H=G.closeGroupsAdd,J=G.maps,E=G.onLoadedGroups,U=G.userGroups,_=G.user,D=0!=U.length,K=D?2:0;D&&(O=null!=U[0].status,O&&(K=3));let Q=j(g,"groups-component",l);function Y(t,n){x(`https://nominatim.openstreetmap.org/reverse?lat=${t}&lon=${n}&format=jsonv2`,(t=>{let n=(t=JSON.parse(t)).address,i=n.city||n.town||n.village||n.hamlet,o=n.state,r=n.country;null!=o?r+=", "+o:o="",null!=i?r+=", "+i:i="",e(3,w.value=r,w),R(w)}))}function q(t,n){x(`https://nominatim.openstreetmap.org/reverse?lat=${t}&lon=${n}&format=jsonv2&accept-language=en`,(t=>{let n=(t=JSON.parse(t)).address;if(null!=n){let t=n.city||n.town||n.village||n.hamlet,e=n.state,i=n.country;null!=e||(e=""),null!=t||(t=""),z=[i,e,t]}}))}function B(t,n,e){let i,o="<b>"+n.Group+"</b><br>";for(let r of["location","members","contact"]){let l=n[r]+": ";if("contact"==r)o+=l+"<a href='"+t.contact+"' target='_blank' rel=noreferrer>"+t.contact+"</a>";else if("location"==r){let r,a=[t.country,t.state,t.town].filter((t=>null!=t&&null!=t));r="en"==e?a.map((t=>t)).join(", "):a.map((t=>S(n,t))).join(", "),o+=l+r+"<br>",i=[t.latitude,t.longitude]}else o+=l+t[r]+"<br>"}return{text:o,coordinates:i}}function F(t,n,i){e(19,r=t([22,0],2)),J.groupsAdd=r,$(a,s,r,n,i,B,"green",{enableCountryGrouping:!1,pinCallback:V}),M.addTo(r),r.on("click",(function(t){if(0==K){let n=t.latlng.lat,e=t.latlng.lng;N.latitude=n,N.longitude=e,N.id=null,I(M,n,e),M.setOpacity(1),Y(n,e),q(n,e)}}))}function P(t){!1!==t?(0!=K||_.verified?e(2,h.innerHTML="Success!",h):e(2,h.innerHTML="You have been added to our database! Now go to our Discord to verify yourself.",h),e(2,h.style.color="green",h),0!=K&&1!=K||(U[0]={}),U[0].country=""==z[0]?null:z[0],U[0].state=""==z[1]?null:z[1],U[0].town=""==z[2]?null:z[2],U[0].members=N.members,E()):(e(2,h.innerHTML="Something went wrong.",h),e(2,h.style.color="red",h))}function V(t,n){if(1==K){let e=n.latlng.lat,i=n.latlng.lng;N.latitude=e,N.longitude=i,N.id=t.id,N.members=t.members,I(M,e,i),M.setOpacity(1),Y(e,i),q(e,i)}}function W(t){for(let t of A)null!=t&&(t.style.background="rgba(197, 43, 40, 0.319)",t.style.color="black");e(6,A[t].style.background="rgb(197, 43, 40)",A),e(6,A[t].style.color="white",A),e(7,K=t)}function X(){if(3==i)W(K),2!=K&&3!=K||e(3,w.value=function(t){if(null!=t)return[t.country,t.state,t.town].filter((t=>null!=t)).map((t=>"en"==Q?t:S(o,t))).join(", ");return"Create or join group"}(U[0]),w);else{setTimeout((()=>X()),100)}}j(g,"countries",l),p((()=>{X()}));return t.$$set=t=>{"map"in t&&e(19,r=t.map)},[f,b,h,w,v,y,A,K,O,i,o,l,g,H,D,Q,F,function(){if(""!=z[0]||3==K){let t,n;0==K?(t=y.value,n=v.value):1==K?n=v.value:2==K||3==K?(t="",n=""):3==K&&(t="",n="",z=[null,null,null],N.latitude=null,N.longitude=null),d={country:z[0],state:z[1],town:z[2],latitude:N.latitude,longitude:N.longitude,contact:""==n?null:n,members:""==t?null:parseInt(t),group_id:N.id,mode:K},""==d.state&&(d.state=null),""==d.town&&(d.town=null),C("/"+Q+"/groups-add-post/",d,P)}},W,r,function(t){m[t?"unshift":"push"]((()=>{A[0]=t,e(6,A)}))},()=>W(0),function(t){m[t?"unshift":"push"]((()=>{A[1]=t,e(6,A)}))},()=>W(1),function(t){m[t?"unshift":"push"]((()=>{b=t,e(1,b)}))},function(t){m[t?"unshift":"push"]((()=>{A[2]=t,e(6,A)}))},()=>W(2),function(t){m[t?"unshift":"push"]((()=>{A[3]=t,e(6,A)}))},()=>W(3),function(t){m[t?"unshift":"push"]((()=>{f=t,e(0,f)}))},function(t){m[t?"unshift":"push"]((()=>{A[3]=t,e(6,A)}))},()=>W(3),function(t){m[t?"unshift":"push"]((()=>{f=t,e(0,f)}))},function(t){m[t?"unshift":"push"]((()=>{w=t,e(3,w)}))},()=>R(w),function(t){m[t?"unshift":"push"]((()=>{y=t,e(5,y)}))},t=>T(t,y,1e4),function(t){m[t?"unshift":"push"]((()=>{v=t,e(4,v)}))},()=>R(v),function(t){m[t?"unshift":"push"]((()=>{h=t,e(2,h)}))},t=>F(t,o,Q)]}class D extends t{constructor(t){super(),this.shadowRoot.innerHTML="<style>@import '/css/common.css';#button-line{position:relative;width:fit-content;margin:auto;margin-top:1.5rem}#button-line button{font-family:var(--sans-serif,sans-serif);font-size:1.15rem;padding:1rem 0;width:7rem}#button-line :first-child{border-top-left-radius:1rem;border-bottom-left-radius:1rem;margin-right:0.1rem}#button-line :last-child{margin-left:0.1rem;border-top-right-radius:1rem;border-bottom-right-radius:1rem}.close-button{position:absolute;top:2rem;right:0rem;width:2rem;height:2rem;border:none;cursor:pointer;z-index:2}.close-button:hover{opacity:0.7}.close-button::before,.close-button::after{content:\"\";position:absolute;top:50%;left:50%;width:0.2rem;height:2rem;background-color:#000;border-radius:1rem}.close-button::before{transform:translate(-50%, -50%) rotate(45deg)}.close-button::after{transform:translate(-50%, -50%) rotate(-45deg)}#confirmation-msg{margin-top:0.5rem;margin-bottom:2rem}label{display:inline-block;font-family:var(--serif,serif);font-size:1.15rem;line-height:160%;color:#222222;width:6rem}input,.ghost-input{font-size:1.15rem;font-family:var(--serif,serif)}input{height:2.5rem;display:inline-block;position:relative}#address-input,#contact-input{width:100%}#address-input-wrapper{margin-top:2rem;margin-bottom:1rem}#members-input-wrapper{margin-bottom:1rem}#members-input{width:5rem}.ghost-input{display:block;visibility:hidden;height:0;padding-left:0.5rem;padding-right:0.5rem}.input-wrapper{display:inline-block;max-width:calc(100% - 5.5rem);min-width:min(20rem, calc(100% - 5.5rem));height:2.5rem}.input-label-wrapper{display:flex;justify-content:start}.input-label-wrapper label{position:relative;top:0.3rem}#submit-button{display:block;margin:auto;margin-top:2rem;padding:1rem 2rem;font-size:1.4rem;font-family:var(--sans-serif,sans-serif);border:0rem solid black;border-radius:0.5rem;background:#cb1816;color:white}#map{--height:30rem;--width:100%;--margin-top:2rem;--margin-bottom:0.5rem}#text-container{position:relative;max-width:calc(100vw - 4rem);margin:auto}#container{margin:auto;max-width:800px;margin-top:1rem;margin-bottom:4rem}#container p{text-align:justify}</style>",n(this,{target:this.shadowRoot,props:e(this.attributes),customElement:!0},_,U,r,{map:19},null,[-1,-1]),t&&(t.target&&i(t.target,this,t.anchor),t.props&&(this.$set(t.props),o()))}static get observedAttributes(){return["map"]}get map(){return this.$$.ctx[19]}set map(t){this.$$set({map:t}),o()}}customElements.define("groups-add-component",D);export{D as default};
