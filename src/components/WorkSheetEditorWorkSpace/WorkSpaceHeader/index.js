import React, { Component } from 'react';

import './WorkSpaceHeader.css';

export default class WorkSpaceHeader extends Component {
  constructor() {
    super();
    this.state = {
      focussed: false,
    };
    this.handleFocusIn = this.handleFocusIn.bind(this);
    this.handleFocusOut = this.handleFocusOut.bind(this);
  }
  handleFocusIn() {
    this.setState({
      focussed: true,
    });
  }

  handleFocusOut() {
    this.setState({
      focussed: false,
    });
  }

  render() {
    const isFocussed = this.state.focussed;
    return (
      <input
        type="text"
        placeholder="Title Mc Titlerson"
        onFocus={this.handleFocusIn}
        onBlur={this.handleFocusOut}
        className={`WorkSpaceHeader ${isFocussed ? 'is-active' : ''}`}
      />
    );
  }
}
