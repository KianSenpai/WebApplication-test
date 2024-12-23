import { i as d, G as p, x as h, e as f } from "./styles-DhFvdPhm.js";
import { n as l } from "./property-DJzm_oB9.js";
const u = d`:host{display:flex;gap:var(--gup-spacing-component-default);align-items:center;font-size:var(--font-size-400);line-height:var(--line-height-500);color:var(--color)}:host:after{--border-width: 2px;--size: 6px;content:"";transform:rotate(45deg);display:inline-block;width:var(--size);height:var(--size);border-style:solid;border-color:var(--gup-color-content-tertiary);border-width:0;border-inline-end-width:var(--border-width);border-block-start-width:var(--border-width)}:host-context([dir="rtl"]) :host:after{transform:rotate(-45deg)}@media (max-width: 767px){:host(:not(:first-child,:last-child)){display:none}}:host(:last-child):after{display:none}.link{color:var(--color);text-decoration:underline}.link:hover{--color: var(--gup-color-brand-strong);text-decoration-thickness:2px}`;
var v = Object.defineProperty, m = Object.getOwnPropertyDescriptor, s = (c, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? m(t, i) : t, n = c.length - 1, a; n >= 0; n--)
    (a = c[n]) && (r = (o ? a(t, i, r) : a(r)) || r);
  return o && r && v(t, i, r), r;
};
let e = class extends p {
  constructor() {
    super(...arguments), this.current = !1, this.role = "listitem";
  }
  render() {
    return h`
      <a class="link" href="${this.href}" aria-current="${this.current ? "page" : "false"}">
        <slot></slot>
      </a>
    `;
  }
};
e.styles = u;
s([
  l()
], e.prototype, "href", 2);
s([
  l({ type: Boolean })
], e.prototype, "current", 2);
s([
  l({ reflect: !0 })
], e.prototype, "role", 2);
e = s([
  f("gup-breadcrumbs-item")
], e);
export {
  e as BreadcrumbsItem
};
