import { i as d, G as u, x as s, e as b } from "./styles-DhFvdPhm.js";
import { n as o } from "./property-DJzm_oB9.js";
import "./icon.js";
import "./track.js";
import "./accordion-item.js";
const h = d`:host{--step-size: var(--gup-component-8);--item-block-start-spacing: var( --gup-component-4);position:relative;display:block}:host([static-mode]) .track{margin-top:0}:host([static-mode]) .step-number:before{height:calc(100% - var(--step-size))}:host([static-mode]:last-child) .step-number:before{height:0}.track{display:flex;gap:var(--gup-component-6);margin-top:var(--gup-component-8)}.step-number{position:relative;top:var(--item-block-start-spacing)}.step-number:before{content:"";position:absolute;inset-inline-start:50%;height:100%;top:var(--step-size);border-inline-start:1px solid var(--gup-color-border-medium)}:host(:first-child) .step-number:after{content:"";position:absolute;inset-inline-start:50%;transform:translateY(-100%);top:0;border-inline-start:1px solid var(--gup-color-border-medium);height:calc(var(--gup-stepper--continued) * 15px)}.step-number-inner{width:var(--step-size);height:var(--step-size);display:flex;justify-content:center;align-items:center;font-weight:var(--font-weight-base-beta);color:var(--gup-color-content-primary)}:host([step-type="default"]) .step-number-inner{border-radius:var(--gup-radius-component-full);border:1px solid var(--gup-color-border-medium)}:host([step-type="selected"]) .step-number-inner{color:var(--gup-color-content-inverted-primary);border-radius:var(--gup-radius-component-full);border:1px solid var(--gup-color-brand-high);background-color:var(--gup-color-brand-high)}:host([step-type="done"]) .step-number-inner{--gup-icon--fill-color: var(--gup-color-positive-high);color:var(--gup-color-positive-high);border-radius:var(--gup-radius-component-full);border:1px solid var(--gup-color-positive-high);background:var(--gup-color-positive-xlow)}.label{color:var(--gup-stepper-item--label--color)}:host([step-type="selected"]) .label{color:var(--gup-stepper-item--selected--label--color, var(--gup-stepper-item--label--color))}.accordion{width:100%}.static-content{padding-block:var(--gup-component-4);border-bottom:4px solid var(--border-color)}.static-content .label{font-size:20px;font-weight:var(--font-weight-base-beta);line-height:1.4;letter-spacing:-.4px;display:block}:host(:not(:last-child)) .accordion{border-bottom:1px solid var(--gup-color-border-medium)}`;
var m = Object.defineProperty, g = Object.getOwnPropertyDescriptor, t = (p, r, a, l) => {
  for (var i = l > 1 ? void 0 : l ? g(r, a) : r, n = p.length - 1, c; n >= 0; n--)
    (c = p[n]) && (i = (l ? c(r, a, i) : c(i)) || i);
  return l && i && m(r, a, i), i;
};
let e = class extends u {
  constructor() {
    super(...arguments), this.label = "", this.stepNumber = "", this.stepType = "default", this.labelAnd = "and", this.wizardMode = !1, this.staticMode = !1, this.open = !1, this.labelShow = "Show", this.labelHide = "Hide";
  }
  connectedCallback() {
    super.connectedCallback(), this.setAttribute("role", "listitem"), (this.wizardMode || this.staticMode) && (this.open = !0);
  }
  renderStepNumber() {
    return this.stepType === "done" ? s`<gup-icon width="20" height="20" icon-name="check"></gup-icon>` : this.stepType === "and" ? this.labelAnd : this.stepNumber;
  }
  render() {
    const p = s`<span slot="label" class="label"><slot name="label"></slot></span>`, r = s`<div class="content"><slot></slot></div>`;
    return s`
      <div class="track">
        <div class="step-number">
          <div class="step-number-inner">
            ${this.renderStepNumber()}
          </div>
        </div>
        ${this.staticMode ? s`
              <div class="static-content">
                ${p}
                ${r}
              </div>
            ` : s`
              <gup-accordion-item class="accordion stepper-accordion" .open="${this.wizardMode || this.open}" @gup-toggle=${(a) => this.open = a.detail} label-show=${this.labelShow} label-hide=${this.labelHide} ?hide-controls="${this.wizardMode}">
                ${p}
                ${r}
              </gup-accordion-item>
            `}
      </div>
    `;
  }
};
e.styles = h;
t([
  o()
], e.prototype, "label", 2);
t([
  o({ attribute: "step-number" })
], e.prototype, "stepNumber", 2);
t([
  o({ attribute: "step-type", reflect: !0 })
], e.prototype, "stepType", 2);
t([
  o({ attribute: "label-and" })
], e.prototype, "labelAnd", 2);
t([
  o({ type: Boolean })
], e.prototype, "wizardMode", 2);
t([
  o({ type: Boolean, reflect: !0, attribute: "static-mode" })
], e.prototype, "staticMode", 2);
t([
  o({ type: Boolean, reflect: !0 })
], e.prototype, "open", 2);
t([
  o({ attribute: "label-show" })
], e.prototype, "labelShow", 2);
t([
  o({ attribute: "label-hide" })
], e.prototype, "labelHide", 2);
e = t([
  b("gup-stepper-item")
], e);
export {
  e as StepperItem
};
