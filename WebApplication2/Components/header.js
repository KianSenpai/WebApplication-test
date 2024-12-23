import { i as p, G as d, x as g, e as u } from "./styles-DhFvdPhm.js";
import { n as c } from "./property-DJzm_oB9.js";
import "./logo.js";
const v = p`:host{--gup-logo--color: var(--gup-color-neutral-contrast);--gup-button--underline: none;position:relative}.inner{background:var(--gup-color-background-navigation-bar) linear-gradient(180deg,#eff5ff -66.34%,#f7f5f1);display:flex;flex-direction:column;border-bottom:1px solid var(--gup-color-border-low)}.navigation{max-width:1024px;margin-inline:auto;display:flex;justify-content:space-between;min-height:60px;width:100%;font-size:16px;color:var(--gup-color-brand-xhigh);flex-wrap:wrap;align-items:center}.logo-wrapper{--overhang: 10px;display:flex;margin-bottom:calc(var(--overhang) * -1);width:72px;height:calc(60px + var(--overhang));padding:11px 18px 13px;justify-content:center;align-items:center;border-radius:0 0 var(--gup-radius-component-default) var(--gup-radius-component-default);background-color:var(--gup-color-brand-medium)}::slotted([slot="start"]),::slotted([slot="end"]){flex-grow:1;flex-basis:0}::slotted([slot="end"]){justify-content:flex-end}`;
var f = Object.defineProperty, x = Object.getOwnPropertyDescriptor, s = (i, r, t, o) => {
  for (var e = o > 1 ? void 0 : o ? x(r, t) : r, n = i.length - 1, l; n >= 0; n--)
    (l = i[n]) && (e = (o ? l(r, t, e) : l(e)) || e);
  return o && e && f(r, t, e), e;
};
let a = class extends d {
  constructor() {
    super(...arguments), this.navAriaLabel = "Navigation";
  }
  render() {
    return g`
     <header class="inner">
      <nav class="navigation" aria-label="${this.navAriaLabel}">
        <slot name="start"></slot>
        <div class="logo-wrapper">
          <gup-logo size="45" title="Logo"></gup-logo>
        </div>
        <slot name="end"></slot>
      </nav>
    </header>
    `;
  }
};
a.styles = v;
s([
  c({ attribute: "nav-aria-label" })
], a.prototype, "navAriaLabel", 2);
a = s([
  u("gup-header")
], a);
export {
  a as Header
};
