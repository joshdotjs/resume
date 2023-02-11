const template = document.createElement('template');
template.innerHTML = `
  <div class="section-3__project-5 project shadow">

    <div class="left">
      
      <h3>Static Frontend Project 2</h3>
      <h4>Resume (this document)</h4>
        
      <ul>
        <li>Native HTML with Web Components</li>
        <li>Custom CSS</li>
      </ul>
      
    </div>

    <div class="logos">
      <img class="logo" src="/img/logos/html.svg"/>
      <img class="logo" src="/img/logos/css.svg"/>
      <img class="logo" src="/img/logos/web-comps-3.svg"/>
    </div>

    <div class="demo-links">
      <div class="demo-link">
        <wc-link href="https://www.hollowayJosh.com/resume">Live Demo</wc-link>
      </div>

      <div class="demo-link">
        <wc-link href="https://github.com/joshdotjs/">Code</wc-link>
      </div>

    </div>

  </div>
`;

// ==============================================

// Step 1: Define
class CustomElement extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback() {
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
window.customElements.define('project-5', CustomElement);