const template = document.createElement('template');
template.innerHTML = `
  <section class="section-2">
    <div class="section-2__left card shadow">
      <h2>Relevant Skills</h2>
      <ul>
        <li>React / Next.js</li>
        <li>JavaScript</li>
        <li>CSS / SCSS</li>
        <li>GSAP</li>
        <li>Node.js / Express</li>
        <li>PHP / Laravel</li>
        <li>SQL</li>
        <li>HTML / Web Components</li>

      </ul>
    </div>

    <div class="section-2__middle card shadow">
      <h2>Relevant Education</h2>
      <ul>
        <li>Full Stack Web Development Certificate</li>
        <li>Bloom Institute of Technology (2022)</li>
        <li>Stack specialization:

          <ul class="level-2">
            <li>React</li>
            <li>Node.js</li>
            <li>PostgreSQL</li>
          </ul>

        </li>
      </ul>

    </div>

    <div class="section-2__right card shadow">
      <h2>Demo Projects</h2>
      <ul>

        <div class="demo-link">
          <wc-link href="https://www.php-web-app.com">php-web-app.com</wc-link>
        </div>

        <div class="demo-link">
          <wc-link href="https://www.node-web-app.com">node-web-app.com</wc-link>
        </div>

        <div class="demo-link">
          <wc-link href="https://www.wp-web-app.com">wp-web-app.com</wc-link>
        </div>
        
      </ul>
    </div>
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
    importCSS('/web-comps/section-2/css/section-2.css');
    
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
window.customElements.define('section-2', CustomElement);