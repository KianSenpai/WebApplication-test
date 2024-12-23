import { i as m, s as f, x as s, e as g, G as v } from "./styles-DhFvdPhm.js";
import { n as r } from "./property-DJzm_oB9.js";
import { t as l } from "./state-B6RxDmTk.js";
import { i as b } from "./query-DpC1Q-im.js";
import { l as y } from "./live-BgB98mI2.js";
import { l as a } from "./if-defined-DtNbtuPw.js";
import { H as x } from "./slot-controller-BinWfe2f.js";
import { o as w } from "./class-map-CgF9gVe_.js";
import { w as $ } from "./watch-UI3Ke5w9.js";
import { e as d } from "./event-Ck0966vL.js";
import { i as C } from "./form-validators-CgTwu_1X.js";
import { g as k } from "./helpers-CEyIMPnX.js";
import "./icon.js";
import "./form-hint.js";
import "./form-validation-message.js";
import { F as V } from "./FormControlMixin-CBpJ9UGl.js";
const I = m`:host{--padding-inline: var(--gup-component-4);--padding-block: var(--gup-component-3);--border-color: var(--gup-color-states-base-border);--text-color: var(--gup-color-content-primary);--value-color: var(--gup-color-content-primary);--placeholder-color: var(--gup-color-content-secondary);display:block}:host([disabled]){--text-color: var(--gup-color-content-tertiary);--border-color: transparent;--gup-icon--fill-color: var(--gup-color-states-disabled-medium);--value-color: var(--gup-color-states-disabled-medium);--affix-color: var(--gup-color-states-disabled-medium);--placeholder-color: var(--gup-color-states-disabled-medium)}:host([type="tel"]) .input-wrapper,:host([type="email"]) .input-wrapper{direction:ltr}.host-inner.invalid{--text-color: var(--gup-color-negative-medium);--border-color: var(--text-color);--second-border--box-shadow: 0 0 0 1px var(--gup-color-negative-medium) inset}:host(:hover:not([disabled])) .host-inner:not(.invalid) .input-wrapper{--second-border--box-shadow: 0 0 0 1px var(--gup-color-states-base-border) inset}:host(:hover:not([disabled])) .host-inner:not(.invalid).has-prefix .prefix,:host(:hover:not([disabled])) .host-inner:not(.invalid).has-suffix .suffix{z-index:-1}:host(:not([disabled])) .host-inner.dirty{--border-color: var(--gup-color-states-base-border)}.label{color:var(--text-color);font-weight:var(--font-weight-base-beta);display:block;margin-bottom:var(--gup-spacing-component-default)}.validation-message{color:var(--text-color);fill:var(--text-color);display:flex;gap:var(--gup-component-3);align-items:center;margin-bottom:var(--gup-spacing-component-default)}.input-wrapper{display:flex;border-radius:var(--gup-radius-component-default);border:1px solid var(--border-color);line-height:1;overflow:hidden;box-shadow:var(--second-border--box-shadow)}:host(:not([disabled])) .host-inner.focused .input-wrapper{--comment: "focus-outline mixin";outline:6px solid var(--gup-color-states-base-focus-ring);outline-offset:3px;--comment-end: "focus-outline mixin"}.input-inner-wrapper{display:flex;width:100%;background-color:var(--gup-color-states-base-bg)}:host([disabled]) .input-inner-wrapper{background-color:var(--gup-color-states-disabled-low)}.has-prefix .prefix,.has-suffix .suffix,.has-input-start .input-start,.has-input-end .input-end{display:inline-flex;flex:0 0 auto;align-items:center}:host(:not([disabled])) .has-input-start .input-start,:host(:not([disabled])) .has-input-end .input-end{--gup-icon--fill-color: var(--gup-color-content-secondary)}.has-input-start .input-start{padding-inline-start:var(--gup-component-4);padding-inline-end:var(--gup-component-3)}.has-input-end .input-end{padding-inline-start:var(--gup-component-3);padding-inline-end:var(--gup-component-4)}.has-prefix .prefix,.has-suffix .suffix{padding-inline:var(--gup-component-4);padding-block:var(--padding-block);background-color:var(--gup-color-states-base-bg-secondary);color:var(--affix-color, var(--gup-color-content-secondary));cursor:default;font-size:var(--font-size-300)}.input{--comment: "reset-input mixin";border:none;outline:none;background-color:transparent;width:100%;cursor:inherit;--comment-end: "reset-input mixin";flex-grow:1;padding-inline:var(--padding-inline);padding-block:var(--padding-block);color:var(--value-color);line-height:1.4}.input::placeholder{color:var(--placeholder-color)}.input::-webkit-calendar-picker-indicator{display:none}.hint{margin-top:var(--gup-spacing-component-default)}`;
var S = Object.defineProperty, M = Object.getOwnPropertyDescriptor, i = (e, o, u, p) => {
  for (var n = p > 1 ? void 0 : p ? M(o, u) : o, h = e.length - 1, c; h >= 0; h--)
    (c = e[h]) && (n = (p ? c(o, u, n) : c(n)) || n);
  return p && n && S(o, u, n), n;
};
let t = class extends V(v) {
  constructor() {
    super(...arguments), this.hasSlotController = new x(this, "prefix", "suffix", "input-start", "input-end", "hint"), this.required = !1, this.type = "text", this.name = "", this.value = "", this.placeholder = "", this.disabled = !1, this.errorMessage = "", this.readonly = !1, this.focused = !1, this.dirty = !1, this.passwordVisible = !1, this.submitted = !1, this.interacted = !1;
  }
  async handleValueChange() {
    this.setValue(this.value), this.dirty = !!this.value, await this.validationComplete, this.requestUpdate();
  }
  async forceCustomError() {
    await this.updateComplete, this.validationTarget.setCustomValidity(this.errorMessage || "An error occurred"), this.setValue(this.value), this.reportValidity();
  }
  async clearCustomError() {
    await this.updateComplete, this.validationTarget.setCustomValidity(""), this.setValue(this.value), this.reportValidity();
  }
  handleInput(e) {
    const o = e.target.value;
    this.interacted = !0, this.value = o, this.onInput(o);
  }
  handleChange(e) {
    const o = e.target.value;
    this.interacted = !0, this.value = o, this.onChange(o);
  }
  handleFocus(e) {
    this.focused = !0, this.onFocus(e), (this.type === "date" || this.type === "time") && this.showPicker();
  }
  handleBlur() {
    this.focused = !1, this.interacted = !0;
  }
  /** Shows the native HTML picker (eg date or time popup) */
  showPicker() {
    "showPicker" in HTMLInputElement.prototype && this.validationTarget.showPicker();
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), (e = this.internals.form) == null || e.addEventListener("submit", () => {
      this.submitted = !0, this.reportValidity();
    });
  }
  firstUpdated() {
    this.setValue(this.value);
  }
  reportValidity() {
    return this.requestUpdate(), this.checkValidity();
  }
  validityCallback() {
    var e;
    return this.onInvalid(this.internals.validity), this.errorMessage || ((e = this.validationTarget) == null ? void 0 : e.validationMessage);
  }
  valueChangedCallback(e) {
    this.value = e;
  }
  focusInput() {
    this.validationTarget.focus();
  }
  textVisibilityToggle() {
    this.passwordVisible = !this.passwordVisible;
  }
  renderIconButton(e, o) {
    return s`<button aria-label="${o}" @click="${this.focusInput}" ?disabled="${this.disabled}"><gup-icon icon-name="${e}" height="24" width="24"></gup-icon></button>`;
  }
  renderIcon(e) {
    return s`<gup-icon icon-name="${e}" height="24" width="24"></gup-icon>`;
  }
  renderInputStart() {
    return this.type === "email" ? this.renderIcon("mail") : this.type === "tel" ? this.renderIcon("phone") : this.type === "date" ? this.renderIconButton("calendar-today", "Click to pick a date") : this.type === "time" ? this.renderIconButton("schedule", "Click to pick time") : s`<slot name="input-start"></slot>`;
  }
  renderInputEnd() {
    if (this.type === "password") {
      const e = this.passwordVisible ? "Click to hide password" : "Click to show password";
      return s`
        <button title="${e}" aria-label="${e}" @click="${this.textVisibilityToggle}" ?disabled="${this.disabled}">
          <gup-icon icon-name="${this.passwordVisible ? "visibility-off" : "visibility"}" height="24" width="24"></gup-icon>
        </button>`;
    } else
      return s`<slot name="input-end"></slot>`;
  }
  renderPrefix() {
    return s`
      <div class="prefix" part="prefix" @click="${this.focusInput}">
        <slot name="prefix"></slot>
      </div>
    `;
  }
  renderSuffix() {
    return s`
      <div class="suffix" part="suffix" @click="${this.focusInput}">
        <slot name="suffix"></slot>
      </div>
    `;
  }
  renderInvalidMessage() {
    return !this.checkValidity() && (this.interacted || this.submitted) ? s`<gup-form-validation-message class="validation-message" id="error-message">
        ${this.validationMessage}
        </gup-form-validation-message>` : s``;
  }
  render() {
    let e = this.type;
    return this.type === "password" && (e = this.passwordVisible ? "text" : "password"), this.type === "numeric" && (e = "text"), s`
      <div class="${w({
      "host-inner": !0,
      "has-prefix": this.hasSlotController.test("prefix"),
      "has-suffix": this.hasSlotController.test("suffix"),
      "has-input-start": this.hasSlotController.test("input-start") || this.type === "email" || this.type === "tel" || this.type === "date" || this.type === "time",
      "has-input-end": this.hasSlotController.test("input-end") || this.type === "password",
      invalid: !this.checkValidity() && (this.interacted || this.submitted),
      required: this.required,
      focused: this.focused,
      dirty: this.dirty
    })}">
        <label class="label" for="input"><slot></slot></label>

        ${this.renderInvalidMessage()}
        <div class="input-wrapper">
          ${this.renderPrefix()}
          <div class="input-inner-wrapper">
            <div class="input-start">
              ${this.renderInputStart()}
            </div>
            <input
              aria-describedby="${k(this.hasSlotController.test("hint"), !this.checkValidity())}"
              aria-invalid="${this.checkValidity() ? "false" : "true"}"
              id="input"
              class="input"
              name="${this.name}"
              ?readonly="${this.readonly}"
              inputmode="${a(this.type === "numeric" ? "numeric" : void 0)}"
              type="${e}"
              pattern="${a(this.pattern ? this.pattern : this.type === "numeric" ? "[0-9]*" : void 0)}"
              minlength="${a(this.minlength)}"
              maxlength="${a(this.maxlength)}"
              min="${a(this.min)}"
              max="${a(this.max)}"
              step="${a(this.step)}"
              placeholder="${a(this.placeholder)}"
              @change="${this.handleChange}"
              @input="${this.handleInput}"
              @focus="${this.handleFocus}"
              @blur="${this.handleBlur}"
              ?required=${this.required}
              ?disabled=${this.disabled}
              .value="${y(this.value)}"
              part="input"
            >
            <div class="input-end">
              ${this.renderInputEnd()}
            </div>
          </div>
          ${this.renderSuffix()}
        </div>
        <slot name="popup"></slot>
        ${this.hasSlotController.test("hint") ? s`<gup-form-hint class="hint" id="hint"><slot name="hint"></slot></gup-form-hint>` : ""}
      </div>
    `;
  }
};
t.shadowRootOptions = { ...f.shadowRootOptions, delegatesFocus: !0 };
t.formControlValidators = C;
t.styles = I;
i([
  r({ type: Boolean, reflect: !0 })
], t.prototype, "required", 2);
i([
  r({ reflect: !0 })
], t.prototype, "type", 2);
i([
  r()
], t.prototype, "name", 2);
i([
  r()
], t.prototype, "value", 2);
i([
  r()
], t.prototype, "placeholder", 2);
i([
  r({ type: Boolean, reflect: !0 })
], t.prototype, "disabled", 2);
i([
  r({ type: Number, reflect: !0 })
], t.prototype, "minlength", 2);
i([
  r({ type: Number, reflect: !0 })
], t.prototype, "maxlength", 2);
i([
  r({ reflect: !0 })
], t.prototype, "min", 2);
i([
  r({ reflect: !0 })
], t.prototype, "max", 2);
i([
  r({ type: String, reflect: !0 })
], t.prototype, "pattern", 2);
i([
  r({ type: Number, reflect: !0 })
], t.prototype, "step", 2);
i([
  r({ attribute: "error-message" })
], t.prototype, "errorMessage", 2);
i([
  r({ type: Boolean, reflect: !0 })
], t.prototype, "readonly", 2);
i([
  l()
], t.prototype, "focused", 2);
i([
  l()
], t.prototype, "dirty", 2);
i([
  l()
], t.prototype, "passwordVisible", 2);
i([
  l()
], t.prototype, "submitted", 2);
i([
  l()
], t.prototype, "interacted", 2);
i([
  b("input")
], t.prototype, "validationTarget", 2);
i([
  $("value")
], t.prototype, "handleValueChange", 1);
i([
  d("gup-change")
], t.prototype, "onChange", 2);
i([
  d("gup-input")
], t.prototype, "onInput", 2);
i([
  d("gup-invalid")
], t.prototype, "onInvalid", 2);
i([
  d("gup-focus")
], t.prototype, "onFocus", 2);
t = i([
  g("gup-input-field")
], t);
export {
  t as InputField
};
