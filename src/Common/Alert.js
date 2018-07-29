import React, { Component } from 'react';

import './Alert.css';

class Alert extends Component {
  render() {
    return (
      <div className={'alert alert-' + this.props.type}>
        { this.props.message }
      </div>
    );
  }
}

export default Alert;
