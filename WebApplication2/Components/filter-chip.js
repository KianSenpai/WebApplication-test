import { i as l, G as u, x as p, e as d } from "./styles-DhFvdPhm.js";
import { n as g } from "./property-DJzm_oB9.js";
import "./icon.js";
const b = l`:host{--color: var(--gup-color-content-link);--background: var(--gup-color-states-base-bg-control);--gup-icon--fill-color: var(--color)}.button{display:inline-flex;justify-content:center;align-items:center;gap:var(--gup-component-3);padding:8px var(--gup-component-5);border-radius:var(--gup-radius-component-full);background:var(--background);color:var(--color);line-height:24px}.button:hover{--background: linear-gradient(var(--gup-color-states-secondary-hover), var(--gup-color-states-secondary-hover)), linear-gradient(var(--gup-color-brand-accent-xlow), var(--gup-color-brand-accent-xlow))}.button:active{--background: linear-gradient(0deg, var(--gup-color-states-secondary-active) 0%, var(--gup-color-states-secondary-active) 100%), var(--gup-color-states-base-bg-control)}.button{--comment: "focus-visible mixin"}@supports selector(:focus-visible){.button:focus{outline:none}.button:focus-visible{--comment: "focus-outline mixin";outline:6px solid var(--gup-color-states-base-focus-ring);outline-offset:3px;--comment-end: "focus-outline mixin"}}.button{--comment-end: "focus-visible mixin"}:host([disabled]){--color: var(--gup-color-states-disabled-medium);--background: var(--gup-color-states-disabled-low)}`;
var v = Object.defineProperty, m = Object.getOwnPropertyDescriptor, a = (e, t, s, r) => {
  for (var o = r > 1 ? void 0 : r ? m(t, s) : t, c = e.length - 1, i; c >= 0; c--)
    (i = e[c]) && (o = (r ? i(t, s, o) : i(o)) || o);
  return r && o && v(t, s, o), o;
};
let n = class extends u {
  constructor() {
    super(...arguments), this.disabled = !1;
  }
  onClick(e) {
    this.dispatchEvent(new CustomEvent("gup-click", e));
  }
  render() {
    return p`
      <button class="button" ?disabled="${this.disabled}" @click=${this.onClick}>
        <slot></slot>
        <gup-icon icon-name="close" height="24" width="24" class="icon"></gup-icon>
      </button>
    `;
  }
};
n.styles = b;
a([
  g({ type: Boolean, reflect: !0 })
], n.prototype, "disabled", 2);
n = a([
  d("gup-filter-chip")
], n);
export {
  n as FilterChip
};
