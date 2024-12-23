import { i as s, G as a, x as m, e as u } from "./styles-DhFvdPhm.js";
import { n as v } from "./property-DJzm_oB9.js";
import "./track.js";
import "./icon.js";
import { l as g } from "./if-defined-DtNbtuPw.js";
const h = s`:host{display:flex;align-items:center;gap:var(--gup-component-3);color:var(--gup-color-content-link)}.slot-container{line-height:var(--line-height-500);text-decoration-line:underline}`;
var f = Object.defineProperty, d = Object.getOwnPropertyDescriptor, p = (l, o, i, t) => {
  for (var e = t > 1 ? void 0 : t ? d(o, i) : o, r = l.length - 1, c; r >= 0; r--)
    (c = l[r]) && (e = (t ? c(o, i, e) : c(e)) || e);
  return t && e && f(o, i, e), e;
};
let n = class extends a {
  render() {
    return m`
      <gup-icon icon-name=${g(this.iconName)} width="24" height="24"></gup-icon>
      <div class="slot-container"><slot></slot></div>
    `;
  }
};
n.styles = h;
p([
  v({ attribute: "icon-name" })
], n.prototype, "iconName", 2);
n = p([
  u("gup-accordion-item-action")
], n);
export {
  n as AccordionItemAction
};
