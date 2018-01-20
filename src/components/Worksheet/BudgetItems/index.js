import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SingleBudgetListItem from '../SingleBudgetListItem';

import './BudgetItems.css';

const handleSubmitNewBudgetItem = (e) => {
  e.preventDefault();
  const name = e.target.name.value.length === 0 ? 'Something mc somethingson' : e.target.name.value;
  const amount = Number.isNaN(parseInt(e.target.amount.value, 10))
    ? 0
    : parseInt(e.target.amount.value, 10);
  const isExpense = e.target.isExpense !== undefined;

  this.props.addBudgetItem(name, amount, isExpense);

  if (isExpense === true) {
    this.expenseForm.reset();
    this.expenseForm.name.focus();
  } else {
    this.incomeForm.reset();
    this.incomeForm.name.focus();
  }
}

function renderListOfItems(items) {
  if (items.length !== 0) {
    return items.map(item => (
      <SingleBudgetListItem
        deleteBudgetItem={this.props.deleteBudgetItem}
        editBudgetItem={this.props.editBudgetItem}
        key={item.id}
        item={item}
      />
    ));
  }
  return <div className="budgetitems__noFieldAdded">Ow. It&apos;s pretty lonely here :(</div>;
}

const BudgetItems = (
  {
    items,
  }:{
    items: Array,
  },
) => (
  <div className="budgetItems__container">
    <div className="budgetItems__category">
      <h2>Income</h2>
      <div>{renderListOfItems(items.filter(item => item.expense === false))}</div>
      <form ref={(el) => { this.incomeForm = el; }} onSubmit={handleSubmitNewBudgetItem}>
        <input type="text" className="budgetItems__addNew name" name="name" placeholder="new income item" />
        <input type="number" className="budgetItems__addNew amount" name="amount" placeholder="amount" />
        <input type="submit" className="budgetItems__addNew submit" />
      </form>
    </div>
    <div className="budgetItems__category">
      <h2>Expenses</h2>
      <div>{renderListOfItems(items.filter(item => item.expense === true))}</div>
      <form ref={(el) => { this.expenseForm = el; }} onSubmit={handleSubmitNewBudgetItem}>
        <input type="text" className="budgetItems__addNew name" name="name" placeholder="new income item" />
        <input type="number" className="budgetItems__addNew amount" name="amount" placeholder="amount" />
        <input type="submit" className="budgetItems__addNew submit" />
        <input type="checkbox" className="budgetItems__addNew hiddenCheckbox" name="isExpense" checked hidden readOnly />
      </form>
    </div>
  </div>
);

// BudgetItems.propTypes = {
//   items: PropTypes.arrayOf(PropTypes.object),
//   addBudgetItem: PropTypes.func.isRequired,
//   editBudgetItem: PropTypes.func.isRequired,
//   deleteBudgetItem: PropTypes.func.isRequired,
// };

BudgetItems.defaultProps = {
  items: [],
};

export default BudgetItems;
