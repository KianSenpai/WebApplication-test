import { i as h, G as u, x as a, e as v } from "./styles-DhFvdPhm.js";
import { n } from "./property-DJzm_oB9.js";
import "./icon.js";
import "./badge.js";
const d = h`.avatar{--gup-icon--fill-color: var(--gup-color-neutral-high);outline:1px solid var(--border-color,var(--gup-color-neutral-low));background-color:var(--bg-color, var(--gup-color-brand-accent-contrast));color:var(--color);display:flex;flex-direction:column;justify-content:center;align-items:center;border-radius:51%;width:var(--size);height:var(--size);aspect-ratio:1;position:relative;font-size:var(--font-size)}.image{width:100%;height:100%;border-radius:51%;object-fit:cover;position:absolute;top:0;left:0}.label{overflow:hidden;width:100%;text-align:center;display:flex;justify-content:center}.badge{position:absolute;bottom:0;inset-inline-end:0}:host([label]){--color: var(--gup-color-neutral-contrast);--bg-color: var(--gup-color-neutral-high);--border-color: transparent}`;
var z = Object.defineProperty, g = Object.getOwnPropertyDescriptor, l = (r, t, e, s) => {
  for (var o = s > 1 ? void 0 : s ? g(t, e) : t, c = r.length - 1, p; c >= 0; c--)
    (p = r[c]) && (o = (s ? p(t, e, o) : p(o)) || o);
  return s && o && z(t, e, o), o;
};
let i = class extends u {
  constructor() {
    super(...arguments), this.size = "s", this.alt = "", this.src = "", this.label = "", this.sizeMap = {
      s: { size: 20, fontSize: "var(--font-size-90)", iconSize: 16 },
      m: { size: 28, fontSize: "var(--font-size-250)", iconSize: 20 },
      l: { size: 40, fontSize: "var(--font-size-400)", iconSize: 28 }
    };
  }
  updated(r) {
    if (r.has("size")) {
      const { size: t, fontSize: e } = this.sizeMap[this.size] || this.sizeMap.s;
      this.style.setProperty("--size", `${t}px`), this.style.setProperty("--font-size", e);
    }
  }
  render() {
    var e, s;
    const r = (s = (e = this.label) == null ? void 0 : e.match(/[A-Z]/g)) == null ? void 0 : s.join(""), { iconSize: t } = this.sizeMap[this.size] || this.sizeMap.s;
    return a`
      <div class="avatar">
        ${this.src && this.alt ? a`<img class="image" alt="${this.alt}" src="${this.src}" />` : a`
            <div class="label">
              ${this.label ? a`${r}` : a`<gup-icon class="icon" icon-name="person" height="${t}" width="${t}"></gup-icon>`}
            </div>
          `}
          ${this.status ? a`
            <div class="badge">
              <gup-badge type="${this.status}"></gup-badge>
            </div>` : null}
      </div>
    `;
  }
};
i.styles = d;
l([
  n()
], i.prototype, "size", 2);
l([
  n()
], i.prototype, "alt", 2);
l([
  n()
], i.prototype, "src", 2);
l([
  n()
], i.prototype, "label", 2);
l([
  n()
], i.prototype, "status", 2);
i = l([
  v("gup-avatar")
], i);
export {
  i as Avatar
};
