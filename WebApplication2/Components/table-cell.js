import { i as n, G as c, x as h, e as d } from "./styles-DhFvdPhm.js";
import { n as b } from "./property-DJzm_oB9.js";
const u = n`:host{display:table-cell;height:100%;border-bottom:1px solid var(--gup-color-border-low)}.wrapper{padding-block:var(--gup-component-3);padding-inline-end:var(--gup-component-7);min-width:60px;color:var(--gup-color-content-primary);text-align:start;text-wrap:wrap}:host([type="header"]) .wrapper,:host([type="rowheader"]) .wrapper{font-weight:var(--font-weight-base-beta)}`;
var w = Object.defineProperty, v = Object.getOwnPropertyDescriptor, i = (a, t, p, r) => {
  for (var e = r > 1 ? void 0 : r ? v(t, p) : t, l = a.length - 1, s; l >= 0; l--)
    (s = a[l]) && (e = (r ? s(t, p, e) : s(e)) || e);
  return r && e && w(t, p, e), e;
};
let o = class extends c {
  constructor() {
    super(...arguments), this.type = "body";
  }
  connectedCallback() {
    this.hasAttribute("role") || (this.type === "header" ? this.setAttribute("role", "columnheader") : this.type === "rowheader" ? this.setAttribute("role", "rowheader") : this.setAttribute("role", "cell")), super.connectedCallback();
  }
  render() {
    return h`
      <div class="wrapper">
        <slot></slot>
      </div>
    `;
  }
};
o.styles = u;
i([
  b()
], o.prototype, "type", 2);
o = i([
  d("gup-table-cell")
], o);
export {
  o as TableCell
};
