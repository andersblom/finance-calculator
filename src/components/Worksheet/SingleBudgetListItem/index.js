import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './SingleBudgetListItem.css';

class SingleBudgetListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      name: props.item.name,
      amount: props.item.amount,
    };

    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
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

  handleSubmit(e) {
    e.preventDefault();
    const amountAsInt = parseInt(this.state.amount, 10) || this.state.amount || 0;
    this.props.editBudgetItem(this.props.item.id, this.state.name, amountAsInt);
    this.setState({
      editing: false,
    });
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value,
    });
  }

  handleAmountChange(e) {
    this.setState({
      amount: e.target.value,
    });
  }

  render() {
    const { item } = this.props;
    const { editing } = this.state;
    return (
      editing
        ?
          <form onSubmit={this.handleSubmit} className="listItem__entry__container">
            <div className="name"><input type="text" value={this.state.name} onChange={this.handleNameChange} ref={(el) => { this.editInputName = el; }} /></div>
            <div className="amount"><input type="number" value={this.state.amount} onChange={this.handleAmountChange} /></div>
            <div className="actions"><input type="submit" onClick={this.handleSubmit} value="Done" /></div>
          </form>
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
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    expense: PropTypes.bool.isRequired,
  }).isRequired,
  editBudgetItem: PropTypes.func.isRequired,
};

export default SingleBudgetListItem;
