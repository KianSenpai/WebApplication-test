import { i as g, A as v, G as _, x as u, e as m } from "./styles-DhFvdPhm.js";
import { n as c } from "./property-DJzm_oB9.js";
import "./icon.js";
import { e as w } from "./live-BgB98mI2.js";
import { i as A, t as k, e as y } from "./directive-B76A7YXI.js";
import "./checkbox.js";
const x = g`:host{--gup-checkbox--check-mark--border-radius: var(--gup-radius-component-small);--icon--padding-inline-end: 12px;display:block;width:100%;padding:var(--gup-component-4)}:host(:not([visible])){display:none}.wrapper{width:100%;cursor:pointer;-webkit-user-select:none;user-select:none;display:flex;align-items:center;color:var(--gup-color-text-strong)}:host([selected]) .wrapper{font-weight:var(--font-weight-base-beta)}:host(:hover:not([disabled])) .wrapper{background-color:var(--gup-color-input-bg-secondary)}.inner{width:100%;display:flex;align-items:center;gap:var(--gup-component-4)}.content{flex-grow:1;width:100%;word-break:break-word}.check-icon-wrapper{height:20px;width:calc(20px + var(--icon--padding-inline-end))}:host([disabled]){cursor:not-allowed;background-color:var(--gup-color-input-bg-default);color:var(--gup-color-brand-tertiary)}`;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const d = (e, t) => {
  var s, i;
  const o = e._$AN;
  if (o === void 0) return !1;
  for (const l of o) (i = (s = l)._$AO) === null || i === void 0 || i.call(s, t, !1), d(l, t);
  return !0;
}, h = (e) => {
  let t, s;
  do {
    if ((t = e._$AM) === void 0) break;
    s = t._$AN, s.delete(e), e = t;
  } while ((s == null ? void 0 : s.size) === 0);
}, $ = (e) => {
  for (let t; t = e._$AM; e = t) {
    let s = t._$AN;
    if (s === void 0) t._$AN = s = /* @__PURE__ */ new Set();
    else if (s.has(e)) break;
    s.add(e), M(t);
  }
};
function C(e) {
  this._$AN !== void 0 ? (h(this), this._$AM = e, $(this)) : this._$AM = e;
}
function G(e, t = !1, s = 0) {
  const i = this._$AH, o = this._$AN;
  if (o !== void 0 && o.size !== 0) if (t) if (Array.isArray(i)) for (let l = s; l < i.length; l++) d(i[l], !1), h(i[l]);
  else i != null && (d(i, !1), h(i));
  else d(this, e);
}
const M = (e) => {
  var t, s, i, o;
  e.type == k.CHILD && ((t = (i = e)._$AP) !== null && t !== void 0 || (i._$AP = G), (s = (o = e)._$AQ) !== null && s !== void 0 || (o._$AQ = C));
};
class D extends A {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(t, s, i) {
    super._$AT(t, s, i), $(this), this.isConnected = t._$AU;
  }
  _$AO(t, s = !0) {
    var i, o;
    t !== this.isConnected && (this.isConnected = t, t ? (i = this.reconnected) === null || i === void 0 || i.call(this) : (o = this.disconnected) === null || o === void 0 || o.call(this)), s && (d(this, t), h(this));
  }
  setValue(t) {
    if (w(this._$Ct)) this._$Ct._$AI(t, this);
    else {
      const s = [...this._$Ct._$AH];
      s[this._$Ci] = t, this._$Ct._$AI(s, this, 0);
    }
  }
  disconnected() {
  }
  reconnected() {
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const f = () => new N();
class N {
}
const p = /* @__PURE__ */ new WeakMap(), b = y(class extends D {
  render(e) {
    return v;
  }
  update(e, [t]) {
    var s;
    const i = t !== this.G;
    return i && this.G !== void 0 && this.ot(void 0), (i || this.rt !== this.lt) && (this.G = t, this.dt = (s = e.options) === null || s === void 0 ? void 0 : s.host, this.ot(this.lt = e.element)), v;
  }
  ot(e) {
    var t;
    if (typeof this.G == "function") {
      const s = (t = this.dt) !== null && t !== void 0 ? t : globalThis;
      let i = p.get(s);
      i === void 0 && (i = /* @__PURE__ */ new WeakMap(), p.set(s, i)), i.get(this.G) !== void 0 && this.G.call(this.dt, void 0), i.set(this.G, e), e !== void 0 && this.G.call(this.dt, e);
    } else this.G.value = e;
  }
  get rt() {
    var e, t, s;
    return typeof this.G == "function" ? (t = p.get((e = this.dt) !== null && e !== void 0 ? e : globalThis)) === null || t === void 0 ? void 0 : t.get(this.G) : (s = this.G) === null || s === void 0 ? void 0 : s.value;
  }
  disconnected() {
    this.rt === this.lt && this.ot(void 0);
  }
  reconnected() {
    this.ot(this.lt);
  }
});
var O = Object.defineProperty, P = Object.getOwnPropertyDescriptor, r = (e, t, s, i) => {
  for (var o = i > 1 ? void 0 : i ? P(t, s) : t, l = e.length - 1, a; l >= 0; l--)
    (a = e[l]) && (o = (i ? a(t, s, o) : a(o)) || o);
  return i && o && O(t, s, o), o;
};
let n = class extends _ {
  constructor() {
    super(...arguments), this.id = "", this.label = "", this.value = "", this.disabled = !1, this.selected = !1, this.visible = !0, this.gid = n.counter++, this.buttonRef = f(), this.checkboxRef = f();
  }
  connectedCallback() {
    super.connectedCallback(), this.setAttribute("role", "listitem");
  }
  focusElement() {
    const e = this.isDropdownMenuMultiple() ? this.checkboxRef.value : this.buttonRef.value;
    e == null || e.focus();
  }
  isDropdownMenuMultiple() {
    var e;
    return ((e = this.closest("gup-dropdown-menu")) == null ? void 0 : e.multiple) ?? !1;
  }
  onClick() {
    this.disabled || (this.selected = !this.selected, this.dispatchEvent(
      new CustomEvent("dropdown-menu-item-click", {
        bubbles: !0,
        composed: !0,
        detail: { gid: this.gid, id: this.id, value: this.value, label: this.label, selected: this.selected, element: this }
      })
    ));
  }
  render() {
    return this.isDropdownMenuMultiple() ? u`
        <gup-checkbox class="checkbox"
                      size="s"
                      ?disabled=${this.disabled}
                      ?checked=${this.selected}
                      @gup-change="${this.onClick}"
                      value="${this.value}"
                      ${b(this.checkboxRef)}
        ><slot>${this.label}</slot></gup-checkbox>
         ` : u`
        <button class="wrapper" @click="${this.onClick}" ${b(this.buttonRef)}>
          <div class="inner">
            <div class="content">
              <slot>${this.label}</slot>
            </div>
            <div class="check-icon-wrapper">
                ${this.selected ? u`
                      <gup-icon height="20" width="20" icon-name="check"></gup-icon>` : ""}
            </div>
          </div>
        </button>
      `;
  }
};
n.counter = 0;
n.styles = x;
r([
  c({ reflect: !0 })
], n.prototype, "id", 2);
r([
  c({ type: String, reflect: !0 })
], n.prototype, "label", 2);
r([
  c({ type: String, reflect: !0 })
], n.prototype, "value", 2);
r([
  c({ type: Boolean, reflect: !0 })
], n.prototype, "disabled", 2);
r([
  c({ type: Boolean, reflect: !0 })
], n.prototype, "selected", 2);
r([
  c({ type: Boolean, reflect: !0 })
], n.prototype, "visible", 2);
n = r([
  m("gup-dropdown-menu-item")
], n);
export {
  n as DropdownMenuItem
};
