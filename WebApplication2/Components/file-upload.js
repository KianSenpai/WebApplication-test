import { i as g, x as n, A as c, e as f, G as v } from "./styles-DhFvdPhm.js";
import { n as o } from "./property-DJzm_oB9.js";
import { t as b } from "./state-B6RxDmTk.js";
import { i as y } from "./query-DpC1Q-im.js";
import { o as F } from "./class-map-CgF9gVe_.js";
import { i as m, g as _ } from "./helpers-CEyIMPnX.js";
import { e as h } from "./event-Ck0966vL.js";
import { H as w } from "./slot-controller-BinWfe2f.js";
import { w as C } from "./watch-UI3Ke5w9.js";
import "./icon.js";
import "./button.js";
import "./form-hint.js";
import "./form-validation-message.js";
import "./file-item.js";
import { i as V } from "./form-validators-CgTwu_1X.js";
import { r as T } from "./validators-CzEExH8K.js";
import { F as $ } from "./FormControlMixin-CBpJ9UGl.js";
const x = g`.label{color:var(--gup-color-content-primary);font-weight:var(--font-weight-base-beta);display:block}.label.has-error{color:var(--gup-color-negative-medium)}.error-message{font-weight:400}.error-message,.hint{margin-top:4px}.actions{margin-top:var(--gup-spacing-text-to-component)}.input-wrapper{position:relative;border:1px solid var(--gup-color-brand-xhigh);display:flex;padding:var(--gup-component-0) var(--gup-component-5);justify-content:center;align-items:center;gap:var(--gup-component-4);border-radius:var(--gup-radius-button);width:var(--file-input-width)}.input-wrapper:focus-within{--comment: "focus-outline mixin";outline:6px solid var(--gup-color-states-base-focus-ring);outline-offset:3px;--comment-end: "focus-outline mixin"}.file-input{display:flex;justify-content:center;align-items:center;cursor:pointer;padding:var(--gup-component-3) var(--gup-component-0);border-radius:var(--gup-radius-component-full);gap:var(--gup-component-4);color:var(--gup-color-brand-xhigh)}.file-input-button{display:inline-block}.uploaded-files{margin-top:var(--gup-spacing-text-to-component)}.delete-icon,.file-input-icon{--gup-icon--fill-color: var(--gup-color-brand-xhigh)}.native-input{position:absolute;top:0;left:0;opacity:0;cursor:pointer;width:100%;height:100%}`;
var B = Object.defineProperty, M = Object.getOwnPropertyDescriptor, r = (e, t, i, l) => {
  for (var s = l > 1 ? void 0 : l ? M(t, i) : t, u = e.length - 1, p; u >= 0; u--)
    (p = e[u]) && (s = (l ? p(t, i, s) : p(s)) || s);
  return l && s && B(t, i, s), s;
};
let a = class extends $(v) {
  constructor() {
    super(...arguments), this.name = "", this.fileInputLabel = "Choose file", this.itemDeleteLabel = "Remove the file", this.accept = "", this.multiple = !1, this.required = !1, this.isFullWidth = !1, this.errorMessage = "", this.allowThumbnails = !1, this.hasSlotController = new w(this, "hint"), this._uploadedFiles = [], this.handleFileChange = () => {
      const e = this.validationTarget.files;
      if (!e || !e.length)
        return;
      const t = [];
      Array.from(e).forEach((i) => {
        const l = new FileReader(), s = i.type.split("/")[0];
        l.onload = (u) => {
          var d;
          let p = null;
          this.allowThumbnails && s === "image" && (p = { src: (d = u.target) == null ? void 0 : d.result, alt: i.name }), t.push({
            file: i,
            thumbnail: p
          }), t.length === e.length && (this.uploadedFiles = [...this.uploadedFiles, ...t], this.onChange(this.uploadedFiles));
        }, l.readAsDataURL(i);
      });
    }, this.deleteFile = (e) => {
      if (!this._uploadedFiles)
        return;
      const t = this._uploadedFiles.filter((l) => l.file.name !== e.name);
      this._uploadedFiles = t;
      const i = t.map((l) => l.file);
      this.updateValue(i), this.onDelete(e), this.onChange(this._uploadedFiles);
    };
  }
  set uploadedFiles(e) {
    this._uploadedFiles = e;
  }
  set value(e) {
    this._value = e;
    const t = this.getNativeFormValue(e);
    this.setValue(t), t && (this.uploadedFiles = t.getAll(this.name).map((i) => ({
      file: i
    })));
  }
  get value() {
    return this._value && this._value.length > 0 ? this._value : this.convertUploadedFilesToValue();
  }
  get uploadedFiles() {
    return this._uploadedFiles;
  }
  async handleFilesChange() {
    this.setValue(this.getNativeFormValue()), this.onChange(this.uploadedFiles), await this.validationComplete, this.requestUpdate();
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), (e = this.internals.form) == null || e.addEventListener("submit", () => {
      this.reportValidity();
    });
  }
  convertBytesToMB(e) {
    return e >= 1048576 ? `${(e / 1048576).toFixed(2)} MB` : `${(e / 1024).toFixed(2)} KB`;
  }
  // Returns the value of the input in a FormData object whether if it is set via value property (native, doesn't support extra attributes) or with uploadedFiles property (non-native, supports extra attributes such as thumbnails)
  getNativeFormValue(e = null) {
    const t = new FormData();
    return e ? e.forEach((i) => {
      t.append(this.name, i);
    }) : this._uploadedFiles.forEach((i) => {
      t.append(this.name, i.file);
    }), t.entries().next().done ? null : t;
  }
  convertUploadedFilesToValue() {
    return this._uploadedFiles.map((e) => e.file) || null;
  }
  firstUpdated() {
    this.setValue(this.getNativeFormValue());
  }
  updated(e) {
    e.has("isFullWidth") && this.style.setProperty("--file-input-width", this.isFullWidth ? "100%" : "fit-content");
  }
  reportValidity() {
    return this.requestUpdate(), this.checkValidity();
  }
  validityCallback() {
    var e;
    return this.onInvalid(this.internals.validity), this.errorMessage || ((e = this.validationTarget) == null ? void 0 : e.validationMessage);
  }
  /* valueChangedCallback(value: FormData): void {
    // Using this callback breaks thumbnails as it triggers on component load too
    if (value) {
      this.uploadedFiles = value.getAll(this.name).map((file) => {
        return {
          file: file as File,
        };
      });
    }
  } */
  async forceCustomError() {
    await this.updateComplete, this.validationTarget.setCustomValidity(this.errorMessage || "An error occurred"), this.setValue(this.getNativeFormValue()), this.reportValidity();
  }
  async clearCustomError() {
    await this.updateComplete, this.validationTarget.setCustomValidity(""), this.setValue(this.getNativeFormValue()), this.reportValidity();
  }
  updateValue(e) {
    this._value = e;
    const t = this.getNativeFormValue(e);
    this.setValue(t);
  }
  renderLabel() {
    return n`
      <label for="native-input" class="${F({ label: !0, "has-error": !m(this.errorMessage) })}">
        <div>
          <slot></slot>
        </div>
      </label>
    `;
  }
  renderErrorMessage() {
    return m(this.errorMessage) ? c : n`
        <gup-form-validation-message class="error-message" id="error-message">
          ${this.errorMessage}
        </gup-form-validation-message>`;
  }
  renderHint() {
    return this.hasSlotController.test("hint") ? n`<gup-form-hint class="hint" id="hint"><slot name="hint"></slot></gup-form-hint>` : "";
  }
  renderUploadedFiles() {
    return this.uploadedFiles.length === 0 ? c : n`
      <div class="uploaded-files">
        ${this.uploadedFiles.map(
      (e) => {
        var t, i;
        return n`
            <gup-file-item
              file-name="${e.file.name}"
              subtitle="${new Date(e.file.lastModified).toLocaleDateString() + ", " + this.convertBytesToMB(e.file.size)}"
              thumbnail-src="${this.allowThumbnails && ((t = e.thumbnail) == null ? void 0 : t.src) || ""}"
              thumbnail-alt="${this.allowThumbnails && ((i = e.thumbnail) == null ? void 0 : i.alt) || ""}"
            >
              <gup-button @gup-click="${() => this.deleteFile(e.file)}" with-icon-only label="${this.itemDeleteLabel}" appearance="text">
                <gup-icon icon-name="delete-forever" height="24" width="24" class="delete-icon"></gup-icon>
              </gup-button>
            </gup-file-item>
        `;
      }
    )}
      </div>
    `;
  }
  renderFileInput() {
    return n`
      <gup-track gap="3" class="actions">
        <div class="input-wrapper">
          <span class="file-input">
            <gup-icon icon-name="upload" height="20" width="20" class="file-input-icon"></gup-icon>
            <span class="file-input-button">${this.fileInputLabel}</span>
          </span>
          <input id="native-input" type="file" class="native-input" accept="${this.accept}" ?multiple="${this.multiple}"  ?required="${this.required}" name="${this.name}" @change="${this.handleFileChange}" aria-describedby=${_(this.hasSlotController.test("hint"), !!this.errorMessage)}>
        </div>
        <slot name="extra-action"></slot>
      </gup-track>
    `;
  }
  render() {
    return n`
      ${this.renderLabel()}
      ${this.renderHint()}
      ${this.renderErrorMessage()}
      ${!this.multiple && this.uploadedFiles.length === 0 || this.multiple ? this.renderFileInput() : ""}
      ${this.renderUploadedFiles()}
    `;
  }
};
a.formControlValidators = [...V, T];
a.styles = x;
r([
  o()
], a.prototype, "name", 2);
r([
  o({ attribute: "file-input-label" })
], a.prototype, "fileInputLabel", 2);
r([
  o({ attribute: "item-delete-label" })
], a.prototype, "itemDeleteLabel", 2);
r([
  o()
], a.prototype, "accept", 2);
r([
  o({ type: Boolean, reflect: !0 })
], a.prototype, "multiple", 2);
r([
  o({ type: Boolean, reflect: !0 })
], a.prototype, "required", 2);
r([
  o({ attribute: "full-width", type: Boolean, reflect: !0 })
], a.prototype, "isFullWidth", 2);
r([
  o({ attribute: "error-message" })
], a.prototype, "errorMessage", 2);
r([
  o({ type: Boolean, attribute: "allow-thumbnails" })
], a.prototype, "allowThumbnails", 2);
r([
  h("gup-change")
], a.prototype, "onChange", 2);
r([
  h("gup-delete")
], a.prototype, "onDelete", 2);
r([
  h("gup-invalid")
], a.prototype, "onInvalid", 2);
r([
  y("#native-input")
], a.prototype, "validationTarget", 2);
r([
  b()
], a.prototype, "_uploadedFiles", 2);
r([
  o({ type: Array })
], a.prototype, "uploadedFiles", 1);
r([
  C("_uploadedFiles")
], a.prototype, "handleFilesChange", 1);
a = r([
  f("gup-file-upload")
], a);
export {
  a as FileUpload
};
