var St="tetrix";var Ct={type:"git",url:"https://github.com/Valexr/Tetrix"};function b(){}function dt(t){return t()}function Ot(){return Object.create(null)}function T(t){t.forEach(dt)}function N(t){return typeof t=="function"}function j(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function At(t){return Object.keys(t).length===0}function _t(t,...e){if(t==null)return b;let n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function E(t){let e;return _t(t,n=>e=n)(),e}function q(t,e,n){t.$$.on_destroy.push(_t(e,n))}function jt(t){return t&&N(t.destroy)?t.destroy:b}var Nt=!1;function te(){Nt=!0}function ee(){Nt=!1}function p(t,e){t.appendChild(e)}function $(t,e,n){t.insertBefore(e,n||null)}function w(t){t.parentNode&&t.parentNode.removeChild(t)}function nt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function O(t){return document.createTextNode(t)}function D(){return O(" ")}function ut(){return O("")}function H(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function m(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ot(t){return t===""?null:+t}function ne(t){return Array.from(t.childNodes)}function Y(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function it(t,e){t.value=e??""}function rt(t,e,n,o){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}function pt(t,e){for(let n=0;n<t.options.length;n+=1){let o=t.options[n];if(o.__value===e){o.selected=!0;return}}t.selectedIndex=-1}function Tt(t){let e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function V(t,e,n){t.classList[n?"add":"remove"](e)}var mt;function tt(t){mt=t}var X=[];var Dt=[],lt=[],Mt=[],oe=Promise.resolve(),ft=!1;function ie(){ft||(ft=!0,oe.then(qt))}function et(t){lt.push(t)}var at=new Set,W=0;function qt(){if(W!==0)return;let t=mt;do{try{for(;W<X.length;){let e=X[W];W++,tt(e),re(e.$$)}}catch(e){throw X.length=0,W=0,e}for(tt(null),X.length=0,W=0;Dt.length;)Dt.pop()();for(let e=0;e<lt.length;e+=1){let n=lt[e];at.has(n)||(at.add(n),n())}lt.length=0}while(X.length);for(;Mt.length;)Mt.pop()();ft=!1,at.clear(),tt(t)}function re(t){if(t.fragment!==null){t.update(),T(t.before_update);let e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(et)}}var ct=new Set,z;function ht(){z={r:0,c:[],p:z}}function yt(){z.r||T(z.c),z=z.p}function M(t,e){t&&t.i&&(ct.delete(t),t.i(e))}function R(t,e,n,o){if(t&&t.o){if(ct.has(t))return;ct.add(t),z.c.push(()=>{ct.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}else o&&o()}var Se=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function J(t){t&&t.c()}function G(t,e,n,o){let{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),o||et(()=>{let s=t.$$.on_mount.map(dt).filter(N);t.$$.on_destroy?t.$$.on_destroy.push(...s):T(s),t.$$.on_mount=[]}),r.forEach(et)}function B(t,e){let n=t.$$;n.fragment!==null&&(T(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function se(t,e){t.$$.dirty[0]===-1&&(X.push(t),ie(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function P(t,e,n,o,i,r,s,c=[-1]){let l=mt;tt(t);let u=t.$$={fragment:null,ctx:[],props:r,update:b,not_equal:i,bound:Ot(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Ot(),dirty:c,skip_bound:!1,root:e.target||l.$$.root};s&&s(u.root);let a=!1;if(u.ctx=n?n(t,e.props||{},(f,d,...y)=>{let g=y.length?y[0]:d;return u.ctx&&i(u.ctx[f],u.ctx[f]=g)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](g),a&&se(t,f)),d}):[],u.update(),a=!0,T(u.before_update),u.fragment=o?o(u.ctx):!1,e.target){if(e.hydrate){te();let f=ne(e.target);u.fragment&&u.fragment.l(f),f.forEach(w)}else u.fragment&&u.fragment.c();e.intro&&M(t.$$.fragment),G(t,e.target,e.anchor,e.customElement),ee(),qt()}tt(l)}var le;typeof HTMLElement=="function"&&(le=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){let{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(dt).filter(N);for(let e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){T(this.$$.on_disconnect)}$destroy(){B(this,1),this.$destroy=b}$on(t,e){if(!N(e))return b;let n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{let o=n.indexOf(e);o!==-1&&n.splice(o,1)}}$set(t){this.$$set&&!At(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});var A=class{$destroy(){B(this,1),this.$destroy=b}$on(e,n){if(!N(n))return b;let o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{let i=o.indexOf(n);i!==-1&&o.splice(i,1)}}$set(e){this.$$set&&!At(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}};var K=[];function Rt(t,e){return{subscribe:U(t,e).subscribe}}function U(t,e=b){let n,o=new Set;function i(c){if(j(t,c)&&(t=c,n)){let l=!K.length;for(let u of o)u[1](),K.push(u,t);if(l){for(let u=0;u<K.length;u+=2)K[u][0](K[u+1]);K.length=0}}}function r(c){i(c(t))}function s(c,l=b){let u=[c,l];return o.add(u),o.size===1&&(n=e(i)||b),c(t),()=>{o.delete(u),o.size===0&&(n(),n=null)}}return{set:i,update:r,subscribe:s}}function st(t,e,n){return Math.min(Math.max(e,t),n)}function Pt(t){return Math.floor(Math.random()*t)}function Z(t,e){return t.x===e.x&&t.y===e.y}var I=Rt({width:10,height:20});function ce(){let{subscribe:t,set:e,update:n}=U();e({state:"",score:0,speed:1});function o(r){n(s=>Object.assign(s,{state:r}))}function i(r){n(s=>Object.assign(s,{score:r}))}return{subscribe:t,state:o,score:i,set:e,start(){i(0),o("play"),L.clear(),S.random(),bt()},pause(){o("pause")},resume(){o("play"),bt()},stop(){o("stop")},scoreup(){n(r=>Object.assign(r,{score:r.score+gt*E(I).width*r.speed}))},speedup(){n(r=>Object.assign(r,{speed:st(1,r.speed+1,10)}))}}}var v=ce(),Lt=!1,gt=0;function bt(){setTimeout(()=>{E(v).state==="play"&&(ue(),bt())},900-80*E(v).speed)}function ue(){L.full()&&v.stop(),Lt=S.move("Down"),Lt&&(L.add(E(S)),gt=L.check(),v.scoreup(),gt&&!(E(v).score%100)&&v.speedup(),S.random())}function ae(){let{subscribe:t,set:e,update:n}=U([]);return{subscribe:t,set:e,clear(){e([])},add(o){n(i=>i.concat(o))},include(o){return E(this).some(i=>o.some(r=>Z(i,r)))},check(){let o=[];function i(r,{y:s}){return r[s]=r[s]||0,r[s]+=1,r}return n(r=>{let s=r.reduce(i,{});if(o=Object.keys(s).filter(c=>s[c]===E(I).width).map(Number),o.length){let c=r.filter(({y:l})=>!o.includes(l));for(let l of o)c=c.map(({x:u,y:a})=>(a=l>a?a+1:a,{x:u,y:a}));return c}return r}),o.length},full(){return E(this).some(({y:o})=>!o)}}}var L=ae();var Q={B:[{x:4,y:-2},{x:5,y:-2},{x:4,y:-1},{x:5,y:-1}],I:[{x:4,y:-4},{x:4,y:-3},{x:4,y:-2},{x:4,y:-1}],T:[{x:3,y:-2},{x:4,y:-2},{x:5,y:-2},{x:4,y:-1}],L:[{x:4,y:-3},{x:4,y:-2},{x:4,y:-1},{x:5,y:-1}],J:[{x:5,y:-3},{x:5,y:-2},{x:5,y:-1},{x:4,y:-1}],Z:[{x:3,y:-2},{x:4,y:-2},{x:4,y:-1},{x:5,y:-1}],S:[{x:3,y:-1},{x:4,y:-1},{x:4,y:-2},{x:5,y:-2}]};function fe(){let{subscribe:t,set:e,update:n}=U([]),o={Up:{x:0,y:-1},Down:{x:0,y:1},Left:{x:-1,y:0},Right:{x:1,y:0}},i="";return{subscribe:t,set:e,name:i,random(){let r=Object.keys(Q);i=r[Pt(r.length)],e(Q[i])},move(r){let s=!1,c=!1;return n(l=>{let a=typeof r=="object"?r:o[r],f=l.map(({x:g,y:x})=>({x:g+a.x,y:x+a.y})),{width:d,height:y}=E(I);return s=f.some(({x:g,y:x})=>g<0||g>=d||x>=y),c=L.include(f)||f.some(({x:g,y:x})=>x>=y),c||s?l:f}),c},rotate(){let r=E(this)[1],s=l=>r.y-l.y+r.x,c=l=>r.y-r.x+l.x;i!=="B"&&n(l=>{let{width:u,height:a}=E(I),f=l.map(g=>({x:s(g),y:c(g)})),d=f.some(({x:g,y:x})=>g<0||g>=u||x>=a),y=L.include(f);return d||y?l:f})},include(r){return E(this).some(s=>Z(r,s))}}}var S=fe();function Bt(t,e,n){let o=t.slice();return o[5]=e[n][0],o[6]=e[n][1],o}function de(t){let e,n=t[0].state==="pause"?"Resume":"Start",o,i,r,s,c,l=t[0].state!=="pause"&&It(t);return{c(){e=h("button"),o=O(n),i=D(),l&&l.c(),r=ut(),m(e,"class","lg")},m(u,a){$(u,e,a),p(e,o),$(u,i,a),l&&l.m(u,a),$(u,r,a),s||(c=H(e,"click",function(){N(t[0].state==="pause"?v.resume:v.start)&&(t[0].state==="pause"?v.resume:v.start).apply(this,arguments)}),s=!0)},p(u,a){t=u,a&1&&n!==(n=t[0].state==="pause"?"Resume":"Start")&&Y(o,n),t[0].state!=="pause"?l?l.p(t,a):(l=It(t),l.c(),l.m(r.parentNode,r)):l&&(l.d(1),l=null)},d(u){u&&w(e),u&&w(i),l&&l.d(u),u&&w(r),s=!1,c()}}}function _e(t){let e,n,o,i,r;return{c(){e=h("button"),e.textContent="Pause",n=D(),o=h("button"),o.textContent="Stop"},m(s,c){$(s,e,c),$(s,n,c),$(s,o,c),i||(r=[H(e,"click",v.pause),H(o,"click",v.stop)],i=!0)},p:b,d(s){s&&w(e),s&&w(n),s&&w(o),i=!1,T(r)}}}function It(t){let e,n,o,i,r,s,c,l,u,a,f,d,y,g,x=Object.entries(Q),F=[];for(let _=0;_<x.length;_+=1)F[_]=zt(Bt(t,x,_));return{c(){e=h("fieldset"),n=h("label"),o=O(`Speed
                        `),i=h("input"),r=D(),s=h("label"),c=O(`Fugure
                        `),l=h("select");for(let _=0;_<F.length;_+=1)F[_].c();u=D(),a=h("label"),f=O(`Heap
                        `),d=h("input"),m(i,"type","number"),m(i,"min","1"),m(i,"max","10"),m(i,"maxlength","2"),m(i,"size","3"),t[1]===void 0&&et(()=>t[3].call(l)),m(d,"type","number"),m(d,"min","1"),m(d,"max","10"),m(d,"maxlength","2"),m(d,"size","3")},m(_,C){$(_,e,C),p(e,n),p(n,o),p(n,i),it(i,t[0].speed),p(e,r),p(e,s),p(s,c),p(s,l);for(let k=0;k<F.length;k+=1)F[k].m(l,null);pt(l,t[1]),p(e,u),p(e,a),p(a,f),p(a,d),it(d,t[0].speed),y||(g=[H(i,"input",t[2]),H(l,"change",t[3]),H(d,"input",t[4])],y=!0)},p(_,C){if(C&1&&ot(i.value)!==_[0].speed&&it(i,_[0].speed),C&0){x=Object.entries(Q);let k;for(k=0;k<x.length;k+=1){let kt=Bt(_,x,k);F[k]?F[k].p(kt,C):(F[k]=zt(kt),F[k].c(),F[k].m(l,null))}for(;k<F.length;k+=1)F[k].d(1);F.length=x.length}C&2&&pt(l,_[1]),C&1&&ot(d.value)!==_[0].speed&&it(d,_[0].speed)},d(_){_&&w(e),nt(F,_),y=!1,T(g)}}}function zt(t){let e,n=t[5]+"",o,i;return{c(){e=h("option"),o=O(n),e.__value=i=t[6],e.value=e.__value},m(r,s){$(r,e,s),p(e,o)},p:b,d(r){r&&w(e)}}}function pe(t){let e,n;function o(s,c){return s[0].state==="play"?_e:de}let i=o(t,-1),r=i(t);return{c(){e=h("footer"),n=h("nav"),r.c(),V(n,"playing",t[0].state==="play")},m(s,c){$(s,e,c),p(e,n),r.m(n,null)},p(s,[c]){i===(i=o(s,c))&&r?r.p(s,c):(r.d(1),r=i(s),r&&(r.c(),r.m(n,null))),c&1&&V(n,"playing",s[0].state==="play")},i:b,o:b,d(s){s&&w(e),r.d()}}}function me(t,e,n){let o,i;q(t,v,l=>n(0,o=l)),q(t,S,l=>n(1,i=l));function r(){o.speed=ot(this.value),v.set(o)}function s(){i=Tt(this),S.set(i),Q}function c(){o.speed=ot(this.value),v.set(o)}return[o,i,r,s,c]}var wt=class extends A{constructor(e){super(),P(this,e,me,pe,j,{})}},Ht=wt;function he(t){let e,n,o;return{c(){e=h("span"),m(e,"class","pixel"),m(e,"data-x",n=t[0].x),m(e,"data-y",o=t[0].y),V(e,"fill",t[1])},m(i,r){$(i,e,r)},p(i,[r]){r&1&&n!==(n=i[0].x)&&m(e,"data-x",n),r&1&&o!==(o=i[0].y)&&m(e,"data-y",o),r&2&&V(e,"fill",i[1])},i:b,o:b,d(i){i&&w(e)}}}function ye(t,e,n){let o,{filled:i}=e,{pixel:r}=e;return t.$$set=s=>{"filled"in s&&n(2,i=s.filled),"pixel"in s&&n(0,r=s.pixel)},t.$$.update=()=>{if(t.$$.dirty&5)t:n(1,o=i.some(s=>Z(r,s)))},[r,o,i]}var vt=class extends A{constructor(e){super(),P(this,e,ye,he,j,{filled:2,pixel:0})}},Gt=vt;function Ut(t,e){function n(f){f==="play"?(window.onkeydown=i,t.onpointerdown=l,t.onpointerup=a,t.onclick=d=>d.preventDefault()):o()}function o(){window.onkeydown=null,t.onpointerdown=null,t.onpointerup=null}function i(f){if(f.key.includes("Arrow")){let d=f.key.replace("Arrow","");d==="Up"?S.rotate():S.move(d)}else f.key.includes("Escape")&&(f.preventDefault(),v.pause())}let r=0,s=0,c=!1;function l(f){let{pageX:d,pageY:y,pointerId:g}=f;r=d,s=y,t.onpointermove=u,t.setPointerCapture(g)}function u(f){let{pageX:d,pageY:y,width:g,height:x}=f,F=d-r,_=y-s;c=!0,Math.abs(F)>=g/devicePixelRatio?(r=d,S.move({x:st(-1,F,1),y:0})):Math.abs(_)>=x/devicePixelRatio&&(s=y,S.move({x:0,y:st(0,_,1)}))}function a(f){c||S.rotate(),c=!1,t.onpointermove=null,t.releasePointerCapture(f.pointerId)}return{update:n,destroy:o}}function Wt(t,e,n){let o=t.slice();return o[4]=e[n],o[6]=n,o}function Xt(t,e,n){let o=t.slice();return o[4]=e[n],o[8]=n,o}function Yt(t){let e,n;return e=new Gt({props:{pixel:{x:t[8],y:t[6]},filled:[...t[2],...t[3]]}}),{c(){J(e.$$.fragment)},m(o,i){G(e,o,i),n=!0},p(o,i){let r={};i&12&&(r.filled=[...o[2],...o[3]]),e.$set(r)},i(o){n||(M(e.$$.fragment,o),n=!0)},o(o){R(e.$$.fragment,o),n=!1},d(o){B(e,o)}}}function Vt(t){let e,n,o={length:t[1].width},i=[];for(let s=0;s<o.length;s+=1)i[s]=Yt(Xt(t,o,s));let r=s=>R(i[s],1,1,()=>{i[s]=null});return{c(){for(let s=0;s<i.length;s+=1)i[s].c();e=ut()},m(s,c){for(let l=0;l<i.length;l+=1)i[l].m(s,c);$(s,e,c),n=!0},p(s,c){if(c&14){o={length:s[1].width};let l;for(l=0;l<o.length;l+=1){let u=Xt(s,o,l);i[l]?(i[l].p(u,c),M(i[l],1)):(i[l]=Yt(u),i[l].c(),M(i[l],1),i[l].m(e.parentNode,e))}for(ht(),l=o.length;l<i.length;l+=1)r(l);yt()}},i(s){if(!n){for(let c=0;c<o.length;c+=1)M(i[c]);n=!0}},o(s){i=i.filter(Boolean);for(let c=0;c<i.length;c+=1)R(i[c]);n=!1},d(s){nt(i,s),s&&w(e)}}}function ge(t){let e,n,o,i,r,s,c={length:t[1].height},l=[];for(let a=0;a<c.length;a+=1)l[a]=Vt(Wt(t,c,a));let u=a=>R(l[a],1,1,()=>{l[a]=null});return{c(){e=h("main"),n=h("section");for(let a=0;a<l.length;a+=1)l[a].c();m(n,"id","board"),rt(n,"--cols",t[1].width),rt(n,"--rows",t[1].height)},m(a,f){$(a,e,f),p(e,n);for(let d=0;d<l.length;d+=1)l[d].m(n,null);i=!0,r||(s=jt(o=Ut.call(null,n,t[0].state)),r=!0)},p(a,[f]){if(f&14){c={length:a[1].height};let d;for(d=0;d<c.length;d+=1){let y=Wt(a,c,d);l[d]?(l[d].p(y,f),M(l[d],1)):(l[d]=Vt(y),l[d].c(),M(l[d],1),l[d].m(n,null))}for(ht(),d=c.length;d<l.length;d+=1)u(d);yt()}(!i||f&2)&&rt(n,"--cols",a[1].width),(!i||f&2)&&rt(n,"--rows",a[1].height),o&&N(o.update)&&f&1&&o.update.call(null,a[0].state)},i(a){if(!i){for(let f=0;f<c.length;f+=1)M(l[f]);i=!0}},o(a){l=l.filter(Boolean);for(let f=0;f<l.length;f+=1)R(l[f]);i=!1},d(a){a&&w(e),nt(l,a),r=!1,s()}}}function be(t,e,n){let o,i,r,s;return q(t,v,c=>n(0,o=c)),q(t,I,c=>n(1,i=c)),q(t,S,c=>n(2,r=c)),q(t,L,c=>n(3,s=c)),[o,i,r,s]}var xt=class extends A{constructor(e){super(),P(this,e,be,ge,j,{})}},Jt=xt;var Kt='<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="currentColor"/></svg>';function ve(t){let e,n,o,i=t[2].score+"",r,s,c,l,u,a,f,d,y,g,x=t[2].speed+"",F;return{c(){e=h("header"),n=h("p"),o=O("Score: "),r=O(i),s=D(),c=h("h1"),l=h("a"),a=D(),f=O(t[0]),d=D(),y=h("p"),g=O("Speed: "),F=O(x),m(l,"href",u=t[1].url),m(l,"target","_blank"),m(l,"rel","noreferrer"),m(l,"id","gh")},m(_,C){$(_,e,C),p(e,n),p(n,o),p(n,r),p(e,s),p(e,c),p(c,l),l.innerHTML=Kt,p(c,a),p(c,f),p(e,d),p(e,y),p(y,g),p(y,F)},p(_,[C]){C&4&&i!==(i=_[2].score+"")&&Y(r,i),C&2&&u!==(u=_[1].url)&&m(l,"href",u),C&1&&Y(f,_[0]),C&4&&x!==(x=_[2].speed+"")&&Y(F,x)},i:b,o:b,d(_){_&&w(e)}}}function xe(t,e,n){let o;q(t,v,s=>n(2,o=s));let{name:i}=e,{repository:r}=e;return t.$$set=s=>{"name"in s&&n(0,i=s.name),"repository"in s&&n(1,r=s.repository)},[i,r,o]}var Ft=class extends A{constructor(e){super(),P(this,e,xe,ve,j,{name:0,repository:1})}},Zt=Ft;function Fe(t){let e,n,o,i,r,s,c,l;return document.title=e=t[0],o=new Zt({props:{name:t[0],repository:t[1]}}),r=new Jt({}),c=new Ht({}),{c(){n=D(),J(o.$$.fragment),i=D(),J(r.$$.fragment),s=D(),J(c.$$.fragment)},m(u,a){$(u,n,a),G(o,u,a),$(u,i,a),G(r,u,a),$(u,s,a),G(c,u,a),l=!0},p(u,[a]){(!l||a&1)&&e!==(e=u[0])&&(document.title=e);let f={};a&1&&(f.name=u[0]),a&2&&(f.repository=u[1]),o.$set(f)},i(u){l||(M(o.$$.fragment,u),M(r.$$.fragment,u),M(c.$$.fragment,u),l=!0)},o(u){R(o.$$.fragment,u),R(r.$$.fragment,u),R(c.$$.fragment,u),l=!1},d(u){u&&w(n),B(o,u),u&&w(i),B(r,u),u&&w(s),B(c,u)}}}function $e(t,e,n){let{name:o}=e,{repository:i}=e;return t.$$set=r=>{"name"in r&&n(0,o=r.name),"repository"in r&&n(1,i=r.repository)},[o,i]}var $t=class extends A{constructor(e){super(),P(this,e,$e,Fe,j,{name:0,repository:1})}},Qt=$t;var ke=new Qt({target:document.body,props:{name:St,repository:Ct}}),Cn=ke;export{Cn as default};
