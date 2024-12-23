import { i as p, s as u, A as m, x as n, e as g, G as f } from "./styles-DhFvdPhm.js";
import { n as o } from "./property-DJzm_oB9.js";
import { i as v } from "./query-DpC1Q-im.js";
import { l as b } from "./if-defined-DtNbtuPw.js";
import { e as h } from "./event-Ck0966vL.js";
import { l as k } from "./live-BgB98mI2.js";
import { H as y } from "./slot-controller-BinWfe2f.js";
import { g as x } from "./helpers-CEyIMPnX.js";
import "./icon.js";
import "./track.js";
import "./form-hint.js";
import "./form-validation-message.js";
import { r as C } from "./validators-CzEExH8K.js";
import { F as w } from "./FormControlMixin-CBpJ9UGl.js";
const $ = p`:host{color:var(--gup-color-content-primary)}:host *{outline:none}.native-label{display:flex;gap:var(--gup-spacing-component-default);cursor:pointer;-webkit-user-select:none;user-select:none}.native-input{--comment: "screenreader-text mixin";position:absolute;overflow:hidden;clip:rect(0 0 0 0);height:1px;width:1px;margin:-1px;padding:0;border:none;white-space:nowrap;--comment-end: "screenreader-text mixin"}.error{padding-bottom:var(--gup-spacing-component-default)}.check-mark{display:flex;flex-shrink:0;gap:var(--gup-spacing-component-default);cursor:pointer;-webkit-user-select:none;user-select:none;align-items:center;justify-content:center;width:32px;height:32px;border:1px solid var(--gup-color-states-base-border);border-radius:var(--gup-checkbox--check-mark--border-radius, var(--gup-radius-component-default));color:var(--gup-color-content-primary);background-color:var(--gup-color-states-base-bg)}.text-container{display:flex;flex-direction:column;gap:var(--gup-component-2);text-wrap:balance;line-height:var(--line-height-500);padding-top:3px}:host([appearance="circle"]) .check-mark{border-radius:var(--gup-radius-component-full)}:host(:hover) .check-mark{border:2px solid var(--gup-color-states-base-border)}:host([size="s"]){font-size:var(--font-size-300)}:host([size="s"]) .check-mark{width:24px;height:24px;border-radius:var(--gup-radius-component-small)}:host([size="s"][appearance="circle"]) .check-mark{border-radius:var(--gup-radius-component-full)}:host(:is([checked],[indeterminate])) .check-mark{background-color:var(--gup-color-brand-high);border-color:transparent}:host(:is([checked],[indeterminate])) .icon{--gup-icon--fill-color: var(--gup-color-neutral-contrast)}:host([disabled]){pointer-events:none}:host([disabled]) .check-mark{background-color:var(--gup-color-states-disabled-low);border-color:transparent}:host([disabled]) .icon{--gup-icon--fill-color: var(--gup-color-states-disabled-medium)}:host(:not([disabled])) input:focus+.check-mark{--comment: "focus-outline mixin";outline:4px solid var(--gup-color-states-base-focus-ring);outline-offset:3px;--comment-end: "focus-outline mixin"}`;
var V = Object.defineProperty, q = Object.getOwnPropertyDescriptor, r = (e, i, c, s) => {
  for (var a = s > 1 ? void 0 : s ? q(i, c) : i, l = e.length - 1, d; l >= 0; l--)
    (d = e[l]) && (a = (s ? d(i, c, a) : d(a)) || a);
  return s && a && V(i, c, a), a;
};
let t = class extends w(f) {
  constructor() {
    super(...arguments), this.hasSlotController = new y(this, "hint"), this.name = "", this.checked = !1, this.indeterminate = !1, this.size = "m", this.appearance = "default", this.required = !1, this.disabled = !1, this.errorMessage = "";
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), (e = this.internals.form) == null || e.addEventListener("submit", (i) => this.handleSubmit(i));
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), (e = this.internals.form) == null || e.removeEventListener("submit", (i) => this.handleSubmit(i));
  }
  reportValidity() {
    return this.requestUpdate(), this.checkValidity();
  }
  validityCallback() {
    var e;
    return this.errorMessage || ((e = this.validationTarget) == null ? void 0 : e.validationMessage);
  }
  firstUpdated(e) {
    e.has("checked") && this.checked && (this.value = "on", this.setValue(this.value));
  }
  async updated(e) {
    e.has("checked") && this.required && (this.checked ? this.setValue(this.value) : this.checked || this.setValue(""), await this.validationComplete, this.checkValidity() || this.onInvalid(this.internals.validity), this.requestUpdate()), (e.has("indeterminate") || e.has("checked")) && this.indeterminate && this.checked && (this.checked = !1, this.requestUpdate("checked", !0));
  }
  handleSubmit(e) {
    this.reportValidity() || (this.onInvalid(this.internals.validity), e.preventDefault());
  }
  handleChange(e) {
    if (this.disabled)
      return;
    const i = e.target;
    this.checked = i.checked, this.onChange(i.checked), this.indeterminate = !1;
  }
  render() {
    let e = "";
    this.checked && (e = "check"), this.indeterminate && (e = "remove");
    const i = this.checkValidity() ? m : n`
      <gup-form-validation-message class="error" id="error-message">
        ${this.validationMessage}
      </gup-form-validation-message>
    `;
    return n`
    ${i}
    <label class="native-label">
      <input
        id="input"
        class="native-input"
        type="checkbox"
        aria-describedby=${x(this.hasSlotController.test("hint"), !this.checkValidity())}
        aria-required=${this.required}
        .indeterminate=${this.indeterminate}
        value=${b(this.value)}
        ?disabled=${this.disabled}
        .checked=${k(this.checked)}
        @change=${this.handleChange}
      />
      <div class="check-mark">
        ${e ? n`
                <gup-icon icon-name="${e}" class="icon" width="24" height="24"></gup-icon>` : null}
      </div>
      <div class="text-container">
        <div><slot></slot></div>
        ${this.hasSlotController.test("hint") ? n`<gup-form-hint id="hint"><slot name="hint"></slot></gup-form-hint>` : ""}
      </div>
    </label>
    `;
  }
};
t.shadowRootOptions = { ...u.shadowRootOptions, delegatesFocus: !0 };
t.formControlValidators = [C];
t.styles = $;
r([
  o()
], t.prototype, "name", 2);
r([
  o({ type: Boolean, reflect: !0 })
], t.prototype, "checked", 2);
r([
  o({ type: Boolean, reflect: !0 })
], t.prototype, "indeterminate", 2);
r([
  o()
], t.prototype, "size", 2);
r([
  o()
], t.prototype, "appearance", 2);
r([
  o()
], t.prototype, "value", 2);
r([
  o({ type: Boolean, reflect: !0 })
], t.prototype, "required", 2);
r([
  o({ type: Boolean, reflect: !0 })
], t.prototype, "disabled", 2);
r([
  o({ attribute: "error-message" })
], t.prototype, "errorMessage", 2);
r([
  h("gup-change")
], t.prototype, "onChange", 2);
r([
  h("gup-invalid")
], t.prototype, "onInvalid", 2);
r([
  v("[type=checkbox]")
], t.prototype, "validationTarget", 2);
t = r([
  g("gup-checkbox")
], t);
export {
  t as Checkbox
};
