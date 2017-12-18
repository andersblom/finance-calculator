import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SingleBudgetListItem from '../SingleBudgetListItem';

import './BudgetItems.css';

function renderListOfItems(items) {
  return items.map(item => <SingleBudgetListItem key={item.id} item={item} />);
}

export default class BudgetItems extends Component {
  constructor() {
    super();
    this.handleSubmitNewBudgetItem = this.handleSubmitNewBudgetItem.bind(this);
  }
  handleSubmitNewBudgetItem(e) {
    e.preventDefault();
    const name = e.target.name.value.length === 0 ? 'Something mc somethingson' : e.target.name.value;
    const amount = Number.isNaN(parseInt(e.target.amount.value, 10)) ? 0 : parseInt(e.target.amount.value, 10);
    const isExpense = e.target.isExpense !== undefined;

    this.props.addBudgetItem(name, amount, isExpense);
  }
  render() {
    const income = this.props.items.filter(item => item.expense === false);
    const expenses = this.props.items.filter(item => item.expense === true);

    return (
      <div className="budgetItems__container">
        <div className="budgetItems__category">
          <h2>Income</h2>
          <div>{renderListOfItems(income)}</div>
          <form onSubmit={this.handleSubmitNewBudgetItem}>
            <input type="text" className="budgetItems__addNew name" name="name" placeholder="new income item" />
            <input type="number" className="budgetItems__addNew amount" name="amount" placeholder="amount" />
            <input type="submit" className="budgetItems__addNew submit" />
          </form>
        </div>
        <div className="budgetItems__category">
          <h2>Expenses</h2>
          <div>{renderListOfItems(expenses)}</div>
          <form onSubmit={this.handleSubmitNewBudgetItem}>
            <input type="text" className="budgetItems__addNew name" name="name" placeholder="new income item" />
            <input type="number" className="budgetItems__addNew amount" name="amount" placeholder="amount" />
            <input type="submit" className="budgetItems__addNew submit" />
            <input type="checkbox" className="budgetItems__addNew hiddenCheckbox" name="isExpense" checked hidden readOnly />
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
