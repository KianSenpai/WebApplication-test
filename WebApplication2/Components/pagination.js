import { i as h, G as u, x as r, e as b } from "./styles-DhFvdPhm.js";
import { n as o } from "./property-DJzm_oB9.js";
import "./icon.js";
import { i as g } from "./helpers-CEyIMPnX.js";
const d = h`:host{--color: var(--gup-color-brand-xhigh);--item-padding: var(--gup-component-2) var(--gup-component-5);--gup-icon--fill-color: var(--gup-color-brand-xhigh)}.pagination{display:flex;gap:var(--gup-spacing-component-default);justify-content:center;align-items:center;color:var(--color)}.directional-button{display:flex;align-items:center;gap:var(--gup-component-3)}.text{text-decoration:underline}.text--is-disabled{border-color:transparent;pointer-events:none;text-decoration:none}.arrow-icon{flex-shrink:0}:host-context([dir="rtl"]) .arrow-icon{transform:rotate(180deg)}.page-button{width:var(--gup-component-8);display:flex;justify-content:center;align-items:center;padding:var(--item-padding);line-height:24px;border-radius:var(--gup-radius-component-default)}.page-button:focus{--comment: "focus-outline mixin";outline:6px solid var(--gup-color-states-base-focus-ring);outline-offset:3px;--comment-end: "focus-outline mixin"}.page-button:hover:not(.page-button--is-current,:disabled){background-color:var(--gup-color-states-secondary-hover)}.page-button--is-current{color:var(--gup-color-brand-contrast);background-color:var(--color)}.page-button--is-current .text{text-decoration:none}.links-wrapper{display:flex;align-items:flex-start;gap:var(--gup-radius-component-default);justify-content:space-between}.label{font-weight:var(--font-weight-base-beta);line-height:var(--line-height-500);width:100%}.title{text-wrap:wrap}.title,.label{text-decoration-line:underline}.nav-link{display:flex;align-items:flex-start;justify-content:flex-end;gap:var(--gup-component-3);width:50%}.nav-link--direction-next{margin-inline-start:auto;text-align:end}.nav-link--direction-prev{margin-inline-end:auto}.text-box{display:flex;flex-direction:column;align-items:flex-start;font-size:var(--font-size-400);color:var(--color)}.text-box:hover{--color: var(--gup-color-content-link)}`;
var v = Object.defineProperty, x = Object.getOwnPropertyDescriptor, l = (e, t, a, i) => {
  for (var s = i > 1 ? void 0 : i ? x(t, a) : t, p = e.length - 1, c; p >= 0; p--)
    (c = e[p]) && (s = (i ? c(t, a, s) : c(s)) || s);
  return i && s && v(t, a, s), s;
};
let n = class extends u {
  constructor() {
    super(...arguments), this.totalPages = 10, this.currentPage = 1, this.kind = "numbered", this.prevLabel = "", this.prevTitle = "", this.prevLink = "", this.nextLabel = "", this.nextTitle = "", this.nextLink = "", this.pages = Array.from(new Array(this.totalPages), (e, t) => t + 1), this.maxPagesPerView = 7, this.visiblePages = [];
  }
  update(e) {
    e.has("totalPages") && (this.pages = Array.from(new Array(this.totalPages), (t, a) => a + 1)), e.has("currentPage") && this.currentPage, super.update(e);
  }
  handlePageChange(e) {
    this.dispatchEvent(
      new CustomEvent("gup-page-change", {
        bubbles: !0,
        composed: !0,
        detail: e
      })
    ), e !== this.currentPage && (this.currentPage = e);
  }
  renderPages() {
    const e = this.pages.length;
    let t = [], a;
    return this.totalPages > this.maxPagesPerView ? (this.pages.length - this.currentPage >= 4 && (this.currentPage - this.pages[0] >= 4 ? (t = this.pages.slice(this.currentPage - 5), a = this.pages.slice(this.currentPage, -1), this.visiblePages = t.filter((i) => !a.includes(i)), this.visiblePages.splice(this.visiblePages.length - 1, 0, "...")) : this.currentPage - this.pages[0] < 4 && (t = this.pages.slice(0, 5), a = this.pages.slice(t.length, e - 1), this.visiblePages = t.filter((i) => !a.includes(i)), this.visiblePages.splice(this.visiblePages.length, 0, "..."), this.visiblePages = [].concat(this.visiblePages, e))), e - this.currentPage <= 4 && (this.visiblePages = this.pages.slice(e - 1 - 4), this.visiblePages = [].concat(this.pages[0], "...", this.visiblePages))) : this.totalPages <= this.maxPagesPerView && (this.visiblePages = this.pages), r`
      ${this.visiblePages.map(
      (i) => r`
        <li class="page-wrapper">
          <button
          class=${`page-button ${i === this.currentPage ? "page-button--is-current" : ""}`}
          @click=${() => this.handlePageChange(Number(i))}
          aria-current="${i === this.currentPage ? "page" : "false"}"
          ?disabled="${typeof i == "string"}">
            <span class=${`text ${typeof i == "string" ? "text--is-disabled" : ""}`}>
              ${i}
            </span>
        </button>
        </li>
      `
    )}
    `;
  }
  render() {
    const e = [
      { label: this.prevLabel, title: this.prevTitle, link: this.prevLink, iconName: "arrow-back" },
      { label: this.nextLabel, title: this.nextTitle, link: this.nextLink, iconName: "arrow-forward" }
    ].filter((t) => !g(t.label) && !g(t.link));
    return r`
    ${this.kind === "numbered" ? r`
      <nav>
      <ul class="pagination">
          ${this.currentPage > 1 ? r`
          <li>
            <button class="directional-button" @click=${() => this.handlePageChange(this.currentPage - 1)}>
              <gup-icon class="arrow-icon" icon-name="arrow-back" width="24" height="24"></gup-icon>
              <span class="text">
                ${this.prevLabel}
              </span>
          </button>
          </li>` : null}
          ${this.renderPages()}
          ${this.currentPage < this.totalPages ? r`
          <li>
            <button class="directional-button" @click=${() => this.handlePageChange(this.currentPage + 1)}>
              <span class="text">
                ${this.nextLabel}
              </span>
              <gup-icon class="arrow-icon" icon-name="arrow-forward" width="24" height="24"></gup-icon>
          </button>
          </li>` : null}
        </ul>
        </nav>
    ` : r`
    <nav>
      <div class="links-wrapper">
      ${e.map(
      ({ label: t, title: a, link: i, iconName: s }) => r`
            <a href="${i}" class="nav-link ${t === this.prevLabel && this.prevLabel ? "nav-link--direction-prev" : "nav-link--direction-next"}" rel="${t === this.prevLabel && this.prevLabel ? "prev" : "next"}">
              ${t === this.prevLabel && this.prevLabel ? r`<gup-icon icon-name="${s}" class="arrow-icon" width="24" height="24"></gup-icon>` : null}
              <span class="text-box">
                <span class="label">
                  ${t}
                </span>
                <span class="title">
                  ${a}
                </span>
              </span>
              ${t === this.nextLabel && this.nextLabel ? r`<gup-icon icon-name="${s}" class="arrow-icon" width="24" height="24"></gup-icon>` : null}
            </a>
          `
    )}
      </div>
    </nav>
    `}
    `;
  }
};
n.styles = d;
l([
  o({ type: Number, attribute: "total-pages", reflect: !0 })
], n.prototype, "totalPages", 2);
l([
  o({ type: Number, attribute: "current-page", reflect: !0 })
], n.prototype, "currentPage", 2);
l([
  o({ reflect: !0 })
], n.prototype, "kind", 2);
l([
  o({ attribute: "prev-label" })
], n.prototype, "prevLabel", 2);
l([
  o({ attribute: "prev-title" })
], n.prototype, "prevTitle", 2);
l([
  o({ attribute: "prev-link" })
], n.prototype, "prevLink", 2);
l([
  o({ attribute: "next-label" })
], n.prototype, "nextLabel", 2);
l([
  o({ attribute: "next-title" })
], n.prototype, "nextTitle", 2);
l([
  o({ attribute: "next-link" })
], n.prototype, "nextLink", 2);
n = l([
  b("gup-pagination")
], n);
export {
  n as Pagination
};
