import { i as p, G as c, x as b, e as i } from "./styles-DhFvdPhm.js";
const u = p`:host{display:table-row}`;
var f = Object.defineProperty, v = Object.getOwnPropertyDescriptor, w = (n, t, s, r) => {
  for (var e = r > 1 ? void 0 : r ? v(t, s) : t, l = n.length - 1, o; l >= 0; l--)
    (o = n[l]) && (e = (r ? o(t, s, e) : o(e)) || e);
  return r && e && f(t, s, e), e;
};
let a = class extends c {
  connectedCallback() {
    this.hasAttribute("role") || this.setAttribute("role", "row"), super.connectedCallback();
  }
  render() {
    return b`<slot></slot>`;
  }
};
a.styles = u;
a = w([
  i("gup-table-row")
], a);
export {
  a as TableRow
};
