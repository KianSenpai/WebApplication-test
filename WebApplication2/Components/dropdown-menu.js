import { i as p, G as u, x as c, A as m, e as g } from "./styles-DhFvdPhm.js";
import { n as a } from "./property-DJzm_oB9.js";
import { t as n } from "./state-B6RxDmTk.js";
import { e as f } from "./event-Ck0966vL.js";
import "./icon.js";
const I = p`:host{--gup-dropdown-menu--max-height: 280px;display:block}.inner{display:flex;width:100%;max-height:var(--gup-dropdown-menu--max-height);flex-direction:column;align-items:flex-start;flex-shrink:0;border-radius:var(--gup-radius-component-default);padding:4px;background:var(--gup-color-states-base-bg);box-shadow:0 16px 32px 0 var(--gup-color-shadow-color-5),0 8px 16px 0 var(--gup-color-shadow-color-4),0 3px 6px 0 var(--gup-color-shadow-color-3),0 1px 2px 0 var(--gup-color-shadow-color-2)}.search-container{width:100%;display:flex;align-items:center;gap:var(--gup-component-4);border-bottom:1px solid var(--gup-color-border-low);padding:var(--gup-component-4)}.search{border:none;outline:none;background-color:transparent;width:100%}.search::placeholder{color:var(--gup-color-content-secondary)}.search:focus{border:none;outline:none;background-color:transparent}.search-icon{--gup-icon--fill-color: var(--gup-color-content-secondary)}.dropdown-items{width:100%;max-height:300px;overflow-y:auto;align-items:flex-start}.no-results{display:flex;flex-direction:column;align-items:center;justify-content:center;margin-inline:48px;margin-block:18px;text-align:center}.no-results-icon{margin-bottom:8px;width:48px;height:48px;display:inline-block}.controls{width:100%}::slotted([slot="controls"]){padding:var(--gup-component-3) var(--gup-component-4);border-top:1px solid var(--gup-color-border-low)}`;
var x = Object.defineProperty, y = Object.getOwnPropertyDescriptor, o = (e, t, i, r) => {
  for (var l = r > 1 ? void 0 : r ? y(t, i) : t, h = e.length - 1, d; h >= 0; h--)
    (d = e[h]) && (l = (r ? d(t, i, l) : d(l)) || l);
  return r && l && x(t, i, l), l;
};
let s = class extends u {
  constructor() {
    super(...arguments), this.searchEnabled = !1, this.searchNoResultsLabel = "No results for", this.searchPlaceholder = "Search...", this.multiple = !1, this.searchValue = "", this.filteredItems = [], this.selectedItems = [], this.highlightedIndex = 0, this.isNotEmpty = !0;
  }
  firstUpdated() {
    this.addEventListener("dropdown-menu-item-click", this.dropdownMenuItemClick), this.addEventListener("keydown", this.handleKeyDown), this.filteredItems = Array.from(this.querySelectorAll("gup-dropdown-menu-item"));
  }
  /** Returns currently selected items */
  getSelectedItems() {
    return this.selectedItems.map((e) => ({
      id: e.id,
      selected: e.selected,
      label: e.label,
      value: e.value
    }));
  }
  dropdownMenuItemClick(e) {
    const t = e.detail.element;
    this.selectItem(t);
  }
  selectItem(e) {
    if (this.multiple) {
      const t = this.selectedItems.findIndex((i) => i === e);
      t > -1 ? (this.selectedItems[t].selected = !1, this.selectedItems.splice(t, 1)) : (e.selected = !0, this.selectedItems.push(e));
    } else
      this.selectedItems.forEach((t) => t.selected = !1), this.selectedItems = [], e.selected = !0, this.selectedItems.push(e);
    this.onChange(this.selectedItems);
  }
  /** Clears currently selected items */
  clearSelection() {
    this.filteredItems.forEach((e) => {
      e.selected = !1;
    }), this.selectedItems = [], this.onChange(this.selectedItems);
  }
  handleSearchInput(e) {
    e.stopPropagation(), this.searchValue = e.target.value.toLowerCase(), this.updateItemsVisibility(this.searchValue);
  }
  updateItemsVisibility(e = "") {
    e.length === 0 ? this.filteredItems.forEach((t) => {
      t.visible = !0;
    }) : this.filteredItems.forEach((t) => {
      t.visible = t.label.toLowerCase().includes(e);
    });
  }
  handleKeyDown(e) {
    const t = this.filteredItems.length, i = e.target;
    e.key === "ArrowDown" ? (e.preventDefault(), this.highlightedIndex = (this.highlightedIndex + 1) % t, this.updateHighlightedItem(this.highlightedIndex)) : e.key === "ArrowUp" ? (e.preventDefault(), this.highlightedIndex = (this.highlightedIndex - 1 + t) % t, this.updateHighlightedItem(this.highlightedIndex)) : i && i.tagName === "gup-dropdown-menu-item" && e.key === "Enter" && this.highlightedIndex !== -1 && (e.preventDefault(), this.selectHighlightedItem());
  }
  updateHighlightedItem(e) {
    this.filteredItems[e].focusElement();
  }
  selectHighlightedItem() {
    const e = this.filteredItems[this.highlightedIndex];
    this.dropdownMenuItemClick(new CustomEvent("dropdown-menu-item-click", { detail: { gid: e.gid, element: e } }));
  }
  handleSlotChange(e) {
    var r;
    const i = ((r = e.target) == null ? void 0 : r.assignedNodes({ flatten: !0 })).filter((l) => l.nodeType === 1);
    this.isNotEmpty = i.length > 0;
  }
  render() {
    return this.filteredItems = Array.from(this.querySelectorAll("gup-dropdown-menu-item")), this.isNotEmpty = this.filteredItems.some((e) => e.visible), c`
      <div class="inner">
        ${this.searchEnabled ? c`
              <div class="search-container">
                <gup-icon class="search-icon" icon-name="search" width="24" height="24"></gup-icon>
                <input
                  class="search"
                  type="text"
                  placeholder="${this.searchPlaceholder}"
                  @input=${this.handleSearchInput}
                />
              </div>
            ` : ""}
        <div class="dropdown-items" role="list">
          <slot @slotchange=${this.handleSlotChange}></slot>
        </div>
        ${this.isNotEmpty ? m : c`
              <div class="no-results">
                <span class="no-result-label">
                  ${this.searchNoResultsLabel}
                  <span class="search-term">${this.searchValue}</span>
                </span>
              </div>
            `}
        <div class="controls">
          <slot name="controls"></slot>
        </div>
      </div>
    `;
  }
};
s.styles = I;
o([
  a({ type: Boolean, attribute: "search-enabled" })
], s.prototype, "searchEnabled", 2);
o([
  a({ attribute: "search-no-results-label" })
], s.prototype, "searchNoResultsLabel", 2);
o([
  a({ attribute: "search-placeholder" })
], s.prototype, "searchPlaceholder", 2);
o([
  a({ type: Boolean })
], s.prototype, "multiple", 2);
o([
  f("gup-change")
], s.prototype, "onChange", 2);
o([
  n()
], s.prototype, "searchValue", 2);
o([
  n()
], s.prototype, "filteredItems", 2);
o([
  n()
], s.prototype, "selectedItems", 2);
o([
  n()
], s.prototype, "highlightedIndex", 2);
o([
  n()
], s.prototype, "isNotEmpty", 2);
s = o([
  g("gup-dropdown-menu")
], s);
export {
  s as DropdownMenu
};
