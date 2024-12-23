import { i as a, G as c, x as p, e as f } from "./styles-DhFvdPhm.js";
import { H as m } from "./slot-controller-BinWfe2f.js";
const v = a`:host{display:block;margin-block:var(--gup-spacing-between-sections)}.title{color:var(--gup-color-content-primary);font-size:var(--font-size-600);line-height:var(--line-height-500);margin-bottom:var(--gup-spacing-text-to-component)}.inner--has-footer .footer{margin-top:var(--gup-spacing-content-to-cta)}`;
var h = Object.defineProperty, g = Object.getOwnPropertyDescriptor, u = (i, o, r, e) => {
  for (var t = e > 1 ? void 0 : e ? g(o, r) : o, s = i.length - 1, n; s >= 0; s--)
    (n = i[s]) && (t = (e ? n(o, r, t) : n(t)) || t);
  return e && t && h(o, r, t), t;
};
let l = class extends c {
  constructor() {
    super(...arguments), this.hasSlotController = new m(this, "footer");
  }
  render() {
    return p`
      <section class="inner${this.hasSlotController.test("footer") ? " inner--has-footer" : ""}">
        <h2 class="title"><slot name="title"></slot></h2>
        <div class="content">
          <slot></slot>
        </div>
        <div class="footer">
          <slot name="footer"></slot>
        </div>
      </section>
    `;
  }
};
l.styles = v;
l = u([
  f("gup-form-section")
], l);
export {
  l as FormSection
};
