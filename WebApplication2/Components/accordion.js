import { G as l, x as f, e as v } from "./styles-DhFvdPhm.js";
var _ = Object.defineProperty, u = Object.getOwnPropertyDescriptor, a = (n, e, p, o) => {
  for (var r = o > 1 ? void 0 : o ? u(e, p) : e, s = n.length - 1, t; s >= 0; s--)
    (t = n[s]) && (r = (o ? t(e, p, r) : t(r)) || r);
  return o && r && _(e, p, r), r;
};
let c = class extends l {
  render() {
    return f`<slot></slot>`;
  }
};
c = a([
  v("gup-accordion")
], c);
export {
  c as Accordion
};
