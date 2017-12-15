import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SingleBudgetListItem from '../SingleBudgetListItem';

function renderListOfItems(items) {
  return items.map((item) => {
    // This will be the key-prop for the item
    const keyProp = item.name
      .toLowerCase()
      .trim()
      // Removing spaces
      .replace(' ', '')
      // Removing special characters with regexp
      .replace(/[^a-zA-Z ]/g, '');

    return (
      <SingleBudgetListItem key={keyProp} item={item} />
    );
  });
}

export default class BudgetItems extends Component {
  constructor() {
    super();
    this.handleSubmitNewBudgetItem = this.handleSubmitNewBudgetItem.bind(this);
  }
  handleSubmitNewBudgetItem(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const amount = parseInt(e.target.amount.value, 10);
    const isExpense = e.target.isExpense !== undefined;

    this.props.addBudgetItem(name, amount, isExpense);
  }
  render() {
    const income = this.props.items.filter(item => item.expense === false);
    const expenses = this.props.items.filter(item => item.expense === true);

    return (
      <div>
        <div>
          <h2>Income</h2>
          <div>{renderListOfItems(income)}</div>
          <form onSubmit={this.handleSubmitNewBudgetItem}>
            <input type="text" name="name" placeholder="new income item" />
            <input type="text" name="amount" placeholder="amount" />
            <input type="submit" />
          </form>
        </div>
        <div>
          <h2>Expenses</h2>
          <div>{renderListOfItems(expenses)}</div>
          <form onSubmit={this.handleSubmitNewBudgetItem}>
            <input type="text" name="name" placeholder="new income item" />
            <input type="text" name="amount" placeholder="amount" />
            <input type="checkbox" name="isExpense" checked hidden readOnly />
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
}

BudgetItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  addBudgetItem: PropTypes.func.isRequired,
};

BudgetItems.defaultProps = {
  items: [],
};
