import { i as a, G as l, x as c, e as g } from "./styles-DhFvdPhm.js";
import "./track.js";
import "./icon.js";
const u = a`:host{--gup-icon--fill-color: var(--gup-color-negative-medium);display:block;color:var(--gup-color-negative-medium)}.icon{flex-shrink:0}`;
var m = Object.defineProperty, v = Object.getOwnPropertyDescriptor, f = (p, o, s, r) => {
  for (var e = r > 1 ? void 0 : r ? v(o, s) : o, i = p.length - 1, n; i >= 0; i--)
    (n = p[i]) && (e = (r ? n(o, s, e) : n(e)) || e);
  return r && e && m(o, s, e), e;
};
let t = class extends l {
  render() {
    return c`
      <gup-track gap="2" class="inner">
        <gup-icon class="icon" icon-name="error" height="24" width="24"></gup-icon>
        <span><slot></slot></span>
      </gup-track>
    `;
  }
};
t.styles = u;
t = f([
  g("gup-form-validation-message")
], t);
export {
  t as FormValidationMessage
};
