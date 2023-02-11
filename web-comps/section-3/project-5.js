const template = document.createElement('template');
template.innerHTML = `
  <div class="section-3__project-4 card">

    <div class="left">
      <h5>Static Frontend Project 1</h5>
      <p>Portfolio</p>
      <ul>
        <li>Vanilla JavaScript</li>
        <li>Custom CSS</li>
        <li>Custom Single Page App (no SPA library or framework) including custom SPA routing built with programattic URL route changes and local storage for persistent state between page refreshes</li>
        <li>Custom smooth scrolling and parallax effect with JavaScript (no library)</li>
        <li>Embedded Lottie file animations</li>
        <li>Embedded Adobe After Effects animations</li>
        <li>Scroll based animations with both GSAP Scrolltrigger and native </li>
        <li>Deployed to Vercel</li>
        <li>Lighthouse score: </li>
      </ul>
    </div>

    <!-- <div style="display: inline-block;">
      <p>Native HTML:</p>
      <wc-html></wc-html>
    </div> -->

    <div class="logos top">
      <img class="logo" src="/img/logos/js.svg" style="border-radius: 5px;"/>
      <img class="logo" src="/img/logos/gsap.svg" />
      <img class="logo" src="/img/logos/sass.svg"/>
    </div>

    <div class="demo-links">

      <div class="demo-link">
        <wc-link href="https://www.hollowayJosh.com/">Live Demo - hollowayJosh.com</wc-link>
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
window.customElements.define('project-4', CustomElement);