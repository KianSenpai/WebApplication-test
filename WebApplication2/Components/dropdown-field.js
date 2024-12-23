import { i as c, G as m, x as r, A as g, e as w } from "./styles-DhFvdPhm.js";
import { n as i } from "./property-DJzm_oB9.js";
import { t as d } from "./state-B6RxDmTk.js";
import { i as h } from "./query-DpC1Q-im.js";
import "./input-field.js";
import "./spinner.js";
import "./track.js";
import { e as y } from "./event-Ck0966vL.js";
const b = c`:host{--gup-dropdown-field--menu-width: 100%;--gup-spinner--size: 20px;position:relative}.dropdown-menu{display:none;position:absolute;width:var(--gup-dropdown-field--menu-width);z-index:var(--gup-dropdown-field--z-index, 1);margin-top:9px}.spinner-wrapper{padding-inline:2px}`;
var f = Object.defineProperty, v = Object.getOwnPropertyDescriptor, n = (t, o, s, p) => {
  for (var l = p > 1 ? void 0 : p ? v(o, s) : o, a = t.length - 1, u; a >= 0; a--)
    (u = t[a]) && (l = (p ? u(o, s, l) : u(l)) || l);
  return p && l && f(o, s, l), l;
};
let e = class extends m {
  constructor() {
    super(), this.value = "", this.name = "", this.placeholder = "", this.loading = !1, this.clearable = !1, this.disabled = !1, this.loadingLabel = "Loading...", this.clearLabel = "Clear", this.searchValue = "", this.filteredItems = [], this.dropdownOpened = !1, this.temporaryValue = "", this.dropdownMenuItemClick = this.dropdownMenuItemClick.bind(this);
  }
  async onInputFocus() {
    this.loading || this.toggleDropdown();
  }
  async onInputClick() {
    this.inputField.focused && !this.dropdownOpened && !this.loading && this.toggleDropdown();
  }
  toggleDropdown() {
    this.dropdownOpened = !this.dropdownOpened, this.popup ? this.popup.style.display = this.dropdownOpened ? "block" : "none" : console.error("Popup not found");
  }
  closeDropdown() {
    this.dropdownOpened = !1, this.popup ? this.popup.style.display = "none" : console.error("Popup not found");
  }
  async handleSearchInput(t) {
    this.getDropdownMenu().handleSearchInput(t), this.onInput(t.target.value);
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("dropdown-menu-item-click", this.dropdownMenuItemClick), document.addEventListener("keydown", this.handleKeyDown.bind(this));
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("dropdown-menu-item-click", this.dropdownMenuItemClick), document.removeEventListener("keydown", this.handleKeyDown.bind(this));
  }
  dropdownMenuItemClick(t) {
    const o = t.detail.element;
    this.temporaryValue = o.label, o.selected || (this.temporaryValue = "");
  }
  applyValue() {
    const t = this.getDropdownMenu();
    if (t.multiple) {
      const o = t.selectedItems.length;
      o === 0 ? (this.value = "", this.temporaryValue = "") : this.value = `${o} selected`;
    } else
      this.value = this.temporaryValue;
    this.closeDropdown();
  }
  /** Clears current value */
  clearValue() {
    this.value = "", this.temporaryValue = "";
    const t = this.getDropdownMenu();
    t && t.clearSelection();
  }
  handleKeyDown(t) {
    t.key === "Escape" && this.dropdownOpened && this.closeDropdown();
  }
  getDropdownMenu() {
    return this.getElementsByTagName("gup-dropdown-menu")[0];
  }
  /** Gets currently selected items */
  getSelectedDropdownItems() {
    return this.getDropdownMenu().getSelectedItems().map((o) => ({
      id: o.id,
      label: o.label,
      selected: o.selected,
      value: o.value
    }));
  }
  renderLoadingSpinner() {
    return r`
      <gup-track horizontal-alignment="center" vertical-alignment="center" class="spinner-wrapper" slot="input-end">
        <gup-spinner label-hidden label=${this.loadingLabel}></gup-spinner>
      </gup-track>
    `;
  }
  renderEndSlot() {
    return r`
      <gup-track slot="input-end" horizontal-alignment="right">
        ${this.value && this.clearable ? r`
          <button @click=${this.clearValue} aria-label="${this.clearLabel}" title="${this.clearLabel}">
            <gup-icon icon-name="close" height="24" width="24"></gup-icon>
          </button>` : g}
        <gup-icon icon-name="keyboard-arrow-down" height="24" width="24"></gup-icon>
      </gup-track>`;
  }
  render() {
    return r`
      <gup-input-field
        .value="${this.value}"
        id="${this.name}"
        @gup-focus=${() => this.onInputFocus()}
        @click=${() => this.onInputClick()}
        @input=${this.handleSearchInput}
        name="${this.name}"
        placeholder="${this.loading ? this.loadingLabel : this.placeholder}"
        readonly
        type="text"
        ?disabled=${this.disabled}
      >
        <slot name="label"></slot>
        <span slot="hint"><slot name="hint"></slot></span>
        ${this.loading ? this.renderLoadingSpinner() : this.renderEndSlot()}
        <div slot="popup" class="dropdown-menu">
          <slot></slot>
        </div>
      </gup-input-field>
    `;
  }
};
e.styles = b;
n([
  i()
], e.prototype, "value", 2);
n([
  i()
], e.prototype, "name", 2);
n([
  i()
], e.prototype, "placeholder", 2);
n([
  i({ type: Boolean, reflect: !0 })
], e.prototype, "loading", 2);
n([
  i({ type: Boolean, reflect: !0 })
], e.prototype, "clearable", 2);
n([
  i({ type: Boolean, reflect: !0 })
], e.prototype, "disabled", 2);
n([
  i({ attribute: "loading-label" })
], e.prototype, "loadingLabel", 2);
n([
  i({ attribute: "clear-label" })
], e.prototype, "clearLabel", 2);
n([
  h("gup-input-field")
], e.prototype, "inputField", 2);
n([
  h(".dropdown-menu")
], e.prototype, "popup", 2);
n([
  d()
], e.prototype, "searchValue", 2);
n([
  d()
], e.prototype, "filteredItems", 2);
n([
  d()
], e.prototype, "dropdownOpened", 2);
n([
  d()
], e.prototype, "temporaryValue", 2);
n([
  y("gup-input")
], e.prototype, "onInput", 2);
e = n([
  w("gup-dropdown-field")
], e);
export {
  e as DropdownField
};
