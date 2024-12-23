import { i as d, G as c, x as i, e as g } from "./styles-DhFvdPhm.js";
import { n as u } from "./property-DJzm_oB9.js";
import { H as v } from "./slot-controller-BinWfe2f.js";
import "./icon.js";
const f = d`:host{--color: var(--gup-color-content-primary);display:block}.inner{display:flex;flex-direction:column;gap:var(--gup-spacing-between-text);color:var(--color);position:relative}:host([appearance="default"]) .inner{padding-block-start:var(--gup-padding-sm);padding-inline-end:0;padding-block-end:var(--gup-padding-sm);padding-inline-start:var(--gup-padding-lg);border-inline-start:6px solid var(--gup-color-brand-high)}:host([appearance="background"]) .inner{padding:var(--gup-padding-md);background:var(--gup-color-background-overcanvas);border-radius:var(--gup-radius-card)}:host([appearance="border"]) .inner{padding:var(--gup-padding-md);border:1px solid var(--gup-color-border-low);border-radius:var(--gup-radius-card)}.footer{color:var(--gup-color-content-secondary)}.header{display:flex;align-items:flex-start;gap:calc(var(--unit) * 2);font-weight:var(--font-weight-base-beta)}.icon{--gup-icon--fill-color: var(--color);flex-shrink:0}`;
var h = Object.defineProperty, m = Object.getOwnPropertyDescriptor, p = (s, o, t, e) => {
  for (var r = e > 1 ? void 0 : e ? m(o, t) : o, n = s.length - 1, l; n >= 0; n--)
    (l = s[n]) && (r = (e ? l(o, t, r) : l(r)) || r);
  return e && r && h(o, t, r), r;
};
let a = class extends c {
  constructor() {
    super(...arguments), this.appearance = "default", this.hasSlotController = new v(this, "title", "footer");
  }
  render() {
    return i`
      <div class="inner">
        ${this.hasSlotController.test("title") ? i`
            <div class="header">
              <gup-icon class="icon" icon-name="format-quote"
              width="24" height="24"></gup-icon>
              <h2 class="title">
                <slot name="title"></slot>
              </h2>
            </div>
          ` : ""}
        <div class="content"><slot></slot></div>
        ${this.hasSlotController.test("footer") ? i`<div class="footer"><slot name="footer"></slot></div>` : ""}
      </div>
    `;
  }
};
a.styles = f;
p([
  u({ reflect: !0 })
], a.prototype, "appearance", 2);
a = p([
  g("gup-callout")
], a);
export {
  a as Callout
};
