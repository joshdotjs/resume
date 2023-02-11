import template from "./template.js";
import importCSS from "../util/import-css.js";
import setupHTML from "../util/setup-html.js";

const name = 'html';

// ==============================================

class WebComp extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({ mode: 'open'})
    const shadowRoot = this.shadowRoot;

    const css = `/web-comps/${name}/css/index.css`;
    importCSS(shadowRoot, css);
    setupHTML(shadowRoot, template);
  }

  connectedCallback() {
  }

}

// ==============================================

window.customElements.define(`wc-${name}`, WebComp);