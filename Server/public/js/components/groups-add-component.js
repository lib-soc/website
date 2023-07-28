import{S as t,i as e,a as n,b as o,s as i,e as r,n as a,d as s,c as l,o as c,f as m,g as p,h as u,j as d,k as g,l as f,m as h,p as b,r as w}from"./index-8c09578c.js";import{w as y}from"./index-77787e10.js";import{getData as v,loadLocaleContent as x,sendData as k}from"../../../../../../../../../js/libraries/serverTools.js";import{addMarkersEntries as j,translate as S}from"../../../../../../../../../js/libraries/mapTools.js";import"../../../../../../../../../js/components/map-component.js";function z(t){let e,n,i,r,a,l,c,m,y,v,x,k,j,L,S,z,T,C,N,O,H,M,A,$,E,J,U,q,D,G,I,R,K,P,Q;return{c(){e=p("div"),n=p("div"),i=p("h1"),i.textContent="Add a Group",r=u(),a=p("img"),c=u(),m=p("p"),m.textContent="If there are no groups in your town with whom you can organize then do the following:",y=u(),v=p("ol"),v.innerHTML="<li>Click on the map to show us where you are located;</li> \n                    <li>Add a way to contact you or leave blank for a pin to point to our discord;</li> \n                    <li>Press &quot;Submit&quot; to add yourself to our map;</li> \n                    <li>Verify yourself by having a chat with us at our Discord server to show on the map;</li>",x=u(),k=p("div"),j=p("label"),j.textContent="Location:",L=u(),S=p("div"),z=p("input"),T=u(),C=p("div"),N=u(),O=p("div"),H=p("label"),H.textContent="Contact:",M=u(),A=p("div"),$=p("input"),E=u(),J=p("div"),U=u(),q=p("button"),q.textContent="Submit",D=u(),G=p("p"),I=u(),R=p("map-component"),d(a,"id","groups-img"),g(a.src,l="/img/common/groups.svg")||d(a,"src","/img/common/groups.svg"),d(a,"alt","groups"),d(m,"class","description"),d(j,"for","address-input"),d(z,"id","address-input"),d(z,"type","text"),z.readOnly=!0,d(C,"class","ghost-input"),d(S,"class","input-wrapper"),d(k,"id","address-input-wrapper"),d(k,"class","input-label-wrapper"),d(H,"for","contact-input"),d($,"id","contact-input"),d($,"type","text"),d(J,"class","ghost-input"),d(A,"class","input-wrapper"),d(O,"class","input-label-wrapper"),d(q,"id","submit-button"),d(G,"id","confirmation-msg"),f(R,"id","map"),f(R,"callback",K=t[15]),d(n,"id","text-container"),d(e,"id","container")},m(s,l){o(s,e,l),h(e,n),h(n,i),h(n,r),h(n,a),h(n,c),h(n,m),h(n,y),h(n,v),h(n,x),h(n,k),h(k,j),h(k,L),h(k,S),h(S,z),t[10](z),h(S,T),h(S,C),h(n,N),h(n,O),h(O,H),h(O,M),h(O,A),h(A,$),t[12]($),h(A,E),h(A,J),h(n,U),h(n,q),h(n,D),h(n,G),t[14](G),h(n,I),h(n,R),P||(Q=[b(z,"input",t[11]),b($,"input",t[13]),b(q,"click",t[9])],P=!0)},p(t,e){16&e&&K!==(K=t[15])&&f(R,"callback",K)},d(n){n&&s(e),t[10](null),t[12](null),t[14](null),P=!1,w(Q)}}}function T(t){let e,n=3==t[3]&&z(t);return{c(){n&&n.c(),e=r()},m(t,i){n&&n.m(t,i),o(t,e,i)},p(t,o){3==t[3]?n?n.p(t,o):(n=z(t),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(t){n&&n.d(t),t&&s(e)}}}function C(t){let e,n=t[3],l=T(t);return{c(){l.c(),e=r(),this.c=a},m(t,n){l.m(t,n),o(t,e,n)},p(t,[o]){8&o&&i(n,n=t[3])?(l.d(1),l=T(t),l.c(),l.m(e.parentNode,e)):l.p(t,o)},i:a,o:a,d(t){t&&s(e),l.d(t)}}}function N(t){t.nextElementSibling.innerHTML=t.value}function O(t,e,n){let o,i,r=y(0);l(t,r,(t=>n(3,o=t)));let a,s,p=y({});l(t,p,(t=>n(4,i=t)));let u,d,g,f;v("/assets/groups.json",(t=>{a=JSON.parse(t),s={};for(let t of a){let e=t.country;null==t.contact&&(t.contact="https://discord.gg/Qk8KUk787z"),e in s?s[e].push(t):s[e]=[t]}r.update((t=>t+1))}));let h=0,b=0,w=function(t,e){let n=new L.Icon({iconUrl:"/img/common/markers/marker-black.png",shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]});return L.marker([t,e],{icon:n})}(0,0);w.setOpacity(0);let z=x(p,"groups-component",r);function T(t,e,n){let o,i="<b>"+e.Group+"</b><br>";for(let r of["location","members","contact"]){let a=e[r]+": ";if("contact"==r)i+=a+"<a href='"+t.contact+"' target='_blank' rel=noreferrer>"+t.contact+"</a>";else if("location"==r){let r,s=[t.country,t.state,t.town].filter((t=>null!=t&&null!=t));r="en"==n?s.map((t=>t)).join(", "):s.map((t=>S(e,t))).join(", "),i+=a+r+"<br>",o=[t.latitude,t.longitude]}else i+=a+t[r]+"<br>"}return{text:i,coordinates:o}}function C(t,e,o){let i=t([22,0],2);j(a,s,i,e,o,T,"green"),w.addTo(i),i.on("click",(function(t){let e=t.latlng.lat,o=t.latlng.lng;h=e,b=o,function(t,e,n){let o=L.latLng(e,n);t.setLatLng(o)}(w,e,o),w.setOpacity(1),v(`https://nominatim.openstreetmap.org/reverse?lat=${e}&lon=${o}&format=jsonv2`,(t=>{let e=(t=JSON.parse(t)).address,o=e.city||e.town||e.village||e.hamlet,i=e.state,r=e.country;null!=i?r+=", "+i:i="",null!=o?r+=", "+o:o="",n(1,d.value=r,d),N(d)})),function(t,e){v(`https://nominatim.openstreetmap.org/reverse?lat=${t}&lon=${e}&format=jsonv2&accept-language=en`,(t=>{let e=(t=JSON.parse(t)).address,n=e.city||e.town||e.village||e.hamlet,o=e.state,i=e.country;null!=o||(o=""),null!=n||(n=""),f=[i,o,n]}))}(e,o)}))}function O(t){!1!==t?(n(0,u.innerHTML="You have been added to our database! Now go to our Discord to verify yourself.",u),n(0,u.style.color="green",u)):(n(0,u.innerHTML="Something went wrong.",u),n(0,u.style.color="red",u))}x(p,"countries",r),c((()=>{}));return[u,d,g,o,i,r,p,z,C,function(){if(null!=f){let t={country:f[0],state:f[1],town:f[2],latitude:h,longitude:b,contact:g.value};""==t.state&&(t.state=null),""==t.town&&(t.town=null),""==t.contact&&(t.contact=null),k("/"+z+"/groups-add-post/",t,O)}},function(t){m[t?"unshift":"push"]((()=>{d=t,n(1,d)}))},()=>N(d),function(t){m[t?"unshift":"push"]((()=>{g=t,n(2,g)}))},()=>N(g),function(t){m[t?"unshift":"push"]((()=>{u=t,n(0,u)}))},t=>C(t,i,z)]}class H extends t{constructor(t){super(),this.shadowRoot.innerHTML="<style>@import '/css/common.css';#confirmation-msg{margin-top:0.5rem;margin-bottom:2rem}ol li{margin-left:3rem;margin-bottom:0.5rem}label{display:inline-block;font-family:var(--serif,serif);font-size:1.15rem;line-height:160%;color:#222222;width:5.5rem}input,.ghost-input{font-size:1.15rem;font-family:var(--serif,serif)}input{height:2.5rem;display:inline-block;position:relative}#address-input,#contact-input{width:100%}#address-input-wrapper{margin-top:2rem;margin-bottom:1rem}.ghost-input{display:block;visibility:hidden;height:0;padding-left:0.5rem;padding-right:0.5rem}.input-wrapper{display:inline-block;max-width:calc(100% - 5.5rem);min-width:min(20rem, calc(100% - 5.5rem));height:2.5rem}.input-label-wrapper{display:flex;justify-content:start}.input-label-wrapper label{position:relative;top:0.3rem}.description{margin-bottom:1rem}#submit-button{display:block;margin:auto;margin-top:2rem;padding:1rem 2rem;font-size:1.4rem;font-family:var(--sans-serif,sans-serif);border:0rem solid black;border-radius:0.5rem;background:#cb1816;color:white}#groups-img{position:absolute;width:14rem;left:50%;transform:translate(-50%);z-index:0;opacity:0.2}#text-container>:nth-child(3){margin-top:8rem}#map{--height:30rem;--width:100%;--margin-top:2rem;--margin-bottom:0.5rem}#text-container{position:relative;max-width:calc(100vw - 4rem);margin:auto}h1{margin-bottom:1rem;font-size:2.2rem;text-align:center}#container{margin:auto;max-width:800px;margin-top:1rem;margin-bottom:4rem}#container p{text-align:justify}</style>",e(this,{target:this.shadowRoot,props:n(this.attributes),customElement:!0},O,C,i,{},null),t&&t.target&&o(t.target,this,t.anchor)}}customElements.define("groups-add-component",H);export{H as default};
