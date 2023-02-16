const template = document.createElement('template');
template.innerHTML = `
    <section class="section-1 ">
      <div class="section-1__left">
        <h1>Josh Holloway</h1>
        <h2>Web Developer</h2>
        <h5>
          <a href="mailto: joshdotjs@gmail.com">
            <svg-mail></svg-mail>
            <span>joshDotJS@gmail.com</span>
          </a>
        </h5>
      </div>

      <div class="section-1__right">

        <div class="socials">
          <h5>
            <a href="https://www.youtube.com/@JHolloway">
              <svg-youtube></svg-youtube>
            </a>
          </h5>
          <h5>
            <a href="https://github.com/joshdotjs">
              <svg-github></svg-github>
            </a>
          </h5>
        </div>

        <a class="website-link" href="https://joshDotJS.com">joshDotJS.com</a>
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
    importCSS('/web-comps/section-1/css/section-1.css');
    
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
window.customElements.define('section-1', CustomElement);