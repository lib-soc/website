import{S as t,i as o,a,b as e,k as n,s as i,t as r,e as s,c as m,n as l,f as p,d as c,g as h,h as u,o as d}from"./index-04d7984b.js";import{addMarkersGroups as g}from"../../../../../../../../../js/groups.js";import{addMarkersCoops as b}from"../../../../../../../../../js/coops.js";import{addMarkersCommunities as f}from"../../../../../../../../../js/communities.js";import"../../../../../../../../../js/components/map-component.js";function y(t){let o,a,n,i,d,g,b,f,y,w,j,x;return{c(){o=r("Are you against exploitation of one human being by another?\r\nDo you agree that we should cooperate and not compete with each other?\r\nIn that case, you are already a libertarian socialist. Join us \r\n\r\nFInd our group, community or cooperative near you and join in order to make a world we both envision a reality. \r\n\r\nNone of them near you? Not a problem! Join our WhatsApp group and we will help you get started.\r\n"),a=s("div"),n=s("div"),i=s("h1"),i.textContent="Join us",d=m(),g=s("div"),g.innerHTML="<p>1. Are you against dictatorship and in favor of democracy?</p> \n            <p>2. Are you against exploitation of one human being by another?</p> \n            <p>3. Do you agree that we should cooperate and not compete with each other?</p> \n            <p>If the answer is <b>YES</b>, then you are already a libertarian socialist. <b>JOIN US!</b></p>",b=m(),f=s("div"),f.innerHTML='<p>Find our</p> \n            <ol><li><a href="https://chat.whatsapp.com/BhnmUNljUxJ2AjeHUwyTKh">group</a>,</li>  \n                <li><a href="https://chat.whatsapp.com/BhnmUNljUxJ2AjeHUwyTKh">community</a> or</li>  \n                <li><a href="https://chat.whatsapp.com/BhnmUNljUxJ2AjeHUwyTKh">cooperative</a></li></ol> \n            <p>near you and join to help make a world we both envision a reality.</p>',y=m(),w=s("p"),w.innerHTML='None of them near you? Not a problem! Join our <a href="https://chat.whatsapp.com/BhnmUNljUxJ2AjeHUwyTKh" target="_blank" rel="noreferrer">WhatsApp group</a> and we will help you start your own.',j=m(),x=s("map-component"),this.c=l,p(g,"id","condition-list"),p(f,"id","call-to-action-list"),c(x,"id","map"),c(x,"callback",t[0]),p(n,"id","text-container"),p(a,"id","container")},m(t,r){e(t,o,r),e(t,a,r),h(a,n),h(n,i),h(n,d),h(n,g),h(n,b),h(n,f),h(n,y),h(n,w),h(n,j),h(n,x)},p:l,i:l,o:l,d(t){t&&u(o),t&&u(a)}}}function w(t,o,a){return d((()=>{})),[function(t){let o=t([51.505,-.09],3);g(o),b(o),f(o)}]}class j extends t{constructor(t){super(),this.shadowRoot.innerHTML="<style>@import '/css/common.css';#map{--height:30rem;--width:100%;--margin-bottom:3rem}ol>li{position:relative;font-size:1.2rem;font-family:var(--serif,serif);left:3rem}#condition-list{margin-bottom:2rem}#condition-list>p{margin-bottom:1rem}#text-container{max-width:calc(100vw - 4rem);margin:auto}h1{margin-bottom:1rem;font-size:2.5rem;text-align:center}#container{margin:auto;max-width:1200px;margin-top:1rem;margin-bottom:4rem}#container>div>p{margin-bottom:1rem}#call-to-action-list>p{margin-bottom:1rem}#call-to-action-list>:nth-child(2){margin-bottom:0rem}#call-to-action-list>ol>li{margin-bottom:0.5rem}#text-container a{font-size:1.2rem;color:#DD1C1A\n    }#container p{font-size:1.2rem;text-align:justify}</style>",o(this,{target:this.shadowRoot,props:a(this.attributes),customElement:!0},w,y,i,{mapCallback:0},null),t&&(t.target&&e(t.target,this,t.anchor),t.props&&(this.$set(t.props),n()))}static get observedAttributes(){return["mapCallback"]}get mapCallback(){return this.$$.ctx[0]}}customElements.define("join-us-component",j);export{j as default};