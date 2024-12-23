var i = function(u, e, n, r) {
  if (n === "a" && !r) throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? u !== e || !r : !e.has(u)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? r : n === "a" ? r.call(u) : r ? r.value : e.get(u);
}, o = function(u, e, n, r, h) {
  if (r === "m") throw new TypeError("Private method is not writable");
  if (r === "a" && !h) throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? u !== e || !h : !e.has(u)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return r === "a" ? h.call(u, n) : h ? h.value = n : e.set(u, n), n;
};
function G(u) {
  var e, n, r, h, v, k, m, C, M, E, W, F, g, y, f, P, T, A;
  class L extends u {
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    constructor(...t) {
      var s, a, l;
      super(...t), e.add(this), this.internals = this.attachInternals(), n.set(this, !1), r.set(this, !1), h.set(this, !1), v.set(this, void 0), k.set(this, void 0), m.set(this, !0), C.set(this, ""), M.set(this, () => {
        o(this, h, !0, "f"), o(this, n, !0, "f"), i(this, e, "m", f).call(this);
      }), E.set(this, () => {
        o(this, n, !1, "f"), i(this, e, "m", P).call(this, this.shouldFormValueUpdate() ? i(this, C, "f") : ""), !this.validity.valid && i(this, h, "f") && o(this, r, !0, "f");
        const c = i(this, e, "m", f).call(this);
        this.validationMessageCallback && this.validationMessageCallback(c ? this.internals.validationMessage : "");
      }), W.set(this, () => {
        var c;
        i(this, m, "f") && this.validationTarget && (this.internals.setValidity(this.validity, this.validationMessage, this.validationTarget), o(this, m, !1, "f")), o(this, h, !0, "f"), o(this, r, !0, "f"), i(this, e, "m", f).call(this), (c = this === null || this === void 0 ? void 0 : this.validationMessageCallback) === null || c === void 0 || c.call(this, this.showError ? this.internals.validationMessage : "");
      }), F.set(this, void 0), g.set(this, !1), y.set(this, Promise.resolve()), (s = this.addEventListener) === null || s === void 0 || s.call(this, "focus", i(this, M, "f")), (a = this.addEventListener) === null || a === void 0 || a.call(this, "blur", i(this, E, "f")), (l = this.addEventListener) === null || l === void 0 || l.call(this, "invalid", i(this, W, "f")), this.setValue(null);
    }
    /** Wires up control instances to be form associated */
    static get formAssociated() {
      return !0;
    }
    static get validators() {
      return this.formControlValidators || [];
    }
    /**
     * Allows the FormControl instance to respond to Validator attributes.
     * For instance, if a given Validator has a `required` attribute, that
     * validator will be evaluated whenever the host's required attribute
     * is updated.
     */
    static get observedAttributes() {
      const t = this.validators.map((l) => l.attribute).flat(), s = super.observedAttributes || [];
      return [.../* @__PURE__ */ new Set([...s, ...t])];
    }
    /**
     * Return the validator associated with a given attribute. If no
     * Validator is associated with the attribute, it will return null.
     */
    static getValidator(t) {
      return this.validators.find((s) => s.attribute === t) || null;
    }
    /**
     * Get all validators that are set to react to a given attribute
     * @param {string} attribute - The attribute that has changed
     * @returns {Validator[]}
     */
    static getValidators(t) {
      return this.validators.filter((s) => {
        var a;
        if (s.attribute === t || !((a = s.attribute) === null || a === void 0) && a.includes(t))
          return !0;
      });
    }
    /** Return a reference to the control's form */
    get form() {
      return this.internals.form;
    }
    /**
     * Will return true if it is recommended that the control shows an internal
     * error. If using this property, it is wise to listen for 'invalid' events
     * on the element host and call preventDefault on the event. Doing this will
     * prevent browsers from showing a validation popup.
     */
    get showError() {
      return i(this, e, "m", f).call(this);
    }
    /**
     * Forward the internals checkValidity method
     * will return the valid state of the control.
     */
    checkValidity() {
      return this.internals.checkValidity();
    }
    /** The element's validity state */
    get validity() {
      return this.internals.validity;
    }
    /**
     * The validation message shown by a given Validator object. If the control
     * is in a valid state this should be falsy.
     */
    get validationMessage() {
      return this.internals.validationMessage;
    }
    attributeChangedCallback(t, s, a) {
      var l;
      (l = super.attributeChangedCallback) === null || l === void 0 || l.call(this, t, s, a);
      const w = this.constructor.getValidators(t);
      w != null && w.length && this.validationTarget && this.setValue(i(this, C, "f"));
    }
    /** PUBLIC LIFECYCLE METHODS */
    /**
     * Sets the control's form value if the call to `shouldFormValueUpdate`
     * returns `true`.
     * @param value {FormValue} - The value to pass to the form
     */
    setValue(t) {
      var s;
      o(this, r, !1, "f"), (s = this.validationMessageCallback) === null || s === void 0 || s.call(this, ""), o(this, C, t, "f");
      const l = this.shouldFormValueUpdate() ? t : null;
      this.internals.setFormValue(l), i(this, e, "m", P).call(this, l), this.valueChangedCallback && this.valueChangedCallback(l), i(this, e, "m", f).call(this);
    }
    /**
     * This method can be overridden to determine if the control's form value
     * should be set on a call to `setValue`. An example of when a user might want
     * to skip this step is when implementing checkbox-like behavior, first checking
     * to see if `this.checked` is set to a truthy value. By default this returns
     * `true`.
     */
    shouldFormValueUpdate() {
      return !0;
    }
    /** A promise that will resolve when all pending validations are complete */
    get validationComplete() {
      return new Promise((t) => t(i(this, y, "f")));
    }
    /** Reset control state when the form is reset */
    formResetCallback() {
      var t, s;
      o(this, h, !1, "f"), o(this, r, !1, "f"), i(this, e, "m", f).call(this), (t = this.resetFormControl) === null || t === void 0 || t.call(this), (s = this.validationMessageCallback) === null || s === void 0 || s.call(this, i(this, e, "m", f).call(this) ? this.validationMessage : "");
    }
  }
  return n = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap(), h = /* @__PURE__ */ new WeakMap(), v = /* @__PURE__ */ new WeakMap(), k = /* @__PURE__ */ new WeakMap(), m = /* @__PURE__ */ new WeakMap(), C = /* @__PURE__ */ new WeakMap(), M = /* @__PURE__ */ new WeakMap(), E = /* @__PURE__ */ new WeakMap(), W = /* @__PURE__ */ new WeakMap(), F = /* @__PURE__ */ new WeakMap(), g = /* @__PURE__ */ new WeakMap(), y = /* @__PURE__ */ new WeakMap(), e = /* @__PURE__ */ new WeakSet(), f = function() {
    if (this.hasAttribute("disabled"))
      return !1;
    const t = i(this, r, "f") || i(this, h, "f") && !this.validity.valid && !i(this, n, "f");
    return t && this.internals.states ? this.internals.states.add("--show-error") : this.internals.states && this.internals.states.delete("--show-error"), t;
  }, P = function(t) {
    const s = this.constructor, a = {}, l = s.validators, c = [], w = l.some((d) => d.isValid instanceof Promise);
    i(this, g, "f") || (o(this, y, new Promise((d) => {
      o(this, F, d, "f");
    }), "f"), o(this, g, !0, "f")), i(this, v, "f") && (i(this, v, "f").abort(), o(this, k, i(this, v, "f"), "f"));
    const p = new AbortController();
    o(this, v, p, "f");
    let b, x = !1;
    l.length && (l.forEach((d) => {
      const S = d.key || "customError", _ = d.isValid(this, t, p.signal);
      _ instanceof Promise ? (c.push(_), _.then((U) => {
        U != null && (a[S] = !U, b = i(this, e, "m", A).call(this, d, t), i(this, e, "m", T).call(this, a, b));
      })) : (a[S] = !_, this.validity[S] !== !_ && (x = !0), !_ && !b && (b = i(this, e, "m", A).call(this, d, t)));
    }), Promise.allSettled(c).then(() => {
      var d;
      p != null && p.signal.aborted || (o(this, g, !1, "f"), (d = i(this, F, "f")) === null || d === void 0 || d.call(this));
    }), (x || !w) && i(this, e, "m", T).call(this, a, b));
  }, T = function(t, s) {
    if (this.validationTarget)
      this.internals.setValidity(t, s, this.validationTarget), o(this, m, !1, "f");
    else {
      if (this.internals.setValidity(t, s), this.internals.validity.valid)
        return;
      o(this, m, !0, "f");
    }
  }, A = function(t, s) {
    if (this.validityCallback) {
      const a = this.validityCallback(t.key || "customError");
      if (a)
        return a;
    }
    return t.message instanceof Function ? t.message(this, s) : t.message;
  }, L;
}
export {
  G as F
};
