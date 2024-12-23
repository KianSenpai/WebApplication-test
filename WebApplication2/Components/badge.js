import { i, G as n, x as c, e as d } from "./styles-DhFvdPhm.js";
import { n as u } from "./property-DJzm_oB9.js";
const v = i`.badge{border:1px solid var(--gup-color-content-inverted-primary);aspect-ratio:1;width:12px;border-radius:51%;background-color:var(--bg-color)}.badge--type-neutral{--bg-color: var(--gup-color-warning-medium)}.badge--type-positive{--bg-color: var(--gup-color-positive-medium)}.badge--type-negative{--bg-color: var(--gup-color-negative-medium)}.badge--type-offline{--bg-color: var(--gup-color-neutral-low)}`;
var b = Object.defineProperty, m = Object.getOwnPropertyDescriptor, s = (l, r, p, o) => {
  for (var e = o > 1 ? void 0 : o ? m(r, p) : r, a = l.length - 1, g; a >= 0; a--)
    (g = l[a]) && (e = (o ? g(r, p, e) : g(e)) || e);
  return o && e && b(r, p, e), e;
};
let t = class extends n {
  constructor() {
    super(...arguments), this.type = "neutral";
  }
  render() {
    return c`
    <div class="${`badge badge--type-${this.type}`}">
    </div>
    `;
  }
};
t.styles = v;
s([
  u()
], t.prototype, "type", 2);
t = s([
  d("gup-badge")
], t);
export {
  t as Badge
};
