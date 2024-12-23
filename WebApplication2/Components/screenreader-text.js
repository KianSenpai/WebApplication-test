import { i as c, G as a, x as l, e as x } from "./styles-DhFvdPhm.js";
const d = c`:host{--comment: "screenreader-text mixin";position:absolute;overflow:hidden;clip:rect(0 0 0 0);height:1px;width:1px;margin:-1px;padding:0;border:none;white-space:nowrap;--comment-end: "screenreader-text mixin"}`;
var m = Object.defineProperty, f = Object.getOwnPropertyDescriptor, h = (i, r, n, t) => {
  for (var e = t > 1 ? void 0 : t ? f(r, n) : r, s = i.length - 1, o; s >= 0; s--)
    (o = i[s]) && (e = (t ? o(r, n, e) : o(e)) || e);
  return t && e && m(r, n, e), e;
};
let p = class extends a {
  render() {
    return l`
      <slot></slot>
    `;
  }
};
p.styles = d;
p = h([
  x("gup-screenreader-text")
], p);
export {
  p as ScreenreaderText
};
