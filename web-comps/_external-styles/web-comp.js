const template = document.createElement('template');
template.innerHTML = `
  <div id="web-comp-external-stylesheet">Custom Element</div>
`;

// ==============================================

// Step 1: Define
class CustomElement extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback() {
    const importCSS = (path) => {
      const link = document.createElement("link");
      link.setAttribute("rel", "stylesheet");
      link.setAttribute("href", path);
      // this.shadowRoot.appendChild(link);
      this.appendChild(link);
    };
    // importCSS('./css/web-comp.css'); // NOTE: I think this path is relative to the file the custom element <web-comp> is actually used in!
    importCSS('/web-comps/_external-styles/css/web-comp.css');
    
    const importHTML = () => {
      const content = template.content;
      const cloned = content.cloneNode(true);
      this.append(cloned);
    };
    importHTML();
  }

}

// ==============================================

// Step 2: Register
window.customElements.define('web-comp', CustomElement);