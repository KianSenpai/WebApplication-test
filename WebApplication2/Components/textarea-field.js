import { i as g, s as m, x as s, e as v, G as b } from "./styles-DhFvdPhm.js";
import { n as i } from "./property-DJzm_oB9.js";
import { t as c } from "./state-B6RxDmTk.js";
import { i as f } from "./query-DpC1Q-im.js";
import { l as y } from "./live-BgB98mI2.js";
import { l } from "./if-defined-DtNbtuPw.js";
import { o as x } from "./class-map-CgF9gVe_.js";
import { w } from "./watch-UI3Ke5w9.js";
import { e as h } from "./event-Ck0966vL.js";
import { i as C } from "./form-validators-CgTwu_1X.js";
import { H as $ } from "./slot-controller-BinWfe2f.js";
import { g as k } from "./helpers-CEyIMPnX.js";
import "./icon.js";
import "./form-hint.js";
import "./form-validation-message.js";
import { F as V } from "./FormControlMixin-CBpJ9UGl.js";
const I = g`:host{--padding-inline: var(--gup-component-4);--padding-block: var(--gup-component-3);--border-color: var(--gup-color-states-base-border);--text-color: var(--gup-color-content-primary);--value-color: var(--gup-color-content-primary);display:block}:host([disabled]){--text-color: var(--gup-color-content-tertiary);--border-color: transparent;--value-color: var(--gup-color-states-disabled-medium)}:host([disabled]) .input{resize:none}.host-inner.invalid{--text-color: var(--gup-color-negative-medium);--border-color: var(--text-color);--second-border--box-shadow: 0 0 0 1px var(--gup-color-negative-medium) inset}:host(:hover:not([disabled])) .host-inner:not(.invalid) .input-wrapper{--second-border--box-shadow: 0 0 0 1px var(--gup-color-input-border-hover) inset}:host(:not([disabled])) .host-inner.dirty{--border-color: var(--gup-color-states-base-border)}.label{color:var(--text-color);font-weight:var(--font-weight-base-beta);display:block;margin-bottom:var(--gup-spacing-component-default)}.validation-message{margin-bottom:var(--gup-spacing-component-default)}.input-wrapper{display:flex;border-radius:var(--gup-radius-component-default);border:1px solid var(--border-color);line-height:1;overflow:hidden;box-shadow:var(--second-border--box-shadow)}:host(:not([disabled]):hover .host-inner:not(.invalid)) .input-wrapper{box-shadow:var(--gup-color-states-base-border)}:host(:not([disabled])) .host-inner.focused .input-wrapper{--comment: "focus-outline mixin";outline:6px solid var(--gup-color-states-base-focus-ring);outline-offset:3px;--comment-end: "focus-outline mixin"}.input-inner-wrapper{display:flex;width:100%;overflow:hidden;background-color:var(--gup-color-states-base-bg)}:host([disabled]) .input-inner-wrapper{background-color:var(--gup-color-states-disabled-low)}.input-start{display:inline-flex;flex:0 0 auto;padding-block:var(--padding-block);padding-inline-start:var(--gup-component-4);padding-inline-end:var(--gup-component-3)}.input{--comment: "reset-input mixin";border:none;outline:none;background-color:transparent;width:100%;cursor:inherit;--comment-end: "reset-input mixin";flex-grow:1;padding-inline:var(--padding-inline);padding-block:var(--padding-block);color:var(--value-color);line-height:1.4}.input::placeholder{color:var(--gup-color-content-secondary)}.hint{margin-top:var(--gup-spacing-component-default)}`;
var q = Object.defineProperty, M = Object.getOwnPropertyDescriptor, t = (o, r, d, n) => {
  for (var a = n > 1 ? void 0 : n ? M(r, d) : r, p = o.length - 1, u; p >= 0; p--)
    (u = o[p]) && (a = (n ? u(r, d, a) : u(a)) || a);
  return n && a && q(r, d, a), a;
};
let e = class extends V(b) {
  constructor() {
    super(...arguments), this.required = !1, this.name = "", this.value = "", this.placeholder = "", this.disabled = !1, this.rows = 4, this.errorMessage = "", this.dirty = !1, this.focused = !1, this.hasSlotController = new $(this, "hint");
  }
  async handleValueChange() {
    this.setValue(this.value), this.dirty = !!this.value, await this.validationComplete, this.requestUpdate();
  }
  handleInput(o) {
    const r = o.target.value;
    this.value = r, this.onInput(r);
  }
  handleChange(o) {
    const r = o.target.value;
    this.value = r, this.onChange(r);
  }
  connectedCallback() {
    var o;
    super.connectedCallback(), (o = this.internals.form) == null || o.addEventListener("submit", () => {
      this.reportValidity();
    });
  }
  firstUpdated() {
    this.setValue(this.value);
  }
  reportValidity() {
    return this.requestUpdate(), this.checkValidity();
  }
  validityCallback() {
    var o;
    return this.onInvalid(this.internals.validity), this.errorMessage || ((o = this.validationTarget) == null ? void 0 : o.validationMessage);
  }
  valueChangedCallback(o) {
    this.value = o;
  }
  renderInvalidMessage() {
    return this.checkValidity() ? s`` : s`<gup-form-validation-message class="validation-message" id="error-message">
        ${this.validationMessage}
        </gup-form-validation-message>`;
  }
  render() {
    return s`
      <div class="${x({
      "host-inner": !0,
      invalid: !this.checkValidity(),
      required: this.required,
      focused: this.focused,
      dirty: this.dirty
    })}">
        <label class="label" for="input"><slot></slot></label>

        ${this.renderInvalidMessage()}
        <div class="input-wrapper">
          <div class="input-inner-wrapper">
            <textarea
              aria-describedby="${k(this.hasSlotController.test("hint"), !this.checkValidity())}"
              aria-invalid="${this.checkValidity() ? "false" : "true"}"
              id="input"
              class="input"
              name="${this.name}"
              rows="${l(this.rows)}"
              minlength="${l(this.minlength)}"
              maxlength="${l(this.maxlength)}"
              placeholder="${l(this.placeholder)}"
              @change="${this.handleChange}"
              @input="${this.handleInput}"
              @focus="${() => this.focused = !0}"
              @blur="${() => this.focused = !1}"
              ?required=${this.required}
              ?disabled=${this.disabled}
              .value="${y(this.value)}"
            ></textarea>
          </div>
        </div>
        ${this.hasSlotController.test("hint") ? s`<gup-form-hint class="hint" id="hint"><slot name="hint"></slot></gup-form-hint>` : ""}
      </div>
    `;
  }
};
e.shadowRootOptions = { ...m.shadowRootOptions, delegatesFocus: !0 };
e.formControlValidators = C;
e.styles = I;
t([
  i({ type: Boolean, reflect: !0 })
], e.prototype, "required", 2);
t([
  i()
], e.prototype, "name", 2);
t([
  i()
], e.prototype, "value", 2);
t([
  i()
], e.prototype, "placeholder", 2);
t([
  i({ type: Boolean, reflect: !0 })
], e.prototype, "disabled", 2);
t([
  i({ type: Number, reflect: !0 })
], e.prototype, "minlength", 2);
t([
  i({ type: Number, reflect: !0 })
], e.prototype, "maxlength", 2);
t([
  i({ type: Number, reflect: !0 })
], e.prototype, "rows", 2);
t([
  i({ attribute: "error-message" })
], e.prototype, "errorMessage", 2);
t([
  c()
], e.prototype, "dirty", 2);
t([
  c()
], e.prototype, "focused", 2);
t([
  f("textarea")
], e.prototype, "validationTarget", 2);
t([
  w("value")
], e.prototype, "handleValueChange", 1);
t([
  h("gup-change")
], e.prototype, "onChange", 2);
t([
  h("gup-input")
], e.prototype, "onInput", 2);
t([
  h("gup-invalid")
], e.prototype, "onInvalid", 2);
e = t([
  v("gup-textarea-field")
], e);
export {
  e as TextareaField
};
