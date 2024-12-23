import { i as l, G as i, x as n, e as u } from "./styles-DhFvdPhm.js";
import "./track.js";
import "./icon.js";
const v = l`:host{display:flex;flex-direction:column;gap:var(--gup-padding-md);border:1px solid var(--gup-color-border-low);padding:var(--gup-padding-md);border-radius:var(--gup-radius-card)}`;
var g = Object.defineProperty, c = Object.getOwnPropertyDescriptor, f = (d, e, p, o) => {
  for (var r = o > 1 ? void 0 : o ? c(e, p) : e, s = d.length - 1, t; s >= 0; s--)
    (t = d[s]) && (r = (o ? t(e, p, r) : t(r)) || r);
  return o && r && g(e, p, r), r;
};
let a = class extends i {
  render() {
    return n`
      <slot></slot>
    `;
  }
};
a.styles = v;
a = f([
  u("gup-data-sheet")
], a);
export {
  a as DataSheet
};
