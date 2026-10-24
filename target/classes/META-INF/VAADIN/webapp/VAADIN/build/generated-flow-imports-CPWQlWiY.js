import{n as $o,i as ls,S as Uo,r as ds,a as m,b as cs,t as $t,e as hs,T as us,B as ps,x as bt,E as yt,c as jo,d as ne,f as qo,j as Wo,O as Go}from"./indexhtml-CEFjyOwz.js";/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(s,t){return s};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Yo=/(url\()([^)]*)(\))/g,Qo=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,Ie,T;function _e(s,t){if(s&&Qo.test(s)||s==="//")return s;if(Ie===void 0){Ie=!1;try{const e=new URL("b","http://a");e.pathname="c%20d",Ie=e.href==="http://a/c%20d"}catch{}}if(t||(t=document.baseURI||window.location.href),Ie)try{return new URL(s,t).href}catch{return s}return T||(T=document.implementation.createHTMLDocument("temp"),T.base=T.createElement("base"),T.head.appendChild(T.base),T.anchor=T.createElement("a"),T.body.appendChild(T.anchor)),T.base.href=t,T.anchor.href=s,T.anchor.href||s}function Ut(s,t){return s.replace(Yo,function(e,i,o,r){return i+"'"+_e(o.replace(/["']/g,""),t)+"'"+r})}function jt(s){return s.substring(0,s.lastIndexOf("/")+1)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ms=!window.ShadyDOM||!window.ShadyDOM.inUse;!window.ShadyCSS||window.ShadyCSS.nativeCss;const Xo=ms&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const s=new CSSStyleSheet;s.replaceSync("");const t=document.createElement("div");return t.attachShadow({mode:"open"}),t.shadowRoot.adoptedStyleSheets=[s],t.shadowRoot.adoptedStyleSheets[0]===s}catch{return!1}})();let Ko=window.Polymer&&window.Polymer.rootPath||jt(document.baseURI||window.location.href),De=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;window.Polymer&&window.Polymer.setPassiveTouchGestures;let ve=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,Jo=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,fs=window.Polymer&&window.Polymer.legacyOptimizations||!1,_s=window.Polymer&&window.Polymer.legacyWarnings||!1,Zo=window.Polymer&&window.Polymer.syncInitialRender||!1,At=window.Polymer&&window.Polymer.legacyUndefined||!1,er=window.Polymer&&window.Polymer.orderedComputed||!1,bi=window.Polymer&&window.Polymer.removeNestedTemplates||!1,gs=window.Polymer&&window.Polymer.fastDomIf||!1,tr=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1;window.Polymer&&window.Polymer.legacyNoObservedAttributes;let ir=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let qt={},vs={};function yi(s,t){qt[s]=vs[s.toLowerCase()]=t}function Ai(s){return qt[s]||vs[s.toLowerCase()]}function sr(s){s.querySelector("style")&&console.warn("dom-module %s has style outside template",s.id)}class se extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,e){if(t){let i=Ai(t);return i&&e?i.querySelector(e):i}return null}attributeChangedCallback(t,e,i,o){e!==i&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,e=_e(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=jt(e)}return this.__assetpath}register(t){if(t=t||this.id,t){if(ve&&Ai(t)!==void 0)throw yi(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,yi(t,this),sr(this)}}}se.prototype.modules=qt;customElements.define("dom-module",se);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const or="link[rel=import][type~=css]",rr="include",Ci="shady-unscoped";function bs(s){return se.import(s)}function xi(s){let t=s.body?s.body:s;const e=Ut(t.textContent,s.baseURI),i=document.createElement("style");return i.textContent=e,i}function nr(s){const t=s.trim().split(/\s+/),e=[];for(let i=0;i<t.length;i++)e.push(...ar(t[i]));return e}function ar(s){const t=bs(s);if(!t)return console.warn("Could not find style data in module named",s),[];if(t._styles===void 0){const e=[];e.push(...ys(t));const i=t.querySelector("template");i&&e.push(...Wt(i,t.assetpath)),t._styles=e}return t._styles}function Wt(s,t){if(!s._styles){const e=[],i=s.content.querySelectorAll("style");for(let o=0;o<i.length;o++){let r=i[o],n=r.getAttribute(rr);n&&e.push(...nr(n).filter(function(a,l,d){return d.indexOf(a)===l})),t&&(r.textContent=Ut(r.textContent,t)),e.push(r)}s._styles=e}return s._styles}function lr(s){let t=bs(s);return t?ys(t):[]}function ys(s){const t=[],e=s.querySelectorAll(or);for(let i=0;i<e.length;i++){let o=e[i];if(o.import){const r=o.import,n=o.hasAttribute(Ci);if(n&&!r._unscopedStyle){const a=xi(r);a.setAttribute(Ci,""),r._unscopedStyle=a}else r._style||(r._style=xi(r));t.push(n?r._unscopedStyle:r._style)}}return t}/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const As=s=>class extends s{static get properties(){return{_theme:{type:String,readOnly:!0}}}static get observedAttributes(){return[...super.observedAttributes,"theme"]}attributeChangedCallback(e,i,o){super.attributeChangedCallback(e,i,o),e==="theme"&&this._set_theme(o)}};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const J=[],Ct=new Set,Gt=new Set;function Cs(s){return s&&Object.prototype.hasOwnProperty.call(s,"__themes")}function dr(s){return Cs(customElements.get(s))}function cr(s=[]){return[s].flat(1/0).filter(t=>t instanceof $o?!0:(console.warn("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`."),!1))}function xs(s,t){return(s||"").split(" ").some(e=>new RegExp(`^${e.split("*").join(".*")}$`,"u").test(t))}function ws(s){return s.map(t=>t.cssText).join(`
`)}const Fe="vaadin-themable-mixin-style";function hr(s,t){const e=document.createElement("style");e.id=Fe,e.textContent=ws(s),t.content.appendChild(e)}function ur(s){if(!s.shadowRoot)return;const t=s.constructor;if(s instanceof ls)[...s.shadowRoot.querySelectorAll("style")].forEach(e=>e.remove()),Uo(s.shadowRoot,t.elementStyles);else{const e=s.shadowRoot.getElementById(Fe),i=t.prototype._template;e.textContent=i.content.getElementById(Fe).textContent}}function pr(s){Ct.forEach(t=>{const e=t.deref();e instanceof s?ur(e):e||Ct.delete(t)})}function Es(s){if(s.prototype instanceof ls)s.elementStyles=s.finalizeStyles(s.styles);else{const t=s.prototype._template;t.content.getElementById(Fe).textContent=ws(s.getStylesForThis())}Gt.forEach(t=>{const e=customElements.get(t);e!==s&&e.prototype instanceof s&&Es(e)})}function mr(s,t){const e=s.__themes;return!e||!t?!1:e.some(i=>i.styles.some(o=>t.some(r=>r.cssText===o.cssText)))}function _(s,t,e={}){t=cr(t),window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.registerStyles(s,t,e):J.push({themeFor:s,styles:t,include:e.include,moduleId:e.moduleId}),s&&Gt.forEach(i=>{if(xs(s,i)&&dr(i)){const o=customElements.get(i);mr(o,t)?console.warn(`Registering styles that already exist for ${i}`):(!window.Vaadin||!window.Vaadin.suppressPostFinalizeStylesWarning)&&console.warn(`The custom element definition for "${i}" was finalized before a style module was registered. Ideally, import component specific style modules before importing the corresponding custom element. This warning can be suppressed by setting "window.Vaadin.suppressPostFinalizeStylesWarning = true".`),Es(o),pr(o)}})}function xt(){return window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.getAllThemes():J}function fr(s=""){let t=0;return s.startsWith("lumo-")||s.startsWith("material-")?t=1:s.startsWith("vaadin-")&&(t=2),t}function Is(s){const t=[];return s.include&&[].concat(s.include).forEach(e=>{const i=xt().find(o=>o.moduleId===e);i?t.push(...Is(i),...i.styles):console.warn(`Included moduleId ${e} not found in style registry`)},s.styles),t}function _r(s){const t=`${s}-default-theme`,e=xt().filter(i=>i.moduleId!==t&&xs(i.themeFor,s)).map(i=>({...i,styles:[...Is(i),...i.styles],includePriority:fr(i.moduleId)})).sort((i,o)=>o.includePriority-i.includePriority);return e.length>0?e:xt().filter(i=>i.moduleId===t)}const P=s=>class extends As(s){constructor(){super(),Ct.add(new WeakRef(this))}static finalize(){if(super.finalize(),this.is&&Gt.add(this.is),this.elementStyles)return;const e=this.prototype._template;!e||Cs(this)||hr(this.getStylesForThis(),e)}static finalizeStyles(e){const i=this.getStylesForThis();return e?[...[e].flat(1/0),...i]:i}static getStylesForThis(){const e=s.__themes||[],i=Object.getPrototypeOf(this.prototype),o=(i?i.constructor.__themes:[])||[];this.__themes=[...e,...o,..._r(this.is)];const r=this.__themes.flatMap(n=>n.styles);return r.filter((n,a)=>a===r.lastIndexOf(n))}};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let wi=0;function Ps(s,t=[],e={}){const i=e.moduleId||`custom-style-module-${wi}`;wi+=1;const o=document.createElement("dom-module");s&&o.setAttribute("theme-for",s);const r=!!(t.length&&e.moduleId),n=[].concat(e.include||[]);n.length===0?o.__allStyles=t:r||(o.__partialStyles=t),o.innerHTML=`
    <template>
      ${n.map(a=>`<style include=${a}></style>`)}
      ${r?`<style>${t.map(a=>a.cssText).join(`
`)}</style>`:""}
    </template>
  `,o.register(i)}function gr(s){return Wt(s.querySelector("template")).map(t=>ds(t.textContent))}function vr(){const t=se.prototype.modules;return Object.keys(t).map(e=>{const i=t[e],o=i.getAttribute("theme-for");return i.__allStyles||(i.__allStyles=gr(i).concat(i.__partialStyles||[])),{themeFor:o,moduleId:e,styles:i.__allStyles}})}window.Vaadin||(window.Vaadin={});window.Vaadin.styleModules={getAllThemes:vr,registerStyles:Ps};J&&J.length>0&&(J.forEach(s=>{Ps(s.themeFor,s.styles,{moduleId:s.moduleId,include:s.include})}),J.length=0);/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */window.Vaadin||={};window.Vaadin.featureFlags||={};function br(s){return s.replace(/-[a-z]/gu,t=>t[1].toUpperCase())}const M={};function v(s,t="24.7.6"){if(Object.defineProperty(s,"version",{get(){return t}}),s.experimental){const i=typeof s.experimental=="string"?s.experimental:`${br(s.is.split("-").slice(1).join("-"))}Component`;if(!window.Vaadin.featureFlags[i]&&!M[i]){M[i]=new Set,M[i].add(s),Object.defineProperty(window.Vaadin.featureFlags,i,{get(){return M[i].size===0},set(o){o&&M[i].size>0&&(M[i].forEach(r=>{customElements.define(r.is,r)}),M[i].clear())}});return}else if(M[i]){M[i].add(s);return}}const e=customElements.get(s.is);if(!e)customElements.define(s.is,s);else{const i=e.version;i&&s.version&&i===s.version?console.warn(`The component ${s.is} has been loaded twice`):console.error(`Tried to define ${s.is} version ${s.version} when version ${e.version} is already in use. Something will probably break.`)}}/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class yr extends HTMLElement{static get is(){return"vaadin-lumo-styles"}}v(yr);/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ar=(s,...t)=>{const e=document.createElement("style");e.id=s,e.textContent=t.map(i=>i.toString()).join(`
`).replace(":host","html"),document.head.insertAdjacentElement("afterbegin",e)},$=(s,...t)=>{Ar(`lumo-${s}`,t)};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Cr=m`
  :host {
    /* Base (background) */
    --lumo-base-color: #fff;

    /* Tint */
    --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);
    --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);
    --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);
    --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);
    --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);
    --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);
    --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);
    --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);
    --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);
    --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);
    --lumo-tint: #fff;

    /* Shade */
    --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);
    --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);
    --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);
    --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);
    --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);
    --lumo-shade-50pct: hsla(214, 45%, 20%, 0.52);
    --lumo-shade-60pct: hsla(214, 43%, 19%, 0.6);
    --lumo-shade-70pct: hsla(214, 42%, 18%, 0.69);
    --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);
    --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);
    --lumo-shade: hsl(214, 35%, 15%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-shade-5pct);
    --lumo-contrast-10pct: var(--lumo-shade-10pct);
    --lumo-contrast-20pct: var(--lumo-shade-20pct);
    --lumo-contrast-30pct: var(--lumo-shade-30pct);
    --lumo-contrast-40pct: var(--lumo-shade-40pct);
    --lumo-contrast-50pct: var(--lumo-shade-50pct);
    --lumo-contrast-60pct: var(--lumo-shade-60pct);
    --lumo-contrast-70pct: var(--lumo-shade-70pct);
    --lumo-contrast-80pct: var(--lumo-shade-80pct);
    --lumo-contrast-90pct: var(--lumo-shade-90pct);
    --lumo-contrast: var(--lumo-shade);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 100%, 48%);
    --lumo-primary-color-50pct: hsla(214, 100%, 49%, 0.76);
    --lumo-primary-color-10pct: hsla(214, 100%, 60%, 0.13);
    --lumo-primary-text-color: hsl(214, 100%, 43%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 85%, 48%);
    --lumo-error-color-50pct: hsla(3, 85%, 49%, 0.5);
    --lumo-error-color-10pct: hsla(3, 85%, 49%, 0.1);
    --lumo-error-text-color: hsl(3, 89%, 42%);
    --lumo-error-contrast-color: #fff;

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 72%, 31%, 0.5);
    --lumo-success-color-10pct: hsla(145, 72%, 31%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 25%);
    --lumo-success-contrast-color: #fff;

    /* Warning */
    --lumo-warning-color: hsl(48, 100%, 50%);
    --lumo-warning-color-10pct: hsla(48, 100%, 50%, 0.25);
    --lumo-warning-text-color: hsl(32, 100%, 30%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  /* forced-colors mode adjustments */
  @media (forced-colors: active) {
    html {
      --lumo-disabled-text-color: GrayText;
    }
  }
`;$("color-props",Cr);const Ss=m`
  [theme~='dark'] {
    /* Base (background) */
    --lumo-base-color: hsl(214, 35%, 21%);

    /* Tint */
    --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);
    --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);
    --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);
    --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);
    --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);
    --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);
    --lumo-tint-60pct: hsla(214, 82%, 90%, 0.58);
    --lumo-tint-70pct: hsla(214, 87%, 92%, 0.69);
    --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);
    --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);
    --lumo-tint: hsl(214, 100%, 98%);

    /* Shade */
    --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);
    --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);
    --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);
    --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);
    --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);
    --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);
    --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);
    --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);
    --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);
    --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);
    --lumo-shade: hsl(214, 33%, 13%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-tint-5pct);
    --lumo-contrast-10pct: var(--lumo-tint-10pct);
    --lumo-contrast-20pct: var(--lumo-tint-20pct);
    --lumo-contrast-30pct: var(--lumo-tint-30pct);
    --lumo-contrast-40pct: var(--lumo-tint-40pct);
    --lumo-contrast-50pct: var(--lumo-tint-50pct);
    --lumo-contrast-60pct: var(--lumo-tint-60pct);
    --lumo-contrast-70pct: var(--lumo-tint-70pct);
    --lumo-contrast-80pct: var(--lumo-tint-80pct);
    --lumo-contrast-90pct: var(--lumo-tint-90pct);
    --lumo-contrast: var(--lumo-tint);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 90%, 48%);
    --lumo-primary-color-50pct: hsla(214, 90%, 70%, 0.69);
    --lumo-primary-color-10pct: hsla(214, 90%, 55%, 0.13);
    --lumo-primary-text-color: hsl(214, 90%, 77%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 79%, 49%);
    --lumo-error-color-50pct: hsla(3, 75%, 62%, 0.5);
    --lumo-error-color-10pct: hsla(3, 75%, 62%, 0.14);
    --lumo-error-text-color: hsl(3, 100%, 80%);

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 92%, 51%, 0.5);
    --lumo-success-color-10pct: hsla(145, 92%, 51%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 46%);

    /* Warning */
    --lumo-warning-color: hsl(43, 100%, 48%);
    --lumo-warning-color-10pct: hsla(40, 100%, 50%, 0.2);
    --lumo-warning-text-color: hsl(45, 100%, 60%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  html {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: light;
  }

  [theme~='dark'] {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: dark;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--lumo-header-text-color);
  }

  a:where(:any-link) {
    color: var(--lumo-primary-text-color);
  }

  a:not(:any-link) {
    color: var(--lumo-disabled-text-color);
  }

  blockquote {
    color: var(--lumo-secondary-text-color);
  }

  code,
  pre {
    background-color: var(--lumo-contrast-10pct);
    border-radius: var(--lumo-border-radius-m);
  }
  pre code {
    background: transparent;
  }
`;_("",Ss,{moduleId:"lumo-color"});/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const xr=m`
  :host {
    --lumo-size-xs: 1.625rem;
    --lumo-size-s: 1.875rem;
    --lumo-size-m: 2.25rem;
    --lumo-size-l: 2.75rem;
    --lumo-size-xl: 3.5rem;

    /* Icons */
    --lumo-icon-size-s: 1.25em;
    --lumo-icon-size-m: 1.5em;
    --lumo-icon-size-l: 2.25em;
    /* For backwards compatibility */
    --lumo-icon-size: var(--lumo-icon-size-m);
  }
`;$("sizing-props",xr);/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const wr=m`
  :host {
    /* Border radius */
    --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */
    --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */
    --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */

    /* Shadow */
    --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);
    --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);
    --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);
    --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);
    --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);

    /* Clickable element cursor */
    --lumo-clickable-cursor: default;
  }
`;m`
  html {
    /* Button */
    --vaadin-button-background: var(--lumo-contrast-5pct);
    --vaadin-button-border: none;
    --vaadin-button-border-radius: var(--lumo-border-radius-m);
    --vaadin-button-font-size: var(--lumo-font-size-m);
    --vaadin-button-font-weight: 500;
    --vaadin-button-height: var(--lumo-size-m);
    --vaadin-button-margin: var(--lumo-space-xs) 0;
    --vaadin-button-min-width: calc(var(--vaadin-button-height) * 2);
    --vaadin-button-padding: 0 calc(var(--vaadin-button-height) / 3 + var(--lumo-border-radius-m) / 2);
    --vaadin-button-text-color: var(--lumo-primary-text-color);
    --vaadin-button-primary-background: var(--lumo-primary-color);
    --vaadin-button-primary-border: none;
    --vaadin-button-primary-font-weight: 600;
    --vaadin-button-primary-text-color: var(--lumo-primary-contrast-color);
    --vaadin-button-tertiary-background: transparent !important;
    --vaadin-button-tertiary-text-color: var(--lumo-primary-text-color);
    --vaadin-button-tertiary-font-weight: 500;
    --vaadin-button-tertiary-padding: 0 calc(var(--vaadin-button-height) / 6);
    /* Checkbox */
    --vaadin-checkbox-background: var(--lumo-contrast-20pct);
    --vaadin-checkbox-background-hover: var(--lumo-contrast-30pct);
    --vaadin-checkbox-border-radius: var(--lumo-border-radius-s);
    --vaadin-checkbox-checkmark-char: var(--lumo-icons-checkmark);
    --vaadin-checkbox-checkmark-char-indeterminate: '';
    --vaadin-checkbox-checkmark-color: var(--lumo-primary-contrast-color);
    --vaadin-checkbox-checkmark-size: calc(var(--vaadin-checkbox-size) + 2px);
    --vaadin-checkbox-label-color: var(--lumo-body-text-color);
    --vaadin-checkbox-label-font-size: var(--lumo-font-size-m);
    --vaadin-checkbox-label-padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs) var(--lumo-space-xs);
    --vaadin-checkbox-size: calc(var(--lumo-size-m) / 2);
    --vaadin-checkbox-disabled-checkmark-color: var(--lumo-contrast-30pct);
    --vaadin-checkbox-disabled-background: var(--lumo-contrast-10pct);
    /* Radio button */
    --vaadin-radio-button-background: var(--lumo-contrast-20pct);
    --vaadin-radio-button-background-hover: var(--lumo-contrast-30pct);
    --vaadin-radio-button-dot-color: var(--lumo-primary-contrast-color);
    --vaadin-radio-button-dot-size: 3px;
    --vaadin-radio-button-label-color: var(--lumo-body-text-color);
    --vaadin-radio-button-label-font-size: var(--lumo-font-size-m);
    --vaadin-radio-button-label-padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs)
      var(--lumo-space-xs);
    --vaadin-radio-button-size: calc(var(--lumo-size-m) / 2);
    --vaadin-radio-button-disabled-background: var(--lumo-contrast-10pct);
    --vaadin-radio-button-disabled-dot-color: var(--lumo-contrast-30pct);
    --vaadin-selection-color: var(--lumo-primary-color);
    --vaadin-selection-color-text: var(--lumo-primary-text-color);
    --vaadin-input-field-border-radius: var(--lumo-border-radius-m);
    --vaadin-focus-ring-color: var(--lumo-primary-color-50pct);
    --vaadin-focus-ring-width: 2px;
    /* Label */
    --vaadin-input-field-label-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-focused-label-color: var(--lumo-primary-text-color);
    --vaadin-input-field-hovered-label-color: var(--lumo-body-text-color);
    --vaadin-input-field-label-font-size: var(--lumo-font-size-s);
    --vaadin-input-field-label-font-weight: 500;
    /* Helper */
    --vaadin-input-field-helper-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-helper-font-size: var(--lumo-font-size-xs);
    --vaadin-input-field-helper-font-weight: 400;
    --vaadin-input-field-helper-spacing: 0.4em;
    /* Error message */
    --vaadin-input-field-error-color: var(--lumo-error-text-color);
    --vaadin-input-field-error-font-size: var(--lumo-font-size-xs);
    --vaadin-input-field-error-font-weight: 400;
    /* Input field */
    --vaadin-input-field-background: var(--lumo-contrast-10pct);
    --vaadin-input-field-icon-color: var(--lumo-contrast-60pct);
    --vaadin-input-field-icon-size: var(--lumo-icon-size-m);
    --vaadin-input-field-invalid-background: var(--lumo-error-color-10pct);
    --vaadin-input-field-invalid-hover-highlight: var(--lumo-error-color-50pct);
    --vaadin-input-field-disabled-background: var(--lumo-contrast-5pct);
    --vaadin-input-field-disabled-value-color: var(--lumo-disabled-text-color);
    --vaadin-input-field-height: var(--lumo-size-m);
    --vaadin-input-field-hover-highlight: var(--lumo-contrast-50pct);
    --vaadin-input-field-placeholder-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-readonly-border: 1px dashed var(--lumo-contrast-30pct);
    --vaadin-input-field-value-color: var(--lumo-body-text-color);
    --vaadin-input-field-value-font-size: var(--lumo-font-size-m);
    --vaadin-input-field-value-font-weight: 500;
  }
`;$("style-props",wr);/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Er=m`
  :host {
    /* prettier-ignore */
    --lumo-font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    /* Font sizes */
    --lumo-font-size-xxs: 0.75rem;
    --lumo-font-size-xs: 0.8125rem;
    --lumo-font-size-s: 0.875rem;
    --lumo-font-size-m: 1rem;
    --lumo-font-size-l: 1.125rem;
    --lumo-font-size-xl: 1.375rem;
    --lumo-font-size-xxl: 1.75rem;
    --lumo-font-size-xxxl: 2.5rem;

    /* Line heights */
    --lumo-line-height-xs: 1.25;
    --lumo-line-height-s: 1.375;
    --lumo-line-height-m: 1.625;
  }
`,Ts=m`
  body,
  :host {
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-m);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  small,
  [theme~='font-size-s'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
  }

  [theme~='font-size-xs'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
  }

  :where(h1, h2, h3, h4, h5, h6) {
    font-weight: 600;
    line-height: var(--lumo-line-height-xs);
    margin-block: 0;
  }

  :where(h1) {
    font-size: var(--lumo-font-size-xxxl);
  }

  :where(h2) {
    font-size: var(--lumo-font-size-xxl);
  }

  :where(h3) {
    font-size: var(--lumo-font-size-xl);
  }

  :where(h4) {
    font-size: var(--lumo-font-size-l);
  }

  :where(h5) {
    font-size: var(--lumo-font-size-m);
  }

  :where(h6) {
    font-size: var(--lumo-font-size-xs);
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  p,
  blockquote {
    margin-top: 0.5em;
    margin-bottom: 0.75em;
  }

  a {
    text-decoration: none;
  }

  a:where(:any-link):hover {
    text-decoration: underline;
  }

  hr {
    display: block;
    align-self: stretch;
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);
    background-color: var(--lumo-contrast-10pct);
  }

  blockquote {
    border-left: 2px solid var(--lumo-contrast-30pct);
  }

  b,
  strong {
    font-weight: 600;
  }

  /* RTL specific styles */
  blockquote[dir='rtl'] {
    border-left: none;
    border-right: 2px solid var(--lumo-contrast-30pct);
  }
`;_("",Ts,{moduleId:"lumo-typography"});$("typography-props",Er);_("vaadin-input-container",m`
    :host {
      background: var(--_background);
      padding: 0 calc(0.375em + var(--_input-container-radius) / 4 - 1px);
      font-weight: var(--vaadin-input-field-value-font-weight, 500);
      line-height: 1;
      position: relative;
      cursor: text;
      box-sizing: border-box;
      border-radius:
        /* See https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius#syntax */
        var(--vaadin-input-field-top-start-radius, var(--_input-container-radius))
        var(--vaadin-input-field-top-end-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-end-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-start-radius, var(--_input-container-radius));
      /* Fallback */
      --_input-container-radius: var(--vaadin-input-field-border-radius, var(--lumo-border-radius-m));
      --_input-height: var(--lumo-text-field-size, var(--lumo-size-m));
      /* Default values */
      --_background: var(--vaadin-input-field-background, var(--lumo-contrast-10pct));
      --_hover-highlight: var(--vaadin-input-field-hover-highlight, var(--lumo-contrast-50pct));
      --_input-border-color: var(--vaadin-input-field-border-color, var(--lumo-contrast-50pct));
      --_icon-color: var(--vaadin-input-field-icon-color, var(--lumo-contrast-60pct));
      --_icon-size: var(--vaadin-input-field-icon-size, var(--lumo-icon-size-m));
      --_invalid-background: var(--vaadin-input-field-invalid-background, var(--lumo-error-color-10pct));
      --_invalid-hover-highlight: var(--vaadin-input-field-invalid-hover-highlight, var(--lumo-error-color-50pct));
      --_disabled-background: var(--vaadin-input-field-disabled-background, var(--lumo-contrast-5pct));
      --_disabled-value-color: var(--vaadin-input-field-disabled-value-color, var(--lumo-disabled-text-color));
    }

    :host([dir='rtl']) {
      border-radius:
        /* Don't use logical props, see https://github.com/vaadin/vaadin-time-picker/issues/145 */
        var(--vaadin-input-field-top-end-radius, var(--_input-container-radius))
        var(--vaadin-input-field-top-start-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-start-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-end-radius, var(--_input-container-radius));
    }

    /* Used for hover and activation effects */
    :host::after {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
      pointer-events: none;
      background: var(--_hover-highlight);
      opacity: 0;
      transition:
        transform 0.15s,
        opacity 0.2s;
      transform-origin: 100% 0;
    }

    ::slotted(:not([slot$='fix'])) {
      cursor: inherit;
      min-height: var(--vaadin-input-field-height, var(--_input-height));
      padding: 0 0.25em;
      --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
      -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);
      mask-image: var(--_lumo-text-field-overflow-mask-image);
    }

    /* Read-only */
    :host([readonly]) {
      color: var(--lumo-secondary-text-color);
      background-color: transparent;
      cursor: default;
    }

    :host([readonly])::after {
      background-color: transparent;
      opacity: 1;
      border: var(--vaadin-input-field-readonly-border, 1px dashed var(--lumo-contrast-30pct));
    }

    /* Disabled */
    :host([disabled]) {
      background: var(--_disabled-background);
    }

    :host([disabled]) ::slotted(:not([slot$='fix'])) {
      -webkit-text-fill-color: var(--_disabled-value-color);
      color: var(--_disabled-value-color);
    }

    /* Invalid */
    :host([invalid]) {
      background: var(--_invalid-background);
    }

    :host([invalid]:not([readonly]))::after {
      background: var(--_invalid-hover-highlight);
    }

    /* Slotted icons */
    ::slotted(vaadin-icon) {
      color: var(--_icon-color);
      width: var(--_icon-size);
      height: var(--_icon-size);
    }

    /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
    ::slotted(vaadin-icon[icon^='vaadin:']) {
      padding: 0.25em;
      box-sizing: border-box !important;
    }

    /* Text align */
    :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent, #000 1.25em);
    }

    @-moz-document url-prefix() {
      :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
        mask-image: var(--_lumo-text-field-overflow-mask-image);
      }
    }

    :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
      text-align: start;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center']) ::slotted(:not([slot$='fix'])) {
      text-align: center;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
      text-align: end;
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }

    /* RTL specific styles */
    :host([dir='rtl'])::after {
      transform-origin: 0% 0;
    }

    :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }
  `,{moduleId:"lumo-input-container"});/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ir=m`
  @font-face {
    font-family: 'lumo-icons';
    src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABHAAAsAAAAAI6AAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuNY21hcAAAAYgAAAD+AAADymne8hxnbHlmAAACiAAAC+gAABioIzlOlWhlYWQAAA5wAAAAMAAAADZa/6SsaGhlYQAADqAAAAAdAAAAJAbpA4BobXR4AAAOwAAAABAAAAC0q+AAAGxvY2EAAA7QAAAAXAAAAFyF7o1GbWF4cAAADywAAAAfAAAAIAFMAXBuYW1lAAAPTAAAATEAAAIuUUJZCHBvc3QAABCAAAABPQAAAgfdkltveJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+xDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mEO+p/FEMUcxDANKMwIkgMABvgMMAB4nO3SV26EMABF0UsZpjG9d6Y3FpgF5StLYxMTP16WEUvHV1gGIQzQAJKgDFKIfojQ+A6rUb2e0KnXU77qPanWq/LzCXOkOVyn9RyHvWl4YkaTFu1wX5ecHn0GDBkxZsKUGXMWLFmxZsOWHXsOFBw5cebClRt3Hjx58dZ7RRn/I9cUF39Xpb691acRG2piOtUqNZ1P1TCdeJUZatNQW4baNtSO6U+ouoaam96u6hlq31AHhjo01JGhjg11YqhTQ50Z6txQF4a6NNSVoa4NdWOoW0PdGereUA+GWhjq0VBPhno21IuhXg31Zqh3Q30Y6tNQX4b6NtTSKH8BOIRpQQAAeJy1WH1sW9UVv+fG9vPz+7Bf/N6zHcd2/J04jbP6s0lap4kDpB9JWzUUCqxNgaHxpTI6hNhUNLVr17HSISb2D2iAJrWb6FTWahNQdQxRvmHamAR0qibE1E18CG3QaVNFvJ17n+3YIf1AiMQ679x77j3v3HPPPed3H7ER/OsYpw8TmQRIiuQJ8RZK+WjO1B3xaCzla21orY10a+OQ6aHTHtP0zB31mBs1GZ6RNU2uXc7oPL+xdRS9R9X1oK4fVfijdsBqvqF6vd1eLzPrYrYZ57WteF7bPDIc5+ZcJnta+S9i2Vfhs4MaMwZNQmO0Vv7gF/MZcNsCcJp4sJFSwYyAmRuFCmTBDRBUkwGqnlViyjmVBpLqaXhNpt0J5V1JOqMkuqn8WkMHvZX+iOlImiqkBiFVYDrCqINulmkwKb8ry2fkZBBn7FcTlk4ZdfpRZ9MOesLSAakKt0N3g4p2jAL8eIEOOqom/U0lgQRXUl8LtXM7HFkojUIpF0ErVBhcZC1vtyjtpsqr83a8RVcSH+ool8LgcIMjNohmVCACuDs506BdO6WIQeXjUsh1XKZGRNpp9piv3+Givoh00OU6KEV81HUHTLtN093Q+YGlE3wLHWRtMNy9XWqdLm2HKbaNsGzhu+41eswFOjE6WKSk2/1Wpt+qHeM6phbohmVmj3GvpdcVkiy9zbXfzHVqKuDB0IR2P6ZpF+D7dy6YC/9svGmBE5hKB9+X2+hh4iYRMkhGyTqyFc9APmeGQHf043tWQKHkizmwaY5AroTNVJzJDc2SFzUu92kOLsdmKu77vByb8/IjtxmhkMFISRBFISO4XMLJlj4XgGuRXtaHw2FLyHifdSOpisIhJjgkiPBAyJh7lfXTkhEadwk1mUngrOC6MazX7mASeEAPV1FyjEumBOaEDu4DP/ogRDKkiLEV1woVyMeLLKJCEM+FwdCwL4XLcRgdbfkhbzS8BNvXDKzNQiAWgOzagTXF1Eyq+Ci6/TPm/JrNY/59p1epKN4jQFGe0fx+LTMwNVCrAU2VSqnaKYzIiGmWe2Rvp9KDJhncrjLaFce8VCUbyQ1kB9lNfkJ+To6R58mfyd/Ip9ABXohDHqqwEW7A2Mij1ehntLu+h8xMtocjUJcYwoLdtYafv/1Vjy8vjLaLtBfOt3/B931Rexa24e5zstgnyqvZHs69zuhq3vFgRpQVJyN7FuE++RLSeW4xMi+t6Zeo5sIK6S5dlGVRD2hWnGoB3j7OV3lesvNLic8tOnLRSRfRdOna63VJp/1WbYs5dFZjy1AqpGICQEWKmNI+CZNoVTJ7pNop+IZkRrBHgnEmqr3TrEsfw1Gi8LqE+S1aV0SNNwXVVVvuUoU3ld6TLwmditIpvKTU50zSzWwO1h0rL8awnulwTXMYrGDT4aQ1fb4GPkyv5vMEh5Vec6yw0AMXnfcx1l/rfVZaKLDi0W4j/HfeyGZuHOf1IUGW1udizU2leXY0OmLpVDpVKJfKpZzPRKHgEBzpXAUKWYipoIeBdl3JfLZVBizEqWun1i4ZGFiyduq3DebayXsmJ+95gBG4+Urm1a2SdpKV57lP2wZyZqI+FAlfUtO+NCmgdWhMOS1gDY+jHWnBhwjBQLMEXxmLbx6t9JXTWDLtsSxgisfErqvQMbbBoywZmeyLeWe8OWNydFDxzMx4lMGRtX0xN3YFJkeW+O0bascGNwwObtjCCOzrzAVWjSwN2K9cpyn9o5cZOXMmkAuM85EbNHnJyHhfLLCnPhxJYw9eoIMkyC3l+4ZuY5ig7lW2oYUynDgg+Xrk+++Xe3zSgRYetnyuy+KbfjiB+GAAtZ8HHXmtijZfFFgrujhmOs2qkXvuSV6WqA1WLYqhPHOfsa26rklKFqbAGL2dOIlGurB6LWFVFd/KoBBaYTFYVBs93hZRFlrG5Ex4NVFIJguJVvqnBW2kNNvFGx90YUcSEvyZSMDeZjc0xYlEYy8+hHcWx9YrZOaPPyCGepP5Q34aXnGBr8d1QhSf4yjtiebZqNJfEYl4SY6dDRb8WSguLZW9ZQtBpoW4hX0QMyB2KmsYcOh8HMQxBn288oZ6BXV0GOq/ClKsC6T8g9X3OFKZNkJrYkOx2lEk+KNDy953+wGHXuGGzhGZ+uLK8FVrQkbtKBv+9EztU2sgTCNpvXMdJjqJ4tkdw+x00dPKkZ1QR254x7GQoFmvfakSnL3gCc5nREly2mN2pyTLMacMipNT7YInGU7JzlN2p9N+yinXTirOKEvPUafSWMNDmCf9pIQYaG19DSxKGqvAQ+xg60iabEm5MheUU2n+HxO4TDDbjnw6xxK8QzfhbHXq8pWVqanKysun9s6ztdt7sivGqruqYyuyPS6Hw9XehGt6q+l0dT0jvaFMZjiTuTHo7+vdtHJTb58/2ML+IxHt9/n9vv5owiWKrrbWD+sakKxhKoYzxF5f7y9INxki42QNuYrVFDPfvqxyY83xWNMV+ZxPSMWb62W+wPSCJwkDDl1WZOGW84nAEo4A7HjB/uWmOdayRFnKjazi668u/ajJlUd87aPk048Crlu4j1Oh9gxdL3Z1inNPIt2xvKNlsU4hn54Z5Y6YbTDu9hHOvkcFAb35fU6hNovKOrtQmcvbNV9/Ntfv5xf4atDWOOTX6CSHZ08xujhPs51+f9zvf1YLIGoPPKvxVh0TSLAXzzUBFiXs7GJVB7vH5/PAXznd4+vx4a95h3qI/oYIpIdMkA1kC7kVLS3GhWI5bwj1fIaVKG/Ei5gXWOjhtcJbzFthaMQrwIcIRj0ppvO6yV95icu9j/YPDNySWp7w+kOr95R1RfGpfVlDVhS/2geJ5Umv2mn0rkxBvzvgdisndJXaVF1X5z5jdHGe2n/QnYo8+b2uaMivhowgjYcLnVqnrEpQezsieyVZ6ooETbdJO6ip+cORLpes6BL82/qg8VHbo45B/vch/YQeJX28QvEANR3sQhxh+TcMCEd4l8BKF7uID7KM05tRYlIHHXY63YIi2fXQyj5XSBbcMeewKLpttkJ2Syz33YJfDdJdSYkqHbYb3VHRJgTV8c0TAy67YHeK7htwOKWax5co7Do8Pfh1tKdx1g5j9o6TZeQyMo27FuW3vbYsbY/Op3AG06DMKionRlpgHzCEeMmLU5opRrCyS670RzppZeW5p/iT3jL3lB4O63QS6dzzh8SAtOqwGJK3bv+lGJTWbr++471wsVKMRJCEK5H+cLg/Qp+IDsdqs7HhKD7hMXyyrD/Li8RjRqimHhI7HP2vSDZn9brplySb0L9dgpURSwmSiBFhilrwB8OA9gZ29NkRO/669parW9e7XZDxwvgRu+SE7zgl+xG5p/HtRqJ3cdwSZwsbwTA1WT3jEdyPN0sWxvDGy+xovIzHosnwc9LePf9tywun0fMkWaFYZbB4oovRq8VyKYUBkMVXqVhBHSylQ0wanvla3+rQ1XbR8ZzstYOo2Mf7vjk8ftcGDWxdSdXx0cAVveHg1TZFtEOn8ntBBFs11V++vuLUQ5qz+U6d/oUjpGIdNjOQhJXNqn5YCS1Yy5PofLGEs6Js2yOKe2yyOLxtaGjbt7cNIURCEDdWfaQ6lurtRYbePCuItv1iUNxvE4Vdw2zQ0LZhdv2fxjHp5uAmdlBpopHXoJGU8e6BRc0yi+PztkaHTRRrW1m2hcfFLlEUzzD+DGczjEVCg9jEQZhFcdAL2DjD+DPiSWQzjM2I89g5RXdxfECS+CIWy1hTGmFs6EIbkv/pbtkfU3aPrZ+4c2Lizn07qufym/L5TTdtyuU2/We3HPeDsjtb3bGPSSfW31aX3LQpX/d9sL7fWYpRJPBbCJavYjrFjj0rT2GWCZjf6Ytffr8beXl/HYeyGwJiIK8FLDHbfo65xGz7YCSRqCQSkbbHI5eUU5X4sjj+zrU9aHnRlEnrd7YGptd0x2Jf/RbH9PAiovadckSnEsJ661OgPFuH9B4O6e202vIN0h9xHXSJh1wRP5Vqv1uI6Wn9Gxmrwzqrii1gqhEscJanuAlGas+s2/uzvetgS72NpHZ6aHbZstmh/wPq1seEeJxjYGRgYADi31ySEvH8Nl8ZuJlfAEUYalQ3NCLo/6+ZpzLdAnI5GJhAogAiBgraeJxjYGRgYA76nwUkXzAAAfNUBkYGVKALAFb4A3EAAAB4nGNgYGBgfjG0MAAMzihlAAAAAABOAJoA6AEKASwBTgFwAZoBxAHuAhoCnALoBJoEvATWBPIFDgUqBXoF0AX+BkQGlga4BwgHagfiCGoIpAi8CVAJmAoQCiwKVgqQCtYLGAtOC4gL6AwuDFR4nGNgZGBg0GVMYRBlAAEmIOYCQgaG/2A+AwAYygG+AHicbZE9TsMwGIbf9A/RSggEYmHxAgtq+jN2ZGj3Dt3T1GlTOXHkuBW9AyfgEByCgTNwCA7BW/NJlVBtyd/jx+8XKwmAa3whwnFE6Ib1OBq44O6Pm6Qb4Rb5QbiNHh6FO/RD4S6eMRHu4RaaT4halzR3eBVu4Apvwk36d+EW+UO4jXt8Cnfov4W7WOBHuIen6MXsCtvPU1vWc73emcSdxIkW2tW5LdUoHp7kTJfaJV6v1PKg6v167H2mMmcLNbWl18ZYVTm71amPN95Xk8EgEx+ntoDBDgUs+siRspaoMef7rukNEriziXNuwS7Hmoe9wggxv+e55IzJMqQTeNYV00scuNbY8+YxrUfGfcaMZb/CNPQe04bT0lThbEuT0sfYhK6K/23Amf3Lx+H24hcj4GScAAAAeJxtjuduwzAMhH2NnTqOk+6993TfSZFY24giGZTVon36eiRFf5SAiO/A05HBWtBXEvxfGdYwQIgIQ6wjxggJxkgxwRQb2MQWtrGDXexhHwc4xBGOcYJTnOEcF7jEFa5xg1vc4R4PeMQTnvGCV2R4C1Khy9xkkkxNnPRC03s97pHLvKgTYXJNmbKfZom9o8POEffsq0Qw28+ltcPe2uHS2rGvRjPBmSwE1+GMtI6l0GSU4JEsSM4XgudpQx9sTRf3K9rAyUr0962UryKprZwPpM0jyda5uP2qrVBjxSLPCmGUplixrdpBSKqsI2oO4gF9Udq8TJVOzDSpcEHGR4vSeJdaVsSkMl26OqoKa6jttQ0rLb6a5l3YjO2QqV01YXLlNy2XDR0JlkXojbJTb/5GDX3V+kPviIPgB9AUks0AAAA=)
      format('woff');
    font-weight: normal;
    font-style: normal;
  }

  html {
    --lumo-icons-align-center: '\\ea01';
    --lumo-icons-align-left: '\\ea02';
    --lumo-icons-align-right: '\\ea03';
    --lumo-icons-angle-down: '\\ea04';
    --lumo-icons-angle-left: '\\ea05';
    --lumo-icons-angle-right: '\\ea06';
    --lumo-icons-angle-up: '\\ea07';
    --lumo-icons-arrow-down: '\\ea08';
    --lumo-icons-arrow-left: '\\ea09';
    --lumo-icons-arrow-right: '\\ea0a';
    --lumo-icons-arrow-up: '\\ea0b';
    --lumo-icons-bar-chart: '\\ea0c';
    --lumo-icons-bell: '\\ea0d';
    --lumo-icons-calendar: '\\ea0e';
    --lumo-icons-checkmark: '\\ea0f';
    --lumo-icons-chevron-down: '\\ea10';
    --lumo-icons-chevron-left: '\\ea11';
    --lumo-icons-chevron-right: '\\ea12';
    --lumo-icons-chevron-up: '\\ea13';
    --lumo-icons-clock: '\\ea14';
    --lumo-icons-cog: '\\ea15';
    --lumo-icons-cross: '\\ea16';
    --lumo-icons-download: '\\ea17';
    --lumo-icons-drag-handle: '\\ea18';
    --lumo-icons-dropdown: '\\ea19';
    --lumo-icons-edit: '\\ea1a';
    --lumo-icons-error: '\\ea1b';
    --lumo-icons-eye: '\\ea1c';
    --lumo-icons-eye-disabled: '\\ea1d';
    --lumo-icons-menu: '\\ea1e';
    --lumo-icons-minus: '\\ea1f';
    --lumo-icons-ordered-list: '\\ea20';
    --lumo-icons-phone: '\\ea21';
    --lumo-icons-photo: '\\ea22';
    --lumo-icons-play: '\\ea23';
    --lumo-icons-plus: '\\ea24';
    --lumo-icons-redo: '\\ea25';
    --lumo-icons-reload: '\\ea26';
    --lumo-icons-resize-handle: '\\ea27';
    --lumo-icons-search: '\\ea28';
    --lumo-icons-undo: '\\ea29';
    --lumo-icons-unordered-list: '\\ea2a';
    --lumo-icons-upload: '\\ea2b';
    --lumo-icons-user: '\\ea2c';
  }
`;$("font-icons",Ir);/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Pr=m`
  :host {
    /* Square */
    --lumo-space-xs: 0.25rem;
    --lumo-space-s: 0.5rem;
    --lumo-space-m: 1rem;
    --lumo-space-l: 1.5rem;
    --lumo-space-xl: 2.5rem;

    /* Wide */
    --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);
    --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);
    --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);
    --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);
    --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);

    /* Tall */
    --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);
    --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);
    --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);
    --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);
    --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);
  }
`;$("spacing-props",Pr);/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ye=m`
  [part$='button'] {
    flex: none;
    width: 1em;
    height: 1em;
    line-height: 1;
    font-size: var(--lumo-icon-size-m);
    text-align: center;
    color: var(--lumo-contrast-60pct);
    transition: 0.2s color;
    cursor: var(--lumo-clickable-cursor);
  }

  [part$='button']:hover {
    color: var(--lumo-contrast-90pct);
  }

  :host([disabled]) [part$='button'],
  :host([readonly]) [part$='button'] {
    color: var(--lumo-contrast-20pct);
    cursor: default;
  }

  [part$='button']::before {
    font-family: 'lumo-icons';
    display: block;
  }
`;_("",Ye,{moduleId:"lumo-field-button"});/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Sr=m`
  :host {
    --_helper-spacing: var(--vaadin-input-field-helper-spacing, 0.4em);
  }

  :host([has-helper]) [part='helper-text']::before {
    content: '';
    display: block;
    height: var(--_helper-spacing);
  }

  [part='helper-text'] {
    display: block;
    color: var(--vaadin-input-field-helper-color, var(--lumo-secondary-text-color));
    font-size: var(--vaadin-input-field-helper-font-size, var(--lumo-font-size-xs));
    line-height: var(--lumo-line-height-xs);
    font-weight: var(--vaadin-input-field-helper-font-weight, 400);
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
  }

  :host(:hover:not([readonly])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  :host([disabled]) [part='helper-text'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::before {
    display: none;
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::after {
    content: '';
    display: block;
    height: var(--_helper-spacing);
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] {
    order: 0;
    padding-bottom: var(--_helper-spacing);
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text'] {
    order: 1;
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] + * {
    order: 2;
  }

  :host([has-helper][theme~='helper-above-field']) [part='error-message'] {
    order: 3;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const zs=m`
  [part='label'] {
    align-self: flex-start;
    color: var(--vaadin-input-field-label-color, var(--lumo-secondary-text-color));
    font-weight: var(--vaadin-input-field-label-font-weight, 500);
    font-size: var(--vaadin-input-field-label-font-size, var(--lumo-font-size-s));
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
    line-height: 1;
    padding-right: 1em;
    padding-bottom: 0.5em;
    /* As a workaround for diacritics being cut off, add a top padding and a
    negative margin to compensate */
    padding-top: 0.25em;
    margin-top: -0.25em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
    max-width: 100%;
    box-sizing: border-box;
  }

  :host([focused]:not([readonly])) [part='label'] {
    color: var(--vaadin-input-field-focused-label-color, var(--lumo-primary-text-color));
  }

  :host(:hover:not([readonly]):not([focused])) [part='label'] {
    color: var(--vaadin-input-field-hovered-label-color, var(--lumo-body-text-color));
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused])) [part='label'] {
      color: var(--vaadin-input-field-label-color, var(--lumo-secondary-text-color));
    }
  }

  :host([has-label])::before {
    margin-top: calc(var(--lumo-font-size-s) * 1.5);
  }

  :host([has-label][theme~='small'])::before {
    margin-top: calc(var(--lumo-font-size-xs) * 1.5);
  }

  :host([has-label]) {
    padding-top: var(--lumo-space-m);
  }

  :host([has-label]) ::slotted([slot='tooltip']) {
    --vaadin-tooltip-offset-bottom: calc((var(--lumo-space-m) - var(--lumo-space-xs)) * -1);
  }

  :host([required]) [part='required-indicator']::after {
    content: var(--lumo-required-field-indicator, '\\2022');
    transition: opacity 0.2s;
    color: var(--lumo-required-field-indicator-color, var(--lumo-primary-text-color));
    position: absolute;
    right: 0;
    width: 1em;
    text-align: center;
  }

  :host([invalid]) [part='required-indicator']::after {
    color: var(--lumo-required-field-indicator-color, var(--lumo-error-text-color));
  }

  [part='error-message'] {
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    font-size: var(--vaadin-input-field-error-font-size, var(--lumo-font-size-xs));
    line-height: var(--lumo-line-height-xs);
    font-weight: var(--vaadin-input-field-error-font-weight, 400);
    color: var(--vaadin-input-field-error-color, var(--lumo-error-text-color));
    will-change: max-height;
    transition: 0.4s max-height;
    max-height: 5em;
  }

  :host([has-error-message]) [part='error-message']::before,
  :host([has-error-message]) [part='error-message']::after {
    content: '';
    display: block;
    height: 0.4em;
  }

  :host(:not([invalid])) [part='error-message'] {
    max-height: 0;
    overflow: hidden;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='label'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }

  :host([dir='rtl']) [part='label'] {
    padding-left: 1em;
    padding-right: 0;
  }

  :host([dir='rtl']) [part='required-indicator']::after {
    right: auto;
    left: 0;
  }

  :host([dir='rtl']) [part='error-message'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }
`;_("",zs,{moduleId:"lumo-required-field"});/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Tr=m`
  :host {
    --lumo-text-field-size: var(--lumo-size-m);
    color: var(--vaadin-input-field-value-color, var(--lumo-body-text-color));
    font-size: var(--vaadin-input-field-value-font-size, var(--lumo-font-size-m));
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: var(--lumo-space-xs) 0;
    --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
    --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
    --_input-height: var(--vaadin-input-field-height, var(--lumo-text-field-size));
    --_disabled-value-color: var(--vaadin-input-field-disabled-value-color, var(--lumo-disabled-text-color));
  }

  :host::before {
    height: var(--_input-height);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host([focused]) [part='input-field'] ::slotted(:is(input, textarea)) {
    -webkit-mask-image: none;
    mask-image: none;
  }

  ::slotted(:is(input, textarea):placeholder-shown) {
    color: var(--vaadin-input-field-placeholder-color, var(--lumo-secondary-text-color));
  }

  /* Hover */
  :host(:hover:not([readonly]):not([focused]):not([disabled])) [part='input-field']::after {
    opacity: var(--vaadin-input-field-hover-highlight-opacity, 0.1);
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused]):not([disabled])) [part='input-field']::after {
      opacity: 0;
    }

    :host(:active:not([readonly]):not([focused]):not([disabled])) [part='input-field']::after {
      opacity: 0.2;
    }
  }

  /* Trigger when not focusing using the keyboard */
  :host([focused]:not([focus-ring]):not([readonly])) [part='input-field']::after {
    transform: scaleX(0);
    transition-duration: 0.15s, 1s;
  }

  /* Opt-in focus-ring when using pointer devices */
  /* This applies a focus-ring as box-shadow when the element is focused, but
     the ring is only visible / has a width when the respective CSS property is
     "enabled" using a value of 1 */
  :host([focused]) [part='input-field'] {
    /* Borders are implemented using box-shadows as well. To avoid overriding 
       the border on focus, even if the pointer focus-ring is disabled, we need to:
       - Duplicate the border box shadow for this rule
       - Remove the border (by using width of 0) when the focus-ring is visible,
         which is the same behavior as for the keyboard focus-ring below
       - Apply the border when the focus ring is not visible
    */
    --_pointer-focus-visible: clamp(0, var(--lumo-input-field-pointer-focus-visible, 0), 1);
    --_conditional-border-width: calc(calc(1 - var(--_pointer-focus-visible)) * var(--_input-border-width));
    --_conditional-focus-ring-width: calc(var(--_pointer-focus-visible) * var(--_focus-ring-width));
    box-shadow:
      inset 0 0 0 var(--_conditional-border-width) var(--_input-border-color),
      0 0 0 var(--_conditional-focus-ring-width) var(--_focus-ring-color);
  }

  /* Focus-ring when using keyboard navigation */
  :host([focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
  }

  /* Read-only and disabled */
  :host(:is([readonly], [disabled])) ::slotted(:is(input, textarea):placeholder-shown) {
    opacity: 0;
  }

  /* Read-only style */
  :host([readonly]) {
    --vaadin-input-field-border-color: transparent;
  }

  /* Disabled style */
  :host([disabled]) {
    pointer-events: none;
    --vaadin-input-field-border-color: var(--lumo-contrast-20pct);
  }

  :host([disabled]) [part='label'],
  :host([disabled]) [part='input-field'] ::slotted([slot$='fix']) {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  :host([disabled]) [part='input-field'] ::slotted(:not([slot$='fix'])) {
    color: var(--_disabled-value-color);
    -webkit-text-fill-color: var(--_disabled-value-color);
  }

  /* Invalid style */
  :host([invalid]) {
    --vaadin-input-field-border-color: var(--lumo-error-color);
    --_focus-ring-color: var(--lumo-error-color-50pct);
  }

  :host([input-prevented]) [part='input-field'] {
    animation: shake 0.15s infinite;
  }

  @keyframes shake {
    25% {
      transform: translateX(4px);
    }
    75% {
      transform: translateX(-4px);
    }
  }

  /* Small theme */
  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-text-field-size: var(--lumo-size-s);
  }

  :host([theme~='small']) [part='label'] {
    font-size: var(--lumo-font-size-xs);
  }

  :host([theme~='small']) [part='error-message'] {
    font-size: var(--lumo-font-size-xxs);
  }

  /* Slotted content */
  [part='input-field'] ::slotted(:not(vaadin-icon):not(input):not(textarea)) {
    color: var(--lumo-secondary-text-color);
    font-weight: 400;
  }

  [part='clear-button']::before {
    content: var(--lumo-icons-cross);
  }
`,Qe=[zs,Ye,Sr,Tr];_("",Qe,{moduleId:"lumo-input-field-shared-styles"});/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const zr=m`
  :host([step-buttons-visible]:not([theme~='align-right'])) ::slotted(input) {
    text-align: center;
  }

  :host(:not([disabled])) [part$='button'][disabled] {
    opacity: 0.2;
  }

  :host([step-buttons-visible]) [part='input-field'] {
    padding: 0;
  }

  [part$='button'] {
    cursor: pointer;
    font-size: var(--lumo-icon-size-s);
    width: 1.6em;
    height: 1.6em;
  }

  [part$='button']::before {
    margin-top: 0.3em;
  }

  [part='decrease-button']::before {
    content: var(--lumo-icons-minus);
  }

  [part='increase-button']::before {
    content: var(--lumo-icons-plus);
  }

  /* RTL specific styles */
  :host([dir='rtl']:not([theme~='align-right'])) ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }
`;_("vaadin-number-field",[Qe,zr],{moduleId:"lumo-number-field"});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Or=0;const I=function(s){let t=s.__mixinApplications;t||(t=new WeakMap,s.__mixinApplications=t);let e=Or++;function i(o){let r=o.__mixinSet;if(r&&r[e])return o;let n=t,a=n.get(o);if(!a){a=s(o),n.set(o,a);let l=Object.create(a.__mixinSet||r||null);l[e]=!0,a.__mixinSet=l}return a}return i};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const E=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?s=>ShadyDOM.patch(s):s=>s;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function wt(s){return s.indexOf(".")>=0}function F(s){let t=s.indexOf(".");return t===-1?s:s.slice(0,t)}function kr(s,t){return s.indexOf(t+".")===0}function Ve(s,t){return t.indexOf(s+".")===0}function Be(s,t,e){return t+e.slice(s.length)}function pe(s){if(Array.isArray(s)){let t=[];for(let e=0;e<s.length;e++){let i=s[e].toString().split(".");for(let o=0;o<i.length;o++)t.push(i[o])}return t.join(".")}else return s}function Os(s){return Array.isArray(s)?pe(s).split("."):s.toString().split(".")}function S(s,t,e){let i=s,o=Os(t);for(let r=0;r<o.length;r++){if(!i)return;let n=o[r];i=i[n]}return e&&(e.path=o.join(".")),i}function Ei(s,t,e){let i=s,o=Os(t),r=o[o.length-1];if(o.length>1){for(let n=0;n<o.length-1;n++){let a=o[n];if(i=i[a],!i)return}i[r]=e}else i[t]=e;return o.join(".")}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Re={},Mr=/-[a-z]/g,Nr=/([A-Z])/g;function ks(s){return Re[s]||(Re[s]=s.indexOf("-")<0?s:s.replace(Mr,t=>t[1].toUpperCase()))}function Xe(s){return Re[s]||(Re[s]=s.replace(Nr,"-$1").toLowerCase())}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Lr=0,Ms=0,Z=[],Dr=0,Et=!1,Ns=document.createTextNode("");new window.MutationObserver(Fr).observe(Ns,{characterData:!0});function Fr(){Et=!1;const s=Z.length;for(let t=0;t<s;t++){let e=Z[t];if(e)try{e()}catch(i){setTimeout(()=>{throw i})}}Z.splice(0,s),Ms+=s}const Vr={after(s){return{run(t){return window.setTimeout(t,s)},cancel(t){window.clearTimeout(t)}}},run(s,t){return window.setTimeout(s,t)},cancel(s){window.clearTimeout(s)}},Br={run(s){return window.requestIdleCallback?window.requestIdleCallback(s):window.setTimeout(s,16)},cancel(s){window.cancelIdleCallback?window.cancelIdleCallback(s):window.clearTimeout(s)}},Ls={run(s){return Et||(Et=!0,Ns.textContent=Dr++),Z.push(s),Lr++},cancel(s){const t=s-Ms;if(t>=0){if(!Z[t])throw new Error("invalid async handle: "+s);Z[t]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Rr=Ls,Ds=I(s=>{class t extends s{static createProperties(i){const o=this.prototype;for(let r in i)r in o||o._createPropertyAccessor(r)}static attributeNameForProperty(i){return i.toLowerCase()}static typeForProperty(i){}_createPropertyAccessor(i,o){this._addPropertyToAttributeMap(i),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[i]||(this.__dataHasAccessor[i]=!0,this._definePropertyAccessor(i,o))}_addPropertyToAttributeMap(i){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let o=this.__dataAttributes[i];return o||(o=this.constructor.attributeNameForProperty(i),this.__dataAttributes[o]=i),o}_definePropertyAccessor(i,o){Object.defineProperty(this,i,{get(){return this.__data[i]},set:o?function(){}:function(r){this._setPendingProperty(i,r,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let i in this.__dataHasAccessor)this.hasOwnProperty(i)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[i]=this[i],delete this[i])}_initializeInstanceProperties(i){Object.assign(this,i)}_setProperty(i,o){this._setPendingProperty(i,o)&&this._invalidateProperties()}_getProperty(i){return this.__data[i]}_setPendingProperty(i,o,r){let n=this.__data[i],a=this._shouldPropertyChange(i,o,n);return a&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(i in this.__dataOld)&&(this.__dataOld[i]=n),this.__data[i]=o,this.__dataPending[i]=o),a}_isPropertyPending(i){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(i))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,Rr.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const i=this.__data,o=this.__dataPending,r=this.__dataOld;this._shouldPropertiesChange(i,o,r)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(i,o,r)),this.__dataCounter--}_shouldPropertiesChange(i,o,r){return!!o}_propertiesChanged(i,o,r){}_shouldPropertyChange(i,o,r){return r!==o&&(r===r||o===o)}attributeChangedCallback(i,o,r,n){o!==r&&this._attributeToProperty(i,r),super.attributeChangedCallback&&super.attributeChangedCallback(i,o,r,n)}_attributeToProperty(i,o,r){if(!this.__serializing){const n=this.__dataAttributes,a=n&&n[i]||i;this[a]=this._deserializeValue(o,r||this.constructor.typeForProperty(a))}}_propertyToAttribute(i,o,r){this.__serializing=!0,r=arguments.length<3?this[i]:r,this._valueToNodeAttribute(this,r,o||this.constructor.attributeNameForProperty(i)),this.__serializing=!1}_valueToNodeAttribute(i,o,r){const n=this._serializeValue(o);(r==="class"||r==="name"||r==="slot")&&(i=E(i)),n===void 0?i.removeAttribute(r):i.setAttribute(r,n===""&&window.trustedTypes?window.trustedTypes.emptyScript:n)}_serializeValue(i){switch(typeof i){case"boolean":return i?"":void 0;default:return i?.toString()}}_deserializeValue(i,o){switch(o){case Boolean:return i!==null;case Number:return Number(i);default:return i}}}return t});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Fs={};let Pe=HTMLElement.prototype;for(;Pe;){let s=Object.getOwnPropertyNames(Pe);for(let t=0;t<s.length;t++)Fs[s[t]]=!0;Pe=Object.getPrototypeOf(Pe)}const Hr=window.trustedTypes?s=>trustedTypes.isHTML(s)||trustedTypes.isScript(s)||trustedTypes.isScriptURL(s):()=>!1;function $r(s,t){if(!Fs[t]){let e=s[t];e!==void 0&&(s.__data?s._setPendingProperty(t,e):(s.__dataProto?s.hasOwnProperty(JSCompiler_renameProperty("__dataProto",s))||(s.__dataProto=Object.create(s.__dataProto)):s.__dataProto={},s.__dataProto[t]=e))}}const Ur=I(s=>{const t=Ds(s);class e extends t{static createPropertiesForAttributes(){let o=this.observedAttributes;for(let r=0;r<o.length;r++)this.prototype._createPropertyAccessor(ks(o[r]))}static attributeNameForProperty(o){return Xe(o)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(o){for(let r in o)this._setProperty(r,o[r])}_ensureAttribute(o,r){const n=this;n.hasAttribute(o)||this._valueToNodeAttribute(n,r,o)}_serializeValue(o){switch(typeof o){case"object":if(o instanceof Date)return o.toString();if(o){if(Hr(o))return o;try{return JSON.stringify(o)}catch{return""}}default:return super._serializeValue(o)}}_deserializeValue(o,r){let n;switch(r){case Object:try{n=JSON.parse(o)}catch{n=o}break;case Array:try{n=JSON.parse(o)}catch{n=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${o}`)}break;case Date:n=isNaN(o)?String(o):Number(o),n=new Date(n);break;default:n=super._deserializeValue(o,r);break}return n}_definePropertyAccessor(o,r){$r(this,o),super._definePropertyAccessor(o,r)}_hasAccessor(o){return this.__dataHasAccessor&&this.__dataHasAccessor[o]}_isPropertyPending(o){return!!(this.__dataPending&&o in this.__dataPending)}}return e});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const jr={"dom-if":!0,"dom-repeat":!0};let Ii=!1,Pi=!1;function qr(){if(!Ii){Ii=!0;const s=document.createElement("textarea");s.placeholder="a",Pi=s.placeholder===s.textContent}return Pi}function Wr(s){qr()&&s.localName==="textarea"&&s.placeholder&&s.placeholder===s.textContent&&(s.textContent=null)}const Gr=(()=>{const s=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:t=>t});return(t,e,i)=>{const o=e.getAttribute(i);if(s&&i.startsWith("on-")){t.setAttribute(i,s.createScript(o,i));return}t.setAttribute(i,o)}})();function Yr(s){let t=s.getAttribute("is");if(t&&jr[t]){let e=s;for(e.removeAttribute("is"),s=e.ownerDocument.createElement(t),e.parentNode.replaceChild(s,e),s.appendChild(e);e.attributes.length;){const{name:i}=e.attributes[0];Gr(s,e,i),e.removeAttribute(i)}}return s}function Vs(s,t){let e=t.parentInfo&&Vs(s,t.parentInfo);if(e){for(let i=e.firstChild,o=0;i;i=i.nextSibling)if(t.parentIndex===o++)return i}else return s}function Qr(s,t,e,i){i.id&&(t[i.id]=e)}function Xr(s,t,e){if(e.events&&e.events.length)for(let i=0,o=e.events,r;i<o.length&&(r=o[i]);i++)s._addMethodEventListenerToNode(t,r.name,r.value,s)}function Kr(s,t,e,i){e.templateInfo&&(t._templateInfo=e.templateInfo,t._parentTemplateInfo=i)}function Jr(s,t,e){return s=s._methodHost||s,function(o){s[e]?s[e](o,o.detail):console.warn("listener method `"+e+"` not defined")}}const Zr=I(s=>{class t extends s{static _parseTemplate(i,o){if(!i._templateInfo){let r=i._templateInfo={};r.nodeInfoList=[],r.nestedTemplate=!!o,r.stripWhiteSpace=o&&o.stripWhiteSpace||i.hasAttribute&&i.hasAttribute("strip-whitespace"),this._parseTemplateContent(i,r,{parent:null})}return i._templateInfo}static _parseTemplateContent(i,o,r){return this._parseTemplateNode(i.content,o,r)}static _parseTemplateNode(i,o,r){let n=!1,a=i;return a.localName=="template"&&!a.hasAttribute("preserve-content")?n=this._parseTemplateNestedTemplate(a,o,r)||n:a.localName==="slot"&&(o.hasInsertionPoint=!0),Wr(a),a.firstChild&&this._parseTemplateChildNodes(a,o,r),a.hasAttributes&&a.hasAttributes()&&(n=this._parseTemplateNodeAttributes(a,o,r)||n),n||r.noted}static _parseTemplateChildNodes(i,o,r){if(!(i.localName==="script"||i.localName==="style"))for(let n=i.firstChild,a=0,l;n;n=l){if(n.localName=="template"&&(n=Yr(n)),l=n.nextSibling,n.nodeType===Node.TEXT_NODE){let c=l;for(;c&&c.nodeType===Node.TEXT_NODE;)n.textContent+=c.textContent,l=c.nextSibling,i.removeChild(c),c=l;if(o.stripWhiteSpace&&!n.textContent.trim()){i.removeChild(n);continue}}let d={parentIndex:a,parentInfo:r};this._parseTemplateNode(n,o,d)&&(d.infoIndex=o.nodeInfoList.push(d)-1),n.parentNode&&a++}}static _parseTemplateNestedTemplate(i,o,r){let n=i,a=this._parseTemplate(n,o);return(a.content=n.content.ownerDocument.createDocumentFragment()).appendChild(n.content),r.templateInfo=a,!0}static _parseTemplateNodeAttributes(i,o,r){let n=!1,a=Array.from(i.attributes);for(let l=a.length-1,d;d=a[l];l--)n=this._parseTemplateNodeAttribute(i,o,r,d.name,d.value)||n;return n}static _parseTemplateNodeAttribute(i,o,r,n,a){return n.slice(0,3)==="on-"?(i.removeAttribute(n),r.events=r.events||[],r.events.push({name:n.slice(3),value:a}),!0):n==="id"?(r.id=a,!0):!1}static _contentForTemplate(i){let o=i._templateInfo;return o&&o.content||i.content}_stampTemplate(i,o){i&&!i.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(i),o=o||this.constructor._parseTemplate(i);let r=o.nodeInfoList,n=o.content||i.content,a=document.importNode(n,!0);a.__noInsertionPoint=!o.hasInsertionPoint;let l=a.nodeList=new Array(r.length);a.$={};for(let d=0,c=r.length,h;d<c&&(h=r[d]);d++){let u=l[d]=Vs(a,h);Qr(this,a.$,u,h),Kr(this,u,h,o),Xr(this,u,h)}return a=a,a}_addMethodEventListenerToNode(i,o,r,n){n=n||i;let a=Jr(n,o,r);return this._addEventListenerToNode(i,o,a),a}_addEventListenerToNode(i,o,r){i.addEventListener(o,r)}_removeEventListenerFromNode(i,o,r){i.removeEventListener(o,r)}}return t});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let be=0;const ye=[],g={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},Bs="__computeInfo",en=/[A-Z]/;function ot(s,t,e){let i=s[t];if(!i)i=s[t]={};else if(!s.hasOwnProperty(t)&&(i=s[t]=Object.create(s[t]),e))for(let o in i){let r=i[o],n=i[o]=Array(r.length);for(let a=0;a<r.length;a++)n[a]=r[a]}return i}function me(s,t,e,i,o,r){if(t){let n=!1;const a=be++;for(let l in e){let d=o?F(l):l,c=t[d];if(c)for(let h=0,u=c.length,p;h<u&&(p=c[h]);h++)(!p.info||p.info.lastRun!==a)&&(!o||Yt(l,p.trigger))&&(p.info&&(p.info.lastRun=a),p.fn(s,l,e,i,p.info,o,r),n=!0)}return n}return!1}function tn(s,t,e,i,o,r,n,a){let l=!1,d=n?F(i):i,c=t[d];if(c)for(let h=0,u=c.length,p;h<u&&(p=c[h]);h++)(!p.info||p.info.lastRun!==e)&&(!n||Yt(i,p.trigger))&&(p.info&&(p.info.lastRun=e),p.fn(s,i,o,r,p.info,n,a),l=!0);return l}function Yt(s,t){if(t){let e=t.name;return e==s||!!(t.structured&&kr(e,s))||!!(t.wildcard&&Ve(e,s))}else return!0}function Si(s,t,e,i,o){let r=typeof o.method=="string"?s[o.method]:o.method,n=o.property;r?r.call(s,s.__data[n],i[n]):o.dynamicFn||console.warn("observer method `"+o.method+"` not defined")}function sn(s,t,e,i,o){let r=s[g.NOTIFY],n,a=be++;for(let d in t)t[d]&&(r&&tn(s,r,a,d,e,i,o)||o&&on(s,d,e))&&(n=!0);let l;n&&(l=s.__dataHost)&&l._invalidateProperties&&l._invalidateProperties()}function on(s,t,e){let i=F(t);if(i!==t){let o=Xe(i)+"-changed";return Rs(s,o,e[t],t),!0}return!1}function Rs(s,t,e,i){let o={value:e,queueProperty:!0};i&&(o.path=i),E(s).dispatchEvent(new CustomEvent(t,{detail:o}))}function rn(s,t,e,i,o,r){let a=(r?F(t):t)!=t?t:null,l=a?S(s,a):s.__data[t];a&&l===void 0&&(l=e[t]),Rs(s,o.eventName,l,a)}function nn(s,t,e,i,o){let r,n=s.detail,a=n&&n.path;a?(i=Be(e,i,a),r=n&&n.value):r=s.currentTarget[e],r=o?!r:r,(!t[g.READ_ONLY]||!t[g.READ_ONLY][i])&&t._setPendingPropertyOrPath(i,r,!0,!!a)&&(!n||!n.queueProperty)&&t._invalidateProperties()}function an(s,t,e,i,o){let r=s.__data[t];De&&(r=De(r,o.attrName,"attribute",s)),s._propertyToAttribute(t,o.attrName,r)}function ln(s,t,e,i){let o=s[g.COMPUTE];if(o)if(er){be++;const r=cn(s),n=[];for(let l in t)Ti(l,o,n,r,i);let a;for(;a=n.shift();)Hs(s,"",t,e,a)&&Ti(a.methodInfo,o,n,r,i);Object.assign(e,s.__dataOld),Object.assign(t,s.__dataPending),s.__dataPending=null}else{let r=t;for(;me(s,o,r,e,i);)Object.assign(e,s.__dataOld),Object.assign(t,s.__dataPending),r=s.__dataPending,s.__dataPending=null}}const dn=(s,t,e)=>{let i=0,o=t.length-1,r=-1;for(;i<=o;){const n=i+o>>1,a=e.get(t[n].methodInfo)-e.get(s.methodInfo);if(a<0)i=n+1;else if(a>0)o=n-1;else{r=n;break}}r<0&&(r=o+1),t.splice(r,0,s)},Ti=(s,t,e,i,o)=>{const r=o?F(s):s,n=t[r];if(n)for(let a=0;a<n.length;a++){const l=n[a];l.info.lastRun!==be&&(!o||Yt(s,l.trigger))&&(l.info.lastRun=be,dn(l.info,e,i))}};function cn(s){let t=s.constructor.__orderedComputedDeps;if(!t){t=new Map;const e=s[g.COMPUTE];let{counts:i,ready:o,total:r}=hn(s),n;for(;n=o.shift();){t.set(n,t.size);const a=e[n];a&&a.forEach(l=>{const d=l.info.methodInfo;--r,--i[d]===0&&o.push(d)})}r!==0&&console.warn(`Computed graph for ${s.localName} incomplete; circular?`),s.constructor.__orderedComputedDeps=t}return t}function hn(s){const t=s[Bs],e={},i=s[g.COMPUTE],o=[];let r=0;for(let n in t){const a=t[n];r+=e[n]=a.args.filter(l=>!l.literal).length+(a.dynamicFn?1:0)}for(let n in i)t[n]||o.push(n);return{counts:e,ready:o,total:r}}function Hs(s,t,e,i,o){let r=It(s,t,e,i,o);if(r===ye)return!1;let n=o.methodInfo;return s.__dataHasAccessor&&s.__dataHasAccessor[n]?s._setPendingProperty(n,r,!0):(s[n]=r,!1)}function un(s,t,e){let i=s.__dataLinkedPaths;if(i){let o;for(let r in i){let n=i[r];Ve(r,t)?(o=Be(r,n,t),s._setPendingPropertyOrPath(o,e,!0,!0)):Ve(n,t)&&(o=Be(n,r,t),s._setPendingPropertyOrPath(o,e,!0,!0))}}}function rt(s,t,e,i,o,r,n){e.bindings=e.bindings||[];let a={kind:i,target:o,parts:r,literal:n,isCompound:r.length!==1};if(e.bindings.push(a),gn(a)){let{event:d,negate:c}=a.parts[0];a.listenerEvent=d||Xe(o)+"-changed",a.listenerNegate=c}let l=t.nodeInfoList.length;for(let d=0;d<a.parts.length;d++){let c=a.parts[d];c.compoundIndex=d,pn(s,t,a,c,l)}}function pn(s,t,e,i,o){if(!i.literal)if(e.kind==="attribute"&&e.target[0]==="-")console.warn("Cannot set attribute "+e.target+' because "-" is not a valid attribute starting character');else{let r=i.dependencies,n={index:o,binding:e,part:i,evaluator:s};for(let a=0;a<r.length;a++){let l=r[a];typeof l=="string"&&(l=Us(l),l.wildcard=!0),s._addTemplatePropertyEffect(t,l.rootProperty,{fn:mn,info:n,trigger:l})}}}function mn(s,t,e,i,o,r,n){let a=n[o.index],l=o.binding,d=o.part;if(r&&d.source&&t.length>d.source.length&&l.kind=="property"&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let c=e[t];t=Be(d.source,l.target,t),a._setPendingPropertyOrPath(t,c,!1,!0)&&s._enqueueClient(a)}else{let c=o.evaluator._evaluateBinding(s,d,t,e,i,r);c!==ye&&fn(s,a,l,d,c)}}function fn(s,t,e,i,o){if(o=_n(t,o,e,i),De&&(o=De(o,e.target,e.kind,t)),e.kind=="attribute")s._valueToNodeAttribute(t,o,e.target);else{let r=e.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[r]?(!t[g.READ_ONLY]||!t[g.READ_ONLY][r])&&t._setPendingProperty(r,o)&&s._enqueueClient(t):s._setUnmanagedPropertyToNode(t,r,o)}}function _n(s,t,e,i){if(e.isCompound){let o=s.__dataCompoundStorage[e.target];o[i.compoundIndex]=t,t=o.join("")}return e.kind!=="attribute"&&(e.target==="textContent"||e.target==="value"&&(s.localName==="input"||s.localName==="textarea"))&&(t=t??""),t}function gn(s){return!!s.target&&s.kind!="attribute"&&s.kind!="text"&&!s.isCompound&&s.parts[0].mode==="{"}function vn(s,t){let{nodeList:e,nodeInfoList:i}=t;if(i.length)for(let o=0;o<i.length;o++){let r=i[o],n=e[o],a=r.bindings;if(a)for(let l=0;l<a.length;l++){let d=a[l];bn(n,d),yn(n,s,d)}n.__dataHost=s}}function bn(s,t){if(t.isCompound){let e=s.__dataCompoundStorage||(s.__dataCompoundStorage={}),i=t.parts,o=new Array(i.length);for(let n=0;n<i.length;n++)o[n]=i[n].literal;let r=t.target;e[r]=o,t.literal&&t.kind=="property"&&(r==="className"&&(s=E(s)),s[r]=t.literal)}}function yn(s,t,e){if(e.listenerEvent){let i=e.parts[0];s.addEventListener(e.listenerEvent,function(o){nn(o,t,e.target,i.source,i.negate)})}}function zi(s,t,e,i,o,r){r=t.static||r&&(typeof r!="object"||r[t.methodName]);let n={methodName:t.methodName,args:t.args,methodInfo:o,dynamicFn:r};for(let a=0,l;a<t.args.length&&(l=t.args[a]);a++)l.literal||s._addPropertyEffect(l.rootProperty,e,{fn:i,info:n,trigger:l});return r&&s._addPropertyEffect(t.methodName,e,{fn:i,info:n}),n}function It(s,t,e,i,o){let r=s._methodHost||s,n=r[o.methodName];if(n){let a=s._marshalArgs(o.args,t,e);return a===ye?ye:n.apply(r,a)}else o.dynamicFn||console.warn("method `"+o.methodName+"` not defined")}const An=[],$s="(?:[a-zA-Z_$][\\w.:$\\-*]*)",Cn="(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)",xn="(?:'(?:[^'\\\\]|\\\\.)*')",wn='(?:"(?:[^"\\\\]|\\\\.)*")',En="(?:"+xn+"|"+wn+")",Oi="(?:("+$s+"|"+Cn+"|"+En+")\\s*)",In="(?:"+Oi+"(?:,\\s*"+Oi+")*)",Pn="(?:\\(\\s*(?:"+In+"?)\\)\\s*)",Sn="("+$s+"\\s*"+Pn+"?)",Tn="(\\[\\[|{{)\\s*",zn="(?:]]|}})",On="(?:(!)\\s*)?",kn=Tn+On+Sn+zn,ki=new RegExp(kn,"g");function Mi(s){let t="";for(let e=0;e<s.length;e++){let i=s[e].literal;t+=i||""}return t}function nt(s){let t=s.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let i={methodName:t[1],static:!0,args:An};if(t[2].trim()){let o=t[2].replace(/\\,/g,"&comma;").split(",");return Mn(o,i)}else return i}return null}function Mn(s,t){return t.args=s.map(function(e){let i=Us(e);return i.literal||(t.static=!1),i},this),t}function Us(s){let t=s.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),e={name:t,value:"",literal:!1},i=t[0];switch(i==="-"&&(i=t[1]),i>="0"&&i<="9"&&(i="#"),i){case"'":case'"':e.value=t.slice(1,-1),e.literal=!0;break;case"#":e.value=Number(t),e.literal=!0;break}return e.literal||(e.rootProperty=F(t),e.structured=wt(t),e.structured&&(e.wildcard=t.slice(-2)==".*",e.wildcard&&(e.name=t.slice(0,-2)))),e}function Ni(s,t,e){let i=S(s,e);return i===void 0&&(i=t[e]),i}function js(s,t,e,i){const o={indexSplices:i};At&&!s._overrideLegacyUndefined&&(t.splices=o),s.notifyPath(e+".splices",o),s.notifyPath(e+".length",t.length),At&&!s._overrideLegacyUndefined&&(o.indexSplices=[])}function ae(s,t,e,i,o,r){js(s,t,e,[{index:i,addedCount:o,removed:r,object:t,type:"splice"}])}function Nn(s){return s[0].toUpperCase()+s.substring(1)}const Qt=I(s=>{const t=Zr(Ur(s));class e extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return g}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(le.length){let o=le[le.length-1];o._enqueueClient(this),this.__dataHost=o}}_initializeProtoProperties(o){this.__data=Object.create(o),this.__dataPending=Object.create(o),this.__dataOld={}}_initializeInstanceProperties(o){let r=this[g.READ_ONLY];for(let n in o)(!r||!r[n])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[n]=this.__dataPending[n]=o[n])}_addPropertyEffect(o,r,n){this._createPropertyAccessor(o,r==g.READ_ONLY);let a=ot(this,r,!0)[o];a||(a=this[r][o]=[]),a.push(n)}_removePropertyEffect(o,r,n){let a=ot(this,r,!0)[o],l=a.indexOf(n);l>=0&&a.splice(l,1)}_hasPropertyEffect(o,r){let n=this[r];return!!(n&&n[o])}_hasReadOnlyEffect(o){return this._hasPropertyEffect(o,g.READ_ONLY)}_hasNotifyEffect(o){return this._hasPropertyEffect(o,g.NOTIFY)}_hasReflectEffect(o){return this._hasPropertyEffect(o,g.REFLECT)}_hasComputedEffect(o){return this._hasPropertyEffect(o,g.COMPUTE)}_setPendingPropertyOrPath(o,r,n,a){if(a||F(Array.isArray(o)?o[0]:o)!==o){if(!a){let l=S(this,o);if(o=Ei(this,o,r),!o||!super._shouldPropertyChange(o,r,l))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(o,r,n))return un(this,o,r),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[o])return this._setPendingProperty(o,r,n);this[o]=r}return!1}_setUnmanagedPropertyToNode(o,r,n){(n!==o[r]||typeof n=="object")&&(r==="className"&&(o=E(o)),o[r]=n)}_setPendingProperty(o,r,n){let a=this.__dataHasPaths&&wt(o),l=a?this.__dataTemp:this.__data;return this._shouldPropertyChange(o,r,l[o])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),o in this.__dataOld||(this.__dataOld[o]=this.__data[o]),a?this.__dataTemp[o]=r:this.__data[o]=r,this.__dataPending[o]=r,(a||this[g.NOTIFY]&&this[g.NOTIFY][o])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[o]=n),!0):!1}_setProperty(o,r){this._setPendingProperty(o,r,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(o){this.__dataPendingClients=this.__dataPendingClients||[],o!==this&&this.__dataPendingClients.push(o)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let o=this.__dataPendingClients;if(o){this.__dataPendingClients=null;for(let r=0;r<o.length;r++){let n=o[r];n.__dataEnabled?n.__dataPending&&n._flushProperties():n._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(o,r){for(let n in o)(r||!this[g.READ_ONLY]||!this[g.READ_ONLY][n])&&this._setPendingPropertyOrPath(n,o[n],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(o,r,n){let a=this.__dataHasPaths;this.__dataHasPaths=!1;let l;ln(this,r,n,a),l=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(r,n,a),this._flushClients(),me(this,this[g.REFLECT],r,n,a),me(this,this[g.OBSERVE],r,n,a),l&&sn(this,l,r,n,a),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(o,r,n){this[g.PROPAGATE]&&me(this,this[g.PROPAGATE],o,r,n),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,o,r,n)}_runEffectsForTemplate(o,r,n,a){const l=(d,c)=>{me(this,o.propertyEffects,d,n,c,o.nodeList);for(let h=o.firstChild;h;h=h.nextSibling)this._runEffectsForTemplate(h,d,n,c)};o.runEffects?o.runEffects(l,r,a):l(r,a)}linkPaths(o,r){o=pe(o),r=pe(r),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[o]=r}unlinkPaths(o){o=pe(o),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[o]}notifySplices(o,r){let n={path:""},a=S(this,o,n);js(this,a,n.path,r)}get(o,r){return S(r||this,o)}set(o,r,n){n?Ei(n,o,r):(!this[g.READ_ONLY]||!this[g.READ_ONLY][o])&&this._setPendingPropertyOrPath(o,r,!0)&&this._invalidateProperties()}push(o,...r){let n={path:""},a=S(this,o,n),l=a.length,d=a.push(...r);return r.length&&ae(this,a,n.path,l,r.length,[]),d}pop(o){let r={path:""},n=S(this,o,r),a=!!n.length,l=n.pop();return a&&ae(this,n,r.path,n.length,0,[l]),l}splice(o,r,n,...a){let l={path:""},d=S(this,o,l);r<0?r=d.length-Math.floor(-r):r&&(r=Math.floor(r));let c;return arguments.length===2?c=d.splice(r):c=d.splice(r,n,...a),(a.length||c.length)&&ae(this,d,l.path,r,a.length,c),c}shift(o){let r={path:""},n=S(this,o,r),a=!!n.length,l=n.shift();return a&&ae(this,n,r.path,0,0,[l]),l}unshift(o,...r){let n={path:""},a=S(this,o,n),l=a.unshift(...r);return r.length&&ae(this,a,n.path,0,r.length,[]),l}notifyPath(o,r){let n;if(arguments.length==1){let a={path:""};r=S(this,o,a),n=a.path}else Array.isArray(o)?n=pe(o):n=o;this._setPendingPropertyOrPath(n,r,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(o,r){this._addPropertyEffect(o,g.READ_ONLY),r&&(this["_set"+Nn(o)]=function(n){this._setProperty(o,n)})}_createPropertyObserver(o,r,n){let a={property:o,method:r,dynamicFn:!!n};this._addPropertyEffect(o,g.OBSERVE,{fn:Si,info:a,trigger:{name:o}}),n&&this._addPropertyEffect(r,g.OBSERVE,{fn:Si,info:a,trigger:{name:r}})}_createMethodObserver(o,r){let n=nt(o);if(!n)throw new Error("Malformed observer expression '"+o+"'");zi(this,n,g.OBSERVE,It,null,r)}_createNotifyingProperty(o){this._addPropertyEffect(o,g.NOTIFY,{fn:rn,info:{eventName:Xe(o)+"-changed",property:o}})}_createReflectedProperty(o){let r=this.constructor.attributeNameForProperty(o);r[0]==="-"?console.warn("Property "+o+" cannot be reflected to attribute "+r+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(o,g.REFLECT,{fn:an,info:{attrName:r}})}_createComputedProperty(o,r,n){let a=nt(r);if(!a)throw new Error("Malformed computed expression '"+r+"'");const l=zi(this,a,g.COMPUTE,Hs,o,n);ot(this,Bs)[o]=l}_marshalArgs(o,r,n){const a=this.__data,l=[];for(let d=0,c=o.length;d<c;d++){let{name:h,structured:u,wildcard:p,value:f,literal:b}=o[d];if(!b)if(p){const A=Ve(h,r),x=Ni(a,n,A?r:h);f={path:A?r:h,value:x,base:A?S(a,h):x}}else f=u?Ni(a,n,h):a[h];if(At&&!this._overrideLegacyUndefined&&f===void 0&&o.length>1)return ye;l[d]=f}return l}static addPropertyEffect(o,r,n){this.prototype._addPropertyEffect(o,r,n)}static createPropertyObserver(o,r,n){this.prototype._createPropertyObserver(o,r,n)}static createMethodObserver(o,r){this.prototype._createMethodObserver(o,r)}static createNotifyingProperty(o){this.prototype._createNotifyingProperty(o)}static createReadOnlyProperty(o,r){this.prototype._createReadOnlyProperty(o,r)}static createReflectedProperty(o){this.prototype._createReflectedProperty(o)}static createComputedProperty(o,r,n){this.prototype._createComputedProperty(o,r,n)}static bindTemplate(o){return this.prototype._bindTemplate(o)}_bindTemplate(o,r){let n=this.constructor._parseTemplate(o),a=this.__preBoundTemplateInfo==n;if(!a)for(let l in n.propertyEffects)this._createPropertyAccessor(l);if(r)if(n=Object.create(n),n.wasPreBound=a,!this.__templateInfo)this.__templateInfo=n;else{const l=o._parentTemplateInfo||this.__templateInfo,d=l.lastChild;n.parent=l,l.lastChild=n,n.previousSibling=d,d?d.nextSibling=n:l.firstChild=n}else this.__preBoundTemplateInfo=n;return n}static _addTemplatePropertyEffect(o,r,n){let a=o.hostProps=o.hostProps||{};a[r]=!0;let l=o.propertyEffects=o.propertyEffects||{};(l[r]=l[r]||[]).push(n)}_stampTemplate(o,r){r=r||this._bindTemplate(o,!0),le.push(this);let n=super._stampTemplate(o,r);if(le.pop(),r.nodeList=n.nodeList,!r.wasPreBound){let a=r.childNodes=[];for(let l=n.firstChild;l;l=l.nextSibling)a.push(l)}return n.templateInfo=r,vn(this,r),this.__dataClientsReady&&(this._runEffectsForTemplate(r,this.__data,null,!1),this._flushClients()),n}_removeBoundDom(o){const r=o.templateInfo,{previousSibling:n,nextSibling:a,parent:l}=r;n?n.nextSibling=a:l&&(l.firstChild=a),a?a.previousSibling=n:l&&(l.lastChild=n),r.nextSibling=r.previousSibling=null;let d=r.childNodes;for(let c=0;c<d.length;c++){let h=d[c];E(E(h).parentNode).removeChild(h)}}static _parseTemplateNode(o,r,n){let a=t._parseTemplateNode.call(this,o,r,n);if(o.nodeType===Node.TEXT_NODE){let l=this._parseBindings(o.textContent,r);l&&(o.textContent=Mi(l)||" ",rt(this,r,n,"text","textContent",l),a=!0)}return a}static _parseTemplateNodeAttribute(o,r,n,a,l){let d=this._parseBindings(l,r);if(d){let c=a,h="property";en.test(a)?h="attribute":a[a.length-1]=="$"&&(a=a.slice(0,-1),h="attribute");let u=Mi(d);return u&&h=="attribute"&&(a=="class"&&o.hasAttribute("class")&&(u+=" "+o.getAttribute(a)),o.setAttribute(a,u)),h=="attribute"&&c=="disable-upgrade$"&&o.setAttribute(a,""),o.localName==="input"&&c==="value"&&o.setAttribute(c,""),o.removeAttribute(c),h==="property"&&(a=ks(a)),rt(this,r,n,h,a,d,u),!0}else return t._parseTemplateNodeAttribute.call(this,o,r,n,a,l)}static _parseTemplateNestedTemplate(o,r,n){let a=t._parseTemplateNestedTemplate.call(this,o,r,n);const l=o.parentNode,d=n.templateInfo,c=l.localName==="dom-if",h=l.localName==="dom-repeat";bi&&(c||h)&&(l.removeChild(o),n=n.parentInfo,n.templateInfo=d,n.noted=!0,a=!1);let u=d.hostProps;if(gs&&c)u&&(r.hostProps=Object.assign(r.hostProps||{},u),bi||(n.parentInfo.noted=!0));else{let p="{";for(let f in u){let b=[{mode:p,source:f,dependencies:[f],hostProp:!0}];rt(this,r,n,"property","_host_"+f,b)}}return a}static _parseBindings(o,r){let n=[],a=0,l;for(;(l=ki.exec(o))!==null;){l.index>a&&n.push({literal:o.slice(a,l.index)});let d=l[1][0],c=!!l[2],h=l[3].trim(),u=!1,p="",f=-1;d=="{"&&(f=h.indexOf("::"))>0&&(p=h.substring(f+2),h=h.substring(0,f),u=!0);let b=nt(h),A=[];if(b){let{args:x,methodName:w}=b;for(let re=0;re<x.length;re++){let q=x[re];q.literal||A.push(q)}let B=r.dynamicFns;(B&&B[w]||b.static)&&(A.push(w),b.dynamicFn=!0)}else A.push(h);n.push({source:h,mode:d,negate:c,customEvent:u,signature:b,dependencies:A,event:p}),a=ki.lastIndex}if(a&&a<o.length){let d=o.substring(a);d&&n.push({literal:d})}return n.length?n:null}static _evaluateBinding(o,r,n,a,l,d){let c;return r.signature?c=It(o,n,a,l,r.signature):n!=r.source?c=S(o,r.source):d&&wt(n)?c=S(o,n):c=o.__data[n],r.negate&&(c=!c),c}}return e}),le=[];/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*//**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Ln(s){const t={};for(let e in s){const i=s[e];t[e]=typeof i=="function"?{type:i}:i}return t}const Dn=I(s=>{const t=Ds(s);function e(r){const n=Object.getPrototypeOf(r);return n.prototype instanceof o?n:null}function i(r){if(!r.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",r))){let n=null;if(r.hasOwnProperty(JSCompiler_renameProperty("properties",r))){const a=r.properties;a&&(n=Ln(a))}r.__ownProperties=n}return r.__ownProperties}class o extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const n=this._properties;this.__observedAttributes=n?Object.keys(n).map(a=>this.prototype._addPropertyToAttributeMap(a)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const n=e(this);n&&n.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const n=i(this);n&&this.createProperties(n)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const n=e(this);this.__properties=Object.assign({},n&&n._properties,i(this))}return this.__properties}static typeForProperty(n){const a=this._properties[n];return a&&a.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return o});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const Fn="3.5.2",Li=window.ShadyCSS&&window.ShadyCSS.cssBuild,Vn=I(s=>{const t=Dn(Qt(s));function e(l){if(!l.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",l))){l.__propertyDefaults=null;let d=l._properties;for(let c in d){let h=d[c];"value"in h&&(l.__propertyDefaults=l.__propertyDefaults||{},l.__propertyDefaults[c]=h)}}return l.__propertyDefaults}function i(l){return l.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",l))||(l.__ownObservers=l.hasOwnProperty(JSCompiler_renameProperty("observers",l))?l.observers:null),l.__ownObservers}function o(l,d,c,h){c.computed&&(c.readOnly=!0),c.computed&&(l._hasReadOnlyEffect(d)?console.warn(`Cannot redefine computed property '${d}'.`):l._createComputedProperty(d,c.computed,h)),c.readOnly&&!l._hasReadOnlyEffect(d)?l._createReadOnlyProperty(d,!c.computed):c.readOnly===!1&&l._hasReadOnlyEffect(d)&&console.warn(`Cannot make readOnly property '${d}' non-readOnly.`),c.reflectToAttribute&&!l._hasReflectEffect(d)?l._createReflectedProperty(d):c.reflectToAttribute===!1&&l._hasReflectEffect(d)&&console.warn(`Cannot make reflected property '${d}' non-reflected.`),c.notify&&!l._hasNotifyEffect(d)?l._createNotifyingProperty(d):c.notify===!1&&l._hasNotifyEffect(d)&&console.warn(`Cannot make notify property '${d}' non-notify.`),c.observer&&l._createPropertyObserver(d,c.observer,h[c.observer]),l._addPropertyToAttributeMap(d)}function r(l,d,c,h){if(!Li){const u=d.content.querySelectorAll("style"),p=Wt(d),f=lr(c),b=d.content.firstElementChild;for(let x=0;x<f.length;x++){let w=f[x];w.textContent=l._processStyleText(w.textContent,h),d.content.insertBefore(w,b)}let A=0;for(let x=0;x<p.length;x++){let w=p[x],B=u[A];B!==w?(w=w.cloneNode(!0),B.parentNode.insertBefore(w,B)):A++,w.textContent=l._processStyleText(w.textContent,h)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(d,c),ir&&Li&&Xo){const u=d.content.querySelectorAll("style");if(u){let p="";Array.from(u).forEach(f=>{p+=f.textContent,f.parentNode.removeChild(f)}),l._styleSheet=new CSSStyleSheet,l._styleSheet.replaceSync(p)}}}function n(l){let d=null;if(l&&(!ve||Jo)&&(d=se.import(l,"template"),ve&&!d))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${l}`);return d}class a extends t{static get polymerElementVersion(){return Fn}static _finalizeClass(){t._finalizeClass.call(this);const d=i(this);d&&this.createObservers(d,this._properties),this._prepareTemplate()}static _prepareTemplate(){let d=this.template;d&&(typeof d=="string"?(console.error("template getter must return HTMLTemplateElement"),d=null):fs||(d=d.cloneNode(!0))),this.prototype._template=d}static createProperties(d){for(let c in d)o(this.prototype,c,d[c],d)}static createObservers(d,c){const h=this.prototype;for(let u=0;u<d.length;u++)h._createMethodObserver(d[u],c)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let d=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;typeof d=="function"&&(d=d()),this._template=d!==void 0?d:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&n(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(d){this._template=d}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const d=this.importMeta;if(d)this._importPath=jt(d.url);else{const c=se.import(this.is);this._importPath=c&&c.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=Ko,this.importPath=this.constructor.importPath;let d=e(this.constructor);if(d)for(let c in d){let h=d[c];if(this._canApplyPropertyDefault(c)){let u=typeof h.value=="function"?h.value.call(this):h.value;this._hasAccessor(c)?this._setPendingProperty(c,u,!0):this[c]=u}}}_canApplyPropertyDefault(d){return!this.hasOwnProperty(d)}static _processStyleText(d,c){return Ut(d,c)}static _finalizeTemplate(d){const c=this.prototype._template;if(c&&!c.__polymerFinalized){c.__polymerFinalized=!0;const h=this.importPath,u=h?_e(h):"";r(this,c,d,u),this.prototype._bindTemplate(c)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(d){const c=E(this);if(c.attachShadow)return d?(c.shadowRoot||(c.attachShadow({mode:"open",shadyUpgradeFragment:d}),c.shadowRoot.appendChild(d),this.constructor._styleSheet&&(c.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),Zo&&window.ShadyDOM&&window.ShadyDOM.flushInitial(c.shadowRoot),c.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(d){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,d)}resolveUrl(d,c){return!c&&this.importPath&&(c=_e(this.importPath)),_e(d,c)}static _parseTemplateContent(d,c,h){return c.dynamicFns=c.dynamicFns||this._properties,t._parseTemplateContent.call(this,d,c,h)}static _addTemplatePropertyEffect(d,c,h){return _s&&!(c in this._properties)&&!(h.info.part.signature&&h.info.part.signature.static)&&!h.info.part.hostProp&&!d.nestedTemplate&&console.warn(`Property '${c}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,d,c,h)}}return a});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Di=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:s=>s});class qs{constructor(t,e){Gs(t,e);const i=e.reduce((o,r,n)=>o+Ws(r)+t[n+1],t[0]);this.value=i.toString()}toString(){return this.value}}function Ws(s){if(s instanceof qs)return s.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${s}`)}function Bn(s){if(s instanceof HTMLTemplateElement)return s.innerHTML;if(s instanceof qs)return Ws(s);throw new Error(`non-template value passed to Polymer's html function: ${s}`)}const C=function(t,...e){Gs(t,e);const i=document.createElement("template");let o=e.reduce((r,n,a)=>r+Bn(n)+t[a+1],t[0]);return Di&&(o=Di.createHTML(o)),i.innerHTML=o,i},Gs=(s,t)=>{if(!Array.isArray(s)||!Array.isArray(s.raw)||t.length!==s.length-1)throw new TypeError("Invalid call to the html template tag")};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const y=Vn(HTMLElement);/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const N=[];function Pt(s,t,e=s.getAttribute("dir")){t?s.setAttribute("dir",t):e!=null&&s.removeAttribute("dir")}function St(){return document.documentElement.getAttribute("dir")}function Rn(){const s=St();N.forEach(t=>{Pt(t,s)})}const Hn=new MutationObserver(Rn);Hn.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const Y=s=>class extends s{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0,converter:{fromAttribute:e=>e||"",toAttribute:e=>e===""?null:e}}}}get __isRTL(){return this.getAttribute("dir")==="rtl"}connectedCallback(){super.connectedCallback(),(!this.hasAttribute("dir")||this.__restoreSubscription)&&(this.__subscribe(),Pt(this,St(),null))}attributeChangedCallback(e,i,o){if(super.attributeChangedCallback(e,i,o),e!=="dir")return;const r=St(),n=o===r&&N.indexOf(this)===-1,a=!o&&i&&N.indexOf(this)===-1;n||a?(this.__subscribe(),Pt(this,r,o)):o!==r&&i===r&&this.__unsubscribe()}disconnectedCallback(){super.disconnectedCallback(),this.__restoreSubscription=N.includes(this),this.__unsubscribe()}_valueToNodeAttribute(e,i,o){o==="dir"&&i===""&&!e.hasAttribute("dir")||super._valueToNodeAttribute(e,i,o)}_attributeToProperty(e,i,o){e==="dir"&&!i?this.dir="":super._attributeToProperty(e,i,o)}__subscribe(){N.includes(this)||N.push(this)}__unsubscribe(){N.includes(this)&&N.splice(N.indexOf(this),1)}};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const $n=s=>class extends s{static get properties(){return{disabled:{type:Boolean,reflectToAttribute:!0},readonly:{type:Boolean,reflectToAttribute:!0},invalid:{type:Boolean,reflectToAttribute:!0}}}ready(){super.ready(),this.addEventListener("pointerdown",e=>{e.target===this&&e.preventDefault()}),this.addEventListener("click",e=>{e.target===this&&this.shadowRoot.querySelector("slot:not([name])").assignedNodes({flatten:!0}).forEach(i=>i.focus&&i.focus())})}};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Un=m`
  :host {
    display: flex;
    align-items: center;
    flex: 0 1 auto;
    border-radius:
            /* See https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius */
      var(--vaadin-input-field-top-start-radius, var(--__border-radius))
      var(--vaadin-input-field-top-end-radius, var(--__border-radius))
      var(--vaadin-input-field-bottom-end-radius, var(--__border-radius))
      var(--vaadin-input-field-bottom-start-radius, var(--__border-radius));
    --_border-radius: var(--vaadin-input-field-border-radius, 0);
    --_input-border-width: var(--vaadin-input-field-border-width, 0px);
    --_input-border-color: var(--vaadin-input-field-border-color, transparent);
    /* stylelint-disable-next-line length-zero-no-unit */
    box-shadow: inset 0 0 0 var(--_input-border-width, 0) var(--_input-border-color);
  }

  :host([dir='rtl']) {
    border-radius:
            /* Don't use logical props, see https://github.com/vaadin/vaadin-time-picker/issues/145 */
      var(--vaadin-input-field-top-end-radius, var(--_border-radius))
      var(--vaadin-input-field-top-start-radius, var(--_border-radius))
      var(--vaadin-input-field-bottom-start-radius, var(--_border-radius))
      var(--vaadin-input-field-bottom-end-radius, var(--_border-radius));
  }

  :host([hidden]) {
    display: none !important;
  }

  /* Reset the native input styles */
  ::slotted(input) {
    -webkit-appearance: none;
    -moz-appearance: none;
    flex: auto;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
    height: 100%;
    outline: none;
    margin: 0;
    padding: 0;
    border: 0;
    border-radius: 0;
    min-width: 0;
    font: inherit;
    line-height: normal;
    color: inherit;
    background-color: transparent;
    /* Disable default invalid style in Firefox */
    box-shadow: none;
  }

  ::slotted(*) {
    flex: none;
  }

  ::slotted(:is(input, textarea))::placeholder {
    /* Use ::slotted(input:placeholder-shown) in themes to style the placeholder. */
    /* because ::slotted(...)::placeholder does not work in Safari. */
    font: inherit;
    color: inherit;
    /* Override default opacity in Firefox */
    opacity: 1;
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */_("vaadin-input-container",Un,{moduleId:"vaadin-input-container-styles"});class Ys extends $n(P(Y(y))){static get is(){return"vaadin-input-container"}static get template(){return C`
      <slot name="prefix"></slot>
      <slot></slot>
      <slot name="suffix"></slot>
    `}}v(Ys);const jn=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Me=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function qn(){function s(){return!0}return Qs(s)}function Wn(){try{return Gn()?!0:Yn()?Me?!Qn():!qn():!1}catch{return!1}}function Gn(){return localStorage.getItem("vaadin.developmentmode.force")}function Yn(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Qn(){return!!(Me&&Object.keys(Me).map(t=>Me[t]).filter(t=>t.productionMode).length>0)}function Qs(s,t){if(typeof s!="function")return;const e=jn.exec(s.toString());if(e)try{s=new Function(e[1])}catch(i){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",i)}return s(t)}window.Vaadin=window.Vaadin||{};const Fi=function(s,t){if(window.Vaadin.developmentMode)return Qs(s,t)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Wn());function Xn(){/*! vaadin-dev-mode:start
  (function () {
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var getPolymerVersion = function getPolymerVersion() {
  return window.Polymer && window.Polymer.version;
};

var StatisticsGatherer = function () {
  function StatisticsGatherer(logger) {
    classCallCheck(this, StatisticsGatherer);

    this.now = new Date().getTime();
    this.logger = logger;
  }

  createClass(StatisticsGatherer, [{
    key: 'frameworkVersionDetectors',
    value: function frameworkVersionDetectors() {
      return {
        'Flow': function Flow() {
          if (window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients) {
            var flowVersions = Object.keys(window.Vaadin.Flow.clients).map(function (key) {
              return window.Vaadin.Flow.clients[key];
            }).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().flow;
            });
            if (flowVersions.length > 0) {
              return flowVersions[0];
            }
          }
        },
        'Vaadin Framework': function VaadinFramework() {
          if (window.vaadin && window.vaadin.clients) {
            var frameworkVersions = Object.values(window.vaadin.clients).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().vaadinVersion;
            });
            if (frameworkVersions.length > 0) {
              return frameworkVersions[0];
            }
          }
        },
        'AngularJs': function AngularJs() {
          if (window.angular && window.angular.version && window.angular.version) {
            return window.angular.version.full;
          }
        },
        'Angular': function Angular() {
          if (window.ng) {
            var tags = document.querySelectorAll("[ng-version]");
            if (tags.length > 0) {
              return tags[0].getAttribute("ng-version");
            }
            return "Unknown";
          }
        },
        'Backbone.js': function BackboneJs() {
          if (window.Backbone) {
            return window.Backbone.VERSION;
          }
        },
        'React': function React() {
          var reactSelector = '[data-reactroot], [data-reactid]';
          if (!!document.querySelector(reactSelector)) {
            // React does not publish the version by default
            return "unknown";
          }
        },
        'Ember': function Ember() {
          if (window.Em && window.Em.VERSION) {
            return window.Em.VERSION;
          } else if (window.Ember && window.Ember.VERSION) {
            return window.Ember.VERSION;
          }
        },
        'jQuery': function (_jQuery) {
          function jQuery() {
            return _jQuery.apply(this, arguments);
          }

          jQuery.toString = function () {
            return _jQuery.toString();
          };

          return jQuery;
        }(function () {
          if (typeof jQuery === 'function' && jQuery.prototype.jquery !== undefined) {
            return jQuery.prototype.jquery;
          }
        }),
        'Polymer': function Polymer() {
          var version = getPolymerVersion();
          if (version) {
            return version;
          }
        },
        'LitElement': function LitElement() {
          var version = window.litElementVersions && window.litElementVersions[0];
          if (version) {
            return version;
          }
        },
        'LitHtml': function LitHtml() {
          var version = window.litHtmlVersions && window.litHtmlVersions[0];
          if (version) {
            return version;
          }
        },
        'Vue.js': function VueJs() {
          if (window.Vue) {
            return window.Vue.version;
          }
        }
      };
    }
  }, {
    key: 'getUsedVaadinElements',
    value: function getUsedVaadinElements(elements) {
      var version = getPolymerVersion();
      var elementClasses = void 0;
      // NOTE: In case you edit the code here, YOU MUST UPDATE any statistics reporting code in Flow.
      // Check all locations calling the method getEntries() in
      // https://github.com/vaadin/flow/blob/master/flow-server/src/main/java/com/vaadin/flow/internal/UsageStatistics.java#L106
      // Currently it is only used by BootstrapHandler.
      if (version && version.indexOf('2') === 0) {
        // Polymer 2: components classes are stored in window.Vaadin
        elementClasses = Object.keys(window.Vaadin).map(function (c) {
          return window.Vaadin[c];
        }).filter(function (c) {
          return c.is;
        });
      } else {
        // Polymer 3: components classes are stored in window.Vaadin.registrations
        elementClasses = window.Vaadin.registrations || [];
      }
      elementClasses.forEach(function (klass) {
        var version = klass.version ? klass.version : "0.0.0";
        elements[klass.is] = { version: version };
      });
    }
  }, {
    key: 'getUsedVaadinThemes',
    value: function getUsedVaadinThemes(themes) {
      ['Lumo', 'Material'].forEach(function (themeName) {
        var theme;
        var version = getPolymerVersion();
        if (version && version.indexOf('2') === 0) {
          // Polymer 2: themes are stored in window.Vaadin
          theme = window.Vaadin[themeName];
        } else {
          // Polymer 3: themes are stored in custom element registry
          theme = customElements.get('vaadin-' + themeName.toLowerCase() + '-styles');
        }
        if (theme && theme.version) {
          themes[themeName] = { version: theme.version };
        }
      });
    }
  }, {
    key: 'getFrameworks',
    value: function getFrameworks(frameworks) {
      var detectors = this.frameworkVersionDetectors();
      Object.keys(detectors).forEach(function (framework) {
        var detector = detectors[framework];
        try {
          var version = detector();
          if (version) {
            frameworks[framework] = { version: version };
          }
        } catch (e) {}
      });
    }
  }, {
    key: 'gather',
    value: function gather(storage) {
      var storedStats = storage.read();
      var gatheredStats = {};
      var types = ["elements", "frameworks", "themes"];

      types.forEach(function (type) {
        gatheredStats[type] = {};
        if (!storedStats[type]) {
          storedStats[type] = {};
        }
      });

      var previousStats = JSON.stringify(storedStats);

      this.getUsedVaadinElements(gatheredStats.elements);
      this.getFrameworks(gatheredStats.frameworks);
      this.getUsedVaadinThemes(gatheredStats.themes);

      var now = this.now;
      types.forEach(function (type) {
        var keys = Object.keys(gatheredStats[type]);
        keys.forEach(function (key) {
          if (!storedStats[type][key] || _typeof(storedStats[type][key]) != _typeof({})) {
            storedStats[type][key] = { firstUsed: now };
          }
          // Discards any previously logged version number
          storedStats[type][key].version = gatheredStats[type][key].version;
          storedStats[type][key].lastUsed = now;
        });
      });

      var newStats = JSON.stringify(storedStats);
      storage.write(newStats);
      if (newStats != previousStats && Object.keys(storedStats).length > 0) {
        this.logger.debug("New stats: " + newStats);
      }
    }
  }]);
  return StatisticsGatherer;
}();

var StatisticsStorage = function () {
  function StatisticsStorage(key) {
    classCallCheck(this, StatisticsStorage);

    this.key = key;
  }

  createClass(StatisticsStorage, [{
    key: 'read',
    value: function read() {
      var localStorageStatsString = localStorage.getItem(this.key);
      try {
        return JSON.parse(localStorageStatsString ? localStorageStatsString : '{}');
      } catch (e) {
        return {};
      }
    }
  }, {
    key: 'write',
    value: function write(data) {
      localStorage.setItem(this.key, data);
    }
  }, {
    key: 'clear',
    value: function clear() {
      localStorage.removeItem(this.key);
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      var storedStats = this.read();
      var empty = true;
      Object.keys(storedStats).forEach(function (key) {
        if (Object.keys(storedStats[key]).length > 0) {
          empty = false;
        }
      });

      return empty;
    }
  }]);
  return StatisticsStorage;
}();

var StatisticsSender = function () {
  function StatisticsSender(url, logger) {
    classCallCheck(this, StatisticsSender);

    this.url = url;
    this.logger = logger;
  }

  createClass(StatisticsSender, [{
    key: 'send',
    value: function send(data, errorHandler) {
      var logger = this.logger;

      if (navigator.onLine === false) {
        logger.debug("Offline, can't send");
        errorHandler();
        return;
      }
      logger.debug("Sending data to " + this.url);

      var req = new XMLHttpRequest();
      req.withCredentials = true;
      req.addEventListener("load", function () {
        // Stats sent, nothing more to do
        logger.debug("Response: " + req.responseText);
      });
      req.addEventListener("error", function () {
        logger.debug("Send failed");
        errorHandler();
      });
      req.addEventListener("abort", function () {
        logger.debug("Send aborted");
        errorHandler();
      });
      req.open("POST", this.url);
      req.setRequestHeader("Content-Type", "application/json");
      req.send(data);
    }
  }]);
  return StatisticsSender;
}();

var StatisticsLogger = function () {
  function StatisticsLogger(id) {
    classCallCheck(this, StatisticsLogger);

    this.id = id;
  }

  createClass(StatisticsLogger, [{
    key: '_isDebug',
    value: function _isDebug() {
      return localStorage.getItem("vaadin." + this.id + ".debug");
    }
  }, {
    key: 'debug',
    value: function debug(msg) {
      if (this._isDebug()) {
        console.info(this.id + ": " + msg);
      }
    }
  }]);
  return StatisticsLogger;
}();

var UsageStatistics = function () {
  function UsageStatistics() {
    classCallCheck(this, UsageStatistics);

    this.now = new Date();
    this.timeNow = this.now.getTime();
    this.gatherDelay = 10; // Delay between loading this file and gathering stats
    this.initialDelay = 24 * 60 * 60;

    this.logger = new StatisticsLogger("statistics");
    this.storage = new StatisticsStorage("vaadin.statistics.basket");
    this.gatherer = new StatisticsGatherer(this.logger);
    this.sender = new StatisticsSender("https://tools.vaadin.com/usage-stats/submit", this.logger);
  }

  createClass(UsageStatistics, [{
    key: 'maybeGatherAndSend',
    value: function maybeGatherAndSend() {
      var _this = this;

      if (localStorage.getItem(UsageStatistics.optOutKey)) {
        return;
      }
      this.gatherer.gather(this.storage);
      setTimeout(function () {
        _this.maybeSend();
      }, this.gatherDelay * 1000);
    }
  }, {
    key: 'lottery',
    value: function lottery() {
      return true;
    }
  }, {
    key: 'currentMonth',
    value: function currentMonth() {
      return this.now.getYear() * 12 + this.now.getMonth();
    }
  }, {
    key: 'maybeSend',
    value: function maybeSend() {
      var firstUse = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      var monthProcessed = Number(localStorage.getItem(UsageStatistics.monthProcessedKey));

      if (!firstUse) {
        // Use a grace period to avoid interfering with tests, incognito mode etc
        firstUse = this.timeNow;
        localStorage.setItem(UsageStatistics.firstUseKey, firstUse);
      }

      if (this.timeNow < firstUse + this.initialDelay * 1000) {
        this.logger.debug("No statistics will be sent until the initial delay of " + this.initialDelay + "s has passed");
        return;
      }
      if (this.currentMonth() <= monthProcessed) {
        this.logger.debug("This month has already been processed");
        return;
      }
      localStorage.setItem(UsageStatistics.monthProcessedKey, this.currentMonth());
      // Use random sampling
      if (this.lottery()) {
        this.logger.debug("Congratulations, we have a winner!");
      } else {
        this.logger.debug("Sorry, no stats from you this time");
        return;
      }

      this.send();
    }
  }, {
    key: 'send',
    value: function send() {
      // Ensure we have the latest data
      this.gatherer.gather(this.storage);

      // Read, send and clean up
      var data = this.storage.read();
      data["firstUse"] = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      data["usageStatisticsVersion"] = UsageStatistics.version;
      var info = 'This request contains usage statistics gathered from the application running in development mode. \n\nStatistics gathering is automatically disabled and excluded from production builds.\n\nFor details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.\n\n\n\n';
      var self = this;
      this.sender.send(info + JSON.stringify(data), function () {
        // Revert the 'month processed' flag
        localStorage.setItem(UsageStatistics.monthProcessedKey, self.currentMonth() - 1);
      });
    }
  }], [{
    key: 'version',
    get: function get$1() {
      return '2.1.2';
    }
  }, {
    key: 'firstUseKey',
    get: function get$1() {
      return 'vaadin.statistics.firstuse';
    }
  }, {
    key: 'monthProcessedKey',
    get: function get$1() {
      return 'vaadin.statistics.monthProcessed';
    }
  }, {
    key: 'optOutKey',
    get: function get$1() {
      return 'vaadin.statistics.optout';
    }
  }]);
  return UsageStatistics;
}();

try {
  window.Vaadin = window.Vaadin || {};
  window.Vaadin.usageStatsChecker = window.Vaadin.usageStatsChecker || new UsageStatistics();
  window.Vaadin.usageStatsChecker.maybeGatherAndSend();
} catch (e) {
  // Intentionally ignored as this is not a problem in the app being developed
}

}());

  vaadin-dev-mode:end **/}const Kn=function(){if(typeof Fi=="function")return Fi(Xn)};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */let Vi=0,Xs=0;const ee=[];let Tt=!1;function Jn(){Tt=!1;const s=ee.length;for(let t=0;t<s;t++){const e=ee[t];if(e)try{e()}catch(i){setTimeout(()=>{throw i})}}ee.splice(0,s),Xs+=s}const Ne={after(s){return{run(t){return window.setTimeout(t,s)},cancel(t){window.clearTimeout(t)}}},run(s,t){return window.setTimeout(s,t)},cancel(s){window.clearTimeout(s)}},Ae={run(s){return window.requestAnimationFrame(s)},cancel(s){window.cancelAnimationFrame(s)}},Ks={run(s){return window.requestIdleCallback?window.requestIdleCallback(s):window.setTimeout(s,16)},cancel(s){window.cancelIdleCallback?window.cancelIdleCallback(s):window.clearTimeout(s)}},Ce={run(s){Tt||(Tt=!0,queueMicrotask(()=>Jn())),ee.push(s);const t=Vi;return Vi+=1,t},cancel(s){const t=s-Xs;if(t>=0){if(!ee[t])throw new Error(`invalid async handle: ${s}`);ee[t]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const xe=new Set;let O=class zt{static debounce(t,e,i){return t instanceof zt?t._cancelAsync():t=new zt,t.setConfig(e,i),t}constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,xe.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),xe.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}};function Js(s){xe.add(s)}function Zn(){const s=!!xe.size;return xe.forEach(t=>{try{t.flush()}catch(e){setTimeout(()=>{throw e})}}),s}const fe=()=>{let s;do s=Zn();while(s)};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */window.Vaadin||(window.Vaadin={});window.Vaadin.registrations||(window.Vaadin.registrations=[]);window.Vaadin.developmentModeCallback||(window.Vaadin.developmentModeCallback={});window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){Kn()};let at;const Bi=new Set,V=s=>class extends Y(s){static finalize(){super.finalize();const{is:e}=this;e&&!Bi.has(e)&&(window.Vaadin.registrations.push(this),Bi.add(e),window.Vaadin.developmentModeCallback&&(at=O.debounce(at,Ks,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),Js(at)))}constructor(){super(),document.doctype===null&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ea=m`
  [part='clear-button'] {
    display: none;
    cursor: default;
  }

  [part='clear-button']::before {
    content: '\\2715';
  }

  :host([clear-button-visible][has-value]:not([disabled]):not([readonly])) [part='clear-button'] {
    display: block;
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ta=m`
  :host {
    display: inline-flex;
    outline: none;
  }

  :host::before {
    content: '\\2003';
    width: 0;
    display: inline-block;
    /* Size and position this element on the same vertical position as the input-field element
          to make vertical align for the host element work as expected */
  }

  :host([hidden]) {
    display: none !important;
  }

  :host(:not([has-label])) [part='label'] {
    display: none;
  }

  @media (forced-colors: active) {
    :host(:not([readonly])) [part='input-field'] {
      outline: 1px solid;
      outline-offset: -1px;
    }
    :host([focused]) [part='input-field'] {
      outline-width: 2px;
    }
    :host([disabled]) [part='input-field'] {
      outline-color: GrayText;
    }
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ia=m`
  [class$='container'] {
    display: flex;
    flex-direction: column;
    min-width: 100%;
    max-width: 100%;
    width: var(--vaadin-field-default-width, 12em);
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Xt=[ta,ia,ea];/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let Kt=!1;window.addEventListener("keydown",()=>{Kt=!0},{capture:!0});window.addEventListener("mousedown",()=>{Kt=!1},{capture:!0});function He(){let s=document.activeElement||document.body;for(;s.shadowRoot&&s.shadowRoot.activeElement;)s=s.shadowRoot.activeElement;return s}function Ke(){return Kt}function sa(s){const t=s.style;if(t.visibility==="hidden"||t.display==="none")return!0;const e=window.getComputedStyle(s);return e.visibility==="hidden"||e.display==="none"}function oa(s,t){const e=Math.max(s.tabIndex,0),i=Math.max(t.tabIndex,0);return e===0||i===0?i>e:e>i}function ra(s,t){const e=[];for(;s.length>0&&t.length>0;)oa(s[0],t[0])?e.push(t.shift()):e.push(s.shift());return e.concat(s,t)}function Ot(s){const t=s.length;if(t<2)return s;const e=Math.ceil(t/2),i=Ot(s.slice(0,e)),o=Ot(s.slice(e));return ra(i,o)}function Zs(s){return s.matches('[tabindex="-1"]')?!1:s.matches("input, select, textarea, button, object")?s.matches(":not([disabled])"):s.matches("a[href], area[href], iframe, [tabindex], [contentEditable]")}function eo(s){return s.getRootNode().activeElement===s}function na(s){if(!Zs(s))return-1;const t=s.getAttribute("tabindex")||0;return Number(t)}function to(s,t){if(s.nodeType!==Node.ELEMENT_NODE||sa(s))return!1;const e=s,i=na(e);let o=i>0;i>=0&&t.push(e);let r=[];return e.localName==="slot"?r=e.assignedNodes({flatten:!0}):r=(e.shadowRoot||e).children,[...r].forEach(n=>{o=to(n,t)||o}),o}function aa(s){const t=[];return to(s,t)?Ot(t):t}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function la(s){const t=[];for(;s;){if(s.nodeType===Node.DOCUMENT_NODE){t.push(s);break}if(s.nodeType===Node.DOCUMENT_FRAGMENT_NODE){t.push(s),s=s.host;continue}if(s.assignedSlot){s=s.assignedSlot;continue}s=s.parentNode}return t}function Jt(s){return s?new Set(s.split(" ")):new Set}function Je(s){return s?[...s].join(" "):""}function Zt(s,t,e){const i=Jt(s.getAttribute(t));i.add(e),s.setAttribute(t,Je(i))}function io(s,t,e){const i=Jt(s.getAttribute(t));if(i.delete(e),i.size===0){s.removeAttribute(t);return}s.setAttribute(t,Je(i))}function so(s){return s.nodeType===Node.TEXT_NODE&&s.textContent.trim()===""}/**
 * @license
 * Copyright (c) 2023 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Le{constructor(t,e){this.slot=t,this.callback=e,this._storedNodes=[],this._connected=!1,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){this.slot.addEventListener("slotchange",this._boundSchedule),this._connected=!0}disconnect(){this.slot.removeEventListener("slotchange",this._boundSchedule),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,queueMicrotask(()=>{this.flush()}))}flush(){this._connected&&(this._scheduled=!1,this._processNodes())}_processNodes(){const t=this.slot.assignedNodes({flatten:!0});let e=[];const i=[],o=[];t.length&&(e=t.filter(r=>!this._storedNodes.includes(r))),this._storedNodes.length&&this._storedNodes.forEach((r,n)=>{const a=t.indexOf(r);a===-1?i.push(r):a!==n&&o.push(r)}),(e.length||i.length||o.length)&&this.callback({addedNodes:e,currentNodes:t,movedNodes:o,removedNodes:i}),this._storedNodes=t}}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let da=0;function ei(){return da++}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class k extends EventTarget{static generateId(t,e="default"){return`${e}-${t.localName}-${ei()}`}constructor(t,e,i,o={}){super();const{initializer:r,multiple:n,observe:a,useUniqueId:l,uniqueIdPrefix:d}=o;this.host=t,this.slotName=e,this.tagName=i,this.observe=typeof a=="boolean"?a:!0,this.multiple=typeof n=="boolean"?n:!1,this.slotInitializer=r,n&&(this.nodes=[]),l&&(this.defaultId=this.constructor.generateId(t,d||e))}hostConnected(){this.initialized||(this.multiple?this.initMultiple():this.initSingle(),this.observe&&this.observeSlot(),this.initialized=!0)}initSingle(){let t=this.getSlotChild();t?(this.node=t,this.initAddedNode(t)):(t=this.attachDefaultNode(),this.initNode(t))}initMultiple(){const t=this.getSlotChildren();if(t.length===0){const e=this.attachDefaultNode();e&&(this.nodes=[e],this.initNode(e))}else this.nodes=t,t.forEach(e=>{this.initAddedNode(e)})}attachDefaultNode(){const{host:t,slotName:e,tagName:i}=this;let o=this.defaultNode;return!o&&i&&(o=document.createElement(i),o instanceof Element&&(e!==""&&o.setAttribute("slot",e),this.defaultNode=o)),o&&(this.node=o,t.appendChild(o)),o}getSlotChildren(){const{slotName:t}=this;return Array.from(this.host.childNodes).filter(e=>e.nodeType===Node.ELEMENT_NODE&&e.slot===t||e.nodeType===Node.TEXT_NODE&&e.textContent.trim()&&t==="")}getSlotChild(){return this.getSlotChildren()[0]}initNode(t){const{slotInitializer:e}=this;e&&e(t,this.host)}initCustomNode(t){}teardownNode(t){}initAddedNode(t){t!==this.defaultNode&&(this.initCustomNode(t),this.initNode(t))}observeSlot(){const{slotName:t}=this,e=t===""?"slot:not([name])":`slot[name=${t}]`,i=this.host.shadowRoot.querySelector(e);this.__slotObserver=new Le(i,({addedNodes:o,removedNodes:r})=>{const n=this.multiple?this.nodes:[this.node],a=o.filter(l=>!so(l)&&!n.includes(l));r.length&&(this.nodes=n.filter(l=>!r.includes(l)),r.forEach(l=>{this.teardownNode(l)})),a&&a.length>0&&(this.multiple?(this.defaultNode&&this.defaultNode.remove(),this.nodes=[...n,...a].filter(l=>l!==this.defaultNode),a.forEach(l=>{this.initAddedNode(l)})):(this.node&&this.node.remove(),this.node=a[0],this.initAddedNode(this.node)))})}}/**
 * @license
 * Copyright (c) 2022 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ze extends k{constructor(t){super(t,"tooltip"),this.setTarget(t)}initCustomNode(t){t.target=this.target,this.ariaTarget!==void 0&&(t.ariaTarget=this.ariaTarget),this.context!==void 0&&(t.context=this.context),this.manual!==void 0&&(t.manual=this.manual),this.opened!==void 0&&(t.opened=this.opened),this.position!==void 0&&(t._position=this.position),this.shouldShow!==void 0&&(t.shouldShow=this.shouldShow),this.__notifyChange()}teardownNode(){this.__notifyChange()}setAriaTarget(t){this.ariaTarget=t;const e=this.node;e&&(e.ariaTarget=t)}setContext(t){this.context=t;const e=this.node;e&&(e.context=t)}setManual(t){this.manual=t;const e=this.node;e&&(e.manual=t)}setOpened(t){this.opened=t;const e=this.node;e&&(e.opened=t)}setPosition(t){this.position=t;const e=this.node;e&&(e._position=t)}setShouldShow(t){this.shouldShow=t;const e=this.node;e&&(e.shouldShow=t)}setTarget(t){this.target=t;const e=this.node;e&&(e.target=t)}__notifyChange(){this.dispatchEvent(new CustomEvent("tooltip-changed",{detail:{node:this.node}}))}}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ti extends k{constructor(t,e,i={}){const{uniqueIdPrefix:o}=i;super(t,"input","input",{initializer:(r,n)=>{n.value&&(r.value=n.value),n.type&&r.setAttribute("type",n.type),r.id=this.defaultId,typeof e=="function"&&e(r)},useUniqueId:!0,uniqueIdPrefix:o})}}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const et=I(s=>class extends s{get _keyboardActive(){return Ke()}ready(){this.addEventListener("focusin",e=>{this._shouldSetFocus(e)&&this._setFocused(!0)}),this.addEventListener("focusout",e=>{this._shouldRemoveFocus(e)&&this._setFocused(!1)}),super.ready()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(e){this.toggleAttribute("focused",e),this.toggleAttribute("focus-ring",e&&this._keyboardActive)}_shouldSetFocus(e){return!0}_shouldRemoveFocus(e){return!0}});/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ii=I(s=>class extends s{static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0,sync:!0}}}_disabledChanged(e){this._setAriaDisabled(e)}_setAriaDisabled(e){e?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}click(){this.disabled||super.click()}});/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const oo=s=>class extends ii(s){static get properties(){return{tabindex:{type:Number,reflectToAttribute:!0,observer:"_tabindexChanged"},_lastTabIndex:{type:Number}}}_disabledChanged(e,i){super._disabledChanged(e,i),!this.__shouldAllowFocusWhenDisabled()&&(e?(this.tabindex!==void 0&&(this._lastTabIndex=this.tabindex),this.tabindex=-1):i&&(this.tabindex=this._lastTabIndex))}_tabindexChanged(e){this.__shouldAllowFocusWhenDisabled()||this.disabled&&e!==-1&&(this._lastTabIndex=e,this.tabindex=-1)}focus(){(!this.disabled||this.__shouldAllowFocusWhenDisabled())&&super.focus()}__shouldAllowFocusWhenDisabled(){return!1}};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ca=I(s=>class extends et(oo(s)){static get properties(){return{autofocus:{type:Boolean},focusElement:{type:Object,readOnly:!0,observer:"_focusElementChanged"},_lastTabIndex:{value:0}}}constructor(){super(),this._boundOnBlur=this._onBlur.bind(this),this._boundOnFocus=this._onFocus.bind(this)}ready(){super.ready(),this.autofocus&&!this.disabled&&requestAnimationFrame(()=>{this.focus(),this.setAttribute("focus-ring","")})}focus(){this.focusElement&&!this.disabled&&this.focusElement.focus()}blur(){this.focusElement&&this.focusElement.blur()}click(){this.focusElement&&!this.disabled&&this.focusElement.click()}_focusElementChanged(e,i){e?(e.disabled=this.disabled,this._addFocusListeners(e),this.__forwardTabIndex(this.tabindex)):i&&this._removeFocusListeners(i)}_addFocusListeners(e){e.addEventListener("blur",this._boundOnBlur),e.addEventListener("focus",this._boundOnFocus)}_removeFocusListeners(e){e.removeEventListener("blur",this._boundOnBlur),e.removeEventListener("focus",this._boundOnFocus)}_onFocus(e){e.stopPropagation(),this.dispatchEvent(new Event("focus"))}_onBlur(e){e.stopPropagation(),this.dispatchEvent(new Event("blur"))}_shouldSetFocus(e){return e.target===this.focusElement}_shouldRemoveFocus(e){return e.target===this.focusElement}_disabledChanged(e,i){super._disabledChanged(e,i),this.focusElement&&(this.focusElement.disabled=e),e&&this.blur()}_tabindexChanged(e){this.__forwardTabIndex(e)}__forwardTabIndex(e){e!==void 0&&this.focusElement&&(this.focusElement.tabIndex=e,e!==-1&&(this.tabindex=void 0)),this.disabled&&e&&(e!==-1&&(this._lastTabIndex=e),this.tabindex=void 0)}});/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const tt=I(s=>class extends s{ready(){super.ready(),this.addEventListener("keydown",e=>{this._onKeyDown(e)}),this.addEventListener("keyup",e=>{this._onKeyUp(e)})}_onKeyDown(e){switch(e.key){case"Enter":this._onEnter(e);break;case"Escape":this._onEscape(e);break}}_onKeyUp(e){}_onEnter(e){}_onEscape(e){}});/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const lt=new WeakMap;function ha(s){return lt.has(s)||lt.set(s,new Set),lt.get(s)}function ua(s,t){const e=document.createElement("style");e.textContent=s,t===document?document.head.appendChild(e):t.insertBefore(e,t.firstChild)}const pa=I(s=>class extends s{get slotStyles(){return[]}connectedCallback(){super.connectedCallback(),this.__applySlotStyles()}__applySlotStyles(){const e=this.getRootNode(),i=ha(e);this.slotStyles.forEach(o=>{i.has(o)||(ua(o,e),i.add(o))})}});/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const it=s=>s.test(navigator.userAgent),kt=s=>s.test(navigator.platform),ma=s=>s.test(navigator.vendor);it(/Android/u);it(/Chrome/u)&&ma(/Google Inc/u);it(/Firefox/u);const fa=kt(/^iPad/u)||kt(/^Mac/u)&&navigator.maxTouchPoints>1,_a=kt(/^iPhone/u),ga=_a||fa,va=it(/^((?!chrome|android).)*safari/iu),$e=(()=>{try{return document.createEvent("TouchEvent"),!0}catch{return!1}})();/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const si=I(s=>class extends s{static get properties(){return{inputElement:{type:Object,readOnly:!0,observer:"_inputElementChanged",sync:!0},type:{type:String,readOnly:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0,sync:!0}}}constructor(){super(),this._boundOnInput=this._onInput.bind(this),this._boundOnChange=this._onChange.bind(this)}get _hasValue(){return this.value!=null&&this.value!==""}get _inputElementValueProperty(){return"value"}get _inputElementValue(){return this.inputElement?this.inputElement[this._inputElementValueProperty]:void 0}set _inputElementValue(e){this.inputElement&&(this.inputElement[this._inputElementValueProperty]=e)}clear(){this.value="",this._inputElementValue=""}_addInputListeners(e){e.addEventListener("input",this._boundOnInput),e.addEventListener("change",this._boundOnChange)}_removeInputListeners(e){e.removeEventListener("input",this._boundOnInput),e.removeEventListener("change",this._boundOnChange)}_forwardInputValue(e){this.inputElement&&(this._inputElementValue=e??"")}_inputElementChanged(e,i){e?this._addInputListeners(e):i&&this._removeInputListeners(i)}_onInput(e){const i=e.composedPath()[0];this.__userInput=e.isTrusted,this.value=i.value,this.__userInput=!1}_onChange(e){}_toggleHasValue(e){this.toggleAttribute("has-value",e)}_valueChanged(e,i){this._toggleHasValue(this._hasValue),!(e===""&&i===void 0)&&(this.__userInput||this._forwardInputValue(e))}});/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ba=s=>class extends si(tt(s)){static get properties(){return{clearButtonVisible:{type:Boolean,reflectToAttribute:!0,value:!1}}}get clearElement(){return console.warn(`Please implement the 'clearElement' property in <${this.localName}>`),null}ready(){super.ready(),this.clearElement&&(this.clearElement.addEventListener("mousedown",e=>this._onClearButtonMouseDown(e)),this.clearElement.addEventListener("click",e=>this._onClearButtonClick(e)))}_onClearButtonClick(e){e.preventDefault(),this._onClearAction()}_onClearButtonMouseDown(e){e.preventDefault(),$e||this.inputElement.focus()}_onEscape(e){super._onEscape(e),this.clearButtonVisible&&this.value&&!this.readonly&&(e.stopPropagation(),this._onClearAction())}_onClearAction(){this._inputElementValue="",this.inputElement.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.inputElement.dispatchEvent(new Event("change",{bubbles:!0}))}};/**
 * @license
 * Copyright (c) 2023 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const dt=new Map;function oi(s){return dt.has(s)||dt.set(s,new WeakMap),dt.get(s)}function ro(s,t){s&&s.removeAttribute(t)}function no(s,t){if(!s||!t)return;const e=oi(t);if(e.has(s))return;const i=Jt(s.getAttribute(t));e.set(s,new Set(i))}function ya(s,t){if(!s)return;const e=oi(t),i=e.get(s);!i||i.size===0?s.removeAttribute(t):Zt(s,t,Je(i)),e.delete(s)}function ct(s,t,e={newId:null,oldId:null,fromUser:!1}){if(!s||!t)return;const{newId:i,oldId:o,fromUser:r}=e,n=oi(t),a=n.get(s);if(!r&&a){o&&a.delete(o),i&&a.add(i);return}r&&(a?i||n.delete(s):no(s,t),ro(s,t)),io(s,t,o);const l=i||Je(a);l&&Zt(s,t,l)}function Aa(s,t){no(s,t),ro(s,t)}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ca{constructor(t){this.host=t,this.__required=!1}setTarget(t){this.__target=t,this.__setAriaRequiredAttribute(this.__required),this.__setLabelIdToAriaAttribute(this.__labelId,this.__labelId),this.__labelIdFromUser!=null&&this.__setLabelIdToAriaAttribute(this.__labelIdFromUser,this.__labelIdFromUser,!0),this.__setErrorIdToAriaAttribute(this.__errorId),this.__setHelperIdToAriaAttribute(this.__helperId),this.setAriaLabel(this.__label)}setRequired(t){this.__setAriaRequiredAttribute(t),this.__required=t}setAriaLabel(t){this.__setAriaLabelToAttribute(t),this.__label=t}setLabelId(t,e=!1){const i=e?this.__labelIdFromUser:this.__labelId;this.__setLabelIdToAriaAttribute(t,i,e),e?this.__labelIdFromUser=t:this.__labelId=t}setErrorId(t){this.__setErrorIdToAriaAttribute(t,this.__errorId),this.__errorId=t}setHelperId(t){this.__setHelperIdToAriaAttribute(t,this.__helperId),this.__helperId=t}__setAriaLabelToAttribute(t){this.__target&&(t?(Aa(this.__target,"aria-labelledby"),this.__target.setAttribute("aria-label",t)):this.__label&&(ya(this.__target,"aria-labelledby"),this.__target.removeAttribute("aria-label")))}__setLabelIdToAriaAttribute(t,e,i){ct(this.__target,"aria-labelledby",{newId:t,oldId:e,fromUser:i})}__setErrorIdToAriaAttribute(t,e){ct(this.__target,"aria-describedby",{newId:t,oldId:e,fromUser:!1})}__setHelperIdToAriaAttribute(t,e){ct(this.__target,"aria-describedby",{newId:t,oldId:e,fromUser:!1})}__setAriaRequiredAttribute(t){this.__target&&(["input","textarea"].includes(this.__target.localName)||(t?this.__target.setAttribute("aria-required","true"):this.__target.removeAttribute("aria-required")))}}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const U=I(s=>typeof s.prototype.addController=="function"?s:class extends s{constructor(){super(),this.__controllers=new Set}connectedCallback(){super.connectedCallback(),this.__controllers.forEach(e=>{e.hostConnected&&e.hostConnected()})}disconnectedCallback(){super.disconnectedCallback(),this.__controllers.forEach(e=>{e.hostDisconnected&&e.hostDisconnected()})}addController(e){this.__controllers.add(e),this.$!==void 0&&this.isConnected&&e.hostConnected&&e.hostConnected()}removeController(e){this.__controllers.delete(e)}});/**
 * @license
 * Copyright (c) 2022 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const z=document.createElement("div");z.style.position="fixed";z.style.clip="rect(0px, 0px, 0px, 0px)";z.setAttribute("aria-live","polite");document.body.appendChild(z);let Se;function R(s,t={}){const e=t.mode||"polite",i=t.timeout===void 0?150:t.timeout;e==="alert"?(z.removeAttribute("aria-live"),z.removeAttribute("role"),Se=O.debounce(Se,Ae,()=>{z.setAttribute("role","alert")})):(Se&&Se.cancel(),z.removeAttribute("role"),z.setAttribute("aria-live",e)),z.textContent="",setTimeout(()=>{z.textContent=s},i)}/**
 * @license
 * Copyright (c) 2022 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ri extends k{constructor(t,e,i,o={}){super(t,e,i,{...o,useUniqueId:!0})}initCustomNode(t){this.__updateNodeId(t),this.__notifyChange(t)}teardownNode(t){const e=this.getSlotChild();e&&e!==this.defaultNode?this.__notifyChange(e):(this.restoreDefaultNode(),this.updateDefaultNode(this.node))}attachDefaultNode(){const t=super.attachDefaultNode();return t&&this.__updateNodeId(t),t}restoreDefaultNode(){}updateDefaultNode(t){this.__notifyChange(t)}observeNode(t){this.__nodeObserver&&this.__nodeObserver.disconnect(),this.__nodeObserver=new MutationObserver(e=>{e.forEach(i=>{const o=i.target,r=o===this.node;i.type==="attributes"?r&&this.__updateNodeId(o):(r||o.parentElement===this.node)&&this.__notifyChange(this.node)})}),this.__nodeObserver.observe(t,{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0,characterData:!0})}__hasContent(t){return t?t.nodeType===Node.ELEMENT_NODE&&(customElements.get(t.localName)||t.children.length>0)||t.textContent&&t.textContent.trim()!=="":!1}__notifyChange(t){this.dispatchEvent(new CustomEvent("slot-content-changed",{detail:{hasContent:this.__hasContent(t),node:t}}))}__updateNodeId(t){const e=!this.nodes||t===this.nodes[0];t.nodeType===Node.ELEMENT_NODE&&(!this.multiple||e)&&!t.id&&(t.id=this.defaultId)}}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class xa extends ri{constructor(t){super(t,"error-message","div")}setErrorMessage(t){this.errorMessage=t,this.updateDefaultNode(this.node)}setInvalid(t){this.invalid=t,this.updateDefaultNode(this.node)}initAddedNode(t){t!==this.defaultNode&&this.initCustomNode(t)}initNode(t){this.updateDefaultNode(t)}initCustomNode(t){t.textContent&&!this.errorMessage&&(this.errorMessage=t.textContent.trim()),super.initCustomNode(t)}restoreDefaultNode(){this.attachDefaultNode()}updateDefaultNode(t){const{errorMessage:e,invalid:i}=this,o=!!(i&&e&&e.trim()!=="");t&&(t.textContent=o?e:"",t.hidden=!o,o&&R(e,{mode:"assertive"})),super.updateDefaultNode(t)}}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class wa extends ri{constructor(t){super(t,"helper",null)}setHelperText(t){this.helperText=t,this.getSlotChild()||this.restoreDefaultNode(),this.node===this.defaultNode&&this.updateDefaultNode(this.node)}restoreDefaultNode(){const{helperText:t}=this;if(t&&t.trim()!==""){this.tagName="div";const e=this.attachDefaultNode();this.observeNode(e)}}updateDefaultNode(t){t&&(t.textContent=this.helperText),super.updateDefaultNode(t)}initCustomNode(t){super.initCustomNode(t),this.observeNode(t)}}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ea extends ri{constructor(t){super(t,"label","label")}setLabel(t){this.label=t,this.getSlotChild()||this.restoreDefaultNode(),this.node===this.defaultNode&&this.updateDefaultNode(this.node)}restoreDefaultNode(){const{label:t}=this;if(t&&t.trim()!==""){const e=this.attachDefaultNode();this.observeNode(e)}}updateDefaultNode(t){t&&(t.textContent=this.label),super.updateDefaultNode(t)}initCustomNode(t){super.initCustomNode(t),this.observeNode(t)}}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ia=I(s=>class extends U(s){static get properties(){return{label:{type:String,observer:"_labelChanged"}}}constructor(){super(),this._labelController=new Ea(this),this._labelController.addEventListener("slot-content-changed",e=>{this.toggleAttribute("has-label",e.detail.hasContent)})}get _labelId(){const e=this._labelNode;return e&&e.id}get _labelNode(){return this._labelController.node}ready(){super.ready(),this.addController(this._labelController)}_labelChanged(e){this._labelController.setLabel(e)}});/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ni=I(s=>class extends s{static get properties(){return{invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1,sync:!0},manualValidation:{type:Boolean,value:!1},required:{type:Boolean,reflectToAttribute:!0,sync:!0}}}validate(){const e=this.checkValidity();return this._setInvalid(!e),this.dispatchEvent(new CustomEvent("validated",{detail:{valid:e}})),e}checkValidity(){return!this.required||!!this.value}_setInvalid(e){this._shouldSetInvalid(e)&&(this.invalid=e)}_shouldSetInvalid(e){return!0}_requestValidation(){this.manualValidation||this.validate()}});/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Pa=s=>class extends ni(Ia(U(s))){static get properties(){return{ariaTarget:{type:Object,observer:"_ariaTargetChanged"},errorMessage:{type:String,observer:"_errorMessageChanged"},helperText:{type:String,observer:"_helperTextChanged"},accessibleName:{type:String,observer:"_accessibleNameChanged"},accessibleNameRef:{type:String,observer:"_accessibleNameRefChanged"}}}static get observers(){return["_invalidChanged(invalid)","_requiredChanged(required)"]}constructor(){super(),this._fieldAriaController=new Ca(this),this._helperController=new wa(this),this._errorController=new xa(this),this._errorController.addEventListener("slot-content-changed",e=>{this.toggleAttribute("has-error-message",e.detail.hasContent)}),this._labelController.addEventListener("slot-content-changed",e=>{const{hasContent:i,node:o}=e.detail;this.__labelChanged(i,o)}),this._helperController.addEventListener("slot-content-changed",e=>{const{hasContent:i,node:o}=e.detail;this.toggleAttribute("has-helper",i),this.__helperChanged(i,o)})}get _errorNode(){return this._errorController.node}get _helperNode(){return this._helperController.node}ready(){super.ready(),this.addController(this._fieldAriaController),this.addController(this._helperController),this.addController(this._errorController)}__helperChanged(e,i){e?this._fieldAriaController.setHelperId(i.id):this._fieldAriaController.setHelperId(null)}_accessibleNameChanged(e){this._fieldAriaController.setAriaLabel(e)}_accessibleNameRefChanged(e){this._fieldAriaController.setLabelId(e,!0)}__labelChanged(e,i){e?this._fieldAriaController.setLabelId(i.id):this._fieldAriaController.setLabelId(null)}_errorMessageChanged(e){this._errorController.setErrorMessage(e)}_helperTextChanged(e){this._helperController.setHelperText(e)}_ariaTargetChanged(e){e&&this._fieldAriaController.setTarget(e)}_requiredChanged(e){this._fieldAriaController.setRequired(e)}_invalidChanged(e){this._errorController.setInvalid(e),setTimeout(()=>{if(e){const i=this._errorNode;this._fieldAriaController.setErrorId(i&&i.id)}else this._fieldAriaController.setErrorId(null)})}};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Sa=I(s=>class extends s{static get properties(){return{stateTarget:{type:Object,observer:"_stateTargetChanged"}}}static get delegateAttrs(){return[]}static get delegateProps(){return[]}ready(){super.ready(),this._createDelegateAttrsObserver(),this._createDelegatePropsObserver()}_stateTargetChanged(e){e&&(this._ensureAttrsDelegated(),this._ensurePropsDelegated())}_createDelegateAttrsObserver(){this._createMethodObserver(`_delegateAttrsChanged(${this.constructor.delegateAttrs.join(", ")})`)}_createDelegatePropsObserver(){this._createMethodObserver(`_delegatePropsChanged(${this.constructor.delegateProps.join(", ")})`)}_ensureAttrsDelegated(){this.constructor.delegateAttrs.forEach(e=>{this._delegateAttribute(e,this[e])})}_ensurePropsDelegated(){this.constructor.delegateProps.forEach(e=>{this._delegateProperty(e,this[e])})}_delegateAttrsChanged(...e){this.constructor.delegateAttrs.forEach((i,o)=>{this._delegateAttribute(i,e[o])})}_delegatePropsChanged(...e){this.constructor.delegateProps.forEach((i,o)=>{this._delegateProperty(i,e[o])})}_delegateAttribute(e,i){this.stateTarget&&(e==="invalid"&&this._delegateAttribute("aria-invalid",i?"true":!1),typeof i=="boolean"?this.stateTarget.toggleAttribute(e,i):i?this.stateTarget.setAttribute(e,i):this.stateTarget.removeAttribute(e))}_delegateProperty(e,i){this.stateTarget&&(this.stateTarget[e]=i)}});/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ao=I(s=>class extends Sa(ni(si(s))){static get constraints(){return["required"]}static get delegateAttrs(){return[...super.delegateAttrs,"required"]}ready(){super.ready(),this._createConstraintsObserver()}checkValidity(){return this.inputElement&&this._hasValidConstraints(this.constructor.constraints.map(e=>this[e]))?this.inputElement.checkValidity():!this.invalid}_hasValidConstraints(e){return e.some(i=>this.__isValidConstraint(i))}_createConstraintsObserver(){this._createMethodObserver(`_constraintsChanged(stateTarget, ${this.constructor.constraints.join(", ")})`)}_constraintsChanged(e,...i){if(!e)return;const o=this._hasValidConstraints(i),r=this.__previousHasConstraints&&!o;(this._hasValue||this.invalid)&&o?this._requestValidation():r&&!this.manualValidation&&this._setInvalid(!1),this.__previousHasConstraints=o}_onChange(e){e.stopPropagation(),this._requestValidation(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:e},bubbles:e.bubbles,cancelable:e.cancelable}))}__isValidConstraint(e){return!!e||e===0}});/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ai=s=>class extends pa(ca(ao(Pa(ba(tt(s)))))){static get properties(){return{allowedCharPattern:{type:String,observer:"_allowedCharPatternChanged"},autoselect:{type:Boolean,value:!1},name:{type:String,reflectToAttribute:!0},placeholder:{type:String,reflectToAttribute:!0},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},title:{type:String,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"name","type","placeholder","readonly","invalid","title"]}constructor(){super(),this._boundOnPaste=this._onPaste.bind(this),this._boundOnDrop=this._onDrop.bind(this),this._boundOnBeforeInput=this._onBeforeInput.bind(this)}get slotStyles(){return[`
          :is(input[slot='input'], textarea[slot='textarea'])::placeholder {
            font: inherit;
            color: inherit;
          }
        `]}_onFocus(e){super._onFocus(e),this.autoselect&&this.inputElement&&this.inputElement.select()}_addInputListeners(e){super._addInputListeners(e),e.addEventListener("paste",this._boundOnPaste),e.addEventListener("drop",this._boundOnDrop),e.addEventListener("beforeinput",this._boundOnBeforeInput)}_removeInputListeners(e){super._removeInputListeners(e),e.removeEventListener("paste",this._boundOnPaste),e.removeEventListener("drop",this._boundOnDrop),e.removeEventListener("beforeinput",this._boundOnBeforeInput)}_onKeyDown(e){super._onKeyDown(e),this.allowedCharPattern&&!this.__shouldAcceptKey(e)&&e.target===this.inputElement&&(e.preventDefault(),this._markInputPrevented())}_markInputPrevented(){this.setAttribute("input-prevented",""),this._preventInputDebouncer=O.debounce(this._preventInputDebouncer,Ne.after(200),()=>{this.removeAttribute("input-prevented")})}__shouldAcceptKey(e){return e.metaKey||e.ctrlKey||!e.key||e.key.length!==1||this.__allowedCharRegExp.test(e.key)}_onPaste(e){if(this.allowedCharPattern){const i=e.clipboardData.getData("text");this.__allowedTextRegExp.test(i)||(e.preventDefault(),this._markInputPrevented())}}_onDrop(e){if(this.allowedCharPattern){const i=e.dataTransfer.getData("text");this.__allowedTextRegExp.test(i)||(e.preventDefault(),this._markInputPrevented())}}_onBeforeInput(e){this.allowedCharPattern&&e.data&&!this.__allowedTextRegExp.test(e.data)&&(e.preventDefault(),this._markInputPrevented())}_allowedCharPatternChanged(e){if(e)try{this.__allowedCharRegExp=new RegExp(`^${e}$`,"u"),this.__allowedTextRegExp=new RegExp(`^${e}*$`,"u")}catch(i){console.error(i)}}};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ta=s=>class extends ai(s){static get properties(){return{autocomplete:{type:String},autocorrect:{type:String,reflectToAttribute:!0},autocapitalize:{type:String,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"autocapitalize","autocomplete","autocorrect"]}get __data(){return this.__dataValue||{}}set __data(e){this.__dataValue=e}_inputElementChanged(e){super._inputElementChanged(e),e&&(e.value&&e.value!==this.value&&(console.warn(`Please define value on the <${this.localName}> component!`),e.value=""),this.value&&(e.value=this.value))}_setFocused(e){super._setFocused(e),!e&&document.hasFocus()&&this._requestValidation()}_onInput(e){super._onInput(e),this.invalid&&this._requestValidation()}_valueChanged(e,i){super._valueChanged(e,i),i!==void 0&&this.invalid&&this._requestValidation()}};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class li{constructor(t,e){this.input=t,this.__preventDuplicateLabelClick=this.__preventDuplicateLabelClick.bind(this),e.addEventListener("slot-content-changed",i=>{this.__initLabel(i.detail.node)}),this.__initLabel(e.node)}__initLabel(t){t&&(t.addEventListener("click",this.__preventDuplicateLabelClick),this.input&&t.setAttribute("for",this.input.id))}__preventDuplicateLabelClick(){const t=e=>{e.stopImmediatePropagation(),this.input.removeEventListener("click",t)};this.input.addEventListener("click",t)}}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ri="NaN",za=s=>class extends Ta(s){static get properties(){return{min:{type:Number},max:{type:Number},step:{type:Number},stepButtonsVisible:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get observers(){return["_stepChanged(step, inputElement)"]}static get delegateProps(){return[...super.delegateProps,"min","max"]}static get constraints(){return[...super.constraints,"min","max","step"]}constructor(){super(),this._setType("number"),this.__onWheel=this.__onWheel.bind(this)}get slotStyles(){const e=this.localName;return[`
          ${e} input[type="number"]::-webkit-outer-spin-button,
          ${e} input[type="number"]::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }

          ${e} input[type="number"] {
            -moz-appearance: textfield;
          }

          ${e}[dir='rtl'] input[type="number"]::placeholder {
            direction: rtl;
          }

          ${e}[dir='rtl']:not([step-buttons-visible]) input[type="number"]::placeholder {
            text-align: left;
          }
        `]}get clearElement(){return this.$.clearButton}get __hasUnparsableValue(){return this._inputElementValue===Ri}ready(){super.ready(),this.addController(new ti(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new li(this.inputElement,this._labelController)),this._tooltipController=new Ze(this),this.addController(this._tooltipController),this._tooltipController.setPosition("top"),this._tooltipController.setAriaTarget(this.inputElement)}checkValidity(){return this.inputElement?this.inputElement.checkValidity():!this.invalid}_addInputListeners(e){super._addInputListeners(e),e.addEventListener("wheel",this.__onWheel)}_removeInputListeners(e){super._removeInputListeners(e),e.removeEventListener("wheel",this.__onWheel)}__onWheel(e){this.hasAttribute("focused")&&e.preventDefault()}_onDecreaseButtonTouchend(e){e.cancelable&&(e.preventDefault(),this.__blurActiveElement(),this._decreaseValue())}_onIncreaseButtonTouchend(e){e.cancelable&&(e.preventDefault(),this.__blurActiveElement(),this._increaseValue())}__blurActiveElement(){const e=He();e&&e!==this.inputElement&&e.blur()}_onDecreaseButtonClick(){this._decreaseValue()}_onIncreaseButtonClick(){this._increaseValue()}_decreaseValue(){this._incrementValue(-1)}_increaseValue(){this._incrementValue(1)}_incrementValue(e){if(this.disabled||this.readonly)return;const i=this.step||1;let o=parseFloat(this.value);this.value?o<this.min?(e=0,o=this.min):o>this.max&&(e=0,o=this.max):this.min===0&&e<0||this.max===0&&e>0||this.max===0&&this.min===0?(e=0,o=0):(this.max==null||this.max>=0)&&(this.min==null||this.min<=0)?o=0:this.min>0?(o=this.min,this.max<0&&e<0&&(o=this.max),e=0):this.max<0&&(o=this.max,e<0?e=0:this._getIncrement(1,o-i)>this.max?o-=2*i:o-=i);const r=this._getIncrement(e,o);(!this.value||e===0||this._incrementIsInsideTheLimits(e,o))&&(this.inputElement.value=String(parseFloat(r)),this.inputElement.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.__commitValueChange())}_getIncrement(e,i){let o=this.step||1,r=this.min||0;const n=Math.max(this._getMultiplier(i),this._getMultiplier(o),this._getMultiplier(r));o*=n,i=Math.round(i*n),r*=n;const a=(i-r)%o;return e>0?(i-a+o)/n:e<0?(i-(a||o))/n:i/n}_getDecimalCount(e){const i=String(e),o=i.indexOf(".");return o===-1?1:i.length-o-1}_getMultiplier(e){if(!isNaN(e))return 10**this._getDecimalCount(e)}_incrementIsInsideTheLimits(e,i){return e<0?this.min==null||this._getIncrement(e,i)>=this.min:e>0?this.max==null||this._getIncrement(e,i)<=this.max:this._getIncrement(e,i)<=this.max&&this._getIncrement(e,i)>=this.min}_isButtonEnabled(e){const i=e*(this.step||1),o=parseFloat(this.value);return!this.value||!this.disabled&&this._incrementIsInsideTheLimits(i,o)}_stepChanged(e,i){i&&(i.step=e||"any")}_valueChanged(e,i){e&&isNaN(parseFloat(e))?this.value="":typeof this.value!="string"&&(this.value=String(this.value)),super._valueChanged(this.value,i),this.__keepCommittedValue||(this.__committedValue=this.value,this.__committedUnparsableValueStatus=!1)}_onKeyDown(e){e.key==="ArrowUp"?(e.preventDefault(),this._increaseValue()):e.key==="ArrowDown"&&(e.preventDefault(),this._decreaseValue()),super._onKeyDown(e)}_onInput(e){this.__keepCommittedValue=!0,super._onInput(e),this.__keepCommittedValue=!1}_onChange(e){e.stopPropagation()}_onClearAction(e){super._onClearAction(e),this.__commitValueChange()}_setFocused(e){super._setFocused(e),e||this.__commitValueChange()}_onEnter(e){super._onEnter(e),this.__commitValueChange()}__commitValueChange(){this.__committedValue!==this.value?(this._requestValidation(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))):this.__committedUnparsableValueStatus!==this.__hasUnparsableValue&&(this._requestValidation(),this.dispatchEvent(new CustomEvent("unparsable-change"))),this.__committedValue=this.value,this.__committedUnparsableValueStatus=this.__hasUnparsableValue}get _inputElementValue(){return this.inputElement&&this.inputElement.validity.badInput?Ri:super._inputElementValue}set _inputElementValue(e){super._inputElementValue=e}};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Oa=m`
  :host([readonly]) [part$='button'] {
    pointer-events: none;
  }

  [part='decrease-button']::before {
    content: '\\2212';
  }

  [part='increase-button']::before {
    content: '+';
  }

  [part='decrease-button'],
  [part='increase-button'] {
    -webkit-user-select: none;
    user-select: none;
  }

  :host([dir='rtl']) [part='input-field'] {
    direction: ltr;
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */_("vaadin-number-field",[Xt,Oa],{moduleId:"vaadin-number-field-styles"});class ka extends za(P(V(y))){static get is(){return"vaadin-number-field"}static get template(){return C`
      <div class="vaadin-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <div
            disabled$="[[!_isButtonEnabled(-1, value, min, max, step)]]"
            part="decrease-button"
            on-click="_onDecreaseButtonClick"
            on-touchend="_onDecreaseButtonTouchend"
            hidden$="[[!stepButtonsVisible]]"
            aria-hidden="true"
            slot="prefix"
          ></div>
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
          <div
            disabled$="[[!_isButtonEnabled(1, value, min, max, step)]]"
            part="increase-button"
            on-click="_onIncreaseButtonClick"
            on-touchend="_onIncreaseButtonTouchend"
            hidden$="[[!stepButtonsVisible]]"
            aria-hidden="true"
            slot="suffix"
          ></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <slot name="tooltip"></slot>
    `}}v(ka);const di=m`
  :host {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-xs);
    padding: 0.5em calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4) 0.5em
      var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius-m) / 4));
    min-height: var(--lumo-size-m);
    outline: none;
    border-radius: var(--lumo-border-radius-m);
    cursor: var(--lumo-clickable-cursor);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
    --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
    --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
    --_selection-color-text: var(--vaadin-selection-color-text, var(--lumo-primary-text-color));
  }

  /* Checkmark */
  [part='checkmark']::before {
    display: var(--_lumo-item-selected-icon-display, none);
    content: var(--lumo-icons-checkmark);
    font-family: lumo-icons;
    font-size: var(--lumo-icon-size-m);
    line-height: 1;
    font-weight: normal;
    width: 1em;
    height: 1em;
    margin: calc((1 - var(--lumo-line-height-xs)) * var(--lumo-font-size-m) / 2) 0;
    color: var(--_selection-color-text);
    flex: none;
    opacity: 0;
    transition:
      transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2),
      opacity 0.1s;
  }

  :host([selected]) [part='checkmark']::before {
    opacity: 1;
  }

  :host([active]:not([selected])) [part='checkmark']::before {
    transform: scale(0.8);
    opacity: 0;
    transition-duration: 0s;
  }

  [part='content'] {
    flex: auto;
  }

  /* Disabled */
  :host([disabled]) {
    color: var(--lumo-disabled-text-color);
    cursor: default;
    pointer-events: none;
  }

  /* TODO a workaround until we have "focus-follows-mouse". After that, use the hover style for focus-ring as well */
  @media (any-hover: hover) {
    :host(:hover:not([disabled])) {
      background-color: var(--lumo-primary-color-10pct);
    }
  }

  :host([focus-ring]:not([disabled])) {
    box-shadow: inset 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
  }

  /* RTL specific styles */
  :host([dir='rtl']) {
    padding-left: calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4);
    padding-right: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius-m) / 4));
  }

  /* Slotted icons */
  :host ::slotted(vaadin-icon) {
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }
`;_("vaadin-item",di,{moduleId:"lumo-item"});const lo=m`
  :host {
    transition: background-color 100ms;
    overflow: hidden;
    --_lumo-item-selected-icon-display: block;
    --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
    --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
  }

  :host([focused]:not([disabled])) {
    box-shadow: inset 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
  }
`;_("vaadin-combo-box-item",[di,lo],{moduleId:"lumo-combo-box-item"});/**
 * @license
 * Copyright (c) 2022 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const co=m`
  [part~='loader'] {
    box-sizing: border-box;
    width: var(--lumo-icon-size-s);
    height: var(--lumo-icon-size-s);
    border: 2px solid transparent;
    border-color: var(--lumo-primary-color-10pct) var(--lumo-primary-color-10pct) var(--lumo-primary-color)
      var(--lumo-primary-color);
    border-radius: calc(0.5 * var(--lumo-icon-size-s));
    opacity: 0;
    pointer-events: none;
  }

  :host(:not([loading])) [part~='loader'] {
    display: none;
  }

  :host([loading]) [part~='loader'] {
    animation:
      1s linear infinite lumo-loader-rotate,
      0.3s 0.1s lumo-loader-fade-in both;
  }

  @keyframes lumo-loader-fade-in {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes lumo-loader-rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ee=m`
  :host {
    top: var(--lumo-space-m);
    right: var(--lumo-space-m);
    bottom: var(--lumo-space-m);
    left: var(--lumo-space-m);
    /* Workaround for Edge issue (only on Surface), where an overflowing vaadin-list-box inside vaadin-select-overlay makes the overlay transparent */
    /* stylelint-disable-next-line */
    outline: 0px solid transparent;
  }

  [part='overlay'] {
    background-color: var(--lumo-base-color);
    background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
    border-radius: var(--lumo-border-radius-m);
    box-shadow:
      0 0 0 1px var(--lumo-shade-5pct),
      var(--lumo-box-shadow-m);
    color: var(--lumo-body-text-color);
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 400;
    line-height: var(--lumo-line-height-m);
    letter-spacing: 0;
    text-transform: none;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  [part='content'] {
    padding: var(--lumo-space-xs);
  }

  [part='backdrop'] {
    background-color: var(--lumo-shade-20pct);
    animation: 0.2s lumo-overlay-backdrop-enter both;
    will-change: opacity;
  }

  @keyframes lumo-overlay-backdrop-enter {
    0% {
      opacity: 0;
    }
  }

  :host([closing]) [part='backdrop'] {
    animation: 0.2s lumo-overlay-backdrop-exit both;
  }

  @keyframes lumo-overlay-backdrop-exit {
    100% {
      opacity: 0;
    }
  }

  @keyframes lumo-overlay-dummy-animation {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 1;
    }
  }
`;_("",Ee,{moduleId:"lumo-overlay"});/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const st=m`
  :host([opening]),
  :host([closing]) {
    animation: 0.14s lumo-overlay-dummy-animation;
  }

  [part='overlay'] {
    will-change: opacity, transform;
  }

  :host([opening]) [part='overlay'] {
    animation: 0.1s lumo-menu-overlay-enter ease-out both;
  }

  @keyframes lumo-menu-overlay-enter {
    0% {
      opacity: 0;
      transform: translateY(-4px);
    }
  }

  :host([closing]) [part='overlay'] {
    animation: 0.1s lumo-menu-overlay-exit both;
  }

  @keyframes lumo-menu-overlay-exit {
    100% {
      opacity: 0;
    }
  }
`;_("",st,{moduleId:"lumo-menu-overlay-core"});const Ma=m`
  /* Small viewport (bottom sheet) styles */
  /* Use direct media queries instead of the state attributes ([phone] and [fullscreen]) provided by the elements */
  @media (max-width: 450px), (max-height: 450px) {
    :host {
      top: 0 !important;
      right: 0 !important;
      bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;
      left: 0 !important;
      align-items: stretch !important;
      justify-content: flex-end !important;
    }

    [part='overlay'] {
      max-height: 50vh;
      width: 100vw;
      border-radius: 0;
      box-shadow: var(--lumo-box-shadow-xl);
    }

    /* The content part scrolls instead of the overlay part, because of the gradient fade-out */
    [part='content'] {
      padding: 30px var(--lumo-space-m);
      max-height: inherit;
      box-sizing: border-box;
      -webkit-overflow-scrolling: touch;
      overflow: auto;
      -webkit-mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
      mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
    }

    [part='backdrop'] {
      display: block;
    }

    /* Animations */

    :host([opening]) [part='overlay'] {
      animation: 0.2s lumo-mobile-menu-overlay-enter cubic-bezier(0.215, 0.61, 0.355, 1) both;
    }

    :host([closing]),
    :host([closing]) [part='backdrop'] {
      animation-delay: 0.14s;
    }

    :host([closing]) [part='overlay'] {
      animation: 0.14s 0.14s lumo-mobile-menu-overlay-exit cubic-bezier(0.55, 0.055, 0.675, 0.19) both;
    }
  }

  @keyframes lumo-mobile-menu-overlay-enter {
    0% {
      transform: translateY(150%);
    }
  }

  @keyframes lumo-mobile-menu-overlay-exit {
    100% {
      transform: translateY(150%);
    }
  }
`,Na=[Ee,st,Ma];_("",Na,{moduleId:"lumo-menu-overlay"});const ho=m`
  [part='content'] {
    padding: 0;
  }

  /* When items are empty, the spinner needs some room */
  :host(:not([closing])) [part~='content'] {
    min-height: calc(2 * var(--lumo-space-s) + var(--lumo-icon-size-s));
  }

  [part~='overlay'] {
    position: relative;
  }

  :host([top-aligned]) [part~='overlay'] {
    margin-top: var(--lumo-space-xs);
  }

  :host([bottom-aligned]) [part~='overlay'] {
    margin-bottom: var(--lumo-space-xs);
  }
`,uo=m`
  [part~='loader'] {
    position: absolute;
    z-index: 1;
    inset-inline: var(--lumo-space-s);
    top: var(--lumo-space-s);
    margin-inline: auto 0;
  }
`;_("vaadin-combo-box-overlay",[Ee,st,ho,co,uo,m`
      :host {
        --_vaadin-combo-box-items-container-border-width: var(--lumo-space-xs);
        --_vaadin-combo-box-items-container-border-style: solid;
      }
    `],{moduleId:"lumo-combo-box-overlay"});const La=m`
  [part='toggle-button']::before {
    content: var(--lumo-icons-dropdown);
  }
`;_("vaadin-combo-box",[Qe,La],{moduleId:"lumo-combo-box"});/**
 * @license
 * Copyright (c) 2015 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const po=s=>class extends s{static get properties(){return{index:{type:Number},item:{type:Object},label:{type:String},selected:{type:Boolean,value:!1,reflectToAttribute:!0},focused:{type:Boolean,value:!1,reflectToAttribute:!0},renderer:{type:Function}}}static get observers(){return["__rendererOrItemChanged(renderer, index, item, selected, focused)","__updateLabel(label, renderer)"]}static get observedAttributes(){return[...super.observedAttributes,"hidden"]}attributeChangedCallback(e,i,o){e==="hidden"&&o!==null?this.index=void 0:super.attributeChangedCallback(e,i,o)}connectedCallback(){super.connectedCallback(),this._owner=this.parentNode.owner;const e=this._owner.getAttribute("dir");e&&this.setAttribute("dir",e)}requestContentUpdate(){if(!this.renderer||this.hidden)return;const e={index:this.index,item:this.item,focused:this.focused,selected:this.selected};this.renderer(this,this._owner,e)}__rendererOrItemChanged(e,i,o){o===void 0||i===void 0||(this._oldRenderer!==e&&(this.innerHTML="",delete this._$litPart$),e&&(this._oldRenderer=e,this.requestContentUpdate()))}__updateLabel(e,i){i||(this.textContent=e)}};/**
 * @license
 * Copyright (c) 2015 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Da extends po(P(Y(y))){static get template(){return C`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}static get is(){return"vaadin-combo-box-item"}}v(Da);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Mt=!1,Fa=[],mo=[];function Va(){Mt=!0,requestAnimationFrame(function(){Mt=!1,Ba(Fa),setTimeout(function(){Ra(mo)})})}function Ba(s){for(;s.length;)fo(s.shift())}function Ra(s){for(let t=0,e=s.length;t<e;t++)fo(s.shift())}function fo(s){const t=s[0],e=s[1],i=s[2];try{e.apply(t,i)}catch(o){setTimeout(()=>{throw o})}}function Ha(s,t,e){Mt||Va(),mo.push([s,t,e])}/**
 * @license
 * Copyright (c) 2017 Anton Korzunov
 * SPDX-License-Identifier: MIT
 */let Q=new WeakMap,Te=new WeakMap,ze={},ht=0;const Hi=s=>s&&s.nodeType===Node.ELEMENT_NODE,ut=(...s)=>{console.error(`Error: ${s.join(" ")}. Skip setting aria-hidden.`)},$a=(s,t)=>Hi(s)?t.map(e=>{if(!Hi(e))return ut(e,"is not a valid element"),null;let i=e;for(;i&&i!==s;){if(s.contains(i))return e;i=i.getRootNode().host}return ut(e,"is not contained inside",s),null}).filter(e=>!!e):(ut(s,"is not a valid element"),[]),Ua=(s,t,e,i)=>{const o=$a(t,Array.isArray(s)?s:[s]);ze[e]||(ze[e]=new WeakMap);const r=ze[e],n=[],a=new Set,l=new Set(o),d=h=>{if(!h||a.has(h))return;a.add(h);const u=h.assignedSlot;u&&d(u),d(h.parentNode||h.host)};o.forEach(d);const c=h=>{if(!h||l.has(h))return;const u=h.shadowRoot;(u?[...h.children,...u.children]:[...h.children]).forEach(f=>{if(!["template","script","style"].includes(f.localName))if(a.has(f))c(f);else{const b=f.getAttribute(i),A=b!==null&&b!=="false",x=(Q.get(f)||0)+1,w=(r.get(f)||0)+1;Q.set(f,x),r.set(f,w),n.push(f),x===1&&A&&Te.set(f,!0),w===1&&f.setAttribute(e,"true"),A||f.setAttribute(i,"true")}})};return c(t),a.clear(),ht+=1,()=>{n.forEach(h=>{const u=Q.get(h)-1,p=r.get(h)-1;Q.set(h,u),r.set(h,p),u||(Te.has(h)?Te.delete(h):h.removeAttribute(i)),p||h.removeAttribute(e)}),ht-=1,ht||(Q=new WeakMap,Q=new WeakMap,Te=new WeakMap,ze={})}},ja=(s,t=document.body,e="data-aria-hidden")=>{const i=Array.from(Array.isArray(s)?s:[s]);return t&&i.push(...Array.from(t.querySelectorAll("[aria-live]"))),Ua(i,t,e,"aria-hidden")};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class qa{constructor(t,e){this.host=t,this.callback=typeof e=="function"?e:()=>t}showModal(){const t=this.callback();this.__showOthers=ja(t)}close(){this.__showOthers&&(this.__showOthers(),this.__showOthers=null)}}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Wa{saveFocus(t){this.focusNode=t||He()}restoreFocus(t){const e=this.focusNode;if(!e)return;const i=t?t.preventScroll:!1;He()===document.body?setTimeout(()=>e.focus({preventScroll:i})):e.focus({preventScroll:i}),this.focusNode=null}}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const pt=[];class Ga{constructor(t){this.host=t,this.__trapNode=null,this.__onKeyDown=this.__onKeyDown.bind(this)}get __focusableElements(){return aa(this.__trapNode)}get __focusedElementIndex(){const t=this.__focusableElements;return t.indexOf(t.filter(eo).pop())}hostConnected(){document.addEventListener("keydown",this.__onKeyDown)}hostDisconnected(){document.removeEventListener("keydown",this.__onKeyDown)}trapFocus(t){if(this.__trapNode=t,this.__focusableElements.length===0)throw this.__trapNode=null,new Error("The trap node should have at least one focusable descendant or be focusable itself.");pt.push(this),this.__focusedElementIndex===-1&&this.__focusableElements[0].focus()}releaseFocus(){this.__trapNode=null,pt.pop()}__onKeyDown(t){if(this.__trapNode&&this===Array.from(pt).pop()&&t.key==="Tab"){t.preventDefault();const e=t.shiftKey;this.__focusNextElement(e)}}__focusNextElement(t=!1){const e=this.__focusableElements,i=t?-1:1,o=this.__focusedElementIndex,r=(e.length+o+i)%e.length,n=e[r];n.focus(),n.localName==="input"&&n.select()}}/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ya=s=>class extends U(s){static get properties(){return{focusTrap:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!1},restoreFocusNode:{type:HTMLElement}}}constructor(){super(),this.__ariaModalController=new qa(this),this.__focusTrapController=new Ga(this),this.__focusRestorationController=new Wa}ready(){super.ready(),this.addController(this.__ariaModalController),this.addController(this.__focusTrapController),this.addController(this.__focusRestorationController)}_resetFocus(){if(this.focusTrap&&(this.__ariaModalController.close(),this.__focusTrapController.releaseFocus()),this.restoreFocusOnClose&&this._shouldRestoreFocus()){const e=!Ke();this.__focusRestorationController.restoreFocus({preventScroll:e})}}_saveFocus(){this.restoreFocusOnClose&&this.__focusRestorationController.saveFocus(this.restoreFocusNode)}_trapFocus(){this.focusTrap&&(this.__ariaModalController.showModal(),this.__focusTrapController.trapFocus(this.$.overlay))}_shouldRestoreFocus(){const e=He();return e===document.body||this._deepContains(e)}_deepContains(e){if(this.contains(e))return!0;let i=e;const o=e.ownerDocument;for(;i&&i!==o&&i!==this;)i=i.parentNode||i.host;return i===this}};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const _o=()=>Array.from(document.body.children).filter(s=>s instanceof HTMLElement&&s._hasOverlayStackMixin&&!s.hasAttribute("closing")).sort((s,t)=>s.__zIndex-t.__zIndex||0),Nt=()=>_o().filter(s=>s.$.overlay),Qa=s=>s===Nt().pop(),Ue=new WeakMap,Xa=(s,t)=>{t!=null?Ue.set(s,t):Ue.delete(s)},Ka=s=>class extends s{constructor(){super(),this._hasOverlayStackMixin=!0}get _last(){return Qa(this)}bringToFront(){let e="";const i=_o().filter(o=>o!==this).pop();i&&(e=i.__zIndex+1),this.style.zIndex=e,this.__zIndex=e||parseFloat(getComputedStyle(this).zIndex),Ue.has(this)&&Ue.get(this).bringToFront()}_enterModalState(){document.body.style.pointerEvents!=="none"&&(this._previousDocumentPointerEvents=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),Nt().forEach(e=>{e!==this&&(e.$.overlay.style.pointerEvents="none")})}_exitModalState(){this._previousDocumentPointerEvents!==void 0&&(document.body.style.pointerEvents=this._previousDocumentPointerEvents,delete this._previousDocumentPointerEvents);const e=Nt();let i;for(;(i=e.pop())&&!(i!==this&&(i.$.overlay.style.removeProperty("pointer-events"),!i.modeless)););}};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ci=s=>class extends Ya(Ka(s)){static get properties(){return{opened:{type:Boolean,notify:!0,observer:"_openedChanged",reflectToAttribute:!0,sync:!0},owner:{type:Object,sync:!0},model:{type:Object,sync:!0},renderer:{type:Object,sync:!0},modeless:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_modelessChanged",sync:!0},hidden:{type:Boolean,reflectToAttribute:!0,observer:"_hiddenChanged",sync:!0},withBackdrop:{type:Boolean,value:!1,reflectToAttribute:!0,sync:!0}}}static get observers(){return["_rendererOrDataChanged(renderer, owner, model, opened)"]}constructor(){super(),this._boundMouseDownListener=this._mouseDownListener.bind(this),this._boundMouseUpListener=this._mouseUpListener.bind(this),this._boundOutsideClickListener=this._outsideClickListener.bind(this),this._boundKeydownListener=this._keydownListener.bind(this),ga&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}ready(){super.ready(),this.addEventListener("click",()=>{}),this.$.backdrop.addEventListener("click",()=>{}),this.addEventListener("mouseup",()=>{document.activeElement===document.body&&this.$.overlay.getAttribute("tabindex")==="0"&&this.$.overlay.focus()})}connectedCallback(){super.connectedCallback(),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))}disconnectedCallback(){super.disconnectedCallback(),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener)}requestContentUpdate(){this.renderer&&this.renderer.call(this.owner,this,this.owner,this.model)}close(e){const i=new CustomEvent("vaadin-overlay-close",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(i),i.defaultPrevented||(this.opened=!1)}_detectIosNavbar(){if(!this.opened)return;const e=window.innerHeight,o=window.innerWidth>e,r=document.documentElement.clientHeight;o&&r>e?this.style.setProperty("--vaadin-overlay-viewport-bottom",`${r-e}px`):this.style.setProperty("--vaadin-overlay-viewport-bottom","0")}_addGlobalListeners(){document.addEventListener("mousedown",this._boundMouseDownListener),document.addEventListener("mouseup",this._boundMouseUpListener),document.documentElement.addEventListener("click",this._boundOutsideClickListener,!0)}_removeGlobalListeners(){document.removeEventListener("mousedown",this._boundMouseDownListener),document.removeEventListener("mouseup",this._boundMouseUpListener),document.documentElement.removeEventListener("click",this._boundOutsideClickListener,!0)}_rendererOrDataChanged(e,i,o,r){const n=this._oldOwner!==i||this._oldModel!==o;this._oldModel=o,this._oldOwner=i;const a=this._oldRenderer!==e,l=this._oldRenderer!==void 0;this._oldRenderer=e;const d=this._oldOpened!==r;this._oldOpened=r,a&&l&&(this.innerHTML="",delete this._$litPart$),r&&e&&(a||d||n)&&this.requestContentUpdate()}_modelessChanged(e){e?(this._removeGlobalListeners(),this._exitModalState()):this.opened&&(this._addGlobalListeners(),this._enterModalState())}_openedChanged(e,i){e?(this._saveFocus(),this._animatedOpening(),Ha(this,()=>{this._trapFocus();const o=new CustomEvent("vaadin-overlay-open",{bubbles:!0});this.dispatchEvent(o)}),document.addEventListener("keydown",this._boundKeydownListener),this.modeless||this._addGlobalListeners()):i&&(this._resetFocus(),this._animatedClosing(),document.removeEventListener("keydown",this._boundKeydownListener),this.modeless||this._removeGlobalListeners())}_hiddenChanged(e){e&&this.hasAttribute("closing")&&this._flushAnimation("closing")}_shouldAnimate(){const e=getComputedStyle(this),i=e.getPropertyValue("animation-name");return!(e.getPropertyValue("display")==="none")&&i&&i!=="none"}_enqueueAnimation(e,i){const o=`__${e}Handler`,r=n=>{n&&n.target!==this||(i(),this.removeEventListener("animationend",r),delete this[o])};this[o]=r,this.addEventListener("animationend",r)}_flushAnimation(e){const i=`__${e}Handler`;typeof this[i]=="function"&&this[i]()}_animatedOpening(){this.parentNode===document.body&&this.hasAttribute("closing")&&this._flushAnimation("closing"),this._attachOverlay(),this.modeless||this._enterModalState(),this.setAttribute("opening",""),this._shouldAnimate()?this._enqueueAnimation("opening",()=>{this._finishOpening()}):this._finishOpening()}_attachOverlay(){this._placeholder=document.createComment("vaadin-overlay-placeholder"),this.parentNode.insertBefore(this._placeholder,this),document.body.appendChild(this),this.bringToFront()}_finishOpening(){this.removeAttribute("opening")}_finishClosing(){this._detachOverlay(),this.$.overlay.style.removeProperty("pointer-events"),this.removeAttribute("closing"),this.dispatchEvent(new CustomEvent("vaadin-overlay-closed"))}_animatedClosing(){this.hasAttribute("opening")&&this._flushAnimation("opening"),this._placeholder&&(this._exitModalState(),this.setAttribute("closing",""),this.dispatchEvent(new CustomEvent("vaadin-overlay-closing")),this._shouldAnimate()?this._enqueueAnimation("closing",()=>{this._finishClosing()}):this._finishClosing())}_detachOverlay(){this._placeholder.parentNode.insertBefore(this,this._placeholder),this._placeholder.parentNode.removeChild(this._placeholder)}_mouseDownListener(e){this._mouseDownInside=e.composedPath().indexOf(this.$.overlay)>=0}_mouseUpListener(e){this._mouseUpInside=e.composedPath().indexOf(this.$.overlay)>=0}_shouldCloseOnOutsideClick(e){return this._last}_outsideClickListener(e){if(e.composedPath().includes(this.$.overlay)||this._mouseDownInside||this._mouseUpInside){this._mouseDownInside=!1,this._mouseUpInside=!1;return}if(!this._shouldCloseOnOutsideClick(e))return;const i=new CustomEvent("vaadin-overlay-outside-click",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(i),this.opened&&!i.defaultPrevented&&this.close(e)}_keydownListener(e){if(this._last&&!(this.modeless&&!e.composedPath().includes(this.$.overlay))&&e.key==="Escape"){const i=new CustomEvent("vaadin-overlay-escape-press",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(i),this.opened&&!i.defaultPrevented&&this.close(e)}}};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const hi=m`
  :host {
    z-index: 200;
    position: fixed;

    /* Despite of what the names say, <vaadin-overlay> is just a container
          for position/sizing/alignment. The actual overlay is the overlay part. */

    /* Default position constraints: the entire viewport. Note: themes can
          override this to introduce gaps between the overlay and the viewport. */
    inset: 0;
    bottom: var(--vaadin-overlay-viewport-bottom);

    /* Use flexbox alignment for the overlay part. */
    display: flex;
    flex-direction: column; /* makes dropdowns sizing easier */
    /* Align to center by default. */
    align-items: center;
    justify-content: center;

    /* Allow centering when max-width/max-height applies. */
    margin: auto;

    /* The host is not clickable, only the overlay part is. */
    pointer-events: none;

    /* Remove tap highlight on touch devices. */
    -webkit-tap-highlight-color: transparent;

    /* CSS API for host */
    --vaadin-overlay-viewport-bottom: 0;
  }

  :host([hidden]),
  :host(:not([opened]):not([closing])),
  :host(:not([opened]):not([closing])) [part='overlay'] {
    display: none !important;
  }

  [part='overlay'] {
    -webkit-overflow-scrolling: touch;
    overflow: auto;
    pointer-events: auto;

    /* Prevent overflowing the host */
    max-width: 100%;
    box-sizing: border-box;

    -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */
  }

  [part='backdrop'] {
    z-index: -1;
    content: '';
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    inset: 0;
    pointer-events: auto;
  }
`;/**
 * @license
 * Copyright (c) 2024 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Ja(s,t){let e=null;const i=document.documentElement;function o(){e&&e.disconnect(),e=null}function r(n=!1,a=1){o();const{left:l,top:d,width:c,height:h}=s.getBoundingClientRect();if(n||t(),!c||!h)return;const u=Math.floor(d),p=Math.floor(i.clientWidth-(l+c)),f=Math.floor(i.clientHeight-(d+h)),b=Math.floor(l),x={rootMargin:`${-u}px ${-p}px ${-f}px ${-b}px`,threshold:Math.max(0,Math.min(1,a))||1};let w=!0;function B(re){let q=re[0].intersectionRatio;if(q!==a){if(!w)return r();q===0&&(q=1e-7),r(!1,q)}w=!1}e=new IntersectionObserver(B,x),e.observe(s)}return r(!0),o}/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const mt={start:"top",end:"bottom"},ft={start:"left",end:"right"},$i=new ResizeObserver(s=>{setTimeout(()=>{s.forEach(t=>{t.target.__overlay&&t.target.__overlay._updatePosition()})})}),go=s=>class extends s{static get properties(){return{positionTarget:{type:Object,value:null,sync:!0},horizontalAlign:{type:String,value:"start",sync:!0},verticalAlign:{type:String,value:"top",sync:!0},noHorizontalOverlap:{type:Boolean,value:!1,sync:!0},noVerticalOverlap:{type:Boolean,value:!1,sync:!0},requiredVerticalSpace:{type:Number,value:0,sync:!0}}}static get observers(){return["__positionSettingsChanged(horizontalAlign, verticalAlign, noHorizontalOverlap, noVerticalOverlap, requiredVerticalSpace)","__overlayOpenedChanged(opened, positionTarget)"]}constructor(){super(),this.__onScroll=this.__onScroll.bind(this),this._updatePosition=this._updatePosition.bind(this)}connectedCallback(){super.connectedCallback(),this.opened&&this.__addUpdatePositionEventListeners()}disconnectedCallback(){super.disconnectedCallback(),this.__removeUpdatePositionEventListeners()}__addUpdatePositionEventListeners(){window.visualViewport.addEventListener("resize",this._updatePosition),window.visualViewport.addEventListener("scroll",this.__onScroll,!0),this.__positionTargetAncestorRootNodes=la(this.positionTarget),this.__positionTargetAncestorRootNodes.forEach(e=>{e.addEventListener("scroll",this.__onScroll,!0)}),this.positionTarget&&(this.__observePositionTargetMove=Ja(this.positionTarget,()=>{this._updatePosition()}))}__removeUpdatePositionEventListeners(){window.visualViewport.removeEventListener("resize",this._updatePosition),window.visualViewport.removeEventListener("scroll",this.__onScroll,!0),this.__positionTargetAncestorRootNodes&&(this.__positionTargetAncestorRootNodes.forEach(e=>{e.removeEventListener("scroll",this.__onScroll,!0)}),this.__positionTargetAncestorRootNodes=null),this.__observePositionTargetMove&&(this.__observePositionTargetMove(),this.__observePositionTargetMove=null)}__overlayOpenedChanged(e,i){if(this.__removeUpdatePositionEventListeners(),i&&(i.__overlay=null,$i.unobserve(i),e&&(this.__addUpdatePositionEventListeners(),i.__overlay=this,$i.observe(i))),e){const o=getComputedStyle(this);this.__margins||(this.__margins={},["top","bottom","left","right"].forEach(r=>{this.__margins[r]=parseInt(o[r],10)})),this._updatePosition(),requestAnimationFrame(()=>this._updatePosition())}}__positionSettingsChanged(){this._updatePosition()}__onScroll(e){e.target instanceof Node&&this.contains(e.target)||this._updatePosition()}_updatePosition(){if(!this.positionTarget||!this.opened||!this.__margins)return;const e=this.positionTarget.getBoundingClientRect();if(e.width===0&&e.height===0&&this.opened){this.opened=!1;return}const i=this.__shouldAlignStartVertically(e);this.style.justifyContent=i?"flex-start":"flex-end";const o=this.__isRTL,r=this.__shouldAlignStartHorizontally(e,o),n=!o&&r||o&&!r;this.style.alignItems=n?"flex-start":"flex-end";const a=this.getBoundingClientRect(),l=this.__calculatePositionInOneDimension(e,a,this.noVerticalOverlap,mt,this,i),d=this.__calculatePositionInOneDimension(e,a,this.noHorizontalOverlap,ft,this,r);Object.assign(this.style,l,d),this.toggleAttribute("bottom-aligned",!i),this.toggleAttribute("top-aligned",i),this.toggleAttribute("end-aligned",!n),this.toggleAttribute("start-aligned",n)}__shouldAlignStartHorizontally(e,i){const o=Math.max(this.__oldContentWidth||0,this.$.overlay.offsetWidth);this.__oldContentWidth=this.$.overlay.offsetWidth;const r=Math.min(window.innerWidth,document.documentElement.clientWidth),n=!i&&this.horizontalAlign==="start"||i&&this.horizontalAlign==="end";return this.__shouldAlignStart(e,o,r,this.__margins,n,this.noHorizontalOverlap,ft)}__shouldAlignStartVertically(e){const i=this.requiredVerticalSpace||Math.max(this.__oldContentHeight||0,this.$.overlay.offsetHeight);this.__oldContentHeight=this.$.overlay.offsetHeight;const o=Math.min(window.innerHeight,document.documentElement.clientHeight),r=this.verticalAlign==="top";return this.__shouldAlignStart(e,i,o,this.__margins,r,this.noVerticalOverlap,mt)}__shouldAlignStart(e,i,o,r,n,a,l){const d=o-e[a?l.end:l.start]-r[l.end],c=e[a?l.start:l.end]-r[l.start],h=n?d:c,p=h>(n?c:d)||h>i;return n===p}__adjustBottomProperty(e,i,o){let r;if(e===i.end){if(i.end===mt.end){const n=Math.min(window.innerHeight,document.documentElement.clientHeight);if(o>n&&this.__oldViewportHeight){const a=this.__oldViewportHeight-n;r=o-a}this.__oldViewportHeight=n}if(i.end===ft.end){const n=Math.min(window.innerWidth,document.documentElement.clientWidth);if(o>n&&this.__oldViewportWidth){const a=this.__oldViewportWidth-n;r=o-a}this.__oldViewportWidth=n}}return r}__calculatePositionInOneDimension(e,i,o,r,n,a){const l=a?r.start:r.end,d=a?r.end:r.start,c=parseFloat(n.style[l]||getComputedStyle(n)[l]),h=this.__adjustBottomProperty(l,r,c),u=i[a?r.start:r.end]-e[o===a?r.end:r.start],p=h?`${h}px`:`${c+u*(a?-1:1)}px`;return{[l]:p,[d]:""}}};/**
 * @license
 * Copyright (c) 2015 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const vo=s=>class extends go(s){static get observers(){return["_setOverlayWidth(positionTarget, opened)"]}constructor(){super(),this.requiredVerticalSpace=200}connectedCallback(){super.connectedCallback();const e=this._comboBox,i=e&&e.getAttribute("dir");i&&this.setAttribute("dir",i)}_shouldCloseOnOutsideClick(e){const i=e.composedPath();return!i.includes(this.positionTarget)&&!i.includes(this)}_mouseDownListener(e){super._mouseDownListener(e),this._shouldCloseOnOutsideClick(e)&&!Zs(e.composedPath()[0])&&e.preventDefault()}_updateOverlayWidth(){const e=this.localName;this.style.setProperty(`--_${e}-default-width`,`${this.positionTarget.clientWidth}px`);const i=getComputedStyle(this._comboBox).getPropertyValue(`--${e}-width`);i===""?this.style.removeProperty(`--${e}-width`):this.style.setProperty(`--${e}-width`,i)}_setOverlayWidth(e,i){e&&i&&(this._updateOverlayWidth(),this._updatePosition())}};/**
 * @license
 * Copyright (c) 2015 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Za=m`
  #overlay {
    width: var(--vaadin-combo-box-overlay-width, var(--_vaadin-combo-box-overlay-default-width, auto));
  }

  [part='content'] {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;_("vaadin-combo-box-overlay",[hi,Za],{moduleId:"vaadin-combo-box-overlay-styles"});class el extends vo(ci(Y(P(y)))){static get is(){return"vaadin-combo-box-overlay"}static get template(){return C`
      <div id="backdrop" part="backdrop" hidden></div>
      <div part="overlay" id="overlay">
        <div part="loader"></div>
        <div part="content" id="content"><slot></slot></div>
      </div>
    `}}v(el);/**
 * @license
 * Copyright (c) 2023 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function je(s,t){return s.split(".").reduce((e,i)=>e?e[i]:void 0,t)}/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */const Ui=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/u),tl=Ui&&Ui[1]>=8,ji=3,il={_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_lastVisibleIndexVal:null,_maxPages:2,_templateCost:0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){return this._physicalSize-this._viewportHeight},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){const s=this._virtualCount;return Math.max(0,s-this._physicalCount)},get _virtualStart(){return this._virtualStartVal||0},set _virtualStart(s){s=this._clamp(s,0,this._maxVirtualStart),this._virtualStartVal=s},get _physicalStart(){return this._physicalStartVal||0},set _physicalStart(s){s%=this._physicalCount,s<0&&(s=this._physicalCount+s),this._physicalStartVal=s},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},get _physicalCount(){return this._physicalCountVal||0},set _physicalCount(s){this._physicalCountVal=s},get _optPhysicalSize(){return this._viewportHeight===0?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return!!(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){let s=this._firstVisibleIndexVal;if(s==null){let t=this._physicalTop+this._scrollOffset;s=this._iterateItems((e,i)=>{if(t+=this._getPhysicalSizeIncrement(e),t>this._scrollPosition)return i})||0,this._firstVisibleIndexVal=s}return s},get lastVisibleIndex(){let s=this._lastVisibleIndexVal;if(s==null){let t=this._physicalTop+this._scrollOffset;this._iterateItems((e,i)=>{t<this._scrollBottom&&(s=i),t+=this._getPhysicalSizeIncrement(e)}),this._lastVisibleIndexVal=s}return s},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset},_scrollHandler(){const s=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop));let t=s-this._scrollPosition;const e=t>=0;if(this._scrollPosition=s,this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,Math.abs(t)>this._physicalSize&&this._physicalSize>0){t-=this._scrollOffset;const i=Math.round(t/this._physicalAverage);this._virtualStart+=i,this._physicalStart+=i,this._physicalTop=Math.min(Math.floor(this._virtualStart)*this._physicalAverage,this._scrollPosition),this._update()}else if(this._physicalCount>0){const i=this._getReusables(e);e?(this._physicalTop=i.physicalTop,this._virtualStart+=i.indexes.length,this._physicalStart+=i.indexes.length):(this._virtualStart-=i.indexes.length,this._physicalStart-=i.indexes.length),this._update(i.indexes,e?null:i.indexes),this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),Ce)}},_getReusables(s){let t,e,i;const o=[],r=this._hiddenContentSize*this._ratio,n=this._virtualStart,a=this._virtualEnd,l=this._physicalCount;let d=this._physicalTop+this._scrollOffset;const c=this._physicalBottom+this._scrollOffset,h=this._scrollPosition,u=this._scrollBottom;for(s?(t=this._physicalStart,e=h-d):(t=this._physicalEnd,e=c-u);i=this._getPhysicalSizeIncrement(t),e-=i,!(o.length>=l||e<=r);)if(s){if(a+o.length+1>=this._virtualCount||d+i>=h-this._scrollOffset)break;o.push(t),d+=i,t=(t+1)%l}else{if(n-o.length<=0||d+this._physicalSize-i<=u)break;o.push(t),d-=i,t=t===0?l-1:t-1}return{indexes:o,physicalTop:d-this._scrollOffset}},_update(s,t){if(!(s&&s.length===0||this._physicalCount===0)){if(this._assignModels(s),this._updateMetrics(s),t)for(;t.length;){const e=t.pop();this._physicalTop-=this._getPhysicalSizeIncrement(e)}this._positionItems(),this._updateScrollerSize()}},_isClientFull(){return this._scrollBottom!==0&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded(s){const e=this._clamp(this._physicalCount+s,ji,this._virtualCount-this._virtualStart)-this._physicalCount;let i=Math.round(this._physicalCount*.5);if(!(e<0)){if(e>0){const o=window.performance.now();[].push.apply(this._physicalItems,this._createPool(e));for(let r=0;r<e;r++)this._physicalSizes.push(0);this._physicalCount+=e,this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart+=e),this._update(),this._templateCost=(window.performance.now()-o)/e,i=Math.round(this._physicalCount*.5)}this._virtualEnd>=this._virtualCount-1||i===0||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,i)),Ks):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,i),Ce))}},_render(){if(!(!this.isAttached||!this._isVisible))if(this._physicalCount!==0){const s=this._getReusables(!0);this._physicalTop=s.physicalTop,this._virtualStart+=s.indexes.length,this._physicalStart+=s.indexes.length,this._update(s.indexes),this._update(),this._increasePoolIfNeeded(0)}else this._virtualCount>0&&(this.updateViewportBoundaries(),this._increasePoolIfNeeded(ji))},_itemsChanged(s){s.path==="items"&&(this._virtualStart=0,this._physicalTop=0,this._virtualCount=this.items?this.items.length:0,this._physicalIndexForKey={},this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._physicalItems||(this._physicalItems=[]),this._physicalSizes||(this._physicalSizes=[]),this._physicalStart=0,this._scrollTop>this._scrollOffset&&this._resetScrollPosition(0),this._debounce("_render",this._render,Ae))},_iterateItems(s,t){let e,i,o,r;if(arguments.length===2&&t){for(r=0;r<t.length;r++)if(e=t[r],i=this._computeVidx(e),(o=s.call(this,e,i))!=null)return o}else{for(e=this._physicalStart,i=this._virtualStart;e<this._physicalCount;e++,i++)if((o=s.call(this,e,i))!=null)return o;for(e=0;e<this._physicalStart;e++,i++)if((o=s.call(this,e,i))!=null)return o}},_computeVidx(s){return s>=this._physicalStart?this._virtualStart+(s-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+s},_positionItems(){this._adjustScrollPosition();let s=this._physicalTop;this._iterateItems(t=>{this.translate3d(0,`${s}px`,0,this._physicalItems[t]),s+=this._physicalSizes[t]})},_getPhysicalSizeIncrement(s){return this._physicalSizes[s]},_adjustScrollPosition(){const s=this._virtualStart===0?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(s!==0){this._physicalTop-=s;const t=this._scrollPosition;!tl&&t>0&&this._resetScrollPosition(t-s)}},_resetScrollPosition(s){this.scrollTarget&&s>=0&&(this._scrollTop=s,this._scrollPosition=this._scrollTop)},_updateScrollerSize(s){const t=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage;this._estScrollHeight=t,(s||this._scrollHeight===0||this._scrollPosition>=t-this._physicalSize||Math.abs(t-this._scrollHeight)>=this._viewportHeight)&&(this.$.items.style.height=`${t}px`,this._scrollHeight=t)},scrollToIndex(s){if(typeof s!="number"||s<0||s>this.items.length-1||(fe(),this._physicalCount===0))return;s=this._clamp(s,0,this._virtualCount-1),(!this._isIndexRendered(s)||s>=this._maxVirtualStart)&&(this._virtualStart=s-1),this._assignModels(),this._updateMetrics(),this._physicalTop=this._virtualStart*this._physicalAverage;let t=this._physicalStart,e=this._virtualStart,i=0;const o=this._hiddenContentSize;for(;e<s&&i<=o;)i+=this._getPhysicalSizeIncrement(t),t=(t+1)%this._physicalCount,e+=1;this._updateScrollerSize(!0),this._positionItems(),this._resetScrollPosition(this._physicalTop+this._scrollOffset+i),this._increasePoolIfNeeded(0),this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null},_resetAverage(){this._physicalAverage=0,this._physicalAverageCount=0},_resizeHandler(){this._debounce("_render",()=>{this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._isVisible?(this.updateViewportBoundaries(),this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1)},Ae)},_isIndexRendered(s){return s>=this._virtualStart&&s<=this._virtualEnd},_getPhysicalIndex(s){return(this._physicalStart+(s-this._virtualStart))%this._physicalCount},_clamp(s,t,e){return Math.min(e,Math.max(t,s))},_debounce(s,t,e){this._debouncers||(this._debouncers={}),this._debouncers[s]=O.debounce(this._debouncers[s],e,t.bind(this)),Js(this._debouncers[s])}};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const sl=1e5,_t=1e3;class bo{constructor({createElements:t,updateElement:e,scrollTarget:i,scrollContainer:o,elementsContainer:r,reorderElements:n}){this.isAttached=!0,this._vidxOffset=0,this.createElements=t,this.updateElement=e,this.scrollTarget=i,this.scrollContainer=o,this.elementsContainer=r||o,this.reorderElements=n,this._maxPages=1.3,this.__placeholderHeight=200,this.__elementHeightQueue=Array(10),this.timeouts={SCROLL_REORDER:500,IGNORE_WHEEL:500,FIX_INVALID_ITEM_POSITIONING:100},this.__resizeObserver=new ResizeObserver(()=>this._resizeHandler()),getComputedStyle(this.scrollTarget).overflow==="visible"&&(this.scrollTarget.style.overflow="auto"),getComputedStyle(this.scrollContainer).position==="static"&&(this.scrollContainer.style.position="relative"),this.__resizeObserver.observe(this.scrollTarget),this.scrollTarget.addEventListener("scroll",()=>this._scrollHandler()),new ResizeObserver(([{contentRect:l}])=>{const d=l.width===0&&l.height===0;!d&&this.__scrollTargetHidden&&this.scrollTarget.scrollTop!==this._scrollPosition&&(this.scrollTarget.scrollTop=this._scrollPosition),this.__scrollTargetHidden=d}).observe(this.scrollTarget),this._scrollLineHeight=this._getScrollLineHeight(),this.scrollTarget.addEventListener("wheel",l=>this.__onWheel(l)),this.scrollTarget.addEventListener("virtualizer-element-focused",l=>this.__onElementFocused(l)),this.elementsContainer.addEventListener("focusin",()=>{this.scrollTarget.dispatchEvent(new CustomEvent("virtualizer-element-focused",{detail:{element:this.__getFocusedElement()}}))}),this.reorderElements&&(this.scrollTarget.addEventListener("mousedown",()=>{this.__mouseDown=!0}),this.scrollTarget.addEventListener("mouseup",()=>{this.__mouseDown=!1,this.__pendingReorder&&this.__reorderElements()}))}get scrollOffset(){return 0}get adjustedFirstVisibleIndex(){return this.firstVisibleIndex+this._vidxOffset}get adjustedLastVisibleIndex(){return this.lastVisibleIndex+this._vidxOffset}get _maxVirtualIndexOffset(){return this.size-this._virtualCount}__hasPlaceholders(){return this.__getVisibleElements().some(t=>t.__virtualizerPlaceholder)}scrollToIndex(t){if(typeof t!="number"||isNaN(t)||this.size===0||!this.scrollTarget.offsetHeight)return;delete this.__pendingScrollToIndex,this._physicalCount<=3&&this.flush(),t=this._clamp(t,0,this.size-1);const e=this.__getVisibleElements().length;let i=Math.floor(t/this.size*this._virtualCount);this._virtualCount-i<e?(i=this._virtualCount-(this.size-t),this._vidxOffset=this._maxVirtualIndexOffset):i<e?t<_t?(i=t,this._vidxOffset=0):(i=_t,this._vidxOffset=t-i):this._vidxOffset=t-i,this.__skipNextVirtualIndexAdjust=!0,super.scrollToIndex(i),this.adjustedFirstVisibleIndex!==t&&this._scrollTop<this._maxScrollTop&&!this.grid&&(this._scrollTop-=this.__getIndexScrollOffset(t)||0),this._scrollHandler(),this.__hasPlaceholders()&&(this.__pendingScrollToIndex=t)}flush(){this.scrollTarget.offsetHeight!==0&&(this._resizeHandler(),fe(),this._scrollHandler(),this.__fixInvalidItemPositioningDebouncer&&this.__fixInvalidItemPositioningDebouncer.flush(),this.__scrollReorderDebouncer&&this.__scrollReorderDebouncer.flush(),this.__debouncerWheelAnimationFrame&&this.__debouncerWheelAnimationFrame.flush())}hostConnected(){this.scrollTarget.offsetParent&&this.scrollTarget.scrollTop!==this._scrollPosition&&(this.scrollTarget.scrollTop=this._scrollPosition)}update(t=0,e=this.size-1){const i=[];this.__getVisibleElements().forEach(o=>{o.__virtualIndex>=t&&o.__virtualIndex<=e&&(this.__updateElement(o,o.__virtualIndex,!0),i.push(o))}),this.__afterElementsUpdated(i)}_updateMetrics(t){fe();let e=0,i=0;const o=this._physicalAverageCount,r=this._physicalAverage;this._iterateItems((n,a)=>{i+=this._physicalSizes[n],this._physicalSizes[n]=Math.ceil(this.__getBorderBoxHeight(this._physicalItems[n])),e+=this._physicalSizes[n],this._physicalAverageCount+=this._physicalSizes[n]?1:0},t),this._physicalSize=this._physicalSize+e-i,this._physicalAverageCount!==o&&(this._physicalAverage=Math.round((r*o+e)/this._physicalAverageCount))}__getBorderBoxHeight(t){const e=getComputedStyle(t),i=parseFloat(e.height)||0;if(e.boxSizing==="border-box")return i;const o=parseFloat(e.paddingBottom)||0,r=parseFloat(e.paddingTop)||0,n=parseFloat(e.borderBottomWidth)||0,a=parseFloat(e.borderTopWidth)||0;return i+o+r+n+a}__updateElement(t,e,i){t.__virtualizerPlaceholder&&(t.style.paddingTop="",t.style.opacity="",t.__virtualizerPlaceholder=!1),!this.__preventElementUpdates&&(t.__lastUpdatedIndex!==e||i)&&(this.updateElement(t,e),t.__lastUpdatedIndex=e)}__afterElementsUpdated(t){t.forEach(e=>{const i=e.offsetHeight;if(i===0)e.style.paddingTop=`${this.__placeholderHeight}px`,e.style.opacity="0",e.__virtualizerPlaceholder=!0,this.__placeholderClearDebouncer=O.debounce(this.__placeholderClearDebouncer,Ae,()=>this._resizeHandler());else{this.__elementHeightQueue.push(i),this.__elementHeightQueue.shift();const o=this.__elementHeightQueue.filter(r=>r!==void 0);this.__placeholderHeight=Math.round(o.reduce((r,n)=>r+n,0)/o.length)}}),this.__pendingScrollToIndex!==void 0&&!this.__hasPlaceholders()&&this.scrollToIndex(this.__pendingScrollToIndex)}__getIndexScrollOffset(t){const e=this.__getVisibleElements().find(i=>i.__virtualIndex===t);return e?this.scrollTarget.getBoundingClientRect().top-e.getBoundingClientRect().top:void 0}get size(){return this.__size}set size(t){if(t===this.size)return;this.__fixInvalidItemPositioningDebouncer&&this.__fixInvalidItemPositioningDebouncer.cancel(),this._debouncers&&this._debouncers._increasePoolIfNeeded&&this._debouncers._increasePoolIfNeeded.cancel(),this.__preventElementUpdates=!0;let e,i;if(t>0&&(e=this.adjustedFirstVisibleIndex,i=this.__getIndexScrollOffset(e)),this.__size=t,this._itemsChanged({path:"items"}),fe(),t>0){e=Math.min(e,t-1),this.scrollToIndex(e);const o=this.__getIndexScrollOffset(e);i!==void 0&&o!==void 0&&(this._scrollTop+=i-o)}this.__preventElementUpdates=!1,this._isVisible||this._assignModels(),this.elementsContainer.children.length||requestAnimationFrame(()=>this._resizeHandler()),this._resizeHandler(),fe(),this._debounce("_update",this._update,Ce)}get _scrollTop(){return this.scrollTarget.scrollTop}set _scrollTop(t){this.scrollTarget.scrollTop=t}get items(){return{length:Math.min(this.size,sl)}}get offsetHeight(){return this.scrollTarget.offsetHeight}get $(){return{items:this.scrollContainer}}updateViewportBoundaries(){const t=window.getComputedStyle(this.scrollTarget);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(t["padding-top"],10),this._isRTL=t.direction==="rtl",this._viewportWidth=this.elementsContainer.offsetWidth,this._viewportHeight=this.scrollTarget.offsetHeight,this._scrollPageHeight=this._viewportHeight-this._scrollLineHeight,this.grid&&this._updateGridMetrics()}setAttribute(){}_createPool(t){const e=this.createElements(t),i=document.createDocumentFragment();return e.forEach(o=>{o.style.position="absolute",i.appendChild(o),this.__resizeObserver.observe(o)}),this.elementsContainer.appendChild(i),e}_assignModels(t){const e=[];this._iterateItems((i,o)=>{const r=this._physicalItems[i];r.hidden=o>=this.size,r.hidden?delete r.__lastUpdatedIndex:(r.__virtualIndex=o+(this._vidxOffset||0),this.__updateElement(r,r.__virtualIndex),e.push(r))},t),this.__afterElementsUpdated(e)}_isClientFull(){return setTimeout(()=>{this.__clientFull=!0}),this.__clientFull||super._isClientFull()}translate3d(t,e,i,o){o.style.transform=`translateY(${e})`}toggleScrollListener(){}__getFocusedElement(t=this.__getVisibleElements()){return t.find(e=>e.contains(this.elementsContainer.getRootNode().activeElement)||e.contains(this.scrollTarget.getRootNode().activeElement))}__nextFocusableSiblingMissing(t,e){return e.indexOf(t)===e.length-1&&this.size>t.__virtualIndex+1}__previousFocusableSiblingMissing(t,e){return e.indexOf(t)===0&&t.__virtualIndex>0}__onElementFocused(t){if(!this.reorderElements)return;const e=t.detail.element;if(!e)return;const i=this.__getVisibleElements();(this.__previousFocusableSiblingMissing(e,i)||this.__nextFocusableSiblingMissing(e,i))&&this.flush();const o=this.__getVisibleElements();this.__nextFocusableSiblingMissing(e,o)?(this._scrollTop+=Math.ceil(e.getBoundingClientRect().bottom)-Math.floor(this.scrollTarget.getBoundingClientRect().bottom-1),this.flush()):this.__previousFocusableSiblingMissing(e,o)&&(this._scrollTop-=Math.ceil(this.scrollTarget.getBoundingClientRect().top+1)-Math.floor(e.getBoundingClientRect().top),this.flush())}_scrollHandler(){if(this.scrollTarget.offsetHeight===0)return;this._adjustVirtualIndexOffset(this._scrollTop-(this.__previousScrollTop||0));const t=this.scrollTarget.scrollTop-this._scrollPosition;if(super._scrollHandler(),this._physicalCount!==0){const e=t>=0,i=this._getReusables(!e);i.indexes.length&&(this._physicalTop=i.physicalTop,e?(this._virtualStart-=i.indexes.length,this._physicalStart-=i.indexes.length):(this._virtualStart+=i.indexes.length,this._physicalStart+=i.indexes.length),this._resizeHandler())}t&&(this.__fixInvalidItemPositioningDebouncer=O.debounce(this.__fixInvalidItemPositioningDebouncer,Ne.after(this.timeouts.FIX_INVALID_ITEM_POSITIONING),()=>this.__fixInvalidItemPositioning())),this.reorderElements&&(this.__scrollReorderDebouncer=O.debounce(this.__scrollReorderDebouncer,Ne.after(this.timeouts.SCROLL_REORDER),()=>this.__reorderElements())),this.__previousScrollTop=this._scrollTop,this._scrollTop===0&&this.firstVisibleIndex!==0&&Math.abs(t)>0&&this.scrollToIndex(0)}__fixInvalidItemPositioning(){if(!this.scrollTarget.isConnected)return;const t=this._physicalTop>this._scrollTop,e=this._physicalBottom<this._scrollBottom,i=this.adjustedFirstVisibleIndex===0,o=this.adjustedLastVisibleIndex===this.size-1;if(t&&!i||e&&!o){const r=e,n=this._ratio;this._ratio=0,this._scrollPosition=this._scrollTop+(r?-1:1),this._scrollHandler(),this._ratio=n}}__onWheel(t){if(t.ctrlKey||this._hasScrolledAncestor(t.target,t.deltaX,t.deltaY))return;let e=t.deltaY;if(t.deltaMode===WheelEvent.DOM_DELTA_LINE?e*=this._scrollLineHeight:t.deltaMode===WheelEvent.DOM_DELTA_PAGE&&(e*=this._scrollPageHeight),this._deltaYAcc||(this._deltaYAcc=0),this._wheelAnimationFrame){this._deltaYAcc+=e,t.preventDefault();return}e+=this._deltaYAcc,this._deltaYAcc=0,this._wheelAnimationFrame=!0,this.__debouncerWheelAnimationFrame=O.debounce(this.__debouncerWheelAnimationFrame,Ae,()=>{this._wheelAnimationFrame=!1});const i=Math.abs(t.deltaX)+Math.abs(e);this._canScroll(this.scrollTarget,t.deltaX,e)?(t.preventDefault(),this.scrollTarget.scrollTop+=e,this.scrollTarget.scrollLeft+=t.deltaX,this._hasResidualMomentum=!0,this._ignoreNewWheel=!0,this._debouncerIgnoreNewWheel=O.debounce(this._debouncerIgnoreNewWheel,Ne.after(this.timeouts.IGNORE_WHEEL),()=>{this._ignoreNewWheel=!1})):this._hasResidualMomentum&&i<=this._previousMomentum||this._ignoreNewWheel?t.preventDefault():i>this._previousMomentum&&(this._hasResidualMomentum=!1),this._previousMomentum=i}_hasScrolledAncestor(t,e,i){if(t===this.scrollTarget||t===this.scrollTarget.getRootNode().host)return!1;if(this._canScroll(t,e,i)&&["auto","scroll"].indexOf(getComputedStyle(t).overflow)!==-1)return!0;if(t!==this&&t.parentElement)return this._hasScrolledAncestor(t.parentElement,e,i)}_canScroll(t,e,i){return i>0&&t.scrollTop<t.scrollHeight-t.offsetHeight||i<0&&t.scrollTop>0||e>0&&t.scrollLeft<t.scrollWidth-t.offsetWidth||e<0&&t.scrollLeft>0}_increasePoolIfNeeded(t){if(this._physicalCount>2&&t){const i=Math.ceil(this._optPhysicalSize/this._physicalAverage)-this._physicalCount;super._increasePoolIfNeeded(Math.max(t,Math.min(100,i)))}else super._increasePoolIfNeeded(t)}get _optPhysicalSize(){const t=super._optPhysicalSize;return t<=0||this.__hasPlaceholders()?t:t+this.__getItemHeightBuffer()}__getItemHeightBuffer(){if(this._physicalCount===0)return 0;const t=Math.ceil(this._viewportHeight*(this._maxPages-1)/2),e=Math.max(...this._physicalSizes);return e>Math.min(...this._physicalSizes)?Math.max(0,e-t):0}_getScrollLineHeight(){const t=document.createElement("div");t.style.fontSize="initial",t.style.display="none",document.body.appendChild(t);const e=window.getComputedStyle(t).fontSize;return document.body.removeChild(t),e?window.parseInt(e):void 0}__getVisibleElements(){return Array.from(this.elementsContainer.children).filter(t=>!t.hidden)}__reorderElements(){if(this.__mouseDown){this.__pendingReorder=!0;return}this.__pendingReorder=!1;const t=this._virtualStart+(this._vidxOffset||0),e=this.__getVisibleElements(),i=this.__getFocusedElement(e)||e[0];if(!i)return;const o=i.__virtualIndex-t,r=e.indexOf(i)-o;if(r>0)for(let n=0;n<r;n++)this.elementsContainer.appendChild(e[n]);else if(r<0)for(let n=e.length+r;n<e.length;n++)this.elementsContainer.insertBefore(e[n],e[0]);if(va){const{transform:n}=this.scrollTarget.style;this.scrollTarget.style.transform="translateZ(0)",setTimeout(()=>{this.scrollTarget.style.transform=n})}}_adjustVirtualIndexOffset(t){const e=this._maxVirtualIndexOffset;if(this._virtualCount>=this.size)this._vidxOffset=0;else if(this.__skipNextVirtualIndexAdjust)this.__skipNextVirtualIndexAdjust=!1;else if(Math.abs(t)>1e4){const i=this._scrollTop/(this.scrollTarget.scrollHeight-this.scrollTarget.clientHeight);this._vidxOffset=Math.round(i*e)}else{const i=this._vidxOffset,o=_t,r=100;this._scrollTop===0?(this._vidxOffset=0,i!==this._vidxOffset&&super.scrollToIndex(0)):this.firstVisibleIndex<o&&this._vidxOffset>0&&(this._vidxOffset-=Math.min(this._vidxOffset,r),super.scrollToIndex(this.firstVisibleIndex+(i-this._vidxOffset))),this._scrollTop>=this._maxScrollTop&&this._maxScrollTop>0?(this._vidxOffset=e,i!==this._vidxOffset&&super.scrollToIndex(this._virtualCount-1)):this.firstVisibleIndex>this._virtualCount-o&&this._vidxOffset<e&&(this._vidxOffset+=Math.min(e-this._vidxOffset,r),super.scrollToIndex(this.firstVisibleIndex-(this._vidxOffset-i)))}}}Object.setPrototypeOf(bo.prototype,il);class ol{constructor(t){this.__adapter=new bo(t)}get firstVisibleIndex(){return this.__adapter.adjustedFirstVisibleIndex}get lastVisibleIndex(){return this.__adapter.adjustedLastVisibleIndex}get size(){return this.__adapter.size}set size(t){this.__adapter.size=t}scrollToIndex(t){this.__adapter.scrollToIndex(t)}update(t=0,e=this.size-1){this.__adapter.update(t,e)}flush(){this.__adapter.flush()}hostConnected(){this.__adapter.hostConnected()}}/**
 * @license
 * Copyright (c) 2015 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const D=class{toString(){return""}};/**
 * @license
 * Copyright (c) 2015 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const yo=s=>class extends s{static get properties(){return{items:{type:Array,sync:!0,observer:"__itemsChanged"},focusedIndex:{type:Number,sync:!0,observer:"__focusedIndexChanged"},loading:{type:Boolean,sync:!0,observer:"__loadingChanged"},opened:{type:Boolean,sync:!0,observer:"__openedChanged"},selectedItem:{type:Object,sync:!0,observer:"__selectedItemChanged"},itemClassNameGenerator:{type:Object,observer:"__itemClassNameGeneratorChanged"},itemIdPath:{type:String},owner:{type:Object},getItemLabel:{type:Object},renderer:{type:Object,sync:!0,observer:"__rendererChanged"},theme:{type:String}}}constructor(){super(),this.__boundOnItemClick=this.__onItemClick.bind(this)}get _viewportTotalPaddingBottom(){if(this._cachedViewportTotalPaddingBottom===void 0){const e=window.getComputedStyle(this.$.selector);this._cachedViewportTotalPaddingBottom=[e.paddingBottom,e.borderBottomWidth].map(i=>parseInt(i,10)).reduce((i,o)=>i+o)}return this._cachedViewportTotalPaddingBottom}ready(){super.ready(),this.setAttribute("role","listbox"),this.id=`${this.localName}-${ei()}`,this.__hostTagName=this.constructor.is.replace("-scroller",""),this.addEventListener("click",e=>e.stopPropagation()),this.__patchWheelOverScrolling()}requestContentUpdate(){this.__virtualizer&&(this.items&&(this.__virtualizer.size=this.items.length),this.opened&&this.__virtualizer.update())}scrollIntoView(e){if(!this.__virtualizer||!(this.opened&&e>=0))return;const i=this._visibleItemsCount();let o=e;e>this.__virtualizer.lastVisibleIndex-1?(this.__virtualizer.scrollToIndex(e),o=e-i+1):e>this.__virtualizer.firstVisibleIndex&&(o=this.__virtualizer.firstVisibleIndex),this.__virtualizer.scrollToIndex(Math.max(0,o));const r=[...this.children].find(d=>!d.hidden&&d.index===this.__virtualizer.lastVisibleIndex);if(!r||e!==r.index)return;const n=r.getBoundingClientRect(),a=this.getBoundingClientRect(),l=n.bottom-a.bottom+this._viewportTotalPaddingBottom;l>0&&(this.scrollTop+=l)}_isItemSelected(e,i,o){return e instanceof D?!1:o&&e!==void 0&&i!==void 0?je(o,e)===je(o,i):e===i}__initVirtualizer(){this.__virtualizer=new ol({createElements:this.__createElements.bind(this),updateElement:this._updateElement.bind(this),elementsContainer:this,scrollTarget:this,scrollContainer:this.$.selector,reorderElements:!0})}__itemsChanged(e){e&&this.__virtualizer&&this.requestContentUpdate()}__loadingChanged(){this.requestContentUpdate()}__openedChanged(e){e&&(this.__virtualizer||this.__initVirtualizer(),this.requestContentUpdate())}__selectedItemChanged(){this.requestContentUpdate()}__itemClassNameGeneratorChanged(e,i){(e||i)&&this.requestContentUpdate()}__focusedIndexChanged(e,i){e!==i&&this.requestContentUpdate(),e>=0&&!this.loading&&this.scrollIntoView(e)}__rendererChanged(e,i){(e||i)&&this.requestContentUpdate()}__createElements(e){return[...Array(e)].map(()=>{const i=document.createElement(`${this.__hostTagName}-item`);return i.addEventListener("click",this.__boundOnItemClick),i.tabIndex="-1",i.style.width="100%",i})}_updateElement(e,i){const o=this.items[i],r=this.focusedIndex,n=this._isItemSelected(o,this.selectedItem,this.itemIdPath);e.setProperties({item:o,index:i,label:this.getItemLabel(o),selected:n,renderer:this.renderer,focused:!this.loading&&r===i}),typeof this.itemClassNameGenerator=="function"?e.className=this.itemClassNameGenerator(o):e.className!==""&&(e.className=""),e.id=`${this.__hostTagName}-item-${i}`,e.setAttribute("role",i!==void 0?"option":!1),e.setAttribute("aria-selected",n.toString()),e.setAttribute("aria-posinset",i+1),e.setAttribute("aria-setsize",this.items.length),this.theme?e.setAttribute("theme",this.theme):e.removeAttribute("theme"),o instanceof D&&this.__requestItemByIndex(i)}__onItemClick(e){this.dispatchEvent(new CustomEvent("selection-changed",{detail:{item:e.currentTarget.item}}))}__patchWheelOverScrolling(){this.$.selector.addEventListener("wheel",e=>{const i=this.scrollTop===0,o=this.scrollHeight-this.scrollTop-this.clientHeight<=1;(i&&e.deltaY<0||o&&e.deltaY>0)&&e.preventDefault()})}__requestItemByIndex(e){requestAnimationFrame(()=>{this.dispatchEvent(new CustomEvent("index-requested",{detail:{index:e}}))})}_visibleItemsCount(){return this.__virtualizer.scrollToIndex(this.__virtualizer.firstVisibleIndex),this.__virtualizer.size>0?this.__virtualizer.lastVisibleIndex-this.__virtualizer.firstVisibleIndex+1:0}};/**
 * @license
 * Copyright (c) 2015 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class rl extends yo(y){static get is(){return"vaadin-combo-box-scroller"}static get template(){return C`
      <style>
        :host {
          display: block;
          min-height: 1px;
          overflow: auto;

          /* Fixes item background from getting on top of scrollbars on Safari */
          transform: translate3d(0, 0, 0);

          /* Enable momentum scrolling on iOS */
          -webkit-overflow-scrolling: touch;

          /* Fixes scrollbar disappearing when 'Show scroll bars: Always' enabled in Safari */
          box-shadow: 0 0 0 white;
        }

        #selector {
          border-width: var(--_vaadin-combo-box-items-container-border-width);
          border-style: var(--_vaadin-combo-box-items-container-border-style);
          border-color: var(--_vaadin-combo-box-items-container-border-color, transparent);
          position: relative;
        }
      </style>
      <div id="selector">
        <slot></slot>
      </div>
    `}}v(rl);/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const nl=s=>class extends ao(s){static get properties(){return{pattern:{type:String}}}static get delegateAttrs(){return[...super.delegateAttrs,"pattern"]}static get constraints(){return[...super.constraints,"pattern"]}};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function qe(s,t,e=0){let i=t;for(const o of s.subCaches){const r=o.parentCacheIndex;if(i<=r)break;if(i<=r+o.flatSize)return qe(o,i-r-1,e+1);i-=o.flatSize}return{cache:s,item:s.items[i],index:i,page:Math.floor(i/s.pageSize),level:e}}function Ao({getItemId:s},t,e,i=0,o=0){for(let r=0;r<t.items.length;r++){const n=t.items[r];if(n&&s(n)===s(e))return{cache:t,level:i,item:n,index:r,page:Math.floor(r/t.pageSize),subCache:t.getSubCache(r),flatIndex:o+t.getFlatIndex(r)}}for(const r of t.subCaches){const n=o+t.getFlatIndex(r.parentCacheIndex),a=Ao({getItemId:s},r,e,i+1,n+1);if(a)return a}}function Co(s,[t,...e],i=0){t===1/0&&(t=s.size-1);const o=s.getFlatIndex(t),r=s.getSubCache(t);return r&&r.flatSize>0&&e.length?Co(r,e,i+o+1):i+o}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ui{context;pageSize;items=[];pendingRequests={};__subCacheByIndex={};__size=0;__flatSize=0;constructor(t,e,i,o,r){this.context=t,this.pageSize=e,this.size=i,this.parentCache=o,this.parentCacheIndex=r,this.__flatSize=i||0}get parentItem(){return this.parentCache&&this.parentCache.items[this.parentCacheIndex]}get subCaches(){return Object.values(this.__subCacheByIndex)}get isLoading(){return Object.keys(this.pendingRequests).length>0?!0:this.subCaches.some(t=>t.isLoading)}get flatSize(){return this.__flatSize}get effectiveSize(){return console.warn("<vaadin-grid> The `effectiveSize` property of ItemCache is deprecated and will be removed in Vaadin 25."),this.flatSize}get size(){return this.__size}set size(t){if(this.__size!==t){if(this.__size=t,this.context.placeholder!==void 0){this.items.length=t||0;for(let i=0;i<t;i++)this.items[i]||=this.context.placeholder}Object.keys(this.pendingRequests).forEach(i=>{parseInt(i)*this.pageSize>=this.size&&delete this.pendingRequests[i]})}}recalculateFlatSize(){this.__flatSize=!this.parentItem||this.context.isExpanded(this.parentItem)?this.size+this.subCaches.reduce((t,e)=>(e.recalculateFlatSize(),t+e.flatSize),0):0}setPage(t,e){const i=t*this.pageSize;e.forEach((o,r)=>{const n=i+r;(this.size===void 0||n<this.size)&&(this.items[n]=o)})}getSubCache(t){return this.__subCacheByIndex[t]}removeSubCache(t){delete this.__subCacheByIndex[t]}removeSubCaches(){this.__subCacheByIndex={}}createSubCache(t){const e=new ui(this.context,this.pageSize,0,this,t);return this.__subCacheByIndex[t]=e,e}getFlatIndex(t){const e=Math.max(0,Math.min(this.size-1,t));return this.subCaches.reduce((i,o)=>{const r=o.parentCacheIndex;return e>r?i+o.flatSize:i},e)}getItemForIndex(t){console.warn("<vaadin-grid> The `getItemForIndex` method of ItemCache is deprecated and will be removed in Vaadin 25.");const{item:e}=qe(this,t);return e}getCacheAndIndex(t){console.warn("<vaadin-grid> The `getCacheAndIndex` method of ItemCache is deprecated and will be removed in Vaadin 25.");const{cache:e,index:i}=qe(this,t);return{cache:e,scaledIndex:i}}updateSize(){console.warn("<vaadin-grid> The `updateSize` method of ItemCache is deprecated and will be removed in Vaadin 25."),this.recalculateFlatSize()}ensureSubCacheForScaledIndex(t){if(console.warn("<vaadin-grid> The `ensureSubCacheForScaledIndex` method of ItemCache is deprecated and will be removed in Vaadin 25."),!this.getSubCache(t)){const e=this.createSubCache(t);this.context.__controller.__loadCachePage(e,0)}}get grid(){return console.warn("<vaadin-grid> The `grid` property of ItemCache is deprecated and will be removed in Vaadin 25."),this.context.__controller.host}get itemCaches(){return console.warn("<vaadin-grid> The `itemCaches` property of ItemCache is deprecated and will be removed in Vaadin 25."),this.__subCacheByIndex}}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class al extends EventTarget{host;dataProvider;dataProviderParams;pageSize;isExpanded;getItemId;rootCache;placeholder;isPlaceholder;constructor(t,{size:e,pageSize:i,isExpanded:o,getItemId:r,isPlaceholder:n,placeholder:a,dataProvider:l,dataProviderParams:d}){super(),this.host=t,this.pageSize=i,this.getItemId=r,this.isExpanded=o,this.placeholder=a,this.isPlaceholder=n,this.dataProvider=l,this.dataProviderParams=d,this.rootCache=this.__createRootCache(e)}get flatSize(){return this.rootCache.flatSize}get __cacheContext(){return{isExpanded:this.isExpanded,placeholder:this.placeholder,__controller:this}}isLoading(){return this.rootCache.isLoading}setPageSize(t){this.pageSize=t,this.clearCache()}setDataProvider(t){this.dataProvider=t,this.clearCache()}recalculateFlatSize(){this.rootCache.recalculateFlatSize()}clearCache(){this.rootCache=this.__createRootCache(this.rootCache.size)}getFlatIndexContext(t){return qe(this.rootCache,t)}getItemContext(t){return Ao({getItemId:this.getItemId},this.rootCache,t)}getFlatIndexByPath(t){return Co(this.rootCache,t)}ensureFlatIndexLoaded(t){const{cache:e,page:i,item:o}=this.getFlatIndexContext(t);this.__isItemLoaded(o)||this.__loadCachePage(e,i)}ensureFlatIndexHierarchy(t){const{cache:e,item:i,index:o}=this.getFlatIndexContext(t);if(this.__isItemLoaded(i)&&this.isExpanded(i)&&!e.getSubCache(o)){const r=e.createSubCache(o);this.__loadCachePage(r,0)}}loadFirstPage(){this.__loadCachePage(this.rootCache,0)}__createRootCache(t){return new ui(this.__cacheContext,this.pageSize,t)}__loadCachePage(t,e){if(!this.dataProvider||t.pendingRequests[e])return;let i={page:e,pageSize:this.pageSize,parentItem:t.parentItem};this.dataProviderParams&&(i={...i,...this.dataProviderParams()});const o=(r,n)=>{t.pendingRequests[e]===o&&(n!==void 0?t.size=n:i.parentItem&&(t.size=r.length),t.setPage(e,r),this.recalculateFlatSize(),this.dispatchEvent(new CustomEvent("page-received")),delete t.pendingRequests[e],this.dispatchEvent(new CustomEvent("page-loaded")))};t.pendingRequests[e]=o,this.dispatchEvent(new CustomEvent("page-requested")),this.dataProvider(i,o)}__isItemLoaded(t){return this.isPlaceholder?!this.isPlaceholder(t):this.placeholder?t!==this.placeholder:!!t}}/**
 * @license
 * Copyright (c) 2015 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const xo=s=>class extends s{static get properties(){return{pageSize:{type:Number,value:50,observer:"_pageSizeChanged",sync:!0},size:{type:Number,observer:"_sizeChanged",sync:!0},dataProvider:{type:Object,observer:"_dataProviderChanged",sync:!0},__dataProviderInitialized:{type:Boolean,value:!1},__previousDataProviderFilter:{type:String}}}static get observers(){return["_dataProviderFilterChanged(filter)","_warnDataProviderValue(dataProvider, value)","_ensureFirstPage(opened)"]}constructor(){super(),this.__dataProviderController=new al(this,{placeholder:new D,isPlaceholder:e=>e instanceof D,dataProviderParams:()=>({filter:this.filter})}),this.__dataProviderController.addEventListener("page-requested",this.__onDataProviderPageRequested.bind(this)),this.__dataProviderController.addEventListener("page-loaded",this.__onDataProviderPageLoaded.bind(this))}ready(){super.ready(),this._scroller.addEventListener("index-requested",e=>{if(!this._shouldFetchData())return;const i=e.detail.index;i!==void 0&&this.__dataProviderController.ensureFlatIndexLoaded(i)}),this.__dataProviderInitialized=!0,this.dataProvider&&this.__synchronizeControllerState()}_dataProviderFilterChanged(e){if(this.__previousDataProviderFilter===void 0&&e===""){this.__previousDataProviderFilter=e;return}this.__previousDataProviderFilter!==e&&(this.__previousDataProviderFilter=e,this.__keepOverlayOpened=!0,this.size=void 0,this.clearCache(),this.__keepOverlayOpened=!1)}_shouldFetchData(){return this.dataProvider?this.opened||this.filter&&this.filter.length:!1}_ensureFirstPage(e){!this._shouldFetchData()||!e||(this._forceNextRequest||this.size===void 0?(this._forceNextRequest=!1,this.__dataProviderController.loadFirstPage()):this.size>0&&this.__dataProviderController.ensureFlatIndexLoaded(0))}__onDataProviderPageRequested(){this.loading=!0}__onDataProviderPageLoaded(){const{rootCache:e}=this.__dataProviderController;e.items=[...e.items],this.__synchronizeControllerState(),!this.opened&&!this._isInputFocused()&&this._commitValue()}clearCache(){this.dataProvider&&(this.__dataProviderController.clearCache(),this.__synchronizeControllerState(),this._shouldFetchData()?(this._forceNextRequest=!1,this.__dataProviderController.loadFirstPage()):this._forceNextRequest=!0)}_sizeChanged(e){const{rootCache:i}=this.__dataProviderController;i.size!==e&&(i.size=e,i.items=[...i.items],this.__synchronizeControllerState())}_filteredItemsChanged(e){if(super._filteredItemsChanged(e),this.dataProvider&&e){const{rootCache:i}=this.__dataProviderController;i.items!==e&&(i.items=e,this.__synchronizeControllerState())}}__synchronizeControllerState(){if(this.__dataProviderInitialized&&this.dataProvider){const{rootCache:e}=this.__dataProviderController;this.size=e.size,this.filteredItems=e.items,this.loading=this.__dataProviderController.isLoading()}}_pageSizeChanged(e,i){if(Math.floor(e)!==e||e<1)throw this.pageSize=i,new Error("`pageSize` value must be an integer > 0");this.__dataProviderController.setPageSize(e),this.clearCache()}_dataProviderChanged(e,i){this._ensureItemsOrDataProvider(()=>{this.dataProvider=i}),this.__dataProviderController.setDataProvider(e),this.clearCache()}_ensureItemsOrDataProvider(e){if(this.items!==void 0&&this.dataProvider!==void 0)throw e(),new Error("Using `items` and `dataProvider` together is not supported")}_warnDataProviderValue(e,i){if(e&&i!==""&&(this.selectedItem===void 0||this.selectedItem===null)){const o=this.__getItemIndexByValue(this.filteredItems,i);(o<0||!this._getItemLabel(this.filteredItems[o]))&&console.warn("Warning: unable to determine the label for the provided `value`. Nothing to display in the text field. This usually happens when setting an initial `value` before any items are returned from the `dataProvider` callback. Consider setting `selectedItem` instead of `value`")}}};/**
 * @license
 * Copyright (c) 2023 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const wo=s=>class extends s{static get properties(){return{overlayClass:{type:String},_overlayElement:{type:Object}}}static get observers(){return["__updateOverlayClassNames(overlayClass, _overlayElement)"]}__updateOverlayClassNames(e,i){if(!i||e===void 0)return;const{classList:o}=i;if(this.__initialClasses||(this.__initialClasses=new Set(o)),Array.isArray(this.__previousClasses)){const n=this.__previousClasses.filter(a=>!this.__initialClasses.has(a));n.length>0&&o.remove(...n)}const r=typeof e=="string"?e.split(" ").filter(Boolean):[];r.length>0&&o.add(...r),this.__previousClasses=r}};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Eo(s){if(window.Vaadin&&window.Vaadin.templateRendererCallback){window.Vaadin.templateRendererCallback(s);return}s.querySelector("template")&&console.warn(`WARNING: <template> inside <${s.localName}> is no longer supported. Import @vaadin/polymer-legacy-adapter/template-renderer.js to enable compatibility.`)}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ll{constructor(t){this.host=t,t.addEventListener("opened-changed",()=>{t.opened||this.__setVirtualKeyboardEnabled(!1)}),t.addEventListener("blur",()=>this.__setVirtualKeyboardEnabled(!0)),t.addEventListener("touchstart",()=>this.__setVirtualKeyboardEnabled(!0))}__setVirtualKeyboardEnabled(t){this.host.inputElement&&(this.host.inputElement.inputMode=t?"":"none")}}/**
 * @license
 * Copyright (c) 2015 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function qi(s){return s!=null}function Wi(s,t){return s.findIndex(e=>e instanceof D?!1:t(e))}const Io=s=>class extends wo(U(ni(et(tt(si(ii(s))))))){static get properties(){return{opened:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0,sync:!0,observer:"_openedChanged"},autoOpenDisabled:{type:Boolean,sync:!0},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},renderer:{type:Object,sync:!0},items:{type:Array,sync:!0,observer:"_itemsChanged"},allowCustomValue:{type:Boolean,value:!1},filteredItems:{type:Array,observer:"_filteredItemsChanged",sync:!0},_lastCommittedValue:String,loading:{type:Boolean,value:!1,reflectToAttribute:!0,sync:!0},_focusedIndex:{type:Number,observer:"_focusedIndexChanged",value:-1,sync:!0},filter:{type:String,value:"",notify:!0,sync:!0},selectedItem:{type:Object,notify:!0,sync:!0},itemClassNameGenerator:{type:Object},itemLabelPath:{type:String,value:"label",observer:"_itemLabelPathChanged",sync:!0},itemValuePath:{type:String,value:"value",sync:!0},itemIdPath:{type:String,sync:!0},_toggleElement:{type:Object,observer:"_toggleElementChanged"},_dropdownItems:{type:Array,sync:!0},_closeOnBlurIsPrevented:Boolean,_scroller:{type:Object,sync:!0},_overlayOpened:{type:Boolean,sync:!0,observer:"_overlayOpenedChanged"},__keepOverlayOpened:{type:Boolean,sync:!0}}}static get observers(){return["_selectedItemChanged(selectedItem, itemValuePath, itemLabelPath)","_openedOrItemsChanged(opened, _dropdownItems, loading, __keepOverlayOpened)","_updateScroller(_scroller, _dropdownItems, opened, loading, selectedItem, itemIdPath, _focusedIndex, renderer, _theme, itemClassNameGenerator)"]}constructor(){super(),this._boundOverlaySelectedItemChanged=this._overlaySelectedItemChanged.bind(this),this._boundOnClearButtonMouseDown=this.__onClearButtonMouseDown.bind(this),this._boundOnClick=this._onClick.bind(this),this._boundOnOverlayTouchAction=this._onOverlayTouchAction.bind(this),this._boundOnTouchend=this._onTouchend.bind(this)}get _tagNamePrefix(){return"vaadin-combo-box"}get _nativeInput(){return this.inputElement}_inputElementChanged(e){super._inputElementChanged(e);const i=this._nativeInput;i&&(i.autocomplete="off",i.autocapitalize="off",i.setAttribute("role","combobox"),i.setAttribute("aria-autocomplete","list"),i.setAttribute("aria-expanded",!!this.opened),i.setAttribute("spellcheck","false"),i.setAttribute("autocorrect","off"),this._revertInputValueToValue(),this.clearElement&&this.clearElement.addEventListener("mousedown",this._boundOnClearButtonMouseDown))}ready(){super.ready(),this._initOverlay(),this._initScroller(),this._lastCommittedValue=this.value,this.addEventListener("click",this._boundOnClick),this.addEventListener("touchend",this._boundOnTouchend);const e=()=>{requestAnimationFrame(()=>{this._overlayElement.bringToFront()})};this.addEventListener("mousedown",e),this.addEventListener("touchstart",e),Eo(this),this.addController(new ll(this))}disconnectedCallback(){super.disconnectedCallback(),this.close()}requestContentUpdate(){this._scroller&&(this._scroller.requestContentUpdate(),this._getItemElements().forEach(e=>{e.requestContentUpdate()}))}open(){!this.disabled&&!this.readonly&&(this.opened=!0)}close(){this.opened=!1}_propertiesChanged(e,i,o){super._propertiesChanged(e,i,o),i.filter!==void 0&&this._filterChanged(i.filter)}updated(e){super.updated(e),e.has("filter")&&this._filterChanged(this.filter)}_initOverlay(){const e=this.$.overlay;e._comboBox=this,e.addEventListener("touchend",this._boundOnOverlayTouchAction),e.addEventListener("touchmove",this._boundOnOverlayTouchAction),e.addEventListener("mousedown",i=>i.preventDefault()),e.addEventListener("opened-changed",i=>{this._overlayOpened=i.detail.value}),this._overlayElement=e}_initScroller(e){const i=document.createElement(`${this._tagNamePrefix}-scroller`);i.owner=e||this,i.getItemLabel=this._getItemLabel.bind(this),i.addEventListener("selection-changed",this._boundOverlaySelectedItemChanged);const o=this._overlayElement;o.renderer=r=>{r.innerHTML||r.appendChild(i)},o.requestContentUpdate(),this._scroller=i}_updateScroller(e,i,o,r,n,a,l,d,c,h){e&&(o&&(e.style.maxHeight=getComputedStyle(this).getPropertyValue(`--${this._tagNamePrefix}-overlay-max-height`)||"65vh"),e.setProperties({items:o?i:[],opened:o,loading:r,selectedItem:n,itemIdPath:a,focusedIndex:l,renderer:d,theme:c,itemClassNameGenerator:h}))}_openedOrItemsChanged(e,i,o,r){this._overlayOpened=e&&(r||o||!!(i&&i.length))}_overlayOpenedChanged(e,i){e?(this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-opened",{bubbles:!0,composed:!0})),this._onOpened()):i&&this._dropdownItems&&this._dropdownItems.length&&(this.close(),this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-closed",{bubbles:!0,composed:!0})))}_focusedIndexChanged(e,i){i!==void 0&&this._updateActiveDescendant(e)}_isInputFocused(){return this.inputElement&&eo(this.inputElement)}_updateActiveDescendant(e){const i=this._nativeInput;if(!i)return;const o=this._getItemElements().find(r=>r.index===e);o?i.setAttribute("aria-activedescendant",o.id):i.removeAttribute("aria-activedescendant")}_openedChanged(e,i){if(i===void 0)return;e?!this._isInputFocused()&&!$e&&this.inputElement&&this.inputElement.focus():this._onClosed();const o=this._nativeInput;o&&(o.setAttribute("aria-expanded",!!e),e?o.setAttribute("aria-controls",this._scroller.id):o.removeAttribute("aria-controls"))}_onOverlayTouchAction(){this._closeOnBlurIsPrevented=!0,this.inputElement.blur(),this._closeOnBlurIsPrevented=!1}_isClearButton(e){return e.composedPath()[0]===this.clearElement}__onClearButtonMouseDown(e){e.preventDefault(),this.inputElement.focus()}_onClearButtonClick(e){e.preventDefault(),this._onClearAction(),this.opened&&this.requestContentUpdate()}_onToggleButtonClick(e){e.preventDefault(),this.opened?this.close():this.open()}_onHostClick(e){this.autoOpenDisabled||(e.preventDefault(),this.open())}_onClick(e){this._isClearButton(e)?this._onClearButtonClick(e):e.composedPath().includes(this._toggleElement)?this._onToggleButtonClick(e):this._onHostClick(e)}_onKeyDown(e){super._onKeyDown(e),e.key==="ArrowDown"?(this._onArrowDown(),e.preventDefault()):e.key==="ArrowUp"&&(this._onArrowUp(),e.preventDefault())}_getItemLabel(e){let i=e&&this.itemLabelPath?je(this.itemLabelPath,e):void 0;return i==null&&(i=e?e.toString():""),i}_getItemValue(e){let i=e&&this.itemValuePath?je(this.itemValuePath,e):void 0;return i===void 0&&(i=e?e.toString():""),i}_onArrowDown(){if(this.opened){const e=this._dropdownItems;e&&(this._focusedIndex=Math.min(e.length-1,this._focusedIndex+1),this._prefillFocusedItemLabel())}else this.open()}_onArrowUp(){if(this.opened){if(this._focusedIndex>-1)this._focusedIndex=Math.max(0,this._focusedIndex-1);else{const e=this._dropdownItems;e&&(this._focusedIndex=e.length-1)}this._prefillFocusedItemLabel()}else this.open()}_prefillFocusedItemLabel(){if(this._focusedIndex>-1){const e=this._dropdownItems[this._focusedIndex];this._inputElementValue=this._getItemLabel(e),this._markAllSelectionRange()}}_setSelectionRange(e,i){this._isInputFocused()&&this.inputElement.setSelectionRange&&this.inputElement.setSelectionRange(e,i)}_markAllSelectionRange(){this._inputElementValue!==void 0&&this._setSelectionRange(0,this._inputElementValue.length)}_clearSelectionRange(){if(this._inputElementValue!==void 0){const e=this._inputElementValue?this._inputElementValue.length:0;this._setSelectionRange(e,e)}}_closeOrCommit(){!this.opened&&!this.loading?this._commitValue():this.close()}_onEnter(e){if(!this._hasValidInputValue()){e.preventDefault(),e.stopPropagation();return}this.opened&&(e.preventDefault(),e.stopPropagation()),this._closeOrCommit()}_hasValidInputValue(){const e=this._focusedIndex<0&&this._inputElementValue!==""&&this._getItemLabel(this.selectedItem)!==this._inputElementValue;return this.allowCustomValue||!e}_onEscape(e){this.autoOpenDisabled&&(this.opened||this.value!==this._inputElementValue&&this._inputElementValue.length>0)?(e.stopPropagation(),this._focusedIndex=-1,this.cancel()):this.opened?(e.stopPropagation(),this._focusedIndex>-1?(this._focusedIndex=-1,this._revertInputValue()):this.cancel()):this.clearButtonVisible&&this.value&&!this.readonly&&(e.stopPropagation(),this._onClearAction())}_toggleElementChanged(e){e&&(e.addEventListener("mousedown",i=>i.preventDefault()),e.addEventListener("click",()=>{$e&&!this._isInputFocused()&&document.activeElement.blur()}))}_onClearAction(){this.selectedItem=null,this.allowCustomValue&&(this.value=""),this._detectAndDispatchChange()}_clearFilter(){this.filter=""}cancel(){this._revertInputValueToValue(),this._lastCommittedValue=this.value,this._closeOrCommit()}_onOpened(){this._lastCommittedValue=this.value}_onClosed(){(!this.loading||this.allowCustomValue)&&this._commitValue()}_commitValue(){if(this._focusedIndex>-1){const e=this._dropdownItems[this._focusedIndex];this.selectedItem!==e&&(this.selectedItem=e),this._inputElementValue=this._getItemLabel(this.selectedItem),this._focusedIndex=-1}else if(this._inputElementValue===""||this._inputElementValue===void 0)this.selectedItem=null,this.allowCustomValue&&(this.value="");else{const e=[this.selectedItem,...this._dropdownItems||[]],i=e[this.__getItemIndexByLabel(e,this._inputElementValue)];if(this.allowCustomValue&&!i){const o=this._inputElementValue;this._lastCustomValue=o;const r=new CustomEvent("custom-value-set",{detail:o,composed:!0,cancelable:!0,bubbles:!0});this.dispatchEvent(r),r.defaultPrevented||(this.value=o)}else!this.allowCustomValue&&!this.opened&&i?this.value=this._getItemValue(i):this._revertInputValueToValue()}this._detectAndDispatchChange(),this._clearSelectionRange(),this._clearFilter()}_onInput(e){const i=this._inputElementValue,o={};this.filter===i?this._filterChanged(this.filter):o.filter=i,!this.opened&&!this._isClearButton(e)&&!this.autoOpenDisabled&&(o.opened=!0),this.setProperties(o)}_onChange(e){e.stopPropagation()}_itemLabelPathChanged(e){typeof e!="string"&&console.error("You should set itemLabelPath to a valid string")}_filterChanged(e){this._scrollIntoView(0),this._focusedIndex=-1,this.items?this.filteredItems=this._filterItems(this.items,e):this._filteredItemsChanged(this.filteredItems)}_revertInputValue(){this.filter!==""?this._inputElementValue=this.filter:this._revertInputValueToValue(),this._clearSelectionRange()}_revertInputValueToValue(){this.allowCustomValue&&!this.selectedItem?this._inputElementValue=this.value:this._inputElementValue=this._getItemLabel(this.selectedItem)}_selectedItemChanged(e){if(e==null)this.filteredItems&&(this.allowCustomValue||(this.value=""),this._toggleHasValue(this._hasValue),this._inputElementValue=this.value);else{const i=this._getItemValue(e);if(this.value!==i&&(this.value=i,this.value!==i))return;this._toggleHasValue(!0),this._inputElementValue=this._getItemLabel(e)}}_valueChanged(e,i){e===""&&i===void 0||(qi(e)?(this._getItemValue(this.selectedItem)!==e&&this._selectItemForValue(e),!this.selectedItem&&this.allowCustomValue&&(this._inputElementValue=e),this._toggleHasValue(this._hasValue)):this.selectedItem=null,this._clearFilter(),this._lastCommittedValue=void 0)}_detectAndDispatchChange(){document.hasFocus()&&this._requestValidation(),this.value!==this._lastCommittedValue&&(this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this._lastCommittedValue=this.value)}_itemsChanged(e,i){this._ensureItemsOrDataProvider(()=>{this.items=i}),e?this.filteredItems=e.slice(0):i&&(this.filteredItems=null)}_filteredItemsChanged(e){this._setDropdownItems(e)}_filterItems(e,i){return e&&e.filter(r=>(i=i?i.toString().toLowerCase():"",this._getItemLabel(r).toString().toLowerCase().indexOf(i)>-1))}_selectItemForValue(e){const i=this.__getItemIndexByValue(this.filteredItems,e),o=this.selectedItem;i>=0?this.selectedItem=this.filteredItems[i]:this.dataProvider&&this.selectedItem===void 0?this.selectedItem=void 0:this.selectedItem=null,this.selectedItem===null&&o===null&&this._selectedItemChanged(this.selectedItem)}_setDropdownItems(e){const i=this._dropdownItems;this._dropdownItems=e;const o=i?i[this._focusedIndex]:null,r=this.__getItemIndexByValue(e,this.value);(this.selectedItem===null||this.selectedItem===void 0)&&r>=0&&(this.selectedItem=e[r]);const n=this.__getItemIndexByValue(e,this._getItemValue(o));n>-1?this._focusedIndex=n:this._focusedIndex=this.__getItemIndexByLabel(e,this.filter)}_getItemElements(){return Array.from(this._scroller.querySelectorAll(`${this._tagNamePrefix}-item`))}_scrollIntoView(e){this._scroller&&this._scroller.scrollIntoView(e)}__getItemIndexByValue(e,i){return!e||!qi(i)?-1:Wi(e,o=>this._getItemValue(o)===i)}__getItemIndexByLabel(e,i){return!e||!i?-1:Wi(e,o=>this._getItemLabel(o).toString().toLowerCase()===i.toString().toLowerCase())}_overlaySelectedItemChanged(e){e.stopPropagation(),!(e.detail.item instanceof D)&&this.opened&&(this._focusedIndex=this.filteredItems.indexOf(e.detail.item),this.close())}_setFocused(e){if(super._setFocused(e),!e&&!this.readonly&&!this._closeOnBlurIsPrevented){if(!this.opened&&this.allowCustomValue&&this._inputElementValue===this._lastCustomValue){delete this._lastCustomValue;return}if(Ke()){this._closeOrCommit();return}this.opened?this._overlayOpened||this.close():this._commitValue()}}_shouldRemoveFocus(e){return e.relatedTarget&&e.relatedTarget.localName===`${this._tagNamePrefix}-item`?!1:e.relatedTarget===this._overlayElement?(e.composedPath()[0].focus(),!1):!0}_onTouchend(e){!this.clearElement||e.composedPath()[0]!==this.clearElement||(e.preventDefault(),this._onClearAction())}};/**
 * @license
 * Copyright (c) 2015 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */_("vaadin-combo-box",Xt,{moduleId:"vaadin-combo-box-styles"});class dl extends xo(Io(nl(ai(P(V(y)))))){static get is(){return"vaadin-combo-box"}static get template(){return C`
      <style>
        :host([opened]) {
          pointer-events: auto;
        }
      </style>

      <div class="vaadin-combo-box-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
          <div id="toggleButton" part="toggle-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <vaadin-combo-box-overlay
        id="overlay"
        opened="[[_overlayOpened]]"
        loading$="[[loading]]"
        theme$="[[_theme]]"
        position-target="[[_positionTarget]]"
        no-vertical-overlap
      ></vaadin-combo-box-overlay>

      <slot name="tooltip"></slot>
    `}static get properties(){return{_positionTarget:{type:Object}}}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new ti(this,t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t})),this.addController(new li(this.inputElement,this._labelController)),this._tooltipController=new Ze(this),this.addController(this._tooltipController),this._tooltipController.setPosition("top"),this._tooltipController.setAriaTarget(this.inputElement),this._tooltipController.setShouldShow(t=>!t.opened),this._positionTarget=this.shadowRoot.querySelector('[part="input-field"]'),this._toggleElement=this.$.toggleButton}_onClearButtonClick(t){t.stopPropagation(),super._onClearButtonClick(t)}_onHostClick(t){const e=t.composedPath();(e.includes(this._labelNode)||e.includes(this._positionTarget))&&super._onHostClick(t)}}v(dl);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class oe{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,we.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),we.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}static debounce(t,e,i){return t instanceof oe?t._cancelAsync():t=new oe,t.setConfig(e,i),t}}let we=new Set;const cl=function(s){we.add(s)},hl=function(){const s=!!we.size;return we.forEach(t=>{try{t.flush()}catch(e){setTimeout(()=>{throw e})}}),s};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ul=function(){let s,t;do s=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),t=hl();while(s||t)};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Gi=!1;function pl(){if(fs&&!ms){if(!Gi){Gi=!0;const s=document.createElement("style");s.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(s)}return!0}return!1}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function pi(s,t,e,i,o){let r;o&&(r=typeof e=="object"&&e!==null,r&&(i=s.__dataTemp[t]));let n=i!==e&&(i===i||e===e);return r&&n&&(s.__dataTemp[t]=e),n}const mi=I(s=>{class t extends s{_shouldPropertyChange(i,o,r){return pi(this,i,o,r,!0)}}return t});I(s=>{class t extends s{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(i,o,r){return pi(this,i,o,r,this.mutableData)}}return t});mi._mutablePropertyChange=pi;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Lt=null;function Dt(){return Lt}Dt.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:Dt,writable:!0}});const Po=Qt(Dt),ml=mi(Po);function fl(s,t){Lt=s,Object.setPrototypeOf(s,t.prototype),new t,Lt=null}const _l=Qt(class{});function So(s,t){for(let e=0;e<t.length;e++){let i=t[e];if(!!s!=!!i.__hideTemplateChildren__)if(i.nodeType===Node.TEXT_NODE)s?(i.__polymerTextContent__=i.textContent,i.textContent=""):i.textContent=i.__polymerTextContent__;else if(i.localName==="slot")if(s)i.__polymerReplaced__=document.createComment("hidden-slot"),E(E(i).parentNode).replaceChild(i.__polymerReplaced__,i);else{const o=i.__polymerReplaced__;o&&E(E(o).parentNode).replaceChild(i,o)}else i.style&&(s?(i.__polymerDisplay__=i.style.display,i.style.display="none"):i.style.display=i.__polymerDisplay__);i.__hideTemplateChildren__=s,i._showHideChildren&&i._showHideChildren(s)}}class j extends _l{constructor(t){super(),this._configureProperties(t),this.root=this._stampTemplate(this.__dataHost);let e=[];this.children=e;for(let o=this.root.firstChild;o;o=o.nextSibling)e.push(o),o.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let i=this.__templatizeOptions;(t&&i.instanceProps||!i.instanceProps)&&this._enableProperties()}_configureProperties(t){if(this.__templatizeOptions.forwardHostProp)for(let i in this.__hostProps)this._setPendingProperty(i,this.__dataHost["_host_"+i]);for(let i in t)this._setPendingProperty(i,t[i])}forwardHostProp(t,e){this._setPendingPropertyOrPath(t,e,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(t,e,i){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(t,e,o=>{o.model=this,i(o)});else{let o=this.__dataHost.__dataHost;o&&o._addEventListenerToNode(t,e,i)}}_showHideChildren(t){So(t,this.children)}_setUnmanagedPropertyToNode(t,e,i){t.__hideTemplateChildren__&&t.nodeType==Node.TEXT_NODE&&e=="textContent"?t.__polymerTextContent__=i:super._setUnmanagedPropertyToNode(t,e,i)}get parentModel(){let t=this.__parentModel;if(!t){let e;t=this;do t=t.__dataHost.__dataHost;while((e=t.__templatizeOptions)&&!e.parentModel);this.__parentModel=t}return t}dispatchEvent(t){return!0}}j.prototype.__dataHost;j.prototype.__templatizeOptions;j.prototype._methodHost;j.prototype.__templatizeOwner;j.prototype.__hostProps;const gl=mi(j);function Yi(s){let t=s.__dataHost;return t&&t._methodHost||t}function vl(s,t,e){let i=e.mutableData?gl:j;Ft.mixin&&(i=Ft.mixin(i));let o=class extends i{};return o.prototype.__templatizeOptions=e,o.prototype._bindTemplate(s),Al(o,s,t,e),o}function bl(s,t,e,i){let o=e.forwardHostProp;if(o&&t.hasHostProps){const r=s.localName=="template";let n=t.templatizeTemplateClass;if(!n){if(r){let l=e.mutableData?ml:Po;class d extends l{}n=t.templatizeTemplateClass=d}else{const l=s.constructor;class d extends l{}n=t.templatizeTemplateClass=d}let a=t.hostProps;for(let l in a)n.prototype._addPropertyEffect("_host_"+l,n.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:yl(l,o)}),n.prototype._createNotifyingProperty("_host_"+l);_s&&i&&wl(t,e,i)}if(s.__dataProto&&Object.assign(s.__data,s.__dataProto),r)fl(s,n),s.__dataTemp={},s.__dataPending=null,s.__dataOld=null,s._enableProperties();else{Object.setPrototypeOf(s,n.prototype);const a=t.hostProps;for(let l in a)if(l="_host_"+l,l in s){const d=s[l];delete s[l],s.__data[l]=d}}}}function yl(s,t){return function(i,o,r){t.call(i.__templatizeOwner,o.substring(6),r[o])}}function Al(s,t,e,i){let o=e.hostProps||{};for(let r in i.instanceProps){delete o[r];let n=i.notifyInstanceProp;n&&s.prototype._addPropertyEffect(r,s.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:Cl(r,n)})}if(i.forwardHostProp&&t.__dataHost)for(let r in o)e.hasHostProps||(e.hasHostProps=!0),s.prototype._addPropertyEffect(r,s.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:xl()})}function Cl(s,t){return function(i,o,r){t.call(i.__templatizeOwner,i,o,r[o])}}function xl(){return function(t,e,i){t.__dataHost._setPendingPropertyOrPath("_host_"+e,i[e],!0,!0)}}function Ft(s,t,e){if(ve&&!Yi(s))throw new Error("strictTemplatePolicy: template owner not trusted");if(e=e||{},s.__templatizeOwner)throw new Error("A <template> can only be templatized once");s.__templatizeOwner=t;let o=(t?t.constructor:j)._parseTemplate(s),r=o.templatizeInstanceClass;r||(r=vl(s,o,e),o.templatizeInstanceClass=r);const n=Yi(s);bl(s,o,e,n);let a=class extends r{};return a.prototype._methodHost=n,a.prototype.__dataHost=s,a.prototype.__templatizeOwner=t,a.prototype.__hostProps=o.hostProps,a=a,a}function wl(s,t,e){const i=e.constructor._properties,{propertyEffects:o}=s,{instanceProps:r}=t;for(let n in o)if(!i[n]&&!(r&&r[n])){const a=o[n];for(let l=0;l<a.length;l++){const{part:d}=a[l].info;if(!(d.signature&&d.signature.static)){console.warn(`Property '${n}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class To extends y{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"},notifyDomChange:{type:Boolean}}}constructor(){super(),this.__renderDebouncer=null,this._lastIf=!1,this.__hideTemplateChildren__=!1,this.__template,this._templateInfo}__debounceRender(){this.__renderDebouncer=oe.debounce(this.__renderDebouncer,Ls,()=>this.__render()),cl(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const t=E(this).parentNode;(!t||t.nodeType==Node.DOCUMENT_FRAGMENT_NODE&&!E(t).host)&&this.__teardownInstance()}connectedCallback(){super.connectedCallback(),pl()||(this.style.display="none"),this.if&&this.__debounceRender()}__ensureTemplate(){if(!this.__template){const t=this;let e=t._templateInfo?t:E(t).querySelector("template");if(!e){let i=new MutationObserver(()=>{if(E(this).querySelector("template"))i.disconnect(),this.__render();else throw new Error("dom-if requires a <template> child")});return i.observe(this,{childList:!0}),!1}this.__template=e}return!0}__ensureInstance(){let t=E(this).parentNode;if(this.__hasInstance()){let e=this.__getInstanceNodes();if(e&&e.length&&E(this).previousSibling!==e[e.length-1])for(let o=0,r;o<e.length&&(r=e[o]);o++)E(t).insertBefore(r,this)}else{if(!t||!this.__ensureTemplate())return!1;this.__createAndInsertInstance(t)}return!0}render(){ul()}__render(){if(this.if){if(!this.__ensureInstance())return}else this.restamp&&this.__teardownInstance();this._showHideChildren(),(!tr||this.notifyDomChange)&&this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__hasInstance(){}__getInstanceNodes(){}__createAndInsertInstance(t){}__teardownInstance(){}_showHideChildren(){}}class El extends To{constructor(){super(),this.__instance=null,this.__syncInfo=null}__hasInstance(){return!!this.__instance}__getInstanceNodes(){return this.__instance.templateInfo.childNodes}__createAndInsertInstance(t){const e=this.__dataHost||this;if(ve&&!this.__dataHost)throw new Error("strictTemplatePolicy: template owner not trusted");const i=e._bindTemplate(this.__template,!0);i.runEffects=(o,r,n)=>{let a=this.__syncInfo;if(this.if)a&&(this.__syncInfo=null,this._showHideChildren(),r=Object.assign(a.changedProps,r)),o(r,n);else if(this.__instance)if(a||(a=this.__syncInfo={runEffects:o,changedProps:{}}),n)for(const l in r){const d=F(l);a.changedProps[d]=this.__dataHost[d]}else Object.assign(a.changedProps,r)},this.__instance=e._stampTemplate(this.__template,i),E(t).insertBefore(this.__instance,this)}__syncHostProperties(){const t=this.__syncInfo;t&&(this.__syncInfo=null,t.runEffects(t.changedProps,!1))}__teardownInstance(){const t=this.__dataHost||this;this.__instance&&(t._removeBoundDom(this.__instance),this.__instance=null,this.__syncInfo=null)}_showHideChildren(){const t=this.__hideTemplateChildren__||!this.if;this.__instance&&!!this.__instance.__hidden!==t&&(this.__instance.__hidden=t,So(t,this.__instance.templateInfo.childNodes)),t||this.__syncHostProperties()}}class Il extends To{constructor(){super(),this.__ctor=null,this.__instance=null,this.__invalidProps=null}__hasInstance(){return!!this.__instance}__getInstanceNodes(){return this.__instance.children}__createAndInsertInstance(t){this.__ctor||(this.__ctor=Ft(this.__template,this,{mutableData:!0,forwardHostProp:function(e,i){this.__instance&&(this.if?this.__instance.forwardHostProp(e,i):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[F(e)]=!0))}})),this.__instance=new this.__ctor,E(t).insertBefore(this.__instance.root,this)}__teardownInstance(){if(this.__instance){let t=this.__instance.children;if(t&&t.length){let e=E(t[0]).parentNode;if(e){e=E(e);for(let i=0,o;i<t.length&&(o=t[i]);i++)e.removeChild(o)}}this.__invalidProps=null,this.__instance=null}}__syncHostProperties(){let t=this.__invalidProps;if(t){this.__invalidProps=null;for(let e in t)this.__instance._setPendingProperty(e,this.__dataHost[e]);this.__instance._flushProperties()}}_showHideChildren(){const t=this.__hideTemplateChildren__||!this.if;this.__instance&&!!this.__instance.__hidden!==t&&(this.__instance.__hidden=t,this.__instance._showHideChildren(t)),t||this.__syncHostProperties()}}const Qi=gs?El:Il;customElements.define(Qi.is,Qi);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pl=s=>s.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ge=(s,t)=>{const e=s._$AN;if(e===void 0)return!1;for(const i of e)i._$AO?.(t,!1),ge(i,t);return!0},We=s=>{let t,e;do{if((t=s._$AM)===void 0)break;e=t._$AN,e.delete(s),s=t}while(e?.size===0)},zo=s=>{for(let t;t=s._$AM;s=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(s))break;e.add(s),zl(t)}};function Sl(s){this._$AN!==void 0?(We(this),this._$AM=s,zo(this)):this._$AM=s}function Tl(s,t=!1,e=0){const i=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(t)if(Array.isArray(i))for(let r=e;r<i.length;r++)ge(i[r],!1),We(i[r]);else i!=null&&(ge(i,!1),We(i));else ge(this,s)}const zl=s=>{s.type==$t.CHILD&&(s._$AP??=Tl,s._$AQ??=Sl)};class Ol extends cs{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),zo(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(ge(this,t),We(this))}setValue(t){if(Pl(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}class kl extends Ol{constructor(t){if(super(t),t.type!==$t.CHILD)throw new Error(`${this.constructor.directiveName}() can only be used in child bindings`)}update(t,[e,i]){return this.updateContent(t,e,i),us}updateContent(t,e,i){const{parentNode:o,startNode:r}=t;this.__parentNode=o;const n=i!=null,a=n?this.getNewNode(e,i):null,l=this.getOldNode(t);if(clearTimeout(this.__parentNode.__nodeRetryTimeout),n&&!a)this.__parentNode.__nodeRetryTimeout=setTimeout(()=>this.updateContent(t,e,i));else{if(l===a)return;l&&a?o.replaceChild(a,l):l?o.removeChild(l):a&&r.after(a)}}getNewNode(t,e){return window.Vaadin.Flow.clients[t].getByNodeId(e)}getOldNode(t){const{startNode:e,endNode:i}=t;if(e.nextSibling!==i)return e.nextSibling}disconnected(){clearTimeout(this.__parentNode.__nodeRetryTimeout)}}const Oo=hs(kl);function Ml(s,t){return Oo(s,t)}function Nl(s,t,e){ps(bt`${t.map(i=>Oo(s,i))}`,e)}function Ll(s){const t=s.insertBefore;s.insertBefore=function(e,i){return i&&i.parentNode===this?t.call(this,e,i):t.call(this,e,null)}}window.Vaadin||={};window.Vaadin.FlowComponentHost||={patchVirtualContainer:Ll,getNode:Ml,setChildNodes:Nl};class Xi extends y{static get template(){return C`
      <style>
        :host {
          animation: 1ms flow-component-renderer-appear;
        }

        @keyframes flow-component-renderer-appear {
          to {
            opacity: 1;
          }
        }
      </style>
      <slot></slot>
    `}static get is(){return"flow-component-renderer"}static get properties(){return{nodeid:Number,appid:String}}static get observers(){return["_attachRenderedComponentIfAble(appid, nodeid)"]}ready(){super.ready(),this.addEventListener("click",function(t){this.firstChild&&typeof this.firstChild.click=="function"&&t.target===this&&(t.stopPropagation(),this.firstChild.click())}),this.addEventListener("animationend",this._onAnimationEnd)}_asyncAttachRenderedComponentIfAble(){this._debouncer=oe.debounce(this._debouncer,Br,()=>this._attachRenderedComponentIfAble())}_attachRenderedComponentIfAble(){if(this.appid==null)return;if(this.nodeid==null){this.firstChild&&this.removeChild(this.firstChild);return}const t=this._getRenderedComponent();this.firstChild?t?this.firstChild!==t?(this.replaceChild(t,this.firstChild),this._defineFocusTarget(),this.onComponentRendered()):(this._defineFocusTarget(),this.onComponentRendered()):this._asyncAttachRenderedComponentIfAble():t?(this.appendChild(t),this._defineFocusTarget(),this.onComponentRendered()):this._asyncAttachRenderedComponentIfAble()}_getRenderedComponent(){try{return window.Vaadin.Flow.clients[this.appid].getByNodeId(this.nodeid)}catch(t){console.error("Could not get node %s from app %s",this.nodeid,this.appid),console.error(t)}return null}onComponentRendered(){}_defineFocusTarget(){var t=this._getFirstFocusableDescendant(this.firstChild);t!==null&&t.setAttribute("focus-target","true")}_getFirstFocusableDescendant(t){if(this._isFocusable(t))return t;if(t.hasAttribute&&(t.hasAttribute("disabled")||t.hasAttribute("hidden"))||!t.children)return null;for(var e=0;e<t.children.length;e++){var i=this._getFirstFocusableDescendant(t.children[e]);if(i!==null)return i}return null}_isFocusable(t){return t.hasAttribute&&typeof t.hasAttribute=="function"&&(t.hasAttribute("disabled")||t.hasAttribute("hidden"))?!1:t.tabIndex===0}_onAnimationEnd(t){t.animationName.indexOf("flow-component-renderer-appear")===0&&this._attachRenderedComponentIfAble()}}window.customElements.define(Xi.is,Xi);window.Vaadin.Flow.comboBoxConnector={};window.Vaadin.Flow.comboBoxConnector.initLazy=s=>{if(s.$connector)return;s.$connector={};const t={};let e={},i="";const o=new window.Vaadin.ComboBoxPlaceholder,r=(()=>{let d="",c=!1;return{needsDataCommunicatorReset:()=>c=!0,getLastFilterSentToServer:()=>d,requestData:(f,b,A)=>{const x=b-f,w=A.filter;s.$server.setRequestedRange(f,x,w),d=w,c&&(s.$server.resetDataCommunicator(),c=!1)}}})(),n=(d=Object.keys(t))=>{d.forEach(c=>{t[c]([],s.size),delete t[c];const h=parseInt(c)*s.pageSize,u=h+s.pageSize,p=Math.min(u,s.filteredItems.length);for(let f=h;f<p;f++)s.filteredItems[f]=o})};s.dataProvider=function(d,c){if(d.pageSize!=s.pageSize)throw"Invalid pageSize";if(s._clientSideFilter)if(e[0]){l(e[0],d.filter,c);return}else d.filter="";if(d.filter!==i){e={},i=d.filter,this._filterDebouncer=oe.debounce(this._filterDebouncer,Vr.after(500),()=>{if(r.getLastFilterSentToServer()===d.filter&&r.needsDataCommunicatorReset(),d.filter!==i)throw new Error("Expected params.filter to be '"+i+"' but was '"+d.filter+"'");this._filterDebouncer=void 0,n(),s.dataProvider(d,c)});return}if(this._filterDebouncer){t[d.page]=c;return}if(e[d.page])a(d.page,c);else{t[d.page]=c;const u=Math.max(d.pageSize*2,500),p=Object.keys(t).map(A=>parseInt(A)),f=Math.min(...p),b=Math.max(...p);if(p.length*d.pageSize>u)d.page===f?n([String(b)]):n([String(f)]),s.dataProvider(d,c);else if(b-f+1!==p.length)n();else{const A=d.pageSize*f,x=d.pageSize*(b+1);r.requestData(A,x,d)}}},s.$connector.clear=(d,c)=>{const h=Math.floor(d/s.pageSize),u=Math.ceil(c/s.pageSize);for(let p=h;p<h+u;p++)delete e[p]},s.$connector.filter=(d,c)=>(c=c?c.toString().toLowerCase():"",s._getItemLabel(d,s.itemLabelPath).toString().toLowerCase().indexOf(c)>-1),s.$connector.set=(d,c,h)=>{if(h!=r.getLastFilterSentToServer())return;if(d%s.pageSize!=0)throw"Got new data to index "+d+" which is not aligned with the page size of "+s.pageSize;if(d===0&&c.length===0&&t[0]){e[0]=[];return}const u=d/s.pageSize,p=Math.ceil(c.length/s.pageSize);for(let f=0;f<p;f++){let b=u+f,A=c.slice(f*s.pageSize,(f+1)*s.pageSize);e[b]=A}},s.$connector.updateData=d=>{const c=new Map(d.map(h=>[h.key,h]));s.filteredItems=s.filteredItems.map(h=>c.get(h.key)||h)},s.$connector.updateSize=function(d){s._clientSideFilter||(s.size=d)},s.$connector.reset=function(){n(),e={},s.clearCache()},s.$connector.confirm=function(d,c){if(c!=r.getLastFilterSentToServer())return;let h=Object.getOwnPropertyNames(t);for(let u=0;u<h.length;u++){let p=h[u];e[p]&&a(p,t[p])}s.$server.confirmUpdate(d)};const a=function(d,c){let h=e[d];s._clientSideFilter?l(h,s.filter,c):(delete e[d],c(h,s.size))},l=function(d,c,h){let u=d;c&&(u=d.filter(p=>s.$connector.filter(p,c))),h(u,u.length)};s.addEventListener("custom-value-set",d=>d.preventDefault()),s.itemClassNameGenerator=function(d){return d.className||""}};window.Vaadin.ComboBoxPlaceholder=D;const Dl=m`
  :host([theme~='margin']) {
    margin: var(--lumo-space-m);
  }

  :host([theme~='padding']) {
    padding: var(--lumo-space-m);
  }

  :host([theme~='spacing-xs']) {
    gap: var(--lumo-space-xs);
  }

  :host([theme~='spacing-s']) {
    gap: var(--lumo-space-s);
  }

  :host([theme~='spacing']) {
    gap: var(--lumo-space-m);
  }

  :host([theme~='spacing-l']) {
    gap: var(--lumo-space-l);
  }

  :host([theme~='spacing-xl']) {
    gap: var(--lumo-space-xl);
  }

  :host([theme~='wrap']) {
    flex-wrap: wrap;
  }
`;_("vaadin-vertical-layout",Dl,{moduleId:"lumo-vertical-layout"});/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ki=m`
  :host {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-sizing: border-box;
  }

  :host([hidden]) {
    display: none !important;
  }

  /* Theme variations */
  :host([theme~='margin']) {
    margin: 1em;
  }

  :host([theme~='padding']) {
    padding: 1em;
  }

  :host([theme~='spacing']) {
    gap: 1em;
  }
`,Fl=window.Vaadin.featureFlags.layoutComponentImprovements,Vl=m`
  ::slotted([data-height-full]) {
    flex: 1;
  }

  ::slotted(vaadin-horizontal-layout[data-height-full]),
  ::slotted(vaadin-vertical-layout[data-height-full]) {
    min-height: 0;
  }
`,Bl=Fl?[Ki,Vl]:[Ki];/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */_("vaadin-vertical-layout",Bl,{moduleId:"vaadin-vertical-layout-styles"});class Rl extends V(P(y)){static get template(){return C`<slot></slot>`}static get is(){return"vaadin-vertical-layout"}}v(Rl);const Hl=m`
  :host {
    --vaadin-tooltip-offset-top: var(--lumo-space-xs);
    --vaadin-tooltip-offset-bottom: var(--lumo-space-xs);
    --vaadin-tooltip-offset-start: var(--lumo-space-xs);
    --vaadin-tooltip-offset-end: var(--lumo-space-xs);
  }

  [part='overlay'] {
    background: var(--lumo-base-color) linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-s);
  }

  [part='content'] {
    padding: var(--lumo-space-xs) var(--lumo-space-s);
  }
`;_("vaadin-tooltip-overlay",[Ee,Hl],{moduleId:"lumo-tooltip-overlay"});/**
 * @license
 * Copyright (c) 2022 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const $l=s=>{let t=s;for(;t&&t!==s.ownerDocument;)if(t=t.parentNode||t.host,t&&t._hasOverlayStackMixin)return t;return null},Ul=s=>class extends go(ci(s)){static get properties(){return{position:{type:String,reflectToAttribute:!0}}}static get observers(){return["__openedOrTargetChanged(opened, positionTarget)"]}get _tagNamePrefix(){return"vaadin-popover"}requestContentUpdate(){if(super.requestContentUpdate(),this.positionTarget&&this.owner){const e=getComputedStyle(this.owner);["top","bottom","start","end"].forEach(i=>{this.style.setProperty(`--${this._tagNamePrefix}-offset-${i}`,e.getPropertyValue(`--${this._tagNamePrefix}-offset-${i}`))})}}_updatePosition(){if(super._updatePosition(),!(!this.positionTarget||!this.opened)){if(this.removeAttribute("arrow-centered"),this.position==="bottom"||this.position==="top"){const e=this.positionTarget.getBoundingClientRect(),i=this.$.overlay.getBoundingClientRect(),o=e.width/2-i.width/2;if(this.style.left){const r=i.left+o;r>0&&(this.style.left=`${r}px`,this.setAttribute("arrow-centered",""))}if(this.style.right){const r=parseFloat(this.style.right)+o;r>0&&(this.style.right=`${r}px`,this.setAttribute("arrow-centered",""))}}if(this.position==="start"||this.position==="end"){const e=this.positionTarget.getBoundingClientRect(),i=this.$.overlay.getBoundingClientRect(),o=e.height/2-i.height/2;this.style.top=`${i.top+o}px`}}}__openedOrTargetChanged(e,i){if(i){const o=$l(i);o&&Xa(o,e?this:null)}}};/**
 * @license
 * Copyright (c) 2022 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const jl=m`
  [part='overlay'] {
    max-width: 40ch;
  }

  [part='content'] {
    white-space: pre-wrap;
  }

  :host([position^='top'][top-aligned]) [part='overlay'],
  :host([position^='bottom'][top-aligned]) [part='overlay'] {
    margin-top: var(--vaadin-tooltip-offset-top, 0);
  }

  :host([position^='top'][bottom-aligned]) [part='overlay'],
  :host([position^='bottom'][bottom-aligned]) [part='overlay'] {
    margin-bottom: var(--vaadin-tooltip-offset-bottom, 0);
  }

  :host([position^='start'][start-aligned]) [part='overlay'],
  :host([position^='end'][start-aligned]) [part='overlay'] {
    margin-inline-start: var(--vaadin-tooltip-offset-start, 0);
  }

  :host([position^='start'][end-aligned]) [part='overlay'],
  :host([position^='end'][end-aligned]) [part='overlay'] {
    margin-inline-end: var(--vaadin-tooltip-offset-end, 0);
  }

  @media (forced-colors: active) {
    [part='overlay'] {
      outline: 1px dashed;
    }
  }
`;/**
 * @license
 * Copyright (c) 2022 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */_("vaadin-tooltip-overlay",[hi,jl],{moduleId:"vaadin-tooltip-overlay-styles"});class ql extends Ul(Y(P(y))){static get is(){return"vaadin-tooltip-overlay"}static get template(){return C`
      <div id="backdrop" part="backdrop" hidden></div>
      <div part="overlay" id="overlay">
        <div part="content" id="content"><slot></slot></div>
      </div>
    `}get _tagNamePrefix(){return"vaadin-tooltip"}requestContentUpdate(){super.requestContentUpdate(),this.toggleAttribute("hidden",this.textContent.trim()==="")}}v(ql);/**
 * @license
 * Copyright (c) 2024 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Wl=s=>class extends s{static get properties(){return{position:{type:String},_position:{type:String,value:"bottom"},__effectivePosition:{type:String,computed:"__computePosition(position, _position)"}}}__computeHorizontalAlign(e){return["top-end","bottom-end","start-top","start","start-bottom"].includes(e)?"end":"start"}__computeNoHorizontalOverlap(e){return["start-top","start","start-bottom","end-top","end","end-bottom"].includes(e)}__computeNoVerticalOverlap(e){return["top-start","top-end","top","bottom-start","bottom","bottom-end"].includes(e)}__computeVerticalAlign(e){return["top-start","top-end","top","start-bottom","end-bottom"].includes(e)?"bottom":"top"}__computePosition(e,i){return e||i}};/**
 * @license
 * Copyright (c) 2024 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Gl=s=>class extends s{static get properties(){return{for:{type:String,observer:"__forChanged"},target:{type:Object},__isConnected:{type:Boolean,sync:!0}}}static get observers(){return["__targetOrConnectedChanged(target, __isConnected)"]}connectedCallback(){super.connectedCallback(),this.__isConnected=!0}disconnectedCallback(){super.disconnectedCallback(),this.__isConnected=!1}__forChanged(e){e&&(this.__setTargetByIdDebouncer=O.debounce(this.__setTargetByIdDebouncer,Ce,()=>this.__setTargetById(e)))}__setTargetById(e){if(!this.isConnected)return;const i=this.getRootNode().getElementById(e);i?this.target=i:console.warn(`No element with id="${e}" set via "for" property found on the page.`)}__targetOrConnectedChanged(e,i){this.__previousTarget&&(this.__previousTarget!==e||!i)&&this._removeTargetListeners(this.__previousTarget),e&&i&&this._addTargetListeners(e),this.__previousTarget=e}_addTargetListeners(e){}_removeTargetListeners(e){}};/**
 * @license
 * Copyright (c) 2022 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const te=500;let ko=te,Mo=te,No=te;const X=new Set;let de=!1,K=null,ce=null;class Yl{constructor(t){this.host=t}get openedProp(){return this.host.manual?"opened":"_autoOpened"}get focusDelay(){const t=this.host;return t.focusDelay!=null&&t.focusDelay>=0?t.focusDelay:ko}get hoverDelay(){const t=this.host;return t.hoverDelay!=null&&t.hoverDelay>=0?t.hoverDelay:Mo}get hideDelay(){const t=this.host;return t.hideDelay!=null&&t.hideDelay>=0?t.hideDelay:No}get isClosing(){return X.has(this.host)}open(t={immediate:!1}){const{immediate:e,hover:i,focus:o}=t,r=i&&this.hoverDelay>0,n=o&&this.focusDelay>0;!e&&(r||n)&&!this.__closeTimeout?this.__warmupTooltip(n):this.__showTooltip()}close(t){!t&&this.hideDelay>0?this.__scheduleClose():(this.__abortClose(),this._setOpened(!1)),this.__abortWarmUp(),de&&(this.__abortCooldown(),this.__scheduleCooldown())}_isOpened(){return this.host[this.openedProp]}_setOpened(t){this.host[this.openedProp]=t}__flushClosingTooltips(){X.forEach(t=>{t._stateController.close(!0),X.delete(t)})}__showTooltip(){this.__abortClose(),this.__flushClosingTooltips(),this._setOpened(!0),de=!0,this.__abortWarmUp(),this.__abortCooldown()}__warmupTooltip(t){this._isOpened()||(de?this.__showTooltip():K==null&&this.__scheduleWarmUp(t))}__abortClose(){this.__closeTimeout&&(clearTimeout(this.__closeTimeout),this.__closeTimeout=null),this.isClosing&&X.delete(this.host)}__abortCooldown(){ce&&(clearTimeout(ce),ce=null)}__abortWarmUp(){K&&(clearTimeout(K),K=null)}__scheduleClose(){this._isOpened()&&!this.isClosing&&(X.add(this.host),this.__closeTimeout=setTimeout(()=>{X.delete(this.host),this.__closeTimeout=null,this._setOpened(!1)},this.hideDelay))}__scheduleCooldown(){ce=setTimeout(()=>{ce=null,de=!1},this.hideDelay)}__scheduleWarmUp(t){const e=t?this.focusDelay:this.hoverDelay;K=setTimeout(()=>{K=null,de=!0,this.__showTooltip()},e)}}const Ql=s=>class extends Wl(Gl(wo(s))){static get properties(){return{ariaTarget:{type:Object},context:{type:Object,value:()=>({})},focusDelay:{type:Number},generator:{type:Object},hideDelay:{type:Number},hoverDelay:{type:Number},manual:{type:Boolean,value:!1,sync:!0},opened:{type:Boolean,value:!1,sync:!0},shouldShow:{type:Object,value:()=>(e,i)=>!0},text:{type:String,observer:"__textChanged"},_autoOpened:{type:Boolean,observer:"__autoOpenedChanged",sync:!0},_effectiveAriaTarget:{type:Object,computed:"__computeAriaTarget(ariaTarget, target)",observer:"__effectiveAriaTargetChanged"},__isTargetHidden:{type:Boolean,value:!1},_isConnected:{type:Boolean,sync:!0},_srLabel:{type:Object},_overlayContent:{type:String}}}static get observers(){return["__generatorChanged(_overlayElement, generator, context)","__updateSrLabelText(_srLabel, _overlayContent)"]}static setDefaultFocusDelay(e){ko=e!=null&&e>=0?e:te}static setDefaultHideDelay(e){No=e!=null&&e>=0?e:te}static setDefaultHoverDelay(e){Mo=e!=null&&e>=0?e:te}constructor(){super(),this._uniqueId=`vaadin-tooltip-${ei()}`,this._renderer=this.__tooltipRenderer.bind(this),this.__onFocusin=this.__onFocusin.bind(this),this.__onFocusout=this.__onFocusout.bind(this),this.__onMouseDown=this.__onMouseDown.bind(this),this.__onMouseEnter=this.__onMouseEnter.bind(this),this.__onMouseLeave=this.__onMouseLeave.bind(this),this.__onKeyDown=this.__onKeyDown.bind(this),this.__onOverlayOpen=this.__onOverlayOpen.bind(this),this.__targetVisibilityObserver=new IntersectionObserver(e=>{e.forEach(i=>this.__onTargetVisibilityChange(i.isIntersecting))},{threshold:0}),this._stateController=new Yl(this)}connectedCallback(){super.connectedCallback(),this._isConnected=!0,document.body.addEventListener("vaadin-overlay-open",this.__onOverlayOpen)}disconnectedCallback(){super.disconnectedCallback(),this._autoOpened&&this._stateController.close(!0),this._isConnected=!1,document.body.removeEventListener("vaadin-overlay-open",this.__onOverlayOpen)}ready(){super.ready(),this._overlayElement=this.$.overlay,this._srLabelController=new k(this,"sr-label","div",{initializer:e=>{e.id=this._uniqueId,e.setAttribute("role","tooltip"),this._srLabel=e}}),this.addController(this._srLabelController)}__computeOpened(e,i,o,r){return r&&(e?i:o)}__autoOpenedChanged(e,i){e?document.addEventListener("keydown",this.__onKeyDown,!0):i&&document.removeEventListener("keydown",this.__onKeyDown,!0)}_addTargetListeners(e){e.addEventListener("mouseenter",this.__onMouseEnter),e.addEventListener("mouseleave",this.__onMouseLeave),e.addEventListener("focusin",this.__onFocusin),e.addEventListener("focusout",this.__onFocusout),e.addEventListener("mousedown",this.__onMouseDown),requestAnimationFrame(()=>{this.__targetVisibilityObserver.observe(e)})}_removeTargetListeners(e){e.removeEventListener("mouseenter",this.__onMouseEnter),e.removeEventListener("mouseleave",this.__onMouseLeave),e.removeEventListener("focusin",this.__onFocusin),e.removeEventListener("focusout",this.__onFocusout),e.removeEventListener("mousedown",this.__onMouseDown),this.__targetVisibilityObserver.unobserve(e)}__onFocusin(e){this.manual||Ke()&&(this.target.contains(e.relatedTarget)||this.__isShouldShow()&&(this.__focusInside=!0,!this.__isTargetHidden&&(!this.__hoverInside||!this._autoOpened)&&this._stateController.open({focus:!0})))}__onFocusout(e){this.manual||this.target.contains(e.relatedTarget)||(this.__focusInside=!1,this.__hoverInside||this._stateController.close(!0))}__onKeyDown(e){e.key==="Escape"&&(e.stopPropagation(),this._stateController.close(!0))}__onMouseDown(){this.manual||this._stateController.close(!0)}__onMouseEnter(){this.manual||this.__isShouldShow()&&(this.__hoverInside||(this.__hoverInside=!0,!this.__isTargetHidden&&(!this.__focusInside||!this._autoOpened)&&this._stateController.open({hover:!0})))}__onMouseLeave(e){e.relatedTarget!==this._overlayElement&&this.__handleMouseLeave()}__onOverlayMouseEnter(){this._stateController.isClosing&&this._stateController.open({immediate:!0})}__onOverlayMouseLeave(e){e.relatedTarget!==this.target&&this.__handleMouseLeave()}__handleMouseLeave(){this.manual||(this.__hoverInside=!1,this.__focusInside||this._stateController.close())}__onOverlayOpen(){this.manual||this._overlayElement.opened&&!this._overlayElement._last&&this._stateController.close(!0)}__onTargetVisibilityChange(e){const i=this.__isTargetHidden;if(this.__isTargetHidden=!e,i&&e&&(this.__focusInside||this.__hoverInside)){this._stateController.open({immediate:!0});return}!e&&this._autoOpened&&this._stateController.close(!0)}__isShouldShow(){return!(typeof this.shouldShow=="function"&&this.shouldShow(this.target,this.context)!==!0)}__textChanged(e,i){this._overlayElement&&(e||i)&&this._overlayElement.requestContentUpdate()}__tooltipRenderer(e){e.textContent=typeof this.generator=="function"?this.generator(this.context):this.text,this._overlayContent=e.textContent}__computeAriaTarget(e,i){const o=n=>n&&n.nodeType===Node.ELEMENT_NODE;return(Array.isArray(e)?e.some(o):e)?e:i}__effectiveAriaTargetChanged(e,i){i&&[i].flat().forEach(o=>{io(o,"aria-describedby",this._uniqueId)}),e&&[e].flat().forEach(o=>{Zt(o,"aria-describedby",this._uniqueId)})}__generatorChanged(e,i,o){e&&((i!==this.__oldTextGenerator||o!==this.__oldContext)&&e.requestContentUpdate(),this.__oldTextGenerator=i,this.__oldContext=o)}__updateSrLabelText(e,i){e&&(e.textContent=i)}};/**
 * @license
 * Copyright (c) 2022 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Xl extends Ql(As(V(U(y)))){static get is(){return"vaadin-tooltip"}static get template(){return C`
      <style>
        :host {
          display: none;
        }
      </style>
      <vaadin-tooltip-overlay
        id="overlay"
        owner="[[__overlayOwner]]"
        renderer="[[_renderer]]"
        theme$="[[_theme]]"
        opened="[[__computeOpened(manual, opened, _autoOpened, _isConnected)]]"
        position-target="[[target]]"
        position="[[__effectivePosition]]"
        no-horizontal-overlap$="[[__computeNoHorizontalOverlap(__effectivePosition)]]"
        no-vertical-overlap$="[[__computeNoVerticalOverlap(__effectivePosition)]]"
        horizontal-align="[[__computeHorizontalAlign(__effectivePosition)]]"
        vertical-align="[[__computeVerticalAlign(__effectivePosition)]]"
        on-mouseenter="__onOverlayMouseEnter"
        on-mouseleave="__onOverlayMouseLeave"
        modeless
      ></vaadin-tooltip-overlay>

      <slot name="sr-label"></slot>
    `}static get properties(){return{__overlayOwner:{value(){return this}}}}}v(Xl);const Kl=m`
  :host {
    /* Sizing */
    --lumo-button-size: var(--lumo-size-m);
    min-width: var(--vaadin-button-min-width, calc(var(--_button-size) * 2));
    height: var(--_button-size);
    padding: var(--vaadin-button-padding, 0 calc(var(--_button-size) / 3 + var(--lumo-border-radius-m) / 2));
    margin: var(--vaadin-button-margin, var(--lumo-space-xs) 0);
    box-sizing: border-box;
    /* Style */
    font-family: var(--lumo-font-family);
    font-size: var(--vaadin-button-font-size, var(--lumo-font-size-m));
    font-weight: var(--vaadin-button-font-weight, 500);
    color: var(--_lumo-button-text-color);
    background: var(--_lumo-button-background);
    border: var(--vaadin-button-border, none);
    border-radius: var(--vaadin-button-border-radius, var(--lumo-border-radius-m));
    cursor: var(--lumo-clickable-cursor);
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    flex-shrink: 0;
    --_button-size: var(--vaadin-button-height, var(--lumo-button-size));
    --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
    --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
    /* Used by notification */
    --_lumo-button-background: var(--vaadin-button-background, var(--lumo-contrast-5pct));
    --_lumo-button-text-color: var(--vaadin-button-text-color, var(--lumo-primary-text-color));
    --_lumo-button-primary-background: var(--vaadin-button-primary-background, var(--lumo-primary-color));
    --_lumo-button-primary-text-color: var(--vaadin-button-primary-text-color, var(--lumo-primary-contrast-color));
  }

  /* Set only for the internal parts so we don't affect the host vertical alignment */
  [part='label'],
  [part='prefix'],
  [part='suffix'] {
    line-height: var(--lumo-line-height-xs);
  }

  [part='label'] {
    padding: calc(var(--lumo-button-size) / 6) 0;
  }

  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-button-size: var(--lumo-size-s);
  }

  :host([theme~='large']) {
    font-size: var(--lumo-font-size-l);
    --lumo-button-size: var(--lumo-size-l);
  }

  /* For interaction states */
  :host::before,
  :host::after {
    content: '';
    /* We rely on the host always being relative */
    position: absolute;
    z-index: 1;
    inset: 0;
    background-color: currentColor;
    border-radius: inherit;
    opacity: 0;
    pointer-events: none;
  }

  /* Hover */

  @media (any-hover: hover) {
    :host(:not([disabled]):hover)::before {
      opacity: 0.02;
    }
  }

  /* Active */

  :host::after {
    transition:
      opacity 1.4s,
      transform 0.1s;
    filter: blur(8px);
  }

  :host([active])::before {
    opacity: 0.05;
    transition-duration: 0s;
  }

  :host([active])::after {
    opacity: 0.1;
    transition-duration: 0s, 0s;
    transform: scale(0);
  }

  /* Keyboard focus */

  :host([focus-ring]) {
    box-shadow:
      0 0 0 calc(1px * var(--_focus-ring-gap-on, 0)) var(--_focus-ring-gap-color, var(--lumo-base-color)),
      0 0 0 calc(var(--_focus-ring-width) + 1px * var(--_focus-ring-gap-on, 0)) var(--_focus-ring-color);
  }

  :host([theme~='primary'][focus-ring]) {
    --_focus-ring-gap-on: 1;
  }

  /* Types (primary, tertiary, tertiary-inline */

  :host([theme~='tertiary']),
  :host([theme~='tertiary-inline']) {
    --_background: transparent !important;
    background: var(--vaadin-button-tertiary-background, var(--_background));
    min-width: 0;
  }

  :host([theme~='tertiary']) {
    border: var(--vaadin-button-tertiary-border, none);
    color: var(--vaadin-button-tertiary-text-color, var(--lumo-primary-text-color));
    font-weight: var(--vaadin-button-tertiary-font-weight, 500);
    padding: var(--vaadin-button-tertiary-padding, 0 calc(var(--_button-size) / 6));
  }

  :host([theme~='tertiary-inline'])::before {
    display: none;
  }

  :host([theme~='tertiary-inline']) {
    margin: 0;
    height: auto;
    padding: 0;
    line-height: inherit;
    font-size: inherit;
  }

  :host([theme~='tertiary-inline']) [part='label'] {
    padding: 0;
    overflow: visible;
    line-height: inherit;
  }

  :host([theme~='primary']) {
    background: var(--_lumo-button-primary-background);
    border: var(--vaadin-button-primary-border, none);
    color: var(--_lumo-button-primary-text-color);
    font-weight: var(--vaadin-button-primary-font-weight, 600);
    min-width: calc(var(--lumo-button-size) * 2.5);
  }

  :host([theme~='primary'])::before {
    background-color: black;
  }

  @media (any-hover: hover) {
    :host([theme~='primary']:not([disabled]):hover)::before {
      opacity: 0.05;
    }
  }

  :host([theme~='primary'][active])::before {
    opacity: 0.1;
  }

  :host([theme~='primary'][active])::after {
    opacity: 0.2;
  }

  /* Colors (success, warning, error, contrast) */

  :host([theme~='success']) {
    color: var(--lumo-success-text-color);
  }

  :host([theme~='success'][theme~='primary']) {
    background-color: var(--lumo-success-color);
    color: var(--lumo-success-contrast-color);
  }

  :host([theme~='warning']) {
    color: var(--lumo-warning-text-color);
  }

  :host([theme~='warning'][theme~='primary']) {
    background-color: var(--lumo-warning-color);
    color: var(--lumo-warning-contrast-color);
  }

  :host([theme~='error']) {
    color: var(--lumo-error-text-color);
  }

  :host([theme~='error'][theme~='primary']) {
    background-color: var(--lumo-error-color);
    color: var(--lumo-error-contrast-color);
  }

  :host([theme~='contrast']) {
    color: var(--lumo-contrast);
  }

  :host([theme~='contrast'][theme~='primary']) {
    background-color: var(--lumo-contrast);
    color: var(--lumo-base-color);
  }

  /* Disabled state. Keep selectors after other color variants. */

  :host([disabled]) {
    color: var(--lumo-disabled-text-color);
  }

  :host([theme~='primary'][disabled]) {
    background-color: var(--lumo-contrast-30pct);
    color: var(--lumo-base-color);
  }

  :host([theme~='primary'][disabled]) [part] {
    opacity: 0.7;
  }

  /* Icons */

  [part] ::slotted(vaadin-icon) {
    display: inline-block;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
  [part] ::slotted(vaadin-icon[icon^='vaadin:']) {
    padding: 0.25em;
    box-sizing: border-box !important;
  }

  [part='prefix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  [part='suffix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  /* Icon-only */

  :host([theme~='icon']:not([theme~='tertiary-inline'])) {
    min-width: var(--lumo-button-size);
    padding-left: calc(var(--lumo-button-size) / 4);
    padding-right: calc(var(--lumo-button-size) / 4);
  }

  :host([theme~='icon']) [part='prefix'],
  :host([theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='prefix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  :host([dir='rtl']) [part='suffix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  :host([dir='rtl'][theme~='icon']) [part='prefix'],
  :host([dir='rtl'][theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }
`;_("vaadin-button",Kl,{moduleId:"lumo-button"});_("vaadin-progress-bar",m`
    :host {
      height: calc(var(--lumo-size-l) / 10);
      margin: var(--lumo-space-s) 0;
    }

    [part='bar'] {
      border-radius: var(--lumo-border-radius-m);
      background-color: var(--lumo-contrast-10pct);
    }

    [part='value'] {
      border-radius: var(--lumo-border-radius-m);
      background-color: var(--lumo-primary-color);
      /* Use width instead of transform to preserve border radius */
      transform: none;
      width: calc(var(--vaadin-progress-value) * 100%);
      will-change: width;
      transition: 0.1s width linear;
    }

    /* Indeterminate mode */
    :host([indeterminate]) [part='value'] {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      width: 100%;
      background-color: transparent !important;
      background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      opacity: 0.75;
      will-change: transform;
      animation: vaadin-progress-indeterminate 1.6s infinite cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    @keyframes vaadin-progress-indeterminate {
      0% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
      }

      25% {
        transform: scaleX(0.4);
      }

      50% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      }

      50.1% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }

      75% {
        transform: scaleX(0.4);
      }

      100% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }
    }

    :host(:not([aria-valuenow])) [part='value']::before,
    :host([indeterminate]) [part='value']::before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background-color: var(--lumo-primary-color);
      will-change: opacity;
      animation: vaadin-progress-pulse3 1.6s infinite cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    @keyframes vaadin-progress-pulse3 {
      0% {
        opacity: 1;
      }

      10% {
        opacity: 0;
      }

      40% {
        opacity: 0;
      }

      50% {
        opacity: 1;
      }

      50.1% {
        opacity: 1;
      }

      60% {
        opacity: 0;
      }

      90% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }

    /* Contrast color */
    :host([theme~='contrast']) [part='value'],
    :host([theme~='contrast']) [part='value']::before {
      background-color: var(--lumo-contrast-80pct);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-80pct)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-60pct)
      );
    }

    /* Error color */
    :host([theme~='error']) [part='value'],
    :host([theme~='error']) [part='value']::before {
      background-color: var(--lumo-error-color);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
    }

    /* Primary color */
    :host([theme~='success']) [part='value'],
    :host([theme~='success']) [part='value']::before {
      background-color: var(--lumo-success-color);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
    }

    /* RTL specific styles */
    :host([indeterminate][dir='rtl']) [part='value'] {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      animation: vaadin-progress-indeterminate-rtl 1.6s infinite cubic-bezier(0.355, 0.045, 0.645, 1);
    }

    :host(:not([aria-valuenow])[dir='rtl']) [part='value']::before,
    :host([indeterminate][dir='rtl']) [part='value']::before {
      animation: vaadin-progress-pulse3 1.6s infinite cubic-bezier(0.355, 0.045, 0.645, 1);
    }

    @keyframes vaadin-progress-indeterminate-rtl {
      0% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
      }

      25% {
        transform: scaleX(0.4);
      }

      50% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      }

      50.1% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }

      75% {
        transform: scaleX(0.4);
      }

      100% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }
    }

    /* Contrast color */
    :host([theme~='contrast'][dir='rtl']) [part='value'],
    :host([theme~='contrast'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-80pct)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-60pct)
      );
    }

    /* Error color */
    :host([theme~='error'][dir='rtl']) [part='value'],
    :host([theme~='error'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
    }

    /* Primary color */
    :host([theme~='success'][dir='rtl']) [part='value'],
    :host([theme~='success'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
    }
  `,{moduleId:"lumo-progress-bar"});_("vaadin-upload",m`
    :host {
      line-height: var(--lumo-line-height-m);
    }

    :host(:not([nodrop])) {
      overflow: hidden;
      border: 1px dashed var(--lumo-contrast-20pct);
      border-radius: var(--lumo-border-radius-l);
      padding: var(--lumo-space-m);
      transition:
        background-color 0.6s,
        border-color 0.6s;
    }

    [part='drop-label'] {
      display: inline-block;
      white-space: normal;
      padding: 0 var(--lumo-space-s);
      color: var(--lumo-secondary-text-color);
      font-family: var(--lumo-font-family);
    }

    :host([dragover-valid]) {
      border-color: var(--lumo-primary-color-50pct);
      background: var(--lumo-primary-color-10pct);
      transition:
        background-color 0.1s,
        border-color 0.1s;
    }

    :host([dragover-valid]) [part='drop-label'] {
      color: var(--lumo-primary-text-color);
    }

    :host([disabled]) [part='drop-label'],
    :host([max-files-reached]) [part='drop-label'] {
      color: var(--lumo-disabled-text-color);
    }
  `,{moduleId:"lumo-upload"});_("vaadin-upload-icon",m`
    :host::before {
      content: var(--lumo-icons-upload);
      font-family: lumo-icons;
      font-size: var(--lumo-icon-size-m);
      line-height: 1;
      vertical-align: -0.25em;
    }
  `,{moduleId:"lumo-upload-icon"});_("vaadin-upload-file-list",m`
    ::slotted(li:not(:first-of-type)) {
      border-top: 1px solid var(--lumo-contrast-10pct);
    }
  `,{moduleId:"lumo-upload-file-list"});const Jl=m`
  :host {
    padding: var(--lumo-space-s) 0;
    outline: none;
    --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
    --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
  }

  :host([focus-ring]) [part='row'] {
    border-radius: var(--lumo-border-radius-s);
    box-shadow: 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
  }

  [part='row'] {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }

  [part='status'],
  [part='error'] {
    color: var(--lumo-secondary-text-color);
    font-size: var(--lumo-font-size-s);
  }

  [part='info'] {
    display: flex;
    align-items: baseline;
    flex: auto;
  }

  [part='meta'] {
    width: 0.001px;
    flex: 1 1 auto;
  }

  [part='name'] {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  [part='commands'] {
    display: flex;
    align-items: baseline;
    flex: none;
  }

  [part$='icon'] {
    margin-right: var(--lumo-space-xs);
    font-size: var(--lumo-icon-size-m);
    font-family: 'lumo-icons';
    line-height: 1;
  }

  /* When both icons are hidden, let us keep space for one */
  [part='done-icon'][hidden] + [part='warning-icon'][hidden] {
    display: block !important;
    visibility: hidden;
  }

  [part$='button'] {
    flex: none;
    margin-left: var(--lumo-space-xs);
    cursor: var(--lumo-clickable-cursor);
  }

  [part$='button']:focus {
    outline: none;
    border-radius: var(--lumo-border-radius-s);
    box-shadow: 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
  }

  [part$='icon']::before,
  [part$='button']::before {
    vertical-align: -0.25em;
  }

  [part='done-icon']::before {
    content: var(--lumo-icons-checkmark);
    color: var(--lumo-primary-text-color);
  }

  [part='warning-icon']::before {
    content: var(--lumo-icons-error);
    color: var(--lumo-error-text-color);
  }

  [part='start-button']::before {
    content: var(--lumo-icons-play);
  }

  [part='retry-button']::before {
    content: var(--lumo-icons-reload);
  }

  [part='remove-button']::before {
    content: var(--lumo-icons-cross);
  }

  [part='error'] {
    color: var(--lumo-error-text-color);
  }

  ::slotted([slot='progress']) {
    width: auto;
    margin-left: calc(var(--lumo-icon-size-m) + var(--lumo-space-xs));
    margin-right: calc(var(--lumo-icon-size-m) + var(--lumo-space-xs));
  }
`;_("vaadin-upload-file",[Ye,Jl],{moduleId:"lumo-upload-file"});/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Zl=m`
  :host {
    display: inline-block;
    position: relative;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    user-select: none;
  }

  :host([hidden]) {
    display: none !important;
  }

  :host([disabled]) {
    pointer-events: var(--_vaadin-button-disabled-pointer-events, none);
    cursor: not-allowed;
  }

  /* Aligns the button with form fields when placed on the same line.
  Note, to make it work, the form fields should have the same "::before" pseudo-element. */
  .vaadin-button-container::before {
    content: '\\2003';
    display: inline-block;
    width: 0;
    max-height: 100%;
  }

  .vaadin-button-container {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
    min-height: inherit;
    text-shadow: inherit;
  }

  [part='prefix'],
  [part='suffix'] {
    flex: none;
  }

  [part='label'] {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (forced-colors: active) {
    :host {
      outline: 1px solid;
      outline-offset: -1px;
    }

    :host([focused]) {
      outline-width: 2px;
    }

    :host([disabled]) {
      outline-color: GrayText;
    }
  }
`,ed=s=>s`
  <div class="vaadin-button-container">
    <span part="prefix" aria-hidden="true">
      <slot name="prefix"></slot>
    </span>
    <span part="label">
      <slot></slot>
    </span>
    <span part="suffix" aria-hidden="true">
      <slot name="suffix"></slot>
    </span>
  </div>
  <slot name="tooltip"></slot>
`;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const td=s=>s,Lo=typeof document.head.style.touchAction=="string",Vt="__polymerGestures",gt="__polymerGesturesHandled",Bt="__polymerGesturesTouchAction",Ji=25,Zi=5,id=2,sd=["mousedown","mousemove","mouseup","click"],od=[0,1,4,2],rd=function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch{return!1}}();function fi(s){return sd.indexOf(s)>-1}let nd=!1;(function(){try{const s=Object.defineProperty({},"passive",{get(){nd=!0}});window.addEventListener("test",null,s),window.removeEventListener("test",null,s)}catch{}})();function ad(s){fi(s)}const ld=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/u),dd={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function G(s){const t=s.type;if(!fi(t))return!1;if(t==="mousemove"){let i=s.buttons===void 0?1:s.buttons;return s instanceof window.MouseEvent&&!rd&&(i=od[s.which]||0),!!(i&1)}return(s.button===void 0?0:s.button)===0}function cd(s){if(s.type==="click"){if(s.detail===0)return!0;const t=H(s);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;const e=t.getBoundingClientRect(),i=s.pageX,o=s.pageY;return!(i>=e.left&&i<=e.right&&o>=e.top&&o<=e.bottom)}return!1}const L={touch:{x:0,y:0,id:-1,scrollDecided:!1}};function hd(s){let t="auto";const e=Fo(s);for(let i=0,o;i<e.length;i++)if(o=e[i],o[Bt]){t=o[Bt];break}return t}function Do(s,t,e){s.movefn=t,s.upfn=e,document.addEventListener("mousemove",t),document.addEventListener("mouseup",e)}function ie(s){document.removeEventListener("mousemove",s.movefn),document.removeEventListener("mouseup",s.upfn),s.movefn=null,s.upfn=null}const Fo=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:s=>s.composedPath&&s.composedPath()||[],_i={},W=[];function ud(s,t){let e=document.elementFromPoint(s,t),i=e;for(;i&&i.shadowRoot&&!window.ShadyDOM;){const o=i;if(i=i.shadowRoot.elementFromPoint(s,t),o===i)break;i&&(e=i)}return e}function H(s){const t=Fo(s);return t.length>0?t[0]:s.target}function pd(s){const t=s.type,i=s.currentTarget[Vt];if(!i)return;const o=i[t];if(!o)return;if(!s[gt]&&(s[gt]={},t.startsWith("touch"))){const n=s.changedTouches[0];if(t==="touchstart"&&s.touches.length===1&&(L.touch.id=n.identifier),L.touch.id!==n.identifier)return;Lo||(t==="touchstart"||t==="touchmove")&&md(s)}const r=s[gt];if(!r.skip){for(let n=0,a;n<W.length;n++)a=W[n],o[a.name]&&!r[a.name]&&a.flow&&a.flow.start.indexOf(s.type)>-1&&a.reset&&a.reset();for(let n=0,a;n<W.length;n++)a=W[n],o[a.name]&&!r[a.name]&&(r[a.name]=!0,a[t](s))}}function md(s){const t=s.changedTouches[0],e=s.type;if(e==="touchstart")L.touch.x=t.clientX,L.touch.y=t.clientY,L.touch.scrollDecided=!1;else if(e==="touchmove"){if(L.touch.scrollDecided)return;L.touch.scrollDecided=!0;const i=hd(s);let o=!1;const r=Math.abs(L.touch.x-t.clientX),n=Math.abs(L.touch.y-t.clientY);s.cancelable&&(i==="none"?o=!0:i==="pan-x"?o=n>r:i==="pan-y"&&(o=r>n)),o?s.preventDefault():Ge("track")}}function es(s,t,e){return _i[t]?(fd(s,t,e),!0):!1}function fd(s,t,e){const i=_i[t],o=i.deps,r=i.name;let n=s[Vt];n||(s[Vt]=n={});for(let a=0,l,d;a<o.length;a++)l=o[a],!(ld&&fi(l)&&l!=="click")&&(d=n[l],d||(n[l]=d={_count:0}),d._count===0&&s.addEventListener(l,pd,ad(l)),d[r]=(d[r]||0)+1,d._count=(d._count||0)+1);s.addEventListener(t,e),i.touchAction&&gd(s,i.touchAction)}function gi(s){W.push(s),s.emits.forEach(t=>{_i[t]=s})}function _d(s){for(let t=0,e;t<W.length;t++){e=W[t];for(let i=0,o;i<e.emits.length;i++)if(o=e.emits[i],o===s)return e}return null}function gd(s,t){Lo&&s instanceof HTMLElement&&Ce.run(()=>{s.style.touchAction=t}),s[Bt]=t}function vi(s,t,e){const i=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(i.detail=e,td(s).dispatchEvent(i),i.defaultPrevented){const o=e.preventer||e.sourceEvent;o&&o.preventDefault&&o.preventDefault()}}function Ge(s){const t=_d(s);t.info&&(t.info.prevent=!0)}gi({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset(){ie(this.info)},mousedown(s){if(!G(s))return;const t=H(s),e=this,i=r=>{G(r)||(he("up",t,r),ie(e.info))},o=r=>{G(r)&&he("up",t,r),ie(e.info)};Do(this.info,i,o),he("down",t,s)},touchstart(s){he("down",H(s),s.changedTouches[0],s)},touchend(s){he("up",H(s),s.changedTouches[0],s)}});function he(s,t,e,i){t&&vi(t,s,{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:i,prevent(o){return Ge(o)}})}gi({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove(s){this.moves.length>id&&this.moves.shift(),this.moves.push(s)},movefn:null,upfn:null,prevent:!1},reset(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,ie(this.info)},mousedown(s){if(!G(s))return;const t=H(s),e=this,i=r=>{const n=r.clientX,a=r.clientY;ts(e.info,n,a)&&(e.info.state=e.info.started?r.type==="mouseup"?"end":"track":"start",e.info.state==="start"&&Ge("tap"),e.info.addMove({x:n,y:a}),G(r)||(e.info.state="end",ie(e.info)),t&&vt(e.info,t,r),e.info.started=!0)},o=r=>{e.info.started&&i(r),ie(e.info)};Do(this.info,i,o),this.info.x=s.clientX,this.info.y=s.clientY},touchstart(s){const t=s.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove(s){const t=H(s),e=s.changedTouches[0],i=e.clientX,o=e.clientY;ts(this.info,i,o)&&(this.info.state==="start"&&Ge("tap"),this.info.addMove({x:i,y:o}),vt(this.info,t,e),this.info.state="track",this.info.started=!0)},touchend(s){const t=H(s),e=s.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:e.clientX,y:e.clientY}),vt(this.info,t,e))}});function ts(s,t,e){if(s.prevent)return!1;if(s.started)return!0;const i=Math.abs(s.x-t),o=Math.abs(s.y-e);return i>=Zi||o>=Zi}function vt(s,t,e){if(!t)return;const i=s.moves[s.moves.length-2],o=s.moves[s.moves.length-1],r=o.x-s.x,n=o.y-s.y;let a,l=0;i&&(a=o.x-i.x,l=o.y-i.y),vi(t,"track",{state:s.state,x:e.clientX,y:e.clientY,dx:r,dy:n,ddx:a,ddy:l,sourceEvent:e,hover(){return ud(e.clientX,e.clientY)}})}gi({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown(s){G(s)&&(this.info.x=s.clientX,this.info.y=s.clientY)},click(s){G(s)&&is(this.info,s)},touchstart(s){const t=s.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend(s){is(this.info,s.changedTouches[0],s)}});function is(s,t,e){const i=Math.abs(t.clientX-s.x),o=Math.abs(t.clientY-s.y),r=H(e||t);!r||dd[r.localName]&&r.hasAttribute("disabled")||(isNaN(i)||isNaN(o)||i<=Ji&&o<=Ji||cd(t))&&(s.prevent||vi(r,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:e}))}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const vd=s=>class extends ii(tt(s)){get _activeKeys(){return[" "]}ready(){super.ready(),es(this,"down",e=>{this._shouldSetActive(e)&&this._setActive(!0)}),es(this,"up",()=>{this._setActive(!1)})}disconnectedCallback(){super.disconnectedCallback(),this._setActive(!1)}_shouldSetActive(e){return!this.disabled}_onKeyDown(e){super._onKeyDown(e),this._shouldSetActive(e)&&this._activeKeys.includes(e.key)&&(this._setActive(!0),document.addEventListener("keyup",i=>{this._activeKeys.includes(i.key)&&this._setActive(!1)},{once:!0}))}_setActive(e){this.toggleAttribute("active",e)}};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const bd=["mousedown","mouseup","click","dblclick","keypress","keydown","keyup"],yd=s=>class extends vd(oo(et(s))){constructor(){super(),this.__onInteractionEvent=this.__onInteractionEvent.bind(this),bd.forEach(e=>{this.addEventListener(e,this.__onInteractionEvent,!0)}),this.tabindex=0}get _activeKeys(){return["Enter"," "]}ready(){super.ready(),this.hasAttribute("role")||this.setAttribute("role","button"),this.__shouldAllowFocusWhenDisabled()&&this.style.setProperty("--_vaadin-button-disabled-pointer-events","auto")}_onKeyDown(e){super._onKeyDown(e),!(e.altKey||e.shiftKey||e.ctrlKey||e.metaKey)&&this._activeKeys.includes(e.key)&&(e.preventDefault(),this.click())}__onInteractionEvent(e){this.__shouldSuppressInteractionEvent(e)&&e.stopImmediatePropagation()}__shouldSuppressInteractionEvent(e){return this.disabled}};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */_("vaadin-button",Zl,{moduleId:"vaadin-button-styles"});class Ad extends yd(V(P(U(y)))){static get properties(){return{disabled:{type:Boolean,value:!1}}}static get is(){return"vaadin-button"}static get template(){return ed(C)}ready(){super.ready(),this._tooltipController=new Ze(this),this.addController(this._tooltipController)}__shouldAllowFocusWhenDisabled(){return window.Vaadin.featureFlags.accessibleDisabledButtons}}v(Ad);/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Cd extends P(y){static get is(){return"vaadin-upload-icon"}static get template(){return C`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
    `}}v(Cd);/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Vo=document.createElement("template");Vo.innerHTML=`
  <style>
    @font-face {
      font-family: 'vaadin-upload-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAasAAsAAAAABmAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIF5mNtYXAAAAFoAAAAVAAAAFQXVtKMZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAAfQAAAH0bBJxYWhlYWQAAAO4AAAANgAAADYPD267aGhlYQAAA/AAAAAkAAAAJAfCA8tobXR4AAAEFAAAACgAAAAoHgAAx2xvY2EAAAQ8AAAAFgAAABYCSgHsbWF4cAAABFQAAAAgAAAAIAAOADVuYW1lAAAEdAAAAhYAAAIWmmcHf3Bvc3QAAAaMAAAAIAAAACAAAwAAAAMDtwGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6QUDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOkF//3//wAAAAAAIOkA//3//wAB/+MXBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAgAA/8AEAAPAABkAMgAAEz4DMzIeAhczLgMjIg4CBycRIScFIRcOAyMiLgInIx4DMzI+AjcXphZGWmo6SH9kQwyADFiGrmJIhXJbIEYBAFoDWv76YBZGXGw8Rn5lRQyADFmIrWBIhHReIkYCWjJVPSIyVnVDXqN5RiVEYTxG/wBa2loyVT0iMlZ1Q16jeUYnRWE5RgAAAAABAIAAAAOAA4AAAgAAExEBgAMAA4D8gAHAAAAAAwAAAAAEAAOAAAIADgASAAAJASElIiY1NDYzMhYVFAYnETMRAgD+AAQA/gAdIyMdHSMjXYADgPyAgCMdHSMjHR0jwAEA/wAAAQANADMD5gNaAAUAACUBNwUBFwHT/jptATMBppMzAU2a4AIgdAAAAAEAOv/6A8YDhgALAAABJwkBBwkBFwkBNwEDxoz+xv7GjAFA/sCMAToBOoz+wAL6jP7AAUCM/sb+xowBQP7AjAE6AAAAAwAA/8AEAAPAAAcACwASAAABFSE1IREhEQEjNTMJAjMRIRECwP6A/sAEAP0AgIACQP7A/sDAAQABQICA/oABgP8AgAHAAUD+wP6AAYAAAAABAAAAAQAAdhiEdV8PPPUACwQAAAAAANX4FR8AAAAA1fgVHwAA/8AEAAPAAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAQAAAEAAAAAAAAAAAAAAAAAAAAKBAAAAAAAAAAAAAAAAgAAAAQAAAAEAACABAAAAAQAAA0EAAA6BAAAAAAAAAAACgAUAB4AagB4AJwAsADSAPoAAAABAAAACgAzAAMAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEAEwAAAAEAAAAAAAIABwDMAAEAAAAAAAMAEwBaAAEAAAAAAAQAEwDhAAEAAAAAAAUACwA5AAEAAAAAAAYAEwCTAAEAAAAAAAoAGgEaAAMAAQQJAAEAJgATAAMAAQQJAAIADgDTAAMAAQQJAAMAJgBtAAMAAQQJAAQAJgD0AAMAAQQJAAUAFgBEAAMAAQQJAAYAJgCmAAMAAQQJAAoANAE0dmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwdmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzdmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQBydmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
`;document.head.appendChild(Vo.content);/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const xd=m`
  :host {
    display: block;
    width: 100%; /* prevent collapsing inside non-stretching column flex */
    height: 8px;
  }

  :host([hidden]) {
    display: none !important;
  }

  [part='bar'] {
    height: 100%;
  }

  [part='value'] {
    height: 100%;
    transform-origin: 0 50%;
    transform: scaleX(var(--vaadin-progress-value));
  }

  :host([dir='rtl']) [part='value'] {
    transform-origin: 100% 50%;
  }

  @media (forced-colors: active) {
    [part='bar'] {
      outline: 1px solid;
    }

    [part='value'] {
      background-color: AccentColor !important;
      forced-color-adjust: none;
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const wd=s=>class extends s{static get properties(){return{value:{type:Number,observer:"_valueChanged"},min:{type:Number,value:0,observer:"_minChanged"},max:{type:Number,value:1,observer:"_maxChanged"},indeterminate:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get observers(){return["_normalizedValueChanged(value, min, max)"]}ready(){super.ready(),this.setAttribute("role","progressbar")}_normalizedValueChanged(e,i,o){const r=this._normalizeValue(e,i,o);this.style.setProperty("--vaadin-progress-value",r)}_valueChanged(e){this.setAttribute("aria-valuenow",e)}_minChanged(e){this.setAttribute("aria-valuemin",e)}_maxChanged(e){this.setAttribute("aria-valuemax",e)}_normalizeValue(e,i,o){let r;return!e&&e!==0?r=0:i>=o?r=1:(r=(e-i)/(o-i),r=Math.min(Math.max(r,0),1)),r}};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */_("vaadin-progress-bar",xd,{moduleId:"vaadin-progress-bar-styles"});class Ed extends V(P(wd(y))){static get is(){return"vaadin-progress-bar"}static get template(){return C`
      <div part="bar">
        <div part="value"></div>
      </div>
    `}}v(Ed);/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Id=s=>class extends et(s){static get properties(){return{disabled:{type:Boolean,value:!1,reflectToAttribute:!0},complete:{type:Boolean,value:!1,reflectToAttribute:!0},errorMessage:{type:String,value:"",observer:"_errorMessageChanged"},file:{type:Object},fileName:{type:String},held:{type:Boolean,value:!1},indeterminate:{type:Boolean,value:!1,reflectToAttribute:!0},i18n:{type:Object},progress:{type:Number},status:{type:String},tabindex:{type:Number,value:0},uploading:{type:Boolean,value:!1,reflectToAttribute:!0},_progress:{type:Object}}}static get observers(){return["__updateTabindex(tabindex, disabled)","__updateProgress(_progress, progress, indeterminate)"]}ready(){super.ready(),this.addController(new k(this,"progress","vaadin-progress-bar",{initializer:e=>{this._progress=e}})),this.shadowRoot.addEventListener("focusin",e=>{e.composedPath()[0].getAttribute("part").endsWith("button")&&this._setFocused(!1)}),this.shadowRoot.addEventListener("focusout",e=>{e.relatedTarget===this&&this._setFocused(!0)})}_shouldSetFocus(e){return e.composedPath()[0]===this}__disabledChanged(e){e?this.removeAttribute("tabindex"):this.setAttribute("tabindex",this.tabindex)}_errorMessageChanged(e){this.toggleAttribute("error",!!e)}__updateTabindex(e,i){i?this.removeAttribute("tabindex"):this.setAttribute("tabindex",e)}__updateProgress(e,i,o){e&&(e.value=isNaN(i)?0:i/100,e.indeterminate=o)}_fireFileEvent(e){return e.preventDefault(),this.dispatchEvent(new CustomEvent(e.target.getAttribute("file-event"),{detail:{file:this.file},bubbles:!0,composed:!0}))}};/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Pd=m`
  :host {
    display: block;
  }

  [hidden] {
    display: none;
  }

  [part='row'] {
    list-style-type: none;
  }

  button {
    background: transparent;
    padding: 0;
    border: none;
    box-shadow: none;
  }

  :host([complete]) ::slotted([slot='progress']),
  :host([error]) ::slotted([slot='progress']) {
    display: none !important;
  }
`;/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */_("vaadin-upload-file",Pd,{moduleId:"vaadin-upload-file-styles"});class Sd extends Id(P(U(y))){static get template(){return C`
      <div part="row">
        <div part="info">
          <div part="done-icon" hidden$="[[!complete]]" aria-hidden="true"></div>
          <div part="warning-icon" hidden$="[[!errorMessage]]" aria-hidden="true"></div>

          <div part="meta">
            <div part="name" id="name">[[fileName]]</div>
            <div part="status" hidden$="[[!status]]" id="status">[[status]]</div>
            <div part="error" id="error" hidden$="[[!errorMessage]]">[[errorMessage]]</div>
          </div>
        </div>
        <div part="commands">
          <button
            type="button"
            part="start-button"
            file-event="file-start"
            on-click="_fireFileEvent"
            hidden$="[[!held]]"
            disabled$="[[disabled]]"
            aria-label$="[[i18n.file.start]]"
            aria-describedby="name"
          ></button>
          <button
            type="button"
            part="retry-button"
            file-event="file-retry"
            on-click="_fireFileEvent"
            hidden$="[[!errorMessage]]"
            disabled$="[[disabled]]"
            aria-label$="[[i18n.file.retry]]"
            aria-describedby="name"
          ></button>
          <button
            type="button"
            part="remove-button"
            file-event="file-abort"
            on-click="_fireFileEvent"
            disabled$="[[disabled]]"
            aria-label$="[[i18n.file.remove]]"
            aria-describedby="name"
          ></button>
        </div>
      </div>

      <slot name="progress"></slot>
    `}static get is(){return"vaadin-upload-file"}}v(Sd);/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Td=s=>class extends s{static get properties(){return{items:{type:Array},i18n:{type:Object},disabled:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get observers(){return["__updateItems(items, i18n, disabled)"]}__updateItems(e,i){e&&i&&this.requestContentUpdate()}requestContentUpdate(){const{items:e,i18n:i,disabled:o}=this;ps(bt`
          ${e.map(r=>bt`
              <li>
                <vaadin-upload-file
                  .disabled="${o}"
                  .file="${r}"
                  .complete="${r.complete}"
                  .errorMessage="${r.error}"
                  .fileName="${r.name}"
                  .held="${r.held}"
                  .indeterminate="${r.indeterminate}"
                  .progress="${r.progress}"
                  .status="${r.status}"
                  .uploading="${r.uploading}"
                  .i18n="${i}"
                ></vaadin-upload-file>
              </li>
            `)}
        `,this)}};/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class zd extends Td(P(y)){static get is(){return"vaadin-upload-file-list"}static get template(){return C`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='list'] {
          padding: 0;
          margin: 0;
          list-style-type: none;
        }
      </style>
      <ul part="list">
        <slot></slot>
      </ul>
    `}}v(zd);/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Od extends k{constructor(t){super(t,"add-button","vaadin-button")}initNode(t){t._isDefault&&(this.defaultNode=t),t.addEventListener("touchend",e=>{this.host._onAddFilesTouchEnd(e)}),t.addEventListener("click",e=>{this.host._onAddFilesClick(e)}),this.host._addButton=t}}class kd extends k{constructor(t){super(t,"drop-label","span")}initNode(t){t._isDefault&&(this.defaultNode=t),this.host._dropLabel=t}}const Md=s=>class extends s{static get properties(){return{disabled:{type:Boolean,value:!1,reflectToAttribute:!0},nodrop:{type:Boolean,reflectToAttribute:!0,value:$e},target:{type:String,value:""},method:{type:String,value:"POST"},headers:{type:Object,value:{}},timeout:{type:Number,value:0},_dragover:{type:Boolean,value:!1,observer:"_dragoverChanged"},files:{type:Array,notify:!0,value:()=>[],sync:!0},maxFiles:{type:Number,value:1/0,sync:!0},maxFilesReached:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0},accept:{type:String,value:""},maxFileSize:{type:Number,value:1/0},_dragoverValid:{type:Boolean,value:!1,observer:"_dragoverValidChanged"},formDataName:{type:String,value:"file"},noAuto:{type:Boolean,value:!1},withCredentials:{type:Boolean,value:!1},capture:String,i18n:{type:Object,value(){return{dropFiles:{one:"Drop file here",many:"Drop files here"},addFiles:{one:"Upload File...",many:"Upload Files..."},error:{tooManyFiles:"Too Many Files.",fileIsTooBig:"File is Too Big.",incorrectFileType:"Incorrect File Type."},uploading:{status:{connecting:"Connecting...",stalled:"Stalled",processing:"Processing File...",held:"Queued"},remainingTime:{prefix:"remaining time: ",unknown:"unknown remaining time"},error:{serverUnavailable:"Upload failed, please try again later",unexpectedServerError:"Upload failed due to server error",forbidden:"Upload forbidden"}},file:{retry:"Retry",start:"Start",remove:"Remove"},units:{size:["B","kB","MB","GB","TB","PB","EB","ZB","YB"]}}}},_addButton:{type:Object},_dropLabel:{type:Object},_fileList:{type:Object},_files:{type:Array}}}static get observers(){return["__updateAddButton(_addButton, maxFiles, i18n, maxFilesReached, disabled)","__updateDropLabel(_dropLabel, maxFiles, i18n)","__updateFileList(_fileList, files, i18n, disabled)","__updateMaxFilesReached(maxFiles, files)"]}get __acceptRegexp(){if(!this.accept)return null;const e=this.accept.split(",").map(i=>{let o=i.trim();return o=o.replace(/[+.]/gu,"\\$&"),o.startsWith("\\.")&&(o=`.*${o}$`),o.replace(/\/\*/gu,"/.*")});return new RegExp(`^(${e.join("|")})$`,"iu")}ready(){super.ready(),this.addEventListener("dragover",this._onDragover.bind(this)),this.addEventListener("dragleave",this._onDragleave.bind(this)),this.addEventListener("drop",this._onDrop.bind(this)),this.addEventListener("file-retry",this._onFileRetry.bind(this)),this.addEventListener("file-abort",this._onFileAbort.bind(this)),this.addEventListener("file-start",this._onFileStart.bind(this)),this.addEventListener("file-reject",this._onFileReject.bind(this)),this.addEventListener("upload-start",this._onUploadStart.bind(this)),this.addEventListener("upload-success",this._onUploadSuccess.bind(this)),this.addEventListener("upload-error",this._onUploadError.bind(this)),this._addButtonController=new Od(this),this.addController(this._addButtonController),this._dropLabelController=new kd(this),this.addController(this._dropLabelController),this.addController(new k(this,"file-list","vaadin-upload-file-list",{initializer:e=>{this._fileList=e}})),this.addController(new k(this,"drop-label-icon","vaadin-upload-icon"))}_formatSize(e){if(typeof this.i18n.formatSize=="function")return this.i18n.formatSize(e);const i=this.i18n.units.sizeBase||1e3,o=~~(Math.log(e)/Math.log(i)),r=Math.max(0,Math.min(3,o-1));return`${parseFloat((e/i**o).toFixed(r))} ${this.i18n.units.size[o]}`}_splitTimeByUnits(e){const i=[60,60,24,1/0],o=[0];for(let r=0;r<i.length&&e>0;r++)o[r]=e%i[r],e=Math.floor(e/i[r]);return o}_formatTime(e,i){if(typeof this.i18n.formatTime=="function")return this.i18n.formatTime(e,i);for(;i.length<3;)i.push(0);return i.reverse().map(o=>(o<10?"0":"")+o).join(":")}_formatFileProgress(e){const i=e.loaded>0?this.i18n.uploading.remainingTime.prefix+e.remainingStr:this.i18n.uploading.remainingTime.unknown;return`${e.totalStr}: ${e.progress}% (${i})`}__updateMaxFilesReached(e,i){this._setMaxFilesReached(e>=0&&i.length>=e)}__updateAddButton(e,i,o,r,n){e&&(e.disabled=n||r,e===this._addButtonController.defaultNode&&(e.textContent=this._i18nPlural(i,o.addFiles)))}__updateDropLabel(e,i,o){e&&e===this._dropLabelController.defaultNode&&(e.textContent=this._i18nPlural(i,o.dropFiles))}__updateFileList(e,i,o,r){e&&(e.items=[...i],e.i18n=o,e.disabled=r)}_onDragover(e){e.preventDefault(),!this.nodrop&&!this._dragover&&(this._dragoverValid=!this.maxFilesReached&&!this.disabled,this._dragover=!0),e.dataTransfer.dropEffect=!this._dragoverValid||this.nodrop?"none":"copy"}_onDragleave(e){e.preventDefault(),this._dragover&&!this.nodrop&&(this._dragover=this._dragoverValid=!1)}async _onDrop(e){if(!this.nodrop&&!this.disabled){e.preventDefault(),this._dragover=this._dragoverValid=!1;const i=await this.__getFilesFromDropEvent(e);this._addFiles(i)}}__getFilesFromDropEvent(e){async function i(n){if(n.isFile)return new Promise(a=>{n.file(a,()=>a([]))});if(n.isDirectory){const a=n.createReader(),l=await new Promise(c=>{a.readEntries(c,()=>c([]))});return(await Promise.all(l.map(i))).flat()}}if(!Array.from(e.dataTransfer.items).filter(n=>!!n).filter(n=>typeof n.webkitGetAsEntry=="function").map(n=>n.webkitGetAsEntry()).some(n=>!!n&&n.isDirectory))return Promise.resolve(e.dataTransfer.files?Array.from(e.dataTransfer.files):[]);const r=Array.from(e.dataTransfer.items).map(n=>n.webkitGetAsEntry()).filter(n=>!!n).map(i);return Promise.all(r).then(n=>n.flat())}_createXhr(){return new XMLHttpRequest}_configureXhr(e){if(typeof this.headers=="string")try{this.headers=JSON.parse(this.headers)}catch{this.headers=void 0}Object.entries(this.headers).forEach(([i,o])=>{e.setRequestHeader(i,o)}),this.timeout&&(e.timeout=this.timeout),e.withCredentials=this.withCredentials}_setStatus(e,i,o,r){e.elapsed=r,e.elapsedStr=this._formatTime(e.elapsed,this._splitTimeByUnits(e.elapsed)),e.remaining=Math.ceil(r*(i/o-1)),e.remainingStr=this._formatTime(e.remaining,this._splitTimeByUnits(e.remaining)),e.speed=~~(i/r/1024),e.totalStr=this._formatSize(i),e.loadedStr=this._formatSize(o),e.status=this._formatFileProgress(e)}uploadFiles(e=this.files){e&&!Array.isArray(e)&&(e=[e]),e=e.filter(i=>!i.complete),Array.prototype.forEach.call(e,this._uploadFile.bind(this))}_uploadFile(e){if(e.uploading)return;const i=Date.now(),o=e.xhr=this._createXhr();let r,n;o.upload.onprogress=c=>{clearTimeout(r),n=Date.now();const h=(n-i)/1e3,u=c.loaded,p=c.total,f=~~(u/p*100);e.loaded=u,e.progress=f,e.indeterminate=u<=0||u>=p,e.error?e.indeterminate=e.status=void 0:e.abort||(f<100?(this._setStatus(e,p,u,h),r=setTimeout(()=>{e.status=this.i18n.uploading.status.stalled,this._renderFileList()},2e3)):(e.loadedStr=e.totalStr,e.status=this.i18n.uploading.status.processing)),this._renderFileList(),this.dispatchEvent(new CustomEvent("upload-progress",{detail:{file:e,xhr:o}}))},o.onreadystatechange=()=>{if(o.readyState===4){if(clearTimeout(r),e.indeterminate=e.uploading=!1,e.abort||(e.status="",!this.dispatchEvent(new CustomEvent("upload-response",{detail:{file:e,xhr:o},cancelable:!0}))))return;o.status===0?e.error=this.i18n.uploading.error.serverUnavailable:o.status>=500?e.error=this.i18n.uploading.error.unexpectedServerError:o.status>=400&&(e.error=this.i18n.uploading.error.forbidden),e.complete=!e.error,this.dispatchEvent(new CustomEvent(`upload-${e.error?"error":"success"}`,{detail:{file:e,xhr:o}})),this._renderFileList()}};const a=new FormData;if(e.uploadTarget||(e.uploadTarget=this.target||""),e.formDataName=this.formDataName,!this.dispatchEvent(new CustomEvent("upload-before",{detail:{file:e,xhr:o},cancelable:!0})))return;a.append(e.formDataName,e,e.name),o.open(this.method,e.uploadTarget,!0),this._configureXhr(o),e.status=this.i18n.uploading.status.connecting,e.uploading=e.indeterminate=!0,e.complete=e.abort=e.error=e.held=!1,o.upload.onloadstart=()=>{this.dispatchEvent(new CustomEvent("upload-start",{detail:{file:e,xhr:o}})),this._renderFileList()},this.dispatchEvent(new CustomEvent("upload-request",{detail:{file:e,xhr:o,formData:a},cancelable:!0}))&&o.send(a)}_retryFileUpload(e){this.dispatchEvent(new CustomEvent("upload-retry",{detail:{file:e,xhr:e.xhr},cancelable:!0}))&&(this._uploadFile(e),this._updateFocus(this.files.indexOf(e)))}_abortFileUpload(e){this.dispatchEvent(new CustomEvent("upload-abort",{detail:{file:e,xhr:e.xhr},cancelable:!0}))&&(e.abort=!0,e.xhr&&e.xhr.abort(),this._removeFile(e))}_renderFileList(){this._fileList&&typeof this._fileList.requestContentUpdate=="function"&&this._fileList.requestContentUpdate()}_addFiles(e){Array.prototype.forEach.call(e,this._addFile.bind(this))}_addFile(e){if(this.maxFilesReached){this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:e,error:this.i18n.error.tooManyFiles}}));return}if(this.maxFileSize>=0&&e.size>this.maxFileSize){this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:e,error:this.i18n.error.fileIsTooBig}}));return}const i=this.__acceptRegexp;if(i&&!(i.test(e.type)||i.test(e.name))){this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:e,error:this.i18n.error.incorrectFileType}}));return}e.loaded=0,e.held=!0,e.status=this.i18n.uploading.status.held,this.files=[e,...this.files],this.noAuto||this._uploadFile(e)}_updateFocus(e){if(this.files.length===0){this._addButton.focus();return}e===this.files.length&&(e-=1),this._fileList.children[e].firstElementChild.focus()}_removeFile(e){const i=this.files.indexOf(e);i>=0&&(this.files=this.files.filter(o=>o!==e),this.dispatchEvent(new CustomEvent("file-remove",{detail:{file:e},bubbles:!0,composed:!0})),this._updateFocus(i))}_onAddFilesTouchEnd(e){e.preventDefault(),this._onAddFilesClick(e)}_onAddFilesClick(e){this.maxFilesReached||(e.stopPropagation(),this.$.fileInput.value="",this.$.fileInput.click())}_onFileInputChange(e){this._addFiles(e.target.files)}_onFileStart(e){this._uploadFile(e.detail.file)}_onFileRetry(e){this._retryFileUpload(e.detail.file)}_onFileAbort(e){this._abortFileUpload(e.detail.file)}_onFileReject(e){R(`${e.detail.file.name}: ${e.detail.error}`,{mode:"alert"})}_onUploadStart(e){R(`${e.detail.file.name}: 0%`,{mode:"alert"})}_onUploadSuccess(e){R(`${e.detail.file.name}: 100%`,{mode:"alert"})}_onUploadError(e){R(`${e.detail.file.name}: ${e.detail.file.error}`,{mode:"alert"})}_dragoverChanged(e){e?this.setAttribute("dragover",e):this.removeAttribute("dragover")}_dragoverValidChanged(e){e?this.setAttribute("dragover-valid",e):this.removeAttribute("dragover-valid")}_i18nPlural(e,i){return e===1?i.one:i.many}_isMultiple(e){return e!==1}};/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Nd extends Md(V(P(U(y)))){static get template(){return C`
      <style>
        :host {
          display: block;
          position: relative;
          box-sizing: border-box;
        }

        :host([hidden]) {
          display: none !important;
        }

        [hidden] {
          display: none !important;
        }
      </style>

      <div part="primary-buttons">
        <slot name="add-button"></slot>
        <div part="drop-label" hidden$="[[nodrop]]" id="dropLabelContainer" aria-hidden="true">
          <slot name="drop-label-icon"></slot>
          <slot name="drop-label"></slot>
        </div>
      </div>
      <slot name="file-list"></slot>
      <slot></slot>
      <input
        type="file"
        id="fileInput"
        hidden
        on-change="_onFileInputChange"
        accept$="{{accept}}"
        multiple$="[[_isMultiple(maxFiles)]]"
        capture$="[[capture]]"
      />
    `}static get is(){return"vaadin-upload"}}v(Nd);const Ld=m`
  :host([theme~='margin']) {
    margin: var(--lumo-space-m);
  }

  :host([theme~='padding']) {
    padding: var(--lumo-space-m);
  }

  :host([theme~='spacing-xs']) {
    gap: var(--lumo-space-xs);
  }

  :host([theme~='spacing-s']) {
    gap: var(--lumo-space-s);
  }

  :host([theme~='spacing']) {
    gap: var(--lumo-space-m);
  }

  :host([theme~='spacing-l']) {
    gap: var(--lumo-space-l);
  }

  :host([theme~='spacing-xl']) {
    gap: var(--lumo-space-xl);
  }

  :host([theme~='wrap']) {
    flex-wrap: wrap;
  }
`;_("vaadin-horizontal-layout",Ld,{moduleId:"lumo-horizontal-layout"});/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Dd=s=>class extends s{ready(){super.ready();const t=this.shadowRoot.querySelector("slot:not([name])");this.__startSlotObserver=new Le(t,({currentNodes:o,removedNodes:r})=>{r.length&&this.__clearAttribute(r,"last-start-child");const n=o.filter(l=>l.nodeType===Node.ELEMENT_NODE);this.__updateAttributes(n,"start",!1,!0);const a=o.filter(l=>!so(l));this.toggleAttribute("has-start",a.length>0)});const e=this.shadowRoot.querySelector('[name="end"]');this.__endSlotObserver=new Le(e,({currentNodes:o,removedNodes:r})=>{r.length&&this.__clearAttribute(r,"first-end-child"),this.__updateAttributes(o,"end",!0,!1),this.toggleAttribute("has-end",o.length>0)});const i=this.shadowRoot.querySelector('[name="middle"]');this.__middleSlotObserver=new Le(i,({currentNodes:o,removedNodes:r})=>{r.length&&(this.__clearAttribute(r,"first-middle-child"),this.__clearAttribute(r,"last-middle-child")),this.__updateAttributes(o,"middle",!0,!0),this.toggleAttribute("has-middle",o.length>0)})}__clearAttribute(t,e){const i=t.find(o=>o.nodeType===Node.ELEMENT_NODE&&o.hasAttribute(e));i&&i.removeAttribute(e)}__updateAttributes(t,e,i,o){t.forEach((r,n)=>{if(i){const a=`first-${e}-child`;n===0?r.setAttribute(a,""):r.hasAttribute(a)&&r.removeAttribute(a)}if(o){const a=`last-${e}-child`;n===t.length-1?r.setAttribute(a,""):r.hasAttribute(a)&&r.removeAttribute(a)}})}};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ss=m`
  :host {
    display: flex;
    box-sizing: border-box;
  }

  :host([hidden]) {
    display: none !important;
  }

  /* Theme variations */
  :host([theme~='margin']) {
    margin: 1em;
  }

  :host([theme~='padding']) {
    padding: 1em;
  }

  :host([theme~='spacing']) {
    gap: 1em;
  }

  :host([has-end]:not([has-middle])) ::slotted([last-start-child]) {
    margin-inline-end: auto;
  }

  ::slotted([first-middle-child]) {
    margin-inline-start: auto;
  }

  ::slotted([last-middle-child]) {
    margin-inline-end: auto;
  }

  :host([has-start]:not([has-middle])) ::slotted([first-end-child]) {
    margin-inline-start: auto;
  }
`,Fd=window.Vaadin.featureFlags.layoutComponentImprovements,Vd=m`
  ::slotted([data-width-full]) {
    flex: 1;
  }

  ::slotted(vaadin-horizontal-layout[data-width-full]),
  ::slotted(vaadin-vertical-layout[data-width-full]) {
    min-width: 0;
  }
`,Bd=Fd?[ss,Vd]:[ss];/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */_("vaadin-horizontal-layout",Bd,{moduleId:"vaadin-horizontal-layout-styles"});class Rd extends Dd(V(P(y))){static get template(){return C`
      <slot></slot>
      <slot name="middle"></slot>
      <slot name="end"></slot>
    `}static get is(){return"vaadin-horizontal-layout"}}v(Rd);/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Hd=m`
  :host {
    font-size: var(--lumo-font-size-xxs);
    line-height: 1;
    color: var(--lumo-body-text-color);
    border-radius: var(--lumo-border-radius-s);
    background-color: var(--lumo-contrast-20pct);
    cursor: var(--lumo-clickable-cursor);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :host([disabled]) {
    background-color: var(--lumo-contrast-10pct);
  }

  :host([focused]) [part='remove-button'] {
    color: inherit;
  }

  :host([slot='overflow']) {
    position: relative;
    min-width: var(--lumo-size-xxs);
    margin-inline-start: var(--lumo-space-s);
  }

  :host([slot='overflow'])::before,
  :host([slot='overflow'])::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    border-left: calc(var(--lumo-space-s) / 4) solid;
    border-radius: var(--lumo-border-radius-s);
    border-color: var(--lumo-contrast-30pct);
  }

  :host([slot='overflow'])::before {
    left: calc(-1 * var(--lumo-space-s) / 2);
  }

  :host([slot='overflow'])::after {
    left: calc(-1 * var(--lumo-space-s));
  }

  :host([count='2']) {
    margin-inline-start: calc(var(--lumo-space-s) / 2);
  }

  :host([count='2'])::after {
    display: none;
  }

  :host([count='1']) {
    margin-inline-start: 0;
  }

  :host([count='1'])::before,
  :host([count='1'])::after {
    display: none;
  }

  [part='label'] {
    font-weight: 500;
    line-height: 1.25;
  }

  [part='remove-button'] {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -0.3125em;
    margin-bottom: -0.3125em;
    margin-inline-start: auto;
    width: 1.25em;
    height: 1.25em;
    font-size: 1.5em;
    transition: none;
  }

  [part='remove-button']::before {
    content: var(--lumo-icons-cross);
  }

  :host([disabled]) [part='label'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
    pointer-events: none;
  }
`;_("vaadin-multi-select-combo-box-chip",[Ye,Hd],{moduleId:"lumo-multi-select-combo-box-chip"});/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const $d=m`
  @media (any-hover: hover) {
    :host(:hover[readonly]) {
      background-color: transparent;
      cursor: default;
    }
  }
`;_("vaadin-multi-select-combo-box-item",[di,lo,$d],{moduleId:"lumo-multi-select-combo-box-item"});_("vaadin-multi-select-combo-box-overlay",[Ee,st,ho,co,uo,m`
      :host {
        --_vaadin-multi-select-combo-box-items-container-border-width: var(--lumo-space-xs);
        --_vaadin-multi-select-combo-box-items-container-border-style: solid;
      }
    `],{moduleId:"lumo-multi-select-combo-box-overlay"});_("vaadin-multi-select-combo-box-container",m`
    :host([auto-expand-vertically]) {
      padding-block: var(--lumo-space-xs);
    }
  `,{moduleId:"lumo-multi-select-combo-box-container"});const Ud=m`
  :host([has-value]) {
    padding-inline-start: 0;
  }

  :host([has-value]) ::slotted(input:placeholder-shown) {
    caret-color: var(--lumo-body-text-color) !important;
  }

  [part='label'] {
    flex-shrink: 0;
  }

  /* Override input-container styles */
  [part='input-field'] ::slotted([slot='chip']),
  [part='input-field'] ::slotted([slot='overflow']) {
    min-height: auto;
    padding: 0.3125em calc(0.5em + var(--lumo-border-radius-s) / 4);
    color: var(--lumo-body-text-color);
    -webkit-mask-image: none;
    mask-image: none;
  }

  :host([auto-expand-vertically]) ::slotted([slot='chip']) {
    margin-block: calc(var(--lumo-space-xs) / 2);
  }

  ::slotted([slot='chip']:not([readonly]):not([disabled])) {
    padding-inline-end: 0;
  }

  :host([auto-expand-vertically]) ::slotted([slot='input']) {
    min-height: calc(var(--lumo-text-field-size, var(--lumo-size-m)) - 2 * var(--lumo-space-xs));
  }

  ::slotted([slot='chip']:not(:last-of-type)),
  ::slotted([slot='overflow']:not(:last-of-type)) {
    margin-inline-end: var(--lumo-space-xs);
  }

  ::slotted([slot='chip'][focused]) {
    background-color: var(--vaadin-selection-color, var(--lumo-primary-color));
    color: var(--lumo-primary-contrast-color);
  }

  [part='toggle-button']::before {
    content: var(--lumo-icons-dropdown);
  }

  :host([readonly][has-value]) [part='toggle-button'] {
    color: var(--lumo-contrast-60pct);
    cursor: var(--lumo-clickable-cursor);
  }
`;_("vaadin-multi-select-combo-box",[Qe,Ud],{moduleId:"lumo-multi-select-combo-box"});/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const jd=m`
  :host {
    max-width: 100%;
    --input-min-width: var(--vaadin-multi-select-combo-box-input-min-width, 4em);
    --_chip-min-width: var(--vaadin-multi-select-combo-box-chip-min-width, 50px);
  }

  #chips {
    display: flex;
    align-items: center;
  }

  ::slotted(input) {
    box-sizing: border-box;
    flex: 1 0 var(--input-min-width);
  }

  ::slotted([slot='chip']),
  ::slotted([slot='overflow']) {
    flex: 0 1 auto;
  }

  ::slotted([slot='chip']) {
    overflow: hidden;
  }

  :host(:is([readonly], [disabled])) ::slotted(input) {
    flex-grow: 0;
    flex-basis: 0;
    padding: 0;
  }

  :host([auto-expand-vertically]) #chips {
    display: contents;
  }

  :host([auto-expand-horizontally]) [class$='container'] {
    width: auto;
  }
`,qd=m`
  :host {
    display: inline-flex;
    align-items: center;
    align-self: center;
    white-space: nowrap;
    box-sizing: border-box;
  }

  [part='label'] {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  :host([hidden]),
  :host(:is([readonly], [disabled], [slot='overflow'])) [part='remove-button'] {
    display: none !important;
  }

  @media (forced-colors: active) {
    :host {
      outline: 1px solid;
      outline-offset: -1px;
    }
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */_("vaadin-multi-select-combo-box-chip",qd,{moduleId:"vaadin-multi-select-combo-box-chip"});class Wd extends P(y){static get is(){return"vaadin-multi-select-combo-box-chip"}static get properties(){return{disabled:{type:Boolean,reflectToAttribute:!0},readonly:{type:Boolean,reflectToAttribute:!0},label:{type:String},item:{type:Object}}}static get template(){return C`
      <div part="label">[[label]]</div>
      <div part="remove-button" on-click="_onRemoveClick"></div>
    `}_onRemoveClick(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("item-removed",{detail:{item:this.item},bubbles:!0,composed:!0}))}}v(Wd);/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */_("vaadin-multi-select-combo-box-container",m`
    #wrapper {
      display: flex;
      width: 100%;
      min-width: 0;
    }

    :host([auto-expand-vertically]) #wrapper {
      flex-wrap: wrap;
    }
  `,{moduleId:"vaadin-multi-select-combo-box-container-styles"});let Oe;class Gd extends Ys{static get is(){return"vaadin-multi-select-combo-box-container"}static get template(){if(!Oe){Oe=super.template.cloneNode(!0);const t=Oe.content,e=t.querySelectorAll("slot"),i=document.createElement("div");i.setAttribute("id","wrapper"),t.insertBefore(i,e[2]),i.appendChild(e[0]),i.appendChild(e[1])}return Oe}static get properties(){return{autoExpandVertically:{type:Boolean,reflectToAttribute:!0}}}}v(Gd);/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Yd extends po(P(Y(y))){static get is(){return"vaadin-multi-select-combo-box-item"}static get template(){return C`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}}v(Yd);/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Qd=m`
  #overlay {
    width: var(
      --vaadin-multi-select-combo-box-overlay-width,
      var(--_vaadin-multi-select-combo-box-overlay-default-width, auto)
    );
  }

  [part='content'] {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;_("vaadin-multi-select-combo-box-overlay",[hi,Qd],{moduleId:"vaadin-multi-select-combo-box-overlay-styles"});class Xd extends vo(ci(Y(P(y)))){static get is(){return"vaadin-multi-select-combo-box-overlay"}static get template(){return C`
      <div id="backdrop" part="backdrop" hidden></div>
      <div part="overlay" id="overlay">
        <div part="loader"></div>
        <div part="content" id="content"><slot></slot></div>
      </div>
    `}}v(Xd);/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Kd extends yo(y){static get is(){return"vaadin-multi-select-combo-box-scroller"}static get template(){return C`
      <style>
        :host {
          display: block;
          min-height: 1px;
          overflow: auto;

          /* Fixes item background from getting on top of scrollbars on Safari */
          transform: translate3d(0, 0, 0);

          /* Enable momentum scrolling on iOS */
          -webkit-overflow-scrolling: touch;

          /* Fixes scrollbar disappearing when 'Show scroll bars: Always' enabled in Safari */
          box-shadow: 0 0 0 white;
        }

        #selector {
          border-width: var(--_vaadin-multi-select-combo-box-items-container-border-width);
          border-style: var(--_vaadin-multi-select-combo-box-items-container-border-style);
          border-color: var(--_vaadin-multi-select-combo-box-items-container-border-color, transparent);
          position: relative;
        }
      </style>
      <div id="selector">
        <slot></slot>
      </div>
    `}ready(){super.ready(),this.setAttribute("aria-multiselectable","true")}_isItemSelected(t,e,i){return t instanceof D||this.owner.readonly?!1:this.owner._findIndex(t,this.owner.selectedItems,i)>-1}_updateElement(t,e){super._updateElement(t,e),t.toggleAttribute("readonly",this.owner.readonly)}}v(Kd);/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Jd=s=>class extends xo(Io(s)){static get properties(){return{filteredItems:{type:Array,notify:!0,sync:!0},keepFilter:{type:Boolean,value:!1},loading:{type:Boolean,notify:!0,sync:!0},size:{type:Number,notify:!0,observer:"_sizeChanged",sync:!0},selectedItems:{type:Array,value:()=>[]},selectedItemsOnTop:{type:Boolean,value:!1,sync:!0},lastFilter:{type:String,notify:!0,sync:!0},topGroup:{type:Array,observer:"_topGroupChanged",sync:!0},_target:{type:Object}}}static get observers(){return["_readonlyChanged(readonly)"]}get clearElement(){return this.querySelector('[part="clear-button"]')}get _tagNamePrefix(){return"vaadin-multi-select-combo-box"}constructor(){super(),this.addEventListener("custom-value-set",this.__onCustomValueSet.bind(this))}open(){!this.disabled&&!(this.readonly&&this.selectedItems.length===0)&&(this.opened=!0)}ready(){super.ready(),this._target=this,this._toggleElement=this.querySelector(".toggle-button")}_updateOverlayWidth(){this.$.overlay._updateOverlayWidth()}_readonlyChanged(){this._setDropdownItems(this.filteredItems)}_setDropdownItems(e){if(this.readonly){super._setDropdownItems(this.selectedItems);return}if(this.filter||!this.selectedItemsOnTop){super._setDropdownItems(e);return}if(e&&e.length&&this.topGroup&&this.topGroup.length){const i=e.filter(o=>this._comboBox._findIndex(o,this.topGroup,this.itemIdPath)===-1);super._setDropdownItems(this.topGroup.concat(i));return}super._setDropdownItems(e)}_topGroupChanged(e){e&&this._setDropdownItems(this.filteredItems)}_initScroller(){const e=this.getRootNode().host;this._comboBox=e,super._initScroller(e)}_onEnter(e){if(this.opened){if(e.preventDefault(),e.stopPropagation(),this.readonly)this.close();else if(this._hasValidInputValue()){const i=this._dropdownItems[this._focusedIndex];this._commitValue(),this._focusedIndex=this._dropdownItems.indexOf(i)}return}super._onEnter(e)}_onEscape(e){if(this.readonly){e.stopPropagation(),this.opened&&this.close();return}super._onEscape(e)}_clearFilter(){(!this.keepFilter||!this.opened)&&super._clearFilter()}_revertInputValueToValue(){super._revertInputValueToValue(),this.filter=""}_commitValue(){this.lastFilter=this.filter,super._commitValue()}_onArrowDown(){this.readonly?this.opened||this.open():super._onArrowDown()}_onArrowUp(){this.readonly?this.opened||this.open():super._onArrowUp()}_setFocused(e){e||(this._ignoreCommitValue=!0),super._setFocused(e),!e&&this.readonly&&!this._closeOnBlurIsPrevented&&this.close()}_onClosed(){this._ignoreCommitValue=!0,super._onClosed()}_detectAndDispatchChange(){if(this._ignoreCommitValue){this._ignoreCommitValue=!1,this.clear(),this._inputElementValue="";return}super._detectAndDispatchChange()}_overlaySelectedItemChanged(e){e.stopPropagation(),!this.readonly&&(e.detail.item instanceof D||this.opened&&(this.lastFilter=this.filter,this.dispatchEvent(new CustomEvent("combo-box-item-selected",{detail:{item:e.detail.item}}))))}_shouldFetchData(){return this.readonly?!1:super._shouldFetchData()}clearCache(){this.readonly||super.clearCache()}__onCustomValueSet(e){this._ignoreCommitValue&&e.stopImmediatePropagation()}};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Zd extends Jd(P(y)){static get is(){return"vaadin-multi-select-combo-box-internal"}static get template(){return C`
      <style>
        :host([opened]) {
          pointer-events: auto;
        }
      </style>

      <slot></slot>

      <vaadin-multi-select-combo-box-overlay
        id="overlay"
        opened="[[_overlayOpened]]"
        loading$="[[loading]]"
        theme$="[[_theme]]"
        position-target="[[_target]]"
        no-vertical-overlap
        restore-focus-node="[[inputElement]]"
      ></vaadin-multi-select-combo-box-overlay>
    `}}v(Zd);/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ke=new ResizeObserver(s=>{setTimeout(()=>{s.forEach(t=>{t.target.isConnected&&(t.target.resizables?t.target.resizables.forEach(e=>{e._onResize(t.contentRect)}):t.target._onResize(t.contentRect))})})}),ec=I(s=>class extends s{get _observeParent(){return!1}connectedCallback(){if(super.connectedCallback(),ke.observe(this),this._observeParent){const e=this.parentNode instanceof ShadowRoot?this.parentNode.host:this.parentNode;e.resizables||(e.resizables=new Set,ke.observe(e)),e.resizables.add(this),this.__parent=e}}disconnectedCallback(){super.disconnectedCallback(),ke.unobserve(this);const e=this.__parent;if(this._observeParent&&e){const i=e.resizables;i&&(i.delete(this),i.size===0&&ke.unobserve(e)),this.__parent=null}}_onResize(e){}});/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const tc=s=>class extends ai(ec(s)){static get properties(){return{autoExpandHorizontally:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_autoExpandHorizontallyChanged",sync:!0},autoExpandVertically:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_autoExpandVerticallyChanged",sync:!0},autoOpenDisabled:{type:Boolean,sync:!0},clearButtonVisible:{type:Boolean,reflectToAttribute:!0,observer:"_clearButtonVisibleChanged",value:!1,sync:!0},items:{type:Array,sync:!0},itemClassNameGenerator:{type:Object,observer:"__itemClassNameGeneratorChanged",sync:!0},itemLabelPath:{type:String,value:"label",sync:!0},itemValuePath:{type:String,value:"value",sync:!0},itemIdPath:{type:String,sync:!0},i18n:{type:Object,value:()=>({cleared:"Selection cleared",focused:"focused. Press Backspace to remove",selected:"added to selection",deselected:"removed from selection",total:"{count} items selected"})},keepFilter:{type:Boolean,value:!1},loading:{type:Boolean,value:!1,reflectToAttribute:!0,sync:!0},overlayClass:{type:String,sync:!0},readonly:{type:Boolean,value:!1,observer:"_readonlyChanged",reflectToAttribute:!0,sync:!0},selectedItems:{type:Array,value:()=>[],notify:!0,sync:!0},opened:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0,sync:!0},size:{type:Number,sync:!0},pageSize:{type:Number,value:50,observer:"_pageSizeChanged",sync:!0},dataProvider:{type:Object,sync:!0},allowCustomValue:{type:Boolean,value:!1},placeholder:{type:String,observer:"_placeholderChanged",sync:!0},renderer:{type:Function,sync:!0},filter:{type:String,value:"",notify:!0,sync:!0},filteredItems:{type:Array,sync:!0},selectedItemsOnTop:{type:Boolean,value:!1,sync:!0},value:{type:String},_overflowItems:{type:Array,value:()=>[],sync:!0},_focusedChipIndex:{type:Number,value:-1,observer:"_focusedChipIndexChanged"},_lastFilter:{type:String,sync:!0},_topGroup:{type:Array}}}static get observers(){return["_selectedItemsChanged(selectedItems)","__updateOverflowChip(_overflow, _overflowItems, disabled, readonly)","__updateTopGroup(selectedItemsOnTop, selectedItems, opened)"]}get slotStyles(){const e=this.localName;return[...super.slotStyles,`
        ${e}[has-value] input::placeholder {
          color: transparent !important;
          forced-color-adjust: none;
        }
      `]}get clearElement(){return this.$.clearButton}get _chips(){return[...this.querySelectorAll('[slot="chip"]')]}get _hasValue(){return this.selectedItems&&this.selectedItems.length>0}ready(){super.ready(),this.addController(new ti(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new li(this.inputElement,this._labelController)),this._tooltipController=new Ze(this),this.addController(this._tooltipController),this._tooltipController.setPosition("top"),this._tooltipController.setAriaTarget(this.inputElement),this._tooltipController.setShouldShow(e=>!e.opened),this._inputField=this.shadowRoot.querySelector('[part="input-field"]'),this._overflowController=new k(this,"overflow","vaadin-multi-select-combo-box-chip",{initializer:e=>{e.addEventListener("mousedown",i=>this._preventBlur(i)),this._overflow=e}}),this.addController(this._overflowController),this.__updateChips(),Eo(this)}checkValidity(){return this.required&&!this.readonly?this._hasValue:!0}clear(){this.__updateSelection([]),R(this.i18n.cleared)}clearCache(){this.$&&this.$.comboBox&&this.$.comboBox.clearCache()}requestContentUpdate(){this.$&&this.$.comboBox&&this.$.comboBox.requestContentUpdate()}_disabledChanged(e,i){super._disabledChanged(e,i),(e||i)&&this.__updateChips()}_inputElementChanged(e){super._inputElementChanged(e),e&&this.$.comboBox._setInputElement(e)}_setFocused(e){super._setFocused(e),!e&&document.hasFocus()&&(this._focusedChipIndex=-1,this._requestValidation())}_onResize(){this.__updateChips()}_delegateAttribute(e,i){if(this.stateTarget){if(e==="required"){this._delegateAttribute("aria-required",i?"true":!1);return}super._delegateAttribute(e,i)}}_autoExpandHorizontallyChanged(e,i){(e||i)&&this.__updateChips()}_autoExpandVerticallyChanged(e,i){(e||i)&&this.__updateChips()}_clearButtonVisibleChanged(e,i){(e||i)&&this.__updateChips()}_onFilteredItemsChanged(e){const{value:i}=e.detail;(Array.isArray(i)||i==null)&&(this.filteredItems=i)}_readonlyChanged(e,i){(e||i)&&this.__updateChips(),this.dataProvider&&this.clearCache()}__itemClassNameGeneratorChanged(e,i){(e||i)&&this.__updateChips()}_pageSizeChanged(e,i){(Math.floor(e)!==e||e<=0)&&(this.pageSize=i,console.error('"pageSize" value must be an integer > 0')),this.$.comboBox.pageSize=this.pageSize}_placeholderChanged(e){const i=this.__tmpA11yPlaceholder;i!==e&&(this.__savedPlaceholder=e,i&&(this.placeholder=i))}_selectedItemsChanged(e){if(this._toggleHasValue(this._hasValue),this._hasValue){const i=this._mergeItemLabels(e);this.__tmpA11yPlaceholder===void 0&&(this.__savedPlaceholder=this.placeholder),this.__tmpA11yPlaceholder=i,this.placeholder=i}else this.__tmpA11yPlaceholder!==void 0&&(delete this.__tmpA11yPlaceholder,this.placeholder=this.__savedPlaceholder);this.__updateChips(),this.requestContentUpdate(),this.opened&&this.$.comboBox._updateOverlayWidth()}_getItemLabel(e){return this.$.comboBox._getItemLabel(e)}_mergeItemLabels(e){return e.map(i=>this._getItemLabel(i)).join(", ")}_findIndex(e,i,o){if(o&&e){for(let r=0;r<i.length;r++)if(i[r]&&i[r][o]===e[o])return r;return-1}return i.indexOf(e)}__clearInternalValue(e=!1){!this.keepFilter||e?(this.filter="",this.$.comboBox.clear()):(this.$.comboBox.clear(),this._inputElementValue=this.filter)}__announceItem(e,i,o){const r=i?"selected":"deselected",n=this.i18n.total.replace("{count}",o||0);R(`${e} ${this.i18n[r]} ${n}`)}__removeItem(e){const i=[...this.selectedItems];i.splice(i.indexOf(e),1),this.__updateSelection(i);const o=this._getItemLabel(e);this.__announceItem(o,!1,i.length)}__selectItem(e){const i=[...this.selectedItems],o=this._findIndex(e,i,this.itemIdPath),r=this._getItemLabel(e);let n=!1;if(o!==-1){const a=this._lastFilter;if(a&&a.toLowerCase()===r.toLowerCase()){this.__clearInternalValue();return}i.splice(o,1)}else i.push(e),n=!0;this.__updateSelection(i),this.__clearInternalValue(),this.__announceItem(r,n,i.length)}__updateSelection(e){this.selectedItems=e,this._requestValidation(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}__updateTopGroup(e,i,o){e?o||(this._topGroup=[...i]):this._topGroup=[]}__createChip(e){const i=document.createElement("vaadin-multi-select-combo-box-chip");i.setAttribute("slot","chip"),i.item=e,i.disabled=this.disabled,i.readonly=this.readonly;const o=this._getItemLabel(e);return i.label=o,i.setAttribute("title",o),typeof this.itemClassNameGenerator=="function"&&(i.className=this.itemClassNameGenerator(e)),i.addEventListener("item-removed",r=>this._onItemRemoved(r)),i.addEventListener("mousedown",r=>this._preventBlur(r)),i}__getOverflowWidth(){const e=this._overflow;e.style.visibility="hidden",e.removeAttribute("hidden");const i=e.getAttribute("count");e.setAttribute("count","99");const o=getComputedStyle(e),r=e.clientWidth+parseInt(o.marginInlineStart);return e.setAttribute("count",i),e.setAttribute("hidden",""),e.style.visibility="",r}__updateChips(){if(!this._inputField||!this.inputElement)return;this._chips.forEach(a=>{a.remove()});const e=[...this.selectedItems],i=this._inputField.$.wrapper.clientWidth,o=parseInt(getComputedStyle(this.inputElement).flexBasis);let r=i-o;e.length>1&&(r-=this.__getOverflowWidth());const n=parseInt(getComputedStyle(this).getPropertyValue("--_chip-min-width"));if(this.autoExpandHorizontally){const a=[];for(let c=e.length-1,h=null;c>=0;c--){const u=this.__createChip(e[c]);this.insertBefore(u,h),h=u,a.unshift(u)}const l=[],d=this._inputField.$.wrapper.clientWidth-this.$.chips.clientWidth;if(!this.autoExpandVertically&&d<o){for(;a.length>1;){a.pop().remove(),l.unshift(e.pop());const h=l.length>0?o+this.__getOverflowWidth():o;if(this._inputField.$.wrapper.clientWidth-this.$.chips.clientWidth>=h)break}a.length===1&&(a[0].style.maxWidth=`${Math.max(n,r)}px`)}this._overflowItems=l;return}for(let a=e.length-1,l=null;a>=0;a--){const d=this.__createChip(e[a]);if(this.insertBefore(d,l),!this.autoExpandVertically&&this.$.chips.clientWidth>r)if(l===null)d.style.maxWidth=`${Math.max(n,r)}px`;else{d.remove();break}e.pop(),l=d}this._overflowItems=e}__updateOverflowChip(e,i,o,r){if(e){const n=i.length;e.label=`${n}`,e.setAttribute("count",`${n}`),e.setAttribute("title",this._mergeItemLabels(i)),e.toggleAttribute("hidden",n===0),e.disabled=o,e.readonly=r}}_onClearButtonTouchend(e){e.preventDefault(),e.stopPropagation(),this.clear()}_onClearButtonClick(e){e.stopPropagation(),this.clear()}_onChange(e){e.stopPropagation()}_onEscape(e){this.clearButtonVisible&&this.selectedItems&&this.selectedItems.length&&(e.stopPropagation(),this.selectedItems=[])}_onKeyDown(e){super._onKeyDown(e);const i=this._chips;if(!this.readonly&&i.length>0)switch(e.key){case"Backspace":this._onBackSpace(i);break;case"ArrowLeft":this._onArrowLeft(i,e);break;case"ArrowRight":this._onArrowRight(i,e);break;default:this._focusedChipIndex=-1;break}}_onArrowLeft(e,i){if(this.inputElement.selectionStart!==0)return;const o=this._focusedChipIndex;o!==-1&&i.preventDefault();let r;this.__isRTL?o===e.length-1?r=-1:o>-1&&(r=o+1):o===-1?r=e.length-1:o>0&&(r=o-1),r!==void 0&&(this._focusedChipIndex=r)}_onArrowRight(e,i){if(this.inputElement.selectionStart!==0)return;const o=this._focusedChipIndex;o!==-1&&i.preventDefault();let r;this.__isRTL?o===-1?r=e.length-1:o>0&&(r=o-1):o===e.length-1?r=-1:o>-1&&(r=o+1),r!==void 0&&(this._focusedChipIndex=r)}_onBackSpace(e){if(this.inputElement.selectionStart!==0)return;const i=this._focusedChipIndex;i===-1?this._focusedChipIndex=e.length-1:(this.__removeItem(e[i].item),this._focusedChipIndex=-1)}_focusedChipIndexChanged(e,i){if(e>-1||i>-1){const o=this._chips;if(o.forEach((r,n)=>{r.toggleAttribute("focused",n===e)}),e>-1){const r=o[e].item,n=this._getItemLabel(r);R(`${n} ${this.i18n.focused}`)}}}_onComboBoxChange(){const e=this.$.comboBox.selectedItem;e&&this.__selectItem(e)}_onComboBoxItemSelected(e){this.__selectItem(e.detail.item)}_onCustomValueSet(e){e.preventDefault(),e.stopPropagation(),this.__clearInternalValue(!0),this.dispatchEvent(new CustomEvent("custom-value-set",{detail:e.detail,composed:!0,bubbles:!0}))}_onItemRemoved(e){this.__removeItem(e.detail.item)}_preventBlur(e){e.preventDefault()}};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */_("vaadin-multi-select-combo-box",[Xt,jd],{moduleId:"vaadin-multi-select-combo-box-styles"});class ic extends tc(P(V(y))){static get is(){return"vaadin-multi-select-combo-box"}static get template(){return C`
      <div class="vaadin-multi-select-combo-box-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-multi-select-combo-box-internal
          id="comboBox"
          items="[[items]]"
          item-id-path="[[itemIdPath]]"
          item-label-path="[[itemLabelPath]]"
          item-value-path="[[itemValuePath]]"
          disabled="[[disabled]]"
          readonly="[[readonly]]"
          auto-open-disabled="[[autoOpenDisabled]]"
          allow-custom-value="[[allowCustomValue]]"
          overlay-class="[[overlayClass]]"
          data-provider="[[dataProvider]]"
          filter="{{filter}}"
          last-filter="{{_lastFilter}}"
          loading="{{loading}}"
          size="{{size}}"
          filtered-items="[[filteredItems]]"
          selected-items="[[selectedItems]]"
          selected-items-on-top="[[selectedItemsOnTop]]"
          item-class-name-generator="[[itemClassNameGenerator]]"
          top-group="[[_topGroup]]"
          opened="{{opened}}"
          renderer="[[renderer]]"
          keep-filter="[[keepFilter]]"
          theme$="[[_theme]]"
          on-combo-box-item-selected="_onComboBoxItemSelected"
          on-change="_onComboBoxChange"
          on-custom-value-set="_onCustomValueSet"
          on-filtered-items-changed="_onFilteredItemsChanged"
        >
          <vaadin-multi-select-combo-box-container
            part="input-field"
            auto-expand-vertically="[[autoExpandVertically]]"
            readonly="[[readonly]]"
            disabled="[[disabled]]"
            invalid="[[invalid]]"
            theme$="[[_theme]]"
          >
            <slot name="overflow" slot="prefix"></slot>
            <div id="chips" part="chips" slot="prefix">
              <slot name="chip"></slot>
            </div>
            <slot name="input"></slot>
            <div
              id="clearButton"
              part="clear-button"
              slot="suffix"
              on-touchend="_onClearButtonTouchend"
              aria-hidden="true"
            ></div>
            <div id="toggleButton" class="toggle-button" part="toggle-button" slot="suffix" aria-hidden="true"></div>
          </vaadin-multi-select-combo-box-container>
        </vaadin-multi-select-combo-box-internal>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <slot name="tooltip"></slot>
    `}}v(ic);document.addEventListener("click",s=>{const t=s.composedPath().find(e=>e.hasAttribute&&e.hasAttribute("disableonclick"));t&&(t.disabled=!0)});/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */$("color",Ss);/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const sc=m`
  ${ds(Ts.cssText.replace(/,\s*:host/su,""))}
`;$("typography",sc);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Rt extends cs{constructor(t){if(super(t),this.it=yt,t.type!==$t.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===yt||t==null)return this._t=void 0,this.it=t;if(t===us)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}Rt.directiveName="unsafeHTML",Rt.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ht extends Rt{}Ht.directiveName="unsafeSVG",Ht.resultType=2;const oc=hs(Ht);/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function os(s){let t=yt;if(s){const e=s.cloneNode(!0);e.removeAttribute("id"),t=jo`${oc(e.outerHTML)}`}return t}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ue={},rs=new Set;function Bo(s,t){return(s||"").replace(`${t}:`,"")}function ns(s){return s?s.split(":")[0]||"vaadin":void 0}function as(s,t){s._icons=[...s.querySelectorAll("[id]")].reduce((e,i)=>{const o=Bo(i.id,t);return e[o]=i,e},{})}const rc=s=>class extends s{static get observedAttributes(){return["name","size"]}static get attachedIcons(){return rs}static getIconset(t){return ue[t]}static getIconSvg(t,e){const i=e||ns(t),o=this.getIconset(i);if(!t||!o)return{svg:os(null)};const r=Bo(t,i),n=o._icons[r];return{preserveAspectRatio:n?n.getAttribute("preserveAspectRatio"):null,svg:os(n),size:o.size,viewBox:n?n.getAttribute("viewBox"):null}}static register(t,e,i){if(!ue[t]){const o=document.createElement("vaadin-iconset");o.appendChild(i.content.cloneNode(!0)),ue[t]=o,as(o,t),o.size=e,o.name=t}}get name(){return this.__name}set name(t){const e=this.__name;this.__name=t,this.__nameChanged(t,e)}get size(){return this.__size!==void 0?this.__size:24}set size(t){this.__size=t}connectedCallback(){["name","size"].forEach(t=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this[t]=e}}),this.style.display="none"}attributeChangedCallback(t,e,i){t==="name"?this.name=i:t==="size"&&(this.size=i==null?null:Number(i))}__updateIcons(t){rs.forEach(e=>{t===ns(e.icon)&&e._applyIcon()})}__nameChanged(t,e){e&&delete ue[e],t&&(ue[t]=this,as(this,t),this.__updateIcons(t))}};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ro extends rc(HTMLElement){static get is(){return"vaadin-iconset"}}v(Ro);/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ho=document.createElement("template");Ho.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg"><defs>
<g id="lumo:align-center"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m83 191c0-18 13-33 29-33H721c16 0 29 15 29 33 0 18-13 33-29 34H279C263 442 250 427 250 408zM250 792c0-18 13-33 29-34H721c16 0 29 15 29 34s-13 33-29 33H279C263 825 250 810 250 792z m-83-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>
<g id="lumo:align-left"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m0 191c0-18 13-33 28-33H638c16 0 29 15 29 33 0 18-13 33-29 34H195C179 442 167 427 167 408zM167 792c0-18 13-33 28-34H638c16 0 29 15 29 34s-13 33-29 33H195C179 825 167 810 167 792z m0-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>
<g id="lumo:align-right"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m166 191c0-18 13-33 29-33H805c16 0 29 15 28 33 0 18-13 33-28 34H362C346 442 333 427 333 408zM333 792c0-18 13-33 29-34H805c16 0 29 15 28 34s-13 33-28 33H362C346 825 333 810 333 792z m-166-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>
<g id="lumo:angle-down"><path d="M283 391c-18-16-46-15-63 4-16 18-15 46 3 63l244 224c17 15 43 15 60 0l250-229c18-16 20-45 3-63-16-18-45-20-63-4l-220 203-214-198z"></path></g>
<g id="lumo:angle-left"><path d="M601 710c16 18 15 46-3 63-18 16-46 15-63-4l-224-244c-15-17-15-43 0-59l229-250c16-18 45-20 63-4 18 16 20 45 3 63l-203 220 198 215z"></path></g>
<g id="lumo:angle-right"><path d="M399 275c-16-18-15-46 3-63 18-16 46-15 63 4l224 244c15 17 15 43 0 59l-229 250c-16 18-45 20-63 4-18-16-20-45-3-63l203-220-198-215z"></path></g>
<g id="lumo:angle-up"><path d="M283 635c-18 16-46 15-63-3-16-18-15-46 3-63l244-224c17-15 43-15 60 0l250 229c18 16 20 45 3 63-16 18-45 20-63 3l-220-202L283 635z"></path></g>
<g id="lumo:arrow-down"><path d="M538 646l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166c0 0 0 0 0 0-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 646V312c0-21 17-38 38-37s38 17 37 37v334z"></path></g>
<g id="lumo:arrow-left"><path d="M375 538l111 125c14 15 12 39-3 53-15 14-39 12-53-4l-166-187c0 0 0 0 0 0-13-14-12-36 0-50l166-187c14-15 37-17 53-4 15 14 17 37 3 53L375 463h333c21 0 38 17 38 37 0 21-17 38-38 38h-333z"></path></g>
<g id="lumo:arrow-right"><path d="M625 538h-333c-21 0-38-17-38-38 0-21 17-38 38-37h333l-111-126c-14-15-12-39 3-53 15-14 39-12 53 4l166 187c13 14 13 36 0 50 0 0 0 0 0 0l-166 187c-14 15-37 17-53 4-15-14-17-37-3-53l111-125z"></path></g>
<g id="lumo:arrow-up"><path d="M538 354V688c0 21-17 38-38 37s-38-17-38-38V354l-125 112c-15 14-39 12-53-4-14-15-12-39 4-53l187-166c14-13 36-13 50 0 0 0 0 0 0 0l187 166c15 14 17 37 4 53-14 15-37 17-53 4L538 354z"></path></g>
<g id="lumo:bar-chart"><path d="M175 500h108c28 0 50 22 50 50v233c0 28-22 50-50 50H175c-28 0-50-22-50-50v-233c0-28 22-50 50-50z m33 67c-9 0-17 7-16 16v167c0 9 7 17 16 17h42c9 0 17-7 17-17v-167c0-9-7-17-17-16H208zM446 167h108c28 0 50 22 50 50v566c0 28-22 50-50 50h-108c-28 0-50-22-50-50V217c0-28 22-50 50-50z m33 66c-9 0-17 7-17 17v500c0 9 7 17 17 17h42c9 0 17-7 16-17V250c0-9-7-17-16-17h-42zM717 333h108c28 0 50 22 50 50v400c0 28-22 50-50 50h-108c-28 0-50-22-50-50V383c0-28 22-50 50-50z m33 67c-9 0-17 7-17 17v333c0 9 7 17 17 17h42c9 0 17-7 16-17v-333c0-9-7-17-16-17h-42z"></path></g>
<g id="lumo:bell"><path d="M367 675H292v-258C292 325 366 250 459 250H458V208c0-23 18-42 42-41 23 0 42 18 42 41v42h-1C634 250 708 325 708 417V675h-75v-258c0-51-41-92-91-92h-84C408 325 367 366 367 417V675z m-159 37c0-21 17-38 38-37h508c21 0 37 17 38 37 0 21-17 38-38 38H246C225 750 208 733 208 713z m230 71h125v32c0 17-14 31-32 31h-62c-17 0-32-14-31-31v-32z"></path></g>
<g id="lumo:calendar"><path d="M375 208h250v-20C625 176 634 167 646 167h41C699 167 708 176 708 188V208h74c23 0 41 19 41 42v42C823 315 804 333 782 333H218C196 333 177 315 177 292V250C177 227 196 208 218 208H292v-20C292 176 301 167 313 167h41C366 167 375 176 375 188V208zM229 375h42C283 375 292 384 292 396v41C292 449 282 458 271 458h-42C217 458 208 449 208 437v-41C208 384 218 375 229 375z m125 0h42C408 375 417 384 417 396v41C417 449 407 458 396 458h-42C342 458 333 449 333 437v-41C333 384 343 375 354 375z m125 0h42C533 375 542 384 542 396v41C542 449 532 458 521 458h-42C467 458 458 449 458 437v-41C458 384 468 375 479 375z m-250 125h42C283 500 292 509 292 521v41C292 574 282 583 271 583h-42C217 583 208 574 208 562v-41C208 509 218 500 229 500z m125 0h42C408 500 417 509 417 521v41C417 574 407 583 396 583h-42C342 583 333 574 333 562v-41C333 509 343 500 354 500z m125 0h42c12 0 21 9 21 21v41C542 574 532 583 521 583h-42C467 583 458 574 458 562v-41C458 509 468 500 479 500z m-250 125h42C283 625 292 634 292 646v41C292 699 282 708 271 708h-42C217 708 208 699 208 687v-41C208 634 218 625 229 625z m125 0h42C408 625 417 634 417 646v41C417 699 407 708 396 708h-42C342 708 333 699 333 687v-41C333 634 343 625 354 625z m125 0h42c12 0 21 9 21 21v41C542 699 532 708 521 708h-42C467 708 458 699 458 687v-41C458 634 468 625 479 625z m125-250h42C658 375 667 384 667 396v41C667 449 657 458 646 458h-42C592 458 583 449 583 437v-41C583 384 593 375 604 375z m0 125h42c12 0 21 9 21 21v41C667 574 657 583 646 583h-42C592 583 583 574 583 562v-41C583 509 593 500 604 500z m0 125h42c12 0 21 9 21 21v41C667 699 657 708 646 708h-42C592 708 583 699 583 687v-41C583 634 593 625 604 625z m125 0h42c12 0 21 9 21 21v41C792 699 782 708 771 708h-42C717 708 708 699 708 687v-41C708 634 718 625 729 625z m-500 125h42C283 750 292 759 292 771v41C292 824 282 833 271 833h-42C217 833 208 824 208 812v-41C208 759 218 750 229 750z m125 0h42C408 750 417 759 417 771v41C417 824 407 833 396 833h-42C342 833 333 824 333 812v-41C333 759 343 750 354 750z m125 0h42c12 0 21 9 21 21v41C542 824 532 833 521 833h-42C467 833 458 824 458 812v-41C458 759 468 750 479 750z m125 0h42c12 0 21 9 21 21v41C667 824 657 833 646 833h-42C592 833 583 824 583 812v-41C583 759 593 750 604 750z m125 0h42c12 0 21 9 21 21v41C792 824 782 833 771 833h-42C717 833 708 824 708 812v-41C708 759 718 750 729 750z m0-250h42c12 0 21 9 21 21v41C792 574 782 583 771 583h-42C717 583 708 574 708 562v-41C708 509 718 500 729 500z m0-125h42C783 375 792 384 792 396v41C792 449 782 458 771 458h-42C717 458 708 449 708 437v-41C708 384 718 375 729 375z"></path></g>
<g id="lumo:checkmark"><path d="M318 493c-15-15-38-15-53 0-15 15-15 38 0 53l136 136c15 15 38 15 53 0l323-322c15-15 15-38 0-53-15-15-38-15-54 0l-295 296-110-110z"></path></g>
<g id="lumo:chevron-down"><path d="M533 654l210-199c9-9 9-23 0-32C739 419 733 417 726 417H274C261 417 250 427 250 439c0 6 2 12 7 16l210 199c18 17 48 17 66 0z"></path></g>
<g id="lumo:chevron-left"><path d="M346 533l199 210c9 9 23 9 32 0 4-4 7-10 6-17V274C583 261 573 250 561 250c-6 0-12 2-16 7l-199 210c-17 18-17 48 0 66z"></path></g>
<g id="lumo:chevron-right"><path d="M654 533L455 743c-9 9-23 9-32 0C419 739 417 733 417 726V274C417 261 427 250 439 250c6 0 12 2 16 7l199 210c17 18 17 48 0 66z"></path></g>
<g id="lumo:chevron-up"><path d="M533 346l210 199c9 9 9 23 0 32-4 4-10 7-17 6H274C261 583 250 573 250 561c0-6 2-12 7-16l210-199c18-17 48-17 66 0z"></path></g>
<g id="lumo:clock"><path d="M538 489l85 85c15 15 15 38 0 53-15 15-38 15-53 0l-93-93a38 38 0 0 1-2-2C467 525 462 515 462 504V308c0-21 17-38 38-37 21 0 38 17 37 37v181zM500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265z"></path></g>
<g id="lumo:cog"><path d="M833 458l-81-18c-8-25-17-50-29-75L767 292 708 233l-72 49c-21-12-46-25-75-30L542 167h-84l-19 79c-25 8-50 17-71 30L296 233 233 296l47 69c-12 21-21 46-29 71L167 458v84l84 25c8 25 17 50 29 75L233 708 292 767l76-44c21 12 46 25 75 29L458 833h84l19-81c25-8 50-17 75-29L708 767l59-59-44-66c12-21 25-46 29-75L833 542v-84z m-333 217c-96 0-175-79-175-175 0-96 79-175 175-175 96 0 175 79 175 175 0 96-79 175-175 175z"></path></g>
<g id="lumo:cross"><path d="M445 500l-142-141c-15-15-15-40 0-56 15-15 40-15 56 0L500 445l141-142c15-15 40-15 56 0 15 15 15 40 0 56L555 500l142 141c15 15 15 40 0 56-15 15-40 15-56 0L500 555l-141 142c-15 15-40 15-56 0-15-15-15-40 0-56L445 500z"></path></g>
<g id="lumo:download"><path d="M538 521l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166a38 38 0 0 1 0 0c-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 521V188c0-21 17-38 38-38s38 17 37 38v333zM758 704c0-21 17-38 38-37 21 0 38 17 37 37v92c0 21-17 38-37 37H204c-21 0-38-17-37-37v-92c0-21 17-38 37-37s38 17 38 37v54h516v-54z"></path></g>
<g id="lumo:drag-handle"><path d="M458 292c0 35-28 63-62 62C361 354 333 326 333 292s28-63 63-63c35 0 63 28 62 63Zm0 208c0 35-28 63-62 62-35 0-63-28-63-62s28-63 63-63c35 0 63 28 62 63Zm0 208c0 35-28 63-62 63-35 0-63-28-63-63s28-63 63-62c35 0 63 28 62 62Zm209-416c0 35-28 63-63 62S542 326 542 292s28-63 62-63S667 257 667 292Zm0 208c0 35-28 63-63 62S542 535 542 500s28-63 62-63 63 28 63 63Zm0 208c0 35-28 63-63 63S542 743 542 708s28-63 62-62 63 28 63 62Z"></path></g>
<g id="lumo:dropdown"><path d="M317 393c-15-14-39-13-53 3-14 15-13 39 3 53l206 189c14 13 36 13 50 0l210-193c15-14 17-38 3-53-14-15-38-17-53-3l-185 171L317 393z"></path></g>
<g id="lumo:edit"><path d="M673 281l62 56-205 233c-9 10-38 24-85 39a8 8 0 0 1-5 0c-4-1-7-6-6-10l0 0c14-47 25-76 35-86l204-232z m37-42l52-59c15-17 41-18 58-2 17 16 18 42 3 59L772 295l-62-56zM626 208l-67 75h-226C305 283 283 306 283 333v334C283 695 306 717 333 717h334c28 0 50-22 50-50v-185L792 398v269C792 736 736 792 667 792H333C264 792 208 736 208 667V333C208 264 264 208 333 208h293z"></path></g>
<g id="lumo:error"><path d="M500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265zM479 292h42c12 0 21 9 20 20l-11 217c0 8-6 13-13 13h-34c-7 0-13-6-13-13l-11-217C459 301 468 292 479 292zM483 608h34c12 0 21 9 20 21v33c0 12-9 21-20 21h-34c-12 0-21-9-21-21v-33c0-12 9-21 21-21z"></path></g>
<g id="lumo:eye"><path d="M500 750c-187 0-417-163-417-250s230-250 417-250 417 163 417 250-230 250-417 250z m-336-231c20 22 47 46 78 69C322 644 411 678 500 678s178-34 258-90c31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69C678 356 589 322 500 322s-178 34-258 90c-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19zM500 646c-81 0-146-65-146-146s65-146 146-146 146 65 146 146-65 146-146 146z m0-75c39 0 71-32 71-71 0-39-32-71-71-71-39 0-71 32-71 71 0 39 32 71 71 71z"></path></g>
<g id="lumo:eye-disabled"><path d="M396 735l60-60c15 2 30 3 44 3 89 0 178-34 258-90 31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69-8-5-15-11-23-15l50-51C862 397 917 458 917 500c0 87-230 250-417 250-34 0-69-5-104-15zM215 654C138 603 83 542 83 500c0-87 230-250 417-250 34 0 69 5 104 15l-59 60c-15-2-30-3-45-3-89 0-178 34-258 90-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19 20 22 47 46 78 69 8 5 16 11 24 16L215 654z m271-9l159-159c0 5 1 9 1 14 0 81-65 146-146 146-5 0-9 0-14-1z m-131-131C354 510 354 505 354 500c0-81 65-146 146-146 5 0 10 0 14 1l-159 159z m-167 257L780 179c12-12 32-12 44 0 12 12 12 32 0 44L232 815c-12 12-32 12-44 0s-12-32 0-44z"></path></g>
<g id="lumo:menu"><path d="M167 292c0-23 19-42 41-42h584C815 250 833 268 833 292c0 23-19 42-41 41H208C185 333 167 315 167 292z m0 208c0-23 19-42 41-42h584C815 458 833 477 833 500c0 23-19 42-41 42H208C185 542 167 523 167 500z m0 208c0-23 19-42 41-41h584C815 667 833 685 833 708c0 23-19 42-41 42H208C185 750 167 732 167 708z"></path></g>
<g id="lumo:minus"><path d="M261 461c-22 0-39 18-39 39 0 22 18 39 39 39h478c22 0 39-18 39-39 0-22-18-39-39-39H261z"></path></g>
<g id="lumo:ordered-list"><path d="M138 333V198H136l-43 28v-38l45-31h45V333H138z m-61 128c0-35 27-59 68-59 39 0 66 21 66 53 0 20-11 37-43 64l-29 27v2h74V583H80v-30l55-52c26-24 32-33 33-43 0-13-10-22-24-22-15 0-26 10-26 25v1h-41v-1zM123 759v-31h21c15 0 25-8 25-21 0-13-10-21-25-21-15 0-26 9-26 23h-41c1-34 27-56 68-57 39 0 66 20 66 49 0 20-14 36-33 39v3c24 3 40 19 39 41 0 32-30 54-73 54-41 0-69-22-70-57h43c1 13 11 22 28 22 16 0 27-9 27-22 0-14-10-22-28-22h-21zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>
<g id="lumo:phone"><path d="M296 208l42-37c17-15 44-13 58 4a42 42 0 0 1 5 7L459 282c12 20 5 45-15 57l-7 4c-17 10-25 30-19 48l20 66a420 420 0 0 0 93 157l41 45c13 14 35 17 51 8l7-5c20-12 45-5 57 16L745 777c12 20 5 45-15 57a42 42 0 0 1-8 4l-52 17c-61 21-129 4-174-43l-50-52c-81-85-141-189-175-302l-24-78c-19-62 0-129 49-172z"></path></g>
<g id="lumo:photo"><path d="M208 167h584c69 0 125 56 125 125v416c0 69-56 125-125 125H208c-69 0-125-56-125-125V292c0-69 56-125 125-125z m584 75H208c-28 0-50 22-50 50v416c0 28 22 50 50 50h584c28 0 50-22 50-50V292c0-28-22-50-50-50zM239 740l167-167c12-12 31-14 45-6l73 43 172-201c13-15 34-18 50-7l95 67v92l-111-78-169 199c-12 14-32 17-47 8l-76-43-111 111H229c2-7 5-13 10-18zM458 427C458 490 407 542 344 542S229 490 229 427c0-63 51-115 115-115S458 364 458 427z m-62 0C396 398 373 375 344 375S292 398 292 427c0 29 23 52 52 52s52-23 52-52z"></path></g>
<g id="lumo:play"><path d="M689 528l-298 175c-13 8-34 8-48 0-6-4-10-9-10-14V311C333 300 348 292 367 292c9 0 17 2 24 5l298 175c26 15 26 40 0 56z"></path></g>
<g id="lumo:plus"><path d="M461 461H261c-22 0-39 18-39 39 0 22 18 39 39 39h200v200c0 22 18 39 39 39 22 0 39-18 39-39v-200h200c22 0 39-18 39-39 0-22-18-39-39-39h-200V261c0-22-18-39-39-39-22 0-39 18-39 39v200z"></path></g>
<g id="lumo:redo"><path d="M290 614C312 523 393 458 491 458c55 0 106 22 144 57l-88 88c-3 3-5 7-5 11 0 8 6 15 15 15l193-5c17 0 31-15 31-32l5-192c0-4-1-8-4-11-6-6-16-6-22 0l-66 67C641 406 570 375 491 375c-136 0-248 90-281 215-1 2-1 5-1 8-8 44 45 68 73 32 4-5 7-11 8-16z"></path></g>
<g id="lumo:reload"><path d="M500 233V137c0-9 7-16 15-16 4 0 8 2 10 4l133 140c12 12 12 32 0 45l-133 140c-6 6-15 6-21 0C502 447 500 443 500 438V308c-117 0-212 95-212 213 0 117 95 212 212 212 117 0 212-95 212-212 0-21 17-38 38-38s38 17 37 38c0 159-129 288-287 287-159 0-288-129-288-287 0-159 129-288 288-288z"></path></g>
<g id="lumo:resize-handle"><path d="M772 311c12 12 12 32 0 44L355 772c-12 12-32 12-44 0s-12-32 0-44L728 311c12-12 32-12 44 0Zm0 188c12 12 12 32 0 44l-229 229c-12 12-32 12-44 0-12-12-12-32 0-44l229-229c12-12 32-12 44 0Zm0 187c12 12 12 32 0 44l-42 42c-12 12-32 12-44 0-12-12-12-32 0-44l42-42c12-12 32-12 44 0Z" fill-rule="evenodd" clip-rule="evenodd"></path></g>
<g id="lumo:search"><path d="M662 603l131 131c16 16 16 42 0 59-16 16-43 16-59 0l-131-131C562 691 512 708 458 708c-138 0-250-112-250-250 0-138 112-250 250-250 138 0 250 112 250 250 0 54-17 104-46 145zM458 646c104 0 188-84 188-188S562 271 458 271 271 355 271 458s84 188 187 188z"></path></g>
<g id="lumo:undo"><path d="M710 614C688 523 607 458 509 458c-55 0-106 22-144 57l88 88c3 3 5 7 5 11 0 8-6 15-15 15l-193-5c-17 0-31-15-31-32L214 400c0-4 1-8 4-11 6-6 16-6 22 0l66 67C359 406 430 375 509 375c136 0 248 90 281 215 1 2 1 5 1 8 8 44-45 68-73 32-4-5-7-11-8-16z"></path></g>
<g id="lumo:unordered-list"><path d="M146 325c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>
<g id="lumo:upload"><path d="M454 271V604c0 21-17 38-37 38s-38-17-38-38V271L254 382c-15 14-39 12-53-3-14-15-12-39 3-53L391 160c14-13 36-13 51-1 0 0 0 0 0 1l187 166c15 14 17 37 3 53-14 15-37 17-53 3L454 271zM675 704c0-21 17-38 37-37 21 0 38 17 38 37v92c0 21-17 38-38 37H121c-21 0-38-17-38-37v-92c0-21 17-38 38-37s38 17 37 37v54h517v-54z"></path></g>
<g id="lumo:user"><path d="M500 500c-69 0-125-56-125-125s56-125 125-125 125 56 125 125-56 125-125 125z m-292 292c0-115 131-208 292-209s292 93 292 209H208z"></path></g>
</defs></svg>`;Ro.register("lumo",1e3,Ho);function nc(s,t){switch(t.type){case"stateKeyChanged":const{value:e}=t;return{...s,key:e};default:return s}}const ac=()=>{};class lc extends HTMLElement{#e=void 0;#s=!1;#i=void 0;#t=Object.create(null);#o=new Map;#r=new Map;#n=ac;#d=new Map;#c;#a;#l;constructor(){super(),this.#c={useState:this.useState.bind(this),useCustomEvent:this.useCustomEvent.bind(this),useContent:this.useContent.bind(this)},this.#a=this.#u.bind(this),this.#p()}async connectedCallback(){this.#i=ne.createElement(this.#a),!(!this.dispatchEvent(new CustomEvent("flow-portal-add",{bubbles:!0,cancelable:!0,composed:!0,detail:{children:this.#i,domNode:this}}))||this.#e)&&(await this.#l,this.#e=qo.createRoot(this),this.#h(),this.#e.render(this.#i))}addReadyCallback(t,e){this.#d.set(t,e)}async disconnectedCallback(){this.#e?(this.#l=Promise.resolve(),await this.#l,this.#e.unmount(),this.#e=void 0):this.dispatchEvent(new CustomEvent("flow-portal-remove",{bubbles:!0,cancelable:!0,composed:!0,detail:{children:this.#i,domNode:this}})),this.#s=!1,this.#i=void 0}useState(t,e){if(this.#o.has(t))return[this.#t[t],this.#o.get(t)];const i=this[t]??e;this.#t[t]=i,Object.defineProperty(this,t,{enumerable:!0,get(){return this.#t[t]},set(n){this.#t[t]=n,this.#n({type:"stateKeyChanged",key:t,value:i})}});const o=this.useCustomEvent(`${t}-changed`,{detail:{value:i}}),r=n=>{this.#t[t]=n,o({value:n}),this.#n({type:"stateKeyChanged",key:t,value:n})};return this.#o.set(t,r),[i,r]}useCustomEvent(t,e={}){if(!this.#r.has(t)){const i=o=>{const r=o===void 0?e:{...e,detail:o},n=new CustomEvent(t,r);return this.dispatchEvent(n)};return this.#r.set(t,i),i}return this.#r.get(t)}useContent(t){return ne.useEffect(()=>{this.#d.get(t)?.()},[]),ne.createElement("flow-content-container",{name:t,style:{display:"contents"}})}#h(){this.#s||!this.#e||(this.#e.render(ne.createElement(this.#a)),this.#s=!0)}#u(){const[t,e]=ne.useReducer(nc,this.#t);return this.#t=t,this.#n=e,this.render(this.#c)}#p(){let t=window.Vaadin||{};t.developmentMode&&(t.registrations=t.registrations||[],t.registrations.push({is:"ReactAdapterElement",version:"24.7.6"}))}}class dc extends lc{async connectedCallback(){await super.connectedCallback(),this.style.display="contents"}render(){return Wo.jsx(Go,{})}}customElements.define("react-router-outlet",dc);const cc=s=>Promise.resolve(0);window.Vaadin=window.Vaadin||{};window.Vaadin.Flow=window.Vaadin.Flow||{};window.Vaadin.Flow.loadOnDemand=cc;window.Vaadin.Flow.resetFocus=()=>{let s=document.activeElement;for(;s&&s.shadowRoot;)s=s.shadowRoot.activeElement;return!s||s.blur()||s.focus()||!0};
