import { i as c, G as m, x as a, e as f } from "./styles-DhFvdPhm.js";
import { n as e } from "./property-DJzm_oB9.js";
import { t as u } from "./state-B6RxDmTk.js";
import { l as h } from "./if-defined-DtNbtuPw.js";
import { H as d } from "./slot-controller-BinWfe2f.js";
const _ = c`.caption{color:var(--gup-color-content-secondary);font-size:var(--font-size-300);margin-top:var(--gup-spacing-image-bottom)}`;
var y = Object.defineProperty, v = Object.getOwnPropertyDescriptor, t = (g, s, n, i) => {
  for (var o = i > 1 ? void 0 : i ? v(s, n) : s, p = g.length - 1, l; p >= 0; p--)
    (l = g[p]) && (o = (i ? l(s, n, o) : l(o)) || o);
  return i && o && y(s, n, o), o;
};
let r = class extends m {
  constructor() {
    super(...arguments), this.alt = "", this.src = "", this.errorMessage = "Error loading image", this._hasError = !1, this.hasSlotController = new d(this, "caption");
  }
  _handleError() {
    this._hasError = !0;
  }
  _ifErrorAndSlotUsed() {
    return this._hasError && this.querySelector('[slot="error"]');
  }
  render() {
    return this._ifErrorAndSlotUsed() ? a`<slot name="error"></slot>` : this._hasError ? a`<div>${this.errorMessage}</div>` : a`
      <figure>
        <img
          class="image"
          width="${h(this.width)}"
          height="${h(this.height)}"
          alt="${this.alt}"
          src="${this.src}"
          loading="${h(this.loading)}"
          @error=${this._handleError}
        />
        ${this.hasSlotController.test("caption") ? a`<figcaption class="caption"><slot name="caption"></slot></figcaption>` : ""}
      </figure>
    `;
  }
};
r.styles = _;
t([
  e()
], r.prototype, "alt", 2);
t([
  e()
], r.prototype, "src", 2);
t([
  e()
], r.prototype, "errorMessage", 2);
t([
  e()
], r.prototype, "loading", 2);
t([
  e({ type: Number })
], r.prototype, "width", 2);
t([
  e({ type: Number })
], r.prototype, "height", 2);
t([
  u()
], r.prototype, "_hasError", 2);
r = t([
  f("gup-image")
], r);
export {
  r as Image
};
