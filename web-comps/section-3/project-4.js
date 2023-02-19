const template = document.createElement('template');
template.innerHTML = `
  <div class="section-3__project-4 project shadow">

    <div class="left">
      <h3>Static Frontend Project 1</h3>
      <h4>Portfolio</h4>
      <ul>
        <li>Vanilla JavaScript</li>
        <li>Custom CSS</li>
        <li>Custom single page app (no SPA library or framework) including custom SPA routing built with programmatic URL route changes and local storage for persistent state between page refreshes</li>
        <li>Custom smooth scrolling and parallax effect with JavaScript (no library)</li>
        <li>Embedded Lottie file animations</li>
        <li>Embedded Adobe After Effects animations</li>
        <li>Scroll based animations with both GSAP Scrolltrigger and the native JavaScript Intersection Observer API</li>
      </ul>
    </div>

    <div class="logos top">
      <img class="logo" src="/img/logos/js.svg" style="border-radius: 5px;"/>
      <img class="logo" src="/img/logos/gsap.svg" />
      <img class="logo" src="/img/logos/sass.svg"/>
      <img class="logo" src="/img/logos/web-comps.svg"/>
    </div>

    <div class="demo-links">

      <div class="demo-link">
        <wc-link href="https://joshDotJS.com">joshDotJS.com</wc-link>
      </div>

      <div class="demo-link">
        <wc-link href="https://github.com/joshdotjs/portfolio">Code</wc-link>
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
window.customElements.define('project-4', CustomElement);