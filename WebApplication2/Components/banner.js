import { i as u, G as g, x as p, e as d } from "./styles-DhFvdPhm.js";
import { n as a } from "./property-DJzm_oB9.js";
import "./icon.js";
import "./button.js";
const h = u`:host{--gup-banner--width: 600px;--border-color: var(--gup-color-neutral-low);--icon-color: var(--gup-color-neutral-medium);--background-color: transparent;--close-color: var(--gup-color-brand-xhigh);display:block;max-width:var(--gup-banner--width);padding:var(--gup-padding-md);border-radius:var(--gup-radius-card);border:1px solid var(--border-color);color:var(--gup-color-content-primary);background-color:var(--background-color);line-height:var(--line-height-500);text-wrap:pretty}.inner{position:relative}.track{gap:var(--gup-spacing-between-text)}:host(:not([hide-icon])) .track{display:grid;grid-template-areas:"icon title" ". body";grid-template-columns:0fr auto;grid-template-rows:auto auto}:host([hide-icon]) .track{display:flex;flex-direction:column}.header{display:flex;align-items:space-between}.title{grid-area:title;display:flex;gap:var(--component-4, 12px);font-weight:var(--font-weight-base-beta);padding-inline-end:24px}.icon{--gup-icon--fill-color: var(--icon-color);grid-area:icon}.content{grid-area:body}.close-button{position:absolute;inset-inline-end:0;inset-block-start:0;display:flex;justify-content:center;align-items:center}.close{--gup-icon--fill-color: var(--close-color)}::slotted([slot="action-buttons"]){display:block;margin-top:var(--gup-spacing-content-to-cta)}:host([type="success"]){--border-color: var(--gup-color-positive-low);--icon-color: var(--gup-color-positive-medium);--background-color: var(--gup-color-positive-xlow)}:host([type="warning"]){--border-color: var(--gup-color-warning-low);--icon-color: var(--gup-color-warning-contrast);--background-color: var(--gup-color-warning-xlow)}:host([type="warning"]) .icon{position:relative;z-index:2;padding-block-start:8px;margin-inline:6px}:host([type="warning"]) .icon:before{content:"";position:absolute;top:calc(50% + 8px);inset-inline-start:50%;transform:translate(-50%,-50%);width:28px;height:28px;background-color:var(--gup-color-warning-medium);border-radius:var(--gup-radius-component-full);z-index:-1}:host([type="error"]){--border-color: var(--gup-color-negative-low);--icon-color: var(--gup-color-negative-medium);--background-color: var(--gup-color-negative-xlow)}:host([appearance="filled"]){--border-color: transparent;--icon-color: var(--gup-color-neutral-contrast);--background-color: var(--gup-color-neutral-high);--close-color: var(--gup-color-neutral-contrast);color:var(--gup-color-content-inverted-primary)}:host([appearance="filled"]):host([type="success"]){--icon-color: var(--gup-color-neutral-contrast);--background-color: var(--gup-color-positive-high);color:var(--gup-color-content-inverted-primary)}:host([appearance="filled"]):host([type="warning"]){--icon-color: var(--gup-color-warning-high);--background-color: var(--gup-color-warning-low);--close-color: var(--gup-color-brand-xhigh);color:var(--gup-color-content-primary)}:host([appearance="filled"]):host([type="error"]){--icon-color: var(--gup-color-neutral-contrast);--background-color: var(--gup-color-negative-high);color:var(--gup-color-content-inverted-primary)}`;
var v = Object.defineProperty, b = Object.getOwnPropertyDescriptor, n = (e, r, c, i) => {
  for (var t = i > 1 ? void 0 : i ? b(r, c) : r, l = e.length - 1, s; l >= 0; l--)
    (s = e[l]) && (t = (i ? s(r, c, t) : s(t)) || t);
  return i && t && v(r, c, t), t;
};
let o = class extends g {
  constructor() {
    super(...arguments), this.type = "neutral", this.appearance = "outline", this.closeLabel = "Close", this.showCloseButton = !1, this.hideIcon = !1;
  }
  onClick(e) {
    this.dispatchEvent(new CustomEvent("gup-close", e));
  }
  render() {
    const e = this.type === "neutral" ? "info" : this.type === "warning" ? "priority-high" : this.type === "success" ? "check-circle" : "cancel", r = this.type === "warning" ? 16 : 28;
    return p`
      <div class="inner">
        ${this.showCloseButton ? p`
              <button class="close-button" @click="${this.onClick}" aria-label="${this.closeLabel}" title="${this.closeLabel}">
                <gup-icon class="close" icon-name="close" height="24" width="24"></gup-icon>
              </button>` : ""}
        <div class="track">
          ${this.hideIcon ? "" : p`<gup-icon class="icon" icon-name="${e}" height="${r}" width="${r}"></gup-icon>`}
          <h2 class="title"><slot name="title"></slot></h2>
          <div class="content">
            <div class="message">
              <slot></slot>
            </div>
            <slot name="action-buttons"></slot>
          </div>
        </div>
      </div>
    `;
  }
};
o.styles = h;
n([
  a()
], o.prototype, "type", 2);
n([
  a()
], o.prototype, "appearance", 2);
n([
  a({ attribute: "close-label", reflect: !0 })
], o.prototype, "closeLabel", 2);
n([
  a({ attribute: "show-close-button", type: Boolean, reflect: !0 })
], o.prototype, "showCloseButton", 2);
n([
  a({ attribute: "hide-icon", type: Boolean, reflect: !0 })
], o.prototype, "hideIcon", 2);
o = n([
  d("gup-banner")
], o);
export {
  o as Banner
};
