import { i as c, G as f, x as v, e as _ } from "./styles-DhFvdPhm.js";
const i = c`:host{display:block}`;
var u = Object.defineProperty, x = Object.getOwnPropertyDescriptor, a = (n, r, t, s) => {
  for (var e = s > 1 ? void 0 : s ? x(r, t) : r, o = n.length - 1, l; o >= 0; o--)
    (l = n[o]) && (e = (s ? l(r, t, e) : l(e)) || e);
  return s && e && u(r, t, e), e;
};
let p = class extends f {
  render() {
    return v`
      <slot></slot>
    `;
  }
};
p.styles = i;
p = a([
  _("gup-rich-text")
], p);
export {
  p as RichText
};
