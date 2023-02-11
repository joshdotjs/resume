const template = document.createElement('template');
template.innerHTML = `
  <div class="section-3__project-2 card">
    <div class="left">
      <h5>Full Stack Project 2</h5>
      <p>Custom eCommerce Store</p>

      <ul>
        <li>Frontend: Next.js</li>
        <li>Backend: Node.js</li>
        <li>Uses Incremental Static Regeneration (ISR) updated every 5 minutes</li>
        <li>PostgresSQL database</li>
        <li>Frontend deployed to Vercel</li>
        <li>Backend deployed to Heroku</li>
        <li>Lighthouse score:	</li>
      </ul>
    </div>

    <div class="logos top">
      <img class="logo" src="/img/logos/next.svg"/>
      <img class="logo" src="/img/logos/node-2.svg"/>
      <img class="logo" src="/img/logos/postgres.svg"/>
    </div>

    <div class="demo-links">

      <div class="demo-link">
        <wc-link href="https://www.php-web-app.com/">Live Demo — php-web-app.com</wc-link>
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
window.customElements.define('project-2', CustomElement);