import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './SingleBudgetListItem.css';

class SingleBudgetListItem extends Component {
  constructor() {
    super();
    this.state = {
      editing: false,
    };

    this.handleEditClick = this.handleEditClick.bind(this);
  }
  handleEditClick() {
    this.setState({
      editing: true,
    }, () => {
      const temporaryValue = this.editInputName.value;
      this.editInputName.focus();
      this.editInputName.value = '';
      this.editInputName.value = temporaryValue;
    });
  }
  render() {
    const { item, editBudgetItem } = this.props;
    const { editing } = this.state;
    return (
      editing
        ?
          <div className="listItem__entry__container">
            <div className="name"><input type="text" value={item.name} ref={(el) => { this.editInputName = el; }} /></div>
            <div className="amount">{item.amount}</div>
            <div className="actions"><button onClick={this.handleEditClick}>Edit</button><button>Delete</button></div>
          </div>
        :
          <div className="listItem__entry__container">
            <div className="name">{item.name}</div>
            <div className="amount">{item.amount}</div>
            <div className="actions"><button onClick={this.handleEditClick}>Edit</button><button>Delete</button></div>
          </div>
    );
  }
}

SingleBudgetListItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    amount: PropTypes.number,
    expense: PropTypes.bool,
  }).isRequired,
};

export default SingleBudgetListItem;
