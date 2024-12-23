import { i as c, G as f, x as v, e as a } from "./styles-DhFvdPhm.js";
const u = c`:host{color:var(--gup-color-content-secondary);display:block}`;
var _ = Object.defineProperty, i = Object.getOwnPropertyDescriptor, m = (p, e, s, o) => {
  for (var r = o > 1 ? void 0 : o ? i(e, s) : e, t = p.length - 1, l; t >= 0; t--)
    (l = p[t]) && (r = (o ? l(e, s, r) : l(r)) || r);
  return o && r && _(e, s, r), r;
};
let n = class extends f {
  render() {
    return v`
      <slot></slot>
    `;
  }
};
n.styles = u;
n = m([
  a("gup-form-hint")
], n);
export {
  n as FormHint
};
