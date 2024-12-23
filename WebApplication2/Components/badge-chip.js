import { i as u, G as s, x as p, A as h, e as v } from "./styles-DhFvdPhm.js";
import { n as g } from "./property-DJzm_oB9.js";
import "./avatar.js";
const d = u`:host{display:flex;min-height:var(--gup-icon-md);padding:0 var(--gup-component-3);justify-content:center;align-items:center;gap:var(--gup-component-3);border-radius:calc(var(--gup-icon-md) / 2);line-height:var(--line-height-500);font-size:var(--font-size-300)}:host([has-thumbnail]){padding:var(--gup-component-0) var(--gup-component-3) var(--gup-component-0) var(--gup-component-1)}:host([with-icon-only]){padding:0;width:var(--gup-component-7);height:var(--gup-component-7)}:host([appearance="neutral"]){border:1px solid var(--gup-color-neutral-low);background:var(--gup-color-neutral-contrast);color:var(--gup-color-neutral-high);--gup-icon--fill-color: var(--gup-color-neutral-high)}:host([appearance="neutral"]):host([is-filled]){background:var(--gup-color-neutral-medium);color:var(--gup-color-negative-contrast);--gup-icon--fill-color: var(--gup-color-negative-contrast)}:host([appearance="positive"]){border:1px solid var(--gup-color-positive-low);background:var(--gup-color-positive-xlow);color:var(--gup-color-positive-xhigh);--gup-icon--fill-color: var(--gup-color-positive-high)}:host([appearance="positive"]):host([is-filled]){background:var(--gup-color-positive-high);color:var(--gup-color-negative-contrast);--gup-icon--fill-color: var(--gup-color-negative-contrast)}:host([appearance="warning"]){border:1px solid var(--gup-color-warning-low);background:var(--gup-color-warning-xlow);color:var(--gup-color-warning-xhigh);--gup-icon--fill-color: var(--gup-color-warning-high)}:host([appearance="warning"]):host([is-filled]){background:var(--gup-color-warning-low);color:var(--gup-color-warning-xhigh);--gup-icon--fill-color: var(--gup-color-warning-xhigh)}:host([appearance="negative"]){border:1px solid var(--gup-color-negative-low);background:var(--gup-color-negative-xlow);color:var(--gup-color-negative-xhigh);--gup-icon--fill-color: var(--gup-color-negative-high)}:host([appearance="negative"]):host([is-filled]){background:var(--gup-color-negative-high);color:var(--gup-color-negative-contrast);--gup-icon--fill-color: var(--gup-color-negative-contrast)}:host([appearance="brand"]){border:1px solid var(--gup-color-brand-low);background:var(--gup-color-brand-xlow);color:var(--gup-color-brand-xhigh);--gup-icon--fill-color: var(--gup-color-brand-high)}:host([appearance="brand"]):host([is-filled]){background:var(--gup-color-brand-high);color:var(--gup-color-negative-contrast);--gup-icon--fill-color: var(--gup-color-negative-contrast)}.thumbnail{display:flex;width:var(--gup-component-5);height:var(--gup-component-5);flex-direction:column;justify-content:center;align-items:center;border-radius:var(--gup-radius-component-full)}`;
var b = Object.defineProperty, f = Object.getOwnPropertyDescriptor, t = (a, e, l, n) => {
  for (var o = n > 1 ? void 0 : n ? f(e, l) : e, i = a.length - 1, c; i >= 0; i--)
    (c = a[i]) && (o = (n ? c(e, l, o) : c(o)) || o);
  return n && o && b(e, l, o), o;
};
let r = class extends s {
  constructor() {
    super(...arguments), this.appearance = "neutral", this.isFilled = !1, this.withIconOnly = !1;
  }
  _isThumbnailSlotUsed() {
    const a = !!this.querySelector('[slot="thumbnail"]');
    return a && this.setAttribute("has-thumbnail", ""), a;
  }
  _renderThumbnail() {
    return p`
        ${this._isThumbnailSlotUsed() ? p` <div class="thumbnail">
        <slot name="thumbnail">
        </slot>
      </div>` : h}
    `;
  }
  render() {
    return p`
      ${this._renderThumbnail()}
      <slot name="prefix"></slot>
      <slot></slot>
      <slot name="suffix"></slot>
    `;
  }
};
r.styles = d;
t([
  g({ reflect: !0 })
], r.prototype, "appearance", 2);
t([
  g({ type: Boolean, reflect: !0, attribute: "is-filled" })
], r.prototype, "isFilled", 2);
t([
  g({ type: Boolean, reflect: !0, attribute: "with-icon-only" })
], r.prototype, "withIconOnly", 2);
r = t([
  v("gup-badge-chip")
], r);
export {
  r as BadgeChip
};
