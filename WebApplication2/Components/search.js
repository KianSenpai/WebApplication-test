import { i as u, G as d, x as p, e as h } from "./styles-DhFvdPhm.js";
import { n as r } from "./property-DJzm_oB9.js";
import "./icon.js";
import "./button.js";
const b = u`:host{--controls-container-gap: 10px;--close-width: calc(20px + var(--controls-container-gap));--search-width: calc(24px + var(--controls-container-gap));display:block;width:100%;cursor:pointer;position:relative;font-size:var(--font-size-400)}.input-container{display:flex;align-items:center;gap:var(--gup-component-4);border:1px solid var(--gup-color-states-base-border);border-radius:var(--gup-radius-component-full);background:var(--gup-color-states-base-bg);padding-block:var(--gup-component-4);padding-inline-start:var(--gup-component-5);padding-inline-end:var(--gup-component-4);outline:1px solid var(--second-border-color)}.input-container:hover{--second-border-color: var(--gup-color-states-base-border)}.input{border:none;outline:none;background-color:transparent;width:100%;min-height:23px;cursor:inherit;padding-inline-end:calc(var(--controls-container-gap) + var(--close-width) + var(--search-width))}.close-icon{--gup-icon--fill-color: var(--gup-color-content-link)}.controls-container{position:absolute;inset-inline-end:4px;inset-block-start:0;height:100%;display:flex;align-items:center;gap:var(--gup-component-3)}:host([disabled]) .input-container{--gup-icon--fill-color: var(--gup-color-states-disabled-medium);--second-border-color: var(--gup-color-states-disabled-low);background-color:var(--gup-color-states-disabled-low);border-color:var(--gup-color-states-disabled-low);color:var(--gup-color-states-disabled-medium);cursor:not-allowed}:host(:focus) .input-container{--comment: "focus-outline mixin";outline:6px solid var(--gup-color-states-base-focus-ring);outline-offset:3px;--comment-end: "focus-outline mixin";border-color:transparent}`;
var g = Object.defineProperty, v = Object.getOwnPropertyDescriptor, o = (t, i, s, n) => {
  for (var a = n > 1 ? void 0 : n ? v(i, s) : i, l = t.length - 1, c; l >= 0; l--)
    (c = t[l]) && (a = (n ? c(i, s, a) : c(a)) || a);
  return n && a && g(i, s, a), a;
};
let e = class extends d {
  constructor() {
    super(...arguments), this.name = "", this.label = "", this.disabled = !1, this.placeholder = "", this.value = "", this.searchLabel = "Search", this.resetLabel = "Clear", this.onSearchInput = (t) => {
      const i = t.target, s = this.value;
      i && (this.value = i.value, this.dispatchEvent(new CustomEvent("search-value-changed", { bubbles: !0, composed: !0, detail: (this.name, this.value) }))), s !== this.value && this.dispatchEvent(new CustomEvent("gup-change", { bubbles: !0, composed: !0, detail: this.value }));
    }, this.onSubmit = (t) => {
      t.key === "Enter" && this.onClick(t);
    };
  }
  onClick(t) {
    this.dispatchEvent(new CustomEvent("gup-click", { bubbles: !0, composed: !0, detail: t })), this.dispatchEvent(new CustomEvent("gup-submit", { bubbles: !0, composed: !0, detail: this.value }));
  }
  onClearClick() {
    this.value = "";
  }
  render() {
    return p`
    <div class="input-container">
      <input class="input"
        id="${this.name}"
        type="search"
        .value="${this.value}"
        placeholder="${this.placeholder}"
        @input=${this.onSearchInput}
        @keydown=${this.onSubmit}
        ?disabled="${this.disabled}"
        aria-label="${this.label}"
      />
      <div class="controls-container">
        ${this.value && p`
          <gup-button ?with-icon-only="${!0}" ?disabled="${this.disabled}" @gup-click=${this.onClearClick} appearance="text" type="reset" label="${this.resetLabel}">
            <gup-icon icon-name="close" height="20" width="20" class="close-icon"></gup-icon>
          </gup-button>
        `}
        <gup-button ?with-icon-only="${!0}" ?disabled="${this.disabled}" @gup-click=${this.onClick} label="${this.searchLabel}">
          <gup-icon icon-name="search" height="24" width="24"></gup-icon>
        </gup-button>
      </div>
    </div>
    `;
  }
};
e.styles = b;
o([
  r()
], e.prototype, "name", 2);
o([
  r()
], e.prototype, "label", 2);
o([
  r({ type: Boolean })
], e.prototype, "disabled", 2);
o([
  r()
], e.prototype, "placeholder", 2);
o([
  r()
], e.prototype, "value", 2);
o([
  r({ attribute: "search-label" })
], e.prototype, "searchLabel", 2);
o([
  r({ attribute: "reset-label" })
], e.prototype, "resetLabel", 2);
e = o([
  h("gup-search")
], e);
export {
  e as Search
};
