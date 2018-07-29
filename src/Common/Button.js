import React, { Component } from 'react';

import './Button.css';

class Button extends Component {
  render() {
    let stateClass = '';
    if (this.props.state === Button.STATE_PROCESSING) {
      stateClass = 'processing';
    } else if (this.props.state === Button.STATE_INACTIVE) {
      stateClass = 'inactive';
    }
    return (
      <button onClick={this.onClick.bind(this)} className={'btn ' + (this.props.wide ? 'wide ' : ' ') + stateClass}>
        { this.props.label }
      </button>
    ); //
  }

  onClick(event) {
    event.preventDefault();
    if (this.props.state === Button.STATE_INACTIVE) {
      return;
    }
    if (typeof this.props.onClick === 'function') {
      this.props.onClick();
    }
  }
}

Button.STATE_INACTIVE = 0;
Button.STATE_PROCESSING = 1;
Button.STATE_REGULAR = 2;

export default Button;
