import template from "./template.js";
import importCSS from "../util/import-css.js";
import setupHTML from "../util/setup-html.js";
const css = '/web-comps/link/css/index.css';

class WebComp extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({ mode: 'open'})
    const shadowRoot = this.shadowRoot;
    importCSS(shadowRoot, css);
    setupHTML(shadowRoot, template);
  }

  connectedCallback() {

    const a = this.shadowRoot.querySelector('a');
    a.setAttribute('href', this.getAttribute('href'));
  }

}

window.customElements.define('wc-link', WebComp);