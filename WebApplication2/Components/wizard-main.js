import { i as s, G as l, x as d, e as c } from "./styles-DhFvdPhm.js";
const v = s`:host{display:block;background-color:var(--gup-color-background-canvas);height:100%;padding-inline:var(--gup-component-8)}.inner{max-width:632px;margin-inline:auto;padding-top:var(--gup-component-9);padding-bottom:64px}`;
var g = Object.defineProperty, u = Object.getOwnPropertyDescriptor, m = (i, r, o, e) => {
  for (var n = e > 1 ? void 0 : e ? u(r, o) : r, a = i.length - 1, p; a >= 0; a--)
    (p = i[a]) && (n = (e ? p(r, o, n) : p(n)) || n);
  return e && n && g(r, o, n), n;
};
let t = class extends l {
  render() {
    return d`
      <div class="inner">
        <slot></slot>
      </div>
    `;
  }
};
t.styles = v;
t = m([
  c("gup-wizard-main")
], t);
export {
  t as WizardMain
};
