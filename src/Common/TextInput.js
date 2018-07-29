import React, { Component } from 'react';

import './TextInput.css';

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || ''
    };
  }

  render() {
    return (
      <input className={'textInput ' + (this.props.wide ? 'wide' : '')} type="text" value={this.state.value} onChange={this.onChange.bind(this)} placeholder={this.props.label} />
    );
  }

  onChange(event) {
    const value = event.target.value;
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(value);
    }

    this.setState({
      value: value
    });
  }
}

export default TextInput;
