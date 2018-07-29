import React, { Component } from 'react';

import Button from './Button';

class ButtonWithIcon extends Button {
  // constructor(props) {
  //   super(props);
  //   console.log('janaduu');
  //   debugger;
  // }
  render() {
    return (
      <button className={'btn btn-with-icon ' + (this.props.size ? 'btn-' + this.props.size : '')} onClick="this.onClick.bind(this)">
        <span className="btn-icon">{ this.props.children }</span>
        { this.props.label }
      </button>
    );
  }

}

export default ButtonWithIcon;
