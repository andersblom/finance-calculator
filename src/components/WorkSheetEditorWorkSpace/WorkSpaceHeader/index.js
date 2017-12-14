import React, { Component } from 'react';

import './WorkSpaceHeader.css';

export default class WorkSpaceHeader extends Component {
  constructor() {
    super();
    this.state = {
      focussed: false,
      inputValue: 'Your title here',
    };

    this.handleFocusIn = this.handleFocusIn.bind(this);
    this.handleFocusOut = this.handleFocusOut.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFocusIn() {
    this.setState({
      focussed: true,
    }, () => {
      // Focussing titleInput in setState() callback,
      // so that it will not be undefined because the
      // input is not yet mounted
      this.titleInput.focus();

      // Fix that makes sure the caret lands at the end of the input
      const tempVal = this.titleInput.value;
      this.titleInput.value = '';
      // But, if the input is the temporary 'Your title here',
      // then leave the input empty
      if (tempVal !== 'Your title here') {
        this.titleInput.value = tempVal;
      }
    });
  }

  handleFocusOut() {
    this.setState({
      focussed: false,
    });
  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      inputValue: this.titleInput.value,
      focussed: false,
    });
  }

  render() {
    const isFocussed = this.state.focussed;
    return (
      <form onSubmit={this.handleSubmit} className={`WorkSpaceHeader__container ${isFocussed ? 'is-active' : ''}`}>
        {
          isFocussed
          ?
            <input
              type="text"
              placeholder="Enter your title"
              onBlur={this.handleFocusOut}
              onChange={this.handleChange}
              value={this.state.inputValue}
              ref={(input) => { this.titleInput = input; }}
            />
          :
            <h1>{this.state.inputValue}</h1>
        }
        {
          isFocussed
          ? null
          : <button onClick={this.handleFocusIn}>Edit</button>
        }
        <div className="bottom__border" />
      </form>
    );
  }
}
