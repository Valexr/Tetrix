var St="tetrix";var Ct={type:"git",url:"https://github.com/Valexr/Tetrix"};function b(){}function dt(t){return t()}function Ot(){return Object.create(null)}function j(t){t.forEach(dt)}function P(t){return typeof t=="function"}function T(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function At(t){return Object.keys(t).length===0}function _t(t,...e){if(t==null)return b;let n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function F(t){let e;return _t(t,n=>e=n)(),e}function L(t,e,n){t.$$.on_destroy.push(_t(e,n))}function Tt(t){return t&&P(t.destroy)?t.destroy:b}var jt=!1;function te(){jt=!0}function ee(){jt=!1}function _(t,e){t.appendChild(e)}function x(t,e,n){t.insertBefore(e,n||null)}function v(t){t.parentNode&&t.parentNode.removeChild(t)}function nt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function O(t){return document.createTextNode(t)}function M(){return O(" ")}function ut(){return O("")}function I(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function m(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ot(t){return t===""?null:+t}function ne(t){return Array.from(t.childNodes)}function W(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function rt(t,e){t.value=e??""}function it(t,e,n,o){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}function pt(t,e){for(let n=0;n<t.options.length;n+=1){let o=t.options[n];if(o.__value===e){o.selected=!0;return}}t.selectedIndex=-1}function Nt(t){let e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function J(t,e,n){t.classList[n?"add":"remove"](e)}var mt;function tt(t){mt=t}var U=[];var Mt=[],lt=[],Dt=[],oe=Promise.resolve(),ft=!1;function re(){ft||(ft=!0,oe.then(qt))}function et(t){lt.push(t)}var at=new Set,Y=0;function qt(){if(Y!==0)return;let t=mt;do{try{for(;Y<U.length;){let e=U[Y];Y++,tt(e),ie(e.$$)}}catch(e){throw U.length=0,Y=0,e}for(tt(null),U.length=0,Y=0;Mt.length;)Mt.pop()();for(let e=0;e<lt.length;e+=1){let n=lt[e];at.has(n)||(at.add(n),n())}lt.length=0}while(U.length);for(;Dt.length;)Dt.pop()();ft=!1,at.clear(),tt(t)}function ie(t){if(t.fragment!==null){t.update(),j(t.before_update);let e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(et)}}var ct=new Set,z;function ht(){z={r:0,c:[],p:z}}function yt(){z.r||j(z.c),z=z.p}function D(t,e){t&&t.i&&(ct.delete(t),t.i(e))}function N(t,e,n,o){if(t&&t.o){if(ct.has(t))return;ct.add(t),z.c.push(()=>{ct.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}else o&&o()}var Se=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function V(t){t&&t.c()}function G(t,e,n,o){let{fragment:i,after_update:s}=t.$$;i&&i.m(e,n),o||et(()=>{let l=t.$$.on_mount.map(dt).filter(P);t.$$.on_destroy?t.$$.on_destroy.push(...l):j(l),t.$$.on_mount=[]}),s.forEach(et)}function B(t,e){let n=t.$$;n.fragment!==null&&(j(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function se(t,e){t.$$.dirty[0]===-1&&(U.push(t),re(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function q(t,e,n,o,i,s,l,u=[-1]){let r=mt;tt(t);let c=t.$$={fragment:null,ctx:[],props:s,update:b,not_equal:i,bound:Ot(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(r?r.$$.context:[])),callbacks:Ot(),dirty:u,skip_bound:!1,root:e.target||r.$$.root};l&&l(c.root);let a=!1;if(c.ctx=n?n(t,e.props||{},(f,d,...y)=>{let g=y.length?y[0]:d;return c.ctx&&i(c.ctx[f],c.ctx[f]=g)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](g),a&&se(t,f)),d}):[],c.update(),a=!0,j(c.before_update),c.fragment=o?o(c.ctx):!1,e.target){if(e.hydrate){te();let f=ne(e.target);c.fragment&&c.fragment.l(f),f.forEach(v)}else c.fragment&&c.fragment.c();e.intro&&D(t.$$.fragment),G(t,e.target,e.anchor,e.customElement),ee(),qt()}tt(r)}var le;typeof HTMLElement=="function"&&(le=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){let{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(dt).filter(P);for(let e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){j(this.$$.on_disconnect)}$destroy(){B(this,1),this.$destroy=b}$on(t,e){if(!P(e))return b;let n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{let o=n.indexOf(e);o!==-1&&n.splice(o,1)}}$set(t){this.$$set&&!At(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});var A=class{$destroy(){B(this,1),this.$destroy=b}$on(e,n){if(!P(n))return b;let o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{let i=o.indexOf(n);i!==-1&&o.splice(i,1)}}$set(e){this.$$set&&!At(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}};var K=[];function Rt(t,e){return{subscribe:X(t,e).subscribe}}function X(t,e=b){let n,o=new Set;function i(u){if(T(t,u)&&(t=u,n)){let r=!K.length;for(let c of o)c[1](),K.push(c,t);if(r){for(let c=0;c<K.length;c+=2)K[c][0](K[c+1]);K.length=0}}}function s(u){i(u(t))}function l(u,r=b){let c=[u,r];return o.add(c),o.size===1&&(n=e(i)||b),u(t),()=>{o.delete(c),o.size===0&&(n(),n=null)}}return{set:i,update:s,subscribe:l}}function st(t,e,n){return Math.min(Math.max(e,t),n)}function Lt(t){return Math.floor(Math.random()*t)}function Z(t,e){return t.x===e.x&&t.y===e.y}var H=Rt({width:10,height:20});function ce(){let{subscribe:t,set:e,update:n}=X();e({state:"",score:0,speed:1});function o(s){n(l=>Object.assign(l,{state:s}))}function i(s){n(l=>Object.assign(l,{score:s}))}return{subscribe:t,state:o,score:i,set:e,start(){i(0),o("play"),R.clear(),S.random(),bt()},pause(){o("pause")},resume(){o("play"),bt()},stop(){o("stop")},scoreup(){n(s=>Object.assign(s,{score:s.score+gt*F(H).width*s.speed}))},speedup(){n(s=>Object.assign(s,{speed:st(1,s.speed+1,10)}))}}}var w=ce(),Pt=!1,gt=0;function bt(){setTimeout(()=>{F(w).state==="play"&&(ue(),bt())},900-80*F(w).speed)}function ue(){R.full()&&w.stop(),Pt=S.move("Down"),Pt&&(R.add(F(S)),gt=R.check(),w.scoreup(),gt&&!(F(w).score%100)&&w.speedup(),S.random())}function ae(){let{subscribe:t,set:e,update:n}=X([]);return{subscribe:t,set:e,clear(){e([])},add(o){n(i=>i.concat(o))},include(o){return F(this).some(i=>o.some(s=>Z(i,s)))},check(){let o=[];function i(s,{y:l}){return s[l]=s[l]||0,s[l]+=1,s}return n(s=>{let l=s.reduce(i,{});if(o=Object.keys(l).filter(u=>l[u]===F(H).width).map(Number),o.length){let u=s.filter(({y:r})=>!o.includes(r));for(let r of o)u=u.map(({x:c,y:a})=>(a=r>a?a+1:a,{x:c,y:a}));return u}return s}),o.length},full(){return F(this).some(({y:o})=>!o)}}}var R=ae();var Q={B:[{x:4,y:-2},{x:5,y:-2},{x:4,y:-1},{x:5,y:-1}],I:[{x:4,y:-4},{x:4,y:-3},{x:4,y:-2},{x:4,y:-1}],T:[{x:3,y:-2},{x:4,y:-2},{x:5,y:-2},{x:4,y:-1}],L:[{x:4,y:-3},{x:4,y:-2},{x:4,y:-1},{x:5,y:-1}],J:[{x:5,y:-3},{x:5,y:-2},{x:5,y:-1},{x:4,y:-1}],Z:[{x:3,y:-2},{x:4,y:-2},{x:4,y:-1},{x:5,y:-1}],S:[{x:3,y:-1},{x:4,y:-1},{x:4,y:-2},{x:5,y:-2}]};function fe(){let{subscribe:t,set:e,update:n}=X([]),o={Up:{x:0,y:-1},Down:{x:0,y:1},Left:{x:-1,y:0},Right:{x:1,y:0}},i="";return{subscribe:t,set:e,name:i,random(){let s=Object.keys(Q);i=s[Lt(s.length)],e(Q[i])},move(s){let l=!1,u=!1;return n(r=>{let a=typeof s=="object"?s:o[s],f=r.map(({x:g,y:$})=>({x:g+a.x,y:$+a.y})),{width:d,height:y}=F(H);return l=f.some(({x:g,y:$})=>g<0||g>=d||$>=y),u=R.include(f)||f.some(({x:g,y:$})=>$>=y),u||l?r:f}),u},rotate(){let s=F(this)[1],l=r=>s.y-r.y+s.x,u=r=>s.y-s.x+r.x;i!=="B"&&n(r=>{let{width:c,height:a}=F(H),f=r.map(g=>({x:l(g),y:u(g)})),d=f.some(({x:g,y:$})=>g<0||g>=c||$>=a),y=R.include(f);return d||y?r:f})},include(s){return F(this).some(l=>Z(s,l))}}}var S=fe();function Bt(t,e,n){let o=t.slice();return o[5]=e[n][0],o[6]=e[n][1],o}function de(t){let e,n=t[0].state==="pause"?"Resume":"Start",o,i,s,l,u,r=t[0].state!=="pause"&&Ht(t);return{c(){e=h("button"),o=O(n),i=M(),r&&r.c(),s=ut(),m(e,"class","lg")},m(c,a){x(c,e,a),_(e,o),x(c,i,a),r&&r.m(c,a),x(c,s,a),l||(u=I(e,"click",function(){P(t[0].state==="pause"?w.resume:w.start)&&(t[0].state==="pause"?w.resume:w.start).apply(this,arguments)}),l=!0)},p(c,a){t=c,a&1&&n!==(n=t[0].state==="pause"?"Resume":"Start")&&W(o,n),t[0].state!=="pause"?r?r.p(t,a):(r=Ht(t),r.c(),r.m(s.parentNode,s)):r&&(r.d(1),r=null)},d(c){c&&v(e),c&&v(i),r&&r.d(c),c&&v(s),l=!1,u()}}}function _e(t){let e,n,o,i,s;return{c(){e=h("button"),e.textContent="Pause",n=M(),o=h("button"),o.textContent="Stop"},m(l,u){x(l,e,u),x(l,n,u),x(l,o,u),i||(s=[I(e,"click",w.pause),I(o,"click",w.stop)],i=!0)},p:b,d(l){l&&v(e),l&&v(n),l&&v(o),i=!1,j(s)}}}function Ht(t){let e,n,o,i,s,l,u,r,c,a,f,d,y,g,$=Object.entries(Q),k=[];for(let p=0;p<$.length;p+=1)k[p]=zt(Bt(t,$,p));return{c(){e=h("fieldset"),n=h("label"),o=O(`Speed
                        `),i=h("input"),s=M(),l=h("label"),u=O(`Fugure
                        `),r=h("select");for(let p=0;p<k.length;p+=1)k[p].c();c=M(),a=h("label"),f=O(`Heap
                        `),d=h("input"),m(i,"type","number"),m(i,"min","1"),m(i,"max","10"),m(i,"maxlength","2"),m(i,"size","3"),t[1]===void 0&&et(()=>t[3].call(r)),m(d,"type","number"),m(d,"min","1"),m(d,"max","10"),m(d,"maxlength","2"),m(d,"size","3")},m(p,C){x(p,e,C),_(e,n),_(n,o),_(n,i),rt(i,t[0].speed),_(e,s),_(e,l),_(l,u),_(l,r);for(let E=0;E<k.length;E+=1)k[E].m(r,null);pt(r,t[1]),_(e,c),_(e,a),_(a,f),_(a,d),rt(d,t[0].speed),y||(g=[I(i,"input",t[2]),I(r,"change",t[3]),I(d,"input",t[4])],y=!0)},p(p,C){if(C&1&&ot(i.value)!==p[0].speed&&rt(i,p[0].speed),C&0){$=Object.entries(Q);let E;for(E=0;E<$.length;E+=1){let kt=Bt(p,$,E);k[E]?k[E].p(kt,C):(k[E]=zt(kt),k[E].c(),k[E].m(r,null))}for(;E<k.length;E+=1)k[E].d(1);k.length=$.length}C&2&&pt(r,p[1]),C&1&&ot(d.value)!==p[0].speed&&rt(d,p[0].speed)},d(p){p&&v(e),nt(k,p),y=!1,j(g)}}}function zt(t){let e,n=t[5]+"",o,i;return{c(){e=h("option"),o=O(n),e.__value=i=t[6],e.value=e.__value},m(s,l){x(s,e,l),_(e,o)},p:b,d(s){s&&v(e)}}}function pe(t){let e,n;function o(l,u){return l[0].state==="play"?_e:de}let i=o(t,-1),s=i(t);return{c(){e=h("footer"),n=h("nav"),s.c(),J(n,"playing",t[0].state==="play")},m(l,u){x(l,e,u),_(e,n),s.m(n,null)},p(l,[u]){i===(i=o(l,u))&&s?s.p(l,u):(s.d(1),s=i(l),s&&(s.c(),s.m(n,null))),u&1&&J(n,"playing",l[0].state==="play")},i:b,o:b,d(l){l&&v(e),s.d()}}}function me(t,e,n){let o,i;L(t,w,r=>n(0,o=r)),L(t,S,r=>n(1,i=r));function s(){o.speed=ot(this.value),w.set(o)}function l(){i=Nt(this),S.set(i),Q}function u(){o.speed=ot(this.value),w.set(o)}return[o,i,s,l,u]}var vt=class extends A{constructor(e){super(),q(this,e,me,pe,T,{})}},It=vt;function he(t){let e,n,o;return{c(){e=h("span"),m(e,"class","pixel"),m(e,"data-x",n=t[0].x),m(e,"data-y",o=t[0].y),J(e,"fill",t[1])},m(i,s){x(i,e,s)},p(i,[s]){s&1&&n!==(n=i[0].x)&&m(e,"data-x",n),s&1&&o!==(o=i[0].y)&&m(e,"data-y",o),s&2&&J(e,"fill",i[1])},i:b,o:b,d(i){i&&v(e)}}}function ye(t,e,n){let o,{filled:i}=e,{pixel:s}=e;return t.$$set=l=>{"filled"in l&&n(2,i=l.filled),"pixel"in l&&n(0,s=l.pixel)},t.$$.update=()=>{if(t.$$.dirty&5)t:n(1,o=i.some(l=>Z(s,l)))},[s,o,i]}var wt=class extends A{constructor(e){super(),q(this,e,ye,he,T,{filled:2,pixel:0})}},Gt=wt;function Xt(t){window.onkeydown=r=>e(r),t.onclick=r=>n(r),t.onpointerdown=r=>s(r);function e(r){if(F(w).state==="play")if(r.key.includes("Arrow")){let c=r.key.replace("Arrow","");c==="Up"?S.rotate():S.move(c)}else r.key.includes("Escape")&&(r.preventDefault(),w.pause())}function n(r){if(F(w).state!=="play")return;let{dataset:{x:c,y:a}}=r.target;if(c&&a){let f={x:Number(c),y:Number(a)};S.include(f)&&S.rotate()}}let o=0,i=0;function s(r){o=r.clientX,i=r.clientY,t.onpointermove=c=>l(c),t.onpointerup=()=>u(),t.onpointerleave=()=>u()}function l(r){let{clientX:c,clientY:a,currentTarget:f}=r,d=c-o,y=a-i,g=Math.abs(d)>=Math.abs(y);o=r.clientX,i=r.clientY,S.move({x:st(-1,d,1),y:g?0:st(0,y,1)})}function u(){t.onpointermove=null}}function Yt(t,e,n){let o=t.slice();return o[3]=e[n],o[5]=n,o}function Ut(t,e,n){let o=t.slice();return o[3]=e[n],o[7]=n,o}function Wt(t){let e,n;return e=new Gt({props:{pixel:{x:t[7],y:t[5]},filled:[...t[1],...t[2]]}}),{c(){V(e.$$.fragment)},m(o,i){G(e,o,i),n=!0},p(o,i){let s={};i&6&&(s.filled=[...o[1],...o[2]]),e.$set(s)},i(o){n||(D(e.$$.fragment,o),n=!0)},o(o){N(e.$$.fragment,o),n=!1},d(o){B(e,o)}}}function Jt(t){let e,n,o={length:t[0].width},i=[];for(let l=0;l<o.length;l+=1)i[l]=Wt(Ut(t,o,l));let s=l=>N(i[l],1,1,()=>{i[l]=null});return{c(){for(let l=0;l<i.length;l+=1)i[l].c();e=ut()},m(l,u){for(let r=0;r<i.length;r+=1)i[r].m(l,u);x(l,e,u),n=!0},p(l,u){if(u&7){o={length:l[0].width};let r;for(r=0;r<o.length;r+=1){let c=Ut(l,o,r);i[r]?(i[r].p(c,u),D(i[r],1)):(i[r]=Wt(c),i[r].c(),D(i[r],1),i[r].m(e.parentNode,e))}for(ht(),r=o.length;r<i.length;r+=1)s(r);yt()}},i(l){if(!n){for(let u=0;u<o.length;u+=1)D(i[u]);n=!0}},o(l){i=i.filter(Boolean);for(let u=0;u<i.length;u+=1)N(i[u]);n=!1},d(l){nt(i,l),l&&v(e)}}}function ge(t){let e,n,o,i,s,l,u={length:t[0].height},r=[];for(let a=0;a<u.length;a+=1)r[a]=Jt(Yt(t,u,a));let c=a=>N(r[a],1,1,()=>{r[a]=null});return{c(){e=h("main"),n=h("section");for(let a=0;a<r.length;a+=1)r[a].c();m(n,"id","board"),it(n,"--cols",t[0].width),it(n,"--rows",t[0].height)},m(a,f){x(a,e,f),_(e,n);for(let d=0;d<r.length;d+=1)r[d].m(n,null);i=!0,s||(l=Tt(o=Xt.call(null,n)),s=!0)},p(a,[f]){if(f&7){u={length:a[0].height};let d;for(d=0;d<u.length;d+=1){let y=Yt(a,u,d);r[d]?(r[d].p(y,f),D(r[d],1)):(r[d]=Jt(y),r[d].c(),D(r[d],1),r[d].m(n,null))}for(ht(),d=u.length;d<r.length;d+=1)c(d);yt()}(!i||f&1)&&it(n,"--cols",a[0].width),(!i||f&1)&&it(n,"--rows",a[0].height)},i(a){if(!i){for(let f=0;f<u.length;f+=1)D(r[f]);i=!0}},o(a){r=r.filter(Boolean);for(let f=0;f<r.length;f+=1)N(r[f]);i=!1},d(a){a&&v(e),nt(r,a),s=!1,l()}}}function be(t,e,n){let o,i,s;return L(t,H,l=>n(0,o=l)),L(t,S,l=>n(1,i=l)),L(t,R,l=>n(2,s=l)),[o,i,s]}var xt=class extends A{constructor(e){super(),q(this,e,be,ge,T,{})}},Vt=xt;var Kt='<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="currentColor"/></svg>';function we(t){let e,n,o,i=t[2].score+"",s,l,u,r,c,a,f,d,y,g,$=t[2].speed+"",k;return{c(){e=h("header"),n=h("p"),o=O("Score: "),s=O(i),l=M(),u=h("h1"),r=h("a"),a=M(),f=O(t[0]),d=M(),y=h("p"),g=O("Speed: "),k=O($),m(r,"href",c=t[1].url),m(r,"target","_blank"),m(r,"rel","noreferrer"),m(r,"id","gh")},m(p,C){x(p,e,C),_(e,n),_(n,o),_(n,s),_(e,l),_(e,u),_(u,r),r.innerHTML=Kt,_(u,a),_(u,f),_(e,d),_(e,y),_(y,g),_(y,k)},p(p,[C]){C&4&&i!==(i=p[2].score+"")&&W(s,i),C&2&&c!==(c=p[1].url)&&m(r,"href",c),C&1&&W(f,p[0]),C&4&&$!==($=p[2].speed+"")&&W(k,$)},i:b,o:b,d(p){p&&v(e)}}}function xe(t,e,n){let o;L(t,w,l=>n(2,o=l));let{name:i}=e,{repository:s}=e;return t.$$set=l=>{"name"in l&&n(0,i=l.name),"repository"in l&&n(1,s=l.repository)},[i,s,o]}var $t=class extends A{constructor(e){super(),q(this,e,xe,we,T,{name:0,repository:1})}},Zt=$t;function $e(t){let e,n,o,i,s,l,u,r;return document.title=e=t[0],o=new Zt({props:{name:t[0],repository:t[1]}}),s=new Vt({}),u=new It({}),{c(){n=M(),V(o.$$.fragment),i=M(),V(s.$$.fragment),l=M(),V(u.$$.fragment)},m(c,a){x(c,n,a),G(o,c,a),x(c,i,a),G(s,c,a),x(c,l,a),G(u,c,a),r=!0},p(c,[a]){(!r||a&1)&&e!==(e=c[0])&&(document.title=e);let f={};a&1&&(f.name=c[0]),a&2&&(f.repository=c[1]),o.$set(f)},i(c){r||(D(o.$$.fragment,c),D(s.$$.fragment,c),D(u.$$.fragment,c),r=!0)},o(c){N(o.$$.fragment,c),N(s.$$.fragment,c),N(u.$$.fragment,c),r=!1},d(c){c&&v(n),B(o,c),c&&v(i),B(s,c),c&&v(l),B(u,c)}}}function Fe(t,e,n){let{name:o}=e,{repository:i}=e;return t.$$set=s=>{"name"in s&&n(0,o=s.name),"repository"in s&&n(1,i=s.repository)},[o,i]}var Ft=class extends A{constructor(e){super(),q(this,e,Fe,$e,T,{name:0,repository:1})}},Qt=Ft;var ke=new Qt({target:document.body,props:{name:St,repository:Ct}}),Dn=ke;export{Dn as default};