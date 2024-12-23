import { i as l, G as u, x as c, e as h } from "./styles-DhFvdPhm.js";
import { n as a } from "./property-DJzm_oB9.js";
const f = l`:host{display:block;padding:calc(var(--unit) * 3)}:host([is-hidden]){display:none}`;
var v = Object.defineProperty, b = Object.getOwnPropertyDescriptor, p = (d, s, i, r) => {
  for (var e = r > 1 ? void 0 : r ? b(s, i) : s, n = d.length - 1, o; n >= 0; n--)
    (o = d[n]) && (e = (r ? o(s, i, e) : o(e)) || e);
  return r && e && v(s, i, e), e;
};
let t = class extends u {
  constructor() {
    super(...arguments), this.isHidden = !1, this.index = 0;
  }
  render() {
    return c`
      <div id="panel-${this.index}" role="tabpanel" aria-hidden="${this.isHidden}">
        <slot></slot>
      </div>
    `;
  }
};
t.styles = f;
p([
  a({ type: Boolean, reflect: !0, attribute: "is-hidden" })
], t.prototype, "isHidden", 2);
p([
  a({ type: Number })
], t.prototype, "index", 2);
t = p([
  h("gup-tab-panel")
], t);
export {
  t as TabPanel
};
