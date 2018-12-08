# Switch web component

An example of switch controls (`role=switch`) built as a web component.

I'm sure this could be better constructed, so PRs are welcome :) 


## Available attributes
* `labelled-state`:  
  If set, will display "On" and "Off" text labels in toggle UI.
* `check`:           
  If set, will default to "on / checked" state. Otherwise will default to "off / unchecked".
* `disable`:         
  If set, will default to `disabled` state.

[Example on CodePen](https://codepen.io/scottohara/pen/YdKQQE)


## Screen Reader Quirks
Rather than updating this information in multiple places, please [review the breakdown of screen reader issues with `role="switch"`](https://scottaohara.github.io/a11y_styled_form_controls/src/checkbox--switch/#affects_on_sr).  While this particular link goes to an example of using `role=switch` on a checkbox, the same issues occur if using `role=switch` on a `button` element as well, as this web component does.


## License & Such
This script was written by [Scott O'Hara](https://twitter.com/scottohara).

It has an [MIT](https://github.com/scottaohara/aria-switch-button/blob/master/LICENSE) license.

Do with it what you will :)
