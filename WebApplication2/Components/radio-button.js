import { i as c, G as h, x as u, A as b, e as g } from "./styles-DhFvdPhm.js";
import { n as r } from "./property-DJzm_oB9.js";
import { i as v } from "./query-DpC1Q-im.js";
import { e as p } from "./event-Ck0966vL.js";
import { H as f } from "./slot-controller-BinWfe2f.js";
import "./form-hint.js";
const x = c`.wrapper{display:flex;align-items:flex-start;cursor:pointer;gap:var(--gup-component-4)}.wrapper:focus{outline:none}.box,.box-inner,.box-pupil{border-radius:var(--gup-radius-component-full)}.box{background-color:var(--gup-color-states-base-bg);border:1px solid var(--gup-color-states-base-border);width:var(--box-size);height:var(--box-size);display:flex;flex-direction:column;flex-shrink:0}.label{min-height:var(--box-size);display:flex;align-items:center}:host([disabled]){pointer-events:none}:host([disabled]) .box{background-color:var(--gup-color-states-disabled-low);border:1px solid var(--gup-color-states-disabled-low)}:host([disabled]) .box-pupil{background-color:var(--gup-color-states-disabled-medium)}:host([disabled]) .label{color:var(--gup-color-content-tertiary)}.box-pupil{visibility:hidden;background-color:var(--gup-color-brand-high);width:var(--pupil-size);height:var(--pupil-size)}:host([selected]) .box .box-pupil{visibility:visible}:host(:not([disabled])) .wrapper:focus .box{box-shadow:0 0 0 2px var(--gup-color-neutral-contrast),0 0 0 6px var(--gup-color-states-base-focus-ring)}.box-inner{flex-grow:1;display:flex;align-items:center;justify-content:center}.box-inner:hover{border:2px solid var(--gup-color-states-base-border)}.labels{display:flex;flex-direction:column;gap:var(--gup-component-1)}`;
var m = Object.defineProperty, y = Object.getOwnPropertyDescriptor, i = (e, o, l, a) => {
  for (var s = a > 1 ? void 0 : a ? y(o, l) : o, n = e.length - 1, d; n >= 0; n--)
    (d = e[n]) && (s = (a ? d(o, l, s) : d(s)) || s);
  return a && s && m(o, l, s), s;
};
let t = class extends h {
  constructor() {
    super(...arguments), this.size = "m", this.selected = !1, this.required = !1, this.disabled = !1, this.hasSlotController = new f(this, "hint"), this.sizeMap = {
      s: { boxSize: "var(--gup-icon-md)", pupilSize: "var(--gup-icon-xs)" },
      m: { boxSize: "var(--gup-icon-xl)", pupilSize: "var(--gup-icon-sm)" }
    }, this.handleFieldValueChange = (e) => {
      const o = e.detail;
      this.selected = o === this.value;
    };
  }
  handleChange() {
    this.disabled || (this.selected = !0, this.emitChange(this.value));
  }
  handleKeydown(e) {
    (e.key === "Enter" || e.key === " ") && (e.preventDefault(), this.handleChange());
  }
  get checked() {
    return this.selected;
  }
  updated(e) {
    if (e.has("size")) {
      const { boxSize: o, pupilSize: l } = this.sizeMap[this.size];
      this.style.setProperty("--box-size", `${o}`), this.style.setProperty("--pupil-size", `${l}`);
    }
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), this.field = this.closest("gup-radio-button-group"), this.field || console.warn("gup-radio-button is designed to be used inside of a gup-radio-button-group", this), (e = this.field) == null || e.addEventListener("gup-change", this.handleFieldValueChange);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), (e = this.field) == null || e.removeEventListener("gup-change", this.handleFieldValueChange);
  }
  renderHint() {
    return this.hasSlotController.test("hint") ? u`<gup-form-hint class="hint" id="hint"><slot name="hint"></slot></gup-form-hint>` : b;
  }
  focus() {
    this.radioElement.tabIndex = 0, this.radioElement.focus(), this.emitFocus(this.value);
  }
  blur() {
    this.radioElement.tabIndex = -1, this.emitBlur(this.value);
  }
  render() {
    return u`
      <div class="wrapper" @keydown=${this.handleKeydown} aria-labelledby="label"
      aria-disabled=${this.disabled} @click=${this.handleChange} role="radio" aria-checked=${this.selected} @blur=${this.blur}>
        <div class="box">
          <div class="box-inner">
            <div class="box-pupil"></div>
          </div>
        </div>
        <div class="labels">
          <div class="label" id="label"><slot></slot></div>
          ${this.renderHint()}
        </div>
      </div>
    `;
  }
};
t.styles = x;
i([
  r()
], t.prototype, "name", 2);
i([
  r()
], t.prototype, "value", 2);
i([
  r()
], t.prototype, "size", 2);
i([
  r({ type: Boolean, reflect: !0 })
], t.prototype, "selected", 2);
i([
  r({ type: Boolean, reflect: !0 })
], t.prototype, "required", 2);
i([
  r({ type: Boolean, reflect: !0 })
], t.prototype, "disabled", 2);
i([
  p("gup-change")
], t.prototype, "emitChange", 2);
i([
  p("gup-focus")
], t.prototype, "emitFocus", 2);
i([
  p("gup-blur")
], t.prototype, "emitBlur", 2);
i([
  v("[aria-checked]")
], t.prototype, "radioElement", 2);
t = i([
  g("gup-radio-button")
], t);
export {
  t as RadioButton
};
