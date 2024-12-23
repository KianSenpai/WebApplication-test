import { i as Wt, G as Ht, x as ut, e as jt } from "./styles-DhFvdPhm.js";
import { n as ct } from "./property-DJzm_oB9.js";
import { t as Pt } from "./state-B6RxDmTk.js";
import { i as Lt } from "./query-DpC1Q-im.js";
import { e as Tt } from "./event-Ck0966vL.js";
const It = Wt`:host{--gup-generic-popup--arrow-border-color: none;--gup-generic-popup--arrow-border-size: 0;--gup-generic-popup--arrow-size: var(--gup-component-3);--gup-generic-popup--arrow-background-color: none}.popup{display:var(--display-popup, none);top:0;left:0;position:absolute}.arrow{--arrow-rotation: 45deg;position:absolute;background-color:var(--gup-generic-popup--arrow-background-color);width:var(--gup-generic-popup--arrow-size);height:var(--gup-generic-popup--arrow-size);transform:rotate(var(--arrow-rotation));border:var(--gup-generic-popup--arrow-border-size) solid var(--gup-generic-popup--arrow-border-color);border-bottom:none;border-inline-end:none}.arrow[data-placement*=bottom]{top:calc((var(--gup-generic-popup--arrow-size) / -2))}.arrow[data-placement*=top]{--arrow-rotation: -135deg;bottom:calc((var(--gup-generic-popup--arrow-size) / -2))}.arrow[data-placement*=left]{--arrow-rotation: 135deg;inset-inline-end:calc((var(--gup-generic-popup--arrow-size) / -2))}.arrow[data-placement*=right]{--arrow-rotation: -45deg;inset-inline-start:calc((var(--gup-generic-popup--arrow-size) / -2))}`, j = Math.min, B = Math.max, rt = Math.round, it = Math.floor, M = (t) => ({
  x: t,
  y: t
}), Yt = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Kt = {
  start: "end",
  end: "start"
};
function dt(t, e, n) {
  return B(t, j(e, n));
}
function Z(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function I(t) {
  return t.split("-")[0];
}
function nt(t) {
  return t.split("-")[1];
}
function St(t) {
  return t === "x" ? "y" : "x";
}
function mt(t) {
  return t === "y" ? "height" : "width";
}
function U(t) {
  return ["top", "bottom"].includes(I(t)) ? "y" : "x";
}
function wt(t) {
  return St(U(t));
}
function Xt(t, e, n) {
  n === void 0 && (n = !1);
  const o = nt(t), i = wt(t), r = mt(i);
  let s = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (s = st(s)), [s, st(s)];
}
function Ut(t) {
  const e = st(t);
  return [ht(t), e, ht(e)];
}
function ht(t) {
  return t.replace(/start|end/g, (e) => Kt[e]);
}
function Gt(t, e, n) {
  const o = ["left", "right"], i = ["right", "left"], r = ["top", "bottom"], s = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? i : o : e ? o : i;
    case "left":
    case "right":
      return e ? r : s;
    default:
      return [];
  }
}
function qt(t, e, n, o) {
  const i = nt(t);
  let r = Gt(I(t), n === "start", o);
  return i && (r = r.map((s) => s + "-" + i), e && (r = r.concat(r.map(ht)))), r;
}
function st(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Yt[e]);
}
function Jt(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function yt(t) {
  return typeof t != "number" ? Jt(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function J(t) {
  const {
    x: e,
    y: n,
    width: o,
    height: i
  } = t;
  return {
    width: o,
    height: i,
    top: n,
    left: e,
    right: e + o,
    bottom: n + i,
    x: e,
    y: n
  };
}
function At(t, e, n) {
  let {
    reference: o,
    floating: i
  } = t;
  const r = U(e), s = wt(e), c = mt(s), l = I(e), a = r === "y", p = o.x + o.width / 2 - i.width / 2, f = o.y + o.height / 2 - i.height / 2, d = o[c] / 2 - i[c] / 2;
  let u;
  switch (l) {
    case "top":
      u = {
        x: p,
        y: o.y - i.height
      };
      break;
    case "bottom":
      u = {
        x: p,
        y: o.y + o.height
      };
      break;
    case "right":
      u = {
        x: o.x + o.width,
        y: f
      };
      break;
    case "left":
      u = {
        x: o.x - i.width,
        y: f
      };
      break;
    default:
      u = {
        x: o.x,
        y: o.y
      };
  }
  switch (nt(e)) {
    case "start":
      u[s] -= d * (n && a ? -1 : 1);
      break;
    case "end":
      u[s] += d * (n && a ? -1 : 1);
      break;
  }
  return u;
}
const Qt = async (t, e, n) => {
  const {
    placement: o = "bottom",
    strategy: i = "absolute",
    middleware: r = [],
    platform: s
  } = n, c = r.filter(Boolean), l = await (s.isRTL == null ? void 0 : s.isRTL(e));
  let a = await s.getElementRects({
    reference: t,
    floating: e,
    strategy: i
  }), {
    x: p,
    y: f
  } = At(a, o, l), d = o, u = {}, h = 0;
  for (let g = 0; g < c.length; g++) {
    const {
      name: m,
      fn: w
    } = c[g], {
      x: y,
      y: x,
      data: b,
      reset: v
    } = await w({
      x: p,
      y: f,
      initialPlacement: o,
      placement: d,
      strategy: i,
      middlewareData: u,
      rects: a,
      platform: s,
      elements: {
        reference: t,
        floating: e
      }
    });
    p = y ?? p, f = x ?? f, u = {
      ...u,
      [m]: {
        ...u[m],
        ...b
      }
    }, v && h <= 50 && (h++, typeof v == "object" && (v.placement && (d = v.placement), v.rects && (a = v.rects === !0 ? await s.getElementRects({
      reference: t,
      floating: e,
      strategy: i
    }) : v.rects), {
      x: p,
      y: f
    } = At(a, d, l)), g = -1);
  }
  return {
    x: p,
    y: f,
    placement: d,
    strategy: i,
    middlewareData: u
  };
};
async function kt(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: o,
    y: i,
    platform: r,
    rects: s,
    elements: c,
    strategy: l
  } = t, {
    boundary: a = "clippingAncestors",
    rootBoundary: p = "viewport",
    elementContext: f = "floating",
    altBoundary: d = !1,
    padding: u = 0
  } = Z(e, t), h = yt(u), m = c[d ? f === "floating" ? "reference" : "floating" : f], w = J(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(m))) == null || n ? m : m.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(c.floating)),
    boundary: a,
    rootBoundary: p,
    strategy: l
  })), y = f === "floating" ? {
    x: o,
    y: i,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, x = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c.floating)), b = await (r.isElement == null ? void 0 : r.isElement(x)) ? await (r.getScale == null ? void 0 : r.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, v = J(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c,
    rect: y,
    offsetParent: x,
    strategy: l
  }) : y);
  return {
    top: (w.top - v.top + h.top) / b.y,
    bottom: (v.bottom - w.bottom + h.bottom) / b.y,
    left: (w.left - v.left + h.left) / b.x,
    right: (v.right - w.right + h.right) / b.x
  };
}
const Zt = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      x: n,
      y: o,
      placement: i,
      rects: r,
      platform: s,
      elements: c,
      middlewareData: l
    } = e, {
      element: a,
      padding: p = 0
    } = Z(t, e) || {};
    if (a == null)
      return {};
    const f = yt(p), d = {
      x: n,
      y: o
    }, u = wt(i), h = mt(u), g = await s.getDimensions(a), m = u === "y", w = m ? "top" : "left", y = m ? "bottom" : "right", x = m ? "clientHeight" : "clientWidth", b = r.reference[h] + r.reference[u] - d[u] - r.floating[h], v = d[u] - r.reference[u], R = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a));
    let _ = R ? R[x] : 0;
    (!_ || !await (s.isElement == null ? void 0 : s.isElement(R))) && (_ = c.floating[x] || r.floating[h]);
    const X = b / 2 - v / 2, z = _ / 2 - g[h] / 2 - 1, E = j(f[w], z), W = j(f[y], z), D = E, H = _ - g[h] - W, A = _ / 2 - g[h] / 2 + X, V = dt(D, A, H), P = !l.arrow && nt(i) != null && A !== V && r.reference[h] / 2 - (A < D ? E : W) - g[h] / 2 < 0, L = P ? A < D ? A - D : A - H : 0;
    return {
      [u]: d[u] + L,
      data: {
        [u]: V,
        centerOffset: A - V - L,
        ...P && {
          alignmentOffset: L
        }
      },
      reset: P
    };
  }
}), te = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n, o;
      const {
        placement: i,
        middlewareData: r,
        rects: s,
        initialPlacement: c,
        platform: l,
        elements: a
      } = e, {
        mainAxis: p = !0,
        crossAxis: f = !0,
        fallbackPlacements: d,
        fallbackStrategy: u = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: g = !0,
        ...m
      } = Z(t, e);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const w = I(i), y = U(c), x = I(c) === c, b = await (l.isRTL == null ? void 0 : l.isRTL(a.floating)), v = d || (x || !g ? [st(c)] : Ut(c)), R = h !== "none";
      !d && R && v.push(...qt(c, g, h, b));
      const _ = [c, ...v], X = await kt(e, m), z = [];
      let E = ((o = r.flip) == null ? void 0 : o.overflows) || [];
      if (p && z.push(X[w]), f) {
        const A = Xt(i, s, b);
        z.push(X[A[0]], X[A[1]]);
      }
      if (E = [...E, {
        placement: i,
        overflows: z
      }], !z.every((A) => A <= 0)) {
        var W, D;
        const A = (((W = r.flip) == null ? void 0 : W.index) || 0) + 1, V = _[A];
        if (V)
          return {
            data: {
              index: A,
              overflows: E
            },
            reset: {
              placement: V
            }
          };
        let P = (D = E.filter((L) => L.overflows[0] <= 0).sort((L, F) => L.overflows[1] - F.overflows[1])[0]) == null ? void 0 : D.placement;
        if (!P)
          switch (u) {
            case "bestFit": {
              var H;
              const L = (H = E.filter((F) => {
                if (R) {
                  const Y = U(F.placement);
                  return Y === y || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  Y === "y";
                }
                return !0;
              }).map((F) => [F.placement, F.overflows.filter((Y) => Y > 0).reduce((Y, zt) => Y + zt, 0)]).sort((F, Y) => F[1] - Y[1])[0]) == null ? void 0 : H[0];
              L && (P = L);
              break;
            }
            case "initialPlacement":
              P = c;
              break;
          }
        if (i !== P)
          return {
            reset: {
              placement: P
            }
          };
      }
      return {};
    }
  };
};
function _t(t) {
  const e = j(...t.map((r) => r.left)), n = j(...t.map((r) => r.top)), o = B(...t.map((r) => r.right)), i = B(...t.map((r) => r.bottom));
  return {
    x: e,
    y: n,
    width: o - e,
    height: i - n
  };
}
function ee(t) {
  const e = t.slice().sort((i, r) => i.y - r.y), n = [];
  let o = null;
  for (let i = 0; i < e.length; i++) {
    const r = e[i];
    !o || r.y - o.y > o.height / 2 ? n.push([r]) : n[n.length - 1].push(r), o = r;
  }
  return n.map((i) => J(_t(i)));
}
const ne = function(t) {
  return t === void 0 && (t = {}), {
    name: "inline",
    options: t,
    async fn(e) {
      const {
        placement: n,
        elements: o,
        rects: i,
        platform: r,
        strategy: s
      } = e, {
        padding: c = 2,
        x: l,
        y: a
      } = Z(t, e), p = Array.from(await (r.getClientRects == null ? void 0 : r.getClientRects(o.reference)) || []), f = ee(p), d = J(_t(p)), u = yt(c);
      function h() {
        if (f.length === 2 && f[0].left > f[1].right && l != null && a != null)
          return f.find((m) => l > m.left - u.left && l < m.right + u.right && a > m.top - u.top && a < m.bottom + u.bottom) || d;
        if (f.length >= 2) {
          if (U(n) === "y") {
            const E = f[0], W = f[f.length - 1], D = I(n) === "top", H = E.top, A = W.bottom, V = D ? E.left : W.left, P = D ? E.right : W.right, L = P - V, F = A - H;
            return {
              top: H,
              bottom: A,
              left: V,
              right: P,
              width: L,
              height: F,
              x: V,
              y: H
            };
          }
          const m = I(n) === "left", w = B(...f.map((E) => E.right)), y = j(...f.map((E) => E.left)), x = f.filter((E) => m ? E.left === y : E.right === w), b = x[0].top, v = x[x.length - 1].bottom, R = y, _ = w, X = _ - R, z = v - b;
          return {
            top: b,
            bottom: v,
            left: R,
            right: _,
            width: X,
            height: z,
            x: R,
            y: b
          };
        }
        return d;
      }
      const g = await r.getElementRects({
        reference: {
          getBoundingClientRect: h
        },
        floating: o.floating,
        strategy: s
      });
      return i.reference.x !== g.reference.x || i.reference.y !== g.reference.y || i.reference.width !== g.reference.width || i.reference.height !== g.reference.height ? {
        reset: {
          rects: g
        }
      } : {};
    }
  };
};
async function oe(t, e) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = t, r = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), s = I(n), c = nt(n), l = U(n) === "y", a = ["left", "top"].includes(s) ? -1 : 1, p = r && l ? -1 : 1, f = Z(e, t);
  let {
    mainAxis: d,
    crossAxis: u,
    alignmentAxis: h
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return c && typeof h == "number" && (u = c === "end" ? h * -1 : h), l ? {
    x: u * p,
    y: d * a
  } : {
    x: d * a,
    y: u * p
  };
}
const ie = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      var n, o;
      const {
        x: i,
        y: r,
        placement: s,
        middlewareData: c
      } = e, l = await oe(e, t);
      return s === ((n = c.offset) == null ? void 0 : n.placement) && (o = c.arrow) != null && o.alignmentOffset ? {} : {
        x: i + l.x,
        y: r + l.y,
        data: {
          ...l,
          placement: s
        }
      };
    }
  };
}, re = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o,
        placement: i
      } = e, {
        mainAxis: r = !0,
        crossAxis: s = !1,
        limiter: c = {
          fn: (m) => {
            let {
              x: w,
              y
            } = m;
            return {
              x: w,
              y
            };
          }
        },
        ...l
      } = Z(t, e), a = {
        x: n,
        y: o
      }, p = await kt(e, l), f = U(I(i)), d = St(f);
      let u = a[d], h = a[f];
      if (r) {
        const m = d === "y" ? "top" : "left", w = d === "y" ? "bottom" : "right", y = u + p[m], x = u - p[w];
        u = dt(y, u, x);
      }
      if (s) {
        const m = f === "y" ? "top" : "left", w = f === "y" ? "bottom" : "right", y = h + p[m], x = h - p[w];
        h = dt(y, h, x);
      }
      const g = c.fn({
        ...e,
        [d]: u,
        [f]: h
      });
      return {
        ...g,
        data: {
          x: g.x - n,
          y: g.y - o,
          enabled: {
            [d]: r,
            [f]: s
          }
        }
      };
    }
  };
};
function lt() {
  return typeof window < "u";
}
function tt(t) {
  return Dt(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function O(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function $(t) {
  var e;
  return (e = (Dt(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function Dt(t) {
  return lt() ? t instanceof Node || t instanceof O(t).Node : !1;
}
function T(t) {
  return lt() ? t instanceof Element || t instanceof O(t).Element : !1;
}
function N(t) {
  return lt() ? t instanceof HTMLElement || t instanceof O(t).HTMLElement : !1;
}
function Rt(t) {
  return !lt() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof O(t).ShadowRoot;
}
function ot(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: i
  } = S(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(i);
}
function se(t) {
  return ["table", "td", "th"].includes(tt(t));
}
function at(t) {
  return [":popover-open", ":modal"].some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
function xt(t) {
  const e = vt(), n = T(t) ? S(t) : t;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function ce(t) {
  let e = K(t);
  for (; N(e) && !Q(e); ) {
    if (xt(e))
      return e;
    if (at(e))
      return null;
    e = K(e);
  }
  return null;
}
function vt() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Q(t) {
  return ["html", "body", "#document"].includes(tt(t));
}
function S(t) {
  return O(t).getComputedStyle(t);
}
function ft(t) {
  return T(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.scrollX,
    scrollTop: t.scrollY
  };
}
function K(t) {
  if (tt(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    Rt(t) && t.host || // Fallback.
    $(t)
  );
  return Rt(e) ? e.host : e;
}
function Vt(t) {
  const e = K(t);
  return Q(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : N(e) && ot(e) ? e : Vt(e);
}
function et(t, e, n) {
  var o;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const i = Vt(t), r = i === ((o = t.ownerDocument) == null ? void 0 : o.body), s = O(i);
  if (r) {
    const c = gt(s);
    return e.concat(s, s.visualViewport || [], ot(i) ? i : [], c && n ? et(c) : []);
  }
  return e.concat(i, et(i, [], n));
}
function gt(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function Ft(t) {
  const e = S(t);
  let n = parseFloat(e.width) || 0, o = parseFloat(e.height) || 0;
  const i = N(t), r = i ? t.offsetWidth : n, s = i ? t.offsetHeight : o, c = rt(n) !== r || rt(o) !== s;
  return c && (n = r, o = s), {
    width: n,
    height: o,
    $: c
  };
}
function bt(t) {
  return T(t) ? t : t.contextElement;
}
function q(t) {
  const e = bt(t);
  if (!N(e))
    return M(1);
  const n = e.getBoundingClientRect(), {
    width: o,
    height: i,
    $: r
  } = Ft(e);
  let s = (r ? rt(n.width) : n.width) / o, c = (r ? rt(n.height) : n.height) / i;
  return (!s || !Number.isFinite(s)) && (s = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: s,
    y: c
  };
}
const le = /* @__PURE__ */ M(0);
function Bt(t) {
  const e = O(t);
  return !vt() || !e.visualViewport ? le : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function ae(t, e, n) {
  return e === void 0 && (e = !1), !n || e && n !== O(t) ? !1 : e;
}
function G(t, e, n, o) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const i = t.getBoundingClientRect(), r = bt(t);
  let s = M(1);
  e && (o ? T(o) && (s = q(o)) : s = q(t));
  const c = ae(r, n, o) ? Bt(r) : M(0);
  let l = (i.left + c.x) / s.x, a = (i.top + c.y) / s.y, p = i.width / s.x, f = i.height / s.y;
  if (r) {
    const d = O(r), u = o && T(o) ? O(o) : o;
    let h = d, g = gt(h);
    for (; g && o && u !== h; ) {
      const m = q(g), w = g.getBoundingClientRect(), y = S(g), x = w.left + (g.clientLeft + parseFloat(y.paddingLeft)) * m.x, b = w.top + (g.clientTop + parseFloat(y.paddingTop)) * m.y;
      l *= m.x, a *= m.y, p *= m.x, f *= m.y, l += x, a += b, h = O(g), g = gt(h);
    }
  }
  return J({
    width: p,
    height: f,
    x: l,
    y: a
  });
}
function Et(t, e) {
  const n = ft(t).scrollLeft;
  return e ? e.left + n : G($(t)).left + n;
}
function Mt(t, e, n) {
  n === void 0 && (n = !1);
  const o = t.getBoundingClientRect(), i = o.left + e.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Et(t, o)
  )), r = o.top + e.scrollTop;
  return {
    x: i,
    y: r
  };
}
function fe(t) {
  let {
    elements: e,
    rect: n,
    offsetParent: o,
    strategy: i
  } = t;
  const r = i === "fixed", s = $(o), c = e ? at(e.floating) : !1;
  if (o === s || c && r)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = M(1);
  const p = M(0), f = N(o);
  if ((f || !f && !r) && ((tt(o) !== "body" || ot(s)) && (l = ft(o)), N(o))) {
    const u = G(o);
    a = q(o), p.x = u.x + o.clientLeft, p.y = u.y + o.clientTop;
  }
  const d = s && !f && !r ? Mt(s, l, !0) : M(0);
  return {
    width: n.width * a.x,
    height: n.height * a.y,
    x: n.x * a.x - l.scrollLeft * a.x + p.x + d.x,
    y: n.y * a.y - l.scrollTop * a.y + p.y + d.y
  };
}
function ue(t) {
  return Array.from(t.getClientRects());
}
function pe(t) {
  const e = $(t), n = ft(t), o = t.ownerDocument.body, i = B(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth), r = B(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
  let s = -n.scrollLeft + Et(t);
  const c = -n.scrollTop;
  return S(o).direction === "rtl" && (s += B(e.clientWidth, o.clientWidth) - i), {
    width: i,
    height: r,
    x: s,
    y: c
  };
}
function de(t, e) {
  const n = O(t), o = $(t), i = n.visualViewport;
  let r = o.clientWidth, s = o.clientHeight, c = 0, l = 0;
  if (i) {
    r = i.width, s = i.height;
    const a = vt();
    (!a || a && e === "fixed") && (c = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: r,
    height: s,
    x: c,
    y: l
  };
}
function he(t, e) {
  const n = G(t, !0, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, r = N(t) ? q(t) : M(1), s = t.clientWidth * r.x, c = t.clientHeight * r.y, l = i * r.x, a = o * r.y;
  return {
    width: s,
    height: c,
    x: l,
    y: a
  };
}
function Ot(t, e, n) {
  let o;
  if (e === "viewport")
    o = de(t, n);
  else if (e === "document")
    o = pe($(t));
  else if (T(e))
    o = he(e, n);
  else {
    const i = Bt(t);
    o = {
      x: e.x - i.x,
      y: e.y - i.y,
      width: e.width,
      height: e.height
    };
  }
  return J(o);
}
function Nt(t, e) {
  const n = K(t);
  return n === e || !T(n) || Q(n) ? !1 : S(n).position === "fixed" || Nt(n, e);
}
function ge(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = et(t, [], !1).filter((c) => T(c) && tt(c) !== "body"), i = null;
  const r = S(t).position === "fixed";
  let s = r ? K(t) : t;
  for (; T(s) && !Q(s); ) {
    const c = S(s), l = xt(s);
    !l && c.position === "fixed" && (i = null), (r ? !l && !i : !l && c.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || ot(s) && !l && Nt(t, s)) ? o = o.filter((p) => p !== s) : i = c, s = K(s);
  }
  return e.set(t, o), o;
}
function me(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = t;
  const s = [...n === "clippingAncestors" ? at(e) ? [] : ge(e, this._c) : [].concat(n), o], c = s[0], l = s.reduce((a, p) => {
    const f = Ot(e, p, i);
    return a.top = B(f.top, a.top), a.right = j(f.right, a.right), a.bottom = j(f.bottom, a.bottom), a.left = B(f.left, a.left), a;
  }, Ot(e, c, i));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function we(t) {
  const {
    width: e,
    height: n
  } = Ft(t);
  return {
    width: e,
    height: n
  };
}
function ye(t, e, n) {
  const o = N(e), i = $(e), r = n === "fixed", s = G(t, !0, r, e);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = M(0);
  if (o || !o && !r)
    if ((tt(e) !== "body" || ot(i)) && (c = ft(e)), o) {
      const d = G(e, !0, r, e);
      l.x = d.x + e.clientLeft, l.y = d.y + e.clientTop;
    } else i && (l.x = Et(i));
  const a = i && !o && !r ? Mt(i, c) : M(0), p = s.left + c.scrollLeft - l.x - a.x, f = s.top + c.scrollTop - l.y - a.y;
  return {
    x: p,
    y: f,
    width: s.width,
    height: s.height
  };
}
function pt(t) {
  return S(t).position === "static";
}
function Ct(t, e) {
  if (!N(t) || S(t).position === "fixed")
    return null;
  if (e)
    return e(t);
  let n = t.offsetParent;
  return $(t) === n && (n = n.ownerDocument.body), n;
}
function $t(t, e) {
  const n = O(t);
  if (at(t))
    return n;
  if (!N(t)) {
    let i = K(t);
    for (; i && !Q(i); ) {
      if (T(i) && !pt(i))
        return i;
      i = K(i);
    }
    return n;
  }
  let o = Ct(t, e);
  for (; o && se(o) && pt(o); )
    o = Ct(o, e);
  return o && Q(o) && pt(o) && !xt(o) ? n : o || ce(t) || n;
}
const xe = async function(t) {
  const e = this.getOffsetParent || $t, n = this.getDimensions, o = await n(t.floating);
  return {
    reference: ye(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function ve(t) {
  return S(t).direction === "rtl";
}
const be = {
  convertOffsetParentRelativeRectToViewportRelativeRect: fe,
  getDocumentElement: $,
  getClippingRect: me,
  getOffsetParent: $t,
  getElementRects: xe,
  getClientRects: ue,
  getDimensions: we,
  getScale: q,
  isElement: T,
  isRTL: ve
};
function Ee(t, e) {
  let n = null, o;
  const i = $(t);
  function r() {
    var c;
    clearTimeout(o), (c = n) == null || c.disconnect(), n = null;
  }
  function s(c, l) {
    c === void 0 && (c = !1), l === void 0 && (l = 1), r();
    const {
      left: a,
      top: p,
      width: f,
      height: d
    } = t.getBoundingClientRect();
    if (c || e(), !f || !d)
      return;
    const u = it(p), h = it(i.clientWidth - (a + f)), g = it(i.clientHeight - (p + d)), m = it(a), y = {
      rootMargin: -u + "px " + -h + "px " + -g + "px " + -m + "px",
      threshold: B(0, j(1, l)) || 1
    };
    let x = !0;
    function b(v) {
      const R = v[0].intersectionRatio;
      if (R !== l) {
        if (!x)
          return s();
        R ? s(!1, R) : o = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      x = !1;
    }
    try {
      n = new IntersectionObserver(b, {
        ...y,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(b, y);
    }
    n.observe(t);
  }
  return s(!0), r;
}
function Ae(t, e, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: r = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = o, a = bt(t), p = i || r ? [...a ? et(a) : [], ...et(e)] : [];
  p.forEach((w) => {
    i && w.addEventListener("scroll", n, {
      passive: !0
    }), r && w.addEventListener("resize", n);
  });
  const f = a && c ? Ee(a, n) : null;
  let d = -1, u = null;
  s && (u = new ResizeObserver((w) => {
    let [y] = w;
    y && y.target === a && u && (u.unobserve(e), cancelAnimationFrame(d), d = requestAnimationFrame(() => {
      var x;
      (x = u) == null || x.observe(e);
    })), n();
  }), a && !l && u.observe(a), u.observe(e));
  let h, g = l ? G(t) : null;
  l && m();
  function m() {
    const w = G(t);
    g && (w.x !== g.x || w.y !== g.y || w.width !== g.width || w.height !== g.height) && n(), g = w, h = requestAnimationFrame(m);
  }
  return n(), () => {
    var w;
    p.forEach((y) => {
      i && y.removeEventListener("scroll", n), r && y.removeEventListener("resize", n);
    }), f == null || f(), (w = u) == null || w.disconnect(), u = null, l && cancelAnimationFrame(h);
  };
}
const Re = ie, Oe = re, Ce = te, Pe = Zt, Le = ne, Te = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: be,
    ...n
  }, r = {
    ...i.platform,
    _c: o
  };
  return Qt(t, e, {
    ...i,
    platform: r
  });
};
var Se = Object.defineProperty, ke = Object.getOwnPropertyDescriptor, k = (t, e, n, o) => {
  for (var i = o > 1 ? void 0 : o ? ke(e, n) : e, r = t.length - 1, s; r >= 0; r--)
    (s = t[r]) && (i = (o ? s(e, n, i) : s(i)) || i);
  return o && i && Se(e, n, i), i;
};
let C = class extends Ht {
  constructor() {
    super(...arguments), this.placement = "bottom", this.offset = 5, this.showArrow = !0, this.isVisible = !1, this.handleOutsideClick = (t) => {
      const e = t.composedPath();
      !e.includes(this.target) && !e.includes(this) && this.hide();
    }, this.handleKeydownEvent = (t) => {
      t.key === "Escape" && this.isVisible && this.hide();
    };
  }
  get target() {
    return this._target;
  }
  set target(t) {
    typeof t == "string" ? this._target = document.getElementById(t) : t instanceof Element ? this._target = t : console.warn("gup-generic-popup target only accepts an Element instance or a string id of a DOM element.");
  }
  getMiddleware() {
    const t = [];
    return t.push(Re(this.offset), Ce(), Le(), Oe({ padding: 4 })), t.push(Pe({ element: this._arrowElement, padding: 5 })), t;
  }
  setPopup() {
    this.target && (this.popupAutoUpdateCleanup = Ae(this.target, this._popupElement, () => {
      Te(this.target, this._popupElement, {
        placement: this.placement,
        middleware: this.getMiddleware(),
        strategy: "absolute"
      }).then(({ x: t, y: e, placement: n, middlewareData: o }) => {
        if (Object.assign(this._popupElement.style, {
          left: `${t}px`,
          top: `${e}px`
        }), o.arrow && this.showArrow) {
          const { x: i, y: r } = o.arrow;
          this._arrowElement.dataset.placement = n, Object.assign(this._arrowElement.style, {
            left: i != null ? `${i}px` : "",
            top: r != null ? `${r}px` : "",
            right: "",
            bottom: ""
          });
        }
      });
    }));
  }
  connectedCallback() {
    super.connectedCallback(), this._handlePopupShowEvent = this._handlePopupShowEvent.bind(this), this.handleKeydownEvent = this.handleKeydownEvent.bind(this), this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this.popupAutoUpdateCleanup) == null || t.call(this);
  }
  _handlePopupShowEvent(t) {
    if (t.target !== this) {
      const { parentElement: e } = t.target;
      this.contains(e) || this.hide();
    }
  }
  toggle() {
    this.isVisible = !this.isVisible;
  }
  updated(t) {
    t.has("isVisible") && this._popupElement.style.setProperty("--display-popup", `${this.isVisible ? "block" : "none"}`);
  }
  /**
   * Shows the popup
   */
  show() {
    this.toggle(), this.setPopup(), this.onPopupShow(this._popupElement), document.addEventListener("click", this.handleOutsideClick), document.addEventListener("keydown", this.handleKeydownEvent), document.addEventListener("gup-popup-show", this._handlePopupShowEvent);
  }
  /**
   * Hides the popup
   */
  hide() {
    var t;
    this.isVisible = !1, (t = this.popupAutoUpdateCleanup) == null || t.call(this), this.onPopupHide(this._popupElement), document.removeEventListener("click", this.handleOutsideClick), document.removeEventListener("keydown", this.handleKeydownEvent), document.removeEventListener("gup-popup-show", this._handlePopupShowEvent);
  }
  renderArrow() {
    return this.showArrow ? ut`<div id="arrow" class="arrow"></div>` : ut``;
  }
  render() {
    return ut`
      <div class="popup">
        <slot></slot>
        ${this.renderArrow()}
      </div>
    `;
  }
};
C.styles = It;
k([
  ct()
], C.prototype, "placement", 2);
k([
  ct({ type: Number })
], C.prototype, "offset", 2);
k([
  ct({ type: Boolean, reflect: !0 })
], C.prototype, "showArrow", 2);
k([
  Lt(".popup")
], C.prototype, "_popupElement", 2);
k([
  Lt(".arrow")
], C.prototype, "_arrowElement", 2);
k([
  Pt()
], C.prototype, "isVisible", 2);
k([
  Tt("gup-popup-show")
], C.prototype, "onPopupShow", 2);
k([
  Tt("gup-popup-hide")
], C.prototype, "onPopupHide", 2);
k([
  Pt()
], C.prototype, "_target", 2);
k([
  ct({ type: Object })
], C.prototype, "target", 1);
C = k([
  jt("gup-generic-popup")
], C);
export {
  C as GenericPopup
};
