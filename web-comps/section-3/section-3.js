const template = document.createElement('template');
template.innerHTML = `
    <section class="section-3">
      Portfolio

      <!-- ---------------------------------- -->

      <div class="section-3__project-1 card">
        <div class="left">

          <h5>Full Stack Project 1</h5>
          <p>Custom eCommerce Store</p>
          
          <ul>
            <li>Frontend: React</li>
            <li>Backend: Laravel</li>
            <li>All animations are custom built using advanced GSAP techniques</li>
            <li>Custom CSS</li>
            <li>User-facing storefront for customers to view/filter/sort products, place items in an interactive shopping cart, and place orders with an online payment system</li>
            <li>Admin-facing dashboard for product and order logistics</li>
            <li>Stripe credit card transactions including Buy Now Pay Later (BNPL) with Klarna using web-hooks to update the status of orders</li>
            <li>Custom server-side rendering (SSR) by rendering a subset of products on the initial page load – subsequent product retrieval via AJAX requests after the page has been hydrated with JavaScript – this is good for SEO and initial page load speed</li>
            <li>JWT-authentication using local storage</li>
            <li>Cryptographically hashed passwords via Bcrypt for secure login/registration</li>
            <li>Deployed to Linode</li>
            <li>Lighthouse score:</li>
          </ul>
        </div>

        <div class="logos top">
          <img class="logo" src="/img/logos/react.svg" />
          <img class="logo" src="/img/logos/gsap.svg" />
          <img class="logo" src="/img/logos/laravel.svg"/>
          <img class="logo" src="/img/logos/mysql.svg"/>
        </div>

        <div class="demo-links">

          <div class="demo-link">
            <wc-link href="https://www.php-web-app.com/">Live Demo</wc-link>
          </div>

          <div class="demo-link">
            <wc-link href="https://github.com/joshdotjs/josh.js">Code</wc-link>
          </div>

          <div class="demo-link">
            <wc-link href="">Video</wc-link>
          </div>
        </div>

      </div>

      <!-- ---------------------------------- -->

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

      <!-- ---------------------------------- -->

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

      <!-- ---------------------------------- -->

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

      <!-- ---------------------------------- -->

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

      <!-- ---------------------------------- -->

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
    importCSS('/web-comps/section-3/css/section-3.css');
    
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
window.customElements.define('section-3', CustomElement);