import { i, G as d, x as p, e as c } from "./styles-DhFvdPhm.js";
const g = i`:host{display:block;width:100%;border-top:1px solid var(--gup-color-border-low);background-color:var(--gup-color-background-wizard-bar);padding-inline:var(--gup-component-8);padding-block:var(--gup-component-5)}.inner{max-width:1024px;margin-inline:auto;display:flex;justify-content:center;align-items:center}.track{display:flex;align-items:center;flex:1 0 0}::slotted([slot="start"]){margin-inline-end:auto}::slotted([slot="end"]){margin-inline-start:auto}::slotted([slot="start"]),::slotted([slot="end"]){display:flex;gap:var(--gup-spacing-component-default)}`;
var u = Object.defineProperty, f = Object.getOwnPropertyDescriptor, m = (a, e, r, o) => {
  for (var t = o > 1 ? void 0 : o ? f(e, r) : e, n = a.length - 1, l; n >= 0; n--)
    (l = a[n]) && (t = (o ? l(e, r, t) : l(t)) || t);
  return o && t && u(e, r, t), t;
};
let s = class extends d {
  render() {
    return p`
      <footer class="inner">
        <div class="track">
          <slot name="start"></slot>
          <slot name="end"></slot>
        </div>
      </footer>
    `;
  }
};
s.styles = g;
s = m([
  c("gup-wizard-footer")
], s);
export {
  s as WizardFooter
};
