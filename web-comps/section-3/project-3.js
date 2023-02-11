const template = document.createElement('template');
template.innerHTML = `
  <div class="section-3__project-3 card">

    <div class="left">
      <h5>Full Stack Project 3</h5>
      <p>Custom eCommerce Store</p>
      
      <ul>
        <li>Frontend: Custom WordPress Theme (with React)</li>
        <li>Backend: Custom WordPress Plugin (with PHP)</li>
        <li>Custom SQL database tables</li>
        <li>Custom PHP plugin for custom REST endpoints to talk to the database via HTTP requests from React using the native JavaScript fetch API</li>
        <li>Cookie based authentication for login/registration and restricted routes for authenticated users/admins</li>
        <li>Deployed to Hostinger</li>
      </ul>
    </div>

    <div class="logos top">
      <img class="logo" src="/img/logos/react.svg"/>
      <img class="logo" src="/img/logos/php-2.svg"/>
      <img class="logo" src="/img/logos/wp.svg"/>
      <img class="logo" src="/img/logos/mysql.svg"/>
    </div>

    <div class="demo-links">

      <div class="demo-link">
        <wc-link href="https://www.wp-web-app.com/">Live Demo — wp-web-app.com</wc-link>
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
window.customElements.define('project-3', CustomElement);