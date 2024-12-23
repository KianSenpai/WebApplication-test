class h {
  constructor(t, ...e) {
    this.slotNames = [], this.handleSlotChange = (o) => {
      const s = o.target;
      (this.slotNames.includes("[default]") && !s.name || s.name && this.slotNames.includes(s.name)) && this.host.requestUpdate();
    }, (this.host = t).addController(this), this.slotNames = e;
  }
  hasDefaultSlot() {
    return [...this.host.childNodes].some((t) => {
      if (t.nodeType === t.TEXT_NODE && t.textContent.trim() !== "")
        return !0;
      if (t.nodeType === t.ELEMENT_NODE) {
        const e = t;
        if (e.tagName.toLowerCase() === "gup-screenreader-text")
          return !1;
        if (!e.hasAttribute("slot"))
          return !0;
      }
      return !1;
    });
  }
  hasNamedSlot(t) {
    return this.host.querySelector(`:scope > [slot="${t}"]`) !== null;
  }
  test(t) {
    return t === "[default]" ? this.hasDefaultSlot() : this.hasNamedSlot(t);
  }
  hostConnected() {
    this.host.shadowRoot.addEventListener("slotchange", this.handleSlotChange);
  }
  hostDisconnected() {
    this.host.shadowRoot.removeEventListener("slotchange", this.handleSlotChange);
  }
}
export {
  h as H
};
