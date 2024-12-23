import { i as n, G as i, x as c, e as d } from "./styles-DhFvdPhm.js";
const u = n`:host [data-appearance=default]{display:flex;border-bottom:1px solid var(--gup-color-border-low)}:host [data-appearance=toggle]{display:flex;border-radius:var(--gup-radius-component-full);padding:var(--gup-component-2);gap:var(--gup-component-3);background-color:var(--gup-color-states-base-bg-secondary)}:host [data-appearance=vertical]{display:flex;flex-direction:column;align-items:flex-start}@media (max-width: 767px){:host{flex-direction:column;gap:calc(var(--unit) * 2)}}`;
var g = Object.defineProperty, v = Object.getOwnPropertyDescriptor, b = (e, t, o, r) => {
  for (var a = r > 1 ? void 0 : r ? v(t, o) : t, p = e.length - 1, s; p >= 0; p--)
    (s = e[p]) && (a = (r ? s(t, o, a) : s(a)) || a);
  return r && a && g(t, o, a), a;
};
let l = class extends i {
  getTabsAppearance() {
    var e;
    return ((e = this.closest("gup-tabs")) == null ? void 0 : e.appearance) || "default";
  }
  render() {
    return c`
      <div role="tablist" data-appearance="${this.getTabsAppearance()}">
        <slot></slot>
      </div>
    `;
  }
};
l.styles = u;
l = b([
  d("gup-tabs-navigation")
], l);
export {
  l as TabsNavigation
};
