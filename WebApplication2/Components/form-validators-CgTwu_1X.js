const r = [
  "valueMissing",
  "typeMismatch",
  "tooLong",
  "tooShort",
  "rangeUnderflow",
  "rangeOverflow",
  "stepMismatch",
  "badInput",
  "patternMismatch",
  "customError"
], i = r.map((t) => ({
  key: t,
  isValid(a) {
    return a.validationTarget ? !a.validationTarget.validity[t] : !0;
  }
}));
export {
  i
};
