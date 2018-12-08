(function ( doc, w ) {
  /**
   * Write the CSS as CSS, because CSS.
   * Store it for pulling into the Switch's template.
   */
  const switchStyles = doc.getElementById('switch_styles').innerHTML;

  /**
   * Build a reusable template to serve as the
   * base for each instance of the switch.
   */
  const switchTemplate = doc.createElement('template');
  switchTemplate.innerHTML = '<style>' + switchStyles + '</style>' + `
    <button type="button" class="switch-btn">
      <span class="switch-btn__text" role="presentation"></span>
      <span class="switch-btn__knob" aria-hidden="true"></span>
    </button>
  `;

  /**
   * Define the custom element
   */
  let btn;
  let text;

  class switchBtn extends HTMLElement {
    constructor () {
      super();

      this._shadowRoot = this.attachShadow({ mode: 'open' });
      this._shadowRoot.appendChild(switchTemplate.content.cloneNode(true));
      btn = this.$btn = this._shadowRoot.querySelector('.switch-btn');
      text = this.$text = this._shadowRoot.querySelector('.switch-btn__text');

      btn.addEventListener('click', function () {
        this.setAttribute('aria-checked', this.getAttribute('aria-checked') === 'true' ? 'false' : 'true');
      });
    }

    connectedCallback() {
      const accName = this.getAttribute('text');
      btn.setAttribute('role', 'switch');

      if ( accName && accName !== '' ) {
        text.innerHTML = accName;
      }
      else {
        console.warn('Provide a "text" value.')
      }

      if ( this.hasAttribute('check') ) {
        btn.setAttribute('aria-checked', 'true');
      }
      else {
        btn.setAttribute('aria-checked', 'false');
      }

      if ( this.hasAttribute('disable') ) btn.disabled = true;
      if ( this.hasAttribute('labelled-state') ) btn.classList.add('switch-btn--show-labels');
    }
  }

  customElements.define('switch-btn', switchBtn);
})( document, window, undefined );
