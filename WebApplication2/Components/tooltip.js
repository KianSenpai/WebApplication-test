import { i as u, G as c, x as l, e as d } from "./styles-DhFvdPhm.js";
import { n as r } from "./property-DJzm_oB9.js";
import { i as m } from "./query-DpC1Q-im.js";
import { e as g } from "./event-Ck0966vL.js";
import { i as x } from "./helpers-CEyIMPnX.js";
const v = u`gup-generic-popup{--gup-generic-popup--arrow-background-color: var(--gup-color-background-elevated-container);--gup-generic-popup--arrow-border-size: 1px;--gup-generic-popup--arrow-border-color: var(--gup-color-border-low)}.content{display:flex;flex-direction:column;gap:var(--gup-component-2);overflow:auto;background:var(--gup-color-background-elevated-container);border:1px solid var(--gup-color-border-low);box-shadow:0 8px 16px 0 var(--gup-color-shadow-color-3),0 4px 8px 0 var(--gup-color-shadow-color-2),0 1.5px 3px 0 var(--gup-color-shadow-color-1),0 .5px 1px 0 var(--gup-color-shadow-color-1);border-radius:var(--gup-radius-component-default);padding:var(--gup-padding-sm);max-width:var(--gup-tooltip--max-width, var(--max-width));max-height:var(--gup-tooltip--max-height, var(--max-height))}.title{color:var(--gup-color-content-primary);font-size:var(--font-size-300);line-height:20px}.hint{color:var(--gup-color-content-secondary);font-size:var(--font-size-200)}`;
var y = Object.defineProperty, f = Object.getOwnPropertyDescriptor, o = (p, i, s, a) => {
  for (var e = a > 1 ? void 0 : a ? f(i, s) : i, n = p.length - 1, h; n >= 0; n--)
    (h = p[n]) && (e = (a ? h(i, s, e) : h(e)) || e);
  return a && e && y(i, s, e), e;
};
let t = class extends c {
  constructor() {
    super(...arguments), this.title = "", this.hint = "", this.target = "", this.placement = "bottom", this.offset = 8, this.maxWidth = 200, this.maxHeight = 150;
  }
  updated(p) {
    (p.has("maxWidth") || p.has("maxHeight")) && (this.style.setProperty("--max-width", `${this.maxWidth}px`), this.style.setProperty("--max-height", `${this.maxHeight}px`));
  }
  showTooltip() {
    this._genericPopup.target = this.target, this._genericPopup.show(), this.onShow(this);
  }
  hideTooltip() {
    this._genericPopup.hide(), this.onHide(this);
  }
  renderHint() {
    return x(this.hint) ? l`` : l`<div class="hint">${this.hint}</div>`;
  }
  render() {
    return l`
      <gup-generic-popup class="popup" .target="${this.target}" .placement="${this.placement}">
        <div class="content" tabindex="0">
          <h2 class="title">${this.title}</h2>
          ${this.renderHint()}
          <slot></slot>
        </div>
      </gup-generic-popup>
    `;
  }
};
t.styles = v;
o([
  m(".popup")
], t.prototype, "_genericPopup", 2);
o([
  r({ type: String })
], t.prototype, "title", 2);
o([
  r({ type: String })
], t.prototype, "hint", 2);
o([
  r({ type: String })
], t.prototype, "target", 2);
o([
  r({ type: String })
], t.prototype, "placement", 2);
o([
  r({ type: Number })
], t.prototype, "offset", 2);
o([
  r({ attribute: "max-width", type: Number })
], t.prototype, "maxWidth", 2);
o([
  r({ attribute: "max-height", type: Number })
], t.prototype, "maxHeight", 2);
o([
  g("gup-tooltip-show")
], t.prototype, "onShow", 2);
o([
  g("gup-tooltip-hide")
], t.prototype, "onHide", 2);
t = o([
  d("gup-tooltip")
], t);
export {
  t as Tooltip
};
