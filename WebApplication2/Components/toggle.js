import { i as p, s as u, x as d, A as b, e as g, G as m } from "./styles-DhFvdPhm.js";
import { n as i } from "./property-DJzm_oB9.js";
import { i as v } from "./query-DpC1Q-im.js";
import { e as x } from "./event-Ck0966vL.js";
import { i as f } from "./form-validators-CgTwu_1X.js";
import { H as k } from "./slot-controller-BinWfe2f.js";
import "./form-hint.js";
import { F as y } from "./FormControlMixin-CBpJ9UGl.js";
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function h(t, e, a) {
  return t ? e() : a == null ? void 0 : a();
}
const w = p`:host{--width: 44px;--knob-size: var(--gup-component-6);--padding: 2px;--transition-animation: cubic-bezier(.2, 0, 1, .9);--transition-time: 70ms;display:block;color:var(--gup-color-content-primary)}.track{position:relative;display:flex;align-items:flex-start;gap:12px;padding-block:var(--gup-component-3);border-radius:var(--gup-radius-component-default)}:host(:not([disabled]:not([readonly]))) .track:hover{background-color:var(--gup-color-states-secondary-hover)}.native-input{--comment: "screenreader-text mixin";position:absolute;overflow:hidden;clip:rect(0 0 0 0);height:1px;width:1px;margin:-1px;padding:0;border:none;white-space:nowrap;--comment-end: "screenreader-text mixin"}.box{position:relative;background-color:var(--gup-color-neutral-low);border-radius:var(--gup-radius-button);display:flex;transition:background-color var(--transition-time) var(--transition-animation);align-items:center;width:var(--width);flex-shrink:0;padding:var(--padding);box-sizing:border-box}.box:hover{background-color:var(--gup-color-states-primary-hover)}.text-container{display:flex;flex-direction:column;gap:var(--gup-component-3);text-wrap:balance;line-height:var(--line-height-500)}:host(:focus-within) .box{--comment: "focus-outline mixin";outline:4px solid var(--gup-color-states-base-focus-ring);outline-offset:3px;--comment-end: "focus-outline mixin"}.knob{width:var(--knob-size);height:var(--knob-size);border-radius:51%;background-color:var(--gup-color-neutral-contrast)}:host([checked]) .box{background-color:var(--gup-color-brand-high)}:host([checked]) .knob{transform:translate(calc(var(--width) - 100% - var(--padding) * 2))}:host(:host-context([dir="rtl"])):host([checked]) .knob{transform:translate(calc(var(--width) * -1 + 100% + var(--padding) * 2))}:host([disabled]) .text-container,:host([readonly]) .text-container{color:var(--gup-color-content-tertiary)}:host([disabled]) .hint,:host([readonly]) .hint{color:var(--gup-color-content-tertiary)}:host([disabled]) .box,:host([readonly]) .box{background-color:var(--gup-color-states-disabled-low);cursor:default}:host([disabled]) .knob,:host([readonly]) .knob{background-color:var(--gup-color-states-disabled-medium)}`;
var C = Object.defineProperty, $ = Object.getOwnPropertyDescriptor, r = (t, e, a, s) => {
  for (var n = s > 1 ? void 0 : s ? $(e, a) : e, l = t.length - 1, c; l >= 0; l--)
    (c = t[l]) && (n = (s ? c(e, a, n) : c(n)) || n);
  return s && n && C(e, a, n), n;
};
let o = class extends y(m) {
  constructor() {
    super(...arguments), this.name = "", this.checked = !1, this.disabled = !1, this.readonly = !1, this.knobLocation = "before", this.hasSlotController = new k(this, "hint");
  }
  toggle(t) {
    if (this.disabled) return;
    const e = t.target.checked;
    this.checked = e, this.onChange(this.checked);
  }
  renderHint() {
    return this.hasSlotController.test("hint") ? d`<gup-form-hint class="hint" id="hint"><slot name="hint"></slot></gup-form-hint>` : b;
  }
  renderText() {
    return d`
      <div class="text-container">
        <slot></slot>
        ${this.renderHint()}
      </div>
    `;
  }
  handleChange(t) {
    this.checked = t.target.checked;
  }
  render() {
    return d`
      <label class="track">
        ${h(this.knobLocation === "after", () => this.renderText())}
        <input
          class="native-input"
          type="checkbox"
          name="${this.name}"
          aria-describedby="hint"
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          @click=${this.toggle}
          ?readonly="${this.readonly}"
          @change=${this.handleChange}
        >
        <div class="box">
          <div class="knob"></div>
        </div>
        ${h(this.knobLocation === "before", () => this.renderText())}
      </label>
    `;
  }
};
o.shadowRootOptions = { ...u.shadowRootOptions, delegatesFocus: !0 };
o.formControlValidators = f;
o.styles = w;
r([
  i()
], o.prototype, "name", 2);
r([
  i({ type: Boolean, reflect: !0 })
], o.prototype, "checked", 2);
r([
  i({ type: Boolean, reflect: !0 })
], o.prototype, "disabled", 2);
r([
  i({ type: Boolean, reflect: !0 })
], o.prototype, "readonly", 2);
r([
  i({ reflect: !0, attribute: "knob-location" })
], o.prototype, "knobLocation", 2);
r([
  x("gup-change")
], o.prototype, "onChange", 2);
r([
  v("[type=checkbox]")
], o.prototype, "checkboxElement", 2);
o = r([
  g("gup-toggle")
], o);
export {
  o as Toggle
};
