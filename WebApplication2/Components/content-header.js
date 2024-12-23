import { i as d, G as c, x as l, e as u } from "./styles-DhFvdPhm.js";
import { n as g } from "./property-DJzm_oB9.js";
const b = d`.inner-wrapper{display:flex;width:100%;background:var(--gup-content-header--background, linear-gradient(180deg, var(--gup-color-background-gradient-1-start) -66.34%, var(--gup-color-background-gradient-1-end) 100%));border-bottom:1px solid var(--gup-color-border-low);font-size:var(--font-size-550);color:var(--gup-color-content-secondary)}.inner{max-width:1024px;min-height:100px;margin-inline:auto;flex-grow:1;display:flex;flex-direction:column;justify-content:end;gap:var(--gup-component-6);padding:32px}.title{width:100%;font-size:var(--font-size-700);font-weight:var(--font-weight-base-beta);letter-spacing:-.64px;line-height:1;color:var(--gup-color-content-primary)}.subtitle{margin-bottom:var(--gup-spacing-between-items)}::slotted([slot="breadcrumbs"]){padding-bottom:var(--gup-component-6)}`;
var v = Object.defineProperty, m = Object.getOwnPropertyDescriptor, s = (p, r, n, o) => {
  for (var t = o > 1 ? void 0 : o ? m(r, n) : r, i = p.length - 1, a; i >= 0; i--)
    (a = p[i]) && (t = (o ? a(r, n, t) : a(t)) || t);
  return o && t && v(r, n, t), t;
};
let e = class extends c {
  constructor() {
    super(...arguments), this.pageSubtitle = "";
  }
  render() {
    return l`
      <div class="inner-wrapper">
        <div class="inner">
          <slot name="breadcrumbs"></slot>
          <div>
            ${this.pageSubtitle && l`<h2 class="subtitle">${this.pageSubtitle}</h2>`}
            <h1 class="title">${this.pageTitle}</h1>
          </div>
          <slot></slot>
        </div>
      </div>
    `;
  }
};
e.styles = b;
s([
  g({ attribute: "page-title" })
], e.prototype, "pageTitle", 2);
s([
  g({ attribute: "page-subtitle" })
], e.prototype, "pageSubtitle", 2);
e = s([
  u("gup-content-header")
], e);
export {
  e as ContentHeader
};
