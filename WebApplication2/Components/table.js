import { i as p, s as n, G as b, x as i, e as c } from "./styles-DhFvdPhm.js";
const h = p`:host{display:block;width:100%}.table{border-collapse:collapse;border-spacing:0;width:100%;overflow:auto;display:table}.table-section--type-header{display:table-header-group}.table-section--type-body{display:table-row-group}.table-row{display:table-row}`;
var u = Object.defineProperty, y = Object.getOwnPropertyDescriptor, w = (o, e, s, t) => {
  for (var l = t > 1 ? void 0 : t ? y(e, s) : e, r = o.length - 1, d; r >= 0; r--)
    (d = o[r]) && (l = (t ? d(e, s, l) : d(l)) || l);
  return t && l && u(e, s, l), l;
};
let a = class extends b {
  hasHeader() {
    return this.querySelectorAll('gup-table-cell[type="header"]').length > 0;
  }
  updated() {
    this.updateSlots();
  }
  /** Allows to manually update the table after modifying its structure */
  updateSlots() {
    var s, t;
    const o = (s = this.shadowRoot) == null ? void 0 : s.querySelector('slot[name="head-cells"]');
    o == null || o.assign(...this.querySelectorAll('gup-table-cell[type="header"]'));
    const e = (t = this.shadowRoot) == null ? void 0 : t.querySelector('slot[name="body-rows"]');
    e == null || e.assign(...this.querySelectorAll("gup-table-row"));
  }
  render() {
    return i`
      <div role="table" class="table">
        <!-- thead -->
        ${this.hasHeader() ? i`
          <div role="rowgroup" class="table-section table-section--type-header">
            <div role="row" class="table-row">
              <slot name="head-cells"></slot>
            </div>
          </div>
        ` : ""}
        <!-- tbody -->
        <div role="rowgroup" class="table-section table-section--type-body">
          <slot name="body-rows"></slot>
        </div>
      </div>
    `;
  }
};
a.styles = h;
a.shadowRootOptions = { ...n.shadowRootOptions, slotAssignment: "manual" };
a = w([
  c("gup-table")
], a);
export {
  a as Table
};
