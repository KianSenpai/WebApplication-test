import { i as d, G as b, x as c, A as v, e as g } from "./styles-DhFvdPhm.js";
import { n as e } from "./property-DJzm_oB9.js";
import { l as u } from "./if-defined-DtNbtuPw.js";
const h = d`:host{--color: var(--gup-button-color, var(--gup-color-brand-medium));--gup-icon--fill-color: var(--gup-color-brand-contrast);--hover-overlay-background-image: linear-gradient( 0deg, var(--gup-color-states-primary-hover) 0%, var(--gup-color-states-primary-hover) 100% );--active-overlay-background-color: color-mix(in srgb, var(--gup-color-states-primary-active) 90%, transparent);display:inline-block}.button{width:100%;display:flex;justify-content:center;align-items:center;gap:var(--gup-component-4);border:1px solid var(--border-color, transparent);border-radius:var(--gup-radius-button);padding-block:calc(var(--unit) * 2);padding-inline:var(--gup-component-5);line-height:var(--line-height-500);text-align:center;font-size:var(--font-size-400);color:var(--color);background:var(--background);--comment: "focus-visible mixin"}@supports selector(:focus-visible){.button:focus{outline:none}.button:focus-visible{--comment: "focus-outline mixin";outline:6px solid var(--gup-color-states-base-focus-ring);outline-offset:3px;--comment-end: "focus-outline mixin"}}.button{--comment-end: "focus-visible mixin"}:host(:not([disabled]):hover):host([appearance="primary"]){--background: var(--hover-overlay-background-image), var(--gup-color-brand-medium)}:host(:not([disabled]):hover):host([appearance="secondary"]){--border-color: transparent;--background: var(--gup-color-brand-medium);--color: var(--gup-color-brand-contrast)}:host(:not([disabled]):hover):host([appearance="text"]){--background: var(--gup-color-states-secondary-hover)}:host(:not([disabled]):hover):host([appearance="danger"]){--background: var(--hover-overlay-background-image), var(--gup-color-negative-medium)}.label{--comment: "screenreader-text mixin";position:absolute;overflow:hidden;clip:rect(0 0 0 0);height:1px;width:1px;margin:-1px;padding:0;border:none;white-space:nowrap;--comment-end: "screenreader-text mixin"}:host([appearance="primary"]){--background: var(--gup-color-brand-medium);--color: var(--gup-color-neutral-contrast)}:host([appearance="secondary"]){--gup-icon--fill-color: var(--color);--background: transparent;--border-color: var(--gup-color-brand-xhigh);--color: var(--gup-color-brand-xhigh)}:host([appearance="text"]){--gup-icon--fill-color: var(--gup-color-brand-default);--color: var(--gup-color-brand-xhigh)}:host([appearance="text"]) .button{-webkit-text-decoration:var(--gup-button--underline, underline);text-decoration:var(--gup-button--underline, underline);text-underline-offset:2px}:host([appearance="danger"]){--color: var(--gup-color-neutral-contrast);--background: var(--gup-color-negative-medium)}:host([with-icon-only]) .button{padding:var(--gup-spacing-between-items);border-radius:51%}:host([disabled]){--gup-icon--fill-color: var(--gup-color-states-disabled-medium);--background: var(--gup-color-states-disabled-low);--color: var(--gup-color-states-disabled-medium);--border-color: transparent}:host([disabled]) .button{pointer-events:none}:host([disabled]):host([appearance="text"]) .button{text-decoration:none}:host([inverted]){--color: var(--gup-color-neutral-contrast)}:host([inverted]):host([appearance="primary"]){--gup-icon--fill-color: var(--gup-color-neutral-xhigh);--background: var(--gup-color-neutral-contrast);--color: var(--gup-color-neutral-xhigh)}:host([inverted]):host([appearance="secondary"]){--border-color: var(--gup-color-neutral-contrast);--background: var(--gup-color-neutral-contrast)}:host([inverted]:not([disabled]):hover):host([appearance="primary"]),:host([inverted]:not([disabled]):hover):host([appearance="secondary"]){--background: color-mix(in srgb, var(--gup-color-states-inverted-primary-hover) 80%, transparent)}:host([inverted]:not([disabled]):hover):host([appearance="text"]){--background: color-mix(in srgb, var(--gup-color-states-primary-hover) 26%, transparent)}:host([appearance="primary"]) .button:active,:host([appearance="secondary"]) .button:active{--background: color-mix(in srgb, var(--gup-color-brand-medium), var(--active-overlay-background-color))}:host([appearance="secondary"]) .button:active{--color: var(--gup-color-brand-contrast)}:host([appearance="text"]) .button:active{--background: color-mix(in srgb, var(--gup-color-states-secondary-active) 18%, transparent)}:host([appearance="danger"]) .button:active{--background: color-mix(in srgb, var(--gup-color-negative-medium), color-mix(in srgb, var(--gup-color-states-primary-active) 70%, transparent))}:host([appearance="primary"][inverted]) .button:active,:host([appearance="secondary"][inverted]) .button:active{--background: color-mix(in srgb, var(--gup-color-states-inverted-primary-active) 60%, transparent)}:host([appearance="text"][inverted]) .button:active{--background: color-mix(in srgb, var(--gup-color-states-inverted-secondary-active) 70%, transparent)}`;
var m = Object.defineProperty, y = Object.getOwnPropertyDescriptor, r = (a, n, s, i) => {
  for (var t = i > 1 ? void 0 : i ? y(n, s) : n, l = a.length - 1, p; l >= 0; l--)
    (p = a[l]) && (t = (i ? p(n, s, t) : p(t)) || t);
  return i && t && m(n, s, t), t;
};
let o = class extends b {
  constructor() {
    super(...arguments), this.kind = "button", this.type = "button", this.withIconOnly = !1, this.appearance = "primary", this.inverted = !1, this.label = "", this.disabled = !1, this.href = "", this.openInNewTab = !1;
  }
  onClick(a) {
    this.dispatchEvent(new CustomEvent("gup-click", a));
  }
  render() {
    return c`
      ${this.kind === "button" ? c`
          <button class="button" ?disabled="${this.disabled}" @click=${this.onClick} type="${this.type}" title="${u(this.withIconOnly ? this.label : void 0)}">
            <slot name="icon-start"></slot>
            <slot></slot>
            ${this.label ? c`<span class="label">${this.label}</span> ` : ""}
            <slot name="icon-end"></slot>
          </button>` : c`
          <a href="${this.href}" class="button" target="${this.openInNewTab ? "_blank" : v}" title="${u(this.withIconOnly ? this.label : void 0)}">
            <slot name="icon-start"></slot>
            <slot></slot>
            <slot name="icon-end"></slot>
          </a>
        `}
    `;
  }
};
o.styles = h;
r([
  e({ reflect: !0 })
], o.prototype, "kind", 2);
r([
  e({ reflect: !0 })
], o.prototype, "type", 2);
r([
  e({ type: Boolean, reflect: !0, attribute: "with-icon-only" })
], o.prototype, "withIconOnly", 2);
r([
  e({ reflect: !0 })
], o.prototype, "appearance", 2);
r([
  e({ type: Boolean, reflect: !0 })
], o.prototype, "inverted", 2);
r([
  e()
], o.prototype, "label", 2);
r([
  e({ type: Boolean, reflect: !0 })
], o.prototype, "disabled", 2);
r([
  e()
], o.prototype, "href", 2);
r([
  e({ type: Boolean, reflect: !0, attribute: "open-in-new-tab" })
], o.prototype, "openInNewTab", 2);
o = r([
  g("gup-button")
], o);
export {
  o as Button
};
