import { i as c, G as h, x as p, e as f } from "./styles-DhFvdPhm.js";
import { n as l } from "./property-DJzm_oB9.js";
const u = c`:host{display:flex;gap:var(--gap);flex-direction:var(--direction);flex-wrap:var(--wrap);justify-content:var(--horizontal-alignment);align-items:var(--vertical-alignment)}:host([items-equal]) ::slotted(*){flex-grow:1;flex-basis:0}:host([direction="vertical-on-mobile"]){flex-direction:column}@media (min-width: 768px){:host([direction="vertical-on-mobile"]){flex-direction:row}}:host([direction="vertical-reverse-on-mobile"]){flex-direction:column-reverse}@media (min-width: 768px){:host([direction="vertical-reverse-on-mobile"]){flex-direction:row}}`;
var v = Object.defineProperty, g = Object.getOwnPropertyDescriptor, r = (e, n, a, o) => {
  for (var i = o > 1 ? void 0 : o ? g(n, a) : n, s = e.length - 1, m; s >= 0; s--)
    (m = e[s]) && (i = (o ? m(n, a, i) : m(i)) || i);
  return o && i && v(n, a, i), i;
};
let t = class extends h {
  constructor() {
    super(...arguments), this.gap = 2, this.itemsEqual = !1, this.isMultiline = !1, this.horizontalAlignment = "normal", this.verticalAlignment = "normal", this.direction = "horizontal";
  }
  render() {
    return p`
      <slot></slot>
    `;
  }
  updated(e) {
    e.has("gap") && this.style.setProperty("--gap", `calc(${this.gap} * var(--unit))`), e.has("horizontalAlignment") && this.style.setProperty(
      "--horizontal-alignment",
      `
        ${this.horizontalAlignment === "normal" ? "normal" : ""}
        ${this.horizontalAlignment === "left" ? "flex-start" : ""}
        ${this.horizontalAlignment === "right" ? "flex-end" : ""}
        ${this.horizontalAlignment === "center" ? "center" : ""}
        ${this.horizontalAlignment === "justify" ? "space-between" : ""}
      `
    ), e.has("verticalAlignment") && this.style.setProperty(
      "--vertical-alignment",
      `
        ${this.verticalAlignment === "top" ? "flex-start" : ""}
        ${this.verticalAlignment === "center" ? "center" : ""}
        ${this.verticalAlignment === "bottom" ? "flex-end" : ""}
      `
    ), e.has("direction") && this.style.setProperty(
      "--direction",
      `
        ${this.direction === "horizontal" ? "row" : ""}
        ${this.direction === "vertical" ? "column" : ""}
      `
    ), e.has("isMultiline") && this.style.setProperty("--wrap", this.isMultiline ? "wrap" : "");
  }
};
t.styles = u;
r([
  l({ type: Number })
], t.prototype, "gap", 2);
r([
  l({ type: Boolean, reflect: !0, attribute: "items-equal" })
], t.prototype, "itemsEqual", 2);
r([
  l({ type: Boolean, attribute: "is-multiline" })
], t.prototype, "isMultiline", 2);
r([
  l({ attribute: "horizontal-alignment" })
], t.prototype, "horizontalAlignment", 2);
r([
  l({ attribute: "vertical-alignment" })
], t.prototype, "verticalAlignment", 2);
r([
  l({ reflect: !0 })
], t.prototype, "direction", 2);
t = r([
  f("gup-track")
], t);
export {
  t as Track
};
