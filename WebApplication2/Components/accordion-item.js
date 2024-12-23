import { i as d, G as g, x as c, e as h } from "./styles-DhFvdPhm.js";
import { n as a } from "./property-DJzm_oB9.js";
import "./track.js";
import "./accordion-item-action.js";
const u = d`:host{--gup-icon--fill-color: var(--gup-color-content-link);--border-color: transparent;border-bottom:1px solid var(--gup-color-border-medium);display:block;color:var(--gup-color-content-primary)}:host:hover{border-bottom-color:transparent}:host(:not(:only-child):last-child){border-bottom:none}.inner{display:block}.label{list-style-type:none;cursor:pointer;padding:var(--gup-component-4) var(--gup-component-0) var(--gup-component-7) var(--gup-component-0);border-bottom:4px solid var(--border-color)}.label:hover{background-color:var(--gup-color-states-secondary-hover)}.label-inner{flex-grow:1;font-size:var(--font-size-600);font-weight:var(--font-weight-base-beta);line-height:32px;letter-spacing:-.48px}.controls{display:flex;align-items:center;gap:var(--gup-component-3);color:var(--gup-color-content-link)}.action-label{line-height:var(--line-height-500);text-decoration-line:underline}.content{padding-bottom:var(--gup-padding-lg)}`;
var b = Object.defineProperty, m = Object.getOwnPropertyDescriptor, n = (l, o, r, i) => {
  for (var e = i > 1 ? void 0 : i ? m(o, r) : o, s = l.length - 1, p; s >= 0; s--)
    (p = l[s]) && (e = (i ? p(o, r, e) : p(e)) || e);
  return i && e && b(o, r, e), e;
};
let t = class extends g {
  constructor() {
    super(...arguments), this.labelShow = "Show", this.labelHide = "Hide", this.open = !1, this.hideControls = !1;
  }
  onToggle(l) {
    var r;
    const o = (r = l.target) == null ? void 0 : r.open;
    this.dispatchEvent(
      new CustomEvent("gup-toggle", {
        detail: o
      })
    ), this.open = o;
  }
  render() {
    return c`
      <details class="inner" ?open=${this.open} @toggle=${this.onToggle}>
        <summary class="label">
          <gup-track gap="4" vertical-alignment="top">
            <span class="label-inner"><slot name="label"></slot></span>
            ${this.hideControls ? "" : c`<gup-accordion-item-action icon-name=${this.open ? "remove-circle-outline" : "add-circle-outline"}>
                  ${this.open ? this.labelHide : this.labelShow}
                </gup-accordion-item-action>`}
          </gup-track>
        </summary>
        <div class="content">
          <slot></slot>
        </div>
      </details>
    `;
  }
};
t.styles = u;
n([
  a({ attribute: "label-show" })
], t.prototype, "labelShow", 2);
n([
  a({ attribute: "label-hide" })
], t.prototype, "labelHide", 2);
n([
  a({ type: Boolean, reflect: !0 })
], t.prototype, "open", 2);
n([
  a({ type: Boolean, attribute: "hide-controls" })
], t.prototype, "hideControls", 2);
t = n([
  h("gup-accordion-item")
], t);
export {
  t as AccordionItem
};
