function w(t, c) {
  const o = {
    waitUntilFirstUpdate: !1,
    ...c
  };
  return (a, h, r) => {
    const { update: u } = a, d = Array.isArray(t) ? t : [t];
    a.update = function(i) {
      d.forEach((f) => {
        var e;
        const s = f;
        if (i.has(s)) {
          const n = i.get(s), l = this[s];
          n !== l && (!o.waitUntilFirstUpdate || this.hasUpdated) && ((e = r.value) == null || e.call(this, n, l));
        }
      }), u.call(this, i);
    };
  };
}
export {
  w
};
