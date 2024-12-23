import { i, G as p, x as c, e as g } from "./styles-DhFvdPhm.js";
import "./track.js";
const v = i`:host{display:block}.label{color:var(--gup-color-content-primary);font-weight:var(--font-weight-base-beta);font-size:var(--font-size-400);margin-bottom:var(--gup-component-2)}.content{font-size:var(--font-size-550);line-height:var(--line-height-400)}::slotted(gup-icon[slot="icon"]){--gup-icon--width: 30px;--gup-icon--height: 30px;margin-top:4px}`;
var b = Object.defineProperty, m = Object.getOwnPropertyDescriptor, f = (r, t, o, l) => {
  for (var e = l > 1 ? void 0 : l ? m(t, o) : t, n = r.length - 1, s; n >= 0; n--)
    (s = r[n]) && (e = (l ? s(t, o, e) : s(e)) || e);
  return l && e && b(t, o, e), e;
};
let a = class extends p {
  render() {
    return c`
      <div class="inner">
        <div class="label" id="label">
          <slot name="label"></slot>
        </div>
        <gup-track class="content" aria-labelledby="label" gap="2">
          <slot name="icon"></slot>
          <slot></slot>
        </gup-track>
      </div>
    `;
  }
};
a.styles = v;
a = f([
  g("gup-labelled-item")
], a);
export {
  a as LabelledItem
};
