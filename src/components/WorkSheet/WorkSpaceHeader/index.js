import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './WorkSpaceHeader.css';

const temporaryTitle = 'Your title here';

export default class WorkSpaceHeader extends Component {
  constructor() {
    super();

    this.state = {
      focussed: false,
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
      if (tempVal !== temporaryTitle) {
        this.titleInput.value = tempVal;
      }
    });
  }

  handleFocusOut() {
    if (this.titleInput.value === temporaryTitle) {
      this.props.changeWorksheetTitle(temporaryTitle);
      this.setState({
        focussed: false,
      });
    } else {
      this.setState({
        focussed: false,
      });
    }
  }

  handleChange(e) {
    this.props.changeWorksheetTitle(e.target.value);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.changeWorksheetTitle(this.titleInput.value);
    this.setState({
      focussed: false,
    });
  }

  render() {
    const isFocussed = this.state.focussed;
    const { title } = this.props;
    return (
      <form onSubmit={this.handleSubmit} className={`workSpaceHeader__container ${isFocussed ? 'is-active' : ''}`}>
        {
          isFocussed
          ?
            <input
              type="text"
              placeholder="Enter your title"
              onBlur={this.handleFocusOut}
              onChange={this.handleChange}
              value={title}
              ref={(input) => { this.titleInput = input; }}
            />
          :
            <h1>{title}</h1>
        }
        {
          isFocussed
          ? null
          :
          <button className="editButton" onClick={this.handleFocusIn}>
            <span role="img" aria-label="Writing hand">✍️</span>
          </button>
        }
      </form>
    );
  }
}

WorkSpaceHeader.propTypes = {
  title: PropTypes.string,
  changeWorksheetTitle: PropTypes.func.isRequired,
};

WorkSpaceHeader.defaultProps = {
  title: temporaryTitle,
};
