import { i as u, G as g, x as l, A as d, e as h } from "./styles-DhFvdPhm.js";
import { n as a } from "./property-DJzm_oB9.js";
import "./icon.js";
var b = Object.defineProperty, m = Object.getOwnPropertyDescriptor, i = (n, t, r, p) => {
  for (var o = p > 1 ? void 0 : p ? m(t, r) : t, s = n.length - 1, c; s >= 0; s--)
    (c = n[s]) && (o = (p ? c(t, r, o) : c(o)) || o);
  return p && o && b(t, r, o), o;
};
let e = class extends g {
  constructor() {
    super(...arguments), this.open = !1, this.contentAppearance = "quote", this.closedIcon = "keyboard-arrow-down", this.openIcon = "keyboard-arrow-up", this.iconHidden = !1;
  }
  onToggle(n) {
    var r;
    const t = (r = n.target) == null ? void 0 : r.open;
    this.dispatchEvent(
      new CustomEvent("gup-toggle", {
        detail: t,
        bubbles: !0,
        composed: !0
      })
    ), this.open = t;
  }
  render() {
    const n = this.open ? this.openIcon : this.closedIcon;
    return l`
      <details class="inner" ?open=${this.open} @toggle=${this.onToggle}>
        <summary class="label">
          ${this.iconHidden ? d : l`<gup-icon icon-name="${n}" width="24" height="24"></gup-icon>`}
          <span class="label-inner"><slot name="label"></slot></span>
        </summary>
        <div class="content">
          <div class="content-inner">
            <slot></slot>
            ${this.contentAppearance === "sink" ? l`
              <button aria-label="Close" class="close-button" @click=${() => this.open = !1}>
                <gup-icon icon-name="close" height="24" width="24"></gup-icon>
              </button>` : d}
          </div>
        </div>
      </details>
    `;
  }
};
e.styles = u`
    :host {
      --gup-icon--fill-color: var(--gup-color-content-link);

      display: block;
      width: 100%;
      position: relative;
    }

    :host([content-appearance="quote"]) {
      max-width: 328px;
    }

    .label {
      cursor: pointer;
      color: var(--gup-color-content-link);
      display: flex;
      align-items: center;
      gap: var(--gup-component-3);

      &::marker {
        display: none;
      }
    }

    .label-inner {
      text-decoration: underline;
      line-height: var(--line-height-500);

      &:hover {
        text-decoration-thickness: 2px;
      }
    }

    .content {
      margin-block-start: var(--gup-spacing-component-default);

      :host([content-appearance="quote"]) & {
        padding-block: var(--gup-padding-sm);
        padding-inline-start: var(--gup-padding-lg);
        border-inline-start: 6px solid var(--gup-color-brand-high);
        color: var(--gup-color-content-primary);
      }

      :host([content-appearance="sink"]) & {
        background-color: var(--gup-color-states-base-bg-secondary);
        padding: var(--gup-padding-md);
        width: 100%;
        border-bottom: 1px solid var(--gup-color-border-medium);
        margin-bottom: var(--gup-spacing-between-text);
      }
    }

    .content-inner {
      :host([content-appearance="sink"]) & {
        --gup-stepper-item--label--color: var(--gup-color-content-tertiary);
        --gup-stepper-item--selected--label--color: var(--gup-color-content-primary);

        position: relative;
        padding-inline-end: 24px;
      }
    }

    .close-button {
      position: absolute;
      inset-inline-end: 0;
      top: 0;
    }
`;
i([
  a({ type: Boolean, reflect: !0 })
], e.prototype, "open", 2);
i([
  a({ reflect: !0, attribute: "content-appearance" })
], e.prototype, "contentAppearance", 2);
i([
  a({ attribute: "closed-icon" })
], e.prototype, "closedIcon", 2);
i([
  a({ attribute: "open-icon" })
], e.prototype, "openIcon", 2);
i([
  a({ type: Boolean, reflect: !0, attribute: "icon-hidden" })
], e.prototype, "iconHidden", 2);
e = i([
  h("gup-details")
], e);
export {
  e as Details
};
