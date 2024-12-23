import { i as c, G as d, x as p, e as m } from "./styles-DhFvdPhm.js";
import { n as o } from "./property-DJzm_oB9.js";
const g = c`:host{display:block;padding-inline:var(--gup-padding-sm);background:var(--gup-color-background-overcanvas)}:host(:first-of-type){border-start-start-radius:var(--gup-component-3);border-start-end-radius:var(--gup-component-3);padding-top:var(--gup-padding-xs)}:host(:last-of-type){border-end-start-radius:var(--gup-component-3);border-end-end-radius:var(--gup-component-3);padding-bottom:var(--gup-padding-xs)}.inner{display:flex;align-items:center;gap:var(--gup-spacing-component-default);align-self:stretch}:host(:not(:first-of-type)) .inner{padding-top:var(--gup-spacing-component-default)}:host(:not(:last-of-type)) .inner{border-bottom:1px solid var(--gup-color-border-medium);padding-bottom:var(--gup-spacing-component-default)}.meta{flex-grow:1}.link{color:var(--gup-color-content-link);text-decoration:underline}.thumbnail{border-radius:var(--gup-component-2);max-height:40px;aspect-ratio:1;object-fit:cover}.title{color:var(--gup-color-content-primary);font-weight:var(--font-weight-base-beta);margin:0}.subtitle{color:var(--gup-color-content-secondary);font-size:var(--font-size-300)}::slotted(*){--gup-icon--fill-color: var(--gup-color-brand-xhigh)}`;
var f = Object.defineProperty, b = Object.getOwnPropertyDescriptor, r = (u, a, n, i) => {
  for (var e = i > 1 ? void 0 : i ? b(a, n) : a, l = u.length - 1, s; l >= 0; l--)
    (s = u[l]) && (e = (i ? s(a, n, e) : s(e)) || e);
  return i && e && f(a, n, e), e;
};
let t = class extends d {
  constructor() {
    super(...arguments), this.url = "";
  }
  render() {
    return p`
      <div class="inner">
        ${this.thumbnailSrc ? p`<img src="${this.thumbnailSrc}" alt="${this.thumbnailAlt || ""}" class="thumbnail">` : ""}
        <div class="meta">
          <h2 class="title">
            ${this.url ? p`<a href="${this.url}" download="${this.fileName}" class="link">${this.fileName}</a>` : this.fileName}
          </h2>
          <small class="subtitle">${this.subtitle}</small>
        </div>
        <slot></slot>
      </div>
    `;
  }
};
t.styles = g;
r([
  o({ reflect: !0, attribute: "file-name" })
], t.prototype, "fileName", 2);
r([
  o({ reflect: !0 })
], t.prototype, "subtitle", 2);
r([
  o({ reflect: !0 })
], t.prototype, "url", 2);
r([
  o({ reflect: !0, attribute: "thumbnail-src" })
], t.prototype, "thumbnailSrc", 2);
r([
  o({ reflect: !0, attribute: "thumbnail-alt" })
], t.prototype, "thumbnailAlt", 2);
t = r([
  m("gup-file-item")
], t);
export {
  t as FileItem
};
