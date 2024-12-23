import { i as l, G as a, x as d, e as h } from "./styles-DhFvdPhm.js";
import { n as m } from "./property-DJzm_oB9.js";
const f = l`:host{position:fixed;width:100%;background-color:var(--color-blue-700);color:var(--color-grey-0);padding:calc(var(--unit) * 3)}:host(:not(:focus-within)){--comment: "screenreader-text mixin";position:absolute;overflow:hidden;clip:rect(0 0 0 0);height:1px;width:1px;margin:-1px;padding:0;border:none;white-space:nowrap;--comment-end: "screenreader-text mixin"}.link{color:currentColor;padding-bottom:2px}`;
var u = Object.defineProperty, x = Object.getOwnPropertyDescriptor, c = (p, r, n, o) => {
  for (var e = o > 1 ? void 0 : o ? x(r, n) : r, i = p.length - 1, s; i >= 0; i--)
    (s = p[i]) && (e = (o ? s(r, n, e) : s(e)) || e);
  return o && e && u(r, n, e), e;
};
let t = class extends a {
  constructor() {
    super(...arguments), this.href = "#main-content";
  }
  render() {
    return d`
      <a class="link" href=${this.href}><slot></slot></a>
    `;
  }
};
t.styles = f;
c([
  m()
], t.prototype, "href", 2);
t = c([
  h("gup-skip-link")
], t);
export {
  t as SkipLink
};
