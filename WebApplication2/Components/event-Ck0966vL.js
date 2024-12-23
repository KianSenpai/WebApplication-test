function c(t, r) {
  return function(e, n) {
    const u = new CustomEvent(r, {
      detail: e,
      bubbles: !0,
      cancelable: !1,
      composed: !0,
      ...n
    });
    return t.dispatchEvent(u), u;
  };
}
function o(t) {
  return (r, e) => {
    Object.defineProperty(r, e, {
      get() {
        return c(this, t || e);
      },
      enumerable: !0,
      configurable: !0
    });
  };
}
export {
  o as e
};
