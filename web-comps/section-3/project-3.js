const template = document.createElement('template');
template.innerHTML = `
  <div class="section-3__project-3 project shadow">

    <div class="left">
     
      <h3>Full Stack Project 3</h3>
      <h4>Custom eCommerce Store</h4>
      
      <ul>
        <li>Frontend: Custom WordPress Theme (React with WebPack)</li>
        <li>Backend: Custom WordPress Plugin (PHP)</li>
        <li>All the features of the featured project</li>
        <li>Custom SQL database tables</li>
        <li>Custom PHP plugin for custom REST endpoints to talk to the database via HTTP requests from React using the native JavaScript fetch API</li>
        <li>Cookie based authentication for login/registration and restricted routes for authenticated users/admins</li>
      </ul>
    </div>

    <div class="logos top">
      <img class="logo" src="/img/logos/react.svg"/>
      <img class="logo" src="/img/logos/php-2.svg"/>
      <img class="logo" src="/img/logos/wp.svg"/>
      <!-- <img class="logo" src="/img/logos/mysql.svg"/> -->
      <img class="logo" src="/img/logos/webpack-2.svg"/>
    </div>

    <div class="demo-links">

      <div class="demo-link">
        <wc-link href="https://www.wp-web-app.com/">Live Demo</wc-link>
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