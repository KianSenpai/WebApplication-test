import { i as u, G as d, x as v, e as h } from "./styles-DhFvdPhm.js";
import { n as s } from "./property-DJzm_oB9.js";
import { o as p } from "./class-map-CgF9gVe_.js";
const k = u`:host{display:block}.link{--color: var(--gup-link-color, var(--color-blue-700));padding-block:var(--unit);line-height:var(--line-height-500);border-bottom:1px solid var(--color);color:var(--color)}.link:hover{--color: var(--color-blue-600);background-color:var(--color-grey-100)}.link:focus{outline:1px solid var(--color-blue-700);outline-offset:3px}.link--size-s{font-size:var(--font-size-250)}.link--size-l{font-size:var(--font-size-525)}.link--severity-danger{--color: var(--color-red-600)}.link--severity-danger:hover{--color: var(--color-red-700)}.link--severity-secondary,.link--severity-secondary:hover{--color: var(--color-grey-900)}.link--is-disabled{--color: var(--color-grey-400);color:var(--color-grey-600);pointer-events:none}@supports selector(:focus-visible){.link:focus{outline:none}.link:focus-visible{outline:1px solid var(--color-blue-700);outline-offset:3px}}`;
var f = Object.defineProperty, b = Object.getOwnPropertyDescriptor, i = (e, t, n, l) => {
  for (var r = l > 1 ? void 0 : l ? b(t, n) : t, c = e.length - 1, a; c >= 0; c--)
    (a = e[c]) && (r = (l ? a(t, n, r) : a(r)) || r);
  return l && r && f(t, n, r), r;
};
let o = class extends d {
  constructor() {
    super(...arguments), this.kind = "link", this.size = "m", this.severity = "primary", this.disabled = !1, this.href = "";
  }
  onClick(e) {
    this.dispatchEvent(new CustomEvent("gup-click", e));
  }
  render() {
    const e = {
      link: !0,
      [`link--severity-${this.severity}`]: !0,
      [`link--size-${this.size}`]: !0,
      "link--is-disabled": this.disabled && this.kind === "button"
    };
    return v`
      ${this.kind === "button" ? v`
            <button class="${p(e)}" ?disabled="${this.disabled}" @click=${this.onClick}>
              <slot></slot>
            </button>` : v`
            <a href="${this.href}" class="${p(e)}">
              <slot></slot>
            </a>`}
    `;
  }
};
o.styles = k;
i([
  s()
], o.prototype, "kind", 2);
i([
  s()
], o.prototype, "size", 2);
i([
  s()
], o.prototype, "severity", 2);
i([
  s({ type: Boolean })
], o.prototype, "disabled", 2);
i([
  s()
], o.prototype, "href", 2);
o = i([
  h("gup-link")
], o);
export {
  o as Link
};
