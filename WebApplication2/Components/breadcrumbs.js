import { i as c, G as n, x as v, e as f } from "./styles-DhFvdPhm.js";
const u = c`:host{--gap: var(--gup-spacing-component-default);display:block}.track{display:flex;flex-wrap:wrap;gap:var(--gap)}`;
var i = Object.defineProperty, d = Object.getOwnPropertyDescriptor, b = (o, e, p, s) => {
  for (var r = s > 1 ? void 0 : s ? d(e, p) : e, a = o.length - 1, t; a >= 0; a--)
    (t = o[a]) && (r = (s ? t(e, p, r) : t(r)) || r);
  return s && r && i(e, p, r), r;
};
let l = class extends n {
  render() {
    return v`
      <div class="track" role="list">
        <slot></slot>
      </div>
    `;
  }
};
l.styles = u;
l = b([
  f("gup-breadcrumbs")
], l);
export {
  l as Breadcrumbs
};
