import { i as c, G as p, x as d, e as b } from "./styles-DhFvdPhm.js";
import { n as h } from "./property-DJzm_oB9.js";
import { i as u } from "./query-DpC1Q-im.js";
const f = c`:host{display:block}`;
var T = Object.defineProperty, m = Object.getOwnPropertyDescriptor, i = (t, e, s, l) => {
  for (var a = l > 1 ? void 0 : l ? m(e, s) : e, o = t.length - 1, n; o >= 0; o--)
    (n = t[o]) && (a = (l ? n(e, s, a) : n(a)) || a);
  return l && a && T(e, s, a), a;
};
let r = class extends p {
  constructor() {
    super(...arguments), this.appearance = "default", this.isFullWidth = !1, this.selectedTabIndex = 0, this.tabs = [], this.panels = [];
  }
  createRenderRoot() {
    const t = super.createRenderRoot();
    return t.addEventListener("tab-click", (e) => this.selectTab(e.detail)), t;
  }
  handleSlotChange() {
    this.tabs = Array.from(this.querySelectorAll("gup-tab")), this.panels = Array.from(this.querySelectorAll("gup-tab-panel")), this.panels.forEach((t, e) => t.index = e), this.initializeTabs();
  }
  initializeTabs() {
    this.tabs.length > 0 && (this.tabs[0].isSelected = !0, this.selectedTabIndex = 0, this.panels.forEach((t, e) => {
      t.isHidden = e !== this.selectedTabIndex;
    }));
  }
  selectTab(t) {
    t !== this.selectedTabIndex && (this.selectedTabIndex = t, this.tabs.forEach((e, s) => e.isSelected = s === this.selectedTabIndex), this.panels.forEach((e, s) => e.isHidden = s !== this.selectedTabIndex));
  }
  render() {
    return d`<slot @slotchange="${this.handleSlotChange}"></slot>`;
  }
};
r.styles = f;
i([
  h({ reflect: !0 })
], r.prototype, "appearance", 2);
i([
  h({ type: Boolean, reflect: !0, attribute: "is-full-width" })
], r.prototype, "isFullWidth", 2);
i([
  u("slot", !0)
], r.prototype, "slotElement", 2);
r = i([
  b("gup-tabs")
], r);
export {
  r as Tabs
};
