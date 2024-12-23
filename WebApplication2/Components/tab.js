import { i as p, G as d, x as u, e as b } from "./styles-DhFvdPhm.js";
import { n as c } from "./property-DJzm_oB9.js";
const g = p`.button{--border-bottom-width: var(--gup-component-2);color:var(--gup-color-content-link);cursor:pointer;position:relative;width:100%;line-height:var(--line-height-500)}.button:focus{--comment: "focus-outline mixin";outline:6px solid var(--gup-color-states-base-focus-ring);outline-offset:3px;--comment-end: "focus-outline mixin"}.button:disabled{background-color:var(--gup-color-states-disabled-low);color:var(--gup-color-states-disabled-medium);pointer-events:none}.button[aria-selected=true]{font-weight:var(--font-weight-base-beta)}.button--appearance-default .content:before,.button--appearance-toggle .content:before{display:block;content:attr(data-title);font-weight:var(--font-weight-base-beta);height:1px;color:transparent;overflow:hidden;visibility:hidden}.button--appearance-default{display:flex;gap:var(--gup-component-4);padding-inline:var(--gup-padding-md);padding-block:var(--gup-component-4);border-bottom:var(--border-bottom-width) solid transparent}.button--appearance-default[aria-selected=true]{border-bottom:var(--border-bottom-width) solid var(--gup-color-content-link)}.button--appearance-default:hover:not([aria-selected=true]){background-color:var(--gup-color-states-secondary-hover)}.button--appearance-toggle{display:flex;align-items:center;justify-content:center;border-radius:var(--gup-radius-component-full);padding:var(--gup-component-0) var(--gup-padding-sm);gap:var(--gup-component-3);text-align:center;min-height:var(--gup-icon-xl)}.button--appearance-toggle[aria-selected=true]{background-color:var(--gup-color-states-base-bg);box-shadow:0 8px 16px #34302c08,0 4px 8px #34302c05,0 1.5px 3px #34302c03,0 .5px 1px #34302c03}.button--appearance-toggle:hover:not([aria-selected=true]){background-color:var(--gup-color-states-secondary-hover)}.button--appearance-vertical{padding:var(--gup-component-4) var(--gup-component-4) var(--gup-component-4) var(--gup-component-5);border-bottom:1px solid var(--gup-color-border-medium);width:100%}.button--appearance-vertical .content{flex-grow:1}.button--appearance-vertical[aria-selected=true]{background-color:var(--gup-color-states-base-bg-control);border-bottom:1px solid var(--gup-color-border-medium)}.button--appearance-vertical[aria-selected=true]:before{position:absolute;content:"";left:0;top:0;bottom:0;width:var(--gup-component-2);height:100%;background-color:var(--gup-color-content-link)}.button--appearance-vertical:hover:not([aria-selected=true]){background-color:var(--gup-color-states-secondary-hover)}`;
var h = Object.defineProperty, v = Object.getOwnPropertyDescriptor, s = (t, a, r, e) => {
  for (var o = e > 1 ? void 0 : e ? v(a, r) : a, i = t.length - 1, l; i >= 0; i--)
    (l = t[i]) && (o = (e ? l(a, r, o) : l(o)) || o);
  return e && o && h(a, r, o), o;
};
let n = class extends d {
  constructor() {
    super(...arguments), this.index = 0, this.isSelected = !1, this.disabled = !1;
  }
  handleClick() {
    if (!this.isSelected) {
      const t = new CustomEvent("tab-click", { bubbles: !0, composed: !0, detail: this.index });
      this.dispatchEvent(t), this.isSelected = !0, this.requestUpdate("isSelected");
    }
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), this.index = Array.from(((t = this.parentElement) == null ? void 0 : t.querySelectorAll("gup-tab")) || []).indexOf(this), this.setTabWidth();
  }
  getTabsAppearance() {
    var t;
    return ((t = this.closest("gup-tabs")) == null ? void 0 : t.appearance) || "default";
  }
  setTabWidth() {
    var t;
    (t = this.closest("gup-tabs")) != null && t.isFullWidth && (this.style.flexGrow = "1"), this.getTabsAppearance() === "vertical" && (this.style.width = "100%");
  }
  handleSlotchange(t) {
    var r;
    const a = (r = t.target) == null ? void 0 : r.assignedNodes({ flatten: !0 });
    this.slotContentAsText = a.map((e) => e.textContent ? e.textContent.trim() : "").join("");
  }
  render() {
    return u`
      <button class="button button--appearance-${this.getTabsAppearance()}" @click="${this.handleClick}" role="tab" aria-selected="${this.isSelected}" ?disabled="${this.disabled && !this.isSelected}">
        <slot name="icon-start"></slot>
        <div class="content" data-title="${this.slotContentAsText}">
          <slot @slotchange=${this.handleSlotchange}></slot>
        </div>
        <slot name="icon-end"></slot>
      </button>

    `;
  }
};
n.styles = g;
s([
  c({ type: Number })
], n.prototype, "index", 2);
s([
  c({ type: Boolean, reflect: !0 })
], n.prototype, "isSelected", 2);
s([
  c({ type: Boolean })
], n.prototype, "disabled", 2);
n = s([
  b("gup-tab")
], n);
export {
  n as Tab
};
