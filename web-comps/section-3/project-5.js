const template = document.createElement('template');
template.innerHTML = `
  <div class="section-3__project-5 project shadow fuck">

    <div class="left">
      
      <h3>Static Frontend Project 2</h3>
      <h4>Resume (this document)</h4>
        
      <ul>
        <li>Custom CSS</li>
        <li>Native HTML</li>
        <li>Web Components</li>
        <li>Zero Libraries</li>
      </ul>
      
    </div>

    <!-- <div class="code-snippet" style="background: lightblue;">
      <wc-html></wc-html>
    </div> -->

    <div class="logos three-logos">
      <img class="logo" src="/img/logos/html.svg"/>
      <img class="logo" src="/img/logos/web-comps-2.svg"/>
      <!-- <img class="logo" src="/img/logos/web-comps-3.svg"/> -->
      <img class="logo" src="/img/logos/css.svg"/>
    </div>

    <div class="demo-links">
      <div class="demo-link">
        <wc-link href="https://hollowayJosh.com">Live Demo</wc-link>
      </div>

      <div class="demo-link">
        <wc-link href="https://github.com/joshdotjs/resume">Code</wc-link>
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