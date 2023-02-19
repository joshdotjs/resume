const template = document.createElement('template');
template.innerHTML = `
  <div class="section-3__project-1  project  featured  shadow">
    <div class="left">

      <!-- <h3>Full Stack Project 1 <span style="background: #121FCF;
background: linear-gradient(to right, darkorange 0%, limegreen 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;">(Featured Project)</span></h3> -->
      <h3>Full Stack Project 1 <a href="https://www.php-web-app.com" style="text-decoration: underline; font-weight: 400;">(Featured Project)</a></h3>
      <h4>Custom eCommerce Store</h4>
      
      <ul>
        <li>Frontend: React with Vite</li>
        <li>Backend: Laravel</li>
        <li>Animations are custom built – most use advanced GSAP techniques</li>
        <li>Embedded Adobe After Effects custom loading animation</li>
        <li>Mostly custom CSS (with some Tailwind)</li>
        <li>User-facing storefront for customers to view/filter/sort products, place items in an interactive shopping cart and place orders with an online payment system</li>
        <li>Admin-facing dashboard for product and order logistics</li>
        <li>Stripe credit card transactions including Buy Now Pay Later (BNPL) with Klarna using web-hooks to update the status of orders</li>
        <li>Custom server-side rendering (SSR) by rendering a subset of products on the initial page load – subsequent product retrieval via AJAX requests after the page has been hydrated with JavaScript – this is good for SEO and initial page load speed</li>
        <li>JWT based authentication using local storage</li>
        <li>Cryptographically hashed passwords via Bcrypt for secure login/registration</li>
      </ul>
    </div>

    <div class="logos top">
      <img class="logo" src="/img/logos/react.svg" />
      <img class="logo" src="/img/logos/laravel.svg" />
      <img class="logo" src="/img/logos/mysql.svg" />
      <img class="logo" src="/img/logos/vite.svg" />
    </div>

    <div class="demo-links">

      <div class="demo-link">
        <wc-link href="https://www.php-web-app.com">php-web-app.com</wc-link>
      </div>

      <div class="demo-link">
        <wc-link href="https://github.com/joshdotjs/php-web-app.com">Code</wc-link>
      </div>

      <div class="demo-link">
        <wc-link href="https://www.joshdotjs.com/videos/ecommerce/2023">Video</wc-link>
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
window.customElements.define('project-1', CustomElement);