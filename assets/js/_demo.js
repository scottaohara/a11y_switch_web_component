(function ( doc, w ) {
/**
 * When custom elements have open Shadow DOMs, this means that
 * these elements can be written in a generic manner without
 * worrying about how each instance might need to be used
 * beyond their general UX.
 *
 * This demo file shows how once all the custom elements are in
 * place, targeted JavaScript can be written to pierce unique
 * custom element's Shadow DOMs, and change the state of the
 * web components, as well as content outside of them.
 */


  /**
   * Keep track of all the necessary elements.
   */
  /* Light DOM */
  const body              = doc.getElementsByTagName('BODY')[0];
  const app               = doc.getElementById('app');

  const darkModeDesc      = doc.getElementById('dark_desc');
  const revealDesc        = doc.getElementById('reveal_desc');

  const settingsSwitch    = doc.getElementById('enable_all');
  const darkSwitch        = doc.getElementById('drk_mode')
  const transitionSwitch  = doc.getElementById('remove_transitions');
  const descSwitch        = doc.getElementById('reveal');

  /* Shadow DOM */
  const settingsBtn     = settingsSwitch.shadowRoot.querySelector('.switch-btn');
  const darkModeBtn     = darkSwitch.shadowRoot.querySelector('.switch-btn');
  const transitionsBtn  = transitionSwitch.shadowRoot.querySelector('.switch-btn');
  const descriptionsBtn = descSwitch.shadowRoot.querySelector('.switch-btn');


  /**
   * Just to have a function to toggle the
   * enabled/disabled state of the other
   * switches in the document.
   */
  const enableAll = function () {
    if ( settingsBtn.getAttribute('aria-checked') === 'true' ) {
      darkModeBtn.disabled = false;
      transitionsBtn.disabled = false;
      descriptionsBtn.disabled = false;
    }
    else {
      darkModeBtn.disabled = true;
      transitionsBtn.disabled = true;
      descriptionsBtn.disabled = true;
    }
  };

  settingsBtn.addEventListener('click', enableAll);



  /**
   * Don't want a flash of color changing on page load,
   * so add CSS transition after the fact via a timeout.
   *
   * Also check for if reduced motion is on.  Because if so,
   * then don't even add the transition.
   */
  const motionQuery = w.matchMedia('(prefers-reduced-motion)');
  const checkMotion = function () {
    if ( !motionQuery.matches ) {
      app.classList.add('transition');
      body.classList.add('transition');
    }
  };

  const removeTransitionClass = function () {
    if ( transitionsBtn.getAttribute('aria-checked') === 'true' ) {
      app.classList.remove('transition');
      body.classList.remove('transition');
    }
    else {
      checkMotion();
    }
  };

  setTimeout(function () {
    checkMotion();
  }, 10);

  transitionsBtn.addEventListener('click', removeTransitionClass);


  /**
   * Toggle the class on the body element based
   * on whether the darkModeInput switch is On (checked)
   * or not.  Run function on load to immediately set.
   */
  const setMode = function () {
    if ( darkModeBtn.getAttribute('aria-checked') === 'true' ) {
      body.classList.add('dark-mode');
    }
    else {
      body.classList.remove('dark-mode');
    }
  };

  setMode();
  darkModeBtn.addEventListener('click', setMode);



  /**
   * Show or hide the on/off knob labels
   */
  const labelKnobs = function () {
    if ( descriptionsBtn.getAttribute('aria-checked') === 'true' ) {
      settingsBtn.classList.add('switch-btn--show-labels');
      darkModeBtn.classList.add('switch-btn--show-labels');
      transitionsBtn.classList.add('switch-btn--show-labels');
      descriptionsBtn.classList.add('switch-btn--show-labels');
    }
    else {
      settingsBtn.classList.remove('switch-btn--show-labels');
      darkModeBtn.classList.remove('switch-btn--show-labels');
      transitionsBtn.classList.remove('switch-btn--show-labels');
      descriptionsBtn.classList.remove('switch-btn--show-labels');
    }
  };

  descriptionsBtn.addEventListener('click', labelKnobs);

})( document, window, undefined );
