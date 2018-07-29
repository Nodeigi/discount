import React, { Component } from 'react';

import './Checkbox.css';

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.checked || false
    };
  }

  render() {
    return (
      <label htmlFor={this.props.name}>
      	<input type="checkbox" value={this.state.value} onChange={this.onChange.bind(this)} id={this.props.name} />
        { this.props.label }
      </label>
    );
  }

  onChange(event) {
    const checked = event.target.checked;
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(checked);
    }

    this.setState({
      value: checked
    });
  }
}

export default Checkbox;
