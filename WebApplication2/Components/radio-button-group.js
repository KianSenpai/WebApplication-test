import { i as u, x as l, A as c, e as g, G as m } from "./styles-DhFvdPhm.js";
import { n as r } from "./property-DJzm_oB9.js";
import { t as v } from "./state-B6RxDmTk.js";
import { i as f } from "./query-DpC1Q-im.js";
import { o as b } from "./class-map-CgF9gVe_.js";
import { i as y, g as O } from "./helpers-CEyIMPnX.js";
import { e as p } from "./event-Ck0966vL.js";
import { H as x } from "./slot-controller-BinWfe2f.js";
import "./track.js";
import "./form-hint.js";
import "./form-validation-message.js";
import { r as C } from "./validators-CzEExH8K.js";
import { F as I } from "./FormControlMixin-CBpJ9UGl.js";
const w = u`.label{padding-bottom:var(--gup-component-5);font-weight:var(--font-weight-base-beta);color:var(--gup-color-content-primary)}.label.has-error{color:var(--gup-color-negative-medium);padding-bottom:var(--gup-component-3)}.error{padding-bottom:var(--gup-component-5)}.hint{padding-top:var(--gup-component-4)}`;
var k = Object.defineProperty, D = Object.getOwnPropertyDescriptor, o = (e, t, s, a) => {
  for (var n = a > 1 ? void 0 : a ? D(t, s) : t, d = e.length - 1, h; d >= 0; d--)
    (h = e[d]) && (n = (a ? h(t, s, n) : h(n)) || n);
  return a && n && k(t, s, n), n;
};
let i = class extends I(m) {
  constructor() {
    super(), this.label = "", this.value = "", this.name = "", this.required = !1, this.errorMessage = "", this.hasSlotController = new x(this, "hint"), this.focusedOptionIndex = 0, this.handleFocus = this.handleFocus.bind(this), this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  get options() {
    return [...this.querySelectorAll("gup-radio-button")];
  }
  get availableOptions() {
    return this.options.filter((e) => !e.disabled);
  }
  handleKeyDown(e) {
    if (["ArrowDown", "ArrowRight"].includes(e.key))
      this.focusedOptionIndex = this.focusedOptionIndex + 1;
    else if (["ArrowUp", "ArrowLeft"].includes(e.key))
      this.focusedOptionIndex = this.focusedOptionIndex - 1;
    else if ([" "].includes(e.key)) {
      this.availableOptions[this.focusedOptionIndex].handleChange();
      return;
    } else
      return;
    this.focusedOptionIndex = Math.max(0, Math.min(this.focusedOptionIndex, this.availableOptions.length - 1)), this.availableOptions[this.focusedOptionIndex].focus(), e.preventDefault();
  }
  updated(e) {
    e.has("value") && (this.setValue(this.value), this.onChange(this.value));
  }
  validityCallback() {
    var e;
    return this.onInvalid(this.internals.validity), this.errorMessage || ((e = this.validationTarget) == null ? void 0 : e.validationMessage);
  }
  handleOptionChecked(e) {
    const t = e.target, s = this.availableOptions.indexOf(t);
    this.focusedOptionIndex = s, this.handleFocus(), this.setValue(t.value), this.value = t.value, this.onChange(t.value);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), this.setValue(this.value);
    const e = this.availableOptions.findIndex((s) => s.getAttribute("value") === this.value);
    e !== -1 && (this.availableOptions[e].selected = !0), this.tabIndex = 0, this.addEventListener("focus", this.handleFocus), this.addEventListener("keydown", this.handleKeyDown), (t = this.internals.form) == null || t.addEventListener("submit", (s) => this.handleSubmit(s));
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), this.removeEventListener("focus", this.handleFocus), this.removeEventListener("keydown", this.handleKeyDown), (e = this.internals.form) == null || e.removeEventListener("submit", (t) => this.handleSubmit(t));
  }
  handleSubmit(e) {
    this.checkValidity() || (this.onInvalid(this.internals.validity), e.preventDefault());
  }
  handleFocus() {
    this.availableOptions[this.focusedOptionIndex].focus();
  }
  renderErrorMessage() {
    return y(this.validationMessage) ? l`` : l`
        <gup-form-validation-message class="error" id="error-message">
          ${this.validationMessage}
        </gup-form-validation-message>`;
  }
  renderHint() {
    return this.hasSlotController.test("hint") ? l`<gup-form-hint class="hint" id="hint"><slot name="hint"></slot></gup-form-hint>` : c;
  }
  render() {
    return l`
      <fieldset aria-describedby=${O(this.hasSlotController.test("hint"), !this.checkValidity())} @gup-change=${this.handleOptionChecked}>
        <legend class="${b({
      label: !0,
      "has-error": !this.checkValidity()
    })}">
          ${this.label}
        </legend>
        ${this.renderErrorMessage()}
        <gup-track direction="vertical" gap="3">
          <slot></slot>
        </gup-track>
        ${this.renderHint()}
      </fieldset>
      <input
        type="text"
        class="validation-target"
        ?required=${this.required}
        tabindex="-1"
        hidden
      />
    `;
  }
};
i.formControlValidators = [C];
i.styles = w;
o([
  r()
], i.prototype, "label", 2);
o([
  r({ type: String, reflect: !0 })
], i.prototype, "value", 2);
o([
  r({ type: String, reflect: !0 })
], i.prototype, "name", 2);
o([
  r({ type: Boolean, reflect: !0 })
], i.prototype, "required", 2);
o([
  r({ attribute: "error-message" })
], i.prototype, "errorMessage", 2);
o([
  p("gup-change")
], i.prototype, "onChange", 2);
o([
  p("gup-invalid")
], i.prototype, "onInvalid", 2);
o([
  f(".validation-target")
], i.prototype, "validationTarget", 2);
o([
  v()
], i.prototype, "focusedOptionIndex", 2);
i = o([
  g("gup-radio-button-group")
], i);
export {
  i as RadioButtonGroup
};
