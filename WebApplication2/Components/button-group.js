import { G as c, x as l, e as a } from "./styles-DhFvdPhm.js";
import { n as f } from "./property-DJzm_oB9.js";
import "./track.js";
var m = Object.defineProperty, g = Object.getOwnPropertyDescriptor, u = (s, t, o, e) => {
  for (var r = e > 1 ? void 0 : e ? g(t, o) : t, n = s.length - 1, p; n >= 0; n--)
    (p = s[n]) && (r = (e ? p(t, o, r) : p(r)) || r);
  return e && r && m(t, o, r), r;
};
let i = class extends c {
  constructor() {
    super(...arguments), this.direction = "horizontal";
  }
  render() {
    return l`
      <gup-track direction="${this.direction}" gap="4" vertical-alignment="center">
        <slot></slot>
      </gup-track>
    `;
  }
};
u([
  f({ reflect: !0 })
], i.prototype, "direction", 2);
i = u([
  a("gup-button-group")
], i);
export {
  i as ButtonGroup
};
