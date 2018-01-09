import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './WorkSpaceHeader.css';

const temporaryTitle = 'Untitled worksheet';

export default class WorkSpaceHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      focussed: false,
      inputValue: props.title !== null ? props.title : temporaryTitle,
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

  submitTitleInput() {
    if (this.titleInput.value === temporaryTitle || this.titleInput.value.length === 0) {
      this.props.changeWorksheetTitle(temporaryTitle);
      this.setState({
        focussed: false,
      });
    } else {
      this.props.changeWorksheetTitle(this.titleInput.value);
      this.setState({
        focussed: false,
      });
    }
  }

  handleFocusOut() {
    this.submitTitleInput();
  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.submitTitleInput();
  }

  render() {
    const isFocussed = this.state.focussed;
    const title = this.props.title !== null ? this.props.title : temporaryTitle;

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
              value={this.state.inputValue}
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
