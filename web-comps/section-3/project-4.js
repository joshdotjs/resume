const template = document.createElement('template');
template.innerHTML = `
  <div class="section-3__project-5 card">

    <div class="left">
      <h5>Static Frontend Project 2</h5>
      <p>Resume (this document)</p>
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

      <div class="demo-link">
        <wc-link href="">Video</wc-link>
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