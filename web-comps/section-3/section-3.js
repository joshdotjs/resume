const template = document.createElement('template');
template.innerHTML = `
  <section class="section-3 card shadow">

    <h2>Portfolio</h2>

    <project-1></project-1>
    <project-2></project-2>
    <project-3></project-3>
    <project-4></project-4>
    <project-5></project-5>

  </section>
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
    importCSS('/web-comps/section-3/css/section-3.css');
    
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
window.customElements.define('section-3', CustomElement);