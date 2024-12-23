const t = {
  attribute: "required",
  key: "valueMissing",
  message: "Please fill out this field",
  isValid(e, i) {
    let r = !0;
    return (e.hasAttribute("required") || e.required) && !i && (r = !1), r;
  }
};
export {
  t as r
};
