var kt="tetrix";var Et={type:"git",url:"git+https://github.com/Valexr/tetrix.git"};function y(){}function at(t){return t()}function St(){return Object.create(null)}function j(t){t.forEach(at)}function B(t){return typeof t=="function"}function M(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Dt(t){return Object.keys(t).length===0}function ft(t,...e){if(t==null)return y;let n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function E(t){let e;return ft(t,n=>e=n)(),e}function R(t,e,n){t.$$.on_destroy.push(ft(e,n))}function Mt(t){return t&&B(t.destroy)?t.destroy:y}var At=!1;function Qt(){At=!0}function te(){At=!1}function _(t,e){t.appendChild(e)}function b(t,e,n){t.insertBefore(e,n||null)}function g(t){t.parentNode&&t.parentNode.removeChild(t)}function tt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function k(t){return document.createTextNode(t)}function S(){return k(" ")}function rt(){return k("")}function I(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function m(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function et(t){return t===""?null:+t}function ee(t){return Array.from(t.childNodes)}function X(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function nt(t,e){t.value=e??""}function dt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function _t(t,e){for(let n=0;n<t.options.length;n+=1){let i=t.options[n];if(i.__value===e){i.selected=!0;return}}t.selectedIndex=-1}function jt(t){let e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function Y(t,e,n){t.classList[n?"add":"remove"](e)}var pt;function Z(t){pt=t}var V=[];var Ct=[],it=[],Ot=[],ne=Promise.resolve(),ut=!1;function ie(){ut||(ut=!0,ne.then(Tt))}function Q(t){it.push(t)}var ct=new Set,U=0;function Tt(){if(U!==0)return;let t=pt;do{try{for(;U<V.length;){let e=V[U];U++,Z(e),oe(e.$$)}}catch(e){throw V.length=0,U=0,e}for(Z(null),V.length=0,U=0;Ct.length;)Ct.pop()();for(let e=0;e<it.length;e+=1){let n=it[e];ct.has(n)||(ct.add(n),n())}it.length=0}while(V.length);for(;Ot.length;)Ot.pop()();ut=!1,ct.clear(),Z(t)}function oe(t){if(t.fragment!==null){t.update(),j(t.before_update);let e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Q)}}var ot=new Set,z;function mt(){z={r:0,c:[],p:z}}function ht(){z.r||j(z.c),z=z.p}function C(t,e){t&&t.i&&(ot.delete(t),t.i(e))}function T(t,e,n,i){if(t&&t.o){if(ot.has(t))return;ot.add(t),z.c.push(()=>{ot.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}var Ee=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function J(t){t&&t.c()}function H(t,e,n,i){let{fragment:o,after_update:r}=t.$$;o&&o.m(e,n),i||Q(()=>{let s=t.$$.on_mount.map(at).filter(B);t.$$.on_destroy?t.$$.on_destroy.push(...s):j(s),t.$$.on_mount=[]}),r.forEach(Q)}function P(t,e){let n=t.$$;n.fragment!==null&&(j(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function re(t,e){t.$$.dirty[0]===-1&&(V.push(t),ie(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function N(t,e,n,i,o,r,s,u=[-1]){let l=pt;Z(t);let c=t.$$={fragment:null,ctx:[],props:r,update:y,not_equal:o,bound:St(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:St(),dirty:u,skip_bound:!1,root:e.target||l.$$.root};s&&s(c.root);let a=!1;if(c.ctx=n?n(t,e.props||{},(d,f,...x)=>{let L=x.length?x[0]:f;return c.ctx&&o(c.ctx[d],c.ctx[d]=L)&&(!c.skip_bound&&c.bound[d]&&c.bound[d](L),a&&re(t,d)),f}):[],c.update(),a=!0,j(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){Qt();let d=ee(e.target);c.fragment&&c.fragment.l(d),d.forEach(g)}else c.fragment&&c.fragment.c();e.intro&&C(t.$$.fragment),H(t,e.target,e.anchor,e.customElement),te(),Tt()}Z(l)}var se;typeof HTMLElement=="function"&&(se=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){let{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(at).filter(B);for(let e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){j(this.$$.on_disconnect)}$destroy(){P(this,1),this.$destroy=y}$on(t,e){if(!B(e))return y;let n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{let i=n.indexOf(e);i!==-1&&n.splice(i,1)}}$set(t){this.$$set&&!Dt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});var D=class{$destroy(){P(this,1),this.$destroy=y}$on(e,n){if(!B(n))return y;let i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{let o=i.indexOf(n);o!==-1&&i.splice(o,1)}}$set(e){this.$$set&&!Dt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}};var K=[];function G(t,e=y){let n,i=new Set;function o(u){if(M(t,u)&&(t=u,n)){let l=!K.length;for(let c of i)c[1](),K.push(c,t);if(l){for(let c=0;c<K.length;c+=2)K[c][0](K[c+1]);K.length=0}}}function r(u){o(u(t))}function s(u,l=y){let c=[u,l];return i.add(c),i.size===1&&(n=e(o)||y),u(t),()=>{i.delete(c),i.size===0&&(n(),n=null)}}return{set:o,update:r,subscribe:s}}function Nt(t,e,n){return Math.min(Math.max(e,t),n)}function qt(t){return Math.floor(Math.random()*t)}function st(t,e){return t.x===e.x&&t.y===e.y}function le(){let{subscribe:t,set:e,update:n}=G([]),i=0;function o(r,{y:s}){return r[s]=r[s]||0,r[s]+=1,r}return{subscribe:t,set:e,clear(){e([])},add(r){n(s=>s.concat(r))},include(r){return E(this).some(s=>r.some(u=>st(s,u)))},check(){return n(r=>{let s=r.reduce(o,{}),u=r.filter(({x:a,y:d})=>s[d]!==10);i=r.filter(({x:a,y:d})=>s[d]===10).length;let l=(r.length-u.length)/10,c=u.map(({x:a,y:d})=>({x:a,y:d+l}));return console.log(r.length,u.length),c}),i},move(){n(r=>r.map(({x:s,y:u})=>({x:s+1,y:u+1})))},full(){return E(this).some(({x:r,y:s})=>!s)}}}var q=le();var W={B:[{x:4,y:-2},{x:5,y:-2},{x:4,y:-1},{x:5,y:-1}],I:[{x:4,y:-4},{x:4,y:-3},{x:4,y:-2},{x:4,y:-1}],T:[{x:3,y:-2},{x:4,y:-2},{x:5,y:-2},{x:4,y:-1}],L:[{x:4,y:-3},{x:4,y:-2},{x:4,y:-1},{x:5,y:-1}],J:[{x:5,y:-3},{x:5,y:-2},{x:5,y:-1},{x:4,y:-1}],Z:[{x:3,y:-2},{x:4,y:-2},{x:4,y:-1},{x:5,y:-1}],S:[{x:3,y:-1},{x:4,y:-1},{x:4,y:-2},{x:5,y:-2}]};function ce(){let{subscribe:t,set:e,update:n}=G([]),i={Up:{x:0,y:-1},Down:{x:0,y:1},Left:{x:-1,y:0},Right:{x:1,y:0}},o="S";return e(W[o]),{subscribe:t,set:e,name:o,random(){let r=Object.keys(W);o=r[qt(r.length)],this.get(o)},get(r){e(W[r])},move(r){let s=!1,u=!1;return n(l=>{let c=i[r],a=l.map(({x:d,y:f})=>({x:d+c.x,y:f+c.y}));return s=a.some(({x:d,y:f})=>d<0||d>=10||f>=20),u=q.include(a)||a.some(({x:d,y:f})=>f>=20),u||s?l:a}),u},rotate(){let r=E(this)[1];function s(l){return r.y-l.y+r.x}function u(l){return r.y-r.x+l.x}this.name!=="B"&&n(l=>{let c=l.map(f=>({x:s(f),y:u(f)})),a=c.some(({x:f,y:x})=>f<0||f>=10||x>=20),d=q.include(c);return a||d?l:c})}}}var O=ce();var Lt=G({width:10,height:20,cell:16,gap:2});function ue(){let{subscribe:t,set:e,update:n}=G();e({state:"",score:0,speed:1});function i(r){n(s=>Object.assign(s,{state:r}))}function o(r){n(s=>Object.assign(s,{score:r}))}return{subscribe:t,state:i,score:o,set:e,start(){o(0),i("play"),q.clear(),O.random(),yt()},pause(){i("pause")},resume(){i("play"),yt()},stop(){i("stop")},scoreup(){n(r=>Object.assign(r,{score:r.score+lt*r.speed}))},speedup(){n(r=>Object.assign(r,{speed:Nt(1,r.speed+1,10)}))}}}var v=ue(),Rt=!1,lt=0;function yt(){setTimeout(()=>{E(v).state==="play"&&(ae(),yt())},900-80*E(v).speed)}function ae(){q.full()&&v.stop(),Rt=O.move("Down"),Rt&&(q.add(E(O)),lt=q.check(),v.scoreup(),lt&&!(E(v).score%100)&&v.speedup(),lt=0,O.random())}function Bt(t,e,n){let i=t.slice();return i[5]=e[n][0],i[6]=e[n][1],i}function fe(t){let e,n=t[0].state==="pause"?"Resume":"Start",i,o,r,s,u,l=t[0].state!=="pause"&&Pt(t);return{c(){e=h("button"),i=k(n),o=S(),l&&l.c(),r=rt(),m(e,"class","lg")},m(c,a){b(c,e,a),_(e,i),b(c,o,a),l&&l.m(c,a),b(c,r,a),s||(u=I(e,"click",function(){B(t[0].state==="pause"?v.resume:v.start)&&(t[0].state==="pause"?v.resume:v.start).apply(this,arguments)}),s=!0)},p(c,a){t=c,a&1&&n!==(n=t[0].state==="pause"?"Resume":"Start")&&X(i,n),t[0].state!=="pause"?l?l.p(t,a):(l=Pt(t),l.c(),l.m(r.parentNode,r)):l&&(l.d(1),l=null)},d(c){c&&g(e),c&&g(o),l&&l.d(c),c&&g(r),s=!1,u()}}}function de(t){let e,n,i,o,r;return{c(){e=h("button"),e.textContent="Pause",n=S(),i=h("button"),i.textContent="Stop"},m(s,u){b(s,e,u),b(s,n,u),b(s,i,u),o||(r=[I(e,"click",v.pause),I(i,"click",v.stop)],o=!0)},p:y,d(s){s&&g(e),s&&g(n),s&&g(i),o=!1,j(r)}}}function Pt(t){let e,n,i,o,r,s,u,l,c,a,d,f,x,L,A=Object.entries(W),w=[];for(let p=0;p<A.length;p+=1)w[p]=zt(Bt(t,A,p));return{c(){e=h("fieldset"),n=h("label"),i=k(`Speed
                        `),o=h("input"),r=S(),s=h("label"),u=k(`Fugure
                        `),l=h("select");for(let p=0;p<w.length;p+=1)w[p].c();c=S(),a=h("label"),d=k(`Heap
                        `),f=h("input"),m(o,"type","number"),m(o,"min","1"),m(o,"max","10"),m(o,"maxlength","2"),m(o,"size","3"),t[1]===void 0&&Q(()=>t[3].call(l)),m(f,"type","number"),m(f,"min","1"),m(f,"max","10"),m(f,"maxlength","2"),m(f,"size","3")},m(p,F){b(p,e,F),_(e,n),_(n,i),_(n,o),nt(o,t[0].speed),_(e,r),_(e,s),_(s,u),_(s,l);for(let $=0;$<w.length;$+=1)w[$].m(l,null);_t(l,t[1]),_(e,c),_(e,a),_(a,d),_(a,f),nt(f,t[0].speed),x||(L=[I(o,"input",t[2]),I(l,"change",t[3]),I(f,"input",t[4])],x=!0)},p(p,F){if(F&1&&et(o.value)!==p[0].speed&&nt(o,p[0].speed),F&0){A=Object.entries(W);let $;for($=0;$<A.length;$+=1){let $t=Bt(p,A,$);w[$]?w[$].p($t,F):(w[$]=zt($t),w[$].c(),w[$].m(l,null))}for(;$<w.length;$+=1)w[$].d(1);w.length=A.length}F&2&&_t(l,p[1]),F&1&&et(f.value)!==p[0].speed&&nt(f,p[0].speed)},d(p){p&&g(e),tt(w,p),x=!1,j(L)}}}function zt(t){let e,n=t[5]+"",i,o;return{c(){e=h("option"),i=k(n),e.__value=o=t[6],e.value=e.__value},m(r,s){b(r,e,s),_(e,i)},p:y,d(r){r&&g(e)}}}function _e(t){let e,n;function i(s,u){return s[0].state==="play"?de:fe}let o=i(t,-1),r=o(t);return{c(){e=h("footer"),n=h("nav"),r.c(),Y(n,"playing",t[0].state==="play")},m(s,u){b(s,e,u),_(e,n),r.m(n,null)},p(s,[u]){o===(o=i(s,u))&&r?r.p(s,u):(r.d(1),r=o(s),r&&(r.c(),r.m(n,null))),u&1&&Y(n,"playing",s[0].state==="play")},i:y,o:y,d(s){s&&g(e),r.d()}}}function pe(t,e,n){let i,o;R(t,v,l=>n(0,i=l)),R(t,O,l=>n(1,o=l));function r(){i.speed=et(this.value),v.set(i)}function s(){o=jt(this),O.set(o),W}function u(){i.speed=et(this.value),v.set(i)}return[i,o,r,s,u]}var gt=class extends D{constructor(e){super(),N(this,e,pe,_e,M,{})}},It=gt;function me(t){let e,n,i;return{c(){e=h("span"),m(e,"class","pixel"),m(e,"data-x",n=t[0].x),m(e,"data-y",i=t[0].y),Y(e,"fill",t[1])},m(o,r){b(o,e,r)},p(o,[r]){r&1&&n!==(n=o[0].x)&&m(e,"data-x",n),r&1&&i!==(i=o[0].y)&&m(e,"data-y",i),r&2&&Y(e,"fill",o[1])},i:y,o:y,d(o){o&&g(e)}}}function he(t,e,n){let i,{filled:o}=e,{pixel:r}=e;return t.$$set=s=>{"filled"in s&&n(2,o=s.filled),"pixel"in s&&n(0,r=s.pixel)},t.$$.update=()=>{if(t.$$.dirty&5)t:n(1,i=o.some(s=>st(r,s)))},[r,i,o]}var bt=class extends D{constructor(e){super(),N(this,e,he,me,M,{filled:2,pixel:0})}},Ht=bt;function Gt(t){window.onkeydown=n=>e(n);function e(n){if(E(v).state==="play")if(n.key.includes("Arrow")){let i=n.key.replace("Arrow","");i==="Up"?O.rotate():O.move(i)}else n.key.includes("Escape")&&(n.preventDefault(),v.pause())}}function Wt(t,e,n){let i=t.slice();return i[3]=e[n],i[5]=n,i}function Ut(t,e,n){let i=t.slice();return i[3]=e[n],i[7]=n,i}function Vt(t){let e,n;return e=new Ht({props:{pixel:{x:t[7],y:t[5]},filled:[...t[1],...t[2]]}}),{c(){J(e.$$.fragment)},m(i,o){H(e,i,o),n=!0},p(i,o){let r={};o&6&&(r.filled=[...i[1],...i[2]]),e.$set(r)},i(i){n||(C(e.$$.fragment,i),n=!0)},o(i){T(e.$$.fragment,i),n=!1},d(i){P(e,i)}}}function Xt(t){let e,n,i={length:t[0].width},o=[];for(let s=0;s<i.length;s+=1)o[s]=Vt(Ut(t,i,s));let r=s=>T(o[s],1,1,()=>{o[s]=null});return{c(){for(let s=0;s<o.length;s+=1)o[s].c();e=rt()},m(s,u){for(let l=0;l<o.length;l+=1)o[l].m(s,u);b(s,e,u),n=!0},p(s,u){if(u&7){i={length:s[0].width};let l;for(l=0;l<i.length;l+=1){let c=Ut(s,i,l);o[l]?(o[l].p(c,u),C(o[l],1)):(o[l]=Vt(c),o[l].c(),C(o[l],1),o[l].m(e.parentNode,e))}for(mt(),l=i.length;l<o.length;l+=1)r(l);ht()}},i(s){if(!n){for(let u=0;u<i.length;u+=1)C(o[u]);n=!0}},o(s){o=o.filter(Boolean);for(let u=0;u<o.length;u+=1)T(o[u]);n=!1},d(s){tt(o,s),s&&g(e)}}}function ye(t){let e,n,i,o,r,s,u={length:t[0].height},l=[];for(let a=0;a<u.length;a+=1)l[a]=Xt(Wt(t,u,a));let c=a=>T(l[a],1,1,()=>{l[a]=null});return{c(){e=h("main"),n=h("section");for(let a=0;a<l.length;a+=1)l[a].c();m(n,"id","board"),dt(n,"--cols",t[0].width)},m(a,d){b(a,e,d),_(e,n);for(let f=0;f<l.length;f+=1)l[f].m(n,null);o=!0,r||(s=Mt(i=Gt.call(null,n)),r=!0)},p(a,[d]){if(d&7){u={length:a[0].height};let f;for(f=0;f<u.length;f+=1){let x=Wt(a,u,f);l[f]?(l[f].p(x,d),C(l[f],1)):(l[f]=Xt(x),l[f].c(),C(l[f],1),l[f].m(n,null))}for(mt(),f=u.length;f<l.length;f+=1)c(f);ht()}(!o||d&1)&&dt(n,"--cols",a[0].width)},i(a){if(!o){for(let d=0;d<u.length;d+=1)C(l[d]);o=!0}},o(a){l=l.filter(Boolean);for(let d=0;d<l.length;d+=1)T(l[d]);o=!1},d(a){a&&g(e),tt(l,a),r=!1,s()}}}function ge(t,e,n){let i,o,r;return R(t,Lt,s=>n(0,i=s)),R(t,O,s=>n(1,o=s)),R(t,q,s=>n(2,r=s)),[i,o,r]}var vt=class extends D{constructor(e){super(),N(this,e,ge,ye,M,{})}},Yt=vt;var Jt='<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="currentColor"/></svg>';function ve(t){let e,n,i,o=t[2].score+"",r,s,u,l,c,a,d,f,x,L,A=t[2].speed+"",w;return{c(){e=h("header"),n=h("p"),i=k("Score: "),r=k(o),s=S(),u=h("h1"),l=h("a"),a=S(),d=k(t[0]),f=S(),x=h("p"),L=k("Speed: "),w=k(A),m(l,"href",c=t[1].url),m(l,"target","_blank"),m(l,"rel","noreferrer"),m(l,"id","gh")},m(p,F){b(p,e,F),_(e,n),_(n,i),_(n,r),_(e,s),_(e,u),_(u,l),l.innerHTML=Jt,_(u,a),_(u,d),_(e,f),_(e,x),_(x,L),_(x,w)},p(p,[F]){F&4&&o!==(o=p[2].score+"")&&X(r,o),F&2&&c!==(c=p[1].url)&&m(l,"href",c),F&1&&X(d,p[0]),F&4&&A!==(A=p[2].speed+"")&&X(w,A)},i:y,o:y,d(p){p&&g(e)}}}function we(t,e,n){let i;R(t,v,s=>n(2,i=s));let{name:o}=e,{repository:r}=e;return t.$$set=s=>{"name"in s&&n(0,o=s.name),"repository"in s&&n(1,r=s.repository)},[o,r,i]}var wt=class extends D{constructor(e){super(),N(this,e,we,ve,M,{name:0,repository:1})}},Kt=wt;function xe(t){let e,n,i,o,r,s,u,l;return document.title=e=t[0],i=new Kt({props:{name:t[0],repository:t[1]}}),r=new Yt({}),u=new It({}),{c(){n=S(),J(i.$$.fragment),o=S(),J(r.$$.fragment),s=S(),J(u.$$.fragment)},m(c,a){b(c,n,a),H(i,c,a),b(c,o,a),H(r,c,a),b(c,s,a),H(u,c,a),l=!0},p(c,[a]){(!l||a&1)&&e!==(e=c[0])&&(document.title=e);let d={};a&1&&(d.name=c[0]),a&2&&(d.repository=c[1]),i.$set(d)},i(c){l||(C(i.$$.fragment,c),C(r.$$.fragment,c),C(u.$$.fragment,c),l=!0)},o(c){T(i.$$.fragment,c),T(r.$$.fragment,c),T(u.$$.fragment,c),l=!1},d(c){c&&g(n),P(i,c),c&&g(o),P(r,c),c&&g(s),P(u,c)}}}function $e(t,e,n){let{name:i}=e,{repository:o}=e;return t.$$set=r=>{"name"in r&&n(0,i=r.name),"repository"in r&&n(1,o=r.repository)},[i,o]}var xt=class extends D{constructor(e){super(),N(this,e,$e,xe,M,{name:0,repository:1})}},Zt=xt;var Fe=new Zt({target:document.body,props:{name:kt,repository:Et}}),Sn=Fe;export{Sn as default};
