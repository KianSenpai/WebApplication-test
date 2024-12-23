import { i as n, G as u, x as c, e as b } from "./styles-DhFvdPhm.js";
import { n as g } from "./property-DJzm_oB9.js";
import "./track.js";
import "./button.js";
import "./icon.js";
const m = n`:host{border-bottom:1px solid var(--gup-color-brand-tertiary)}.label{color:var(--gup-color-brand-default)}`;
var h = Object.defineProperty, f = Object.getOwnPropertyDescriptor, i = (r, t, o, l) => {
  for (var e = l > 1 ? void 0 : l ? f(t, o) : t, p = r.length - 1, s; p >= 0; p--)
    (s = r[p]) && (e = (l ? s(t, o, e) : s(e)) || e);
  return l && e && h(t, o, e), e;
};
let a = class extends u {
  constructor() {
    super(...arguments), this.clearLabel = "";
  }
  onClick(r) {
    this.dispatchEvent(new CustomEvent("gup-click", r));
  }
  render() {
    return c`
        <gup-track vertical-alignment="center" class="track" gap="4" ?is-multiline="${!0}">
          <span class="label"><slot name="label"></slot></span>
          <slot></slot>
          ${this.clearLabel && c`
          <gup-button appearance="secondary" @gup-click=${this.onClick}>
            <gup-icon icon-name="refresh" height="20" width="20"></gup-icon>
            ${this.clearLabel}
          </gup-button>
          `}
        </gup-track>
    `;
  }
};
a.styles = m;
i([
  g({ reflect: !0, attribute: "clear-label" })
], a.prototype, "clearLabel", 2);
a = i([
  b("gup-filter-chip-wrapper")
], a);
export {
  a as FilterChipWrapper
};
