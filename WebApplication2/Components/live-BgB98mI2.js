import { T as n, A as s } from "./styles-DhFvdPhm.js";
import { e as T, i as l, t } from "./directive-B76A7YXI.js";
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const p = (e) => e.strings === void 0, u = {}, a = (e, r = u) => e._$AH = r;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const A = T(class extends l {
  constructor(e) {
    if (super(e), e.type !== t.PROPERTY && e.type !== t.ATTRIBUTE && e.type !== t.BOOLEAN_ATTRIBUTE) throw Error("The `live` directive is not allowed on child or event bindings");
    if (!p(e)) throw Error("`live` bindings can only contain a single expression");
  }
  render(e) {
    return e;
  }
  update(e, [r]) {
    if (r === n || r === s) return r;
    const i = e.element, o = e.name;
    if (e.type === t.PROPERTY) {
      if (r === i[o]) return n;
    } else if (e.type === t.BOOLEAN_ATTRIBUTE) {
      if (!!r === i.hasAttribute(o)) return n;
    } else if (e.type === t.ATTRIBUTE && i.getAttribute(o) === r + "") return n;
    return a(e), r;
  }
});
export {
  p as e,
  A as l
};
