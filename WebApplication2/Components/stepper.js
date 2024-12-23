import { i as u, G as h, x as n, e as c } from "./styles-DhFvdPhm.js";
import { n as r } from "./property-DJzm_oB9.js";
import { t as g } from "./state-B6RxDmTk.js";
import "./icon.js";
import "./track.js";
import "./button.js";
const f = u`:host{--gup-stepper--continued: 0}:host([continued]){--gup-stepper--continued: 1}.list{display:block;overflow:hidden}:host(:not([static-mode])) .list{border-bottom:1px solid var(--gup-color-border-medium)}`;
var m = Object.defineProperty, b = Object.getOwnPropertyDescriptor, o = (t, e, i, a) => {
  for (var s = a > 1 ? void 0 : a ? b(e, i) : e, p = t.length - 1, d; p >= 0; p--)
    (d = t[p]) && (s = (a ? d(e, i, s) : d(s)) || s);
  return a && s && m(e, i, s), s;
};
let l = class extends h {
  constructor() {
    super(...arguments), this.toggleAllDisplayed = !1, this.showAllLabel = "Show all steps", this.hideAllLabel = "Hide all steps", this.wizardMode = !1, this.staticMode = !1, this.continued = !1, this.allOpen = !1;
  }
  renderToggleAllButton() {
    return this.toggleAllDisplayed && !this.wizardMode && !this.staticMode ? n`
        <gup-button id="toggle" appearance="text" @gup-click=${this.toggleAll}>
          <gup-track gap="2" vertical-alignment="center">
            <gup-icon icon-name=${`${this.allOpen ? "remove-circle-outline" : "add-circle-outline"}`} width="24" height="24"></gup-icon>
            ${this.allOpen ? this.hideAllLabel : this.showAllLabel}
          </gup-track>
        </gup-button>
      ` : n``;
  }
  get slottedChildren() {
    var e;
    const t = (e = this.shadowRoot) == null ? void 0 : e.querySelector("slot");
    return t ? t.assignedElements({ flatten: !0 }) : [];
  }
  toggleAll() {
    this.slottedChildren.forEach((e) => {
      e.open = !this.allOpen;
    }), this.allOpen = !this.allOpen;
  }
  render() {
    return n`
      ${this.renderToggleAllButton()}
      <div class="list" role="list">
        <slot></slot>
      </div>
    `;
  }
  updated(t) {
    super.updated(t), this.slottedChildren.forEach((i) => {
      t.has("wizardMode") && (i.wizardMode = this.wizardMode), t.has("staticMode") && (i.staticMode = this.staticMode);
    });
  }
};
l.styles = f;
o([
  r({ type: Boolean, reflect: !0, attribute: "toggle-all-displayed" })
], l.prototype, "toggleAllDisplayed", 2);
o([
  r({ attribute: "show-all-label" })
], l.prototype, "showAllLabel", 2);
o([
  r({ attribute: "hide-all-label" })
], l.prototype, "hideAllLabel", 2);
o([
  r({ type: Boolean, reflect: !0, attribute: "wizard-mode" })
], l.prototype, "wizardMode", 2);
o([
  r({ type: Boolean, reflect: !0, attribute: "static-mode" })
], l.prototype, "staticMode", 2);
o([
  r({ type: Boolean, reflect: !0 })
], l.prototype, "continued", 2);
o([
  g()
], l.prototype, "allOpen", 2);
l = o([
  c("gup-stepper")
], l);
export {
  l as Stepper
};
