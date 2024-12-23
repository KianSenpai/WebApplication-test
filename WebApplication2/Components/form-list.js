import { i as f, G as i, x as a, e as c } from "./styles-DhFvdPhm.js";
const m = f`:host{display:flex;flex-direction:column;gap:var(--gup-spacing-between-form-fields)}`;
var u = Object.defineProperty, v = Object.getOwnPropertyDescriptor, _ = (n, r, t, s) => {
  for (var e = s > 1 ? void 0 : s ? v(r, t) : r, o = n.length - 1, l; o >= 0; o--)
    (l = n[o]) && (e = (s ? l(r, t, e) : l(e)) || e);
  return s && e && u(r, t, e), e;
};
let p = class extends i {
  render() {
    return a`
      <slot></slot>
    `;
  }
};
p.styles = m;
p = _([
  c("gup-form-list")
], p);
export {
  p as FormList
};
