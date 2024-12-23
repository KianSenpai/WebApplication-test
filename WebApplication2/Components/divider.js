import { i as n, G as i, x as b, e as v } from "./styles-DhFvdPhm.js";
import { n as c } from "./property-DJzm_oB9.js";
const u = n`:host{--border-color: var(--gup-color-border-medium);display:flex;flex-direction:column;width:100%;border-block-end:1px solid var(--border-color);padding-block-end:var(--gap)}:host([appearance="secondary"]){--border-color: var(--gup-color-border-low)}:host([appearance="inverse"]){--border-color: var(--gup-color-border-inverted-medium)}:host([location="top"]){border-block-start:1px solid var(--border-color);padding-block-start:var(--gap);border-block-end:none}:host([location="top-and-bottom"]){border-block:1px solid var(--border-color);padding-block:var(--gap)}`;
var g = Object.defineProperty, m = Object.getOwnPropertyDescriptor, p = (e, t, l, a) => {
  for (var o = a > 1 ? void 0 : a ? m(t, l) : t, d = e.length - 1, s; d >= 0; d--)
    (s = e[d]) && (o = (a ? s(t, l, o) : s(o)) || o);
  return a && o && g(t, l, o), o;
};
let r = class extends i {
  constructor() {
    super(...arguments), this.appearance = "default", this.location = "bottom", this.gap = 4;
  }
  updated(e) {
    e.has("gap") && this.style.setProperty("--gap", `calc(${this.gap} * var(--unit))`);
  }
  render() {
    return b`
      <slot></slot>
    `;
  }
};
r.styles = u;
p([
  c()
], r.prototype, "appearance", 2);
p([
  c()
], r.prototype, "location", 2);
p([
  c({ type: Number })
], r.prototype, "gap", 2);
r = p([
  v("gup-divider")
], r);
export {
  r as Divider
};
