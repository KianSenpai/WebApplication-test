import { i as f, G as g, x as l, e as v } from "./styles-DhFvdPhm.js";
import { n as p } from "./property-DJzm_oB9.js";
import "./screenreader-text.js";
const z = f`:host{display:inline-flex;flex-direction:column;align-items:center;gap:8px}:host([size="s"]){--font-size: var(--font-size-200);--size: 16px}:host([size="m"]){--font-size: var(--font-size-300);--size: 24px}:host([size="l"]){--font-size: var(--font-size-400);--size: 40px}:host([size="xl"]){--font-size: var(--font-size-400);--size: 64px}.label{color:var(--gup-color-content-secondary);font-size:var(--gup-spinner--font-size, var(--font-size))}.circle{color:var(--gup-color-brand-accent-low)}.indicator{flex-shrink:0;animation:spin 1s infinite linear;transform-origin:center;color:var(--gup-color-brand-high)}.svg{width:var(--gup-spinner--size, var(--size));height:var(--gup-spinner--size, var(--size))}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}`;
var m = Object.defineProperty, d = Object.getOwnPropertyDescriptor, i = (c, r, n, t) => {
  for (var e = t > 1 ? void 0 : t ? d(r, n) : r, a = c.length - 1, o; a >= 0; a--)
    (o = c[a]) && (e = (t ? o(r, n, e) : o(e)) || e);
  return t && e && m(r, n, e), e;
};
let s = class extends g {
  constructor() {
    super(...arguments), this.size = "m", this.label = "Loading...", this.labelHidden = !1;
  }
  render() {
    return l`
      <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
        <mask id="mask0_8814_13864" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" >
          <path d="M40 20C40 31.0457 31.0457 40 20 40C8.9543 40 -5.4282e-06 31.0457 -3.49691e-06 20C-1.56562e-06 8.9543 8.9543 1.56562e-06 20 3.49691e-06C31.0457 5.4282e-06 40 8.95431 40 20ZM6 20C6 27.732 12.268 34 20 34C27.732 34 34 27.732 34 20C34 12.268 27.732 6 20 6C12.268 6 6 12.268 6 20Z" />
        </mask>
        <g mask="url(#mask0_8814_13864)">
          <circle class="circle" cx="20" cy="20" r="20" />
          <path class="indicator" d="M40 20C40 25.3043 37.8929 30.3914 34.1421 34.1421C30.3914 37.8929 25.3043 40 20 40L20 20L40 20Z"/>
        </g>
      </svg>
      ${this.labelHidden ? l`<gup-screenreader-text>${this.label}</gup-screenreader-text>` : l`<span class="label">${this.label}</span>`}
    `;
  }
};
s.styles = z;
i([
  p({ reflect: !0 })
], s.prototype, "size", 2);
i([
  p()
], s.prototype, "label", 2);
i([
  p({ type: Boolean, attribute: "label-hidden" })
], s.prototype, "labelHidden", 2);
s = i([
  v("gup-spinner")
], s);
export {
  s as Spinner
};
